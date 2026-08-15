const REQUIRED_CONTROL_FIELDS = [
  "objective",
  "owner",
  "implementation",
  "verification",
  "evidence",
];

const AUDIT_FIELDS = [
  "eventId",
  "occurredAt",
  "actorId",
  "action",
  "resourceId",
  "result",
  "correlationId",
  "controlId",
];

function present(value) {
  return typeof value === "string" ? value.trim().length > 0 : value != null;
}

export function assessControl(control) {
  const missing = REQUIRED_CONTROL_FIELDS.filter((field) => !present(control?.[field]));
  const approval = control?.approval ?? {};

  if (!present(approval.owner)) missing.push("approval.owner");
  if (!present(approval.status)) missing.push("approval.status");

  const evidenceComplete = missing.filter((field) => !field.startsWith("approval.")).length === 0;
  const approved =
    evidenceComplete &&
    approval.status === "approved" &&
    approval.designatedAuthority === true;

  return {
    controlId: control?.controlId ?? null,
    evidenceComplete,
    approved,
    missing,
    disposition: approved
      ? "approved"
      : evidenceComplete
        ? "awaiting-authority-decision"
        : "evidence-incomplete",
  };
}

export function routeRiskDecision({ controlId, decision, authority }) {
  if (!present(controlId) || !present(decision)) {
    return { allowed: false, reason: "decision-record-incomplete" };
  }
  if (authority?.designated !== true) {
    return { allowed: false, reason: "designated-authority-required" };
  }
  if (!Array.isArray(authority.controlIds) || !authority.controlIds.includes(controlId)) {
    return { allowed: false, reason: "authority-out-of-scope" };
  }
  return {
    allowed: true,
    reason: "routed-to-designated-authority",
    decisionOwner: authority.actorId,
  };
}

export function createAuditEvent(input) {
  const event = {};
  for (const field of AUDIT_FIELDS) {
    if (present(input?.[field])) event[field] = input[field];
  }
  return Object.freeze(event);
}
