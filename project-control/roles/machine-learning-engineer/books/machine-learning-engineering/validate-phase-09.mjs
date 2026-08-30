#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { access, cp, mkdir, mkdtemp, readFile, readdir, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gunzipSync } from 'node:zlib';

const BOOK = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering';
const ROLE = 'project-control/roles/machine-learning-engineer';
const FACTORY = 'project-control/role-factory/FACTORY-STATE.md';
const SPEC = 'docs/superpowers/specs/2026-08-23-machine-learning-engineer-whole-book-qa-design.md';
const PLAN = 'docs/superpowers/plans/2026-08-23-machine-learning-engineer-phase-09.md';
const FINAL_VERIFICATION = `${BOOK}/phase-09-verification.json`;
const TASK01_REVIEW = `${ROLE}/reviews/phase-09/task-01-bootstrap.md`;
const TASK01_REPAIR = `${ROLE}/reviews/phase-09/task-01-bootstrap-repair.md`;
const TASK01_REVIEWED_CHECKPOINT = '025f6bdd6310f6d6d23e8ab30cf91759f82e1fea';

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

const INITIAL_RED_OUTPUT = `TAP version 13
# node:internal/modules/esm/resolve:275
#     throw new ERR_MODULE_NOT_FOUND(
#           ^
# Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/Applications/ServBay/www/komalnakrani/project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-09.mjs' imported from /Applications/ServBay/www/komalnakrani/project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-09.test.mjs
#     at finalizeResolution (node:internal/modules/esm/resolve:275:11)
#     at moduleResolve (node:internal/modules/esm/resolve:861:10)
#     at defaultResolve (node:internal/modules/esm/resolve:985:11)
#     at #cachedDefaultResolve (node:internal/modules/esm/loader:747:20)
#     at ModuleLoader.resolve (node:internal/modules/esm/loader:724:38)
#     at ModuleLoader.getModuleJobForImport (node:internal/modules/esm/loader:320:38)
#     at ModuleJob._link (node:internal/modules/esm/module_job:182:49) {
#   code: 'ERR_MODULE_NOT_FOUND',
#   url: 'file:///Applications/ServBay/www/komalnakrani/project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-09.mjs'
# }
# Node.js v22.23.1
# Subtest: project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-09.test.mjs
not ok 1 - project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-09.test.mjs
  ---
  duration_ms: 43.24375
  type: 'test'
  location: '/Applications/ServBay/www/komalnakrani/project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-09.test.mjs:1:1'
  failureType: 'testCodeFailure'
  exitCode: 1
  signal: ~
  error: 'test failed'
  code: 'ERR_TEST_FAILURE'
  ...
1..1
# tests 1
# suites 0
# pass 0
# fail 1
# cancelled 0
# skipped 0
# todo 0
# duration_ms 47.797542
`;

export const INITIAL_RED_EVIDENCE = Object.freeze({
  schema: 'mle-phase-09-initial-red-evidence/v1',
  testPath: `${BOOK}/validate-phase-09.test.mjs`,
  testBytes: 15224,
  testSha256: 'b60c9abb891f8aa90a92a411036e867b3d4b0604c745fd79accb2ab1021b959e',
  command: `node --test ${BOOK}/validate-phase-09.test.mjs`,
  exitCode: 1,
  errorCode: 'ERR_MODULE_NOT_FOUND',
  output: INITIAL_RED_OUTPUT,
  outputSha256: sha256(INITIAL_RED_OUTPUT),
  green: Object.freeze({
    command: `node --test ${BOOK}/validate-phase-09.test.mjs`,
    exitCode: 0,
    tests: 136,
    pass: 136,
    fail: 0,
    implementationPaths: Object.freeze([`${BOOK}/validate-phase-09.mjs`, `${BOOK}/validate-phase-09.test.mjs`]),
  }),
});

const INITIAL_RED_TEST_GZIP_BASE64 = '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';

export function recoverInitialRedTestSource() {
  const source = gunzipSync(Buffer.from(INITIAL_RED_TEST_GZIP_BASE64, 'base64')).toString('utf8');
  if (Buffer.byteLength(source) !== INITIAL_RED_EVIDENCE.testBytes
      || sha256(source) !== INITIAL_RED_EVIDENCE.testSha256) {
    throw new Error('embedded initial RED test source binding drift');
  }
  return source;
}

export function buildTask01Evidence(snapshot) {
  const artifacts = INITIAL_RED_EVIDENCE.green.implementationPaths.map((path) => {
    const file = snapshot.files[path];
    return { path, sha256: file?.sha256, bytes: file?.bytes };
  });
  return {
    schema: 'mle-phase-09-task-01-tdd-evidence/v1',
    initialRed: INITIAL_RED_EVIDENCE,
    green: { ...INITIAL_RED_EVIDENCE.green, artifacts },
  };
}

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

function freezePathFindings(entries) {
  return Object.freeze(Object.fromEntries(entries.map(([path, findingIds]) => [
    path,
    Object.freeze([...new Set(findingIds)].sort()),
  ])));
}

