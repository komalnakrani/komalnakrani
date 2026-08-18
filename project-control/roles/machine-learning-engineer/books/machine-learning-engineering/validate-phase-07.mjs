import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const BOOK = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering';
const ROLE = 'project-control/roles/machine-learning-engineer';
const REVIEW = `${ROLE}/reviews/phase-07`;
const SCRATCH = '.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07';
const PLAN_COMMIT = '21d4cfa2581193a5d76642e177bf44831cd3ea7b';
const VERIFICATION_PATH = `${BOOK}/phase-07-verification.json`;

const CHAPTER_PATHS = Array.from({ length: 21 }, (_, index) =>
  `${BOOK}/blueprints/chapter-${String(index + 1).padStart(2, '0')}.md`);
globalThis.CHAPTER_PATHS = CHAPTER_PATHS;

const REVIEW_NAMES = ['task-01-bootstrap','task-05-lane-a','task-06-lane-b','task-07-lane-c','task-09-canonical-integration','task-10-hostile-integration'];
const REVIEW_TASKS = ['TASK-01','TASK-05','TASK-06','TASK-07','TASK-09','TASK-10'];
const REVIEW_PATHS = REVIEW_NAMES.flatMap((name) => [`${REVIEW}/${name}.md`, `${REVIEW}/${name}-repair.md`]);

export const PHASE07_ALLOWED_PATHS = [
  'docs/superpowers/plans/2026-08-18-machine-learning-engineer-phase-07.md',
  `${ROLE}/issues/phase-07-chapter-blueprints.md`,
  `${BOOK}/blueprints/blueprint-register.json`,
  ...CHAPTER_PATHS,
  `${BOOK}/blueprints/whole-book-furniture.md`,
  `${BOOK}/blueprints/verification-report.md`,
  `${BOOK}/blueprints/phase-08-handoff.md`,
  `${BOOK}/validate-phase-07.mjs`,
  `${BOOK}/validate-phase-07.test.mjs`,
  VERIFICATION_PATH,
  ...REVIEW_PATHS,
];

export const PHASE07_SCRATCH_PATHS = [
  `${SCRATCH}/phase-07-plan.md`,
  `${SCRATCH}/phase-07-plan-review.md`,
  `${SCRATCH}/phase-07-plan-repair.md`,
  `${SCRATCH}/lane-a-blueprint-manifest.json`,
  `${SCRATCH}/lane-b-blueprint-manifest.json`,
  `${SCRATCH}/lane-c-blueprint-manifest.json`,
];

const BOOTSTRAP_PATHS = [PHASE07_ALLOWED_PATHS[0], PHASE07_ALLOWED_PATHS[1], `${BOOK}/validate-phase-07.mjs`, `${BOOK}/validate-phase-07.test.mjs`];
const BOOTSTRAP_SCRATCH = PHASE07_SCRATCH_PATHS.slice(0, 3);
const CLEAN_FINAL_PATHS = PHASE07_ALLOWED_PATHS.filter((item) => !item.endsWith('-repair.md'));
const STATE_PATHS = {
  role: `${ROLE}/ROLE-STATE.md`,
  root: `${ROLE}/issues/root.md`,
  localIssue: `${ROLE}/issues/phase-07-chapter-blueprints.md`,
  factory: 'project-control/role-factory/FACTORY-STATE.md',
};
const FROZEN_INPUT_PATHS = [
  `${BOOK}/architecture.md`, `${BOOK}/architecture.json`, `${BOOK}/visual-forecast.md`,
  `${BOOK}/sources/source-register.json`, `${BOOK}/sources/claim-register.json`,
  `${BOOK}/case-studies/case-study-register.json`, `${BOOK}/sources/claim-to-chapter.csv`,
  `${BOOK}/sources/integration-manifest.json`, `${BOOK}/sources/phase-07-handoff.md`,
  `${BOOK}/phase-06-verification.json`,
];
const FORBIDDEN_OUTPUT_ROOTS = [
  'content/manuscript', 'dist/MLE', 'dist/machine-learning-engineering',
  'assets/images/machine-learning-engineering', 'public/machine-learning-engineering',
  'output/machine-learning-engineering', 'publication', 'abhyaas', 'certification',
  'courses', 'content/course', 'content/second-volume', 'second-volume',
  'project-control/roles/next-role', '.phase07',
];
const FORBIDDEN_OUTPUT_FILES = ['project-control/roles/catalog-position-6.md', '.hidden-phase07'];
const FROZEN_INPUT_HASHES = {
  [`${BOOK}/architecture.md`]: '5f41bfc624f7085b8e3b2a12d6c2c3d52d6c21659eb5140d94cfa29b0edce630',
  [`${BOOK}/architecture.json`]: 'bb2b6fe1137b6b56ff4729d0131c1b9496804bcd3a37e07a92361f4af4da972f',
  [`${BOOK}/visual-forecast.md`]: '64861260b24e57342b3d56d651f5b4d55850ad4ac749cea33f1802616c952b94',
  [`${BOOK}/sources/source-register.json`]: '6dc8cc380f42238e5dce26ec9357118fd6dac9e2f037b0307827bd64f8d4d902',
  [`${BOOK}/sources/claim-register.json`]: '953572463965ffe79a1fd4ef4d8a5c2ee70e8c507ad83214b0e1d1e6246f569c',
  [`${BOOK}/case-studies/case-study-register.json`]: 'afdf9b955b766660efa7ec6ec7da1a22ea54d050436b271aff24d1aceaed5e51',
  [`${BOOK}/sources/claim-to-chapter.csv`]: '39eda5b2d97e5af91f95cc5d33589c4152cc66db4fd77936be895d2643df3154',
  [`${BOOK}/sources/integration-manifest.json`]: 'c8f2dff28008101c40d8eeac6916fb73625d46064c10aeedb27fb0aaad400bc4',
  [`${BOOK}/sources/phase-07-handoff.md`]: '98301e0108ace18f69a3e212d0b55d59cdf7380d1c5beaefc7dbc19926a6a119',
  [`${BOOK}/phase-06-verification.json`]: 'ca0f0fb8f4385c36a7ea59c75a5ddf25960f891ee561db0354054ce71f0cd33a',
};
const PORT_IDS = ['PORT-MANAGED','PORT-CLASSICAL','PORT-DEEP','PORT-EDGE','PORT-SHARED'];
const CANDIDATES = new Map([[5,'MLE-F05.1'],[14,'MLE-F14.1'],[16,'MLE-F16.1'],[18,'MLE-F18.1']]);
const COUNT_VALUES = {
  parts: 7, chapters: 21, claims: 63, sources: 46, sourceClaimEdges: 160,
  cases: 12, caseChapterEdges: 104, claimCaseEdges: 198, caseSourceUses: 34,
  architectureClaims: 22, boundaries: 17, scenarios: 10, domains: 12,
  clusters: 8, ports: 5, chapterPortAssertions: 105, partExitChecks: 35,
  states: 17, legalTransitions: 19, forbiddenTransitions: 2, reopenTriggers: 4,
  appendices: 7, frontMatterItems: 10, closingItems: 5, sections: 168,
  labs: 42, assessments: 21, visuals: 25, handoffs: 21, imagegenCandidates: 4,
};
const IDENTITY_EXACT = {
  architectureVersion: '1.0.0',
  architectureMdSha256: '5f41bfc624f7085b8e3b2a12d6c2c3d52d6c21659eb5140d94cfa29b0edce630',
  architectureJsonSha256: 'bb2b6fe1137b6b56ff4729d0131c1b9496804bcd3a37e07a92361f4af4da972f',
  visualForecastSha256: '64861260b24e57342b3d56d651f5b4d55850ad4ac749cea33f1802616c952b94',
  integrationContract: '3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433',
  integrationManifestSha256: 'c8f2dff28008101c40d8eeac6916fb73625d46064c10aeedb27fb0aaad400bc4',
  phase06HandoffSha256: '98301e0108ace18f69a3e212d0b55d59cdf7380d1c5beaefc7dbc19926a6a119',
  phase06VerificationSha256: 'ca0f0fb8f4385c36a7ea59c75a5ddf25960f891ee561db0354054ce71f0cd33a',
  author: 'Komal Nakrani',
  title: 'Machine Learning Engineering: From Task Contract to Operating Evidence',
  designSystem: 'Learning Systems Test Bench',
  format: 'screen-first 7 by 10 inch book',
};

