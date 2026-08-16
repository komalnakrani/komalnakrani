export function validateLeadershipPacket(p){
  const errors=[];
  if(p.artifactId!=="PF-12"||p.version!=="1.0.0") errors.push("leadership packet must be PF-12 v1.0.0");
  if((p.portfolio??[]).length!==3) errors.push("three-system portfolio is required");
  for(const r of p.recommendations??[]) for(const field of ["recommendation","evidence","uncertainty","owner","authority","nextGate","declinedResponsibility"]) if(!r[field]) errors.push(`${r.system} missing ${field}`);
  return errors;
}

export function portfolioOrder(packet){ return [...packet.recommendations].sort((a,b)=>a.attention-b.attention); }

export function altitudeBrief(recommendation,altitude){
  const shared={system:recommendation.system,recommendation:recommendation.recommendation,evidence:recommendation.evidence,uncertainty:recommendation.uncertainty};
  if(altitude==="implementation") return {...shared,focus:"mechanism, test, and state transition",owner:recommendation.owner};
  if(altitude==="system") return {...shared,focus:"combined behavior, operations, controls, and recovery",nextGate:recommendation.nextGate};
  if(altitude==="product") return {...shared,focus:"user consequence, scope, value, and stop decision",authority:recommendation.authority};
  if(altitude==="portfolio") return {...shared,focus:"attention allocation, active change, burden, and leverage"};
  if(altitude==="specialist") return {...shared,focus:"scoped domain, privacy, security, safety, or legal review",declinedResponsibility:recommendation.declinedResponsibility};
  return {...shared,focus:"formal disposition",authority:recommendation.authority,declinedResponsibility:recommendation.declinedResponsibility};
}

export function verifyFinalDossier(packet,artifacts){
  const present=new Set(artifacts.map((a)=>a.artifactId));
  const missing=packet.dossier.requiredArtifacts.filter((id)=>!present.has(id));
  const prohibitedClaim=artifacts.some((a)=>a.productionClaim===true||a.releaseClaim===true);
  return {pass:missing.length===0&&!prohibitedClaim,missing,prohibitedClaim,finalState:packet.dossier.finalState,authority:packet.dossier.authority};
}

export function delegationRecord(recommendation,{delegate,gate}){ return {system:recommendation.system,delegate,scope:recommendation.recommendation,gate,owner:recommendation.owner,authority:recommendation.authority,escalation:recommendation.nextGate,declinedResponsibility:recommendation.declinedResponsibility}; }
