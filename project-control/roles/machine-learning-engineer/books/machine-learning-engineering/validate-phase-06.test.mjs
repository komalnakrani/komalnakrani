import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { mkdir, mkdtemp, rm, symlink, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  PHASE06_ALLOWED_PATHS,
  buildExpectedVerification,
  computeIntegrationContractHash,
  loadPhase06Bundle,
  phase06ExternalInventoryDigest,
  scanPhase06AuxiliaryRoots,
  validateCore,
  validatePhase06,
} from './validate-phase-06.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../../../../..');
const canonical = await loadPhase06Bundle(root);
const clone = (value) => structuredClone(value);
const sha256 = (value) => createHash('sha256').update(value).digest('hex');

function codes(result) {
  return result.errors.map((item) => item.code);
}

function expectCode(result, code) {
  assert.equal(result.ok, false);
  assert.ok(codes(result).includes(code), `${code} missing from ${JSON.stringify(result.errors, null, 2)}`);
}

function finalStageFixture() {
  const bundle = clone(canonical);
  const task05 = 'project-control/roles/machine-learning-engineer/reviews/phase-06/task-05-canonical-integration.md';
  const task06 = 'project-control/roles/machine-learning-engineer/reviews/phase-06/task-06-hostile-integration.md';
  const validator = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.mjs';
  const tests = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.test.mjs';
  bundle.files[task06] = {
    text: `Task 06 binds ${bundle.files[validator].sha256}, ${bundle.files[tests].sha256}, and ${bundle.files[task05].sha256}.\n\nSPEC COMPLIANCE PASS\nQUALITY APPROVED\n`,
    sha256: '6'.repeat(64),
  };
  bundle.files['project-control/roles/machine-learning-engineer/ROLE-STATE.md'].text = [
    'Current global phase: Phase 06 source and bounded case-study research complete',
    'Last completed child issue: [#83 — Phase 06](https://example.test/83)',
    'Active child issue: none',
    '- [x] 06 source and case-study research — complete',
    '- [ ] 07 chapter blueprints — sole next gate, inactive',
  ].join('\n');
  bundle.files['project-control/roles/machine-learning-engineer/issues/root.md'].text = [
    'Last completed child: [#83 — Phase 06](https://example.test/83)',
    'Active child: none',
    '- [x] 06 source and case-study research — complete',
    '- [ ] 07 chapter blueprints — sole next gate, inactive',
  ].join('\n');
  bundle.files['project-control/roles/machine-learning-engineer/issues/phase-06-source-research.md'].text = [
    'Status: complete; live child #83 is closed with status:done.',
    '- [x] Accepted package',
    'Phase 07 chapter blueprints is the sole next gate and is inactive.',
  ].join('\n');
  bundle.files['project-control/role-factory/FACTORY-STATE.md'].text = [
    'Machine Learning Engineer Phase 06 source and bounded case-study research: complete.',
    'Last completed child: #83.',
    'Active child: none.',
    'Phase 07 chapter blueprints: sole next gate, inactive.',
    'Catalog position 6: not started.',
  ].join('\n');
  for (const relative of [
    'project-control/roles/machine-learning-engineer/ROLE-STATE.md',
    'project-control/roles/machine-learning-engineer/issues/root.md',
    'project-control/roles/machine-learning-engineer/issues/phase-06-source-research.md',
    'project-control/role-factory/FACTORY-STATE.md',
  ]) bundle.files[relative].sha256 = sha256(bundle.files[relative].text);
  bundle.verification = buildExpectedVerification(bundle);
  bundle.files['project-control/roles/machine-learning-engineer/books/machine-learning-engineering/phase-06-verification.json'] = { text: JSON.stringify(bundle.verification), sha256: 'not-self-bound' };
  return bundle;
}

test('canonical Phase 06 core passes before lifecycle reviews', () => {
  const result = validateCore(canonical);
  assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2));
  assert.deepEqual(result.counts, {
    sources: 46,
    claims: 63,
    cases: 12,
    packs: 21,
    sourceClaimEdges: 160,
    sourceCaseUses: 34,
    csvRows: 63,
    chapters: 21,
  });
});

test('source register rejects unknown top-level and record properties', async (t) => {
  await t.test('top level', () => {
    const bundle = clone(canonical);
    bundle.sourceRegister.unknown = true;
    expectCode(validateCore(bundle), 'SOURCE_TOP_LEVEL_KEYS');
  });
  await t.test('record', () => {
    const bundle = clone(canonical);
    bundle.sourceRegister.sources[0].unknown = true;
    expectCode(validateCore(bundle), 'SOURCE_RECORD_KEYS');
  });
});

