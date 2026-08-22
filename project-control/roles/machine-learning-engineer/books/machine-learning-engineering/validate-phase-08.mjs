#!/usr/bin/env node

import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { lstat, readFile, readdir } from 'node:fs/promises';
import { dirname, isAbsolute, relative, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

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
]);
const STAGES = new Set(['bootstrap', 'production', 'integration', 'pre-hostile', 'pre-close', 'final-content', 'final']);

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
        return [relativeRoot, parent, entry.name].filter(Boolean).join('/');
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
  const reviewInventory = phase08Paths
    .filter((path) => path.startsWith(`${ROLE}/reviews/phase-08/`))
    .map((path) => path.split('/').at(-1));
  const productionInventory = phase08Paths.filter((path) => PRODUCTION_PATHS.includes(path));

  return {
    root: resolve(root), stage, files, phase07, register, blueprints,
    phase08Paths, reviewInventory, productionInventory,
    changedPaths: options.changedPaths ?? options.git?.changedPaths ?? [],
    git: options.git ? structuredClone(options.git) : null,
    github: options.github ? structuredClone(options.github) : null,
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

function validateInventory(snapshot, stage) {
  const errors = [];
  const seen = new Set(snapshot.phase08Paths);
  for (const path of snapshot.phase08Paths) {
    if (!ALL_PHASE08_PATHS.has(path)) errors.push(error('UNEXPECTED_PHASE08_PATH', 'path is outside the closed Phase 08 allowlist', path));
    if (stage === 'bootstrap' && !BOOTSTRAP_ALLOWED.has(path)) errors.push(error('STAGE_PATH_FORBIDDEN', 'path is not legal at bootstrap', path));
  }
  if (stage === 'bootstrap') {
    for (const path of VALIDATOR_PATHS) {
      if (!seen.has(path)) errors.push(error('BOOTSTRAP_FILE_MISSING', 'validator and test must exist at GREEN bootstrap', path));
    }
  }
  if (stage !== 'final' && seen.has(FINAL_VERIFICATION)) errors.push(error('FINAL_VERIFICATION_TIMING', 'final verification may exist only after child closure'));
  if (stage === 'final' && !seen.has(FINAL_VERIFICATION)) errors.push(error('FINAL_VERIFICATION_TIMING', 'final stage requires final verification'));
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
  return errors;
}

const REVIEW_FIELDS = [
  'taskId', 'producerIdentity', 'reviewerIdentity', 'reviewedAt', 'artifactBindings',
  'priorVerdict', 'repairPath', 'repairSha256', 'reacceptedBy', 'reacceptedAt',
  'specVerdict', 'qualityVerdict',
];

export function validateReviewRecord(review, expectedIdentity) {
  const errors = [];
  if (REVIEW_FIELDS.some((field) => !Object.hasOwn(review, field)) || !Array.isArray(review.artifactBindings) || review.artifactBindings.length === 0) errors.push(error('REVIEW_SCHEMA', 'review record is missing a closed-schema field or binding'));
  if (review.producerIdentity === review.reviewerIdentity) errors.push(error('REVIEW_SELF_APPROVAL', 'producer and reviewer must differ'));
  if (!expectedIdentity || review.producerIdentity !== expectedIdentity.producerIdentity || review.reviewerIdentity !== expectedIdentity.reviewerIdentity) errors.push(error('REVIEW_IDENTITY', 'review identities differ from the frozen plan'));
  const hasRepair = [review.repairPath, review.repairSha256, review.reacceptedBy, review.reacceptedAt].every(Boolean);
  const hasAnyRepair = [review.repairPath, review.repairSha256, review.reacceptedBy, review.reacceptedAt].some(Boolean);
  if (hasAnyRepair && !hasRepair) errors.push(error('REVIEW_REPAIR_CHAIN', 'repair chain must be complete'));
  if (hasRepair) {
    if (!review.priorVerdict || review.reacceptedBy !== review.reviewerIdentity || Date.parse(review.reacceptedAt) <= Date.parse(review.reviewedAt) || !/^[a-f0-9]{64}$/.test(review.repairSha256)) errors.push(error('REVIEW_REPAIR_CHAIN', 'repair must bind a prior failure and same later reviewer'));
  } else if (review.priorVerdict) {
    errors.push(error('REVIEW_REPAIR_CHAIN', 'prior failure requires a complete repair chain'));
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
    if ((markdown.match(primaryPattern) ?? []).length > 1) errors.push(error('MANUSCRIPT_CLAIM_PRIMARY', `${claimId} has duplicate primary teaching treatment`));
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

export async function validateRepository(root, options = {}) {
  const snapshot = await loadRepositorySnapshot(root, options);
  return {
    schema: 'mle-phase-08-validator-report/v1',
    stage: options.stage ?? 'bootstrap',
    counts: snapshot.register.counts,
    productionInventory: snapshot.productionInventory,
    reviewInventory: snapshot.reviewInventory,
    errors: validatePhase08Snapshot(snapshot, options),
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
