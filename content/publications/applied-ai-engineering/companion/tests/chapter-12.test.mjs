import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { generateDecisionFixtures } from "../evaluation/generate-decision-fixtures.mjs";
import { packetHash, runAblation, runExperiment, validateExperimentPlan } from "../lib/experiment.mjs";

const plan=JSON.parse(await readFile(new URL("../experiments/pf-08-experiment-plan.json",import.meta.url),"utf8"));
const policy=JSON.parse(await readFile(new URL("../evaluation/pf-07-error-policy.json",import.meta.url),"utf8"));
const rows=generateDecisionFixtures();

test("PF-08 plan is preregistered, versioned, and complete",()=>assert.deepEqual(validateExperimentPlan(plan),[]));
test("plan hash and deterministic result reproduce",()=>{
  const first=runExperiment({plan,rows,policy});
  const second=runExperiment({plan,rows,policy});
  assert.equal(first.planHash,packetHash(plan));
  assert.deepEqual(first,second);
});
test("result cannot precede plan",()=>assert.throws(()=>runExperiment({plan,rows,policy,completedAt:"2026-08-16T08:00:00.000Z"}),/follow/));
test("aggregate improvement is rejected when a critical segment regresses",()=>{
  const result=runExperiment({plan,rows,policy});
  assert.ok(result.challenger.metrics.recall>result.baseline.metrics.recall);
  assert.equal(result.disposition,"reject-challenger");
  assert.ok(result.negativeEvidence.includes("permission-exposure"));
});
test("paired cases preserve segment and negative evidence",()=>{
  const result=runExperiment({plan,rows,policy});
  assert.equal(result.paired.length,rows.length);
  assert.ok(result.paired.some((item)=>item.segment==="long-tail"&&item.label==="incompatible"));
});
test("ablation is versioned by fixture hash and reports segments",()=>{
  const ablation=runAblation({rows,scoreField:"challengerScore",threshold:plan.threshold,ablation:"without-challenger-weights"});
  assert.match(ablation.fixtureHash,/^[a-f0-9]{64}$/);
  assert.ok(ablation.segments.length>0);
});
