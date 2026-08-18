import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SOURCE_ID = /^MLE-SRC-\d{3}$/;
const CLAIM_ID = /^MLE-CLM-\d{3}$/;
const EMPLOYER_SOURCE = /^official-employer-/;
const TECHNICAL_SOURCE = /^(official-(documentation|standard|specification|engineering-publication|government-framework|government-guidance|postmortem|research-publication)|primary-(paper|research))$/;
const VERDICT = /##\s+Verdict[\s\S]{0,240}\b(PROCEED|RENAME TO|MERGE WITH|KEEP AS SPECIALIZATION|REJECT)\b/;
const BOUNDARY_VOCABULARY = [
  'CORE HERE',
  'SHARED AT DIFFERENT DEPTH',
  'SUPPORTING',
  'OUT OF SCOPE',
];

function issue(code, message) {
  return { code, message };
}

function duplicateValues(values) {
  const seen = new Set();
  const duplicates = new Set();
  for (const value of values) {
    if (seen.has(value)) duplicates.add(value);
    seen.add(value);
  }
  return [...duplicates];
}

export function validatePhase01({ register, roleValidation, adjacentBoundary }) {
  const errors = [];
  const sources = Array.isArray(register?.sources) ? register.sources : [];
  const claims = Array.isArray(register?.claims) ? register.claims : [];

  if (register?.role !== 'Machine Learning Engineer') {
    errors.push(issue('IDENTITY_ROLE', 'role must be Machine Learning Engineer'));
  }
  if (register?.role_slug !== 'machine-learning-engineer') {
    errors.push(issue('IDENTITY_SLUG', 'role_slug must be machine-learning-engineer'));
  }
  if (register?.phase !== '01-role-validation') {
    errors.push(issue('IDENTITY_PHASE', 'phase must be 01-role-validation'));
  }
  if (register?.access_date !== '2026-08-18') {
    errors.push(issue('IDENTITY_ACCESS_DATE', 'access_date must be 2026-08-18'));
  }
  if (sources.length < 30) {
    errors.push(issue('SOURCE_COUNT', `expected at least 30 sources, found ${sources.length}`));
  }
  if (claims.length < 20) {
    errors.push(issue('CLAIM_COUNT', `expected at least 20 claims, found ${claims.length}`));
  }

  const sourceIds = sources.map((source) => source?.source_id);
  const claimIds = claims.map((claim) => claim?.claim_id);
  const duplicateSourceIds = duplicateValues(sourceIds);
  const duplicateClaimIds = duplicateValues(claimIds);
  if (duplicateSourceIds.length) {
    errors.push(issue('SOURCE_ID_DUPLICATE', `duplicate source IDs: ${duplicateSourceIds.join(', ')}`));
  }
  if (duplicateClaimIds.length) {
    errors.push(issue('CLAIM_ID_DUPLICATE', `duplicate claim IDs: ${duplicateClaimIds.join(', ')}`));
  }
  if (sourceIds.some((id) => !SOURCE_ID.test(id ?? ''))) {
    errors.push(issue('SOURCE_ID_FORMAT', 'every source ID must match MLE-SRC-###'));
  }
  if (claimIds.some((id) => !CLAIM_ID.test(id ?? ''))) {
    errors.push(issue('CLAIM_ID_FORMAT', 'every claim ID must match MLE-CLM-###'));
  }

  const sourceById = new Map(sources.map((source) => [source.source_id, source]));
  const claimById = new Map(claims.map((claim) => [claim.claim_id, claim]));

  for (const source of sources) {
    if (!Array.isArray(source.claims_supported) || source.claims_supported.length === 0) {
      errors.push(issue('SOURCE_CLAIMS_EMPTY', `${source.source_id ?? 'unknown source'} has no claims_supported`));
    }
    if (typeof source.limitations !== 'string' || !source.limitations.trim()) {
      errors.push(issue('SOURCE_LIMITATION', `${source.source_id ?? 'unknown source'} has no limitation`));
    }
    if (typeof source.verification_status !== 'string' || !source.verification_status.trim()) {
      errors.push(issue('SOURCE_VERIFICATION', `${source.source_id ?? 'unknown source'} has no verification status`));
    }
    if (typeof source.url_or_identifier !== 'string' || !/^https?:\/\//.test(source.url_or_identifier)) {
      errors.push(issue('SOURCE_URL', `${source.source_id ?? 'unknown source'} does not use an HTTP URL`));
    }
    for (const claimIdValue of source.claims_supported ?? []) {
      const claim = claimById.get(claimIdValue);
      if (!claim) {
        errors.push(issue('SOURCE_CLAIM_UNKNOWN', `${source.source_id} references unknown ${claimIdValue}`));
      } else if (!claim.source_ids?.includes(source.source_id)) {
        errors.push(issue('REFERENCE_ASYMMETRY', `${source.source_id} and ${claimIdValue} are not bidirectional`));
      }
    }
  }

  for (const claim of claims) {
    if (!Array.isArray(claim.source_ids) || claim.source_ids.length < 2) {
      errors.push(issue('CLAIM_SOURCES_MINIMUM', `${claim.claim_id ?? 'unknown claim'} needs at least two sources`));
    }
    for (const sourceIdValue of claim.source_ids ?? []) {
      const source = sourceById.get(sourceIdValue);
      if (!source) {
        errors.push(issue('CLAIM_SOURCE_UNKNOWN', `${claim.claim_id} references unknown ${sourceIdValue}`));
      } else if (!source.claims_supported?.includes(claim.claim_id)) {
        errors.push(issue('REFERENCE_ASYMMETRY', `${claim.claim_id} and ${sourceIdValue} are not bidirectional`));
      }
    }
  }

  const employerSources = sources.filter((source) => EMPLOYER_SOURCE.test(source.source_type ?? ''));
  if (employerSources.length < 8) {
    errors.push(issue('EMPLOYER_SOURCE_COUNT', `expected at least 8 employer role sources, found ${employerSources.length}`));
  }
  const employerOrganizations = new Set(employerSources.map((source) => source.author_or_org).filter(Boolean));
  if (employerOrganizations.size < 6) {
    errors.push(issue('EMPLOYER_ORG_COUNT', `expected at least 6 employer organizations, found ${employerOrganizations.size}`));
  }
  const technicalSources = sources.filter((source) => TECHNICAL_SOURCE.test(source.source_type ?? ''));
  if (technicalSources.length < 12) {
    errors.push(issue('TECHNICAL_SOURCE_COUNT', `expected at least 12 official technical or standards sources, found ${technicalSources.length}`));
  }

  if (!VERDICT.test(roleValidation ?? '')) {
    errors.push(issue('VERDICT', 'role validation lacks an allowed verdict under a Verdict heading'));
  }
  for (const id of claimIds.filter((value) => CLAIM_ID.test(value ?? ''))) {
    if (!(roleValidation ?? '').includes(id) && !(adjacentBoundary ?? '').includes(id)) {
      errors.push(issue('CLAIM_MARKDOWN_COVERAGE', `${id} is absent from both canonical markdown files`));
    }
  }
  for (const classification of BOUNDARY_VOCABULARY) {
    if (!(adjacentBoundary ?? '').includes(classification)) {
      errors.push(issue('BOUNDARY_VOCABULARY', `adjacent boundary is missing ${classification}`));
    }
  }

  return errors;
}

function runCli() {
  const directory = path.dirname(fileURLToPath(import.meta.url));
  const register = JSON.parse(fs.readFileSync(path.join(directory, 'evidence-register.json'), 'utf8'));
  const roleValidation = fs.readFileSync(path.join(directory, 'role-validation.md'), 'utf8');
  const adjacentBoundary = fs.readFileSync(path.join(directory, 'adjacent-role-boundary.md'), 'utf8');
  const errors = validatePhase01({ register, roleValidation, adjacentBoundary });
  const report = {
    status: errors.length === 0 ? 'PASS' : 'FAIL',
    sources: register.sources?.length ?? 0,
    claims: register.claims?.length ?? 0,
    errors,
  };
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
  if (errors.length) process.exitCode = 1;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  runCli();
}
