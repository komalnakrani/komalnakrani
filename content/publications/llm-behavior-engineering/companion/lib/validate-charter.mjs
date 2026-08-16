export function validateCharter(charter) {
  const errors = [];
  if (charter.fictional !== true) errors.push("charter must mark Mosaic Desk fictional");
  if (charter.taskStatus !== "proposal-only") errors.push("task must remain proposal-only");
  if (!Array.isArray(charter.components) || charter.components.length < 4) errors.push("components are incomplete");
  if (!Array.isArray(charter.claims) || charter.claims.length < 3) errors.push("claims are incomplete");
  for (const claim of charter.claims ?? []) {
    for (const field of ["statement", "scope", "limitation", "workingOwner", "authority"]) {
      if (!claim[field]) errors.push(`${claim.id ?? "claim"} lacks ${field}`);
    }
    if (!Array.isArray(claim.evidence) || claim.evidence.length === 0) errors.push(`${claim.id ?? "claim"} lacks evidence`);
  }
  return errors;
}
