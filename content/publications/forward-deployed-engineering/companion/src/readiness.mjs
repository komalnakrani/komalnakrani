const ALLOWED = new Set(["met", "gap", "exception", "reduced-scope", "block"]);

function present(value) {
  return typeof value === "string" ? value.trim().length > 0 : value != null;
}

export function validateReadinessItem(item) {
  const gaps = [];
  for (const field of ["itemId", "criterion", "status", "owner", "consequence"]) {
    if (!present(item?.[field])) gaps.push(field);
  }
  if (present(item?.status) && !ALLOWED.has(item.status)) gaps.push("status:unsupported");
  if (item?.status === "met" && !present(item.evidence)) gaps.push("evidence");
  if (item?.status === "exception") {
    if (item?.authority?.designated !== true) gaps.push("authority.designated");
    if (!present(item?.authority?.actorId)) gaps.push("authority.actorId");
    if (!present(item?.expiresAt)) gaps.push("expiresAt");
  }
  return { valid: gaps.length === 0, gaps };
}

export function readinessDisposition({ items, cohort, gates, authority }) {
  const results = items.map((item) => ({ item, validation: validateReadinessItem(item) }));
  if (!present(cohort) || !Array.isArray(gates) || gates.length === 0) {
    return { disposition: "delay", reason: "cohort-and-gates-required", results };
  }
  if (results.some((result) => !result.validation.valid || result.item.status === "block")) {
    return { disposition: "stop", reason: "invalid-or-blocking-evidence", results };
  }
  if (items.some((item) => item.status === "gap")) {
    return { disposition: "delay", reason: "unresolved-gap", results };
  }
  if (items.some((item) => item.status === "reduced-scope")) {
    return { disposition: "reduced-scope", reason: "scope-restriction-required", results };
  }
  if (items.some((item) => item.status === "exception")) {
    if (authority?.designated !== true) {
      return { disposition: "stop", reason: "release-authority-required", results };
    }
    return { disposition: "conditional-go", reason: "owner-accepted-exception", results };
  }
  return { disposition: "go", reason: "all-recorded-criteria-met", results };
}

export function validateGoNoGoRecord(record) {
  const gaps = [];
  for (const field of [
    "options",
    "facts",
    "unknowns",
    "authority",
    "decision",
    "conditions",
    "stopTriggers",
    "communications",
    "recoveryPath",
  ]) {
    const value = record?.[field];
    if (Array.isArray(value) ? value.length === 0 : !present(value)) gaps.push(field);
  }
  if (record?.authority?.designated !== true) gaps.push("authority.designated");
  return { valid: gaps.length === 0, gaps };
}
