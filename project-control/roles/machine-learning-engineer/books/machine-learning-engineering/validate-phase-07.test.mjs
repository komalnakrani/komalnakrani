import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  PHASE07_ALLOWED_PATHS,
  PHASE07_SCRATCH_PATHS,
  buildExpectedVerification,
  loadPhase07Bundle,
  validateBlueprintRegister,
  validatePhase07Bundle,
  validateVerificationManifest,
} from './validate-phase-07.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../../../../..');
const book = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering';
const role = 'project-control/roles/machine-learning-engineer';
const PLAN_COMMIT = '21d4cfa2581193a5d76642e177bf44831cd3ea7b';
const ACTIVATION_CHECKPOINT = PLAN_COMMIT;
const clone = (value) => structuredClone(value);
const sha256 = (value) => createHash('sha256').update(value).digest('hex');
const json = async (relative) => JSON.parse(await readFile(path.join(root, relative), 'utf8'));
const deepFreeze = (value) => {
  if (value && typeof value === 'object' && !Object.isFrozen(value)) {
    Object.freeze(value);
    for (const child of Object.values(value)) deepFreeze(child);
  }
  return value;
};

const architecture = await json(`${book}/architecture.json`);
const claims = await json(`${book}/sources/claim-register.json`);
const sources = await json(`${book}/sources/source-register.json`);
const cases = await json(`${book}/case-studies/case-study-register.json`);
const canonical = { architecture, claims, sources, cases };

const PORT_IDS = ['PORT-MANAGED', 'PORT-CLASSICAL', 'PORT-DEEP', 'PORT-EDGE', 'PORT-SHARED'];
const CANDIDATES = new Map([[5, 'MLE-F05.1'], [14, 'MLE-F14.1'], [16, 'MLE-F16.1'], [18, 'MLE-F18.1']]);
const COUNT_VALUES = {
  parts: 7, chapters: 21, claims: 63, sources: 46, sourceClaimEdges: 160,
  cases: 12, caseChapterEdges: 104, claimCaseEdges: 198, caseSourceUses: 34,
  architectureClaims: 22, boundaries: 17, scenarios: 10, domains: 12,
  clusters: 8, ports: 5, chapterPortAssertions: 105, partExitChecks: 35,
  states: 17, legalTransitions: 19, forbiddenTransitions: 2, reopenTriggers: 4,
  appendices: 7, frontMatterItems: 10, closingItems: 5, sections: 168,
  labs: 42, assessments: 21, visuals: 25, handoffs: 21, imagegenCandidates: 4,
};

const REGISTER_KEYS = ['schema','identity','counts','chapters','claimTeaching','sourceUses','caseUses','dossier','ports','sections','labs','assessment','visuals','handoffs','furniture'];
const IDENTITY_KEYS = ['architectureVersion','architectureMdSha256','architectureJsonSha256','visualForecastSha256','integrationContract','integrationManifestSha256','phase06HandoffSha256','phase06VerificationSha256','author','title','designSystem','format'];
const COUNT_KEYS = Object.keys(COUNT_VALUES);
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

const REVIEW_NAMES = ['task-01-bootstrap','task-05-lane-a','task-06-lane-b','task-07-lane-c','task-09-canonical-integration','task-10-hostile-integration'];
const EXPECTED_PHASE07_PATHS = [
  'docs/superpowers/plans/2026-08-18-machine-learning-engineer-phase-07.md',
  `${role}/issues/phase-07-chapter-blueprints.md`,
  `${book}/blueprints/blueprint-register.json`,
  `${book}/blueprints/chapter-01.md`, `${book}/blueprints/chapter-02.md`, `${book}/blueprints/chapter-03.md`,
  `${book}/blueprints/chapter-04.md`, `${book}/blueprints/chapter-05.md`, `${book}/blueprints/chapter-06.md`,
  `${book}/blueprints/chapter-07.md`, `${book}/blueprints/chapter-08.md`, `${book}/blueprints/chapter-09.md`,
  `${book}/blueprints/chapter-10.md`, `${book}/blueprints/chapter-11.md`, `${book}/blueprints/chapter-12.md`,
  `${book}/blueprints/chapter-13.md`, `${book}/blueprints/chapter-14.md`, `${book}/blueprints/chapter-15.md`,
  `${book}/blueprints/chapter-16.md`, `${book}/blueprints/chapter-17.md`, `${book}/blueprints/chapter-18.md`,
  `${book}/blueprints/chapter-19.md`, `${book}/blueprints/chapter-20.md`, `${book}/blueprints/chapter-21.md`,
  `${book}/blueprints/whole-book-furniture.md`,
  `${book}/blueprints/verification-report.md`,
  `${book}/blueprints/phase-08-handoff.md`,
  `${book}/validate-phase-07.mjs`,
  `${book}/validate-phase-07.test.mjs`,
  `${book}/phase-07-verification.json`,
  `${role}/reviews/phase-07/task-01-bootstrap.md`,
  `${role}/reviews/phase-07/task-01-bootstrap-repair.md`,
  `${role}/reviews/phase-07/task-05-lane-a.md`,
  `${role}/reviews/phase-07/task-05-lane-a-repair.md`,
  `${role}/reviews/phase-07/task-06-lane-b.md`,
  `${role}/reviews/phase-07/task-06-lane-b-repair.md`,
  `${role}/reviews/phase-07/task-07-lane-c.md`,
  `${role}/reviews/phase-07/task-07-lane-c-repair.md`,
  `${role}/reviews/phase-07/task-09-canonical-integration.md`,
  `${role}/reviews/phase-07/task-09-canonical-integration-repair.md`,
  `${role}/reviews/phase-07/task-10-hostile-integration.md`,
  `${role}/reviews/phase-07/task-10-hostile-integration-repair.md`,
];
const EXPECTED_PHASE07_SCRATCH_PATHS = [
  '.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/phase-07-plan.md',
  '.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/phase-07-plan-review.md',
  '.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/phase-07-plan-repair.md',
  '.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/lane-a-blueprint-manifest.json',
  '.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/lane-b-blueprint-manifest.json',
  '.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/lane-c-blueprint-manifest.json',
];
const EXPECTED_BOOTSTRAP_PATHS = [
  'docs/superpowers/plans/2026-08-18-machine-learning-engineer-phase-07.md',
  `${role}/issues/phase-07-chapter-blueprints.md`,
  `${book}/validate-phase-07.mjs`,
  `${book}/validate-phase-07.test.mjs`,
];
const ACTIVE_CHECKPOINT_CLEAN_PATHS = new Set([
  EXPECTED_BOOTSTRAP_PATHS[0],
  EXPECTED_BOOTSTRAP_PATHS[1],
  `${role}/reviews/phase-07/task-01-bootstrap.md`,
]);
const EXPECTED_BOOTSTRAP_SCRATCH_PATHS = [
  '.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/phase-07-plan.md',
  '.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/phase-07-plan-review.md',
  '.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/phase-07-plan-repair.md',
];
const FROZEN_INPUT_PATHS = [
  `${book}/architecture.md`, `${book}/architecture.json`, `${book}/visual-forecast.md`,
  `${book}/sources/source-register.json`, `${book}/sources/claim-register.json`,
  `${book}/case-studies/case-study-register.json`, `${book}/sources/claim-to-chapter.csv`,
  `${book}/sources/integration-manifest.json`, `${book}/sources/phase-07-handoff.md`,
  `${book}/phase-06-verification.json`,
];
const CLEAN_FINAL_PATHS = PHASE07_ALLOWED_PATHS.filter((item) => !item.endsWith('-repair.md'));
const STATE_PATHS = {
  role: `${role}/ROLE-STATE.md`,
  root: `${role}/issues/root.md`,
  localIssue: `${role}/issues/phase-07-chapter-blueprints.md`,
  factory: 'project-control/role-factory/FACTORY-STATE.md',
};
const CHAPTER_HEADINGS = [
  'Frozen identity and production target', 'Observable objectives',
  'Prerequisites and five-sentence dossier bridge', 'Owned decision and retained authority',
  'Production sequence', 'Bench Setup, Bench Sheet, and Qualification Gate',
  'Skill procedure and evidence interpretation', 'Benchline artifact contract',
  'Future deterministic companion contract', 'Failure injections and diagnostics',
  'Five-port transfer table', 'Cases and truth boundaries',
  'Exercises, assessment, and answer intent', 'Visual and accessibility contract',
  'Durable doctrine, volatile context, and re-verification',
  'Originality and adjacent-publication boundary', 'Phase 08 handoff and evidence manifest',
];

assert.equal(EXPECTED_PHASE07_PATHS.length, 42);
assert.equal(EXPECTED_PHASE07_SCRATCH_PATHS.length, 6);
assert.deepEqual(PHASE07_ALLOWED_PATHS, EXPECTED_PHASE07_PATHS);
assert.deepEqual(PHASE07_SCRATCH_PATHS, EXPECTED_PHASE07_SCRATCH_PATHS);

const readTextMap = async (paths) => Object.fromEntries(await Promise.all(paths.map(async (relative) => [relative, await readFile(path.join(root, relative), 'utf8')])));
const FROZEN_INPUT_TEXTS = await readTextMap(FROZEN_INPUT_PATHS);
const REAL_BLUEPRINT_PATHS = [
  `${book}/blueprints/blueprint-register.json`,
  ...Array.from({ length: 21 }, (_, index) => `${book}/blueprints/chapter-${String(index + 1).padStart(2, '0')}.md`),
  `${book}/blueprints/whole-book-furniture.md`,
  `${book}/blueprints/verification-report.md`,
  `${book}/blueprints/phase-08-handoff.md`,
];
const REAL_BLUEPRINT_TEXTS = await readTextMap(REAL_BLUEPRINT_PATHS);
const REAL_BLUEPRINT_REGISTER = JSON.parse(REAL_BLUEPRINT_TEXTS[`${book}/blueprints/blueprint-register.json`]);
const CURRENT_SCRATCH_TEXTS = await readTextMap(EXPECTED_BOOTSTRAP_SCRATCH_PATHS);
const SCRATCH_FIXTURE_TEXTS = {
  ...CURRENT_SCRATCH_TEXTS,
  [EXPECTED_PHASE07_SCRATCH_PATHS[3]]: '{"lane":"A","chapters":[1,2,3,4,5,6,7],"status":"accepted"}\n',
  [EXPECTED_PHASE07_SCRATCH_PATHS[4]]: '{"lane":"B","chapters":[8,9,10,11,12,13,14],"status":"accepted"}\n',
  [EXPECTED_PHASE07_SCRATCH_PATHS[5]]: '{"lane":"C","chapters":[15,16,17,18,19,20,21],"status":"accepted"}\n',
};
const LIVE_GITHUB_HASHES = {
  'github:#79:body': '072fe6fb8f54293edff5c7c96095b93bb6566fc6f3fcadd81f3ab598c726d54a',
  'github:#79:labels': 'b2d267f831b339fbc1e94be05e253ae2d84c86ce5115f8ca2fce5b2df9ed840c',
  'github:#84:body': '6b785594faea236eb92aac516330c36dda04cef8df888e985a371c2670fd325c',
  'github:#84:labels': '12ebefc59557f5e4b26fbc09dac5e10380f46025eb5285829c67f32861ac7cf6',
};
const LIVE_GITHUB_BODY_TEXTS = {
  rootIssue: [
  "# Machine Learning Engineer — Komal Publication Ecosystem",
  "",
  "## Role",
  "",
  "- Name: Machine Learning Engineer",
  "- Slug: `machine-learning-engineer`",
  "- Catalog position: 5 of 32",
  "- State: `project-control/roles/machine-learning-engineer/ROLE-STATE.md`",
  "- Creative system: `Learning Systems Test Bench`",
  "- Last completed child: [#83 — Phase 06 source and bounded case-study research](https://github.com/alpeshznakrani/komalnakrani/issues/83)",
  "- Active child: [#84 — Phase 07 chapter blueprints and frozen figure contracts](https://github.com/alpeshznakrani/komalnakrani/issues/84)",
  "",
  "## Objective",
  "",
  "Research, write, illustrate, publish, and verify an original Komal Nakrani",
  "Machine Learning Engineer book or evidence-justified series. Build the approved",
  "7 by 10 screen-first PDF and web reader from the same accepted manuscript and",
  "figure records.",
  "",
  "## Phase checklist",
  "",
  "- [x] 01 role validation and adjacent-role boundary evidence",
  "- [x] 04 evidence-based book count and volume decision — `SINGLE BOOK`",
  "- [x] 05 book architecture — complete",
  "- [x] 06 source and case-study research — complete",
  "- [ ] 07 chapter blueprints and frozen figure contracts — active in #84",
  "- [ ] 08 original manuscript and deterministic companion production",
  "- [ ] 09 whole-book or series consistency QA",
  "- [ ] 10 original ImageGen PNG visuals and visual QA",
  "- [ ] 11 web and screen-first PDF publication",
  "- [ ] 19 hostile final QA",
  "",
  "## Locked boundaries",
  "",
  "- Komal Nakrani is the only book author.",
  "- All prose, cases, exercises, captions, and visuals are original Komal work.",
  "- Supplied reference PDFs inform only high-level reading quality and may not",
  "  contribute text, examples, illustrations, branding, or distinctive layouts.",
  "- The role is processed one active book at a time; parallel work inside that",
  "  book must use disjoint files and frozen interfaces.",
  "- Use ImageGen for conceptual raster illustrations; canonical publication image",
  "  assets are PNG only, with no stored SVG or WebP figures.",
  "- Do not infer a chapter count, figure quota, or volume count before evidence.",
  "- Abhyaas certification, exams, question banks, billing, and courses are out of",
  "  scope for this run.",
  "",
  "## Current executable action",
  "",
  "Phase 06 is complete and #83 is closed `status:done`. Phase 07 chapter",
  "blueprints and frozen figure contracts is active under #84 from approved plan",
  "commit `21d4cfa`. Complete the independently reviewed Task 01 bootstrap before",
  "any blueprint lane starts. Phase 08, manuscript, visuals, course, Abhyaas, a",
  "second volume, catalog position 6, and another role remain inactive.",
  "",
  "## Completion",
  "",
  "The root closes only when the complete evidence-justified book or series is",
  "published, downloadable, screen-first, web-verified, and hostile-QA clean with",
  "all child issues closed as `status:done`.",
  ""
].join('\n'),
  childIssue: [
  "# Machine Learning Engineer Phase 07 — Chapter Blueprints and Frozen Figure Contracts",
  "",
  "Parent: #79",
  "Approved plan: docs/superpowers/plans/2026-08-18-machine-learning-engineer-phase-07.md",
  "Approved plan commit: 21d4cfa2581193a5d76642e177bf44831cd3ea7b",
  "",
  "## Objective",
  "",
  "Convert the accepted seven-part, twenty-one-chapter architecture and the final Phase 06 research system into exactly twenty-one executable chapter blueprints, one whole-book furniture blueprint, a strict machine-readable blueprint register, an inactive Phase 08 handoff, and hostile-QA-clean closure evidence for Machine Learning Engineering: From Task Contract to Operating Evidence by Komal Nakrani.",
  "",
  "## Acceptance",
  "",
  "- [ ] Freeze the exact Phase 07 output allowlist, closed register/verification schemas, review paths, lane ownership, dossier/state graph, and exact edge counts before any chapter blueprint exists.",
  "- [ ] Preserve genuine RED validator evidence and reach the frozen 220/220 GREEN contract through mutation-tested validation.",
  "- [ ] Produce exactly 21 chapter blueprints in three disjoint seven-chapter lanes with exact claim/source/case/architecture/port mappings and one primary teaching placement per canonical claim.",
  "- [ ] Produce the whole-book furniture blueprint: 10 Bench Zero items, 7 parts with 5 exact obligations each, 7 appendices, and 5 closing items including About Komal and the exact closing statement.",
  "- [ ] Preserve all exact Phase 05/06 counts, currentness, case-truth, authority, five-port, lifecycle, visual, and originality boundaries.",
  "- [ ] Keep the four ImageGen candidates reserved only; create no image, SVG, WebP, manuscript, companion implementation, publication, PDF, course, Abhyaas, second volume, catalog-position-6, or next-role output.",
  "- [ ] Pass independent bootstrap, three lane, canonical-integration, and hostile reviews with directed repair history and current hash bindings.",
  "- [ ] Pass Phase 01/04, temporal Phase 05/06, Phase 07, full repository, path, marker, whitespace/EOF, and diff gates.",
  "- [ ] Close only through the approved two-checkpoint lifecycle while Phase 08 remains inactive and root #79 stays open.",
  "",
  "## Boundaries",
  "",
  "Komal Nakrani is the sole author. A blueprint is a production specification, not manuscript prose. Semantic HTML/CSS carries numeric truth. Phase 07 creates no media asset. Existing Komal books are comparison boundaries, never source evidence.",
  "",
  "## Entry gate",
  "",
  "Blueprint production is prohibited until the activation implementation is committed and pushed and the independent Task 01 bootstrap review ends exactly SPEC COMPLIANCE PASS and QUALITY APPROVED.",
  "",
  "## Closure",
  "",
  "Commit and push the accepted pre-close package while this child remains active, then relabel it status:done and close it. Only afterward project final local state and verification, commit/push, prove clean main equals live origin/main, keep #79 open, and keep Phase 08 inactive."
].join('\n'),
};
assert.equal(sha256(LIVE_GITHUB_BODY_TEXTS.rootIssue), LIVE_GITHUB_HASHES['github:#79:body']);
assert.equal(sha256(LIVE_GITHUB_BODY_TEXTS.childIssue), LIVE_GITHUB_HASHES['github:#84:body']);
const EXPECTED_ACTIVATION_STATE_HASHES = {
  [STATE_PATHS.role]: '544b92eeff860af3dcae7515efae5188714826ed3d6c08823538dd19d22542ae',
  [STATE_PATHS.root]: '072fe6fb8f54293edff5c7c96095b93bb6566fc6f3fcadd81f3ab598c726d54a',
  [STATE_PATHS.localIssue]: 'ae2283a43cfbc53d63ab2c359efe521a0497f0f5e83cc31e61eb4e47dbbf7dc5',
  [STATE_PATHS.factory]: '970f6780ec05f35f247fedb73486ad6eb6ff18e40e5541b1c0b0fb71185703cc',
};
const EXPECTED_BOOTSTRAP_SCRATCH_HASHES = {
  [EXPECTED_PHASE07_SCRATCH_PATHS[0]]: 'c0c1eccec1f4bd05fc5c194cb874027a2b3bc0761c91be3cc0a5b5e933b6a107',
  [EXPECTED_PHASE07_SCRATCH_PATHS[1]]: 'd56f84c22ed459eabc0dad54a3435978e15d609038091884433510a92c94dc52',
  [EXPECTED_PHASE07_SCRATCH_PATHS[2]]: 'c1e7cae4d3574f8d312efeeda43226b06a4d0e0d08eb83bf7abb87ad0e6cb72d',
};
const ACTIVATION_CHECKPOINT_ARTIFACT_TEXTS = {
  [`${book}/validate-phase-07.mjs`]: 'Phase 07 activation-checkpoint validator fixture bytes.\n',
  [`${book}/validate-phase-07.test.mjs`]: 'Phase 07 activation-checkpoint test fixture bytes with frozen 220-test contract.\n',
};
const ACTIVATION_CHECKPOINT_ARTIFACT_HASHES = {
  'docs/superpowers/plans/2026-08-18-machine-learning-engineer-phase-07.md': 'c0c1eccec1f4bd05fc5c194cb874027a2b3bc0761c91be3cc0a5b5e933b6a107',
  ...Object.fromEntries(Object.entries(ACTIVATION_CHECKPOINT_ARTIFACT_TEXTS).map(([item, text]) => [item, sha256(text)])),
};
const TEMPORAL_PINS = {
  temporalPhase05Validator: [
    'e1705e03389d174cc107af9850cb3cb839f92b1f',
    '1b3d92809cbe2279dda0e5782083882936874f4f1a458c86423593548fad8132',
    '2111', 'tracked bytes only', 'ordinary empty node_modules',
    'node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-05.mjs --stage=final',
    '7 parts, 21 chapters, 21 milestones, trace 8/22/17/10, 12 domains, 5 ports, 40 contexts, 35 exits, 5 cases, 5 reviews',
  ],
  temporalPhase05Tests: [
    'node --test project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-05.test.mjs',
    '190/190',
  ],
  temporalPhase06Validator: [
    'e4b9af4ee2d6abd31e8160224db7a99e66b6f02a',
    '666935f13e6aee676a3142b8c80a395adb56204dbb08abed9b42e51564a59c9d',
    '02c1ff0b7ee4c9174f507511f88f2acf3c8719e96d5f71aa735bc7c564a397ec',
    '7cfe18f9837363c9785e49728d1c3b8e060b5295dbc4763ff9d10d56d51146a3',
    'GH_REPO=alpeshznakrani/komalnakrani', 'standalone local clone', 'ordinary empty node_modules',
    'node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.mjs --stage=final',
    '46 sources, 63 claims, 12 cases, 21 packs, edges 160/34',
  ],
  temporalPhase06Tests: [
    'node --test project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.test.mjs',
    '190/190',
  ],
};

