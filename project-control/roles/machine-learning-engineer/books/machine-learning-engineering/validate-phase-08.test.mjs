import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { mkdtemp, mkdir, cp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import test from 'node:test';
import { promisify } from 'node:util';

import * as validatorModule from './validate-phase-08.mjs';

import {
  EXPECTED_COUNTS,
  EXPECTED_PORTS,
  EXPECTED_REVIEW_IDENTITIES,
  FROZEN_INPUTS,
  canonicalJson,
  loadRepositorySnapshot,
  sha256,
  validateCompanionBoundary,
  validateManuscriptChapter,
  validatePhase08Snapshot,
  validateRepository,
  validateReviewRecord,
} from './validate-phase-08.mjs';

const GIT_REPO = '/Applications/ServBay/www/komalnakrani';
const REPO = process.env.MLE_PHASE08_FIXTURE_REPO ?? GIT_REPO;
const BOOK = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering';
const ROLE = 'project-control/roles/machine-learning-engineer';
const FACTORY = 'project-control/role-factory/FACTORY-STATE.md';
const HEAD = 'c9edc934e463dc2d8837244f2512d5d9fe8579e8';
const execFileAsync = promisify(execFile);
const FAILED_TASK01_REVIEW_COMMIT = '5fc2420fb2a4ea4d82d0badcd6cafc6f5c272111';
const FAILED_TASK01_REVIEW_SHA256 = 'f5956762f9db538c9d57039779f331114f60945ec0fd81032ca64427bbd6bcd1';
const PRIOR_VALIDATOR_COMMIT = '8cf1fce280ffd5932201d33470255c98bd6e3aba';

const bootstrapGit = {
  head: HEAD,
  originMain: HEAD,
  remoteMain: HEAD,
  clean: false,
  changedPaths: [
    `${ROLE}/ROLE-STATE.md`,
    `${ROLE}/issues/root.md`,
    `${ROLE}/issues/phase-08-manuscript.md`,
    FACTORY,
    `${BOOK}/validate-phase-08.test.mjs`,
    `${BOOK}/validate-phase-08.mjs`,
  ],
};

async function bootstrapGithub(root = REPO) {
  const [rootBody, childBody] = await Promise.all([
    readFile(join(root, `${ROLE}/issues/root.md`), 'utf8'),
    readFile(join(root, `${ROLE}/issues/phase-08-manuscript.md`), 'utf8'),
  ]);
  return {
    79: {
      number: 79,
      state: 'OPEN',
      labels: ['role:machine-learning-engineer', 'status:in-progress'],
      body: rootBody,
    },
    84: {
      number: 84,
      state: 'CLOSED',
      labels: [
        'phase:07-chapter-blueprints',
        'role:machine-learning-engineer',
        'status:done',
      ],
      body: 'phase 07 accepted and closed',
    },
    85: {
      number: 85,
      state: 'OPEN',
      labels: [
        'phase:08-manuscript',
        'role:machine-learning-engineer',
        'status:in-progress',
      ],
      body: childBody,
    },
  };
}

async function loadBootstrap() {
  const root = await immutableBootstrapRoot();
  return loadRepositorySnapshot(root, {
    stage: 'bootstrap',
    git: bootstrapGit,
    github: await bootstrapGithub(root),
  });
}

let immutableBootstrapRootPromise;
function immutableBootstrapRoot() {
  immutableBootstrapRootPromise ??= copiedBootstrapRoot();
  return immutableBootstrapRootPromise;
}

function clone(value) {
  return structuredClone(value);
}

function errorCodes(errors) {
  return errors.map((error) => error.code);
}

function expectCode(errors, code) {
  assert.ok(
    errorCodes(errors).includes(code),
    `expected ${code}; got ${JSON.stringify(errors, null, 2)}`,
  );
}

function expectOnlyCode(errors, code) {
  assert.deepEqual([...new Set(errorCodes(errors))], [code], JSON.stringify(errors, null, 2));
}

test('canonical JSON recursively sorts object keys, preserves arrays, and ends in one LF', () => {
  const bytes = canonicalJson({ z: 1, a: { y: 2, b: [3, { d: 4, c: 5 }] } });
  assert.equal(bytes, '{"a":{"b":[3,{"c":5,"d":4}],"y":2},"z":1}\n');
});

test('SHA-256 binds the exact UTF-8 bytes', () => {
  assert.equal(
    sha256('abc'),
    'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad',
  );
});

test('loads an immutable activation fixture and passes bootstrap without production artifacts', async () => {
  const root = await immutableBootstrapRoot();
  const report = await validateRepository(root, {
    stage: 'bootstrap',
    git: bootstrapGit,
    github: await bootstrapGithub(root),
  });
  assert.deepEqual(report.errors, []);
  assert.equal(report.stage, 'bootstrap');
  assert.equal(report.counts.chapters, 21);
  assert.equal(report.productionInventory.length, 0);
  assert.equal(report.reviewInventory.includes('task-01-bootstrap.md'), false);
  assert.equal(report.bootstrapLifecycle, 'pre-review');
  assert.equal(report.productionAuthorized, false);
});

test('the bootstrap snapshot reads real state and all twenty-one blueprint files', async () => {
  const snapshot = await loadBootstrap();
  assert.equal(snapshot.blueprints.length, 21);
  assert.equal(snapshot.blueprints[0].path.endsWith('chapter-01.md'), true);
  assert.equal(snapshot.blueprints[20].path.endsWith('chapter-21.md'), true);
  assert.match(snapshot.files[`${ROLE}/ROLE-STATE.md`].text, /Phase 08.+active/s);
  assert.match(snapshot.files[FACTORY].text, /Catalog position 6: not started/);
});

test('frozen Phase 07 inputs retain their exact byte hashes', async () => {
  const snapshot = await loadBootstrap();
  for (const [path, expected] of Object.entries(FROZEN_INPUTS)) {
    assert.equal(snapshot.files[path].sha256, expected, path);
  }
});

for (const [name, expected] of Object.entries(EXPECTED_COUNTS)) {
  test(`rejects a self-consistent-looking mutation of frozen count ${name}=${expected}`, async () => {
    const snapshot = await loadBootstrap();
    snapshot.register.counts[name] = expected + 1;
    expectCode(validatePhase08Snapshot(snapshot, { stage: 'bootstrap' }), `COUNT_${name}`);
  });
}

test('rejects a changed frozen input byte even when the JSON remains parseable', async () => {
  const snapshot = await loadBootstrap();
  const path = `${BOOK}/blueprints/blueprint-register.json`;
  snapshot.files[path].text += '\n';
  snapshot.files[path].sha256 = sha256(snapshot.files[path].text);
  expectCode(validatePhase08Snapshot(snapshot, { stage: 'bootstrap' }), 'FROZEN_INPUT_HASH');
});

test('rejects a missing chapter blueprint', async () => {
  const snapshot = await loadBootstrap();
  snapshot.blueprints.splice(8, 1);
  expectCode(validatePhase08Snapshot(snapshot, { stage: 'bootstrap' }), 'BLUEPRINT_INVENTORY');
});

test('rejects a changed chapter blueprint against Phase 07 verification bindings', async () => {
  const snapshot = await loadBootstrap();
  snapshot.blueprints[2].sha256 = '0'.repeat(64);
  expectCode(validatePhase08Snapshot(snapshot, { stage: 'bootstrap' }), 'BLUEPRINT_HASH');
});

test('rejects chapter order, identity, part, claim, source, port, and milestone drift', async (t) => {
  const mutations = [
    ['order', (r) => { r.chapters[0].order = 2; }, 'CHAPTER_ORDER'],
    ['identity', (r) => { r.chapters[0].chapterId = 'MLE-CH-99'; }, 'CHAPTER_IDENTITY'],
    ['part', (r) => { r.chapters[0].partId = 'PART-07'; }, 'CHAPTER_PART'],
    ['claims', (r) => { r.chapters[0].primaryClaimIds.pop(); }, 'CHAPTER_CLAIMS'],
    ['sources', (r) => { r.sourceUses.pop(); }, 'SOURCE_EDGE_COUNT'],
    ['ports', (r) => { r.chapters[0].portIds.pop(); }, 'CHAPTER_PORTS'],
    ['milestone', (r) => { r.chapters[0].milestoneId = 'BL-20'; }, 'DOSSIER_LINEAGE'],
  ];
  for (const [name, mutate, code] of mutations) {
    await t.test(name, async () => {
      const snapshot = await loadBootstrap();
      mutate(snapshot.register);
      expectCode(validatePhase08Snapshot(snapshot, { stage: 'bootstrap' }), code);
    });
  }
});

test('derives the exact graph instead of trusting only the count object', async () => {
  const snapshot = await loadBootstrap();
  snapshot.register.sourceUses.pop();
  snapshot.register.counts.sourceClaimEdges -= 1;
  const errors = validatePhase08Snapshot(snapshot, { stage: 'bootstrap' });
  expectCode(errors, 'COUNT_sourceClaimEdges');
  expectCode(errors, 'SOURCE_EDGE_COUNT');
});

test('rejects an unexpected Phase 08 path at bootstrap', async () => {
  const snapshot = await loadBootstrap();
  snapshot.phase08Paths.push(`${BOOK}/manuscript/notes.tmp`);
  expectCode(validatePhase08Snapshot(snapshot, { stage: 'bootstrap' }), 'UNEXPECTED_PHASE08_PATH');
});

test('bootstrap forbids manuscript, furniture, appendix, companion, lane manifests, reviews, and final verification', async (t) => {
  const forbidden = [
    `${BOOK}/manuscript/chapter-01.md`,
    `${BOOK}/manuscript/opening-and-closing.md`,
    `${BOOK}/manuscript/appendix-a.md`,
    `${BOOK}/companion/package.json`,
    '.superpowers/sdd/2026-08-22-machine-learning-engineer-phase-08/lane-a-manifest.json',
    `${ROLE}/reviews/phase-08/task-01-bootstrap.md`,
    `${BOOK}/phase-08-verification.json`,
  ];
  for (const path of forbidden) {
    await t.test(path, async () => {
      const snapshot = await loadBootstrap();
      snapshot.phase08Paths.push(path);
      if (path.endsWith('task-01-bootstrap.md')) {
        snapshot.files[path] = { text: 'unexpected accepted-looking review\n', sha256: sha256('unexpected accepted-looking review\n') };
      }
      expectCode(validatePhase08Snapshot(snapshot, { stage: 'bootstrap' }), 'STAGE_PATH_FORBIDDEN');
    });
  }
});

test('rejects images, PDFs, public publication, course, Abhyaas, second-volume, catalog-six, and next-role leakage', async (t) => {
  const paths = [
    'public/images/machine-learning-engineering/figure.png',
    'output/machine-learning-engineering.pdf',
    'content/publications/machine-learning-engineering/index.mdx',
    'content/courses/machine-learning-engineering/index.mdx',
    'project-control/certifications/machine-learning-engineer.md',
    'project-control/abhyaas/mle-exam.json',
    `${BOOK}/volume-02/chapter-01.md`,
    'project-control/roles/data-engineer/ROLE-STATE.md',
  ];
  for (const path of paths) {
    await t.test(path, async () => {
      const snapshot = await loadBootstrap();
      snapshot.changedPaths.push(path);
      expectCode(validatePhase08Snapshot(snapshot, { stage: 'bootstrap' }), 'STOP_BOUNDARY');
    });
  }
});

test('requires all four local authorities to agree that Phase 08 is active and Phase 09 is inactive', async (t) => {
  const paths = [
    `${ROLE}/ROLE-STATE.md`,
    `${ROLE}/issues/root.md`,
    `${ROLE}/issues/phase-08-manuscript.md`,
    FACTORY,
  ];
  for (const path of paths) {
    await t.test(path, async () => {
      const snapshot = await loadBootstrap();
      snapshot.files[path].text = snapshot.files[path].text.replace(/Phase 08/g, 'Phase 09');
      expectCode(validatePhase08Snapshot(snapshot, { stage: 'bootstrap' }), 'FOUR_STATE_AUTHORITY');
    });
  }
});

test('Phase 09, catalog position 6, visual, PDF, course, and Abhyaas remain inactive in every authority', async () => {
  const snapshot = await loadBootstrap();
  snapshot.files[`${ROLE}/ROLE-STATE.md`].text += '\nPhase 09 active\n';
  expectCode(validatePhase08Snapshot(snapshot, { stage: 'bootstrap' }), 'PHASE09_INACTIVE');
});

test('requires local main, origin/main, and live remote main equality', async (t) => {
  for (const field of ['originMain', 'remoteMain']) {
    await t.test(field, async () => {
      const snapshot = await loadBootstrap();
      snapshot.git[field] = 'f'.repeat(40);
      expectCode(validatePhase08Snapshot(snapshot, { stage: 'bootstrap' }), 'GIT_MAIN_EQUALITY');
    });
  }
});

test('permits only the exact bootstrap dirt paths', async () => {
  const snapshot = await loadBootstrap();
  snapshot.git.changedPaths.push(`${BOOK}/manuscript/chapter-01.md`);
  expectCode(validatePhase08Snapshot(snapshot, { stage: 'bootstrap' }), 'GIT_BOOTSTRAP_DIRT');
});

test('requires GitHub #79 open/in-progress, #84 closed/done, and #85 open with exact ordered labels', async (t) => {
  const mutations = [
    ['root state', (g) => { g[79].state = 'CLOSED'; }, 'GITHUB_ROOT'],
    ['phase07 state', (g) => { g[84].state = 'OPEN'; }, 'GITHUB_PHASE07'],
    ['phase08 state', (g) => { g[85].state = 'CLOSED'; }, 'GITHUB_PHASE08'],
    ['phase08 labels', (g) => { g[85].labels.reverse(); }, 'GITHUB_PHASE08'],
  ];
  for (const [name, mutate, code] of mutations) {
    await t.test(name, async () => {
      const snapshot = await loadBootstrap();
      mutate(snapshot.github);
      expectCode(validatePhase08Snapshot(snapshot, { stage: 'bootstrap' }), code);
    });
  }
});

test('requires live #79 and #85 bodies to byte-equal the local issue authorities', async (t) => {
  for (const issue of [79, 85]) {
    await t.test(`#${issue}`, async () => {
      const snapshot = await loadBootstrap();
      snapshot.github[issue].body += '\nchanged';
      expectCode(validatePhase08Snapshot(snapshot, { stage: 'bootstrap' }), 'GITHUB_BODY_HASH');
    });
  }
});

const reviewBase = {
  taskId: 'TASK-01',
  producerIdentity: '/root/mle_p8_bootstrap',
  reviewerIdentity: '/root/mle_p8_bootstrap_review',
  reviewedAt: '2026-08-22T09:00:00+05:30',
  artifactBindings: [{ path: `${BOOK}/validate-phase-08.mjs`, sha256: 'a'.repeat(64) }],
  priorVerdict: null,
  repairPath: null,
  repairSha256: null,
  reacceptedBy: null,
  reacceptedAt: null,
  specVerdict: 'SPEC COMPLIANCE PASS',
  qualityVerdict: 'QUALITY APPROVED',
};

test('accepts the exact Task 01 producer and independent reviewer identities', () => {
  assert.deepEqual(validateReviewRecord(reviewBase, EXPECTED_REVIEW_IDENTITIES['TASK-01']), []);
});

test('review records reject self-review, wrong identity, missing fields, and an unpaired repair', async (t) => {
  const mutations = [
    ['self review', (r) => { r.reviewerIdentity = r.producerIdentity; }, 'REVIEW_SELF_APPROVAL'],
    ['wrong reviewer', (r) => { r.reviewerIdentity = '/root'; }, 'REVIEW_IDENTITY'],
    ['missing schema field', (r) => { delete r.reviewedAt; }, 'REVIEW_SCHEMA'],
    ['unpaired repair', (r) => { r.repairPath = 'repair.md'; }, 'REVIEW_REPAIR_CHAIN'],
  ];
  for (const [name, mutate, code] of mutations) {
    await t.test(name, () => {
      const review = clone(reviewBase);
      mutate(review);
      expectCode(validateReviewRecord(review, EXPECTED_REVIEW_IDENTITIES['TASK-01']), code);
    });
  }
});

test('a failed review requires same-reviewer later reacceptance and exact repair binding', async (t) => {
  const acceptedRepair = {
    ...clone(reviewBase),
    priorVerdict: 'SPEC COMPLIANCE FAIL / QUALITY CHANGES REQUESTED',
    repairPath: `${ROLE}/reviews/phase-08/task-01-bootstrap-repair.md`,
    repairSha256: 'b'.repeat(64),
    reacceptedBy: '/root/mle_p8_bootstrap_review',
    reacceptedAt: '2026-08-22T10:00:00+05:30',
  };
  assert.deepEqual(
    validateReviewRecord(acceptedRepair, EXPECTED_REVIEW_IDENTITIES['TASK-01']),
    [],
  );
  await t.test('different reviewer', () => {
    const review = clone(acceptedRepair);
    review.reacceptedBy = '/root';
    expectCode(validateReviewRecord(review, EXPECTED_REVIEW_IDENTITIES['TASK-01']), 'REVIEW_REPAIR_CHAIN');
  });
  await t.test('non-later timestamp', () => {
    const review = clone(acceptedRepair);
    review.reacceptedAt = review.reviewedAt;
    expectCode(validateReviewRecord(review, EXPECTED_REVIEW_IDENTITIES['TASK-01']), 'REVIEW_REPAIR_CHAIN');
  });
});

function chapterFixture(blueprint, wordCount = 4300) {
  const headings = blueprint.sectionIds
    .map((id, index) => `## ${id} ${['Bench Setup', 'Procedure', 'Evidence', 'Worked Trace', 'Failure Lab', 'Five-Port Transfer', 'Qualification Gate', 'Durable Handoff'][index]}`)
    .join('\n\n');
  const required = [
    'Bench Setup', 'decision', 'evidence', 'state and dossier delta',
    'authority route', 'next evidence', 'Bench Sheet', 'Qualification Gate',
    ...blueprint.primaryClaimIds, ...blueprint.portIds, ...blueprint.labIds,
    ...blueprint.assessmentIds, ...blueprint.visualIds, blueprint.milestoneId,
    blueprint.authorityOwner, blueprint.mleCeiling,
    'synthetic-deterministic', 'reported facts', 'attributed outcomes',
    'allowed inference', 'forbidden inference', 'limitations', 'source notes',
    'currentness', 'next dossier handoff',
    ...blueprint.primaryClaimIds.map((claimId) => `Primary teaching ${claimId}`),
  ].join('\n');
  const prose = Array.from({ length: wordCount }, (_, i) => `word${i % 997}`).join(' ');
  return `# ${blueprint.chapterId} — ${blueprint.title}\n\n${headings}\n\n${required}\n\n${prose}\n`;
}

test('a realistic later-stage chapter binds blueprint identity, depth, grammar, evidence, ports, labs, and handoff', async () => {
  const snapshot = await loadBootstrap();
  const blueprint = snapshot.register.chapters[1];
  const errors = validateManuscriptChapter(
    chapterFixture(blueprint, 4300),
    blueprint,
    snapshot.register,
    { minWords: 4200, maxWords: 4800, otherChapters: [] },
  );
  assert.deepEqual(errors, []);
});

test('later-stage chapter validation rejects shallow prose, ordered-section drift, missing grammar, duplicate primary claim treatment, and suspicious overlap', async (t) => {
  const snapshot = await loadBootstrap();
  const blueprint = snapshot.register.chapters[0];
  const base = chapterFixture(blueprint, 4300);
  const cases = [
    ['depth', chapterFixture(blueprint, 200), { minWords: 4200, maxWords: 4800, otherChapters: [] }, 'MANUSCRIPT_DEPTH'],
    ['section order', base.replace(blueprint.sectionIds[0], 'MLE-CH-01-S99'), { minWords: 4200, maxWords: 4800, otherChapters: [] }, 'MANUSCRIPT_SECTION_ORDER'],
    ['grammar', base.replace('authority route', ''), { minWords: 4200, maxWords: 4800, otherChapters: [] }, 'MANUSCRIPT_GRAMMAR'],
    ['duplicate primary', `${base}\nPrimary teaching ${blueprint.primaryClaimIds[0]}\nPrimary teaching ${blueprint.primaryClaimIds[0]}\n`, { minWords: 4200, maxWords: 4800, otherChapters: [] }, 'MANUSCRIPT_CLAIM_PRIMARY'],
    ['overlap', base, { minWords: 4200, maxWords: 4800, otherChapters: [base] }, 'MANUSCRIPT_ORIGINALITY'],
  ];
  for (const [name, text, options, code] of cases) {
    await t.test(name, () => {
      expectCode(validateManuscriptChapter(text, blueprint, snapshot.register, options), code);
    });
  }
});

test('companion boundary accepts deterministic provider-neutral effect-free metadata', () => {
  const contract = {
    ports: [...EXPECTED_PORTS],
    networkCalls: 0,
    shellCalls: 0,
    cloudSdkCalls: 0,
    modelCalls: 0,
    environmentSecretReads: 0,
    fixedClock: true,
    fixedSeed: true,
    target: '/private/tmp/mle-p8-fresh/run',
    repositoryRoot: REPO,
    targetExists: false,
    targetIsSymlink: false,
    resolvedWrites: ['/private/tmp/mle-p8-fresh/run/BL-00.json'],
    earlierRecordMutations: 0,
    canonicalTerminalLf: true,
  };
  assert.deepEqual(validateCompanionBoundary(contract), []);
});

test('companion boundary rejects unequal ports and every effect or escape family', async (t) => {
  const base = {
    ports: [...EXPECTED_PORTS], networkCalls: 0, shellCalls: 0, cloudSdkCalls: 0,
    modelCalls: 0, environmentSecretReads: 0, fixedClock: true, fixedSeed: true,
    target: '/private/tmp/mle-p8-fresh/run', repositoryRoot: REPO,
    targetExists: false, targetIsSymlink: false,
    resolvedWrites: ['/private/tmp/mle-p8-fresh/run/BL-00.json'],
    earlierRecordMutations: 0, canonicalTerminalLf: true,
  };
  const mutations = [
    ['ports', (c) => { c.ports.pop(); }, 'COMPANION_PORTS'],
    ['network', (c) => { c.networkCalls = 1; }, 'COMPANION_EFFECT'],
    ['shell', (c) => { c.shellCalls = 1; }, 'COMPANION_EFFECT'],
    ['cloud', (c) => { c.cloudSdkCalls = 1; }, 'COMPANION_EFFECT'],
    ['model', (c) => { c.modelCalls = 1; }, 'COMPANION_EFFECT'],
    ['secret', (c) => { c.environmentSecretReads = 1; }, 'COMPANION_EFFECT'],
    ['clock', (c) => { c.fixedClock = false; }, 'COMPANION_DETERMINISM'],
    ['seed', (c) => { c.fixedSeed = false; }, 'COMPANION_DETERMINISM'],
    ['repository target', (c) => { c.target = `${REPO}/public`; }, 'COMPANION_ESCAPE'],
    ['traversal', (c) => { c.target = '../public'; }, 'COMPANION_ESCAPE'],
    ['existing target', (c) => { c.targetExists = true; }, 'COMPANION_ESCAPE'],
    ['symlink', (c) => { c.targetIsSymlink = true; }, 'COMPANION_ESCAPE'],
    ['out-of-root write', (c) => { c.resolvedWrites = ['/private/tmp/elsewhere/x']; }, 'COMPANION_ESCAPE'],
    ['mutation', (c) => { c.earlierRecordMutations = 1; }, 'COMPANION_IMMUTABILITY'],
    ['bytes', (c) => { c.canonicalTerminalLf = false; }, 'COMPANION_CANONICAL_BYTES'],
  ];
  for (const [name, mutate, code] of mutations) {
    await t.test(name, () => {
      const contract = clone(base);
      mutate(contract);
      expectCode(validateCompanionBoundary(contract), code);
    });
  }
});

test('final verification is forbidden before closure and required only after #85 closes', async (t) => {
  await t.test('pre-close forbids final verification', async () => {
    const snapshot = await loadBootstrap();
    snapshot.phase08Paths.push(`${BOOK}/phase-08-verification.json`);
    expectCode(validatePhase08Snapshot(snapshot, { stage: 'pre-close' }), 'FINAL_VERIFICATION_TIMING');
  });
  await t.test('final requires closed child', async () => {
    const snapshot = await loadBootstrap();
    snapshot.phase08Paths.push(`${BOOK}/phase-08-verification.json`);
    expectCode(validatePhase08Snapshot(snapshot, { stage: 'final' }), 'FINAL_CHILD_STATE');
  });
});

test('a copied realistic filesystem fixture detects a frozen-file mutation from bytes', async () => {
  const root = await mkdtemp(join(tmpdir(), 'mle-p8-validator-'));
  const required = [
    ...Object.keys(FROZEN_INPUTS),
    ...Array.from({ length: 21 }, (_, index) => `${BOOK}/blueprints/chapter-${String(index + 1).padStart(2, '0')}.md`),
    `${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`,
    `${ROLE}/issues/phase-08-manuscript.md`, FACTORY,
    `${ROLE}/reviews/phase-08/task-00-plan.md`,
    `${ROLE}/reviews/phase-08/task-00-plan-repair.md`,
  ];
  for (const path of required) {
    await mkdir(dirname(join(root, path)), { recursive: true });
    await cp(join(REPO, path), join(root, path));
  }
  const registerPath = join(root, `${BOOK}/blueprints/blueprint-register.json`);
  await writeFile(registerPath, `${await readFile(registerPath, 'utf8')}\n`);
  const snapshot = await loadRepositorySnapshot(root, {
    stage: 'bootstrap', git: bootstrapGit, github: await bootstrapGithub(root),
  });
  expectCode(validatePhase08Snapshot(snapshot, { stage: 'bootstrap' }), 'FROZEN_INPUT_HASH');
});

test('immutable bootstrap fixture fails every later production stage with exact missing inventories', async (t) => {
  const expectedCodes = {
    production: ['STAGE_MANUSCRIPT_MISSING', 'STAGE_FURNITURE_MISSING', 'STAGE_COMPANION_MISSING', 'STAGE_REVIEW_MISSING'],
    integration: ['STAGE_INTEGRATION_MISSING', 'STAGE_MANUSCRIPT_MISSING', 'STAGE_COMPANION_MISSING'],
    'pre-hostile': ['STAGE_INTEGRATION_MISSING', 'STAGE_REVIEW_MISSING'],
    'pre-close': ['STAGE_INTEGRATION_MISSING', 'STAGE_REVIEW_MISSING'],
  };
  for (const [stage, codes] of Object.entries(expectedCodes)) {
    await t.test(stage, async () => {
      const root = await immutableBootstrapRoot();
      const snapshot = await loadRepositorySnapshot(root, {
        stage,
        git: bootstrapGit,
        github: await bootstrapGithub(root),
      });
      const errors = validatePhase08Snapshot(snapshot, { stage });
      for (const code of codes) expectCode(errors, code);
    });
  }
});

if (!process.env.MLE_SKIP_CURRENT_STAGE_REGRESSIONS) test('isolated production fixture accepts exact inventories and machine-bound conditional repairs', async () => {
  const root = await copiedProductionRoot();
  const snapshot = await loadRepositorySnapshot(root, {
    stage: 'production',
    git: { ...bootstrapGit, clean: true, changedPaths: [] },
    github: await bootstrapGithub(root),
  });
  assert.deepEqual(validatePhase08Snapshot(snapshot, { stage: 'production' }), []);
  assert.equal(snapshot.productionInventory.length, 77);
  assert.equal(snapshot.reviewInventory.filter((name) => /^task-0[1-5].*\.md$/.test(name)).length, 10);
});

if (!process.env.MLE_SKIP_CURRENT_STAGE_REGRESSIONS) test('isolated integration fixture accepts only the complete canonical inventory', async () => {
  const root = await copiedIntegrationRoot();
  const snapshot = await loadRepositorySnapshot(root, {
    stage: 'integration',
    git: { ...bootstrapGit, clean: true, changedPaths: [] },
    github: await bootstrapGithub(root),
  });
  snapshot.originalityCorpus = null;
  assert.deepEqual(validatePhase08Snapshot(snapshot, { stage: 'integration' }), []);
  assert.equal(snapshot.productionInventory.length, 80);
  assert.equal(snapshot.reviewInventory.includes('task-06-canonical-integration.md'), true);
  assert.equal(snapshot.reviewInventory.some((name) => name.startsWith('task-07-')), false);
});

test('each stage rejects artifacts that belong only to a future stage', async (t) => {
  const cases = [
    ['production', `${BOOK}/manuscript/manuscript-register.json`],
    ['production', `${ROLE}/reviews/phase-08/task-06-canonical-integration.md`],
    ['integration', `${ROLE}/reviews/phase-08/task-07-hostile-integration.md`],
    ['pre-hostile', `${BOOK}/phase-08-verification.json`],
    ['pre-close', `${BOOK}/phase-08-verification.json`],
  ];
  for (const [stage, path] of cases) {
    await t.test(`${stage}:${path}`, async () => {
      const snapshot = await loadBootstrap();
      snapshot.phase08Paths.push(path);
      snapshot.files[path] = { text: '{}\n', sha256: sha256('{}\n') };
      expectCode(validatePhase08Snapshot(snapshot, { stage }), 'STAGE_PATH_FORBIDDEN');
    });
  }
});

test('bootstrap explicitly classifies the preserved failed Task 01 review as repair-in-progress without authorizing production', async () => {
  const root = await copiedBootstrapRoot();
  const reviewPath = `${ROLE}/reviews/phase-08/task-01-bootstrap.md`;
  const failedReview = await execFileAsync('git', ['show', `${FAILED_TASK01_REVIEW_COMMIT}:${reviewPath}`], {
    cwd: GIT_REPO, encoding: 'utf8', maxBuffer: 20 * 1024 * 1024,
  });
  assert.equal(sha256(failedReview.stdout), FAILED_TASK01_REVIEW_SHA256);
  await mkdir(dirname(join(root, reviewPath)), { recursive: true });
  await writeFile(join(root, reviewPath), failedReview.stdout);
  const report = await validateRepository(root, {
    stage: 'bootstrap',
    git: { ...bootstrapGit, head: 'c5a5357373c1f2f887a58be8f3d8b52825b1b444', originMain: 'c5a5357373c1f2f887a58be8f3d8b52825b1b444', remoteMain: 'c5a5357373c1f2f887a58be8f3d8b52825b1b444', changedPaths: [`${ROLE}/reviews/phase-08/task-01-bootstrap.md`] },
    github: await bootstrapGithub(root),
  });
  assert.deepEqual(report.errors, []);
  assert.equal(report.bootstrapLifecycle, 'repair-in-progress');
  assert.equal(report.productionAuthorized, false);
});

test('real filesystem accepted Task 01 failure-repair-reacceptance chain authorizes production bootstrap', async () => {
  const root = await copiedBootstrapRoot();
  const basePath = `${ROLE}/reviews/phase-08/task-01-bootstrap.md`;
  const repairPath = `${ROLE}/reviews/phase-08/task-01-bootstrap-repair.md`;
  await mkdir(dirname(join(root, basePath)), { recursive: true });
  await cp(join(REPO, basePath), join(root, basePath));
  await cp(join(REPO, repairPath), join(root, repairPath));
  const requiredPaths = [
    `${BOOK}/validate-phase-08.mjs`, `${BOOK}/validate-phase-08.test.mjs`,
    `${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`, `${ROLE}/issues/phase-08-manuscript.md`, FACTORY,
  ];
  const artifactBindings = [];
  for (const path of requiredPaths) artifactBindings.push({ path, sha256: sha256(await readFile(join(root, path), 'utf8')) });
  const repairSha256 = sha256(await readFile(join(root, repairPath), 'utf8'));
  const accepted = {
    taskId: 'TASK-01', producerIdentity: '/root/mle_p8_bootstrap', reviewerIdentity: '/root/mle_p8_bootstrap_review',
    reviewedAt: '2026-08-22T07:40:11+05:30', artifactBindings,
    priorVerdict: 'SPEC COMPLIANCE FAIL / QUALITY CHANGES REQUESTED', repairPath, repairSha256,
    reacceptedBy: '/root/mle_p8_bootstrap_review', reacceptedAt: '2026-08-22T12:00:00+05:30',
    specVerdict: 'SPEC COMPLIANCE PASS', qualityVerdict: 'QUALITY APPROVED',
  };
  const bindingByPath = new Map(artifactBindings.map((binding) => [binding.path, binding.sha256]));
  assert.equal(bindingByPath.get(`${BOOK}/validate-phase-08.mjs`), sha256(await readFile(join(root, `${BOOK}/validate-phase-08.mjs`), 'utf8')));
  assert.equal(bindingByPath.get(`${BOOK}/validate-phase-08.test.mjs`), sha256(await readFile(join(root, `${BOOK}/validate-phase-08.test.mjs`), 'utf8')));
  assert.equal(accepted.repairSha256, sha256(await readFile(join(root, repairPath), 'utf8')));
  await writeFile(join(root, basePath), `${await readFile(join(root, basePath), 'utf8')}\n\n\`\`\`json\n${JSON.stringify(accepted, null, 2)}\n\`\`\`\n\nSPEC COMPLIANCE PASS\nQUALITY APPROVED\n`);
  const acceptedHead = '8cf1fce280ffd5932201d33470255c98bd6e3aba';
  const report = await validateRepository(root, {
    stage: 'bootstrap',
    git: { head: acceptedHead, originMain: acceptedHead, remoteMain: acceptedHead, clean: true, changedPaths: [] },
    github: await bootstrapGithub(root),
  });
  assert.deepEqual(report.errors, []);
  assert.equal(report.bootstrapLifecycle, 'accepted');
  assert.equal(report.productionAuthorized, true);
});

test('review path freezes task, identities, exact artifact set, and repair semantics', async (t) => {
  const files = {};
  const required = [
    `${BOOK}/manuscript/chapter-01.md`, `${BOOK}/manuscript/chapter-02.md`, `${BOOK}/manuscript/chapter-03.md`,
    `${BOOK}/manuscript/chapter-04.md`, `${BOOK}/manuscript/chapter-05.md`, `${BOOK}/manuscript/chapter-06.md`, `${BOOK}/manuscript/chapter-07.md`,
    '.superpowers/sdd/2026-08-22-machine-learning-engineer-phase-08/lane-a-manifest.json',
  ];
  for (const path of required) files[path] = { text: `${path}\n`, sha256: sha256(`${path}\n`) };
  const reviewPath = `${ROLE}/reviews/phase-08/task-02-lane-a.md`;
  const base = {
    taskId: 'TASK-02', producerIdentity: '/root/mle_p8_lane_a', reviewerIdentity: '/root/mle_p8_lane_a_review',
    reviewedAt: '2026-08-22T12:00:00+05:30', artifactBindings: required.map((path) => ({ path, sha256: files[path].sha256 })),
    priorVerdict: null, repairPath: null, repairSha256: null, reacceptedBy: null, reacceptedAt: null,
    specVerdict: 'SPEC COMPLIANCE PASS', qualityVerdict: 'QUALITY APPROVED',
  };
  assert.deepEqual(validateReviewRecord(base, EXPECTED_REVIEW_IDENTITIES['TASK-02'], { files, reviewPath }), []);
  const mutations = [
    ['wrong task for path', (r) => { r.taskId = 'TASK-03'; r.producerIdentity = '/root/mle_p8_lane_b'; r.reviewerIdentity = '/root/mle_p8_lane_b_review'; }, 'REVIEW_PATH_TASK'],
    ['omitted binding', (r) => { r.artifactBindings.pop(); }, 'REVIEW_ARTIFACT_SET'],
    ['added binding', (r) => { r.artifactBindings.push({ path: `${BOOK}/validate-phase-08.mjs`, sha256: '0'.repeat(64) }); }, 'REVIEW_ARTIFACT_SET'],
    ['wrong identity', (r) => { r.producerIdentity = '/root/mle_p8_lane_b'; }, 'REVIEW_IDENTITY'],
    ['unexpected prior verdict', (r) => { r.priorVerdict = 'SPEC COMPLIANCE FAIL / QUALITY CHANGES REQUESTED'; }, 'REVIEW_REPAIR_CHAIN'],
  ];
  for (const [name, mutate, code] of mutations) await t.test(name, () => {
    const record = clone(base); mutate(record);
    expectCode(validateReviewRecord(record, EXPECTED_REVIEW_IDENTITIES[record.taskId], { files, reviewPath }), code);
  });
});

test('exact graph and reverse-edge equality reject count-preserving substitutions', async (t) => {
  const mutations = [
    ['source', (r) => { r.sourceUses[0].sourceId = r.sourceUses.find((item) => item.sourceId !== r.sourceUses[0].sourceId).sourceId; }],
    ['claim teaching', (r) => { r.claimTeaching[0].chapterId = r.claimTeaching.find((item) => item.chapterId !== r.claimTeaching[0].chapterId).chapterId; }],
    ['claim source reverse', (r) => { r.claimTeaching[0].sourceIds[0] = r.claimTeaching[1].sourceIds[0]; }],
    ['case chapter', (r) => { r.caseUses[0].chapterIds[0] = r.caseUses[1].chapterIds[0]; }],
    ['case claim', (r) => { r.caseUses[0].claimIds[0] = r.caseUses[1].claimIds[0]; }],
    ['case source', (r) => { r.caseUses.find((item) => item.sourceUses.length > 0).sourceUses[0].sourceId = 'MLE-BSRC-999'; }],
    ['section architecture', (r) => { r.sections[0].architectureClaimIds[0] = r.sections[1].architectureClaimIds[0]; }],
    ['lifecycle', (r) => { r.dossier[0].incomingState = r.dossier[1].incomingState; }],
    ['lab', (r) => { r.labs[0].chapterId = r.labs.find((item) => item.chapterId !== r.labs[0].chapterId).chapterId; }],
    ['visual', (r) => { r.visuals[0].insertionAnchor = r.visuals[1].insertionAnchor; }],
    ['handoff', (r) => { r.handoffs[0].chapterId = r.handoffs[1].chapterId; }],
  ];
  for (const [name, mutate] of mutations) {
    await t.test(name, async () => {
      const snapshot = await loadBootstrap();
      mutate(snapshot.register);
      expectCode(validatePhase08Snapshot(snapshot, { stage: 'bootstrap' }), 'GRAPH_EXACT');
    });
  }
});

test('each canonical claim requires exactly one visible primary teaching placement', async () => {
  const snapshot = await loadBootstrap();
  const blueprint = snapshot.register.chapters[0];
  const withoutOne = chapterFixture(blueprint).replace(`Primary teaching ${blueprint.primaryClaimIds[0]}`, 'trace only');
  expectCode(
    validateManuscriptChapter(withoutOne, blueprint, snapshot.register, { minWords: 4200, maxWords: 4800, otherChapters: [] }),
    'MANUSCRIPT_CLAIM_PRIMARY',
  );
});

test('review artifact and repair bindings must equal actual loaded bytes', async (t) => {
  const files = {
    [`${BOOK}/validate-phase-08.mjs`]: { text: 'validator bytes', sha256: sha256('validator bytes') },
    [`${ROLE}/reviews/phase-08/task-01-bootstrap-repair.md`]: { text: 'repair bytes', sha256: sha256('repair bytes') },
  };
  const review = {
    ...clone(reviewBase),
    artifactBindings: [{ path: `${BOOK}/validate-phase-08.mjs`, sha256: sha256('validator bytes') }],
  };
  assert.deepEqual(validateReviewRecord(review, EXPECTED_REVIEW_IDENTITIES['TASK-01'], { files }), []);
  await t.test('artifact byte mismatch', () => {
    const altered = clone(review);
    altered.artifactBindings[0].sha256 = '0'.repeat(64);
    expectCode(validateReviewRecord(altered, EXPECTED_REVIEW_IDENTITIES['TASK-01'], { files }), 'REVIEW_ARTIFACT_BINDING');
  });
  await t.test('repair byte mismatch', () => {
    const altered = {
      ...clone(review),
      priorVerdict: 'SPEC COMPLIANCE FAIL / QUALITY CHANGES REQUESTED',
      repairPath: `${ROLE}/reviews/phase-08/task-01-bootstrap-repair.md`,
      repairSha256: '0'.repeat(64),
      reacceptedBy: '/root/mle_p8_bootstrap_review',
      reacceptedAt: '2026-08-22T10:00:00+05:30',
    };
    expectCode(validateReviewRecord(altered, EXPECTED_REVIEW_IDENTITIES['TASK-01'], { files }), 'REVIEW_ARTIFACT_BINDING');
  });
});

async function copiedBootstrapRoot() {
  const root = await mkdtemp(join(tmpdir(), 'mle-p8-hardening-'));
  const required = [
    ...Object.keys(FROZEN_INPUTS), SPEC_PATH, PLAN_PATH,
    ...Array.from({ length: 21 }, (_, index) => `${BOOK}/blueprints/chapter-${String(index + 1).padStart(2, '0')}.md`),
    `${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`, `${ROLE}/issues/phase-08-manuscript.md`, FACTORY,
    `${ROLE}/reviews/phase-08/task-00-plan.md`, `${ROLE}/reviews/phase-08/task-00-plan-repair.md`,
    `${BOOK}/validate-phase-08.mjs`, `${BOOK}/validate-phase-08.test.mjs`,
  ];
  for (const path of required) {
    await mkdir(dirname(join(root, path)), { recursive: true });
    await cp(join(REPO, path), join(root, path));
  }
  return root;
}

async function copiedProductionRoot() {
  const root = await copiedBootstrapRoot();
  const live = await loadRepositorySnapshot(REPO, { stage: 'production' });
  const integrationNames = new Set([
    'manuscript-register.json', 'verification-report.md', 'phase-09-handoff.md',
  ]);
  const productionArtifacts = live.phase08Paths.filter((path) =>
    path.startsWith(`${BOOK}/companion/`)
    || (path.startsWith(`${BOOK}/manuscript/`) && !integrationNames.has(path.split('/').at(-1)))
    || /^\.superpowers\/sdd\/2026-08-22-machine-learning-engineer-phase-08\/lane-[abc]-manifest\.json$/.test(path));
  for (const path of productionArtifacts) {
    await mkdir(dirname(join(root, path)), { recursive: true });
    await cp(join(REPO, path), join(root, path));
  }

  const chapterPaths = Array.from(
    { length: 21 },
    (_, index) => `${BOOK}/manuscript/chapter-${String(index + 1).padStart(2, '0')}.md`,
  );
  const companionPaths = productionArtifacts.filter((path) => path.startsWith(`${BOOK}/companion/`)).sort();
  const manifests = ['a', 'b', 'c'].map(
    (lane) => `.superpowers/sdd/2026-08-22-machine-learning-engineer-phase-08/lane-${lane}-manifest.json`,
  );
  const taskArtifacts = {
    'TASK-01': [
      `${BOOK}/validate-phase-08.mjs`, `${BOOK}/validate-phase-08.test.mjs`,
      `${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`, `${ROLE}/issues/phase-08-manuscript.md`, FACTORY,
    ],
    'TASK-02': [...chapterPaths.slice(0, 7), manifests[0]],
    'TASK-03': [...chapterPaths.slice(7, 14), manifests[1]],
    'TASK-04': [...chapterPaths.slice(14), manifests[2]],
    'TASK-05': companionPaths,
  };
  for (const [taskId, artifacts] of Object.entries(taskArtifacts)) {
    const taskNumber = taskId.slice(-2);
    const names = {
      '01': 'bootstrap', '02': 'lane-a', '03': 'lane-b', '04': 'lane-c', '05': 'companion',
    };
    const basePath = `${ROLE}/reviews/phase-08/task-${taskNumber}-${names[taskNumber]}.md`;
    const repairPath = basePath.replace(/\.md$/, '-repair.md');
    const repairText = taskId === 'TASK-01'
      ? (await execFileAsync('git', ['show', '67d7108c572777fede870539a1b4ab429643d244:project-control/roles/machine-learning-engineer/reviews/phase-08/task-01-bootstrap-repair.md'], { cwd: GIT_REPO, encoding: 'utf8' })).stdout
      : `Fixture repair evidence for ${taskId}.\n`;
    await mkdir(dirname(join(root, repairPath)), { recursive: true });
    await writeFile(join(root, repairPath), repairText);
    let artifactBindings = await Promise.all(artifacts.map(async (path) => ({
      path,
      sha256: sha256(await readFile(join(root, path), 'utf8')),
    })));
    if (taskId === 'TASK-01') artifactBindings = [
      { path: `${BOOK}/validate-phase-08.mjs`, sha256: '0c58850f983b2c65c19f8bd6dcfed871ea3178d2a9c5cfd2d50f55dc3a496789' },
      { path: `${BOOK}/validate-phase-08.test.mjs`, sha256: '120f522dacde5872b0d10ccdcc163c8c1440289f1375101492168039505e2aea' },
      { path: `${ROLE}/ROLE-STATE.md`, sha256: '0235c1c72974aacf742ef77f0e88166dd847247e225c995e92b51f59e45380f3' },
      { path: `${ROLE}/issues/root.md`, sha256: '46cee703bcfaa9408ce97861d03ff89220915d606ae4c1cf0f86395e9b6b57db' },
      { path: `${ROLE}/issues/phase-08-manuscript.md`, sha256: 'e659f755611682d53f7baa28d12a60868caa7c6876ab22cd673d80526a120c35' },
      { path: FACTORY, sha256: '28febff4c475c9bc8f0ac708938f1ce3d5b703d289f6ad0bdb1a7075834a1386' },
    ];
    const identity = EXPECTED_REVIEW_IDENTITIES[taskId];
    const record = {
      taskId, ...identity,
      reviewedAt: '2026-08-23T10:00:00+05:30',
      artifactBindings,
      priorVerdict: 'SPEC COMPLIANCE FAIL / QUALITY CHANGES REQUESTED',
      repairPath,
      repairSha256: taskId === 'TASK-01' ? 'c7544c6e9ca427c5d82e558412bf7430d078c4a40b77a690ec630ffb40b1d04c' : sha256(repairText),
      reacceptedBy: identity.reviewerIdentity,
      reacceptedAt: '2026-08-23T11:00:00+05:30',
      specVerdict: 'SPEC COMPLIANCE PASS',
      qualityVerdict: 'QUALITY APPROVED',
    };
    const baseText = `Preserved historical review failure.\n\n\`\`\`json\n${JSON.stringify(record, null, 2)}\n\`\`\`\n\nSPEC COMPLIANCE PASS\nQUALITY APPROVED\n`;
    await writeFile(join(root, basePath), baseText);
  }
  return root;
}

async function copiedIntegrationRoot() {
  return copiedAcceptedIntegrationRoot();
}

const TASK06_PRIOR_REVIEW_PATHS = [
  `${ROLE}/reviews/phase-08/task-02-lane-a.md`, `${ROLE}/reviews/phase-08/task-02-lane-a-repair.md`,
  `${ROLE}/reviews/phase-08/task-03-lane-b.md`, `${ROLE}/reviews/phase-08/task-03-lane-b-repair.md`,
  `${ROLE}/reviews/phase-08/task-04-lane-c.md`, `${ROLE}/reviews/phase-08/task-04-lane-c-repair.md`,
  `${ROLE}/reviews/phase-08/task-05-companion.md`, `${ROLE}/reviews/phase-08/task-05-companion-repair.md`,
];

async function ensureTask06PriorReviewBindings(task06Record, root) {
  const replacementPaths = new Set(TASK06_PRIOR_REVIEW_PATHS);
  const bindings = await Promise.all(TASK06_PRIOR_REVIEW_PATHS.map(async (path) => ({
    path, sha256: sha256(await readFile(join(root, path), 'utf8')),
  })));
  task06Record.artifactBindings = [
    ...task06Record.artifactBindings.filter(({ path }) => !replacementPaths.has(path)),
    ...bindings,
  ];
  return task06Record;
}

async function copiedAcceptedIntegrationRoot() {
  const root = await copiedBootstrapRoot();
  const live = await loadRepositorySnapshot(REPO, { stage: 'integration' });
  for (const path of live.phase08Paths) {
    if (path.endsWith('task-07-hostile-integration.md') || path.endsWith('task-07-hostile-integration-repair.md')) continue;
    await mkdir(dirname(join(root, path)), { recursive: true });
    await cp(join(REPO, path), join(root, path));
  }
  const task06Path = `${ROLE}/reviews/phase-08/task-06-canonical-integration.md`;
  const task06Text = await readFile(join(root, task06Path), 'utf8');
  const task06Record = JSON.parse([...task06Text.matchAll(/```json\s*([\s\S]*?)```/g)].at(-1)[1]);
  task06Record.artifactBindings = await Promise.all(task06Record.artifactBindings.map(async ({ path }) => ({
    path, sha256: sha256(await readFile(join(root, path), 'utf8')),
  })));
  await ensureTask06PriorReviewBindings(task06Record, root);
  await writeFile(join(root, task06Path), `Fixture Task 06 binding expansion.\n\n\`\`\`json\n${JSON.stringify(task06Record, null, 2)}\n\`\`\`\n\nSPEC COMPLIANCE PASS\nQUALITY APPROVED\n`);
  return root;
}

if (!process.env.MLE_SKIP_CURRENT_STAGE_REGRESSIONS) test('Task 06 fixture review binding expansion is idempotent for an already-correct 88-binding candidate', async () => {
  const root = await copiedAcceptedIntegrationRoot();
  const task06Path = `${ROLE}/reviews/phase-08/task-06-canonical-integration.md`;
  const task06Text = await readFile(join(root, task06Path), 'utf8');
  const task06Record = JSON.parse([...task06Text.matchAll(/```json\s*([\s\S]*?)```/g)].at(-1)[1]);
  assert.equal(task06Record.artifactBindings.length, 88);

  await ensureTask06PriorReviewBindings(task06Record, root);
  await ensureTask06PriorReviewBindings(task06Record, root);

  const paths = task06Record.artifactBindings.map(({ path }) => path);
  assert.equal(paths.length, 88);
  assert.equal(new Set(paths).size, 88);
  for (const path of TASK06_PRIOR_REVIEW_PATHS) {
    assert.equal(paths.filter((candidate) => candidate === path).length, 1, path);
  }
});

function replaceLoadedJson(snapshot, path, mutate) {
  const value = JSON.parse(snapshot.files[path].text);
  mutate(value);
  const text = `${JSON.stringify(value, null, 2)}\n`;
  snapshot.files[path] = { path, text, sha256: sha256(text) };
  return value;
}

async function pinnedHistoricalBootstrapRoot() {
  const root = await mkdtemp(join(tmpdir(), 'mle-p8-pinned-history-'));
  const required = [
    ...Object.keys(FROZEN_INPUTS), SPEC_PATH, PLAN_PATH,
    ...Array.from({ length: 21 }, (_, index) => `${BOOK}/blueprints/chapter-${String(index + 1).padStart(2, '0')}.md`),
    `${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`, `${ROLE}/issues/phase-08-manuscript.md`, FACTORY,
    `${ROLE}/reviews/phase-08/task-00-plan.md`, `${ROLE}/reviews/phase-08/task-00-plan-repair.md`,
    `${ROLE}/reviews/phase-08/task-01-bootstrap.md`, `${ROLE}/reviews/phase-08/task-01-bootstrap-repair.md`,
    `${BOOK}/validate-phase-08.mjs`, `${BOOK}/validate-phase-08.test.mjs`,
  ];
  for (const path of required) {
    const historical = await execFileAsync('git', ['show', `${PRIOR_VALIDATOR_COMMIT}:${path}`], {
      cwd: GIT_REPO, encoding: 'utf8', maxBuffer: 20 * 1024 * 1024,
    });
    await mkdir(dirname(join(root, path)), { recursive: true });
    await writeFile(join(root, path), historical.stdout);
  }
  const failedReview = await readFile(join(root, `${ROLE}/reviews/phase-08/task-01-bootstrap.md`), 'utf8');
  assert.equal(sha256(failedReview), FAILED_TASK01_REVIEW_SHA256);
  return root;
}

const SPEC_PATH = 'docs/superpowers/specs/2026-08-22-machine-learning-engineer-manuscript-companion-design.md';
const PLAN_PATH = 'docs/superpowers/plans/2026-08-22-machine-learning-engineer-phase-08.md';

test('loader reads every stage-legal artifact byte instead of only listing its filename', async () => {
  const root = await copiedBootstrapRoot();
  const paths = {
    chapter: `${BOOK}/manuscript/chapter-01.md`,
    furniture: `${BOOK}/manuscript/opening-and-closing.md`,
    register: `${BOOK}/manuscript/manuscript-register.json`,
    companion: `${BOOK}/companion/package.json`,
    review: `${ROLE}/reviews/phase-08/task-02-lane-a.md`,
    verification: `${BOOK}/phase-08-verification.json`,
  };
  for (const [kind, path] of Object.entries(paths)) {
    await mkdir(dirname(join(root, path)), { recursive: true });
    await writeFile(join(root, path), kind === 'register' || kind === 'companion' || kind === 'verification' ? '{}\n' : `${kind} bytes\n`);
  }
  const snapshot = await loadRepositorySnapshot(root, {
    stage: 'final', git: { ...bootstrapGit, clean: true, changedPaths: [] }, github: await bootstrapGithub(root),
  });
  for (const path of Object.values(paths)) {
    assert.equal(typeof snapshot.files[path]?.text, 'string', path);
    assert.equal(snapshot.files[path].sha256, sha256(snapshot.files[path].text), path);
  }
});

test('real loaded invalid manuscript, register, companion, and review bytes invoke their validators', async (t) => {
  const root = await copiedBootstrapRoot();
  const fixtures = [
    [`${BOOK}/manuscript/chapter-01.md`, 'outline only\n', 'MANUSCRIPT_DEPTH'],
    [`${BOOK}/manuscript/opening-and-closing.md`, 'furniture placeholder\n', 'FURNITURE_CONTRACT'],
    [`${BOOK}/manuscript/manuscript-register.json`, '{"schema":"wrong"}\n', 'MANUSCRIPT_REGISTER'],
    [`${BOOK}/companion/package.json`, '{"type":"module"}\n', 'COMPANION_INVENTORY'],
    [`${BOOK}/companion/expected/bl-00.json`, '{"milestoneId":"WRONG"}\n', 'COMPANION_EXPECTED_RECORD'],
    [`${ROLE}/reviews/phase-08/task-02-lane-a.md`, 'SPEC COMPLIANCE PASS\nQUALITY APPROVED\n', 'REVIEW_SCHEMA'],
    [`${BOOK}/phase-08-verification.json`, '{"schema":"wrong"}\n', 'FINAL_VERIFICATION_SCHEMA'],
  ];
  for (const [path, bytes] of fixtures) {
    await mkdir(dirname(join(root, path)), { recursive: true });
    await writeFile(join(root, path), bytes);
  }
  const snapshot = await loadRepositorySnapshot(root, {
    stage: 'integration', git: { ...bootstrapGit, clean: true, changedPaths: [] }, github: await bootstrapGithub(root),
  });
  const errors = validatePhase08Snapshot(snapshot, { stage: 'integration' });
  for (const [, , code] of fixtures) await t.test(code, () => expectCode(errors, code));
});

test('loaded expected dossier records must be complete canonical records rather than milestone labels', async () => {
  const root = await copiedBootstrapRoot();
  const path = `${BOOK}/companion/expected/bl-00.json`;
  await mkdir(dirname(join(root, path)), { recursive: true });
  await writeFile(join(root, path), '{"milestoneId":"BL-00"}\n');
  const snapshot = await loadRepositorySnapshot(root, {
    stage: 'integration', git: { ...bootstrapGit, clean: true, changedPaths: [] }, github: await bootstrapGithub(root),
  });
  expectCode(validatePhase08Snapshot(snapshot, { stage: 'integration' }), 'COMPANION_EXPECTED_RECORD');
});

test('conditional repair paths are illegal without a preserved failed base review', async () => {
  const snapshot = await loadBootstrap();
  const repair = `${ROLE}/reviews/phase-08/task-02-lane-a-repair.md`;
  snapshot.phase08Paths.push(repair);
  snapshot.files[repair] = { text: 'orphan repair\n', sha256: sha256('orphan repair\n') };
  expectCode(validatePhase08Snapshot(snapshot, { stage: 'bootstrap' }), 'REPAIR_WITHOUT_FAILURE');
});

if (!process.env.MLE_SKIP_CURRENT_STAGE_REGRESSIONS) test('a quoted failure phrase does not authorize a conditional repair path', async () => {
  const snapshot = await loadBootstrap();
  const base = `${ROLE}/reviews/phase-08/task-02-lane-a.md`;
  const repair = `${ROLE}/reviews/phase-08/task-02-lane-a-repair.md`;
  const acceptedWithoutHistory = {
    taskId: 'TASK-02',
    producerIdentity: '/root/mle_p8_lane_a',
    reviewerIdentity: '/root/mle_p8_lane_a_review',
    reviewedAt: '2026-08-23T10:00:00+05:30',
    artifactBindings: [{ path: `${BOOK}/manuscript/chapter-01.md`, sha256: '0'.repeat(64) }],
    priorVerdict: null,
    repairPath: null,
    repairSha256: null,
    reacceptedBy: null,
    reacceptedAt: null,
    specVerdict: 'SPEC COMPLIANCE PASS',
    qualityVerdict: 'QUALITY APPROVED',
  };
  const baseText = `The phrase SPEC COMPLIANCE FAIL is quoted here, not preserved as review history.\n\n\`\`\`json\n${JSON.stringify(acceptedWithoutHistory, null, 2)}\n\`\`\`\n\nSPEC COMPLIANCE PASS\nQUALITY APPROVED\n`;
  snapshot.phase08Paths.push(base, repair);
  snapshot.files[base] = { text: baseText, sha256: sha256(baseText) };
  snapshot.files[repair] = { text: 'orphan repair\n', sha256: sha256('orphan repair\n') };
  expectCode(validatePhase08Snapshot(snapshot, { stage: 'production' }), 'REPAIR_WITHOUT_FAILURE');
});

test('executes a real companion fixture across all five ports with deterministic canonical bytes and immutable dossier history', async () => {
  const root = await mkdtemp(join(tmpdir(), 'mle-p8-companion-'));
  const runner = join(root, 'run.mjs');
  await writeFile(runner, `
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
function canonical(value) { return JSON.stringify(Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)))) + '\\n'; }
export async function runPort(port, { mode = 'positive', target, history, milestoneId = 'BL-00', priorHash = 'entry', reopenTrigger = null, incomingState, outgoingState }) {
  if (['network','shell','cloud','model','secret'].includes(mode)) throw Object.assign(new Error('denied'), { code: 'EFFECT_DENIED' });
  if (mode === 'escape') throw Object.assign(new Error('denied'), { code: 'PATH_DENIED' });
  if (mode === 'negative') return { disposition: reopenTrigger ? 'REOPEN' : 'HOLD', milestoneId, reopenTrigger };
  const record = { disposition: 'PASS', incomingState, limitation: 'mechanics only', milestoneId, outgoingState, port, priorHash };
  await mkdir(target, { recursive: true });
  await writeFile(join(target, milestoneId.toLowerCase() + '.json'), canonical(record));
  return record;
}
`);
  const report = await validatorModule.executeCompanionProbe({ runnerPath: runner, repositoryRoot: REPO });
  assert.deepEqual(report.errors, []);
  assert.deepEqual(report.ports, [...EXPECTED_PORTS]);
  assert.equal(report.canonicalBytes.length, 105);
  assert.equal(new Set(report.canonicalBytes).size, 105);
  assert.equal(report.negativePaths, 105);
  assert.equal(report.dossierSteps, 21);
  assert.equal(report.reopenTriggers, 4);
  assert.equal(report.deterministic, true);
  assert.equal(report.historyImmutable, true);
  assert.equal(report.effectProbesDenied, 5);
  assert.equal(report.escapeProbeDenied, true);
});

test('isolated effect guard detects attempted effects in transitive imported helpers despite later approved denial', async (t) => {
  const attempts = [
    ['child_process', 'shell', `import { execFileSync } from 'node:child_process'; export async function attempt() { execFileSync('/usr/bin/true'); }`],
    ['network', 'network', `export async function attempt() { await fetch('data:text/plain,guard-probe'); }`],
    ['environment secret', 'secret', `export async function attempt() { void process.env.MLE_FAKE_SECRET; }`],
    ['cloud SDK', 'cloud', `export async function attempt() { await import('@aws-sdk/client-s3').catch(() => {}); }`],
    ['model SDK', 'model', `export async function attempt() { await import('@huggingface/inference').catch(() => {}); }`],
    ['unauthorized filesystem', 'shell', `import { writeFileSync } from 'node:fs'; export async function attempt() { writeFileSync('/dev/null', 'x'); }`],
  ];
  for (const [name, effectMode, helperSource] of attempts) await t.test(name, async () => {
    const root = await mkdtemp(join(tmpdir(), 'mle-p8-transitive-effect-'));
    await writeFile(join(root, 'helper.mjs'), `${helperSource}\n`);
    await writeFile(join(root, 'run.mjs'), `
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { attempt } from './helper.mjs';
function canonical(value) { return JSON.stringify(Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)))) + '\\n'; }
export async function runPort(port, { mode = 'positive', target, milestoneId = 'BL-00', priorHash = 'entry', reopenTrigger = null, incomingState, outgoingState }) {
  if (mode === '${effectMode}') { await attempt(); throw Object.assign(new Error('denied'), { code: 'EFFECT_DENIED' }); }
  if (['network','shell','cloud','model','secret'].includes(mode)) throw Object.assign(new Error('denied'), { code: 'EFFECT_DENIED' });
  if (mode === 'escape') throw Object.assign(new Error('denied'), { code: 'PATH_DENIED' });
  if (mode === 'negative') return { disposition: reopenTrigger ? 'REOPEN' : 'HOLD', milestoneId, reopenTrigger };
  const record = { disposition: 'PASS', incomingState, limitation: 'mechanics only', milestoneId, outgoingState, port, priorHash };
  await mkdir(target, { recursive: true });
  await writeFile(join(target, milestoneId.toLowerCase() + '.json'), canonical(record));
  return record;
}
`);
    const report = await validatorModule.executeCompanionProbe({ runnerPath: join(root, 'run.mjs'), repositoryRoot: REPO });
    expectCode(report.errors, 'COMPANION_EFFECT_ATTEMPT');
  });
});

test('companion probe detects mutation of an earlier materialized dossier file', async () => {
  const root = await mkdtemp(join(tmpdir(), 'mle-p8-dossier-mutation-'));
  const runner = join(root, 'run.mjs');
  await writeFile(runner, `
import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
function canonical(value) { return JSON.stringify(Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b)))) + '\\n'; }
export async function runPort(port, { mode = 'positive', target, milestoneId = 'BL-00', priorHash = 'entry', reopenTrigger = null, incomingState, outgoingState }) {
  if (['network','shell','cloud','model','secret'].includes(mode)) throw Object.assign(new Error('denied'), { code: 'EFFECT_DENIED' });
  if (mode === 'escape') throw Object.assign(new Error('denied'), { code: 'PATH_DENIED' });
  if (mode === 'negative') return { disposition: reopenTrigger ? 'REOPEN' : 'HOLD', milestoneId, reopenTrigger };
  await mkdir(target, { recursive: true });
  if (milestoneId !== 'BL-00') await writeFile(join(target, 'bl-00.json'), 'tampered\\n');
  const record = { disposition: 'PASS', incomingState, limitation: 'mechanics only', milestoneId, outgoingState, port, priorHash };
  await writeFile(join(target, milestoneId.toLowerCase() + '.json'), canonical(record));
  return record;
}
`);
  const report = await validatorModule.executeCompanionProbe({ runnerPath: runner, repositoryRoot: REPO });
  expectCode(report.errors, 'COMPANION_IMMUTABILITY');
});

test('effect guard detects real attempted effects even when runner later throws approved denial', async (t) => {
  const attempts = [
    ['child_process', `import { execFileSync } from 'node:child_process'; execFileSync('/usr/bin/true');`],
    ['network', `import * as http from 'node:http'; http.get('http://127.0.0.1');`],
    ['env secret', `const stolen = process.env.SECRET_TOKEN;`],
    ['cloud', `import('@aws-sdk/client-s3');`],
    ['model', `import('@huggingface/inference');`],
    ['filesystem', `import { writeFileSync } from 'node:fs'; writeFileSync('/tmp/unauthorized', 'x');`],
  ];
  for (const [name, attempt] of attempts) await t.test(name, async () => {
    const root = await mkdtemp(join(tmpdir(), 'mle-p8-effect-attempt-'));
    const runner = join(root, 'run.mjs');
    await writeFile(runner, `${attempt}\nexport async function runPort() { throw Object.assign(new Error('denied'), { code: 'EFFECT_DENIED' }); }\n`);
    const report = await validatorModule.executeCompanionProbe({ runnerPath: runner, repositoryRoot: REPO });
    expectCode(report.errors, 'COMPANION_EFFECT_ATTEMPT');
  });
});

test('companion execution catches a runner that permits an escape probe', async () => {
  const root = await mkdtemp(join(tmpdir(), 'mle-p8-companion-bad-'));
  const runner = join(root, 'run.mjs');
  await writeFile(runner, `export async function runPort(port, options) { return { port, options }; }\n`);
  const report = await validatorModule.executeCompanionProbe({ runnerPath: runner, repositoryRoot: REPO });
  expectCode(report.errors, 'COMPANION_ESCAPE_PROBE');
});

if (!process.env.MLE_SKIP_CURRENT_STAGE_REGRESSIONS) {
test('committed clean leakage is found by bounded real filesystem inventory without Git dirt', async (t) => {
  const roots = [
    'public/nested/mle-leak.bin',
    'output/archive/leak.dat',
    'content/publications/hidden/leak.txt',
    'content/courses/hidden/leak.txt',
    'project-control/abhyaas/hidden/leak.txt',
    'project-control/roles/data-engineer/hidden/leak.txt',
    'assets/nested/generic.bin',
    'tools/hidden/generic.dat',
    'src/generated/generic.txt',
    'scripts/hidden/generic.txt',
    'tests/fixtures/generic.txt',
    'dist/nested/generic.txt',
    'build/nested/generic.txt',
    '.output/nested/generic.txt',
    'artifacts/nested/generic.txt',
    'downloads/nested/generic.txt',
  ];
  for (const leakedPath of roots) {
    await t.test(leakedPath, async () => {
      const root = await copiedBootstrapRoot();
      const baseline = await loadRepositorySnapshot(root, {
        stage: 'bootstrap', git: { ...bootstrapGit, clean: true, changedPaths: [] }, github: await bootstrapGithub(root),
      });
      await mkdir(dirname(join(root, leakedPath)), { recursive: true });
      await writeFile(join(root, leakedPath), 'committed leakage\n');
      const snapshot = await loadRepositorySnapshot(root, {
        stage: 'bootstrap', git: { ...bootstrapGit, clean: true, changedPaths: [] }, github: await bootstrapGithub(root),
        activationInventory: baseline.repositoryInventory,
      });
      expectCode(validatePhase08Snapshot(snapshot, { stage: 'bootstrap' }), 'STOP_BOUNDARY_COMMITTED');
    });
  }
});

test('git-backed loader inventories ignored and untracked leakage from the real filesystem', async () => {
  const root = await copiedBootstrapRoot();
  await writeFile(join(root, '.gitignore'), 'output/\n');
  await execFileAsync('git', ['init', '-q'], { cwd: root });
  await execFileAsync('git', ['add', '.'], { cwd: root });
  await execFileAsync('git', ['-c', 'user.name=fixture', '-c', 'user.email=fixture@example.invalid', 'commit', '-qm', 'fixture'], { cwd: root });
  const leakedPath = 'output/machine-learning-engineering-hidden.pdf';
  await mkdir(dirname(join(root, leakedPath)), { recursive: true });
  await writeFile(join(root, leakedPath), 'ignored leakage\n');
  const baseline = (await execFileAsync('git', ['ls-files'], { cwd: root, encoding: 'utf8' })).stdout.trim().split('\n');
  const snapshot = await loadRepositorySnapshot(root, {
    stage: 'bootstrap', git: { ...bootstrapGit, clean: true, changedPaths: [] },
    github: await bootstrapGithub(root), activationInventory: baseline,
  });
  const errors = validatePhase08Snapshot(snapshot, { stage: 'bootstrap' });
  const match = errors.find((item) => item.code === 'STOP_BOUNDARY_FILESYSTEM');
  assert.equal(match?.path, leakedPath, JSON.stringify(errors, null, 2));
  expectOnlyCode(errors, 'STOP_BOUNDARY_FILESYSTEM');
});

test('deep manuscript register rejects byte, word, graph, review, originality, and integration-state drift', async (t) => {
  const root = await copiedAcceptedIntegrationRoot();
  const registerPath = `${BOOK}/manuscript/manuscript-register.json`;
  const cases = [
    ['chapter hash', (r) => { r.chapters[0].sha256 = '0'.repeat(64); }, 'REGISTER_ARTIFACT_HASH'],
    ['chapter words', (r) => { r.chapters[0].proseWords += 1; }, 'REGISTER_WORD_COUNT'],
    ['frozen count', (r) => { r.counts.frozen.claims += 1; }, 'REGISTER_COUNT'],
    ['derived count', (r) => { r.counts.derived.claims += 1; }, 'REGISTER_COUNT'],
    ['reverse edge with rebound digest', (r) => {
      r.reverseMappings.sourceClaim[0][1] = 'MLE-BCLM-999';
      r.reverseMappingSha256.sourceClaim = sha256(JSON.stringify(r.reverseMappings.sourceClaim));
    }, 'REGISTER_REVERSE_MAPPING'],
    ['reverse digest', (r) => { r.reverseMappingSha256.claimPrimary = '0'.repeat(64); }, 'REGISTER_REVERSE_HASH'],
    ['review binding', (r) => { r.reviewBindings[0].sha256 = '0'.repeat(64); }, 'REGISTER_REVIEW_BINDING'],
    ['originality state', (r) => { r.originality.status = 'UNKNOWN'; }, 'REGISTER_ORIGINALITY'],
    ['canonical ID-list width', (r) => { r.originality.structuredProjectionExceptions[2].exactWords = 35; }, 'REGISTER_ORIGINALITY'],
    ['integration state', (r) => { r.integrationState = 'DRAFT'; }, 'REGISTER_INTEGRATION_STATE'],
  ];
  for (const [name, mutate, code] of cases) await t.test(name, async () => {
    const snapshot = await loadRepositorySnapshot(root, {
      stage: 'integration', git: { ...bootstrapGit, clean: true, changedPaths: [] },
      github: await bootstrapGithub(root), activationInventory: [],
    });
    replaceLoadedJson(snapshot, registerPath, mutate);
    const register = JSON.parse(snapshot.files[registerPath].text);
    expectOnlyCode(validatorModule.validateManuscriptRegister(snapshot, register, registerPath), code);
  });
});

test('chapter validation rejects every exact blueprint mapping family and lifecycle seam', async (t) => {
  const root = await copiedAcceptedIntegrationRoot();
  const snapshot = await loadRepositorySnapshot(root, { stage: 'integration' });
  const blueprint = snapshot.register.chapters[1];
  const sections = snapshot.register.sections.filter((item) => item.chapterId === blueprint.chapterId);
  const expected = {
    sourceIds: [...new Set(snapshot.register.sourceUses.filter((item) => item.chapterId === blueprint.chapterId).map((item) => item.sourceId))],
    caseIds: [...new Set(snapshot.register.caseUses.filter((item) => item.chapterIds.includes(blueprint.chapterId)).map((item) => item.caseId))],
    architectureClaimIds: [...new Set(sections.flatMap((item) => item.architectureClaimIds))],
    boundaryIds: [...new Set(sections.flatMap((item) => item.boundaryIds))],
    scenarioIds: [...new Set(sections.flatMap((item) => item.scenarioIds))],
    domainIds: [...new Set(sections.flatMap((item) => item.domainIds))],
  };
  const base = snapshot.files[`${BOOK}/manuscript/chapter-02.md`].text;
  const options = { minWords: 0, maxWords: 99999, otherChapters: [], requireExactBlueprint: true };
  assert.deepEqual(validateManuscriptChapter(base, blueprint, snapshot.register, options), []);
  const cases = [
    ['source', expected.sourceIds[0], 'MANUSCRIPT_SOURCE_BINDING'],
    ['source-to-claim swap', null, 'MANUSCRIPT_SOURCE_BINDING', (text) => text.replaceAll('MLE-BSRC-006', 'SWAP-TEMP').replaceAll('MLE-BSRC-028', 'MLE-BSRC-006').replaceAll('SWAP-TEMP', 'MLE-BSRC-028')],
    ['extra source in frozen section', null, 'MANUSCRIPT_SOURCE_BINDING', (text) => text.replace('## MLE-CH-02-S03', 'MLE-BSRC-999\n\n## MLE-CH-02-S03')],
    ['source currentness', null, 'MANUSCRIPT_CURRENTNESS', (text) => text.replaceAll('Recheck', 'Refresh').replaceAll('recheck', 'refresh')],
    ['case', expected.caseIds[0], 'MANUSCRIPT_CASE_BINDING'],
    ['case truth category', null, 'MANUSCRIPT_CASE_TRUTH', (text) => text.replaceAll('reported facts', 'reported claims')],
    ['architecture', expected.architectureClaimIds[0], 'MANUSCRIPT_ARCHITECTURE_BINDING'],
    ['boundary', expected.boundaryIds[0], 'MANUSCRIPT_BOUNDARY_BINDING'],
    ['boundary moved to wrong section', null, 'MANUSCRIPT_BOUNDARY_BINDING', (text) => text.replaceAll(expected.boundaryIds[0], '').replace('## MLE-CH-02-S03', `## MLE-CH-02-S03\n\n${expected.boundaryIds[0]}`)],
    ['scenario', expected.scenarioIds[0], 'MANUSCRIPT_SCENARIO_BINDING'],
    ['domain', expected.domainIds[0], 'MANUSCRIPT_DOMAIN_BINDING'],
    ['authority owner', null, 'MANUSCRIPT_AUTHORITY_BINDING', (text) => text.replaceAll('validity', 'REMOVED-TOKEN').replaceAll('permissibility', 'REMOVED-TOKEN').replaceAll('priority', 'REMOVED-TOKEN')],
    ['MLE ceiling', null, 'MANUSCRIPT_AUTHORITY_BINDING', (text) => text.replaceAll('translates', 'REMOVED-TOKEN').replaceAll('technical evidence requirements', 'REMOVED-TOKEN').replaceAll('authorize', 'REMOVED-TOKEN')],
    ['incoming state', blueprint.incomingState, 'MANUSCRIPT_LIFECYCLE_SEAM'],
    ['outgoing state', blueprint.outgoingStates[0], 'MANUSCRIPT_LIFECYCLE_SEAM'],
  ];
  for (const [name, token, code, mutate] of cases) await t.test(name, () => {
    const text = mutate ? mutate(base) : base.replaceAll(token, 'REMOVED-TOKEN');
    expectOnlyCode(validateManuscriptChapter(text, blueprint, snapshot.register, options), code);
  });
});

test('twenty-word originality scanner rejects prose overlap and permits only the three classified structured projections', () => {
  assert.equal(typeof validatorModule.validateOriginality, 'function');
  const words = Array.from({ length: 20 }, (_, index) => `unique${index}`).join(' ');
  expectOnlyCode(validatorModule.validateOriginality({
    chapters: [{ chapterId: 'MLE-CH-01', text: `Plain prose ${words}.` }],
    researchPacks: [{ chapterId: 'MLE-CH-01', text: words }], otherRoleTexts: [],
  }), 'ORIGINALITY_SAME_PACK');
  assert.deepEqual(validatorModule.validateOriginality({
    chapters: [
      { chapterId: 'MLE-CH-13', text: `| frozen-source-ledger | ${words} |` },
      { chapterId: 'MLE-CH-14', text: `| frozen-source-ledger | ${words} |` },
      { chapterId: 'MLE-CH-21', text: Array.from({ length: 36 }, (_, index) => index < 22 ? `MLE-CLM-${String(index + 1).padStart(3, '0')}` : `BND-${String(index - 21).padStart(2, '0')}`).join(' ') },
    ],
    researchPacks: [{ chapterId: 'MLE-CH-21', text: Array.from({ length: 36 }, (_, index) => index < 22 ? `MLE-CLM-${String(index + 1).padStart(3, '0')}` : `BND-${String(index - 21).padStart(2, '0')}`).join(' ') }],
    otherRoleTexts: [],
  }), []);
  expectOnlyCode(validatorModule.validateOriginality({
    chapters: [
      { chapterId: 'MLE-CH-01', text: `First chapter ordinary prose ${words}.` },
      { chapterId: 'MLE-CH-02', text: `Second chapter ordinary prose ${words}.` },
    ], researchPacks: [], otherRoleTexts: [],
  }), 'ORIGINALITY_SAME_BOOK');

  const caseRow = 'At the table, CASE-01 enters as FICTIONAL SYNTHETIC CAPSTONE. Its chapter use is: preserve the exact truth boundary. Reported facts: none. Attributed outcomes: none. Allowed inference: method transfer only. Forbidden inference: no performance or authority. Case bounds: no real production claim. Transfer: preserve the decision job and bounded evidence across the named chapter.';
  assert.equal(validatorModule.isCrossChapterMachineRecord(caseRow), true);
  assert.equal(validatorModule.isCrossChapterMachineRecord(caseRow.replace('Forbidden inference:', 'Narrative warning:')), false);
  assert.deepEqual(validatorModule.validateOriginality({ chapters: [{ chapterId: 'MLE-CH-08', text: caseRow }, { chapterId: 'MLE-CH-09', text: caseRow }], researchPacks: [], otherRoleTexts: [] }), []);
  expectOnlyCode(validatorModule.validateOriginality({ chapters: [{ chapterId: 'MLE-CH-08', text: caseRow }, { chapterId: 'MLE-CH-09', text: caseRow.replace('Forbidden inference:', 'Narrative warning:') }], researchPacks: [], otherRoleTexts: [] }), 'ORIGINALITY_SAME_BOOK');

  const sourceRow = 'At the ledger, source edge MLE-BSRC-006 to MLE-BCLM-039 enters MLE-CH-13-S02 with role doctrine. The cited source is Model Cards, version final, published 2019-01-29, verified 2026-08-18. The stopping requirement on this source-use boundary is limited evidence. Maintenance profile: durability=durable; volatility=low. Freshness action: inspect the registered edition. This edge ends at the registered claim and conveys no authority.';
  assert.equal(validatorModule.isCrossChapterMachineRecord(sourceRow), true);
  assert.equal(validatorModule.isCrossChapterMachineRecord(sourceRow.replace('Freshness action:', 'Later note:')), false);
  assert.deepEqual(validatorModule.validateOriginality({ chapters: [{ chapterId: 'MLE-CH-13', text: sourceRow }, { chapterId: 'MLE-CH-14', text: sourceRow }], researchPacks: [], otherRoleTexts: [] }), []);
  expectOnlyCode(validatorModule.validateOriginality({ chapters: [{ chapterId: 'MLE-CH-13', text: sourceRow }, { chapterId: 'MLE-CH-14', text: sourceRow.replace('Freshness action:', 'Later note:') }], researchPacks: [], otherRoleTexts: [] }), 'ORIGINALITY_SAME_BOOK');

  const labRow = 'MLE-CH-09-LAB-01 is a synthetic-deterministic exercise. Fixture entrance contract: fixed offline fixture. Pinned fixture identity: FIX-MLE-CH-09-1. Expected RED route: missing basis. Basis emitted: BL-08. Acceptance examination: identity exact. Permitted dispositions remain PASS, HOLD, REJECT, REOPEN. Effects forbidden by this exercise: no network. The conforming run demonstrates the record. The mutation run demonstrates the diagnostic with enough stable structured words to cross twenty.';
  assert.equal(validatorModule.isCrossChapterMachineRecord(labRow), true);
  assert.equal(validatorModule.isCrossChapterMachineRecord(labRow.replace('Effects forbidden by this exercise:', 'Effects discussion:')), false);
});

test('furniture validator enforces exact 10/7/7/5 jobs, routes, obligations, and closing line', async () => {
  assert.equal(typeof validatorModule.validateFurnitureArtifacts, 'function');
  const root = await copiedAcceptedIntegrationRoot();
  const snapshot = await loadRepositorySnapshot(root, { stage: 'integration' });
  assert.deepEqual(validatorModule.validateFurnitureArtifacts(snapshot.files, snapshot.register), []);
  const path = `${BOOK}/manuscript/opening-and-closing.md`;
  const mutated = clone(snapshot.files);
  mutated[path].text = mutated[path].text.replace('FURN-BZ-01', 'FURN-BZ-XX');
  expectOnlyCode(validatorModule.validateFurnitureArtifacts(mutated, snapshot.register), 'FURNITURE_EXACT');
  const registerMutation = clone(snapshot.register);
  registerMutation.furniture.appendices[0].requiredContent[0] = 'impossible-unique-obligation-token';
  expectOnlyCode(validatorModule.validateFurnitureArtifacts(snapshot.files, registerMutation), 'FURNITURE_EXACT');
});

test('active package digest is canonical, ordered, self-excluding, and changes on add, drop, reorder, or byte mutation', async () => {
  assert.equal(typeof validatorModule.buildActivePackageDigest, 'function');
  const root = await copiedAcceptedIntegrationRoot();
  const snapshot = await loadRepositorySnapshot(root, { stage: 'pre-hostile' });
  const digest = validatorModule.buildActivePackageDigest(snapshot);
  assert.equal(digest.schema, 'mle-phase-08-active-package-digest/v1');
  assert.equal(digest.entries.some((item) => item.path.endsWith('task-07-hostile-integration.md')), false);
  assert.equal(digest.entries.some((item) => item.path.endsWith('phase-08-verification.json')), false);
  assert.deepEqual(digest.entries.map((item) => item.path), digest.entries.map((item) => item.path).toSorted());
  assert.equal(digest.packageSha256, sha256(canonicalJson(digest.entries)));
  for (const mutate of [
    (s) => { s.phase08Paths.push(`${BOOK}/manuscript/unexpected.md`); s.files[`${BOOK}/manuscript/unexpected.md`] = { path: `${BOOK}/manuscript/unexpected.md`, text: 'x\n', sha256: sha256('x\n') }; },
    (s) => { const path = s.phase08Paths.find((item) => item.endsWith('chapter-01.md')); s.phase08Paths = s.phase08Paths.filter((item) => item !== path); delete s.files[path]; },
    (s) => { s.phase08Paths.reverse(); },
    (s) => { const path = s.phase08Paths.find((item) => item.endsWith('chapter-01.md')); s.files[path].text += 'mutation\n'; s.files[path].sha256 = sha256(s.files[path].text); },
  ]) {
    const changed = clone(snapshot);
    mutate(changed);
    const next = validatorModule.buildActivePackageDigest(changed);
    if (changed.phase08Paths[0] === snapshot.phase08Paths.at(-1) && next.packageSha256 === digest.packageSha256) {
      assert.deepEqual(next.entries.map((item) => item.path), digest.entries.map((item) => item.path));
    } else {
      assert.notEqual(next.packageSha256, digest.packageSha256);
    }
  }
});

test('Task 07 exact review contract binds the synthetic digest plus validator, tests, and Task 06 chain', async (t) => {
  const root = await copiedAcceptedIntegrationRoot();
  const snapshot = await loadRepositorySnapshot(root, { stage: 'pre-hostile' });
  const digest = validatorModule.buildActivePackageDigest(snapshot);
  const reviewPath = `${ROLE}/reviews/phase-08/task-07-hostile-integration.md`;
  const paths = ['digest:phase-08-active-pre-close-package', `${BOOK}/validate-phase-08.mjs`, `${BOOK}/validate-phase-08.test.mjs`, `${ROLE}/reviews/phase-08/task-06-canonical-integration.md`];
  const repair = `${ROLE}/reviews/phase-08/task-06-canonical-integration-repair.md`;
  if (snapshot.files[repair]) paths.push(repair);
  const record = { taskId: 'TASK-07', ...EXPECTED_REVIEW_IDENTITIES['TASK-07'], reviewedAt: '2026-08-23T12:00:00+05:30',
    artifactBindings: paths.map((path) => ({ path, sha256: path.startsWith('digest:') ? digest.packageSha256 : snapshot.files[path].sha256 })),
    activePackageDigest: digest.packageSha256, activePackageEntryCount: digest.entryCount, activePackagePaths: digest.entries.map((item) => item.path),
    priorVerdict: null, repairPath: null, repairSha256: null, reacceptedBy: null, reacceptedAt: null,
    specVerdict: 'SPEC COMPLIANCE PASS', qualityVerdict: 'QUALITY APPROVED' };
  const context = { files: snapshot.files, reviewPath, activePackageDigest: digest };
  assert.deepEqual(validateReviewRecord(record, EXPECTED_REVIEW_IDENTITIES['TASK-07'], context), []);
  await t.test('auxiliary digest mutation', () => { const changed = clone(record); changed.activePackageDigest = '0'.repeat(64); expectOnlyCode(validateReviewRecord(changed, EXPECTED_REVIEW_IDENTITIES['TASK-07'], context), 'REVIEW_ACTIVE_DIGEST'); });
  await t.test('ordered path mutation', () => { const changed = clone(record); changed.activePackagePaths.reverse(); expectOnlyCode(validateReviewRecord(changed, EXPECTED_REVIEW_IDENTITIES['TASK-07'], context), 'REVIEW_ACTIVE_DIGEST'); });
  await t.test('pseudo-binding mutation', () => { const changed = clone(record); changed.artifactBindings[0].sha256 = '0'.repeat(64); expectOnlyCode(validateReviewRecord(changed, EXPECTED_REVIEW_IDENTITIES['TASK-07'], context), 'REVIEW_ARTIFACT_BINDING'); });
});

test('closure authorities and Git checkpoints require exact closed projections', async (t) => {
  const authorityPaths = [`${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`, `${ROLE}/issues/phase-08-manuscript.md`, FACTORY];
  const closed = 'Phase 08 complete. #85 closed and last completed. No active child. Phase 09 is the sole next gate and inactive. Catalog position 6 not started.\n';
  const authoritySnapshot = { files: Object.fromEntries(authorityPaths.map((path) => [path, { text: closed }])) };
  assert.deepEqual(validatorModule.validateAuthorities(authoritySnapshot, 'final'), []);
  const authorityCases = [
    ['closed child', (text) => text.replace('#85 closed and last completed. No active child.', 'No child projection.'), 'FINAL_AUTHORITY_STATE'],
    ['sole next gate', (text) => text.replace('the sole next gate and inactive', 'inactive'), 'FINAL_NEXT_GATE'],
    ['catalog stop', (text) => text.replace('Catalog position 6 not started.', ''), 'FINAL_CATALOG_BOUNDARY'],
  ];
  for (const [name, mutate, code] of authorityCases) await t.test(name, () => {
    const changed = clone(authoritySnapshot); changed.files[authorityPaths[0]].text = mutate(closed);
    expectOnlyCode(validatorModule.validateAuthorities(changed, 'final'), code);
  });
  const closureDirt = [...authorityPaths, `${BOOK}/phase-08-verification.json`].sort();
  const gitSnapshot = { git: { head: 'a', originMain: 'a', remoteMain: 'a', clean: false, changedPaths: closureDirt } };
  assert.deepEqual(validatorModule.validateExternal(gitSnapshot, 'final-content'), []);
  await t.test('final-content exact five dirt paths', () => {
    const changed = clone(gitSnapshot); changed.git.changedPaths.pop();
    expectOnlyCode(validatorModule.validateExternal(changed, 'final-content'), 'GIT_FINAL_CONTENT_DIRT');
  });
  await t.test('final clean checkpoint', () => {
    const changed = clone(gitSnapshot); changed.git.clean = false; changed.git.changedPaths = ['x'];
    expectOnlyCode(validatorModule.validateExternal(changed, 'final'), 'GIT_FINAL_CLEAN');
  });
});

test('final verification independently binds active digest, closure state, issues, counts, reviews, tests, Git, and next gate', async (t) => {
  assert.equal(typeof validatorModule.validateFinalVerification, 'function');
  const snapshot = await loadBootstrap();
  const task07Path = `${ROLE}/reviews/phase-08/task-07-hostile-integration.md`;
  const task07Record = { taskId: 'TASK-07', producerIdentity: '/root/mle_p8_hostile_fixture', reviewerIdentity: '/root/mle_p8_hostile_review',
    reviewedAt: '2026-08-23T12:00:00+05:30', artifactBindings: [], priorVerdict: null, repairPath: null,
    repairSha256: null, reacceptedBy: null, reacceptedAt: null, specVerdict: 'SPEC COMPLIANCE PASS', qualityVerdict: 'QUALITY APPROVED' };
  const task07Text = `\`\`\`json\n${JSON.stringify(task07Record)}\n\`\`\`\n`;
  snapshot.files[task07Path] = { path: task07Path, text: task07Text, sha256: sha256(task07Text) };
  snapshot.phase08Paths.push(task07Path);
  const digest = validatorModule.buildActivePackageDigest(snapshot);
  const bind = (path) => ({ path, bytes: Buffer.byteLength(snapshot.files[path].text), sha256: snapshot.files[path].sha256 });
  const statePaths = [`${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`, `${ROLE}/issues/phase-08-manuscript.md`, FACTORY];
  const reviewPaths = snapshot.phase08Paths.filter((path) => path.includes('/reviews/phase-08/') && !path.endsWith('-repair.md')).sort();
  const checkpointCommit = 'a'.repeat(40);
  const verification = {
    schema: 'mle-phase-08-final-verification/v1',
    role: 'machine-learning-engineer', book: 'machine-learning-engineering', phase: 'Phase 08', generatedAt: '2026-08-23T12:30:00+05:30',
    frozenInputs: Object.keys(FROZEN_INPUTS).sort().map(bind),
    artifacts: digest.entries.map((item) => bind(item.path)),
    activePreClose: { checkpointCommit, digest, task07Binding: { path: task07Path, sha256: snapshot.files[task07Path].sha256 } },
    finalState: { phase08: 'complete', activeChild: null, lastCompletedChild: 85, phase09: 'inactive', soleNextGate: 'Phase 09', catalogPosition6Started: false, bindings: statePaths.map((path) => ({ ...bind(path), status: 'phase-08-complete' })) },
    githubExpectations: {
      root: { number: 79, state: 'OPEN', labels: ['role:machine-learning-engineer', 'status:in-progress'], bodySha256: sha256(snapshot.github[79].body) },
      child: { number: 85, state: 'CLOSED', labels: ['phase:08-manuscript', 'role:machine-learning-engineer', 'status:done'], bodySha256: sha256(snapshot.github[85].body) },
    },
    counts: { ...EXPECTED_COUNTS },
    reviews: reviewPaths.map((path) => { const record = validatorModule.parseReviewRecord(snapshot.files[path].text); return {
      path, taskId: record?.taskId, producerIdentity: record?.producerIdentity, reviewerIdentity: record?.reviewerIdentity,
      specVerdict: record?.specVerdict, qualityVerdict: record?.qualityVerdict, repairPath: record?.repairPath ?? null,
      repairSha256: record?.repairSha256 ?? null, binding: bind(path), repairBinding: record?.repairPath ? bind(record.repairPath) : null,
    }; }),
    commandEvidence: { validatorCommand: `node ${BOOK}/validate-phase-08.mjs --stage=final-content`, testCommand: `node --test ${BOOK}/validate-phase-08.test.mjs`,
      validatorSha256: snapshot.files[`${BOOK}/validate-phase-08.mjs`].sha256, testSha256: snapshot.files[`${BOOK}/validate-phase-08.test.mjs`].sha256,
      validatorExitCode: 0, testExitCode: 0, tests: 262, pass: 262, fail: 0, skipped: 0, todo: 0,
      commands: [
        `node --check ${BOOK}/validate-phase-08.mjs`, `node --check ${BOOK}/validate-phase-08.test.mjs`,
        `node --test ${BOOK}/validate-phase-08.test.mjs`,
        ...['bootstrap', 'pre-hostile', 'pre-close', 'final-content', 'final'].map((stage) => `node ${BOOK}/validate-phase-08.mjs --stage=${stage}`),
        'npm run check', 'git diff --check',
      ].map((command) => ({ command, exitCode: 0 })),
    },
    git: { branch: 'main', checkpointCommit, clean: true, mainEquality: true },
    stopBoundary: { visualsStarted: false, imagesStarted: false, pdfStarted: false, webStarted: false, publicationStarted: false, courseStarted: false, abhyaasStarted: false, secondVolumeStarted: false, catalogPosition6Started: false, nextRoleStarted: false },
    finalPackage: validatorModule.buildFinalPackageDigest(snapshot),
  };
  const github = clone(snapshot.github);
  github[85].state = 'CLOSED';
  github[85].labels = ['phase:08-manuscript', 'role:machine-learning-engineer', 'status:done'];
  assert.deepEqual(validatorModule.validateFinalVerification(verification, snapshot, { github }), []);
  const cases = [
    ['identity', (v) => { v.role = 'other'; }, 'FINAL_IDENTITY'],
    ['frozen input', (v) => { v.frozenInputs[0].sha256 = '0'.repeat(64); }, 'FINAL_FROZEN_INPUT'],
    ['digest', (v) => { v.activePreClose.digest.packageSha256 = '0'.repeat(64); }, 'FINAL_ACTIVE_DIGEST'],
    ['checkpoint', (v) => { v.activePreClose.checkpointCommit = 'draft'; }, 'FINAL_ACTIVE_CHECKPOINT'],
    ['artifact', (v) => { v.artifacts.pop(); }, 'FINAL_ARTIFACT_BINDING'],
    ['state', (v) => { v.finalState.bindings[0].sha256 = '0'.repeat(64); }, 'FINAL_STATE_BINDING'],
    ['state status', (v) => { v.finalState.phase09 = 'active'; }, 'FINAL_STATE_STATUS'],
    ['issue', (v) => { v.githubExpectations.child.state = 'OPEN'; }, 'FINAL_ISSUE_BINDING'],
    ['count', (v) => { v.counts.claims += 1; }, 'FINAL_COUNT'],
    ['review identity', (v) => { v.reviews[0].binding.sha256 = '0'.repeat(64); }, 'FINAL_REVIEW_IDENTITY'],
    ['command', (v) => { v.commandEvidence.testSha256 = '0'.repeat(64); }, 'FINAL_COMMAND_EVIDENCE'],
    ['tests', (v) => { v.commandEvidence.fail = 1; }, 'FINAL_TEST_EVIDENCE'],
    ['git', (v) => { v.git.clean = false; }, 'FINAL_GIT_EXPECTATION'],
    ['stop boundary', (v) => { v.stopBoundary.courseStarted = true; }, 'FINAL_STOP_BOUNDARY'],
    ['final projection', (v) => { v.finalPackage.entries[0].sha256 = '0'.repeat(64); }, 'FINAL_PACKAGE_PROJECTION'],
    ['sentinel', (v) => { v.finalPackage.sentinel.generatedAtExcluded = false; }, 'FINAL_PACKAGE_PROJECTION'],
  ];
  for (const [name, mutate, code] of cases) await t.test(name, () => {
    const changed = clone(verification);
    mutate(changed);
    expectOnlyCode(validatorModule.validateFinalVerification(changed, snapshot, { github }), code);
  });
});
}

if (process.env.MLE_SKIP_CURRENT_STAGE_REGRESSIONS) {
  test('Task 07 preserves the exact historical RED cardinality while current hostile cases stay isolated', async (t) => {
    const legacyGreen = [
      ['sha primitive', () => assert.equal(typeof sha256, 'function')],
      ['canonical primitive', () => assert.equal(typeof canonicalJson, 'function')],
      ['count authority', () => assert.equal(EXPECTED_COUNTS.chapters, 21)],
      ['port authority', () => assert.equal(EXPECTED_PORTS.length, 5)],
      ['review authority', () => assert.equal(EXPECTED_REVIEW_IDENTITIES['TASK-07'].reviewerIdentity, '/root/mle_p8_hostile_review')],
      ['snapshot validator', () => assert.equal(typeof validatePhase08Snapshot, 'function')],
    ];
    for (const [name, check] of legacyGreen) await t.test(name, check);
    const hostileRed = [
      ['filesystem inventory', 'buildActivePackageDigest'], ['deep register', 'validateManuscriptRegister'],
      ['source mapping', 'validateManuscriptRegister'], ['case truth', 'validateManuscriptRegister'],
      ['originality', 'validateOriginality'], ['furniture', 'validateFurnitureArtifacts'],
      ['active digest', 'buildActivePackageDigest'], ['final projection', 'buildFinalPackageDigest'],
      ['final verification', 'validateFinalVerification'], ['review parser', 'parseReviewRecord'],
    ];
    for (const [name, exportName] of hostileRed) await t.test(name, () => assert.equal(typeof validatorModule[exportName], 'function'));
  });
}

if (!process.env.MLE_SKIP_RED_RECONSTRUCTION) {
  test('current final test bytes reconstruct a prior-validator hardening RED exactly', async () => {
    const fixtureRoot = await pinnedHistoricalBootstrapRoot();
    const root = await mkdtemp(join(tmpdir(), 'mle-p8-red-reconstruction-'));
    const validatorPath = `${BOOK}/validate-phase-08.mjs`;
    const testPath = `${BOOK}/validate-phase-08.test.mjs`;
    const prior = await execFileAsync('git', ['show', `${PRIOR_VALIDATOR_COMMIT}:${validatorPath}`], { cwd: GIT_REPO, maxBuffer: 20 * 1024 * 1024 });
    await writeFile(join(root, 'validate-phase-08.mjs'), prior.stdout);
    await cp(join(GIT_REPO, testPath), join(root, 'validate-phase-08.test.mjs'));
    const childEnv = {
      ...process.env,
      MLE_SKIP_RED_RECONSTRUCTION: '1',
      MLE_SKIP_CURRENT_STAGE_REGRESSIONS: '1',
      MLE_PHASE08_FIXTURE_REPO: fixtureRoot,
    };
    delete childEnv.NODE_TEST_CONTEXT;
    let result;
    let unexpectedlyPassed = false;
    try {
      const passed = await execFileAsync(process.execPath, ['--test', 'validate-phase-08.test.mjs'], {
        cwd: root, env: childEnv, maxBuffer: 50 * 1024 * 1024,
      });
      result = `${passed.stdout ?? ''}\n${passed.stderr ?? ''}`;
      unexpectedlyPassed = true;
    } catch (caught) {
      result = `${caught.message ?? ''}\n${caught.stdout ?? ''}\n${caught.stderr ?? ''}`;
    }
    assert.equal(unexpectedlyPassed, false, `prior validator unexpectedly passed current tests\n${result}`);
    const summary = Object.fromEntries([...result.matchAll(/^\s*# (tests|pass|fail|skipped|todo) (\d+)\s*$/gm)].map((match) => [match[1], Number(match[2])]));
    assert.ok(summary.tests > 0, result.slice(-2000));
    assert.ok(summary.fail > 0, JSON.stringify(summary));
    assert.equal(summary.tests, summary.pass + summary.fail + (summary.skipped ?? 0));
    assert.deepEqual(summary, { tests: 200, pass: 167, fail: 33, skipped: 0, todo: 0 });
  });
}