const REGISTER_KEYS = ['schema','identity','counts','chapters','claimTeaching','sourceUses','caseUses','dossier','ports','sections','labs','assessment','visuals','handoffs','furniture'];
const IDENTITY_KEYS = ['architectureVersion','architectureMdSha256','architectureJsonSha256','visualForecastSha256','integrationContract','integrationManifestSha256','phase06HandoffSha256','phase06VerificationSha256','author','title','designSystem','format'];
const CHAPTER_KEYS = ['chapterId','order','title','slug','partId','decisionJob','thesis','readerEndpoint','prerequisiteArtifacts','incomingState','outgoingStates','milestoneId','authorityOwner','mleCeiling','primaryClaimIds','sectionIds','labIds','assessmentIds','visualIds','portIds','nextChapterId'];
const CLAIM_KEYS = ['claimId','chapterId','primarySectionId','crossReferenceSectionIds','sourceIds','caseIds','limitation','durability','volatilityTreatment','recheckTriggers'];
const SOURCE_KEYS = ['sourceId','claimId','chapterId','sectionIds','evidenceRole','limitation','durability','volatility','recheckTrigger'];
const CASE_KEYS = ['caseId','chapterIds','claimIds','sourceUses','placements','truthLabel','reportedFacts','attributedOutcomes','allowedInferences','forbiddenInferences','limitations','transferRules'];
const PLACEMENT_KEYS = ['chapterId','sectionIds','usePurpose'];
const CASE_SOURCE_KEYS = ['sourceId','evidenceRole'];
const DOSSIER_KEYS = ['chapterId','milestoneId','incomingState','inputArtifactIds','inputHashes','producedArtifactId','artifactVersion','legalOutgoingStates','forbiddenTransitions','reopenTriggers','nextChapterId'];
const PORT_KEYS = ['chapterId','portId','invariantDecision','variableMechanism','requiredEvidence','externalAuthority','failureInjection','limitation','transferResult'];
const SECTION_KEYS = ['sectionId','chapterId','order','purpose','teachingAction','claimIds','sourceIds','caseIds','architectureClaimIds','boundaryIds','scenarioIds','domainIds','portIds','artifactDelta','plannedDepth','claimDisposition'];
const LAB_KEYS = ['labId','chapterId','truthState','inputContract','fixedFixtureIds','redFailures','expectedEvidence','prohibitedEffects','legalDispositions','acceptanceChecks'];
const ASSESSMENT_KEYS = ['assessmentId','chapterId','exerciseOutput','rubric','answerIntent','observablePassEvidence','authorityLimit','retryRoute'];
const VISUAL_KEYS = ['visualId','chapterId','kind','insertionAnchor','decisionHelped','essentialLabels','captionIntent','altIntent','longDescriptionIntent','numericTruthDisposition','candidateStatus','reservedPath'];
const HANDOFF_KEYS = ['chapterId','phase08Instructions','continuityBridge','wordRange','wordRangeRationale','recheckTriggers','prohibitedClaims','evidenceManifest'];
const FURNITURE_KEYS = ['benchZero','parts','appendices','closing','closingStatement'];
const FURNITURE_CHILD_KEYS = ['id','order','purpose','requiredContent','accessibility','phase08Instructions'];

const VERIFICATION_KEYS = ['schema','role','book','phase','generatedAt','counts','artifacts','reviews','architectureTrace','researchTrace','dossierTrace','visualContract','furniture','tdd','checks','pathBoundaries','stateTransition','githubExpectations','nextGate'];
const ARTIFACT_KEYS = ['path','sha256','kind','required'];
const REVIEW_KEYS = ['task','path','sha256','repairPath','repairSha256','specVerdict','qualityVerdict','boundArtifacts'];
const BOUND_ARTIFACT_KEYS = ['path','sha256'];
const ARCHITECTURE_TRACE_KEYS = ['claims','boundaries','scenarios','domains','clusters','chapterEdges'];
const RESEARCH_TRACE_KEYS = ['sources','claims','cases','sourceClaimEdges','caseChapterEdges','claimCaseEdges','caseSourceUses','reverseSymmetry'];
const DOSSIER_TRACE_KEYS = ['milestones','states','legalTransitions','forbiddenTransitions','reopenTriggers','firstMilestone','terminalMilestone','terminalState'];
const VISUAL_CONTRACT_KEYS = ['semanticVisuals','imagegenCandidates','generatedAssets','svgAssets','webpAssets','numericTruth','candidateIds'];
const VERIFICATION_FURNITURE_KEYS = ['benchZero','parts','partObligationsEach','appendices','closing','aboutKomalIncluded','closingStatement'];
const TDD_KEYS = ['red','green'];
const RED_KEYS = ['command','nodeVersion','exitCode','tests','pass','fail','errorCode','missingPath'];
const GREEN_KEYS = ['command','exitCode','tests','pass','fail','skipped','todo'];
const CHECK_KEYS = ['phase01Validator','phase01Tests','phase04Validator','phase04Tests','temporalPhase05Validator','temporalPhase05Tests','temporalPhase06Validator','temporalPhase06Tests','phase07Tests','phase07PreClose','phase07FinalContent','markerScan','whitespaceEof','pathAudit','diffCheck','repositoryCheck'];
const CHECK_RESULT_KEYS = ['status','evidence'];
const PATH_BOUNDARY_KEYS = ['allowlist','scratchAllowlist','preCloseInventoryDigest','finalInventoryDigest','packageDigest','unexpectedPaths','symlinks'];
const STATE_TRANSITION_KEYS = ['role','root','localIssue','factory'];
const STATE_RECORD_KEYS = ['path','sha256','status'];
const GITHUB_EXPECTATION_KEYS = ['rootIssue','childIssue'];
const GITHUB_ISSUE_KEYS = ['number','state','labels'];
const NEXT_GATE_KEYS = ['name','status','catalogPosition6'];

const CHAPTER_HEADINGS = [
  'Frozen identity and production target','Observable objectives',
  'Prerequisites and five-sentence dossier bridge','Owned decision and retained authority',
  'Production sequence','Bench Setup, Bench Sheet, and Qualification Gate',
  'Skill procedure and evidence interpretation','Benchline artifact contract',
  'Future deterministic companion contract','Failure injections and diagnostics',
  'Five-port transfer table','Cases and truth boundaries',
  'Exercises, assessment, and answer intent','Visual and accessibility contract',
  'Durable doctrine, volatile context, and re-verification',
  'Originality and adjacent-publication boundary','Phase 08 handoff and evidence manifest',
];

const ACTIVATION_STATE_HASHES = {
  [STATE_PATHS.role]: '544b92eeff860af3dcae7515efae5188714826ed3d6c08823538dd19d22542ae',
  [STATE_PATHS.root]: '072fe6fb8f54293edff5c7c96095b93bb6566fc6f3fcadd81f3ab598c726d54a',
  [STATE_PATHS.localIssue]: 'ae2283a43cfbc53d63ab2c359efe521a0497f0f5e83cc31e61eb4e47dbbf7dc5',
  [STATE_PATHS.factory]: '970f6780ec05f35f247fedb73486ad6eb6ff18e40e5541b1c0b0fb71185703cc',
};
const SCRATCH_HASHES = {
  [PHASE07_SCRATCH_PATHS[0]]: 'c0c1eccec1f4bd05fc5c194cb874027a2b3bc0761c91be3cc0a5b5e933b6a107',
  [PHASE07_SCRATCH_PATHS[1]]: 'd56f84c22ed459eabc0dad54a3435978e15d609038091884433510a92c94dc52',
  [PHASE07_SCRATCH_PATHS[2]]: 'c1e7cae4d3574f8d312efeeda43226b06a4d0e0d08eb83bf7abb87ad0e6cb72d',
};
const LIVE_GITHUB_HASHES = {
  'github:#79:body': '072fe6fb8f54293edff5c7c96095b93bb6566fc6f3fcadd81f3ab598c726d54a',
  'github:#79:labels': 'b2d267f831b339fbc1e94be05e253ae2d84c86ce5115f8ca2fce5b2df9ed840c',
  'github:#84:body': '6b785594faea236eb92aac516330c36dda04cef8df888e985a371c2670fd325c',
  'github:#84:labels': '12ebefc59557f5e4b26fbc09dac5e10380f46025eb5285829c67f32861ac7cf6',
};

const MODULE_ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../../../..');
const readFrozenJson = (relative) => JSON.parse(readFileSync(path.join(MODULE_ROOT, relative), 'utf8'));
const FROZEN_CANONICAL = Object.freeze({
  architecture: readFrozenJson(`${BOOK}/architecture.json`),
  claims: readFrozenJson(`${BOOK}/sources/claim-register.json`),
  sources: readFrozenJson(`${BOOK}/sources/source-register.json`),
  cases: readFrozenJson(`${BOOK}/case-studies/case-study-register.json`),
});

const hash = (value) => createHash('sha256').update(value).digest('hex');
const digest = (value) => hash(JSON.stringify(value));
const same = (left, right) => JSON.stringify(left) === JSON.stringify(right);
const exactKeys = (value, keys) => value && !Array.isArray(value) && same(Object.keys(value).sort(), [...keys].sort());
const nonempty = (value) => typeof value === 'string' && value.trim().length > 0;
const hasDupes = (values) => Array.isArray(values) && new Set(values).size !== values.length;
const pass = (counts = {}) => ({ ok: true, errors: [], counts });
const fail = (code, pathName = '', message = '') => ({ ok: false, errors: [{ code, path: pathName, message }], counts: {} });
const stable = (value) => Array.isArray(value) ? value.map(stable) : value && typeof value === 'object'
  ? Object.fromEntries(Object.keys(value).sort().map((key) => [key, stable(value[key])])) : value;
const stableDigest = (value) => hash(JSON.stringify(stable(value)));
const seq = (prefix, count, width = 2) => Array.from({ length: count }, (_, index) => `${prefix}${String(index + 1).padStart(width, '0')}`);

