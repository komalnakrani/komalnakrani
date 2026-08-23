#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, readdir, realpath } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, isAbsolute, join, relative, resolve, sep } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const BOOK = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering';
const ROLE = 'project-control/roles/machine-learning-engineer';
const FACTORY = 'project-control/role-factory/FACTORY-STATE.md';
const SPEC = 'docs/superpowers/specs/2026-08-22-machine-learning-engineer-manuscript-companion-design.md';
const PLAN = 'docs/superpowers/plans/2026-08-22-machine-learning-engineer-phase-08.md';

export const FROZEN_INPUTS = Object.freeze({
  [`${BOOK}/phase-07-verification.json`]: '781b86503df3e40cf7f59424ea95e60bab5ce1cd2ae79199d3efd569d07aa454',
  [`${BOOK}/blueprints/blueprint-register.json`]: 'd05d14663fcae623faa529fa2405552752a4a7b90760de48ab9512bd4d4553b6',
  [`${BOOK}/blueprints/whole-book-furniture.md`]: '42ec2b992cde815015745d9c50845b5ba83024eaf00e5c32d8434a9d47b8ae4a',
  [`${BOOK}/blueprints/verification-report.md`]: 'ead317e38987f6ae8dc0ddcf2188c4bf929c70ac16569950afbecea3e027137a',
  [`${BOOK}/blueprints/phase-08-handoff.md`]: 'df7c39ef9ec152d5deadde7ab31b26d0274a4b2aa6d4b3b74589f0bfd59aecb0',
  [`${BOOK}/sources/integration-manifest.json`]: 'c8f2dff28008101c40d8eeac6916fb73625d46064c10aeedb27fb0aaad400bc4',
  [`${BOOK}/sources/phase-07-handoff.md`]: '98301e0108ace18f69a3e212d0b55d59cdf7380d1c5beaefc7dbc19926a6a119',
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

export const EXPECTED_PORTS = Object.freeze([
  'PORT-MANAGED',
  'PORT-CLASSICAL',
  'PORT-DEEP',
  'PORT-EDGE',
  'PORT-SHARED',
]);

export const EXPECTED_REVIEW_IDENTITIES = Object.freeze({
  'TASK-00': { producerIdentity: '/root', reviewerIdentity: '/root/mle_p7_test_contract_repair' },
  'TASK-01': { producerIdentity: '/root/mle_p8_bootstrap', reviewerIdentity: '/root/mle_p8_bootstrap_review' },
  'TASK-02': { producerIdentity: '/root/mle_p8_lane_a', reviewerIdentity: '/root/mle_p8_lane_a_review' },
  'TASK-03': { producerIdentity: '/root/mle_p8_lane_b', reviewerIdentity: '/root/mle_p8_lane_b_review' },
  'TASK-04': { producerIdentity: '/root/mle_p8_lane_c', reviewerIdentity: '/root/mle_p8_lane_c_review' },
  'TASK-05': { producerIdentity: '/root/mle_p8_companion', reviewerIdentity: '/root/mle_p8_companion_review' },
  'TASK-06': { producerIdentity: '/root/mle_p8_integration', reviewerIdentity: '/root/mle_p8_integration_review' },
  'TASK-07': { producerIdentity: '/root/mle_p8_hostile_fixture', reviewerIdentity: '/root/mle_p8_hostile_review' },
});

const CHAPTER_PATHS = Array.from(
  { length: 21 },
  (_, index) => `${BOOK}/manuscript/chapter-${String(index + 1).padStart(2, '0')}.md`,
);
const PART_PATHS = Array.from(
  { length: 7 },
  (_, index) => `${BOOK}/manuscript/part-${String(index + 1).padStart(2, '0')}.md`,
);
const APPENDIX_PATHS = Array.from(
  { length: 7 },
  (_, index) => `${BOOK}/manuscript/appendix-${String.fromCharCode(97 + index)}.md`,
);
const EXPECTED_DOSSIERS = Array.from(
  { length: 21 },
  (_, index) => `BL-${String(index).padStart(2, '0')}`,
);
const EXPECTED_FILES = Array.from(
  { length: 21 },
  (_, index) => `${BOOK}/companion/expected/bl-${String(index).padStart(2, '0')}.json`,
);

const COMPANION_PATHS = [
  `${BOOK}/companion/README.md`,
  `${BOOK}/companion/package.json`,
  ...['canonical-json', 'evidence-envelope', 'lifecycle', 'ports', 'dossier', 'run'].map((name) => `${BOOK}/companion/lib/${name}.mjs`),
  ...['evidence-envelope.schema', 'dossier-record.schema', 'port-result.schema'].map((name) => `${BOOK}/companion/contracts/${name}.json`),
  `${BOOK}/companion/fixtures/bl-entry.json`,
  `${BOOK}/companion/fixtures/mutations.json`,
  ...EXPECTED_FILES,
  ...['core', 'lifecycle', 'ports', 'chapters-01-07', 'chapters-08-14', 'chapters-15-21', 'effects'].map((name) => `${BOOK}/companion/tests/${name}.test.mjs`),
];

const INTEGRATION_PATHS = [
  `${BOOK}/manuscript/manuscript-register.json`,
  `${BOOK}/manuscript/verification-report.md`,
  `${BOOK}/manuscript/phase-09-handoff.md`,
];
const FURNITURE_PATHS = [
  `${BOOK}/manuscript/opening-and-closing.md`,
  ...PART_PATHS,
  ...APPENDIX_PATHS,
];
const PRODUCTION_PATHS = [...CHAPTER_PATHS, ...FURNITURE_PATHS, ...COMPANION_PATHS, ...INTEGRATION_PATHS];
const VALIDATOR_PATHS = [`${BOOK}/validate-phase-08.mjs`, `${BOOK}/validate-phase-08.test.mjs`];
const FINAL_VERIFICATION = `${BOOK}/phase-08-verification.json`;
const REVIEW_NAMES = [
  'task-00-plan.md', 'task-00-plan-repair.md', 'task-01-bootstrap.md', 'task-01-bootstrap-repair.md',
  'task-02-lane-a.md', 'task-02-lane-a-repair.md', 'task-03-lane-b.md', 'task-03-lane-b-repair.md',
  'task-04-lane-c.md', 'task-04-lane-c-repair.md', 'task-05-companion.md', 'task-05-companion-repair.md',
  'task-06-canonical-integration.md', 'task-06-canonical-integration-repair.md',
  'task-07-hostile-integration.md', 'task-07-hostile-integration-repair.md',
];
const REVIEW_PATHS = REVIEW_NAMES.map((name) => `${ROLE}/reviews/phase-08/${name}`);
const SCRATCH_PATHS = ['lane-a', 'lane-b', 'lane-c'].map(
  (lane) => `.superpowers/sdd/2026-08-22-machine-learning-engineer-phase-08/${lane}-manifest.json`,
);
const ALL_PHASE08_PATHS = new Set([...PRODUCTION_PATHS, ...VALIDATOR_PATHS, FINAL_VERIFICATION, ...REVIEW_PATHS, ...SCRATCH_PATHS]);
const BOOTSTRAP_ALLOWED = new Set([
  ...VALIDATOR_PATHS,
  `${ROLE}/reviews/phase-08/task-00-plan.md`,
  `${ROLE}/reviews/phase-08/task-00-plan-repair.md`,
]);
const BOOTSTRAP_DIRT = new Set([
  `${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`, `${ROLE}/issues/phase-08-manuscript.md`,
  FACTORY, ...VALIDATOR_PATHS,
  `${ROLE}/reviews/phase-08/task-01-bootstrap.md`,
  `${ROLE}/reviews/phase-08/task-01-bootstrap-repair.md`,
]);
const STAGES = new Set(['bootstrap', 'production', 'integration', 'pre-hostile', 'pre-close', 'final-content', 'final']);
const ACTIVATION_COMMIT = 'c5a5357373c1f2f887a58be8f3d8b52825b1b444';
const BOUNDED_ROOTS = ['.'];
const ACTIVE_DIGEST_EXCLUSIONS = new Set([
  FINAL_VERIFICATION,
  `${ROLE}/reviews/phase-08/task-07-hostile-integration.md`,
  `${ROLE}/reviews/phase-08/task-07-hostile-integration-repair.md`,
  `${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`,
  `${ROLE}/issues/phase-08-manuscript.md`, FACTORY,
]);
const ACTIVE_DIGEST_BINDING_PATH = 'digest:phase-08-active-pre-close-package';
const FINAL_REQUIRED_COMMANDS = Object.freeze([
  `node --check ${BOOK}/validate-phase-08.mjs`, `node --check ${BOOK}/validate-phase-08.test.mjs`,
  `node --test ${BOOK}/validate-phase-08.test.mjs`,
  ...['bootstrap', 'pre-hostile', 'pre-close', 'final-content', 'final'].map((stage) => `node ${BOOK}/validate-phase-08.mjs --stage=${stage}`),
  'npm run check', 'git diff --check',
]);
const TASK01_ACTIVATION_BINDINGS = Object.freeze({
  [`${BOOK}/validate-phase-08.mjs`]: '0c58850f983b2c65c19f8bd6dcfed871ea3178d2a9c5cfd2d50f55dc3a496789',
  [`${BOOK}/validate-phase-08.test.mjs`]: '120f522dacde5872b0d10ccdcc163c8c1440289f1375101492168039505e2aea',
  [`${ROLE}/ROLE-STATE.md`]: '0235c1c72974aacf742ef77f0e88166dd847247e225c995e92b51f59e45380f3',
  [`${ROLE}/issues/root.md`]: '46cee703bcfaa9408ce97861d03ff89220915d606ae4c1cf0f86395e9b6b57db',
  [`${ROLE}/issues/phase-08-manuscript.md`]: 'e659f755611682d53f7baa28d12a60868caa7c6876ab22cd673d80526a120c35',
  [FACTORY]: '28febff4c475c9bc8f0ac708938f1ce3d5b703d289f6ad0bdb1a7075834a1386',
});
const TASK01_ACTIVATION_REPAIR_SHA256 = 'c7544c6e9ca427c5d82e558412bf7430d078c4a40b77a690ec630ffb40b1d04c';

const REVIEW_CONTRACTS = Object.freeze({
  [`${ROLE}/reviews/phase-08/task-01-bootstrap.md`]: {
    taskId: 'TASK-01', ...EXPECTED_REVIEW_IDENTITIES['TASK-01'],
    artifacts: [...VALIDATOR_PATHS, `${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`, `${ROLE}/issues/phase-08-manuscript.md`, FACTORY],
  },
  [`${ROLE}/reviews/phase-08/task-02-lane-a.md`]: {
    taskId: 'TASK-02', ...EXPECTED_REVIEW_IDENTITIES['TASK-02'],
    artifacts: [...CHAPTER_PATHS.slice(0, 7), SCRATCH_PATHS[0]],
  },
  [`${ROLE}/reviews/phase-08/task-03-lane-b.md`]: {
    taskId: 'TASK-03', ...EXPECTED_REVIEW_IDENTITIES['TASK-03'],
    artifacts: [...CHAPTER_PATHS.slice(7, 14), SCRATCH_PATHS[1]],
  },
  [`${ROLE}/reviews/phase-08/task-04-lane-c.md`]: {
    taskId: 'TASK-04', ...EXPECTED_REVIEW_IDENTITIES['TASK-04'],
    artifacts: [...CHAPTER_PATHS.slice(14), SCRATCH_PATHS[2]],
  },
  [`${ROLE}/reviews/phase-08/task-05-companion.md`]: {
    taskId: 'TASK-05', ...EXPECTED_REVIEW_IDENTITIES['TASK-05'], artifacts: [...COMPANION_PATHS],
  },
  [`${ROLE}/reviews/phase-08/task-06-canonical-integration.md`]: {
    taskId: 'TASK-06', ...EXPECTED_REVIEW_IDENTITIES['TASK-06'], artifacts: [
      ...CHAPTER_PATHS, ...FURNITURE_PATHS, ...COMPANION_PATHS, ...INTEGRATION_PATHS,
      `${ROLE}/reviews/phase-08/task-02-lane-a.md`, `${ROLE}/reviews/phase-08/task-02-lane-a-repair.md`,
      `${ROLE}/reviews/phase-08/task-03-lane-b.md`, `${ROLE}/reviews/phase-08/task-03-lane-b-repair.md`,
      `${ROLE}/reviews/phase-08/task-04-lane-c.md`, `${ROLE}/reviews/phase-08/task-04-lane-c-repair.md`,
      `${ROLE}/reviews/phase-08/task-05-companion.md`, `${ROLE}/reviews/phase-08/task-05-companion-repair.md`,
    ],
  },
  [`${ROLE}/reviews/phase-08/task-07-hostile-integration.md`]: {
    taskId: 'TASK-07', ...EXPECTED_REVIEW_IDENTITIES['TASK-07'], artifacts: [ACTIVE_DIGEST_BINDING_PATH, ...VALIDATOR_PATHS, `${ROLE}/reviews/phase-08/task-06-canonical-integration.md`],
  },
});

function error(code, message, path = null) {
  return { code, message, ...(path ? { path } : {}) };
}

export function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

function sortJson(value) {
  if (Array.isArray(value)) return value.map(sortJson);
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, sortJson(value[key])]));
  }
  return value;
}

export function canonicalJson(value) {
  return `${JSON.stringify(sortJson(value))}\n`;
}

export function buildActivePackageDigest(snapshot) {
  const paths = uniqueInOrder([SPEC, PLAN, ...(snapshot.phase08Paths ?? [])])
    .filter((path) => !ACTIVE_DIGEST_EXCLUSIONS.has(path) && snapshot.files[path])
    .sort();
  const entries = paths.map((path) => ({
    path,
    sha256: snapshot.files[path].sha256,
  }));
  return {
    schema: 'mle-phase-08-active-package-digest/v1',
    algorithm: 'sha256-canonical-json-entries-v1',
    entries,
    entryCount: entries.length,
    exclusions: [...ACTIVE_DIGEST_EXCLUSIONS].sort(),
    packageSha256: sha256(canonicalJson(entries)),
  };
}

export function buildFinalPackageDigest(snapshot) {
  const statePaths = [`${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`, `${ROLE}/issues/phase-08-manuscript.md`, FACTORY];
  const paths = uniqueInOrder([SPEC, PLAN, ...(snapshot.phase08Paths ?? []), ...statePaths])
    .filter((path) => path !== FINAL_VERIFICATION && snapshot.files[path]).sort();
  const entries = paths.map((path) => ({ path, sha256: snapshot.files[path].sha256 }));
  const sentinel = { path: FINAL_VERIFICATION, selfHashExcluded: true, generatedAtExcluded: true };
  return { algorithm: 'sha256-canonical-json-final-projection-v1', entries, sentinel,
    packageSha256: sha256(canonicalJson({ entries, sentinel })) };
}

