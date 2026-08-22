import assert from 'node:assert/strict';
import { mkdtemp, mkdir, cp, readFile, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import test from 'node:test';

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
  assert.equal(report.reviewInventory.includes('task-01-bootstrap.md'), false);
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

