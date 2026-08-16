export function contextDecision(record, candidate, now = '2026-08-16T09:00:00Z') {
  const denied = [];
  if (record.contextPolicy.forbidden.includes(candidate.kind)) denied.push(candidate.kind);
  if (candidate.tenantId !== candidate.requestTenantId) denied.push('cross-tenant records');
  if (candidate.deleted) denied.push('deleted records');
  if (candidate.expiresAt && Date.parse(now) >= Date.parse(candidate.expiresAt)) denied.push('expired records');
  if (!candidate.permissions?.includes(candidate.principalId)) denied.push('unauthorized');
  if (candidate.untrustedInstruction && candidate.asPolicy) denied.push('untrusted text as instructions');
  return {allow:denied.length === 0,reasons:[...new Set(denied)]};
}

export function admitMemory(record, candidate) {
  const reasons = [];
  if (!candidate.sourceId) reasons.push('provenance');
  if (!candidate.permission) reasons.push('permission');
  if (!candidate.expiresAt) reasons.push('expiry');
  if (candidate.conflict) reasons.push('unresolved_conflict');
  if (candidate.trust === 'untrusted') reasons.push('trust');
  if (candidate.authority === true) reasons.push('memory_not_authority');
  return {admit:reasons.length === 0,reasons};
}

export function deleteMemory(store, id) {
  const item = store.get(id);
  if (!item) return {deleted:false,reason:'not_found'};
  store.delete(id);
  return {deleted:true,tombstone:{id,deletedAt:'2026-08-16T09:00:00Z',contentRetained:false},invalidated:[...(item.downstreamRefs ?? [])]};
}

export function validateFreeze(baseline) {
  const errors = [];
  for (const field of ['taskSetHash','contractVersions','toolVersions','policyVersion','budgetVersion','evidenceVersion']) if (!baseline.freeze?.[field] || baseline.freeze[field].length === 0) errors.push(field);
  if (baseline.configuration?.topology !== 'single-agent') errors.push('topology');
  if (baseline.configuration?.budgets?.effects !== 1) errors.push('effect_boundary');
  if (baseline.syntheticBaseline?.note?.includes('not model') !== true) errors.push('synthetic_limitation');
  return errors;
}

export function validateHandoff(experiment, handoff = experiment.handoffContract) {
  const required = ['sourceAgent','targetAgent','taskSlice','ownerBefore','ownerAfter','stateRef','stateVersion','evidenceRefs','capabilities','scope','expiry','budget','completion','returnRule','cancelRule','timeout','duplicateKey','escalation','aggregation','finalOwner'];
  const errors = required.filter((field) => handoff[field] === undefined || handoff[field] === '');
  if (handoff.budget?.effects !== 0) errors.push('effect_authority_widened');
  if ((handoff.capabilities ?? []).some((id) => id === 'reserve_part')) errors.push('effect_capability_delegated');
  return errors;
}

export function acceptHandoffResult(experiment, result, current) {
  if (result.cancelled || current.cancelled) return {accept:false,reason:'cancelled'};
  if (result.stateVersion !== current.stateVersion) return {accept:false,reason:'stale_state'};
  if (result.duplicateKey !== experiment.handoffContract.duplicateKey) return {accept:false,reason:'duplicate_key'};
  if (result.now > result.leaseExpiresAt) return {accept:false,reason:'late_result'};
  if (result.conflict) return {accept:false,reason:'conflict_escalate'};
  return {accept:true,reason:'validated_read_only_artifact'};
}

export function topologyDisposition(experiment) {
  const one = experiment.comparison.syntheticResults.singleAgent;
  const multi = experiment.comparison.syntheticResults.manualSpecialist;
  const outcomeGain = multi.expectedDispositionMatches - one.expectedDispositionMatches;
  const addedCoordination = multi.simulatedCoordinationUnits - one.simulatedCoordinationUnits;
  const addedSteps = multi.actionSteps - one.actionSteps;
  return outcomeGain > 0 && addedCoordination <= 0 && addedSteps <= 0 ? 'manual-specialist' : 'single-agent';
}
