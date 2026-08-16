export function auditInstructionData(dataset) {
  const errors = [];
  if (dataset?.trainingExecuted !== false) errors.push("training executed");
  if (dataset?.allowedInputVault !== "train") errors.push("authoring reads non-train vault");
  const accepted=(dataset?.records ?? []).filter((record)=>record.decision==="accept");
  const rejected=(dataset?.records ?? []).filter((record)=>record.decision==="reject");
  for (const record of accepted) for (const claim of record.targetClaims ?? []) if (!claim.support || !(record.evidenceRefs ?? []).includes(claim.support)) errors.push(`unsupported accepted target ${record.id}`);
  if (!rejected.some((record)=>record.reason==="unsupported-synthetic-target")) errors.push("unsupported synthetic target not rejected");
  const signals=new Set(accepted.map((record)=>record.signal));
  for (const required of ["positive","negative","abstention","escalation"]) if (!signals.has(required)) errors.push(`missing signal ${required}`);
  if (dataset?.template?.trainingServingCompatible !== false) errors.push("template mismatch not preserved");
  if (!(dataset?.renderChecks ?? []).some((check)=>check.id==="training-serving-template"&&check.status==="block")) errors.push("template mismatch does not block");
  if (dataset?.status !== "md11-instruction-data-specified-render-blocked") errors.push("instruction status exceeds evidence");
  return {errors, accepted:accepted.map((record)=>record.id), rejected:rejected.map((record)=>({id:record.id,reason:record.reason})), signals:[...signals].sort()};
}
