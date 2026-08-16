const requiredStates = ["required", "uncertain", "abstain", "escalate", "degraded", "prohibited"];

export function validateLanguageTaskContract(contract) {
  const errors = [];
  if (contract.fictional !== true) errors.push("contract must mark Mosaic Desk fictional");
  if (!contract.task?.includes("propose")) errors.push("task must describe a proposal");
  if (contract.thresholdStatus !== "calibrate after representative baseline") errors.push("thresholds must remain uncalibrated");
  const states = new Set(contract.states ?? []);
  for (const state of requiredStates) if (!states.has(state)) errors.push(`missing state ${state}`);
  const used = new Set((contract.clauses ?? []).map((clause) => clause.state));
  for (const state of requiredStates) if (!used.has(state)) errors.push(`state ${state} has no clause`);
  for (const clause of contract.clauses ?? []) {
    for (const field of ["criterion", "judge", "owner"]) if (!clause[field]) errors.push(`${clause.id} lacks ${field}`);
  }
  return errors;
}

export function hasProhibitedEffect(contract, phrase) {
  return (contract.prohibitedEffects ?? []).some((effect) => effect.toLowerCase().includes(phrase.toLowerCase()));
}
