import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { confoundedChanges, experimentSummary, planIdentity, validateExperiment } from "../lib/isolated-experiment.mjs";

const fixture = JSON.parse(await readFile(new URL("../experiments/mosaic-isolated-experiment.json", import.meta.url), "utf8"));

test("experiment is preregistered, effect-free, and changes one variable family", () => assert.deepEqual(validateExperiment(fixture), []));
test("plan identity is deterministic and plan precedes synthetic results", () => {
  assert.equal(planIdentity(fixture.plan), planIdentity(fixture.plan));
  assert.ok(fixture.plan.preregisteredAt < fixture.plan.resultsObservedAt);
});
test("aggregate gain cannot erase Gujarati and tail-duration regressions", () => {
  const summary = experimentSummary(fixture);
  assert.ok(summary.candidatePasses > summary.baselinePasses);
  assert.deepEqual(summary.regressions, ["EXP-GU-CITATION"]);
  assert.equal(summary.tailRegression, true);
  assert.equal(summary.disposition, "revise");
});
test("four-change candidate is explicitly confounded while abstention remains intact", () => {
  assert.deepEqual(confoundedChanges(fixture), ["judgeVersion", "messageVersion", "modelVersion", "rerankerVersion"]);
  const conflict = fixture.pairedResults.find((item) => item.caseId === "EXP-GUE-CONFLICT");
  assert.equal(conflict.baselineState, "escalate");
  assert.equal(conflict.candidateState, "escalate");
  assert.equal(conflict.requiredAbstentionMiss, false);
});
