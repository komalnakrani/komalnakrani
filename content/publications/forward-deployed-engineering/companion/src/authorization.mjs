export function authorizeRequest({ principal, resource, operation, now = Date.now() }) {
  const reasons = [];
  if (!principal?.id || !principal?.kind) reasons.push("principal identity is required");
  if (!resource?.tenant || !resource?.region || !resource?.type) reasons.push("resource context is incomplete");
  if (!operation) reasons.push("operation is required");
  if (principal?.expiresAt && Date.parse(principal.expiresAt) <= now) reasons.push("principal is expired");
  if (principal?.tenant !== resource?.tenant) reasons.push("tenant mismatch");
  if (principal?.region !== resource?.region) reasons.push("region mismatch");
  if (!(principal?.permissions ?? []).includes(`${resource?.type}:${operation}`)) reasons.push("operation is not permitted");
  return { allowed: reasons.length === 0, reasons };
}

export function requireQualifiedApproval({ principal, ticketRegion, safetyRelevant, now = Date.now() }) {
  if (!safetyRelevant) return { allowed: true, reasons: [] };
  return authorizeRequest({
    principal,
    resource: { tenant: "orchid", region: ticketRegion, type: "safety-approval" },
    operation: "approve",
    now
  });
}
