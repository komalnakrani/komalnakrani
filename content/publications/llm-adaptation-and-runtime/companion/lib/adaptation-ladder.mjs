export function evaluateAdaptationLadder(record) {
  const errors = [];
  if (record?.trainingExecuted !== false) errors.push("training executed without approval");
  const byId = new Map((record?.interventions ?? []).map((row) => [row.id, row]));
  for (const id of ["no-change","repair","sft-full","peft","preference","distillation","continued-pretraining","replacement"]) if (!byId.has(id)) errors.push(`missing intervention ${id}`);
  if (byId.get("preference")?.disposition !== "rejected-target-is-typed-not-preference") errors.push("preference mismatch not rejected");
  if (byId.get("peft")?.disposition !== "conditional-pilot-investigation") errors.push("smallest supervised candidate not conditional");
  if ((record?.stopRules ?? []).length < 8) errors.push("stop rules incomplete");
  if ((record?.protectedCriteria ?? []).length < 7) errors.push("protected criteria incomplete");
  if (record?.status !== "method-selection-complete-training-not-approved") errors.push("ladder grants training authority");
  return {errors, selected:(record?.failureDecisions ?? []).map((row) => ({failure:row.class,action:row.action})), rejected:(record?.interventions ?? []).filter((row) => row.disposition.startsWith("rejected")).map((row) => row.id)};
}
