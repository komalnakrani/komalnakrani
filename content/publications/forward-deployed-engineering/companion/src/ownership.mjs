const FRICTION = new Set([
  "capability",
  "workflow-fit",
  "trust-evidence",
  "access",
  "performance",
  "incentive",
  "policy",
  "accessibility",
  "support",
  "knowledge",
]);

const OWNERSHIP_AREAS = [
  "knowledge",
  "access",
  "telemetry",
  "runbook",
  "release",
  "recovery",
  "support",
  "decisions",
  "openRisk",
  "changePath",
];

export function diagnoseAdoption(signals) {
  return signals.map((signal) => {
    if (!FRICTION.has(signal.category)) throw new TypeError(`unsupported friction category: ${signal.category}`);
    if (!signal.evidence || !signal.nextTest || !signal.owner) {
      throw new TypeError("adoption signals require evidence, nextTest, and owner");
    }
    return Object.freeze({ ...signal, userBlame: false });
  });
}

export function validateOwnershipAcceptance(record) {
  const gaps = [];
  for (const area of OWNERSHIP_AREAS) {
    const item = record?.[area];
    if (!item?.owner) gaps.push(`${area}.owner`);
    if (!item?.demonstratedEvidence) gaps.push(`${area}.demonstratedEvidence`);
  }
  if (record?.fdeAccess?.revoked !== true) gaps.push("fdeAccess.revoked");
  if (!record?.customerAuthority?.designated) gaps.push("customerAuthority.designated");
  return { accepted: gaps.length === 0, gaps };
}

export function transferAccess({ customerPrincipal, fdePrincipal, requiredPermissions }) {
  const missingCustomer = requiredPermissions.filter((permission) =>
    !(customerPrincipal?.permissions ?? []).includes(permission),
  );
  const retainedFde = requiredPermissions.filter((permission) =>
    (fdePrincipal?.permissions ?? []).includes(permission),
  );
  return {
    transferred: missingCustomer.length === 0 && retainedFde.length === 0,
    missingCustomer,
    retainedFde,
  };
}
