import { deepFreeze } from './canonical-json.mjs';

export const STATES = deepFreeze([
  'UNORIENTED', 'ORIENTED', 'CONTRACTED', 'ADMISSIBLE', 'RECONSTRUCTIBLE',
  'CANDIDATE', 'TECHNICALLY-QUALIFIED', 'HOLD', 'REJECT', 'RELEASABLE',
  'OPERABLE', 'OBSERVED', 'REQUALIFIED', 'ROLLED-BACK', 'CONTROLLED',
  'RETIRED', 'REVIEWED',
]);

export const LEGAL_TRANSITIONS = deepFreeze([
  { from: 'UNORIENTED', to: 'ORIENTED', evidence: 'BL-00' },
  { from: 'ORIENTED', to: 'CONTRACTED', evidence: 'BL-01' },
  { from: 'CONTRACTED', to: 'ADMISSIBLE', evidence: 'BL-03 through BL-05' },
  { from: 'ADMISSIBLE', to: 'RECONSTRUCTIBLE', evidence: 'BL-06 and BL-07' },
  { from: 'RECONSTRUCTIBLE', to: 'CANDIDATE', evidence: 'BL-08' },
  { from: 'CANDIDATE', to: 'TECHNICALLY-QUALIFIED', evidence: 'BL-09 through BL-11 PASS' },
  { from: 'CANDIDATE', to: 'HOLD', evidence: 'BL-11 HOLD with named repair' },
  { from: 'CANDIDATE', to: 'REJECT', evidence: 'BL-11 REJECT with reason' },
  { from: 'HOLD', to: 'CANDIDATE', evidence: 'Named repair, new evidence, and new candidate identity' },
  { from: 'REJECT', to: 'CANDIDATE', evidence: 'New task/candidate basis, new evidence, and requalification' },
  { from: 'TECHNICALLY-QUALIFIED', to: 'RELEASABLE', evidence: 'BL-12 through BL-14' },
  { from: 'RELEASABLE', to: 'OPERABLE', evidence: 'BL-15' },
  { from: 'OPERABLE', to: 'OBSERVED', evidence: 'BL-16' },
  { from: 'OBSERVED', to: 'REQUALIFIED', evidence: 'BL-17 repaired candidate passes qualification' },
  { from: 'OBSERVED', to: 'ROLLED-BACK', evidence: 'BL-17 previous-good restoration' },
  { from: 'REQUALIFIED', to: 'CONTROLLED', evidence: 'BL-18' },
  { from: 'ROLLED-BACK', to: 'CONTROLLED', evidence: 'BL-18' },
  { from: 'CONTROLLED', to: 'RETIRED', evidence: 'BL-19' },
  { from: 'RETIRED', to: 'REVIEWED', evidence: 'BL-20' },
]);

export const FORBIDDEN_TRANSITIONS = deepFreeze(['HOLD->RELEASABLE', 'REJECT->RELEASABLE']);

export const REOPEN_TRIGGERS = deepFreeze([
  { change: 'purpose or intended use', reopenTarget: 'CONTRACTED', invalidates: ['task', 'population', 'acceptance', 'qualification', 'release'] },
  { change: 'data labels features or population', reopenTarget: 'ADMISSIBLE', invalidates: ['input conformance', 'experiment', 'qualification', 'release'] },
  { change: 'runtime dependencies interface or serving envelope', reopenTarget: 'RECONSTRUCTIBLE', invalidates: ['run identity', 'package', 'compatibility', 'operating evidence'] },
  { change: 'authority constraint or permitted use', reopenTarget: 'CONTRACTED', invalidates: ['approvals', 'controls', 'technical disposition', 'release'] },
]);

const normalize = (value) => String(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();

export function assertLegalTransition(from, to, options = {}) {
  const key = `${from}->${to}`;
  if (FORBIDDEN_TRANSITIONS.includes(key)) throw Object.assign(new Error(`forbidden transition ${key}`), { code: 'FORBIDDEN_TRANSITION' });
  if (options.allowMilestoneEnrichment && from === to && STATES.includes(from)) return true;
  if (!LEGAL_TRANSITIONS.some((transition) => transition.from === from && transition.to === to)) {
    throw Object.assign(new Error(`illegal transition ${key}`), { code: 'ILLEGAL_TRANSITION' });
  }
  return true;
}

export function resolveReopen(change) {
  const wanted = normalize(change);
  const trigger = REOPEN_TRIGGERS.find((candidate) => normalize(candidate.change) === wanted);
  if (!trigger) throw Object.assign(new Error(`unknown reopen trigger: ${change}`), { code: 'REOPEN_TRIGGER_UNKNOWN' });
  return trigger;
}
