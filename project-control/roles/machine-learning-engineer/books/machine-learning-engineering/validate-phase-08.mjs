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
    taskId: 'TASK-06', ...EXPECTED_REVIEW_IDENTITIES['TASK-06'], artifacts: [...CHAPTER_PATHS, ...FURNITURE_PATHS, ...COMPANION_PATHS, ...INTEGRATION_PATHS],
  },
  [`${ROLE}/reviews/phase-08/task-07-hostile-integration.md`]: {
    taskId: 'TASK-07', ...EXPECTED_REVIEW_IDENTITIES['TASK-07'], artifacts: [...INTEGRATION_PATHS, ...VALIDATOR_PATHS, `${ROLE}/reviews/phase-08/task-06-canonical-integration.md`],
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

  return {
    root: resolve(root), stage, files, phase07, register, blueprints,
    phase08Paths, reviewInventory, productionInventory,
    changedPaths: structuredClone(options.changedPaths ?? options.git?.changedPaths ?? []),
    git: options.git ? structuredClone(options.git) : null,
    github: options.github ? structuredClone(options.github) : null,
    repositoryInventory,
    activationInventory: structuredClone(activationInventory),
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

function parseReviewRecord(text) {
  const blocks = [...text.matchAll(/```json\s*([\s\S]*?)```/g)];
  if (blocks.length === 0) return null;
  try {
    return JSON.parse(blocks.at(-1)[1]);
  } catch {
    return null;
  }
}

function reviewIsFailed(text = '') {
  return /SPEC COMPLIANCE FAIL/.test(text) && /QUALITY CHANGES REQUESTED/.test(text)
    && !/SPEC COMPLIANCE PASS\s*\nQUALITY APPROVED\s*$/s.test(text);
}

function reviewIsAccepted(text = '') {
  return /SPEC COMPLIANCE PASS\s*\nQUALITY APPROVED\s*$/s.test(text);
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
    const base = snapshot.files[basePath]?.text ?? '';
    if (!base || !/SPEC COMPLIANCE FAIL/.test(base)) {
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
        && /SPEC COMPLIANCE FAIL/.test(snapshot.files[`${ROLE}/reviews/phase-08/task-01-bootstrap.md`]?.text ?? '');
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
  if (stage !== 'final' && seen.has(FINAL_VERIFICATION)) errors.push(error('FINAL_VERIFICATION_TIMING', 'final verification may exist only after child closure'));
  if (stage === 'final' && !seen.has(FINAL_VERIFICATION)) errors.push(error('FINAL_VERIFICATION_TIMING', 'final stage requires final verification'));
  errors.push(...validateStageRequirements(snapshot, stage, seen));
  errors.push(...validateConditionalRepairs(snapshot));
  return errors;
}

function validateAuthorities(snapshot, stage) {
  const errors = [];
  const paths = [`${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`, `${ROLE}/issues/phase-08-manuscript.md`, FACTORY];
  for (const path of paths) {
    const text = snapshot.files[path]?.text ?? '';
    const phase08Active = /Phase 08/i.test(text) && /#85/.test(text) && /\bactive\b/i.test(text);
    if (stage !== 'final' && !phase08Active) errors.push(error('FOUR_STATE_AUTHORITY', 'all four authorities must project active Phase 08', path));
    if (/Phase 09[^\n]*\b(active|in progress|started)\b/i.test(text)) errors.push(error('PHASE09_INACTIVE', 'Phase 09 must remain inactive', path));
    if (/Catalog position 6[^\n]*\b(active|in progress|started)\b/i.test(text) && !/Catalog position 6[^\n]*(inactive|not started)/i.test(text)) errors.push(error('PHASE09_INACTIVE', 'catalog position 6 must remain not started', path));
  }
  return errors;
}

function validateExternal(snapshot, stage) {
  const errors = [];
  if (snapshot.git) {
    if (!(snapshot.git.head === snapshot.git.originMain && snapshot.git.head === snapshot.git.remoteMain)) errors.push(error('GIT_MAIN_EQUALITY', 'HEAD, origin/main, and live remote main must agree'));
    if (stage === 'bootstrap') {
      for (const path of snapshot.git.changedPaths ?? []) {
        if (!BOOTSTRAP_DIRT.has(path)) errors.push(error('GIT_BOOTSTRAP_DIRT', 'unexpected dirty path at bootstrap', path));
      }
    }
  }
  const github = snapshot.github;
  if (github) {
    if (github[79]?.state !== 'OPEN' || !sameArray(github[79]?.labels, ['role:machine-learning-engineer', 'status:in-progress'])) errors.push(error('GITHUB_ROOT', '#79 must be open with exact ordered labels'));
    if (github[84]?.state !== 'CLOSED' || !sameArray(github[84]?.labels, ['phase:07-chapter-blueprints', 'role:machine-learning-engineer', 'status:done'])) errors.push(error('GITHUB_PHASE07', '#84 must be closed/done with exact ordered labels'));
    const expected85State = stage === 'final' ? 'CLOSED' : 'OPEN';
    const expected85Labels = stage === 'final'
      ? ['phase:08-manuscript', 'role:machine-learning-engineer', 'status:done']
      : ['phase:08-manuscript', 'role:machine-learning-engineer', 'status:in-progress'];
    if (github[85]?.state !== expected85State || !sameArray(github[85]?.labels, expected85Labels)) errors.push(error('GITHUB_PHASE08', '#85 state or ordered labels drift'));
    if (github[79]?.body !== snapshot.files[`${ROLE}/issues/root.md`]?.text || github[85]?.body !== snapshot.files[`${ROLE}/issues/phase-08-manuscript.md`]?.text) errors.push(error('GITHUB_BODY_HASH', 'live issue bodies must byte-equal local issue authorities'));
    if (stage === 'final' && github[85]?.state !== 'CLOSED') errors.push(error('FINAL_CHILD_STATE', 'final verification requires closed #85'));
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
  return errors;
}

function parseWordRange(value = '') {
  const match = value.match(/([\d,]+)\s*[-–]\s*([\d,]+)/);
  return match ? { minWords: Number(match[1].replaceAll(',', '')), maxWords: Number(match[2].replaceAll(',', '')) } : null;
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
        otherChapters: CHAPTER_PATHS.filter((other) => other !== path && snapshot.files[other]).map((other) => snapshot.files[other].text),
      },
    ).map((item) => ({ ...item, path })));
  }

  const manuscriptRegisterPath = `${BOOK}/manuscript/manuscript-register.json`;
  if (snapshot.files[manuscriptRegisterPath]) {
    try {
      const register = JSON.parse(snapshot.files[manuscriptRegisterPath].text);
      if (register.schema !== 'mle-phase-08-manuscript-register/v1') errors.push(error('MANUSCRIPT_REGISTER', 'manuscript register schema drift', manuscriptRegisterPath));
    } catch {
      errors.push(error('MANUSCRIPT_REGISTER', 'manuscript register must be valid JSON', manuscriptRegisterPath));
    }
  }

  const openingPath = `${BOOK}/manuscript/opening-and-closing.md`;
  if (snapshot.files[openingPath]) {
    const text = snapshot.files[openingPath].text;
    const required = ['Bench Zero', 'About Komal', 'Komal Nakrani', 'Ship the model only when its evidence can travel with it.'];
    if (required.some((token) => !text.includes(token)) || proseWords(text) < 300) {
      errors.push(error('FURNITURE_CONTRACT', 'opening and closing furniture is incomplete or placeholder-depth', openingPath));
    }
  }
  for (const path of PART_PATHS) {
    if (snapshot.files[path] && (!snapshot.files[path].text.includes('Bench Setup') || !snapshot.files[path].text.includes('Qualification Gate'))) {
      errors.push(error('FURNITURE_CONTRACT', 'part furniture must preserve setup and exit gate', path));
    }
  }
  for (const path of APPENDIX_PATHS) {
    if (snapshot.files[path] && proseWords(snapshot.files[path].text) < 100) errors.push(error('FURNITURE_CONTRACT', 'appendix is placeholder-depth', path));
  }

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
      if (verification.schema !== 'mle-phase-08-final-verification/v1') errors.push(error('FINAL_VERIFICATION_SCHEMA', 'final verification schema drift', FINAL_VERIFICATION));
    } catch {
      errors.push(error('FINAL_VERIFICATION_SCHEMA', 'final verification must be valid JSON', FINAL_VERIFICATION));
    }
  }

  for (const path of snapshot.phase08Paths.filter((item) => item.startsWith(`${ROLE}/reviews/phase-08/task-`) && !item.endsWith('-repair.md'))) {
    if (path.endsWith('task-00-plan.md')) continue;
    const text = snapshot.files[path]?.text ?? '';
    if (stage === 'bootstrap' && reviewIsFailed(text)) continue;
    const record = parseReviewRecord(text);
    if (!record) {
      errors.push(error('REVIEW_SCHEMA', 'review must end with a machine-readable closed record', path));
      continue;
    }
    const expected = EXPECTED_REVIEW_IDENTITIES[record.taskId];
    errors.push(...validateReviewRecord(record, expected, { files: snapshot.files, reviewPath: path }).map((item) => ({ ...item, path })));
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
    const requiredPaths = [...pathContract.artifacts].sort();
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
  if (context.files) {
    for (const binding of review.artifactBindings ?? []) {
      if (!binding?.path || context.files[binding.path]?.sha256 !== binding.sha256) {
        errors.push(error('REVIEW_ARTIFACT_BINDING', 'review artifact binding differs from loaded bytes', binding?.path));
      }
    }
    if (review.repairPath && context.files[review.repairPath]?.sha256 !== review.repairSha256) {
      errors.push(error('REVIEW_ARTIFACT_BINDING', 'repair binding differs from loaded bytes', review.repairPath));
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
  if ((options.otherChapters ?? []).some((other) => other === markdown)) errors.push(error('MANUSCRIPT_ORIGINALITY', 'chapter duplicates another manuscript byte-for-byte'));
  const truthTokens = ['synthetic-deterministic', 'reported facts', 'attributed outcomes', 'allowed inference', 'forbidden inference', 'limitations', 'source notes', 'currentness'];
  if (truthTokens.some((token) => !markdown.toLowerCase().includes(token))) errors.push(error('MANUSCRIPT_TRUTH_BOUNDARY', 'source/case/currentness truth grammar is incomplete'));
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
