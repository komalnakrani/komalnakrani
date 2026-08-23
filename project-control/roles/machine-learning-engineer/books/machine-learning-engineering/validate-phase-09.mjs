#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { access, cp, mkdir, mkdtemp, readFile, readdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const BOOK = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering';
const ROLE = 'project-control/roles/machine-learning-engineer';
const FACTORY = 'project-control/role-factory/FACTORY-STATE.md';
const SPEC = 'docs/superpowers/specs/2026-08-23-machine-learning-engineer-whole-book-qa-design.md';
const PLAN = 'docs/superpowers/plans/2026-08-23-machine-learning-engineer-phase-09.md';
const FINAL_VERIFICATION = `${BOOK}/phase-09-verification.json`;

export const PHASE08_CHECKPOINT = 'aed6f459d64b092ed4377c7da8f88dcc6c09d726';
export const PHASE08_CLOSURE = '5f862da964e6c74f582737a3eb4b68cb9c6c5824';

export const FROZEN_ENTRY = Object.freeze({
  [SPEC]: '3b256a6dac36b31e39e9a402f48a8641195b177fcf083e4ee65cc53ce2fda3b5',
  [PLAN]: '5d46b79f03b4eee04a3d091f0e1f46956cefddd31eb17d4e30f62982008c168e',
  [`${ROLE}/reviews/phase-09/task-00-plan.md`]: '1a7cf2ec36a0749956dd7f9049bdd88134bdfefa93f509deb38fb6a2cea68f32',
  [`${ROLE}/reviews/phase-09/task-00-plan-repair.md`]: '39d2a56da9c233b4262430dddaa12d9bf2ea5ad9718e05af3303178eb3ff5942',
  [`${BOOK}/phase-08-verification.json`]: '67b9ba41bdef4c048b1f74777e18ab18455ef1eedbdc491ce2a9f70cc6eb8493',
  [`${BOOK}/manuscript/manuscript-register.json`]: 'b75553369ec89a65d32d97a9d05e372e29a4404785cb66c536e2b46466a430be',
  [`${BOOK}/manuscript/verification-report.md`]: '62d7bb6e348ca1d11592158edfad347b14fc088f9f7726ad9e59d6be806f1c56',
  [`${BOOK}/manuscript/phase-09-handoff.md`]: '3137756498857e21c319cd8d75b7d462176c65867db59b99a17b0d826aef874d',
  [`${ROLE}/reviews/phase-08/task-07-hostile-integration.md`]: '6386255079134df48823259febd576567ce1185a249d93693d00612384f93912',
  [`${BOOK}/validate-phase-08.mjs`]: '3a31bb40a68e35d0a7994a4ce7fa4ed62e66d512f8e9b71d3cb2113d91b4eb62',
  [`${BOOK}/validate-phase-08.test.mjs`]: '3d00bdd770cfb71c9a2f3b2677d0e6794b1327912cdda8b07341150605c2db54',
});

export const EXPECTED_COUNTS = Object.freeze({
  parts: 7,
  chapters: 21,
  claims: 63,
  sources: 46,
  sourceClaimEdges: 160,
  cases: 12,
  caseChapterEdges: 104,
  claimCaseEdges: 198,
  caseSourceUses: 34,
  architectureClaims: 22,
  boundaries: 17,
  scenarios: 10,
  domains: 12,
  clusters: 8,
  ports: 5,
  chapterPortAssertions: 105,
  partExitChecks: 35,
  states: 17,
  legalTransitions: 19,
  forbiddenTransitions: 2,
  reopenTriggers: 4,
  appendices: 7,
  frontMatterItems: 10,
  closingItems: 5,
  sections: 168,
  labs: 42,
  assessments: 21,
  visuals: 25,
  handoffs: 21,
  imagegenCandidates: 4,
});

export const KNOWN_OPENING_FINDINGS = Object.freeze([
  { id: 'P09-OPEN-01', audit: 'continuity-originality', requiredUntilDisposed: true, summary: 'Remove reader-facing factory, blueprint, phase-control, production-specification, and private-package instructions.' },
  { id: 'P09-OPEN-02', audit: 'continuity-originality', requiredUntilDisposed: true, summary: 'Reconcile Chapter N, MLE-CH-N, and title-only H1 and metadata conventions across both lane seams.' },
  { id: 'P09-OPEN-03', audit: 'continuity-originality', requiredUntilDisposed: true, summary: 'Reconstruct classified overlaps after identifier removal and inspect the known Chapter 02-05 and Chapter 06-07 repeated frames.' },
  { id: 'P09-OPEN-04', audit: 'companion-furniture-visual-readiness', requiredUntilDisposed: true, summary: 'Freeze one textual path contract for all 25 visual records and four ungenerated raster candidates.' },
  { id: 'P09-OPEN-05', audit: 'evidence-currentness-authority', requiredUntilDisposed: true, summary: 'Recheck ten living and two volatile sources by version, date, limitation, retrieval meaning, and next trigger.' },
  { id: 'P09-OPEN-06', audit: 'coverage-depth', requiredUntilDisposed: true, summary: 'Replay historical Phase 08 263/263 at its checkpoint and validate the current closed lifecycle tree separately.' },
]);

