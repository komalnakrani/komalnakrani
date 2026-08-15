import test from "node:test";
import assert from "node:assert/strict";

import {
  nextDiagnosticEvidence,
  summarizeCohorts,
  validateSignalRecord,
} from "../src/observability.mjs";

const validSignal = {
  signalId: "SIG-WORKFLOW-READY",
  promise: "A qualified reviewer receives a bounded suggestion or a truthful fallback.",
  failure: "The path is unavailable, blocked, or misleading.",
  kind: "metric",
  owner: "operations-owner",
  urgency: "working-hours",
  firstAction: "Compare state and cohort, then inspect the correlated trace.",
  privacyRule: "No payload, prompt, secret, document, or free text.",
  retention: "30d synthetic demonstration",
  segmentKeys: ["cohort", "state", "releaseVersion"],
};

test("a signal without owner, first action, privacy, or segment cannot alert", () => {
  const result = validateSignalRecord({
    signalId: "SIG-INCOMPLETE",
    promise: "path works",
    failure: "path fails",
    kind: "metric",
    urgency: "working-hours",
    retention: "7d",
  });
  assert.equal(result.valid, false);
  assert.deepEqual(result.gaps, ["owner", "firstAction", "privacyRule", "segmentKeys"]);
});

test("cohort summaries expose low-connectivity degradation hidden by a healthy aggregate", () => {
  const cohorts = summarizeCohorts([
    ...Array.from({ length: 9 }, () => ({ cohort: "connected", success: true, latencyMs: 100 })),
    { cohort: "connected", success: false, latencyMs: 900 },
    { cohort: "low-connectivity", success: false, latencyMs: 5000 },
  ]);

  assert.equal(cohorts.connected.successRate, 0.9);
  assert.equal(cohorts["low-connectivity"].successRate, 0);
  assert.equal(cohorts["low-connectivity"].averageLatencyMs, 5000);
});

test("telemetry rejects sensitive content even when metrics are otherwise valid", () => {
  assert.throws(
    () => summarizeCohorts([{ cohort: "connected", success: true, latencyMs: 100, prompt: "sensitive" }]),
    /forbidden telemetry field/,
  );
});

test("the diagnostic tree asks for the next discriminating evidence", () => {
  assert.equal(
    nextDiagnosticEvidence({ serviceHealthy: true, cohortDegraded: true, evidenceTrusted: true, policyBlocked: false }),
    "compare-cohort-connectivity-latency-and-fallback",
  );
  assert.equal(
    nextDiagnosticEvidence({ serviceHealthy: true, cohortDegraded: false, evidenceTrusted: false, policyBlocked: false }),
    "inspect-equipment-binding-provenance-and-freshness",
  );
  assert.equal(validateSignalRecord(validSignal).valid, true);
});
