const consequenceRank={low:1,moderate:2,high:3,critical:4};

export function validateFailurePolicy(policy){
  const errors=[];
  for(const field of ["artifactId","version","status","caseStatus","owner","authority","retryPolicy","circuitPolicy","fallbackLadder","failureMatrix"]) if(policy[field]==null) errors.push(`missing ${field}`);
  if(policy.artifactId!=="PF-09"||policy.version!=="0.1.0") errors.push("failure artifact identity must be PF-09 v0.1.0");
  if(policy.caseStatus!=="fictional-synthetic") errors.push("failure fixture must remain fictional-synthetic");
  for(const row of policy.failureMatrix??[]) for(const field of ["layer","userConsequence","signal","owner","retrySafety","fallback","stopCondition","recovery"]) if(!row[field]) errors.push(`${row.id} missing ${field}`);
  return errors;
}

export function deterministicJitter(attempt,seed){ return (attempt*seed*13)%31; }

export function retrySchedule(policy,failureType,{hasIdempotencyKey=false,isEffect=false}={}){
  const allowed=policy.retryPolicy.retryable.includes(failureType);
  if(!allowed) return {allowed:false,attempts:1,delaysMs:[],reason:"failure-not-retryable"};
  if(isEffect&&policy.retryPolicy.effectRetryRequiresIdempotency&&!hasIdempotencyKey) return {allowed:false,attempts:1,delaysMs:[],reason:"effect-idempotency-required"};
  const attempts=policy.retryPolicy.maxAttempts;
  const delaysMs=Array.from({length:attempts-1},(_,index)=>policy.retryPolicy.baseBackoffMs*(2**index)+deterministicJitter(index+1,policy.retryPolicy.jitterSeed));
  return {allowed:true,attempts,delaysMs,reason:"bounded-retry"};
}

export function chooseFallback(policy,{consequence,evidenceSufficient,permissionCurrent,effectState="none",authorityAvailable=false}){
  if(effectState==="unknown") return authorityAvailable?"human-review":"stop";
  if(consequenceRank[consequence]>=consequenceRank.critical) return "stop";
  if(!permissionCurrent||!evidenceSufficient) return consequenceRank[consequence]>=consequenceRank.high?"abstain":"reduced-capability";
  return "alternate-evidenced-path";
}

export function runFailureMatrix(policy){
  const errors=validateFailurePolicy(policy);
  if(errors.length) throw new Error(errors.join("; "));
  return policy.failureMatrix.map((row)=>({
    id:row.id,
    injection:row.injection,
    layer:row.layer,
    contained:Boolean(row.signal&&row.owner&&row.fallback&&row.stopCondition),
    recoveryBounded:Boolean(row.recovery&&row.retrySafety!=="unbounded"),
    userConsequence:row.userConsequence,
    evidence:`${row.signal}:${row.recovery}`
  }));
}

export function advanceCircuit(policy,events){
  let failures=0,state="closed",probes=0;
  for(const event of events){
    if(event==="timer") { if(state==="open") state="half-open"; continue; }
    if(state==="open") continue;
    if(state==="half-open"){
      probes+=1;
      if(event==="success") { state="closed"; failures=0; }
      else state="open";
      if(probes>=policy.circuitPolicy.halfOpenProbes&&state==="half-open") state="open";
      continue;
    }
    if(event==="failure") failures+=1;
    if(failures>=policy.circuitPolicy.failureThreshold) state="open";
  }
  return {state,failures,probes};
}
