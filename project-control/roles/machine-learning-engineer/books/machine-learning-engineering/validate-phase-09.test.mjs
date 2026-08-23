import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

import {
  ALLOWED_BOOTSTRAP_DIRT,
  EXPECTED_COUNTS,
  EXPECTED_REVIEW_IDENTITIES,
  FROZEN_ENTRY,
  KNOWN_OPENING_FINDINGS,
  PHASE08_CHECKPOINT,
  parseGitStatus,
  REVIEW_CONTRACTS,
  loadRepositorySnapshot,
  runHistoricalPhase08Replay,
  sha256,
  validatePhase09Snapshot,
  validateFindingRegister,
  validateRepository,
  validateReviewRecord,
} from './validate-phase-09.mjs';

const REPO = process.env.MLE_PHASE09_FIXTURE_REPO ?? '/Applications/ServBay/www/komalnakrani';
const BOOK = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering';
const ROLE = 'project-control/roles/machine-learning-engineer';
const FACTORY = 'project-control/role-factory/FACTORY-STATE.md';
const AUTHORITIES = [
  FACTORY,
  `${ROLE}/ROLE-STATE.md`,
  `${ROLE}/issues/root.md`,
  `${ROLE}/issues/phase-09-book-qa.md`,
];
const FINAL_VERIFICATION = `${BOOK}/phase-09-verification.json`;

const CURRENT_COMMIT = '6a1f1b861b33e0dcf3b5087784a15763e8ca599b';
const bootstrapGit = {
  branch: 'main',
  head: CURRENT_COMMIT,
  originMain: CURRENT_COMMIT,
  remoteMain: CURRENT_COMMIT,
  clean: false,
  changedPaths: [...ALLOWED_BOOTSTRAP_DIRT],
};