for (const [item, digest] of Object.entries(EXPECTED_BOOTSTRAP_SCRATCH_HASHES)) assert.equal(sha256(CURRENT_SCRATCH_TEXTS[item]), digest, `bootstrap scratch drift ${item}`);

function orderedInventoryDigest(paths) {
  return sha256(JSON.stringify(paths));
}

function expectedActiveDirtyPaths(inventory) {
  return inventory.filter((item) => !ACTIVE_CHECKPOINT_CLEAN_PATHS.has(item)).sort();
}

function task01BindingHashes(checkpoint) {
  const absent = EXPECTED_PHASE07_PATHS.filter((item) => !EXPECTED_BOOTSTRAP_PATHS.includes(item));
  const scratchAbsent = EXPECTED_PHASE07_SCRATCH_PATHS.filter((item) => !EXPECTED_BOOTSTRAP_SCRATCH_PATHS.includes(item));
  return {
    [`git:plan-commit:${PLAN_COMMIT}`]: sha256(PLAN_COMMIT),
    ...LIVE_GITHUB_HASHES,
    ...EXPECTED_ACTIVATION_STATE_HASHES,
    ...ACTIVATION_CHECKPOINT_ARTIFACT_HASHES,
    'inventory:phase07-production-absence': orderedInventoryDigest({ present: EXPECTED_BOOTSTRAP_PATHS, absent }),
    'inventory:phase07-scratch': orderedInventoryDigest({ present: EXPECTED_BOOTSTRAP_SCRATCH_PATHS, absent: scratchAbsent }),
    'git:activation-checkpoint': sha256(checkpoint),
  };
}

function seq(prefix, count, width = 2) {
  return Array.from({ length: count }, (_, index) => `${prefix}${String(index + 1).padStart(width, '0')}`);
}

function makeRegister() {
  const chapterClaims = new Map(architecture.chapters.map((chapter) => [chapter.id, claims.claims.filter((claim) => claim.chapterId === chapter.id)]));
  const chapterRecords = architecture.chapters.map((chapter, index) => {
    const n = index + 1;
    const sectionIds = seq(`MLE-CH-${String(n).padStart(2, '0')}-S`, 8);
    const visualIds = [`MLE-V${String(n).padStart(2, '0')}.1`];
    if (CANDIDATES.has(n)) visualIds.push(CANDIDATES.get(n));
    return {
      chapterId: chapter.id,
      order: n,
      title: chapter.title,
      slug: chapter.slug,
      partId: chapter.partId,
      decisionJob: chapter.decisionJob,
      thesis: chapter.thesis,
      readerEndpoint: chapter.readerEndpoint,
      prerequisiteArtifacts: clone(chapter.prerequisiteArtifacts),
      incomingState: chapter.incomingDossierState,
      outgoingStates: [chapter.outgoingDossierState],
      milestoneId: chapter.milestone.id,
      authorityOwner: chapter.authorityOwner,
      mleCeiling: chapter.mleCeiling,
      primaryClaimIds: chapterClaims.get(chapter.id).map((claim) => claim.claimId),
      sectionIds,
      labIds: seq(`MLE-CH-${String(n).padStart(2, '0')}-LAB-`, 2),
      assessmentIds: [`MLE-CH-${String(n).padStart(2, '0')}-ASMT-01`],
      visualIds,
      portIds: clone(PORT_IDS),
      nextChapterId: n === 21 ? null : `MLE-CH-${String(n + 1).padStart(2, '0')}`,
    };
  });

  const claimTeaching = claims.claims.map((claim) => ({
    claimId: claim.claimId,
    chapterId: claim.chapterId,
    primarySectionId: `${claim.chapterId}-S02`,
    crossReferenceSectionIds: [],
    sourceIds: clone(claim.sourceIds),
    caseIds: clone(claim.caseIds),
    limitation: clone(claim.limitations),
    durability: claim.durability === 'contextual' ? 'volatile' : claim.durability,
    volatilityTreatment: claim.volatilityTreatment,
    recheckTriggers: [claim.phase07Instruction],
  }));

  const sourceUses = claims.claims.flatMap((claim) => claim.sourceIds.map((sourceId) => {
    const source = sources.sources.find((item) => item.sourceId === sourceId);
    return {
      sourceId,
      claimId: claim.claimId,
      chapterId: claim.chapterId,
      sectionIds: [`${claim.chapterId}-S02`],
      evidenceRole: claim.claimClass === 'role-market-boundary' ? 'transfer-context' : 'doctrine',
      limitation: source.limitations,
      durability: source.stability === 'durable' ? 'durable' : 'volatile',
      volatility: source.volatility,
      recheckTrigger: source.recheckTrigger,
    };
  })).sort((a, b) => a.claimId.localeCompare(b.claimId) || a.sourceId.localeCompare(b.sourceId));

  const caseUses = cases.cases.map((item) => ({
    caseId: item.caseId,
    chapterIds: clone(item.chapterIds),
    claimIds: clone(item.claimIds),
    sourceUses: item.sourceUses.map(({ sourceId, evidenceRole }) => ({ sourceId, evidenceRole })),
    placements: item.chapterIds.map((chapterId) => ({ chapterId, sectionIds: [`${chapterId}-S04`], usePurpose: `Apply ${item.name} without exceeding its truth boundary.` })),
    truthLabel: item.truthLabel,
    reportedFacts: clone(item.reportedFacts),
    attributedOutcomes: clone(item.attributedOutcomes),
    allowedInferences: clone(item.allowedInferences),
    forbiddenInferences: [`Do not infer unreported outcomes for ${item.name}.`],
    limitations: clone(item.limitations),
    transferRules: clone(item.transferRules),
  }));

  const dossier = architecture.chapters.map((chapter, index) => ({
    chapterId: chapter.id,
    milestoneId: chapter.milestone.id,
    incomingState: chapter.incomingDossierState,
    inputArtifactIds: chapter.prerequisiteArtifacts.length ? clone(chapter.prerequisiteArtifacts) : ['BL-ENTRY'],
    inputHashes: ['a'.repeat(64)],
    producedArtifactId: chapter.milestone.id,
    artifactVersion: '1.0.0',
    legalOutgoingStates: [chapter.outgoingDossierState],
    forbiddenTransitions: clone(architecture.lifecycle.forbiddenTransitions),
    reopenTriggers: architecture.lifecycle.reopenTriggers.map((item) => `${item.change}->${item.reopenTarget}`),
    nextChapterId: index === 20 ? null : `MLE-CH-${String(index + 2).padStart(2, '0')}`,
  }));

  const ports = architecture.chapters.flatMap((chapter) => architecture.ports.map((port) => ({
    chapterId: chapter.id,
    portId: port.id,
    invariantDecision: chapter.fivePortInvariant,
    variableMechanism: port.variableMechanism,
    requiredEvidence: clone(port.requiredEvidence),
    externalAuthority: clone(port.externalAuthority),
    failureInjection: clone(port.failureInjection),
    limitation: clone(port.limitation),
    transferResult: 'PASS',
  })));

  const sections = architecture.chapters.flatMap((chapter, chapterIndex) => Array.from({ length: 8 }, (_, sectionIndex) => {
    const order = sectionIndex + 1;
    const chapterClaimIds = chapterClaims.get(chapter.id).map((claim) => claim.claimId);
    return {
      sectionId: `${chapter.id}-S${String(order).padStart(2, '0')}`,
      chapterId: chapter.id,
      order,
      purpose: ['Decision and Bench Setup','Procedure','Evidence interpretation','Worked trace','Failure lab','Five-port transfer','Assessment and Qualification Gate','Durable handoff'][sectionIndex],
      teachingAction: `${chapter.id} performs the chapter-specific ${chapter.decisionJob} action at production step ${order}.`,
      claimIds: order === 2 ? clone(chapterClaimIds) : [],
      sourceIds: order === 2 ? [...new Set(chapterClaims.get(chapter.id).flatMap((claim) => claim.sourceIds))] : [],
      caseIds: order === 4 ? cases.cases.filter((item) => item.chapterIds.includes(chapter.id)).map((item) => item.caseId) : [],
      architectureClaimIds: order === 1 ? clone(chapter.claimIds) : [],
      boundaryIds: order === 1 ? clone(chapter.boundaryIds) : [],
      scenarioIds: order === 1 ? clone(chapter.scenarioIds) : [],
      domainIds: order === 1 ? architecture.domains.filter((domain) => domain.chapters.includes(chapterIndex + 1)).map((domain) => domain.id) : [],
      portIds: order === 6 ? clone(PORT_IDS) : [],
      artifactDelta: `${chapter.milestone.id} gains evidence from section ${order}.`,
      plannedDepth: `screen-first-${order}`,
      claimDisposition: order === 2 ? 'primary' : 'cross-reference',
    };
  }));

  const labs = architecture.chapters.flatMap((chapter) => [1, 2].map((n) => ({
    labId: `${chapter.id}-LAB-${String(n).padStart(2, '0')}`,
    chapterId: chapter.id,
    truthState: 'synthetic-deterministic',
    inputContract: `${chapter.id} fixed offline fixture ${n}`,
    fixedFixtureIds: [`FIX-${chapter.id}-${n}`],
    redFailures: [n === 1 ? 'missing expected evidence' : 'illegal promotion or self-approval'],
    expectedEvidence: [`${chapter.milestone.id} deterministic record`],
    prohibitedEffects: ['No network, provider, production, or authority mutation.'],
    legalDispositions: ['PASS','HOLD','REJECT','REOPEN'],
    acceptanceChecks: [`${chapter.id} evidence identity and owner route remain exact.`],
  })));

  const assessment = architecture.chapters.map((chapter) => ({
    assessmentId: `${chapter.id}-ASMT-01`,
    chapterId: chapter.id,
    exerciseOutput: `${chapter.milestone.id} evidence artifact`,
    rubric: `Assess ${chapter.decisionJob} with observable evidence.`,
    answerIntent: 'Explain the decision, evidence, state, owner, and next action.',
    observablePassEvidence: `${chapter.milestone.id} passes its named qualification gate.`,
    authorityLimit: chapter.mleCeiling,
    retryRoute: 'HOLD or REOPEN with new evidence; never self-approve.',
  }));

  const visuals = architecture.chapters.flatMap((chapter, index) => {
    const n = index + 1;
    const semantic = {
      visualId: `MLE-V${String(n).padStart(2, '0')}.1`, chapterId: chapter.id,
      kind: 'semantic-html-css', insertionAnchor: `${chapter.id}-S03`,
      decisionHelped: chapter.decisionJob, essentialLabels: ['decision','evidence','state','owner','next action'],
      captionIntent: `Explain the ${chapter.milestone.id} decision evidence.`,
      altIntent: `Text alternative for ${chapter.id} evidence flow.`,
      longDescriptionIntent: `Ordered description of ${chapter.id} evidence, state, owner, and next action.`,
      numericTruthDisposition: 'semantic-html-css', candidateStatus: 'not-applicable', reservedPath: null,
    };
    if (!CANDIDATES.has(n)) return [semantic];
    return [semantic, {
      ...semantic, visualId: CANDIDATES.get(n), kind: 'imagegen-candidate',
      candidateStatus: 'reserved', reservedPath: `assets/images/machine-learning-engineering/${CANDIDATES.get(n)}-2400x1600.png`,
      numericTruthDisposition: 'semantic-html-css',
    }];
  });

  const handoffs = architecture.chapters.map((chapter) => ({
    chapterId: chapter.id,
    phase08Instructions: `Write ${chapter.id} from this blueprint without inventing evidence or authority.`,
    continuityBridge: `${chapter.incomingDossierState} becomes ${chapter.outgoingDossierState} through ${chapter.milestone.id}.`,
    wordRange: '2400-3200',
    wordRangeRationale: 'Screen-first teaching requires visible procedure, evidence, failure, transfer, and qualification blocks.',
    recheckTriggers: clone(chapter.volatileExamples),
    prohibitedClaims: ['No universal performance, safety, compliance, or business outcome claim.'],
    evidenceManifest: chapterClaims.get(chapter.id).map((claim) => claim.claimId),
  }));

  const furnitureRecord = (id, order, purpose, requiredContent) => ({
    id, order, purpose, requiredContent: clone(requiredContent), accessibility: 'Semantic HTML, routed headings, text alternatives, and screen-first reading order.',
    phase08Instructions: `Produce ${id} exactly once without decorative filler.`,
  });
  const benchZeroNames = ['cover','title and author','edition and copyright','reader prerequisites','MLE ownership boundary','lifecycle and evidence legend','how to read a Bench Sheet','routed contents','project and case orientation','part map'];
  const furniture = {
    benchZero: benchZeroNames.map((name, index) => furnitureRecord(`FURN-BZ-${String(index + 1).padStart(2, '0')}`, index + 1, name, [name])),
    parts: Array.from({ length: 7 }, (_, index) => furnitureRecord(`FURN-PART-${String(index + 1).padStart(2, '0')}`, index + 1, `Part ${index + 1} navigation and gate`, ['Bench Setup','part decision question','incoming evidence','part map','part-exit Qualification Gate'])),
    appendices: Array.from({ length: 7 }, (_, index) => furnitureRecord(`APP-${String.fromCharCode(65 + index)}`, index + 1, `Appendix ${String.fromCharCode(65 + index)}`, ['reference purpose','reader route'])),
    closing: Array.from({ length: 5 }, (_, index) => furnitureRecord(`FURN-CLOSE-${String(index + 1).padStart(2, '0')}`, index + 1, index === 4 ? 'About Komal' : `Closing dossier ${index + 1}`, [index === 4 ? 'About Komal' : `closing item ${index + 1}`])),
    closingStatement: 'Ship the model only when its evidence can travel with it.',
  };

  return {
    schema: 'mle-phase-07-blueprint-register/v1',
    identity: {
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
    },
    counts: clone(COUNT_VALUES), chapters: chapterRecords, claimTeaching, sourceUses,
    caseUses, dossier, ports, sections, labs, assessment, visuals, handoffs, furniture,
  };
}

function makeReview(task, name, boundArtifacts, fileSha) {
  return {
    task,
    path: `${role}/reviews/phase-07/${name}.md`,
    sha256: fileSha,
    repairPath: null,
    repairSha256: null,
    specVerdict: 'SPEC COMPLIANCE PASS',
    qualityVerdict: 'QUALITY APPROVED',
    boundArtifacts: clone(boundArtifacts),
  };
}

