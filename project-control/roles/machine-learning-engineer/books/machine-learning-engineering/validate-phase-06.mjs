import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const BOOK = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering';
const ROLE = 'project-control/roles/machine-learning-engineer';
const REVIEW = `${ROLE}/reviews/phase-06`;
const SCRATCH = '.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-06';

const REGISTER_PATHS = {
  sources: `${BOOK}/sources/source-register.json`,
  claims: `${BOOK}/sources/claim-register.json`,
  cases: `${BOOK}/case-studies/case-study-register.json`,
  csv: `${BOOK}/sources/claim-to-chapter.csv`,
  manifest: `${BOOK}/sources/integration-manifest.json`,
  architecture: `${BOOK}/architecture.json`,
};

const PACK_PATHS = Array.from({ length: 21 }, (_, index) =>
  `${BOOK}/sources/research-packs/chapter-${String(index + 1).padStart(2, '0')}.md`);

const REVIEW_PATHS = [
  `${REVIEW}/task-01-bootstrap.md`,
  `${REVIEW}/task-01-bootstrap-repair.md`,
  `${REVIEW}/task-02-lane-a.md`,
  `${REVIEW}/task-02-lane-a-repair.md`,
  `${REVIEW}/task-03-lane-b.md`,
  `${REVIEW}/task-03-lane-b-repair.md`,
  `${REVIEW}/task-04-lane-c.md`,
  `${REVIEW}/task-04-lane-c-repair.md`,
  `${REVIEW}/task-05-canonical-integration.md`,
  `${REVIEW}/task-05-canonical-integration-repair.md`,
  `${REVIEW}/task-06-hostile-integration.md`,
  `${REVIEW}/task-06-hostile-integration-repair.md`,
];

export const PHASE06_ALLOWED_PATHS = [
  REGISTER_PATHS.sources, REGISTER_PATHS.claims, REGISTER_PATHS.cases,
  REGISTER_PATHS.csv, REGISTER_PATHS.manifest,
  `${BOOK}/sources/verification-report.md`,
  `${BOOK}/sources/phase-07-handoff.md`,
  `${BOOK}/validate-phase-06.mjs`,
  `${BOOK}/validate-phase-06.test.mjs`,
  `${BOOK}/phase-06-verification.json`,
  ...PACK_PATHS,
  ...REVIEW_PATHS,
];

const VERIFICATION_PATH = `${BOOK}/phase-06-verification.json`;
const VERIFICATION_ARTIFACT_PATHS = [
  REGISTER_PATHS.sources, REGISTER_PATHS.claims, REGISTER_PATHS.cases,
  REGISTER_PATHS.csv, REGISTER_PATHS.manifest,
  `${BOOK}/sources/verification-report.md`,
  `${BOOK}/sources/phase-07-handoff.md`,
  `${BOOK}/validate-phase-06.mjs`,
  `${BOOK}/validate-phase-06.test.mjs`,
  ...PACK_PATHS,
  `${ROLE}/ROLE-STATE.md`,
  `${ROLE}/issues/root.md`,
  `${ROLE}/issues/phase-06-source-research.md`,
  'project-control/role-factory/FACTORY-STATE.md',
];
const VERIFICATION_CHECKS = [
  'phase01_validator','phase01_tests','phase04_validator','phase04_tests',
  'phase05_validator','phase05_tests','phase06_tests','phase06_preclose',
  'phase06_final_content','marker_scan','whitespace_eof_audit','path_inventory',
  'diff_check','repository_check',
];
const PROHIBITED_KINDS = ['manuscript','blueprint','companion','media','publication','pdf','course','abhyaas','certification','question-bank','second-volume','next-role'];
const TOP_LEVEL_DIRECTORIES = ['.astro','.git','.superpowers','content','dist','docs','node_modules','output','project-control','public','schemas','scripts','src','tests','tmp','tools'];
const VERIFICATION_TOP_KEYS = ['schema','role','book','phase','generatedAt','counts','artifacts','reviews','frozenCases','architectureTrace','currentness','tdd','checks','pathBoundaries','stateTransition','githubExpectations','nextGate'];
const REVIEW_SPECS = [
  ['TASK-01','task-01-bootstrap',null],
  ['TASK-02','task-02-lane-a','task-02-lane-a-repair'],
  ['TASK-03','task-03-lane-b','task-03-lane-b-repair'],
  ['TASK-04','task-04-lane-c','task-04-lane-c-repair'],
  ['TASK-05','task-05-canonical-integration',null],
  ['TASK-06','task-06-hostile-integration',null],
];

const EXTERNAL_BASELINE_DIGEST = '666935f13e6aee676a3142b8c80a395adb56204dbb08abed9b42e51564a59c9d';
const ROLE_BASELINE_DIGEST = '02c1ff0b7ee4c9174f507511f88f2acf3c8719e96d5f71aa735bc7c564a397ec';
const EPHEMERAL_BASELINE_DIGEST = '7cfe18f9837363c9785e49728d1c3b8e060b5295dbc4763ff9d10d56d51146a3';
const SCRATCH_HASHES = [
  '8ca4398f0b6c520ab20bdca878801c54188bf961b242abacb724a9af51fb6e1b',
  '4c151bdac35728f11fa704c439215fba769dc4a788072c7ed31f0a6f502c5883',
  'bc3e22a1d73d4301ff570f1add7a90f7da18908126167ffa03f13be9c540ecfc',
];

const SOURCE_KEYS = ['sourceId','title','authorOrg','sourceClass','sourceType','publishedAt','version','canonicalUrl','finalUrl','authorityStatus','stability','volatility','verifiedAt','accessMethod','retrievalDisposition','httpStatus','versionFinality','accessLimitation','replacementDecision','recheckTrigger','supports','limitations','chapterIds','claimIds','caseUses'];
const SOURCE_TOP_KEYS = ['schema','role','book','architectureVersion','verifiedOn','sourceCount','sources'];
const CLAIM_KEYS = ['claimId','chapterId','chapterOrder','claimClass','statement','sourceIds','architectureClaimIds','boundaryIds','scenarioIds','domainIds','portIds','caseIds','confidence','limitations','durability','volatilityTreatment','phase07Instruction'];
const CLAIM_TOP_KEYS = ['schema','role','book','architectureVersion','claimCount','claims'];
const CASE_KEYS = ['caseId','name','portId','truthLabel','kind','realConstructedRule','problem','context','constraints','approach','tradeoffs','failuresOrRisks','reportedFacts','attributedOutcomes','allowedInferences','lessons','chapterIds','claimIds','sourceUses','decisionJob','authorityOwner','limitations','sourceResearchNeed','replaceabilityTest','transferRules','status'];
const CASE_TOP_KEYS = ['schema','role','book','architectureVersion','caseCount','cases'];

