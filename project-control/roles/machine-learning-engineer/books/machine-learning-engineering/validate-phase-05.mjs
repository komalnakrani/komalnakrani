import { createHash } from 'node:crypto';
import { existsSync, realpathSync } from 'node:fs';
import { lstat, readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const A = 'project-control/roles/machine-learning-engineer/books/machine-learning-engineering';
const R = 'project-control/roles/machine-learning-engineer/reviews/phase-05';

export const BUNDLE_PATHS = [
  'AGENTS.md',
  'docs/superpowers/plans/2026-08-18-machine-learning-engineer-phase-05.md',
  'project-control/roles/machine-learning-engineer/research/evidence-register.json',
  'project-control/roles/machine-learning-engineer/books/book-scope-decision.md',
  'project-control/roles/machine-learning-engineer/books/working/scope-boundary-guardrails.md',
  `${A}/architecture.md`,
  `${A}/architecture.json`,
  `${A}/competency-to-chapter.csv`,
  `${A}/project-map.md`,
  `${A}/visual-forecast.md`,
  `${A}/validate-phase-05.mjs`,
  `${A}/validate-phase-05.test.mjs`,
  `${A}/phase-05-verification.md`,
  `${R}/task-01-bootstrap.md`,
  `${R}/task-02-core-architecture.md`,
  `${R}/task-02-repair.md`,
  `${R}/task-03-competency-map.md`,
  `${R}/task-03-repair.md`,
  `${R}/task-04-project-map.md`,
  `${R}/task-04-repair.md`,
  `${R}/task-05-learning-visual.md`,
  `${R}/task-05-repair.md`,
  `${R}/task-06-hostile-integration.md`,
  `${R}/task-06-repair.md`,
  'project-control/roles/machine-learning-engineer/issues/phase-05-book-architecture.md',
  'project-control/roles/machine-learning-engineer/issues/root.md',
  'project-control/roles/machine-learning-engineer/ROLE-STATE.md',
  'project-control/role-factory/FACTORY-STATE.md',
];

const PINNED = {
  'AGENTS.md': '7bbf3ef5aa267194b3d623363a202014bd029dab2cfcdc73a62c1541e7346bb6',
  'docs/superpowers/plans/2026-08-18-machine-learning-engineer-phase-05.md': '24b0a26e3ffc2b0481b9997967d8ab13432801e4726c98e434dd7a0b9d93bba4',
  'project-control/roles/machine-learning-engineer/research/evidence-register.json': '65681f37272478fd09eddecb52ab4d10d3cc069fb6cb9ef4843720db8e6bd8bd',
  'project-control/roles/machine-learning-engineer/books/book-scope-decision.md': 'a1f09949c8d1ea6508be4b859e6d5be284da121cd572be7e070de501f37f889e',
  'project-control/roles/machine-learning-engineer/books/working/scope-boundary-guardrails.md': 'cc306d15a5f742a4b20350acea84365cdbdf64252a91035b3a04c7d4e638a095',
  [`${A}/architecture.md`]: '5f41bfc624f7085b8e3b2a12d6c2c3d52d6c21659eb5140d94cfa29b0edce630',
  [`${A}/architecture.json`]: 'bb2b6fe1137b6b56ff4729d0131c1b9496804bcd3a37e07a92361f4af4da972f',
  [`${A}/competency-to-chapter.csv`]: '05d18b0e4d88c626429cc8ad93c42dbe6f7100bd7b21dfb044750752ff9efed8',
  [`${A}/project-map.md`]: '6623c3c9403ac39d43a855c9105fde7818e5751f0430f3fe03f8b54fe06d86ec',
  [`${A}/visual-forecast.md`]: '64861260b24e57342b3d56d651f5b4d55850ad4ac749cea33f1802616c952b94',
  [`${R}/task-01-bootstrap.md`]: 'c6a2bba826d714fe4eb870b7de7111603be8fa03b51ca76aff7eb4e9f248c862',
  [`${R}/task-02-core-architecture.md`]: 'f47d9b9b60aef71abedb72c24700a1c0731fff26b770fd4425cd176faeb6d144',
  [`${R}/task-02-repair.md`]: '52b5fcdb555950587ee4e1c734a0acb93310c068b5fa56358c1790b07ce6d498',
  [`${R}/task-03-competency-map.md`]: '81f39e9ce0430a61b8169746efbcb22ce3eb0444f55b791e0dfea532325ede19',
  [`${R}/task-04-project-map.md`]: '0c4e19cf03b19b8061e2b821f8322fe57402898d3d7fad7f3420dec9f4813558',
  [`${R}/task-05-learning-visual.md`]: 'dd938f21080ffd1d33b77cdfe7dc8521eb97b555cff2aae5f8684ce5b577f1b5',
  [`${R}/task-05-repair.md`]: '3eb8c0686e2103034175764b9972ad44895660248b6368c5b30f7b082db7bf39',
};

const SEMANTIC_DIGESTS = {
  clusters: 'a8a8f827b94892a23345614da1a9b6169022c2afc459561b8cb91ebba1aaadb4',
  claims: 'bb1603bbd7b4aaf1296ff7354498916e714f0bfe5e969f1f54a4762f7770a916',
  boundaries: 'd53946fef3314ae93c973a701d01743e61d187a6bbb46b8551c89ab16ca5b186',
  scenarios: 'b789c731dfb34a759f1935f25beae54dc7a213eca147c197e59af57f6d9a1581',
  publications: 'c026d7f68dbdd75e9dde35f3c289841e93da557c6d1fb1e4720305e5f96f6491',
  nonDuplication: '5ffbb1ade87bdfa34f08e77c40656145fd4562bf28d24ba186909a30b5788404',
  reservations: '5ac8503965dc056340d38772a1407118c61043e69cf43155c3fa6e421a2499d9',
  creativePolicies: '6f22986cdf1fd8a3f8ab1db09789440b10085c93cc8cf19858a8c802179f77e3',
  parts: '0fe614fd8d065a3f4aea25067c782618c77575405997d13b36a51fec249b83de',
  chapters: 'd59d2232f2d8e44f12d3594be7028c380db8d70b8248a811f28c61351bfb883c',
  domains: '3217e63d64e604ae0ce8a10e5b249951f5c80ba3c1a02c267d6dd76a78b07266',
  ports: '85355a546a855cabdaebda5f6e3fa5e50aa34df3f1d9c1b6a5ff364fff780927',
  contexts: '4cbc300b63b5f394a7cdff0e3dc3b4646d24d8a5787ad39956552760a34c61cf',
  exits: '6a4d907f94022afc2b646057faab17c60c0dac659248c94d937c0f790b68335a',
  cases: 'fa2e5daa9195c48609a593838695dce86a623ac2119926d6fe3cf44eca73ac94',
  scenarioMap: '6edec59b2b08da61f1390694e60b5d866728d85c7009e79ca1748713e2663303',
  existence: '474cffabef7a10166e1cbea13970efbe63155997949c33c22fd2a581534f4f05',
  lifecycle: '5e1575c86536387b39bd1a8249a976c998bb005597d9e4f62fcc82110ae07c67',
  furniture: 'cb26f116801e8b7edcefc2bc1308e166c11a59a71cc3d49fdf83410beb5774fa',
  appendices: '5be53821e57030d05528d5d0fa15b25089d57cce37966a06f043630ce5d25b68',
  companion: 'bcbac3b0d0961a033598b608f133d74f24531850802d1a8af23aeaec77a24a1f',
  sourceRules: '568c9956e198bf9ed563e2cf8a47f8ec77782d76968ba59d8ddd9fc9de5676e4',
  visual: '0d6d658352873f7e01e84983acd3f08bc26225084fa698a6b274f4d02bd80618',
};

const ARCH_H2 = [
  'Decision and identity', 'Thesis and reader transformation', 'Publication boundary',
  'Seven-part progression', 'Chapter contract index',
  'Chapter decisions, failures, and evidence endpoints', 'Trace ownership by chapter',
  'Exact chapter contract projection', 'Dossier lifecycle and legal movement',
  'Twelve provisional publication domains', 'Five replaceable context ports',
  'Bounded case map', 'Accepted semantic registries',
  'Exact domain, port-test, case, and lifecycle projection',
  'Chapter-existence and originality gate', 'Canonical terminology and conventions',
  'Deterministic companion boundary', 'Source and evidence rules',
  'Learning Systems Test Bench visual contract',
  'Opening, navigation, appendices, and close', 'Exact remaining top-level projection',
  'Change control and Phase 06 handoff',
];

const PROJECT_H2 = [
  'Truth and scope boundary', 'Record and lineage contract', 'Legal dossier states',
  'Deterministic companion contract', 'Five replaceable context ports',
  'Chapter-by-chapter dossier progression', 'Terminal non-serving and review proof',
  'Forty cluster-context transfer cases', 'Thirty-five part-exit compatibility checks',
  'Port equality and replaceability proof', 'Safety and authority invariants',
  'Completion invariant',
];

const VISUAL_H2 = [
  'Contract identity', 'Production doctrine', 'Chapter contracts',
  'Constructed-case binding', 'Bench Zero, navigation, and closing furniture',
  'Global ImageGen candidate manifest', 'Immediate production QA contract',
  'Phase handoff',
];

const CSV_HEADER = [
  'cluster_id', 'cluster_name', 'primary_chapters', 'secondary_chapters',
  'required_artifacts', 'assessment_evidence', 'depth', 'claim_ids',
  'boundary_ids', 'scenario_ids', 'context_tests', 'adjacent_boundary',
];

const RED_TEST_COMMAND = 'node --test project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-05.test.mjs';
const FINAL_GREEN_TEST_COUNT = 190;

const REVIEW_BINDINGS = [
  [`${R}/task-01-bootstrap.md`, []],
  [`${R}/task-02-core-architecture.md`, [`${A}/architecture.md`, `${A}/architecture.json`]],
  [`${R}/task-03-competency-map.md`, [`${A}/competency-to-chapter.csv`]],
  [`${R}/task-04-project-map.md`, [`${A}/project-map.md`]],
  [`${R}/task-05-learning-visual.md`, [`${A}/visual-forecast.md`]],
];

const EXPECTED_REVIEW_PATHS = new Set([
  `${R}/task-01-bootstrap.md`,
  `${R}/task-02-core-architecture.md`,
  `${R}/task-02-repair.md`,
  `${R}/task-03-competency-map.md`,
  `${R}/task-04-project-map.md`,
  `${R}/task-05-learning-visual.md`,
  `${R}/task-05-repair.md`,
  `${R}/task-06-hostile-integration.md`,
  `${R}/task-06-repair.md`,
]);

const EXPECTED_BOOK_PATHS = new Set([
  `${A}/architecture.md`, `${A}/architecture.json`, `${A}/competency-to-chapter.csv`,
  `${A}/project-map.md`, `${A}/visual-forecast.md`, `${A}/validate-phase-05.mjs`,
  `${A}/validate-phase-05.test.mjs`, `${A}/phase-05-verification.md`,
]);

const EXPECTED_MLE_ROLE_PATHS = new Set([
  'project-control/roles/machine-learning-engineer/ROLE-STATE.md',
  'project-control/roles/machine-learning-engineer/books/book-scope-decision.md',
  'project-control/roles/machine-learning-engineer/books/phase-04-verification.md',
  'project-control/roles/machine-learning-engineer/books/validate-phase-04.mjs',
  'project-control/roles/machine-learning-engineer/books/validate-phase-04.test.mjs',
  'project-control/roles/machine-learning-engineer/books/working/cluster-depth-analysis.md',
  'project-control/roles/machine-learning-engineer/books/working/scope-boundary-guardrails.md',
  'project-control/roles/machine-learning-engineer/books/working/volume-alternatives.md',
  'project-control/roles/machine-learning-engineer/issues/phase-01-role-validation.md',
  'project-control/roles/machine-learning-engineer/issues/phase-04-book-scope.md',
  'project-control/roles/machine-learning-engineer/issues/phase-05-book-architecture.md',
  'project-control/roles/machine-learning-engineer/issues/root.md',
  'project-control/roles/machine-learning-engineer/research/adjacent-role-boundary.md',
  'project-control/roles/machine-learning-engineer/research/evidence-register.json',
  'project-control/roles/machine-learning-engineer/research/role-validation.md',
  'project-control/roles/machine-learning-engineer/research/validate-phase-01.mjs',
  'project-control/roles/machine-learning-engineer/research/validate-phase-01.test.mjs',
  'project-control/roles/machine-learning-engineer/research/verification-report.md',
  'project-control/roles/machine-learning-engineer/research/working/boundary-failure-evidence.md',
  'project-control/roles/machine-learning-engineer/research/working/boundary-failure-fragment.json',
  'project-control/roles/machine-learning-engineer/research/working/market-role-evidence.md',
  'project-control/roles/machine-learning-engineer/research/working/market-role-fragment.json',
  'project-control/roles/machine-learning-engineer/research/working/technical-lifecycle-evidence.md',
  'project-control/roles/machine-learning-engineer/research/working/technical-lifecycle-fragment.json',
]);

const EXPECTED_MLE_DOC_PATHS = new Set([
  'docs/superpowers/plans/2026-08-18-machine-learning-engineer-phase-01.md',
  'docs/superpowers/plans/2026-08-18-machine-learning-engineer-phase-04.md',
  'docs/superpowers/plans/2026-08-18-machine-learning-engineer-phase-05.md',
  'docs/superpowers/specs/2026-08-18-machine-learning-engineer-learning-systems-test-bench-design.md',
]);

const EXPECTED_EXTERNAL_INVENTORY_DIGESTS = new Set([
  '1b3d92809cbe2279dda0e5782083882936874f4f1a458c86423593548fad8132',
  '37d5d05e19e0c2c0e1ce7673890251329ff9067b9b85bdd2ac7de254ffd8e8ec',
]);

const EXISTING_ROLE_SLUGS = new Set([
  'forward-deployed-engineer', 'applied-ai-engineer', 'agentic-ai-engineer',
  'llm-engineer', 'machine-learning-engineer',
]);

const EXISTING_PUBLIC_ROLE_SLUGS = new Set([
  'forward-deployed-engineer', 'applied-ai-engineer', 'agentic-ai-engineer',
  'llm-engineer',
]);

const EXISTING_COURSE_SLUGS = new Set(['forward-deployed-engineering-lab']);

const EXISTING_PUBLICATION_SLUGS = new Set([
  'forward-deployed-engineering', 'applied-ai-engineering', 'agentic-ai-engineering',
  'llm-adaptation-and-runtime', 'llm-behavior-engineering',
]);

function hash(value) {
  return createHash('sha256').update(value).digest('hex');
}

function digest(value) {
  return hash(JSON.stringify(value));
}

export function phase05ExternalInventoryDigest(inventory) {
  return digest([...new Set(inventory ?? [])]
    .filter((relative) => !relative.startsWith('project-control/roles/machine-learning-engineer/'))
    .sort());
}

function text(bundle, relative) {
  return bundle.files?.[relative]?.text ?? '';
}

function fileHash(bundle, relative) {
  return bundle.files?.[relative]?.sha256 ?? null;
}

function error(errors, code, pathName, message) {
  errors.push({ code, path: pathName, message });
}

function exactSequence(prefix, count, width = 2, start = 1) {
  return Array.from({ length: count }, (_, index) => `${prefix}${String(index + start).padStart(width, '0')}`);
}

function equalArray(actual, expected) {
  return Array.isArray(actual) && actual.length === expected.length &&
    actual.every((value, index) => value === expected[index]);
}

function nonempty(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function headings(markdown, level) {
  const result = [];
  let fence = null;
  for (const line of String(markdown).split(/\r?\n/)) {
    const match = line.match(/^\s*(```+|~~~+)/);
    if (match) {
      const kind = match[1][0];
      if (fence === null) fence = kind;
      else if (fence === kind) fence = null;
      continue;
    }
    if (fence !== null) continue;
    const heading = line.match(new RegExp(`^${'#'.repeat(level)} (.+)$`));
    if (heading) result.push(heading[1]);
  }
  return result;
}

function requireHeadingSequence(markdown, expected, code, pathName, errors) {
  const actual = headings(markdown, 2);
  if (!equalArray(actual, expected)) {
    error(errors, code, `${pathName}.headings`, `Expected exact H2 sequence; got ${JSON.stringify(actual)}.`);
  }
}

function parseCsv(source) {
  const rows = [];
  let row = [];
  let field = '';
  let quoted = false;
  for (let index = 0; index < source.length; index += 1) {
    const char = source[index];
    if (quoted) {
      if (char === '"') {
        if (source[index + 1] === '"') {
          field += '"';
          index += 1;
        } else quoted = false;
      } else field += char;
      continue;
    }
    if (char === '"') {
      if (field.length !== 0) throw new Error('Quote begins inside an unquoted field.');
      quoted = true;
    } else if (char === ',') {
      row.push(field);
      field = '';
    } else if (char === '\n') {
      row.push(field);
      rows.push(row);
      row = [];
      field = '';
    } else if (char === '\r') {
      if (source[index + 1] !== '\n') throw new Error('Bare CR.');
    } else field += char;
  }
  if (quoted) throw new Error('Unclosed quoted field.');
  if (field.length || row.length) {
    row.push(field);
    rows.push(row);
  }
  return rows;
}

function parseJsonManifest(markdown, start, end) {
  const startCount = markdown.split(start).length - 1;
  const endCount = markdown.split(end).length - 1;
  if (startCount !== 1 || endCount !== 1) return { error: 'marker-count' };
  const between = markdown.slice(markdown.indexOf(start) + start.length, markdown.indexOf(end));
  const fence = between.match(/```json\s*([\s\S]*?)\s*```/);
  if (!fence) return { error: 'json-fence' };
  try {
    return { value: JSON.parse(fence[1]) };
  } catch (cause) {
    return { error: `json:${cause.message}` };
  }
}

function validatePins(bundle, errors) {
  for (const [relative, expected] of Object.entries(PINNED)) {
    const actual = fileHash(bundle, relative);
    if (actual !== expected) {
      error(errors, 'CANONICAL_HASH_DRIFT', relative, `Expected ${expected}; got ${actual ?? 'missing'}.`);
    }
  }
}

function validateArchitecture(bundle, errors, counts) {
  const jsonText = text(bundle, `${A}/architecture.json`);
  let architecture;
  try {
    architecture = JSON.parse(jsonText);
  } catch (cause) {
    error(errors, 'ARCHITECTURE_JSON_PARSE', `${A}/architecture.json`, cause.message);
    return null;
  }

  if (architecture.schema !== 'mle-phase-05-architecture/v1') error(errors, 'IDENTITY_SCHEMA', 'architecture.schema', 'Wrong schema.');
  if (architecture.architectureVersion !== '1.0.0') error(errors, 'IDENTITY_VERSION', 'architecture.architectureVersion', 'Wrong version.');
  if (architecture.decision !== 'SINGLE BOOK') error(errors, 'IDENTITY_DECISION', 'architecture.decision', 'Decision must remain SINGLE BOOK.');
  if (architecture.identity?.author !== 'Komal Nakrani') error(errors, 'IDENTITY_AUTHOR', 'architecture.identity.author', 'Wrong author.');
  if (architecture.identity?.title !== 'Machine Learning Engineering') error(errors, 'IDENTITY_TITLE', 'architecture.identity.title', 'Wrong title.');
  if (architecture.identity?.subtitle !== 'From Task Contract to Operating Evidence') error(errors, 'IDENTITY_SUBTITLE', 'architecture.identity.subtitle', 'Wrong subtitle.');

  counts.parts = architecture.parts?.length ?? 0;
  counts.chapters = architecture.chapters?.length ?? 0;
  counts.milestones = architecture.lifecycle?.milestoneIds?.length ?? 0;
  counts.clusters = architecture.acceptedSemantics?.clusters?.length ?? 0;
  counts.claims = architecture.acceptedSemantics?.claims?.length ?? 0;
  counts.boundaries = architecture.acceptedSemantics?.boundaries?.length ?? 0;
  counts.scenarios = architecture.acceptedSemantics?.scenarios?.length ?? 0;
  counts.domains = architecture.domains?.length ?? 0;
  counts.ports = architecture.ports?.length ?? 0;
  counts.contextTests = architecture.clusterContextTests?.length ?? 0;
  counts.partExitChecks = architecture.partExitChecks?.length ?? 0;
  counts.cases = architecture.cases?.length ?? 0;
  counts.chapterExistence = architecture.chapterExistence?.length ?? 0;

  if (digest(architecture.parts) !== SEMANTIC_DIGESTS.parts) error(errors, 'PART_STRUCTURE', 'architecture.parts', 'Part semantics drifted.');
  if (!Array.isArray(architecture.parts) || architecture.parts.length !== 7) error(errors, 'PART_STRUCTURE', 'architecture.parts', 'Expected seven parts.');

  const chapterOrders = architecture.chapters?.map((chapter) => chapter.order) ?? [];
  if (!equalArray(chapterOrders, Array.from({ length: 21 }, (_, index) => index + 1))) {
    error(errors, 'CHAPTER_ORDER', 'architecture.chapters', 'Chapter orders must be contiguous 1-21.');
  }
  const partIds = new Set(architecture.parts?.map((part) => part.id));
  const milestoneIds = architecture.chapters?.map((chapter) => chapter.milestone?.id) ?? [];
  const expectedMilestones = exactSequence('BL-', 21, 2, 0);
  if (!equalArray(milestoneIds, expectedMilestones) || new Set(milestoneIds).size !== 21) {
    error(errors, 'CHAPTER_MILESTONE', 'architecture.chapters.milestone', 'Expected one ordered unique milestone per chapter.');
  }
  const requiredChapterFields = [
    'id', 'order', 'partId', 'title', 'slug', 'decisionJob', 'thesis',
    'prerequisiteArtifacts', 'readerEndpoint', 'primaryClusters', 'secondaryClusters',
    'claimIds', 'boundaryIds', 'scenarioIds', 'uniqueFailurePressure',
    'incomingDossierState', 'outgoingDossierState', 'milestone', 'companionIncrement',
    'commandIntent', 'fivePortInvariant', 'authorityOwner', 'mleCeiling',
    'durableDoctrine', 'volatileExamples', 'assessmentEvidence',
    'learningPackRequirements', 'visualDecision', 'sourceResearchNeeds', 'phase06Handoff',
  ];
  for (const chapter of architecture.chapters ?? []) {
    if (!partIds.has(chapter.partId)) error(errors, 'CHAPTER_PART_REFERENCE', `chapters.${chapter.id}.partId`, 'Unknown part.');
    const expectedSlug = chapter.title?.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    if (chapter.slug !== expectedSlug) error(errors, 'CHAPTER_SLUG', `chapters.${chapter.id}.slug`, 'Slug does not match title.');
    for (const field of requiredChapterFields) {
      const value = chapter[field];
      if (value === undefined || value === null || (typeof value === 'string' && !value.trim())) {
        error(errors, 'CHAPTER_REQUIRED_FIELD', `chapters.${chapter.id}.${field}`, 'Required chapter field is empty.');
      }
    }
    if (!nonempty(chapter.decisionJob) || chapter.decisionJob.trim().length < 20) {
      error(errors, 'CHAPTER_JOB_DEPTH', `chapters.${chapter.id}.decisionJob`, 'Decision job is too shallow.');
    }
  }
  const normalizedJobs = (architecture.chapters ?? []).map((chapter) => chapter.decisionJob?.toLowerCase().replace(/\W+/g, ' ').trim());
  if (new Set(normalizedJobs).size !== normalizedJobs.length) error(errors, 'CHAPTER_UNIQUE_JOB', 'architecture.chapters.decisionJob', 'Decision jobs must be unique.');
  if (digest(architecture.chapters) !== SEMANTIC_DIGESTS.chapters && new Set(normalizedJobs).size === normalizedJobs.length) {
    error(errors, 'CHAPTER_CONTRACT_DRIFT', 'architecture.chapters', 'Frozen chapter contracts drifted.');
  }
  const chapter19 = architecture.chapters?.find((chapter) => chapter.id === 'MLE-CH-19');
  if (!equalArray(chapter19?.prerequisiteArtifacts, ['BL-01', 'BL-03', 'BL-11', 'BL-14', 'BL-17'])) {
    error(errors, 'LATE_ONLY_CONTROLS', 'architecture.chapters.MLE-CH-19.prerequisiteArtifacts', 'Chapter 19 must integrate controls accumulated throughout the lifecycle.');
  }
  const publicationEndpoints = new Set((architecture.acceptedSemantics?.publications ?? []).flatMap((publication) => [
    publication.readerEndpoint, publication.accountableCenter,
  ]).filter(nonempty).map((value) => value.toLowerCase().replace(/\W+/g, ' ').trim()));
  for (const chapter of architecture.chapters ?? []) {
    const endpoint = chapter.readerEndpoint?.toLowerCase().replace(/\W+/g, ' ').trim();
    if (publicationEndpoints.has(endpoint)) {
      error(errors, 'CHAPTER_PUBLICATION_DUPLICATION', `architecture.chapters.${chapter.id}.readerEndpoint`, 'Chapter substitutes an existing publication endpoint.');
    }
  }

  const lifecycleMilestones = architecture.lifecycle?.milestoneIds ?? [];
  if (!equalArray(lifecycleMilestones, expectedMilestones)) error(errors, 'MILESTONE_SET', 'architecture.lifecycle.milestoneIds', 'Milestone set must be BL-00 through BL-20.');
  for (let index = 1; index < (architecture.chapters?.length ?? 0); index += 1) {
    const priorOutgoing = String(architecture.chapters[index - 1].outgoingDossierState).split('|');
    const nextIncoming = String(architecture.chapters[index].incomingDossierState).split('|');
    if (!nextIncoming.every((state) => priorOutgoing.includes(state))) {
      error(errors, 'LIFECYCLE_CONTINUITY', `architecture.chapters.${index + 1}`, 'Incoming state does not equal prior outgoing state.');
    }
  }
  const legalPairs = new Set((architecture.lifecycle?.legalTransitions ?? []).map((transition) => `${transition.from}->${transition.to}`));
  if (legalPairs.has('HOLD->RELEASABLE') || legalPairs.has('REJECT->RELEASABLE')) {
    error(errors, 'LIFECYCLE_FORBIDDEN', 'architecture.lifecycle.legalTransitions', 'Forbidden release shortcut exists.');
  }
  if (digest(architecture.lifecycle) !== SEMANTIC_DIGESTS.lifecycle) error(errors, 'LIFECYCLE_SEMANTICS', 'architecture.lifecycle', 'Lifecycle semantics drifted.');

  const semanticChecks = [
    ['clusters', 'CLUSTER_SEMANTICS'], ['claims', 'CLAIM_SEMANTICS'],
    ['boundaries', 'BOUNDARY_SEMANTICS'], ['scenarios', 'SCENARIO_SEMANTICS'],
    ['publications', 'PUBLICATION_SEMANTICS'], ['nonDuplication', 'NON_DUPLICATION_SEMANTICS'],
    ['reservations', 'RESERVATION_SEMANTICS'], ['creativePolicies', 'CREATIVE_POLICY_SEMANTICS'],
  ];
  for (const [field, code] of semanticChecks) {
    if (digest(architecture.acceptedSemantics?.[field]) !== SEMANTIC_DIGESTS[field]) {
      error(errors, code, `architecture.acceptedSemantics.${field}`, `Accepted ${field} semantics drifted.`);
    }
  }

  if (digest(architecture.domains) !== SEMANTIC_DIGESTS.domains) error(errors, 'DOMAIN_SEMANTICS', 'architecture.domains', 'Domain identities or mappings drifted.');
  if (digest(architecture.ports) !== SEMANTIC_DIGESTS.ports) error(errors, 'PORT_SEMANTICS', 'architecture.ports', 'Port semantics drifted.');
  const contextPairs = new Set((architecture.clusterContextTests ?? []).map((record) => `${record.clusterId}|${record.portId}`));
  if (contextPairs.size !== 40 || architecture.clusterContextTests?.length !== 40) error(errors, 'CONTEXT_MATRIX', 'architecture.clusterContextTests', 'Expected exact 8x5 context matrix.');
  if (digest(architecture.clusterContextTests) !== SEMANTIC_DIGESTS.contexts) error(errors, 'CONTEXT_SEMANTICS', 'architecture.clusterContextTests', 'Context semantics drifted.');
  const exitPairs = new Set((architecture.partExitChecks ?? []).map((record) => `${record.partId}|${record.portId}`));
  if (exitPairs.size !== 35 || architecture.partExitChecks?.length !== 35) error(errors, 'PART_EXIT_MATRIX', 'architecture.partExitChecks', 'Expected exact 7x5 part-exit matrix.');
  if (digest(architecture.partExitChecks) !== SEMANTIC_DIGESTS.exits) error(errors, 'PART_EXIT_SEMANTICS', 'architecture.partExitChecks', 'Part-exit semantics drifted.');
  if (digest(architecture.cases) !== SEMANTIC_DIGESTS.cases) error(errors, 'CASE_SEMANTICS', 'architecture.cases', 'Case truth, authority, source, or replaceability drifted.');
  if (digest(architecture.scenarioCaseMap) !== SEMANTIC_DIGESTS.scenarioMap) error(errors, 'SCENARIO_CASE_MAP', 'architecture.scenarioCaseMap', 'Scenario-case mapping drifted.');
  if (digest(architecture.chapterExistence) !== SEMANTIC_DIGESTS.existence) error(errors, 'CHAPTER_EXISTENCE', 'architecture.chapterExistence', 'Chapter existence evidence drifted.');
  if (digest(architecture.furniture) !== SEMANTIC_DIGESTS.furniture) error(errors, 'FURNITURE_SEMANTICS', 'architecture.furniture', 'Furniture drifted.');
  if (digest(architecture.appendices) !== SEMANTIC_DIGESTS.appendices) error(errors, 'FURNITURE_APPENDICES', 'architecture.appendices', 'Required appendix contract drifted.');
  if (digest(architecture.companion) !== SEMANTIC_DIGESTS.companion) error(errors, 'COMPANION_SEMANTICS', 'architecture.companion', 'Companion boundary drifted.');
  if (digest(architecture.sourceRules) !== SEMANTIC_DIGESTS.sourceRules) error(errors, 'SOURCE_RULE_SEMANTICS', 'architecture.sourceRules', 'Source rules drifted.');
  if (digest(architecture.visualSystem) !== SEMANTIC_DIGESTS.visual) error(errors, 'VISUAL_SYSTEM_SEMANTICS', 'architecture.visualSystem', 'Visual system drifted.');

  const archMarkdown = text(bundle, `${A}/architecture.md`);
  requireHeadingSequence(archMarkdown, ARCH_H2, 'ARCH_HEADING_SEQUENCE', `${A}/architecture.md`, errors);
  const chapterHeadings = headings(archMarkdown, 3).filter((heading) => heading.startsWith('MLE-CH-'));
  const expectedChapterHeadings = (architecture.chapters ?? []).map((chapter) => `${chapter.id} — ${chapter.title}`);
  if (!equalArray(chapterHeadings, expectedChapterHeadings)) error(errors, 'ARCH_CHAPTER_HEADINGS', `${A}/architecture.md`, 'Chapter headings do not match JSON.');
  if (fileHash(bundle, `${A}/architecture.md`) !== PINNED[`${A}/architecture.md`] ||
      fileHash(bundle, `${A}/architecture.json`) !== PINNED[`${A}/architecture.json`]) {
    error(errors, 'MARKDOWN_JSON_SYMMETRY', A, 'Frozen Markdown/JSON pair is no longer the accepted symmetric pair.');
  }
  return architecture;
}

function validateCsv(bundle, architecture, errors, counts) {
  const source = text(bundle, `${A}/competency-to-chapter.csv`);
  let rows;
  try {
    rows = parseCsv(source);
  } catch (cause) {
    error(errors, 'CSV_PARSE', `${A}/competency-to-chapter.csv`, cause.message);
    return;
  }
  if (!equalArray(rows[0] ?? [], CSV_HEADER)) error(errors, 'CSV_HEADER', `${A}/competency-to-chapter.csv`, 'Wrong exact 12-column header.');
  counts.competencyRows = Math.max(0, rows.length - 1);
  if (rows.length !== 9 || rows.slice(1).some((row) => row.length !== 12)) error(errors, 'CSV_ROW_SHAPE', `${A}/competency-to-chapter.csv`, 'Expected eight 12-cell records.');
  const ids = rows.slice(1).map((row) => row[0]);
  if (!equalArray(ids, exactSequence('LC-', 8))) error(errors, 'CSV_CLUSTER_IDS', `${A}/competency-to-chapter.csv`, 'Expected LC-01 through LC-08.');
  for (const [index, row] of rows.slice(1).entries()) {
    for (const column of [4, 5, 6, 10, 11]) {
      try { JSON.parse(row[column]); } catch (cause) {
        error(errors, 'CSV_EMBEDDED_JSON', `csv.row.${index + 2}.${CSV_HEADER[column]}`, cause.message);
      }
    }
  }
  if (fileHash(bundle, `${A}/competency-to-chapter.csv`) !== PINNED[`${A}/competency-to-chapter.csv`]) {
    error(errors, 'CSV_SEMANTIC_EQUALITY', `${A}/competency-to-chapter.csv`, 'CSV no longer byte/semantic-equals the architecture projection.');
  }
  if (architecture && counts.contextTests !== 40) error(errors, 'CSV_SEMANTIC_EQUALITY', `${A}/competency-to-chapter.csv`, 'Canonical context source is incomplete.');
}

function idHeadings(markdown, prefix) {
  return headings(markdown, 3).map((heading) => heading.split(' — ')[0]).filter((id) => id.startsWith(prefix));
}

function validateProject(bundle, architecture, errors, counts) {
  const project = text(bundle, `${A}/project-map.md`);
  requireHeadingSequence(project, PROJECT_H2, 'PROJECT_HEADING_SEQUENCE', `${A}/project-map.md`, errors);
  const milestones = idHeadings(project, 'BL-');
  counts.projectMilestones = milestones.length;
  if (!equalArray(milestones, exactSequence('BL-', 21, 2, 0))) error(errors, 'PROJECT_MILESTONE_PROJECTION', `${A}/project-map.md`, 'Milestone heading sequence drifted.');
  const contexts = idHeadings(project, 'CTX-');
  const expectedContexts = architecture?.clusterContextTests?.map((record) => record.id) ?? [];
  if (!equalArray(contexts, expectedContexts)) error(errors, 'PROJECT_CONTEXT_PROJECTION', `${A}/project-map.md`, 'Context projection drifted.');
  const exitIds = [...project.matchAll(/^\| `(PEX-[^`]+)` \|/gm)].map((match) => match[1]);
  const expectedExits = architecture?.partExitChecks?.map((record) => record.id) ?? [];
  if (!equalArray(exitIds, expectedExits)) error(errors, 'PROJECT_EXIT_PROJECTION', `${A}/project-map.md`, 'Part-exit projection drifted.');
  for (let index = 1; index < 21; index += 1) {
    const milestone = `BL-${String(index).padStart(2, '0')}`;
    const prior = `BL-${String(index - 1).padStart(2, '0')}@1.0.0`;
    const start = project.indexOf(`### ${milestone} —`);
    const end = project.indexOf('\n### ', start + 1);
    const block = project.slice(start, end === -1 ? undefined : end);
    if (start === -1 || !block.includes(prior)) error(errors, 'PROJECT_MILESTONE_PROJECTION', `${A}/project-map.md#${milestone}`, `Missing predecessor ${prior}.`);
  }
  const companionClauses = [
    'local, offline, provider-neutral', 'fixed synthetic fixtures', 'stable artifact IDs and content hashes',
    'pinned dependencies', 'requires no credential, network connection, paid service, or real external effect',
    'never claims universal bit-for-bit determinism', '`HOLD->RELEASABLE` is blocked',
    '`REJECT->RELEASABLE` is blocked',
  ];
  if (companionClauses.some((clause) => !project.includes(clause))) {
    error(errors, 'PROJECT_COMPANION_BOUNDARY', `${A}/project-map.md`, 'Companion or forbidden-transition boundary drifted.');
  }
  if (fileHash(bundle, `${A}/project-map.md`) !== PINNED[`${A}/project-map.md`] &&
      !errors.some((entry) => entry.code.startsWith('PROJECT_'))) {
    error(errors, 'PROJECT_SEMANTIC_PROJECTION', `${A}/project-map.md`, 'Project map drifted from the accepted projection.');
  }
}

function chapterBlocks(markdown) {
  const matches = [...markdown.matchAll(/^### (MLE-CH-\d{2}) — (.+)$/gm)];
  return matches.map((match, index) => ({
    id: match[1], title: match[2],
    body: markdown.slice(match.index, matches[index + 1]?.index ?? markdown.indexOf('\n## Constructed-case binding', match.index)),
  }));
}

function validateVisual(bundle, architecture, errors, counts) {
  const visual = text(bundle, `${A}/visual-forecast.md`);
  requireHeadingSequence(visual, VISUAL_H2, 'VISUAL_HEADING_SEQUENCE', `${A}/visual-forecast.md`, errors);
  const blocks = chapterBlocks(visual);
  counts.visualChapters = blocks.length;
  const expectedHeadings = architecture?.chapters?.map((chapter) => `${chapter.id}|${chapter.title}`) ?? [];
  const actualHeadings = blocks.map((block) => `${block.id}|${block.title}`);
  const fields = [
    'Entry identity/state', 'Decision question', 'Measurable objectives', 'Prerequisites',
    'Accepted evidence', 'Dossier delta', 'Companion intent / lab truth', 'Five-port invariant',
    'Authority ceiling', 'Exit contract', 'Next evidence', 'Immediate QA',
    'Source contract', 'Visual contract', 'Cases',
  ];
  if (!equalArray(actualHeadings, expectedHeadings)) error(errors, 'VISUAL_CHAPTER_CONTRACT', `${A}/visual-forecast.md`, 'Chapter headings drifted.');
  for (const block of blocks) {
    if (fields.some((field) => !block.body.includes(`- **${field}:**`)) ||
        ['`PASS`', '`HOLD`', '`REJECT`', '`REOPEN`'].some((outcome) => !block.body.includes(outcome))) {
      error(errors, 'VISUAL_CHAPTER_CONTRACT', `${A}/visual-forecast.md#${block.id}`, 'Required field or exit outcome missing.');
    }
  }
  if (fileHash(bundle, `${A}/visual-forecast.md`) !== PINNED[`${A}/visual-forecast.md`] &&
      !errors.some((entry) => entry.code.startsWith('VISUAL_') || entry.code.startsWith('FURNITURE_'))) {
    error(errors, 'VISUAL_CHAPTER_CONTRACT', `${A}/visual-forecast.md`, 'Visual forecast drifted from the accepted learning contracts.');
  }
  if (!visual.includes('Employer postings are not technical authority') ||
      visual.includes('Employer postings are technical authority')) {
    error(errors, 'VISUAL_SOURCE_BOUNDARY', `${A}/visual-forecast.md`, 'Source authority boundary drifted.');
  }
  const mediaClauses = [
    'There is no image quota', 'No stored SVG or WebP publication asset may be created',
    'no generic mascot', 'unapproved Komal likeness', 'semantic HTML/CSS', 'CANDIDATE — NOT GENERATED',
  ];
  if (mediaClauses.some((clause) => !visual.toLowerCase().includes(clause.toLowerCase())) ||
      /There is an image quota|Stored WebP publication assets may be created/i.test(visual)) {
    error(errors, 'VISUAL_MEDIA_POLICY', `${A}/visual-forecast.md`, 'Selective semantic/PNG media policy drifted.');
  }
  const accessibilityClauses = ['screen-reader available', 'Alt text', 'long description', 'reading order', 'without relying on color'];
  if (accessibilityClauses.some((clause) => !visual.includes(clause))) error(errors, 'VISUAL_ACCESSIBILITY', `${A}/visual-forecast.md`, 'Accessibility contract missing.');
  const closing = 'Ship the model only when its evidence can travel with it.';
  if (visual.split(closing).length - 1 !== 1) error(errors, 'FURNITURE_CLOSING', `${A}/visual-forecast.md`, 'Exact closing statement must appear once.');
  if (!visual.includes('About Komal Nakrani')) error(errors, 'FURNITURE_ABOUT', `${A}/visual-forecast.md`, 'About Komal Nakrani is missing.');
  const benchZero = ['cover', 'title/author', 'edition/copyright', 'reader\nprerequisites', 'MLE ownership boundary', 'lifecycle/evidence legend', 'how to read a\nBench Sheet', 'routed contents', 'project/case orientation', 'part map'];
  if (benchZero.some((item) => !visual.includes(item))) error(errors, 'FURNITURE_BENCH_ZERO', `${A}/visual-forecast.md`, 'Bench Zero furniture incomplete.');
}

function lastMatch(source, regex) {
  return [...source.matchAll(regex)].at(-1)?.[1] ?? null;
}

function validateReview(bundle, reviewPath, bindings, errors, expectedHash = PINNED[reviewPath]) {
  const review = text(bundle, reviewPath);
  if (!review) {
    error(errors, 'REVIEW_MISSING', reviewPath, 'Review is missing.');
    return false;
  }
  if (expectedHash && fileHash(bundle, reviewPath) !== expectedHash) error(errors, 'REVIEW_HASH_DRIFT', reviewPath, 'Review hash drifted.');
  const spec = lastMatch(review, /^SPEC COMPLIANCE (PASS|FAIL)$/gm);
  const quality = lastMatch(review, /^QUALITY (APPROVED|CHANGES REQUESTED)$/gm);
  if (spec !== 'PASS' || quality !== 'APPROVED') {
    error(errors, 'REVIEW_FINAL_VERDICT', reviewPath, `Final verdict is ${spec}/${quality}.`);
  }
  for (const artifact of bindings) {
    const actual = fileHash(bundle, artifact);
    if (!actual || !review.includes(actual) || !review.includes(`\`${artifact}\``)) {
      error(errors, 'REVIEW_ARTIFACT_HASH', reviewPath, `Review does not bind ${artifact} at ${actual}.`);
    }
  }
  return spec === 'PASS' && quality === 'APPROVED' && (!expectedHash || fileHash(bundle, reviewPath) === expectedHash);
}

function validateReviews(bundle, errors, counts, stage) {
  counts.acceptedTaskReviews = REVIEW_BINDINGS.filter(([review, bindings]) => validateReview(bundle, review, bindings, errors)).length;
  const repairChains = [
    {
      review: `${R}/task-02-core-architecture.md`,
      repair: `${R}/task-02-repair.md`,
      artifacts: [`${A}/architecture.md`, `${A}/architecture.json`],
    },
    {
      review: `${R}/task-05-learning-visual.md`,
      repair: `${R}/task-05-repair.md`,
      artifacts: [`${A}/visual-forecast.md`],
    },
  ];
  for (const chain of repairChains) {
    const review = text(bundle, chain.review);
    if (!review.includes('SPEC COMPLIANCE FAIL') || !review.includes('QUALITY CHANGES REQUESTED')) continue;
    const repair = text(bundle, chain.repair);
    if (!repair) {
      error(errors, 'REVIEW_REPAIR_MISSING', chain.repair, `Requested changes in ${chain.review} require a paired repair record.`);
      continue;
    }
    const repairHash = fileHash(bundle, chain.repair);
    const reviewHash = fileHash(bundle, chain.review);
    const directedBinding = (review.includes(chain.repair) && review.includes(repairHash)) ||
      (repair.includes(chain.review.split('/').at(-1)) && repair.includes(reviewHash));
    const artifactBindings = chain.artifacts.every((artifact) => repair.includes(fileHash(bundle, artifact)));
    if (!directedBinding || !artifactBindings) {
      error(errors, 'REVIEW_REPAIR_CHAIN', chain.repair, 'Repair/re-review chain does not bind final artifact and verdict identities.');
    }
  }
  if (stage !== 'pre-hostile') {
    const hostile = `${R}/task-06-hostile-integration.md`;
    if (!text(bundle, hostile)) error(errors, 'HOSTILE_REVIEW_MISSING', hostile, 'Hostile integration review is required.');
    else {
      validateReview(bundle, hostile, [
        `${A}/architecture.md`, `${A}/architecture.json`, `${A}/competency-to-chapter.csv`,
        `${A}/project-map.md`, `${A}/visual-forecast.md`, `${A}/validate-phase-05.mjs`,
        `${A}/validate-phase-05.test.mjs`,
      ], errors, null);
    }
  }
}

function validateVerification(bundle, errors, stage) {
  if (stage === 'pre-hostile') return;
  const relative = `${A}/phase-05-verification.md`;
  const verification = text(bundle, relative);
  if (!verification) {
    error(errors, 'VERIFICATION_MISSING', relative, 'Final verification is required.');
    return;
  }
  const parsed = parseJsonManifest(verification,
    '<!-- PHASE05-VERIFICATION-MANIFEST-START -->',
    '<!-- PHASE05-VERIFICATION-MANIFEST-END -->');
  if (parsed.error) {
    error(errors, 'VERIFICATION_MANIFEST', relative, parsed.error);
    return;
  }
  const manifest = parsed.value;
  if (manifest.schema !== 'mle-phase-05-verification/v1') error(errors, 'VERIFICATION_SCHEMA', relative, 'Wrong verification schema.');
  const exactCounts = {
    parts: 7, chapters: 21, milestones: 21, clusters: 8, claims: 22,
    boundaries: 17, scenarios: 10, domains: 12, ports: 5,
    context_tests: 40, part_exit_checks: 35, cases: 5, chapter_existence: 21,
  };
  if (JSON.stringify(manifest.counts) !== JSON.stringify(exactCounts)) {
    error(errors, 'VERIFICATION_COUNTS', `${relative}.counts`, 'Durable structural and semantic counts are not exact.');
  }
  const expectedFurniture = {
    bench_zero: 'PASS', appendices: 'PASS', about_komal_nakrani: 'PASS',
    closing_dossier: 'PASS', closing_statement: 'Ship the model only when its evidence can travel with it.',
  };
  if (JSON.stringify(manifest.furniture) !== JSON.stringify(expectedFurniture)) {
    error(errors, 'VERIFICATION_FURNITURE', `${relative}.furniture`, 'Furniture or exact closing statement evidence drifted.');
  }

  const expectedArtifactPaths = [
    `${A}/architecture.md`, `${A}/architecture.json`, `${A}/competency-to-chapter.csv`,
    `${A}/project-map.md`, `${A}/visual-forecast.md`, `${A}/validate-phase-05.mjs`,
    `${A}/validate-phase-05.test.mjs`,
  ];
  const artifacts = Array.isArray(manifest.artifacts) ? manifest.artifacts : [];
  if (artifacts.length !== expectedArtifactPaths.length || expectedArtifactPaths.some((artifactPath) => {
    const record = artifacts.find((entry) => entry.path === artifactPath);
    return !record || record.sha256 !== fileHash(bundle, artifactPath);
  })) {
    error(errors, 'VERIFICATION_ARTIFACT_BINDING', `${relative}.artifacts`, 'Final artifact identities or hashes are incomplete/stale.');
  }

  const expectedBoundaries = {
    companion: 'PASS', media: 'PASS', source_authority: 'PASS',
    no_downstream_output: 'PASS', phase06_inactive: true,
  };
  if (JSON.stringify(manifest.boundaries) !== JSON.stringify(expectedBoundaries)) {
    error(errors, 'VERIFICATION_BOUNDARIES', `${relative}.boundaries`, 'Companion, media, source, downstream, or Phase 06 boundary failed.');
  }

  const red = manifest.tdd?.red;
  if (red?.command !== RED_TEST_COMMAND || red?.exit_code !== 1 || red?.node_version !== 'v22.23.1' ||
      red?.tests !== 1 || red?.pass !== 0 || red?.fail !== 1 || red?.error_code !== 'ERR_MODULE_NOT_FOUND' ||
      red?.missing_module !== 'validate-phase-05.mjs' || red?.timestamp !== 'not recorded') {
    error(errors, 'VERIFICATION_TDD_RED', `${relative}.tdd.red`, 'Exact genuine pre-implementation RED evidence is missing or altered.');
  }
  const green = manifest.tdd?.green;
  if (green?.command !== RED_TEST_COMMAND || green?.status !== 'PASS' ||
      green?.tests !== FINAL_GREEN_TEST_COUNT || green?.pass !== FINAL_GREEN_TEST_COUNT || green?.fail !== 0) {
    error(errors, 'VERIFICATION_TDD_GREEN', `${relative}.tdd.green`, `Exact GREEN evidence must be ${FINAL_GREEN_TEST_COUNT}/${FINAL_GREEN_TEST_COUNT}.`);
  }
  const expectedChecks = [
    'phase01_validator', 'phase01_tests', 'phase04_validator', 'phase04_tests',
    'phase05_validator', 'phase05_tests', 'marker_scan', 'diff_check',
    'repository_check', 'whitespace_eof_audit', 'path_audit',
  ];
  for (const check of expectedChecks) {
    if (manifest.checks?.[check]?.status !== 'PASS') error(errors, 'VERIFICATION_CHECK_FAILED', `${relative}.checks.${check}`, 'Missing PASS.');
  }
  if (!Array.isArray(manifest.checks?.path_audit?.unexpected_paths) || manifest.checks.path_audit.unexpected_paths.length) {
    error(errors, 'VERIFICATION_PATH_AUDIT', `${relative}.checks.path_audit`, 'Unexpected paths must be empty.');
  }
  const reviews = Array.isArray(manifest.reviews) ? manifest.reviews : [];
  const expectedReviewPaths = [...REVIEW_BINDINGS.map(([review]) => review), `${R}/task-06-hostile-integration.md`];
  for (const reviewPath of expectedReviewPaths) {
    const record = reviews.find((entry) => entry.path === reviewPath);
    if (!record || record.sha256 !== fileHash(bundle, reviewPath) || record.spec_verdict !== 'SPEC COMPLIANCE PASS' || record.quality_verdict !== 'QUALITY APPROVED') {
      error(errors, 'VERIFICATION_REVIEW_BINDING', `${relative}.reviews`, `Missing final binding for ${reviewPath}.`);
    }
  }
  if (reviews.length !== expectedReviewPaths.length) {
    error(errors, 'VERIFICATION_REVIEW_BINDING', `${relative}.reviews`, 'Expected exactly six review identities.');
  }
  const expectedTransition = {
    phase05: 'complete', active_child: null, last_completed_child: 82,
    phase06: 'next-inactive', root_issue: { number: 79, state: 'OPEN' },
    child_issue: { number: 82, state: 'CLOSED', status_label: 'status:done' },
    local_remote_main_equal: true, worktree_clean: true,
  };
  if (JSON.stringify(manifest.state_transition) !== JSON.stringify(expectedTransition)) {
    error(errors, 'VERIFICATION_STATE_TRANSITION', `${relative}.state_transition`, 'Exact local/live state transition evidence is missing or altered.');
  }
  const expectedGate = {
    status: 'PASS', next_gate: 'Phase 06 source and bounded case-study research', phase06_active: false,
  };
  if (JSON.stringify(manifest.gate) !== JSON.stringify(expectedGate)) {
    error(errors, 'VERIFICATION_GATE', `${relative}.gate`, 'Final gate or inactive Phase 06 handoff drifted.');
  }
}

function validatePaths(bundle, errors, stage) {
  for (const relative of bundle.inventory ?? []) {
    if (relative.startsWith(`${A}/`)) {
      if (/\.(png|svg|webp)$/i.test(relative)) error(errors, 'PHASE05_MEDIA_ASSET', relative, 'Phase 05 cannot contain media assets.');
      if (!EXPECTED_BOOK_PATHS.has(relative)) error(errors, 'UNEXPECTED_PATH', relative, 'Unexpected Phase 05 book path.');
    }
    if (relative.startsWith(`${R}/`) && !EXPECTED_REVIEW_PATHS.has(relative)) {
      error(errors, 'UNEXPECTED_PATH', relative, 'Unexpected Phase 05 review path.');
    }
    if (/src\/(content|assets)\/books\/machine-learning-engineering|public\/.*machine-learning-engineering/i.test(relative)) {
      error(errors, 'UNEXPECTED_PATH', relative, 'Premature publication path.');
    }
    const mleRolePath = relative.startsWith('project-control/roles/machine-learning-engineer/');
    const allowedMleRolePath = EXPECTED_MLE_ROLE_PATHS.has(relative) ||
      relative.startsWith(`${A}/`) || EXPECTED_REVIEW_PATHS.has(relative);
    if (mleRolePath && !allowedMleRolePath) {
      error(errors, 'UNEXPECTED_PATH', relative, 'Unexpected downstream Machine Learning Engineer output.');
    }
    if (mleRolePath && /\/(?:course|courses)(?:\/|\.md$)/i.test(relative)) error(errors, 'FORBIDDEN_COURSE_PATH', relative, 'Phase 05 cannot create a course.');
    if (mleRolePath && /\/abhyaas\//i.test(relative)) error(errors, 'FORBIDDEN_ABHYAAS_PATH', relative, 'Phase 05 cannot create Abhyaas output.');
    if (mleRolePath && /\/(?:certification|exam)\//i.test(relative)) error(errors, 'FORBIDDEN_CERTIFICATION_PATH', relative, 'Phase 05 cannot create certification or exam output.');
    if (mleRolePath && /\/(?:question-bank|questions)\//i.test(relative)) error(errors, 'FORBIDDEN_QUESTION_BANK_PATH', relative, 'Phase 05 cannot create question-bank output.');
    if (/machine-learning-engineering-(?:volume|vol)-?2|machine-learning-engineering\/volume-?2/i.test(relative)) {
      error(errors, 'FORBIDDEN_SECOND_VOLUME_PATH', relative, 'The accepted decision is one book.');
    }
    const roleMatch = relative.match(/^project-control\/roles\/([^/]+)\//);
    if (roleMatch && !EXISTING_ROLE_SLUGS.has(roleMatch[1])) {
      error(errors, 'FORBIDDEN_NEXT_ROLE_PATH', relative, `Unexpected role directory ${roleMatch[1]}.`);
    }
    if (relative.startsWith('project-control/courses/')) {
      error(errors, 'FORBIDDEN_COURSE_PATH', relative, 'Phase 05 cannot create project-control course output.');
    }
    if (/^(?:src|tools|public)\//.test(relative) && /machine[-_]learning[-_]engineering/i.test(relative)) {
      error(errors, 'UNEXPECTED_PATH', relative, 'Phase 05 cannot create Machine Learning Engineering site, PDF, asset, or companion production output.');
    }
    const targetPath = /machine[-_]learning[-_]engineer(?:ing)?/i.test(relative);
    const acceptedTargetPath = EXPECTED_MLE_DOC_PATHS.has(relative) ||
      EXPECTED_MLE_ROLE_PATHS.has(relative) || EXPECTED_BOOK_PATHS.has(relative) ||
      EXPECTED_REVIEW_PATHS.has(relative);
    if (targetPath && !acceptedTargetPath) {
      error(errors, 'UNEXPECTED_PATH', relative, 'Machine Learning Engineering output appeared outside the exact accepted Phase 05 path set.');
    }
    if (/^content\/abhyaas\//i.test(relative)) {
      error(errors, 'FORBIDDEN_ABHYAAS_PATH', relative, 'Phase 05 cannot create Abhyaas content.');
    }
    if (/^content\/(?:certifications?|exams?)\//i.test(relative)) {
      error(errors, 'FORBIDDEN_CERTIFICATION_PATH', relative, 'Phase 05 cannot create certification or exam content.');
    }
    if (/^content\/(?:question-bank|questions)\//i.test(relative)) {
      error(errors, 'FORBIDDEN_QUESTION_BANK_PATH', relative, 'Phase 05 cannot create question-bank content.');
    }
    if (/catalog[-_]position[-_]?0*6/i.test(relative)) {
      error(errors, 'FORBIDDEN_NEXT_ROLE_PATH', relative, 'Catalog position 6 must remain unstarted.');
    }
    const courseMatch = relative.match(/^content\/courses\/([^/]+)\//);
    if (courseMatch && !EXISTING_COURSE_SLUGS.has(courseMatch[1])) {
      error(errors, 'FORBIDDEN_COURSE_PATH', relative, `Unexpected course publication ${courseMatch[1]}.`);
    }
    const publicationMatch = relative.match(/^content\/publications\/([^/]+)\//);
    if (publicationMatch && !EXISTING_PUBLICATION_SLUGS.has(publicationMatch[1])) {
      error(errors, 'FORBIDDEN_PUBLICATION_PATH', relative, `Premature or unexpected publication ${publicationMatch[1]}.`);
    }
    const publicRoleMatch = relative.match(/^content\/roles\/([^/]+)\//);
    if (publicRoleMatch?.[1] === 'machine-learning-engineer') {
      error(errors, 'FORBIDDEN_ROLE_PUBLICATION_PATH', relative, 'Phase 05 cannot publish the Machine Learning Engineer role.');
    } else if (publicRoleMatch && !EXISTING_PUBLIC_ROLE_SLUGS.has(publicRoleMatch[1])) {
      error(errors, 'FORBIDDEN_NEXT_ROLE_PATH', relative, `Unexpected published role ${publicRoleMatch[1]}.`);
    }
    const publicationAssetMatch = relative.match(/^public\/assets\/publications\/([^/]+)\//);
    if (publicationAssetMatch?.[1] === 'machine-learning-engineering') {
      error(errors, 'PHASE05_MEDIA_ASSET', relative, 'Phase 05 cannot publish Machine Learning Engineering media assets.');
    } else if (publicationAssetMatch && !EXISTING_PUBLICATION_SLUGS.has(publicationAssetMatch[1])) {
      error(errors, 'FORBIDDEN_PUBLICATION_PATH', relative, `Premature or unexpected publication assets ${publicationAssetMatch[1]}.`);
    }
    if (/^(?:abhyaas|certification|question-bank)\//i.test(relative)) {
      error(errors, relative.startsWith('abhyaas/') ? 'FORBIDDEN_ABHYAAS_PATH' :
        relative.startsWith('certification/') ? 'FORBIDDEN_CERTIFICATION_PATH' : 'FORBIDDEN_QUESTION_BANK_PATH',
      relative, 'Forbidden Phase 05 product output.');
    }
  }
  if (stage === 'pre-hostile' && text(bundle, `${A}/phase-05-verification.md`)) {
    error(errors, 'PREMATURE_VERIFICATION', `${A}/phase-05-verification.md`, 'Final verification appeared before hostile review.');
  }
  const externalInventoryDigest = phase05ExternalInventoryDigest(bundle.inventory);
  if (!EXPECTED_EXTERNAL_INVENTORY_DIGESTS.has(externalInventoryDigest)) {
    error(errors, 'UNEXPECTED_PATH', 'repository-inventory', `Bounded production-root inventory drifted (${externalInventoryDigest}).`);
  }
}

function validateHygiene(bundle, errors) {
  for (const [relative, file] of Object.entries(bundle.files ?? {})) {
    if (!file.text) continue;
    if (file.text.includes('\r')) error(errors, 'HYGIENE_CR', relative, 'CR byte present.');
    if (/[ \t]+$/m.test(file.text)) error(errors, 'HYGIENE_TRAILING_WHITESPACE', relative, 'Trailing whitespace present.');
    if (!file.text.endsWith('\n') || file.text.endsWith('\n\n')) error(errors, 'HYGIENE_EOF', relative, 'Expected exactly one final LF.');
    const unfinished = new RegExp(['SOURCE G' + 'AP', '\\bT' + 'BD\\b', '\\bTO' + 'DO\\b', '\\bFIX' + 'ME\\b'].join('|'));
    if (unfinished.test(file.text)) error(errors, 'UNFINISHED_MARKER', relative, 'Unfinished marker present.');
  }
}

function validateState(bundle, errors, stage) {
  const role = text(bundle, 'project-control/roles/machine-learning-engineer/ROLE-STATE.md');
  const root = text(bundle, 'project-control/roles/machine-learning-engineer/issues/root.md');
  const factory = text(bundle, 'project-control/role-factory/FACTORY-STATE.md');
  const local = text(bundle, 'project-control/roles/machine-learning-engineer/issues/phase-05-book-architecture.md');
  const combined = [role, root, factory, local].join('\n');
  if (/Phase 06[^\n]{0,80}\bactive\b/i.test(combined)) error(errors, 'STATE_PHASE06_PREMATURE', 'state', 'Phase 06 is active before Phase 05 close.');
  if (stage === 'final') {
    const rolePass = /Current global phase:\s*Phase 05 book architecture complete/i.test(role) &&
      /Last completed child issue:[^\n]*#82/i.test(role) &&
      /Active child issue:\s*(?:none|`none`)/i.test(role) &&
      /\[x\] 05 book architecture/i.test(role) &&
      /(?:Phase )?06[^\n]*(?:next gate)[^\n]*inactive/i.test(role);
    if (!rolePass) error(errors, 'STATE_ROLE_FINAL', 'project-control/roles/machine-learning-engineer/ROLE-STATE.md', 'Role state is not at the exact Phase 05 final gate.');

    const rootPass = /Last completed child:[^\n]*#82/i.test(root) &&
      /Active child:\s*(?:none|`none`)/i.test(root) &&
      /\[x\] 05 book architecture[^\n]*complete/i.test(root) &&
      /(?:Phase )?06[^\n]*(?:next gate)[^\n]*inactive/i.test(root);
    if (!rootPass) error(errors, 'STATE_ROOT_FINAL', 'project-control/roles/machine-learning-engineer/issues/root.md', 'Root issue record is not at the exact Phase 05 final gate.');

    const localPass = /Status:[^\n]*(?:complete|done)[^\n]*(?:#82[^\n]*)?(?:closed)[^\n]*status:done/i.test(local) &&
      !/- \[ \]/.test(local) && /Phase 06[^\n]*(?:next gate)[^\n]*inactive/i.test(local);
    if (!localPass) error(errors, 'STATE_LOCAL_ISSUE_FINAL', 'project-control/roles/machine-learning-engineer/issues/phase-05-book-architecture.md', 'Local Phase 05 issue is not complete/status:done with all checks accepted.');

    const factoryPass = /Machine Learning Engineer Phase 05 book architecture:[^\n]*complete/i.test(factory) &&
      /Last completed child:[^\n]*#82/i.test(factory) &&
      /Active child:\s*(?:none|`none`)/i.test(factory) &&
      /Phase 06[^\n]*(?:next gate)[^\n]*inactive/i.test(factory) &&
      /Catalog position 6:[^\n]*not started/i.test(factory);
    if (!factoryPass) error(errors, 'STATE_FACTORY_FINAL', 'project-control/role-factory/FACTORY-STATE.md', 'Factory state does not preserve the final Phase 05 and next-role hold boundaries.');
    if (!rolePass || !rootPass || !localPass || !factoryPass) error(errors, 'STATE_PHASE05_NOT_COMPLETE', 'state', 'Final local Phase 05 state is incomplete.');
  }
}

export function validatePhase05(bundle, options = {}) {
  const stage = options.stage ?? 'final';
  if (!['pre-hostile', 'pre-close', 'final'].includes(stage)) throw new Error(`Unknown Phase 05 validation stage: ${stage}`);
  const errors = [];
  const counts = {
    parts: 0, chapters: 0, milestones: 0, clusters: 0, claims: 0, boundaries: 0,
    scenarios: 0, domains: 0, ports: 0, contextTests: 0, partExitChecks: 0,
    cases: 0, chapterExistence: 0, competencyRows: 0, projectMilestones: 0,
    visualChapters: 0, acceptedTaskReviews: 0,
  };
  validatePins(bundle, errors);
  const architecture = validateArchitecture(bundle, errors, counts);
  validateCsv(bundle, architecture, errors, counts);
  validateProject(bundle, architecture, errors, counts);
  validateVisual(bundle, architecture, errors, counts);
  validateReviews(bundle, errors, counts, stage);
  validateVerification(bundle, errors, stage);
  validatePaths(bundle, errors, stage);
  validateHygiene(bundle, errors);
  validateState(bundle, errors, stage);
  return { ok: errors.length === 0, stage, counts, errors };
}

async function walk(root, relative, output) {
  const absolute = path.join(root, relative);
  if (!existsSync(absolute)) return;
  const info = await lstat(absolute);
  if (info.isSymbolicLink()) throw new Error(`Symlinked validation input is forbidden: ${relative}`);
  if (info.isFile()) {
    output.push(relative.split(path.sep).join('/'));
    return;
  }
  for (const entry of await readdir(absolute)) await walk(root, path.join(relative, entry), output);
}

export async function loadPhase05Bundle(root) {
  const resolvedRoot = realpathSync(root);
  const files = {};
  for (const relative of BUNDLE_PATHS) {
    const absolute = path.resolve(resolvedRoot, relative);
    if (!absolute.startsWith(resolvedRoot + path.sep)) throw new Error(`Path escapes repository root: ${relative}`);
    if (!existsSync(absolute)) continue;
    const info = await lstat(absolute);
    if (info.isSymbolicLink() || !info.isFile()) throw new Error(`Input is not a regular file: ${relative}`);
    const bytes = await readFile(absolute);
    files[relative] = { text: bytes.toString('utf8'), sha256: hash(bytes), bytes: bytes.length };
  }
  const inventory = [];
  await walk(resolvedRoot, 'project-control', inventory);
  for (const candidate of [
    'docs', 'src', 'tools', 'scripts', 'tests', 'public', 'content', 'dist', 'output',
    'downloads', 'build', '.output', 'artifacts',
    'abhyaas', 'certification', 'question-bank',
    'src/content/books/machine-learning-engineering',
    'src/assets/books/machine-learning-engineering',
    'public/downloads/machine-learning-engineering.pdf',
  ]) await walk(resolvedRoot, candidate, inventory);
  for (const entry of await readdir(resolvedRoot)) {
    const absolute = path.join(resolvedRoot, entry);
    const info = await lstat(absolute);
    if (info.isFile()) inventory.push(entry);
  }
  return { root: resolvedRoot, files, inventory: [...new Set(inventory)].sort() };
}

async function cli() {
  const stageArg = process.argv.find((argument) => argument.startsWith('--stage='));
  const stage = stageArg ? stageArg.slice('--stage='.length) : 'final';
  const scriptDir = path.dirname(fileURLToPath(import.meta.url));
  const root = path.resolve(scriptDir, '../../../../..');
  const result = validatePhase05(await loadPhase05Bundle(root), { stage });
  if (!result.ok) {
    console.error(JSON.stringify(result, null, 2));
    process.exitCode = 1;
    return;
  }
  const c = result.counts;
  console.log(`Phase 05 architecture validation PASS [${stage}]: parts=${c.parts}/7; chapters=${c.chapters}/21; milestones=${c.milestones}/21; trace=${c.clusters}/${c.claims}/${c.boundaries}/${c.scenarios}; domains=${c.domains}/12; ports=${c.ports}/5; contexts=${c.contextTests}/40; exits=${c.partExitChecks}/35; cases=${c.cases}/5; reviews=${c.acceptedTaskReviews}/5.`);
}

if (process.argv[1] && pathToFileURL(realpathSync(process.argv[1])).href === import.meta.url) await cli();
