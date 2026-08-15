import test from "node:test";
import assert from "node:assert/strict";

import {
  IncidentTimeline,
  incidentUpdate,
  stabilizationDisposition,
  validateCorrectiveAction,
  validateIncidentCommand,
} from "../src/incident.mjs";

test("confirmed timeline facts require evidence and remain chronological", () => {
  const timeline = new IncidentTimeline();
  timeline.append({
    occurredAt: "2026-08-16T10:00:00Z",
    track: "impact",
    statement: "low-connectivity cohort cannot complete review",
    confidence: "confirmed",
    evidence: "cohort-metric-v1",
  });
  assert.throws(
    () => timeline.append({
      occurredAt: "2026-08-16T09:59:00Z",
      track: "diagnosis",
      statement: "dependency timeout",
      confidence: "probable",
    }),
    /chronological/,
  );
});

test("the FDE cannot silently become incident commander", () => {
  const result = validateIncidentCommand({
    incidentCommander: "fde-1",
    fdeActorId: "fde-1",
    technicalLead: "fde-1",
    communicationsOwner: "customer-comms",
    customerImpactOwner: "customer-ops",
    cadence: "15m",
  });
  assert.equal(result.valid, false);
  assert.deepEqual(result.gaps, ["fdeDesignatedCommander"]);
});

test("updates separate confirmed facts, unknowns, actions, and next cadence without speculative ETA", () => {
  assert.throws(
    () => incidentUpdate({
      impact: "one cohort degraded",
      facts: ["fallback active"],
      unknowns: ["full cause"],
      actions: ["hold cohort"],
      nextUpdateAt: "2026-08-16T10:15:00Z",
      eta: { value: "10m", confidence: "probable" },
    }),
    /unconfirmed ETA/,
  );
});

test("corrective action changes the system instead of blaming an actor", () => {
  const result = validateCorrectiveAction({
    condition: "retry and new demand shared one budget",
    systemChange: "separate retry budget and add cohort capacity gate",
    owner: "platform-owner",
    dueAt: "2026-08-30",
    verification: "load and failure tests",
    evidence: "corrective-suite-v1",
  });
  assert.equal(result.valid, true);
});

test("restoration alone cannot exit stabilization", () => {
  const result = stabilizationDisposition({
    impactContained: true,
    serviceRestored: true,
  });
  assert.equal(result.stable, false);
  assert.ok(result.missing.includes("durableCorrectionVerified"));
  assert.equal(result.disposition, "continue-stabilization");
});
