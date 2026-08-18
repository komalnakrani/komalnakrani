import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import { copyFile, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test, { after } from 'node:test';
import { fileURLToPath } from 'node:url';

import {
  BUNDLE_PATHS,
  loadPhase05Bundle,
  validatePhase05,
} from './validate-phase-05.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '../../../../..');
const canonicalPaths = BUNDLE_PATHS.filter((relative) => existsSync(path.join(repoRoot, relative)));

function sha256(buffer) {
  return createHash('sha256').update(buffer).digest('hex');
}

function canonicalHashes() {
  return Object.fromEntries(canonicalPaths.map((relative) => [
    relative,
    sha256(readFileSync(path.join(repoRoot, relative))),
  ]));
}

const beforeHashes = canonicalHashes();
after(() => assert.deepEqual(canonicalHashes(), beforeHashes, 'canonical inputs changed during mutation tests'));

async function fixture(t) {
  const root = await mkdtemp(path.join(tmpdir(), 'mle-phase05-validator-'));
  assert.ok(path.basename(root).startsWith('mle-phase05-validator-'));
  t.after(async () => {
    assert.ok(path.resolve(root).startsWith(path.resolve(tmpdir()) + path.sep));
    await rm(root, { recursive: true, force: true });
  });
  for (const relative of canonicalPaths) {
    const target = path.join(root, relative);
    assert.ok(path.resolve(target).startsWith(path.resolve(root) + path.sep));
    await mkdir(path.dirname(target), { recursive: true });
    await copyFile(path.join(repoRoot, relative), target);
  }
  return root;
}

async function mutateFile(root, relative, transform) {
  const target = path.resolve(root, relative);
  assert.ok(target.startsWith(path.resolve(root) + path.sep), `unsafe mutation target ${target}`);
  const current = await readFile(target, 'utf8');
  const changed = transform(current);
  assert.notEqual(changed, current, `mutation did not change ${relative}`);
  await writeFile(target, changed);
}

async function mutateJson(root, transform) {
  const relative = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/architecture.json';
  await mutateFile(root, relative, (text) => {
    const value = JSON.parse(text);
    transform(value);
    return `${JSON.stringify(value, null, 2)}\n`;
  });
}

async function expectMutation(t, { relative, transform, code, stage = 'pre-hostile' }) {
  const root = await fixture(t);
  if (relative.endsWith('architecture.json')) {
    await mutateJson(root, transform);
  } else {
    await mutateFile(root, relative, transform);
  }
  const result = validatePhase05(await loadPhase05Bundle(root), { stage });
  assert.equal(result.ok, false);
  assert.ok(result.errors.some((error) => error.code === code),
    `expected ${code}; got ${result.errors.map((error) => error.code).join(', ')}`);
}

function replaceBundleText(bundle, relative, value) {
  bundle.files[relative] = {
    text: value,
    sha256: sha256(Buffer.from(value)),
    bytes: Buffer.byteLength(value),
  };
}

function applyValidFinalState(bundle) {
  replaceBundleText(bundle, 'project-control/roles/machine-learning-engineer/ROLE-STATE.md', `# ROLE STATE — Machine Learning Engineer

- Current global phase: Phase 05 book architecture complete
- Last completed child issue: #82
- Active child issue: none

- [x] 05 book architecture
- [ ] 06 source and case-study research — next gate, inactive
`);
  replaceBundleText(bundle, 'project-control/roles/machine-learning-engineer/issues/root.md', `# Machine Learning Engineer — Komal Publication Ecosystem

- Last completed child: #82
- Active child: none
- [x] 05 book architecture — complete
- [ ] 06 source and case-study research — next gate, inactive
`);
  replaceBundleText(bundle, 'project-control/roles/machine-learning-engineer/issues/phase-05-book-architecture.md', `# Phase 05 — Machine Learning Engineer Book Architecture

Status: complete; live child #82 closed with status:done.

## Acceptance criteria

- [x] Architecture package accepted.
- [x] Independent and hostile reviews accepted.
- [x] Verification and path audit passed.

Phase 06 source and bounded case-study research is the sole next gate and is inactive.
`);
  replaceBundleText(bundle, 'project-control/role-factory/FACTORY-STATE.md', `# Komal publication factory state

- Machine Learning Engineer Phase 05 book architecture: complete.
- Last completed child: #82.
- Active child: none.
- Phase 06 source and bounded case-study research: sole next gate, inactive.
- Catalog position 6: not started.
`);
  return bundle;
}

const ARCH_JSON = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/architecture.json';
const ARCH_MD = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/architecture.md';
const CSV = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/competency-to-chapter.csv';
const PROJECT = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/project-map.md';
const VISUAL = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/visual-forecast.md';
const REVIEW2 = 'project-control/roles/machine-learning-engineer/reviews/phase-05/task-02-core-architecture.md';
const REVIEW5 = 'project-control/roles/machine-learning-engineer/reviews/phase-05/task-05-learning-visual.md';
const TASK6_REVIEW = 'project-control/roles/machine-learning-engineer/reviews/phase-05/task-06-hostile-integration.md';
const VERIFICATION = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/phase-05-verification.md';
const RED_COMMAND = 'node --test project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-05.test.mjs';
const EXPECTED_GREEN_TESTS = 190;

async function validPrecloseBundle() {
  const bundle = await loadPhase05Bundle(repoRoot);
  const artifacts = [ARCH_MD, ARCH_JSON, CSV, PROJECT, VISUAL,
    'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-05.mjs',
    'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-05.test.mjs'];
  const reviewText = `# Phase 05 Task 06 Hostile Integration Review

## Reviewed file identities

${artifacts.map((relative) => `| \`${relative}\` | \`${bundle.files[relative].sha256}\` |`).join('\n')}

SPEC COMPLIANCE PASS

