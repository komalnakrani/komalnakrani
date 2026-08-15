const STATES = new Set(["respond", "clarify", "abstain", "escalate", "degraded", "prohibited"]);
const DISPOSITIONS = new Set(["block", "narrow", "degrade", "warn-monitor", "inform"]);

export function validateContract(contract) {
  const errors = [];
  if (contract.schemaVersion !== 1) errors.push("schemaVersion must equal 1");
  if (contract.caseStatus !== "fictional-synthetic") errors.push("caseStatus must be fictional-synthetic");
  if (!/^\d+\.\d+\.\d+$/.test(contract.version ?? "")) errors.push("version must use semver");
  if (!Array.isArray(contract.clauses) || contract.clauses.length === 0) errors.push("clauses must be non-empty");
  const ids = new Set();
  for (const clause of contract.clauses ?? []) {
    if (ids.has(clause.id)) errors.push(`duplicate clause ${clause.id}`);
    ids.add(clause.id);
    if (!STATES.has(clause.state)) errors.push(`${clause.id}: invalid state`);
    if (!DISPOSITIONS.has(clause.failureDisposition)) errors.push(`${clause.id}: invalid disposition`);
    if (!clause.authority) errors.push(`${clause.id}: authority is required`);
    if (!clause.evidence?.length) errors.push(`${clause.id}: evidence is required`);
    if (!clause.changeTriggers?.length) errors.push(`${clause.id}: change trigger is required`);
  }
  for (const state of STATES) if (!contract.states?.includes(state)) errors.push(`missing state ${state}`);
  const effects = contract.scope?.prohibitedEffects ?? [];
  for (const required of ["Guaranteed compatibility claim", "Automatic seller contact", "Purchase initiation or execution"]) {
    if (!effects.includes(required)) errors.push(`missing prohibited effect: ${required}`);
  }
  if (!contract.fallback?.toLowerCase().includes("ordinary")) errors.push("ordinary fallback must be explicit");
  return errors;
}
