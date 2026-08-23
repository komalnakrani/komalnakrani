import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { cp, mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { promisify } from 'node:util';

import {
  ALLOWED_BOOTSTRAP_DIRT,
  EXPECTED_COUNTS,
  EXPECTED_REVIEW_IDENTITIES,
  FROZEN_ENTRY,
  INITIAL_RED_EVIDENCE,
  buildTask01Evidence,
  recoverInitialRedTestSource,
  KNOWN_OPENING_FINDINGS,
  PHASE08_CHECKPOINT,
  parseGitStatus,
  REVIEW_CONTRACTS,
  loadRepositorySnapshot,
  parseReviewMarkdown,
  runHistoricalPhase08Replay,
  sha256,
  validateCanonicalBindings,
  validateLoadedReviews,
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
const TASK01_REVIEW = `${ROLE}/reviews/phase-09/task-01-bootstrap.md`;
const TASK01_REPAIR = `${ROLE}/reviews/phase-09/task-01-bootstrap-repair.md`;
const execFileAsync = promisify(execFile);

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

function cleanGit(commit = 'd370ab578f5a1911185b0c86515f4b8d091cefc6') {
  return { branch: 'main', head: commit, originMain: commit, remoteMain: commit, clean: true, changedPaths: [] };
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

test('bootstrap distinguishes exact producer working-tree dirt from a clean immutable checkpoint', async () => {
  const working = await loadBootstrap();
  assert.deepEqual(validatePhase09Snapshot(working, { stage: 'bootstrap', mode: 'working-tree' }), []);
  const checkpoint = await loadBootstrap();
  checkpoint.git = cleanGit();
  checkpoint.repositoryCommittedInventory = [...checkpoint.phase09Paths];
  const errors = validatePhase09Snapshot(checkpoint, { stage: 'bootstrap', mode: 'checkpoint' });
  assert.equal(codes(errors).includes('GIT_BOOTSTRAP_DIRT'), false, JSON.stringify(errors, null, 2));
  assert.equal(codes(errors).includes('GIT_CHECKPOINT_CLEAN'), false, JSON.stringify(errors, null, 2));
});

test('audit remains closed while the real preserved Task 01 review is failed and unrepaired', async () => {
  const snapshot = await loadRepositorySnapshot(REPO, {
    stage: 'audit', git: cleanGit(), github: await bootstrapGithub(),
  });
  expectCode(validatePhase09Snapshot(snapshot, { stage: 'audit', mode: 'checkpoint', relaxMissingStageArtifacts: true }), 'TASK01_REVIEW_NOT_ACCEPTED');
});

test('durably binds the genuine initial missing-validator RED without rewriting history', () => {
  assert.equal(INITIAL_RED_EVIDENCE.schema, 'mle-phase-09-initial-red-evidence/v1');
  assert.equal(INITIAL_RED_EVIDENCE.testPath, `${BOOK}/validate-phase-09.test.mjs`);
  assert.equal(INITIAL_RED_EVIDENCE.testBytes, 15224);
  assert.equal(INITIAL_RED_EVIDENCE.testSha256, 'b60c9abb891f8aa90a92a411036e867b3d4b0604c745fd79accb2ab1021b959e');
  assert.equal(INITIAL_RED_EVIDENCE.command, `node --test ${BOOK}/validate-phase-09.test.mjs`);
  assert.equal(INITIAL_RED_EVIDENCE.exitCode, 1);
  assert.equal(INITIAL_RED_EVIDENCE.errorCode, 'ERR_MODULE_NOT_FOUND');
  assert.match(INITIAL_RED_EVIDENCE.output, /Cannot find module .*validate-phase-09\.mjs/);
  assert.match(INITIAL_RED_EVIDENCE.output, /# tests 1[\s\S]*# pass 0[\s\S]*# fail 1/);
  assert.equal(sha256(INITIAL_RED_EVIDENCE.output), INITIAL_RED_EVIDENCE.outputSha256);
  assert.equal(INITIAL_RED_EVIDENCE.green.command, `node --test ${BOOK}/validate-phase-09.test.mjs`);
  assert.equal(INITIAL_RED_EVIDENCE.green.exitCode, 0);
  assert.equal(INITIAL_RED_EVIDENCE.green.fail, 0);
  const evidence = buildTask01Evidence({
    files: {
      [`${BOOK}/validate-phase-09.mjs`]: record('validator bytes\n'),
      [`${BOOK}/validate-phase-09.test.mjs`]: record('test bytes\n'),
    },
  });
  assert.equal(evidence.green.tests, 136);
  assert.equal(evidence.green.pass, 136);
  assert.deepEqual(evidence.green.artifacts, [
    { path: `${BOOK}/validate-phase-09.mjs`, sha256: record('validator bytes\n').sha256, bytes: 16 },
    { path: `${BOOK}/validate-phase-09.test.mjs`, sha256: record('test bytes\n').sha256, bytes: 11 },
  ]);
});

test('replays the exact historical initial test bytes without a validator and reproduces ERR_MODULE_NOT_FOUND', async () => {
  const source = recoverInitialRedTestSource();
  assert.equal(Buffer.byteLength(source), 15224);
  assert.equal(sha256(source), 'b60c9abb891f8aa90a92a411036e867b3d4b0604c745fd79accb2ab1021b959e');
  const fixture = await mkdtemp(join(tmpdir(), 'mle-p09-initial-red-'));
  const testPath = join(fixture, INITIAL_RED_EVIDENCE.testPath);
  try {
    await mkdir(dirname(testPath), { recursive: true });
    await writeFile(testPath, source);
    const env = { ...process.env };
    delete env.NODE_TEST_CONTEXT;
    let failure;
    try {
      await execFileAsync(process.execPath, ['--test', INITIAL_RED_EVIDENCE.testPath], { cwd: fixture, env });
    } catch (caught) {
      failure = caught;
    }
    assert.ok(failure, 'historical test unexpectedly passed without its validator');
    assert.equal(failure.code, 1);
    const output = `${failure.stdout ?? ''}${failure.stderr ?? ''}`;
    assert.match(output, /ERR_MODULE_NOT_FOUND/);
    assert.match(output, /validate-phase-09\.mjs/);
    assert.match(output, /# tests 1[\s\S]*# pass 0[\s\S]*# fail 1/);
  } finally {
    await rm(fixture, { recursive: true, force: true });
  }
});

test('bootstrap permits the preserved Task 01 review but no QA output or final verification', async (t) => {
  const paths = [
    `${BOOK}/qa/coverage-depth.md`,
    `${BOOK}/qa/finding-register.json`,
    FINAL_VERIFICATION,
  ];
  for (const path of paths) await t.test(path, async () => {
    const snapshot = await loadBootstrap();
    snapshot.phase09Paths.push(path);
    snapshot.files[path] = record('{}\n');
    expectCode(validatePhase09Snapshot(snapshot, { stage: 'bootstrap' }), 'STAGE_PATH_FORBIDDEN');
  });
  const snapshot = await loadBootstrap();
  assert.equal(snapshot.phase09Paths.includes(TASK01_REVIEW), true);
});

test('parses the real failed Task 01 Markdown JSON block and binds its reviewed checkpoint', async () => {
  const snapshot = await loadRepositorySnapshot(REPO, { stage: 'bootstrap', git: cleanGit(), github: await bootstrapGithub() });
  const parsed = parseReviewMarkdown(snapshot.files[TASK01_REVIEW].text);
  assert.equal(parsed.records.length, 1);
  assert.deepEqual(parsed.errors, []);
  assert.equal(parsed.records[0].taskId, 'TASK-01');
  assert.equal(parsed.records[0].specVerdict, 'SPEC COMPLIANCE FAIL');
  assert.equal(parsed.reviewedCheckpoint, '025f6bdd6310f6d6d23e8ab30cf91759f82e1fea');
  assert.equal(codes(validateLoadedReviews(snapshot, { stage: 'bootstrap', mode: 'checkpoint' })).includes('REVIEW_ARTIFACT_BINDING'), false);
});

test('loaded review Markdown rejects malformed, forged, missing, wrong-reviewer, and rebound records', async (t) => {
  const cases = [
    ['malformed JSON', (text) => text.replace('"schema": "mle-phase-09-review/v1"', '"schema": '), 'REVIEW_MARKDOWN_JSON'],
    ['wrong reviewer', (text) => text.replace('"reviewerIdentity": "/root/mle_p9_bootstrap_review"', '"reviewerIdentity": "/root"'), 'REVIEW_IDENTITY'],
    ['forged hash', (text) => text.replace('"sha256": "3b256a6d', '"sha256": "0b256a6d'), 'REVIEW_ARTIFACT_BINDING'],
    ['missing binding', (text) => text.replace('    { "path": "docs/superpowers/specs/2026-08-23-machine-learning-engineer-whole-book-qa-design.md", "sha256": "3b256a6dac36b31e39e9a402f48a8641195b177fcf083e4ee65cc53ce2fda3b5" },\n', ''), 'REVIEW_ARTIFACT_SET'],
    ['rebound path', (text) => text.replace('docs/superpowers/specs/2026-08-23-machine-learning-engineer-whole-book-qa-design.md', `${BOOK}/validate-phase-09.mjs`), 'REVIEW_ARTIFACT_SET'],
    ['contradictory terminal verdict', (text) => text.replace(/SPEC COMPLIANCE FAIL\nQUALITY CHANGES REQUESTED\n$/, 'SPEC COMPLIANCE PASS\nQUALITY APPROVED\n'), 'REVIEW_MARKDOWN_VERDICT'],
    ['missing terminal verdict', (text) => text.replace(/\nSPEC COMPLIANCE FAIL\nQUALITY CHANGES REQUESTED\n$/, '\n'), 'REVIEW_MARKDOWN_VERDICT'],
    ['extra terminal verdict', (text) => text.replace(/SPEC COMPLIANCE FAIL\nQUALITY CHANGES REQUESTED\n$/, 'SPEC COMPLIANCE PASS\nQUALITY APPROVED\nSPEC COMPLIANCE FAIL\nQUALITY CHANGES REQUESTED\n'), 'REVIEW_MARKDOWN_VERDICT'],
    ['PASS-ish terminal verdict', (text) => text.replace(/SPEC COMPLIANCE FAIL\nQUALITY CHANGES REQUESTED\n$/, 'SPEC COMPLIANCE PASS WITH NOTES\nQUALITY APPROVED\n'), 'REVIEW_MARKDOWN_VERDICT'],
  ];
  for (const [name, mutate, code] of cases) await t.test(name, async () => {
    const snapshot = await loadRepositorySnapshot(REPO, { stage: 'audit', git: cleanGit(), github: await bootstrapGithub() });
    snapshot.files[TASK01_REVIEW] = record(mutate(snapshot.files[TASK01_REVIEW].text));
    expectCode(validateLoadedReviews(snapshot, { stage: 'audit', mode: 'checkpoint' }), code);
  });
});

test('base and paired-repair Markdown terminal verdicts exactly mirror their JSON records', async (t) => {
  const snapshot = await loadRepositorySnapshot(REPO, { stage: 'audit', git: cleanGit(), github: await bootstrapGithub() });
  const acceptedBase = snapshot.files[TASK01_REVIEW].text
    .replace('"specVerdict": "SPEC COMPLIANCE FAIL"', '"specVerdict": "SPEC COMPLIANCE PASS"')
    .replace('"qualityVerdict": "QUALITY CHANGES REQUESTED"', '"qualityVerdict": "QUALITY APPROVED"')
    .replace(/SPEC COMPLIANCE FAIL\nQUALITY CHANGES REQUESTED\n$/, 'SPEC COMPLIANCE PASS\nQUALITY APPROVED\n');
  assert.deepEqual(parseReviewMarkdown(acceptedBase).errors, []);

  for (const [name, mutate] of [
    ['contradictory repair terminal verdict', (text) => text.replace(/SPEC COMPLIANCE PASS\nQUALITY APPROVED\n$/, 'SPEC COMPLIANCE FAIL\nQUALITY CHANGES REQUESTED\n')],
    ['missing repair terminal verdict', (text) => text.replace(/\nSPEC COMPLIANCE PASS\nQUALITY APPROVED\n$/, '\n')],
    ['extra repair terminal verdict', (text) => text.replace(/SPEC COMPLIANCE PASS\nQUALITY APPROVED\n$/, 'SPEC COMPLIANCE FAIL\nQUALITY CHANGES REQUESTED\nSPEC COMPLIANCE PASS\nQUALITY APPROVED\n')],
    ['PASS-ish repair terminal verdict', (text) => text.replace(/SPEC COMPLIANCE PASS\nQUALITY APPROVED\n$/, 'SPEC COMPLIANCE PASS WITH NOTES\nQUALITY APPROVED\n')],
  ]) await t.test(name, () => {
    const parsed = parseReviewMarkdown(mutate(task01RepairMarkdown(snapshot)));
    expectCode(parsed.errors, 'REVIEW_MARKDOWN_VERDICT');
  });
});

function task01RepairMarkdown(snapshot) {
  const artifacts = REVIEW_CONTRACTS[TASK01_REVIEW].artifacts.map((path) => ({ path, sha256: snapshot.files[path].sha256 }));
  const repair = {
    schema: 'mle-phase-09-review-repair/v1', taskId: 'TASK-01',
    producerIdentity: '/root/mle_p9_bootstrap', reviewerIdentity: '/root/mle_p9_bootstrap_review',
    reviewedAt: '2026-08-23T16:30:00+05:30', priorReviewPath: TASK01_REVIEW,
    priorReviewSha256: snapshot.files[TASK01_REVIEW].sha256, artifactBindings: artifacts,
    reacceptedBy: '/root/mle_p9_bootstrap_review', reacceptedAt: '2026-08-23T16:31:00+05:30',
    specVerdict: 'SPEC COMPLIANCE PASS', qualityVerdict: 'QUALITY APPROVED',
  };
  return `# Task 01 paired repair\n\n\`\`\`json\n${JSON.stringify(repair, null, 2)}\n\`\`\`\n\nSPEC COMPLIANCE PASS\nQUALITY APPROVED\n`;
}

test('a committed exact paired same-reviewer repair can open audit without erasing the failed base', async () => {
  const snapshot = await loadRepositorySnapshot(REPO, { stage: 'audit', git: cleanGit(), github: await bootstrapGithub() });
  const text = task01RepairMarkdown(snapshot);
  snapshot.files[TASK01_REPAIR] = record(text);
  snapshot.phase09Paths.push(TASK01_REPAIR);
  snapshot.reviewInventory.push(TASK01_REPAIR);
  snapshot.repositoryCommittedInventory.push(TASK01_REPAIR);
  const errors = validateLoadedReviews(snapshot, { stage: 'audit', mode: 'checkpoint' });
  assert.deepEqual(errors, []);
  assert.match(snapshot.files[TASK01_REVIEW].text, /SPEC COMPLIANCE FAIL/);
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

async function realInventoryFixture() {
  const root = await mkdtemp(join(tmpdir(), 'mle-p9-inventory-'));
  const archive = join(root, 'repo.tar');
  await execFileAsync('git', ['archive', '--format=tar', '--output', archive, 'HEAD'], { cwd: REPO });
  await execFileAsync('tar', ['-xf', archive, '-C', root]);
  for (const name of ['validate-phase-09.mjs', 'validate-phase-09.test.mjs']) {
    await cp(join(REPO, BOOK, name), join(root, BOOK, name));
  }
  await execFileAsync('git', ['init', '-q'], { cwd: root });
  await execFileAsync('git', ['add', '.'], { cwd: root });
  await execFileAsync('git', ['-c', 'user.name=fixture', '-c', 'user.email=fixture@example.invalid', 'commit', '-qm', 'checkpoint'], { cwd: root });
  return root;
}

test('real filesystem and committed-tree inventories reject forbidden leakage independent of Git dirt', async (t) => {
  const root = await realInventoryFixture();
  t.after(async () => rm(root, { recursive: true, force: true }));
  const untracked = 'public/images/machine-learning-engineering/untracked.png';
  await mkdir(dirname(join(root, untracked)), { recursive: true });
  await writeFile(join(root, untracked), 'not-an-image\n');
  let snapshot = await loadRepositorySnapshot(root, { stage: 'bootstrap', git: cleanGit(), github: await bootstrapGithub(root) });
  snapshot.git.changedPaths = [];
  expectCode(validatePhase09Snapshot(snapshot, { stage: 'bootstrap', mode: 'checkpoint' }), 'STOP_BOUNDARY');

  await rm(join(root, untracked));
  const committed = 'output/machine-learning-engineering-committed.pdf';
  await mkdir(dirname(join(root, committed)), { recursive: true });
  await writeFile(join(root, committed), 'not-a-pdf\n');
  await execFileAsync('git', ['add', committed], { cwd: root });
  await execFileAsync('git', ['-c', 'user.name=fixture', '-c', 'user.email=fixture@example.invalid', 'commit', '-qm', 'forbidden'], { cwd: root });
  snapshot = await loadRepositorySnapshot(root, { stage: 'bootstrap', git: cleanGit(), github: await bootstrapGithub(root) });
  snapshot.git.changedPaths = [];
  expectCode(validatePhase09Snapshot(snapshot, { stage: 'bootstrap', mode: 'checkpoint' }), 'STOP_BOUNDARY');
});

test('current closed Phase 08 verification binds actual artifact bytes rather than trusting labels', async () => {
  const snapshot = await loadBootstrap();
  const bound = snapshot.phase08Verification.artifacts.find((item) => item.path === `${BOOK}/manuscript/manuscript-register.json`);
  assert.equal(bound.sha256, snapshot.files[bound.path].sha256);
  snapshot.files[bound.path].sha256 = '0'.repeat(64);
  expectCode(validatePhase09Snapshot(snapshot, { stage: 'bootstrap' }), 'PHASE08_CURRENT_BINDING');
});

test('canonical Phase 08 bytes stay exact unless an accepted finding freeze and revision entry authorize replacement', async (t) => {
  const path = `${BOOK}/manuscript/chapter-01.md`;
  const snapshot = await loadBootstrap();
  const before = snapshot.phase08Verification.artifacts.find((item) => item.path === path).sha256;
  snapshot.files[path] = record(`${snapshot.files[path].text}\nAuthorized editorial repair fixture.\n`);
  expectCode(validateCanonicalBindings(snapshot, { stage: 'repair', findingFreezeAccepted: false }), 'PHASE08_CURRENT_BINDING');

  const findingRegister = {
    schema: 'mle-phase-09-finding-register/v1',
    openingFindings: KNOWN_OPENING_FINDINGS.map(({ id, audit }) => ({ id, audit, disposition: 'open', evidence: ['audit'] })),
    findings: [{ id: 'P09-OPEN-01', disposition: 'accepted', path }],
  };
  const ledger = {
    schema: 'mle-phase-09-revision-ledger/v1', entries: [{
      findingId: 'P09-OPEN-01', path, beforeSha256: before, afterSha256: snapshot.files[path].sha256,
      reason: 'Accepted reader-facing factory leakage repair', affectedGraphProjections: ['chapter-01'],
      verificationCommands: ['node --test validate-phase-09.test.mjs'], producerIdentity: '/root/mle_p9_integration',
      reviewerIdentity: '/root/mle_p9_integration_review', disposition: 'accepted',
    }],
  };
  snapshot.files[`${BOOK}/qa/finding-register.json`] = record(`${JSON.stringify(findingRegister)}\n`);
  snapshot.files[`${BOOK}/qa/revision-ledger.json`] = record(`${JSON.stringify(ledger)}\n`);
  assert.deepEqual(validateCanonicalBindings(snapshot, { stage: 'repair', findingFreezeAccepted: true }), []);

  await t.test('an unchanged/unlisted second artifact still cannot drift', () => {
    const second = `${BOOK}/manuscript/chapter-02.md`;
    snapshot.files[second] = record(`${snapshot.files[second].text}\nunlisted drift\n`);
    expectCode(validateCanonicalBindings(snapshot, { stage: 'repair', findingFreezeAccepted: true }), 'PHASE08_CURRENT_BINDING');
  });
});
