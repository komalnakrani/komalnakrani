import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { advanceMigration, compareVersions, migrationDisposition, rollbackMigration, validateChangeDossier } from "../lib/migration.mjs";

const dossier=JSON.parse(await readFile(new URL("../change/pf-12-change-dossier.json",import.meta.url),"utf8"));

test("PF-12 v0.1 preserves the behavior contract and all compatibility states",()=>assert.deepEqual(validateChangeDossier(dossier),[]));
test("candidate average relevance improves while critical abstention and compatibility regress",()=>{
  const report=compareVersions(dossier);
  assert.ok(report.candidate.meanScore>report.current.meanScore);
  assert.deepEqual(report.criticalRegressions,["M03","M04"]);
  assert.ok(report.candidate.maxLatency>report.current.maxLatency);
});
test("migration disposition delays without rewriting the contract",()=>{
  const result=migrationDisposition(dossier);
  assert.equal(result.value,"delay-and-reduce-scope");
  assert.equal(result.contractChanged,false);
  assert.match(result.fallback,/deterministic/);
});
test("migration advances only through explicit replay, review, shadow, and cohort states",()=>{
  let state="inventory";
  for(const event of ["replay","review","shadow","cohort","approve","retire"]) state=advanceMigration(state,event);
  assert.equal(state,"retired");
});
test("a stop during cohort delays and a stop after migration rolls back",()=>{
  assert.equal(advanceMigration("bounded-cohort","critical-error",{stop:true}),"delayed");
  assert.equal(advanceMigration("migrated","critical-error",{stop:true}),"rolled-back");
});
test("rollback restores contract identity and exposes reconciliation",()=>{
  const result=rollbackMigration(dossier,{candidateVisible:true,effects:[]});
  assert.equal(result.candidateEnabled,false);
  assert.equal(result.contract,dossier.current.behaviorContract);
  assert.equal(result.reconcileRequired,true);
});