const chapterPathFindings = Array.from({ length: 21 }, (_, index) => {
  const chapter = index + 1;
  const number = String(chapter).padStart(2, '0');
  const findings = ['P09-CON-001', 'P09-CON-002', 'P09-CON-003', 'P09-EVD-005', 'P09-SYS-001', 'P09-SYS-003', 'P09-SYS-004'];
  if (chapter <= 7) findings.push('P09-CON-004');
  if (chapter >= 8 && chapter <= 14) findings.push('P09-CON-005');
  if ([18, 19].includes(chapter)) findings.push('P09-CON-006');
  if (chapter === 19) findings.push('P09-COV-001');
  if (chapter === 1) findings.push('P09-EVD-001');
  if ([2, 5, 7, 8, 14].includes(chapter)) findings.push('P09-EVD-002');
  if (chapter === 21) findings.push('P09-EVD-003', 'P09-EVD-004');
  if ([5, 14, 16, 18].includes(chapter)) findings.push('P09-SYS-006');
  return [`${BOOK}/manuscript/chapter-${number}.md`, findings];
});

const packPathFindings = Array.from({ length: 21 }, (_, index) => [
  `${BOOK}/sources/research-packs/chapter-${String(index + 1).padStart(2, '0')}.md`,
  ['P09-EVD-005'],
]);

export const TASK07_CANONICAL_PATH_FINDINGS = freezePathFindings([
  ...chapterPathFindings,
  ...packPathFindings,
  [`${BOOK}/manuscript/opening-and-closing.md`, ['P09-CON-001']],
  [`${BOOK}/manuscript/part-07.md`, ['P09-CON-006']],
  [`${BOOK}/manuscript/appendix-a.md`, ['P09-CON-005', 'P09-SYS-001', 'P09-SYS-003']],
  [`${BOOK}/manuscript/appendix-b.md`, ['P09-CON-004', 'P09-CON-005', 'P09-SYS-001', 'P09-SYS-002']],
  [`${BOOK}/manuscript/appendix-c.md`, ['P09-SYS-004']],
  [`${BOOK}/manuscript/appendix-e.md`, ['P09-CON-005']],
  [`${BOOK}/manuscript/appendix-f.md`, ['P09-CON-005']],
  [`${BOOK}/manuscript/appendix-g.md`, ['P09-CON-001', 'P09-SYS-006']],
  [`${BOOK}/manuscript/manuscript-register.json`, [
    'P09-COV-001', 'P09-CON-001', 'P09-CON-002', 'P09-CON-003', 'P09-CON-004', 'P09-CON-005', 'P09-CON-006',
    'P09-EVD-001', 'P09-EVD-002', 'P09-EVD-003', 'P09-EVD-004', 'P09-EVD-005',
    'P09-SYS-001', 'P09-SYS-002', 'P09-SYS-003', 'P09-SYS-004', 'P09-SYS-005', 'P09-SYS-006',
  ]],
  [`${BOOK}/blueprints/chapter-19.md`, ['P09-COV-001']],
  [`${BOOK}/blueprints/blueprint-register.json`, ['P09-COV-001', 'P09-EVD-005', 'P09-SYS-006']],
  [`${BOOK}/case-studies/case-study-register.json`, ['P09-EVD-004', 'P09-EVD-005']],
  [`${BOOK}/sources/source-register.json`, ['P09-EVD-001', 'P09-EVD-002']],
  [`${BOOK}/visual-forecast.md`, ['P09-SYS-006']],
  [`${BOOK}/companion/README.md`, ['P09-SYS-002', 'P09-SYS-005']],
  [`${BOOK}/companion/lib/lifecycle.mjs`, ['P09-SYS-001', 'P09-SYS-002']],
  [`${BOOK}/companion/lib/dossier.mjs`, ['P09-SYS-001', 'P09-SYS-002']],
  [`${BOOK}/companion/lib/run.mjs`, ['P09-SYS-005']],
  [`${BOOK}/companion/tests/lifecycle.test.mjs`, ['P09-SYS-001', 'P09-SYS-002']],
  [`${BOOK}/companion/tests/core.test.mjs`, ['P09-SYS-001']],
  [`${BOOK}/companion/tests/effects.test.mjs`, ['P09-SYS-001', 'P09-SYS-005']],
]);

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

const TASK01_ARTIFACTS = Object.freeze([
  SPEC, PLAN,
  `${ROLE}/reviews/phase-09/task-00-plan.md`, `${ROLE}/reviews/phase-09/task-00-plan-repair.md`,
  `${BOOK}/phase-08-verification.json`, `${BOOK}/manuscript/phase-09-handoff.md`,
  `${ROLE}/reviews/phase-08/task-07-hostile-integration.md`,
  FACTORY, `${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`, `${ROLE}/issues/phase-09-book-qa.md`,
  `${BOOK}/validate-phase-09.mjs`, `${BOOK}/validate-phase-09.test.mjs`,
]);