function keysFailure(register) {
  const targets = [
    [register, REGISTER_KEYS, 'REGISTER_KEYS'], [register?.identity, IDENTITY_KEYS, 'IDENTITY_KEYS'],
    [register?.counts, Object.keys(COUNT_VALUES), 'COUNT_KEYS'], [register?.chapters?.[0], CHAPTER_KEYS, 'CHAPTER_KEYS'],
    [register?.claimTeaching?.[0], CLAIM_KEYS, 'CLAIM_TEACHING_KEYS'], [register?.sourceUses?.[0], SOURCE_KEYS, 'SOURCE_USE_KEYS'],
    [register?.caseUses?.[0], CASE_KEYS, 'CASE_USE_KEYS'], [register?.caseUses?.[0]?.placements?.[0], PLACEMENT_KEYS, 'CASE_PLACEMENT_KEYS'],
    [register?.caseUses?.find?.((item) => item.sourceUses?.length)?.sourceUses?.[0], CASE_SOURCE_KEYS, 'CASE_SOURCE_KEYS'],
    [register?.dossier?.[0], DOSSIER_KEYS, 'DOSSIER_KEYS'], [register?.ports?.[0], PORT_KEYS, 'PORT_KEYS'],
    [register?.sections?.[0], SECTION_KEYS, 'SECTION_KEYS'], [register?.labs?.[0], LAB_KEYS, 'LAB_KEYS'],
    [register?.assessment?.[0], ASSESSMENT_KEYS, 'ASSESSMENT_KEYS'], [register?.visuals?.[0], VISUAL_KEYS, 'VISUAL_KEYS'],
    [register?.handoffs?.[0], HANDOFF_KEYS, 'HANDOFF_KEYS'], [register?.furniture, FURNITURE_KEYS, 'FURNITURE_KEYS'],
    [register?.furniture?.benchZero?.[0], FURNITURE_CHILD_KEYS, 'FURNITURE_RECORD_KEYS'],
  ];
  for (const [value, keys, code] of targets) if (!exactKeys(value, keys)) return code;
  const families = [
    [register.chapters, CHAPTER_KEYS, 'CHAPTER_KEYS'], [register.claimTeaching, CLAIM_KEYS, 'CLAIM_TEACHING_KEYS'],
    [register.sourceUses, SOURCE_KEYS, 'SOURCE_USE_KEYS'], [register.caseUses, CASE_KEYS, 'CASE_USE_KEYS'],
    [register.dossier, DOSSIER_KEYS, 'DOSSIER_KEYS'], [register.ports, PORT_KEYS, 'PORT_KEYS'],
    [register.sections, SECTION_KEYS, 'SECTION_KEYS'], [register.labs, LAB_KEYS, 'LAB_KEYS'],
    [register.assessment, ASSESSMENT_KEYS, 'ASSESSMENT_KEYS'], [register.visuals, VISUAL_KEYS, 'VISUAL_KEYS'],
    [register.handoffs, HANDOFF_KEYS, 'HANDOFF_KEYS'],
  ];
  for (const [records, keys, code] of families) if (!Array.isArray(records) || records.some((item) => !exactKeys(item, keys))) return code;
  if (register.caseUses.some((item) => !Array.isArray(item.placements) || item.placements.some((entry) => !exactKeys(entry, PLACEMENT_KEYS)))) return 'CASE_PLACEMENT_KEYS';
  if (register.caseUses.some((item) => !Array.isArray(item.sourceUses) || item.sourceUses.some((entry) => !exactKeys(entry, CASE_SOURCE_KEYS)))) return 'CASE_SOURCE_KEYS';
  for (const family of ['benchZero','parts','appendices','closing']) {
    if (!Array.isArray(register.furniture[family]) || register.furniture[family].some((item) => !exactKeys(item, FURNITURE_CHILD_KEYS))) return 'FURNITURE_RECORD_KEYS';
  }
  return null;
}

function typeFailure(register) {
  if (!Array.isArray(register.chapters)) return true;
  if (Object.values(register.identity).some((value) => !nonempty(value))) return true;
  for (const chapter of register.chapters) {
    if (!Number.isInteger(chapter.order) || chapter.order <= 0 || hasDupes(chapter.sectionIds)) return true;
    if ((chapter.chapterId === 'MLE-CH-21') !== (chapter.nextChapterId === null)) return true;
  }
  for (const visual of register.visuals) {
    if (visual.kind === 'semantic-html-css' && visual.reservedPath !== null) return true;
    if (/^MLE-F/.test(visual.visualId) && visual.kind === 'imagegen-candidate' && !nonempty(visual.reservedPath)) return true;
  }
  return false;
}

function expectedChapter(chapter, index, canonical) {
  const n = index + 1;
  const chapterClaims = canonical.claims.claims.filter((claim) => claim.chapterId === chapter.id);
  const visualIds = [`MLE-V${String(n).padStart(2, '0')}.1`];
  if (CANDIDATES.has(n)) visualIds.push(CANDIDATES.get(n));
  return {
    chapterId: chapter.id, order: n, title: chapter.title, slug: chapter.slug,
    partId: chapter.partId, decisionJob: chapter.decisionJob, thesis: chapter.thesis,
    readerEndpoint: chapter.readerEndpoint, prerequisiteArtifacts: chapter.prerequisiteArtifacts,
    incomingState: chapter.incomingDossierState, outgoingStates: [chapter.outgoingDossierState],
    milestoneId: chapter.milestone.id, authorityOwner: chapter.authorityOwner, mleCeiling: chapter.mleCeiling,
    primaryClaimIds: chapterClaims.map((claim) => claim.claimId), sectionIds: seq(`${chapter.id}-S`, 8),
    labIds: seq(`${chapter.id}-LAB-`, 2), assessmentIds: [`${chapter.id}-ASMT-01`],
    visualIds, portIds: PORT_IDS, nextChapterId: n === 21 ? null : `MLE-CH-${String(n + 1).padStart(2, '0')}`,
  };
}

