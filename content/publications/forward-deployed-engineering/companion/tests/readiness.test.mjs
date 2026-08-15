import test from "node:test";
import assert from "node:assert/strict";

import {
  readinessDisposition,
  validateGoNoGoRecord,
  validateReadinessItem,
} from "../src/readiness.mjs";

const met = (overrides = {}) => ({
  itemId: "READY-CONTRACTS",
  criterion: "Representative contract and failure paths pass.",
  status: "met",
  evidence: "test-bundle-v1",
  owner: "verification-owner",
  consequence: "incorrect external state",
  ...overrides,
});

test("missing or unexecuted evidence cannot be labeled met at a deadline", () => {
  const result = validateReadinessItem(met({ evidence: null }));
  assert.equal(result.valid, false);
  assert.deepEqual(result.gaps, ["evidence"]);
});

test("an unresolved material gap delays even a small cohort", () => {
  const result = readinessDisposition({
    items: [met(), met({ itemId: "READY-RESTORE", status: "gap", evidence: null })],
    cohort: "one-site",
    gates: ["workflow-health"],
    authority: { designated: true, actorId: "release-owner" },
  });
  assert.equal(result.disposition, "delay");
  assert.equal(result.reason, "unresolved-gap");
});

test("a formal exception requires designated owner evidence and yields conditional go", () => {
  const exception = met({
    itemId: "READY-LIMIT",
    status: "exception",
    authority: { designated: true, actorId: "risk-owner" },
    expiresAt: "2026-09-01T00:00:00Z",
  });
  const result = readinessDisposition({
    items: [met(), exception],
    cohort: "synthetic-cohort",
    gates: ["workflow-health", "critical-quality"],
    authority: { designated: true, actorId: "release-owner" },
  });
  assert.equal(result.disposition, "conditional-go");
});

test("reduced-scope evidence cannot be promoted to full go", () => {
  const result = readinessDisposition({
    items: [met({ status: "reduced-scope" })],
    cohort: "west-non-safety",
    gates: ["workflow-health"],
    authority: { designated: true, actorId: "release-owner" },
  });
  assert.equal(result.disposition, "reduced-scope");
});

test("a go/no-go record preserves options, facts, unknowns, triggers, communication, and recovery", () => {
  const result = validateGoNoGoRecord({
    options: ["go", "conditional-go", "reduced-scope", "delay", "stop"],
    facts: ["synthetic evidence bundle passes"],
    unknowns: ["production-tail behavior"],
    authority: { designated: true, actorId: "release-owner" },
    decision: "reduced-scope",
    conditions: ["non-safety cohort only"],
    stopTriggers: ["critical quality failure"],
    communications: ["operator and cohort notice"],
    recoveryPath: "disable cohort and reconcile intents",
  });
  assert.equal(result.valid, true);
});