function materializeReviewFiles(files, reviews, bindingHashes) {
  for (const review of reviews) {
    if (review.task === 'TASK-10') {
      const digest = preClosePackageDigest(files, CLEAN_FINAL_PATHS, bindingHashes[STATE_PATHS.localIssue]);
      review.boundArtifacts.find((item) => item.path === 'digest:pre-close-path-package').sha256 = digest;
      bindingHashes['digest:pre-close-path-package'] = digest;
    }
    const source = files[review.path].text.trimEnd();
    const body = source.replace(/\nSPEC COMPLIANCE PASS\nQUALITY APPROVED$/, '');
    const record = {
      schema: 'mle-phase-07-review-record/v1', task: review.task, path: review.path,
      repairPath: review.repairPath, repairSha256: review.repairSha256,
      specVerdict: review.specVerdict, qualityVerdict: review.qualityVerdict,
      boundArtifacts: review.boundArtifacts.map((item) => ({ ...item })),
    };
    const text = `${body}\n\nPHASE07-REVIEW-RECORD-START\n\n\`\`\`json\n${JSON.stringify(record, null, 2)}\n\`\`\`\n\nPHASE07-REVIEW-RECORD-END\n\nSPEC COMPLIANCE PASS\nQUALITY APPROVED\n`;
    files[review.path] = { text, sha256: sha256(text) };
    review.sha256 = files[review.path].sha256;
    for (const dependent of reviews) {
      const binding = dependent.boundArtifacts.find((item) => item.path === review.path);
      if (binding) binding.sha256 = review.sha256;
    }
  }
}

function refreshMaterializedReviewRecord(files, review) {
  const entry = files[review?.path];
  if (!entry || !entry.text.includes('PHASE07-REVIEW-RECORD-START')) return;
  const record = {
    schema: 'mle-phase-07-review-record/v1', task: review.task, path: review.path,
    repairPath: review.repairPath, repairSha256: review.repairSha256,
    specVerdict: review.specVerdict, qualityVerdict: review.qualityVerdict,
    boundArtifacts: review.boundArtifacts.map((item) => ({ ...item })),
  };
  const replacement = `PHASE07-REVIEW-RECORD-START\n\n\`\`\`json\n${JSON.stringify(record, null, 2)}\n\`\`\`\n\nPHASE07-REVIEW-RECORD-END`;
  const text = entry.text.replace(/PHASE07-REVIEW-RECORD-START\n\n```json\n[\s\S]*?\n```\n\nPHASE07-REVIEW-RECORD-END/, replacement);
  entry.text = text;
  entry.sha256 = sha256(text);
  review.sha256 = entry.sha256;
}

function frozenInputPaths() {
  return [...FROZEN_INPUT_PATHS];
}

function bindingPaths(task) {
  const chapters = (first, last) => Array.from({ length: last - first + 1 }, (_, index) => `${book}/blueprints/chapter-${String(first + index).padStart(2, '0')}.md`);
  if (task === 'TASK-01') return [
    `git:plan-commit:${PLAN_COMMIT}`,
    'docs/superpowers/plans/2026-08-18-machine-learning-engineer-phase-07.md',
    '.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/phase-07-plan.md',
    '.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/phase-07-plan-review.md',
    '.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/phase-07-plan-repair.md',
    'github:#79:body', 'github:#79:labels', 'github:#84:body', 'github:#84:labels',
    STATE_PATHS.role, STATE_PATHS.root, STATE_PATHS.localIssue, STATE_PATHS.factory,
    `${book}/validate-phase-07.mjs`, `${book}/validate-phase-07.test.mjs`,
    'inventory:phase07-production-absence', 'inventory:phase07-scratch', 'git:activation-checkpoint',
  ];
  if (task === 'TASK-05') return [...chapters(1, 7), '.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/lane-a-blueprint-manifest.json', ...frozenInputPaths()];
  if (task === 'TASK-06') return [...chapters(8, 14), '.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/lane-b-blueprint-manifest.json', ...frozenInputPaths()];
  if (task === 'TASK-07') return [...chapters(15, 21), '.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/lane-c-blueprint-manifest.json', ...frozenInputPaths()];
  const packagePaths = [
    `${book}/blueprints/blueprint-register.json`, ...chapters(1, 21),
    `${book}/blueprints/whole-book-furniture.md`, `${book}/blueprints/verification-report.md`,
    `${book}/blueprints/phase-08-handoff.md`, `${book}/validate-phase-07.mjs`,
    `${book}/validate-phase-07.test.mjs`,
  ];
  const laneReviews = REVIEW_NAMES.slice(1, 4).map((name) => `${role}/reviews/phase-07/${name}.md`);
  if (task === 'TASK-09') return [...packagePaths, ...laneReviews, ...frozenInputPaths()];
  return [...packagePaths, `${role}/reviews/phase-07/task-01-bootstrap.md`, ...laneReviews, `${role}/reviews/phase-07/task-09-canonical-integration.md`, ...frozenInputPaths(), 'digest:pre-close-path-package'];
}

function boundArtifacts(task, files, bindingHashes = {}) {
  return bindingPaths(task).map((item) => {
    const digest = bindingHashes[item] ?? files[item]?.sha256;
    assert.match(digest ?? '', /^[0-9a-f]{64}$/, `missing actual binding hash for ${task} ${item}`);
    return { path: item, sha256: digest };
  });
}

function preClosePackageDigest(files, inventory, localIssueSha256 = files[STATE_PATHS.localIssue]?.sha256) {
  const paths = inventory.filter((item) => !item.endsWith('/phase-07-verification.json') && !item.endsWith('/task-10-hostile-integration.md') && !item.endsWith('/task-10-hostile-integration-repair.md'));
  return orderedInventoryDigest(paths.map((item) => ({ path: item, sha256: item === STATE_PATHS.localIssue ? localIssueSha256 : files[item].sha256 })));
}

function independentlyRecomputePreClosePackageDigest(bundle) {
  const excluded = new Set([
    `${book}/phase-07-verification.json`,
    `${role}/reviews/phase-07/task-10-hostile-integration.md`,
    `${role}/reviews/phase-07/task-10-hostile-integration-repair.md`,
  ]);
  const records = bundle.inventory
    .filter((relative) => !excluded.has(relative))
    .map((relative) => {
      assert.equal(typeof bundle.files[relative]?.text, 'string', true, `pre-close package byte source ${relative}`);
      const digest = relative === STATE_PATHS.localIssue
        ? bundle.activationSnapshot.authorityHashes[STATE_PATHS.localIssue]
        : sha256(bundle.files[relative].text);
      return { path: relative, sha256: digest };
    });
  return sha256(JSON.stringify(records));
}

function chapterProjection(register, chapter) {
  return clone({
    chapter,
    claimTeaching: register.claimTeaching.filter((item) => item.chapterId === chapter.chapterId),
    sourceUses: register.sourceUses.filter((item) => item.chapterId === chapter.chapterId),
    casePlacements: register.caseUses.flatMap((item) => item.placements.filter((placement) => placement.chapterId === chapter.chapterId).map((placement) => ({ caseId: item.caseId, ...placement }))),
    dossier: register.dossier.find((item) => item.chapterId === chapter.chapterId),
    ports: register.ports.filter((item) => item.chapterId === chapter.chapterId),
    sections: register.sections.filter((item) => item.chapterId === chapter.chapterId),
    labs: register.labs.filter((item) => item.chapterId === chapter.chapterId),
    assessment: register.assessment.filter((item) => item.chapterId === chapter.chapterId),
    visuals: register.visuals.filter((item) => item.chapterId === chapter.chapterId),
    handoff: register.handoffs.find((item) => item.chapterId === chapter.chapterId),
  });
}

function activeState() {
  return {
    role: 'Current global phase: Phase 07 chapter blueprints and frozen figure contracts active\nActive child issue: [#84 — Phase 07](https://example.test/84)\nPhase 08 original manuscript: next gate, inactive',
    root: 'Active child: [#84 — Phase 07](https://example.test/84)\n07 chapter blueprints and frozen figure contracts — active in #84\nPhase 08 inactive',
    localIssue: 'Status: active; live child #84 is open with status:in-progress.\nBlueprint production blocked until Task 01 bootstrap acceptance.\nPhase 08 inactive.',
    factory: 'Active child: #84.\nPhase 07 chapter blueprints and frozen figure contracts: active.\nPhase 08 original manuscript and deterministic companion production: next gate, inactive.\nCatalog position 6: not started.',
  };
}

function finalState() {
  return {
    role: 'Current global phase: Phase 07 chapter blueprints and frozen figure contracts complete\nLast completed child issue: [#84 — Phase 07](https://example.test/84)\nActive child issue: none\nPhase 08 original manuscript and deterministic companion production: sole next gate, inactive',
    root: 'Last completed child: [#84 — Phase 07](https://example.test/84)\nActive child: none\n07 chapter blueprints and frozen figure contracts — complete\nPhase 08 sole next gate, inactive',
    localIssue: 'Status: complete; live child #84 is closed with status:done.\nAll acceptance criteria complete.\nPhase 08 is the sole next gate and inactive.',
    factory: 'Last completed child: #84.\nActive child: none.\nPhase 07 chapter blueprints and frozen figure contracts: complete.\nPhase 08 original manuscript and deterministic companion production: sole next gate, inactive.\nCatalog position 6: not started.',
  };
}

function makeBundle({ activationCheckpoint = ACTIVATION_CHECKPOINT } = {}) {
  const register = clone(REAL_BLUEPRINT_REGISTER);
  const chapterProjections = Object.fromEntries(register.chapters.map((chapter) => [chapter.chapterId, chapterProjection(register, chapter)]));
  const bootstrapHashes = task01BindingHashes(activationCheckpoint);
  const bootstrapRecord = {
    planCommit: PLAN_COMMIT,
    activationCheckpoint,
    github: {
      rootIssue: { number: 79, state: 'OPEN', labels: ['role:machine-learning-engineer','status:in-progress'], bodySha256: LIVE_GITHUB_HASHES['github:#79:body'] },
      childIssue: { number: 84, state: 'OPEN', labels: ['phase:07-chapter-blueprints','role:machine-learning-engineer','status:in-progress'], bodySha256: LIVE_GITHUB_HASHES['github:#84:body'] },
    },
    authorityHashes: EXPECTED_ACTIVATION_STATE_HASHES,
    activationArtifactHashes: ACTIVATION_CHECKPOINT_ARTIFACT_HASHES,
    scratchHashes: EXPECTED_BOOTSTRAP_SCRATCH_HASHES,
    productionInventory: { present: EXPECTED_BOOTSTRAP_PATHS, absent: EXPECTED_PHASE07_PATHS.filter((item) => !EXPECTED_BOOTSTRAP_PATHS.includes(item)), sha256: bootstrapHashes['inventory:phase07-production-absence'] },
    scratchInventory: { present: EXPECTED_BOOTSTRAP_SCRATCH_PATHS, absent: EXPECTED_PHASE07_SCRATCH_PATHS.slice(3), sha256: bootstrapHashes['inventory:phase07-scratch'] },
  };
  const files = {
    ...Object.fromEntries(Object.entries(FROZEN_INPUT_TEXTS).map(([item, text]) => [item, { text, sha256: sha256(text) }])),
    ...Object.fromEntries(Object.entries(SCRATCH_FIXTURE_TEXTS).map(([item, text]) => [item, { text, sha256: sha256(text) }])),
  };
  for (const item of CLEAN_FINAL_PATHS) {
    let text = REAL_BLUEPRINT_TEXTS[item] ?? `accepted ${item}\n`;
    if (item.endsWith('/task-01-bootstrap.md')) text = `# Task 01 bootstrap independent review\n\n## Immutable activation snapshot\n\n\`\`\`json\n${JSON.stringify(bootstrapRecord, null, 2)}\n\`\`\`\n\nThe snapshot binds the existing activation implementation checkpoint and never the later closure-state bytes.\n\nSPEC COMPLIANCE PASS\nQUALITY APPROVED\n`;
    else if (item.includes('/reviews/phase-07/')) text = `# ${path.basename(item, '.md')} independent review\n\n## Scope and evidence\n\nThe reviewer recomputed the directed artifact bindings, graph edges, lifecycle state, path inventory, and exact hashes owned by this task.\n\n## Findings\n\nNo unresolved finding remains.\n\nSPEC COMPLIANCE PASS\nQUALITY APPROVED\n`;
    files[item] = { text, sha256: sha256(text) };
  }
  for (const [name, text] of Object.entries(finalState())) files[STATE_PATHS[name]] = { text, sha256: sha256(text) };
  const externalBindings = {
    ...task01BindingHashes(activationCheckpoint),
    'digest:pre-close-path-package': preClosePackageDigest(files, CLEAN_FINAL_PATHS, EXPECTED_ACTIVATION_STATE_HASHES[STATE_PATHS.localIssue]),
  };
  const reviews = REVIEW_NAMES.map((name, index) => {
    const task = ['TASK-01','TASK-05','TASK-06','TASK-07','TASK-09','TASK-10'][index];
    const reviewPath = `${role}/reviews/phase-07/${name}.md`;
    return makeReview(task, name, boundArtifacts(task, files, externalBindings), files[reviewPath].sha256);
  });
  materializeReviewFiles(files, reviews, externalBindings);
  const bundle = {
    canonical, register, reviews, files,
    inventory: [...CLEAN_FINAL_PATHS], scratchInventory: [...PHASE07_SCRATCH_PATHS], symlinks: [],
    chapterProjections,
    furnitureProjection: clone(register.furniture),
    state: finalState(),
    activationSnapshot: {
      checkpoint: activationCheckpoint,
      planCommit: PLAN_COMMIT,
      github: {
        rootIssue: { number: 79, state: 'OPEN', labels: ['role:machine-learning-engineer','status:in-progress'], bodySha256: LIVE_GITHUB_HASHES['github:#79:body'] },
        childIssue: { number: 84, state: 'OPEN', labels: ['phase:07-chapter-blueprints','role:machine-learning-engineer','status:in-progress'], bodySha256: LIVE_GITHUB_HASHES['github:#84:body'] },
      },
      authorityHashes: { ...EXPECTED_ACTIVATION_STATE_HASHES },
      activationArtifactHashes: { ...ACTIVATION_CHECKPOINT_ARTIFACT_HASHES },
      activationArtifactFixtureBytes: { ...ACTIVATION_CHECKPOINT_ARTIFACT_TEXTS },
      scratchHashes: Object.fromEntries(Object.entries(CURRENT_SCRATCH_TEXTS).map(([item, text]) => [item, sha256(text)])),
      productionInventory: { present: [...EXPECTED_BOOTSTRAP_PATHS], absent: EXPECTED_PHASE07_PATHS.filter((item) => !EXPECTED_BOOTSTRAP_PATHS.includes(item)) },
      scratchInventory: { present: [...EXPECTED_BOOTSTRAP_SCRATCH_PATHS], absent: EXPECTED_PHASE07_SCRATCH_PATHS.slice(3) },
      bindingHashes: externalBindings,
    },
    runtime: { git: { branch: 'main', clean: true, dirtyPaths: [], head: 'c'.repeat(40), remoteMain: 'c'.repeat(40), activationCheckpoint }, github: { rootIssue: { number: 79, state: 'OPEN', labels: ['role:machine-learning-engineer','status:in-progress'] }, childIssue: { number: 84, state: 'CLOSED', labels: ['phase:07-chapter-blueprints','role:machine-learning-engineer','status:done'] } } },
  };
  bundle.verification = buildExpectedVerification(bundle);
  const verificationText = `${JSON.stringify(bundle.verification, null, 2)}\n`;
  files[`${book}/phase-07-verification.json`] = { text: verificationText, sha256: sha256(verificationText) };
  return bundle;
}

function makeBootstrapBundle() {
  const bundle = makeBundle();
  const inventory = [...EXPECTED_BOOTSTRAP_PATHS];
  bundle.state = activeState();
  for (const [name, text] of Object.entries(bundle.state)) bundle.files[STATE_PATHS[name]] = { text, sha256: sha256(text) };
  bundle.runtime.github.childIssue = { number: 84, state: 'OPEN', labels: ['phase:07-chapter-blueprints','role:machine-learning-engineer','status:in-progress'] };
  bundle.inventory = inventory;
  bundle.scratchInventory = [...EXPECTED_BOOTSTRAP_SCRATCH_PATHS];
  bundle.register = null;
  bundle.chapterProjections = {};
  bundle.furnitureProjection = null;
  bundle.reviews = [];
  bundle.verification = null;
  for (const item of Object.keys(bundle.files)) {
    if ((PHASE07_ALLOWED_PATHS.includes(item) && !bundle.inventory.includes(item)) ||
        (PHASE07_SCRATCH_PATHS.includes(item) && !bundle.scratchInventory.includes(item))) delete bundle.files[item];
  }
  return bundle;
}

function makePreHostileBundle() {
  const bundle = makeBundle();
  bundle.state = activeState();
  for (const [name, text] of Object.entries(bundle.state)) bundle.files[STATE_PATHS[name]] = { text, sha256: sha256(text) };
  bundle.runtime.github.childIssue = { number: 84, state: 'OPEN', labels: ['phase:07-chapter-blueprints','role:machine-learning-engineer','status:in-progress'] };
  bundle.inventory = bundle.inventory.filter((item) => !item.endsWith('phase-07-verification.json') && !item.endsWith('task-10-hostile-integration.md'));
  bundle.reviews = bundle.reviews.slice(0, 5);
  bundle.verification = null;
  for (const item of Object.keys(bundle.files)) {
    if ((PHASE07_ALLOWED_PATHS.includes(item) && !bundle.inventory.includes(item)) ||
        (PHASE07_SCRATCH_PATHS.includes(item) && !bundle.scratchInventory.includes(item))) delete bundle.files[item];
  }
  return bundle;
}

