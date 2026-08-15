import test from "node:test";
import assert from "node:assert/strict";

import { createOrchidFixture } from "../src/synthetic-fixture.mjs";
import { runVerticalSlice } from "../src/vertical-slice.mjs";

test("the synthetic ticket-to-evidence-to-approved-suggestion path is reviewable", async () => {
  const result = await runVerticalSlice(createOrchidFixture());

  assert.equal(result.state, "ready-for-review");
  assert.equal(result.equipmentId, "OES-PUMP7");
  assert.deepEqual(result.evidenceIds, ["MANUAL-SYNTHETIC-7"]);
  assert.equal(result.audit.result, "present");
  assert.deepEqual(result.trace.map((step) => step.name), [
    "environment",
    "equipment-match",
    "equipment-contract",
    "evidence",
    "inventory",
    "bounded-model",
    "qualified-approval",
    "policy",
  ]);
});

test("ambiguous equipment stops before evidence or inventory access", async () => {
  const fixture = createOrchidFixture();
  fixture.ticket.equipmentCandidates.push({
    ...fixture.ticket.equipmentCandidates[0],
    equipmentId: "OES-PUMP8",
  });

  const result = await runVerticalSlice(fixture);
  assert.equal(result.state, "blocked");
  assert.equal(result.reason, "equipment-ambiguous");
  assert.deepEqual(result.trace.map((step) => step.name), ["environment", "equipment-match"]);
});

test("upstream evidence success followed by downstream rejection remains safely blocked", async () => {
  const result = await runVerticalSlice(createOrchidFixture({ inventoryMode: "rejected" }));

  assert.equal(result.state, "blocked");
  assert.equal(result.reason, "inventory-rejected-or-unavailable");
  assert.deepEqual(result.trace.slice(-2), [
    { name: "evidence", result: "found" },
    { name: "inventory", result: "rejected" },
  ]);
  assert.equal(result.suggestions, undefined);
});

test("ambiguous downstream completion requires reconciliation instead of retry", async () => {
  const result = await runVerticalSlice(createOrchidFixture({ inventoryMode: "unknown" }));

  assert.equal(result.state, "reconcile");
  assert.equal(result.reason, "inventory-completion-unknown");
  assert.equal(result.intentId, "INTENT-SYNTHETIC-7");
});

test("the feature defaults closed and prevents dependency calls", async () => {
  const fixture = createOrchidFixture();
  fixture.config.features.boundedSuggestion = false;

  const result = await runVerticalSlice(fixture);
  assert.equal(result.state, "blocked");
  assert.equal(result.reason, "environment-or-feature-disabled");
  assert.deepEqual(result.trace, [{ name: "environment", result: "accepted" }]);
});