QUALITY APPROVED
`;
  replaceBundleText(bundle, TASK6_REVIEW, reviewText);
  bundle.inventory = [...new Set([...bundle.inventory, TASK6_REVIEW])].sort();
  const reviewPaths = [
    'project-control/roles/machine-learning-engineer/reviews/phase-05/task-01-bootstrap.md',
    REVIEW2,
    'project-control/roles/machine-learning-engineer/reviews/phase-05/task-03-competency-map.md',
    'project-control/roles/machine-learning-engineer/reviews/phase-05/task-04-project-map.md',
    REVIEW5,
    TASK6_REVIEW,
  ];
  const manifest = {
    schema: 'mle-phase-05-verification/v1',
    counts: {
      parts: 7, chapters: 21, milestones: 21, clusters: 8, claims: 22,
      boundaries: 17, scenarios: 10, domains: 12, ports: 5,
      context_tests: 40, part_exit_checks: 35, cases: 5, chapter_existence: 21,
    },
    furniture: {
      bench_zero: 'PASS', appendices: 'PASS', about_komal_nakrani: 'PASS',
      closing_dossier: 'PASS',
      closing_statement: 'Ship the model only when its evidence can travel with it.',
    },
    artifacts: artifacts.map((relative) => ({ path: relative, sha256: bundle.files[relative].sha256 })),
    reviews: reviewPaths.map((relative) => ({
      path: relative, sha256: bundle.files[relative].sha256,
      spec_verdict: 'SPEC COMPLIANCE PASS', quality_verdict: 'QUALITY APPROVED',
    })),
    boundaries: {
      companion: 'PASS', media: 'PASS', source_authority: 'PASS',
      no_downstream_output: 'PASS', phase06_inactive: true,
    },
    tdd: {
      red: {
        command: RED_COMMAND, exit_code: 1, node_version: 'v22.23.1',
        tests: 1, pass: 0, fail: 1, error_code: 'ERR_MODULE_NOT_FOUND',
        missing_module: 'validate-phase-05.mjs', timestamp: 'not recorded',
      },
      green: {
        command: RED_COMMAND, status: 'PASS', tests: EXPECTED_GREEN_TESTS,
        pass: EXPECTED_GREEN_TESTS, fail: 0,
      },
    },
    checks: Object.fromEntries([
      'phase01_validator', 'phase01_tests', 'phase04_validator', 'phase04_tests',
      'phase05_validator', 'phase05_tests', 'marker_scan', 'diff_check',
      'repository_check', 'whitespace_eof_audit',
    ].map((name) => [name, { status: 'PASS' }])),
    state_transition: {
      phase05: 'complete', active_child: null, last_completed_child: 82,
      phase06: 'next-inactive', root_issue: { number: 79, state: 'OPEN' },
      child_issue: { number: 82, state: 'CLOSED', status_label: 'status:done' },
      local_remote_main_equal: true, worktree_clean: true,
    },
    gate: {
      status: 'PASS', next_gate: 'Phase 06 source and bounded case-study research',
      phase06_active: false,
    },
  };
  manifest.checks.path_audit = { status: 'PASS', unexpected_paths: [] };
  return { bundle, manifest };
}

function installVerification(bundle, manifest) {
  const value = `# Machine Learning Engineer — Phase 05 Verification

<!-- PHASE05-VERIFICATION-MANIFEST-START -->
\`\`\`json
${JSON.stringify(manifest, null, 2)}
\`\`\`
<!-- PHASE05-VERIFICATION-MANIFEST-END -->
`;
  replaceBundleText(bundle, VERIFICATION, value);
  bundle.inventory = [...new Set([...bundle.inventory, VERIFICATION])].sort();
  return bundle;
}

test('accepts the exact accepted Task 2-5 package at the pre-hostile gate', async () => {
  const result = validatePhase05(await loadPhase05Bundle(repoRoot), { stage: 'pre-hostile' });
  assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2));
  assert.deepEqual(result.counts, {
    parts: 7,
    chapters: 21,
    milestones: 21,
    clusters: 8,
    claims: 22,
    boundaries: 17,
    scenarios: 10,
    domains: 12,
    ports: 5,
    contextTests: 40,
    partExitChecks: 35,
    cases: 5,
    chapterExistence: 21,
    competencyRows: 8,
    projectMilestones: 21,
    visualChapters: 21,
    acceptedTaskReviews: 5,
  });
});