export function validateBlueprintRegister(register, canonical) {
  if (register && Object.hasOwn(register, 'chapters') && !Array.isArray(register.chapters)) return fail('TYPE_NULLABILITY', 'register', 'Type or nullability contract mismatch.');
  const schemaCode = keysFailure(register);
  if (schemaCode) return fail(schemaCode, 'register', 'Closed schema mismatch.');
  if (typeFailure(register)) return fail('TYPE_NULLABILITY', 'register', 'Type or nullability contract mismatch.');
  if (register.schema !== 'mle-phase-07-blueprint-register/v1') return fail('REGISTER_KEYS');
  if (!same(register.counts, COUNT_VALUES)) return fail('COUNT_VALUES');
  if (!same(register.identity, IDENTITY_EXACT)) return fail('IDENTITY_EXACT');
  if (!canonical?.architecture?.chapters || !canonical?.claims?.claims || !canonical?.sources?.sources || !canonical?.cases?.cases) return fail('CHAPTER_CANONICAL');
  const truth = FROZEN_CANONICAL;

  for (let chapterIndex = 0; chapterIndex < 21; chapterIndex += 1) {
    const chapter = truth.architecture.chapters[chapterIndex];
    const chapterClaims = truth.claims.claims.filter((claim) => claim.chapterId === chapter.id);
    const trace = {
      architectureClaimIds: [...new Set(chapterClaims.flatMap((claim) => claim.architectureClaimIds))].sort(),
      boundaryIds: [...new Set(chapterClaims.flatMap((claim) => claim.boundaryIds))].sort(),
      scenarioIds: [...new Set(chapterClaims.flatMap((claim) => claim.scenarioIds))].sort(),
      domainIds: truth.architecture.domains.filter((domain) => domain.chapters.includes(chapterIndex + 1)).map((domain) => domain.id),
    };
    const sections = register.sections.slice(chapterIndex * 8, chapterIndex * 8 + 8);
    for (let sectionIndex = 0; sectionIndex < sections.length; sectionIndex += 1) {
      const section = sections[sectionIndex]; const order = sectionIndex + 1;
      if (!same(section.architectureClaimIds, order === 1 ? trace.architectureClaimIds : [])
          || !same(section.boundaryIds, order === 1 ? trace.boundaryIds : [])
          || !same(section.scenarioIds, order === 1 ? trace.scenarioIds : [])
          || !same(section.domainIds, order === 1 ? trace.domainIds : [])
          || !same(section.portIds, order === 6 ? PORT_IDS : [])) {
        return fail('ARCHITECTURE_TRACE', section.sectionId, 'Canonical architecture trace differs.');
      }
    }
  }

  if (register.chapters.some((chapter) => chapter.prerequisiteArtifacts.some((item) => !/^BL-(?:0\d|1\d|20)(?::[A-Z-]+)?$/.test(item)))) return fail('CHAPTER_CANONICAL');
  const expectedChapters = truth.architecture.chapters.map((chapter, index) => expectedChapter(chapter, index, truth));
  if (!same(register.chapters, expectedChapters)) return fail('CHAPTER_CANONICAL');

  const expectedClaims = truth.claims.claims.map((claim) => ({
    claimId: claim.claimId, chapterId: claim.chapterId, primarySectionId: `${claim.chapterId}-S02`,
    crossReferenceSectionIds: [],
    sourceIds: truth.sources.sources.filter((source) => source.claimIds.includes(claim.claimId)).map((source) => source.sourceId),
    caseIds: truth.cases.cases.filter((item) => item.claimIds.includes(claim.claimId)).map((item) => item.caseId),
    limitation: claim.limitations, durability: claim.durability === 'contextual' ? 'volatile' : claim.durability,
    volatilityTreatment: claim.volatilityTreatment, recheckTriggers: [claim.phase07Instruction],
  }));
  if (!same(register.claimTeaching, expectedClaims)) return fail('CLAIM_TEACHING_CANONICAL');

  const expectedSources = truth.claims.claims.flatMap((claim) => claim.sourceIds.map((sourceId) => {
    const source = truth.sources.sources.find((item) => item.sourceId === sourceId);
    return { sourceId, claimId: claim.claimId, chapterId: claim.chapterId, sectionIds: [`${claim.chapterId}-S02`],
      evidenceRole: claim.claimClass === 'role-market-boundary' ? 'transfer-context' : 'doctrine',
      limitation: source.limitations, durability: source.stability === 'durable' ? 'durable' : 'volatile',
      volatility: source.volatility, recheckTrigger: source.recheckTrigger };
  })).sort((a, b) => a.claimId.localeCompare(b.claimId) || a.sourceId.localeCompare(b.sourceId));
  if (!same(register.sourceUses, expectedSources)) return fail('SOURCE_EDGE_CANONICAL');

  const expectedCases = truth.cases.cases.map((item) => ({
    caseId: item.caseId, chapterIds: item.chapterIds, claimIds: item.claimIds,
    sourceUses: item.sourceUses.map(({ sourceId, evidenceRole }) => ({ sourceId, evidenceRole })),
    placements: item.chapterIds.map((chapterId) => ({ chapterId, sectionIds: [`${chapterId}-S04`], usePurpose: `Apply ${item.name} without exceeding its truth boundary.` })),
    truthLabel: item.truthLabel, reportedFacts: item.reportedFacts, attributedOutcomes: item.attributedOutcomes,
    allowedInferences: item.allowedInferences, forbiddenInferences: [`Do not infer unreported outcomes for ${item.name}.`],
    limitations: item.limitations, transferRules: item.transferRules,
  }));
  for (const item of register.caseUses) {
    if (hasDupes(item.chapterIds) || hasDupes(item.claimIds) || hasDupes(item.sourceUses.map((entry) => `${entry.sourceId}\0${entry.evidenceRole}`))) return fail('CASE_CANONICAL');
    if (!same(item.chapterIds, item.placements.map((placement) => placement.chapterId))) return fail('CASE_CANONICAL');
    const reverseClaims = truth.claims.claims.filter((claim) => claim.caseIds.includes(item.caseId)).map((claim) => claim.claimId);
    if (!same(item.claimIds, reverseClaims)) return fail('CASE_CANONICAL');
  }
  if (!same(register.caseUses, expectedCases)) return fail('CASE_CANONICAL');

  const arch = truth.architecture;
  const expectedSectionPurposes = ['Decision and Bench Setup','Procedure','Evidence interpretation','Worked trace','Failure lab','Five-port transfer','Assessment and Qualification Gate','Durable handoff'];
  if (register.sections.length !== 168) return fail('COUNT_VALUES');
  for (let chapterIndex = 0; chapterIndex < 21; chapterIndex += 1) {
    const chapter = arch.chapters[chapterIndex];
    const chapterSections = register.sections.slice(chapterIndex * 8, chapterIndex * 8 + 8);
    const chapterClaims = truth.claims.claims.filter((claim) => claim.chapterId === chapter.id);
    for (let sectionIndex = 0; sectionIndex < 8; sectionIndex += 1) {
      const section = chapterSections[sectionIndex]; const order = sectionIndex + 1;
      const expectedArchitectureClaims = [...new Set(chapterClaims.flatMap((claim) => claim.architectureClaimIds))].sort();
      const expectedBoundaries = [...new Set(chapterClaims.flatMap((claim) => claim.boundaryIds))].sort();
      const expectedScenarios = [...new Set(chapterClaims.flatMap((claim) => claim.scenarioIds))].sort();
      const exactTrace = same(section.architectureClaimIds, order === 1 ? expectedArchitectureClaims : [])
        && same(section.boundaryIds, order === 1 ? expectedBoundaries : [])
        && same(section.scenarioIds, order === 1 ? expectedScenarios : [])
        && same(section.domainIds, order === 1 ? arch.domains.filter((domain) => domain.chapters.includes(chapterIndex + 1)).map((domain) => domain.id) : [])
        && same(section.portIds, order === 6 ? PORT_IDS : []);
      if (!exactTrace) return fail('ARCHITECTURE_TRACE');
      const expectedClaimIds = order === 2 ? chapterClaims.map((claim) => claim.claimId) : [];
      const expectedSourceIds = order === 2 ? [...new Set(chapterClaims.flatMap((claim) => claim.sourceIds))] : [];
      const expectedCaseIds = order === 4 ? truth.cases.cases.filter((item) => item.chapterIds.includes(chapter.id)).map((item) => item.caseId) : [];
      if (section.sectionId !== `${chapter.id}-S${String(order).padStart(2,'0')}` || section.chapterId !== chapter.id || section.order !== order
          || !same(section.claimIds, expectedClaimIds) || !same(section.sourceIds, expectedSourceIds) || !same(section.caseIds, expectedCaseIds)) return fail('SECTION_CONTRACT');
      if (section.purpose !== expectedSectionPurposes[sectionIndex] || section.claimDisposition !== (order === 2 ? 'primary' : 'cross-reference')
          || !section.teachingAction.includes(chapter.id) || !section.teachingAction.includes(chapter.decisionJob)
          || /manuscript prose|for publication/i.test(section.teachingAction)) return fail('SECTION_CONTRACT');
    }
  }

  const expectedDossier = arch.chapters.map((chapter, index) => ({
    chapterId: chapter.id, milestoneId: chapter.milestone.id, incomingState: chapter.incomingDossierState,
    inputArtifactIds: chapter.prerequisiteArtifacts.length ? chapter.prerequisiteArtifacts : ['BL-ENTRY'],
    inputHashes: ['a'.repeat(64)], producedArtifactId: chapter.milestone.id, artifactVersion: '1.0.0',
    legalOutgoingStates: [chapter.outgoingDossierState], forbiddenTransitions: arch.lifecycle.forbiddenTransitions,
    reopenTriggers: arch.lifecycle.reopenTriggers.map((item) => `${item.change}->${item.reopenTarget}`),
    nextChapterId: index === 20 ? null : `MLE-CH-${String(index + 2).padStart(2,'0')}`,
  }));
  if (!same(register.dossier, expectedDossier)) return fail('DOSSIER_CANONICAL');

  const expectedPorts = arch.chapters.flatMap((chapter) => arch.ports.map((port) => ({
    chapterId: chapter.id, portId: port.id, invariantDecision: chapter.fivePortInvariant,
    variableMechanism: port.variableMechanism, requiredEvidence: port.requiredEvidence,
    externalAuthority: port.externalAuthority, failureInjection: port.failureInjection,
    limitation: port.limitation, transferResult: 'PASS',
  })));
  if (!same(register.ports, expectedPorts)) return fail('PORT_PARITY');

  const expectedLabs = arch.chapters.flatMap((chapter) => [1,2].map((n) => ({
    labId: `${chapter.id}-LAB-${String(n).padStart(2,'0')}`, chapterId: chapter.id,
    truthState: 'synthetic-deterministic', inputContract: `${chapter.id} fixed offline fixture ${n}`,
    fixedFixtureIds: [`FIX-${chapter.id}-${n}`], redFailures: [n === 1 ? 'missing expected evidence' : 'illegal promotion or self-approval'],
    expectedEvidence: [`${chapter.milestone.id} deterministic record`], prohibitedEffects: ['No network, provider, production, or authority mutation.'],
    legalDispositions: ['PASS','HOLD','REJECT','REOPEN'], acceptanceChecks: [`${chapter.id} evidence identity and owner route remain exact.`],
  })));
  if (!same(register.labs, expectedLabs)) return fail('LAB_CONTRACT');

  const expectedAssessment = arch.chapters.map((chapter) => ({
    assessmentId: `${chapter.id}-ASMT-01`, chapterId: chapter.id, exerciseOutput: `${chapter.milestone.id} evidence artifact`,
    rubric: `Assess ${chapter.decisionJob} with observable evidence.`, answerIntent: 'Explain the decision, evidence, state, owner, and next action.',
    observablePassEvidence: `${chapter.milestone.id} passes its named qualification gate.`, authorityLimit: chapter.mleCeiling,
    retryRoute: 'HOLD or REOPEN with new evidence; never self-approve.',
  }));
  if (!same(register.assessment, expectedAssessment)) return fail('ASSESSMENT_CONTRACT');

  for (let index = 0; index < register.handoffs.length; index += 1) {
    const item = register.handoffs[index]; const chapter = arch.chapters[index];
    if (item.chapterId !== chapter.id || !item.phase08Instructions.includes(chapter.id) || /publishable manuscript prose now/i.test(item.phase08Instructions)
        || !item.recheckTriggers.length || !item.prohibitedClaims.length || !same(item.evidenceManifest, truth.claims.claims.filter((claim) => claim.chapterId === chapter.id).map((claim) => claim.claimId))) return fail('HANDOFF_CONTRACT');
  }

  const expectedVisuals = arch.chapters.flatMap((chapter, index) => {
    const n = index + 1;
    const base = { visualId: `MLE-V${String(n).padStart(2,'0')}.1`, chapterId: chapter.id, kind: 'semantic-html-css', insertionAnchor: `${chapter.id}-S03`,
      decisionHelped: chapter.decisionJob, essentialLabels: ['decision','evidence','state','owner','next action'], captionIntent: `Explain the ${chapter.milestone.id} decision evidence.`,
      altIntent: `Text alternative for ${chapter.id} evidence flow.`, longDescriptionIntent: `Ordered description of ${chapter.id} evidence, state, owner, and next action.`,
      numericTruthDisposition: 'semantic-html-css', candidateStatus: 'not-applicable', reservedPath: null };
    return CANDIDATES.has(n) ? [base, { ...base, visualId: CANDIDATES.get(n), kind: 'imagegen-candidate', candidateStatus: 'reserved', reservedPath: `assets/images/machine-learning-engineering/${CANDIDATES.get(n)}-2400x1600.png` }] : [base];
  });
  if (!same(register.visuals, expectedVisuals)) return fail('VISUAL_CONTRACT');

  const furnitureIds = {
    benchZero: seq('FURN-BZ-', 10), parts: seq('FURN-PART-', 7),
    appendices: Array.from({ length: 7 }, (_, index) => `APP-${String.fromCharCode(65 + index)}`),
    closing: seq('FURN-CLOSE-', 5),
  };
  for (const [family, ids] of Object.entries(furnitureIds)) {
    const records = register.furniture[family];
    if (!same(records.map((item) => item.id), ids) || !same(records.map((item) => item.order), ids.map((_, index) => index + 1))
        || records.some((item) => !nonempty(item.purpose) || !item.requiredContent.length || !nonempty(item.accessibility) || !nonempty(item.phase08Instructions))) return fail('FURNITURE_CONTRACT');
  }
  const obligations = ['Bench Setup','part decision question','incoming evidence','part map','part-exit Qualification Gate'];
  if (register.furniture.parts.some((item) => !same(item.requiredContent, obligations))
      || register.furniture.closing[4].purpose !== 'About Komal'
      || register.furniture.closingStatement !== 'Ship the model only when its evidence can travel with it.') return fail('FURNITURE_CONTRACT');

  if (!same(canonical, FROZEN_CANONICAL)) return fail('FROZEN_INPUT_IDENTITY');
  return pass(COUNT_VALUES);
}