test('source IDs and count are exact and contiguous', async (t) => {
  await t.test('count', () => {
    const bundle = clone(canonical);
    bundle.sourceRegister.sourceCount = 45;
    expectCode(validateCore(bundle), 'SOURCE_COUNT');
  });
  await t.test('identity', () => {
    const bundle = clone(canonical);
    bundle.sourceRegister.sources[4].sourceId = 'MLE-BSRC-999';
    expectCode(validateCore(bundle), 'SOURCE_IDS');
  });
});

const sourceEnums = {
  sourceClass: ['technical-primary', 'original-research', 'technical-official', 'standard-or-regulator', 'first-party-engineering-report', 'role-market-evidence'],
  authorityStatus: ['primary', 'official', 'standard', 'regulator', 'first-party', 'role-market'],
  stability: ['durable', 'versioned', 'living', 'volatile'],
  volatility: ['low', 'medium', 'high'],
  accessMethod: ['head', 'get', 'ranged-get', 'browser'],
  retrievalDisposition: ['accessible', 'redirected', 'access-restricted', 'browser-verified', 'replaced'],
  versionFinality: ['final', 'draft', 'living', 'withdrawn', 'not-versioned'],
  replacementDecision: ['retained', 'replaced', 'rejected'],
};

test('every source enum is closed', async (t) => {
  for (const field of Object.keys(sourceEnums)) {
    await t.test(field, () => {
      const bundle = clone(canonical);
      bundle.sourceRegister.sources[0][field] = 'invalid-enum';
      expectCode(validateCore(bundle), 'SOURCE_ENUM');
    });
  }
});

test('source currentness fields cannot be weakened', async (t) => {
  for (const field of ['verifiedAt', 'accessLimitation', 'recheckTrigger', 'finalUrl']) {
    await t.test(field, () => {
      const bundle = clone(canonical);
      bundle.sourceRegister.sources[0][field] = '';
      expectCode(validateCore(bundle), 'SOURCE_CURRENTNESS');
    });
  }
  await t.test('browser status', () => {
    const bundle = clone(canonical);
    const source = bundle.sourceRegister.sources.find((item) => item.retrievalDisposition === 'browser-verified');
    source.httpStatus = 200;
    expectCode(validateCore(bundle), 'SOURCE_BROWSER_STATUS');
  });
});

test('claim register rejects unknown properties and count drift', async (t) => {
  await t.test('top level', () => {
    const bundle = clone(canonical);
    bundle.claimRegister.extra = true;
    expectCode(validateCore(bundle), 'CLAIM_TOP_LEVEL_KEYS');
  });
  await t.test('record', () => {
    const bundle = clone(canonical);
    bundle.claimRegister.claims[0].extra = true;
    expectCode(validateCore(bundle), 'CLAIM_RECORD_KEYS');
  });
  await t.test('count', () => {
    const bundle = clone(canonical);
    bundle.claimRegister.claimCount = 62;
    expectCode(validateCore(bundle), 'CLAIM_COUNT');
  });
});

test('claim allocation is exactly three formulaic IDs per chapter', async (t) => {
  await t.test('wrong ID', () => {
    const bundle = clone(canonical);
    bundle.claimRegister.claims[8].claimId = 'MLE-BCLM-999';
    expectCode(validateCore(bundle), 'CLAIM_IDS');
  });
  await t.test('wrong chapter', () => {
    const bundle = clone(canonical);
    bundle.claimRegister.claims[8].chapterId = 'MLE-CH-04';
    expectCode(validateCore(bundle), 'CLAIM_ALLOCATION');
  });
});

test('claim enums are closed', async (t) => {
  for (const field of ['claimClass', 'confidence', 'durability']) {
    await t.test(field, () => {
      const bundle = clone(canonical);
      bundle.claimRegister.claims[0][field] = 'invalid-enum';
      expectCode(validateCore(bundle), 'CLAIM_ENUM');
    });
  }
  const bundle = clone(canonical);
  bundle.claimRegister.claims[0].confidence = 'low';
  expectCode(validateCore(bundle), 'CLAIM_ENUM');
});

test('every technical claim retains acceptable non-role support', () => {
  for (const claimClass of ['technical-doctrine','technical-method','technical-mechanism','bounded-case-inference']) {
    const bundle = clone(canonical);
    const claim = bundle.claimRegister.claims.find((item) => item.claimClass === claimClass);
    assert.ok(claim, `canonical claim class missing: ${claimClass}`);
    claim.sourceIds = ['MLE-BSRC-045'];
    expectCode(validateCore(bundle), 'CLAIM_TECHNICAL_SUPPORT');
  }
});

