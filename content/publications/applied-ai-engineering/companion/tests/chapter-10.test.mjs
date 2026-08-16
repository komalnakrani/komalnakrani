import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { generateDecisionFixtures } from "../evaluation/generate-decision-fixtures.mjs";
import { metricReport, regressionGate, reliabilityData, segmentErrorReport, thresholdSweep } from "../lib/metrics.mjs";

const policy=JSON.parse(await readFile(new URL("../evaluation/pf-07-error-policy.json",import.meta.url),"utf8"));
const rows=generateDecisionFixtures();

test("PF-07 v0.2 taxonomy separates errors from correct abstention",()=>{
  assert.equal(policy.version,"0.2.0");
  assert.ok(policy.taxonomy.some((item)=>item.id==="ERR-INCOMPATIBLE"&&item.severity==="critical"));
  assert.ok(policy.taxonomy.some((item)=>item.id==="OUT-CORRECT-ABSTAIN"));
});
test("aggregate challenger metric can improve while critical segments fail",()=>{
  const baseline=metricReport(rows,"baselineScore",policy.threshold);
  const challenger=metricReport(rows,"challengerScore",policy.threshold);
  assert.ok(challenger.recall>baseline.recall);
  assert.equal(regressionGate(rows,"challengerScore",policy).pass,false);
});
test("segment report preserves incompatible, permission, and stale critical errors",()=>{
  const report=segmentErrorReport(rows,"challengerScore",policy.threshold);
  const labels=report.flatMap((segment)=>segment.criticalErrors.map((error)=>error.label));
  assert.deepEqual(new Set(labels),new Set(["incompatible","permission"]));
});
test("threshold sweep exposes coverage, abstention, false matches, and segments",()=>{
  const sweep=thresholdSweep(rows,"challengerScore",[0.5,0.7,0.85]);
  assert.equal(sweep.length,3);
  for(const point of sweep){assert.ok(point.coverage!=null);assert.ok(point.abstentionRate!=null);assert.ok(point.segments.length>0);}
});
test("reliability data does not relabel scores as correctness",()=>{
  const bins=reliabilityData(rows,"challengerScore");
  assert.ok(bins.some((bin)=>bin.count>0&&bin.meanScore!==bin.observedRelevantRate));
});
test("critical regression gate names authority and negative reasons",()=>{
  const gate=regressionGate(rows,"challengerScore",policy);
  assert.equal(gate.authority,policy.releasePolicy.authority);
  assert.ok(gate.reasons.includes("permission-exposure"));
  assert.ok(gate.reasons.includes("incompatible-candidate-presented"));
});