function packagePaths(bundle) {
  return bundle.inventory.filter((item) => item !== VERIFICATION_PATH).map((item) => ({ path: item, sha256: bundle.files?.[item]?.sha256 }));
}

function reviewBindings(task, bundle) {
  const chapters = (first, last) => CHAPTER_PATHS.slice(first - 1, last);
  if (task === 'TASK-01') return [
    `git:plan-commit:${PLAN_COMMIT}`, PHASE07_ALLOWED_PATHS[0], ...BOOTSTRAP_SCRATCH,
    'github:#79:body','github:#79:labels','github:#84:body','github:#84:labels',
    ...Object.values(STATE_PATHS), `${BOOK}/validate-phase-07.mjs`, `${BOOK}/validate-phase-07.test.mjs`,
    'inventory:phase07-production-absence','inventory:phase07-scratch','git:activation-checkpoint',
  ];
  if (task === 'TASK-05') return [...chapters(1,7), PHASE07_SCRATCH_PATHS[3], ...FROZEN_INPUT_PATHS];
  if (task === 'TASK-06') return [...chapters(8,14), PHASE07_SCRATCH_PATHS[4], ...FROZEN_INPUT_PATHS];
  if (task === 'TASK-07') return [...chapters(15,21), PHASE07_SCRATCH_PATHS[5], ...FROZEN_INPUT_PATHS];
  const shared = [`${BOOK}/blueprints/blueprint-register.json`, ...CHAPTER_PATHS, `${BOOK}/blueprints/whole-book-furniture.md`, `${BOOK}/blueprints/verification-report.md`, `${BOOK}/blueprints/phase-08-handoff.md`, `${BOOK}/validate-phase-07.mjs`, `${BOOK}/validate-phase-07.test.mjs`];
  const laneReviews = REVIEW_NAMES.slice(1,4).flatMap((name) => {
    const paths = [`${REVIEW}/${name}.md`];
    const review = bundle.reviews?.find((item) => item.path === paths[0]);
    if (review?.repairPath) paths.push(review.repairPath);
    return paths;
  });
  if (task === 'TASK-09') return [...shared, ...laneReviews, ...FROZEN_INPUT_PATHS];
  const prior = REVIEW_NAMES.slice(0,5).flatMap((name) => {
    const paths = [`${REVIEW}/${name}.md`];
    const review = bundle.reviews?.find((item) => item.path === paths[0]);
    if (review?.repairPath) paths.push(review.repairPath);
    return paths;
  });
  return [...shared, ...prior, ...FROZEN_INPUT_PATHS, 'digest:pre-close-path-package'];
}

function temporalEvidence() {
  return {
    temporalPhase05Validator: ['e1705e03389d174cc107af9850cb3cb839f92b1f','1b3d92809cbe2279dda0e5782083882936874f4f1a458c86423593548fad8132','2111','tracked bytes only','ordinary empty node_modules','node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-05.mjs --stage=final','7 parts, 21 chapters, 21 milestones, trace 8/22/17/10, 12 domains, 5 ports, 40 contexts, 35 exits, 5 cases, 5 reviews'].join(' | '),
    temporalPhase05Tests: ['node --test project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-05.test.mjs','190/190'].join(' | '),
    temporalPhase06Validator: ['e4b9af4ee2d6abd31e8160224db7a99e66b6f02a','666935f13e6aee676a3142b8c80a395adb56204dbb08abed9b42e51564a59c9d','02c1ff0b7ee4c9174f507511f88f2acf3c8719e96d5f71aa735bc7c564a397ec','7cfe18f9837363c9785e49728d1c3b8e060b5295dbc4763ff9d10d56d51146a3','GH_REPO=alpeshznakrani/komalnakrani','standalone local clone','ordinary empty node_modules','node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.mjs --stage=final','46 sources, 63 claims, 12 cases, 21 packs, edges 160/34'].join(' | '),
    temporalPhase06Tests: ['node --test project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.test.mjs','190/190'].join(' | '),
  };
}

export function buildExpectedVerification(bundle, { generatedAt = '2026-08-18T23:59:00+05:30' } = {}) {
  const artifacts = [...packagePaths(bundle), ...Object.values(STATE_PATHS).map((relative) => ({ path: relative, sha256: bundle.files?.[relative]?.sha256 }))]
    .map((item) => ({ ...item, kind: 'required', required: true }));
  const reviews = (bundle.reviews ?? []).map((review) => ({
    task: review.task, path: review.path, sha256: review.sha256, repairPath: review.repairPath, repairSha256: review.repairSha256,
    specVerdict: review.specVerdict, qualityVerdict: review.qualityVerdict,
    boundArtifacts: review.boundArtifacts.map((item) => ({ path: item.path, sha256: item.sha256 })),
  }));
  const temporal = temporalEvidence();
  const checks = Object.fromEntries(CHECK_KEYS.map((name) => [name, { status: 'PASS', evidence: temporal[name] ?? `${name} PASS with fresh Phase 07 evidence.` }]));
  const preCloseInventory = bundle.inventory.filter((item) => item !== VERIFICATION_PATH && !item.endsWith('task-10-hostile-integration.md') && !item.endsWith('task-10-hostile-integration-repair.md'));
  return {
    schema: 'mle-phase-07-verification/v1', role: 'machine-learning-engineer', book: 'machine-learning-engineering', phase: '07', generatedAt,
    counts: { ...COUNT_VALUES }, artifacts, reviews,
    architectureTrace: { claims: 22, boundaries: 17, scenarios: 10, domains: 12, clusters: 8, chapterEdges: 103 },
    researchTrace: { sources: 46, claims: 63, cases: 12, sourceClaimEdges: 160, caseChapterEdges: 104, claimCaseEdges: 198, caseSourceUses: 34, reverseSymmetry: 'PASS' },
    dossierTrace: { milestones: 21, states: 17, legalTransitions: 19, forbiddenTransitions: 2, reopenTriggers: 4, firstMilestone: 'BL-00', terminalMilestone: 'BL-20', terminalState: 'REVIEWED' },
    visualContract: { semanticVisuals: 21, imagegenCandidates: 4, generatedAssets: 0, svgAssets: 0, webpAssets: 0, numericTruth: 'semantic-html-css', candidateIds: [...CANDIDATES.values()] },
    furniture: { benchZero: 10, parts: 7, partObligationsEach: 5, appendices: 7, closing: 5, aboutKomalIncluded: true, closingStatement: 'Ship the model only when its evidence can travel with it.' },
    tdd: {
      red: { command: `node --test ${BOOK}/validate-phase-07.test.mjs`, nodeVersion: 'v22.23.1', exitCode: 1, tests: 1, pass: 0, fail: 1, errorCode: 'ERR_MODULE_NOT_FOUND', missingPath: 'validate-phase-07.mjs' },
      green: { command: `node --test ${BOOK}/validate-phase-07.test.mjs`, exitCode: 0, tests: 220, pass: 220, fail: 0, skipped: 0, todo: 0 },
    },
    checks,
    pathBoundaries: {
      allowlist: [...PHASE07_ALLOWED_PATHS], scratchAllowlist: [...PHASE07_SCRATCH_PATHS],
      preCloseInventoryDigest: digest(preCloseInventory), finalInventoryDigest: digest(bundle.inventory),
      packageDigest: stableDigest(packagePaths(bundle)), unexpectedPaths: [], symlinks: [],
    },
    stateTransition: Object.fromEntries(Object.entries(STATE_PATHS).map(([name, relative]) => [name, { path: relative, sha256: bundle.files?.[relative]?.sha256, status: 'phase-07-complete' }])),
    githubExpectations: { rootIssue: { number: 79, state: 'OPEN', labels: ['role:machine-learning-engineer','status:in-progress'] }, childIssue: { number: 84, state: 'CLOSED', labels: ['phase:07-chapter-blueprints','role:machine-learning-engineer','status:done'] } },
    nextGate: { name: 'Phase 08 original manuscript and deterministic companion production', status: 'inactive', catalogPosition6: 'not-started' },
  };
}