test('role-market sources remain isolated to role-market claims', () => {
  const bundle = clone(canonical);
  bundle.claimRegister.claims[1].sourceIds.push('MLE-BSRC-045');
  bundle.sourceRegister.sources.find((item) => item.sourceId === 'MLE-BSRC-045').claimIds.push('MLE-BCLM-002');
  expectCode(validateCore(bundle), 'ROLE_MARKET_LEAK');
});

test('source and claim reverse edges are exact', async (t) => {
  await t.test('claim forward only', () => {
    const bundle = clone(canonical);
    bundle.sourceRegister.sources.find((item) => item.sourceId === bundle.claimRegister.claims[0].sourceIds[0]).claimIds.shift();
    expectCode(validateCore(bundle), 'SOURCE_CLAIM_SYMMETRY');
  });
  await t.test('unused retained source', () => {
    const bundle = clone(canonical);
    const source = bundle.sourceRegister.sources[0];
    for (const claim of bundle.claimRegister.claims) claim.sourceIds = claim.sourceIds.filter((id) => id !== source.sourceId);
    source.claimIds = [];
    source.caseUses = [];
    expectCode(validateCore(bundle), 'SOURCE_UNUSED');
  });
});

test('all register references resolve and arrays remain duplicate-free', async (t) => {
  await t.test('dangling claim source', () => {
    const bundle = clone(canonical);
    bundle.claimRegister.claims[0].sourceIds[0] = 'MLE-BSRC-999';
    expectCode(validateCore(bundle), 'REFERENCE_DANGLING');
  });
  await t.test('duplicate claim source', () => {
    const bundle = clone(canonical);
    bundle.claimRegister.claims[0].sourceIds.push(bundle.claimRegister.claims[0].sourceIds[0]);
    expectCode(validateCore(bundle), 'ARRAY_DUPLICATE');
  });
  await t.test('invalid evidence role', () => {
    const bundle = clone(canonical);
    bundle.caseRegister.cases[5].sourceUses[0].evidenceRole = 'marketing';
    expectCode(validateCore(bundle), 'EVIDENCE_ROLE');
  });
});

test('case register rejects unknown properties, enums, and count drift', async (t) => {
  await t.test('unknown', () => {
    const bundle = clone(canonical);
    bundle.caseRegister.cases[0].extra = true;
    expectCode(validateCore(bundle), 'CASE_RECORD_KEYS');
  });
  await t.test('count', () => {
    const bundle = clone(canonical);
    bundle.caseRegister.caseCount = 11;
    expectCode(validateCore(bundle), 'CASE_COUNT');
  });
  for (const field of ['truthLabel', 'kind', 'status']) {
    await t.test(field, () => {
      const bundle = clone(canonical);
      bundle.caseRegister.cases[5][field] = 'invalid-enum';
      expectCode(validateCore(bundle), 'CASE_ENUM');
    });
  }
});

test('all five constructed case projections remain frozen', async (t) => {
  for (let index = 0; index < 5; index += 1) {
    for (const field of ['name', 'portId', 'truthLabel', 'realConstructedRule', 'chapterIds', 'decisionJob', 'authorityOwner', 'limitations', 'sourceResearchNeed', 'replaceabilityTest']) {
      await t.test(`CASE-0${index + 1} ${field}`, () => {
        const bundle = clone(canonical);
        const record = bundle.caseRegister.cases[index];
        record[field] = Array.isArray(record[field]) ? [...record[field], 'drift'] : `${record[field]} drift`;
        expectCode(validateCore(bundle), 'CASE_FROZEN_PROJECTION');
      });
    }
  }
});

test('case IDs are contiguous and architecture traces are complete', async (t) => {
  await t.test('case identity', () => {
    const bundle = clone(canonical);
    bundle.caseRegister.cases[6].caseId = 'CASE-99';
    expectCode(validateCore(bundle), 'CASE_IDS');
  });
  await t.test('architecture trace loss', () => {
    const bundle = clone(canonical);
    for (const claim of bundle.claimRegister.claims) claim.architectureClaimIds = claim.architectureClaimIds.filter((id) => id !== 'MLE-CLM-022');
    expectCode(validateCore(bundle), 'ARCHITECTURE_TRACE');
  });
  await t.test('port trace loss', () => {
    const bundle = clone(canonical);
    for (const claim of bundle.claimRegister.claims) claim.portIds = claim.portIds.filter((id) => id !== 'PORT-EDGE');
    expectCode(validateCore(bundle), 'ARCHITECTURE_TRACE');
  });
});

