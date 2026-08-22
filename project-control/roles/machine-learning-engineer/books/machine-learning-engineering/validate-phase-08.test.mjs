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

const REPO = '/Applications/ServBay/www/komalnakrani';
const BOOK = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering';
const ROLE = 'project-control/roles/machine-learning-engineer';
const FACTORY = 'project-control/role-factory/FACTORY-STATE.md';
const HEAD = 'c9edc934e463dc2d8837244f2512d5d9fe8579e8';
const execFileAsync = promisify(execFile);

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
  return loadRepositorySnapshot(REPO, {
    stage: 'bootstrap',
    git: bootstrapGit,
    github: await bootstrapGithub(),
  });
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

test('loads the activated repository and passes the bootstrap contract without production artifacts', async () => {
  const report = await validateRepository(REPO, {
    stage: 'bootstrap',
    git: bootstrapGit,
    github: await bootstrapGithub(),
  });
  assert.deepEqual(report.errors, []);
  assert.equal(report.stage, 'bootstrap');
  assert.equal(report.counts.chapters, 21);
  assert.equal(report.productionInventory.length, 0);
  assert.equal(report.reviewInventory.includes('task-01-bootstrap.md'), true);
  assert.equal(report.bootstrapLifecycle, 'repair-in-progress');
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
  const blueprint = snapshot.register.chapters[0];
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

test('current bootstrap-only real tree fails every later production stage with exact missing inventories', async (t) => {
  const expectedCodes = {
    production: ['STAGE_MANUSCRIPT_MISSING', 'STAGE_FURNITURE_MISSING', 'STAGE_COMPANION_MISSING', 'STAGE_REVIEW_MISSING'],
    integration: ['STAGE_INTEGRATION_MISSING', 'STAGE_MANUSCRIPT_MISSING', 'STAGE_COMPANION_MISSING'],
    'pre-hostile': ['STAGE_INTEGRATION_MISSING', 'STAGE_REVIEW_MISSING'],
    'pre-close': ['STAGE_INTEGRATION_MISSING', 'STAGE_REVIEW_MISSING'],
  };
  for (const [stage, codes] of Object.entries(expectedCodes)) {
    await t.test(stage, async () => {
      const snapshot = await loadRepositorySnapshot(REPO, {
        stage,
        git: bootstrapGit,
        github: await bootstrapGithub(),
      });
      const errors = validatePhase08Snapshot(snapshot, { stage });
      for (const code of codes) expectCode(errors, code);
    });
  }
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
  const report = await validateRepository(REPO, {
    stage: 'bootstrap',
    git: { ...bootstrapGit, head: 'c5a5357373c1f2f887a58be8f3d8b52825b1b444', originMain: 'c5a5357373c1f2f887a58be8f3d8b52825b1b444', remoteMain: 'c5a5357373c1f2f887a58be8f3d8b52825b1b444', changedPaths: [`${ROLE}/reviews/phase-08/task-01-bootstrap.md`] },
    github: await bootstrapGithub(),
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

if (!process.env.MLE_SKIP_RED_RECONSTRUCTION) {
  test('current final test bytes reconstruct a prior-validator hardening RED exactly', async () => {
    const root = await mkdtemp(join(tmpdir(), 'mle-p8-red-reconstruction-'));
    const validatorPath = `${BOOK}/validate-phase-08.mjs`;
    const testPath = `${BOOK}/validate-phase-08.test.mjs`;
    const prior = await execFileAsync('git', ['show', `8cf1fce280ffd5932201d33470255c98bd6e3aba:${validatorPath}`], { cwd: REPO, maxBuffer: 20 * 1024 * 1024 });
    await writeFile(join(root, 'validate-phase-08.mjs'), prior.stdout);
    await cp(join(REPO, testPath), join(root, 'validate-phase-08.test.mjs'));
    const childEnv = { ...process.env, MLE_SKIP_RED_RECONSTRUCTION: '1' };
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
