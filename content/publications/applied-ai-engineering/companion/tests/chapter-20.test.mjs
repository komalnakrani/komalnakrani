import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { crossCaseValidation, reuseDecision, validatePortableEnvelope, validateReuseLedger } from "../lib/reuse.mjs";

const ledger=JSON.parse(await readFile(new URL("../change/pf-12-reuse-ledger.json",import.meta.url),"utf8"));

test("PF-12 v0.2 classifies ten assets and rejects one tempting abstraction",()=>assert.deepEqual(validateReuseLedger(ledger),[]));
test("repeated configurable schema earns reuse while local compatibility does not",()=>{
  const schema=reuseDecision(ledger.assets.find((a)=>a.id==="A01"),ledger.evidenceThreshold);
  const compatibility=reuseDecision(ledger.assets.find((a)=>a.id==="A05"),ledger.evidenceThreshold);
  assert.equal(schema.eligible,true);
  assert.equal(compatibility.eligible,false);
  assert.equal(compatibility.decision,"keep-local");
});
test("provider adapter is not portability evidence from one case",()=>{
  const adapter=reuseDecision(ledger.assets.find((a)=>a.id==="A03"),ledger.evidenceThreshold);
  assert.equal(adapter.repeated,false);
  assert.equal(adapter.eligible,false);
});
test("portable envelope keeps stable fields and permits local extension",()=>{
  const result=validatePortableEnvelope({state:"abstain",evidenceIds:["E1"],limitations:["local"],version:"1.0",compatibilityReason:"local"});
  assert.equal(result.pass,true);
  assert.deepEqual(result.localFields,["compatibilityReason"]);
});
test("cross-case validation preserves local decisions and rejected abstraction",()=>{
  const result=crossCaseValidation(ledger);
  assert.ok(result.eligible.includes("A01"));
  assert.deepEqual(result.keptLocal,["A05","A06","A07"]);
  assert.deepEqual(result.rejected,["A09"]);
});
test("reuse proposal includes consumers, ownership, fallback, migration, and disconfirmation",()=>{
  assert.match(ledger.proposal.consumerContract,/local task contract/);
  assert.ok(ledger.assets.every((a)=>a.owner&&a.fallback));
  assert.ok(ledger.disconfirmationPlan.length>=5);
});