test('constructed cases cannot acquire reported outcomes', () => {
  const bundle = clone(canonical);
  bundle.caseRegister.cases[0].reportedFacts.push('invented real fact');
  expectCode(validateCore(bundle), 'CASE_CONSTRUCTED_TRUTH');
});

test('public cases require separated facts, outcomes, inferences, limits, and transfer', async (t) => {
  for (const field of ['reportedFacts', 'allowedInferences', 'limitations', 'transferRules']) {
    await t.test(field, () => {
      const bundle = clone(canonical);
      bundle.caseRegister.cases[5][field] = [];
      expectCode(validateCore(bundle), 'CASE_PUBLIC_EVIDENCE');
    });
  }
  await t.test('collapsed fact and inference', () => {
    const bundle = clone(canonical);
    bundle.caseRegister.cases[5].allowedInferences[0] = bundle.caseRegister.cases[5].reportedFacts[0];
    expectCode(validateCore(bundle), 'CASE_PUBLIC_DISTINCTION');
  });
});

test('claim/case and source/case edges are bidirectional', async (t) => {
  await t.test('claim/case', () => {
    const bundle = clone(canonical);
    bundle.caseRegister.cases[5].claimIds.shift();
    expectCode(validateCore(bundle), 'CLAIM_CASE_SYMMETRY');
  });
  await t.test('source/case', () => {
    const bundle = clone(canonical);
    bundle.caseRegister.cases[5].sourceUses.shift();
    expectCode(validateCore(bundle), 'SOURCE_CASE_SYMMETRY');
  });
});

test('claim CSV is exact and symmetric', async (t) => {
  await t.test('header', () => {
    const bundle = clone(canonical);
    bundle.csvText = bundle.csvText.replace('claim_id,', 'wrong_id,');
    expectCode(validateCore(bundle), 'CSV_HEADER');
  });
  await t.test('row count', () => {
    const bundle = clone(canonical);
    bundle.csvText = bundle.csvText.split('\n').slice(0, -2).join('\n') + '\n';
    expectCode(validateCore(bundle), 'CSV_ROWS');
  });
  await t.test('semantic cell', () => {
    const bundle = clone(canonical);
    bundle.csvText = bundle.csvText.replace('MLE-BCLM-001', 'MLE-BCLM-999');
    expectCode(validateCore(bundle), 'CSV_SYMMETRY');
  });
});

test('integration manifest binds exact registers and scratch inputs', async (t) => {
  await t.test('register hash', () => {
    const bundle = clone(canonical);
    bundle.integrationManifest.registers.sources.sha256 = '0'.repeat(64);
    expectCode(validateCore(bundle), 'MANIFEST_REGISTER_HASH');
  });
  await t.test('scratch hash', () => {
    const bundle = clone(canonical);
    bundle.integrationManifest.scratchInputs[0].sha256 = '0'.repeat(64);
    expectCode(validateCore(bundle), 'MANIFEST_SCRATCH_HASH');
  });
  await t.test('projection hash', () => {
    const bundle = clone(canonical);
    bundle.integrationManifest.integrationContractHash = '0'.repeat(64);
    expectCode(validateCore(bundle), 'MANIFEST_CONTRACT_HASH');
  });
  await t.test('self-reference exclusion', () => {
    const manifest = clone(canonical.integrationManifest);
    const before = computeIntegrationContractHash(manifest);
    manifest.generatedAt = '2099-01-01T00:00:00Z';
    manifest.packContract.reviewRequirement = 'changed outside projection';
    manifest.integrationContractHash = 'f'.repeat(64);
    assert.equal(computeIntegrationContractHash(manifest), before);
  });
});

test('manifest chapter assignment and pack contract are exact', async (t) => {
  await t.test('claim allocation', () => {
    const bundle = clone(canonical);
    bundle.integrationManifest.claimAllocation['MLE-CH-01'].pop();
    expectCode(validateCore(bundle), 'MANIFEST_CLAIM_ALLOCATION');
  });
  await t.test('chapter assignment', () => {
    const bundle = clone(canonical);
    bundle.integrationManifest.chapterAssignments['MLE-CH-01'].caseIds = [];
    expectCode(validateCore(bundle), 'MANIFEST_CHAPTER_ASSIGNMENTS');
  });
  await t.test('pack list', () => {
    const bundle = clone(canonical);
    bundle.integrationManifest.packContract.packs.pop();
    expectCode(validateCore(bundle), 'MANIFEST_PACK_CONTRACT');
  });
});