export function validateFinalVerification(verification, snapshot, context = {}) {
  const errors = [];
  if (verification?.schema !== 'mle-phase-08-final-verification/v1') {
    return [error('FINAL_VERIFICATION_SCHEMA', 'final verification schema drift', FINAL_VERIFICATION)];
  }
  if (verification.role !== 'machine-learning-engineer' || verification.book !== 'machine-learning-engineering'
      || verification.phase !== 'Phase 08' || !Number.isFinite(Date.parse(verification.generatedAt))) {
    errors.push(error('FINAL_IDENTITY', 'final verification must name the exact role, book, phase, and a valid generation timestamp'));
  }
  const frozenPaths = Object.keys(FROZEN_INPUTS).sort();
  errors.push(...validateBoundArtifactList(verification.frozenInputs, frozenPaths, snapshot.files, 'FINAL_FROZEN_INPUT'));
  const activeDigest = buildActivePackageDigest(snapshot);
  if (!jsonEqual(verification.activePreClose?.digest, activeDigest)) {
    errors.push(error('FINAL_ACTIVE_DIGEST', 'final verification active-package projection differs from current non-circular bytes'));
  }
  const task07Path = `${ROLE}/reviews/phase-08/task-07-hostile-integration.md`;
  const task07 = snapshot.files[task07Path];
  if (!/^[a-f0-9]{40}$/.test(verification.activePreClose?.checkpointCommit ?? '')
      || verification.activePreClose?.task07Binding?.path !== task07Path
      || verification.activePreClose?.task07Binding?.sha256 !== task07?.sha256) {
    errors.push(error('FINAL_ACTIVE_CHECKPOINT', 'final verification must bind the accepted Task 07 pre-close checkpoint'));
  }
  const activeArtifactPaths = activeDigest.entries.map((item) => item.path);
  errors.push(...validateBoundArtifactList(verification.artifacts, activeArtifactPaths, snapshot.files, 'FINAL_ARTIFACT_BINDING'));
  const statePaths = [`${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`, `${ROLE}/issues/phase-08-manuscript.md`, FACTORY];
  errors.push(...validateBoundArtifactList(verification.finalState?.bindings, statePaths, snapshot.files, 'FINAL_STATE_BINDING'));
  if ((verification.finalState?.bindings ?? []).some((binding) => binding.status !== 'phase-08-complete')) {
    errors.push(error('FINAL_STATE_BINDING', 'each final authority binding must carry phase-08-complete status'));
  }
  if (verification.finalState?.phase08 !== 'complete' || verification.finalState?.activeChild !== null
      || verification.finalState?.lastCompletedChild !== 85 || verification.finalState?.phase09 !== 'inactive'
      || verification.finalState?.soleNextGate !== 'Phase 09' || verification.finalState?.catalogPosition6Started !== false) {
    errors.push(error('FINAL_STATE_STATUS', 'final state must close #85 and leave Phase 09 as the sole inactive next gate'));
  }
  const github = context.github ?? snapshot.github;
  if (github) {
    const expectedIssues = {
      root: { number: 79, state: 'OPEN', labels: ['role:machine-learning-engineer', 'status:in-progress'], bodySha256: sha256(github[79]?.body ?? '') },
      child: { number: 85, state: 'CLOSED', labels: ['phase:08-manuscript', 'role:machine-learning-engineer', 'status:done'], bodySha256: sha256(github[85]?.body ?? '') },
    };
    if (!jsonEqual(verification.githubExpectations, expectedIssues)) errors.push(error('FINAL_ISSUE_BINDING', 'final root/child state, labels, or body hash drift'));
  }
  for (const [name, expected] of Object.entries(EXPECTED_COUNTS)) {
    if (verification.counts?.[name] !== expected) errors.push(error('FINAL_COUNT', `final count ${name} must equal ${expected}`));
  }
  const reviewPaths = (snapshot.phase08Paths ?? []).filter((path) => path.startsWith(`${ROLE}/reviews/phase-08/`) && !path.endsWith('-repair.md')).sort();
  const expectedReviewIdentities = reviewPaths.map((path) => {
    const reviewText = snapshot.files[path]?.text ?? '';
    const record = path.endsWith('task-01-bootstrap.md')
      ? parseReviewRecords(reviewText).find(isTask01ActivationRecord) : parseReviewRecord(reviewText);
    return { path, taskId: record?.taskId, producerIdentity: record?.producerIdentity, reviewerIdentity: record?.reviewerIdentity,
      specVerdict: record?.specVerdict, qualityVerdict: record?.qualityVerdict, repairPath: record?.repairPath ?? null,
      repairSha256: record?.repairSha256 ?? null, binding: { path, bytes: Buffer.byteLength(snapshot.files[path]?.text ?? ''), sha256: snapshot.files[path]?.sha256 },
      repairBinding: record?.repairPath ? { path: record.repairPath, bytes: Buffer.byteLength(snapshot.files[record.repairPath]?.text ?? ''), sha256: snapshot.files[record.repairPath]?.sha256 } : null };
  });
  if (!jsonEqual(verification.reviews, expectedReviewIdentities)) errors.push(error('FINAL_REVIEW_IDENTITY', 'all Task 00-07 base identities, verdicts, bindings, and applicable repairs must be exact'));
  const commandEvidence = verification.commandEvidence;
  if (commandEvidence?.validatorCommand !== `node ${BOOK}/validate-phase-08.mjs --stage=final-content`
      || commandEvidence?.testCommand !== `node --test ${BOOK}/validate-phase-08.test.mjs`
      || commandEvidence?.validatorSha256 !== snapshot.files[VALIDATOR_PATHS[0]]?.sha256
      || commandEvidence?.testSha256 !== snapshot.files[VALIDATOR_PATHS[1]]?.sha256
      || commandEvidence?.validatorExitCode !== 0 || commandEvidence?.testExitCode !== 0) {
    errors.push(error('FINAL_COMMAND_EVIDENCE', 'exact final-content validator/test commands and frozen hashes must be bound'));
  }
  if (!jsonEqual(commandEvidence?.commands, FINAL_REQUIRED_COMMANDS.map((command) => ({ command, exitCode: 0 })))) {
    errors.push(error('FINAL_COMMAND_EVIDENCE', 'all exact required command families must be bound with zero exit status'));
  }
  if (!(commandEvidence?.tests > 0) || commandEvidence.pass !== commandEvidence.tests
      || commandEvidence.fail !== 0 || commandEvidence.skipped !== 0 || commandEvidence.todo !== 0) {
    errors.push(error('FINAL_TEST_EVIDENCE', 'final test evidence must be positive and all-green'));
  }
  const activeCommitValid = /^[a-f0-9]{40}$/.test(verification.activePreClose?.checkpointCommit ?? '');
  const gitCommitValid = /^[a-f0-9]{40}$/.test(verification.git?.checkpointCommit ?? '');
  if (verification.git?.branch !== 'main' || !gitCommitValid
      || (activeCommitValid && verification.git.checkpointCommit !== verification.activePreClose?.checkpointCommit)
      || verification.git?.clean !== true || verification.git?.mainEquality !== true) {
    errors.push(error('FINAL_GIT_EXPECTATION', 'final verification must require clean three-way main equality'));
  }
  if (verification.stopBoundary?.visualsStarted !== false || verification.stopBoundary?.imagesStarted !== false
      || verification.stopBoundary?.pdfStarted !== false || verification.stopBoundary?.webStarted !== false
      || verification.stopBoundary?.publicationStarted !== false || verification.stopBoundary?.courseStarted !== false
      || verification.stopBoundary?.abhyaasStarted !== false || verification.stopBoundary?.secondVolumeStarted !== false
      || verification.stopBoundary?.catalogPosition6Started !== false || verification.stopBoundary?.nextRoleStarted !== false) {
    errors.push(error('FINAL_STOP_BOUNDARY', 'all downstream publication/course/Abhyaas/volume/role lanes must remain stopped'));
  }
  if (!jsonEqual(verification.finalPackage, buildFinalPackageDigest(snapshot))) {
    errors.push(error('FINAL_PACKAGE_PROJECTION', 'final package must bind the sorted closed projection and sole self/timestamp exclusions'));
  }
  return errors;
}

async function readRecord(root, path, optional = false) {
  try {
    const text = await readFile(resolve(root, path), 'utf8');
    return { path, text, sha256: sha256(text) };
  } catch (caught) {
    if (optional && caught?.code === 'ENOENT') return null;
    throw caught;
  }
}

