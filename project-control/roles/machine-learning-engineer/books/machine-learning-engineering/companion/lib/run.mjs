import { randomUUID } from 'node:crypto';
import { lstat, mkdir, readFile, readdir, realpath, writeFile } from 'node:fs/promises';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { canonicalJson, sha256Bytes } from './canonical-json.mjs';
import {
  CHAPTER_CONTRACTS, ENTRY_HASH, contractForMilestone, createNegativeRecord, createPositiveRecord,
} from './dossier.mjs';
import { PORTS, runThroughPort } from './ports.mjs';

const MODULE_DIR = dirname(fileURLToPath(import.meta.url));
const REPOSITORY_ROOT = resolve(MODULE_DIR, '../../../../../../..');
const ENTRY_FIXTURE_PATH = resolve(MODULE_DIR, '../fixtures/bl-entry.json');
const OWNER_FILE = '.mle-companion-root.json';
const EFFECT_MODES = Object.freeze(['network', 'shell', 'cloud', 'model', 'secret']);
const PROTECTED_TREES = Object.freeze(['/Applications', '/System', '/bin', '/etc', '/sbin', '/usr']);
const OWNED_ROOTS = new Map();

function fail(code, message) {
  throw Object.assign(new Error(message), { code });
}

function within(candidate, root) {
  const relation = relative(root, candidate);
  return relation === '' || (!relation.startsWith('..') && !isAbsolute(relation));
}

async function nearestExisting(target) {
  let cursor = target;
  const suffix = [];
  while (true) {
    try {
      const info = await lstat(cursor);
      if (info.isSymbolicLink()) fail('PATH_DENIED', `symlink path component: ${cursor}`);
      return { ancestor: await realpath(cursor), suffix: suffix.reverse() };
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
      const parent = dirname(cursor);
      if (parent === cursor) fail('PATH_DENIED', 'target has no real ancestor');
      suffix.push(cursor.slice(parent.length + (parent.endsWith(sep) ? 0 : 1)));
      cursor = parent;
    }
  }
}

async function resolveTarget(target) {
  if (typeof target !== 'string' || !isAbsolute(target) || target.split(/[\\/]+/).includes('..')) {
    fail('PATH_DENIED', 'target must be an absolute path without traversal');
  }
  const lexical = resolve(target);
  if (within(lexical, REPOSITORY_ROOT)) fail('PATH_DENIED', 'target must be outside the repository');
  if (lexical === '/' || lexical === '/var' || PROTECTED_TREES.some((root) => within(lexical, root))) {
    fail('PATH_DENIED', 'target is a protected absolute path');
  }
  const { ancestor, suffix } = await nearestExisting(lexical);
  const projected = resolve(ancestor, ...suffix);
  if (within(projected, REPOSITORY_ROOT)) fail('PATH_DENIED', 'resolved target enters the repository');
  return { lexical, projected };
}

async function deriveEntryHash() {
  const info = await lstat(ENTRY_FIXTURE_PATH).catch(() => null);
  if (!info || info.isSymbolicLink() || !info.isFile() || await realpath(ENTRY_FIXTURE_PATH) !== ENTRY_FIXTURE_PATH) {
    fail('FIXTURE_INVALID', 'BL-ENTRY must remain the exact checked-in regular fixture');
  }
  const bytes = await readFile(ENTRY_FIXTURE_PATH, 'utf8');
  let fixture;
  try { fixture = JSON.parse(bytes); } catch { fail('FIXTURE_INVALID', 'BL-ENTRY is not JSON'); }
  const derived = sha256Bytes(bytes);
  if (bytes !== canonicalJson(fixture) || derived !== ENTRY_HASH) {
    fail('FIXTURE_INVALID', 'BL-ENTRY canonical bytes differ from the frozen contract');
  }
  return derived;
}

function markerFor(info, token, entryHash) {
  return {
    device: String(info.dev), entryHash, inode: String(info.ino),
    schema: 'mle-companion-output-root/v2', token,
  };
}

