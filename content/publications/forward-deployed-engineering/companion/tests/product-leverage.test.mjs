import test from "node:test";
import assert from "node:assert/strict";

import {
  classifyLeverage,
  fieldToProductPacket,
  validatePatternLedgerEntry,
} from "../src/product-leverage.mjs";

const entry = (overrides = {}) => ({
  observation: "external completion requires explicit unknown and reconciliation",
  contexts: ["orchid", "synthetic-analytics"],
  frequency: 2,
  variance: "resource and operation differ; intent semantics remain",
  consequence: "duplicate or lost external effect",
  workaround: "per-integration intent ledger",
  evidenceQuality: "two synthetic bounded implementations",
  isolation: "provider-neutral contract and tests",
  candidateLeverage: "intent/reconciliation module",
  disconfirmingEvidence: "read-only operations may not need it",
  validation: "third independent adapter and compatibility review",
  owner: "product-owner",
  invariant: "stable intent plus completed/rejected/unknown state",
  containsCustomerSpecificData: false,
  ...overrides,
});

test("one customer does not establish a platform pattern", () => {
  const result = classifyLeverage(entry({ contexts: ["orchid"], frequency: 1 }));
  assert.equal(result.decision, "defer");
  assert.equal(result.reason, "single-context-pattern");
});

test("customer-specific data or assumptions reject reuse", () => {
  const result = classifyLeverage(entry({ containsCustomerSpecificData: true }));
  assert.equal(result.decision, "reject");
  assert.equal(result.reason, "customer-isolation-failed");
});

test("repeated isolated invariant can become a bounded proposal", () => {
  const result = classifyLeverage(entry());
  assert.equal(result.decision, "propose");
  assert.equal(result.reason, "evidence-supported-seam");
});

test("a pattern ledger keeps disconfirming evidence and validation visible", () => {
  const result = validatePatternLedgerEntry(entry({ disconfirmingEvidence: "" }));
  assert.equal(result.valid, false);
  assert.deepEqual(result.gaps, ["disconfirmingEvidence"]);
});

test("a product packet includes maintenance and compatibility consequences", () => {
  const result = fieldToProductPacket({
    problem: "ambiguous external completion",
    workflow: "customer integration write",
    evidence: "two bounded contexts",
    currentWorkaround: "duplicated ledgers",
    invariant: "intent and completion state",
    variance: "resource semantics",
    proposal: "provider-neutral module",
    impact: "reduce duplicate-effect risk",
    uncertainty: "third context absent",
    owner: "product-owner",
    nextValidation: "third adapter",
    disconfirmation: "read-only integrations",
    maintenance: "versioned contract and support owner",
    compatibility: "retention and semantic conflict behavior",
  });
  assert.equal(result.valid, true);
});
