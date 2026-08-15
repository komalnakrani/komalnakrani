import test from "node:test";
import assert from "node:assert/strict";
import { DeterministicModelDouble, runWithBudget } from "../src/model-interface.mjs";
import { applyControlLadder } from "../src/policy.mjs";
import { evaluateCases } from "../src/evaluation.mjs";

const model = new DeterministicModelDouble({
  cases: {
    "case-safe": { state: "suggested", suggestions: [{ action: "inspect-filter", evidenceIds: ["manual-7"] }] },
    "case-prohibited": { state: "suggested", prohibited: true, suggestions: [{ action: "bypass-guard" }] }
  }
});

test("the deterministic model abstains without evidence or an approved fixture", async () => {
  assert.equal((await model.suggest({ caseId: "case-safe", evidence: [] })).state, "abstain");
  assert.equal((await model.suggest({ caseId: "case-unknown", evidence: ["manual-7"] })).state, "abstain");
});

test("budgets fail to a visible fallback instead of hiding latency or cost", async () => {
  const result = await runWithBudget(model, { caseId: "case-safe", evidence: ["a", "b"] }, { maxCostUnits: 1 });
  assert.deepEqual({ state: result.state, reason: result.reason }, { state: "fallback", reason: "cost-budget" });
});

test("deterministic policy and qualified approval bound suggestion behavior", async () => {
  const safe = await model.suggest({ caseId: "case-safe", evidence: ["manual-7"] });
  assert.equal(applyControlLadder({ suggestion: safe, equipmentMatch: "ambiguous", safetyRelevant: false }).action, "block");
  assert.equal(applyControlLadder({ suggestion: safe, equipmentMatch: "confirmed", safetyRelevant: true, approval: null }).action, "require-approval");
  assert.equal(applyControlLadder({ suggestion: safe, equipmentMatch: "confirmed", safetyRelevant: true, approval: "approved" }).action, "present");
  const prohibited = await model.suggest({ caseId: "case-prohibited", evidence: ["manual-7"] });
  assert.equal(applyControlLadder({ suggestion: prohibited, equipmentMatch: "confirmed", safetyRelevant: false }).action, "block");
});

test("evaluation preserves risk segments instead of reporting only an aggregate", async () => {
  const report = await evaluateCases({
    model,
    cases: [
      { id: "safe", segment: "common", input: { caseId: "case-safe", evidence: ["manual-7"] }, expectedState: "suggested" },
      { id: "critical", segment: "safety-critical", input: { caseId: "case-unknown", evidence: ["manual-9"] }, expectedState: "suggested" }
    ],
    grader: ({ testCase, output }) => ({ pass: output.state === testCase.expectedState })
  });
  assert.deepEqual(report.segments.common, { passed: 1, failed: 0 });
  assert.deepEqual(report.segments["safety-critical"], { passed: 0, failed: 1 });
});
