import { realpathSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DECISIONS = ['SINGLE BOOK', '2-VOLUME SERIES', '3-VOLUME SERIES', '4+-VOLUME SERIES'];
const ALTERNATIVES = [
  ['ALT-SINGLE', 'SINGLE BOOK'],
  ['ALT-2V', '2-VOLUME SERIES'],
  ['ALT-3V', '3-VOLUME SERIES'],
  ['ALT-4PLUS', '4+-VOLUME SERIES'],
];
const DECISION_HEADINGS = [
  'Decision Record',
  'Minimum Structure',
  'Thesis and Reader Endpoints',
  'Audience and Prerequisites',
  'Exclusions and Dependencies',
  'Capstone Model',
  'Approximate Depth',
  'Visual Production Implications',
  'Alternatives Considered',
  'Trace Matrix',
  'Phase 05 Handoff',
];
const VERIFICATION_HEADINGS = [
  'Decision and Coverage',
  'Accepted Independent Reviews',
  'Executable Checks',
  'Addition-Aware Whitespace and EOF Audit',
  'Path Audit',
  'Gate Result',
];
const ALTERNATIVE_FIELDS = [
  'thesis',
  'reader_endpoint',
  'capstone_transformation',
  'no_reteaching_rule',
  'merge_test',
  'decision_reason',
];
const ALTERNATIVE_ARRAY_FIELDS = ['prerequisites', 'dependencies'];
const STRUCTURE_FIELDS = ['minimum_structure', 'capstone_model', 'approximate_depth'];
const STRUCTURE_ARRAY_FIELDS = [
  'audience',
  'prerequisites',
  'exclusions',
  'dependencies',
  'visual_production_implications',
];
const VOLUME_FIELDS = [
  'id',
  'title',
  'thesis',
  'reader_endpoint',
  'capstone_transformation',
  'no_reteaching_rule',
  'approximate_depth',
];
const VOLUME_ARRAY_FIELDS = ['prerequisites', 'dependencies', 'visual_implications'];
const REVIEW_TASKS = ['TASK-2', 'TASK-3', 'TASK-4'];
const CHECKS = ['new_file_audit', 'validator_tests', 'full_repository_check', 'path_audit'];
const SEQUENTIAL_GATES = ['MANUSCRIPT', 'VISUAL', 'PUBLICATION', 'SCREEN-FIRST'];

const CLAIM_CONTRACTS = {
  'MLE-CLM-001': {
    accepted_statement: 'Machine Learning Engineer is a current standalone employer title across multiple independent industries, with common title variants including Senior Machine Learning Engineer, ML Engineer, AI & Machine Learning Engineer, and domain-qualified Machine Learning Engineer titles.',
    clusters: ['LC-08'],
  },
  'MLE-CLM-002': {
    accepted_statement: 'Across model-product and physical-system contexts, employers repeatedly assign Machine Learning Engineers work that connects problem framing or model design to training, validation, integration, and production deployment rather than stopping at offline modeling.',
    clusters: ['LC-01', 'LC-05', 'LC-06'],
  },
  'MLE-CLM-003': {
    accepted_statement: 'Production accountability recurs through deployment, serving, latency or resource constraints, reliability, monitoring, support, or real-world debugging; a trained model artifact alone is not the recurring unit of delivery.',
    clusters: ['LC-05', 'LC-06'],
  },
  'MLE-CLM-004': {
    accepted_statement: 'Data pipelines, reproducible experiments, evaluation across representative environments, and feedback or retraining loops are recurring mechanisms by which Machine Learning Engineers make model changes traceable and supportable.',
    clusters: ['LC-02', 'LC-03', 'LC-06'],
  },
  'MLE-CLM-005': {
    accepted_statement: 'Machine Learning Engineer roles can be architecture-and-implementation roles at either the model-product layer or the ML platform and inference layer, so the canonical role must define a model-system accountability without absorbing generalized platform engineering.',
    clusters: ['LC-05', 'LC-08'],
  },
  'MLE-CLM-006': {
    accepted_statement: 'Stakeholder work is intrinsic: employers repeatedly pair Machine Learning Engineers with product, domain, research, data, infrastructure, hardware, commercial, operations, or client partners to translate needs and evidence into deployed systems.',
    clusters: ['LC-01', 'LC-08'],
  },
  'MLE-CLM-007': {
    accepted_statement: 'Hiring seniority and scope are not standardized: current postings range from recent-graduate eligibility or two-plus years to senior roles requiring eight-plus years, while similar work appears under exact, abbreviated, hybrid, seniority-qualified, and domain-qualified titles.',
    clusters: ['LC-08'],
  },
  'MLE-CLM-008': {
    accepted_statement: 'Machine learning engineering begins with a reviewable task contract: intended decision or user outcome, population and context, measurable baseline, acceptance criteria, constraints, owners, and a justified reason to use machine learning before model complexity is introduced.',
    clusters: ['LC-01', 'LC-03'],
  },
  'MLE-CLM-009': {
    accepted_statement: 'Data and feature expectations are executable lifecycle contracts: schemas, allowed domains, provenance and versions, train/serve environments, transformations, and skew or drift thresholds must be retained with conformance results so a candidate can be diagnosed and reproduced.',
    clusters: ['LC-02'],
  },
  'MLE-CLM-010': {
    accepted_statement: 'Training and experimentation require immutable run evidence—code and dependency versions, data identifiers, parameters, seeds, hardware or execution context, metrics, and artifacts—while reproducibility must be stated within a bounded platform and release rather than promised absolutely.',
    clusters: ['LC-03'],
  },
  'MLE-CLM-011': {
    accepted_statement: 'Model qualification is a decision record, not a single score: compare the candidate with retained baselines on the intended population and meaningful segments, report uncertainty or probability calibration where applicable, document evaluation procedure and limitations, and tie thresholds to consequences.',
    clusters: ['LC-04'],
  },
  'MLE-CLM-012': {
    accepted_statement: 'A releasable model is a versioned package plus evidence: executable artifact and dependencies, interface or inference schema, lineage to its run and data, intended and excluded uses, evaluated conditions, limitations, approval state, and recovery target must travel together.',
    clusters: ['LC-05'],
  },
  'MLE-CLM-013': {
    accepted_statement: 'Serving qualification joins model evidence with software operations: test latency, error behavior, and capacity under representative demand; expose health and model metrics; use staged traffic and explicit bake gates; retain rollback; and connect drift or performance thresholds to investigation, retraining, or requalification rather than automatic promotion.',
    clusters: ['LC-06'],
  },
  'MLE-CLM-014': {
    accepted_statement: 'Security and lifecycle accountability are continuous: inventory and protect data, code, dependencies, models, and endpoints; record threat assumptions, access and integrity controls, monitoring and incident paths, owners, approvals, rollback state, and retirement or decommissioning evidence for every released model.',
    clusters: ['LC-07'],
  },
  'MLE-CLM-015': {
    accepted_statement: 'The durable center of Machine Learning Engineering is converting model or data-science work into a production-ready learning system and owning workload-specific integration across qualification, serving, monitoring, and change; it is not model experimentation alone.',
    clusters: ['LC-01', 'LC-05'],
  },
  'MLE-CLM-016': {
    accepted_statement: 'Production readiness requires evidence across data, features, models, pipeline components, serving behavior, monitoring, retraining, and rollback because an ML model can degrade or fail even when conventional code tests and offline metrics pass.',
    clusters: ['LC-04', 'LC-06'],
  },
  'MLE-CLM-017': {
    accepted_statement: 'Recurring ML lifecycle failures are system-interface failures: entangled changes, hidden data or feedback dependencies, undeclared consumers, configuration drift, incomplete actor visibility, and individually acceptable changes whose combination creates unsafe behavior.',
    clusters: ['LC-02', 'LC-03', 'LC-05', 'LC-06'],
  },
  'MLE-CLM-018': {
    accepted_statement: "MLOps, ML platform, infrastructure, SRE, and security functions own reusable automation, shared runtime or fleet reliability, access boundaries, and cross-workload controls; the Machine Learning Engineer owns the model workload's use of those capabilities and its model-specific operational evidence unless authority is explicitly reassigned.",
    clusters: ['LC-02', 'LC-05', 'LC-06', 'LC-07', 'LC-08'],
  },
  'MLE-CLM-019': {
    accepted_statement: 'Evaluation and safety must retain an independent release-gate voice: aggregate offline or A/B metrics can miss consequential behavior, so targeted deployment evaluations, qualitative expert evidence, incident processes, and formal risk review can block or reverse a launch.',
    clusters: ['LC-04', 'LC-07'],
  },
  'MLE-CLM-020': {
    accepted_statement: 'Product, domain, security, safety, privacy, governance, legal, executive, and regulatory authorities retain decisions about purpose, intended use, risk tolerance, compliance, sensitive use, and domain validity; an MLE supplies implementation and evidence but does not unilaterally authorize those decisions.',
    clusters: ['LC-01', 'LC-04', 'LC-07', 'LC-08'],
  },
  'MLE-CLM-021': {
    accepted_statement: 'Current practice distinguishes Machine Learning Engineer from data science, data engineering, applied research, platform or infrastructure, security, policy and safety, and generative or agentic specializations; shared implementation does not erase their different decision centers.',
    clusters: ['LC-05', 'LC-08'],
  },
  'MLE-CLM-022': {
    accepted_statement: 'Advanced and staff-level MLE depth is demonstrated by sustained production ownership, wider cross-team or company impact, ambiguous problem framing, architecture and initiative leadership, business judgment, mentoring, and raising operational standards—not by algorithm novelty or people management alone.',
    clusters: ['LC-08'],
  },
};

const BOUNDARY_CLUSTERS = {
  'BND-01': ['LC-03', 'LC-04', 'LC-08'],
  'BND-02': ['LC-02', 'LC-08'],
  'BND-03': ['LC-03', 'LC-04', 'LC-05', 'LC-08'],
  'BND-04': ['LC-03', 'LC-05', 'LC-08'],
  'BND-05': ['LC-04', 'LC-07', 'LC-08'],
  'BND-06': ['LC-05', 'LC-08'],
  'BND-07': ['LC-04', 'LC-05', 'LC-08'],
  'BND-08': ['LC-05', 'LC-07', 'LC-08'],
  'BND-09': ['LC-02', 'LC-03', 'LC-05', 'LC-06', 'LC-08'],
  'BND-10': ['LC-02', 'LC-03', 'LC-05', 'LC-06', 'LC-08'],
  'BND-11': ['LC-05', 'LC-06', 'LC-08'],
  'BND-12': ['LC-06', 'LC-08'],
  'BND-13': ['LC-01', 'LC-04', 'LC-08'],
  'BND-14': ['LC-05', 'LC-06', 'LC-07', 'LC-08'],
  'BND-15': ['LC-01', 'LC-04', 'LC-07', 'LC-08'],
  'BND-16': ['LC-01', 'LC-02', 'LC-07', 'LC-08'],
  'BND-17': ['LC-01', 'LC-02', 'LC-04', 'LC-07', 'LC-08'],
};

const SCENARIO_CONTRACTS = {
  'SCN-01': ['A candidate ranker improves average relevance but regresses a protected high-consequence segment.', 'AI Evaluation Engineer; Product; Domain authorities', ['LC-01', 'LC-04', 'LC-07', 'LC-08']],
  'SCN-02': ['A reusable feature platform needs a new online store and tenancy model.', 'Data Engineer; ML Platform Engineer / ML Infrastructure Engineer', ['LC-02', 'LC-05', 'LC-06', 'LC-08']],
  'SCN-03': ['A training run cannot be reproduced bit-for-bit on different hardware.', 'ML Platform Engineer / ML Infrastructure Engineer', ['LC-03', 'LC-08']],
  'SCN-04': ['A production drift alert fires while delayed outcome labels remain unavailable.', 'AI Evaluation Engineer; Domain authorities', ['LC-02', 'LC-04', 'LC-06']],
  'SCN-05': ['An LLM feature needs prompt, retrieval, and behavior-evaluation changes.', 'LLM Engineer; AI Evaluation Engineer', ['LC-04', 'LC-05', 'LC-06', 'LC-08']],
  'SCN-06': ['An agent may initiate a refund through a tool.', 'Agentic AI Engineer; Security; Domain authorities', ['LC-01', 'LC-05', 'LC-07', 'LC-08']],
  'SCN-07': ['A shared serving cluster exceeds its fleet SLO during a model rollout.', 'Platform Engineer / Site Reliability Engineer', ['LC-05', 'LC-06', 'LC-08']],
  'SCN-08': ["A medical model passes technical tests but its intended-use population has changed.", 'Domain authorities; Privacy / AI Governance / Legal; Safety', ['LC-01', 'LC-02', 'LC-04', 'LC-07']],
  'SCN-09': ['An applied scientist proposes a novel architecture with promising offline results.', 'Applied Scientist', ['LC-03', 'LC-04', 'LC-05', 'LC-06']],
  'SCN-10': ['A security review requires artifact integrity and restricted model access.', 'Security', ['LC-05', 'LC-07', 'LC-08']],
};

function addError(errors, code, pathName, message) {
  errors.push({ code, path: pathName, message });
}

function isNonemptyString(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function isNonemptyStringArray(value) {
  return Array.isArray(value) && value.length > 0 && value.every(isNonemptyString);
}

function exactIds(records, expected) {
  if (!Array.isArray(records)) return false;
  const actual = records.map((record) => record?.id);
  return actual.length === expected.length && new Set(actual).size === expected.length &&
    expected.every((id) => actual.includes(id));
}

function exactStringSet(actual, expected) {
  return Array.isArray(actual) && actual.length === expected.length &&
    new Set(actual).size === expected.length && expected.every((value) => actual.includes(value));
}

function countHeadings(markdown, headings, scope, errors) {
  const counts = new Map(headings.map((heading) => [heading, 0]));
  let fence = null;
  for (const line of String(markdown ?? '').split(/\r?\n/)) {
    const fenceMatch = line.match(/^\s*(```+|~~~+)/);
    if (fenceMatch) {
      const kind = fenceMatch[1][0];
      if (fence === null) fence = kind;
      else if (fence === kind) fence = null;
      continue;
    }
    if (fence !== null) continue;
    for (const heading of headings) {
      if (line === `## ${heading}`) counts.set(heading, counts.get(heading) + 1);
    }
  }
  for (const heading of headings) {
    const count = counts.get(heading);
    if (count !== 1) {
      addError(
        errors,
        `${scope.toUpperCase()}_HEADING_COUNT`,
        `${scope}.headings.${heading}`,
        `Expected exact H2 heading "${heading}" once outside fenced blocks; found ${count}.`,
      );
    }
  }
  return counts;
}

function decisionRecords(markdown) {
  const records = [];
  let fence = null;
  for (const line of String(markdown ?? '').split(/\r?\n/)) {
    const fenceMatch = line.match(/^\s*(```+|~~~+)/);
    if (fenceMatch) {
      const kind = fenceMatch[1][0];
      if (fence === null) fence = kind;
      else if (fence === kind) fence = null;
      continue;
    }
    if (fence !== null) continue;
    const match = line.match(/^Decision: `([^`]+)`$/);
    if (match) records.push(match[1]);
  }
  return records;
}

function validateDecisionRecord(markdown, manifest, errors) {
  const records = decisionRecords(markdown);
  if (records.length !== 1) {
    addError(
      errors,
      'DECISION_RECORD_COUNT',
      'decision.record',
      `Expected exactly one Decision: \`VERDICT\` record outside fenced blocks; found ${records.length}.`,
    );
    return;
  }
  if (!DECISIONS.includes(records[0]) || (manifest && records[0] !== manifest.decision)) {
    addError(
      errors,
      'DECISION_RECORD_MATCH',
      'decision.record',
      'The exact prose Decision record must be an allowed verdict matching the decision manifest.',
    );
  }
}

function manifestBlocks(markdown, marker) {
  const lines = String(markdown ?? '').split(/\r?\n/);
  const start = `<!-- ${marker}-START -->`;
  const end = `<!-- ${marker}-END -->`;
  const blocks = [];
  let fence = null;

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    const fenceMatch = line.match(/^\s*(```+|~~~+)/);
    if (fenceMatch) {
      const kind = fenceMatch[1][0];
      if (fence === null) fence = kind;
      else if (fence === kind) fence = null;
      continue;
    }
    if (fence !== null || line !== start) continue;

    let cursor = index + 1;
    while (cursor < lines.length && lines[cursor].trim() === '') cursor += 1;
    if (lines[cursor] !== '```json') {
      blocks.push({ malformed: 'The START marker must be followed by an exact ```json fence.' });
      continue;
    }
    const jsonStart = cursor + 1;
    cursor = jsonStart;
    while (cursor < lines.length && lines[cursor] !== '```') cursor += 1;
    if (cursor >= lines.length) {
      blocks.push({ malformed: 'The manifest JSON fence is not closed.' });
      break;
    }
    const jsonEnd = cursor;
    cursor += 1;
    while (cursor < lines.length && lines[cursor].trim() === '') cursor += 1;
    if (lines[cursor] !== end) {
      blocks.push({ malformed: `The JSON fence must be followed by ${end}.` });
      index = jsonEnd;
      continue;
    }
    blocks.push({ json: lines.slice(jsonStart, jsonEnd).join('\n') });
    index = cursor;
  }
  return blocks;
}

function parseManifest(markdown, marker, scope, errors) {
  const blocks = manifestBlocks(markdown, marker);
  if (blocks.length !== 1) {
    addError(
      errors,
      `${scope.toUpperCase()}_MANIFEST_COUNT`,
      `${scope}.manifest`,
      `Expected exactly one ${marker} block outside fenced blocks; found ${blocks.length}.`,
    );
    return null;
  }
  if (blocks[0].malformed) {
    addError(errors, `${scope.toUpperCase()}_MANIFEST_FORMAT`, `${scope}.manifest`, blocks[0].malformed);
    return null;
  }
  try {
    return JSON.parse(blocks[0].json);
  } catch (error) {
    addError(
      errors,
      `${scope.toUpperCase()}_MANIFEST_JSON`,
      `${scope}.manifest`,
      `Manifest must contain valid JSON: ${error.message}`,
    );
    return null;
  }
}

function validateAlternatives(manifest, errors) {
  const alternatives = manifest?.alternatives;
  const expectedIds = ALTERNATIVES.map(([id]) => id);
  if (!exactIds(alternatives, expectedIds)) {
    addError(
      errors,
      'ALTERNATIVE_IDS',
      'decision.manifest.alternatives',
      `Alternatives must contain each exact ID once: ${expectedIds.join(', ')}.`,
    );
  }
  if (!Array.isArray(alternatives)) return;

  for (let index = 0; index < alternatives.length; index += 1) {
    const alternative = alternatives[index];
    const base = `decision.manifest.alternatives[${index}]`;
    const expectedVerdict = ALTERNATIVES.find(([id]) => id === alternative?.id)?.[1];
    if (!expectedVerdict || alternative?.verdict !== expectedVerdict) {
      addError(errors, 'ALTERNATIVE_VERDICT', `${base}.verdict`, 'Alternative verdict must exactly match its canonical ID.');
    }
    if (!['RETAINED', 'REJECTED'].includes(alternative?.disposition)) {
      addError(errors, 'ALTERNATIVE_DISPOSITION', `${base}.disposition`, 'Alternative disposition must be RETAINED or REJECTED.');
    }
    for (const field of ALTERNATIVE_FIELDS) {
      if (!isNonemptyString(alternative?.[field])) {
        addError(errors, 'ALTERNATIVE_FIELD', `${base}.${field}`, `${field} must be a nonempty string.`);
      }
    }
    for (const field of ALTERNATIVE_ARRAY_FIELDS) {
      if (!isNonemptyStringArray(alternative?.[field])) {
        addError(errors, 'ALTERNATIVE_FIELD', `${base}.${field}`, `${field} must be a nonempty string array.`);
      }
    }
  }

  const retained = alternatives.filter((alternative) => alternative?.disposition === 'RETAINED');
  const expectedRetained = ALTERNATIVES.find(([, verdict]) => verdict === manifest?.decision)?.[0];
  if (retained.length !== 1 || retained[0]?.id !== expectedRetained) {
    addError(
      errors,
      'ALTERNATIVE_RETAINED_MATCH',
      'decision.manifest.alternatives',
      'Exactly one alternative must be RETAINED and its ID must match the controlling decision.',
    );
  }
}

function validateStructure(manifest, errors) {
  const structure = manifest?.structure;
  if (!structure || typeof structure !== 'object' || Array.isArray(structure)) {
    addError(errors, 'STRUCTURE_RECORD', 'decision.manifest.structure', 'Structure must be an object.');
    return;
  }
  for (const field of STRUCTURE_FIELDS) {
    if (!isNonemptyString(structure[field])) {
      addError(errors, 'STRUCTURE_FIELD', `decision.manifest.structure.${field}`, `${field} must be a nonempty string.`);
    }
  }
  for (const field of STRUCTURE_ARRAY_FIELDS) {
    if (!isNonemptyStringArray(structure[field])) {
      addError(errors, 'STRUCTURE_FIELD', `decision.manifest.structure.${field}`, `${field} must be a nonempty string array.`);
    }
  }

  const volumes = structure.volumes;
  if (!Array.isArray(volumes)) {
    addError(errors, 'VOLUME_IDS', 'decision.manifest.structure.volumes', 'Volumes must be an ordered array.');
    return;
  }
  const minimum = { 'SINGLE BOOK': 1, '2-VOLUME SERIES': 2, '3-VOLUME SERIES': 3, '4+-VOLUME SERIES': 4 }[manifest?.decision];
  const validCount = manifest?.decision === '4+-VOLUME SERIES' ? volumes.length >= 4 : volumes.length === minimum;
  const expectedIds = volumes.map((_, index) => `VOLUME-${index + 1}`);
  if (!validCount || volumes.some((volume, index) => volume?.id !== expectedIds[index])) {
    addError(
      errors,
      'VOLUME_IDS',
      'decision.manifest.structure.volumes',
      'Volumes must have the decision-required count and ordered contiguous IDs beginning with VOLUME-1.',
    );
  }
  for (let index = 0; index < volumes.length; index += 1) {
    const volume = volumes[index];
    const base = `decision.manifest.structure.volumes[${index}]`;
    for (const field of VOLUME_FIELDS) {
      if (!isNonemptyString(volume?.[field])) {
        addError(errors, 'VOLUME_FIELD', `${base}.${field}`, `${field} must be a nonempty string.`);
      }
    }
    for (const field of VOLUME_ARRAY_FIELDS) {
      if (!isNonemptyStringArray(volume?.[field])) {
        addError(errors, 'VOLUME_FIELD', `${base}.${field}`, `${field} must be a nonempty string array.`);
      }
    }
  }
}

function rejectedAlternativeIds(manifest) {
  if (!Array.isArray(manifest?.alternatives)) return new Set();
  return new Set(
    manifest.alternatives
      .filter((alternative) => alternative?.disposition === 'REJECTED')
      .map((alternative) => alternative?.id),
  );
}

function validateTraceCollection(manifest, key, expectedIds, code, fields, errors) {
  const records = manifest?.traces?.[key];
  if (!exactIds(records, expectedIds)) {
    addError(
      errors,
      code,
      `decision.manifest.traces.${key}`,
      `${key} must contain each exact accepted ID once and no extras.`,
    );
  }
  if (!Array.isArray(records)) return;
  const rejectedIds = rejectedAlternativeIds(manifest);
  for (let index = 0; index < records.length; index += 1) {
    const record = records[index];
    const base = `decision.manifest.traces.${key}[${index}]`;
    if (!isNonemptyStringArray(record?.retained_clusters) ||
        record.retained_clusters.some((cluster) => !/^LC-0[1-8]$/.test(cluster))) {
      addError(errors, 'TRACE_FIELD', `${base}.retained_clusters`, 'retained_clusters must contain exact LC-01 through LC-08 IDs.');
    }
    for (const field of fields) {
      if (!isNonemptyString(record?.[field])) {
        addError(errors, 'TRACE_FIELD', `${base}.${field}`, `${field} must be a nonempty string.`);
      }
    }

    let expectedClusters;
    if (key === 'claims') expectedClusters = CLAIM_CONTRACTS[record?.id]?.clusters;
    if (key === 'boundaries') expectedClusters = BOUNDARY_CLUSTERS[record?.id];
    if (key === 'scenarios') expectedClusters = SCENARIO_CONTRACTS[record?.id]?.[2];
    if (expectedClusters && !exactStringSet(record?.retained_clusters, expectedClusters)) {
      addError(
        errors,
        'TRACE_CLUSTER_SET',
        `${base}.retained_clusters`,
        `${record.id} retained_clusters must exactly match its accepted cluster set; order is not significant and duplicates are forbidden.`,
      );
    }
    if (key === 'claims') {
      const acceptedStatement = CLAIM_CONTRACTS[record?.id]?.accepted_statement;
      if (acceptedStatement && record?.accepted_statement !== acceptedStatement) {
        addError(
          errors,
          'CLAIM_SEMANTICS',
          `${base}.accepted_statement`,
          `${record.id} accepted_statement must exactly match the accepted evidence-register claim.`,
        );
      }
    }
    if (key === 'scenarios') {
      const contract = SCENARIO_CONTRACTS[record?.id];
      if (contract && record?.accepted_scenario !== contract[0]) {
        addError(
          errors,
          'SCENARIO_SEMANTICS',
          `${base}.accepted_scenario`,
          `${record.id} accepted_scenario must exactly match the accepted boundary scenario.`,
        );
      }
      if (contract && record?.authority_owner !== contract[1]) {
        addError(
          errors,
          'SCENARIO_AUTHORITY',
          `${base}.authority_owner`,
          `${record.id} authority_owner must exactly match the accepted adjacent-role authority contract.`,
        );
      }
    }
    if (isNonemptyString(record?.alternative_effect)) {
      const references = record.alternative_effect.match(/ALT-(?:SINGLE|2V|3V|4PLUS)(?![A-Z0-9_+-])/g) ?? [];
      if (references.length === 0 || references.some((id) => !rejectedIds.has(id))) {
        addError(
          errors,
          'TRACE_FIELD',
          `${base}.alternative_effect`,
          'alternative_effect must name at least one exact rejected alternative ID and no retained alternative.',
        );
      }
    }
  }
}

function validateTraces(manifest, errors) {
  validateTraceCollection(
    manifest,
    'claims',
    Array.from({ length: 22 }, (_, index) => `MLE-CLM-${String(index + 1).padStart(3, '0')}`),
    'CLAIM_TRACE_IDS',
    ['reader_endpoint', 'capstone_or_artifact', 'alternative_effect'],
    errors,
  );
  validateTraceCollection(
    manifest,
    'boundaries',
    Array.from({ length: 17 }, (_, index) => `BND-${String(index + 1).padStart(2, '0')}`),
    'BOUNDARY_TRACE_IDS',
    ['exclusion', 'authority_owner', 'alternative_effect'],
    errors,
  );
  validateTraceCollection(
    manifest,
    'scenarios',
    Array.from({ length: 10 }, (_, index) => `SCN-${String(index + 1).padStart(2, '0')}`),
    'SCENARIO_TRACE_IDS',
    ['reader_endpoint', 'capstone_application', 'alternative_effect'],
    errors,
  );
}

function validateHandoff(manifest, errors) {
  const handoff = manifest?.phase05_handoff;
  if (handoff?.next_gate !== '05-book-architecture' ||
      !isNonemptyStringArray(handoff?.inputs) ||
      !isNonemptyStringArray(handoff?.prohibited_downstream_work)) {
    addError(
      errors,
      'PHASE05_HANDOFF',
      'decision.manifest.phase05_handoff',
      'Phase 05 handoff must name 05-book-architecture with nonempty inputs and prohibited_downstream_work.',
    );
  }
}

function validateSequentialRule(manifest, headingCounts, errors) {
  const single = manifest?.decision === 'SINGLE BOOK';
  const headingCount = headingCounts.get('Sequential Volume Gate') ?? 0;
  if (single) {
    if (manifest?.sequential_volume_gate !== null) {
      addError(errors, 'SINGLE_SEQUENTIAL_GATE', 'decision.manifest.sequential_volume_gate', 'A single-book decision must set sequential_volume_gate to null.');
    }
    if (headingCount !== 0) {
      addError(errors, 'SINGLE_SEQUENTIAL_HEADING', 'decision.headings.Sequential Volume Gate', 'A single-book decision must not include a Sequential Volume Gate H2.');
    }
    return;
  }
  if (!DECISIONS.slice(1).includes(manifest?.decision)) return;
  if (headingCount !== 1) {
    addError(errors, 'MULTI_SEQUENTIAL_HEADING', 'decision.headings.Sequential Volume Gate', 'A multi-volume decision must include exactly one Sequential Volume Gate H2.');
  }
  const gate = manifest?.sequential_volume_gate;
  const exactGates = Array.isArray(gate?.gates) && gate.gates.length === SEQUENTIAL_GATES.length &&
    gate.gates.every((value, index) => value === SEQUENTIAL_GATES[index]);
  if (gate?.activation_condition !== 'PREVIOUS_VOLUME_ALL_GATES_PASS' || !exactGates) {
    addError(
      errors,
      'SEQUENTIAL_VOLUME_GATE',
      'decision.manifest.sequential_volume_gate',
      'Multi-volume structures require PREVIOUS_VOLUME_ALL_GATES_PASS with MANUSCRIPT, VISUAL, PUBLICATION, and SCREEN-FIRST gates in order.',
    );
  }
}

function validateDecisionManifest(manifest, headingCounts, errors) {
  if (!manifest) return;
  if (manifest.schema !== 'mle-phase-04-scope/v1') {
    addError(errors, 'DECISION_SCHEMA', 'decision.manifest.schema', 'Expected schema mle-phase-04-scope/v1.');
  }
  if (manifest.role !== 'Machine Learning Engineer' || manifest.phase !== '04-book-scope') {
    addError(errors, 'DECISION_METADATA', 'decision.manifest', 'Role and phase must be Machine Learning Engineer and 04-book-scope.');
  }
  if (!DECISIONS.includes(manifest.decision)) {
    addError(errors, 'DECISION_ENUM', 'decision.manifest.decision', `Decision must be one of: ${DECISIONS.join(', ')}.`);
  }
  validateAlternatives(manifest, errors);
  validateStructure(manifest, errors);
  validateTraces(manifest, errors);
  validateHandoff(manifest, errors);
  validateSequentialRule(manifest, headingCounts, errors);
}

function validateReviews(manifest, errors) {
  const reviews = manifest?.reviews;
  if (!Array.isArray(reviews) || reviews.length !== REVIEW_TASKS.length ||
      new Set(reviews?.map((review) => review?.task)).size !== REVIEW_TASKS.length ||
      !REVIEW_TASKS.every((task) => reviews?.some((review) => review?.task === task))) {
    addError(errors, 'REVIEW_TASK_IDS', 'verification.manifest.reviews', 'Reviews must contain exact TASK-2, TASK-3, and TASK-4 records once each.');
  }
  if (!Array.isArray(reviews)) return;
  for (let index = 0; index < reviews.length; index += 1) {
    const review = reviews[index];
    const base = `verification.manifest.reviews[${index}]`;
    if (!isNonemptyString(review?.reviewed_artifact) || !isNonemptyString(review?.review_evidence) ||
        review?.spec_verdict !== 'SPEC COMPLIANCE PASS' || review?.quality_verdict !== 'QUALITY APPROVED') {
      addError(
        errors,
        'REVIEW_VERDICT',
        base,
        'Each review requires reviewed_artifact, review_evidence, SPEC COMPLIANCE PASS, and QUALITY APPROVED.',
      );
    }
  }
}

function validateChecks(manifest, errors) {
  const checks = manifest?.checks;
  for (const check of CHECKS) {
    if (!checks || typeof checks[check] !== 'object' || Array.isArray(checks[check])) {
      addError(errors, 'CHECK_RECORD', `verification.manifest.checks.${check}`, `${check} must be an explicit check record.`);
      continue;
    }
    if (checks[check].status !== 'PASS') {
      addError(errors, 'CHECK_STATUS', `verification.manifest.checks.${check}.status`, `${check} status must be PASS.`);
    }
  }
  if (checks?.path_audit && (!Array.isArray(checks.path_audit.unexpected_paths) || checks.path_audit.unexpected_paths.length !== 0)) {
    addError(
      errors,
      'PATH_AUDIT_UNEXPECTED',
      'verification.manifest.checks.path_audit.unexpected_paths',
      'Path audit must contain an empty unexpected_paths array.',
    );
  }
}

function validateHostileIntegrationReview(manifest, errors) {
  const review = manifest?.hostile_integration_review;
  if (!review || typeof review !== 'object' || Array.isArray(review) ||
      !isNonemptyString(review.review_evidence) ||
      review.spec_verdict !== 'SPEC COMPLIANCE PASS' ||
      review.quality_verdict !== 'QUALITY APPROVED') {
    addError(
      errors,
      'HOSTILE_REVIEW',
      'verification.manifest.hostile_integration_review',
      'Hostile integration review requires nonempty review_evidence, SPEC COMPLIANCE PASS, and QUALITY APPROVED.',
    );
  }
}

function validateVerificationManifest(manifest, errors) {
  if (!manifest) return;
  if (manifest.schema !== 'mle-phase-04-verification/v1') {
    addError(errors, 'VERIFICATION_SCHEMA', 'verification.manifest.schema', 'Expected schema mle-phase-04-verification/v1.');
  }
  validateReviews(manifest, errors);
  validateHostileIntegrationReview(manifest, errors);
  validateChecks(manifest, errors);
}

function canonicalCounts(decisionManifest, verificationManifest) {
  return {
    alternatives: Array.isArray(decisionManifest?.alternatives) ? decisionManifest.alternatives.length : 0,
    claims: Array.isArray(decisionManifest?.traces?.claims) ? decisionManifest.traces.claims.length : 0,
    boundaries: Array.isArray(decisionManifest?.traces?.boundaries) ? decisionManifest.traces.boundaries.length : 0,
    scenarios: Array.isArray(decisionManifest?.traces?.scenarios) ? decisionManifest.traces.scenarios.length : 0,
    reviews: Array.isArray(verificationManifest?.reviews) ? verificationManifest.reviews.length : 0,
    hostile_reviews: verificationManifest?.hostile_integration_review &&
      typeof verificationManifest.hostile_integration_review === 'object' &&
      !Array.isArray(verificationManifest.hostile_integration_review) ? 1 : 0,
    checks: CHECKS.filter((check) => verificationManifest?.checks?.[check]).length,
    volumes: Array.isArray(decisionManifest?.structure?.volumes) ? decisionManifest.structure.volumes.length : 0,
  };
}

export function validatePhase04({ decision, verification } = {}) {
  const errors = [];
  const decisionHeadingCounts = countHeadings(decision, [...DECISION_HEADINGS, 'Sequential Volume Gate'], 'decision', errors);
  // Sequential Volume Gate is conditional, so remove the unconditional heading error.
  const conditionalIndex = errors.findIndex((error) => error.path === 'decision.headings.Sequential Volume Gate');
  if (conditionalIndex !== -1) errors.splice(conditionalIndex, 1);
  countHeadings(verification, VERIFICATION_HEADINGS, 'verification', errors);
  const decisionManifest = parseManifest(decision, 'PHASE04-DECISION-MANIFEST', 'decision', errors);
  const verificationManifest = parseManifest(verification, 'PHASE04-VERIFICATION-MANIFEST', 'verification', errors);
  validateDecisionRecord(decision, decisionManifest, errors);
  validateDecisionManifest(decisionManifest, decisionHeadingCounts, errors);
  validateVerificationManifest(verificationManifest, errors);
  errors.sort((left, right) =>
    left.code.localeCompare(right.code) || left.path.localeCompare(right.path) || left.message.localeCompare(right.message),
  );
  return {
    ok: errors.length === 0,
    decision: decisionManifest?.decision ?? null,
    counts: canonicalCounts(decisionManifest, verificationManifest),
    errors,
  };
}

async function runCli() {
  const directory = path.dirname(fileURLToPath(import.meta.url));
  const [decision, verification] = await Promise.all([
    readFile(path.join(directory, 'book-scope-decision.md'), 'utf8'),
    readFile(path.join(directory, 'phase-04-verification.md'), 'utf8'),
  ]);
  const result = validatePhase04({ decision, verification });
  if (!result.ok) {
    console.error(`Phase 04 scope validation FAIL: ${result.errors.length} error(s).`);
    for (const error of result.errors) {
      console.error(`${error.code} ${error.path}: ${error.message}`);
    }
    process.exitCode = 1;
    return;
  }
  const counts = result.counts;
  console.log(
    `Phase 04 scope validation PASS: decision=${result.decision}; alternatives=${counts.alternatives}/4; ` +
    `claims=${counts.claims}/22; boundaries=${counts.boundaries}/17; scenarios=${counts.scenarios}/10; ` +
    `reviews=${counts.reviews}/3; hostile_reviews=${counts.hostile_reviews}/1; ` +
    `checks=${counts.checks}/4; volumes=${counts.volumes}.`,
  );
}

const invokedPath = process.argv[1] ? realpathSync(process.argv[1]) : '';
if (invokedPath === realpathSync(fileURLToPath(import.meta.url))) {
  runCli().catch((error) => {
    console.error(`Phase 04 scope validation FAIL: ${error.message}`);
    process.exitCode = 1;
  });
}