test('uses distinct staged gates to break hostile-review and closeout circularity', async (t) => {
  const root = await fixture(t);
  await rm(path.join(root, 'project-control/roles/machine-learning-engineer/reviews/phase-05/task-06-hostile-integration.md'), { force: true });
  await rm(path.join(root, 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/phase-05-verification.md'), { force: true });
  const bundle = await loadPhase05Bundle(root);
  const hostile = validatePhase05(bundle, { stage: 'pre-hostile' });
  const close = validatePhase05(bundle, { stage: 'pre-close' });
  const final = validatePhase05(bundle, { stage: 'final' });
  assert.equal(hostile.ok, true);
  assert.ok(close.errors.some(({ code }) => code === 'HOSTILE_REVIEW_MISSING'));
  assert.ok(close.errors.some(({ code }) => code === 'VERIFICATION_MISSING'));
  assert.ok(final.errors.some(({ code }) => code === 'STATE_PHASE05_NOT_COMPLETE'));
});

test('rejects identity, decision, schema, and version drift semantically', async (t) => {
  const cases = [
    ['author', (a) => { a.identity.author = 'Someone Else'; }, 'IDENTITY_AUTHOR'],
    ['decision', (a) => { a.decision = '2-VOLUME SERIES'; }, 'IDENTITY_DECISION'],
    ['schema', (a) => { a.schema = 'mle-phase-05-architecture/v2'; }, 'IDENTITY_SCHEMA'],
    ['version', (a) => { a.architectureVersion = '1.0.1'; }, 'IDENTITY_VERSION'],
    ['title', (a) => { a.identity.title = 'Generic Machine Learning'; }, 'IDENTITY_TITLE'],
  ];
  for (const [name, transform, code] of cases) {
    await t.test(name, (st) => expectMutation(st, { relative: ARCH_JSON, transform, code }));
  }
});

test('rejects missing, duplicate, and one-sided Markdown structure drift', async (t) => {
  await t.test('missing heading', (st) => expectMutation(st, {
    relative: ARCH_MD,
    transform: (s) => s.replace('## Dossier lifecycle and legal movement', '## Lifecycle'),
    code: 'ARCH_HEADING_SEQUENCE',
  }));
  await t.test('duplicate heading', (st) => expectMutation(st, {
    relative: ARCH_MD,
    transform: (s) => s.replace('## Change control and Phase 06 handoff', '## Dossier lifecycle and legal movement\n\n## Change control and Phase 06 handoff'),
    code: 'ARCH_HEADING_SEQUENCE',
  }));
  await t.test('one sided projection', (st) => expectMutation(st, {
    relative: ARCH_MD,
    transform: (s) => s.replace('Locate the workload-specific MLE decision', 'Misplace the workload-specific MLE decision'),
    code: 'MARKDOWN_JSON_SYMMETRY',
  }));
  await t.test('fenced fake does not restore heading', (st) => expectMutation(st, {
    relative: ARCH_MD,
    transform: (s) => s.replace('## Bounded case map', '```md\n## Bounded case map\n```'),
    code: 'ARCH_HEADING_SEQUENCE',
  }));
});

test('rejects part, chapter, slug, order, orphan, and duplicate-job mutations', async (t) => {
  const cases = [
    ['part missing', (a) => { a.parts.pop(); }, 'PART_STRUCTURE'],
    ['chapter order', (a) => { a.chapters[1].order = 1; }, 'CHAPTER_ORDER'],
    ['chapter part orphan', (a) => { a.chapters[0].partId = 'PART-99'; }, 'CHAPTER_PART_REFERENCE'],
    ['slug drift', (a) => { a.chapters[0].slug = 'wrong-slug'; }, 'CHAPTER_SLUG'],
    ['duplicate decision', (a) => { a.chapters[1].decisionJob = a.chapters[0].decisionJob; }, 'CHAPTER_UNIQUE_JOB'],
    ['shallow job', (a) => { a.chapters[0].decisionJob = 'Do ML'; }, 'CHAPTER_JOB_DEPTH'],
  ];
  for (const [name, transform, code] of cases) {
    await t.test(name, (st) => expectMutation(st, { relative: ARCH_JSON, transform, code }));
  }
});

test('rejects accepted claim, boundary, scenario, authority, and cluster-set drift', async (t) => {
  const cases = [
    ['claim statement', (a) => { a.acceptedSemantics.claims[0].accepted_statement += ' changed'; }, 'CLAIM_SEMANTICS'],
    ['claim clusters', (a) => { a.acceptedSemantics.claims[0].retained_clusters.push('LC-01'); }, 'CLAIM_SEMANTICS'],
    ['boundary exclusion', (a) => { a.acceptedSemantics.boundaries[0].exclusion += ' changed'; }, 'BOUNDARY_SEMANTICS'],
    ['boundary authority', (a) => { a.acceptedSemantics.boundaries[0].authority_owner = 'MLE'; }, 'BOUNDARY_SEMANTICS'],
    ['scenario statement', (a) => { a.acceptedSemantics.scenarios[0].accepted_scenario += ' changed'; }, 'SCENARIO_SEMANTICS'],
    ['scenario authority', (a) => { a.acceptedSemantics.scenarios[0].authority_owner = 'MLE'; }, 'SCENARIO_SEMANTICS'],
  ];
  for (const [name, transform, code] of cases) {
    await t.test(name, (st) => expectMutation(st, { relative: ARCH_JSON, transform, code }));
  }
});

test('rejects every accepted PUB, ND, RSV, and CP semantic weakening', async (t) => {
  const cases = [
    ['publication endpoint', (a) => { a.acceptedSemantics.publications[0].readerEndpoint += ' changed'; }, 'PUBLICATION_SEMANTICS'],
    ['non-duplication omission', (a) => { a.acceptedSemantics.nonDuplication.pop(); }, 'NON_DUPLICATION_SEMANTICS'],
    ['reservation result', (a) => { a.acceptedSemantics.reservations[0].result = 'NOT TOUCHED'; }, 'RESERVATION_SEMANTICS'],
    ['creative policy', (a) => { a.acceptedSemantics.creativePolicies[0].productionPolicy = 'decorative'; }, 'CREATIVE_POLICY_SEMANTICS'],
  ];
  for (const [name, transform, code] of cases) {
    await t.test(name, (st) => expectMutation(st, { relative: ARCH_JSON, transform, code }));
  }
});

test('rejects late-only controls and direct existing-publication endpoint substitution', async (t) => {
  await t.test('late-only controls', (st) => expectMutation(st, {
    relative: ARCH_JSON,
    transform: (a) => { a.chapters.find((chapter) => chapter.id === 'MLE-CH-19').prerequisiteArtifacts = ['BL-17']; },
    code: 'LATE_ONLY_CONTROLS',
  }));
  await t.test('publication endpoint substitution', (st) => expectMutation(st, {
    relative: ARCH_JSON,
    transform: (a) => { a.chapters[18].readerEndpoint = a.acceptedSemantics.publications[1].readerEndpoint; },
    code: 'CHAPTER_PUBLICATION_DUPLICATION',
  }));
});

test('rejects lifecycle, milestone, graph, and illegal release mutations', async (t) => {
  const cases = [
    ['milestone gap', (a) => { a.lifecycle.milestoneIds.splice(4, 1); }, 'MILESTONE_SET'],
    ['chapter milestone duplicate', (a) => { a.chapters[1].milestone.id = a.chapters[0].milestone.id; }, 'CHAPTER_MILESTONE'],
    ['state discontinuity', (a) => { a.chapters[5].incomingDossierState = 'ORIENTED'; }, 'LIFECYCLE_CONTINUITY'],
    ['illegal hold release', (a) => { a.lifecycle.legalTransitions.push({ from: 'HOLD', to: 'RELEASABLE', evidence: 'shortcut' }); }, 'LIFECYCLE_FORBIDDEN'],
    ['missing reopen', (a) => { a.lifecycle.reopenTriggers.pop(); }, 'LIFECYCLE_SEMANTICS'],
  ];
  for (const [name, transform, code] of cases) {
    await t.test(name, (st) => expectMutation(st, { relative: ARCH_JSON, transform, code }));
  }
  await t.test('project predecessor graph', (st) => expectMutation(st, {
    relative: PROJECT,
    transform: (s) => s.replace('`BL-00@1.0.0`, `benchline-dossier@0.1.0`', '`BL-99@1.0.0`, `benchline-dossier@0.1.0`'),
    code: 'PROJECT_MILESTONE_PROJECTION',
  }));
  await t.test('project illegal path', (st) => expectMutation(st, {
    relative: PROJECT,
    transform: (s) => s.replace('`HOLD->RELEASABLE` is blocked', '`HOLD->RELEASABLE` is permitted'),
    code: 'PROJECT_COMPANION_BOUNDARY',
  }));
});

test('rejects domain, port, context, exit, case, and existence drift', async (t) => {
  const cases = [
    ['domain missing', (a) => { a.domains.pop(); }, 'DOMAIN_SEMANTICS'],
    ['domain duplicate', (a) => { a.domains[1].id = a.domains[0].id; }, 'DOMAIN_SEMANTICS'],
    ['domain unknown', (a) => { a.domains[0].id = 'PD-99'; }, 'DOMAIN_SEMANTICS'],
    ['domain mapping', (a) => { a.domains[0].chapters = [21]; }, 'DOMAIN_SEMANTICS'],
    ['domain authority', (a) => { a.domains[0].authorityCeiling = 'MLE decides all'; }, 'DOMAIN_SEMANTICS'],
    ['domain research need', (a) => { a.domains[0].phase06ResearchNeed = ''; }, 'DOMAIN_SEMANTICS'],
    ['port missing', (a) => { a.ports.pop(); }, 'PORT_SEMANTICS'],
    ['context missing', (a) => { a.clusterContextTests.pop(); }, 'CONTEXT_MATRIX'],
    ['context weakened', (a) => { a.clusterContextTests[0].requiredEvidence = 'port names'; }, 'CONTEXT_SEMANTICS'],
    ['exit missing', (a) => { a.partExitChecks.pop(); }, 'PART_EXIT_MATRIX'],
    ['case truth', (a) => { a.cases[0].truthLabel = 'REAL PRODUCTION'; }, 'CASE_SEMANTICS'],
    ['case missing', (a) => { a.cases.pop(); }, 'CASE_SEMANTICS'],
    ['case wrong port', (a) => { a.cases[0].portId = 'PORT-MANAGED'; }, 'CASE_SEMANTICS'],
    ['case authority', (a) => { a.cases[0].authorityOwner = 'MLE'; }, 'CASE_SEMANTICS'],
    ['case source need', (a) => { a.cases[0].sourceResearchNeed = ''; }, 'CASE_SEMANTICS'],
    ['case unbounded', (a) => { a.cases[1].replaceabilityTest = ''; }, 'CASE_SEMANTICS'],
    ['scenario case mapping', (a) => { a.scenarioCaseMap[0].caseIds = ['CASE-99']; }, 'SCENARIO_CASE_MAP'],
    ['existence ND removed', (a) => { a.chapterExistence[0].ndResults.pop(); }, 'CHAPTER_EXISTENCE'],
    ['existence PUB weakened', (a) => { a.chapterExistence[0].publicationComparisons[0].result = 'UNKNOWN'; }, 'CHAPTER_EXISTENCE'],
  ];
  for (const [name, transform, code] of cases) {
    await t.test(name, (st) => expectMutation(st, { relative: ARCH_JSON, transform, code }));
  }
});

test('rejects RFC CSV corruption, invalid references, and semantic context weakening', async (t) => {
  await t.test('header', (st) => expectMutation(st, {
    relative: CSV,
    transform: (s) => s.replace('cluster_id,cluster_name', 'cluster,cluster_name'),
    code: 'CSV_HEADER',
  }));
  await t.test('malformed quote', (st) => expectMutation(st, {
    relative: CSV,
    transform: (s) => `${s.slice(0, -2)}\n`,
    code: 'CSV_PARSE',
  }));
  await t.test('unknown chapter', (st) => expectMutation(st, {
    relative: CSV,
    transform: (s) => s.replace(',2;3,', ',2;99,'),
    code: 'CSV_SEMANTIC_EQUALITY',
  }));
  await t.test('context weakened', (st) => expectMutation(st, {
    relative: CSV,
    transform: (s) => s.replace('Bound purpose, population, incumbent, consequence, and owners.', 'Port name only'),
    code: 'CSV_SEMANTIC_EQUALITY',
  }));
});

test('rejects project-map heading, milestone, context, exit, and companion drift', async (t) => {
  const cases = [
    ['heading', (s) => s.replace('## Completion invariant', '## Completion'), 'PROJECT_HEADING_SEQUENCE'],
    ['milestone', (s) => s.replace('### BL-20 — Chapter 21:', '### BL-19 — Chapter 21:'), 'PROJECT_MILESTONE_PROJECTION'],
    ['context', (s) => s.replace('### CTX-LC01-MANAGED', '### CTX-LC01-UNKNOWN'), 'PROJECT_CONTEXT_PROJECTION'],
    ['part exit', (s) => s.replace('`PEX-07-SHARED`', '`PEX-07-UNKNOWN`'), 'PROJECT_EXIT_PROJECTION'],
    ['network', (s) => s.replace('requires no credential, network connection, paid service, or real external effect', 'requires a credential and network connection'), 'PROJECT_COMPANION_BOUNDARY'],
    ['secret', (s) => s.replace('requires no credential, network connection, paid service, or real external effect', 'requires an API secret'), 'PROJECT_COMPANION_BOUNDARY'],
    ['provider', (s) => s.replace('local, offline, provider-neutral', 'provider-locked'), 'PROJECT_COMPANION_BOUNDARY'],
    ['real effect', (s) => s.replace('requires no credential, network connection, paid service, or real external effect', 'performs a real external effect'), 'PROJECT_COMPANION_BOUNDARY'],
    ['bit determinism', (s) => s.replace('never claims universal bit-for-bit determinism', 'claims universal bit-for-bit determinism'), 'PROJECT_COMPANION_BOUNDARY'],
  ];
  for (const [name, transform, code] of cases) {
    await t.test(name, (st) => expectMutation(st, { relative: PROJECT, transform, code }));
  }
});

test('rejects visual learning, source, accessibility, media, and furniture drift', async (t) => {
  const cases = [
    ['heading', (s) => s.replace('## Immediate production QA contract', '## QA'), 'VISUAL_HEADING_SEQUENCE'],
    ['chapter field', (s) => s.replace('- **Immediate QA:**', '- **Quick check:**'), 'VISUAL_CHAPTER_CONTRACT'],
    ['exit outcome', (s) => s.replace('`PASS` emits `ORIENTED`', '`PASS` emits `ORIENTED` without `HOLD`'), 'VISUAL_CHAPTER_CONTRACT'],
    ['source authority', (s) => s.replace('Employer postings are not technical authority', 'Employer postings are technical authority'), 'VISUAL_SOURCE_BOUNDARY'],
    ['quota', (s) => s.replace('There is no image quota', 'There is an image quota'), 'VISUAL_MEDIA_POLICY'],
    ['stored webp', (s) => s.replace('No stored SVG or WebP publication asset may be created', 'Stored WebP publication assets may be created'), 'VISUAL_MEDIA_POLICY'],
    ['accessibility', (s) => s.replace('screen-reader available', 'visual-only'), 'VISUAL_ACCESSIBILITY'],
    ['closing', (s) => s.replace('Ship the model only when its evidence can travel with it.', 'Ship the model when ready.'), 'FURNITURE_CLOSING'],
    ['about author', (s) => s.replace('About Komal Nakrani', 'About the Author'), 'FURNITURE_ABOUT'],
    ['bench zero', (s) => s.replace('how to read a\nBench Sheet', 'how to skip the\nBench Sheet'), 'FURNITURE_BENCH_ZERO'],
  ];
  for (const [name, transform, code] of cases) {
    await t.test(name, (st) => expectMutation(st, { relative: VISUAL, transform, code }));
  }
});

test('rejects a missing required appendix contract', async (t) => {
  await expectMutation(t, {
    relative: ARCH_JSON,
    transform: (a) => { a.appendices.pop(); },
    code: 'FURNITURE_APPENDICES',
  });
});

test('rejects review verdict and artifact-hash drift, including historical verdict tricks', async (t) => {
  await t.test('final quality verdict', (st) => expectMutation(st, {
    relative: REVIEW5,
    transform: (s) => s.replace(/QUALITY APPROVED\s*$/, 'QUALITY CHANGES REQUESTED\n'),
    code: 'REVIEW_FINAL_VERDICT',
  }));
  await t.test('later conflicting verdict', (st) => expectMutation(st, {
    relative: REVIEW2,
    transform: (s) => `${s}\nSPEC COMPLIANCE FAIL\nQUALITY CHANGES REQUESTED\n`,
    code: 'REVIEW_FINAL_VERDICT',
  }));
  await t.test('reviewed artifact hash', (st) => expectMutation(st, {
    relative: REVIEW5,
    transform: (s) => s.replace('64861260b24e57342b3d56d651f5b4d55850ad4ac749cea33f1802616c952b94', '0'.repeat(64)),
    code: 'REVIEW_ARTIFACT_HASH',
  }));
});

test('rejects a missing accepted task review', async (t) => {
  const root = await fixture(t);
  await rm(path.join(root, REVIEW5));
  const result = validatePhase05(await loadPhase05Bundle(root), { stage: 'pre-hostile' });
  assert.ok(result.errors.some(({ code }) => code === 'REVIEW_MISSING'));
});

test('requires the paired repair chain for every requested-change history', async (t) => {
  const repair5 = 'project-control/roles/machine-learning-engineer/reviews/phase-05/task-05-repair.md';
  await t.test('missing paired repair', async (st) => {
    const root = await fixture(st);
    await rm(path.join(root, repair5));
    const result = validatePhase05(await loadPhase05Bundle(root), { stage: 'pre-hostile' });
    assert.ok(result.errors.some(({ code }) => code === 'REVIEW_REPAIR_MISSING'));
  });
  await t.test('broken paired hash chain', (st) => expectMutation(st, {
    relative: repair5,
    transform: (s) => s.replace('64861260b24e57342b3d56d651f5b4d55850ad4ac749cea33f1802616c952b94', '0'.repeat(64)),
    code: 'REVIEW_REPAIR_CHAIN',
  }));
});

test('rejects missing, duplicate, malformed, and failed verification manifests', async (t) => {
  const verification = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/phase-05-verification.md';
  const make = (body) => `# Machine Learning Engineer — Phase 05 Verification\n\n<!-- PHASE05-VERIFICATION-MANIFEST-START -->\n\`\`\`json\n${body}\n\`\`\`\n<!-- PHASE05-VERIFICATION-MANIFEST-END -->\n`;
  await t.test('malformed manifest', async (st) => {
    const root = await fixture(st);
    const target = path.join(root, verification);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, make('{'));
    const result = validatePhase05(await loadPhase05Bundle(root), { stage: 'pre-close' });
    assert.ok(result.errors.some(({ code }) => code === 'VERIFICATION_MANIFEST'));
  });
  await t.test('duplicate manifest', async (st) => {
    const root = await fixture(st);
    const target = path.join(root, verification);
    await mkdir(path.dirname(target), { recursive: true });
    const one = make('{}');
    await writeFile(target, `${one}\n${one}`);
    const result = validatePhase05(await loadPhase05Bundle(root), { stage: 'pre-close' });
    assert.ok(result.errors.some(({ code }) => code === 'VERIFICATION_MANIFEST'));
  });
  await t.test('failed checks', async (st) => {
    const root = await fixture(st);
    const target = path.join(root, verification);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, make(JSON.stringify({
      schema: 'mle-phase-05-verification/v1',
      checks: { path_audit: { status: 'FAIL', unexpected_paths: ['bad'] } },
      tdd: { red: { code: 'ERR_MODULE_NOT_FOUND', exit_code: 1 }, green: { status: 'PASS' } },
      reviews: [],
    })));
    const result = validatePhase05(await loadPhase05Bundle(root), { stage: 'pre-close' });
    assert.ok(result.errors.some(({ code }) => code === 'VERIFICATION_CHECK_FAILED'));
    assert.ok(result.errors.some(({ code }) => code === 'VERIFICATION_PATH_AUDIT'));
  });
});

