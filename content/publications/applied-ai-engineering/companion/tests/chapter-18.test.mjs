import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { containmentDecision, durableLearning, hypothesisReport, incidentTimeline, redactIncidentTrace, validateIncident } from "../lib/incidents.mjs";

const incident=JSON.parse(await readFile(new URL("../releases/pf-11-incident.json",import.meta.url),"utf8"));

test("PF-11 v0.2 incident has timeline, false lead, containment, correction, learning, and residuals",()=>assert.deepEqual(validateIncident(incident),[]));
test("incident timeline is chronological and containment precedes correction",()=>{
  const timeline=incidentTimeline(incident);
  assert.equal(timeline.chronological,true);
  assert.equal(timeline.containmentBeforeCorrection,true);
});
test("model blame is disconfirmed while multiple contributing conditions remain",()=>{
  const report=hypothesisReport(incident);
  assert.equal(report.find((row)=>row.layer==="model").claim,"not-supported");
  assert.equal(report.filter((row)=>row.claim==="contributing-condition").length,3);
});
test("incident traces remove raw seller and user content",()=>{
  const redacted=incident.traceBundle.map(redactIncidentTrace);
  assert.ok(redacted[0].removed.includes("rawSellerText"));
  assert.ok(redacted[1].removed.includes("rawQuery"));
  assert.equal(JSON.stringify(redacted).includes("must-not-retain"),false);
});
test("optimization is blocked until consequence is contained",()=>assert.deepEqual(containmentDecision(incident,{optimizeRequested:true}),{allowed:false,next:"contain",action:incident.containment.action}));
test("durable learning changes evaluation, control, and runbook rather than code alone",()=>{
  const learning=durableLearning(incident);
  assert.equal(learning.complete,true);
  assert.equal(learning.kinds.evaluation,true);
  assert.equal(learning.kinds.control,true);
  assert.equal(learning.kinds.runbook,true);
});