async function verifyOwnedRoot(root) {
  const ownership = OWNED_ROOTS.get(root);
  if (!ownership) fail('ROOT_UNOWNED', 'existing directory has no live companion capability');
  const info = await lstat(root).catch(() => null);
  if (!info || info.isSymbolicLink() || !info.isDirectory()) fail('ROOT_IDENTITY_CHANGED', 'output root is missing, linked, or not a directory');
  const resolved = await realpath(root);
  if (resolved !== ownership.realPath || String(info.dev) !== ownership.device || String(info.ino) !== ownership.inode) {
    fail('ROOT_IDENTITY_CHANGED', 'output root identity changed after initialization');
  }
  const markerPath = join(root, OWNER_FILE);
  const markerInfo = await lstat(markerPath).catch(() => null);
  if (!markerInfo || markerInfo.isSymbolicLink() || !markerInfo.isFile()) fail('ROOT_IDENTITY_CHANGED', 'ownership capability is missing or linked');
  const markerBytes = await readFile(markerPath, 'utf8');
  let marker;
  try { marker = JSON.parse(markerBytes); } catch { fail('ROOT_IDENTITY_CHANGED', 'ownership capability is not JSON'); }
  if (markerBytes !== canonicalJson(marker) || canonicalJson(marker) !== ownership.markerBytes) {
    fail('ROOT_IDENTITY_CHANGED', 'ownership capability bytes changed');
  }
  return ownership;
}

async function initializeRoot(target, entryHash) {
  const { lexical, projected } = await resolveTarget(target);
  const existing = await lstat(lexical).catch((error) => error.code === 'ENOENT' ? null : Promise.reject(error));
  if (existing) fail(existing.isSymbolicLink() ? 'PATH_DENIED' : 'ROOT_UNOWNED', 'BL-00 requires a genuinely fresh target');
  await mkdir(lexical, { recursive: true });
  const realPath = await realpath(lexical);
  const info = await lstat(lexical);
  if (realPath !== projected || info.isSymbolicLink() || !info.isDirectory() || within(realPath, REPOSITORY_ROOT)) {
    fail('PATH_DENIED', 'created target escaped or changed identity');
  }
  if ((await readdir(realPath)).length !== 0) fail('ROOT_UNOWNED', 'fresh target acquired unrelated content during initialization');
  const token = randomUUID();
  const marker = markerFor(info, token, entryHash);
  const markerBytes = canonicalJson(marker);
  await writeFile(join(realPath, OWNER_FILE), markerBytes, { encoding: 'utf8', flag: 'wx' });
  OWNED_ROOTS.set(lexical, {
    device: String(info.dev), inode: String(info.ino), markerBytes, realPath, token,
  });
  await verifyOwnedRoot(lexical);
  return lexical;
}

async function openRoot(target, index, initialize, entryHash) {
  const { lexical, projected } = await resolveTarget(target);
  const info = await lstat(lexical).catch((error) => error.code === 'ENOENT' ? null : Promise.reject(error));
  if (!info) {
    if (!initialize || index !== 0) fail('ROOT_UNINITIALIZED', `${CHAPTER_CONTRACTS[index].milestoneId} requires its ordered predecessor root`);
    return initializeRoot(lexical, entryHash);
  }
  if (info.isSymbolicLink() || !info.isDirectory()) fail('PATH_DENIED', 'target must remain a real directory');
  if (await realpath(lexical) !== projected) fail('ROOT_IDENTITY_CHANGED', 'target real path changed');
  await verifyOwnedRoot(lexical);
  return lexical;
}

function validateHistory(history, records, index) {
  if (!history || !Array.isArray(history.records) || history.records.length !== index) {
    fail('DOSSIER_HISTORY_INVALID', `history must contain exactly BL-00 through BL-${String(index - 1).padStart(2, '0')}`);
  }
  for (let cursor = 0; cursor < index; cursor += 1) {
    const supplied = history.records[cursor];
    const actual = records[cursor];
    if (!supplied || supplied.milestoneId !== actual.milestoneId || supplied.hash !== actual.hash) {
      fail('DOSSIER_HISTORY_INVALID', `history differs from materialized ${actual.milestoneId}`);
    }
  }
}