const SOURCE_ENUMS = {
  sourceClass: new Set(['technical-primary','original-research','technical-official','standard-or-regulator','first-party-engineering-report','role-market-evidence']),
  authorityStatus: new Set(['primary','official','standard','regulator','first-party','role-market']),
  stability: new Set(['durable','versioned','living','volatile']),
  volatility: new Set(['low','medium','high']),
  accessMethod: new Set(['head','get','ranged-get','browser']),
  retrievalDisposition: new Set(['accessible','redirected','access-restricted','browser-verified','replaced']),
  versionFinality: new Set(['final','draft','living','withdrawn','not-versioned']),
  replacementDecision: new Set(['retained','replaced','rejected']),
};
const CLAIM_ENUMS = {
  claimClass: new Set(['technical-doctrine','technical-method','technical-mechanism','bounded-case-inference','role-market-boundary']),
  confidence: new Set(['high','medium']),
  durability: new Set(['durable','contextual','volatile']),
};
const CASE_ENUMS = {
  truthLabel: new Set(['FICTIONAL SYNTHETIC CAPSTONE','CONSTRUCTED SATELLITE','PUBLIC REPORTED CASE']),
  kind: new Set(['constructed-capstone','constructed-satellite','public-method','public-production-pattern','public-standard','public-incident']),
  status: new Set(['constructed-frozen','verified']),
};
const EVIDENCE_ROLES = new Set(['doctrine','mechanism','reported-fact','attributed-outcome','limitation','transfer-context']);

const hash = (value) => createHash('sha256').update(value).digest('hex');
const digest = (value) => hash(JSON.stringify(value));
const uniqSorted = (values) => [...new Set(values ?? [])].sort();
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
const exactKeys = (value, expected) => value && same(Object.keys(value).sort(), [...expected].sort());
const nonempty = (value) => typeof value === 'string' && value.trim().length > 0;
const seq = (prefix, count, width = 3) => Array.from({ length: count }, (_, i) => `${prefix}${String(i + 1).padStart(width, '0')}`);
const add = (errors, code, pathName, message) => errors.push({ code, path: pathName, message });

function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === 'object') return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])]));
  return value;
}

export function computeIntegrationContractHash(manifest) {
  const projection = {
    schema: manifest?.schema,
    architecture: manifest?.architecture,
    scratchInputs: manifest?.scratchInputs,
    registers: manifest?.registers,
    sourceIds: manifest?.sourceIds,
    claimAllocation: manifest?.claimAllocation,
    caseIds: manifest?.caseIds,
    chapterAssignments: manifest?.chapterAssignments,
  };
  return hash(JSON.stringify(stable(projection)));
}

export function phase06ExternalInventoryDigest(inventory) {
  return digest(uniqSorted(inventory).filter((item) => !item.startsWith(`${ROLE}/`)));
}

export function phase06EphemeralInventoryDigest(inventory) {
  return digest(uniqSorted(inventory));
}

function roleBaselineDigest(inventory) {
  const allowed = new Set(PHASE06_ALLOWED_PATHS);
  return digest(uniqSorted(inventory).filter((item) => item.startsWith(`${ROLE}/`) && !allowed.has(item)));
}

