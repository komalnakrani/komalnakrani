import { createHash } from "node:crypto";

export const changeHash=(value)=>createHash("sha256").update(JSON.stringify(value,Object.keys(value).sort())).digest("hex");

export function validateChangeDossier(d){
  const errors=[];
  if(d.artifactId!=="PF-12"||d.version!=="0.1.0") errors.push("change dossier must be PF-12 v0.1.0");
  if(d.current.behaviorContract!==d.candidate.behaviorContract) errors.push("candidate must be compared against unchanged contract");
  const states=new Set(d.compatibilityMatrix.map((row)=>row.status));
  for(const state of ["unchanged","improved","regressed","unknown","untestable"]) if(!states.has(state)) errors.push(`missing compatibility state ${state}`);
  return errors;
}

export function compareVersions(d){
  const mean=(field)=>d.cases.reduce((sum,row)=>sum+row[field],0)/d.cases.length;
  const critical=d.cases.filter((row)=>["ambiguous","incompatible","denied","stale"].includes(row.label));
  return {current:{meanScore:mean("currentScore"),responseRate:mean("currentRespond"),meanCost:mean("currentCost"),maxLatency:Math.max(...d.cases.map((row)=>row.currentLatency))},candidate:{meanScore:mean("candidateScore"),responseRate:mean("candidateRespond"),meanCost:mean("candidateCost"),maxLatency:Math.max(...d.cases.map((row)=>row.candidateLatency))},criticalRegressions:critical.filter((row)=>!row.currentRespond&&row.candidateRespond).map((row)=>row.id),matrix:d.compatibilityMatrix,caseHash:createHash("sha256").update(JSON.stringify(d.cases)).digest("hex")};
}

export function migrationDisposition(d){
  const report=compareVersions(d);
  return {value:report.criticalRegressions.length?"delay-and-reduce-scope":"ready-for-authority-review",contractChanged:d.disposition.contractChange!=="none",fallback:d.migration.fallback,reasons:report.criticalRegressions};
}

export function advanceMigration(state,event,{stop=false}={}){
  if(stop) return state==="migrated"?"rolled-back":"delayed";
  const next={inventory:{replay:"replay"},replay:{review:"review"},review:{shadow:"shadow"},shadow:{cohort:"bounded-cohort"},"bounded-cohort":{approve:"migrated"},migrated:{retire:"retired"}};
  return next[state]?.[event]??state;
}

export function rollbackMigration(d,{candidateVisible=false,effects=[]}={}){ return {route:"current-or-deterministic-fallback",candidateEnabled:false,reconcileRequired:candidateVisible||effects.length>0,effects,contract:d.current.behaviorContract,authorityRequired:d.migration.authority}; }