test('exactly 21 packs bind the frozen contract and exact claims', async (t) => {
  await t.test('missing pack', () => {
    const bundle = clone(canonical);
    delete bundle.packs['MLE-CH-01'];
    expectCode(validateCore(bundle), 'PACK_COUNT');
  });
  await t.test('wrong contract', () => {
    const bundle = clone(canonical);
    bundle.packs['MLE-CH-01'] = bundle.packs['MLE-CH-01'].replace(bundle.integrationManifest.integrationContractHash, '0'.repeat(64));
    expectCode(validateCore(bundle), 'PACK_CONTRACT_HASH');
  });
  await t.test('missing claim', () => {
    const bundle = clone(canonical);
    bundle.packs['MLE-CH-01'] = bundle.packs['MLE-CH-01'].replaceAll('MLE-BCLM-001', 'MLE-BCLM-999');
    expectCode(validateCore(bundle), 'PACK_CLAIMS');
  });
});

test('packs preserve architecture, source needs, handoff, case truth, and final disposition', async (t) => {
  for (const [label, needle, code] of [
    ['decision job', canonical.architecture.chapters[0].decisionJob, 'PACK_DECISION_JOB'],
    ['research need', canonical.architecture.chapters[0].sourceResearchNeeds[0], 'PACK_SOURCE_NEEDS'],
    ['handoff', canonical.architecture.chapters[0].phase06Handoff, 'PACK_PHASE06_HANDOFF'],
    ['milestone', canonical.architecture.chapters[0].milestone.id, 'PACK_MILESTONE'],
    ['disposition', 'Evidence-gap disposition: none release-blocking', 'PACK_DISPOSITION'],
  ]) {
    await t.test(label, () => {
      const bundle = clone(canonical);
      bundle.packs['MLE-CH-01'] = bundle.packs['MLE-CH-01'].replace(needle, 'removed');
      expectCode(validateCore(bundle), code);
    });
  }
});

test('packs preserve exact trace IDs, authority ceilings, and Phase 07 claim instructions', async (t) => {
  await t.test('boundary trace', () => {
    const bundle = clone(canonical);
    bundle.packs['MLE-CH-01'] = bundle.packs['MLE-CH-01'].replaceAll('BND-17', 'BND-99');
    expectCode(validateCore(bundle), 'PACK_ARCHITECTURE_TRACE');
  });
  await t.test('authority ceiling', () => {
    const bundle = clone(canonical);
    const ceiling = bundle.architecture.chapters[0].mleCeiling;
    bundle.packs['MLE-CH-01'] = bundle.packs['MLE-CH-01'].replace(ceiling, 'removed');
    expectCode(validateCore(bundle), 'PACK_AUTHORITY_CEILING');
  });
  await t.test('Phase 07 claim instruction', () => {
    const bundle = clone(canonical);
    const instruction = bundle.claimRegister.claims[0].phase07Instruction;
    bundle.packs['MLE-CH-01'] = bundle.packs['MLE-CH-01'].replace(instruction, 'removed');
    expectCode(validateCore(bundle), 'PACK_PHASE07_INSTRUCTION');
  });
});

test('reports and Phase 07 handoff bind every canonical identity while keeping Phase 07 inactive', async (t) => {
  await t.test('verification report missing source', () => {
    const bundle = clone(canonical);
    const relative = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/sources/verification-report.md';
    bundle.files[relative].text = bundle.files[relative].text.replaceAll('MLE-BSRC-046', 'MLE-BSRC-999');
    expectCode(validateCore(bundle), 'REPORT_SOURCE_COVERAGE');
  });
  await t.test('handoff missing instruction', () => {
    const bundle = clone(canonical);
    const relative = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/sources/phase-07-handoff.md';
    const instruction = bundle.claimRegister.claims[0].phase07Instruction;
    bundle.files[relative].text = bundle.files[relative].text.replace(instruction, 'removed');
    expectCode(validateCore(bundle), 'HANDOFF_INSTRUCTION_COVERAGE');
  });
  await t.test('handoff activates Phase 07', () => {
    const bundle = clone(canonical);
    const relative = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/sources/phase-07-handoff.md';
    bundle.files[relative].text = bundle.files[relative].text.replace('Phase 07 status: `INACTIVE', 'Phase 07 status: `ACTIVE');
    expectCode(validateCore(bundle), 'HANDOFF_PHASE07_HOLD');
  });
});

