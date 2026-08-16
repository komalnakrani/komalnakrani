import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { cohortRoute, readinessDisposition, rollbackReplay, shadowResult, stopGate, validateReadiness } from "../lib/release.mjs";

const packet=JSON.parse(await readFile(new URL("../releases/pf-11-readiness.json",import.meta.url),"utf8"));

test("PF-11 v0.1 readiness packet is complete and effect-free",()=>assert.deepEqual(validateReadiness(packet),[]));
test("restricted image and ambiguous segments never enter the cohort",()=>{
  assert.equal(cohortRoute(packet,{subjectId:"U1",segment:"image-heavy"}).reason,"restricted-segment");
  assert.equal(cohortRoute(packet,{subjectId:"U2",segment:"ambiguous-legacy"}).route,"control");
});
test("cohort routing is deterministic and scoped to eligible text",()=>{
  const first=cohortRoute(packet,{subjectId:"U3",segment:"text-warm"});
  assert.deepEqual(first,cohortRoute(packet,{subjectId:"U3",segment:"text-warm"}));
  assert.match(first.route,/control|bounded-text-cohort/);
});
test("shadow mode exposes no output or effect",()=>assert.deepEqual(shadowResult({state:"respond"}),{observed:true,outputVisible:false,effects:[],candidateState:"respond",learningScope:"shadow-comparison-only"}));
test("unresolved gaps delay without authority and reduce scope with authority despite deadline pressure",()=>{
  assert.equal(readinessDisposition(packet,{authorityPresent:false,deadlinePressure:true}),"delay");
  assert.equal(readinessDisposition(packet,{authorityPresent:true,deadlinePressure:true}),"reduce-scope");
});
test("critical signal stops and rollback preserves restricted segments",()=>{
  const gate=stopGate(packet,{criticalErrors:1,permissionBypass:0,autonomousEffectAttempt:0,textP95OverBudget:false,auditControlLoss:false,unknownEffectState:false});
  assert.equal(gate.stop,true);
  const replay=rollbackReplay(packet,[{segment:"text-warm",route:"control",effectState:"none"},{segment:"image-heavy",route:"control",effectState:"none"},{segment:"ambiguous-legacy",route:"control",effectState:"none"}]);
  assert.equal(replay.featureEnabled,false);
  assert.equal(replay.restrictedSegmentsPreserved,true);
});