async function walk(root, relative, output) {
  const absolute = path.join(root, relative);
  if (!existsSync(absolute)) return;
  for (const entry of await readdir(absolute, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules') continue;
    const next = path.posix.join(relative, entry.name);
    if (entry.isSymbolicLink()) output.push(`${next}#symlink`);
    else if (entry.isDirectory()) await walk(root, next, output);
    else if (entry.isFile()) output.push(next);
  }
}

async function readEntry(root, relative) {
  const absolute = path.join(root, relative);
  if (!existsSync(absolute)) return null;
  const text = await readFile(absolute, 'utf8');
  return { text, sha256: hash(text) };
}

export async function scanPhase06AuxiliaryRoots(root) {
  const rootEntries = await readdir(root, { withFileTypes: true });
  const topLevelDirectories = rootEntries.filter((entry) => entry.isDirectory()).map((entry) => entry.name).sort();
  const topLevelSymlinks = rootEntries.filter((entry) => entry.isSymbolicLink()).map((entry) => entry.name).sort();
  const scratchInventory = [];
  await walk(root, SCRATCH, scratchInventory);
  const ephemeralInventory = [];
  for (const relative of ['.superpowers','tmp','.astro']) await walk(root, relative, ephemeralInventory);
  return { topLevelDirectories, topLevelSymlinks, scratchInventory: uniqSorted(scratchInventory), ephemeralInventory: uniqSorted(ephemeralInventory) };
}

export async function loadPhase06Bundle(root) {
  const inventory = [];
  const roots = ['project-control','docs','schemas','src','tools','scripts','tests','public','content','dist','output','downloads','build','.output','artifacts','abhyaas','certification','question-bank'];
  for (const item of roots) await walk(root, item, inventory);
  const rootEntries = await readdir(root, { withFileTypes: true });
  const auxiliary = await scanPhase06AuxiliaryRoots(root);
  for (const entry of rootEntries) {
    if (entry.isFile()) inventory.push(entry.name);
  }
  const files = {};
  const filePaths = [...new Set([
    ...PHASE06_ALLOWED_PATHS,
    `${BOOK}/architecture.md`, `${BOOK}/architecture.json`, `${BOOK}/phase-05-verification.md`,
    `${ROLE}/ROLE-STATE.md`, `${ROLE}/issues/root.md`, `${ROLE}/issues/phase-06-source-research.md`,
    'project-control/role-factory/FACTORY-STATE.md',
  ])];
  for (const relative of filePaths) {
    const entry = await readEntry(root, relative);
    if (entry) files[relative] = entry;
  }
  const sourceRegister = JSON.parse((await readEntry(root, REGISTER_PATHS.sources)).text);
  const claimRegister = JSON.parse((await readEntry(root, REGISTER_PATHS.claims)).text);
  const caseRegister = JSON.parse((await readEntry(root, REGISTER_PATHS.cases)).text);
  const integrationManifest = JSON.parse((await readEntry(root, REGISTER_PATHS.manifest)).text);
  const architecture = JSON.parse((await readEntry(root, REGISTER_PATHS.architecture)).text);
  const csvText = (await readEntry(root, REGISTER_PATHS.csv)).text;
  const packs = {};
  for (let i = 0; i < PACK_PATHS.length; i += 1) {
    const entry = await readEntry(root, PACK_PATHS[i]);
    if (entry) packs[`MLE-CH-${String(i + 1).padStart(2, '0')}`] = entry.text;
  }
  const scratchInputs = [];
  for (const lane of ['a','b','c']) {
    const relative = `${SCRATCH}/lane-${lane}-discovery.json`;
    const entry = await readEntry(root, relative);
    if (entry) scratchInputs.push({ path: relative, sha256: entry.sha256, json: JSON.parse(entry.text) });
  }
  const verificationEntry = await readEntry(root, `${BOOK}/phase-06-verification.json`);
  const verification = verificationEntry ? JSON.parse(verificationEntry.text) : null;
  return { root, files, inventory: uniqSorted(inventory), ...auxiliary, sourceRegister, claimRegister, caseRegister, integrationManifest, architecture, csvText, packs, scratchInputs, verification };
}

function parseCsv(text) {
  const lines = String(text).trimEnd().split(/\r?\n/);
  return lines.map((line) => {
    const cells = []; let current = ''; let quoted = false;
    for (let i = 0; i < line.length; i += 1) {
      const ch = line[i];
      if (ch === '"' && quoted && line[i + 1] === '"') { current += '"'; i += 1; }
      else if (ch === '"') quoted = !quoted;
      else if (ch === ',' && !quoted) { cells.push(current); current = ''; }
      else current += ch;
    }
    cells.push(current); return cells;
  });
}

export function validateCore(bundle) {
  const errors = [];
  const { sourceRegister: sr, claimRegister: cr, caseRegister: kr, integrationManifest: im, architecture: arch } = bundle;
  if (!exactKeys(sr, SOURCE_TOP_KEYS)) add(errors, 'SOURCE_TOP_LEVEL_KEYS', REGISTER_PATHS.sources, 'Unexpected or missing top-level source-register keys.');
  if (sr?.sourceCount !== 46 || sr?.sources?.length !== 46) add(errors, 'SOURCE_COUNT', REGISTER_PATHS.sources, 'Expected exactly 46 sources.');
  if (!same(sr?.sources?.map((s) => s.sourceId), seq('MLE-BSRC-', 46))) add(errors, 'SOURCE_IDS', REGISTER_PATHS.sources, 'Source IDs must be contiguous and ordered.');
  for (const source of sr?.sources ?? []) {
    if (!exactKeys(source, SOURCE_KEYS)) add(errors, 'SOURCE_RECORD_KEYS', source.sourceId, 'Unexpected or missing source fields.');
    if (Object.entries(SOURCE_ENUMS).some(([field, values]) => !values.has(source[field]))) add(errors, 'SOURCE_ENUM', source.sourceId, 'Source enum is invalid.');
    if (['verifiedAt','accessLimitation','recheckTrigger','finalUrl'].some((field) => !nonempty(source[field]))) add(errors, 'SOURCE_CURRENTNESS', source.sourceId, 'Source currentness evidence is incomplete.');
    if (source.retrievalDisposition === 'browser-verified' && ![null, 403].includes(source.httpStatus)) add(errors, 'SOURCE_BROWSER_STATUS', source.sourceId, 'Browser-verified sources may preserve a failed CLI 403 but cannot invent success.');
  }

  if (!exactKeys(cr, CLAIM_TOP_KEYS)) add(errors, 'CLAIM_TOP_LEVEL_KEYS', REGISTER_PATHS.claims, 'Unexpected or missing top-level claim-register keys.');
  if (cr?.claimCount !== 63 || cr?.claims?.length !== 63) add(errors, 'CLAIM_COUNT', REGISTER_PATHS.claims, 'Expected exactly 63 claims.');
  if (!same(cr?.claims?.map((c) => c.claimId), seq('MLE-BCLM-', 63))) add(errors, 'CLAIM_IDS', REGISTER_PATHS.claims, 'Claim IDs must be contiguous and ordered.');
  const sourceById = new Map((sr?.sources ?? []).map((s) => [s.sourceId, s]));
  const claimById = new Map((cr?.claims ?? []).map((c) => [c.claimId, c]));
  const technicalClasses = new Set(['technical-primary','original-research','technical-official','standard-or-regulator','first-party-engineering-report']);
  for (let i = 0; i < (cr?.claims?.length ?? 0); i += 1) {
    const claim = cr.claims[i];
    if (!exactKeys(claim, CLAIM_KEYS)) add(errors, 'CLAIM_RECORD_KEYS', claim.claimId, 'Unexpected or missing claim fields.');
    if (claim.chapterId !== `MLE-CH-${String(Math.floor(i / 3) + 1).padStart(2, '0')}` || claim.chapterOrder !== Math.floor(i / 3) + 1) add(errors, 'CLAIM_ALLOCATION', claim.claimId, 'Claim is assigned to the wrong chapter.');
    if (Object.entries(CLAIM_ENUMS).some(([field, values]) => !values.has(claim[field]))) add(errors, 'CLAIM_ENUM', claim.claimId, 'Claim enum is invalid.');
    if (claim.claimClass !== 'role-market-boundary' && !claim.sourceIds.some((id) => technicalClasses.has(sourceById.get(id)?.sourceClass))) add(errors, 'CLAIM_TECHNICAL_SUPPORT', claim.claimId, 'Technical claim lacks allowed non-role technical support.');
    if (claim.claimClass !== 'role-market-boundary' && claim.sourceIds.some((id) => sourceById.get(id)?.sourceClass === 'role-market-evidence')) add(errors, 'ROLE_MARKET_LEAK', claim.claimId, 'Role-market evidence leaked into technical doctrine.');
    for (const field of ['sourceIds','architectureClaimIds','boundaryIds','scenarioIds','domainIds','portIds','caseIds']) {
      if ((claim[field] ?? []).length !== new Set(claim[field] ?? []).size) add(errors, 'ARRAY_DUPLICATE', `${claim.claimId}.${field}`, 'ID arrays must be duplicate-free.');
    }
    if (claim.sourceIds.some((id) => !sourceById.has(id))) add(errors, 'REFERENCE_DANGLING', `${claim.claimId}.sourceIds`, 'Claim references an unknown source.');
  }
  let sourceClaimEdges = 0;
  for (const source of sr?.sources ?? []) {
    sourceClaimEdges += source.claimIds.length;
    if (!source.claimIds.length && !source.caseUses.length) add(errors, 'SOURCE_UNUSED', source.sourceId, 'Retained source is unused.');
    const expected = cr.claims.filter((c) => c.sourceIds.includes(source.sourceId)).map((c) => c.claimId);
    if (!same(uniqSorted(source.claimIds), uniqSorted(expected))) add(errors, 'SOURCE_CLAIM_SYMMETRY', source.sourceId, 'Source/claim reverse edges differ.');
  }

  if (!exactKeys(kr, CASE_TOP_KEYS)) add(errors, 'CASE_TOP_LEVEL_KEYS', REGISTER_PATHS.cases, 'Unexpected or missing top-level case-register keys.');
  if (kr?.caseCount !== 12 || kr?.cases?.length !== 12) add(errors, 'CASE_COUNT', REGISTER_PATHS.cases, 'Expected exactly 12 cases.');
  const caseById = new Map((kr?.cases ?? []).map((c) => [c.caseId, c]));
  if (!same(kr?.cases?.map((c) => c.caseId), Array.from({ length: 12 }, (_, i) => `CASE-${String(i + 1).padStart(2, '0')}`))) add(errors, 'CASE_IDS', REGISTER_PATHS.cases, 'Case IDs must be contiguous and ordered.');
  const frozenFields = ['name','portId','truthLabel','realConstructedRule','chapterIds','decisionJob','authorityOwner','limitations','sourceResearchNeed','replaceabilityTest'];
  for (let i = 0; i < (kr?.cases?.length ?? 0); i += 1) {
    const item = kr.cases[i];
    if (!exactKeys(item, CASE_KEYS)) add(errors, 'CASE_RECORD_KEYS', item.caseId, 'Unexpected or missing case fields.');
    if (Object.entries(CASE_ENUMS).some(([field, values]) => !values.has(item[field]))) add(errors, 'CASE_ENUM', item.caseId, 'Case enum is invalid.');
    if (item.sourceUses.some((use) => !EVIDENCE_ROLES.has(use.evidenceRole)) || (sr?.sources ?? []).some((source) => source.caseUses.some((use) => !EVIDENCE_ROLES.has(use.evidenceRole)))) add(errors, 'EVIDENCE_ROLE', item.caseId, 'Case evidence role is invalid.');
    if (item.sourceUses.some((use) => !sourceById.has(use.sourceId)) || item.claimIds.some((id) => !claimById.has(id))) add(errors, 'REFERENCE_DANGLING', item.caseId, 'Case references an unknown source or claim.');
    for (const field of ['chapterIds','claimIds']) if (item[field].length !== new Set(item[field]).size) add(errors, 'ARRAY_DUPLICATE', `${item.caseId}.${field}`, 'Case ID arrays must be duplicate-free.');
    if (i < 5) {
      const raw = arch.cases[i];
      const expected = { name: raw.name, portId: raw.portId, truthLabel: raw.truthLabel, realConstructedRule: raw.realConstructedRule, chapterIds: raw.chapterUse.map((order) => `MLE-CH-${String(order).padStart(2, '0')}`), decisionJob: raw.decisionJob, authorityOwner: raw.authorityOwner, limitations: [raw.limitation], sourceResearchNeed: raw.sourceResearchNeed, replaceabilityTest: raw.replaceabilityTest };
      if (frozenFields.some((field) => !same(item[field], expected[field]))) add(errors, 'CASE_FROZEN_PROJECTION', item.caseId, 'Constructed case projection drifted from architecture.');
      if (item.reportedFacts.length || item.attributedOutcomes.length || item.allowedInferences.length) add(errors, 'CASE_CONSTRUCTED_TRUTH', item.caseId, 'Constructed case acquired reported evidence.');
    } else {
      if (['reportedFacts','allowedInferences','limitations','transferRules'].some((field) => !Array.isArray(item[field]) || !item[field].length)) add(errors, 'CASE_PUBLIC_EVIDENCE', item.caseId, 'Public case evidence fields are incomplete.');
      if (item.reportedFacts.some((fact) => item.allowedInferences.includes(fact))) add(errors, 'CASE_PUBLIC_DISTINCTION', item.caseId, 'Public facts and allowed inferences are collapsed.');
    }
  }
  const exactTrace = [
    ['architectureClaimIds', seq('MLE-CLM-', 22)],
    ['boundaryIds', Array.from({ length: 17 }, (_, i) => `BND-${String(i + 1).padStart(2, '0')}`)],
    ['scenarioIds', Array.from({ length: 10 }, (_, i) => `SCN-${String(i + 1).padStart(2, '0')}`)],
    ['domainIds', (arch?.domains ?? []).map((item) => item.id)],
    ['portIds', (arch?.ports ?? []).map((item) => item.id)],
  ];
  for (const [field, expected] of exactTrace) {
    const actual = uniqSorted((cr?.claims ?? []).flatMap((claim) => claim[field]));
    if (!same(actual, [...expected].sort())) add(errors, 'ARCHITECTURE_TRACE', field, 'Canonical claims do not cover the exact frozen architecture trace.');
  }
  for (const claim of cr?.claims ?? []) {
    const expected = kr.cases.filter((c) => c.claimIds.includes(claim.claimId)).map((c) => c.caseId);
    if (!same(uniqSorted(claim.caseIds), uniqSorted(expected))) add(errors, 'CLAIM_CASE_SYMMETRY', claim.claimId, 'Claim/case reverse edges differ.');
  }
  let sourceCaseUses = 0;
  for (const source of sr?.sources ?? []) {
    sourceCaseUses += source.caseUses.length;
    const expected = kr.cases.flatMap((c) => c.sourceUses.filter((u) => u.sourceId === source.sourceId).map((u) => ({ caseId: c.caseId, evidenceRole: u.evidenceRole })));
    if (!same([...source.caseUses].sort((a,b) => JSON.stringify(a).localeCompare(JSON.stringify(b))), expected.sort((a,b) => JSON.stringify(a).localeCompare(JSON.stringify(b))))) add(errors, 'SOURCE_CASE_SYMMETRY', source.sourceId, 'Source/case reverse edges differ.');
  }

  const csv = parseCsv(bundle.csvText);
  const header = ['claim_id','chapter_id','chapter_order','claim_class','source_ids','architecture_claim_ids','boundary_ids','scenario_ids','domain_ids','port_ids','case_ids','durability','confidence'];
  if (!same(csv[0], header)) add(errors, 'CSV_HEADER', REGISTER_PATHS.csv, 'Claim CSV header is invalid.');
  if (csv.length !== 64) add(errors, 'CSV_ROWS', REGISTER_PATHS.csv, 'Claim CSV must have exactly 63 rows.');
  const expectedRows = (cr?.claims ?? []).map((c) => [c.claimId,c.chapterId,String(c.chapterOrder),c.claimClass,c.sourceIds.join(';'),c.architectureClaimIds.join(';'),c.boundaryIds.join(';'),c.scenarioIds.join(';'),c.domainIds.join(';'),c.portIds.join(';'),c.caseIds.join(';'),c.durability,c.confidence]);
  if (!same(csv.slice(1), expectedRows)) add(errors, 'CSV_SYMMETRY', REGISTER_PATHS.csv, 'Claim CSV differs from the canonical register.');

  for (const [key, item] of Object.entries(im?.registers ?? {})) {
    const file = bundle.files?.[item.path];
    if (!file || file.sha256 !== item.sha256) add(errors, 'MANIFEST_REGISTER_HASH', `registers.${key}`, 'Register hash does not match file bytes.');
  }
  if (!same(im?.scratchInputs?.map((s) => s.sha256), SCRATCH_HASHES) || !same(bundle.scratchInputs?.map((s) => s.sha256), SCRATCH_HASHES)) add(errors, 'MANIFEST_SCRATCH_HASH', 'scratchInputs', 'Scratch hashes are not frozen.');
  if (im?.integrationContractHash !== computeIntegrationContractHash(im)) add(errors, 'MANIFEST_CONTRACT_HASH', REGISTER_PATHS.manifest, 'Integration projection hash differs.');
  const expectedAllocation = Object.fromEntries(Array.from({ length: 21 }, (_, i) => [`MLE-CH-${String(i + 1).padStart(2,'0')}`, seq('MLE-BCLM-', 3, 3).map((_, j) => `MLE-BCLM-${String(i * 3 + j + 1).padStart(3,'0')}`)]));
  if (!same(im?.claimAllocation, expectedAllocation)) add(errors, 'MANIFEST_CLAIM_ALLOCATION', 'claimAllocation', 'Manifest claim allocation is invalid.');
  const expectedAssignments = Object.fromEntries(arch.chapters.map((chapter) => {
    const claims = cr.claims.filter((c) => c.chapterId === chapter.id);
    return [chapter.id, { sourceIds: uniqSorted(claims.flatMap((c) => c.sourceIds)), claimIds: claims.map((c) => c.claimId), caseIds: uniqSorted(claims.flatMap((c) => c.caseIds)) }];
  }));
  if (!same(im?.chapterAssignments, expectedAssignments)) add(errors, 'MANIFEST_CHAPTER_ASSIGNMENTS', 'chapterAssignments', 'Manifest chapter assignments differ from registers.');
  const expectedPacks = PACK_PATHS.map((p, i) => ({ chapterId: `MLE-CH-${String(i + 1).padStart(2,'0')}`, path: p }));
  if (!same(im?.packContract?.packs, expectedPacks) || im?.packContract?.requiredIntegrationContractHash !== im?.integrationContractHash) add(errors, 'MANIFEST_PACK_CONTRACT', 'packContract', 'Pack contract is invalid.');

  if (Object.keys(bundle.packs ?? {}).length !== 21) add(errors, 'PACK_COUNT', 'packs', 'Expected exactly 21 packs.');
  const forbiddenMarker = new RegExp(['SOURCE G' + 'AP','T' + 'BD','TO' + 'DO','FIX' + 'ME'].join('|'));
  const normalizeText = (value) => String(value).replace(/[`]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
  for (const chapter of arch?.chapters ?? []) {
    const pack = bundle.packs?.[chapter.id] ?? '';
    const normalizedPack = normalizeText(pack);
    if (!pack.includes(im.integrationContractHash)) add(errors, 'PACK_CONTRACT_HASH', chapter.id, 'Pack lacks exact integration hash.');
    const assigned = cr.claims.filter((c) => c.chapterId === chapter.id).map((c) => c.claimId);
    if (assigned.some((id) => !pack.includes(id))) add(errors, 'PACK_CLAIMS', chapter.id, 'Pack lacks an exact claim ID.');
    if (!normalizedPack.includes(normalizeText(chapter.decisionJob))) add(errors, 'PACK_DECISION_JOB', chapter.id, 'Pack lacks exact decision job.');
    if (chapter.sourceResearchNeeds.some((item) => !normalizedPack.includes(normalizeText(item)))) add(errors, 'PACK_SOURCE_NEEDS', chapter.id, 'Pack lacks exact source research needs.');
    if (!normalizedPack.includes(normalizeText(chapter.phase06Handoff))) add(errors, 'PACK_PHASE06_HANDOFF', chapter.id, 'Pack lacks exact Phase 06 handoff.');
    if (!normalizedPack.includes(`milestone: ${chapter.milestone.id.toLowerCase()} — ${chapter.milestone.name.toLowerCase()}`) && !normalizedPack.includes(`milestone is ${chapter.milestone.id.toLowerCase()} — ${chapter.milestone.name.toLowerCase()}`)) add(errors, 'PACK_MILESTONE', chapter.id, 'Pack lacks exact milestone binding.');
    const chapterClaims = cr.claims.filter((claim) => claim.chapterId === chapter.id);
    const traceIds = uniqSorted(chapterClaims.flatMap((claim) => [...claim.architectureClaimIds, ...claim.boundaryIds, ...claim.scenarioIds, ...claim.domainIds, ...claim.portIds, ...claim.caseIds]));
    if (traceIds.some((id) => !pack.includes(id))) add(errors, 'PACK_ARCHITECTURE_TRACE', chapter.id, 'Pack lacks an exact architecture/case trace ID.');
    if (!normalizedPack.includes(normalizeText(chapter.mleCeiling))) add(errors, 'PACK_AUTHORITY_CEILING', chapter.id, 'Pack lacks the exact MLE authority ceiling.');
    if (chapterClaims.some((claim) => !normalizedPack.includes(normalizeText(claim.phase07Instruction)))) add(errors, 'PACK_PHASE07_INSTRUCTION', chapter.id, 'Pack lacks an exact Phase 07 claim instruction.');
    if (!pack.includes('Evidence-gap disposition: none release-blocking')) add(errors, 'PACK_DISPOSITION', chapter.id, 'Pack lacks final evidence-gap disposition.');
    if (forbiddenMarker.test(pack)) add(errors, 'PACK_MARKER', chapter.id, 'Pack contains unfinished marker.');
    if (/\.(?:svg|webp)\b/i.test(pack)) add(errors, 'PACK_MEDIA', chapter.id, 'Pack references forbidden stored media.');
  }

  const reportPath = `${BOOK}/sources/verification-report.md`;
  const handoffPath = `${BOOK}/sources/phase-07-handoff.md`;
  const report = stateText(bundle, reportPath);
  const handoff = stateText(bundle, handoffPath);
  if ((sr?.sources ?? []).some((source) => !report.includes(source.sourceId))) add(errors, 'REPORT_SOURCE_COVERAGE', reportPath, 'Verification report does not bind all canonical sources.');
  if ((cr?.claims ?? []).some((claim) => !normalizeText(handoff).includes(normalizeText(claim.phase07Instruction)))) add(errors, 'HANDOFF_INSTRUCTION_COVERAGE', handoffPath, 'Phase 07 handoff does not preserve every exact claim instruction.');
  if (!/Phase 07 status:\s*`INACTIVE\b/.test(handoff) || /Phase 07 status:\s*`ACTIVE\b/.test(handoff)) add(errors, 'HANDOFF_PHASE07_HOLD', handoffPath, 'Phase 07 handoff must remain explicitly inactive.');

  if (phase06ExternalInventoryDigest(bundle.inventory) !== EXTERNAL_BASELINE_DIGEST || roleBaselineDigest(bundle.inventory) !== ROLE_BASELINE_DIGEST) add(errors, 'UNEXPECTED_PATH', 'inventory', 'A path outside the frozen Phase 06 allowlist was added.');
  if (!same(bundle.topLevelDirectories, TOP_LEVEL_DIRECTORIES)) add(errors, 'UNEXPECTED_TOP_LEVEL', 'topLevelDirectories', 'Top-level directory inventory differs from the frozen repository roots.');
  if ((bundle.topLevelSymlinks ?? []).length) add(errors, 'UNEXPECTED_TOP_LEVEL', 'topLevelSymlinks', 'Top-level symlinks are forbidden in the frozen Phase 06 inventory.');
  const expectedScratch = ['a','b','c'].map((lane) => `${SCRATCH}/lane-${lane}-discovery.json`);
  if (!same(bundle.scratchInventory, expectedScratch)) add(errors, 'UNEXPECTED_SCRATCH_PATH', 'scratchInventory', 'Phase 06 scratch inventory differs from the exact three discovery lanes.');
  if (phase06EphemeralInventoryDigest(bundle.ephemeralInventory) !== EPHEMERAL_BASELINE_DIGEST) add(errors, 'UNEXPECTED_EPHEMERAL_PATH', 'ephemeralInventory', 'Scratch, tmp, or Astro path inventory differs from the frozen Phase 06 baseline.');

  return { ok: errors.length === 0, errors, counts: { sources: sr?.sources?.length ?? 0, claims: cr?.claims?.length ?? 0, cases: kr?.cases?.length ?? 0, packs: Object.keys(bundle.packs ?? {}).length, sourceClaimEdges, sourceCaseUses, csvRows: Math.max(0, csv.length - 1), chapters: arch?.chapters?.length ?? 0 } };
}

function stateText(bundle, relative) { return bundle.files?.[relative]?.text ?? ''; }
function reviewAccepted(text) {
  const tail = String(text).trimEnd().split(/\r?\n/).filter((line) => line.trim()).slice(-2).map((line) => line.trim());
  return same(tail, ['SPEC COMPLIANCE PASS','QUALITY APPROVED']);
}

function reviewPath(name) { return `${REVIEW}/${name}.md`; }

function resolvedRepair(bundle, name, configuredRepair) {
  if (configuredRepair) return configuredRepair;
  const text = stateText(bundle, reviewPath(name));
  return /SPEC COMPLIANCE FAIL|QUALITY CHANGES REQUESTED/.test(text) ? `${name}-repair` : null;
}

function reviewRequiredHashes(bundle, task) {
  const manifest = REGISTER_PATHS.manifest;
  if (task === 'TASK-02') return [manifest, ...PACK_PATHS.slice(0, 7)];
  if (task === 'TASK-03') return [manifest, ...PACK_PATHS.slice(7, 14)];
  if (task === 'TASK-04') return [manifest, ...PACK_PATHS.slice(14, 21)];
  if (task === 'TASK-05') return VERIFICATION_ARTIFACT_PATHS.filter((relative) => !/validate-phase-06\.(?:mjs|test\.mjs)$/.test(relative));
  if (task === 'TASK-06') return [`${BOOK}/validate-phase-06.mjs`, `${BOOK}/validate-phase-06.test.mjs`, reviewPath('task-05-canonical-integration')];
  return [];
}

function validateReviewChain(bundle, errors, requiredTasks) {
  for (const [task, name, configuredRepair] of REVIEW_SPECS.filter(([task]) => requiredTasks.includes(task))) {
    const repair = resolvedRepair(bundle, name, configuredRepair);
    const relative = reviewPath(name);
    const text = stateText(bundle, relative);
    if (!reviewAccepted(text)) {
      add(errors, 'REVIEW_MISSING', relative, 'Required review does not end with the exact accepted verdict.');
      continue;
    }
    let chainText = text;
    if (repair) {
      const repairRelative = reviewPath(repair);
      const repairFile = bundle.files?.[repairRelative];
      if (!repairFile || !reviewAccepted(repairFile.text)) add(errors, 'REVIEW_REPAIR_MISSING', repairRelative, 'Required paired repair is missing or not accepted.');
      else {
        chainText += `\n${repairFile.text}`;
        if (!text.includes(repairFile.sha256)) add(errors, 'REVIEW_REPAIR_HASH', relative, 'Review does not bind the current paired repair hash.');
      }
    }
    for (const artifactPath of reviewRequiredHashes(bundle, task)) {
      const artifact = bundle.files?.[artifactPath];
      if (!artifact || !chainText.includes(artifact.sha256)) add(errors, 'REVIEW_ARTIFACT_HASH', relative, `Review chain does not bind current artifact ${artifactPath}.`);
    }
  }
}

function expectedVerificationCounts() {
  return {
    sources: 46, claims: 63, cases: 12, constructedCases: 5, publicCases: 7,
    packs: 21, chapters: 21, sourceClaimEdges: 160, sourceCaseUses: 34,
    csvRows: 63, architectureClaims: 22, boundaries: 17, scenarios: 10,
    domains: 12, ports: 5, milestones: 21,
  };
}

export function buildExpectedVerification(bundle, { generatedAt = '2026-08-18T23:59:00+05:30' } = {}) {
  const artifacts = VERIFICATION_ARTIFACT_PATHS.map((relative) => ({ path: relative, sha256: bundle.files?.[relative]?.sha256 }));
  const reviews = REVIEW_SPECS.map(([task, name, configuredRepair]) => {
    const repair = resolvedRepair(bundle, name, configuredRepair);
    const relative = reviewPath(name); const repairRelative = repair ? reviewPath(repair) : null;
    return { task, path: relative, sha256: bundle.files?.[relative]?.sha256, repairPath: repairRelative, repairSha256: repairRelative ? bundle.files?.[repairRelative]?.sha256 : null };
  });
  return {
    schema: 'mle-phase-06-verification/v1', role: 'machine-learning-engineer', book: 'machine-learning-engineering', phase: '06', generatedAt,
    counts: expectedVerificationCounts(), artifacts, reviews,
    frozenCases: bundle.caseRegister.cases.slice(0, 5).map((item) => ({ caseId: item.caseId, sha256: hash(JSON.stringify(stable(item))) })),
    architectureTrace: {
      claims: seq('MLE-CLM-', 22),
      boundaries: Array.from({ length: 17 }, (_, i) => `BND-${String(i + 1).padStart(2,'0')}`),
      scenarios: Array.from({ length: 10 }, (_, i) => `SCN-${String(i + 1).padStart(2,'0')}`),
      domains: bundle.architecture.domains.map((item) => item.id), ports: bundle.architecture.ports.map((item) => item.id),
      milestones: bundle.architecture.chapters.map((item) => item.milestone.id),
    },
    currentness: { verifiedOn: '2026-08-18', directlyAccessible: 42, browserVerified: 4, accessRestricted: 0, replaced: 0, sourceIds: bundle.sourceRegister.sources.map((item) => item.sourceId) },
    tdd: {
      red: { command: 'node --test project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.test.mjs', exitCode: 1, nodeVersion: 'v22.23.1', tests: 1, pass: 0, fail: 1, errorCode: 'ERR_MODULE_NOT_FOUND', errorContains: 'validate-phase-06.mjs' },
      green: { command: 'node --test project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.test.mjs', exitCode: 0, tests: 190, pass: 190, fail: 0 },
    },
    checks: VERIFICATION_CHECKS.map((name) => ({ name, status: 'PASS' })),
    pathBoundaries: { allowlist: PHASE06_ALLOWED_PATHS, externalBaselineDigest: EXTERNAL_BASELINE_DIGEST, roleBaselineDigest: ROLE_BASELINE_DIGEST, ephemeralBaselineDigest: EPHEMERAL_BASELINE_DIGEST, prohibitedKinds: PROHIBITED_KINDS, unexpectedPaths: [] },
    stateTransition: { role: 'complete', root: 'complete', localIssue: 'complete', factory: 'complete', phase07: 'inactive', catalogPosition6: 'not-started' },
    githubExpectations: { rootIssue: { number: 79, state: 'OPEN', labels: ['role:machine-learning-engineer','status:in-progress'] }, childIssue: { number: 83, state: 'CLOSED', labels: ['phase:06-research','role:machine-learning-engineer','status:done'] } },
    nextGate: { name: 'Phase 07 chapter blueprints', status: 'inactive' },
  };
}

function validateVerification(bundle, errors) {
  const value = bundle.verification;
  if (!value) {
    add(errors, 'VERIFICATION_MISSING', VERIFICATION_PATH, 'Final verification manifest is missing.');
    return;
  }
  const timestamp = value.generatedAt ?? '';
  const validTimestamp = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(timestamp) && Number.isFinite(Date.parse(timestamp));
  if (!exactKeys(value, VERIFICATION_TOP_KEYS) || value.schema !== 'mle-phase-06-verification/v1' || value.role !== 'machine-learning-engineer' || value.book !== 'machine-learning-engineering' || value.phase !== '06' || !validTimestamp) add(errors, 'VERIFICATION_KEYS', VERIFICATION_PATH, 'Verification identity, semantic ISO timestamp, or top-level keys are invalid.');
  if (!exactKeys(value.counts, Object.keys(expectedVerificationCounts())) || !same(value.counts, expectedVerificationCounts())) add(errors, 'VERIFICATION_COUNTS', VERIFICATION_PATH, 'Verification counts are not exact.');

  const expected = buildExpectedVerification(bundle, { generatedAt: value.generatedAt });
  const expectedArtifacts = expected.artifacts;
  if (!Array.isArray(value.artifacts) || value.artifacts.some((item) => !exactKeys(item, ['path','sha256'])) || !same(value.artifacts, expectedArtifacts)) add(errors, 'VERIFICATION_ARTIFACTS', VERIFICATION_PATH, 'Verification artifact identities are incomplete or stale.');

  const expectedReviews = expected.reviews;
  if (!Array.isArray(value.reviews) || value.reviews.some((item) => !exactKeys(item, ['task','path','sha256','repairPath','repairSha256'])) || !same(value.reviews, expectedReviews)) add(errors, 'VERIFICATION_REVIEWS', VERIFICATION_PATH, 'Verification review identities are incomplete or stale.');

  const expectedCases = expected.frozenCases;
  if (!Array.isArray(value.frozenCases) || value.frozenCases.some((item) => !exactKeys(item, ['caseId','sha256'])) || !same(value.frozenCases, expectedCases)) add(errors, 'VERIFICATION_FROZEN_CASES', VERIFICATION_PATH, 'Frozen constructed-case identities differ.');

  const expectedTrace = expected.architectureTrace;
  if (!exactKeys(value.architectureTrace, Object.keys(expectedTrace)) || !same(value.architectureTrace, expectedTrace)) add(errors, 'VERIFICATION_TRACE', VERIFICATION_PATH, 'Architecture trace is incomplete or drifted.');

  const expectedCurrentness = expected.currentness;
  if (!exactKeys(value.currentness, Object.keys(expectedCurrentness)) || !same(value.currentness, expectedCurrentness)) add(errors, 'VERIFICATION_CURRENTNESS', VERIFICATION_PATH, 'Currentness disposition evidence is incomplete.');

  const expectedRed = expected.tdd.red;
  const expectedGreen = expected.tdd.green;
  if (!exactKeys(value.tdd, ['red','green']) || !exactKeys(value.tdd?.red, Object.keys(expectedRed)) || !exactKeys(value.tdd?.green, Object.keys(expectedGreen)) || !same(value.tdd?.red, expectedRed) || !same(value.tdd?.green, expectedGreen)) add(errors, 'VERIFICATION_TDD', VERIFICATION_PATH, 'TDD RED/GREEN evidence is incomplete or inaccurate.');

  const expectedChecks = expected.checks;
  if (!Array.isArray(value.checks) || value.checks.some((item) => !exactKeys(item, ['name','status'])) || !same(value.checks, expectedChecks)) add(errors, 'VERIFICATION_CHECKS', VERIFICATION_PATH, 'Executable check evidence is incomplete.');

  const expectedPaths = expected.pathBoundaries;
  if (!exactKeys(value.pathBoundaries, Object.keys(expectedPaths)) || !same(value.pathBoundaries, expectedPaths)) add(errors, 'VERIFICATION_PATHS', VERIFICATION_PATH, 'Path-boundary evidence is incomplete or drifted.');
  const expectedState = expected.stateTransition;
  if (!exactKeys(value.stateTransition, Object.keys(expectedState)) || !same(value.stateTransition, expectedState)) add(errors, 'VERIFICATION_STATE', VERIFICATION_PATH, 'Four-authority state transition is incomplete.');
  const expectedGithub = expected.githubExpectations;
  if (!exactKeys(value.githubExpectations, ['rootIssue','childIssue']) || !same(value.githubExpectations, expectedGithub)) add(errors, 'VERIFICATION_GITHUB', VERIFICATION_PATH, 'Expected root/child GitHub state is inaccurate.');
  if (!exactKeys(value.nextGate, ['name','status']) || !same(value.nextGate, { name: 'Phase 07 chapter blueprints', status: 'inactive' })) add(errors, 'VERIFICATION_NEXT_GATE', VERIFICATION_PATH, 'Next gate must remain Phase 07 inactive.');
}

function validateActiveState(bundle, errors) {
  const role = stateText(bundle, `${ROLE}/ROLE-STATE.md`);
  const rootIssue = stateText(bundle, `${ROLE}/issues/root.md`);
  const localIssue = stateText(bundle, `${ROLE}/issues/phase-06-source-research.md`);
  const factory = stateText(bundle, 'project-control/role-factory/FACTORY-STATE.md');
  if (!/Current global phase: Phase 06 source and bounded case-study research active/i.test(role) || !/Active child issue: \[#83\b/i.test(role)) add(errors, 'STATE_ROLE_ACTIVE', `${ROLE}/ROLE-STATE.md`, 'Role state is not the exact active Phase 06 projection.');
  if (!/Active child: \[#83\b/i.test(rootIssue) || !/06 source and case-study research.*active in #83/i.test(rootIssue)) add(errors, 'STATE_ROOT_ACTIVE', `${ROLE}/issues/root.md`, 'Root issue is not the exact active Phase 06 projection.');
  if (!/Status: active; live child #83 is open with status:in-progress\./i.test(localIssue)) add(errors, 'STATE_LOCAL_ISSUE_ACTIVE', `${ROLE}/issues/phase-06-source-research.md`, 'Local issue is not active under open child #83.');
  if (!/Active child: #83\./i.test(factory) || !/Phase 06 source and bounded case-study research: active\./i.test(factory) || !/Catalog position 6: not started\./i.test(factory)) add(errors, 'STATE_FACTORY_ACTIVE', 'project-control/role-factory/FACTORY-STATE.md', 'Factory state is not the exact active Phase 06 projection.');
}

function validateFinalRuntime(bundle, errors) {
  const runtime = bundle.runtime;
  if (!runtime?.git || runtime.git.branch !== 'main' || runtime.git.clean !== true || runtime.git.head !== runtime.git.remoteMain) add(errors, 'FINAL_GIT', 'runtime.git', 'Final stage requires clean main equal to the live remote main ref.');
  const expected = { rootIssue: { number: 79, state: 'OPEN', labels: ['role:machine-learning-engineer','status:in-progress'] }, childIssue: { number: 83, state: 'CLOSED', labels: ['phase:06-research','role:machine-learning-engineer','status:done'] } };
  if (!runtime?.github || !same(runtime.github, expected)) add(errors, 'FINAL_GITHUB', 'runtime.github', 'Final live issue state or labels differ.');
}

function finalStateContradiction(text) {
  return /(?:^|\n)[^\n]*Phase 07[^\n]*\bactive\b/i.test(text)
    || /(?:^|\n)Active child(?: issue)?:(?![ \t]*none\b)[^\n]+/i.test(text)
    || /(?:^|\n)Last completed child(?: issue)?:(?![ \t]*(?:\[#83\b|#83\b))[^\n]+/i.test(text)
    || /(?:^|\n)Status:\s*active\b|\bis open with status:in-progress\b/i.test(text);
}

export function validatePhase06(bundle, { stage = 'pre-hostile' } = {}) {
  if (!['pre-hostile','pre-close','final-content','final'].includes(stage)) throw new Error(`Unknown Phase 06 validation stage: ${stage}`);
  const result = validateCore(bundle); const errors = [...result.errors];
  const requiredTasks = stage === 'pre-hostile' ? ['TASK-01','TASK-02','TASK-03','TASK-04','TASK-05'] : ['TASK-01','TASK-02','TASK-03','TASK-04','TASK-05','TASK-06'];
  validateReviewChain(bundle, errors, requiredTasks);
  if (stage === 'pre-hostile' || stage === 'pre-close') validateActiveState(bundle, errors);
  if (stage === 'pre-close' && bundle.verification) add(errors, 'VERIFICATION_PREMATURE', `${BOOK}/phase-06-verification.json`, 'Verification must not exist before the close package is accepted.');
  if (stage === 'final-content' || stage === 'final') {
    const role = stateText(bundle, `${ROLE}/ROLE-STATE.md`);
    const rootIssue = stateText(bundle, `${ROLE}/issues/root.md`);
    const localIssue = stateText(bundle, `${ROLE}/issues/phase-06-source-research.md`);
    const factory = stateText(bundle, 'project-control/role-factory/FACTORY-STATE.md');
    if (!/Current global phase: Phase 06 source and bounded case-study research complete/i.test(role) || !/Last completed child issue: \[#83\b/i.test(role) || !/Active child issue: none/i.test(role) || !/\[x\] 06 source and case-study research.*complete/i.test(role) || !/\[ \] 07 chapter blueprints.*inactive/i.test(role) || finalStateContradiction(role)) add(errors, 'STATE_ROLE_FINAL', `${ROLE}/ROLE-STATE.md`, 'Role state does not record the exact contradiction-free final Phase 06 state.');
    if (!/Last completed child: \[#83\b/i.test(rootIssue) || !/Active child: none/i.test(rootIssue) || !/\[x\] 06 source and case-study research.*complete/i.test(rootIssue) || !/\[ \] 07 chapter blueprints.*inactive/i.test(rootIssue) || finalStateContradiction(rootIssue)) add(errors, 'STATE_ROOT_FINAL', `${ROLE}/issues/root.md`, 'Root issue does not record the exact contradiction-free final Phase 06 state.');
    if (!/Status: complete; live child #83 is closed with status:done\./i.test(localIssue) || /- \[ \]/.test(localIssue) || !/Phase 07 chapter blueprints.*sole next gate.*inactive/i.test(localIssue) || finalStateContradiction(localIssue)) add(errors, 'STATE_LOCAL_ISSUE_FINAL', `${ROLE}/issues/phase-06-source-research.md`, 'Local issue does not record contradiction-free complete acceptance, closed child, and inactive next gate.');
    if (!/Machine Learning Engineer Phase 06 source and bounded case-study research: complete\./i.test(factory) || !/Last completed child: #83\./i.test(factory) || !/Active child: none\./i.test(factory) || !/Phase 07 chapter blueprints: sole next gate, inactive\./i.test(factory) || !/Catalog position 6: not started\./i.test(factory) || finalStateContradiction(factory)) add(errors, 'STATE_FACTORY_FINAL', 'project-control/role-factory/FACTORY-STATE.md', 'Factory state does not record exact contradiction-free Phase 06 completion and catalog hold.');
    validateVerification(bundle, errors);
  }
  if (stage === 'final') validateFinalRuntime(bundle, errors);
  return { ...result, ok: errors.length === 0, errors };
}

export function loadFinalRuntime(root) {
  const run = (command, args) => execFileSync(command, args, { cwd: root, encoding: 'utf8' }).trim();
  const issue = (number) => {
    const data = JSON.parse(run('gh', ['issue','view',String(number),'--json','number,state,labels']));
    return { number: data.number, state: data.state, labels: data.labels.map((item) => item.name).sort() };
  };
  return {
    git: { branch: run('git', ['branch','--show-current']), clean: run('git', ['status','--porcelain']) === '', head: run('git', ['rev-parse','HEAD']), remoteMain: run('git', ['ls-remote','origin','refs/heads/main']).split(/\s+/)[0] },
    github: { rootIssue: issue(79), childIssue: issue(83) },
  };
}

async function main() {
  const here = path.dirname(fileURLToPath(import.meta.url));
  const root = path.resolve(here, '../../../../..');
  const stageArg = process.argv.find((arg) => arg.startsWith('--stage='));
  const stage = stageArg ? stageArg.split('=')[1] : 'pre-hostile';
  const bundle = await loadPhase06Bundle(root);
  if (stage === 'final') bundle.runtime = loadFinalRuntime(root);
  const result = validatePhase06(bundle, { stage });
  if (!result.ok) {
    for (const item of result.errors) console.error(`${item.code}: ${item.path}: ${item.message}`);
    process.exitCode = 1;
  } else {
    console.log(`PASS Phase 06 ${stage}: sources=${result.counts.sources}; claims=${result.counts.claims}; cases=${result.counts.cases}; packs=${result.counts.packs}; edges=${result.counts.sourceClaimEdges}/${result.counts.sourceCaseUses}`);
  }
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
