import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { altitudeBrief, delegationRecord, portfolioOrder, validateLeadershipPacket, verifyFinalDossier } from "../lib/leadership.mjs";

const packet=JSON.parse(await readFile(new URL("../change/pf-12-leadership.json",import.meta.url),"utf8"));

test("PF-12 v1.0 has three systems and authority-preserving recommendations",()=>assert.deepEqual(validateLeadershipPacket(packet),[]));
test("portfolio attention prioritizes high consequence evidence and ownership gap",()=>{
  const ordered=portfolioOrder(packet);
  assert.equal(ordered[0].system,"SYS-SENTINEL");
  assert.equal(ordered[0].recommendation,"stop threshold exposure and escalate missing qualified authority");
});
test("decision altitudes preserve shared evidence and distinct focus",()=>{
  const r=packet.recommendations[0];
  const implementation=altitudeBrief(r,"implementation");
  const authority=altitudeBrief(r,"formal-authority");
  assert.equal(implementation.evidence,authority.evidence);
  assert.notEqual(implementation.focus,authority.focus);
  assert.ok(authority.declinedResponsibility);
});
test("delegation keeps scope, gate, owner, escalation, authority, and declined responsibility",()=>{
  const r=packet.recommendations.find((x)=>x.system==="SYS-DRAFTMATE");
  const record=delegationRecord(r,{delegate:"assistant engineer",gate:"effect reconciliation test"});
  assert.equal(record.gate,"effect reconciliation test");
  assert.match(record.declinedResponsibility,/does not authorize/);
});
test("final dossier verifier requires every PF artifact and refuses production claims",()=>{
  const artifacts=["PF-02","PF-07","PF-08","PF-09","PF-10","PF-11","PF-12"].map((artifactId)=>({artifactId,productionClaim:false,releaseClaim:false}));
  assert.equal(verifyFinalDossier(packet,artifacts).pass,true);
  assert.equal(verifyFinalDossier(packet,artifacts.slice(1)).pass,false);
  assert.equal(verifyFinalDossier(packet,[...artifacts,{artifactId:"EXTRA",productionClaim:true}]).pass,false);
});
test("growth evidence is decisions and systems improved, not title or heroics",()=>{
  assert.match(packet.growthPlan.evidence,/decisions improved/);
  assert.ok(packet.growthPlan.prohibitions.includes("heroic incident count"));
  assert.ok(packet.evidenceStandard.prohibitions.includes("title as authority"));
});
