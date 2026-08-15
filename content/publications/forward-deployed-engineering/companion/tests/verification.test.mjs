import test from "node:test";
import assert from "node:assert/strict";

import {
  buildVerificationReport,
  calibrateGrader,
  verifyEvidenceRecord,
} from "../src/verification.mjs";

const evidence = (overrides = {}) => ({
  riskId: "RISK-EQUIPMENT-BINDING",
  criterion: "The selected evidence belongs to the confirmed equipment.",
  method: "end-to-end negative-path test",
  evidenceType: "deterministic-assertion",
  segment: "common",
  expected: "wrong equipment is blocked",
  observed: "blocked before retrieval",
  passed: true,
  limitation: "synthetic fixture; no real search index",
  owner: "verification-owner",
  ...overrides,
});

test("verification records require traceability, observation, limitation, and owner", () => {
  const result = verifyEvidenceRecord({
    riskId: "RISK-1",
    criterion: "denied",
    method: "test",
    evidenceType: "deterministic-assertion",
    segment: "common",
    expected: "denied",
    passed: true,
  });
  assert.equal(result.valid, false);
  assert.deepEqual(result.gaps, ["observed", "limitation", "owner"]);
});

test("a critical failure blocks release even when the aggregate passes", () => {
  const report = buildVerificationReport([
    evidence({ riskId: "C-1" }),
    evidence({ riskId: "C-2" }),
    evidence({ riskId: "C-3" }),
    evidence({
      riskId: "S-1",
      segment: "safety-critical",
      observed: "prohibited suggestion reached review",
      passed: false,
    }),
  ]);

  assert.deepEqual(report.segments.common, { passed: 3, failed: 0, invalid: 0 });
  assert.deepEqual(report.segments["safety-critical"], { passed: 0, failed: 1, invalid: 0 });
  assert.equal(report.disposition, "block");
});

test("evidence type stays explicit instead of mixing unlike claims", () => {
  for (const evidenceType of [
    "deterministic-assertion",
    "statistical-estimate",
    "expert-judgment",
    "user-acceptance",
  ]) {
    assert.equal(verifyEvidenceRecord(evidence({ evidenceType })).valid, true);
  }
  assert.equal(verifyEvidenceRecord(evidence({ evidenceType: "proof" })).valid, false);
});

test("grader calibration preserves disagreements against human labels", () => {
  const report = calibrateGrader({
    humanLabels: [
      { caseId: "a", label: "pass" },
      { caseId: "b", label: "fail" },
      { caseId: "c", label: "fail" },
    ],
    graderLabels: [
      { caseId: "a", label: "pass" },
      { caseId: "b", label: "pass" },
      { caseId: "c", label: "fail" },
    ],
  });

  assert.equal(report.agreement, 2 / 3);
  assert.deepEqual(report.disagreements, [{ caseId: "b", human: "fail", grader: "pass" }]);
});