test('accepts the exact durable pre-close verification contract', async () => {
  const { bundle, manifest } = await validPrecloseBundle();
  const result = validatePhase05(installVerification(bundle, manifest), { stage: 'pre-close' });
  assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2));
});

test('rejects semantic drift in every durable verification manifest family', async (t) => {
  const cases = [
    ['counts', (m) => { m.counts.chapters = 20; }, 'VERIFICATION_COUNTS'],
    ['furniture', (m) => { m.furniture.appendices = 'FAIL'; }, 'VERIFICATION_FURNITURE'],
    ['artifact identity', (m) => { m.artifacts[0].sha256 = '0'.repeat(64); }, 'VERIFICATION_ARTIFACT_BINDING'],
    ['review identity', (m) => { m.reviews[0].sha256 = '0'.repeat(64); }, 'VERIFICATION_REVIEW_BINDING'],
    ['companion boundary', (m) => { m.boundaries.companion = 'FAIL'; }, 'VERIFICATION_BOUNDARIES'],
    ['media boundary', (m) => { m.boundaries.media = 'FAIL'; }, 'VERIFICATION_BOUNDARIES'],
    ['RED command', (m) => { m.tdd.red.command = 'npm test'; }, 'VERIFICATION_TDD_RED'],
    ['RED node', (m) => { m.tdd.red.node_version = 'v0.0.0'; }, 'VERIFICATION_TDD_RED'],
    ['RED counts', (m) => { m.tdd.red.tests = 2; }, 'VERIFICATION_TDD_RED'],
    ['RED error', (m) => { m.tdd.red.error_code = 'ERR_TEST_FAILURE'; }, 'VERIFICATION_TDD_RED'],
    ['GREEN counts', (m) => { m.tdd.green.fail = 1; }, 'VERIFICATION_TDD_GREEN'],
    ['check', (m) => { m.checks.phase04_tests.status = 'FAIL'; }, 'VERIFICATION_CHECK_FAILED'],
    ['path audit', (m) => { m.checks.path_audit.unexpected_paths = ['bad']; }, 'VERIFICATION_PATH_AUDIT'],
    ['state transition', (m) => { m.state_transition.active_child = 82; }, 'VERIFICATION_STATE_TRANSITION'],
    ['issue closure', (m) => { m.state_transition.child_issue.state = 'OPEN'; }, 'VERIFICATION_STATE_TRANSITION'],
    ['gate', (m) => { m.gate.phase06_active = true; }, 'VERIFICATION_GATE'],
  ];
  for (const [name, mutate, code] of cases) {
    await t.test(name, async () => {
      const { bundle, manifest } = await validPrecloseBundle();
      mutate(manifest);
      const result = validatePhase05(installVerification(bundle, manifest), { stage: 'pre-close' });
      assert.ok(result.errors.some((entry) => entry.code === code),
        `expected ${code}; got ${result.errors.map((entry) => entry.code).join(', ')}`);
    });
  }
});