test('packs reject unfinished markers and forbidden media references', async (t) => {
  await t.test('marker', () => {
    const bundle = clone(canonical);
    bundle.packs['MLE-CH-01'] += '\nTO' + 'DO\n';
    expectCode(validateCore(bundle), 'PACK_MARKER');
  });
  await t.test('media', () => {
    const bundle = clone(canonical);
    bundle.packs['MLE-CH-01'] += '\nfigure.svg\n';
    expectCode(validateCore(bundle), 'PACK_MEDIA');
  });
});

test('bounded path inventory accepts only the frozen Phase 06 allowlist', async (t) => {
  assert.ok(PHASE06_ALLOWED_PATHS.includes('project-control/roles/machine-learning-engineer/books/machine-learning-engineering/sources/source-register.json'));
  await t.test('manuscript', () => {
    const bundle = clone(canonical);
    bundle.inventory.push('project-control/roles/machine-learning-engineer/manuscript/chapter-01.md');
    expectCode(validateCore(bundle), 'UNEXPECTED_PATH');
  });
  await t.test('publication', () => {
    const bundle = clone(canonical);
    bundle.inventory.push('content/publications/machine-learning-engineering/publication.json');
    expectCode(validateCore(bundle), 'UNEXPECTED_PATH');
  });
  await t.test('next role', () => {
    const bundle = clone(canonical);
    bundle.inventory.push('project-control/roles/ml-platform-engineer/ROLE-STATE.md');
    expectCode(validateCore(bundle), 'UNEXPECTED_PATH');
  });
});

test('external inventory digest changes for any non-allowlisted addition', () => {
  const before = phase06ExternalInventoryDigest(canonical.inventory);
  const after = phase06ExternalInventoryDigest([...canonical.inventory, 'artifacts/mle.pdf']);
  assert.notEqual(after, before);
});

test('top-level and symlink inventory cannot hide Phase 06 output', async (t) => {
  await t.test('unexpected top-level directory', () => {
    const bundle = clone(canonical);
    bundle.topLevelDirectories.push('machine-learning-engineering-release');
    expectCode(validateCore(bundle), 'UNEXPECTED_TOP_LEVEL');
  });
  await t.test('schema-root addition', () => {
    const bundle = clone(canonical);
    bundle.inventory.push('schemas/machine-learning-engineering-phase-06.json');
    expectCode(validateCore(bundle), 'UNEXPECTED_PATH');
  });
  await t.test('symlink addition', () => {
    const bundle = clone(canonical);
    bundle.inventory.push('content/publications/machine-learning-engineering#symlink');
    expectCode(validateCore(bundle), 'UNEXPECTED_PATH');
  });
  const isolated = await mkdtemp(path.join(os.tmpdir(), 'mle-phase06-loader-'));
  try {
    await mkdir(path.join(isolated, '.superpowers', 'sdd', '2026-08-18-machine-learning-engineer-phase-06'), { recursive: true });
    await mkdir(path.join(isolated, 'tmp'), { recursive: true });
    await mkdir(path.join(isolated, '.astro'), { recursive: true });
    await writeFile(path.join(isolated, 'tmp', 'machine-learning-engineering.pdf'), 'forbidden');
    await writeFile(path.join(isolated, '.astro', 'machine-learning-engineering.json'), 'forbidden');
    await symlink(path.join(isolated, 'tmp'), path.join(isolated, 'mle-link'));
    const scan = await scanPhase06AuxiliaryRoots(isolated);
    assert.ok(scan.ephemeralInventory.includes('tmp/machine-learning-engineering.pdf'));
    assert.ok(scan.ephemeralInventory.includes('.astro/machine-learning-engineering.json'));
    assert.deepEqual(scan.topLevelSymlinks, ['mle-link']);
  } finally {
    await rm(isolated, { recursive: true, force: true });
  }
});