const REVIEW_ARTIFACTS = Object.freeze({
  'TASK-01': TASK01_ARTIFACTS,
  'TASK-02': [`${BOOK}/qa/coverage-depth.md`],
  'TASK-03': [`${BOOK}/qa/continuity-originality.md`],
  'TASK-04': [`${BOOK}/qa/evidence-currentness-authority.md`],
  'TASK-05': [`${BOOK}/qa/companion-furniture-visual-readiness.md`],
  'TASK-06': [
    `${BOOK}/qa/finding-register.json`, `${BOOK}/qa/coverage-depth.md`, `${BOOK}/qa/continuity-originality.md`,
    `${BOOK}/qa/evidence-currentness-authority.md`, `${BOOK}/qa/companion-furniture-visual-readiness.md`,
    ...[2, 3, 4, 5].map((task) => `${ROLE}/reviews/phase-09/${REVIEW_NAMES.find((name) => name.startsWith(`task-${String(task).padStart(2, '0')}-`) && !name.endsWith('-repair.md'))}`),
  ],
  'TASK-07': [
    `${BOOK}/qa/finding-register.json`, `${BOOK}/qa/revision-ledger.json`, `${BOOK}/qa/phase-09-register.json`,
    `${BOOK}/qa/verification-report.md`, `${BOOK}/qa/phase-10-handoff.md`, `${ROLE}/reviews/phase-09/task-06-finding-freeze.md`,
  ],
  'TASK-08': [
    ...Array.from({ length: 9 }, (_, index) => `${BOOK}/qa/${[
      'finding-register.json', 'coverage-depth.md', 'continuity-originality.md', 'evidence-currentness-authority.md',
      'companion-furniture-visual-readiness.md', 'revision-ledger.json', 'phase-09-register.json',
      'verification-report.md', 'phase-10-handoff.md',
    ][index]}`),
    `${ROLE}/reviews/phase-09/task-07-canonical-integration.md`,
  ],
});

