export function eligibleUnit(unit, request) {
  return unit.tenant === request.tenant && unit.purpose.includes(request.purpose) && request.allowedSourceFamilies.includes(unit.sourceFamily) && unit.revoked === false;
}

export function eligibleUnits(contract) {
  return contract.evidenceUnits.filter((unit) => eligibleUnit(unit, contract.request));
}

export function validateRetrievalQuestion(contract) {
  const errors = [];
  if (contract.fictional !== true) errors.push("retrieval contract must be fictional");
  if ((contract.effects ?? []).length !== 0) errors.push("retrieval contract must expose no effects");
  for (const decision of contract.claimDecisions ?? []) for (const field of ["need","path","reason"]) if (!decision[field]) errors.push(`${decision.id} lacks ${field}`);
  for (const unit of contract.evidenceUnits ?? []) for (const field of ["parentId","owner","tenant","purpose","sourceFamily","effective"]) if (!unit[field]) errors.push(`${unit.id} lacks ${field}`);
  if (!contract.claimDecisions.some((decision) => decision.path === "deterministic-lookup")) errors.push("lookup alternative missing");
  if (!contract.claimDecisions.some((decision) => decision.path === "abstain-escalate")) errors.push("abstention alternative missing");
  if (!contract.independentClaims?.retrieval?.length || !contract.independentClaims?.generatedBehavior?.length) errors.push("independent claim families missing");
  return errors;
}
