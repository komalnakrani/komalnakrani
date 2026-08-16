import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { deleteExpiredTraces, diagnosticView, feedbackIntake, redactTrace, validateObservabilityPolicy } from "../lib/observability.mjs";

const policy=JSON.parse(await readFile(new URL("../operations/pf-09-observability-policy.json",import.meta.url),"utf8"));
const traces=[
  {traceId:"T1",timestamp:"2026-08-15T10:00:00Z",taskCode:"discover",segmentCode:"text-warm",behaviorState:"respond",failureLayer:null,evidenceIds:["E1"],componentVersions:{ranker:"0.1"},latencyMs:420,costUnits:7,effectState:"none",policyFlags:[],rawPrompt:"private text"},
  {traceId:"T2",timestamp:"2026-08-15T10:01:00Z",taskCode:"discover",segmentCode:"image-mobile",behaviorState:"abstain",failureLayer:"context",evidenceIds:["E2"],componentVersions:{ranker:"0.1"},latencyMs:740,costUnits:13,effectState:"none",policyFlags:[],rawImage:"private bytes"},
  {traceId:"T3",timestamp:"2026-08-15T10:02:00Z",taskCode:"discover",segmentCode:"image-mobile",behaviorState:"degraded",failureLayer:"context",evidenceIds:[],componentVersions:{ranker:"0.1"},latencyMs:760,costUnits:12,effectState:"none",policyFlags:[],email:"person@example.invalid"}
];

test("PF-09 v0.3 policy has decision-bearing signals and raw collection off",()=>assert.deepEqual(validateObservabilityPolicy(policy),[]));
test("trace redaction retains evidence and versions but removes raw content",()=>{
  const result=redactTrace(traces[0],policy);
  assert.deepEqual(result.trace.evidenceIds,["E1"]);
  assert.equal(result.trace.rawPrompt,undefined);
  assert.ok(result.removed.includes("rawPrompt"));
  assert.equal(result.rawContentRetained,false);
});
test("diagnostic view finds failing product segment while service is green",()=>{
  const redacted=traces.map((trace)=>redactTrace(trace,policy).trace);
  const view=diagnosticView(redacted);
  assert.equal(view.serviceGreen,true);
  assert.equal(view.diagnosis,"green-service-failing-product-segment");
  assert.equal(view.critical[0].segment,"image-mobile");
});
test("retention deletion returns auditable counts and retained identifiers",()=>{
  const result=deleteExpiredTraces([{traceId:"old",timestamp:"2026-06-01T00:00:00Z"},...traces],{now:"2026-08-16T00:00:00Z",retentionDays:30});
  assert.equal(result.deletedCount,1);
  assert.ok(!result.retainedTraceIds.includes("old"));
});
test("feedback remains selected evidence rather than population truth",()=>{
  const result=feedbackIntake({feedbackId:"FB1",severity:"critical",taxonomyCode:"unsupported",evidenceIds:["E7"]});
  assert.equal(result.representative,false);
  assert.equal(result.route,"adjudicate-and-add-case");
});
test("every signal names purpose, sensitivity, owner, decision, retention, threshold, and blind spot",()=>assert.ok(policy.signalCatalog.every((signal)=>["purpose","sensitivity","owner","decision","retentionDays","threshold","blindSpot"].every((field)=>signal[field]!=null))));
