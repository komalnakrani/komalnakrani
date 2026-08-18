import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { copyFile, mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { validatePhase04 } from './validate-phase-04.mjs';

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

const alternativeDefinitions = [
  ['ALT-SINGLE', 'SINGLE BOOK'],
  ['ALT-2V', '2-VOLUME SERIES'],
  ['ALT-3V', '3-VOLUME SERIES'],
  ['ALT-4PLUS', '4+-VOLUME SERIES'],
];

const decisionForAlternative = Object.fromEntries(
  alternativeDefinitions.map(([id, label]) => [label, id]),
);

const acceptedClaims = Object.fromEntries(
  JSON.parse(readFileSync(new URL('../research/evidence-register.json', import.meta.url), 'utf8'))
    .claims.map((claim) => [claim.claim_id, claim.statement]),
);

const claimClusters = {
  'MLE-CLM-001': ['LC-08'],
  'MLE-CLM-002': ['LC-01', 'LC-05', 'LC-06'],
  'MLE-CLM-003': ['LC-05', 'LC-06'],
  'MLE-CLM-004': ['LC-02', 'LC-03', 'LC-06'],
  'MLE-CLM-005': ['LC-05', 'LC-08'],
  'MLE-CLM-006': ['LC-01', 'LC-08'],
  'MLE-CLM-007': ['LC-08'],
  'MLE-CLM-008': ['LC-01', 'LC-03'],
  'MLE-CLM-009': ['LC-02'],
  'MLE-CLM-010': ['LC-03'],
  'MLE-CLM-011': ['LC-04'],
  'MLE-CLM-012': ['LC-05'],
  'MLE-CLM-013': ['LC-06'],
  'MLE-CLM-014': ['LC-07'],
  'MLE-CLM-015': ['LC-01', 'LC-05'],
  'MLE-CLM-016': ['LC-04', 'LC-06'],
  'MLE-CLM-017': ['LC-02', 'LC-03', 'LC-05', 'LC-06'],
  'MLE-CLM-018': ['LC-02', 'LC-05', 'LC-06', 'LC-07', 'LC-08'],
  'MLE-CLM-019': ['LC-04', 'LC-07'],
  'MLE-CLM-020': ['LC-01', 'LC-04', 'LC-07', 'LC-08'],
  'MLE-CLM-021': ['LC-05', 'LC-08'],
  'MLE-CLM-022': ['LC-08'],
};

const boundaryClusters = {
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

const scenarioContracts = {
  'SCN-01': {
    accepted_scenario: 'A candidate ranker improves average relevance but regresses a protected high-consequence segment.',
    authority_owner: 'AI Evaluation Engineer; Product; Domain authorities',
    clusters: ['LC-01', 'LC-04', 'LC-07', 'LC-08'],
  },
  'SCN-02': {
    accepted_scenario: 'A reusable feature platform needs a new online store and tenancy model.',
    authority_owner: 'Data Engineer; ML Platform Engineer / ML Infrastructure Engineer',
    clusters: ['LC-02', 'LC-05', 'LC-06', 'LC-08'],
  },
  'SCN-03': {
    accepted_scenario: 'A training run cannot be reproduced bit-for-bit on different hardware.',
    authority_owner: 'ML Platform Engineer / ML Infrastructure Engineer',
    clusters: ['LC-03', 'LC-08'],
  },
  'SCN-04': {
    accepted_scenario: 'A production drift alert fires while delayed outcome labels remain unavailable.',
    authority_owner: 'AI Evaluation Engineer; Domain authorities',
    clusters: ['LC-02', 'LC-04', 'LC-06'],
  },
  'SCN-05': {
    accepted_scenario: 'An LLM feature needs prompt, retrieval, and behavior-evaluation changes.',
    authority_owner: 'LLM Engineer; AI Evaluation Engineer',
    clusters: ['LC-04', 'LC-05', 'LC-06', 'LC-08'],
  },
  'SCN-06': {
    accepted_scenario: 'An agent may initiate a refund through a tool.',
    authority_owner: 'Agentic AI Engineer; Security; Domain authorities',
    clusters: ['LC-01', 'LC-05', 'LC-07', 'LC-08'],
  },
  'SCN-07': {
    accepted_scenario: 'A shared serving cluster exceeds its fleet SLO during a model rollout.',
    authority_owner: 'Platform Engineer / Site Reliability Engineer',
    clusters: ['LC-05', 'LC-06', 'LC-08'],
  },
  'SCN-08': {
    accepted_scenario: "A medical model passes technical tests but its intended-use population has changed.",
    authority_owner: 'Domain authorities; Privacy / AI Governance / Legal; Safety',
    clusters: ['LC-01', 'LC-02', 'LC-04', 'LC-07'],
  },
  'SCN-09': {
    accepted_scenario: 'An applied scientist proposes a novel architecture with promising offline results.',
    authority_owner: 'Applied Scientist',
    clusters: ['LC-03', 'LC-04', 'LC-05', 'LC-06'],
  },
  'SCN-10': {
    accepted_scenario: 'A security review requires artifact integrity and restricted model access.',
    authority_owner: 'Security',
    clusters: ['LC-05', 'LC-07', 'LC-08'],
  },
};

function sequence(prefix, size, width = 2) {
  return Array.from({ length: size }, (_, index) =>
    `${prefix}${String(index + 1).padStart(width, '0')}`,
  );
}

function prose(value) {
  return `${value} is explicit, bounded, reviewable, and tied to the accepted evidence.`;
}

function validAlternative(id, label, retainedId) {
  return {
    id,
    verdict: label,
    disposition: id === retainedId ? 'RETAINED' : 'REJECTED',
    thesis: prose(`${label} thesis`),
    prerequisites: [prose(`${label} prerequisites`)],
    reader_endpoint: prose(`${label} endpoint`),
    capstone_transformation: prose(`${label} capstone`),
    dependencies: [prose(`${label} dependencies`)],
    no_reteaching_rule: prose(`${label} no-reteaching rule`),
    merge_test: prose(`${label} merge test`),
    decision_reason: prose(`${label} decision reason`),
  };
}

function validVolume(index) {
  return {
    id: `VOLUME-${index}`,
    title: `Machine Learning Engineering Volume ${index}`,
    thesis: prose(`Volume ${index} thesis`),
    prerequisites: [prose(`Volume ${index} prerequisites`)],
    reader_endpoint: prose(`Volume ${index} endpoint`),
    capstone_transformation: prose(`Volume ${index} capstone`),
    dependencies: [prose(`Volume ${index} dependencies`)],
    no_reteaching_rule: prose(`Volume ${index} no-reteaching rule`),
    approximate_depth: prose(`Volume ${index} approximate depth`),
    visual_implications: [prose(`Volume ${index} visual implication`)],
  };
}

function trace(id, kind = 'claim', rejectedId = 'ALT-2V') {
  const common = {
    id,
    alternative_effect: `${rejectedId} is rejected because ${prose(`${id} alternative effect`)}`,
  };
  if (kind === 'boundary') {
    return {
      ...common,
      retained_clusters: [...(boundaryClusters[id] ?? ['LC-01'])],
      exclusion: prose(`${id} exclusion`),
      authority_owner: prose(`${id} authority owner`),
    };
  }
  if (kind === 'scenario') {
    return {
      ...common,
      retained_clusters: [...(scenarioContracts[id]?.clusters ?? ['LC-01'])],
      accepted_scenario: scenarioContracts[id]?.accepted_scenario ?? prose(`${id} accepted scenario`),
      authority_owner: scenarioContracts[id]?.authority_owner ?? prose(`${id} authority owner`),
      reader_endpoint: prose(`${id} reader endpoint`),
      capstone_application: prose(`${id} capstone application`),
    };
  }
  return {
    ...common,
    retained_clusters: [...(claimClusters[id] ?? ['LC-01'])],
    accepted_statement: acceptedClaims[id] ?? prose(`${id} accepted statement`),
    reader_endpoint: prose(`${id} reader endpoint`),
    capstone_or_artifact: prose(`${id} capstone or artifact`),
  };
}

function validDecisionManifest(decision = 'SINGLE BOOK') {
  const retainedId = decisionForAlternative[decision];
  const volumeCount = {
    'SINGLE BOOK': 1,
    '2-VOLUME SERIES': 2,
    '3-VOLUME SERIES': 3,
    '4+-VOLUME SERIES': 4,
  }[decision];
  const rejectedId = alternativeDefinitions.find(([id]) => id !== retainedId)[0];
  return {
    schema: 'mle-phase-04-scope/v1',
    role: 'Machine Learning Engineer',
    phase: '04-book-scope',
    decision,
    alternatives: alternativeDefinitions.map(([id, label]) =>
      validAlternative(id, label, retainedId),
    ),
    structure: {
      minimum_structure: prose('Minimum structure'),
      audience: [prose('Audience')],
      prerequisites: [prose('Structure prerequisites')],
      exclusions: [prose('Structure exclusions')],
      dependencies: [prose('Structure dependencies')],
      capstone_model: prose('Capstone model'),
      approximate_depth: prose('Approximate depth'),
      visual_production_implications: [prose('Visual production implication')],
      volumes: Array.from({ length: volumeCount }, (_, index) => validVolume(index + 1)),
    },
    traces: {
      claims: sequence('MLE-CLM-', 22, 3).map((id) => trace(id, 'claim', rejectedId)),
      boundaries: sequence('BND-', 17).map((id) => trace(id, 'boundary', rejectedId)),
      scenarios: sequence('SCN-', 10).map((id) => trace(id, 'scenario', rejectedId)),
    },
    phase05_handoff: {
      next_gate: '05-book-architecture',
      inputs: [prose('Phase 05 input')],
      prohibited_downstream_work: [prose('Prohibited downstream work')],
    },
    sequential_volume_gate:
      decision === 'SINGLE BOOK'
        ? null
        : {
            activation_condition: 'PREVIOUS_VOLUME_ALL_GATES_PASS',
            gates: ['MANUSCRIPT', 'VISUAL', 'PUBLICATION', 'SCREEN-FIRST'],
          },
  };
}

function validVerificationManifest() {
  return {
    schema: 'mle-phase-04-verification/v1',
    reviews: ['TASK-2', 'TASK-3', 'TASK-4'].map((task) => ({
      task,
      reviewed_artifact: prose(`${task} reviewed artifact`),
      review_evidence: prose(`${task} review evidence`),
      spec_verdict: 'SPEC COMPLIANCE PASS',
      quality_verdict: 'QUALITY APPROVED',
    })),
    hostile_integration_review: {
      review_evidence: prose('Task 5 hostile integration review evidence'),
      spec_verdict: 'SPEC COMPLIANCE PASS',
      quality_verdict: 'QUALITY APPROVED',
    },
    checks: {
      new_file_audit: { status: 'PASS' },
      validator_tests: { status: 'PASS' },
      full_repository_check: { status: 'PASS' },
      path_audit: { status: 'PASS', unexpected_paths: [] },
    },
  };
}

function markdown(headings, marker, manifest, options = {}) {
  const headingText = headings.map((heading) => `## ${heading}\n\nEvidence for ${heading}.`).join('\n\n');
  const sequentialHeading = options.sequentialHeading ? '\n\n## Sequential Volume Gate\n\nThe activation rule is explicit.' : '';
  const decisionRecord = options.decisionRecord ? `\n\nDecision: \`${options.decisionRecord}\`` : '';
  const prefix = options.prefix ?? '';
  const suffix = options.suffix ?? '';
  return `${prefix}# Fixture${decisionRecord}\n\n${headingText}${sequentialHeading}\n\n<!-- ${marker}-START -->\n\`\`\`json\n${JSON.stringify(manifest, null, 2)}\n\`\`\`\n<!-- ${marker}-END -->\n${suffix}`;
}

function validInputs(decision = 'SINGLE BOOK') {
  return {
    decision: markdown(
      DECISION_HEADINGS,
      'PHASE04-DECISION-MANIFEST',
      validDecisionManifest(decision),
      { sequentialHeading: decision !== 'SINGLE BOOK', decisionRecord: decision },
    ),
    verification: markdown(
      VERIFICATION_HEADINGS,
      'PHASE04-VERIFICATION-MANIFEST',
      validVerificationManifest(),
    ),
  };
}

function mutateManifest(markdownText, marker, mutate) {
  const pattern = new RegExp(
    '(<!-- ' + marker + '-START -->\\s*\\n\\s*```json\\s*\\n)([\\s\\S]*?)(\\n```\\s*\\n<!-- ' + marker + '-END -->)',
  );
  const match = markdownText.match(pattern);
  assert.ok(match, `fixture contains ${marker}`);
  const manifest = JSON.parse(match[2]);
  mutate(manifest);
  return markdownText.replace(pattern, `$1${JSON.stringify(manifest, null, 2)}$3`);
}

function errorCodes(result) {
  return result.errors.map(({ code }) => code);
}

test('accepts an exact single-book decision and reports canonical counts', () => {
  const result = validatePhase04(validInputs());

  assert.deepEqual(result, {
    ok: true,
    decision: 'SINGLE BOOK',
    counts: {
      alternatives: 4,
      claims: 22,
      boundaries: 17,
      scenarios: 10,
      reviews: 3,
      hostile_reviews: 1,
      checks: 4,
      volumes: 1,
    },
    errors: [],
  });
});

test('requires every exact decision heading once outside fenced blocks', () => {
  const inputs = validInputs();
  inputs.decision = inputs.decision.replace('## Capstone Model\n', '## Capstone Model Removed\n');
  inputs.decision += '\n```markdown\n## Capstone Model\n```\n';

  const result = validatePhase04(inputs);

  assert.ok(errorCodes(result).includes('DECISION_HEADING_COUNT'));
  assert.deepEqual(
    result.errors.find(({ code, path }) => code === 'DECISION_HEADING_COUNT' && path.endsWith('Capstone Model')),
    {
      code: 'DECISION_HEADING_COUNT',
      path: 'decision.headings.Capstone Model',
      message: 'Expected exact H2 heading "Capstone Model" once outside fenced blocks; found 0.',
    },
  );
});

test('rejects duplicate exact headings while ignoring heading-like prose', () => {
  const inputs = validInputs();
  inputs.verification += '\nThe phrase ## Gate Result is prose on a non-heading line.\n\n## Gate Result\n';

  const result = validatePhase04(inputs);

  assert.deepEqual(
    result.errors.find(({ code, path }) => code === 'VERIFICATION_HEADING_COUNT' && path.endsWith('Gate Result')),
    {
      code: 'VERIFICATION_HEADING_COUNT',
      path: 'verification.headings.Gate Result',
      message: 'Expected exact H2 heading "Gate Result" once outside fenced blocks; found 2.',
    },
  );
});

test('requires exactly one marked decision manifest outside fenced blocks', () => {
  const inputs = validInputs();
  inputs.decision = inputs.decision.replace(
    '<!-- PHASE04-DECISION-MANIFEST-START -->',
    '<!-- REMOVED-DECISION-MANIFEST-START -->',
  );
  inputs.decision += '\n```markdown\n<!-- PHASE04-DECISION-MANIFEST-START -->\n```json\n{}\n```\n<!-- PHASE04-DECISION-MANIFEST-END -->\n```\n';

  const result = validatePhase04(inputs);

  assert.deepEqual(result.errors[0], {
    code: 'DECISION_MANIFEST_COUNT',
    path: 'decision.manifest',
    message: 'Expected exactly one PHASE04-DECISION-MANIFEST block outside fenced blocks; found 0.',
  });
});

test('rejects multiple marked manifests deterministically', () => {
  const inputs = validInputs();
  inputs.verification += `\n<!-- PHASE04-VERIFICATION-MANIFEST-START -->\n\`\`\`json\n{}\n\`\`\`\n<!-- PHASE04-VERIFICATION-MANIFEST-END -->\n`;

  const result = validatePhase04(inputs);

  assert.deepEqual(
    result.errors.find(({ code }) => code === 'VERIFICATION_MANIFEST_COUNT'),
    {
      code: 'VERIFICATION_MANIFEST_COUNT',
      path: 'verification.manifest',
      message: 'Expected exactly one PHASE04-VERIFICATION-MANIFEST block outside fenced blocks; found 2.',
    },
  );
});

test('rejects malformed JSON in the uniquely marked manifest', () => {
  const inputs = validInputs();
  inputs.decision = inputs.decision.replace('"schema": "mle-phase-04-scope/v1"', '"schema":');

  const result = validatePhase04(inputs);

  assert.equal(result.errors[0].code, 'DECISION_MANIFEST_JSON');
  assert.equal(result.errors[0].path, 'decision.manifest');
});

test('rejects an invalid decision enum and invalid controlling metadata', () => {
  const inputs = validInputs();
  inputs.decision = mutateManifest(inputs.decision, 'PHASE04-DECISION-MANIFEST', (manifest) => {
    manifest.decision = 'FIVE BOOKS';
    manifest.phase = '05-book-architecture';
  });

  const result = validatePhase04(inputs);

  assert.ok(errorCodes(result).includes('DECISION_ENUM'));
  assert.ok(errorCodes(result).includes('DECISION_METADATA'));
});

test('requires one exact prose Decision record matching the manifest verdict', () => {
  for (const mutation of ['missing', 'duplicate', 'mismatch']) {
    const inputs = validInputs();
    if (mutation === 'missing') inputs.decision = inputs.decision.replace('Decision: `SINGLE BOOK`', 'Decision record removed.');
    if (mutation === 'duplicate') inputs.decision += '\nDecision: `SINGLE BOOK`\n';
    if (mutation === 'mismatch') inputs.decision = inputs.decision.replace('Decision: `SINGLE BOOK`', 'Decision: `2-VOLUME SERIES`');

    const result = validatePhase04(inputs);
    assert.ok(
      errorCodes(result).includes(mutation === 'mismatch' ? 'DECISION_RECORD_MATCH' : 'DECISION_RECORD_COUNT'),
      mutation,
    );
  }
});

test('requires the four exact alternatives without duplicate, extra, or longer-token IDs', () => {
  for (const mutation of ['missing', 'duplicate', 'extra', 'longer']) {
    const inputs = validInputs();
    inputs.decision = mutateManifest(inputs.decision, 'PHASE04-DECISION-MANIFEST', (manifest) => {
      if (mutation === 'missing') manifest.alternatives.pop();
      if (mutation === 'duplicate') manifest.alternatives[3].id = 'ALT-3V';
      if (mutation === 'extra') manifest.alternatives.push(validAlternative('ALT-5V', '5-VOLUME SERIES', 'ALT-SINGLE'));
      if (mutation === 'longer') manifest.alternatives[3].id = 'ALT-4PLUS-EXTRA';
    });

    const result = validatePhase04(inputs);
    assert.ok(errorCodes(result).includes('ALTERNATIVE_IDS'), mutation);
  }
});

test('requires exactly one retained alternative matching the decision', () => {
  const inputs = validInputs();
  inputs.decision = mutateManifest(inputs.decision, 'PHASE04-DECISION-MANIFEST', (manifest) => {
    manifest.alternatives[0].disposition = 'REJECTED';
    manifest.alternatives[1].disposition = 'RETAINED';
  });

  const result = validatePhase04(inputs);

  assert.ok(errorCodes(result).includes('ALTERNATIVE_RETAINED_MATCH'));
});

test('requires every alternative and volume contract field to be nonempty', () => {
  const inputs = validInputs();
  inputs.decision = mutateManifest(inputs.decision, 'PHASE04-DECISION-MANIFEST', (manifest) => {
    manifest.alternatives[2].capstone_transformation = '   ';
    delete manifest.structure.volumes[0].no_reteaching_rule;
  });

  const result = validatePhase04(inputs);

  assert.ok(errorCodes(result).includes('ALTERNATIVE_FIELD'));
  assert.ok(errorCodes(result).includes('VOLUME_FIELD'));
});

test('rejects missing, duplicate, extra, and longer-token claim IDs', () => {
  for (const mutation of ['missing', 'duplicate', 'extra', 'longer']) {
    const inputs = validInputs();
    inputs.decision = mutateManifest(inputs.decision, 'PHASE04-DECISION-MANIFEST', (manifest) => {
      if (mutation === 'missing') manifest.traces.claims.pop();
      if (mutation === 'duplicate') manifest.traces.claims[21].id = 'MLE-CLM-021';
      if (mutation === 'extra') manifest.traces.claims.push(trace('MLE-CLM-023', 'claim'));
      if (mutation === 'longer') manifest.traces.claims[21].id = 'MLE-CLM-0220';
    });

    const result = validatePhase04(inputs);
    assert.ok(errorCodes(result).includes('CLAIM_TRACE_IDS'), mutation);
  }
});

test('rejects missing, duplicate, extra, and longer-token boundary IDs', () => {
  for (const mutation of ['missing', 'duplicate', 'extra', 'longer']) {
    const inputs = validInputs();
    inputs.decision = mutateManifest(inputs.decision, 'PHASE04-DECISION-MANIFEST', (manifest) => {
      if (mutation === 'missing') manifest.traces.boundaries.pop();
      if (mutation === 'duplicate') manifest.traces.boundaries[16].id = 'BND-16';
      if (mutation === 'extra') manifest.traces.boundaries.push(trace('BND-18', 'boundary'));
      if (mutation === 'longer') manifest.traces.boundaries[16].id = 'BND-017';
    });

    const result = validatePhase04(inputs);
    assert.ok(errorCodes(result).includes('BOUNDARY_TRACE_IDS'), mutation);
  }
});

test('rejects missing, duplicate, extra, and longer-token scenario IDs', () => {
  for (const mutation of ['missing', 'duplicate', 'extra', 'longer']) {
    const inputs = validInputs();
    inputs.decision = mutateManifest(inputs.decision, 'PHASE04-DECISION-MANIFEST', (manifest) => {
      if (mutation === 'missing') manifest.traces.scenarios.pop();
      if (mutation === 'duplicate') manifest.traces.scenarios[9].id = 'SCN-09';
      if (mutation === 'extra') manifest.traces.scenarios.push(trace('SCN-11', 'scenario'));
      if (mutation === 'longer') manifest.traces.scenarios[9].id = 'SCN-010';
    });

    const result = validatePhase04(inputs);
    assert.ok(errorCodes(result).includes('SCENARIO_TRACE_IDS'), mutation);
  }
});

test('does not count fake trace IDs in prose or fenced examples', () => {
  const inputs = validInputs();
  inputs.decision = mutateManifest(inputs.decision, 'PHASE04-DECISION-MANIFEST', (manifest) => {
    manifest.traces.claims.pop();
    manifest.traces.boundaries.pop();
    manifest.traces.scenarios.pop();
  });
  inputs.decision += '\nMLE-CLM-022 BND-17 SCN-10\n\n```text\nMLE-CLM-022 BND-17 SCN-10\n```\n';

  const result = validatePhase04(inputs);

  assert.ok(errorCodes(result).includes('CLAIM_TRACE_IDS'));
  assert.ok(errorCodes(result).includes('BOUNDARY_TRACE_IDS'));
  assert.ok(errorCodes(result).includes('SCENARIO_TRACE_IDS'));
});

test('rejects a claim ID whose accepted meaning is replaced by unrelated prose', () => {
  const inputs = validInputs();
  inputs.decision = mutateManifest(inputs.decision, 'PHASE04-DECISION-MANIFEST', (manifest) => {
    manifest.traces.claims[7].accepted_statement = 'This record is about office catering and has no accepted MLE claim meaning.';
  });

  const result = validatePhase04(inputs);

  assert.ok(errorCodes(result).includes('CLAIM_SEMANTICS'));
});

test('rejects scenario identity or authority replacement with unrelated nonempty prose', () => {
  const inputs = validInputs();
  inputs.decision = mutateManifest(inputs.decision, 'PHASE04-DECISION-MANIFEST', (manifest) => {
    manifest.traces.scenarios[3].accepted_scenario = 'A cafeteria changes its lunch menu.';
    manifest.traces.scenarios[5].authority_owner = 'Office Manager';
  });

  const result = validatePhase04(inputs);

  assert.ok(errorCodes(result).includes('SCENARIO_SEMANTICS'));
  assert.ok(errorCodes(result).includes('SCENARIO_AUTHORITY'));
});

test('rejects SCN-05 when AI Evaluation Engineer authority is omitted', () => {
  const inputs = validInputs();
  inputs.decision = mutateManifest(inputs.decision, 'PHASE04-DECISION-MANIFEST', (manifest) => {
    manifest.traces.scenarios[4].authority_owner = 'LLM Engineer';
  });

  assert.ok(errorCodes(validatePhase04(inputs)).includes('SCENARIO_AUTHORITY'));
});

test('rejects claim, boundary, and scenario cluster-set loss or addition', () => {
  for (const mutation of ['loss', 'addition']) {
    const inputs = validInputs();
    inputs.decision = mutateManifest(inputs.decision, 'PHASE04-DECISION-MANIFEST', (manifest) => {
      for (const record of [manifest.traces.claims[1], manifest.traces.boundaries[0], manifest.traces.scenarios[0]]) {
        if (mutation === 'loss') record.retained_clusters.pop();
        else record.retained_clusters.push('LC-02');
      }
    });

    const result = validatePhase04(inputs);
    assert.equal(errorCodes(result).filter((code) => code === 'TRACE_CLUSTER_SET').length, 3, mutation);
  }
});

test('treats accepted cluster contracts as duplicate-free sets rather than narrative order', () => {
  const reordered = validInputs();
  reordered.decision = mutateManifest(reordered.decision, 'PHASE04-DECISION-MANIFEST', (manifest) => {
    manifest.traces.claims[1].retained_clusters.reverse();
    manifest.traces.boundaries[0].retained_clusters.reverse();
    manifest.traces.scenarios[0].retained_clusters.reverse();
  });
  assert.equal(validatePhase04(reordered).ok, true);

  const duplicated = validInputs();
  duplicated.decision = mutateManifest(duplicated.decision, 'PHASE04-DECISION-MANIFEST', (manifest) => {
    manifest.traces.claims[1].retained_clusters.push(manifest.traces.claims[1].retained_clusters[0]);
  });
  assert.ok(errorCodes(validatePhase04(duplicated)).includes('TRACE_CLUSTER_SET'));
});

test('requires nonempty trace fields and references only rejected alternatives', () => {
  const inputs = validInputs();
  inputs.decision = mutateManifest(inputs.decision, 'PHASE04-DECISION-MANIFEST', (manifest) => {
    manifest.traces.claims[0].retained_clusters = [];
    manifest.traces.boundaries[0].alternative_effect = '';
    manifest.traces.scenarios[0].alternative_effect = 'ALT-SINGLE is retained.';
  });

  const result = validatePhase04(inputs);

  assert.equal(errorCodes(result).filter((code) => code === 'TRACE_FIELD').length, 3);
});

test('requires exact Task 2, 3, and 4 accepted review records', () => {
  const inputs = validInputs();
  inputs.verification = mutateManifest(
    inputs.verification,
    'PHASE04-VERIFICATION-MANIFEST',
    (manifest) => {
      manifest.reviews[1].task = 'TASK-2';
      manifest.reviews[2].quality_verdict = 'CHANGES REQUESTED';
    },
  );

  const result = validatePhase04(inputs);

  assert.ok(errorCodes(result).includes('REVIEW_TASK_IDS'));
  assert.ok(errorCodes(result).includes('REVIEW_VERDICT'));
});

test('requires one accepted hostile Task 5 integration review', () => {
  for (const mutation of ['missing', 'empty-evidence', 'failed-spec', 'failed-quality']) {
    const inputs = validInputs();
    inputs.verification = mutateManifest(
      inputs.verification,
      'PHASE04-VERIFICATION-MANIFEST',
      (manifest) => {
        if (mutation === 'missing') delete manifest.hostile_integration_review;
        if (mutation === 'empty-evidence') manifest.hostile_integration_review.review_evidence = ' ';
        if (mutation === 'failed-spec') manifest.hostile_integration_review.spec_verdict = 'SPEC COMPLIANCE FAIL';
        if (mutation === 'failed-quality') manifest.hostile_integration_review.quality_verdict = 'CHANGES REQUESTED';
      },
    );

    assert.ok(errorCodes(validatePhase04(inputs)).includes('HOSTILE_REVIEW'), mutation);
  }
});

test('requires explicit PASS records for all four executable checks', () => {
  const inputs = validInputs();
  inputs.verification = mutateManifest(
    inputs.verification,
    'PHASE04-VERIFICATION-MANIFEST',
    (manifest) => {
      delete manifest.checks.validator_tests;
      manifest.checks.full_repository_check.status = 'FAIL';
    },
  );

  const result = validatePhase04(inputs);

  assert.ok(errorCodes(result).includes('CHECK_RECORD'));
  assert.ok(errorCodes(result).includes('CHECK_STATUS'));
});

test('requires a passing path audit with no unexpected paths', () => {
  const inputs = validInputs();
  inputs.verification = mutateManifest(
    inputs.verification,
    'PHASE04-VERIFICATION-MANIFEST',
    (manifest) => {
      manifest.checks.path_audit.unexpected_paths = ['src/content/books/forbidden.md'];
    },
  );

  const result = validatePhase04(inputs);

  assert.deepEqual(
    result.errors.find(({ code }) => code === 'PATH_AUDIT_UNEXPECTED'),
    {
      code: 'PATH_AUDIT_UNEXPECTED',
      path: 'verification.manifest.checks.path_audit.unexpected_paths',
      message: 'Path audit must contain an empty unexpected_paths array.',
    },
  );
});

test('accepts exact sequential gates and contiguous volumes for every multi-volume enum', () => {
  for (const decision of ['2-VOLUME SERIES', '3-VOLUME SERIES', '4+-VOLUME SERIES']) {
    const result = validatePhase04(validInputs(decision));
    assert.equal(result.ok, true, `${decision}: ${JSON.stringify(result.errors)}`);
  }
});

test('rejects noncontiguous multi-volume IDs and incomplete sequential gates', () => {
  const inputs = validInputs('3-VOLUME SERIES');
  inputs.decision = mutateManifest(inputs.decision, 'PHASE04-DECISION-MANIFEST', (manifest) => {
    manifest.structure.volumes[1].id = 'VOLUME-3';
    manifest.sequential_volume_gate.activation_condition = 'MANUAL_APPROVAL';
    manifest.sequential_volume_gate.gates.pop();
  });

  const result = validatePhase04(inputs);

  assert.ok(errorCodes(result).includes('VOLUME_IDS'));
  assert.ok(errorCodes(result).includes('SEQUENTIAL_VOLUME_GATE'));
});

test('forbids a sequential volume gate and heading for a single book', () => {
  const inputs = validInputs();
  inputs.decision = mutateManifest(inputs.decision, 'PHASE04-DECISION-MANIFEST', (manifest) => {
    manifest.sequential_volume_gate = {
      activation_condition: 'PREVIOUS_VOLUME_ALL_GATES_PASS',
      gates: ['MANUSCRIPT', 'VISUAL', 'PUBLICATION', 'SCREEN-FIRST'],
    };
  });
  inputs.decision = inputs.decision.replace(
    '## Phase 05 Handoff',
    '## Sequential Volume Gate\n\nNot applicable.\n\n## Phase 05 Handoff',
  );

  const result = validatePhase04(inputs);

  assert.ok(errorCodes(result).includes('SINGLE_SEQUENTIAL_GATE'));
  assert.ok(errorCodes(result).includes('SINGLE_SEQUENTIAL_HEADING'));
});

test('requires the Sequential Volume Gate heading for multi-volume decisions', () => {
  const inputs = validInputs('2-VOLUME SERIES');
  inputs.decision = inputs.decision.replace(
    '\n\n## Sequential Volume Gate\n\nThe activation rule is explicit.',
    '',
  );

  const result = validatePhase04(inputs);

  assert.ok(errorCodes(result).includes('MULTI_SEQUENTIAL_HEADING'));
});

test('CLI reads adjacent canonical files and reports exact accepted counts', async (t) => {
  const directory = await mkdtemp(path.join(tmpdir(), 'mle-phase04-validator-'));
  t.after(() => rm(directory, { recursive: true, force: true }));
  const sourceScript = fileURLToPath(new URL('./validate-phase-04.mjs', import.meta.url));
  const script = path.join(directory, 'validate-phase-04.mjs');
  const inputs = validInputs();
  await Promise.all([
    copyFile(sourceScript, script),
    writeFile(path.join(directory, 'book-scope-decision.md'), inputs.decision),
    writeFile(path.join(directory, 'phase-04-verification.md'), inputs.verification),
  ]);

  const run = spawnSync(process.execPath, [script], { encoding: 'utf8' });

  assert.equal(run.status, 0, run.stderr);
  assert.equal(
    run.stdout.trim(),
    'Phase 04 scope validation PASS: decision=SINGLE BOOK; alternatives=4/4; claims=22/22; boundaries=17/17; scenarios=10/10; reviews=3/3; hostile_reviews=1/1; checks=4/4; volumes=1.',
  );
});