export const REVIEW_CONTRACTS = Object.freeze(Object.fromEntries(
  Array.from({ length: 9 }, (_, index) => {
    const task = `TASK-${String(index).padStart(2, '0')}`;
    return [`${ROLE}/reviews/phase-09/${REVIEW_NAMES.find((name) => name.startsWith(`task-${String(index).padStart(2, '0')}-`) && !name.endsWith('-repair.md'))}`, {
      taskId: task,
      ...EXPECTED_REVIEW_IDENTITIES[task],
      artifacts: REVIEW_ARTIFACTS[task] ?? [],
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
  const ignoredDirectories = new Set(['.git', 'node_modules', 'dist', '.astro', '.vercel', '.DS_Store']);
  async function walk(path) {
    let entries;
    try { entries = await readdir(join(root, path), { withFileTypes: true }); } catch { return; }
    for (const entry of entries) {
      const child = path === '.' ? entry.name : `${path}/${entry.name}`;
      if (entry.isDirectory() && !ignoredDirectories.has(entry.name)) await walk(child);
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
    ...Object.keys(TASK07_CANONICAL_PATH_FINDINGS),
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

  let repositoryCommittedInventory = [];
  let repositoryUntrackedInventory = [];
  let activationInventory = [];
  try {
    repositoryCommittedInventory = execFileSync('git', ['ls-tree', '-r', '--name-only', 'HEAD'], { cwd: root, encoding: 'utf8' }).split('\n').filter(Boolean).sort();
    repositoryUntrackedInventory = execFileSync('git', ['ls-files', '--others', '--exclude-standard'], { cwd: root, encoding: 'utf8' }).split('\n').filter(Boolean).sort();
    activationInventory = execFileSync('git', ['ls-tree', '-r', '--name-only', TASK01_REVIEWED_CHECKPOINT], { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).split('\n').filter(Boolean).sort();
  } catch {
    repositoryCommittedInventory = [...phase09Paths];
    activationInventory = [...repositoryCommittedInventory];
  }
  const repositoryFilesystemInventory = await listFiles(root, '.');

  const entryCanonicalBindings = {};
  for (const path of Object.keys(TASK07_CANONICAL_PATH_FINDINGS)) {
    try {
      const bytes = execFileSync('git', ['show', `${PHASE08_CHECKPOINT}:${path}`], {
        cwd: root, maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'],
      });
      entryCanonicalBindings[path] = { path, bytes: bytes.byteLength, sha256: sha256(bytes) };
    } catch {
      entryCanonicalBindings[path] = null;
    }
  }

  const reviewCheckpointBindings = {};
  for (const path of reviewInventory.filter((item) => !item.endsWith('-repair.md'))) {
    const parsed = parseReviewMarkdown(files[path]?.text ?? '');
    if (!parsed.reviewedCheckpoint || parsed.records.length !== 1) continue;
    const historical = {};
    for (const binding of parsed.records[0].artifactBindings ?? []) {
      try {
        const bytes = execFileSync('git', ['show', `${parsed.reviewedCheckpoint}:${binding.path}`], { cwd: root, maxBuffer: 64 * 1024 * 1024, stdio: ['ignore', 'pipe', 'ignore'] });
        historical[binding.path] = { path: binding.path, bytes: bytes.byteLength, sha256: sha256(bytes) };
      } catch {
        historical[binding.path] = null;
      }
    }
    reviewCheckpointBindings[path] = { checkpoint: parsed.reviewedCheckpoint, files: historical };
  }

  return {
    root: resolve(root), stage, files, phase08Verification, manuscriptRegister, blueprintRegister,
    derivedCounts: deriveCounts(blueprintRegister), phase09Paths,
    qaInventory: qaInventory.filter((path) => QA_PATHS.includes(path)),
    reviewInventory,
    repositoryCommittedInventory, repositoryUntrackedInventory, repositoryFilesystemInventory,
    activationInventory, reviewCheckpointBindings, entryCanonicalBindings,
    git: options.git ? structuredClone(options.git) : null,
    github: options.github ? structuredClone(options.github) : null,
    historicalReplay: options.historicalReplay ? structuredClone(options.historicalReplay) : null,
  };
}

function isRepairStage(stage) {
  return ['repair', 'integration', 'pre-hostile', 'pre-close', 'final-content', 'final'].includes(stage);
}

function isMutableCanonicalPath(path) {
  return Object.hasOwn(TASK07_CANONICAL_PATH_FINDINGS, path);
}

function validateFrozenEntry(snapshot, stage = 'bootstrap') {
  const errors = [];
  for (const [path, expected] of Object.entries(FROZEN_ENTRY)) {
    if (isRepairStage(stage) && isMutableCanonicalPath(path)) continue;
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

function parseJsonRecord(snapshot, path) {
  try { return JSON.parse(snapshot.files[path]?.text ?? 'null'); }
  catch { return null; }
}

export function validateRevisionLedger(snapshot, context = {}) {
  const errors = [];
  const registerPath = `${BOOK}/qa/finding-register.json`;
  const ledgerPath = `${BOOK}/qa/revision-ledger.json`;
  const register = parseJsonRecord(snapshot, registerPath);
  const ledger = parseJsonRecord(snapshot, ledgerPath);
  if (!ledger || ledger.schema !== 'mle-phase-09-revision-ledger/v1' || !Array.isArray(ledger.entries)
      || ledger.phase08ActivePackageCheckpoint !== PHASE08_CHECKPOINT
      || ledger.findingRegisterSha256 !== snapshot.files[registerPath]?.sha256) {
    return [error('REVISION_LEDGER_SCHEMA', 'revision ledger must bind the accepted finding freeze and Phase 08 entry checkpoint', ledgerPath)];
  }
  if (context.findingFreezeAccepted !== true) {
    errors.push(error('REVISION_FREEZE_NOT_ACCEPTED', 'canonical repairs require the independently accepted Task 06 finding freeze', ledgerPath));
  }
  const findings = new Map((register?.findings ?? []).map((finding) => [finding.id, finding]));
  const seen = new Set();
  for (const entry of ledger.entries) {
    const required = [
      'path', 'findingIds', 'beforeBytes', 'beforeSha256', 'afterBytes', 'afterSha256', 'reason',
      'affectedGraphProjections', 'verificationCommands', 'producerIdentity', 'expectedReviewerIdentity', 'disposition',
    ];
    if (!entry || required.some((key) => !Object.hasOwn(entry, key)) || seen.has(entry.path)) {
      errors.push(error('REVISION_ENTRY_SCHEMA', 'revision rows must be unique path-level records with exact before/after fields', entry?.path));
      continue;
    }
    seen.add(entry.path);
    const authorized = TASK07_CANONICAL_PATH_FINDINGS[entry.path];
    const findingIds = Array.isArray(entry.findingIds) ? entry.findingIds : [];
    const exactFindingSet = findingIds.length > 0
      && new Set(findingIds).size === findingIds.length
      && findingIds.every((id, index) => id === [...findingIds].sort()[index])
      && findingIds.every((id) => authorized?.includes(id) && findings.get(id)?.disposition === 'accepted');
    if (!authorized || !exactFindingSet) {
      errors.push(error('REVISION_FINDING_PATH', 'every sorted finding ID must be accepted and authorized for the exact path', entry.path));
    }
    const before = snapshot.entryCanonicalBindings?.[entry.path];
    const after = snapshot.files[entry.path];
    if (!before || !after || entry.beforeBytes !== before.bytes || entry.beforeSha256 !== before.sha256
        || entry.afterBytes !== after.bytes || entry.afterSha256 !== after.sha256
        || entry.beforeSha256 === entry.afterSha256) {
      errors.push(error('REVISION_BYTE_BINDING', 'revision row must bind exact changed entry and current bytes', entry.path));
    }
    if (typeof entry.reason !== 'string' || entry.reason.trim().length === 0
        || !Array.isArray(entry.affectedGraphProjections) || entry.affectedGraphProjections.length === 0
        || !Array.isArray(entry.verificationCommands) || entry.verificationCommands.length === 0) {
      errors.push(error('REVISION_EVIDENCE', 'revision row requires reason, projections, and verification commands', entry.path));
    }
    if (entry.producerIdentity !== '/root/mle_p9_integration'
        || entry.expectedReviewerIdentity !== '/root/mle_p9_integration_review'
        || entry.producerIdentity === entry.expectedReviewerIdentity) {
      errors.push(error('REVISION_IDENTITY', 'revision producer and expected independent reviewer identities are frozen', entry.path));
    }
    if (entry.disposition !== 'applied-pending-independent-review') {
      errors.push(error('REVISION_DISPOSITION', 'producer may apply but may not pre-approve a canonical revision', entry.path));
    }
  }
  const changed = Object.keys(TASK07_CANONICAL_PATH_FINDINGS).filter((path) => {
    const before = snapshot.entryCanonicalBindings?.[path];
    const after = snapshot.files[path];
    return before && after && (before.sha256 !== after.sha256 || before.bytes !== after.bytes);
  }).sort();
  const ledgerPaths = ledger.entries.map((entry) => entry.path).sort();
  if (changed.length !== ledgerPaths.length || changed.some((path, index) => path !== ledgerPaths[index])) {
    errors.push(error('REVISION_PATH_SET', 'ledger path set must exactly equal every finding-authorized canonical byte change', ledgerPath));
  }
  return errors;
}

export function validateCanonicalBindings(snapshot, context = {}) {
  const errors = [];
  const stage = context.stage ?? snapshot.stage ?? 'bootstrap';
  if (snapshot.phase08Verification.schema !== 'mle-phase-08-final-verification/v1') {
    errors.push(error('PHASE08_CURRENT_SCHEMA', 'terminal Phase 08 verification schema drift'));
  }
  const bindings = [...(snapshot.phase08Verification.frozenInputs ?? []), ...(snapshot.phase08Verification.artifacts ?? [])];
  let findingRegister = null;
  let revisionLedger = null;
  try { findingRegister = JSON.parse(snapshot.files[`${BOOK}/qa/finding-register.json`]?.text ?? 'null'); } catch {}
  try { revisionLedger = JSON.parse(snapshot.files[`${BOOK}/qa/revision-ledger.json`]?.text ?? 'null'); } catch {}
  for (const binding of bindings) {
    const loaded = snapshot.files[binding.path];
    if (loaded && loaded.sha256 === binding.sha256 && loaded.bytes === binding.bytes) continue;
    const canReplace = isRepairStage(stage) && isMutableCanonicalPath(binding.path) && context.findingFreezeAccepted === true;
    const entry = revisionLedger?.schema === 'mle-phase-09-revision-ledger/v1'
      ? revisionLedger.entries?.find((item) => item.path === binding.path)
      : null;
    const findings = (entry?.findingIds ?? []).map((id) => findingRegister?.findings?.find((item) => item.id === id));
    const validReplacement = canReplace && entry
      && findings.length > 0 && findings.every((finding) => finding?.disposition === 'accepted')
      && (entry.findingIds ?? []).every((id) => TASK07_CANONICAL_PATH_FINDINGS[binding.path]?.includes(id))
      && entry.beforeBytes === binding.bytes
      && entry.beforeSha256 === binding.sha256
      && entry.afterBytes === loaded?.bytes
      && entry.afterSha256 === loaded?.sha256
      && typeof entry.reason === 'string' && entry.reason.trim().length > 0
      && Array.isArray(entry.affectedGraphProjections) && entry.affectedGraphProjections.length > 0
      && Array.isArray(entry.verificationCommands) && entry.verificationCommands.length > 0
      && entry.producerIdentity === '/root/mle_p9_integration'
      && entry.expectedReviewerIdentity === '/root/mle_p9_integration_review'
      && entry.producerIdentity !== entry.expectedReviewerIdentity
      && entry.disposition === 'applied-pending-independent-review';
    if (!validReplacement) errors.push(error('PHASE08_CURRENT_BINDING', 'current bytes require an independently frozen finding and exact before/after revision entry', binding.path));
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

function validateGit(snapshot, stage, mode) {
  if (!snapshot.git) return [];
  const errors = [];
  if (snapshot.git.branch !== 'main' || snapshot.git.head !== snapshot.git.originMain || snapshot.git.head !== snapshot.git.remoteMain) {
    errors.push(error('GIT_MAIN_EQUALITY', 'main, origin/main, and live remote main must be equal'));
  }
  if (stage === 'bootstrap' && mode === 'working-tree' && (!sameSet(snapshot.git.changedPaths ?? [], ALLOWED_BOOTSTRAP_DIRT) || snapshot.git.clean !== false)) {
    errors.push(error('GIT_BOOTSTRAP_DIRT', 'bootstrap dirt must be exactly four authorities plus validator and tests'));
  }
  if (mode === 'checkpoint') {
    const implementationCommitted = VALIDATOR_PATHS.every((path) => snapshot.repositoryCommittedInventory?.includes(path));
    if (!snapshot.git.clean || (snapshot.git.changedPaths ?? []).length !== 0 || !implementationCommitted) {
      errors.push(error('GIT_CHECKPOINT_CLEAN', 'checkpoint mode requires clean equal Git and committed validator/test bytes'));
    }
  }
  if (stage === 'final' && (!snapshot.git.clean || (snapshot.git.changedPaths ?? []).length > 0)) errors.push(error('GIT_FINAL_CLEAN', 'final stage requires clean Git equality'));
  return errors;
}

function stopBoundaryPath(path, options = {}) {
  return /^public\/.*machine-learning-engineering.*\.(?:png|svg|webp|pdf)$/i.test(path)
    || /^output\/.*machine-learning-engineering.*\.pdf$/i.test(path)
    || /^content\/publications\/machine-learning-engineering(?:\/|$)/i.test(path)
    || /^content\/courses\/machine-learning-engineering(?:\/|$)/i.test(path)
    || /certification.*machine-learning|machine-learning.*certification/i.test(path)
    || /abhyaas\/(?:mle|machine-learning)/i.test(path)
    || new RegExp(`^${BOOK.replaceAll('/', '\\/')}\/volume-02(?:\/|$)`, 'i').test(path)
    || ((options.changed || options.newSinceActivation) && /^project-control\/roles\/(?!machine-learning-engineer\/)[^/]+\/(?:books|issues)\//i.test(path))
    || (options.changed && /^project-control\/roles\/(?:data-engineer|mlops-engineer|ai-research-scientist)\//i.test(path));
}

function validateStopBoundary(snapshot) {
  const errors = [];
  const activation = new Set(snapshot.activationInventory ?? []);
  const sources = [
    ...(snapshot.git?.changedPaths ?? []).map((path) => ({ path, changed: true })),
    ...snapshot.phase09Paths.map((path) => ({ path })),
    ...(snapshot.repositoryFilesystemInventory ?? []).map((path) => ({ path, newSinceActivation: !activation.has(path) })),
    ...(snapshot.repositoryCommittedInventory ?? []).map((path) => ({ path, newSinceActivation: !activation.has(path) })),
    ...(snapshot.repositoryUntrackedInventory ?? []).map((path) => ({ path, newSinceActivation: true })),
  ];
  const seen = new Set();
  for (const item of sources) {
    if (seen.has(item.path)) continue;
    seen.add(item.path);
    if (stopBoundaryPath(item.path, item)) errors.push(error('STOP_BOUNDARY', 'Phase 09 may not start visual, PDF, publication, course, Abhyaas, volume 2, catalog 6, or next-role output', item.path));
  }
  return errors;
}

function allowedAtStage(stage) {
  const allowed = new Set(BASE_ALLOWED);
  const maxReviewTask = {
    bootstrap: 1, audit: 5, repair: 6, integration: 7,
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
  const terminalFailure = review.specVerdict === 'SPEC COMPLIANCE FAIL' && review.qualityVerdict === 'QUALITY CHANGES REQUESTED';
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
  if (terminalFailure && hasRepair) errors.push(error('REVIEW_REPAIR_CHAIN', 'a preserved failed base may not rewrite itself into its paired repair'));
  if (!(review.specVerdict === 'SPEC COMPLIANCE PASS' && review.qualityVerdict === 'QUALITY APPROVED')
      && !(context.allowFailure && terminalFailure)) errors.push(error('REVIEW_VERDICT', 'review must be exact PASS/APPROVED or a preserved exact FAIL/CHANGES base'));
  return errors;
}

export function parseReviewMarkdown(text) {
  const records = [];
  const errors = [];
  const blocks = [...text.matchAll(/```json\s*([\s\S]*?)```/g)];
  for (const block of blocks) {
    try { records.push(JSON.parse(block[1])); }
    catch { errors.push(error('REVIEW_MARKDOWN_JSON', 'review Markdown contains malformed fenced JSON')); }
  }
  if (blocks.length === 0) errors.push(error('REVIEW_MARKDOWN_JSON', 'review Markdown must contain one fenced JSON record'));
  if (records.length === 1) {
    const proseLines = text.replace(/```[\s\S]*?```/g, '')
      .split(/\r?\n/).map((line) => line.trim()).filter(Boolean);
    const terminal = proseLines.slice(-2);
    const verdictLines = proseLines.filter((line) => /^(?:SPEC COMPLIANCE|QUALITY )/.test(line));
    const expected = [records[0].specVerdict, records[0].qualityVerdict];
    if (verdictLines.length !== 2 || terminal.length !== 2
        || terminal[0] !== expected[0] || terminal[1] !== expected[1]
        || verdictLines[0] !== expected[0] || verdictLines[1] !== expected[1]) {
      errors.push(error('REVIEW_MARKDOWN_VERDICT', 'review Markdown must end with exactly the JSON spec and quality verdict lines'));
    }
  }
  const reviewedCheckpoint = text.match(/Reviewed checkpoint:\s*`([0-9a-f]{40})`/i)?.[1] ?? null;
  return { records, errors, reviewedCheckpoint };
}

function validateReviewArtifactBindings(record, contract, files) {
  const errors = [];
  const actualPaths = (record.artifactBindings ?? []).map((binding) => binding.path);
  if (!sameSet(actualPaths, contract.artifacts ?? []) || new Set(actualPaths).size !== actualPaths.length) {
    errors.push(error('REVIEW_ARTIFACT_SET', `${record.taskId} artifact set drift`));
    return errors;
  }
  for (const binding of record.artifactBindings) {
    if (!/^[0-9a-f]{64}$/.test(binding.sha256 ?? '') || files[binding.path]?.sha256 !== binding.sha256) {
      errors.push(error('REVIEW_ARTIFACT_BINDING', 'review artifact binding differs from actual bytes', binding.path));
    }
  }
  return errors;
}

function validateRepairRecord(record, baseRecord, basePath, repairPath, contract, snapshot) {
  const errors = [];
  const required = ['schema', 'taskId', 'producerIdentity', 'reviewerIdentity', 'reviewedAt', 'priorReviewPath', 'priorReviewSha256', 'artifactBindings', 'reacceptedBy', 'reacceptedAt', 'specVerdict', 'qualityVerdict'];
  if (!record || required.some((key) => !Object.hasOwn(record, key)) || record.schema !== 'mle-phase-09-review-repair/v1' || !Array.isArray(record.artifactBindings)) {
    return [error('REVIEW_REPAIR_SCHEMA', 'paired repair record schema is incomplete', repairPath)];
  }
  if (record.taskId !== contract.taskId || record.producerIdentity !== contract.producerIdentity || record.reviewerIdentity !== contract.reviewerIdentity || record.producerIdentity === record.reviewerIdentity) {
    errors.push(error('REVIEW_IDENTITY', 'paired repair identity drift', repairPath));
  }
  const later = Date.parse(record.reviewedAt) > Date.parse(baseRecord.reviewedAt)
    && Date.parse(record.reacceptedAt) >= Date.parse(record.reviewedAt);
  if (record.priorReviewPath !== basePath || record.priorReviewSha256 !== snapshot.files[basePath]?.sha256
      || record.reacceptedBy !== baseRecord.reviewerIdentity || !later
      || record.specVerdict !== 'SPEC COMPLIANCE PASS' || record.qualityVerdict !== 'QUALITY APPROVED') {
    errors.push(error('REVIEW_REPAIR_CHAIN', 'paired repair must bind the failed base and same-reviewer later reacceptance', repairPath));
  }
  errors.push(...validateReviewArtifactBindings(record, contract, snapshot.files));
  return errors;
}

function requiredReviewTasks(stage) {
  if (stage === 'bootstrap') return [];
  if (stage === 'audit') return ['TASK-01'];
  if (stage === 'repair') return ['TASK-01', 'TASK-02', 'TASK-03', 'TASK-04', 'TASK-05', 'TASK-06'];
  if (['integration', 'pre-hostile'].includes(stage)) return ['TASK-01', 'TASK-02', 'TASK-03', 'TASK-04', 'TASK-05', 'TASK-06', 'TASK-07'];
  return Object.keys(EXPECTED_REVIEW_IDENTITIES).filter((task) => task !== 'TASK-00');
}

export function validateLoadedReviews(snapshot, context = {}) {
  const stage = context.stage ?? snapshot.stage ?? 'bootstrap';
  const mode = context.mode ?? (stage === 'bootstrap' ? 'working-tree' : 'checkpoint');
  const errors = [];
  const accepted = new Set();
  const required = new Set(requiredReviewTasks(stage));
  const presentBases = snapshot.reviewInventory.filter((path) => /\/task-0[1-8]-.*\.md$/.test(path) && !path.endsWith('-repair.md'));

  for (const basePath of presentBases) {
    const contract = REVIEW_CONTRACTS[basePath];
    if (!contract) { errors.push(error('REVIEW_PATH_TASK', 'review path has no frozen task contract', basePath)); continue; }
    const parsed = parseReviewMarkdown(snapshot.files[basePath]?.text ?? '');
    errors.push(...parsed.errors.map((item) => ({ ...item, path: basePath })));
    if (parsed.records.length !== 1) { if (parsed.records.length > 1) errors.push(error('REVIEW_MARKDOWN_JSON', 'review Markdown must contain exactly one JSON record', basePath)); continue; }
    const record = parsed.records[0];
    if (record.taskId !== contract.taskId) errors.push(error('REVIEW_PATH_TASK', 'review task does not match its path', basePath));
    errors.push(...validateReviewRecord(record, contract, { allowFailure: true }));
    const failed = record.specVerdict === 'SPEC COMPLIANCE FAIL' && record.qualityVerdict === 'QUALITY CHANGES REQUESTED';
    const bindingFiles = failed && snapshot.reviewCheckpointBindings?.[basePath]?.files
      ? snapshot.reviewCheckpointBindings[basePath].files
      : snapshot.files;
    if (failed && parsed.reviewedCheckpoint !== snapshot.reviewCheckpointBindings?.[basePath]?.checkpoint) {
      errors.push(error('REVIEW_CHECKPOINT_BINDING', 'failed review checkpoint is not replayable', basePath));
    }
    errors.push(...validateReviewArtifactBindings(record, contract, bindingFiles));
    if (!failed) { accepted.add(record.taskId); continue; }

    const repairPath = basePath.replace(/\.md$/, '-repair.md');
    if (!snapshot.files[repairPath]) continue;
    const repairParsed = parseReviewMarkdown(snapshot.files[repairPath].text);
    errors.push(...repairParsed.errors.map((item) => ({ ...item, path: repairPath })));
    if (repairParsed.records.length !== 1) continue;
    const repairErrors = validateRepairRecord(repairParsed.records[0], record, basePath, repairPath, contract, snapshot);
    errors.push(...repairErrors);
    if (mode === 'checkpoint' && !snapshot.repositoryCommittedInventory.includes(repairPath)) errors.push(error('REVIEW_NOT_COMMITTED', 'accepted repair must be committed at a clean checkpoint', repairPath));
    if (repairErrors.length === 0 && (mode !== 'checkpoint' || snapshot.repositoryCommittedInventory.includes(repairPath))) accepted.add(record.taskId);
  }

  for (const repairPath of snapshot.reviewInventory.filter((path) => path.endsWith('-repair.md') && /\/task-0[1-8]-/.test(path))) {
    const basePath = repairPath.replace(/-repair\.md$/, '.md');
    if (!snapshot.files[basePath]) errors.push(error('REPAIR_WITHOUT_FAILURE', 'paired repair has no preserved base review', repairPath));
  }
  for (const task of required) {
    if (!accepted.has(task)) errors.push(error(task === 'TASK-01' ? 'TASK01_REVIEW_NOT_ACCEPTED' : 'REVIEW_NOT_ACCEPTED', `${task} must be exactly accepted before ${stage}`));
  }
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
  const mode = options.mode ?? (stage === 'bootstrap' ? 'working-tree' : 'checkpoint');
  if (!STAGES.has(stage)) return [error('STAGE_UNKNOWN', `unsupported Phase 09 stage ${stage}`)];
  let findingErrors = [];
  const findingPath = `${BOOK}/qa/finding-register.json`;
  if (snapshot.files[findingPath]) {
    try { findingErrors = validateFindingRegister(JSON.parse(snapshot.files[findingPath].text)); }
    catch { findingErrors = [error('FINDING_REGISTER_SCHEMA', 'finding register must be valid JSON', findingPath)]; }
  }
  const reviewErrors = validateLoadedReviews(snapshot, { stage, mode });
  const findingFreezeAccepted = isRepairStage(stage) && reviewErrors.length === 0;
  const revisionErrors = snapshot.files[`${BOOK}/qa/revision-ledger.json`]
    ? validateRevisionLedger(snapshot, { findingFreezeAccepted })
    : (['integration', 'pre-hostile', 'pre-close', 'final-content', 'final'].includes(stage)
      ? [error('REVISION_LEDGER_SCHEMA', 'Task 07 requires a revision ledger', `${BOOK}/qa/revision-ledger.json`)]
      : []);
  return [
    ...validateFrozenEntry(snapshot, stage),
    ...validateCounts(snapshot),
    ...validateCanonicalBindings(snapshot, { stage, findingFreezeAccepted }),
    ...validateHistoricalReplay(snapshot.historicalReplay),
    ...validateAuthorities(snapshot, stage),
    ...validateGithub(snapshot, stage),
    ...validateGit(snapshot, stage, mode),
    ...validateInventory(snapshot, stage, options),
    ...reviewErrors,
    ...findingErrors,
    ...revisionErrors,
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
    mode: options.mode ?? ((options.stage ?? 'bootstrap') === 'bootstrap' ? 'working-tree' : 'checkpoint'),
    counts: snapshot.derivedCounts, qaInventory: snapshot.qaInventory,
    historicalReplay: snapshot.historicalReplay,
    task01Evidence: buildTask01Evidence(snapshot),
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
  const mode = process.argv.find((arg) => arg.startsWith('--mode='))?.slice('--mode='.length)
    ?? (stage === 'bootstrap' ? 'working-tree' : 'checkpoint');
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../../../..');
  const report = await validateRepository(root, {
    stage, mode,
    runHistoricalReplay: stage === 'bootstrap',
    git: liveGit(root),
    github: { 79: liveIssue(root, 79), 85: liveIssue(root, 85), 86: liveIssue(root, 86) },
  });
  if (report.errors.length > 0) {
    console.error(JSON.stringify(report, null, 2));
    process.exitCode = 1;
    return;
  }
  console.log(`PASS Phase 09 ${stage}/${mode}: current closed tree bound; historical Phase 08 ${report.historicalReplay?.pass ?? 'not-run'}/${report.historicalReplay?.tests ?? 'not-run'}; chapters=${report.counts.chapters}; claims=${report.counts.claims}; sources=${report.counts.sources}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