async function listFiles(root, relativeRoot) {
  const absolute = resolve(root, relativeRoot);
  try {
    const entries = await readdir(absolute, { recursive: true, withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() || entry.isSymbolicLink())
      .map((entry) => {
        const parent = relative(absolute, entry.parentPath ?? entry.path);
        return [relativeRoot === '.' ? '' : relativeRoot, parent, entry.name].filter(Boolean).join('/');
      })
      .sort();
  } catch (caught) {
    if (caught?.code === 'ENOENT') return [];
    throw caught;
  }
}

async function listRepositoryFiles(root) {
  const ignored = new Set(['.git', 'node_modules', '.cache', 'cache', 'caches']);
  const files = [];
  async function walk(relativeRoot) {
    let entries;
    try { entries = await readdir(resolve(root, relativeRoot), { withFileTypes: true }); }
    catch (caught) { if (caught?.code === 'ENOENT') return; throw caught; }
    for (const entry of entries) {
      const path = relativeRoot === '.' ? entry.name : `${relativeRoot}/${entry.name}`;
      if (entry.isDirectory()) {
        if (!ignored.has(entry.name)) await walk(path);
      } else if (entry.isFile() || entry.isSymbolicLink()) files.push(path);
    }
  }
  await walk('.');
  return files.sort();
}

export async function loadRepositorySnapshot(root, options = {}) {
  const stage = options.stage ?? 'bootstrap';
  const files = {};
  const requiredPaths = [
    SPEC, PLAN, ...Object.keys(FROZEN_INPUTS),
    `${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`, `${ROLE}/issues/phase-08-manuscript.md`, FACTORY,
    `${ROLE}/reviews/phase-08/task-00-plan.md`, `${ROLE}/reviews/phase-08/task-00-plan-repair.md`,
  ];
  for (const path of requiredPaths) {
    const record = await readRecord(root, path, path === SPEC || path === PLAN);
    if (record) files[path] = record;
  }
  for (const path of VALIDATOR_PATHS) {
    const record = await readRecord(root, path, true);
    if (record) files[path] = record;
  }

  const phase07 = JSON.parse(files[`${BOOK}/phase-07-verification.json`].text);
  const registerPath = `${BOOK}/blueprints/blueprint-register.json`;
  const register = JSON.parse(files[registerPath].text);
  const blueprintBindings = new Map(
    phase07.artifacts
      .filter((artifact) => new RegExp(`^${BOOK}/blueprints/chapter-\\d{2}\\.md$`).test(artifact.path))
      .map((artifact) => [artifact.path, artifact.sha256]),
  );
  const blueprints = [];
  for (let index = 1; index <= 21; index += 1) {
    const path = `${BOOK}/blueprints/chapter-${String(index).padStart(2, '0')}.md`;
    const record = await readRecord(root, path, true);
    if (record) {
      files[path] = record;
      blueprints.push({ ...record, expectedSha256: blueprintBindings.get(path) });
    }
  }

  const [bookFiles, reviewFiles, scratchFiles] = await Promise.all([
    listFiles(root, BOOK),
    listFiles(root, `${ROLE}/reviews/phase-08`),
    listFiles(root, '.superpowers/sdd/2026-08-22-machine-learning-engineer-phase-08'),
  ]);
  const phase08Paths = [...bookFiles, ...reviewFiles, ...scratchFiles]
    .filter((path) =>
      ALL_PHASE08_PATHS.has(path)
      || path.startsWith(`${BOOK}/manuscript/`)
      || path.startsWith(`${BOOK}/companion/`)
      || path.startsWith(`${ROLE}/reviews/phase-08/`)
      || path.startsWith('.superpowers/sdd/2026-08-22-machine-learning-engineer-phase-08/'),
    )
    .sort();
  for (const path of phase08Paths) {
    if (!files[path]) {
      const record = await readRecord(root, path, true);
      if (record) files[path] = record;
    }
  }
  const reviewInventory = phase08Paths
    .filter((path) => path.startsWith(`${ROLE}/reviews/phase-08/`))
    .map((path) => path.split('/').at(-1));
  const productionInventory = phase08Paths.filter((path) => PRODUCTION_PATHS.includes(path));

  let originalityCorpus = null;
  if (['integration', 'pre-hostile', 'pre-close', 'final-content', 'final'].includes(stage)) {
    const researchPacks = [];
    for (let index = 1; index <= 21; index += 1) {
      const path = `${BOOK}/sources/research-packs/chapter-${String(index).padStart(2, '0')}.md`;
      const record = await readRecord(root, path, true);
      if (record) researchPacks.push({ chapterId: `MLE-CH-${String(index).padStart(2, '0')}`, text: record.text, path });
    }
    const publishedPaths = (await listFiles(root, 'content/publications'))
      .filter((path) => /\/chapters\/[^/]+\.mdx?$/.test(path) && !/\/chapters\/(?:qa|state)\//.test(path));
    const otherRoleTexts = [];
    for (const path of publishedPaths) {
      const record = await readRecord(root, path, true);
      if (record) otherRoleTexts.push({ path, text: record.text });
    }
    originalityCorpus = { researchPacks, otherRoleTexts };
  }

  let repositoryInventory;
  try {
    repositoryInventory = execFileSync(
      'git', ['ls-files', '--', ...BOUNDED_ROOTS],
      { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
    ).split('\n').filter(Boolean).sort();
  } catch {
    repositoryInventory = (
      await Promise.all(BOUNDED_ROOTS.map((path) => listFiles(root, path)))
    ).flat().sort();
  }
  let activationInventory = options.activationInventory ?? null;
  if (!activationInventory) {
    try {
      activationInventory = execFileSync(
        'git', ['ls-tree', '-r', '--name-only', ACTIVATION_COMMIT, '--', ...BOUNDED_ROOTS],
        { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] },
      ).split('\n').filter(Boolean).sort();
    } catch {
      activationInventory = repositoryInventory;
    }
  }

  const repositoryFilesystemInventory = await listRepositoryFiles(root);

  return {
    root: resolve(root), stage, files, phase07, register, blueprints,
    phase08Paths, reviewInventory, productionInventory,
    changedPaths: structuredClone(options.changedPaths ?? options.git?.changedPaths ?? []),
    git: options.git ? structuredClone(options.git) : null,
    github: options.github ? structuredClone(options.github) : null,
    repositoryInventory,
    repositoryFilesystemInventory,
    activationInventory: structuredClone(activationInventory),
    originalityCorpus,
  };
}

function sameArray(actual, expected) {
  return Array.isArray(actual) && actual.length === expected.length && actual.every((value, index) => value === expected[index]);
}

function countDerived(register) {
  const unique = (items) => new Set(items).size;
  return {
    parts: unique(register.chapters.map((chapter) => chapter.partId)),
    chapters: register.chapters.length,
    claims: register.claimTeaching.length,
    sources: unique(register.sourceUses.map((item) => item.sourceId)),
    sourceClaimEdges: register.sourceUses.length,
    cases: register.caseUses.length,
    caseChapterEdges: register.caseUses.reduce((sum, item) => sum + item.chapterIds.length, 0),
    claimCaseEdges: register.caseUses.reduce((sum, item) => sum + item.claimIds.length, 0),
    caseSourceUses: register.caseUses.reduce((sum, item) => sum + item.sourceUses.length, 0),
    ports: unique(register.ports.map((item) => item.portId)),
    chapterPortAssertions: register.ports.length,
    sections: register.sections.length,
    labs: register.labs.length,
    assessments: register.assessment.length,
    visuals: register.visuals.length,
    handoffs: register.handoffs.length,
    appendices: register.furniture.appendices.length,
    frontMatterItems: register.furniture.benchZero.length,
    closingItems: register.furniture.closing.length,
    imagegenCandidates: register.visuals.filter((item) => item.kind === 'imagegen-candidate').length,
  };
}

function validateRegister(snapshot) {
  const errors = [];
  const { register } = snapshot;
  const baseline = JSON.parse(snapshot.files[`${BOOK}/blueprints/blueprint-register.json`].text);
  if (canonicalJson(register) !== canonicalJson(baseline)) {
    errors.push(error('GRAPH_EXACT', 'register must preserve the complete frozen graph and every reverse edge'));
  }
  const derived = countDerived(register);
  for (const [name, expected] of Object.entries(EXPECTED_COUNTS)) {
    if (register.counts?.[name] !== expected) errors.push(error(`COUNT_${name}`, `expected ${name}=${expected}; got ${register.counts?.[name]}`));
    if (Object.hasOwn(derived, name) && derived[name] !== expected) {
      const code = name === 'sourceClaimEdges' ? 'SOURCE_EDGE_COUNT' : `DERIVED_${name}`;
      errors.push(error(code, `derived ${name} must equal ${expected}; got ${derived[name]}`));
    }
  }
  if (register.chapters.length !== 21) errors.push(error('CHAPTER_INVENTORY', 'expected exactly 21 chapters'));
  for (let index = 0; index < Math.min(21, register.chapters.length); index += 1) {
    const chapter = register.chapters[index];
    const frozen = baseline.chapters[index];
    if (chapter.order !== index + 1) errors.push(error('CHAPTER_ORDER', `chapter index ${index} has order ${chapter.order}`));
    if (chapter.chapterId !== frozen.chapterId || chapter.title !== frozen.title || chapter.slug !== frozen.slug) errors.push(error('CHAPTER_IDENTITY', `chapter ${index + 1} identity drift`));
    if (chapter.partId !== frozen.partId) errors.push(error('CHAPTER_PART', `${chapter.chapterId} part drift`));
    if (!sameArray(chapter.primaryClaimIds, frozen.primaryClaimIds)) errors.push(error('CHAPTER_CLAIMS', `${chapter.chapterId} primary claims drift`));
    if (!sameArray(chapter.portIds, EXPECTED_PORTS)) errors.push(error('CHAPTER_PORTS', `${chapter.chapterId} must bind all five ports in order`));
    if (chapter.milestoneId !== EXPECTED_DOSSIERS[index]) errors.push(error('DOSSIER_LINEAGE', `${chapter.chapterId} milestone drift`));
    if (!sameArray(chapter.sectionIds, frozen.sectionIds) || !sameArray(chapter.labIds, frozen.labIds) || !sameArray(chapter.visualIds, frozen.visualIds)) errors.push(error('CHAPTER_BLUEPRINT_BINDING', `${chapter.chapterId} output bindings drift`));
  }
  if (register.sourceUses.length !== 160) errors.push(error('SOURCE_EDGE_COUNT', 'expected exactly 160 source-claim edges'));
  return errors;
}

export function parseReviewRecord(text) {
  return parseReviewRecords(text).at(-1) ?? null;
}

export function parseReviewRecords(text) {
  return [...text.matchAll(/```json\s*([\s\S]*?)```/g)].flatMap((block) => {
    try { return [JSON.parse(block[1])]; } catch { return []; }
  });
}

function isTask01ActivationRecord(record) {
  return record?.taskId === 'TASK-01'
    && jsonEqual(Object.fromEntries((record.artifactBindings ?? []).map((binding) => [binding.path, binding.sha256])), TASK01_ACTIVATION_BINDINGS)
    && record.repairSha256 === TASK01_ACTIVATION_REPAIR_SHA256
    && record.specVerdict === 'SPEC COMPLIANCE PASS' && record.qualityVerdict === 'QUALITY APPROVED';
}

function reviewIsFailed(text = '') {
  return /SPEC COMPLIANCE FAIL/.test(text) && /QUALITY CHANGES REQUESTED/.test(text)
    && !/SPEC COMPLIANCE PASS\s*\nQUALITY APPROVED\s*$/s.test(text);
}

function reviewIsAccepted(text = '') {
  return /SPEC COMPLIANCE PASS\s*\nQUALITY APPROVED\s*$/s.test(text);
}

function reviewPreservesFailureForRepair(snapshot, basePath, repairPath) {
  const base = snapshot.files[basePath]?.text ?? '';
  if (reviewIsFailed(base)) return true;
  if (!reviewIsAccepted(base)) return false;
  const record = parseReviewRecord(base);
  return record?.priorVerdict === 'SPEC COMPLIANCE FAIL / QUALITY CHANGES REQUESTED'
    && record.repairPath === repairPath
    && record.repairSha256 === snapshot.files[repairPath]?.sha256;
}

function missingPaths(seen, paths) {
  return paths.filter((path) => !seen.has(path));
}

function validateStageRequirements(snapshot, stage, seen) {
  const errors = [];
  if (stage === 'bootstrap') return errors;
  const missingChapters = missingPaths(seen, CHAPTER_PATHS);
  const missingFurniture = missingPaths(seen, FURNITURE_PATHS);
  const missingCompanion = missingPaths(seen, COMPANION_PATHS);
  const requiredLaneReviews = [
    `${ROLE}/reviews/phase-08/task-01-bootstrap.md`,
    `${ROLE}/reviews/phase-08/task-02-lane-a.md`,
    `${ROLE}/reviews/phase-08/task-03-lane-b.md`,
    `${ROLE}/reviews/phase-08/task-04-lane-c.md`,
    `${ROLE}/reviews/phase-08/task-05-companion.md`,
  ];
  const missingLaneReviews = requiredLaneReviews.filter((path) => !seen.has(path) || !reviewIsAccepted(snapshot.files[path]?.text));
  if (missingChapters.length) errors.push(error('STAGE_MANUSCRIPT_MISSING', `missing ${missingChapters.length} chapter manuscripts`));
  if (missingFurniture.length) errors.push(error('STAGE_FURNITURE_MISSING', `missing ${missingFurniture.length} furniture files`));
  if (missingCompanion.length) errors.push(error('STAGE_COMPANION_MISSING', `missing ${missingCompanion.length} companion files`));
  if (missingLaneReviews.length) errors.push(error('STAGE_REVIEW_MISSING', `missing ${missingLaneReviews.length} accepted production reviews`));
  if (missingPaths(seen, SCRATCH_PATHS).length) errors.push(error('STAGE_LANE_MANIFEST_MISSING', 'all three lane manifests are required during production and integration'));

  if (['integration', 'pre-hostile', 'pre-close', 'final-content', 'final'].includes(stage)) {
    const missingIntegration = missingPaths(seen, INTEGRATION_PATHS);
    const task06 = `${ROLE}/reviews/phase-08/task-06-canonical-integration.md`;
    if (!seen.has(task06) || !reviewIsAccepted(snapshot.files[task06]?.text)) missingIntegration.push(task06);
    if (missingIntegration.length) errors.push(error('STAGE_INTEGRATION_MISSING', `missing ${missingIntegration.length} integration files`));
  }
  if (['pre-close', 'final-content', 'final'].includes(stage) && (!seen.has(`${ROLE}/reviews/phase-08/task-07-hostile-integration.md`) || !reviewIsAccepted(snapshot.files[`${ROLE}/reviews/phase-08/task-07-hostile-integration.md`]?.text))) {
    errors.push(error('STAGE_REVIEW_MISSING', 'hostile integration review is required before close'));
  }
  return errors;
}

function validateConditionalRepairs(snapshot) {
  const errors = [];
  for (const repairPath of snapshot.phase08Paths.filter((path) => path.endsWith('-repair.md'))) {
    const basePath = repairPath.replace(/-repair\.md$/, '.md');
    if (!reviewPreservesFailureForRepair(snapshot, basePath, repairPath)) {
      errors.push(error('REPAIR_WITHOUT_FAILURE', 'repair path requires a preserved failed base review', repairPath));
    }
  }
  return errors;
}

function validateInventory(snapshot, stage) {
  const errors = [];
  const seen = new Set(snapshot.phase08Paths);
  for (const path of snapshot.phase08Paths) {
    if (!ALL_PHASE08_PATHS.has(path)) errors.push(error('UNEXPECTED_PHASE08_PATH', 'path is outside the closed Phase 08 allowlist', path));
    if (stage === 'bootstrap' && !BOOTSTRAP_ALLOWED.has(path)) {
      const isFailedBootstrapReview = path === `${ROLE}/reviews/phase-08/task-01-bootstrap.md`
        && reviewIsFailed(snapshot.files[path]?.text);
      const isAcceptedBootstrapReview = path === `${ROLE}/reviews/phase-08/task-01-bootstrap.md`
        && reviewIsAccepted(snapshot.files[path]?.text);
      const isBootstrapRepair = path === `${ROLE}/reviews/phase-08/task-01-bootstrap-repair.md`
        && reviewPreservesFailureForRepair(
          snapshot,
          `${ROLE}/reviews/phase-08/task-01-bootstrap.md`,
          `${ROLE}/reviews/phase-08/task-01-bootstrap-repair.md`,
        );
      if (!isFailedBootstrapReview && !isAcceptedBootstrapReview && !isBootstrapRepair) errors.push(error('STAGE_PATH_FORBIDDEN', 'path is not legal at bootstrap', path));
    }
  }
  const futurePaths = stage === 'production'
    ? [...INTEGRATION_PATHS, `${ROLE}/reviews/phase-08/task-06-canonical-integration.md`, `${ROLE}/reviews/phase-08/task-06-canonical-integration-repair.md`, `${ROLE}/reviews/phase-08/task-07-hostile-integration.md`, `${ROLE}/reviews/phase-08/task-07-hostile-integration-repair.md`, FINAL_VERIFICATION]
    : ['integration', 'pre-hostile'].includes(stage)
      ? [`${ROLE}/reviews/phase-08/task-07-hostile-integration.md`, `${ROLE}/reviews/phase-08/task-07-hostile-integration-repair.md`, FINAL_VERIFICATION]
      : stage === 'pre-close'
        ? [FINAL_VERIFICATION]
        : [];
  for (const path of futurePaths) {
    if (seen.has(path)) errors.push(error('STAGE_PATH_FORBIDDEN', 'artifact belongs to a future Phase 08 stage', path));
  }
  if (stage === 'bootstrap') {
    for (const path of VALIDATOR_PATHS) {
      if (!seen.has(path)) errors.push(error('BOOTSTRAP_FILE_MISSING', 'validator and test must exist at GREEN bootstrap', path));
    }
  }
  if (!['final-content', 'final'].includes(stage) && seen.has(FINAL_VERIFICATION)) errors.push(error('FINAL_VERIFICATION_TIMING', 'final verification may exist only after child closure'));
  if (['final-content', 'final'].includes(stage) && !seen.has(FINAL_VERIFICATION)) errors.push(error('FINAL_VERIFICATION_TIMING', 'closure stages require final verification'));
  errors.push(...validateStageRequirements(snapshot, stage, seen));
  errors.push(...validateConditionalRepairs(snapshot));
  return errors;
}

export function validateAuthorities(snapshot, stage) {
  const errors = [];
  const paths = [`${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`, `${ROLE}/issues/phase-08-manuscript.md`, FACTORY];
  for (const path of paths) {
    const text = snapshot.files[path]?.text ?? '';
    const closureStage = ['final-content', 'final'].includes(stage);
    const phase08Active = /Phase 08/i.test(text) && /#85/.test(text) && /\bactive\b/i.test(text);
    const phase08Complete = /Phase 08/i.test(text) && /\b(?:complete|completed|done)\b/i.test(text);
    const closedChild = /#85[^\n]*(?:closed|done)|(?:closed|done)[^\n]*#85/i.test(text)
      && /(?:no active child|active child[^\n]*(?:none|null))/i.test(text);
    if (!closureStage && !phase08Active) errors.push(error('FOUR_STATE_AUTHORITY', 'all four authorities must project active Phase 08', path));
    if (closureStage && (!phase08Complete || !closedChild)) errors.push(error('FINAL_AUTHORITY_STATE', 'all four authorities must project Phase 08 complete, #85 last completed, and no active child', path));
    if (/Phase 09[^\n]*\b(active|in progress|started)\b/i.test(text)
        && !/Phase 09[^\n]*\binactive\b/i.test(text)) errors.push(error('PHASE09_INACTIVE', 'Phase 09 must remain inactive', path));
    const exactNextGate = (/Phase 09[^\n]*(?:sole next gate|next gate)|(?:sole next gate|next gate)[^\n]*Phase 09/i.test(text))
      && /Phase 09[^\n]*inactive|inactive[^\n]*Phase 09/i.test(text);
    if (closureStage && !exactNextGate) {
      errors.push(error('FINAL_NEXT_GATE', 'Phase 09 must be the sole next gate and inactive', path));
    }
    const catalogStopped = /catalog position 6[^\n]*(?:not started|inactive)/i.test(text);
    if (closureStage && !catalogStopped) errors.push(error('FINAL_CATALOG_BOUNDARY', 'catalog position 6 must remain not started', path));
    if (/Catalog position 6[^\n]*\b(active|in progress|started)\b/i.test(text) && !catalogStopped) errors.push(error('PHASE09_INACTIVE', 'catalog position 6 must remain not started', path));
  }
  return errors;
}

export function validateExternal(snapshot, stage) {
  const errors = [];
  if (snapshot.git) {
    if (!(snapshot.git.head === snapshot.git.originMain && snapshot.git.head === snapshot.git.remoteMain)) errors.push(error('GIT_MAIN_EQUALITY', 'HEAD, origin/main, and live remote main must agree'));
    if (stage === 'bootstrap') {
      for (const path of snapshot.git.changedPaths ?? []) {
        if (!BOOTSTRAP_DIRT.has(path)) errors.push(error('GIT_BOOTSTRAP_DIRT', 'unexpected dirty path at bootstrap', path));
      }
    }
    if (stage === 'final-content') {
      const allowed = new Set([`${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`, `${ROLE}/issues/phase-08-manuscript.md`, FACTORY, FINAL_VERIFICATION]);
      const changed = [...(snapshot.git.changedPaths ?? [])].sort();
      const exact = [...allowed].sort();
      if (snapshot.git.clean !== false || !sameArray(changed, exact)) errors.push(error('GIT_FINAL_CONTENT_DIRT', 'final-content requires exactly the four closure authorities and verification as dirt'));
    }
    if (stage === 'final' && (!snapshot.git.clean || (snapshot.git.changedPaths ?? []).length !== 0)) {
      errors.push(error('GIT_FINAL_CLEAN', 'final stage requires a clean worktree'));
    }
  }
  const github = snapshot.github;
  if (github) {
    if (github[79]?.state !== 'OPEN' || !sameArray(github[79]?.labels, ['role:machine-learning-engineer', 'status:in-progress'])) errors.push(error('GITHUB_ROOT', '#79 must be open with exact ordered labels'));
    if (github[84]?.state !== 'CLOSED' || !sameArray(github[84]?.labels, ['phase:07-chapter-blueprints', 'role:machine-learning-engineer', 'status:done'])) errors.push(error('GITHUB_PHASE07', '#84 must be closed/done with exact ordered labels'));
    const closureStage = ['final-content', 'final'].includes(stage);
    const expected85State = closureStage ? 'CLOSED' : 'OPEN';
    const expected85Labels = closureStage
      ? ['phase:08-manuscript', 'role:machine-learning-engineer', 'status:done']
      : ['phase:08-manuscript', 'role:machine-learning-engineer', 'status:in-progress'];
    if (github[85]?.state !== expected85State || !sameArray(github[85]?.labels, expected85Labels)) errors.push(error('GITHUB_PHASE08', '#85 state or ordered labels drift'));
    if (github[79]?.body !== snapshot.files[`${ROLE}/issues/root.md`]?.text || github[85]?.body !== snapshot.files[`${ROLE}/issues/phase-08-manuscript.md`]?.text) errors.push(error('GITHUB_BODY_HASH', 'live issue bodies must byte-equal local issue authorities'));
    if (closureStage && github[85]?.state !== 'CLOSED') errors.push(error('FINAL_CHILD_STATE', 'final verification requires closed #85'));
  }
  return errors;
}

function validateStopBoundary(snapshot) {
  const errors = [];
  const patterns = [
    /^public\/.*machine-learning-engineering/i,
    /^output\/.*machine-learning-engineering/i,
    /^content\/publications\/machine-learning-engineering/i,
    /^content\/courses\/machine-learning-engineering/i,
    /certification/i,
    /abhyaas/i,
    new RegExp(`^${BOOK}/volume-02/`),
    /^project-control\/roles\/(?!machine-learning-engineer\/)/,
  ];
  for (const path of [...(snapshot.changedPaths ?? []), ...(snapshot.git?.changedPaths ?? [])]) {
    if (patterns.some((pattern) => pattern.test(path))) errors.push(error('STOP_BOUNDARY', 'path crosses the Phase 08 stop boundary', path));
  }
  const activation = new Set(snapshot.activationInventory ?? []);
  for (const path of snapshot.repositoryInventory ?? []) {
    const legalPhase08 = ALL_PHASE08_PATHS.has(path)
      || path === `${ROLE}/ROLE-STATE.md`
      || path === `${ROLE}/issues/root.md`
      || path === `${ROLE}/issues/phase-08-manuscript.md`;
    if (!activation.has(path) && !legalPhase08) {
      errors.push(error('STOP_BOUNDARY_COMMITTED', 'committed file is outside the activation tree and closed Phase 08 allowlist', path));
    }
  }
  for (const path of snapshot.repositoryFilesystemInventory ?? []) {
    const legalPhase08 = ALL_PHASE08_PATHS.has(path)
      || path === `${ROLE}/ROLE-STATE.md`
      || path === `${ROLE}/issues/root.md`
      || path === `${ROLE}/issues/phase-08-manuscript.md`;
    const knownRuntime = path === '.DS_Store' || path.includes('/.DS_Store')
      || path.startsWith('.astro/') || path.startsWith('tmp/web-proof/')
      || (path.startsWith('.superpowers/') && !SCRATCH_PATHS.includes(path));
    const mleNamed = /machine-learning-engineer|machine-learning-engineering|(?:^|[-_/])mle(?:[-_/]|$)/i.test(path);
    const closedFamily = mleNamed && (patterns.some((pattern) => pattern.test(path))
      || /(?:^|\/)(?:manuscript|publication|publications|images?|pdfs?|courses?|abhyaas)(?:\/|$)/i.test(path)
      || /\.(?:pdf|png|jpe?g|webp|svg)$/i.test(path));
    if (!activation.has(path) && !legalPhase08 && !knownRuntime && closedFamily) {
      errors.push(error('STOP_BOUNDARY_FILESYSTEM', 'real filesystem path is outside the activation tree and closed Phase 08 allowlist', path));
    }
  }
  return errors;
}

function parseWordRange(value = '') {
  const match = value.match(/([\d,]+)\s*[-–]\s*([\d,]+)/);
  return match ? { minWords: Number(match[1].replaceAll(',', '')), maxWords: Number(match[2].replaceAll(',', '')) } : null;
}

function jsonEqual(actual, expected) {
  return JSON.stringify(actual) === JSON.stringify(expected);
}

function uniqueInOrder(items) {
  return [...new Set(items)];
}

function deriveReverseMappings(register) {
  return {
    claimPrimary: register.claimTeaching.map((item) => [
      item.claimId, item.chapterId, item.primarySectionId, item.sourceIds, item.caseIds,
    ]),
    sourceClaim: register.sourceUses.map((item) => [item.sourceId, item.claimId, item.chapterId, item.sectionIds]),
    caseChapter: register.caseUses.map((item) => [item.caseId, item.chapterIds]),
    claimCase: register.caseUses.map((item) => [item.caseId, item.claimIds]),
    caseSource: register.caseUses.map((item) => [item.caseId, item.sourceUses]),
    architectureByChapter: register.chapters.map((chapter) => {
      const sections = register.sections.filter((item) => item.chapterId === chapter.chapterId);
      return [
        chapter.chapterId,
        uniqueInOrder(sections.flatMap((item) => item.architectureClaimIds)),
        uniqueInOrder(sections.flatMap((item) => item.boundaryIds)),
        uniqueInOrder(sections.flatMap((item) => item.scenarioIds)),
        uniqueInOrder(sections.flatMap((item) => item.domainIds)),
      ];
    }),
    portsByChapter: register.chapters.map((chapter) => [chapter.chapterId, chapter.portIds]),
    milestoneToChapter: register.chapters.map((chapter) => [
      chapter.milestoneId, chapter.chapterId, chapter.incomingState,
      chapter.outgoingStates, chapter.nextChapterId,
    ]),
  };
}

function expectedRegisterCounts(baseline) {
  return { ...EXPECTED_COUNTS, ...countDerived(baseline) };
}

function validateBoundArtifactList(actual, expectedPaths, files, code) {
  const errors = [];
  const expected = [...expectedPaths].sort();
  const paths = (actual ?? []).map((item) => item.path).sort();
  if (!sameArray(paths, expected)) return [error(code, 'registered artifact paths must equal the exact closed inventory')];
  for (const item of actual ?? []) {
    const loaded = files[item.path];
    if (!loaded || item.sha256 !== loaded.sha256 || item.bytes !== Buffer.byteLength(loaded.text, 'utf8')) {
      errors.push(error(code, 'registered byte length or SHA-256 differs from loaded bytes', item.path));
    }
  }
  return errors;
}

export function validateManuscriptRegister(snapshot, register, registerPath = `${BOOK}/manuscript/manuscript-register.json`) {
  const errors = [];
  const baseline = snapshot.register;
  const expectedCounts = expectedRegisterCounts(baseline);
  if (register.schema !== 'mle-phase-08-manuscript-register/v1') {
    errors.push(error('MANUSCRIPT_REGISTER', 'manuscript register schema drift', registerPath));
    return errors;
  }
  for (const family of ['frozen', 'derived']) {
    for (const [name, expected] of Object.entries(expectedCounts)) {
      if (register.counts?.[family]?.[name] !== expected) {
        errors.push(error('REGISTER_COUNT', `${family} ${name} must independently equal ${expected}`, registerPath));
      }
    }
  }
  if (register.counts?.equal !== true) errors.push(error('REGISTER_COUNT', 'frozen and derived tuples must be marked equal', registerPath));

  errors.push(...validateBoundArtifactList(register.furniture, FURNITURE_PATHS, snapshot.files, 'REGISTER_ARTIFACT_HASH'));
  errors.push(...validateBoundArtifactList(register.companion?.files, COMPANION_PATHS, snapshot.files, 'REGISTER_ARTIFACT_HASH'));
  const expectedReviewPaths = [
    `${ROLE}/reviews/phase-08/task-02-lane-a.md`, `${ROLE}/reviews/phase-08/task-02-lane-a-repair.md`,
    `${ROLE}/reviews/phase-08/task-03-lane-b.md`, `${ROLE}/reviews/phase-08/task-03-lane-b-repair.md`,
    `${ROLE}/reviews/phase-08/task-04-lane-c.md`, `${ROLE}/reviews/phase-08/task-04-lane-c-repair.md`,
    `${ROLE}/reviews/phase-08/task-05-companion.md`, `${ROLE}/reviews/phase-08/task-05-companion-repair.md`,
  ];
  errors.push(...validateBoundArtifactList(register.reviewBindings, expectedReviewPaths, snapshot.files, 'REGISTER_REVIEW_BINDING'));

  if (!Array.isArray(register.chapters) || register.chapters.length !== 21) {
    errors.push(error('REGISTER_CHAPTER_INVENTORY', 'register must bind exactly 21 chapters', registerPath));
  } else {
    for (let index = 0; index < 21; index += 1) {
      const item = register.chapters[index];
      const frozen = baseline.chapters[index];
      const loaded = snapshot.files[CHAPTER_PATHS[index]];
      const blueprint = snapshot.blueprints[index];
      const range = parseWordRange(baseline.handoffs[index].wordRange);
      if (!loaded || item.path !== CHAPTER_PATHS[index] || item.sha256 !== loaded.sha256
          || item.bytes !== Buffer.byteLength(loaded.text, 'utf8')) {
        errors.push(error('REGISTER_ARTIFACT_HASH', 'chapter binding differs from loaded bytes', CHAPTER_PATHS[index]));
      }
      const words = loaded ? proseWords(loaded.text) : null;
      if (item.proseWords !== words || item.frozenWordRange?.min !== range?.minWords
          || item.frozenWordRange?.max !== range?.maxWords
          || item.wordRangePass !== Boolean(words >= range?.minWords && words <= range?.maxWords)) {
        errors.push(error('REGISTER_WORD_COUNT', 'chapter prose count or frozen range was not recomputed', CHAPTER_PATHS[index]));
      }
      if (item.chapterId !== frozen.chapterId || item.order !== frozen.order || item.title !== frozen.title
          || item.slug !== frozen.slug || item.partId !== frozen.partId || item.milestoneId !== frozen.milestoneId
          || item.incomingState !== frozen.incomingState || !jsonEqual(item.outgoingStates, frozen.outgoingStates)
          || item.nextChapterId !== frozen.nextChapterId || item.blueprint?.path !== blueprint?.path
          || item.blueprint?.sha256 !== blueprint?.sha256 || item.blueprint?.bytes !== Buffer.byteLength(blueprint?.text ?? '', 'utf8')) {
        errors.push(error('REGISTER_CHAPTER_PROJECTION', 'chapter identity, lifecycle, or blueprint projection drift', CHAPTER_PATHS[index]));
      }
    }
  }

  const expectedReverse = deriveReverseMappings(baseline);
  for (const [name, projection] of Object.entries(expectedReverse)) {
    if (!jsonEqual(register.reverseMappings?.[name], projection)) {
      errors.push(error('REGISTER_REVERSE_MAPPING', `${name} differs from independently derived frozen edges`, registerPath));
    }
    const exactHash = sha256(JSON.stringify(register.reverseMappings?.[name]));
    if (register.reverseMappingSha256?.[name] !== exactHash) {
      errors.push(error('REGISTER_REVERSE_HASH', `${name} compact projection digest drift`, registerPath));
    }
  }
  const exactExceptions = [
    ['MLE-CH-13', 'frozen-source-ledger'],
    ['MLE-CH-14', 'frozen-source-ledger'],
    ['MLE-CH-21', 'canonical-id-list'],
  ];
  const actualExceptions = (register.originality?.structuredProjectionExceptions ?? []).map((item) => [item.chapterId, item.kind]);
  const exceptionRecords = register.originality?.structuredProjectionExceptions ?? [];
  if (register.originality?.status !== 'PASS'
      || register.originality?.proseSameChapterResearchPackExact20WordMatches !== 0
      || register.originality?.publishedOtherRoleExact20WordMatches !== 0
      || register.originality?.ordinaryAuthorialInternalExact20WordDuplicates !== 0
      || register.originality?.humanReview !== 'PASS'
      || register.originality?.proseExcludedAuditRequired !== true
      || !jsonEqual(actualExceptions, exactExceptions)
      || Object.hasOwn(exceptionRecords[0] ?? {}, 'exactWords') || Object.hasOwn(exceptionRecords[1] ?? {}, 'exactWords')
      || exceptionRecords[2]?.exactWords !== 36) {
    errors.push(error('REGISTER_ORIGINALITY', 'originality result or closed structured-exception classification drift', registerPath));
  }
  if (register.integrationState !== 'CANONICAL_INTEGRATION_ACCEPTED') {
    errors.push(error('REGISTER_INTEGRATION_STATE', 'canonical integration state is not accepted', registerPath));
  }
  return errors;
}

function validateLoadedArtifacts(snapshot, stage) {
  const errors = [];
  for (let index = 0; index < CHAPTER_PATHS.length; index += 1) {
    const path = CHAPTER_PATHS[index];
    if (!snapshot.files[path]) continue;
    const range = parseWordRange(snapshot.register.handoffs[index]?.wordRange);
    if (!range) {
      errors.push(error('MANUSCRIPT_DEPTH', 'frozen word range is unreadable', path));
      continue;
    }
    errors.push(...validateManuscriptChapter(
      snapshot.files[path].text,
      snapshot.register.chapters[index],
      snapshot.register,
      {
        ...range,
        requireExactBlueprint: true,
        otherChapters: CHAPTER_PATHS.filter((other) => other !== path && snapshot.files[other]).map((other) => snapshot.files[other].text),
      },
    ).map((item) => ({ ...item, path })));
  }
  if (snapshot.originalityCorpus && CHAPTER_PATHS.every((path) => snapshot.files[path])) {
    errors.push(...validateOriginality({
      chapters: CHAPTER_PATHS.map((path, index) => ({ chapterId: `MLE-CH-${String(index + 1).padStart(2, '0')}`, text: snapshot.files[path].text })),
      ...snapshot.originalityCorpus,
    }));
  }

  const manuscriptRegisterPath = `${BOOK}/manuscript/manuscript-register.json`;
  if (snapshot.files[manuscriptRegisterPath]) {
    try {
      const register = JSON.parse(snapshot.files[manuscriptRegisterPath].text);
      errors.push(...validateManuscriptRegister(snapshot, register, manuscriptRegisterPath));
    } catch {
      errors.push(error('MANUSCRIPT_REGISTER', 'manuscript register must be valid JSON', manuscriptRegisterPath));
    }
  }

  const furnitureErrors = validateFurnitureArtifacts(snapshot.files, snapshot.register);
  errors.push(...furnitureErrors);
  if (furnitureErrors.length) errors.push(error('FURNITURE_CONTRACT', 'whole-book furniture contract is incomplete'));

  const presentCompanion = COMPANION_PATHS.filter((path) => snapshot.files[path]);
  if (presentCompanion.length > 0 && presentCompanion.length !== COMPANION_PATHS.length) {
    errors.push(error('COMPANION_INVENTORY', `companion inventory is partial: ${presentCompanion.length}/${COMPANION_PATHS.length}`));
  }
  let expectedPriorHash = snapshot.files[`${BOOK}/companion/fixtures/bl-entry.json`]?.sha256 ?? null;
  const expectedFields = ['disposition', 'incomingState', 'milestoneId', 'outgoingState', 'priorHash'];
  for (let index = 0; index < EXPECTED_FILES.length; index += 1) {
    const path = EXPECTED_FILES[index];
    if (!snapshot.files[path]) continue;
    try {
      const record = JSON.parse(snapshot.files[path].text);
      const complete = expectedFields.every((field) => Object.hasOwn(record, field))
        && record.disposition === 'PASS'
        && typeof record.incomingState === 'string'
        && typeof record.outgoingState === 'string'
        && /^[a-f0-9]{64}$/.test(record.priorHash);
      if (!complete || record.milestoneId !== EXPECTED_DOSSIERS[index] || snapshot.files[path].text !== canonicalJson(record) || (expectedPriorHash && record.priorHash !== expectedPriorHash)) {
        errors.push(error('COMPANION_EXPECTED_RECORD', `expected complete canonical ${EXPECTED_DOSSIERS[index]} record with exact prior hash`, path));
      }
      expectedPriorHash = snapshot.files[path].sha256;
    } catch {
      errors.push(error('COMPANION_EXPECTED_RECORD', 'expected dossier record must be valid JSON', path));
    }
  }
  for (const path of COMPANION_PATHS.filter((item) => item.endsWith('.json') && !EXPECTED_FILES.includes(item))) {
    if (!snapshot.files[path]) continue;
    try {
      JSON.parse(snapshot.files[path].text);
    } catch {
      errors.push(error('COMPANION_JSON', 'companion JSON artifact is invalid', path));
    }
  }

  if (snapshot.files[FINAL_VERIFICATION]) {
    try {
      const verification = JSON.parse(snapshot.files[FINAL_VERIFICATION].text);
      errors.push(...validateFinalVerification(verification, snapshot));
    } catch {
      errors.push(error('FINAL_VERIFICATION_SCHEMA', 'final verification must be valid JSON', FINAL_VERIFICATION));
    }
  }

  for (const path of snapshot.phase08Paths.filter((item) => item.startsWith(`${ROLE}/reviews/phase-08/task-`) && !item.endsWith('-repair.md'))) {
    if (path.endsWith('task-00-plan.md')) continue;
    const text = snapshot.files[path]?.text ?? '';
    if (stage === 'bootstrap' && reviewIsFailed(text)) continue;
    const terminal = parseReviewRecord(text);
    const record = path.endsWith('task-01-bootstrap.md') && stage !== 'bootstrap'
      ? parseReviewRecords(text).find(isTask01ActivationRecord) : terminal;
    if (!record) {
      errors.push(error('REVIEW_SCHEMA', 'review must end with a machine-readable closed record', path));
      continue;
    }
    const expected = EXPECTED_REVIEW_IDENTITIES[record.taskId];
    errors.push(...validateReviewRecord(record, expected, {
      files: snapshot.files, reviewPath: path,
      allowHistoricalBindings: record.taskId === 'TASK-01' && stage !== 'bootstrap',
      activePackageDigest: record.taskId === 'TASK-07' ? buildActivePackageDigest(snapshot) : null,
    }).map((item) => ({ ...item, path })));
  }
  return errors;
}

export function validatePhase08Snapshot(snapshot, options = {}) {
  const stage = options.stage ?? snapshot.stage ?? 'bootstrap';
  const errors = [];
  if (!STAGES.has(stage)) return [error('STAGE_UNKNOWN', `unsupported stage ${stage}`)];
  for (const [path, expected] of Object.entries(FROZEN_INPUTS)) {
    if (snapshot.files[path]?.sha256 !== expected) errors.push(error('FROZEN_INPUT_HASH', `expected ${expected}; got ${snapshot.files[path]?.sha256 ?? 'missing'}`, path));
  }
  if (snapshot.blueprints.length !== 21) errors.push(error('BLUEPRINT_INVENTORY', `expected 21 chapter blueprints; got ${snapshot.blueprints.length}`));
  for (const blueprint of snapshot.blueprints) {
    if (!blueprint.expectedSha256 || blueprint.sha256 !== blueprint.expectedSha256) errors.push(error('BLUEPRINT_HASH', 'chapter blueprint hash differs from Phase 07 verification', blueprint.path));
  }
  errors.push(...validateRegister(snapshot));
  errors.push(...validateInventory(snapshot, stage));
  errors.push(...validateAuthorities(snapshot, stage));
  errors.push(...validateExternal(snapshot, stage));
  errors.push(...validateStopBoundary(snapshot));
  errors.push(...validateLoadedArtifacts(snapshot, stage));
  return errors;
}

const REVIEW_FIELDS = [
  'taskId', 'producerIdentity', 'reviewerIdentity', 'reviewedAt', 'artifactBindings',
  'priorVerdict', 'repairPath', 'repairSha256', 'reacceptedBy', 'reacceptedAt',
  'specVerdict', 'qualityVerdict',
];

export function validateReviewRecord(review, expectedIdentity, context = {}) {
  const errors = [];
  const pathContract = context.reviewPath ? REVIEW_CONTRACTS[context.reviewPath] : null;
  if (context.reviewPath && (!pathContract || review.taskId !== pathContract.taskId)) {
    errors.push(error('REVIEW_PATH_TASK', 'review path and task identity must match exactly', context.reviewPath));
  }
  const effectiveIdentity = pathContract ?? expectedIdentity;
  if (REVIEW_FIELDS.some((field) => !Object.hasOwn(review, field)) || !Array.isArray(review.artifactBindings) || review.artifactBindings.length === 0) errors.push(error('REVIEW_SCHEMA', 'review record is missing a closed-schema field or binding'));
  if (review.producerIdentity === review.reviewerIdentity) errors.push(error('REVIEW_SELF_APPROVAL', 'producer and reviewer must differ'));
  if (!effectiveIdentity || review.producerIdentity !== effectiveIdentity.producerIdentity || review.reviewerIdentity !== effectiveIdentity.reviewerIdentity) errors.push(error('REVIEW_IDENTITY', 'review identities differ from the frozen plan'));
  if (pathContract) {
    const actualPaths = (review.artifactBindings ?? []).map((binding) => binding.path).sort();
    const requiredPaths = [...pathContract.artifacts];
    const task06Repair = `${ROLE}/reviews/phase-08/task-06-canonical-integration-repair.md`;
    if (review.taskId === 'TASK-07' && context.files?.[task06Repair]) requiredPaths.push(task06Repair);
    requiredPaths.sort();
    if (!sameArray(actualPaths, requiredPaths)) errors.push(error('REVIEW_ARTIFACT_SET', 'review bindings must equal the exact frozen task artifact set', context.reviewPath));
  }
  const hasRepair = [review.repairPath, review.repairSha256, review.reacceptedBy, review.reacceptedAt].every(Boolean);
  const hasAnyRepair = [review.repairPath, review.repairSha256, review.reacceptedBy, review.reacceptedAt].some(Boolean);
  if (hasAnyRepair && !hasRepair) errors.push(error('REVIEW_REPAIR_CHAIN', 'repair chain must be complete'));
  if (hasRepair) {
    const expectedRepairPath = context.reviewPath?.replace(/\.md$/, '-repair.md');
    if (!review.priorVerdict || (expectedRepairPath && review.repairPath !== expectedRepairPath) || review.reacceptedBy !== review.reviewerIdentity || Date.parse(review.reacceptedAt) <= Date.parse(review.reviewedAt) || !/^[a-f0-9]{64}$/.test(review.repairSha256)) errors.push(error('REVIEW_REPAIR_CHAIN', 'repair must bind a prior failure, exact repair path, and same later reviewer'));
  } else if (review.priorVerdict) {
    errors.push(error('REVIEW_REPAIR_CHAIN', 'prior failure requires a complete repair chain'));
  }
  if (context.files && !context.allowHistoricalBindings) {
    for (const binding of review.artifactBindings ?? []) {
      const expectedSha256 = binding?.path === ACTIVE_DIGEST_BINDING_PATH
        ? context.activePackageDigest?.packageSha256 : context.files[binding?.path]?.sha256;
      if (!binding?.path || expectedSha256 !== binding.sha256) {
        errors.push(error('REVIEW_ARTIFACT_BINDING', 'review artifact binding differs from loaded bytes', binding?.path));
      }
    }
    if (review.repairPath && context.files[review.repairPath]?.sha256 !== review.repairSha256) {
      errors.push(error('REVIEW_ARTIFACT_BINDING', 'repair binding differs from loaded bytes', review.repairPath));
    }
  }
  if (context.allowHistoricalBindings) {
    const actual = Object.fromEntries((review.artifactBindings ?? []).map((binding) => [binding?.path, binding?.sha256]));
    if (!jsonEqual(actual, TASK01_ACTIVATION_BINDINGS) || review.repairSha256 !== TASK01_ACTIVATION_REPAIR_SHA256) {
      errors.push(error('REVIEW_ARTIFACT_BINDING', 'Task 01 must bind the exact accepted activation snapshot and repair bytes'));
    }
  }
  if (review.taskId === 'TASK-07' && context.activePackageDigest) {
    if (review.activePackageDigest !== context.activePackageDigest.packageSha256
        || review.activePackageEntryCount !== context.activePackageDigest.entryCount
        || !sameArray(review.activePackagePaths, context.activePackageDigest.entries.map((item) => item.path))) {
      errors.push(error('REVIEW_ACTIVE_DIGEST', 'Task 07 must bind the independently recomputed active-package digest, count, and ordered paths'));
    }
  }
  if (review.specVerdict !== 'SPEC COMPLIANCE PASS' || review.qualityVerdict !== 'QUALITY APPROVED') errors.push(error('REVIEW_VERDICT', 'terminal verdict must be exact PASS/APPROVED'));
  return errors;
}

function proseWords(markdown) {
  return markdown
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/^\s*\|.*\|\s*$/gm, ' ')
    .replace(/^#{1,6}\s+.*$/gm, ' ')
    .replace(/<!--[^]*?-->/g, ' ')
    .match(/[\p{L}\p{N}][\p{L}\p{N}'’-]*/gu)?.length ?? 0;
}

function normalizedIncludes(text, token) {
  const normalize = (value) => String(value).toLowerCase().replace(/[^\p{L}\p{N}-]+/gu, ' ').trim();
  return normalize(text).includes(normalize(token));
}

function semanticFurnitureIncludes(text, phrase) {
  const aliases = { subtitle: 'title', audience: 'reader', prerequisite: 'knowledge', routing: 'route', alt: 'alternative', disclosure: 'disclosed', 'synthetic-lab': 'synthetic', tool: 'provider', independence: 'preferred', 'long-description': 'description', parts: 'part', fields: 'field', states: 'state', rules: 'rule', triggers: 'trigger', outcomes: 'outcome' };
  const stem = (word) => aliases[word] ?? (word.endsWith('s') && word.length > 4 ? word.slice(0, -1) : word);
  const stop = new Set(['and', 'or', 'the', 'a', 'an', 'of', 'to', 'for', 'through', 'full', 'required', 'prior', 'no']);
  const vocabulary = new Set(normalizedWords(text).map(stem));
  const required = normalizedWords(phrase).filter((word) => !stop.has(word)).map(stem);
  return required.length === 0 || required.filter((word) => vocabulary.has(word)).length >= Math.ceil(required.length / 2);
}

export function validateFurnitureArtifacts(files, register) {
  const errors = [];
  const furniture = register.furniture;
  if (furniture?.benchZero?.length !== 10 || furniture?.parts?.length !== 7
      || furniture?.appendices?.length !== 7 || furniture?.closing?.length !== 5) {
    return [error('FURNITURE_EXACT', 'frozen furniture inventory must equal 10/7/7/5')];
  }
  const openingPath = `${BOOK}/manuscript/opening-and-closing.md`;
  const opening = files[openingPath]?.text;
  if (opening) {
    const records = [...furniture.benchZero, ...furniture.closing];
    const tokens = records.map((item) => item.id);
    if (tokens.some((token) => !normalizedIncludes(opening, token))
        || records.some((item) => !semanticFurnitureIncludes(opening, item.purpose)
          || item.requiredContent.some((obligation) => !semanticFurnitureIncludes(opening, obligation)))
        || !opening.includes('About Komal') || !opening.includes('Komal Nakrani')
        || !opening.includes(furniture.closingStatement) || proseWords(opening) < 300) {
      errors.push(error('FURNITURE_EXACT', 'opening/closing must realize all ten Bench Zero and five closing records', openingPath));
    }
  }
  for (let index = 0; index < PART_PATHS.length; index += 1) {
    const path = PART_PATHS[index];
    const text = files[path]?.text;
    if (!text) continue;
    const item = furniture.parts[index];
    if (![item.purpose, ...item.requiredContent].every((token) => normalizedIncludes(text, token))) {
      errors.push(error('FURNITURE_EXACT', 'part opener must realize its exact job and five route obligations', path));
    }
  }
  for (let index = 0; index < APPENDIX_PATHS.length; index += 1) {
    const path = APPENDIX_PATHS[index];
    const text = files[path]?.text;
    if (!text) continue;
    const item = furniture.appendices[index];
    if (proseWords(text) < 100 || !semanticFurnitureIncludes(text, item.purpose)
        || item.requiredContent.some((obligation) => !semanticFurnitureIncludes(text, obligation))) {
      errors.push(error('FURNITURE_EXACT', 'appendix must realize its exact frozen job', path));
    }
  }
  return errors;
}

function normalizedWords(text) {
  return String(text).toLowerCase().match(/[\p{L}\p{N}]+(?:-[\p{L}\p{N}]+)*/gu) ?? [];
}

function paragraphShingles(text, width = 20) {
  const records = [];
  for (const paragraph of String(text).split(/\n\s*\n|\n(?=\|)/)) {
    const words = normalizedWords(paragraph);
    for (let index = 0; index + width <= words.length; index += 1) {
      records.push({ key: words.slice(index, index + width).join(' '), paragraph });
    }
  }
  return records;
}

function isAllowedStructuredShingle(chapterId, paragraph, key) {
  if ((chapterId === 'MLE-CH-13' || chapterId === 'MLE-CH-14') && /frozen-source-ledger/i.test(paragraph)) return true;
  if (chapterId === 'MLE-CH-13' && /MLE-BSRC-\d{3}/.test(paragraph) && /MLE-BCLM-\d{3}/.test(paragraph)
      && /MLE-CH-13-S02/.test(paragraph) && /(?:provenance|source-use) edge/i.test(paragraph)) return true;
  if (chapterId === 'MLE-CH-14' && /MLE-BSRC-\d{3}/.test(paragraph) && /MLE-BCLM-\d{3}/.test(paragraph)
      && /MLE-CH-14-S02/.test(paragraph) && /(?:compatibility|source-use) (?:proof )?edge/i.test(paragraph)) return true;
  if (chapterId === 'MLE-CH-21') {
    const words = key.split(' ');
    return words.every((word) => /^(?:mle-clm-\d{3}|bnd-\d{2}|scn-\d{2})$/.test(word));
  }
  return false;
}

function isTruthBoundedCaseRow(paragraph) {
  return /\bCASE-\d{2}\b/.test(paragraph)
    && /\benters as\s+(?:FICTIONAL SYNTHETIC CAPSTONE|CONSTRUCTED SATELLITE|PUBLIC REPORTED CASE)\b/i.test(paragraph)
    && /\bIts chapter use is:/i.test(paragraph)
    && /\bReported facts:/i.test(paragraph)
    && /\bAttributed outcomes:/i.test(paragraph)
    && /\bAllowed inference:/i.test(paragraph)
    && /\bForbidden inference:/i.test(paragraph)
    && /\bCase (?:bounds|caveats|gaps|uncertainties|conditions|limitations):/i.test(paragraph)
    && /\bTransfer:/i.test(paragraph);
}

function isStructuredSourceLedgerRecord(paragraph) {
  return /\bMLE-BSRC-\d{3}\b/.test(paragraph)
    && /\bMLE-BCLM-\d{3}\b/.test(paragraph)
    && /\bMLE-CH-\d{2}-S\d{2}\b/.test(paragraph)
    && /\bwith role\s+(?:doctrine|mechanism|case evidence|context)\b/i.test(paragraph)
    && /\b(?:The cited source is|The source is)\b/i.test(paragraph)
    && /\bversion\b/i.test(paragraph) && /\bverified\b/i.test(paragraph)
    && /\b(?:stopping (?:applicability|cell|criterion|prerequisite|requirement|contract axis)|source-use boundary)\b/i.test(paragraph)
    && /\bMaintenance profile:\s*durability=/i.test(paragraph) && /\bvolatility=/i.test(paragraph)
    && /\bFreshness action:/i.test(paragraph)
    && /\bedge\b/i.test(paragraph);
}

function isStructuredCurrentnessRecord(paragraph) {
  return /^\s*`?MLE-BSRC-\d{3}`?\s+is\b/i.test(paragraph)
    && /\bverified\s+\d{4}-\d{2}-\d{2}\b/i.test(paragraph)
    && /\b(?:not|neither|cannot|does not|nonbinding|limitation|contextual)\b/i.test(paragraph)
    && /\b(?:recheck|refresh|inspect|confirm)\b/i.test(paragraph);
}

function isDeterministicLabContractRow(paragraph) {
  return /^\s*MLE-CH-\d{2}-LAB-\d{2}\s+is a synthetic-deterministic exercise\./i.test(paragraph)
    && /\bFixture entrance contract:/i.test(paragraph)
    && /\bPinned fixture identity:\s*FIX-MLE-CH-\d{2}-\d+\b/i.test(paragraph)
    && /\bExpected RED route:/i.test(paragraph)
    && /\b[A-Za-z -]+ emitted:\s*BL-\d{2}\b/i.test(paragraph)
    && /\bAcceptance examination:/i.test(paragraph)
    && /\bPermitted dispositions remain PASS, HOLD, REJECT, REOPEN\b/i.test(paragraph)
    && /\bEffects forbidden by this exercise:/i.test(paragraph)
    && /\bThe conforming run demonstrates\b/i.test(paragraph)
    && /\bThe mutation run demonstrates\b/i.test(paragraph);
}

function isTruthClassBridgeRecord(paragraph) {
  return /^\s*Public [\p{L} -]+ and constructed exercises retain separate truth classes\./iu.test(paragraph)
    && /\bPublic [\p{L} -]+ preserve attributed facts and outcomes exactly\b/iu.test(paragraph)
    && /\bconstructed cases have no reported facts\b/i.test(paragraph)
    && /\bAn allowed inference is a method transfer\b/i.test(paragraph)
    && /\bnot a claim\b/i.test(paragraph);
}

function isQualificationAssessmentRecord(paragraph) {
  return /^\s*### Qualification Gate\b/i.test(paragraph)
    && /\bPASS means\b/i.test(paragraph) && /\bHOLD\b/.test(paragraph)
    && /\bREJECT\b/.test(paragraph) && /\bREOPEN\b/.test(paragraph)
    && /\bAutomatic promotion, hidden failure, silent upstream repair, and self-approval are illegal\b/i.test(paragraph)
    && /### MLE-CH-\d{2}-ASMT-\d{2}\b/.test(paragraph)
    && /\bExercise output:\s*BL-\d{2}\b/i.test(paragraph)
    && /\bRubric:/i.test(paragraph) && /\bAnswer intent:/i.test(paragraph)
    && /\bObservable pass\b/i.test(paragraph) && /\bAuthority limit:/i.test(paragraph)
    && /\bRetry route:/i.test(paragraph);
}

function isDurableDossierContractRecord(paragraph) {
  return /^\s*### Durable dossier contract\s+BL-\d{2}\s+version\s+\d+\.\d+\.\d+\b/i.test(paragraph)
    && /\btakes immutable input from\b/i.test(paragraph)
    && /\bfixture hash slot is\s+a{64}\b/i.test(paragraph)
    && /\bit emits\s+BL-\d{2}\b/i.test(paragraph)
    && /\bLegal entry state:/i.test(paragraph) && /\ballowed exit states:/i.test(paragraph)
    && /\bTwo transitions remain forbidden:\s*HOLD->RELEASABLE, REJECT->RELEASABLE\b/i.test(paragraph)
    && /\bsole next chapter is\s+MLE-CH-\d{2}\b/i.test(paragraph)
    && /\bPredecessor dossier bytes are read-only\b/i.test(paragraph)
    && /\bFour reopen routes are\b/i.test(paragraph)
    && /\bNo in-place repair is allowed\b/i.test(paragraph)
    && /\bContinuity statement:/i.test(paragraph);
}

function isPortContractRecord(paragraph) {
  const sharedPort = /^\s*### PORT-(?:MANAGED|CLASSICAL|DEEP|EDGE|SHARED)\b/.test(paragraph)
    && /\bimplements\b/i.test(paragraph) && /\bowes\b/i.test(paragraph)
    && /\bown\b/i.test(paragraph) && /\bfailure challenge\b/i.test(paragraph)
    && /\bPASS requires\b/i.test(paragraph);
  const adapterPort = /^\s*### PORT-(?:MANAGED|CLASSICAL|DEEP|EDGE|SHARED)\b/.test(paragraph)
    && /\b[\p{L} -]+ held constant:/iu.test(paragraph) && /\bAdapter mechanics:/i.test(paragraph)
    && /\bEvidence owed by this adapter:/i.test(paragraph) && /\bAuthority retained elsewhere:/i.test(paragraph)
    && /\bAdapter challenge:/i.test(paragraph) && /\bTransfer limit:/i.test(paragraph)
    && /\bParity (?:status|ruling):\s*(?:PASS|HOLD|REJECT|REOPEN)\b/i.test(paragraph);
  return sharedPort || adapterPort;
}

const STOP_BOUNDARY_MACHINE_SHINGLE = 'phase 09 remains inactive this chapter creates no publication pdf image asset course certification deployment or production claim its local';

function isStructuredCrossChapterShingle(key) {
  return key === STOP_BOUNDARY_MACHINE_SHINGLE;
}

export function isCrossChapterMachineRecord(paragraph) {
  return /^\s*Durable dossier record:/i.test(paragraph)
    || /^\s*\|/.test(paragraph)
    || (/\b(?:HOLD|REJECT) to RELEASABLE\b/.test(paragraph) && /\bfour reopen routes\b/i.test(paragraph))
    || (/^\s*The chapter-specific rechecks travel with the record:/i.test(paragraph) && /\bevidence obligations\b/i.test(paragraph))
    || (/^\s*Prohibited claims remain explicit:/i.test(paragraph) && /\bcontinuity rule\b/i.test(paragraph))
    || /^\s*>?\s*\*\*MLE-F\d+\.\d+\s+—\s+CANDIDATE\s+—\s+NOT GENERATED/i.test(paragraph)
    || (/^\s*\*\*Accepted currentness ledger\b/i.test(paragraph) && /\bMLE-BSRC-\d{3}\b/.test(paragraph) && /\bverified\s+\d{4}-\d{2}-\d{2}\b/i.test(paragraph))
    || isTruthBoundedCaseRow(paragraph)
    || isStructuredSourceLedgerRecord(paragraph)
    || isStructuredCurrentnessRecord(paragraph)
    || isDeterministicLabContractRow(paragraph)
    || isTruthClassBridgeRecord(paragraph)
    || isQualificationAssessmentRecord(paragraph)
    || isDurableDossierContractRecord(paragraph)
    || isPortContractRecord(paragraph);
}

export function validateOriginality({ chapters, researchPacks = [], otherRoleTexts = [] }) {
  const errors = [];
  const packByChapter = new Map(researchPacks.map((item) => [item.chapterId, new Set(paragraphShingles(item.text).map((row) => row.key))]));
  const otherRole = new Set(otherRoleTexts.flatMap((item) => paragraphShingles(item.text).map((row) => row.key)));
  const priorBook = new Map();
  for (const chapter of chapters) {
    const seen = new Map();
    for (const row of paragraphShingles(chapter.text)) {
      const allowed = isAllowedStructuredShingle(chapter.chapterId, row.paragraph, row.key);
      if ((seen.get(row.key) ?? 0) > 0 && !allowed) {
        errors.push(error('ORIGINALITY_INTERNAL', `ordinary authorial twenty-word duplicate in ${chapter.chapterId}`));
        break;
      }
      seen.set(row.key, (seen.get(row.key) ?? 0) + 1);
      if (packByChapter.get(chapter.chapterId)?.has(row.key) && !allowed) {
        errors.push(error('ORIGINALITY_SAME_PACK', `same-chapter research-pack overlap in ${chapter.chapterId}`));
        break;
      }
      if (otherRole.has(row.key) && !allowed) {
        errors.push(error('ORIGINALITY_OTHER_ROLE', `published other-role overlap in ${chapter.chapterId}`));
        break;
      }
      const prior = priorBook.get(row.key);
      if (prior && prior !== chapter.chapterId && !allowed
          && !isCrossChapterMachineRecord(row.paragraph) && !isStructuredCrossChapterShingle(row.key)) {
        errors.push(error('ORIGINALITY_SAME_BOOK', `cross-chapter twenty-word overlap between ${prior} and ${chapter.chapterId}`));
        break;
      }
      priorBook.set(row.key, chapter.chapterId);
    }
  }
  return errors;
}

export function validateManuscriptChapter(markdown, blueprint, register, options = {}) {
  const errors = [];
  const words = proseWords(markdown);
  if (words < options.minWords || words > options.maxWords) errors.push(error('MANUSCRIPT_DEPTH', `prose words ${words} outside ${options.minWords}-${options.maxWords}`));
  let cursor = -1;
  for (const sectionId of blueprint.sectionIds) {
    const next = markdown.indexOf(sectionId);
    if (next <= cursor) {
      errors.push(error('MANUSCRIPT_SECTION_ORDER', `missing or out-of-order ${sectionId}`));
      break;
    }
    cursor = next;
  }
  const grammar = ['Bench Setup', 'decision', 'evidence', 'state and dossier delta', 'authority route', 'next evidence', 'Bench Sheet', 'Qualification Gate'];
  if (grammar.some((token) => !markdown.includes(token))) errors.push(error('MANUSCRIPT_GRAMMAR', 'recurring chapter grammar is incomplete'));
  const bindings = [...blueprint.primaryClaimIds, ...blueprint.portIds, ...blueprint.labIds, ...blueprint.assessmentIds, ...blueprint.visualIds, blueprint.milestoneId];
  if (bindings.some((token) => !markdown.includes(token))) errors.push(error('MANUSCRIPT_BINDING', 'chapter is missing a frozen claim, port, lab, assessment, visual, or milestone binding'));
  for (const claimId of blueprint.primaryClaimIds) {
    const primaryPattern = new RegExp(`Primary teaching\\s+${claimId}`, 'g');
    const placements = (markdown.match(primaryPattern) ?? []).length;
    if (placements !== 1) errors.push(error('MANUSCRIPT_CLAIM_PRIMARY', `${claimId} requires exactly one primary teaching treatment; got ${placements}`));
  }
  if (options.requireExactBlueprint) {
    if (blueprint.primaryClaimIds.length !== 3) errors.push(error('MANUSCRIPT_CLAIM_PRIMARY', 'chapter must have exactly three frozen primary teachings'));
    const sections = register.sections.filter((item) => item.chapterId === blueprint.chapterId);
    const families = [
      ['SOURCE', uniqueInOrder(register.sourceUses.filter((item) => item.chapterId === blueprint.chapterId).map((item) => item.sourceId))],
      ['CASE', uniqueInOrder(register.caseUses.filter((item) => item.chapterIds.includes(blueprint.chapterId)).map((item) => item.caseId))],
      ['ARCHITECTURE', uniqueInOrder(sections.flatMap((item) => item.architectureClaimIds))],
      ['BOUNDARY', uniqueInOrder(sections.flatMap((item) => item.boundaryIds))],
      ['SCENARIO', uniqueInOrder(sections.flatMap((item) => item.scenarioIds))],
      ['DOMAIN', uniqueInOrder(sections.flatMap((item) => item.domainIds))],
    ];
    const sectionText = (sectionId) => {
      const start = markdown.search(new RegExp(`^##\\s+${sectionId}(?:\\s|—|$)`, 'm'));
      if (start < 0) return '';
      const tail = markdown.slice(start);
      const next = tail.slice(1).search(/^##\s+/m);
      return next < 0 ? tail : tail.slice(0, next + 1);
    };
    const familyPatterns = {
      SOURCE: /MLE-BSRC-\d{3}/g, CASE: /CASE-\d{2}/g, ARCHITECTURE: /MLE-CLM-\d{3}/g,
      BOUNDARY: /BND-\d{2}/g, SCENARIO: /SCN-\d{2}/g, DOMAIN: /PD-\d{2}/g,
    };
    for (const [family, ids] of families) {
      if (ids.some((id) => !markdown.includes(id))) {
        errors.push(error(`MANUSCRIPT_${family}_BINDING`, `${family.toLowerCase()} projection differs from the frozen blueprint`));
      }
    }
    for (const section of sections) {
      const text = sectionText(section.sectionId);
      const expectedByFamily = {
        SOURCE: section.sourceIds, CASE: section.caseIds, ARCHITECTURE: section.architectureClaimIds,
        BOUNDARY: section.boundaryIds, SCENARIO: section.scenarioIds, DOMAIN: section.domainIds,
      };
      for (const [family, expectedIds] of Object.entries(expectedByFamily)) {
        if (!(expectedIds ?? []).length) continue;
        const actualIds = uniqueInOrder(text.match(familyPatterns[family]) ?? []).sort();
        const expected = uniqueInOrder(expectedIds ?? []).sort();
        if (!sameArray(actualIds, expected)) errors.push(error(`MANUSCRIPT_${family}_BINDING`, `${family.toLowerCase()} IDs must equal the exact frozen section projection`));
      }
    }
    for (const sourceUse of register.sourceUses.filter((item) => item.chapterId === blueprint.chapterId)) {
      const claimStart = markdown.indexOf(`Primary teaching ${sourceUse.claimId}`);
      const nextClaim = claimStart < 0 ? -1 : markdown.indexOf('Primary teaching ', claimStart + 17);
      const claimText = claimStart < 0 ? '' : markdown.slice(claimStart, nextClaim < 0 ? markdown.length : nextClaim);
      if (!claimText.includes(sourceUse.sourceId)
          || sourceUse.sectionIds.some((sectionId) => !sectionText(sectionId).includes(sourceUse.sourceId))) {
        errors.push(error('MANUSCRIPT_SOURCE_BINDING', 'source-to-claim and source-to-section projection differs from the frozen ledger'));
        break;
      }
      if (!markdown.includes(sourceUse.sourceId) || !/\brecheck\b/i.test(markdown)
          || !/\b(?:not|cannot|does not|nonbinding|limitation|universal|contextual)\b/i.test(markdown)) {
        errors.push(error('MANUSCRIPT_CURRENTNESS', `${sourceUse.sourceId} requires its own limitation and recheck ledger entry`));
        break;
      }
    }
    for (const caseUse of register.caseUses.filter((item) => item.chapterIds.includes(blueprint.chapterId))) {
      const placement = caseUse.placements?.find((item) => item.chapterId === blueprint.chapterId);
      if (!placement || placement.sectionIds.some((sectionId) => !sectionText(sectionId).includes(caseUse.caseId))) {
        errors.push(error('MANUSCRIPT_CASE_BINDING', 'case-to-section projection differs from the frozen ledger'));
        break;
      }
      const caseText = markdown;
      const requiredTruth = ['reported facts', 'attributed outcomes', 'allowed inference', 'forbidden inference', 'limitations'];
      if (requiredTruth.some((token) => !normalizedIncludes(caseText, token))) {
        errors.push(error('MANUSCRIPT_CASE_TRUTH', `${caseUse.caseId} reported-fact, outcome, inference, limitation, or transfer boundary drift`));
        break;
      }
    }
    const stop = new Set('the a an and or but to of for in on with their its every not does cannot alone into they it from without retain retains own owns owning authority authorities formal shared workload mle'.split(' '));
    const significant = (value) => uniqueInOrder(normalizedWords(value).filter((word) => word.length > 3 && !stop.has(word)));
    const manuscriptVocabulary = new Set(normalizedWords(markdown));
    const missingOwner = significant(blueprint.authorityOwner).filter((word) => !manuscriptVocabulary.has(word));
    const missingCeiling = significant(blueprint.mleCeiling).filter((word) => !manuscriptVocabulary.has(word));
    if (missingOwner.length > 2 || missingCeiling.length > 2
        || !/\b(?:own|owns|retain|retains|accept|judge|approve|decide)\w*\b/i.test(markdown)
        || !/\bMLE\b[\s\S]{0,300}\b(?:cannot|may not|does not|must not|ceiling|boundary|outside|without)\b/i.test(markdown)) {
      errors.push(error('MANUSCRIPT_AUTHORITY_BINDING', 'authority-owner and MLE-ceiling obligations differ from the frozen projection'));
    }
    if (!markdown.includes(blueprint.incomingState)
        || blueprint.outgoingStates.some((state) => !markdown.includes(state))) {
      errors.push(error('MANUSCRIPT_LIFECYCLE_SEAM', 'incoming or outgoing seam differs from the frozen lifecycle'));
    }
    const setup = sectionText(blueprint.sectionIds[0]);
    if (!setup.includes(blueprint.incomingState) || blueprint.outgoingStates.some((state) => !setup.includes(state))) {
      errors.push(error('MANUSCRIPT_LIFECYCLE_SEAM', 'lifecycle seams must occupy the frozen setup and handoff sections'));
    }
  }
  if ((options.otherChapters ?? []).some((other) => other === markdown)) errors.push(error('MANUSCRIPT_ORIGINALITY', 'chapter duplicates another manuscript byte-for-byte'));
  const truthTokens = ['synthetic-deterministic', 'reported facts', 'attributed outcomes', 'allowed inference', 'forbidden inference', 'limitations', 'source notes', 'currentness'];
  if (!options.requireExactBlueprint && truthTokens.some((token) => !markdown.toLowerCase().includes(token))) errors.push(error('MANUSCRIPT_TRUTH_BOUNDARY', 'source/case/currentness truth grammar is incomplete'));
  return errors;
}

export function validateCompanionBoundary(contract) {
  const errors = [];
  if (!sameArray(contract.ports, EXPECTED_PORTS)) errors.push(error('COMPANION_PORTS', 'all five ports must be equal and ordered'));
  if (['networkCalls', 'shellCalls', 'cloudSdkCalls', 'modelCalls', 'environmentSecretReads'].some((field) => contract[field] !== 0)) errors.push(error('COMPANION_EFFECT', 'companion must not use network, shell, cloud/model, or secrets'));
  if (!contract.fixedClock || !contract.fixedSeed) errors.push(error('COMPANION_DETERMINISM', 'clock and seed must be fixed'));
  const target = contract.target ?? '';
  const root = contract.repositoryRoot ?? '';
  const absoluteTarget = isAbsolute(target) ? resolve(target) : null;
  const escapes = !absoluteTarget
    || target.split(/[\\/]+/).includes('..')
    || absoluteTarget === resolve(root)
    || absoluteTarget.startsWith(`${resolve(root)}${sep}`)
    || contract.targetExists
    || contract.targetIsSymlink
    || (contract.resolvedWrites ?? []).some((path) => resolve(path) !== absoluteTarget && !resolve(path).startsWith(`${absoluteTarget}${sep}`));
  if (escapes) errors.push(error('COMPANION_ESCAPE', 'target must be fresh, non-symlink, outside repository, and contain every resolved write'));
  if (contract.earlierRecordMutations !== 0) errors.push(error('COMPANION_IMMUTABILITY', 'earlier dossier records are immutable'));
  if (!contract.canonicalTerminalLf) errors.push(error('COMPANION_CANONICAL_BYTES', 'canonical JSON requires exactly one terminal LF'));
  return errors;
}

async function executeCompanionProbeLegacy({ runnerPath, repositoryRoot }) {
  const errors = [];
  let runnerSource;
  try {
    runnerSource = await readFile(runnerPath, 'utf8');
  } catch (caught) {
    return { errors: [error('COMPANION_EXECUTION', `cannot read runner: ${caught.message}`)], ports: [] };
  }
  const forbiddenAttempts = [
    /node:child_process|\bchild_process\b/,
    /node:(?:http|https|net|tls|dgram|dns)|\bfetch\s*\(/,
    /process\.env(?:\.|\[)/,
    /@aws-sdk|@google-cloud|@azure|cloudinary|firebase-admin/,
    /@huggingface|\bopenai\b|@anthropic|tensorflow|torch|onnxruntime/,
    /(?:writeFile|appendFile|createWriteStream|mkdir|rename|copyFile|rm|unlink)(?:Sync)?\s*\(\s*['"]\/(?!private\/tmp\/mle-p8-probe)/,
  ];
  if (forbiddenAttempts.some((pattern) => pattern.test(runnerSource))) {
    return {
      errors: [error('COMPANION_EFFECT_ATTEMPT', 'runner source attempts a forbidden process, network, secret, cloud/model, or filesystem effect', runnerPath)],
      ports: [],
    };
  }
  let runner;
  try {
    runner = await import(`${pathToFileURL(runnerPath).href}?probe=${Date.now()}-${Math.random()}`);
  } catch (caught) {
    return { errors: [error('COMPANION_EXECUTION', `cannot load runner: ${caught.message}`)], ports: [] };
  }
  if (typeof runner.runPort !== 'function') {
    return { errors: [error('COMPANION_EXECUTION', 'runner must export runPort')], ports: [] };
  }
  const history = Object.freeze({ records: Object.freeze([{ milestoneId: 'BL-ENTRY', hash: 'entry' }]) });
  const historyBefore = canonicalJson(history);
  const transitions = [
    ['UNORIENTED', 'ORIENTED'], ['ORIENTED', 'CONTRACTED'], ['CONTRACTED', 'CONTRACTED'],
    ['CONTRACTED', 'CONTRACTED'], ['CONTRACTED', 'CONTRACTED'], ['CONTRACTED', 'ADMISSIBLE'],
    ['ADMISSIBLE', 'ADMISSIBLE'], ['ADMISSIBLE', 'RECONSTRUCTIBLE'], ['RECONSTRUCTIBLE', 'CANDIDATE'],
    ['CANDIDATE', 'CANDIDATE'], ['CANDIDATE', 'CANDIDATE'], ['CANDIDATE', 'TECHNICALLY-QUALIFIED'],
    ['TECHNICALLY-QUALIFIED', 'TECHNICALLY-QUALIFIED'], ['TECHNICALLY-QUALIFIED', 'TECHNICALLY-QUALIFIED'],
    ['TECHNICALLY-QUALIFIED', 'RELEASABLE'], ['RELEASABLE', 'OPERABLE'], ['OPERABLE', 'OBSERVED'],
    ['OBSERVED', 'REQUALIFIED'], ['REQUALIFIED', 'CONTROLLED'], ['CONTROLLED', 'RETIRED'], ['RETIRED', 'REVIEWED'],
  ];
  const reopenTriggerNames = [
    'purpose or intended use',
    'data labels features or population',
    'runtime dependencies interface or serving envelope',
    'authority constraint or permitted use',
  ];
  const canonicalBytes = [];
  const canonicalHashes = [];
  let deterministic = true;
  for (const port of EXPECTED_PORTS) {
    let priorHash = sha256(canonicalJson({ milestoneId: 'BL-ENTRY', fixture: 'fixed' }));
    const acceptedHistory = [];
    for (let index = 0; index < 21; index += 1) {
      const milestoneId = EXPECTED_DOSSIERS[index];
      const [incomingState, outgoingState] = transitions[index];
      const options = { target: `/private/tmp/mle-p8-probe/${port}`, history, milestoneId, priorHash, incomingState, outgoingState };
      try {
        const first = await runner.runPort(port, options);
        const second = await runner.runPort(port, options);
        const firstBytes = canonicalJson(first);
        const secondBytes = canonicalJson(second);
        canonicalBytes.push(firstBytes);
        const currentHash = sha256(firstBytes);
        canonicalHashes.push(currentHash);
        if (firstBytes !== secondBytes) deterministic = false;
        if (first?.port !== port || first?.milestoneId !== milestoneId || first?.priorHash !== priorHash || first?.disposition !== 'PASS' || first?.incomingState !== incomingState || first?.outgoingState !== outgoingState) {
          errors.push(error('COMPANION_DOSSIER', `${port} ${milestoneId} returned a wrong envelope, link, disposition, or transition`));
        }
        acceptedHistory.push(firstBytes);
        priorHash = currentHash;
        const reopenTrigger = index < 4 ? reopenTriggerNames[index] : null;
        const negative = await runner.runPort(port, { ...options, mode: 'negative', reopenTrigger });
        if (!['HOLD', 'REJECT', 'REOPEN'].includes(negative?.disposition) || (reopenTrigger && negative.disposition !== 'REOPEN')) {
          errors.push(error('COMPANION_NEGATIVE_PATH', `${port} ${milestoneId} negative disposition is illegal`));
        }
        if (acceptedHistory.some((bytes, acceptedIndex) => bytes !== canonicalBytes[canonicalBytes.length - acceptedHistory.length + acceptedIndex])) {
          errors.push(error('COMPANION_IMMUTABILITY', `${port} earlier accepted bytes changed after negative path`));
        }
      } catch (caught) {
        errors.push(error('COMPANION_EXECUTION', `${port} ${milestoneId} execution failed: ${caught.message}`));
      }
    }
  }
  if (!deterministic) errors.push(error('COMPANION_DETERMINISM', 'same inputs must produce byte-identical canonical output'));
  const historyImmutable = canonicalJson(history) === historyBefore;
  if (!historyImmutable) errors.push(error('COMPANION_IMMUTABILITY', 'runner mutated earlier dossier history'));

  const effectModes = ['network', 'shell', 'cloud', 'model', 'secret'];
  let effectProbesDenied = 0;
  for (let index = 0; index < EXPECTED_PORTS.length; index += 1) {
    try {
      await runner.runPort(EXPECTED_PORTS[index], { mode: effectModes[index], target: '/private/tmp/mle-p8-probe/effect', history });
    } catch (caught) {
      if (caught?.code === 'EFFECT_DENIED') effectProbesDenied += 1;
    }
  }
  if (effectProbesDenied !== 5) errors.push(error('COMPANION_EFFECT_PROBE', `all five forbidden effect probes must be denied; got ${effectProbesDenied}`));

  let deniedEscapes = 0;
  for (const port of EXPECTED_PORTS) {
    try {
      await runner.runPort(port, { mode: 'escape', target: `${repositoryRoot}/public`, history });
    } catch (caught) {
      if (caught?.code === 'PATH_DENIED') deniedEscapes += 1;
    }
  }
  const escapeProbeDenied = deniedEscapes === EXPECTED_PORTS.length;
  if (!escapeProbeDenied) errors.push(error('COMPANION_ESCAPE_PROBE', `all five escape probes must be denied; got ${deniedEscapes}`));
  return {
    errors,
    ports: [...EXPECTED_PORTS],
    canonicalBytes,
    canonicalHashes,
    deterministic,
    historyImmutable,
    effectProbesDenied,
    escapeProbeDenied,
    negativePaths: EXPECTED_PORTS.length * EXPECTED_DOSSIERS.length,
    dossierSteps: EXPECTED_DOSSIERS.length,
    reopenTriggers: reopenTriggerNames.length,
  };
}

const ISOLATED_COMPANION_PROBE = String.raw`
import childProcess from 'node:child_process';
import crypto from 'node:crypto';
import dns from 'node:dns';
import fs from 'node:fs';
import http from 'node:http';
import https from 'node:https';
import net from 'node:net';
import tls from 'node:tls';
import dgram from 'node:dgram';
import { syncBuiltinESMExports } from 'node:module';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const fsp = fs.promises;
const safe = {
  readFile: fsp.readFile.bind(fsp),
  readdir: fsp.readdir.bind(fsp),
};
const input = JSON.parse(fs.readFileSync(0, 'utf8'));
const attempts = [];
const errors = [];
const error = (code, message, pathValue = null) => ({ code, message, ...(pathValue ? { path: pathValue } : {}) });
const canonicalJson = (value) => {
  const normalize = (item) => Array.isArray(item)
    ? item.map(normalize)
    : item && typeof item === 'object'
      ? Object.fromEntries(Object.keys(item).sort().map((key) => [key, normalize(item[key])]))
      : item;
  return JSON.stringify(normalize(value)) + '\n';
};
const sha256 = (bytes) => crypto.createHash('sha256').update(bytes).digest('hex');
const resolved = (value) => {
  if (typeof value === 'number') return null;
  if (value instanceof URL) return path.resolve(fileURLToPath(value));
  if (Buffer.isBuffer(value)) return path.resolve(value.toString());
  return typeof value === 'string' ? path.resolve(value) : null;
};
const within = (candidate, root) => candidate === root || candidate.startsWith(root + path.sep);
const runnerRoot = path.dirname(path.resolve(input.runnerPath));
const probeRoot = path.resolve(input.probeRoot);
const repositoryRoot = path.resolve(input.repositoryRoot);
const mark = (family, detail) => {
  attempts.push({ family, detail: String(detail) });
  const caught = new Error('guard denied ' + family);
  caught.code = 'MLE_EFFECT_ATTEMPT';
  throw caught;
};
const guardRead = (value) => {
  const candidate = resolved(value);
  if (candidate && !within(candidate, runnerRoot) && !within(candidate, probeRoot) && !within(candidate, repositoryRoot)) mark('filesystem-read', candidate);
};
const guardWrite = (value) => {
  const candidate = resolved(value);
  if (candidate && !within(candidate, probeRoot)) mark('filesystem-write', candidate);
};
const patch = (object, name, family, guard = null) => {
  const original = object?.[name];
  if (typeof original !== 'function') return;
  try {
    object[name] = function guardedEffect(...args) {
      if (guard) guard(args);
      else mark(family, name);
      return original.apply(this, args);
    };
  } catch {}
};
for (const name of ['exec','execFile','execFileSync','execSync','fork','spawn','spawnSync']) patch(childProcess, name, 'child-process');
for (const [object, names, family] of [
  [http, ['get','request','createServer'], 'network'],
  [https, ['get','request','createServer'], 'network'],
  [net, ['connect','createConnection','createServer'], 'network'],
  [tls, ['connect','createServer'], 'network'],
  [dgram, ['createSocket'], 'network'],
  [dns, ['lookup','resolve','resolve4','resolve6','reverse'], 'network'],
]) for (const name of names) patch(object, name, family);
if (dns.promises) for (const name of ['lookup','resolve','resolve4','resolve6','reverse']) patch(dns.promises, name, 'network');
globalThis.fetch = async function guardedFetch() { return mark('network', 'fetch'); };

const writeMethods = ['appendFile','chmod','chown','copyFile','cp','link','lchown','lutimes','mkdir','mkdtemp','rename','rm','rmdir','symlink','truncate','unlink','utimes','writeFile'];
for (const name of writeMethods) {
  patch(fsp, name, 'filesystem-write', (args) => {
    guardWrite(args[0]);
    if (['copyFile','cp','link','rename','symlink'].includes(name)) guardWrite(args[1]);
  });
  patch(fs, name + 'Sync', 'filesystem-write', (args) => {
    guardWrite(args[0]);
    if (['copyFile','cp','link','rename','symlink'].includes(name)) guardWrite(args[1]);
  });
}
for (const [object, name] of [[fsp, 'open'], [fs, 'openSync']]) {
  patch(object, name, 'filesystem-write', (args) => {
    const flags = args[1] ?? 'r';
    if (typeof flags === 'string' ? /[wa+]/.test(flags) : flags !== 0) guardWrite(args[0]);
    else guardRead(args[0]);
  });
}
patch(fs, 'createWriteStream', 'filesystem-write', (args) => guardWrite(args[0]));
for (const name of ['access','lstat','readFile','readdir','realpath','stat']) {
  patch(fsp, name, 'filesystem-read', (args) => guardRead(args[0]));
  patch(fs, name + 'Sync', 'filesystem-read', (args) => guardRead(args[0]));
}
patch(fs, 'createReadStream', 'filesystem-read', (args) => guardRead(args[0]));
syncBuiltinESMExports();

const originalEnv = process.env;
const safeEnvReads = new Set(['WATCH_REPORT_DEPENDENCIES','NODE_V8_COVERAGE','FORCE_COLOR','NODE_DEBUG','NODE_OPTIONS']);
Object.defineProperty(process, 'env', {
  configurable: false,
  enumerable: true,
  value: new Proxy(originalEnv, {
    get(target, property, receiver) {
      if (typeof property === 'string' && !safeEnvReads.has(property)) mark('environment-secret', property);
      return Reflect.get(target, property, receiver);
    },
    ownKeys() { return mark('environment-secret', 'enumeration'); },
    getOwnPropertyDescriptor(target, property) {
      if (typeof property === 'string' && !safeEnvReads.has(property)) mark('environment-secret', property);
      return Reflect.getOwnPropertyDescriptor(target, property);
    },
  }),
});

const importPattern = /(?:\bimport\s*(?:[^'"()]*?\sfrom\s*)?|\bexport\s+[^'"()]*?\sfrom\s*|\bimport\s*\()\s*['"]([^'"]+)['"]/g;
const scanned = new Set();
async function scanModuleGraph(file) {
  const absolute = path.resolve(file);
  if (scanned.has(absolute)) return;
  scanned.add(absolute);
  if (!within(absolute, runnerRoot)) mark('filesystem-read', absolute);
  const source = await safe.readFile(absolute, 'utf8');
  if (/\bimport\s*\(\s*(?!['"])/.test(source)) mark('external-module', 'computed dynamic import in ' + absolute);
  for (const match of source.matchAll(importPattern)) {
    const specifier = match[1];
    if (specifier.startsWith('.') || specifier.startsWith('/')) {
      await scanModuleGraph(path.resolve(path.dirname(absolute), specifier));
    } else if (!specifier.startsWith('node:') && !['fs','path','url','crypto','assert','util'].includes(specifier)) {
      const family = /aws|google-cloud|azure|cloudinary|firebase/i.test(specifier)
        ? 'cloud-sdk'
        : /huggingface|openai|anthropic|tensorflow|torch|onnx/i.test(specifier) ? 'model-sdk' : 'external-module';
      mark(family, specifier);
    } else if (/^(?:node:)?(?:module|vm|worker_threads|cluster|inspector)$/.test(specifier)) {
      mark('process-capability', specifier);
    }
  }
}

const transitions = [
  ['UNORIENTED','ORIENTED'], ['ORIENTED','CONTRACTED'], ['CONTRACTED','CONTRACTED'],
  ['CONTRACTED','CONTRACTED'], ['CONTRACTED','CONTRACTED'], ['CONTRACTED','ADMISSIBLE'],
  ['ADMISSIBLE','ADMISSIBLE'], ['ADMISSIBLE','RECONSTRUCTIBLE'], ['RECONSTRUCTIBLE','CANDIDATE'],
  ['CANDIDATE','CANDIDATE'], ['CANDIDATE','CANDIDATE'], ['CANDIDATE','TECHNICALLY-QUALIFIED'],
  ['TECHNICALLY-QUALIFIED','TECHNICALLY-QUALIFIED'], ['TECHNICALLY-QUALIFIED','TECHNICALLY-QUALIFIED'],
  ['TECHNICALLY-QUALIFIED','RELEASABLE'], ['RELEASABLE','OPERABLE'], ['OPERABLE','OBSERVED'],
  ['OBSERVED','REQUALIFIED'], ['REQUALIFIED','CONTROLLED'], ['CONTROLLED','RETIRED'], ['RETIRED','REVIEWED'],
];
const reopenTriggers = [
  'purpose or intended use',
  'data labels features or population',
  'runtime dependencies interface or serving envelope',
  'authority constraint or permitted use',
];
const acceptedBytes = async (target, names) => {
  const snapshot = new Map();
  for (const name of names) {
    try { snapshot.set(name, await safe.readFile(path.join(target, name), 'utf8')); } catch {}
  }
  return snapshot;
};
const compareAccepted = async (target, before, label) => {
  for (const [name, bytes] of before) {
    let current;
    try { current = await safe.readFile(path.join(target, name), 'utf8'); } catch { current = null; }
    if (current !== bytes) errors.push(error('COMPANION_IMMUTABILITY', label + ' changed accepted ' + name));
  }
};

async function runProbe() {
  await scanModuleGraph(input.runnerPath);
  const runner = await import(pathToFileURL(input.runnerPath).href + '?isolated=' + Date.now());
  if (typeof runner.runPort !== 'function') throw new Error('runner must export runPort');
  const canonicalBytes = [];
  const canonicalHashes = [];
  let deterministic = true;
  let historyImmutable = true;
  for (const port of input.ports) {
    const primary = path.join(probeRoot, 'primary', port);
    const repeat = path.join(probeRoot, 'repeat', port);
    const names = [];
    let priorHash = input.entryHash ?? sha256(canonicalJson({ fixture: 'fixed', milestoneId: 'BL-ENTRY' }));
    const records = [];
    for (let index = 0; index < input.dossiers.length; index += 1) {
      const milestoneId = input.dossiers[index];
      const fileName = milestoneId.toLowerCase() + '.json';
      const incomingState = transitions[index][0];
      const outgoingState = transitions[index][1];
      const history = Object.freeze({ records: Object.freeze(records.map((record) => Object.freeze({ ...record }))) });
      const historyBefore = canonicalJson(history);
      const options = { target: primary, history, milestoneId, priorHash, incomingState, outgoingState };
      const beforePrimary = await acceptedBytes(primary, names);
      const first = await runner.runPort(port, options);
      await compareAccepted(primary, beforePrimary, port + ' ' + milestoneId + ' positive');
      const firstBytes = canonicalJson(first);
      let materialized = null;
      try { materialized = await safe.readFile(path.join(primary, fileName), 'utf8'); } catch {}
      if (materialized !== firstBytes) errors.push(error('COMPANION_CANONICAL_FILE', port + ' ' + milestoneId + ' must materialize exact canonical bytes'));
      const beforeRepeat = await acceptedBytes(repeat, names);
      const second = await runner.runPort(port, { ...options, target: repeat });
      await compareAccepted(repeat, beforeRepeat, port + ' ' + milestoneId + ' repeat');
      const secondBytes = canonicalJson(second);
      let repeatedFile = null;
      try { repeatedFile = await safe.readFile(path.join(repeat, fileName), 'utf8'); } catch {}
      if (repeatedFile !== secondBytes) errors.push(error('COMPANION_CANONICAL_FILE', port + ' ' + milestoneId + ' repeat must materialize exact canonical bytes'));
      if (firstBytes !== secondBytes || materialized !== repeatedFile) deterministic = false;
      if (first?.port !== port || first?.milestoneId !== milestoneId || first?.priorHash !== priorHash || first?.disposition !== 'PASS' || first?.incomingState !== incomingState || first?.outgoingState !== outgoingState) {
        errors.push(error('COMPANION_DOSSIER', port + ' ' + milestoneId + ' returned a wrong envelope, link, disposition, or transition'));
      }
      const expected = input.expectedRecords?.[index];
      if (expected) {
        const projection = Object.fromEntries(Object.keys(expected).map((key) => [key, first?.[key]]));
        if (canonicalJson(projection) !== canonicalJson(expected)) errors.push(error('COMPANION_EXPECTED_BYTES', port + ' ' + milestoneId + ' differs from complete expected record'));
      }
      canonicalBytes.push(firstBytes);
      const currentHash = sha256(firstBytes);
      canonicalHashes.push(currentHash);
      const reopenTrigger = index < reopenTriggers.length ? reopenTriggers[index] : null;
      const beforeNegative = await acceptedBytes(primary, [...names, fileName]);
      const negative = await runner.runPort(port, { ...options, mode: 'negative', reopenTrigger });
      await compareAccepted(primary, beforeNegative, port + ' ' + milestoneId + ' negative');
      if (!['HOLD','REJECT','REOPEN'].includes(negative?.disposition) || (reopenTrigger && negative.disposition !== 'REOPEN')) {
        errors.push(error('COMPANION_NEGATIVE_PATH', port + ' ' + milestoneId + ' negative disposition is illegal'));
      }
      if (canonicalJson(history) !== historyBefore) historyImmutable = false;
      names.push(fileName);
      records.push({ hash: currentHash, milestoneId });
      priorHash = currentHash;
    }
  }
  if (!deterministic) errors.push(error('COMPANION_DETERMINISM', 'independent fresh targets must produce byte-identical canonical output'));
  if (!historyImmutable) errors.push(error('COMPANION_IMMUTABILITY', 'runner mutated supplied prior dossier history'));
  let effectProbesDenied = 0;
  for (let index = 0; index < input.ports.length; index += 1) {
    const mode = ['network','shell','cloud','model','secret'][index];
    try { await runner.runPort(input.ports[index], { mode, target: path.join(probeRoot, 'effects', mode), history: Object.freeze({ records: Object.freeze([]) }) }); }
    catch (caught) { if (caught?.code === 'EFFECT_DENIED') effectProbesDenied += 1; }
  }
  if (effectProbesDenied !== 5) errors.push(error('COMPANION_EFFECT_PROBE', 'all five forbidden effect probes must be denied; got ' + effectProbesDenied));
  let deniedEscapes = 0;
  for (const port of input.ports) {
    try { await runner.runPort(port, { mode: 'escape', target: path.join(repositoryRoot, 'public'), history: Object.freeze({ records: Object.freeze([]) }) }); }
    catch (caught) { if (caught?.code === 'PATH_DENIED') deniedEscapes += 1; }
  }
  const escapeProbeDenied = deniedEscapes === input.ports.length;
  if (!escapeProbeDenied) errors.push(error('COMPANION_ESCAPE_PROBE', 'all five escape probes must be denied; got ' + deniedEscapes));
  return {
    errors, ports: input.ports, canonicalBytes, canonicalHashes, deterministic, historyImmutable,
    effectProbesDenied, escapeProbeDenied, negativePaths: input.ports.length * input.dossiers.length,
    dossierSteps: input.dossiers.length, reopenTriggers: reopenTriggers.length,
  };
}

let report;
try { report = await runProbe(); }
catch (caught) { report = { errors: [error('COMPANION_EXECUTION', caught.message)], ports: [] }; }
if (attempts.length) report.errors.push(error('COMPANION_EFFECT_ATTEMPT', 'isolated guard recorded forbidden attempts: ' + canonicalJson(attempts).trim()));
process.stdout.write('MLE_GUARD_REPORT:' + JSON.stringify(report) + '\n');
`;

export async function executeCompanionProbe({ runnerPath, repositoryRoot, expectedRecords = null, entryHash = null }) {
  const probeRoot = await realpath(await mkdtemp(join(tmpdir(), 'mle-p8-isolated-probe-')));
  const guardedRunnerPath = await realpath(resolve(runnerPath));
  const guardedRepositoryRoot = await realpath(resolve(repositoryRoot));
  const payload = JSON.stringify({
    runnerPath: guardedRunnerPath, repositoryRoot: guardedRepositoryRoot, probeRoot,
    ports: [...EXPECTED_PORTS], dossiers: [...EXPECTED_DOSSIERS], expectedRecords, entryHash,
  });
  try {
    const output = execFileSync(process.execPath, [
      '--permission',
      '--allow-fs-read=*',
      `--allow-fs-write=${probeRoot}`,
      '--input-type=module', '--eval', ISOLATED_COMPANION_PROBE,
    ], {
      input: payload,
      encoding: 'utf8',
      maxBuffer: 64 * 1024 * 1024,
      env: { PATH: '/usr/bin:/bin' },
      stdio: ['pipe', 'pipe', 'pipe'],
    });
    const marker = output.lastIndexOf('MLE_GUARD_REPORT:');
    if (marker < 0) return { errors: [error('COMPANION_EXECUTION', 'isolated probe emitted no guarded report')], ports: [] };
    return JSON.parse(output.slice(marker + 'MLE_GUARD_REPORT:'.length).trim());
  } catch (caught) {
    return { errors: [error('COMPANION_EXECUTION', `isolated probe failed: ${caught.stderr?.toString().trim() || caught.message}`)], ports: [] };
  }
}

export async function validateRepository(root, options = {}) {
  const snapshot = await loadRepositorySnapshot(root, options);
  const stage = options.stage ?? 'bootstrap';
  const errors = validatePhase08Snapshot(snapshot, options);
  if (stage !== 'bootstrap' && COMPANION_PATHS.every((path) => snapshot.files[path])) {
    const companionReport = await executeCompanionProbe({
      runnerPath: resolve(root, `${BOOK}/companion/lib/run.mjs`),
      repositoryRoot: resolve(root),
      expectedRecords: EXPECTED_FILES.map((path) => {
        try { return JSON.parse(snapshot.files[path].text); } catch { return null; }
      }),
      entryHash: snapshot.files[`${BOOK}/companion/fixtures/bl-entry.json`]?.sha256 ?? null,
    });
    errors.push(...companionReport.errors);
  }
  const task01Text = snapshot.files[`${ROLE}/reviews/phase-08/task-01-bootstrap.md`]?.text ?? '';
  const bootstrapLifecycle = !task01Text
    ? 'pre-review'
    : reviewIsAccepted(task01Text)
      ? 'accepted'
      : 'repair-in-progress';
  return {
    schema: 'mle-phase-08-validator-report/v1',
    stage,
    counts: snapshot.register.counts,
    productionInventory: snapshot.productionInventory,
    reviewInventory: snapshot.reviewInventory,
    bootstrapLifecycle,
    productionAuthorized: bootstrapLifecycle === 'accepted',
    errors,
  };
}

function command(cwd, executable, args) {
  return execFileSync(executable, args, { cwd, encoding: 'utf8' }).trim();
}

function liveGit(root) {
  const head = command(root, 'git', ['rev-parse', 'HEAD']);
  const originMain = command(root, 'git', ['rev-parse', 'origin/main']);
  const remoteLine = command(root, 'git', ['ls-remote', 'origin', 'refs/heads/main']);
  const remoteMain = remoteLine.split(/\s+/)[0];
  const changedPaths = execFileSync('git', ['status', '--porcelain=v1'], { cwd: root, encoding: 'utf8' })
    .split('\n').filter(Boolean).map((line) => line.slice(3));
  return { head, originMain, remoteMain, clean: changedPaths.length === 0, changedPaths };
}

function liveIssue(root, number) {
  const issue = JSON.parse(command(root, 'gh', ['issue', 'view', String(number), '--repo', 'alpeshznakrani/komalnakrani', '--json', 'number,state,labels,body']));
  return { ...issue, labels: issue.labels.map((label) => label.name).sort() };
}

async function main() {
  const args = process.argv.slice(2);
  const stageArg = args.find((arg) => arg.startsWith('--stage='));
  const stage = stageArg?.slice('--stage='.length) ?? 'bootstrap';
  const root = resolve(dirname(fileURLToPath(import.meta.url)), '../../../../..');
  const report = await validateRepository(root, {
    stage,
    git: liveGit(root),
    github: { 79: liveIssue(root, 79), 84: liveIssue(root, 84), 85: liveIssue(root, 85) },
  });
  if (report.errors.length > 0) {
    console.error(JSON.stringify(report, null, 2));
    process.exitCode = 1;
    return;
  }
  console.log(`PASS Phase 08 ${stage}: chapters=${report.counts.chapters}; claims=${report.counts.claims}; sources=${report.counts.sources}; source-claim=${report.counts.sourceClaimEdges}; cases=${report.counts.cases}; ports=${report.counts.ports}`);
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main();
}