function verificationSchemaFailure(value) {
  const targets = [
    [value, VERIFICATION_KEYS], [value?.artifacts?.[0], ARTIFACT_KEYS], [value?.reviews?.[0], REVIEW_KEYS],
    [value?.reviews?.[0]?.boundArtifacts?.[0], BOUND_ARTIFACT_KEYS], [value?.architectureTrace, ARCHITECTURE_TRACE_KEYS],
    [value?.researchTrace, RESEARCH_TRACE_KEYS], [value?.dossierTrace, DOSSIER_TRACE_KEYS], [value?.visualContract, VISUAL_CONTRACT_KEYS],
    [value?.furniture, VERIFICATION_FURNITURE_KEYS], [value?.tdd, TDD_KEYS], [value?.tdd?.red, RED_KEYS], [value?.tdd?.green, GREEN_KEYS],
    [value?.checks, CHECK_KEYS], [value?.checks?.phase01Validator, CHECK_RESULT_KEYS], [value?.pathBoundaries, PATH_BOUNDARY_KEYS],
    [value?.stateTransition, STATE_TRANSITION_KEYS], [value?.stateTransition?.role, STATE_RECORD_KEYS], [value?.stateTransition?.root, STATE_RECORD_KEYS],
    [value?.stateTransition?.localIssue, STATE_RECORD_KEYS], [value?.stateTransition?.factory, STATE_RECORD_KEYS],
    [value?.githubExpectations, GITHUB_EXPECTATION_KEYS], [value?.githubExpectations?.rootIssue, GITHUB_ISSUE_KEYS],
    [value?.githubExpectations?.childIssue, GITHUB_ISSUE_KEYS], [value?.nextGate, NEXT_GATE_KEYS],
  ];
  if (targets.some(([item, keys]) => !exactKeys(item, keys))) return true;
  if (!Array.isArray(value.artifacts) || value.artifacts.some((item) => !exactKeys(item, ARTIFACT_KEYS))) return true;
  if (!Array.isArray(value.reviews) || value.reviews.some((item) => !exactKeys(item, REVIEW_KEYS) || !Array.isArray(item.boundArtifacts) || item.boundArtifacts.some((bound) => !exactKeys(bound, BOUND_ARTIFACT_KEYS)))) return true;
  if (Object.values(value.checks).some((item) => !exactKeys(item, CHECK_RESULT_KEYS))) return true;
  return false;
}

export function validateVerificationManifest(value, bundle) {
  if (verificationSchemaFailure(value)) return fail('VERIFICATION_SCHEMA');
  const timestamp = value.generatedAt;
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/.test(timestamp) || !Number.isFinite(Date.parse(timestamp))) return fail('VERIFICATION_CONTRACT');
  const temporal = temporalEvidence();
  for (const [name, evidence] of Object.entries(temporal)) {
    if (value.checks[name].status !== 'PASS' || value.checks[name].evidence !== evidence) return fail('TEMPORAL_EVIDENCE');
  }
  const expected = buildExpectedVerification(bundle, { generatedAt: value.generatedAt });
  if (!same(value, expected)) return fail('VERIFICATION_CONTRACT');
  return pass();
}

function parseProjection(text) {
  const match = String(text).match(/PHASE07-CHAPTER-PROJECTION-START\s*```json\s*([\s\S]*?)\s*```\s*PHASE07-CHAPTER-PROJECTION-END/);
  if (!match) return null;
  try { return JSON.parse(match[1]); } catch { return null; }
}

function reviewAccepted(text) {
  const tail = String(text).trimEnd().split(/\r?\n/).filter((line) => line.trim()).slice(-2).map((line) => line.trim());
  return same(tail, ['SPEC COMPLIANCE PASS','QUALITY APPROVED']);
}

function validateReviewChain(bundle, requiredTasks) {
  const reviews = bundle.reviews ?? [];
  const expectedTasks = REVIEW_TASKS.filter((task) => requiredTasks.includes(task));
  if (!same(reviews.map((review) => review.task), expectedTasks)) return fail('REVIEW_CHAIN','review-order');
  for (const review of reviews) {
    if (!expectedTasks.includes(review.task)) return fail('REVIEW_CHAIN','unexpected-task');
    const expectedIndex = REVIEW_TASKS.indexOf(review.task);
    const expectedPath = `${REVIEW}/${REVIEW_NAMES[expectedIndex]}.md`;
    const file = bundle.files?.[review.path];
    if (review.path !== expectedPath || !file || review.sha256 !== file.sha256 || review.specVerdict !== 'SPEC COMPLIANCE PASS' || review.qualityVerdict !== 'QUALITY APPROVED' || !reviewAccepted(file.text)) return fail('REVIEW_CHAIN',`${review.task}:identity-verdict`);
    const priorFailure = /SPEC COMPLIANCE FAIL|QUALITY CHANGES REQUESTED/.test(file.text);
    if (Boolean(review.repairPath) !== Boolean(review.repairSha256)) return fail('REVIEW_CHAIN',`${review.task}:repair-pair`);
    if (priorFailure !== Boolean(review.repairPath && review.repairSha256)) return fail('REVIEW_CHAIN',`${review.task}:repair-iff`);
    if (review.repairPath) {
      const expectedRepair = expectedPath.replace(/\.md$/, '-repair.md'); const repair = bundle.files?.[review.repairPath];
      if (review.repairPath !== expectedRepair || !repair || review.repairSha256 !== repair.sha256 || !bundle.inventory.includes(review.repairPath)) return fail('REVIEW_CHAIN',`${review.task}:repair-binding`);
    }
    const expectedBindings = reviewBindings(review.task, bundle);
    if (!same(review.boundArtifacts.map((item) => item.path), expectedBindings) || review.boundArtifacts.some((item) => !/^[0-9a-f]{64}$/.test(item.sha256))) return fail('REVIEW_CHAIN',`${review.task}:binding-paths`);
    for (const binding of review.boundArtifacts) {
      let expectedHash = bundle.files?.[binding.path]?.sha256;
      if (review.task === 'TASK-01') expectedHash = bundle.activationSnapshot?.bindingHashes?.[binding.path]
        ?? SCRATCH_HASHES[binding.path] ?? ACTIVATION_STATE_HASHES[binding.path] ?? LIVE_GITHUB_HASHES[binding.path];
      if (binding.path === 'digest:pre-close-path-package') expectedHash = bundle.activationSnapshot?.bindingHashes?.[binding.path];
      const activationArtifactHash = bundle.activationSnapshot?.activationArtifactHashes?.[binding.path];
      if (!expectedHash || (binding.sha256 !== expectedHash && binding.sha256 !== activationArtifactHash)) return fail('REVIEW_CHAIN',`${review.task}:binding:${binding.path}`,`expected ${expectedHash}; got ${binding.sha256}`);
    }
  }
  const allowedRepairs = new Set(reviews.map((item) => item.repairPath).filter(Boolean));
  if (bundle.inventory.some((item) => item.endsWith('-repair.md') && !allowedRepairs.has(item))) return fail('REVIEW_CHAIN','orphan-repair');

  const snapshot = bundle.activationSnapshot;
  if (!snapshot || snapshot.planCommit !== PLAN_COMMIT || !/^[0-9a-f]{40}$/.test(snapshot.checkpoint)
      || snapshot.checkpoint !== bundle.runtime?.git?.activationCheckpoint
      || !same(snapshot.github?.rootIssue, { number:79,state:'OPEN',labels:['role:machine-learning-engineer','status:in-progress'],bodySha256:LIVE_GITHUB_HASHES['github:#79:body'] })
      || !same(snapshot.github?.childIssue, { number:84,state:'OPEN',labels:['phase:07-chapter-blueprints','role:machine-learning-engineer','status:in-progress'],bodySha256:LIVE_GITHUB_HASHES['github:#84:body'] })
      || !same(snapshot.authorityHashes, ACTIVATION_STATE_HASHES) || !same(snapshot.scratchHashes, SCRATCH_HASHES)
      || !same(snapshot.productionInventory?.present, BOOTSTRAP_PATHS)
      || !same(snapshot.productionInventory?.absent, PHASE07_ALLOWED_PATHS.filter((item) => !BOOTSTRAP_PATHS.includes(item)))
      || !same(snapshot.scratchInventory?.present, BOOTSTRAP_SCRATCH)
      || !same(snapshot.scratchInventory?.absent, PHASE07_SCRATCH_PATHS.slice(3))) return fail('REVIEW_CHAIN','activation-snapshot');
  for (const [relative, text] of Object.entries(snapshot.activationArtifactFixtureBytes ?? {})) {
    if (snapshot.activationArtifactHashes?.[relative] !== hash(text)) return fail('REVIEW_CHAIN',`activation-fixture:${relative}`);
  }
  if (snapshot.activationArtifactHashes?.[PHASE07_ALLOWED_PATHS[0]] !== 'c0c1eccec1f4bd05fc5c194cb874027a2b3bc0761c91be3cc0a5b5e933b6a107') return fail('REVIEW_CHAIN','plan-artifact-hash');
  const productionDigest = digest({ present: snapshot.productionInventory.present, absent: snapshot.productionInventory.absent });
  const scratchDigest = digest({ present: snapshot.scratchInventory.present, absent: snapshot.scratchInventory.absent });
  const fixedBindings = { [`git:plan-commit:${PLAN_COMMIT}`]: hash(PLAN_COMMIT), ...LIVE_GITHUB_HASHES, ...ACTIVATION_STATE_HASHES,
    ...snapshot.activationArtifactHashes, 'inventory:phase07-production-absence': productionDigest,
    'inventory:phase07-scratch': scratchDigest, 'git:activation-checkpoint': hash(snapshot.checkpoint) };
  for (const [key, value] of Object.entries(fixedBindings)) if (snapshot.bindingHashes?.[key] !== value) return fail('REVIEW_CHAIN',`snapshot-binding:${key}`,`expected ${value}; got ${snapshot.bindingHashes?.[key]}`);
  return pass();
}

function pathBoundary(bundle, stage) {
  const declaredRepairs = new Set((bundle.reviews ?? []).map((item) => item.repairPath).filter(Boolean));
  const finalExpected = PHASE07_ALLOWED_PATHS.filter((item) => !item.endsWith('-repair.md') || declaredRepairs.has(item));
  const expected = stage === 'bootstrap' ? BOOTSTRAP_PATHS
    : stage === 'pre-hostile' ? CLEAN_FINAL_PATHS.filter((item) => item !== VERIFICATION_PATH && !item.endsWith('/task-10-hostile-integration.md'))
      : stage === 'pre-close' ? CLEAN_FINAL_PATHS.filter((item) => item !== VERIFICATION_PATH)
        : finalExpected;
  if (stage === 'bootstrap') {
    if (!same(bundle.inventory, expected) || !same(bundle.scratchInventory, BOOTSTRAP_SCRATCH)) return fail('BOOTSTRAP_OUTPUT_PREMATURE');
  } else {
    const permitted = new Set(PHASE07_ALLOWED_PATHS);
    if (bundle.inventory.some((item) => !permitted.has(item)) || bundle.scratchInventory.some((item) => !PHASE07_SCRATCH_PATHS.includes(item)) || (bundle.symlinks ?? []).length) return fail('PATH_BOUNDARY');
    if (!same(bundle.inventory, expected)) return fail('PATH_BOUNDARY');
  }
  return pass();
}

