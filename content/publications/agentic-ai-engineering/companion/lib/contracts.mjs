export function validateAr01(record) {
  const errors = [];
  if (record.id !== 'AR-01' || record.fictional !== true) errors.push('AR-01 identity');
  if (!Array.isArray(record.decisions) || record.decisions.length === 0) errors.push('decisions');
  for (const decision of record.decisions ?? []) {
    for (const field of ['id','decision','primaryOwner','classification','evidence','authority','escalation']) {
      if (decision[field] === undefined || decision[field] === '') errors.push(`${decision.id ?? 'decision'}.${field}`);
    }
  }
  if (record.version === '0.2.0') {
    if (record.executionLevels?.length !== 4) errors.push('executionLevels');
    if (record.selectedLevel !== 'single-agent') errors.push('selectedLevel');
    if (!record.disputedClaims?.some((claim) => claim.id === 'AGE-BCLM-004' && claim.status === 'disputed')) errors.push('disputedClaim');
  }
  return errors;
}

export function validateAr02(record) {
  const errors = [];
  if (record.id !== 'AR-02' || record.version !== '1.0.0') errors.push('AR-02 identity');
  if (!record.completion?.predicate || !record.completion?.evidence?.length) errors.push('completion');
  for (const action of record.actions ?? []) {
    for (const field of ['id','class','effect','owner','authority','precondition','evidence','stop','escalation']) {
      if (action[field] === undefined || action[field] === '') errors.push(`${action.id ?? 'action'}.${field}`);
    }
    if (action.effect && action.class === 'effect' && !record.approval.requiredFor.includes(action.id)) errors.push(`${action.id}.approval`);
  }
  if ((record.actions ?? []).filter((action) => action.class === 'effect').length !== 1) errors.push('effect count');
  if ((record.mutationTests ?? []).length < 5 || !record.mutationTests.every((test) => test.expected === 'deny')) errors.push('mutationTests');
  return errors;
}

export function approvalMatches(approval, proposal, now) {
  const fields = ['principal','taskId','runId','proposalHash','partId','slotId','quantity','scope'];
  if (fields.some((field) => approval[field] !== proposal[field])) return false;
  if (approval.used === true) return false;
  return Date.parse(approval.expiresAt) > Date.parse(now);
}