function makePreCloseBundle() {
  const bundle = makeBundle();
  bundle.inventory = bundle.inventory.filter((item) => item !== `${book}/phase-07-verification.json`);
  delete bundle.files[`${book}/phase-07-verification.json`];
  bundle.verification = null;
  bundle.state = activeState();
  bundle.runtime.github.childIssue = { number: 84, state: 'OPEN', labels: ['phase:07-chapter-blueprints','role:machine-learning-engineer','status:in-progress'] };
  return rehashBundle(bundle, { rebuildVerification: false });
}

function refreshPreCloseBinding(bundle) {
  const preCloseDigest = preClosePackageDigest(bundle.files, bundle.inventory, bundle.activationSnapshot.authorityHashes[STATE_PATHS.localIssue]);
  if (bundle.activationSnapshot) bundle.activationSnapshot.bindingHashes['digest:pre-close-path-package'] = preCloseDigest;
  const hostileReview = bundle.reviews.find((review) => review.task === 'TASK-10');
  const preCloseBinding = hostileReview?.boundArtifacts.find((binding) => binding.path === 'digest:pre-close-path-package');
  if (preCloseBinding) {
    preCloseBinding.sha256 = preCloseDigest;
    refreshMaterializedReviewRecord(bundle.files, hostileReview);
  }
}

function syncVerification(bundle) {
  if (!bundle.verification) return bundle;
  bundle.verification = buildExpectedVerification(bundle);
  const text = `${JSON.stringify(bundle.verification, null, 2)}\n`;
  bundle.files[`${book}/phase-07-verification.json`] = { text, sha256: sha256(text) };
  return bundle;
}

function rehashBundle(bundle, { rebuildVerification = true } = {}) {
  for (const [name, text] of Object.entries(bundle.state)) {
    bundle.files[STATE_PATHS[name]] = { text, sha256: sha256(text) };
  }
  for (const entry of Object.values(bundle.files)) entry.sha256 = sha256(entry.text);
  for (const review of bundle.reviews) {
    if (bundle.files[review.path]) review.sha256 = bundle.files[review.path].sha256;
    if (review.repairPath && bundle.files[review.repairPath]) review.repairSha256 = bundle.files[review.repairPath].sha256;
    for (const binding of review.boundArtifacts) {
      if (review.task !== 'TASK-01' && bundle.files[binding.path]) binding.sha256 = bundle.files[binding.path].sha256;
    }
  }
  refreshPreCloseBinding(bundle);
  if (rebuildVerification) syncVerification(bundle);
  return bundle;
}

function makeAcceptedRepairBundle() {
  const bundle = makeBundle();
  const review = bundle.reviews[0];
  const repairPath = `${role}/reviews/phase-07/task-01-bootstrap-repair.md`;
  const repairText = '# Task 01 directed repair\n\nThe bounded bootstrap findings were repaired at the replacement activation checkpoint below.\n';
  const reviewText = '# Task 01 bootstrap independent review\n\nSPEC COMPLIANCE FAIL\nQUALITY CHANGES REQUESTED\n\nThe directed repair and replacement activation checkpoint close every recorded finding.\n\nSPEC COMPLIANCE PASS\nQUALITY APPROVED\n';
  const replacementCheckpoint = 'd'.repeat(40);
  bundle.files[repairPath] = { text: repairText, sha256: sha256(repairText) };
  bundle.files[review.path] = { text: reviewText, sha256: sha256(reviewText) };
  bundle.inventory = EXPECTED_PHASE07_PATHS.filter((item) => !item.endsWith('-repair.md') || item === repairPath);
  review.repairPath = repairPath;
  review.repairSha256 = sha256(repairText);
  review.boundArtifacts.find((item) => item.path === 'git:activation-checkpoint').sha256 = sha256(replacementCheckpoint);
  const hostileReview = bundle.reviews.find((item) => item.task === 'TASK-10');
  const bootstrapReviewIndex = hostileReview.boundArtifacts.findIndex((item) => item.path === review.path);
  hostileReview.boundArtifacts.splice(bootstrapReviewIndex + 1, 0, { path: repairPath, sha256: sha256(repairText) });
  bundle.activationSnapshot.checkpoint = replacementCheckpoint;
  bundle.activationSnapshot.bindingHashes['git:activation-checkpoint'] = sha256(replacementCheckpoint);
  bundle.runtime.git.activationCheckpoint = replacementCheckpoint;
  return rehashBundle(bundle);
}

function makeAcceptedTask10RepairBundle() {
  const bundle = makePreCloseBundle();
  const review = bundle.reviews.find((item) => item.task === 'TASK-10');
  const repairPath = `${role}/reviews/phase-07/task-10-hostile-integration-repair.md`;
  const repairText = '# Task 10 directed repair\n\nThe bounded hostile-integration findings were repaired and returned to the same reviewer.\n';
  bundle.files[review.path].text = bundle.files[review.path].text.replace(
    '\nPHASE07-REVIEW-RECORD-START',
    '\nSPEC COMPLIANCE FAIL\nQUALITY CHANGES REQUESTED\n\nThe directed repair closes every historical finding.\n\nPHASE07-REVIEW-RECORD-START',
  );
  bundle.files[repairPath] = { text: repairText, sha256: sha256(repairText) };
  review.repairPath = repairPath;
  review.repairSha256 = sha256(repairText);
  bundle.inventory = EXPECTED_PHASE07_PATHS.filter((item) => item !== `${book}/phase-07-verification.json`
    && (!item.endsWith('-repair.md') || item === repairPath));
  bundle.runtime.git.clean = false;
  bundle.runtime.git.dirtyPaths = expectedActiveDirtyPaths(bundle.inventory);
  refreshMaterializedReviewRecord(bundle.files, review);
  return rehashBundle(bundle, { rebuildVerification: false });
}

function mutateBundle(bundle, mutate, options) {
  mutate(bundle);
  return rehashBundle(bundle, options);
}

function mutateFileText(bundle, relative, mutate) {
  const before = bundle.files[relative].text;
  bundle.files[relative].text = mutate(before);
  assert.notEqual(bundle.files[relative].text, before, `fixture mutation must change ${relative}`);
  return rehashBundle(bundle);
}

function swapTextOnce(text, first, second) {
  const sentinel = '__PHASE07_HEADING_SWAP_SENTINEL__';
  assert.equal(text.includes(sentinel), false);
  assert.equal(text.split(first).length - 1, 1, `expected one ${first}`);
  assert.equal(text.split(second).length - 1, 1, `expected one ${second}`);
  return text.replace(first, sentinel).replace(second, first).replace(sentinel, second);
}

function codes(result) { return result.errors.map((item) => item.code); }
function expectCode(result, code) {
  assert.equal(result.ok, false);
  assert.deepEqual([...new Set(codes(result))], [code], `expected only ${code}: ${JSON.stringify(result.errors, null, 2)}`);
}

function expectCodeWithoutMutation(register, canonicalInput, code) {
  const registerBefore = clone(register);
  const canonicalBefore = clone(canonicalInput);
  expectCode(validateBlueprintRegister(register, canonicalInput), code);
  assert.deepEqual(register, registerBefore, `${code} must not mutate the caller register`);
  assert.deepEqual(canonicalInput, canonicalBefore, `${code} must not mutate the caller canonical inputs`);
}

async function writeFilesystemFixture(rootPath, bundle) {
  const writes = {
    ...Object.fromEntries(Object.entries(bundle.files).map(([item, entry]) => [item, entry.text])),
    ...FROZEN_INPUT_TEXTS,
    ...SCRATCH_FIXTURE_TEXTS,
  };
  for (const [relative, text] of Object.entries(writes)) {
    const absolute = path.join(rootPath, relative);
    await mkdir(path.dirname(absolute), { recursive: true });
    await writeFile(absolute, text);
  }
}

async function writeDeclaredFilesystemFixture(rootPath, bundle) {
  for (const [relative, entry] of Object.entries(bundle.files)) {
    const absolute = path.join(rootPath, relative);
    await mkdir(path.dirname(absolute), { recursive: true });
    await writeFile(absolute, entry.text);
  }
}

async function withFilesystemFixture(bundleOrFactory, run, prefix = 'mle-phase07-loader-') {
  const fixtureRoot = await mkdtemp(path.join(tmpdir(), prefix));
  try {
    const git = (args) => {
      const result = spawnSync('git', args, { cwd: fixtureRoot, encoding: 'utf8' });
      assert.equal(result.status, 0, `git ${args.join(' ')} failed: ${result.stderr}`);
      return result.stdout.trim();
    };
    git(['init','--quiet']);
    const sourceObjects = spawnSync('git', ['rev-parse','--path-format=absolute','--git-path','objects'], { cwd: root, encoding: 'utf8' });
    assert.equal(sourceObjects.status, 0, sourceObjects.stderr);
    const alternatesPath = path.join(fixtureRoot, '.git/objects/info/alternates');
    await mkdir(path.dirname(alternatesPath), { recursive: true });
    await writeFile(alternatesPath, `${sourceObjects.stdout.trim()}\n`);
    git(['config','user.name','Phase 07 Loader Fixture']);
    git(['config','user.email','phase07-loader@example.test']);
    git(['update-ref','refs/heads/main',ACTIVATION_CHECKPOINT]);
    git(['symbolic-ref','HEAD','refs/heads/main']);
    git(['read-tree','--empty']);
    const planTree = git(['rev-parse',`${ACTIVATION_CHECKPOINT}^{tree}`]);
    const planParent = git(['rev-parse',`${ACTIVATION_CHECKPOINT}^`]);
    const nonAncestorCheckpoint = git(['commit-tree',planTree,'-p',planParent,'-m','sibling activation fixture']);
    const bundle = typeof bundleOrFactory === 'function'
      ? bundleOrFactory({ activationCheckpoint: ACTIVATION_CHECKPOINT, nonAncestorCheckpoint })
      : bundleOrFactory;
    await writeFilesystemFixture(fixtureRoot, bundle);
    git(['add','--all']);
    git(['commit','--quiet','-m','later Phase 07 fixture state']);
    const head = git(['rev-parse','HEAD']);
    git(['cat-file','-e',`${ACTIVATION_CHECKPOINT}^{commit}`]);
    git(['merge-base','--is-ancestor',ACTIVATION_CHECKPOINT,head]);
    bundle.runtime.git.head = head;
    bundle.runtime.git.remoteMain = head;
    return await run(fixtureRoot, { activationCheckpoint: ACTIVATION_CHECKPOINT, nonAncestorCheckpoint, head, bundle });
  } finally {
    await rm(fixtureRoot, { recursive: true, force: true });
  }
}

