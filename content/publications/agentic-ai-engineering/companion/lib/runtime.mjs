export const isTerminal = (record, state) => record.terminalStates.includes(state);

export function transition(record, run, event) {
  if (isTerminal(record, run.state)) return {ok:false, reason:'terminal_state', run};
  if (event.type === 'run.cancelled') return {ok:true, run:{...run,state:'CANCELLED',sequence:run.sequence + 1}};
  if (event.type === 'run.escalated') return {ok:true, run:{...run,state:'ESCALATED',sequence:run.sequence + 1}};
  const rule = record.transitions.find((item) => item.from === run.state && item.event === event.type);
  if (!rule) return {ok:false, reason:'illegal_transition', run};
  const counters = {...run.counters};
  if (event.increment) {
    const next = (counters[event.increment] ?? 0) + 1;
    if (next > record.budgets[event.increment]) return {ok:false, reason:`${event.increment}_budget`,run:{...run,state:'FAILED',sequence:run.sequence + 1,counters}};
    counters[event.increment] = next;
  }
  return {ok:true,run:{...run,state:rule.to,sequence:run.sequence + 1,counters}};
}

export function verifyCompletion(record, evidence) {
  const missing = record.completion.requiredEvidence.filter((id) => !evidence.includes(id));
  return {ok:missing.length === 0, missing};
}

export function replay(record, initialRun, events) {
  let current = initialRun;
  for (const event of events) {
    const result = transition(record, current, event);
    if (!result.ok) return result;
    current = result.run;
  }
  return {ok:true,run:current};
}

export function validateCatalog(catalog) {
  const required = ['id','version','intent','effectClass','inputSchema','outputSchema','preconditions','principal','scope','freshness','timeoutMs','errors','retry','idempotency','reconciliation','compensation','audit','redaction','double','deprecation','authority','stop','escalation'];
  const errors = [];
  for (const capability of catalog.capabilities ?? []) for (const field of required) if (capability[field] === undefined || capability[field] === '') errors.push(`${capability.id}.${field}`);
  if ((catalog.capabilities ?? []).filter((item) => item.effectClass === 'effect').map((item) => item.id).join(',') !== 'reserve_part') errors.push('effect_surface');
  if (catalog.ambiguousEffectPolicy?.exactlyOnceClaim !== false) errors.push('exactly_once_claim');
  return errors;
}

export function handleReservationOutcome(catalog, ledger, request, outcome) {
  const existing = ledger.get(request.idempotencyKey);
  const intent = JSON.stringify([request.principal,request.taskId,request.runId,request.proposalHash,request.partId,request.slotId,request.quantity]);
  if (existing && existing.intent !== intent) return {status:'DENIED',reason:'SAME_KEY_DIFFERENT_INTENT'};
  if (existing) return {status:'FOUND',effect:existing.effect};
  if (outcome === 'timeout-after-commit') {
    const effect = {effectId:'effect-001',partId:request.partId,slotId:request.slotId,quantity:request.quantity};
    ledger.set(request.idempotencyKey,{intent,effect});
    return {status:'AMBIGUOUS',next:'RECONCILE'};
  }
  return {status:'ABSENT',next:'DO_NOT_BLIND_RETRY'};
}

export function authorizeInvocation(envelope, invocation, now) {
  const reasons = [];
  const delegation = envelope.delegation;
  const approval = envelope.approval;
  if (invocation.credentialExposedToModel) reasons.push('credential_exposure');
  if (!invocation.principal || invocation.principal !== delegation.principal) reasons.push('principal');
  if (invocation.taskId !== delegation.taskId || invocation.runId !== delegation.runId || invocation.agentId !== delegation.agentId) reasons.push('task_run_agent');
  if (invocation.tokenAudience !== delegation.audience || invocation.resource !== delegation.audience) reasons.push('audience');
  if (!delegation.scopes.includes(invocation.scope)) reasons.push('scope');
  if (delegation.revoked || invocation.delegationRevoked) reasons.push('delegation_revoked');
  if (Date.parse(now) >= Date.parse(delegation.expiresAt)) reasons.push('delegation_expired');
  if (invocation.effect) {
    for (const field of ['principal','taskId','runId','proposalHash','resource','partId','slotId','quantity','scope']) if (invocation[field] !== approval[field]) reasons.push(`approval_${field}`);
    if (approval.used || approval.revoked) reasons.push('approval_inactive');
    if (Date.parse(now) >= Date.parse(approval.expiresAt)) reasons.push('approval_expired');
  }
  return {ok:reasons.length === 0,reasons:[...new Set(reasons)]};
}