test('rejects unexpected downstream paths and actual Phase 05 media assets', async (t) => {
  const root = await fixture(t);
  const unexpected = path.join(root, 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/manuscript/chapter-01.md');
  await mkdir(path.dirname(unexpected), { recursive: true });
  await writeFile(unexpected, 'premature manuscript\n');
  let result = validatePhase05(await loadPhase05Bundle(root), { stage: 'pre-hostile' });
  assert.ok(result.errors.some(({ code }) => code === 'UNEXPECTED_PATH'));

  await rm(path.dirname(unexpected), { recursive: true, force: true });
  const image = path.join(root, 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/figure.png');
  await writeFile(image, 'not really png\n');
  result = validatePhase05(await loadPhase05Bundle(root), { stage: 'pre-hostile' });
  assert.ok(result.errors.some(({ code }) => code === 'PHASE05_MEDIA_ASSET'));
});

test('rejects premature Phase 06 activation and incomplete final state', async (t) => {
  const role = 'project-control/roles/machine-learning-engineer/ROLE-STATE.md';
  await t.test('premature phase06', (st) => expectMutation(st, {
    relative: role,
    transform: (s) => s.replace('Phase 05 book architecture active', 'Phase 06 source research active'),
    code: 'STATE_PHASE06_PREMATURE',
  }));
  const bundle = await loadPhase05Bundle(repoRoot);
  const result = validatePhase05(bundle, { stage: 'final' });
  assert.ok(result.errors.some(({ code }) => code === 'STATE_PHASE05_NOT_COMPLETE'));
});

test('requires exact final state in role, root issue, local issue, and factory state', async (t) => {
  const valid = applyValidFinalState(await loadPhase05Bundle(repoRoot));
  const accepted = validatePhase05(valid, { stage: 'final' });
  assert.equal(accepted.errors.filter(({ code }) => code.startsWith('STATE_')).length, 0,
    JSON.stringify(accepted.errors.filter(({ code }) => code.startsWith('STATE_')), null, 2));
  const cases = [
    ['role', 'project-control/roles/machine-learning-engineer/ROLE-STATE.md', 'Phase 05 book architecture complete', 'Phase 05 book architecture active', 'STATE_ROLE_FINAL'],
    ['root issue', 'project-control/roles/machine-learning-engineer/issues/root.md', 'Active child: none', 'Active child: #82', 'STATE_ROOT_FINAL'],
    ['local issue', 'project-control/roles/machine-learning-engineer/issues/phase-05-book-architecture.md', 'status:done', 'status:in-progress', 'STATE_LOCAL_ISSUE_FINAL'],
    ['factory', 'project-control/role-factory/FACTORY-STATE.md', 'Catalog position 6: not started', 'Catalog position 6: started', 'STATE_FACTORY_FINAL'],
  ];
  for (const [name, relative, from, to, code] of cases) {
    await t.test(name, async () => {
      const bundle = applyValidFinalState(await loadPhase05Bundle(repoRoot));
      replaceBundleText(bundle, relative, bundle.files[relative].text.replace(from, to));
      const result = validatePhase05(bundle, { stage: 'final' });
      assert.ok(result.errors.some((entry) => entry.code === code),
        `expected ${code}; got ${result.errors.map((entry) => entry.code).join(', ')}`);
    });
  }
});

test('bounded repository inventory rejects every forbidden Phase 05 output class', async (t) => {
  const cases = [
    ['course', 'project-control/roles/machine-learning-engineer/course/outline.md', 'FORBIDDEN_COURSE_PATH'],
    ['Abhyaas', 'project-control/roles/machine-learning-engineer/abhyaas/exam.md', 'FORBIDDEN_ABHYAAS_PATH'],
    ['certification', 'project-control/roles/machine-learning-engineer/certification/standard.md', 'FORBIDDEN_CERTIFICATION_PATH'],
    ['question bank', 'project-control/roles/machine-learning-engineer/question-bank/questions.json', 'FORBIDDEN_QUESTION_BANK_PATH'],
    ['manuscript', 'project-control/roles/machine-learning-engineer/manuscript/chapter-01.md', 'UNEXPECTED_PATH'],
    ['blueprint', 'project-control/roles/machine-learning-engineer/blueprints/chapter-01.md', 'UNEXPECTED_PATH'],
    ['companion', 'project-control/roles/machine-learning-engineer/companion/index.mjs', 'UNEXPECTED_PATH'],
    ['Phase 06 research', 'project-control/roles/machine-learning-engineer/research/phase-06-pack.md', 'UNEXPECTED_PATH'],
    ['second volume', 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering-volume-2/architecture.md', 'FORBIDDEN_SECOND_VOLUME_PATH'],
    ['next role', 'project-control/roles/catalog-position-6/ROLE-STATE.md', 'FORBIDDEN_NEXT_ROLE_PATH'],
  ];
  for (const [name, relative, code] of cases) {
    await t.test(name, async (st) => {
      const root = await fixture(st);
      const target = path.join(root, relative);
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, 'premature output\n');
      const result = validatePhase05(await loadPhase05Bundle(root), { stage: 'pre-hostile' });
      assert.ok(result.errors.some((entry) => entry.code === code),
        `expected ${code}; got ${result.errors.map((entry) => entry.code).join(', ')}`);
    });
  }
});

test('bounded repository inventory rejects escaped publication-root outputs', async (t) => {
  const cases = [
    ['top-level course file', 'project-control/roles/machine-learning-engineer/course.md', 'FORBIDDEN_COURSE_PATH'],
    ['project-control course', 'project-control/courses/machine-learning-engineering/outline.md', 'FORBIDDEN_COURSE_PATH'],
    ['invalid review cross-product', 'project-control/roles/machine-learning-engineer/reviews/phase-05/task-06-bootstrap.md', 'UNEXPECTED_PATH'],
    ['course publication', 'content/courses/machine-learning-engineering/outline.md', 'FORBIDDEN_COURSE_PATH'],
    ['book publication', 'content/publications/machine-learning-engineering/chapters/01.md', 'FORBIDDEN_PUBLICATION_PATH'],
    ['role publication', 'content/roles/machine-learning-engineer/role.md', 'FORBIDDEN_ROLE_PUBLICATION_PATH'],
    ['next-role publication', 'content/roles/catalog-position-6/role.md', 'FORBIDDEN_NEXT_ROLE_PATH'],
    ['publication media', 'public/assets/publications/machine-learning-engineering/cover.png', 'PHASE05_MEDIA_ASSET'],
  ];
  for (const [name, relative, code] of cases) {
    await t.test(name, async (st) => {
      const root = await fixture(st);
      const target = path.join(root, relative);
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, 'premature output\n');
      const result = validatePhase05(await loadPhase05Bundle(root), { stage: 'pre-hostile' });
      assert.ok(result.errors.some((entry) => entry.code === code),
        `expected ${code}; got ${result.errors.map((entry) => entry.code).join(', ')}`);
    });
  }
});

test('bounded repository inventory rejects actual site, PDF, and companion production surfaces', async (t) => {
  const cases = [
    ['book route', 'src/pages/books/machine-learning-engineering.astro'],
    ['screen-first builder', 'tools/screen-first-books/books/machine-learning-engineering.mjs'],
    ['screen-first theme', 'tools/screen-first-books/books/machine-learning-engineering.css'],
    ['companion tool', 'tools/machine-learning-engineering-companion/index.mjs'],
  ];
  for (const [name, relative] of cases) {
    await t.test(name, async (st) => {
      const root = await fixture(st);
      const target = path.join(root, relative);
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, 'premature output\n');
      const result = validatePhase05(await loadPhase05Bundle(root), { stage: 'pre-hostile' });
      assert.ok(result.errors.some((entry) => entry.code === 'UNEXPECTED_PATH'),
        `expected UNEXPECTED_PATH; got ${result.errors.map((entry) => entry.code).join(', ')}`);
    });
  }
});