test('filesystem-loaded stage-valid canonical register and final-content fixture pass', async () => {
  const bundle = makeBundle();
  assert.equal(validateBlueprintRegister(bundle.register, canonical).ok, true);
  for (const [item, text] of Object.entries(REAL_BLUEPRINT_TEXTS)) assert.equal(bundle.files[item].text, text, `real package fixture byte equality ${item}`);
  for (const [item, text] of Object.entries(FROZEN_INPUT_TEXTS)) assert.equal(bundle.files[item].sha256, sha256(text), `actual frozen-input hash ${item}`);
  for (const [item, text] of Object.entries(SCRATCH_FIXTURE_TEXTS)) assert.equal(bundle.files[item].sha256, sha256(text), `actual scratch hash ${item}`);
  const bootstrapReview = bundle.reviews[0];
  assert.equal(bootstrapReview.boundArtifacts.find((item) => item.path === `git:plan-commit:${PLAN_COMMIT}`).sha256, sha256(PLAN_COMMIT));
  for (const [item, digest] of Object.entries(ACTIVATION_CHECKPOINT_ARTIFACT_HASHES)) assert.equal(bootstrapReview.boundArtifacts.find((binding) => binding.path === item).sha256, digest);
  for (const [item, digest] of Object.entries(LIVE_GITHUB_HASHES)) assert.equal(bootstrapReview.boundArtifacts.find((binding) => binding.path === item).sha256, digest);
  for (const [item, digest] of Object.entries(EXPECTED_BOOTSTRAP_SCRATCH_HASHES)) assert.equal(bootstrapReview.boundArtifacts.find((binding) => binding.path === item).sha256, digest);
  for (const item of ['inventory:phase07-production-absence','inventory:phase07-scratch','git:activation-checkpoint']) {
    assert.equal(bootstrapReview.boundArtifacts.find((binding) => binding.path === item).sha256, bundle.activationSnapshot.bindingHashes[item]);
  }
  assert.deepEqual(bundle.activationSnapshot.github.rootIssue, { number: 79, state: 'OPEN', labels: ['role:machine-learning-engineer','status:in-progress'], bodySha256: LIVE_GITHUB_HASHES['github:#79:body'] });
  assert.deepEqual(bundle.activationSnapshot.github.childIssue, { number: 84, state: 'OPEN', labels: ['phase:07-chapter-blueprints','role:machine-learning-engineer','status:in-progress'], bodySha256: LIVE_GITHUB_HASHES['github:#84:body'] });
  for (const item of Object.values(STATE_PATHS)) {
    const activationHash = EXPECTED_ACTIVATION_STATE_HASHES[item];
    assert.equal(bootstrapReview.boundArtifacts.find((binding) => binding.path === item).sha256, activationHash);
    assert.notEqual(activationHash, bundle.files[item].sha256, `${item} immutable activation snapshot differs from final closure state`);
  }
  const task10Review = bundle.reviews.find((review) => review.task === 'TASK-10');
  const acceptedPreCloseDigest = task10Review.boundArtifacts.find((binding) => binding.path === 'digest:pre-close-path-package').sha256;
  const finalStateDigest = preClosePackageDigest(bundle.files, bundle.inventory, bundle.files[STATE_PATHS.localIssue].sha256);
  assert.equal(acceptedPreCloseDigest, independentlyRecomputePreClosePackageDigest(bundle), 'Task 10 permanently binds the accepted active local-issue identity');
  assert.notEqual(acceptedPreCloseDigest, finalStateDigest, 'final local-issue bytes must not rewrite the accepted Task 10 package digest');
  assert.equal(bundle.verification.stateTransition.localIssue.sha256, bundle.files[STATE_PATHS.localIssue].sha256, 'final verification binds the complete local-issue bytes');
  for (const review of bundle.reviews.slice(1)) {
    for (const item of FROZEN_INPUT_PATHS) assert.equal(review.boundArtifacts.find((binding) => binding.path === item)?.sha256, sha256(FROZEN_INPUT_TEXTS[item]), `${review.task} actual frozen binding ${item}`);
  }
  for (const [index, manifest] of EXPECTED_PHASE07_SCRATCH_PATHS.slice(3).entries()) {
    assert.equal(bundle.reviews[index + 1].boundArtifacts.find((binding) => binding.path === manifest).sha256, sha256(SCRATCH_FIXTURE_TEXTS[manifest]));
  }
  const fixtureRoot = await mkdtemp(path.join(tmpdir(), 'mle-phase07-final-content-'));
  try {
    await writeFilesystemFixture(fixtureRoot, bundle);
    for (const [item, text] of Object.entries({ ...FROZEN_INPUT_TEXTS, ...SCRATCH_FIXTURE_TEXTS })) assert.equal(await readFile(path.join(fixtureRoot, item), 'utf8'), text, `filesystem fixture byte equality ${item}`);
    const loaded = await loadPhase07Bundle(fixtureRoot, { runtime: bundle.runtime });
    const result = validatePhase07Bundle(loaded, { stage: 'final-content' });
    assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2));
  } finally {
    await rm(fixtureRoot, { recursive: true, force: true });
  }

  const hardeningFailures = [];
  const captureHardeningFailure = async (name, run) => {
    try {
      await run();
    } catch (error) {
      hardeningFailures.push(`${name}: ${error?.stack ?? error}`);
    }
  };

  await captureHardeningFailure('loader discovers pre-hostile review records without verification', async () => {
    const source = makePreHostileBundle();
    await withFilesystemFixture(source, async (fixture) => {
      const loaded = await loadPhase07Bundle(fixture, { runtime: source.runtime });
      assert.deepEqual(loaded.reviews.map((review) => review.task), ['TASK-01','TASK-05','TASK-06','TASK-07','TASK-09']);
      const result = validatePhase07Bundle(loaded, { stage: 'pre-hostile' });
      assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2));
    }, 'mle-phase07-pre-hostile-loader-');
  });

  await captureHardeningFailure('loader discovers pre-close review records without verification', async () => {
    const source = makePreCloseBundle();
    await withFilesystemFixture(source, async (fixture) => {
      const loaded = await loadPhase07Bundle(fixture, { runtime: source.runtime });
      assert.deepEqual(loaded.reviews.map((review) => review.task), ['TASK-01','TASK-05','TASK-06','TASK-07','TASK-09','TASK-10']);
      const result = validatePhase07Bundle(loaded, { stage: 'pre-close' });
      assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2));
    }, 'mle-phase07-pre-close-loader-');
  });

  await captureHardeningFailure('loader exposes exact lifecycle-real uncommitted paths before checkpoint 1', async () => {
    const lifecycleFailures = [];
    for (const [stage, source] of [['pre-hostile', makePreHostileBundle()], ['pre-close', makeAcceptedTask10RepairBundle()]]) {
      try {
        const bootstrap = makeBootstrapBundle();
        const task01Path = `${role}/reviews/phase-07/task-01-bootstrap.md`;
        bootstrap.inventory.push(task01Path);
        bootstrap.files[task01Path] = clone(source.files[task01Path]);
        for (const relative of [`${book}/validate-phase-07.mjs`, `${book}/validate-phase-07.test.mjs`]) {
          const text = ACTIVATION_CHECKPOINT_ARTIFACT_TEXTS[relative];
          bootstrap.files[relative] = { text, sha256: sha256(text) };
        }
        await withFilesystemFixture(bootstrap, async (fixture, gitHistory) => {
          await writeDeclaredFilesystemFixture(fixture, source);
          const expectedDirtyPaths = expectedActiveDirtyPaths(source.inventory);
          const status = spawnSync('git', ['status','--porcelain','--untracked-files=all'], { cwd: fixture, encoding: 'utf8' });
          assert.equal(status.status, 0, status.stderr);
          const actualStatusRecords = status.stdout.split('\n').filter(Boolean).sort();
          const modifiedTracked = new Set([`${book}/validate-phase-07.mjs`, `${book}/validate-phase-07.test.mjs`]);
          const expectedStatusRecords = expectedDirtyPaths.map((relative) => `${modifiedTracked.has(relative) ? ' M' : '??'} ${relative}`).sort();
          assert.deepEqual(actualStatusRecords, expectedStatusRecords, `${stage} fixture must preserve modified versus untracked status kinds`);
          const actualDirtyPaths = actualStatusRecords.map((line) => line.slice(3)).sort();
          assert.deepEqual(actualDirtyPaths, expectedDirtyPaths, `${stage} fixture must mirror the d50a07d tracked/untracked Phase 07 projection`);
          assert.equal(actualDirtyPaths.includes(task01Path), false, `${stage} Task 01 review is already tracked and clean`);
          assert.equal(actualDirtyPaths.includes(`${book}/validate-phase-07.mjs`), true, `${stage} repaired validator is modified`);
          assert.equal(actualDirtyPaths.includes(`${book}/validate-phase-07.test.mjs`), true, `${stage} repaired tests are modified`);
          if (stage === 'pre-close') assert.equal(actualDirtyPaths.includes(`${role}/reviews/phase-07/task-10-hostile-integration-repair.md`), true, 'pre-close declared Task 10 repair is untracked');

          const runtime = clone(source.runtime);
          runtime.git.head = gitHistory.head;
          runtime.git.remoteMain = gitHistory.head;
          runtime.git.clean = false;
          delete runtime.git.dirtyPaths;
          const loaded = await loadPhase07Bundle(fixture, { runtime });
          assert.equal(loaded.runtime.git.branch, 'main');
          assert.equal(loaded.runtime.git.head, loaded.runtime.git.remoteMain);
          assert.equal(loaded.runtime.git.clean, false);
          assert.deepEqual(loaded.runtime.git.dirtyPaths, expectedDirtyPaths, `${stage} loader must expose exact dirtyPaths`);
          const accepted = validatePhase07Bundle(loaded, { stage });
          assert.equal(accepted.ok, true, JSON.stringify(accepted.errors, null, 2));

          for (const mutate of [
            (candidate) => { candidate.runtime.git.dirtyPaths.pop(); },
            (candidate) => { candidate.runtime.git.dirtyPaths.push(`${book}/validate-phase-07.mjs`); candidate.runtime.git.dirtyPaths.sort(); },
            (candidate) => { candidate.runtime.git.clean = true; },
          ]) {
            const drift = clone(loaded); mutate(drift);
            expectCode(validatePhase07Bundle(drift, { stage }), 'GIT_ACTIVE');
          }

          const outside = 'notes/phase07-outside-allowlist.txt';
          await mkdir(path.dirname(path.join(fixture, outside)), { recursive: true });
          await writeFile(path.join(fixture, outside), 'outside lifecycle allowlist\n');
          const outsideLoaded = await loadPhase07Bundle(fixture, { runtime });
          assert.equal(outsideLoaded.runtime.git.dirtyPaths.includes(outside), true, 'loader must expose dirty files outside its content inventory');
          expectCode(validatePhase07Bundle(outsideLoaded, { stage }), 'GIT_ACTIVE');

          const missingPath = expectedDirtyPaths.find((relative) => relative.endsWith('/blueprints/chapter-21.md'));
          assert.equal(typeof missingPath, 'string');
          await rm(path.join(fixture, missingPath));
          const missingLoaded = await loadPhase07Bundle(fixture, { runtime });
          expectCode(validatePhase07Bundle(missingLoaded, { stage }), 'PATH_BOUNDARY');
        }, `mle-phase07-${stage}-dirty-loader-`);
      } catch (error) {
        lifecycleFailures.push(`${stage}: ${error?.stack ?? error}`);
      }
    }
    assert.deepEqual(lifecycleFailures, [], lifecycleFailures.join('\n\n'));
  });

  await captureHardeningFailure('loader inventories and rejects discovered unexpected paths', async () => {
    const source = makePreHostileBundle();
    await withFilesystemFixture(source, async (fixture) => {
      const unexpected = [
        `${book}/blueprints/unexpected.md`,
        `${role}/reviews/phase-07/unexpected.md`,
        '.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/unexpected.json',
        'public/generated.png',
        'public/generated.svg',
        'output/machine-learning-engineering.pdf',
        `${book}/companion/src/example.mjs`,
        'build/machine-learning-engineering/companion.js',
        'content/manuscript/chapter.md',
        'dist/MLE/companion.js',
        'publication/MLE/index.md',
        'abhyaas/phase07.json',
        'certification/mle/exam.json',
        'content/course/phase07.md',
        'content/second-volume/chapter.md',
        'project-control/roles/catalog-position-6.md',
        'project-control/roles/next-role/output.md',
        'tmp/phase07.txt',
        '.phase07/hidden.json',
        'dist/machine-learning-engineering/index.js',
        '.hidden-phase07',
        'assets/images/machine-learning-engineering/MLE-F05.1-2400x1600.png',
        'public/machine-learning-engineering/generated.png',
        'output/machine-learning-engineering/generated.pdf',
      ];
      for (const relative of unexpected) {
        const absolute = path.join(fixture, relative);
        await mkdir(path.dirname(absolute), { recursive: true });
        await writeFile(absolute, `unexpected ${relative}\n`);
      }
      const loaded = await loadPhase07Bundle(fixture, { runtime: source.runtime });
      const discovered = new Set([...(loaded.inventory ?? []), ...(loaded.scratchInventory ?? [])]);
      const undiscovered = unexpected.filter((relative) => !discovered.has(relative));
      assert.deepEqual(undiscovered, [], `loader must inventory every prohibited path: ${undiscovered.join(', ')}`);
      expectCode(validatePhase07Bundle(loaded, { stage: 'pre-hostile' }), 'PATH_BOUNDARY');
    }, 'mle-phase07-unexpected-loader-');
  });

  await captureHardeningFailure('loader retains immutable activation checkpoint across later commits', async () => {
    const source = makeBundle();
    await withFilesystemFixture(source, async (fixture, gitHistory) => {
      const runtime = clone(source.runtime);
      runtime.git.head = gitHistory.head;
      runtime.git.remoteMain = gitHistory.head;
      runtime.git.activationCheckpoint = gitHistory.head;
      const loaded = await loadPhase07Bundle(fixture, { runtime });
      assert.equal(loaded.runtime.git.head, gitHistory.head);
      assert.equal(loaded.runtime.git.activationCheckpoint, ACTIVATION_CHECKPOINT);
      assert.equal(loaded.activationSnapshot.checkpoint, ACTIVATION_CHECKPOINT);
      const result = validatePhase07Bundle(loaded, { stage: 'final' });
      assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2));
    }, 'mle-phase07-checkpoint-loader-');
  });

  await captureHardeningFailure('loader rejects a self-consistent invented activation checkpoint', async () => {
    const invented = 'f'.repeat(40);
    const source = makeBundle({ activationCheckpoint: invented });
    await withFilesystemFixture(source, async (fixture, gitHistory) => {
      const runtime = clone(source.runtime);
      runtime.git.head = gitHistory.head;
      runtime.git.remoteMain = gitHistory.head;
      runtime.git.activationCheckpoint = invented;
      const loaded = await loadPhase07Bundle(fixture, { runtime });
      assert.equal(loaded.activationSnapshot.checkpoint, invented);
      assert.equal(loaded.activationSnapshot.bindingHashes['git:activation-checkpoint'], sha256(invented));
      expectCode(validatePhase07Bundle(loaded, { stage: 'final' }), 'GIT_ACTIVATION_CHECKPOINT');
    }, 'mle-phase07-invented-checkpoint-');
  });

  await captureHardeningFailure('loader rejects a real commit outside the active ancestry', async () => {
    await withFilesystemFixture(
      ({ nonAncestorCheckpoint }) => makeBundle({ activationCheckpoint: nonAncestorCheckpoint }),
      async (fixture, gitHistory) => {
        const source = gitHistory.bundle;
        const objectCheck = spawnSync('git', ['cat-file','-e',`${gitHistory.nonAncestorCheckpoint}^{commit}`], { cwd: fixture, encoding: 'utf8' });
        assert.equal(objectCheck.status, 0, objectCheck.stderr);
        const ancestorCheck = spawnSync('git', ['merge-base','--is-ancestor',gitHistory.nonAncestorCheckpoint,gitHistory.head], { cwd: fixture, encoding: 'utf8' });
        assert.equal(ancestorCheck.status, 1, 'sibling checkpoint fixture must not be an ancestor');
        const runtime = clone(source.runtime);
        runtime.git.activationCheckpoint = gitHistory.nonAncestorCheckpoint;
        const loaded = await loadPhase07Bundle(fixture, { runtime });
        assert.equal(loaded.activationSnapshot.checkpoint, gitHistory.nonAncestorCheckpoint);
        expectCode(validatePhase07Bundle(loaded, { stage: 'final' }), 'GIT_ACTIVATION_CHECKPOINT');
      },
      'mle-phase07-nonancestor-checkpoint-',
    );
  });

  await captureHardeningFailure('loader retains GitHub bodies and rejects post-load drift', async () => {
    const source = makeBundle();
    const runtime = clone(source.runtime);
    runtime.github.rootIssue.body = LIVE_GITHUB_BODY_TEXTS.rootIssue;
    runtime.github.childIssue.body = LIVE_GITHUB_BODY_TEXTS.childIssue;
    await withFilesystemFixture(source, async (fixture) => {
      const loaded = await loadPhase07Bundle(fixture, { runtime });
      for (const key of ['rootIssue','childIssue']) {
        assert.equal(loaded.runtime.github[key].body, runtime.github[key].body);
        assert.equal(loaded.runtime.github[key].bodySha256, sha256(runtime.github[key].body));
      }
      const result = validatePhase07Bundle(loaded, { stage: 'final-content' });
      assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2));
      const rootDrift = clone(loaded); rootDrift.runtime.github.rootIssue.body += ' drift';
      expectCode(validatePhase07Bundle(rootDrift, { stage: 'final-content' }), 'GITHUB_BODY_DRIFT');
      const childDrift = clone(loaded); childDrift.runtime.github.childIssue.body += ' drift';
      expectCode(validatePhase07Bundle(childDrift, { stage: 'final-content' }), 'GITHUB_BODY_DRIFT');
    }, 'mle-phase07-github-loader-');
  });

  for (const relative of FROZEN_INPUT_PATHS) {
    await captureHardeningFailure(`fixed loader identity for ${relative}`, async () => {
      const source = makeBundle();
      await withFilesystemFixture(source, async (fixture) => {
        const absolute = path.join(fixture, relative);
        await writeFile(absolute, `${await readFile(absolute, 'utf8')}\n`);
        const loaded = await loadPhase07Bundle(fixture, { runtime: source.runtime });
        expectCode(validatePhase07Bundle(loaded, { stage: 'final-content' }), 'FROZEN_INPUT_IDENTITY');
      }, 'mle-phase07-frozen-input-loader-');
    });
  }

  await captureHardeningFailure('first caller cannot establish global canonical identity', async () => {
    const payloadRoot = await mkdtemp(path.join(tmpdir(), 'mle-phase07-first-canonical-'));
    try {
      const payloadPath = path.join(payloadRoot, 'payload.json');
      const payload = { register: makeRegister(), canonical: clone(canonical) };
      payload.canonical.architecture.chapters[0].title += ' caller-controlled drift';
      await writeFile(payloadPath, JSON.stringify(payload));
      const validatorUrl = pathToFileURL(path.join(here, 'validate-phase-07.mjs')).href;
      const script = `
        import { readFile } from 'node:fs/promises';
        const validator = await import(${JSON.stringify(validatorUrl)});
        const payload = JSON.parse(await readFile(process.argv[1], 'utf8'));
        const before = JSON.stringify(payload.canonical);
        const result = validator.validateBlueprintRegister(payload.register, payload.canonical);
        process.stdout.write(JSON.stringify({ result, unchanged: JSON.stringify(payload.canonical) === before }));
      `;
      const child = spawnSync(process.execPath, ['--input-type=module','--eval',script,payloadPath], { encoding: 'utf8' });
      assert.equal(child.status, 0, child.stderr);
      const observed = JSON.parse(child.stdout);
      assert.equal(observed.unchanged, true, 'validator must not mutate the first canonical caller');
      expectCode(observed.result, 'FROZEN_INPUT_IDENTITY');
    } finally {
      await rm(payloadRoot, { recursive: true, force: true });
    }
  });

  await captureHardeningFailure('canonical caller remains immutable on accepted validation', async () => {
    const immutableCanonical = deepFreeze(clone(canonical));
    const before = JSON.stringify(immutableCanonical);
    const result = validateBlueprintRegister(makeRegister(), immutableCanonical);
    assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2));
    assert.equal(JSON.stringify(immutableCanonical), before);
  });

  assert.deepEqual(hardeningFailures, [], hardeningFailures.join('\n\n'));
});

const schemaTargets = [
  ['register', REGISTER_KEYS, (register) => register, 'REGISTER_KEYS'],
  ['identity', IDENTITY_KEYS, (register) => register.identity, 'IDENTITY_KEYS'],
  ['counts', COUNT_KEYS, (register) => register.counts, 'COUNT_KEYS'],
  ['chapters', CHAPTER_KEYS, (register) => register.chapters[0], 'CHAPTER_KEYS'],
  ['claimTeaching', CLAIM_KEYS, (register) => register.claimTeaching[0], 'CLAIM_TEACHING_KEYS'],
  ['sourceUses', SOURCE_KEYS, (register) => register.sourceUses[0], 'SOURCE_USE_KEYS'],
  ['caseUses', CASE_KEYS, (register) => register.caseUses[0], 'CASE_USE_KEYS'],
  ['caseUses.placements', PLACEMENT_KEYS, (register) => register.caseUses[0].placements[0], 'CASE_PLACEMENT_KEYS'],
  ['caseUses.sourceUses', CASE_SOURCE_KEYS, (register) => register.caseUses.find((item) => item.sourceUses.length).sourceUses[0], 'CASE_SOURCE_KEYS'],
  ['dossier', DOSSIER_KEYS, (register) => register.dossier[0], 'DOSSIER_KEYS'],
  ['ports', PORT_KEYS, (register) => register.ports[0], 'PORT_KEYS'],
  ['sections', SECTION_KEYS, (register) => register.sections[0], 'SECTION_KEYS'],
  ['labs', LAB_KEYS, (register) => register.labs[0], 'LAB_KEYS'],
  ['assessment', ASSESSMENT_KEYS, (register) => register.assessment[0], 'ASSESSMENT_KEYS'],
  ['visuals', VISUAL_KEYS, (register) => register.visuals[0], 'VISUAL_KEYS'],
  ['handoffs', HANDOFF_KEYS, (register) => register.handoffs[0], 'HANDOFF_KEYS'],
  ['furniture', FURNITURE_KEYS, (register) => register.furniture, 'FURNITURE_KEYS'],
  ['furniture.child', FURNITURE_CHILD_KEYS, (register) => register.furniture.benchZero[0], 'FURNITURE_RECORD_KEYS'],
];

for (const [group, fields, select, code] of schemaTargets) {
  for (const field of fields) {
    test(`schema rejects missing ${group}.${field}`, () => {
      const register = makeRegister();
      delete select(register)[field];
      expectCode(validateBlueprintRegister(register, canonical), code);
    });
  }
}

test('closed schemas reject unknown properties at every record level', () => {
  for (const [, , select, code] of schemaTargets) {
    const register = makeRegister(); select(register).unknown = true;
    expectCode(validateBlueprintRegister(register, canonical), code);
  }
  for (const mutate of [
    (r) => { r.chapters = {}; },
    (r) => { r.identity.author = ''; },
    (r) => { r.chapters[0].order = 0; },
    (r) => { r.chapters[0].nextChapterId = null; },
    (r) => { r.chapters[20].nextChapterId = 'MLE-CH-22'; },
    (r) => { r.visuals[0].reservedPath = 'unexpected.png'; },
    (r) => { r.visuals.find((item) => item.kind === 'imagegen-candidate').reservedPath = null; },
    (r) => { r.chapters[0].sectionIds.push(r.chapters[0].sectionIds[0]); },
  ]) { const register = makeRegister(); mutate(register); expectCode(validateBlueprintRegister(register, canonical), 'TYPE_NULLABILITY'); }
});

test('count values and recomputed cardinalities are exact', () => {
  for (const [field, value] of Object.entries(COUNT_VALUES)) {
    const register = makeRegister(); register.counts[field] = value + 1;
    expectCode(validateBlueprintRegister(register, canonical), 'COUNT_VALUES');
  }
});