function exactStateSelection(contract, options, predecessorState) {
  const incomingState = contract.index === 0 ? contract.incomingState : predecessorState;
  if (!contract.incomingStates.includes(incomingState)) fail('DOSSIER_TRANSITION_INVALID', `${contract.milestoneId} cannot consume ${incomingState}`);
  const rollbackSelected = contract.index === 17 && (options.branch === 'rollback' || options.outgoingState === 'ROLLED-BACK');
  const outgoingState = rollbackSelected ? 'ROLLED-BACK' : contract.outgoingState;
  if (!contract.outgoingStates.includes(outgoingState)) fail('DOSSIER_TRANSITION_INVALID', `${contract.milestoneId} cannot produce ${outgoingState}`);
  if (options.incomingState !== undefined && options.incomingState !== incomingState) fail('DOSSIER_TRANSITION_INVALID', `caller incoming state contradicts ${contract.milestoneId}`);
  if (options.outgoingState !== undefined && options.outgoingState !== outgoingState) fail('DOSSIER_TRANSITION_INVALID', `caller outgoing state contradicts ${contract.milestoneId}`);
  if (options.branch && !(contract.index === 17 && ['primary', 'rollback'].includes(options.branch))) fail('DOSSIER_TRANSITION_INVALID', 'branch selector is not legal for this milestone');
  return { incomingState, outgoingState };
}

async function readCanonicalRecord(root, index, priorHash, predecessorState) {
  const contract = CHAPTER_CONTRACTS[index];
  const path = join(root, `${contract.milestoneId.toLowerCase()}.json`);
  const info = await lstat(path).catch(() => null);
  if (!info || info.isSymbolicLink() || !info.isFile()) fail('DOSSIER_TAMPERED', `${contract.milestoneId} is missing, linked, or not a file`);
  const bytes = await readFile(path, 'utf8');
  let record;
  try { record = JSON.parse(bytes); } catch { fail('DOSSIER_CANONICAL_INVALID', `${contract.milestoneId} is not JSON`); }
  if (bytes !== canonicalJson(record)) fail('DOSSIER_CANONICAL_INVALID', `${contract.milestoneId} bytes are not canonical`);
  if (record.milestoneId !== contract.milestoneId || record.priorHash !== priorHash || record.disposition !== 'PASS') {
    fail('DOSSIER_TAMPERED', `${contract.milestoneId} lineage fields changed`);
  }
  if (!contract.incomingStates.includes(record.incomingState) || !contract.outgoingStates.includes(record.outgoingState)) {
    fail('DOSSIER_TAMPERED', `${contract.milestoneId} state fields changed`);
  }
  if (index > 0 && record.incomingState !== predecessorState) fail('DOSSIER_TAMPERED', `${contract.milestoneId} does not consume its predecessor state`);
  const expected = createPositiveRecord({
    milestoneId: contract.milestoneId, priorHash, incomingState: record.incomingState,
    outgoingState: record.outgoingState, predecessorState,
  });
  if (bytes !== canonicalJson(expected)) fail('DOSSIER_TAMPERED', `${contract.milestoneId} bytes differ from its frozen contract`);
  return { hash: sha256Bytes(bytes), milestoneId: contract.milestoneId, outgoingState: record.outgoingState };
}