test('bounded repository inventory rejects conventional hidden product roots', async (t) => {
  const cases = [
    ['test fixture', 'tests/fixtures/machine-learning-engineering/case.json', 'UNEXPECTED_PATH'],
    ['built site', 'dist/books/machine-learning-engineering/index.html', 'UNEXPECTED_PATH'],
    ['built download', 'dist/downloads/machine-learning-engineering.pdf', 'UNEXPECTED_PATH'],
    ['root PDF', 'machine-learning-engineering.pdf', 'UNEXPECTED_PATH'],
    ['content Abhyaas', 'content/abhyaas/machine-learning-engineering/exam.json', 'FORBIDDEN_ABHYAAS_PATH'],
    ['content certification', 'content/certification/machine-learning-engineering/standard.md', 'FORBIDDEN_CERTIFICATION_PATH'],
    ['content question bank', 'content/question-bank/machine-learning-engineering/questions.json', 'FORBIDDEN_QUESTION_BANK_PATH'],
    ['next-role data', 'src/data/roles/catalog-position-6.json', 'FORBIDDEN_NEXT_ROLE_PATH'],
  ];
  for (const [name, relative, code] of cases) {
    await t.test(name, async (st) => {
      const root = await fixture(st);
      const target = path.join(root, relative);
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, 'premature output\n');
      const result = validatePhase05(await loadPhase05Bundle(root), { stage: 'pre-hostile' });
      assert.ok(result.errors.some((entry) => entry.code === code),
        `expected ${code}; got ${result.errors.map((entry) => entry.code).join(', ')}`);
    });
  }
});

