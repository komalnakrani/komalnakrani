import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { budgetReport, configurationDisposition, percentile, retryAmplification, selectParetoConfiguration, validateBudgetPolicy } from "../lib/budgets.mjs";

const policy=JSON.parse(await readFile(new URL("../operations/pf-09-resource-budget.json",import.meta.url),"utf8"));

test("PF-09 v0.2 resource policy carries three complete configurations",()=>assert.deepEqual(validateBudgetPolicy(policy),[]));
test("nearest-rank percentiles preserve a slow tail",()=>assert.equal(percentile([100,110,120,900,1300],0.95),1300));
test("aggregate and critical segments remain separate",()=>{
  const report=budgetReport(policy);
  const mobile=report.segments.find((row)=>row.segment==="image-mobile");
  assert.ok(mobile.p95Ms>report.aggregate.meanMs);
  assert.ok(mobile.qualityRate<report.aggregate.qualityRate);
});
test("fast aggregate configuration fails permission and critical-segment gates",()=>{
  const config=policy.configurations.find((row)=>row.id==="fast-aggregate");
  const result=configurationDisposition(policy,config);
  assert.equal(result.pass,false);
  assert.ok(result.failures.includes("critical-segment"));
  assert.ok(result.failures.includes("cache-permission-freshness"));
});
test("selected Pareto choice passes all declared gates without erasing risk",()=>{
  const choice=selectParetoConfiguration(policy);
  assert.equal(choice.selected.id,"evidence-first");
  assert.equal(choice.selected.pass,true);
  assert.match(choice.selected.risk,/tail/);
});
test("retry policy exposes capacity amplification",()=>assert.deepEqual(retryAmplification({requests:100,maxAttempts:2,retryRate:0.2}),{initial:100,extra:20,total:120,amplification:1.2}));
