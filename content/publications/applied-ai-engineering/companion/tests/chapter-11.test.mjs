import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { generateJudgmentFixtures } from "../evaluation/generate-decision-fixtures.mjs";
import { blindCalibration, deterministicGrade, disagreementReport, seededBiasedModelGrade } from "../lib/judgment.mjs";

const design=JSON.parse(await readFile(new URL("../evaluation/pf-07-evaluator-design.json",import.meta.url),"utf8"));
const fixtures=generateJudgmentFixtures();

test("PF-07 v0.3 assigns claims to bounded evaluators and authority",()=>{
  assert.equal(design.version,"0.3.0");
  assert.ok(design.claims.every((claim)=>claim.evaluator&&claim.authority));
});
test("deterministic grader is limited to invariants",()=>{
  assert.equal(deterministicGrade({schemaValid:true,eligible:true,policyState:"respond",effects:0}).pass,true);
  assert.deepEqual(deterministicGrade({schemaValid:true,eligible:false,policyState:"respond",effects:0}).failures,["ineligible-candidate"]);
});
test("seeded model-grader fixture exposes position or verbosity bias",()=>{
  const decisions=fixtures.map((fixture)=>seededBiasedModelGrade(fixture));
  assert.ok(decisions.some((decision)=>decision.positionBias));
  assert.ok(decisions.some((decision)=>decision.verbosityBias));
});
test("blind calibration bounds agreement to the synthetic sample",()=>{
  const report=blindCalibration(fixtures);
  assert.equal(report.sampleSize,3);
  assert.ok(report.agreement>=0&&report.agreement<=1);
  assert.match(report.limitation,/not correctness/);
});
test("disagreement report leaves substantive dispute unresolved",()=>{
  const model=fixtures.map((fixture)=>({id:fixture.id,selected:seededBiasedModelGrade(fixture).selected}));
  const raters=fixtures.map((fixture)=>({id:fixture.id,selected:fixture.reference??"A"}));
  const report=disagreementReport(fixtures,model,raters);
  const disputed=report.find((item)=>item.caseId==="J-003");
  assert.equal(disputed.unresolved,true);
  assert.match(disputed.authorityHandoff,/catalog-domain/);
});
test("agreement never replaces release authority",()=>assert.match(design.authorityHandoff,/cannot authorize/));
