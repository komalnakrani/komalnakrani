export function validateReuseLedger(l){
  const errors=[];
  if(l.artifactId!=="PF-12"||l.version!=="0.2.0") errors.push("reuse ledger must be PF-12 v0.2.0");
  if((l.assets??[]).length!==10) errors.push("exactly ten classified assets are required");
  for(const a of l.assets??[]) for(const field of ["kind","decision","evidenceCases","localAssumptions","owner","fallback"]) if(a[field]==null) errors.push(`${a.id} missing ${field}`);
  if(!l.assets.some((a)=>a.decision==="reject-abstraction")) errors.push("one tempting abstraction must be rejected");
  return errors;
}

export function reuseDecision(asset,threshold){
  const repeated=new Set(asset.evidenceCases).size>=threshold.minimumIndependentCases;
  const portable=["reuse-configurably","copy-and-adapt","standardize-names-only"].includes(asset.decision);
  return {id:asset.id,eligible:repeated&&portable,decision:asset.decision,repeated,localAssumptionsPreserved:asset.localAssumptions.length>0,owner:asset.owner,fallback:asset.fallback};
}

export function validatePortableEnvelope(value){
  const required=["state","evidenceIds","limitations","version"];
  return {pass:required.every((field)=>value[field]!=null),missing:required.filter((field)=>value[field]==null),localFields:Object.keys(value).filter((field)=>!required.includes(field))};
}

export function crossCaseValidation(ledger){
  const decisions=ledger.assets.map((asset)=>reuseDecision(asset,ledger.evidenceThreshold));
  return {eligible:decisions.filter((d)=>d.eligible).map((d)=>d.id),keptLocal:decisions.filter((d)=>d.decision==="keep-local").map((d)=>d.id),rejected:decisions.filter((d)=>d.decision==="reject-abstraction").map((d)=>d.id),disconfirmation:ledger.disconfirmationPlan};
}
