import test from "node:test";
import assert from "node:assert/strict";

import {
  assessControl,
  createAuditEvent,
  routeRiskDecision,
} from "../src/control-evidence.mjs";

const completeControl = {
  controlId: "CTRL-QUALIFIED-APPROVAL",
  objective: "Prevent an unqualified actor from approving a safety-relevant step.",
  owner: "safety-owner",
  implementation: "Region-scoped permission plus separation of requester and approver.",
  verification: "Authorization and negative-path tests.",
  evidence: "test-run-2026-08-16",
  approval: {
    owner: "risk-authority",
    status: "pending",
    designatedAuthority: true,
  },
};

test("a policy sentence without implementation or verification is not control evidence", () => {
  const result = assessControl({
    controlId: "CTRL-DOC-ONLY",
    objective: "Protect sensitive information.",
    owner: "security-owner",
    approval: { owner: "risk-authority", status: "pending" },
  });

  assert.equal(result.evidenceComplete, false);
  assert.equal(result.approved, false);
  assert.deepEqual(result.missing, ["implementation", "verification", "evidence"]);
});

test("complete evidence remains pending until a designated authority approves", () => {
  const result = assessControl(completeControl);

  assert.equal(result.evidenceComplete, true);
  assert.equal(result.approved, false);
  assert.equal(result.disposition, "awaiting-authority-decision");
});

test("risk decisions cannot be self-authorized or routed outside delegated scope", () => {
  assert.deepEqual(
    routeRiskDecision({
      controlId: completeControl.controlId,
      decision: "accept-exception",
      authority: { actorId: "fde-1", designated: false, controlIds: [completeControl.controlId] },
    }),
    { allowed: false, reason: "designated-authority-required" },
  );

  assert.deepEqual(
    routeRiskDecision({
      controlId: completeControl.controlId,
      decision: "accept-exception",
      authority: { actorId: "owner-1", designated: true, controlIds: ["CTRL-OTHER"] },
    }),
    { allowed: false, reason: "authority-out-of-scope" },
  );
});

test("audit events use an allowlist and omit payloads, secrets, and free text", () => {
  const event = createAuditEvent({
    eventId: "evt-1",
    occurredAt: "2026-08-16T10:00:00Z",
    actorId: "technician-7",
    action: "approve-step",
    resourceId: "equipment-fictional-22",
    result: "denied",
    correlationId: "corr-8",
    controlId: completeControl.controlId,
    secret: "must-not-appear",
    rawPayload: { patient: "must-not-appear" },
    note: "must-not-appear",
  });

  assert.deepEqual(Object.keys(event), [
    "eventId",
    "occurredAt",
    "actorId",
    "action",
    "resourceId",
    "result",
    "correlationId",
    "controlId",
  ]);
  assert.equal("secret" in event, false);
  assert.equal("rawPayload" in event, false);
  assert.equal(Object.isFrozen(event), true);
});