test('lifecycle stages reject missing reviews, verification, or synchronized state', async (t) => {
  await t.test('pre-hostile review', () => {
    const bundle = clone(canonical);
    delete bundle.files['project-control/roles/machine-learning-engineer/reviews/phase-06/task-02-lane-a.md'];
    expectCode(validatePhase06(bundle, { stage: 'pre-hostile' }), 'REVIEW_MISSING');
  });
  await t.test('pre-close verification must be absent', () => {
    const bundle = clone(canonical);
    bundle.verification = { schema: 'mle-phase-06-verification/v1' };
    expectCode(validatePhase06(bundle, { stage: 'pre-close' }), 'VERIFICATION_PREMATURE');
  });
  await t.test('final-content state', () => {
    const bundle = clone(canonical);
    bundle.files['project-control/roles/machine-learning-engineer/ROLE-STATE.md'].text = 'stale state';
    expectCode(validatePhase06(bundle, { stage: 'final-content' }), 'STATE_ROLE_FINAL');
  });
  for (const [label, relative, replacement, code] of [
    ['active role state', 'project-control/roles/machine-learning-engineer/ROLE-STATE.md', 'Current global phase: stale', 'STATE_ROLE_ACTIVE'],
    ['active root state', 'project-control/roles/machine-learning-engineer/issues/root.md', 'Active child: none', 'STATE_ROOT_ACTIVE'],
    ['active local issue', 'project-control/roles/machine-learning-engineer/issues/phase-06-source-research.md', 'Status: complete', 'STATE_LOCAL_ISSUE_ACTIVE'],
    ['active factory state', 'project-control/role-factory/FACTORY-STATE.md', 'Active child: none', 'STATE_FACTORY_ACTIVE'],
  ]) {
    await t.test(label, () => {
      const bundle = clone(canonical);
      bundle.files[relative].text = replacement;
      expectCode(validatePhase06(bundle, { stage: 'pre-hostile' }), code);
    });
  }
});

test('review acceptance requires an exact final verdict and current artifact bindings', async (t) => {
  await t.test('historical verdict is insufficient', () => {
    const bundle = clone(canonical);
    const relative = 'project-control/roles/machine-learning-engineer/reviews/phase-06/task-02-lane-a.md';
    bundle.files[relative].text += '\nSPEC COMPLIANCE FAIL\nQUALITY CHANGES REQUESTED\n';
    expectCode(validatePhase06(bundle, { stage: 'pre-hostile' }), 'REVIEW_MISSING');
  });
  await t.test('a historical failure requires a paired repair even after a final pass', () => {
    const bundle = clone(canonical);
    const relative = 'project-control/roles/machine-learning-engineer/reviews/phase-06/task-05-canonical-integration.md';
    bundle.files[relative].text = `SPEC COMPLIANCE FAIL\nQUALITY CHANGES REQUESTED\n\n${bundle.files[relative].text}`;
    expectCode(validatePhase06(bundle, { stage: 'pre-hostile' }), 'REVIEW_REPAIR_MISSING');
  });
  await t.test('stale manifest hash is rejected', () => {
    const bundle = clone(canonical);
    const relative = 'project-control/roles/machine-learning-engineer/reviews/phase-06/task-02-lane-a.md';
    const repair = 'project-control/roles/machine-learning-engineer/reviews/phase-06/task-02-lane-a-repair.md';
    const current = bundle.files['project-control/roles/machine-learning-engineer/books/machine-learning-engineering/sources/integration-manifest.json'].sha256;
    bundle.files[relative].text = bundle.files[relative].text.replaceAll(current, '0'.repeat(64));
    bundle.files[repair].text = bundle.files[repair].text.replaceAll(current, '0'.repeat(64));
    expectCode(validatePhase06(bundle, { stage: 'pre-hostile' }), 'REVIEW_ARTIFACT_HASH');
  });
  await t.test('paired repair hash is required', () => {
    const bundle = clone(canonical);
    const relative = 'project-control/roles/machine-learning-engineer/reviews/phase-06/task-02-lane-a.md';
    const repair = 'project-control/roles/machine-learning-engineer/reviews/phase-06/task-02-lane-a-repair.md';
    bundle.files[relative].text = bundle.files[relative].text.replaceAll(bundle.files[repair].sha256, '0'.repeat(64));
    expectCode(validatePhase06(bundle, { stage: 'pre-hostile' }), 'REVIEW_REPAIR_HASH');
  });
});

