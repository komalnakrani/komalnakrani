export function percentile(values,p){
  if(!values.length) return null;
  const sorted=[...values].sort((a,b)=>a-b);
  return sorted[Math.max(0,Math.ceil(p*sorted.length)-1)];
}

export function budgetReport(policy){
  const rows=policy.requests;
  const segmentNames=[...new Set(rows.map((row)=>row.segment))].sort();
  const summarize=(items)=>({count:items.length,meanMs:Math.round(items.reduce((sum,row)=>sum+row.latencyMs,0)/items.length),p95Ms:percentile(items.map((row)=>row.latencyMs),0.95),p99Ms:percentile(items.map((row)=>row.latencyMs),0.99),costP95:percentile(items.map((row)=>row.costUnits),0.95),maxConcurrency:Math.max(...items.map((row)=>row.concurrency)),qualityRate:items.filter((row)=>row.qualityPass).length/items.length});
  return {artifactId:policy.artifactId,version:policy.version,aggregate:summarize(rows),segments:segmentNames.map((segment)=>({segment,...summarize(rows.filter((row)=>row.segment===segment))}))};
}

export function validateBudgetPolicy(policy){
  const errors=[];
  if(policy.artifactId!=="PF-09"||policy.version!=="0.2.0") errors.push("budget artifact identity must be PF-09 v0.2.0");
  if(policy.caseStatus!=="fictional-synthetic") errors.push("budget fixture must remain fictional-synthetic");
  if((policy.configurations??[]).length<3) errors.push("three configurations are required");
  for(const config of policy.configurations??[]) for(const field of ["quality","p95Ms","capacityRps","costUnits","criticalSegmentRecall","risk"]) if(config[field]==null) errors.push(`${config.id} missing ${field}`);
  return errors;
}

export function configurationDisposition(policy,config){
  const b=policy.budgets;
  const failures=[];
  if(config.p95Ms>b.p95Ms) failures.push("tail-latency");
  if(config.costUnits>b.costUnitsPerRequestP95) failures.push("cost");
  if(config.criticalSegmentRecall<b.criticalSegmentRecallMin) failures.push("critical-segment");
  if(/broad-shared/.test(config.cache)) failures.push("cache-permission-freshness");
  return {id:config.id,pass:failures.length===0,failures,risk:config.risk};
}

export function retryAmplification({requests,maxAttempts,retryRate}){
  const extra=Math.ceil(requests*retryRate)*(Math.max(1,maxAttempts)-1);
  return {initial:requests,extra,total:requests+extra,amplification:(requests+extra)/requests};
}

export function selectParetoConfiguration(policy){
  const dispositions=policy.configurations.map((config)=>configurationDisposition(policy,config));
  const selected=dispositions.find((row)=>row.id===policy.selectedConfiguration);
  return {selected,dispositions,reason:policy.selectionReason};
}
