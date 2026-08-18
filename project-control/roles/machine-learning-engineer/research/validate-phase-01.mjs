import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SOURCE_ID = /^MLE-SRC-\d{3}$/;
const CLAIM_ID = /^MLE-CLM-\d{3}$/;
const EMPLOYER_SOURCE = /^(official-employer-|employer-controlled-)/;
const TECHNICAL_SOURCE = /^(official-(documentation|standard|specification|engineering-publication|government-framework|government-guidance|postmortem|research-publication)|primary-(paper|research))$/;
const APPROVED_CATALOG_ROLES = new Set([
  'Forward Deployed Engineer',
  'Applied AI Engineer',
  'Agentic AI Engineer',
  'LLM Engineer',
  'Machine Learning Engineer',
  'AI Research Engineer',
  'AI Evaluation Engineer',
  'Applied Scientist',
  'Data Scientist',
  'Data Engineer',
  'Analytics Engineer',
  'Data Platform Engineer',
  'Data Architect',
  'MLOps Engineer',
  'Machine Learning Platform Engineer',
  'Machine Learning Infrastructure Engineer',
  'AI Reliability Engineer',
  'AI Performance Engineer',
  'AI Security Engineer',
  'AI Red Team Engineer',
  'AI Safety Engineer',
  'AI Governance Specialist',
  'Solutions Architect',
  'AI Solutions Architect',
  'Enterprise Architect',
  'Software Architect',
  'Cloud Architect',
  'Security Architect',
  'Cloud Engineer',
  'DevOps Engineer',
  'Platform Engineer',
  'Site Reliability Engineer',
]);
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

function hasText(value) {
  return typeof value === 'string' && Boolean(value.trim());
}

function claimTokens(markdown) {
  return new Set(String(markdown ?? '').match(/MLE-CLM-\d{3}(?!\d)/g) ?? []);
}

function extractVerdict(markdown) {
  const lines = String(markdown ?? '').split(/\r?\n/);
  const heading = lines.findIndex((line) => /^##\s+Verdict\s*$/i.test(line.trim()));
  if (heading === -1) return '';
  const line = lines.slice(heading + 1).find((candidate) => candidate.trim());
  return line ? line.replaceAll('**', '').trim() : '';
}

function isAllowedVerdict(verdict) {
  const mergeTarget = verdict.startsWith('MERGE WITH ') ? verdict.slice('MERGE WITH '.length) : '';
  return verdict === 'PROCEED'
    || verdict === 'KEEP AS SPECIALIZATION'
    || verdict === 'REJECT'
    || /^RENAME TO\s+\S(?:.*\S)?$/.test(verdict)
    || APPROVED_CATALOG_ROLES.has(mergeTarget);
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
    if (new Set(source.claims_supported ?? []).size !== (source.claims_supported ?? []).length) {
      errors.push(issue('SOURCE_CLAIM_DUPLICATE', `${source.source_id ?? 'unknown source'} repeats a claim relationship`));
    }
    if (!hasText(source.title)) {
      errors.push(issue('SOURCE_TITLE', `${source.source_id ?? 'unknown source'} has no title`));
    }
    if (!hasText(source.author_or_org)) {
      errors.push(issue('SOURCE_ORGANIZATION', `${source.source_id ?? 'unknown source'} has no author or organization`));
    }
    if (!hasText(source.source_type)) {
      errors.push(issue('SOURCE_TYPE', `${source.source_id ?? 'unknown source'} has no source type`));
    }
    if (source.access_date !== register.access_date) {
      errors.push(issue('SOURCE_ACCESS_DATE', `${source.source_id ?? 'unknown source'} access date must match the register`));
    }
    if (source.role !== register.role) {
      errors.push(issue('SOURCE_ROLE', `${source.source_id ?? 'unknown source'} role must match the register`));
    }
    if (!Array.isArray(source.domains) || source.domains.length === 0 || source.domains.some((domain) => !hasText(domain))) {
      errors.push(issue('SOURCE_DOMAINS', `${source.source_id ?? 'unknown source'} needs at least one named domain`));
    }
    if (!hasText(source.evidence_summary)) {
      errors.push(issue('SOURCE_EVIDENCE_SUMMARY', `${source.source_id ?? 'unknown source'} has no evidence summary`));
    }
    if (!hasText(source.currentness)) {
      errors.push(issue('SOURCE_CURRENTNESS', `${source.source_id ?? 'unknown source'} has no currentness record`));
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
    if (new Set(claim.source_ids ?? []).size < 2) {
      errors.push(issue('CLAIM_SOURCES_UNIQUE', `${claim.claim_id ?? 'unknown claim'} needs two distinct sources`));
    }
    if (new Set(claim.source_ids ?? []).size !== (claim.source_ids ?? []).length) {
      errors.push(issue('CLAIM_SOURCE_DUPLICATE', `${claim.claim_id ?? 'unknown claim'} repeats a source relationship`));
    }
    const supportingOrganizations = new Set(
      (claim.source_ids ?? [])
        .map((sourceIdValue) => sourceById.get(sourceIdValue)?.author_or_org)
        .filter(hasText),
    );
    if (supportingOrganizations.size < 2) {
      errors.push(issue('CLAIM_ORG_INDEPENDENCE', `${claim.claim_id ?? 'unknown claim'} needs evidence from two organizations`));
    }
    if (typeof claim.limitations !== 'string' || !claim.limitations.trim()) {
      errors.push(issue('CLAIM_LIMITATION', `${claim.claim_id ?? 'unknown claim'} has no limitation`));
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

  if (!isAllowedVerdict(extractVerdict(roleValidation))) {
    errors.push(issue('VERDICT', 'role validation lacks an allowed verdict under a Verdict heading'));
  }
  const documentedClaims = new Set([...claimTokens(roleValidation), ...claimTokens(adjacentBoundary)]);
  for (const id of claimIds.filter((value) => CLAIM_ID.test(value ?? ''))) {
    if (!documentedClaims.has(id)) {
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
