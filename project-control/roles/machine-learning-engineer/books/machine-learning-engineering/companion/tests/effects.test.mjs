import test from 'node:test';
import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { lstat, mkdir, mkdtemp, readFile, readdir, rename, rm, symlink, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { tmpdir } from 'node:os';
import { promisify } from 'node:util';
import { runPort } from '../lib/run.mjs';
import { canonicalJson, sha256Bytes } from '../lib/canonical-json.mjs';
import { PORTS } from '../lib/ports.mjs';

const entryBytes = await readFile(new URL('../fixtures/bl-entry.json', import.meta.url));
const ENTRY_HASH = sha256Bytes(entryBytes);
const execFileAsync = promisify(execFile);
const baseOptions = Object.freeze({
  milestoneId: 'BL-00', priorHash: ENTRY_HASH, incomingState: 'UNORIENTED', outgoingState: 'ORIENTED',
  history: Object.freeze({ records: Object.freeze([]) }),
});

const transitions = [
  ['UNORIENTED','ORIENTED'], ['ORIENTED','CONTRACTED'], ['CONTRACTED','CONTRACTED'],
  ['CONTRACTED','CONTRACTED'], ['CONTRACTED','CONTRACTED'], ['CONTRACTED','ADMISSIBLE'],
  ['ADMISSIBLE','ADMISSIBLE'], ['ADMISSIBLE','RECONSTRUCTIBLE'], ['RECONSTRUCTIBLE','CANDIDATE'],
  ['CANDIDATE','CANDIDATE'], ['CANDIDATE','CANDIDATE'], ['CANDIDATE','TECHNICALLY-QUALIFIED'],
  ['TECHNICALLY-QUALIFIED','TECHNICALLY-QUALIFIED'], ['TECHNICALLY-QUALIFIED','TECHNICALLY-QUALIFIED'],
  ['TECHNICALLY-QUALIFIED','RELEASABLE'], ['RELEASABLE','OPERABLE'], ['OPERABLE','OBSERVED'],
  ['OBSERVED','REQUALIFIED'], ['REQUALIFIED','CONTROLLED'], ['CONTROLLED','RETIRED'], ['RETIRED','REVIEWED'],
];

async function appendAt(target, index, history, overrides = {}, port = 'PORT-MANAGED') {
  const priorHash = index === 0 ? ENTRY_HASH : history[index - 1].hash;
  const milestoneId = `BL-${String(index).padStart(2, '0')}`;
  const accepted = await runPort(port, {
    target, history: { records: history }, milestoneId, priorHash,
    incomingState: transitions[index][0], outgoingState: transitions[index][1], ...overrides,
  });
  const hash = sha256Bytes(canonicalJson(accepted));
  history.push(Object.freeze({ milestoneId, hash }));
  return accepted;
}

test('network, shell, cloud, model, and secret effect requests are denied before any target is created', async () => {
  const sandbox = await mkdtemp(join(tmpdir(), 'mle-effects-'));
  try {
    for (const port of PORTS) {
      for (const mode of ['network', 'shell', 'cloud', 'model', 'secret']) {
        const target = join(sandbox, `${port.toLowerCase()}-${mode}`);
        await assert.rejects(runPort(port, { ...baseOptions, mode, target }), (error) => error.code === 'EFFECT_DENIED');
        await assert.rejects(lstat(target), (error) => error.code === 'ENOENT');
      }
    }
  } finally { await rm(sandbox, { recursive: true, force: true }); }
});

test('repository, traversal, protected absolute, existing directory, and symlink targets fail closed', async () => {
  const sandbox = await mkdtemp(join(tmpdir(), 'mle-paths-'));
  const existing = join(sandbox, 'existing');
  const link = join(sandbox, 'link');
  await mkdir(existing);
  await symlink(existing, link);
  const repositoryTarget = resolve(new URL('../../../../../../../public', import.meta.url).pathname);
  try {
    for (const port of PORTS) {
      for (const target of [repositoryTarget, `${sandbox}/../escape`, '/', existing, link]) {
        await assert.rejects(runPort(port, { ...baseOptions, target }), (error) => ['PATH_DENIED', 'ROOT_UNOWNED'].includes(error.code));
      }
    }
  } finally { await rm(sandbox, { recursive: true, force: true }); }
});

test('an explicit escape probe is denied without creating even a safe-looking target', async () => {
  const sandbox = await mkdtemp(join(tmpdir(), 'mle-escape-mode-'));
  const target = join(sandbox, 'must-not-exist');
  try {
    for (const port of PORTS) {
      await assert.rejects(runPort(port, { ...baseOptions, mode: 'escape', target }), (error) => error.code === 'PATH_DENIED');
    }
    await assert.rejects(lstat(target), (error) => error.code === 'ENOENT');
  } finally { await rm(sandbox, { recursive: true, force: true }); }
});

test('an invalid milestone is rejected before creating an output root', async () => {
  const sandbox = await mkdtemp(join(tmpdir(), 'mle-invalid-milestone-'));
  const target = join(sandbox, 'must-not-exist');
  try {
    await assert.rejects(runPort('PORT-MANAGED', { ...baseOptions, milestoneId: '../../outside', target }), (error) => error.code === 'MILESTONE_UNKNOWN');
    await assert.rejects(lstat(target), (error) => error.code === 'ENOENT');
  } finally { await rm(sandbox, { recursive: true, force: true }); }
});

test('a forged ownership marker symlink cannot turn an existing directory into an output root', async () => {
  const sandbox = await mkdtemp(join(tmpdir(), 'mle-marker-link-'));
  const target = join(sandbox, 'existing');
  const outsideMarker = join(sandbox, 'outside-marker.json');
  await mkdir(target);
  await writeFile(outsideMarker, '{"schema":"mle-companion-output-root/v1"}\n');
  await symlink(outsideMarker, join(target, '.mle-companion-root.json'));
  try {
    await assert.rejects(runPort('PORT-MANAGED', { ...baseOptions, target }), (error) => ['PATH_DENIED', 'ROOT_UNOWNED'].includes(error.code));
    await assert.rejects(lstat(join(target, 'bl-00.json')), (error) => error.code === 'ENOENT');
  } finally { await rm(sandbox, { recursive: true, force: true }); }
});

test('a fresh outside-repository run writes exact canonical bytes and never mutates earlier records', async () => {
  const sandbox = await mkdtemp(join(tmpdir(), 'mle-output-'));
  const target = join(sandbox, 'fresh');
  const history = Object.freeze({ records: Object.freeze([]) });
  const historyBefore = canonicalJson(history);
  try {
    const first = await runPort('PORT-MANAGED', { ...baseOptions, target, history });
    const materialized = await readFile(join(target, 'bl-00.json'), 'utf8');
    assert.equal(materialized, canonicalJson(first));
    assert.equal(sha256Bytes(materialized), sha256Bytes(canonicalJson(first)));
    await runPort('PORT-MANAGED', { ...baseOptions, target, history, mode: 'negative' });
    assert.equal(await readFile(join(target, 'bl-00.json'), 'utf8'), materialized);
    assert.equal(canonicalJson(history), historyBefore);
  } finally { await rm(sandbox, { recursive: true, force: true }); }
});

test('independent fresh targets produce byte-identical records', async () => {
  const sandbox = await mkdtemp(join(tmpdir(), 'mle-repeat-'));
  const first = join(sandbox, 'one');
  const second = join(sandbox, 'two');
  try {
    for (const target of [first, second]) {
      const history = [];
      for (let index = 0; index < 21; index += 1) await appendAt(target, index, history, {}, 'PORT-EDGE');
    }
    for (let index = 0; index < 21; index += 1) {
      const name = `bl-${String(index).padStart(2, '0')}.json`;
      assert.equal(await readFile(join(first, name), 'utf8'), await readFile(join(second, name), 'utf8'), name);
    }
    assert.notEqual(
      await readFile(join(first, '.mle-companion-root.json'), 'utf8'),
      await readFile(join(second, '.mle-companion-root.json'), 'utf8'),
    );
  } finally { await rm(sandbox, { recursive: true, force: true }); }
});

test('direct BL-20 and BL-01 writes into empty roots are rejected before materialization', async () => {
  const sandbox = await mkdtemp(join(tmpdir(), 'mle-skip-'));
  try {
    for (const port of PORTS) {
      for (const [index, name] of [[20, 'terminal'], [1, 'second']]) {
        const target = join(sandbox, `${port.toLowerCase()}-${name}`);
        await assert.rejects(runPort(port, {
          target, history: { records: [] }, milestoneId: `BL-${String(index).padStart(2, '0')}`,
          priorHash: 'f'.repeat(64), incomingState: transitions[index][0], outgoingState: transitions[index][1],
        }), (error) => ['ROOT_UNINITIALIZED', 'DOSSIER_SEQUENCE_INVALID'].includes(error.code));
        await assert.rejects(lstat(join(target, `bl-${String(index).padStart(2, '0')}.json`)), (error) => error.code === 'ENOENT');
      }
    }
  } finally { await rm(sandbox, { recursive: true, force: true }); }
});

test('forged prior hashes and contradictory in-memory history are rejected', async () => {
  const sandbox = await mkdtemp(join(tmpdir(), 'mle-forged-lineage-'));
  try {
    for (const port of PORTS) {
      const target = join(sandbox, port.toLowerCase());
      const history = [];
      await appendAt(target, 0, history, {}, port);
      await assert.rejects(runPort(port, {
        target, history: { records: [{ milestoneId: 'BL-00', hash: 'c'.repeat(64) }] },
        milestoneId: 'BL-01', priorHash: 'b'.repeat(64), incomingState: 'ORIENTED', outgoingState: 'CONTRACTED',
      }), (error) => ['DOSSIER_HASH_INVALID', 'DOSSIER_HISTORY_INVALID'].includes(error.code));
      assert.equal((await readdir(target)).includes('bl-01.json'), false);
    }
  } finally { await rm(sandbox, { recursive: true, force: true }); }
});

test('predecessor-byte tampering is detected before the next append', async () => {
  const sandbox = await mkdtemp(join(tmpdir(), 'mle-tamper-'));
  try {
    for (const port of PORTS) {
      const target = join(sandbox, port.toLowerCase());
      const history = [];
      await appendAt(target, 0, history, {}, port);
      await writeFile(join(target, 'bl-00.json'), '{"tampered":true}\n');
      await assert.rejects(appendAt(target, 1, history, {}, port), (error) => ['DOSSIER_TAMPERED', 'DOSSIER_CANONICAL_INVALID'].includes(error.code));
      assert.equal((await readdir(target)).includes('bl-01.json'), false);
    }
  } finally { await rm(sandbox, { recursive: true, force: true }); }
});

test('a copied regular ownership marker and unrelated content cannot spoof a fresh root', async () => {
  const sandbox = await mkdtemp(join(tmpdir(), 'mle-marker-copy-'));
  const legitimate = join(sandbox, 'legitimate');
  const forged = join(sandbox, 'forged');
  try {
    await appendAt(legitimate, 0, []);
    const marker = await readFile(join(legitimate, '.mle-companion-root.json'));
    await mkdir(forged);
    await writeFile(join(forged, '.mle-companion-root.json'), marker);
    await writeFile(join(forged, 'sentinel.txt'), 'do not touch\n');
    await assert.rejects(runPort('PORT-MANAGED', { ...baseOptions, target: forged }), (error) => ['ROOT_UNOWNED', 'PATH_DENIED'].includes(error.code));
    assert.equal(await readFile(join(forged, 'sentinel.txt'), 'utf8'), 'do not touch\n');
    assert.equal((await readdir(forged)).includes('bl-00.json'), false);
    const script = `
      import { readFile } from 'node:fs/promises';
      import { runPort } from ${JSON.stringify(new URL('../lib/run.mjs', import.meta.url).href)};
      import { canonicalJson, sha256Bytes } from ${JSON.stringify(new URL('../lib/canonical-json.mjs', import.meta.url).href)};
      const bytes = await readFile(${JSON.stringify(join(legitimate, 'bl-00.json'))}, 'utf8');
      const record = JSON.parse(bytes);
      try {
        await runPort('PORT-MANAGED', {
          target: ${JSON.stringify(legitimate)}, history: { records: [{ milestoneId: 'BL-00', hash: sha256Bytes(canonicalJson(record)) }] },
          milestoneId: 'BL-01', priorHash: sha256Bytes(canonicalJson(record)), incomingState: 'ORIENTED', outgoingState: 'CONTRACTED',
        });
        process.exitCode = 2;
      } catch (error) {
        if (error.code !== 'ROOT_UNOWNED') throw error;
        process.stdout.write(error.code);
      }
    `;
    const result = await execFileAsync(process.execPath, ['--input-type=module', '-e', script]);
    assert.equal(result.stdout, 'ROOT_UNOWNED');
    assert.equal((await readdir(legitimate)).includes('bl-01.json'), false);
  } finally { await rm(sandbox, { recursive: true, force: true }); }
});

test('root replacement after initialization is detected by inode and capability recheck', async () => {
  const sandbox = await mkdtemp(join(tmpdir(), 'mle-root-race-'));
  const target = join(sandbox, 'run');
  const moved = join(sandbox, 'moved');
  const history = [];
  try {
    await appendAt(target, 0, history);
    await rename(target, moved);
    await mkdir(target);
    await writeFile(join(target, '.mle-companion-root.json'), await readFile(join(moved, '.mle-companion-root.json')));
    await assert.rejects(appendAt(target, 1, history), (error) => ['ROOT_IDENTITY_CHANGED', 'ROOT_UNOWNED'].includes(error.code));
    assert.equal((await readdir(target)).includes('bl-01.json'), false);
  } finally { await rm(sandbox, { recursive: true, force: true }); }
});

test('negative execution rejects malformed hashes and contradictory chapter state', async () => {
  const sandbox = await mkdtemp(join(tmpdir(), 'mle-negative-contract-'));
  try {
    for (const port of PORTS) {
      const target = join(sandbox, port.toLowerCase());
      await appendAt(target, 0, [], {}, port);
      await assert.rejects(runPort(port, { ...baseOptions, target, mode: 'negative', priorHash: 'not-a-hash' }), (error) => error.code === 'DOSSIER_HASH_INVALID');
      await assert.rejects(runPort(port, { ...baseOptions, target, mode: 'negative', incomingState: 'OBSERVED' }), (error) => error.code === 'DOSSIER_TRANSITION_INVALID');
    }
  } finally { await rm(sandbox, { recursive: true, force: true }); }
});

test('explicit reopen rejects BL-00 because its target evidence cannot already exist', async () => {
  const sandbox = await mkdtemp(join(tmpdir(), 'mle-reopen-'));
  try {
    for (const port of PORTS) {
      const target = join(sandbox, port.toLowerCase());
      await appendAt(target, 0, [], {}, port);
      await assert.rejects(runPort(port, {
        ...baseOptions, target, mode: 'negative', reopenTrigger: 'purpose or intended use',
      }), (error) => error.code === 'DOSSIER_TRANSITION_INVALID');
    }
  } finally { await rm(sandbox, { recursive: true, force: true }); }
});