async function validateLineage(root, index, history, entryHash, { requireCurrent = false } = {}) {
  await verifyOwnedRoot(root);
  const names = await readdir(root);
  const currentName = `${CHAPTER_CONTRACTS[index].milestoneId.toLowerCase()}.json`;
  const expectedNames = [OWNER_FILE, ...CHAPTER_CONTRACTS.slice(0, index).map((contract) => `${contract.milestoneId.toLowerCase()}.json`)];
  if (requireCurrent) expectedNames.push(currentName);
  if (!requireCurrent && names.includes(currentName)) fail('DOSSIER_EXISTS', `${CHAPTER_CONTRACTS[index].milestoneId} already exists`);
  if (names.slice().sort().join('\n') !== expectedNames.slice().sort().join('\n')) {
    fail('ROOT_INVENTORY_INVALID', 'output root contains a gap, duplicate, or unrelated path');
  }
  const records = [];
  let priorHash = entryHash;
  let predecessorState = null;
  const count = index + (requireCurrent ? 1 : 0);
  for (let cursor = 0; cursor < count; cursor += 1) {
    const record = await readCanonicalRecord(root, cursor, priorHash, predecessorState);
    records.push(record);
    priorHash = record.hash;
    predecessorState = record.outgoingState;
  }
  validateHistory(history, records, index);
  return {
    predecessorState: index === 0 ? null : records[index - 1].outgoingState,
    priorHash: index === 0 ? entryHash : records[index - 1].hash,
  };
}

function validatePriorHash(supplied, derived) {
  if (!/^[a-f0-9]{64}$/.test(supplied ?? '') || supplied !== derived) {
    fail('DOSSIER_HASH_INVALID', 'priorHash must equal the exact canonical predecessor hash');
  }
}

async function appendRecord(root, contract, record, history, entryHash) {
  const ownership = await verifyOwnedRoot(root);
  const outputPath = join(root, `${contract.milestoneId.toLowerCase()}.json`);
  const bytes = canonicalJson(record);
  try {
    await writeFile(outputPath, bytes, { encoding: 'utf8', flag: 'wx' });
  } catch (error) {
    if (error.code === 'EEXIST') fail('DOSSIER_EXISTS', `${contract.milestoneId} is immutable once written`);
    throw error;
  }
  const outputInfo = await lstat(outputPath);
  if (outputInfo.isSymbolicLink() || !outputInfo.isFile() || await realpath(outputPath) !== join(ownership.realPath, `${contract.milestoneId.toLowerCase()}.json`)) {
    fail('PATH_DENIED', 'materialized record escaped or changed type');
  }
  if (await readFile(outputPath, 'utf8') !== bytes) fail('DOSSIER_TAMPERED', 'record changed during materialization');
  await verifyOwnedRoot(root);
  await validateLineage(root, contract.index, history, entryHash, { requireCurrent: true });
}

export async function runPort(port, options = {}) {
  if (!PORTS.includes(port)) fail('PORT_UNKNOWN', `unknown port: ${port}`);
  if (EFFECT_MODES.includes(options.mode)) fail('EFFECT_DENIED', `${options.mode} effects are forbidden`);
  if (options.mode === 'escape') fail('PATH_DENIED', 'escape probes never create an output root');
  const contract = contractForMilestone(options.milestoneId);
  const history = options.history ?? { records: [] };
  const historyBytes = canonicalJson(history);
  if (contract.index === 0) validateHistory(history, [], 0);
  const entryHash = await deriveEntryHash();
  const root = await openRoot(options.target, contract.index, options.mode !== 'negative', entryHash);
  const lineage = await validateLineage(root, contract.index, history, entryHash, { requireCurrent: options.mode === 'negative' });
  validatePriorHash(options.priorHash, lineage.priorHash);
  const states = exactStateSelection(contract, options, lineage.predecessorState);
  const recordOptions = {
    ...options, milestoneId: contract.milestoneId, priorHash: lineage.priorHash,
    incomingState: states.incomingState, outgoingState: states.outgoingState,
    predecessorState: lineage.predecessorState,
  };
  const result = runThroughPort(port, options.mode === 'negative'
    ? createNegativeRecord(recordOptions)
    : createPositiveRecord(recordOptions));
  if (options.mode !== 'negative') await appendRecord(root, contract, result, history, entryHash);
  if (canonicalJson(history) !== historyBytes) fail('DOSSIER_MUTATION', 'supplied history changed');
  return result;
}
