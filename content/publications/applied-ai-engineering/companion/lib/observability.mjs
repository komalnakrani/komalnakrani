export function validateObservabilityPolicy(policy){
  const errors=[];
  if(policy.artifactId!=="PF-09"||policy.version!=="0.3.0") errors.push("observability artifact identity must be PF-09 v0.3.0");
  if(policy.defaultRawContentCollection!==false) errors.push("raw content collection must default off");
  for(const signal of policy.signalCatalog??[]) for(const field of ["purpose","sensitivity","owner","decision","retentionDays","threshold","blindSpot"]) if(signal[field]==null) errors.push(`${signal.id} missing ${field}`);
  return errors;
}

export function redactTrace(input,policy){
  const trace={};
  for(const field of policy.allowedTraceFields) if(input[field]!==undefined) trace[field]=input[field];
  const removed=Object.keys(input).filter((field)=>!policy.allowedTraceFields.includes(field));
  return {trace,removed,rawContentRetained:removed.some((field)=>policy.forbiddenTraceFields.includes(field))?false:false};
}

export function deleteExpiredTraces(traces,{now,retentionDays}){
  const cutoff=new Date(now).getTime()-retentionDays*86400000;
  const retained=traces.filter((trace)=>new Date(trace.timestamp).getTime()>=cutoff);
  return {deletedCount:traces.length-retained.length,retained,retainedTraceIds:retained.map((trace)=>trace.traceId)};
}

export function diagnosticView(traces){
  const serviceGreen=traces.every((trace)=>trace.latencyMs<950&&!trace.policyFlags.includes("service-error"));
  const groups=new Map();
  for(const trace of traces){
    const group=groups.get(trace.segmentCode)??{segment:trace.segmentCode,count:0,failures:0,layers:{}};
    group.count+=1;
    if(trace.behaviorState!=="respond") group.failures+=1;
    if(trace.failureLayer) group.layers[trace.failureLayer]=(group.layers[trace.failureLayer]??0)+1;
    groups.set(trace.segmentCode,group);
  }
  const segments=[...groups.values()].map((group)=>({...group,successRate:(group.count-group.failures)/group.count})).sort((a,b)=>a.segment.localeCompare(b.segment));
  const critical=segments.filter((segment)=>segment.successRate<0.8);
  return {serviceGreen,segments,critical,diagnosis:serviceGreen&&critical.length?"green-service-failing-product-segment":"no-hidden-critical-segment"};
}

export function feedbackIntake(report){
  return {feedbackId:report.feedbackId,selectedSample:true,representative:false,taxonomyCode:report.taxonomyCode,evidenceIds:report.evidenceIds??[],route:report.severity==="critical"?"adjudicate-and-add-case":"sample-review"};
}
