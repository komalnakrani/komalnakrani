export function validateIncident(incident){
  const errors=[];
  if(incident.artifactId!=="PF-11"||incident.version!=="0.2.0") errors.push("incident identity must be PF-11 v0.2.0");
  for(const field of ["incidentId","detectedBy","affectedBehavior","affectedSegment","versions","timeline","traceBundle","hypotheses","containment","correction","artifactChanges","verification","residuals"]) if(incident[field]==null) errors.push(`missing ${field}`);
  if(!incident.hypotheses.some((h)=>h.status==="disconfirmed-false-lead")) errors.push("one disconfirmed false lead is required");
  if((incident.artifactChanges??[]).length<3) errors.push("durable artifact changes are required");
  return errors;
}

export function incidentTimeline(incident){
  const ordered=[...incident.timeline].sort((a,b)=>new Date(a.at)-new Date(b.at));
  return {ordered,chronological:ordered.every((item,index)=>index===0||new Date(item.at)>=new Date(ordered[index-1].at)),containmentBeforeCorrection:new Date(incident.containment.at)<=new Date(ordered.find((x)=>x.event.includes("quarantine"))?.at??incident.containment.at)};
}

export function hypothesisReport(incident){
  return incident.hypotheses.map((h)=>({id:h.id,layer:h.layer,status:h.status,support:h.evidenceFor.length,disconfirmation:h.evidenceAgainst.length,claim:h.status.startsWith("supported")?"contributing-condition":"not-supported"}));
}

export function redactIncidentTrace(trace){
  const allowed=["traceId","segment","behaviorState","failureLayer","evidenceIds","policyFlags","latencyMs"];
  return {trace:Object.fromEntries(allowed.filter((key)=>trace[key]!==undefined).map((key)=>[key,trace[key]])),removed:Object.keys(trace).filter((key)=>!allowed.includes(key))};
}

export function containmentDecision(incident,{optimizeRequested=false}={}){
  if(optimizeRequested) return {allowed:false,next:"contain",action:incident.containment.action};
  return {allowed:true,next:"verify-containment",action:incident.containment.action};
}

export function durableLearning(incident){
  const kinds={evaluation:false,control:false,runbook:false,ownership:false};
  for(const change of incident.artifactChanges){
    if(/case/.test(change)) kinds.evaluation=true;
    if(/CTL|control|monitor/.test(change)) kinds.control=true;
    if(/runbook/.test(change)) kinds.runbook=true;
    if(/owner/.test(change)) kinds.ownership=true;
  }
  return {kinds,complete:kinds.evaluation&&kinds.control&&kinds.runbook,verification:incident.verification,residuals:incident.residuals};
}
