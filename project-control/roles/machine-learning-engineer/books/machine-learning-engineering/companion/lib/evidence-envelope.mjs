import { deepFreeze } from './canonical-json.mjs';

const REQUIRED = Object.freeze([
  'chapterId', 'decision', 'evidence', 'owner', 'authorityRoute',
  'authorityCeiling', 'limitation', 'nextEvidence',
]);

export function createEvidenceEnvelope(input) {
  for (const field of REQUIRED) {
    if (!(field in (input ?? {})) || input[field] === '' || input[field] === null || input[field] === undefined) {
      throw Object.assign(new TypeError(`evidence envelope requires ${field}`), { code: 'ENVELOPE_INVALID' });
    }
  }
  if (!Array.isArray(input.evidence) || input.evidence.length === 0 || input.evidence.some((item) => typeof item !== 'string' || !item)) {
    throw Object.assign(new TypeError('evidence envelope requires a non-empty string evidence array'), { code: 'ENVELOPE_INVALID' });
  }
  return deepFreeze({
    schema: 'mle-companion-evidence-envelope/v1',
    truthState: 'synthetic-deterministic',
    chapterId: input.chapterId,
    decision: input.decision,
    evidence: [...input.evidence],
    owner: input.owner,
    authorityRoute: input.authorityRoute,
    authorityCeiling: input.authorityCeiling,
    limitation: input.limitation,
    nextEvidence: input.nextEvidence,
  });
}
