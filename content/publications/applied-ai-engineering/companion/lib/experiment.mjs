import { createHash } from "node:crypto";
import { metricReport, regressionGate, segmentErrorReport } from "./metrics.mjs";

const canonical = (value) => Array.isArray(value) ? value.map(canonical) : value && typeof value === "object" ? Object.fromEntries(Object.keys(value).sort().map((key)=>[key,canonical(value[key])])) : value;
export const packetHash = (value) => createHash("sha256").update(JSON.stringify(canonical(value))).digest("hex");

export function validateExperimentPlan(plan) {
  const errors=[];
  for(const field of ["artifactId","version","status","createdAt","decision","hypothesis","baseline","change","suite","primaryMetric","guardrails","segments","stopping","authority"]) if(plan[field]==null) errors.push(`missing ${field}`);
  if(plan.status!=="preregistered") errors.push("plan must be preregistered");
  if(plan.change?.singleControlledChange==null) errors.push("single controlled change is required");
  if(plan.caseStatus!=="fictional-synthetic") errors.push("plan must remain fictional-synthetic");
  return errors;
}

export function runExperiment({plan,rows,policy,completedAt="2026-08-16T10:00:00.000Z"}) {
  const errors=validateExperimentPlan(plan);
  if(errors.length) throw new Error(errors.join("; "));
  if(new Date(completedAt)<=new Date(plan.createdAt)) throw new Error("result must follow preregistered plan");
  const planHash=packetHash(plan);
  const baselineMetrics=metricReport(rows,plan.baseline.scoreField,plan.threshold);
  const challengerMetrics=metricReport(rows,plan.change.scoreField,plan.threshold);
  const baselineSegments=segmentErrorReport(rows,plan.baseline.scoreField,plan.threshold);
  const challengerSegments=segmentErrorReport(rows,plan.change.scoreField,plan.threshold);
  const baselineGate=regressionGate(rows,plan.baseline.scoreField,policy);
  const challengerGate=regressionGate(rows,plan.change.scoreField,policy);
  const paired=rows.map((row)=>({caseId:row.id,segment:row.segment,baselineRespond:row[plan.baseline.scoreField]>=plan.threshold,challengerRespond:row[plan.change.scoreField]>=plan.threshold,label:row.label}));
  const negativeEvidence=[];
  if(!challengerGate.pass) negativeEvidence.push(...challengerGate.reasons);
  const disposition=challengerGate.pass&&challengerMetrics.recall>baselineMetrics.recall?"adopt-challenger":"reject-challenger";
  const result={artifactId:plan.artifactId,version:plan.version,caseStatus:plan.caseStatus,completedAt,planHash,fixtureHash:packetHash(rows),baseline:{metrics:baselineMetrics,segments:baselineSegments,gate:baselineGate},challenger:{metrics:challengerMetrics,segments:challengerSegments,gate:challengerGate},paired,negativeEvidence,disposition,authorityRequired:plan.authority,limitations:plan.knownConfounds};
  return {...result,resultHash:packetHash(result)};
}

export function runAblation({rows,scoreField,threshold,ablation}) {
  const adjusted=rows.map((row)=>({...row,ablationScore:ablation==="without-challenger-weights"?row.baselineScore:row[scoreField]}));
  return {ablation,metrics:metricReport(adjusted,"ablationScore",threshold),segments:segmentErrorReport(adjusted,"ablationScore",threshold),fixtureHash:packetHash(adjusted.map(({id,segment,ablationScore,label})=>({id,segment,ablationScore,label})))};
}