test('final verification manifest rejects every required evidence family', async (t) => {
  const verificationPath = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering/phase-06-verification.json';
  const ready = finalStageFixture();
  const valid = clone(ready.verification);
  const clean = validatePhase06(ready, { stage: 'final-content' });
  assert.equal(clean.ok, true, JSON.stringify(clean.errors, null, 2));
  const invalidDate = clone(ready);
  invalidDate.verification.generatedAt = '2026-99-99T99:99:99Z';
  expectCode(validatePhase06(invalidDate, { stage: 'final-content' }), 'VERIFICATION_KEYS');
  for (const [relative, contradiction, code] of [
    ['project-control/roles/machine-learning-engineer/ROLE-STATE.md', '\nPhase 07 chapter blueprints active\nActive child issue: [#999](https://example.test/999)\n', 'STATE_ROLE_FINAL'],
    ['project-control/roles/machine-learning-engineer/issues/root.md', '\nPhase 07 chapter blueprints active\nActive child: [#999](https://example.test/999)\n', 'STATE_ROOT_FINAL'],
    ['project-control/roles/machine-learning-engineer/issues/phase-06-source-research.md', '\nStatus: active; live child #999 is open with status:in-progress.\n', 'STATE_LOCAL_ISSUE_FINAL'],
    ['project-control/role-factory/FACTORY-STATE.md', '\nActive child: #999.\nPhase 07 chapter blueprints: active.\n', 'STATE_FACTORY_FINAL'],
  ]) {
    const contradictory = clone(ready);
    contradictory.files[relative].text += contradiction;
    contradictory.verification = buildExpectedVerification(contradictory);
    expectCode(validatePhase06(contradictory, { stage: 'final-content' }), code);
  }
  const probes = [
    ['unknown property', (v) => { v.extra = true; }, 'VERIFICATION_KEYS'],
    ['counts', (v) => { v.counts.claims = 62; }, 'VERIFICATION_COUNTS'],
    ['artifacts', (v) => { v.artifacts.pop(); }, 'VERIFICATION_ARTIFACTS'],
    ['reviews', (v) => { v.reviews.pop(); }, 'VERIFICATION_REVIEWS'],
    ['frozen cases', (v) => { v.frozenCases[0].sha256 = 'f'.repeat(64); }, 'VERIFICATION_FROZEN_CASES'],
    ['trace', (v) => { v.architectureTrace.claims.pop(); }, 'VERIFICATION_TRACE'],
    ['currentness', (v) => { v.currentness.browserVerified = 3; }, 'VERIFICATION_CURRENTNESS'],
    ['red evidence', (v) => { v.tdd.red.errorCode = 'wrong'; }, 'VERIFICATION_TDD'],
    ['green evidence', (v) => { v.tdd.green.fail = 1; }, 'VERIFICATION_TDD'],
    ['checks', (v) => { v.checks.pop(); }, 'VERIFICATION_CHECKS'],
    ['paths', (v) => { v.pathBoundaries.unexpectedPaths.push('extra'); }, 'VERIFICATION_PATHS'],
    ['state', (v) => { v.stateTransition.phase07 = 'active'; }, 'VERIFICATION_STATE'],
    ['github', (v) => { v.githubExpectations.childIssue.state = 'OPEN'; }, 'VERIFICATION_GITHUB'],
    ['next gate', (v) => { v.nextGate.status = 'active'; }, 'VERIFICATION_NEXT_GATE'],
  ];
  for (const [label, mutate, code] of probes) {
    await t.test(label, () => {
      const bundle = clone(ready);
      bundle.verification = clone(valid);
      bundle.files[verificationPath] = { text: JSON.stringify(bundle.verification), sha256: 'not-self-bound' };
      mutate(bundle.verification);
      expectCode(validatePhase06(bundle, { stage: 'final-content' }), code);
    });
  }
});

test('final stage requires clean synchronized git and exact live issue state', async (t) => {
  const base = { git: { branch: 'main', clean: true, head: 'a'.repeat(40), remoteMain: 'a'.repeat(40) }, github: { rootIssue: { number: 79, state: 'OPEN', labels: ['role:machine-learning-engineer','status:in-progress'] }, childIssue: { number: 83, state: 'CLOSED', labels: ['phase:06-research','role:machine-learning-engineer','status:done'] } } };
  const cleanBundle = finalStageFixture();
  cleanBundle.runtime = clone(base);
  const clean = validatePhase06(cleanBundle, { stage: 'final' });
  assert.equal(clean.ok, true, JSON.stringify(clean.errors, null, 2));
  for (const [label, mutate, code] of [
    ['dirty', (v) => { v.git.clean = false; }, 'FINAL_GIT'],
    ['remote drift', (v) => { v.git.remoteMain = 'b'.repeat(40); }, 'FINAL_GIT'],
    ['root closed', (v) => { v.github.rootIssue.state = 'CLOSED'; }, 'FINAL_GITHUB'],
    ['child open', (v) => { v.github.childIssue.state = 'OPEN'; }, 'FINAL_GITHUB'],
  ]) {
    await t.test(label, () => {
      const bundle = finalStageFixture();
      bundle.runtime = clone(base);
      mutate(bundle.runtime);
      expectCode(validatePhase06(bundle, { stage: 'final' }), code);
    });
  }
});

test('unknown lifecycle stage is rejected', () => {
  assert.throws(() => validatePhase06(canonical, { stage: 'unknown' }), /Unknown Phase 06 validation stage/);
});