export const EXPECTED_REVIEW_IDENTITIES = Object.freeze({
  'TASK-00': { producerIdentity: '/root', reviewerIdentity: '/root/mle_p9_plan_review' },
  'TASK-01': { producerIdentity: '/root/mle_p9_bootstrap', reviewerIdentity: '/root/mle_p9_bootstrap_review' },
  'TASK-02': { producerIdentity: '/root/mle_p9_coverage', reviewerIdentity: '/root/mle_p9_coverage_review' },
  'TASK-03': { producerIdentity: '/root/mle_p9_continuity', reviewerIdentity: '/root/mle_p9_continuity_review' },
  'TASK-04': { producerIdentity: '/root/mle_p9_evidence', reviewerIdentity: '/root/mle_p9_evidence_review' },
  'TASK-05': { producerIdentity: '/root/mle_p9_systems', reviewerIdentity: '/root/mle_p9_systems_review' },
  'TASK-06': { producerIdentity: '/root/mle_p9_finding_integration', reviewerIdentity: '/root/mle_p9_finding_review' },
  'TASK-07': { producerIdentity: '/root/mle_p9_integration', reviewerIdentity: '/root/mle_p9_integration_review' },
  'TASK-08': { producerIdentity: '/root/mle_p9_hostile_fixture', reviewerIdentity: '/root/mle_p9_hostile_review' },
});

const REVIEW_NAMES = [
  'task-00-plan.md', 'task-00-plan-repair.md', 'task-01-bootstrap.md', 'task-01-bootstrap-repair.md',
  'task-02-coverage-depth.md', 'task-02-coverage-depth-repair.md',
  'task-03-continuity-originality.md', 'task-03-continuity-originality-repair.md',
  'task-04-evidence-currentness-authority.md', 'task-04-evidence-currentness-authority-repair.md',
  'task-05-systems-readiness.md', 'task-05-systems-readiness-repair.md',
  'task-06-finding-freeze.md', 'task-06-finding-freeze-repair.md',
  'task-07-canonical-integration.md', 'task-07-canonical-integration-repair.md',
  'task-08-hostile-integration.md', 'task-08-hostile-integration-repair.md',
];

export const REVIEW_CONTRACTS = Object.freeze(Object.fromEntries(
  Array.from({ length: 9 }, (_, index) => {
    const task = `TASK-${String(index).padStart(2, '0')}`;
    return [`${ROLE}/reviews/phase-09/${REVIEW_NAMES.find((name) => name.startsWith(`task-${String(index).padStart(2, '0')}-`) && !name.endsWith('-repair.md'))}`, {
      taskId: task,
      ...EXPECTED_REVIEW_IDENTITIES[task],
    }];
  }),
));

const QA_PATHS = Object.freeze([
  `${BOOK}/qa/finding-register.json`,
  `${BOOK}/qa/coverage-depth.md`,
  `${BOOK}/qa/continuity-originality.md`,
  `${BOOK}/qa/evidence-currentness-authority.md`,
  `${BOOK}/qa/companion-furniture-visual-readiness.md`,
  `${BOOK}/qa/revision-ledger.json`,
  `${BOOK}/qa/phase-09-register.json`,
  `${BOOK}/qa/verification-report.md`,
  `${BOOK}/qa/phase-10-handoff.md`,
]);

const VALIDATOR_PATHS = [`${BOOK}/validate-phase-09.mjs`, `${BOOK}/validate-phase-09.test.mjs`];
const TASK00_PATHS = [`${ROLE}/reviews/phase-09/task-00-plan.md`, `${ROLE}/reviews/phase-09/task-00-plan-repair.md`];
const AUTHORITY_PATHS = [FACTORY, `${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`, `${ROLE}/issues/phase-09-book-qa.md`];

export const ALLOWED_BOOTSTRAP_DIRT = Object.freeze([
  ...AUTHORITY_PATHS,
  ...VALIDATOR_PATHS,
]);

