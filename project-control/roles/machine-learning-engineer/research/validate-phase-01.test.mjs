import assert from 'node:assert/strict';
import test from 'node:test';

import { validatePhase01 } from './validate-phase-01.mjs';

function sourceId(index) {
  return `MLE-SRC-${String(index).padStart(3, '0')}`;
}

function claimId(index) {
  return `MLE-CLM-${String(index).padStart(3, '0')}`;
}

function makeValidInput() {
  const sources = Array.from({ length: 30 }, (_, offset) => {
    const index = offset + 1;
    const employer = index <= 8;
    const technical = index >= 9 && index <= 20;
    return {
      source_id: sourceId(index),
      title: `Primary source ${index}`,
      author_or_org: employer ? `Employer ${((index - 1) % 6) + 1}` : `Technical organization ${index}`,
      source_type: employer
        ? 'official-employer-job-description'
        : technical
          ? 'official-documentation'
          : 'official-occupational-context',
      publication_date: null,
      access_date: '2026-08-18',
      url_or_identifier: `https://official-source-${index}.invalid/evidence`,
      role: 'Machine Learning Engineer',
      domains: [employer ? 'role-definition' : 'technical-practice'],
      claims_supported: [],
      evidence_summary: `Evidence summary ${index}.`,
      limitations: `Bounded limitation ${index}.`,
      currentness: 'verified on access date',
      verification_status: 'verified-live',
    };
  });

  const claims = Array.from({ length: 20 }, (_, offset) => {
    const index = offset + 1;
    const ids = [sourceId(index), sourceId(((index + 9) % 30) + 1)];
    for (const id of ids) {
      sources.find((source) => source.source_id === id).claims_supported.push(claimId(index));
    }
    return {
      claim_id: claimId(index),
      statement: `Material role claim ${index}.`,
      source_ids: ids,
      evidence_strength: 'corroborated-primary',
      volatility: 'bounded',
      limitations: `Claim limitation ${index}.`,
    };
  });

  const allClaims = claims.map((claim) => claim.claim_id).join(' ');
  return {
    register: {
      register_version: '1.0.0',
      role: 'Machine Learning Engineer',
      role_slug: 'machine-learning-engineer',
      phase: '01-role-validation',
      access_date: '2026-08-18',
      method: {
        scope: 'Official primary evidence.',
        source_policy: 'Primary and official sources only.',
        currentness_note: 'Volatile sources require rechecking.',
      },
      sources,
      claims,
    },
    roleValidation: `# Role Validation\n\n## Verdict\n\n**PROCEED**\n\n${allClaims}`,
    adjacentBoundary: `# Adjacent Boundary\n\nCORE HERE\nSHARED AT DIFFERENT DEPTH\nSUPPORTING\nOUT OF SCOPE\n\n${allClaims}`,
  };
}

function errorCodes(input) {
  return validatePhase01(input).map((error) => error.code);
}

test('accepts a complete, symmetrical Phase 01 evidence package', () => {
  assert.deepEqual(validatePhase01(makeValidInput()), []);
});

const invalidCases = [
  ['rejects the wrong role identity', (input) => { input.register.role = 'ML Developer'; }, 'IDENTITY_ROLE'],
  ['rejects the wrong role slug', (input) => { input.register.role_slug = 'ml-developer'; }, 'IDENTITY_SLUG'],
  ['rejects fewer than thirty sources', (input) => { input.register.sources.length = 29; }, 'SOURCE_COUNT'],
  ['rejects fewer than twenty claims', (input) => { input.register.claims.length = 19; }, 'CLAIM_COUNT'],
  ['rejects duplicate source identifiers', (input) => { input.register.sources[1].source_id = input.register.sources[0].source_id; }, 'SOURCE_ID_DUPLICATE'],
  ['rejects duplicate claim identifiers', (input) => { input.register.claims[1].claim_id = input.register.claims[0].claim_id; }, 'CLAIM_ID_DUPLICATE'],
  ['rejects malformed source identifiers', (input) => { input.register.sources[0].source_id = 'SOURCE-1'; }, 'SOURCE_ID_FORMAT'],
  ['rejects malformed claim identifiers', (input) => { input.register.claims[0].claim_id = 'CLAIM-1'; }, 'CLAIM_ID_FORMAT'],
  ['rejects a source without reverse claim links', (input) => { input.register.sources[0].claims_supported = []; }, 'SOURCE_CLAIMS_EMPTY'],
  ['rejects a claim with fewer than two sources', (input) => { input.register.claims[0].source_ids = [input.register.claims[0].source_ids[0]]; }, 'CLAIM_SOURCES_MINIMUM'],
  ['rejects an unknown forward source reference', (input) => { input.register.claims[0].source_ids[0] = 'MLE-SRC-999'; }, 'CLAIM_SOURCE_UNKNOWN'],
  ['rejects an unknown reverse claim reference', (input) => { input.register.sources[0].claims_supported.push('MLE-CLM-999'); }, 'SOURCE_CLAIM_UNKNOWN'],
  ['rejects asymmetric source and claim references', (input) => { input.register.sources[0].claims_supported = input.register.sources[0].claims_supported.filter((id) => id !== 'MLE-CLM-001'); }, 'REFERENCE_ASYMMETRY'],
  ['rejects a source without a limitation', (input) => { input.register.sources[0].limitations = ''; }, 'SOURCE_LIMITATION'],
  ['rejects a source without verification status', (input) => { input.register.sources[0].verification_status = ''; }, 'SOURCE_VERIFICATION'],
  ['rejects a non-http source identifier', (input) => { input.register.sources[0].url_or_identifier = 'isbn:123'; }, 'SOURCE_URL'],
  ['rejects fewer than eight employer role sources', (input) => { input.register.sources[7].source_type = 'primary-paper'; }, 'EMPLOYER_SOURCE_COUNT'],
  ['rejects fewer than six employer organizations', (input) => { for (const source of input.register.sources.slice(0, 8)) source.author_or_org = 'One Employer'; }, 'EMPLOYER_ORG_COUNT'],
  ['rejects fewer than twelve official technical or standards sources', (input) => { input.register.sources[19].source_type = 'official-employer-job-description'; }, 'TECHNICAL_SOURCE_COUNT'],
  ['rejects a missing allowed verdict', (input) => { input.roleValidation = input.roleValidation.replace('**PROCEED**', '**PENDING**'); }, 'VERDICT'],
  ['rejects a claim absent from both canonical markdown files', (input) => { input.roleValidation = input.roleValidation.replaceAll('MLE-CLM-020', ''); input.adjacentBoundary = input.adjacentBoundary.replaceAll('MLE-CLM-020', ''); }, 'CLAIM_MARKDOWN_COVERAGE'],
  ['rejects missing adjacent-role classification vocabulary', (input) => { input.adjacentBoundary = input.adjacentBoundary.replace('OUT OF SCOPE', ''); }, 'BOUNDARY_VOCABULARY'],
];

for (const [name, mutate, expectedCode] of invalidCases) {
  test(name, () => {
    const input = makeValidInput();
    mutate(input);
    assert.ok(errorCodes(input).includes(expectedCode), `expected ${expectedCode}`);
  });
}
