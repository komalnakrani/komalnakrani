import { createHash } from "node:crypto";

export function validateReadiness(packet){
  const errors=[];
  if(packet.artifactId!=="PF-11"||packet.version!=="0.1.0") errors.push("readiness identity must be PF-11 v0.1.0");
  for(const field of ["decision","versions","evidence","unresolvedGaps","plan","signals","stopTriggers","rollback","communications","disposition"]) if(packet[field]==null) errors.push(`missing ${field}`);
  if(packet.plan.stages.some((stage)=>stage.effectsAllowed)) errors.push("bounded Patchwork release must not allow effects");
  return errors;
}

export function cohortRoute(packet,{subjectId,segment}){
  if(packet.plan.restrictedSegments.includes(segment)) return {route:"control",reason:"restricted-segment"};
  if(!packet.plan.eligibleSegments.includes(segment)) return {route:"control",reason:"not-in-eligible-scope"};
  const bucket=Number.parseInt(createHash("sha256").update(`${packet.plan.routerSalt}:${subjectId}`).digest("hex").slice(0,8),16)%100;
  return {route:bucket<10?"bounded-text-cohort":"control",reason:"deterministic-cohort",bucket};
}

export function shadowResult(candidate){ return {observed:true,outputVisible:false,effects:[],candidateState:candidate.state,learningScope:"shadow-comparison-only"}; }

export function readinessDisposition(packet,{authorityPresent=false,deadlinePressure=false}={}){
  if(packet.stopTriggers.includes("unowned-critical-risk")) return "stop";
  if(packet.unresolvedGaps.some((gap)=>gap.disposition==="blocks-all")) return deadlinePressure?"delay":"stop";
  if(packet.unresolvedGaps.length) return authorityPresent?"reduce-scope":"delay";
  return authorityPresent?"go":"conditional-go";
}

export function stopGate(packet,signals){
  const fired=[];
  if(signals.criticalErrors>0) fired.push("any-critical-error");
  if(signals.permissionBypass>0) fired.push("permission-bypass");
  if(signals.autonomousEffectAttempt>0) fired.push("autonomous-effect-attempt");
  if(signals.textP95OverBudget) fired.push("text-p95-over-budget");
  if(signals.auditControlLoss) fired.push("audit-control-loss");
  if(signals.unknownEffectState) fired.push("unknown-effect-state");
  return {stop:fired.length>0,fired,action:fired.length?"disable-and-rollback":"continue-bounded-stage"};
}

export function rollbackReplay(packet,cases){
  return {featureEnabled:false,route:"current-deterministic-search",reconciled:cases.every((item)=>item.effectState==="none"),replayed:cases.length,restrictedSegmentsPreserved:packet.plan.restrictedSegments.every((segment)=>cases.some((item)=>item.segment===segment&&item.route==="control")),authorityRequired:packet.rollback.authority};
}
