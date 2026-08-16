import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { advanceCircuit, chooseFallback, retrySchedule, runFailureMatrix, validateFailurePolicy } from "../lib/reliability.mjs";

const policy=JSON.parse(await readFile(new URL("../operations/pf-09-failure-recovery.json",import.meta.url),"utf8"));

test("PF-09 v0.1 failure policy is complete and synthetic",()=>assert.deepEqual(validateFailurePolicy(policy),[]));
test("five cross-layer failure injections contain and recover with evidence",()=>{
  const report=runFailureMatrix(policy);
  assert.equal(report.length,5);
  assert.ok(report.every((row)=>row.contained&&row.recoveryBounded));
  assert.ok(new Set(report.map((row)=>row.layer)).size>=4);
});
test("retry is bounded with deterministic backoff and jitter",()=>assert.deepEqual(retrySchedule(policy,"timeout"),{allowed:true,attempts:2,delaysMs:[44],reason:"bounded-retry"}));
test("effect retry stops without an idempotency key",()=>assert.equal(retrySchedule(policy,"timeout",{isEffect:true}).reason,"effect-idempotency-required"));
test("unknown effect outcome reconciles or stops instead of repeating",()=>{
  assert.equal(chooseFallback(policy,{consequence:"high",evidenceSufficient:false,permissionCurrent:true,effectState:"unknown",authorityAvailable:true}),"human-review");
  assert.equal(chooseFallback(policy,{consequence:"high",evidenceSufficient:false,permissionCurrent:true,effectState:"unknown",authorityAvailable:false}),"stop");
});
test("circuit opens and requires a successful bounded probe to close",()=>{
  assert.equal(advanceCircuit(policy,["failure","failure"]).state,"open");
  assert.equal(advanceCircuit(policy,["failure","failure","timer","success"]).state,"closed");
});