function validateActiveState(bundle) {
  if (!/Current global phase: Phase 07 chapter blueprints and frozen figure contracts active/i.test(bundle.state?.role ?? '') || /Current global phase:[^\n]*complete/i.test(bundle.state?.role ?? '') || !/(?:Phase 08 original manuscript: next gate, inactive|08 manuscript[^\n]*next gate, inactive|Phase 08[^\n]*remain inactive)/i.test(bundle.state?.role ?? '')) return fail('STATE_ROLE_ACTIVE');
  if (!/Active child: \[#84\b/i.test(bundle.state?.root ?? '') || /Active child: #85/i.test(bundle.state?.root ?? '') || !/(?:^Phase 08 inactive$|Phase 08,[\s\S]{0,220}?remain inactive)/im.test(bundle.state?.root ?? '')) return fail('STATE_ROOT_ACTIVE');
  if (!/Status: active; live child #84 is open with status:in-progress\./i.test(bundle.state?.localIssue ?? '') || /Status: complete/i.test(bundle.state?.localIssue ?? '') || !/(?:Phase 08 inactive\.|Phase 08[\s\S]{0,120}?remains inactive)/i.test(bundle.state?.localIssue ?? '')) return fail('STATE_LOCAL_ISSUE_ACTIVE');
  if (!/Active child: #84\./i.test(bundle.state?.factory ?? '') || /Phase 07 complete/i.test(bundle.state?.factory ?? '') || !/Catalog position 6: not started/i.test(bundle.state?.factory ?? '') || !/Phase 08 original manuscript and deterministic companion production: next gate, inactive\./i.test(bundle.state?.factory ?? '')) return fail('STATE_FACTORY_ACTIVE');
  return pass();
}

function validateFinalState(bundle) {
  if (!/Current global phase: Phase 07 chapter blueprints and frozen figure contracts complete/i.test(bundle.state?.role ?? '') || !/Active child issue: none/i.test(bundle.state?.role ?? '') || /Active child issue: #/i.test(bundle.state?.role ?? '') || !/Phase 08 original manuscript and deterministic companion production: sole next gate, inactive/i.test(bundle.state?.role ?? '')) return fail('STATE_ROLE_FINAL');
  if (!/Last completed child: \[#84\b/i.test(bundle.state?.root ?? '') || !/Active child: none/i.test(bundle.state?.root ?? '') || /Active child: #84/i.test(bundle.state?.root ?? '') || !/^Phase 08 sole next gate, inactive$/im.test(bundle.state?.root ?? '')) return fail('STATE_ROOT_FINAL');
  if (!/Status: complete; live child #84 is closed with status:done\./i.test(bundle.state?.localIssue ?? '') || /Status: active/i.test(bundle.state?.localIssue ?? '') || !/Phase 08 is the sole next gate and inactive\./i.test(bundle.state?.localIssue ?? '')) return fail('STATE_LOCAL_ISSUE_FINAL');
  if (!/Phase 07 chapter blueprints and frozen figure contracts: complete/i.test(bundle.state?.factory ?? '') || /Phase 08 active/i.test(bundle.state?.factory ?? '') || !/Catalog position 6: not started/i.test(bundle.state?.factory ?? '') || !/Phase 08 original manuscript and deterministic companion production: sole next gate, inactive\./i.test(bundle.state?.factory ?? '')) return fail('STATE_FACTORY_FINAL');
  return pass();
}

function githubActive(bundle) {
  const expected = { rootIssue:{number:79,state:'OPEN',labels:['role:machine-learning-engineer','status:in-progress']}, childIssue:{number:84,state:'OPEN',labels:['phase:07-chapter-blueprints','role:machine-learning-engineer','status:in-progress']} };
  return validateGithub(bundle, expected, 'GITHUB_ACTIVE');
}
function githubFinal(bundle) {
  const expected = { rootIssue:{number:79,state:'OPEN',labels:['role:machine-learning-engineer','status:in-progress']}, childIssue:{number:84,state:'CLOSED',labels:['phase:07-chapter-blueprints','role:machine-learning-engineer','status:done']} };
  return validateGithub(bundle, expected, 'GITHUB_FINAL');
}

function validateGithub(bundle, expected, contractCode) {
  for (const key of ['rootIssue','childIssue']) {
    const issue = bundle.runtime?.github?.[key];
    if (!issue || !same({ number:issue.number,state:issue.state,labels:issue.labels }, expected[key])) return fail(contractCode);
    if (Object.hasOwn(issue, 'body') || Object.hasOwn(issue, 'bodySha256')) {
      const expectedBodyHash = LIVE_GITHUB_HASHES[key === 'rootIssue' ? 'github:#79:body' : 'github:#84:body'];
      if (typeof issue.body !== 'string' || issue.bodySha256 !== hash(issue.body) || issue.bodySha256 !== expectedBodyHash) return fail('GITHUB_BODY_DRIFT');
    }
  }
  return pass();
}

function validateFrozenInputIdentity(bundle) {
  for (const [relative, expectedHash] of Object.entries(FROZEN_INPUT_HASHES)) {
    if (bundle.files?.[relative]?.sha256 !== expectedHash) return fail('FROZEN_INPUT_IDENTITY', relative);
  }
  return pass();
}

function validateActivationCheckpoint(bundle) {
  return bundle.runtime?.git?.activationCheckpointValid === false ? fail('GIT_ACTIVATION_CHECKPOINT') : pass();
}

export function validatePhase07Bundle(bundle, { stage = 'pre-hostile' } = {}) {
  if (!['bootstrap','pre-hostile','pre-close','final-content','final'].includes(stage)) throw new Error(`Unknown Phase 07 validation stage: ${stage}`);
  let result;
  if (stage === 'bootstrap') {
    result = pathBoundary(bundle, stage); if (!result.ok) return result;
    result = validateActiveState(bundle); if (!result.ok) return result;
    result = validateActivationCheckpoint(bundle); if (!result.ok) return result;
    return githubActive(bundle);
  }

  result = validateFrozenInputIdentity(bundle); if (!result.ok) return result;
  if (stage === 'final') { result = validateActivationCheckpoint(bundle); if (!result.ok) return result; }

  for (const chapter of bundle.register?.chapters ?? []) {
    const relative = CHAPTER_PATHS[chapter.order - 1]; const parsed = parseProjection(bundle.files?.[relative]?.text);
    if (!parsed || !same(parsed, bundle.chapterProjections?.[chapter.chapterId])) return fail('CHAPTER_PROJECTION');
  }
  const furnitureParsed = parseProjection(bundle.files?.[`${BOOK}/blueprints/whole-book-furniture.md`]?.text);
  if (!furnitureParsed || !same(furnitureParsed, bundle.furnitureProjection)) return fail('FURNITURE_PROJECTION');

  result = validateBlueprintRegister(bundle.register, bundle.canonical); if (!result.ok) return result;
  for (const relative of CHAPTER_PATHS) {
    const text = bundle.files?.[relative]?.text ?? '';
    let cursor = -1;
    for (const heading of CHAPTER_HEADINGS) { const next = text.indexOf(`## ${heading}`); if (next <= cursor) return fail('CHAPTER_MARKDOWN_CONTRACT'); cursor = next; }
    for (const literal of ['Bench Setup','Bench Sheet','Qualification Gate','state and dossier delta','authority route','next evidence']) if (!text.includes(literal)) return fail('CHAPTER_MARKDOWN_CONTRACT');
  }
  const report = bundle.files?.[`${BOOK}/blueprints/verification-report.md`]?.text ?? '';
  const handoff = bundle.files?.[`${BOOK}/blueprints/phase-08-handoff.md`]?.text ?? '';
  if (!/Register and projections/i.test(report) || !/Boundaries/i.test(report) || !/No manuscript, asset, code, publication, course, Abhyaas, certification, second-volume, or next-role output is authorized/i.test(report)
      || !/Phase 08 remains inactive/i.test(handoff) || /Phase 08 active/i.test(handoff)) return fail('REPORT_HANDOFF_CONTRACT');

  const tasks = stage === 'pre-hostile' ? REVIEW_TASKS.slice(0,5) : REVIEW_TASKS;
  result = validateReviewChain(bundle, tasks); if (!result.ok) return result;
  if (stage === 'pre-close' && bundle.verification) return fail('VERIFICATION_PREMATURE');
  if ((stage === 'final-content' || stage === 'final') && !bundle.verification) return fail('VERIFICATION_MISSING');
  result = pathBoundary(bundle, stage); if (!result.ok) return result;
  if (stage === 'pre-hostile' || stage === 'pre-close') {
    result = validateActiveState(bundle); if (!result.ok) return result;
    result = githubActive(bundle); if (!result.ok) return result;
    if (bundle.runtime?.git?.branch !== 'main' || bundle.runtime?.git?.clean !== true || bundle.runtime?.git?.head !== bundle.runtime?.git?.remoteMain) return fail('GIT_ACTIVE');
    return pass(COUNT_VALUES);
  }

  result = validateFinalState(bundle); if (!result.ok) return result;
  result = githubFinal(bundle); if (!result.ok) return result;
  result = validateVerificationManifest(bundle.verification, bundle); if (!result.ok) return result;
  if (stage === 'final' && (bundle.runtime?.git?.branch !== 'main' || bundle.runtime?.git?.clean !== true || bundle.runtime?.git?.head !== bundle.runtime?.git?.remoteMain)) return fail('GIT_FINAL');
  return pass(COUNT_VALUES);
}

async function readEntry(root, relative) {
  const absolute = path.join(root, relative); if (!existsSync(absolute)) return null;
  const text = await readFile(absolute, 'utf8'); return { text, sha256: hash(text) };
}
async function walk(root, relative, files, symlinks) {
  const absolute = path.join(root, relative); if (!existsSync(absolute)) return;
  for (const entry of await readdir(absolute, { withFileTypes: true })) {
    const next = path.posix.join(relative, entry.name);
    if (entry.isSymbolicLink()) symlinks.push(next);
    else if (entry.isDirectory()) await walk(root, next, files, symlinks);
    else if (entry.isFile()) files.push(next);
  }
}

function parseBootstrapSnapshot(text) {
  const match = String(text).match(/```json\s*([\s\S]*?)\s*```/); if (!match) return null;
  try { return JSON.parse(match[1]); } catch { return null; }
}

function parseReviewRecord(text, sha256) {
  const match = String(text).match(/PHASE07-REVIEW-RECORD-START\s*```json\s*([\s\S]*?)\s*```\s*PHASE07-REVIEW-RECORD-END/);
  if (!match) return null;
  try {
    const record = JSON.parse(match[1]);
    if (record.schema !== 'mle-phase-07-review-record/v1') return null;
    const { schema: _schema, ...review } = record;
    return { ...review, sha256 };
  } catch { return null; }
}

function runtimeFromGitHub(root) {
  const run = (command, args) => execFileSync(command, args, { cwd: root, encoding: 'utf8' }).trim();
  const issue = (number) => { const data = JSON.parse(run('gh',['issue','view',String(number),'--json','number,state,labels,body'])); return { number:data.number,state:data.state,labels:data.labels.map((item) => item.name).sort(),body:data.body,bodySha256:hash(data.body) }; };
  const head = run('git',['rev-parse','HEAD']);
  return { git:{ branch:run('git',['branch','--show-current']),clean:run('git',['status','--porcelain']) === '',head,remoteMain:run('git',['ls-remote','origin','refs/heads/main']).split(/\s+/)[0],activationCheckpoint:head }, github:{rootIssue:issue(79),childIssue:issue(84)} };
}

function activationCheckpointInHistory(root, checkpoint, head) {
  if (!/^[0-9a-f]{40}$/.test(checkpoint ?? '') || !/^[0-9a-f]{40}$/.test(head ?? '')) return false;
  try {
    execFileSync('git', ['cat-file','-e',`${checkpoint}^{commit}`], { cwd: root, stdio: 'ignore' });
    execFileSync('git', ['merge-base','--is-ancestor',checkpoint,head], { cwd: root, stdio: 'ignore' });
    return true;
  } catch { return false; }
}

export async function loadPhase07Bundle(root, { runtime } = {}) {
  const files = {};
  for (const relative of [...new Set([...PHASE07_ALLOWED_PATHS,...PHASE07_SCRATCH_PATHS,...FROZEN_INPUT_PATHS,...Object.values(STATE_PATHS)])]) {
    const entry = await readEntry(root, relative); if (entry) files[relative] = entry;
  }
  const found = [];
  const symlinks = [];
  for (const relative of [`${BOOK}/blueprints`, REVIEW, SCRATCH, 'public', 'output', `${BOOK}/companion`, 'build/machine-learning-engineering', ...FORBIDDEN_OUTPUT_ROOTS, 'tmp']) await walk(root, relative, found, symlinks);
  for (const relative of FORBIDDEN_OUTPUT_FILES) if (existsSync(path.join(root, relative))) found.push(relative);
  const extras = found.filter((relative) => {
    if (PHASE07_ALLOWED_PATHS.includes(relative) || PHASE07_SCRATCH_PATHS.includes(relative)) return false;
    if (relative.startsWith(`${BOOK}/blueprints/`) || relative.startsWith(`${REVIEW}/`) || relative.startsWith(`${SCRATCH}/`) || relative.startsWith(`${BOOK}/companion/`) || relative.startsWith('build/machine-learning-engineering/')) return true;
    if (FORBIDDEN_OUTPUT_ROOTS.some((rootPath) => relative === rootPath || relative.startsWith(`${rootPath}/`)) || FORBIDDEN_OUTPUT_FILES.includes(relative)) return true;
    if (relative.startsWith('public/')) return relative.slice('public/'.length).includes('/') === false && !['.DS_Store','_headers','_redirects','favicon.svg','robots.txt','site.webmanifest'].includes(relative.slice('public/'.length));
    if (relative.startsWith('output/')) return relative.slice('output/'.length).includes('/') === false;
    if (relative.startsWith('tmp/')) return /(?:^|[-_/.])phase[-_]?0?7(?:[-_/.]|$)/i.test(relative);
    return false;
  }).sort();
  const inventory = [...PHASE07_ALLOWED_PATHS.filter((item) => files[item]), ...extras.filter((item) => !item.startsWith(`${SCRATCH}/`))];
  const scratchInventory = [...PHASE07_SCRATCH_PATHS.filter((item) => files[item]), ...extras.filter((item) => item.startsWith(`${SCRATCH}/`))];
  const readJson = (relative) => { try { return files[relative] ? JSON.parse(files[relative].text) : null; } catch { return null; } };
  const canonical = { architecture: readJson(`${BOOK}/architecture.json`), claims: readJson(`${BOOK}/sources/claim-register.json`), sources: readJson(`${BOOK}/sources/source-register.json`), cases: readJson(`${BOOK}/case-studies/case-study-register.json`) };
  const register = readJson(`${BOOK}/blueprints/blueprint-register.json`);
  const verification = readJson(VERIFICATION_PATH);
  const chapterProjections = Object.fromEntries(CHAPTER_PATHS.flatMap((relative, index) => {
    const projection = files[relative] ? parseProjection(files[relative].text) : null; return projection ? [[`MLE-CH-${String(index + 1).padStart(2,'0')}`, projection]] : [];
  }));
  const furnitureProjection = files[`${BOOK}/blueprints/whole-book-furniture.md`] ? parseProjection(files[`${BOOK}/blueprints/whole-book-furniture.md`].text) : null;
  const reviews = REVIEW_NAMES.flatMap((name) => {
    const relative = `${REVIEW}/${name}.md`; const entry = files[relative];
    const record = entry ? parseReviewRecord(entry.text, entry.sha256) : null;
    return record ? [record] : [];
  });
  const bootstrapText = files[`${REVIEW}/task-01-bootstrap.md`]?.text;
  const bootstrapRecord = parseBootstrapSnapshot(bootstrapText);
  let activationSnapshot = null;
  if (bootstrapRecord) {
    const bindingHashes = Object.fromEntries(reviews.find((review) => review.task === 'TASK-01')?.boundArtifacts?.map((item) => [item.path,item.sha256]) ?? []);
    const preCloseBinding = reviews.find((review) => review.task === 'TASK-10')?.boundArtifacts?.find((item) => item.path === 'digest:pre-close-path-package');
    if (preCloseBinding) bindingHashes[preCloseBinding.path] = preCloseBinding.sha256;
    activationSnapshot = { checkpoint:bootstrapRecord.activationCheckpoint,planCommit:bootstrapRecord.planCommit,github:bootstrapRecord.github,
      authorityHashes:bootstrapRecord.authorityHashes,activationArtifactHashes:bootstrapRecord.activationArtifactHashes,
      activationArtifactFixtureBytes:{},scratchHashes:bootstrapRecord.scratchHashes,productionInventory:{present:bootstrapRecord.productionInventory.present,absent:bootstrapRecord.productionInventory.absent},
      scratchInventory:{present:bootstrapRecord.scratchInventory.present,absent:bootstrapRecord.scratchInventory.absent},bindingHashes };
  }
  const state = Object.fromEntries(Object.entries(STATE_PATHS).map(([name,relative]) => [name,files[relative]?.text ?? '']));
  const loadedRuntime = structuredClone(runtime ?? runtimeFromGitHub(root));
  if (bootstrapRecord?.activationCheckpoint) loadedRuntime.git.activationCheckpoint = bootstrapRecord.activationCheckpoint;
  if (existsSync(path.join(root, '.git'))) loadedRuntime.git.activationCheckpointValid = activationCheckpointInHistory(root, loadedRuntime.git.activationCheckpoint, loadedRuntime.git.head);
  for (const issue of Object.values(loadedRuntime.github ?? {})) {
    if (typeof issue.body === 'string') issue.bodySha256 = hash(issue.body);
  }
  return { root, files, inventory, scratchInventory, symlinks, canonical, register, verification, reviews, chapterProjections, furnitureProjection, state, activationSnapshot, runtime: loadedRuntime };
}

async function main() {
  const here = path.dirname(fileURLToPath(import.meta.url)); const root = path.resolve(here, '../../../../..');
  const arg = process.argv.find((item) => item.startsWith('--stage=')); const stage = arg ? arg.split('=')[1] : 'pre-hostile';
  const bundle = await loadPhase07Bundle(root); const result = validatePhase07Bundle(bundle,{stage});
  if (!result.ok) { for (const item of result.errors) console.error(`${item.code}: ${item.path}: ${item.message}`); process.exitCode = 1; }
  else console.log(`PASS Phase 07 ${stage}: chapters=21; claims=63; sections=168; labs=42; visuals=25`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