const STAGES = new Set(['bootstrap', 'audit', 'repair', 'integration', 'pre-hostile', 'pre-close', 'final-content', 'final']);
const BASE_ALLOWED = new Set([...VALIDATOR_PATHS, ...TASK00_PATHS]);

function error(code, message, path = null) {
  return { code, message, ...(path ? { path } : {}) };
}

export function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

function sameArray(actual, expected) {
  return Array.isArray(actual) && actual.length === expected.length && actual.every((value, index) => value === expected[index]);
}

function sameSet(actual, expected) {
  return sameArray([...actual].sort(), [...expected].sort());
}

async function readRecord(root, path, required = false) {
  try {
    const text = await readFile(join(root, path), 'utf8');
    return { path, text, bytes: Buffer.byteLength(text), sha256: sha256(text) };
  } catch (caught) {
    if (required) throw new Error(`required Phase 09 input missing: ${path}: ${caught.message}`);
    return null;
  }
}

async function listFiles(root, relativeRoot) {
  const result = [];
  async function walk(path) {
    let entries;
    try { entries = await readdir(join(root, path), { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      const child = path === '.' ? entry.name : `${path}/${entry.name}`;
      if (entry.isDirectory()) await walk(child);
      else if (entry.isFile() || entry.isSymbolicLink()) result.push(child);
    }
  }
  await walk(relativeRoot);
  return result.sort();
}

function deriveCounts(blueprintRegister) {
  const unique = (items) => new Set(items).size;
  const directlyDerived = {
    parts: unique(blueprintRegister.chapters.map((chapter) => chapter.partId)),
    chapters: blueprintRegister.chapters.length,
    claims: blueprintRegister.claimTeaching.length,
    sources: unique(blueprintRegister.sourceUses.map((item) => item.sourceId)),
    sourceClaimEdges: blueprintRegister.sourceUses.length,
    cases: blueprintRegister.caseUses.length,
    caseChapterEdges: blueprintRegister.caseUses.reduce((sum, item) => sum + item.chapterIds.length, 0),
    claimCaseEdges: blueprintRegister.caseUses.reduce((sum, item) => sum + item.claimIds.length, 0),
    caseSourceUses: blueprintRegister.caseUses.reduce((sum, item) => sum + item.sourceUses.length, 0),
    ports: unique(blueprintRegister.ports.map((item) => item.portId)),
    chapterPortAssertions: blueprintRegister.ports.length,
    sections: blueprintRegister.sections.length,
    labs: blueprintRegister.labs.length,
    assessments: blueprintRegister.assessment.length,
    visuals: blueprintRegister.visuals.length,
    handoffs: blueprintRegister.handoffs.length,
    appendices: blueprintRegister.furniture.appendices.length,
    frontMatterItems: blueprintRegister.furniture.benchZero.length,
    closingItems: blueprintRegister.furniture.closing.length,
    imagegenCandidates: blueprintRegister.visuals.filter((item) => item.kind === 'imagegen-candidate').length,
  };
  // The remaining frozen projections are bound by the exact blueprint-register
  // bytes and its independently accepted reverse projections.
  return { ...blueprintRegister.counts, ...directlyDerived };
}

export async function loadRepositorySnapshot(root, options = {}) {
  const stage = options.stage ?? 'bootstrap';
  const files = {};
  const required = [
    ...Object.keys(FROZEN_ENTRY), ...AUTHORITY_PATHS, ...VALIDATOR_PATHS,
    `${ROLE}/issues/phase-08-manuscript.md`, `${BOOK}/blueprints/blueprint-register.json`,
  ];
  for (const path of [...new Set(required)]) files[path] = await readRecord(root, path, true);

  const phase08Verification = JSON.parse(files[`${BOOK}/phase-08-verification.json`].text);
  const manuscriptRegister = JSON.parse(files[`${BOOK}/manuscript/manuscript-register.json`].text);
  const blueprintRegister = JSON.parse(files[`${BOOK}/blueprints/blueprint-register.json`].text);
  for (const binding of [...(phase08Verification.frozenInputs ?? []), ...(phase08Verification.artifacts ?? [])]) {
    if (!files[binding.path]) {
      const loaded = await readRecord(root, binding.path, false);
      if (loaded) files[binding.path] = loaded;
    }
  }

  const [qaInventory, reviewInventory] = await Promise.all([
    listFiles(root, `${BOOK}/qa`),
    listFiles(root, `${ROLE}/reviews/phase-09`),
  ]);
  const phase09Paths = [...new Set([...VALIDATOR_PATHS, ...qaInventory, ...reviewInventory])].sort();
  for (const path of phase09Paths) {
    if (!files[path]) {
      const loaded = await readRecord(root, path, false);
      if (loaded) files[path] = loaded;
    }
  }

  return {
    root: resolve(root), stage, files, phase08Verification, manuscriptRegister, blueprintRegister,
    derivedCounts: deriveCounts(blueprintRegister), phase09Paths,
    qaInventory: qaInventory.filter((path) => QA_PATHS.includes(path)),
    reviewInventory,
    git: options.git ? structuredClone(options.git) : null,
    github: options.github ? structuredClone(options.github) : null,
    historicalReplay: options.historicalReplay ? structuredClone(options.historicalReplay) : null,
  };
}

function validateFrozenEntry(snapshot) {
  const errors = [];
  for (const [path, expected] of Object.entries(FROZEN_ENTRY)) {
    if (snapshot.files[path]?.sha256 !== expected) errors.push(error('FROZEN_ENTRY_HASH', `expected ${expected}`, path));
  }
  return errors;
}

function validateCounts(snapshot) {
  const errors = [];
  for (const [name, expected] of Object.entries(EXPECTED_COUNTS)) {
    if (snapshot.derivedCounts[name] !== expected
        || snapshot.phase08Verification.counts?.[name] !== expected
        || snapshot.manuscriptRegister.counts?.derived?.[name] !== expected) {
      errors.push(error(`COUNT_${name}`, `expected exact current closed-tree ${name}=${expected}`));
    }
  }
  return errors;
}

function validateCurrentPhase08Bindings(snapshot) {
  const errors = [];
  if (snapshot.phase08Verification.schema !== 'mle-phase-08-final-verification/v1') {
    errors.push(error('PHASE08_CURRENT_SCHEMA', 'terminal Phase 08 verification schema drift'));
  }
  const bindings = [...(snapshot.phase08Verification.frozenInputs ?? []), ...(snapshot.phase08Verification.artifacts ?? [])];
  for (const binding of bindings) {
    const loaded = snapshot.files[binding.path];
    if (!loaded || loaded.sha256 !== binding.sha256 || loaded.bytes !== binding.bytes) {
      errors.push(error('PHASE08_CURRENT_BINDING', 'current closed-tree bytes differ from terminal Phase 08 verification', binding.path));
    }
  }
  return errors;
}

function validateHistoricalReplay(replay) {
  if (!replay) return [];
  const exact = replay.schema === 'mle-phase-08-historical-replay/v1'
    && replay.checkpoint === PHASE08_CHECKPOINT
    && replay.treeKind === 'historical-pre-close'
    && replay.currentTreeUsed === false
    && replay.finalVerificationPresent === false
    && replay.tests === 263 && replay.pass === 263 && replay.fail === 0
    && replay.skipped === 0 && replay.todo === 0;
  return exact ? [] : [error('PHASE08_HISTORICAL_REPLAY', 'historical replay must be isolated, pre-close, and exactly 263/263')];
}

function validateAuthorities(snapshot, stage) {
  const errors = [];
  const finalStage = stage === 'final-content' || stage === 'final';
  for (const path of AUTHORITY_PATHS) {
    const text = snapshot.files[path]?.text ?? '';
    const active = /Phase 09[^\n]{0,100}\bactive\b/i.test(text) || /active[^\n]{0,100}#86/i.test(text);
    const inactive = /Phase 09[^\n]{0,100}\binactive\b/i.test(text) || /Phase 09[^\n]{0,100}\bnot started\b/i.test(text);
    if (active && inactive) errors.push(error('PHASE09_AUTHORITY_CONTRADICTION', 'an authority cannot project Phase 09 as both active and inactive', path));
    if (!finalStage && (!active || !/#86/.test(text))) errors.push(error('PHASE09_AUTHORITY', 'all four authorities must project active Phase 09 under #86', path));
    if (finalStage && !/Phase 09[^\n]{0,100}\b(?:complete|completed|done)\b/i.test(text)) errors.push(error('PHASE09_FINAL_AUTHORITY', 'closure authority must project Phase 09 complete', path));

    const phase10Stopped = /Phase 10[\s\S]{0,180}(?:inactive|not started)/i.test(text);
    const phase10Started = /Phase 10\s*(?:visuals?)?\s*(?:is|:)?\s*(?:active|started|in progress)/i.test(text);
    if (!phase10Stopped || phase10Started) errors.push(error('PHASE10_INACTIVE', 'Phase 10 must remain inactive', path));

    const catalogStopped = /catalog position 6[\s\S]{0,180}(?:not started|inactive)/i.test(text);
    const catalogStarted = /catalog position 6\s*(?:is|:)?\s*started/i.test(text);
    if (!catalogStopped || catalogStarted) errors.push(error('CATALOG6_STOPPED', 'catalog position 6 must remain not started', path));
  }
  return errors;
}

function validateGithub(snapshot, stage) {
  if (!snapshot.github) return [];
  const errors = [];
  const expected = {
    79: ['OPEN', ['role:machine-learning-engineer', 'status:in-progress']],
    85: ['CLOSED', ['phase:08-manuscript', 'role:machine-learning-engineer', 'status:done']],
    86: [(stage === 'final-content' || stage === 'final') ? 'CLOSED' : 'OPEN', (stage === 'final-content' || stage === 'final')
      ? ['phase:09-book-qa', 'role:machine-learning-engineer', 'status:done']
      : ['phase:09-book-qa', 'role:machine-learning-engineer', 'status:in-progress']],
  };
  if (snapshot.github[79]?.state !== expected[79][0] || !sameArray(snapshot.github[79]?.labels, expected[79][1])) errors.push(error('GITHUB_ROOT', '#79 state or labels drift'));
  if (snapshot.github[85]?.state !== expected[85][0] || !sameArray(snapshot.github[85]?.labels, expected[85][1])) errors.push(error('GITHUB_PHASE08', '#85 state or labels drift'));
  if (snapshot.github[86]?.state !== expected[86][0] || !sameArray(snapshot.github[86]?.labels, expected[86][1])) errors.push(error('GITHUB_PHASE09', '#86 state or labels drift'));
  if (snapshot.github[79]?.body !== snapshot.files[`${ROLE}/issues/root.md`]?.text
      || snapshot.github[85]?.body !== snapshot.files[`${ROLE}/issues/phase-08-manuscript.md`]?.text
      || snapshot.github[86]?.body !== snapshot.files[`${ROLE}/issues/phase-09-book-qa.md`]?.text) {
    errors.push(error('GITHUB_BODY', 'live #79/#85/#86 bodies must byte-equal local authorities'));
  }
  return errors;
}

function validateGit(snapshot, stage) {
  if (!snapshot.git) return [];
  const errors = [];
  if (snapshot.git.branch !== 'main' || snapshot.git.head !== snapshot.git.originMain || snapshot.git.head !== snapshot.git.remoteMain) {
    errors.push(error('GIT_MAIN_EQUALITY', 'main, origin/main, and live remote main must be equal'));
  }
  if (stage === 'bootstrap' && (!sameSet(snapshot.git.changedPaths ?? [], ALLOWED_BOOTSTRAP_DIRT) || snapshot.git.clean !== false)) {
    errors.push(error('GIT_BOOTSTRAP_DIRT', 'bootstrap dirt must be exactly four authorities plus validator and tests'));
  }
  if (stage === 'final' && (!snapshot.git.clean || (snapshot.git.changedPaths ?? []).length > 0)) errors.push(error('GIT_FINAL_CLEAN', 'final stage requires clean Git equality'));
  return errors;
}

function stopBoundaryPath(path) {
  return /^public\/.*machine-learning-engineering.*\.(?:png|svg|webp|pdf)$/i.test(path)
    || /^output\/.*machine-learning-engineering.*\.pdf$/i.test(path)
    || /^content\/publications\/machine-learning-engineering(?:\/|$)/i.test(path)
    || /^content\/courses\/machine-learning-engineering(?:\/|$)/i.test(path)
    || /(?:certification|abhyaas)/i.test(path)
    || new RegExp(`^${BOOK.replaceAll('/', '\\/')}\/volume-02(?:\/|$)`, 'i').test(path)
    || /^project-control\/roles\/(?:data-engineer|mlops-engineer|ai-research-scientist)\//i.test(path);
}

function validateStopBoundary(snapshot) {
  const errors = [];
  for (const path of [...(snapshot.git?.changedPaths ?? []), ...snapshot.phase09Paths]) {
    if (stopBoundaryPath(path)) errors.push(error('STOP_BOUNDARY', 'Phase 09 may not start visual, PDF, publication, course, Abhyaas, volume 2, catalog 6, or next-role output', path));
  }
  return errors;
}

function allowedAtStage(stage) {
  const allowed = new Set(BASE_ALLOWED);
  const maxReviewTask = {
    bootstrap: 0, audit: 5, repair: 6, integration: 7,
    'pre-hostile': 7, 'pre-close': 8, 'final-content': 8, final: 8,
  }[stage];
  for (const name of REVIEW_NAMES) {
    const task = Number(name.match(/^task-(\d{2})-/)?.[1]);
    if (task <= maxReviewTask) allowed.add(`${ROLE}/reviews/phase-09/${name}`);
  }
  if (['audit', 'repair', 'integration', 'pre-hostile', 'pre-close', 'final-content', 'final'].includes(stage)) {
    for (const path of QA_PATHS.slice(1, 5)) allowed.add(path);
  }
  if (['repair', 'integration', 'pre-hostile', 'pre-close', 'final-content', 'final'].includes(stage)) allowed.add(QA_PATHS[0]);
  if (['integration', 'pre-hostile', 'pre-close', 'final-content', 'final'].includes(stage)) {
    for (const path of QA_PATHS.slice(5)) allowed.add(path);
  }
  if (stage === 'final-content' || stage === 'final') allowed.add(FINAL_VERIFICATION);
  return allowed;
}

function validateInventory(snapshot, stage, options) {
  const errors = [];
  const allowed = allowedAtStage(stage);
  for (const path of snapshot.phase09Paths) {
    if (!allowed.has(path)) errors.push(error('STAGE_PATH_FORBIDDEN', 'artifact belongs to a later Phase 09 stage', path));
  }
  if (stage !== 'final-content' && stage !== 'final' && snapshot.phase09Paths.includes(FINAL_VERIFICATION)) {
    errors.push(error('FINAL_VERIFICATION_TIMING', 'final verification may not contaminate a pre-close package', FINAL_VERIFICATION));
  }
  if (options.relaxMissingStageArtifacts) return errors;
  if (stage === 'bootstrap') {
    for (const path of VALIDATOR_PATHS) if (!snapshot.phase09Paths.includes(path)) errors.push(error('BOOTSTRAP_FILE_MISSING', 'bootstrap requires validator and test', path));
    if (snapshot.qaInventory.length > 0) errors.push(error('BOOTSTRAP_QA_ABSENT', 'no QA output may exist before Task 01 acceptance'));
  }
  const requiredByStage = {
    repair: [...QA_PATHS.slice(0, 5), ...[2, 3, 4, 5, 6].map((task) => `${ROLE}/reviews/phase-09/${REVIEW_NAMES.find((name) => name.startsWith(`task-${String(task).padStart(2, '0')}-`) && !name.endsWith('-repair.md'))}`)],
    integration: [...QA_PATHS, `${ROLE}/reviews/phase-09/task-07-canonical-integration.md`],
    'pre-hostile': [...QA_PATHS, `${ROLE}/reviews/phase-09/task-07-canonical-integration.md`],
    'pre-close': [...QA_PATHS, `${ROLE}/reviews/phase-09/task-08-hostile-integration.md`],
    'final-content': [...QA_PATHS, `${ROLE}/reviews/phase-09/task-08-hostile-integration.md`, FINAL_VERIFICATION],
    final: [...QA_PATHS, `${ROLE}/reviews/phase-09/task-08-hostile-integration.md`, FINAL_VERIFICATION],
  };
  for (const path of requiredByStage[stage] ?? []) {
    if (!snapshot.phase09Paths.includes(path)) errors.push(error('STAGE_PATH_MISSING', `required by ${stage}`, path));
  }
  return errors;
}

export function validateReviewRecord(review, expectedIdentity, context = {}) {
  const errors = [];
  const required = ['schema', 'taskId', 'producerIdentity', 'reviewerIdentity', 'reviewedAt', 'artifactBindings', 'specVerdict', 'qualityVerdict'];
  if (!review || required.some((key) => !Object.hasOwn(review, key)) || review.schema !== 'mle-phase-09-review/v1' || !Array.isArray(review.artifactBindings)) {
    errors.push(error('REVIEW_SCHEMA', 'review record schema is incomplete'));
    return errors;
  }
  if (review.producerIdentity === review.reviewerIdentity) errors.push(error('REVIEW_SELF_APPROVAL', 'producer may not self-review'));
  if (!expectedIdentity || review.producerIdentity !== expectedIdentity.producerIdentity || review.reviewerIdentity !== expectedIdentity.reviewerIdentity) {
    errors.push(error('REVIEW_IDENTITY', 'review identity drift'));
  }
  const failure = review.priorVerdict === 'SPEC COMPLIANCE FAIL / QUALITY CHANGES REQUESTED';
  const hasRepair = Boolean(review.repairPath || review.repairSha256 || review.reacceptedBy || review.reacceptedAt);
  if (!failure && hasRepair) errors.push(error('REVIEW_REPAIR_CHAIN', 'repair fields require a preserved failed base review'));
  if (failure) {
    const exactRepair = context.expectedRepairPath ? review.repairPath === context.expectedRepairPath : /-repair\.md$/.test(review.repairPath ?? '');
    const later = Number.isFinite(Date.parse(review.reacceptedAt)) && Date.parse(review.reacceptedAt) > Date.parse(review.reviewedAt);
    if (!exactRepair || !/^[0-9a-f]{64}$/.test(review.repairSha256 ?? '') || review.reacceptedBy !== review.reviewerIdentity || !later) {
      errors.push(error('REVIEW_REPAIR_CHAIN', 'failure requires exact paired repair and same-reviewer later reacceptance'));
    }
  }
  if (review.specVerdict !== 'SPEC COMPLIANCE PASS' || review.qualityVerdict !== 'QUALITY APPROVED') errors.push(error('REVIEW_VERDICT', 'accepted review must end exact PASS/APPROVED'));
  return errors;
}

export function validateFindingRegister(register) {
  const errors = [];
  if (!register || register.schema !== 'mle-phase-09-finding-register/v1' || !Array.isArray(register.openingFindings)) {
    return [error('FINDING_REGISTER_SCHEMA', 'finding register schema is incomplete')];
  }
  const byId = new Map(register.openingFindings.map((finding) => [finding.id, finding]));
  if (byId.size !== KNOWN_OPENING_FINDINGS.length || register.openingFindings.length !== KNOWN_OPENING_FINDINGS.length) {
    errors.push(error('OPENING_FINDING_GATE', 'the finding freeze must contain each mandatory opening RED exactly once'));
  }
  for (const expected of KNOWN_OPENING_FINDINGS) {
    const finding = byId.get(expected.id);
    const validDisposition = ['open', 'accepted', 'disproved', 'closed'].includes(finding?.disposition);
    const dispositionBound = finding?.disposition === 'open' || (Array.isArray(finding?.evidence) && finding.evidence.length > 0);
    if (!finding || finding.audit !== expected.audit || !validDisposition || !dispositionBound) {
      errors.push(error('OPENING_FINDING_GATE', `${expected.id} must remain assigned and evidence-bound until disposed`));
    }
  }
  return errors;
}

export function validatePhase09Snapshot(snapshot, options = {}) {
  const stage = options.stage ?? snapshot.stage ?? 'bootstrap';
  if (!STAGES.has(stage)) return [error('STAGE_UNKNOWN', `unsupported Phase 09 stage ${stage}`)];
  let findingErrors = [];
  const findingPath = `${BOOK}/qa/finding-register.json`;
  if (snapshot.files[findingPath]) {
    try { findingErrors = validateFindingRegister(JSON.parse(snapshot.files[findingPath].text)); }
    catch { findingErrors = [error('FINDING_REGISTER_SCHEMA', 'finding register must be valid JSON', findingPath)]; }
  }
  return [
    ...validateFrozenEntry(snapshot),
    ...validateCounts(snapshot),
    ...validateCurrentPhase08Bindings(snapshot),
    ...validateHistoricalReplay(snapshot.historicalReplay),
    ...validateAuthorities(snapshot, stage),
    ...validateGithub(snapshot, stage),
    ...validateGit(snapshot, stage),
    ...validateInventory(snapshot, stage, options),
    ...findingErrors,
    ...validateStopBoundary(snapshot),
  ];
}

function parseTestSummary(output) {
  return Object.fromEntries([...output.matchAll(/^# (tests|pass|fail|skipped|todo) (\d+)\s*$/gm)].map((match) => [match[1], Number(match[2])]));
}

export async function runHistoricalPhase08Replay(repositoryRoot) {
  const extracted = await mkdtemp(join(tmpdir(), 'mle-p8-pre-close-replay-'));
  const archive = join(extracted, 'checkpoint.tar');
  try {
    execFileSync('git', ['archive', '--format=tar', '--output', archive, PHASE08_CHECKPOINT], { cwd: repositoryRoot, stdio: ['ignore', 'pipe', 'pipe'] });
    execFileSync('tar', ['-xf', archive, '-C', extracted], { stdio: ['ignore', 'pipe', 'pipe'] });
    // The accepted pre-close package included three intentionally ignored lane
    // manifests. Git archives cannot carry ignored bytes, so reconstruct those
    // exact package members only after binding them to terminal Phase 08
    // verification. The final verification itself is never copied into the
    // historical tree.
    const terminalVerification = JSON.parse(await readFile(join(repositoryRoot, `${BOOK}/phase-08-verification.json`), 'utf8'));
    const scratchPaths = ['lane-a', 'lane-b', 'lane-c'].map(
      (lane) => `.superpowers/sdd/2026-08-22-machine-learning-engineer-phase-08/${lane}-manifest.json`,
    );
    for (const path of scratchPaths) {
      const sourceBytes = await readFile(join(repositoryRoot, path));
      const binding = terminalVerification.artifacts?.find((item) => item.path === path);
      if (!binding || binding.sha256 !== sha256(sourceBytes) || binding.bytes !== sourceBytes.byteLength) {
        throw new Error(`historical scratch binding drift: ${path}`);
      }
      await mkdir(dirname(join(extracted, path)), { recursive: true });
      await cp(join(repositoryRoot, path), join(extracted, path));
    }
    let finalVerificationPresent = true;
    try { await access(join(extracted, `${BOOK}/phase-08-verification.json`)); } catch { finalVerificationPresent = false; }
    const env = { ...process.env, MLE_PHASE08_FIXTURE_REPO: extracted };
    delete env.NODE_TEST_CONTEXT;
    const output = execFileSync(process.execPath, ['--test', `${BOOK}/validate-phase-08.test.mjs`], {
      cwd: extracted, env, encoding: 'utf8', maxBuffer: 96 * 1024 * 1024, stdio: ['ignore', 'pipe', 'pipe'],
    });
    const summary = parseTestSummary(output);
    return {
      schema: 'mle-phase-08-historical-replay/v1', checkpoint: PHASE08_CHECKPOINT,
      treeKind: 'historical-pre-close', currentTreeUsed: false, finalVerificationPresent,
      tests: summary.tests, pass: summary.pass, fail: summary.fail,
      skipped: summary.skipped, todo: summary.todo,
    };
  } finally {
    await rm(extracted, { recursive: true, force: true });
  }
}

export async function validateRepository(root, options = {}) {
  const snapshot = await loadRepositorySnapshot(root, options);
  if (options.runHistoricalReplay) snapshot.historicalReplay = await runHistoricalPhase08Replay(root);
  const errors = validatePhase09Snapshot(snapshot, options);
  return {
    schema: 'mle-phase-09-validator-report/v1', stage: options.stage ?? 'bootstrap',
    counts: snapshot.derivedCounts, qaInventory: snapshot.qaInventory,
    historicalReplay: snapshot.historicalReplay,
    bootstrapLifecycle: 'pre-review', productionAuthorized: false, errors,
  };
}

function command(root, executable, args) {
  return execFileSync(executable, args, { cwd: root, encoding: 'utf8', maxBuffer: 64 * 1024 * 1024 }).trim();
}

export function parseGitStatus(output) {
  return output.split('\n').filter(Boolean).map((line) => line.slice(3));
}

function liveGit(root) {
  const head = command(root, 'git', ['rev-parse', 'HEAD']);
  const originMain = command(root, 'git', ['rev-parse', 'origin/main']);
  const remoteMain = command(root, 'git', ['ls-remote', 'origin', 'refs/heads/main']).split(/\s+/)[0];
  const changedPaths = parseGitStatus(execFileSync('git', ['status', '--porcelain=v1'], { cwd: root, encoding: 'utf8' }));
  return { branch: command(root, 'git', ['branch', '--show-current']), head, originMain, remoteMain, clean: changedPaths.length === 0, changedPaths };
}

function liveIssue(root, number) {
  const issue = JSON.parse(command(root, 'gh', ['issue', 'view', String(number), '--repo', 'alpeshznakrani/komalnakrani', '--json', 'number,state,labels,body']));
  return { ...issue, labels: issue.labels.map((label) => label.name).sort() };
}

async function main() {
  const stage = process.argv.find((arg) => arg.startsWith('--stage='))?.slice('--stage='.length) ?? 'bootstrap';
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../../../..');
  const report = await validateRepository(root, {
    stage,
    runHistoricalReplay: stage === 'bootstrap',
    git: liveGit(root),
    github: { 79: liveIssue(root, 79), 85: liveIssue(root, 85), 86: liveIssue(root, 86) },
  });
  if (report.errors.length > 0) {
    console.error(JSON.stringify(report, null, 2));
    process.exitCode = 1;
    return;
  }
  console.log(`PASS Phase 09 ${stage}: current closed tree bound; historical Phase 08 ${report.historicalReplay?.pass ?? 'not-run'}/${report.historicalReplay?.tests ?? 'not-run'}; chapters=${report.counts.chapters}; claims=${report.counts.claims}; sources=${report.counts.sources}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
