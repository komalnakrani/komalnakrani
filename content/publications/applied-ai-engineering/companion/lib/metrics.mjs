const safeDivide = (n, d) => d ? n / d : null;

export function classifyAtThreshold(rows, scoreField, threshold) {
  return rows.map((row) => ({...row,score:row[scoreField],respond:row[scoreField] >= threshold}));
}

export function metricReport(rows, scoreField, threshold) {
  const classified = classifyAtThreshold(rows, scoreField, threshold);
  const tp = classified.filter((r)=>r.respond && r.relevant).length;
  const fp = classified.filter((r)=>r.respond && !r.relevant).length;
  const fn = classified.filter((r)=>!r.respond && r.relevant).length;
  const tn = classified.filter((r)=>!r.respond && !r.relevant).length;
  const responded = classified.filter((r)=>r.respond);
  return {
    threshold,
    counts:{tp,fp,fn,tn},
    precision:safeDivide(tp,tp+fp),
    recall:safeDivide(tp,tp+fn),
    coverage:safeDivide(responded.length,classified.length),
    falseMatchRate:safeDivide(fp,fp+tn),
    abstentionRate:safeDivide(classified.length-responded.length,classified.length)
  };
}

export function segmentErrorReport(rows, scoreField, threshold) {
  const classified = classifyAtThreshold(rows,scoreField,threshold);
  const segments = [...new Set(classified.map((r)=>r.segment))].sort();
  return segments.map((segment)=>{
    const subset=classified.filter((r)=>r.segment===segment);
    const criticalErrors=subset.filter((r)=>r.respond && ["incompatible","permission","stale"].includes(r.label));
    const relevant=subset.filter((r)=>r.relevant);
    return {
      segment,
      cases:subset.length,
      coverage:safeDivide(subset.filter((r)=>r.respond).length,subset.length),
      recall:safeDivide(relevant.filter((r)=>r.respond).length,relevant.length),
      criticalErrors:criticalErrors.map((r)=>({caseId:r.id,label:r.label,score:r.score}))
    };
  });
}

export function thresholdSweep(rows, scoreField, thresholds) {
  return thresholds.map((threshold)=>({
    ...metricReport(rows,scoreField,threshold),
    segments:segmentErrorReport(rows,scoreField,threshold)
  }));
}

export function reliabilityData(rows, scoreField, bins = [[0,0.5],[0.5,0.7],[0.7,0.85],[0.85,1.01]]) {
  return bins.map(([min,max])=>{
    const items=rows.filter((r)=>r[scoreField]>=min && r[scoreField]<max);
    return {
      min,max,count:items.length,
      meanScore:safeDivide(items.reduce((sum,r)=>sum+r[scoreField],0),items.length),
      observedRelevantRate:safeDivide(items.filter((r)=>r.relevant).length,items.length)
    };
  });
}

export function regressionGate(rows, scoreField, policy) {
  const segments=segmentErrorReport(rows,scoreField,policy.threshold);
  const criticalErrors=segments.flatMap((s)=>s.criticalErrors);
  const criticalRecallFailures=segments.filter((s)=>policy.criticalSegments.includes(s.segment) && s.recall != null && s.recall < policy.releasePolicy.minCriticalSegmentRecall);
  const reasons=[];
  if(criticalErrors.length>policy.releasePolicy.maxCriticalErrors) reasons.push("critical-error-budget-exceeded");
  if(criticalErrors.some((e)=>e.label==="permission")) reasons.push("permission-exposure");
  if(criticalErrors.some((e)=>e.label==="incompatible")) reasons.push("incompatible-candidate-presented");
  if(criticalRecallFailures.length) reasons.push("critical-segment-recall-below-floor");
  return {pass:reasons.length===0,reasons,criticalErrors,criticalRecallFailures,authority:policy.releasePolicy.authority};
}