async function bootstrapGithub(root = REPO) {
  const [rootBody, childBody, phase08Body] = await Promise.all([
    readFile(`${root}/${ROLE}/issues/root.md`, 'utf8'),
    readFile(`${root}/${ROLE}/issues/phase-09-book-qa.md`, 'utf8'),
    readFile(`${root}/${ROLE}/issues/phase-08-manuscript.md`, 'utf8'),
  ]);
  return {
    79: { number: 79, state: 'OPEN', labels: ['role:machine-learning-engineer', 'status:in-progress'], body: rootBody },
    85: { number: 85, state: 'CLOSED', labels: ['phase:08-manuscript', 'role:machine-learning-engineer', 'status:done'], body: phase08Body },
    86: { number: 86, state: 'OPEN', labels: ['phase:09-book-qa', 'role:machine-learning-engineer', 'status:in-progress'], body: childBody },
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

function codes(errors) {
  return errors.map((item) => item.code);
}

function expectCode(errors, code) {
  assert.ok(codes(errors).includes(code), `expected ${code}; got ${JSON.stringify(errors, null, 2)}`);
}

function record(text) {
  return { text, sha256: sha256(text), bytes: Buffer.byteLength(text) };
}

test('SHA-256 binds exact UTF-8 bytes', () => {
  assert.equal(sha256('abc'), 'ba7816bf8f01cfea414140de5dae2223b00361a396177a9cb410ff61f20015ad');
});

test('Git porcelain parser preserves the first tracked path and all untracked paths', () => {
  assert.deepEqual(parseGitStatus(' M project-control/role-factory/FACTORY-STATE.md\n?? new-file.mjs\n'), [
    'project-control/role-factory/FACTORY-STATE.md', 'new-file.mjs',
  ]);
});

test('loads real repository bytes and accepts the active bootstrap only', async () => {
  const report = await validateRepository(REPO, {
    stage: 'bootstrap',
    git: bootstrapGit,
    github: await bootstrapGithub(),
  });
  assert.deepEqual(report.errors, []);
  assert.equal(report.stage, 'bootstrap');
  assert.equal(report.qaInventory.length, 0);
  assert.equal(report.productionAuthorized, false);
  assert.equal(report.counts.chapters, 21);
});

test('binds every approved Phase 09 and terminal Phase 08 entry byte', async (t) => {
  const snapshot = await loadBootstrap();
  for (const [path, expected] of Object.entries(FROZEN_ENTRY)) {
    await t.test(path, () => assert.equal(snapshot.files[path]?.sha256, expected, path));
  }
});

test('binds the historical checkpoint separately from the current closed tree', async () => {
  const snapshot = await loadBootstrap();
  assert.equal(PHASE08_CHECKPOINT, 'aed6f459d64b092ed4377c7da8f88dcc6c09d726');
  assert.equal(snapshot.phase08Verification.schema, 'mle-phase-08-final-verification/v1');
  assert.equal(snapshot.files[`${BOOK}/phase-08-verification.json`].sha256, FROZEN_ENTRY[`${BOOK}/phase-08-verification.json`]);
  assert.notEqual(snapshot.git.head, PHASE08_CHECKPOINT);
});

test('historical Phase 08 pre-close replay is isolated and remains exactly 263/263', { timeout: 180_000 }, async () => {
  const replay = await runHistoricalPhase08Replay(REPO);
  assert.deepEqual(replay, {
    schema: 'mle-phase-08-historical-replay/v1',
    checkpoint: PHASE08_CHECKPOINT,
    treeKind: 'historical-pre-close',
    currentTreeUsed: false,
    finalVerificationPresent: false,
    tests: 263,
    pass: 263,
    fail: 0,
    skipped: 0,
    todo: 0,
  });
});

test('rejects historical replay contaminated by final verification or the current tree', async (t) => {
  const snapshot = await loadBootstrap();
  const good = {
    schema: 'mle-phase-08-historical-replay/v1', checkpoint: PHASE08_CHECKPOINT,
    treeKind: 'historical-pre-close', currentTreeUsed: false, finalVerificationPresent: false,
    tests: 263, pass: 263, fail: 0, skipped: 0, todo: 0,
  };
  for (const [name, mutate] of [
    ['final verification contamination', (value) => { value.finalVerificationPresent = true; }],
    ['current tree contamination', (value) => { value.currentTreeUsed = true; }],
    ['wrong checkpoint', (value) => { value.checkpoint = snapshot.git.head; }],
    ['inflated pass result', (value) => { value.tests = 264; value.pass = 264; }],
  ]) await t.test(name, () => {
    snapshot.historicalReplay = clone(good);
    mutate(snapshot.historicalReplay);
    expectCode(validatePhase09Snapshot(snapshot, { stage: 'bootstrap' }), 'PHASE08_HISTORICAL_REPLAY');
  });
});

test('reconstructs and freezes every exact graph/count family from current closed bytes', async (t) => {
  const snapshot = await loadBootstrap();
  for (const [name, expected] of Object.entries(EXPECTED_COUNTS)) {
    await t.test(`${name}=${expected}`, () => assert.equal(snapshot.derivedCounts[name], expected, name));
  }
});

test('rejects a count mutation even when the declared Phase 08 count is changed with it', async () => {
  const snapshot = await loadBootstrap();
  snapshot.derivedCounts.claims += 1;
  snapshot.phase08Verification.counts.claims += 1;
  expectCode(validatePhase09Snapshot(snapshot, { stage: 'bootstrap' }), 'COUNT_claims');
});

test('all four real authorities project Phase 09 active and Phase 10 inactive', async () => {
  const snapshot = await loadBootstrap();
  for (const path of AUTHORITIES) {
    assert.match(snapshot.files[path].text, /Phase 09/i, path);
    assert.match(snapshot.files[path].text, /#86/i, path);
  }
  assert.deepEqual(validatePhase09Snapshot(snapshot, { stage: 'bootstrap' }), []);
});

test('rejects contradictory active and inactive Phase 09 authority text in every authority', async (t) => {
  for (const path of AUTHORITIES) await t.test(path, async () => {
    const snapshot = await loadBootstrap();
    snapshot.files[path] = record(`${snapshot.files[path].text}\nPhase 09 remains inactive.\n`);
    expectCode(validatePhase09Snapshot(snapshot, { stage: 'bootstrap' }), 'PHASE09_AUTHORITY_CONTRADICTION');
  });
});

test('rejects authority drift away from active #86, inactive Phase 10, or catalog six not started', async (t) => {
  const mutations = [
    ['missing active child', (text) => text.replace(/#86/g, '#87'), 'PHASE09_AUTHORITY'],
    ['Phase 10 started', (text) => `${text}\nPhase 10 is active and started.\n`, 'PHASE10_INACTIVE'],
    ['catalog six started', (text) => `${text}\nCatalog position 6 started.\n`, 'CATALOG6_STOPPED'],
  ];
  for (const [name, mutate, code] of mutations) await t.test(name, async () => {
    const snapshot = await loadBootstrap();
    snapshot.files[`${ROLE}/ROLE-STATE.md`] = record(mutate(snapshot.files[`${ROLE}/ROLE-STATE.md`].text));
    expectCode(validatePhase09Snapshot(snapshot, { stage: 'bootstrap' }), code);
  });
});

test('requires exact live #79, #85, and #86 state and labels', async (t) => {
  const cases = [
    ['#79 closed', (github) => { github[79].state = 'CLOSED'; }, 'GITHUB_ROOT'],
    ['#85 reopened', (github) => { github[85].state = 'OPEN'; }, 'GITHUB_PHASE08'],
    ['#86 closed', (github) => { github[86].state = 'CLOSED'; }, 'GITHUB_PHASE09'],
    ['#86 label drift', (github) => { github[86].labels.pop(); }, 'GITHUB_PHASE09'],
  ];
  for (const [name, mutate, code] of cases) await t.test(name, async () => {
    const snapshot = await loadBootstrap();
    mutate(snapshot.github);
    expectCode(validatePhase09Snapshot(snapshot, { stage: 'bootstrap' }), code);
  });
});

test('requires live #79, #85, and #86 bodies to byte-equal local issue authorities', async (t) => {
  for (const issue of [79, 85, 86]) await t.test(`#${issue}`, async () => {
    const snapshot = await loadBootstrap();
    snapshot.github[issue].body += '\ndrift';
    expectCode(validatePhase09Snapshot(snapshot, { stage: 'bootstrap' }), 'GITHUB_BODY');
  });
});

test('requires HEAD, origin/main, and live remote main equality', async (t) => {
  for (const field of ['originMain', 'remoteMain']) await t.test(field, async () => {
    const snapshot = await loadBootstrap();
    snapshot.git[field] = 'f'.repeat(40);
    expectCode(validatePhase09Snapshot(snapshot, { stage: 'bootstrap' }), 'GIT_MAIN_EQUALITY');
  });
});

test('permits exactly the four activation authorities plus validator and tests as bootstrap dirt', async (t) => {
  assert.deepEqual(ALLOWED_BOOTSTRAP_DIRT, [
    FACTORY, `${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`, `${ROLE}/issues/phase-09-book-qa.md`,
    `${BOOK}/validate-phase-09.mjs`, `${BOOK}/validate-phase-09.test.mjs`,
  ]);
  for (const mutation of [
    (paths) => paths.pop(),
    (paths) => paths.push(`${BOOK}/manuscript/chapter-01.md`),
  ]) await t.test(mutation.toString().slice(0, 28), async () => {
    const snapshot = await loadBootstrap();
    mutation(snapshot.git.changedPaths);
    expectCode(validatePhase09Snapshot(snapshot, { stage: 'bootstrap' }), 'GIT_BOOTSTRAP_DIRT');
  });
  await t.test('porcelain ordering does not change exact set membership', async () => {
    const snapshot = await loadBootstrap();
    snapshot.git.changedPaths.reverse();
    assert.equal(codes(validatePhase09Snapshot(snapshot, { stage: 'bootstrap' })).includes('GIT_BOOTSTRAP_DIRT'), false);
  });
});

test('bootstrap requires no QA output, Task 01 review, or final verification yet', async (t) => {
  const paths = [
    `${BOOK}/qa/coverage-depth.md`,
    `${BOOK}/qa/finding-register.json`,
    `${ROLE}/reviews/phase-09/task-01-bootstrap.md`,
    FINAL_VERIFICATION,
  ];
  for (const path of paths) await t.test(path, async () => {
    const snapshot = await loadBootstrap();
    snapshot.phase09Paths.push(path);
    snapshot.files[path] = record('{}\n');
    expectCode(validatePhase09Snapshot(snapshot, { stage: 'bootstrap' }), 'STAGE_PATH_FORBIDDEN');
  });
});

test('pre-close fixtures reject contamination by the final verification artifact', async () => {
  const snapshot = await loadBootstrap();
  snapshot.phase09Paths.push(FINAL_VERIFICATION);
  snapshot.files[FINAL_VERIFICATION] = record('{"schema":"mle-phase-09-final-verification/v1"}\n');
  expectCode(validatePhase09Snapshot(snapshot, { stage: 'pre-close', relaxMissingStageArtifacts: true }), 'FINAL_VERIFICATION_TIMING');
});

test('each lifecycle stage rejects reviews owned by a later stage', async (t) => {
  const cases = [
    ['audit', `${ROLE}/reviews/phase-09/task-06-finding-freeze.md`],
    ['repair', `${ROLE}/reviews/phase-09/task-07-canonical-integration.md`],
    ['integration', `${ROLE}/reviews/phase-09/task-08-hostile-integration.md`],
    ['pre-hostile', `${ROLE}/reviews/phase-09/task-08-hostile-integration.md`],
  ];
  for (const [stage, path] of cases) await t.test(`${stage}:${path}`, async () => {
    const snapshot = await loadBootstrap();
    snapshot.phase09Paths.push(path);
    snapshot.files[path] = record('later review\n');
    expectCode(validatePhase09Snapshot(snapshot, { stage, relaxMissingStageArtifacts: true }), 'STAGE_PATH_FORBIDDEN');
  });
});

test('preserves all six known editorial RED findings as mandatory future audit gates', () => {
  assert.deepEqual(KNOWN_OPENING_FINDINGS.map((finding) => finding.id), [
    'P09-OPEN-01', 'P09-OPEN-02', 'P09-OPEN-03', 'P09-OPEN-04', 'P09-OPEN-05', 'P09-OPEN-06',
  ]);
  assert.deepEqual(KNOWN_OPENING_FINDINGS.map((finding) => finding.audit), [
    'continuity-originality', 'continuity-originality', 'continuity-originality',
    'companion-furniture-visual-readiness', 'evidence-currentness-authority', 'coverage-depth',
  ]);
  for (const finding of KNOWN_OPENING_FINDINGS) {
    assert.match(finding.summary, /\S/);
    assert.equal(finding.requiredUntilDisposed, true);
  }
});

test('finding freeze cannot omit, reassign, or silently close a mandatory opening RED', async (t) => {
  const complete = {
    schema: 'mle-phase-09-finding-register/v1',
    openingFindings: KNOWN_OPENING_FINDINGS.map(({ id, audit }) => ({
      id, audit, disposition: 'open', evidence: ['real-byte-audit-required'],
    })),
  };
  assert.deepEqual(validateFindingRegister(complete), []);
  for (const [name, mutate] of [
    ['omitted', (value) => { value.openingFindings.pop(); }],
    ['reassigned', (value) => { value.openingFindings[0].audit = 'coverage-depth'; }],
    ['silent close', (value) => { value.openingFindings[0].disposition = 'closed'; value.openingFindings[0].evidence = []; }],
  ]) await t.test(name, () => {
    const value = clone(complete);
    mutate(value);
    expectCode(validateFindingRegister(value), 'OPENING_FINDING_GATE');
  });
});

test('freezes disjoint review identities and prevents self-review', () => {
  assert.deepEqual(EXPECTED_REVIEW_IDENTITIES['TASK-01'], {
    producerIdentity: '/root/mle_p9_bootstrap', reviewerIdentity: '/root/mle_p9_bootstrap_review',
  });
  for (const [task, identity] of Object.entries(EXPECTED_REVIEW_IDENTITIES)) {
    assert.notEqual(identity.producerIdentity, identity.reviewerIdentity, task);
  }
  assert.equal(Object.keys(REVIEW_CONTRACTS).length, 9);
});

const acceptedReview = {
  schema: 'mle-phase-09-review/v1', taskId: 'TASK-01',
  producerIdentity: '/root/mle_p9_bootstrap', reviewerIdentity: '/root/mle_p9_bootstrap_review',
  reviewedAt: '2026-08-23T12:00:00+05:30', artifactBindings: [],
  priorVerdict: null, repairPath: null, repairSha256: null, reacceptedBy: null, reacceptedAt: null,
  specVerdict: 'SPEC COMPLIANCE PASS', qualityVerdict: 'QUALITY APPROVED',
};

test('review schema rejects identity drift, missing bindings, self-review, and unpaired repair', async (t) => {
  const cases = [
    ['wrong identity', (value) => { value.reviewerIdentity = '/root'; }, 'REVIEW_IDENTITY'],
    ['missing bindings', (value) => { delete value.artifactBindings; }, 'REVIEW_SCHEMA'],
    ['self review', (value) => { value.reviewerIdentity = value.producerIdentity; }, 'REVIEW_SELF_APPROVAL'],
    ['unpaired repair', (value) => { value.repairPath = `${ROLE}/reviews/phase-09/task-01-bootstrap-repair.md`; }, 'REVIEW_REPAIR_CHAIN'],
  ];
  for (const [name, mutate, code] of cases) await t.test(name, () => {
    const value = clone(acceptedReview);
    mutate(value);
    expectCode(validateReviewRecord(value, EXPECTED_REVIEW_IDENTITIES['TASK-01']), code);
  });
});

test('failure repair requires the original reviewer, later acceptance, and exact paired path/hash', () => {
  const value = {
    ...clone(acceptedReview),
    priorVerdict: 'SPEC COMPLIANCE FAIL / QUALITY CHANGES REQUESTED',
    repairPath: `${ROLE}/reviews/phase-09/task-01-bootstrap-repair.md`, repairSha256: 'a'.repeat(64),
    reacceptedBy: '/root/mle_p9_bootstrap_review', reacceptedAt: '2026-08-23T13:00:00+05:30',
  };
  assert.deepEqual(validateReviewRecord(value, EXPECTED_REVIEW_IDENTITIES['TASK-01'], {
    expectedRepairPath: `${ROLE}/reviews/phase-09/task-01-bootstrap-repair.md`,
  }), []);
  value.reacceptedBy = '/root';
  expectCode(validateReviewRecord(value, EXPECTED_REVIEW_IDENTITIES['TASK-01']), 'REVIEW_REPAIR_CHAIN');
});

test('rejects every forbidden output family from changed or filesystem paths', async (t) => {
  const paths = [
    'public/images/machine-learning-engineering/figure.png',
    'output/machine-learning-engineering.pdf',
    'content/publications/machine-learning-engineering/index.mdx',
    'content/courses/machine-learning-engineering/index.mdx',
    'project-control/certifications/machine-learning-engineer.md',
    'project-control/abhyaas/mle.json',
    `${BOOK}/volume-02/chapter-01.md`,
    'project-control/roles/data-engineer/ROLE-STATE.md',
  ];
  for (const path of paths) await t.test(path, async () => {
    const snapshot = await loadBootstrap();
    snapshot.git.changedPaths.push(path);
    expectCode(validatePhase09Snapshot(snapshot, { stage: 'bootstrap' }), 'STOP_BOUNDARY');
  });
});

test('current closed Phase 08 verification binds actual artifact bytes rather than trusting labels', async () => {
  const snapshot = await loadBootstrap();
  const bound = snapshot.phase08Verification.artifacts.find((item) => item.path === `${BOOK}/manuscript/manuscript-register.json`);
  assert.equal(bound.sha256, snapshot.files[bound.path].sha256);
  snapshot.files[bound.path].sha256 = '0'.repeat(64);
  expectCode(validatePhase09Snapshot(snapshot, { stage: 'bootstrap' }), 'PHASE08_CURRENT_BINDING');
});