test('chapter identity order allocation and three-claim rule are frozen', () => {
  for (const mutate of [
    (r) => { r.chapters[0].title = 'Changed'; },
    (r) => { r.chapters[0].slug = 'changed-slug'; },
    (r) => { r.chapters.reverse(); },
    (r) => { r.chapters[0].primaryClaimIds.pop(); },
    (r) => { r.chapters[0].primaryClaimIds.push(r.chapters[1].primaryClaimIds[0]); },
    (r) => { r.chapters[0].partId = 'PART-07'; },
    (r) => { r.chapters[1].prerequisiteArtifacts.push('BL-99'); },
    (r) => { r.chapters[0].incomingState = 'REVIEWED'; },
    (r) => { r.chapters[0].outgoingStates = ['REVIEWED']; },
    (r) => { r.chapters[0].milestoneId = 'BL-20'; },
    (r) => { r.chapters[0].authorityOwner = 'MLE self-approval'; },
    (r) => { r.chapters[0].mleCeiling = 'Unlimited authority'; },
  ]) { const register = makeRegister(); mutate(register); expectCode(validateBlueprintRegister(register, canonical), 'CHAPTER_CANONICAL'); }

  const expectedIdentity = {
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
  assert.deepEqual(makeRegister().identity, expectedIdentity);
  assert.equal(expectedIdentity.architectureVersion, architecture.architectureVersion);
  assert.equal(expectedIdentity.architectureMdSha256, sha256(FROZEN_INPUT_TEXTS[`${book}/architecture.md`]));
  assert.equal(expectedIdentity.architectureJsonSha256, sha256(FROZEN_INPUT_TEXTS[`${book}/architecture.json`]));
  assert.equal(expectedIdentity.visualForecastSha256, sha256(FROZEN_INPUT_TEXTS[`${book}/visual-forecast.md`]));
  const integrationManifest = JSON.parse(FROZEN_INPUT_TEXTS[`${book}/sources/integration-manifest.json`]);
  assert.equal(expectedIdentity.integrationContract, integrationManifest.integrationContractHash);
  assert.equal(expectedIdentity.integrationManifestSha256, sha256(FROZEN_INPUT_TEXTS[`${book}/sources/integration-manifest.json`]));
  assert.equal(expectedIdentity.phase06HandoffSha256, sha256(FROZEN_INPUT_TEXTS[`${book}/sources/phase-07-handoff.md`]));
  assert.equal(expectedIdentity.phase06VerificationSha256, sha256(FROZEN_INPUT_TEXTS[`${book}/phase-06-verification.json`]));
  assert.equal(expectedIdentity.author, architecture.identity.author);
  assert.equal(expectedIdentity.title, `${architecture.identity.title}: ${architecture.identity.subtitle}`);
  assert.equal(expectedIdentity.designSystem, architecture.identity.creativeSystem);
  assert.equal(expectedIdentity.format, `screen-first ${architecture.identity.geometry.replace(/ screen-first$/, '')} book`);

  const identityFailures = [];
  for (const field of Object.keys(expectedIdentity)) {
    try {
      const register = makeRegister();
      register.identity[field] = `nonempty-drift-${field}`;
      expectCode(validateBlueprintRegister(register, canonical), 'IDENTITY_EXACT');
    } catch (error) {
      identityFailures.push(`${field}: ${error.message}`);
    }
  }
  assert.deepEqual(identityFailures, [], identityFailures.join('\n'));
});

test('claim teaching has one primary location and exact reverse mappings', () => {
  for (const mutate of [
    (r) => { r.claimTeaching[0].primarySectionId = 'MLE-CH-02-S02'; },
    (r) => { r.claimTeaching[0].sourceIds.pop(); },
    (r) => { r.claimTeaching[0].caseIds.push('CASE-12'); },
    (r) => { r.claimTeaching[1].claimId = r.claimTeaching[0].claimId; },
    (r) => { r.claimTeaching[0].recheckTriggers = []; },
  ]) { const register = makeRegister(); mutate(register); expectCode(validateBlueprintRegister(register, canonical), 'CLAIM_TEACHING_CANONICAL'); }
});

test('source claim edges reject missing duplicate reversed and cross-chapter mappings', () => {
  for (const mutate of [
    (r) => { r.sourceUses.pop(); },
    (r) => { r.sourceUses.push(clone(r.sourceUses[0])); },
    (r) => { [r.sourceUses[0].sourceId, r.sourceUses[0].claimId] = [r.sourceUses[0].claimId, r.sourceUses[0].sourceId]; },
    (r) => { r.sourceUses[0].chapterId = 'MLE-CH-21'; },
    (r) => { r.sourceUses.reverse(); },
  ]) { const register = makeRegister(); mutate(register); expectCode(validateBlueprintRegister(register, canonical), 'SOURCE_EDGE_CANONICAL'); }
});

test('case truth and canonical chapter claim source edges stay separated', () => {
  for (const mutate of [
    (r) => { r.caseUses[5].truthLabel = 'CONSTRUCTED SATELLITE'; },
    (r) => { r.caseUses[5].chapterIds.pop(); },
    (r) => { r.caseUses[5].chapterIds.push(r.caseUses[5].chapterIds[0]); },
    (r) => { r.caseUses[5].chapterIds.reverse(); },
    (r) => { r.caseUses[5].claimIds.pop(); },
    (r) => { r.caseUses[5].claimIds.push(r.caseUses[5].claimIds[0]); },
    (r) => { r.caseUses[5].claimIds.reverse(); },
    (r) => { r.caseUses[5].sourceUses.pop(); },
    (r) => { r.caseUses[5].sourceUses.push(clone(r.caseUses[5].sourceUses[0])); },
    (r) => { r.caseUses[5].sourceUses.reverse(); },
    (r) => { r.caseUses[5].placements.pop(); },
    (r) => { r.caseUses[5].placements[0].chapterId = 'MLE-CH-21'; },
    (r) => { r.caseUses.reverse(); },
    (r) => { r.caseUses[5].reportedFacts = clone(r.caseUses[5].attributedOutcomes); },
    (r) => { r.caseUses[5].allowedInferences = []; },
    (r) => { r.caseUses[5].forbiddenInferences = []; },
    (r) => { r.caseUses[5].sourceUses[0].evidenceRole = 'marketing-proof'; },
  ]) { const register = makeRegister(); mutate(register); expectCode(validateBlueprintRegister(register, canonical), 'CASE_CANONICAL'); }
});

test('architecture boundary scenario domain and port assignments remain exact', () => {
  for (const field of ['architectureClaimIds','boundaryIds','scenarioIds','domainIds','portIds']) {
    const register = makeRegister(); const section = register.sections.find((item) => item[field].length); section[field].pop();
    expectCode(validateBlueprintRegister(register, canonical), 'ARCHITECTURE_TRACE');
  }
  for (const mutate of [
    (r) => { const ids = r.sections.find((item) => item.architectureClaimIds.length > 1).architectureClaimIds; ids.push(ids[0]); },
    (r) => { r.sections.find((item) => item.architectureClaimIds.length > 1).architectureClaimIds.reverse(); },
    (r) => {
      const section = r.sections.find((item) => item.chapterId === 'MLE-CH-01' && item.architectureClaimIds.length);
      section.architectureClaimIds.push(architecture.chapters[20].claimIds.find((id) => !section.architectureClaimIds.includes(id)));
    },
    (r) => { const ids = r.sections.find((item) => item.boundaryIds.length > 1).boundaryIds; ids.push(ids[0]); },
    (r) => { r.sections.find((item) => item.boundaryIds.length > 1).boundaryIds.reverse(); },
    (r) => {
      const section = r.sections.find((item) => item.chapterId === 'MLE-CH-02' && item.boundaryIds.length);
      section.boundaryIds.push(architecture.chapters[20].boundaryIds.find((id) => !section.boundaryIds.includes(id)));
    },
    (r) => { const ids = r.sections.find((item) => item.scenarioIds.length > 1).scenarioIds; ids.push(ids[0]); },
    (r) => { r.sections.find((item) => item.scenarioIds.length > 1).scenarioIds.reverse(); },
    (r) => { r.sections.find((item) => item.chapterId === 'MLE-CH-02').scenarioIds.push('SCN-10'); },
    (r) => { const ids = r.sections.find((item) => item.domainIds.length).domainIds; ids.push(ids[0]); },
    (r) => { r.sections.find((item) => item.chapterId === 'MLE-CH-01').domainIds[0] = r.sections.find((item) => item.chapterId === 'MLE-CH-21').domainIds[0]; },
    (r) => { r.sections.find((item) => item.portIds.length).portIds.reverse(); },
  ]) { const register = makeRegister(); mutate(register); expectCode(validateBlueprintRegister(register, canonical), 'ARCHITECTURE_TRACE'); }
  const mismatch = makeRegister();
  mismatch.sections.find((item) => item.architectureClaimIds.length > 1).architectureClaimIds.reverse();
  const before = clone(mismatch);
  expectCode(validateBlueprintRegister(mismatch, canonical), 'ARCHITECTURE_TRACE');
  assert.equal(sha256(JSON.stringify(mismatch)), sha256(JSON.stringify(before)), 'architecture rejection must not repair the caller register');

  const driftedArchitecture = clone(canonical);
  driftedArchitecture.architecture.chapters[0].claimIds.push('AC-999');
  const driftedClaims = clone(canonical);
  driftedClaims.claims.claims[0].sourceIds.push('MLE-SRC-999');
  const invalidNested = makeRegister();
  invalidNested.sections[0].architectureClaimIds = null;
  const invalidPlacement = makeRegister();
  invalidPlacement.caseUses[0].placements = null;
  const invalidPortIds = makeRegister();
  invalidPortIds.sections[5].portIds = ['PORT-SHARED'];
  const immutableFailureCases = [
    ['null register',null,clone(canonical),'REGISTER_KEYS'],
    ['drifted architecture array',makeRegister(),driftedArchitecture,'FROZEN_INPUT_IDENTITY'],
    ['drifted claim array',makeRegister(),driftedClaims,'FROZEN_INPUT_IDENTITY'],
    ['invalid nested architecture array',invalidNested,clone(canonical),'ARCHITECTURE_TRACE'],
    ['invalid placement array',invalidPlacement,clone(canonical),'CASE_PLACEMENT_KEYS'],
    ['invalid portIds array',invalidPortIds,clone(canonical),'ARCHITECTURE_TRACE'],
  ];
  const mutationFailures = [];
  for (const [name, register, canonicalInput, code] of immutableFailureCases) {
    try {
      expectCodeWithoutMutation(register, canonicalInput, code);
    } catch (error) {
      mutationFailures.push(`${name}: ${error.message.split('\n')[0]}`);
    }
  }
  assert.deepEqual(mutationFailures, [], mutationFailures.join('\n'));
});

test('dossier transitions seams and upstream evidence cannot be silently repaired', () => {
  for (const mutate of [
    (r) => { r.dossier[0].incomingState = 'REVIEWED'; },
    (r) => { r.dossier[7].incomingState = 'UNORIENTED'; },
    (r) => { r.dossier[14].incomingState = 'UNORIENTED'; },
    (r) => { r.dossier[13].legalOutgoingStates = ['RELEASABLE']; },
    (r) => { r.dossier[2].inputHashes = []; },
  ]) { const register = makeRegister(); mutate(register); expectCode(validateBlueprintRegister(register, canonical), 'DOSSIER_CANONICAL'); }
});

test('all five ports retain decision parity without a privileged mechanism', () => {
  for (const mutate of [
    (r) => { r.ports.splice(4, 1); },
    (r) => { r.ports[1].portId = r.ports[0].portId; },
    (r) => { r.ports.reverse(); },
    (r) => { r.ports[0].chapterId = 'MLE-CH-21'; },
    (r) => { r.ports[1].invariantDecision = 'Privileged port decision'; },
    (r) => { r.ports[2].transferResult = 'APPROVED'; },
  ]) { const register = makeRegister(); mutate(register); expectCode(validateBlueprintRegister(register, canonical), 'PORT_PARITY'); }
});

test('section order primary disposition and chapter-specific teaching stay executable', () => {
  for (const mutate of [
    (r) => { r.sections[0].sectionId = 'MLE-CH-01-S09'; },
    (r) => { r.sections[1].claimDisposition = 'cross-reference'; },
    (r) => { for (const s of r.sections.slice(0, 8)) s.teachingAction = 'Generic content'; },
    (r) => { r.sections[0].teachingAction = 'This chapter contains polished manuscript prose for publication.'; },
    (r) => { r.sections[0].purpose = 'Decision'; },
  ]) { const register = makeRegister(); mutate(register); expectCode(validateBlueprintRegister(register, canonical), 'SECTION_CONTRACT'); }
});

test('labs reject nondeterminism automatic promotion and self approval', () => {
  for (const mutate of [
    (r) => { r.labs[0].truthState = 'production'; },
    (r) => { r.labs[0].prohibitedEffects = []; },
    (r) => { r.labs[0].redFailures = ['automatic promotion']; },
    (r) => { r.labs[0].acceptanceChecks = ['MLE self-approves release']; },
  ]) { const register = makeRegister(); mutate(register); expectCode(validateBlueprintRegister(register, canonical), 'LAB_CONTRACT'); }
});

test('assessment and handoff preserve evidence authority retry currentness and originality boundaries', () => {
  for (const field of ['observablePassEvidence','authorityLimit','retryRoute']) {
    const register = makeRegister(); register.assessment[0][field] = '';
    expectCode(validateBlueprintRegister(register, canonical), 'ASSESSMENT_CONTRACT');
  }
  for (const mutate of [
    (r) => { r.handoffs[0].recheckTriggers = []; },
    (r) => { r.handoffs[0].prohibitedClaims = []; },
    (r) => { r.handoffs[0].phase08Instructions = 'Write publishable manuscript prose now.'; },
    (r) => { r.handoffs[0].evidenceManifest = []; },
  ]) { const register = makeRegister(); mutate(register); expectCode(validateBlueprintRegister(register, canonical), 'HANDOFF_CONTRACT'); }
});

test('visual contract reserves only four candidates and keeps numeric truth semantic', () => {
  for (const mutate of [
    (r) => { r.visuals.push({ ...clone(r.visuals[0]), visualId: 'MLE-F01.1', kind: 'imagegen-candidate', candidateStatus: 'reserved', reservedPath: 'x.png' }); },
    (r) => { r.visuals.find((v) => v.kind === 'imagegen-candidate').reservedPath = 'asset.svg'; },
    (r) => { r.visuals[0].numericTruthDisposition = 'raster'; },
    (r) => { r.visuals[0].kind = 'imagegen-candidate'; },
    (r) => { r.visuals[0].altIntent = ''; },
  ]) { const register = makeRegister(); mutate(register); expectCode(validateBlueprintRegister(register, canonical), 'VISUAL_CONTRACT'); }
});

test('whole-book furniture cardinality obligations About Komal and closing line are exact', () => {
  for (const mutate of [
    (r) => { r.furniture.benchZero.pop(); },
    (r) => { r.furniture.parts[0].requiredContent.pop(); },
    (r) => { r.furniture.closing[4].purpose = 'Generic bio'; },
    (r) => { r.furniture.closingStatement = 'Changed'; },
  ]) { const register = makeRegister(); mutate(register); expectCode(validateBlueprintRegister(register, canonical), 'FURNITURE_CONTRACT'); }
});

test('chapter and furniture Markdown projections must deep-equal the register', () => {
  const bundle = makeBundle(); bundle.chapterProjections['MLE-CH-01'].chapter.title = 'Drift';
  expectCode(validatePhase07Bundle(bundle, { stage: 'final-content' }), 'CHAPTER_PROJECTION');
  const second = makeBundle(); second.furnitureProjection.closingStatement = 'Drift';
  expectCode(validatePhase07Bundle(second, { stage: 'final-content' }), 'FURNITURE_PROJECTION');
  const missingHeading = mutateFileText(makeBundle(), CHAPTER_PATHS[0], (text) => text.replace('## Observable objectives', 'Observable objectives'));
  expectCode(validatePhase07Bundle(missingHeading, { stage: 'final-content' }), 'CHAPTER_MARKDOWN_CONTRACT');
  const reordered = mutateFileText(makeBundle(), CHAPTER_PATHS[0], (text) => swapTextOnce(text, '## Observable objectives', '## Owned decision and retained authority'));
  expectCode(validatePhase07Bundle(reordered, { stage: 'final-content' }), 'CHAPTER_MARKDOWN_CONTRACT');
  const markdownHardeningFailures = [];
  for (const [name, mutate] of [
    ['visible Bench Setup heading is required', (text) => text.replace('\n### Bench Setup\n', '\nBench Setup\n')],
    ['visible Bench Sheet block is required', (text) => text.replace(/\n### Bench Sheet\n[\s\S]*?(?=\n### Qualification Gate\n)/, '')],
    ['visible Qualification Gate heading is required', (text) => text.replace('\n### Qualification Gate\n', '\nQualification Gate\n')],
    ...['state and dossier delta','authority route','next evidence']
      .map((element) => [`visible ${element} label is required`, (text) => text.replace(new RegExp(`^\\| ${element} \\|.*\\n`, 'm'), '')]),
    ['labeled content may not become an H3', (text) => text.replace('| authority route |', '### authority route\n\n| authority route |')],
    ['an eighteenth H2 is prohibited', (text) => text.replace('\nPHASE07-CHAPTER-PROJECTION-START', '\n## Unapproved eighteenth heading\n\nDrift.\n\nPHASE07-CHAPTER-PROJECTION-START')],
    ['a duplicate H2 is prohibited', (text) => text.replace('\nPHASE07-CHAPTER-PROJECTION-START', '\n## Observable objectives\n\nDuplicate.\n\nPHASE07-CHAPTER-PROJECTION-START')],
  ]) {
    try {
      const drift = mutateFileText(makeBundle(), CHAPTER_PATHS[0], mutate);
      expectCode(validatePhase07Bundle(drift, { stage: 'final-content' }), 'CHAPTER_MARKDOWN_CONTRACT');
    } catch (error) {
      markdownHardeningFailures.push(`${name}: ${error?.message ?? error}`);
    }
  }
  const report = mutateFileText(makeBundle(), `${book}/blueprints/verification-report.md`, () => 'accepted\n');
  expectCode(validatePhase07Bundle(report, { stage: 'final-content' }), 'REPORT_HANDOFF_CONTRACT');
  const handoff = mutateFileText(makeBundle(), `${book}/blueprints/phase-08-handoff.md`, () => 'Phase 08 active.\n');
  expectCode(validatePhase07Bundle(handoff, { stage: 'final-content' }), 'REPORT_HANDOFF_CONTRACT');
  const semanticHardeningFailures = [];
  const reportPath = `${book}/blueprints/verification-report.md`;
  const handoffPath = `${book}/blueprints/phase-08-handoff.md`;
  const exactSemanticMutations = [
    [reportPath, 'report accepted chapter count', (text) => text.replace('21 accepted chapter projections', '20 accepted chapter projections')],
    ...[
      ['7 parts', '6 parts'], ['21 milestones', '20 milestones'], ['63 claim-teaching records', '62 claim-teaching records'],
      ['160 source-claim uses', '159 source-claim uses'], ['12 case records', '11 case records'], ['168 sections', '167 sections'],
      ['42 deterministic labs', '41 deterministic labs'], ['21 assessments', '20 assessments'],
      ['105 five-port assertions', '104 five-port assertions'], ['25 visuals', '24 visuals'],
      ['21 Phase 08 handoffs', '20 Phase 08 handoffs'],
    ].map(([before, after]) => [reportPath, `report canonical count ${before}`, (text) => text.replace(before, after)]),
    [reportPath, 'report primary teaching identity', (text) => text.replace('Each chapter retains exactly one primary teaching section per claim.', 'Each chapter may retain two primary teaching sections per claim.')],
    [reportPath, 'report dossier seam identity', (text) => text.replace('The CH07 to CH08 and CH14 to CH15 seams preserve exact incoming evidence and dossier identity.', 'The chapter seams may repair missing evidence.')],
    [reportPath, 'report terminal dossier identity', (text) => text.replace('Chapter 21 reaches BL-20 and REVIEWED', 'Chapter 21 reaches BL-19 and RETIRED')],
    [reportPath, 'report visual count identity', (text) => text.replace('The four ImageGen candidates MLE-F05.1, MLE-F14.1, MLE-F16.1, and MLE-F18.1 are reserved only', 'Three ImageGen candidates are reserved only')],
    [reportPath, 'report furniture count identity', (text) => text.replace('10 opening items, seven five-obligation part gates, seven appendices, five closing items, About Komal', '9 opening items, six part gates, six appendices, four closing items')],
    [reportPath, 'report stop rule', (text) => text.replace('No manuscript, asset, code, publication, course, Abhyaas, certification, second-volume, or next-role output is authorized. ', '')],
    [reportPath, 'report Phase 08 status', (text) => text.replace('Phase 08 remains inactive pending accepted Phase 07 closure.', 'Phase 08 may begin before Phase 07 closes.')],
    [handoffPath, 'handoff inactive gate', (text) => text.replace('Phase 08 remains inactive. This record is a complete writer-facing handoff, not authorization to begin manuscript production.', 'Phase 08 is active and manuscript production is authorized.')],
    [handoffPath, 'handoff 21-chapter identity', (text) => text.replace('all 21 chapter blueprints', '20 selected chapter blueprints')],
    [handoffPath, 'handoff author identity', (text) => text.replace('Komal Nakrani as author', 'a replacement author')],
    [handoffPath, 'handoff design identity', (text) => text.replace('the Learning Systems Test Bench design system', 'an unspecified design system')],
    [handoffPath, 'handoff format identity', (text) => text.replace('the screen-first 7 by 10 inch format', 'an unspecified format')],
    [handoffPath, 'handoff chapter production counts', (text) => text.replace('eight-section production sequence, two deterministic labs, one assessment', 'seven-section production sequence, one deterministic lab, two assessments')],
    [handoffPath, 'handoff furniture counts', (text) => text.replace('all ten Bench Zero items, all seven part openers and Qualification Gates, seven appendices, five closing dossier items including About Komal', 'nine Bench Zero items, six part openers, six appendices, and four closing items')],
    [handoffPath, 'handoff visual identity', (text) => text.replace('the four reserved ImageGen candidates ungenerated', 'three ImageGen candidates generated')],
    [handoffPath, 'handoff currentness rule', (text) => text.replace('Recheck every volatile source or mechanism on its recorded trigger.', 'Assume every source remains current.')],
    [handoffPath, 'handoff truth and authority rule', (text) => text.replace('Preserve every public-case limitation and all adjacent-authority routes.', 'Discard public-case limitations and authority routes.')],
    [handoffPath, 'handoff prohibited claims', (text) => text.replace('Do not claim real training, production deployment, independent approval, benchmark outcomes, or business effects from synthetic labs.', 'Synthetic labs prove production and business outcomes.')],
    [handoffPath, 'handoff exact activation preconditions', (text) => text.replace('Manuscript work begins only after Phase 07 final verification, child closure, synchronized state, and an explicitly activated Phase 08 child.', 'Manuscript work may begin immediately.')],
  ];
  for (const [relative, name, mutate] of exactSemanticMutations) {
    try {
      const drift = mutateFileText(makeBundle(), relative, mutate);
      expectCode(validatePhase07Bundle(drift, { stage: 'final-content' }), 'REPORT_HANDOFF_CONTRACT');
    } catch (error) {
      semanticHardeningFailures.push(`${name}: ${error?.message ?? error}`);
    }
  }
  const projectionHardeningFailures = [
    ...markdownHardeningFailures.map((failure) => `chapter: ${failure}`),
    ...semanticHardeningFailures.map((failure) => `report/handoff: ${failure}`),
  ];
  assert.deepEqual(projectionHardeningFailures, [], `projection hardening failures:\n${projectionHardeningFailures.join('\n')}`);
});

test('review chains require exact verdicts current bindings and directed repair', () => {
  const acceptedRepair = makeAcceptedRepairBundle();
  const acceptedRepairResult = validatePhase07Bundle(acceptedRepair, { stage: 'final-content' });
  assert.equal(acceptedRepairResult.ok, true, JSON.stringify(acceptedRepairResult.errors, null, 2));
  for (const mutate of [
    (b) => { b.reviews[0].qualityVerdict = 'APPROVED'; },
    (b) => { b.reviews[1].sha256 = 'stale'; },
    (b) => { b.reviews[2].repairPath = `${role}/reviews/phase-07/task-06-lane-b-repair.md`; },
    (b) => { b.reviews[2].repairSha256 = 'a'.repeat(64); },
    (b) => {
      const review = b.reviews[2]; const repairPath = `${role}/reviews/phase-07/task-06-lane-b-repair.md`; const text = 'Directed repair without a prior failure.\n';
      review.repairPath = repairPath; review.repairSha256 = sha256(text); b.inventory = EXPECTED_PHASE07_PATHS.filter((item) => !item.endsWith('-repair.md') || item === repairPath); b.files[repairPath] = { text, sha256: sha256(text) };
    },
    (b) => { b.reviews[1].boundArtifacts.pop(); },
    (b) => { b.reviews[1].boundArtifacts[0].path = `${book}/blueprints/chapter-08.md`; },
    (b) => { b.reviews[4].boundArtifacts.push({ path: STATE_PATHS.role, sha256: b.files[STATE_PATHS.role].sha256 }); },
    (b) => { b.reviews[4].boundArtifacts.push({ path: `${book}/phase-07-verification.json`, sha256: b.files[`${book}/phase-07-verification.json`].sha256 }); },
    (b) => { b.reviews[4].boundArtifacts.push({ path: b.reviews[4].path, sha256: b.files[b.reviews[4].path].sha256 }); },
    (b) => { b.reviews[5].boundArtifacts.push({ path: STATE_PATHS.factory, sha256: b.files[STATE_PATHS.factory].sha256 }); },
    (b) => { b.reviews[5].boundArtifacts.push({ path: `${book}/phase-07-verification.json`, sha256: b.files[`${book}/phase-07-verification.json`].sha256 }); },
    (b) => { b.reviews[5].boundArtifacts.push({ path: b.reviews[5].path, sha256: b.files[b.reviews[5].path].sha256 }); },
    (b) => { b.reviews[0].boundArtifacts.push({ path: b.reviews[0].path, sha256: b.files[b.reviews[0].path].sha256 }); },
    (b) => { const p = `${role}/reviews/phase-07/task-05-lane-a-repair.md`; b.inventory = EXPECTED_PHASE07_PATHS.filter((item) => !item.endsWith('-repair.md') || item === p); b.files[p] = { text: 'orphan repair\n', sha256: sha256('orphan repair\n') }; },
    (b) => { b.reviews.reverse(); },
  ]) { const bundle = makeBundle(); mutate(bundle); refreshPreCloseBinding(bundle); syncVerification(bundle); expectCode(validatePhase07Bundle(bundle, { stage: 'final-content' }), 'REVIEW_CHAIN'); }
  for (const bindingPath of [
    `git:plan-commit:${PLAN_COMMIT}`,
    ...EXPECTED_BOOTSTRAP_SCRATCH_PATHS,
    'github:#79:body', 'github:#79:labels', 'github:#84:body', 'github:#84:labels',
    ...Object.values(STATE_PATHS),
    'inventory:phase07-production-absence', 'inventory:phase07-scratch', 'git:activation-checkpoint',
  ]) {
    const bundle = makeBundle(); bundle.reviews[0].boundArtifacts.find((item) => item.path === bindingPath).sha256 = '0'.repeat(64); syncVerification(bundle);
    expectCode(validatePhase07Bundle(bundle, { stage: 'final-content' }), 'REVIEW_CHAIN');
  }
  for (const mutate of [
    (b) => { b.activationSnapshot.planCommit = '0'.repeat(40); },
    (b) => { b.activationSnapshot.github.rootIssue.number = 80; },
    (b) => { b.activationSnapshot.github.rootIssue.state = 'CLOSED'; },
    (b) => { b.activationSnapshot.github.rootIssue.labels.pop(); },
    (b) => { b.activationSnapshot.github.rootIssue.bodySha256 = '0'.repeat(64); },
    (b) => { b.activationSnapshot.github.childIssue.number = 85; },
    (b) => { b.activationSnapshot.github.childIssue.state = 'CLOSED'; },
    (b) => { b.activationSnapshot.github.childIssue.labels.pop(); },
    (b) => { b.activationSnapshot.github.childIssue.bodySha256 = '0'.repeat(64); },
    (b) => { b.activationSnapshot.authorityHashes[STATE_PATHS.role] = '0'.repeat(64); },
    (b) => { b.activationSnapshot.activationArtifactHashes[`${book}/validate-phase-07.test.mjs`] = '0'.repeat(64); },
    (b) => { b.activationSnapshot.activationArtifactFixtureBytes[`${book}/validate-phase-07.mjs`] += 'drift'; },
    (b) => { b.activationSnapshot.scratchHashes[EXPECTED_BOOTSTRAP_SCRATCH_PATHS[0]] = '0'.repeat(64); },
    (b) => { b.activationSnapshot.productionInventory.present.pop(); },
    (b) => { b.activationSnapshot.scratchInventory.absent.pop(); },
  ]) { const bundle = makeBundle(); mutate(bundle); syncVerification(bundle); expectCode(validatePhase07Bundle(bundle, { stage: 'final-content' }), 'REVIEW_CHAIN'); }
  const failureHistory = mutateFileText(makeBundle(), `${role}/reviews/phase-07/task-05-lane-a.md`, () => '# Historical review\n\nSPEC COMPLIANCE FAIL\nQUALITY CHANGES REQUESTED\n\nSPEC COMPLIANCE PASS\nQUALITY APPROVED\n');
  expectCode(validatePhase07Bundle(failureHistory, { stage: 'final-content' }), 'REVIEW_CHAIN');
  const staleRepair = clone(acceptedRepair); staleRepair.reviews[0].repairSha256 = '0'.repeat(64); syncVerification(staleRepair);
  expectCode(validatePhase07Bundle(staleRepair, { stage: 'final-content' }), 'REVIEW_CHAIN');
  const missingRepair = clone(acceptedRepair); delete missingRepair.files[missingRepair.reviews[0].repairPath]; missingRepair.inventory = missingRepair.inventory.filter((item) => item !== missingRepair.reviews[0].repairPath);
  expectCode(validatePhase07Bundle(missingRepair, { stage: 'final-content' }), 'REVIEW_CHAIN');
  const staleReplacement = clone(acceptedRepair); staleReplacement.runtime.git.activationCheckpoint = 'e'.repeat(40); staleReplacement.activationSnapshot.checkpoint = 'e'.repeat(40);
  expectCode(validatePhase07Bundle(staleReplacement, { stage: 'final-content' }), 'REVIEW_CHAIN');
  const acceptedTask10Repair = makeAcceptedTask10RepairBundle();
  const task10Review = acceptedTask10Repair.reviews.find((review) => review.task === 'TASK-10');
  assert.equal(acceptedTask10Repair.inventory.includes(task10Review.repairPath), true, 'declared Task 10 repair must be in the pre-close inventory');
  assert.equal(task10Review.repairPath in acceptedTask10Repair.files, true, 'declared Task 10 repair must have filesystem bytes');
  assert.equal(acceptedTask10Repair.runtime.git.dirtyPaths.includes(task10Review.repairPath), true, 'declared Task 10 repair must be lifecycle-real dirt');
  assert.equal(acceptedTask10Repair.runtime.git.clean, false);
  const acceptedTask10RepairResult = validatePhase07Bundle(acceptedTask10Repair, { stage: 'pre-close' });
  assert.equal(acceptedTask10RepairResult.ok, true, JSON.stringify(acceptedTask10RepairResult.errors, null, 2));
  const missingTask10Repair = clone(acceptedTask10Repair);
  delete missingTask10Repair.files[task10Review.repairPath];
  missingTask10Repair.inventory = missingTask10Repair.inventory.filter((item) => item !== task10Review.repairPath);
  missingTask10Repair.runtime.git.dirtyPaths = missingTask10Repair.runtime.git.dirtyPaths.filter((item) => item !== task10Review.repairPath);
  expectCode(validatePhase07Bundle(missingTask10Repair, { stage: 'pre-close' }), 'REVIEW_CHAIN');
  const orphanTask10Repair = makePreCloseBundle();
  orphanTask10Repair.files[task10Review.repairPath] = clone(acceptedTask10Repair.files[task10Review.repairPath]);
  orphanTask10Repair.inventory = EXPECTED_PHASE07_PATHS.filter((item) => item !== `${book}/phase-07-verification.json`
    && (!item.endsWith('-repair.md') || item === task10Review.repairPath));
  orphanTask10Repair.runtime.git.clean = false;
  orphanTask10Repair.runtime.git.dirtyPaths = expectedActiveDirtyPaths(orphanTask10Repair.inventory);
  expectCode(validatePhase07Bundle(orphanTask10Repair, { stage: 'pre-close' }), 'REVIEW_CHAIN');
  const staleTask10Repair = clone(acceptedTask10Repair);
  staleTask10Repair.files[task10Review.repairPath].text += 'stale bytes\n';
  staleTask10Repair.files[task10Review.repairPath].sha256 = sha256(staleTask10Repair.files[task10Review.repairPath].text);
  expectCode(validatePhase07Bundle(staleTask10Repair, { stage: 'pre-close' }), 'REVIEW_CHAIN');
  const preClose = makePreCloseBundle();
  const hostileReview = preClose.reviews.find((review) => review.task === 'TASK-10');
  const digestBinding = hostileReview.boundArtifacts.find((binding) => binding.path === 'digest:pre-close-path-package');
  assert.equal(digestBinding.sha256, independentlyRecomputePreClosePackageDigest(preClose), 'Task 10 fixture digest must be independently recomputed from actual pre-close bytes');
  digestBinding.sha256 = '0'.repeat(64);
  preClose.activationSnapshot.bindingHashes['digest:pre-close-path-package'] = '0'.repeat(64);
  refreshMaterializedReviewRecord(preClose.files, hostileReview);
  expectCode(validatePhase07Bundle(preClose, { stage: 'pre-close' }), 'TASK10_PACKAGE_DIGEST');
  const finalDigestDrift = makeBundle();
  const finalHostileReview = finalDigestDrift.reviews.find((review) => review.task === 'TASK-10');
  const recomputedFromFinalState = preClosePackageDigest(finalDigestDrift.files, finalDigestDrift.inventory, finalDigestDrift.files[STATE_PATHS.localIssue].sha256);
  assert.notEqual(recomputedFromFinalState, finalDigestDrift.activationSnapshot.bindingHashes['digest:pre-close-path-package']);
  finalHostileReview.boundArtifacts.find((binding) => binding.path === 'digest:pre-close-path-package').sha256 = recomputedFromFinalState;
  finalDigestDrift.activationSnapshot.bindingHashes['digest:pre-close-path-package'] = recomputedFromFinalState;
  refreshMaterializedReviewRecord(finalDigestDrift.files, finalHostileReview);
  syncVerification(finalDigestDrift);
  expectCode(validatePhase07Bundle(finalDigestDrift, { stage: 'final-content' }), 'TASK10_PACKAGE_DIGEST');
});

test('active and final lifecycle projections reject contradictions', () => {
  const active = mutateBundle(makeBootstrapBundle(), (bundle) => { bundle.state.role = bundle.state.role.replace('active', 'complete'); });
  expectCode(validatePhase07Bundle(active, { stage: 'bootstrap' }), 'STATE_ROLE_ACTIVE');
  const activeRoot = mutateBundle(makeBootstrapBundle(), (bundle) => { bundle.state.root += '\nActive child: #85.'; });
  expectCode(validatePhase07Bundle(activeRoot, { stage: 'bootstrap' }), 'STATE_ROOT_ACTIVE');
  const activeLocal = mutateBundle(makeBootstrapBundle(), (bundle) => { bundle.state.localIssue += '\nStatus: complete.'; });
  expectCode(validatePhase07Bundle(activeLocal, { stage: 'bootstrap' }), 'STATE_LOCAL_ISSUE_ACTIVE');
  const activeFactory = mutateBundle(makeBootstrapBundle(), (bundle) => { bundle.state.factory += '\nPhase 07 complete.'; });
  expectCode(validatePhase07Bundle(activeFactory, { stage: 'bootstrap' }), 'STATE_FACTORY_ACTIVE');
  for (const [authority, code, mutate] of [
    ['role','STATE_ROLE_ACTIVE',(text) => text.replace('Phase 08 original manuscript: next gate, inactive', 'Phase 08 original manuscript: active')],
    ['root','STATE_ROOT_ACTIVE',(text) => text.replace('\nPhase 08 inactive', '')],
    ['localIssue','STATE_LOCAL_ISSUE_ACTIVE',(text) => text.replace('Phase 08 inactive.', 'Phase 08 active.')],
    ['factory','STATE_FACTORY_ACTIVE',(text) => text.replace('\nPhase 08 original manuscript and deterministic companion production: next gate, inactive.', '')],
  ]) {
    const phase08 = mutateBundle(makeBootstrapBundle(), (bundle) => { bundle.state[authority] = mutate(bundle.state[authority]); });
    expectCode(validatePhase07Bundle(phase08, { stage: 'bootstrap' }), code);
  }
  const final = mutateBundle(makeBundle(), (bundle) => { bundle.state.factory += '\nPhase 08 active.'; });
  expectCode(validatePhase07Bundle(final, { stage: 'final-content' }), 'STATE_FACTORY_FINAL');
  const finalRole = mutateBundle(makeBundle(), (bundle) => { bundle.state.role += '\nActive child issue: #85.'; });
  expectCode(validatePhase07Bundle(finalRole, { stage: 'final-content' }), 'STATE_ROLE_FINAL');
  const finalRoot = mutateBundle(makeBundle(), (bundle) => { bundle.state.root += '\nActive child: #84.'; });
  expectCode(validatePhase07Bundle(finalRoot, { stage: 'final-content' }), 'STATE_ROOT_FINAL');
  const finalLocal = mutateBundle(makeBundle(), (bundle) => { bundle.state.localIssue += '\nStatus: active.'; });
  expectCode(validatePhase07Bundle(finalLocal, { stage: 'final-content' }), 'STATE_LOCAL_ISSUE_FINAL');
  for (const [authority, code, mutate] of [
    ['role','STATE_ROLE_FINAL',(text) => text.replace('sole next gate, inactive', 'active')],
    ['root','STATE_ROOT_FINAL',(text) => text.replace('\nPhase 08 sole next gate, inactive', '')],
    ['localIssue','STATE_LOCAL_ISSUE_FINAL',(text) => text.replace('the sole next gate and inactive', 'an optional later gate and inactive')],
    ['factory','STATE_FACTORY_FINAL',(text) => text.replace('sole next gate, inactive', 'later gate, inactive')],
  ]) {
    const phase08 = mutateBundle(makeBundle(), (bundle) => { bundle.state[authority] = mutate(bundle.state[authority]); });
    expectCode(validatePhase07Bundle(phase08, { stage: 'final-content' }), code);
  }
  for (const mutate of [
    (b) => { b.runtime.github.rootIssue.number = 80; },
    (b) => { b.runtime.github.childIssue.number = 85; },
    (b) => { b.runtime.github.childIssue.state = 'CLOSED'; },
    (b) => { b.runtime.github.childIssue.labels.pop(); },
  ]) { const bootstrapGithub = makeBootstrapBundle(); mutate(bootstrapGithub); expectCode(validatePhase07Bundle(bootstrapGithub, { stage: 'bootstrap' }), 'GITHUB_ACTIVE'); }
  const preHostile = makePreHostileBundle();
  assert.equal(validatePhase07Bundle(preHostile, { stage: 'pre-hostile' }).ok, true);
  for (const mutate of [
    (b) => { b.runtime.github.rootIssue.number = 80; },
    (b) => { b.runtime.github.rootIssue.state = 'CLOSED'; },
    (b) => { b.runtime.github.rootIssue.labels = ['status:in-progress']; },
    (b) => { b.runtime.github.rootIssue.labels.push('phase:07-chapter-blueprints'); },
    (b) => { b.runtime.github.rootIssue.labels.reverse(); },
    (b) => { b.runtime.github.childIssue.number = 85; },
    (b) => { b.runtime.github.childIssue.state = 'CLOSED'; },
    (b) => { b.runtime.github.childIssue.labels = ['role:machine-learning-engineer','status:in-progress']; },
    (b) => { b.runtime.github.childIssue.labels.push('status:done'); },
    (b) => { b.runtime.github.childIssue.labels.reverse(); },
  ]) { const activeGithub = makePreHostileBundle(); mutate(activeGithub); expectCode(validatePhase07Bundle(activeGithub, { stage: 'pre-hostile' }), 'GITHUB_ACTIVE'); }
  const preHostileGit = makePreHostileBundle(); preHostileGit.runtime.git.branch = 'feature';
  expectCode(validatePhase07Bundle(preHostileGit, { stage: 'pre-hostile' }), 'GIT_ACTIVE');
  const preHostileDirty = makePreHostileBundle(); preHostileDirty.runtime.git.clean = false;
  expectCode(validatePhase07Bundle(preHostileDirty, { stage: 'pre-hostile' }), 'GIT_ACTIVE');
  const preHostileRemote = makePreHostileBundle(); preHostileRemote.runtime.git.remoteMain = 'd'.repeat(40);
  expectCode(validatePhase07Bundle(preHostileRemote, { stage: 'pre-hostile' }), 'GIT_ACTIVE');
  const finalStage = makeBundle();
  assert.equal(validatePhase07Bundle(finalStage, { stage: 'final' }).ok, true);
  for (const mutate of [
    (b) => { b.runtime.github.rootIssue.number = 80; },
    (b) => { b.runtime.github.rootIssue.state = 'CLOSED'; },
    (b) => { b.runtime.github.rootIssue.labels = ['status:in-progress']; },
    (b) => { b.runtime.github.rootIssue.labels.push('phase:07-chapter-blueprints'); },
    (b) => { b.runtime.github.rootIssue.labels.reverse(); },
    (b) => { b.runtime.github.childIssue.number = 85; },
    (b) => { b.runtime.github.childIssue.state = 'OPEN'; },
    (b) => { b.runtime.github.childIssue.labels = ['role:machine-learning-engineer','status:done']; },
    (b) => { b.runtime.github.childIssue.labels.push('status:in-progress'); },
    (b) => { b.runtime.github.childIssue.labels.reverse(); },
  ]) { const finalGithub = makeBundle(); mutate(finalGithub); expectCode(validatePhase07Bundle(finalGithub, { stage: 'final-content' }), 'GITHUB_FINAL'); }
  for (const mutate of [
    (b) => { b.runtime.git.branch = 'feature'; },
    (b) => { b.runtime.git.clean = false; },
    (b) => { b.runtime.git.remoteMain = 'd'.repeat(40); },
  ]) { const finalBundle = makeBundle(); mutate(finalBundle); expectCode(validatePhase07Bundle(finalBundle, { stage: 'final' }), 'GIT_FINAL'); }
});

test('verification manifest enforces every nested schema hash check temporal proof and next gate', () => {
  const nestedSchemas = [
    [VERIFICATION_KEYS, (v) => v], [ARTIFACT_KEYS, (v) => v.artifacts[0]],
    [REVIEW_KEYS, (v) => v.reviews[0]], [BOUND_ARTIFACT_KEYS, (v) => v.reviews[0].boundArtifacts[0]],
    [ARCHITECTURE_TRACE_KEYS, (v) => v.architectureTrace], [RESEARCH_TRACE_KEYS, (v) => v.researchTrace],
    [DOSSIER_TRACE_KEYS, (v) => v.dossierTrace], [VISUAL_CONTRACT_KEYS, (v) => v.visualContract],
    [VERIFICATION_FURNITURE_KEYS, (v) => v.furniture], [TDD_KEYS, (v) => v.tdd],
    [RED_KEYS, (v) => v.tdd.red], [GREEN_KEYS, (v) => v.tdd.green],
    [CHECK_KEYS, (v) => v.checks], [CHECK_RESULT_KEYS, (v) => v.checks.phase01Validator],
    [PATH_BOUNDARY_KEYS, (v) => v.pathBoundaries], [STATE_TRANSITION_KEYS, (v) => v.stateTransition],
    [STATE_RECORD_KEYS, (v) => v.stateTransition.role], [STATE_RECORD_KEYS, (v) => v.stateTransition.factory],
    [GITHUB_EXPECTATION_KEYS, (v) => v.githubExpectations],
    [GITHUB_ISSUE_KEYS, (v) => v.githubExpectations.rootIssue], [GITHUB_ISSUE_KEYS, (v) => v.githubExpectations.childIssue],
    [NEXT_GATE_KEYS, (v) => v.nextGate],
  ];
  for (const [fields, select] of nestedSchemas) {
    for (const field of fields) {
      const bundle = makeBundle(); const verification = clone(bundle.verification); delete select(verification)[field];
      expectCode(validateVerificationManifest(verification, bundle), 'VERIFICATION_SCHEMA');
    }
    const bundle = makeBundle(); const verification = clone(bundle.verification); select(verification).unknown = true;
    expectCode(validateVerificationManifest(verification, bundle), 'VERIFICATION_SCHEMA');
  }
  for (const mutate of [
    (v) => { v.role = 'writer'; },
    (v) => { v.book = 'second-volume'; },
    (v) => { v.phase = '08'; },
    (v) => { v.schema = 'wrong'; },
    (v) => { v.generatedAt = 'not-an-instant'; },
    (v) => { v.counts.chapters = 20; },
    (v) => { v.artifacts[0].sha256 = '0'.repeat(64); },
    (v) => { v.artifacts.reverse(); },
    (v) => { v.artifacts[0].kind = 'optional'; },
    (v) => { v.artifacts[0].required = false; },
    (v) => { v.reviews[0].boundArtifacts.pop(); },
    (v) => { v.reviews.reverse(); },
    (v) => { v.architectureTrace.claims = 21; },
    (v) => { v.researchTrace.reverseSymmetry = 'FAIL'; },
    (v) => { v.dossierTrace.firstMilestone = 'BL-01'; },
    (v) => { v.tdd.green.tests = 219; },
    (v) => { v.tdd.red.nodeVersion = 'v22.0.0'; },
    (v) => { v.tdd.red.errorCode = 'ERR_ASSERTION'; },
    (v) => { v.tdd.red.missingPath = 'wrong.mjs'; },
    (v) => { v.tdd.green.skipped = 1; },
    (v) => { v.visualContract.generatedAssets = 1; },
    (v) => { v.visualContract.candidateIds.reverse(); },
    (v) => { v.furniture.aboutKomalIncluded = false; },
    (v) => { v.checks.phase07FinalContent.status = 'FAIL'; },
    (v) => { v.checks.repositoryCheck.evidence = ''; },
    (v) => { v.pathBoundaries.allowlist.reverse(); },
    (v) => { v.pathBoundaries.scratchAllowlist.reverse(); },
    (v) => { v.pathBoundaries.packageDigest = '0'.repeat(64); },
    (v) => { v.pathBoundaries.unexpectedPaths.push('tmp/drift'); },
    (v) => { v.stateTransition.role.status = 'phase-07-active'; },
    (v) => { v.stateTransition.root.sha256 = '0'.repeat(64); },
    (v) => { v.stateTransition.localIssue.sha256 = EXPECTED_ACTIVATION_STATE_HASHES[STATE_PATHS.localIssue]; },
    (v) => { v.stateTransition.localIssue.path = 'wrong.md'; },
    (v) => { v.stateTransition.factory.status = 'phase-08-active'; },
    (v) => { v.githubExpectations.rootIssue.number = 80; },
    (v) => { v.githubExpectations.childIssue.labels.pop(); },
    (v) => { v.nextGate.name = 'Phase 09'; },
    (v) => { v.nextGate.status = 'active'; },
    (v) => { v.nextGate.catalogPosition6 = 'started'; },
  ]) { const bundle = makeBundle(); const verification = clone(bundle.verification); mutate(verification); expectCode(validateVerificationManifest(verification, bundle), 'VERIFICATION_CONTRACT'); }
  for (const mutate of [
    (v) => { v.checks.temporalPhase05Validator.status = 'FAIL'; },
    (v) => { v.checks.temporalPhase05Tests.evidence = 'wrong digest'; },
    (v) => { v.checks.temporalPhase06Validator.evidence = ''; },
    (v) => { v.checks.temporalPhase06Tests.evidence = 'current-tree run'; },
  ]) { const bundle = makeBundle(); const verification = clone(bundle.verification); mutate(verification); expectCode(validateVerificationManifest(verification, bundle), 'TEMPORAL_EVIDENCE'); }
  for (const [check, pins] of Object.entries(TEMPORAL_PINS)) {
    for (const pin of pins) {
      const bundle = makeBundle(); const verification = clone(bundle.verification); const before = verification.checks[check].evidence;
      verification.checks[check].evidence = before.replace(pin, 'MUTATED_TEMPORAL_PIN');
      assert.notEqual(verification.checks[check].evidence, before, `expected temporal evidence to contain ${pin}`);
      expectCode(validateVerificationManifest(verification, bundle), 'TEMPORAL_EVIDENCE');
    }
  }
});

test('path boundary rejects unexpected hidden symlink media publication and downstream outputs', () => {
  for (const bad of ['.hidden-phase07','tmp/phase07.txt','public/generated.png','public/generated.svg','public/generated.webp','output/machine-learning-engineering.pdf','content/manuscript/chapter.md',`${book}/companion/src/example.mjs`,'dist/machine-learning-engineering/index.js','build/machine-learning-engineering/companion.js','publication/machine-learning-engineering/index.md','abhyaas/phase07.json','certification/mle/exam.json','content/course/phase07.md','content/second-volume/chapter.md','project-control/roles/catalog-position-6.md','project-control/roles/next-role/output.md']) {
    const bundle = makeBundle(); bundle.inventory.push(bad);
    expectCode(validatePhase07Bundle(bundle, { stage: 'final-content' }), 'PATH_BOUNDARY');
  }
  const missing = makeBundle(); missing.inventory = missing.inventory.filter((item) => !item.endsWith('chapter-21.md'));
  expectCode(validatePhase07Bundle(missing, { stage: 'final-content' }), 'PATH_BOUNDARY');
  const scratch = makeBundle(); scratch.scratchInventory.push('.superpowers/sdd/2026-08-18-machine-learning-engineer-phase-07/extra.json');
  expectCode(validatePhase07Bundle(scratch, { stage: 'final-content' }), 'PATH_BOUNDARY');
  const bundle = makeBundle(); bundle.symlinks.push(`${book}/blueprints/link`);
  expectCode(validatePhase07Bundle(bundle, { stage: 'final-content' }), 'PATH_BOUNDARY');
});

test('bootstrap stage accepts only activation artifacts and proves every blueprint absent', () => {
  const bundle = makeBootstrapBundle();
  const absent = EXPECTED_PHASE07_PATHS.filter((item) => !EXPECTED_BOOTSTRAP_PATHS.includes(item));
  const scratchAbsent = EXPECTED_PHASE07_SCRATCH_PATHS.filter((item) => !EXPECTED_BOOTSTRAP_SCRATCH_PATHS.includes(item));
  assert.deepEqual(bundle.inventory, EXPECTED_BOOTSTRAP_PATHS);
  assert.equal(bundle.inventory.length, 4);
  assert.equal(absent.length, 38);
  assert.deepEqual(bundle.scratchInventory, EXPECTED_BOOTSTRAP_SCRATCH_PATHS);
  assert.equal(bundle.scratchInventory.length, 3);
  assert.equal(scratchAbsent.length, 3);
  for (const item of EXPECTED_BOOTSTRAP_PATHS) assert.equal(item in bundle.files, true);
  for (const item of absent) assert.equal(item in bundle.files, false);
  for (const item of EXPECTED_BOOTSTRAP_SCRATCH_PATHS) assert.equal(item in bundle.files, true);
  for (const item of scratchAbsent) assert.equal(item in bundle.files, false);
  const result = validatePhase07Bundle(bundle, { stage: 'bootstrap' });
  assert.equal(result.ok, true, JSON.stringify(result.errors, null, 2));
  const bootstrap = makeBootstrapBundle(); const earlyRegisterPath = `${book}/blueprints/blueprint-register.json`;
  bootstrap.register = makeRegister(); const earlyRegisterText = `${JSON.stringify(bootstrap.register, null, 2)}\n`; bootstrap.files[earlyRegisterPath] = { text: earlyRegisterText, sha256: sha256(earlyRegisterText) };
  bootstrap.inventory = EXPECTED_PHASE07_PATHS.filter((item) => EXPECTED_BOOTSTRAP_PATHS.includes(item) || item === earlyRegisterPath);
  expectCode(validatePhase07Bundle(bootstrap, { stage: 'bootstrap' }), 'BOOTSTRAP_OUTPUT_PREMATURE');
  const preclose = makePreCloseBundle();
  assert.equal(validatePhase07Bundle(preclose, { stage: 'pre-close' }).ok, true);
  const premature = clone(preclose); premature.inventory = EXPECTED_PHASE07_PATHS.filter((item) => preclose.inventory.includes(item) || item === `${book}/phase-07-verification.json`); premature.verification = buildExpectedVerification(premature);
  const prematureText = `${JSON.stringify(premature.verification, null, 2)}\n`; premature.files[`${book}/phase-07-verification.json`] = { text: prematureText, sha256: sha256(prematureText) };
  expectCode(validatePhase07Bundle(premature, { stage: 'pre-close' }), 'VERIFICATION_PREMATURE');
  const missingVerification = makeBundle(); missingVerification.verification = null; missingVerification.inventory = missingVerification.inventory.filter((item) => !item.endsWith('phase-07-verification.json')); delete missingVerification.files[`${book}/phase-07-verification.json`];
  expectCode(validatePhase07Bundle(missingVerification, { stage: 'final-content' }), 'VERIFICATION_MISSING');
  assert.throws(() => validatePhase07Bundle(makeBundle(), { stage: 'unknown' }), /Unknown Phase 07 validation stage/);
});

assert.equal(schemaTargets.reduce((sum, item) => sum + item[1].length, 0) + 21, 220);
