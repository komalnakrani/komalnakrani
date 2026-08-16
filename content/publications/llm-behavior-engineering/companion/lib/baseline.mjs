import { createHash } from "node:crypto";

export function stableValue(value) {
  if (Array.isArray(value)) return value.map(stableValue);
  if (value && typeof value === "object") return Object.fromEntries(Object.keys(value).sort().map((key) => [key, stableValue(value[key])]));
  return value;
}

export function baselineIdentity(manifest) {
  return createHash("sha256").update(JSON.stringify(stableValue(manifest))).digest("hex");
}

export function validateBaseline(manifest, fixtures) {
  const errors = [];
  if (manifest.fictional !== true || fixtures.fictional !== true) errors.push("baseline artifacts must be fictional");
  for (const field of ["task", "access", "model", "messages", "generation", "context", "output", "execution", "evaluation", "evidence"]) {
    if (!manifest[field]) errors.push(`manifest lacks ${field}`);
  }
  if (manifest.evidence?.containsSecrets !== false) errors.push("baseline must declare secrets absent");
  const serialized = JSON.stringify(manifest).toLowerCase();
  for (const phrase of ["api_key", "apikey", "bearer ", "secret="]) if (serialized.includes(phrase)) errors.push(`manifest contains forbidden secret marker ${phrase}`);
  const states = new Set((fixtures.results ?? []).map((result) => result.status));
  for (const state of ["success", "invalid", "degraded", "prohibited", "abstain", "escalate"]) if (!states.has(state)) errors.push(`result fixtures lack ${state}`);
  for (const result of fixtures.results ?? []) if (result.effect !== null) errors.push(`${result.caseId} exposes an effect`);
  return errors;
}