test('bounded repository inventory rejects target work hidden under prior accepted slugs', async (t) => {
  const cases = [
    'project-control/roles/forward-deployed-engineer/manuscript/machine-learning-engineering-ch01.md',
    'content/publications/forward-deployed-engineering/machine-learning-engineering-ch01.md',
    'content/courses/forward-deployed-engineering-lab/machine-learning-engineering-module.md',
    'content/roles/forward-deployed-engineer/machine-learning-engineering-role.md',
  ];
  for (const relative of cases) {
    await t.test(relative, async (st) => {
      const root = await fixture(st);
      const target = path.join(root, relative);
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, 'premature output\n');
      const result = validatePhase05(await loadPhase05Bundle(root), { stage: 'pre-hostile' });
      assert.ok(result.errors.some((entry) => entry.code === 'UNEXPECTED_PATH'),
        `expected UNEXPECTED_PATH; got ${result.errors.map((entry) => entry.code).join(', ')}`);
    });
  }
});

test('frozen production inventory rejects naming and root bypasses', async (t) => {
  const cases = [
    ['downloads root', 'downloads/machine-learning-engineering.pdf', 'UNEXPECTED_PATH'],
    ['build root', 'build/books/machine-learning-engineering.pdf', 'UNEXPECTED_PATH'],
    ['dot-output root', '.output/books/machine-learning-engineering.pdf', 'UNEXPECTED_PATH'],
    ['artifacts root', 'artifacts/machine-learning-engineering.pdf', 'UNEXPECTED_PATH'],
    ['spaced root PDF', 'machine learning engineering.pdf', 'UNEXPECTED_PATH'],
    ['abbreviated root PDF', 'mle.pdf', 'UNEXPECTED_PATH'],
    ['plural exams', 'content/exams/machine-learning-engineering/exam.json', 'FORBIDDEN_CERTIFICATION_PATH'],
    ['plural certifications', 'content/certifications/machine-learning-engineering/standard.md', 'FORBIDDEN_CERTIFICATION_PATH'],
    ['zero-padded next role', 'src/data/roles/catalog-position-06.json', 'FORBIDDEN_NEXT_ROLE_PATH'],
    ['dotted target under prior publication', 'content/publications/forward-deployed-engineering/machine.learning.engineering-ch01.md', 'UNEXPECTED_PATH'],
    ['abbreviated target under prior publication', 'content/publications/forward-deployed-engineering/mle-ch01.md', 'UNEXPECTED_PATH'],
    ['generic prior publication addition', 'content/publications/forward-deployed-engineering/chapter-99.md', 'UNEXPECTED_PATH'],
    ['generic prior course addition', 'content/courses/forward-deployed-engineering-lab/module-99.md', 'UNEXPECTED_PATH'],
    ['generic prior role addition', 'content/roles/forward-deployed-engineer/extra-role.md', 'UNEXPECTED_PATH'],
    ['generic prior asset addition', 'public/assets/publications/forward-deployed-engineering/new-cover.png', 'UNEXPECTED_PATH'],
    ['abbreviated source route', 'src/pages/books/mle.astro', 'UNEXPECTED_PATH'],
    ['abbreviated tool', 'tools/mle-book/build.mjs', 'UNEXPECTED_PATH'],
    ['abbreviated public download', 'public/downloads/mle.pdf', 'UNEXPECTED_PATH'],
    ['abbreviated output', 'output/books/mle.pdf', 'UNEXPECTED_PATH'],
    ['abbreviated dist route', 'dist/books/mle/index.html', 'UNEXPECTED_PATH'],
  ];
  for (const [name, relative, code] of cases) {
    await t.test(name, async (st) => {
      const root = await fixture(st);
      const target = path.join(root, relative);
      await mkdir(path.dirname(target), { recursive: true });
      await writeFile(target, 'premature output\n');
      const result = validatePhase05(await loadPhase05Bundle(root), { stage: 'pre-hostile' });
      assert.ok(result.errors.some((entry) => entry.code === code),
        `expected ${code}; got ${result.errors.map((entry) => entry.code).join(', ')}`);
    });
  }
});

test('bounded repository inventory accepts existing prior-role publication roots', async () => {
  const bundle = await loadPhase05Bundle(repoRoot);
  for (const prefix of [
    'content/courses/forward-deployed-engineering-lab/',
    'content/publications/forward-deployed-engineering/',
    'content/roles/forward-deployed-engineer/',
    'public/assets/publications/forward-deployed-engineering/',
  ]) {
    assert.ok(bundle.inventory.some((relative) => relative.startsWith(prefix)),
      `inventory did not cover existing root ${prefix}`);
  }
  const result = validatePhase05(bundle, { stage: 'pre-hostile' });
  assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2));
  assert.equal(result.errors.some(({ code }) => code.startsWith('FORBIDDEN_') || code === 'PHASE05_MEDIA_ASSET'), false);
});

test('rejects invalid stages', async () => {
  assert.throws(() => validatePhase05({}, { stage: 'unknown' }), /Unknown Phase 05 validation stage/);
});
