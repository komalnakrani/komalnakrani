const instructionTokens=/\b(ignore|override|system message|must rank|contact seller|purchase now)\b/i;

export function validateControlMatrix(packet){
  const errors=[];
  if(packet.artifactId!=="PF-10"||packet.version!=="0.1.0") errors.push("control artifact identity must be PF-10 v0.1.0");
  if(packet.caseStatus!=="fictional-synthetic") errors.push("control packet must remain fictional-synthetic");
  if((packet.controls??[]).length<6) errors.push("six controls are required");
  for(const c of packet.controls??[]) for(const field of ["objective","implementation","version","test","monitor","owner","residual","reviewer","authority"]) if(!c[field]) errors.push(`${c.id} missing ${field}`);
  return errors;
}

export function quarantineSellerContent(record){
  const detected=instructionTokens.test(record.sellerText??"");
  return {recordId:record.id,eligibleFields:{title:record.title,revision:record.revision,unit:record.unit},sellerTextUsed:false,detected,decision:detected?"quarantine-and-review":"treat-as-inert-data"};
}

export function validateCandidate({candidate,request,permission}){
  const reasons=[];
  if(!permission.allowed) reasons.push("permission-denied");
  if(candidate.revision!==request.revision) reasons.push("incompatible-revision");
  if(candidate.unit!==request.unit) reasons.push("incompatible-unit");
  if(!(candidate.evidenceIds??[]).length) reasons.push("evidence-missing");
  if(candidate.claim==="guaranteed-compatible") reasons.push("prohibited-claim");
  return {pass:reasons.length===0,reasons};
}

export function advanceToolSequence(state,event,{permission=true,valid=true,idempotencyKey=null}={}){
  const transitions={none:{propose:"draft"},draft:{validate:valid?"validated":"rejected"},validated:{authorize:permission?"authorized":"rejected"},authorized:{confirm:"confirmed"},confirmed:{execute:idempotencyKey?"submitted":"rejected"},submitted:{complete:"completed",timeout:"unknown"},unknown:{"reconcile-complete":"completed","reconcile-not-started":"confirmed"}};
  return transitions[state]?.[event]??"rejected";
}

export function controlAudit(input,packet){
  const event={};
  for(const field of packet.dataHandling.allowedFields) if(input[field]!==undefined) event[field]=input[field];
  return {event,removed:Object.keys(input).filter((field)=>!packet.dataHandling.allowedFields.includes(field))};
}

export function approvalDisposition(packet,{reviewerDecisions={},actorRole="engineer"}={}){
  if(actorRole==="engineer"&&reviewerDecisions.acceptResidual===true) return {value:"invalid-self-approval",authorized:false};
  if(packet.residualDecision.status.startsWith("blocks-release")&&!reviewerDecisions[packet.residualDecision.owner]) return {value:"reduce-scope",authorized:false,residual:packet.residualDecision.id};
  return {value:"ready-for-authority-decision",authorized:false,residual:packet.residualDecision.id};
}
