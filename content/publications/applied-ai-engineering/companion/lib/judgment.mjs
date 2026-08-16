const hashString = (text) => [...text].reduce((n,ch)=>(n*31+ch.charCodeAt(0))>>>0,2166136261);

export function deterministicGrade({schemaValid,eligible,policyState,effects}) {
  const failures=[];
  if(!schemaValid) failures.push("invalid-schema");
  if(!eligible) failures.push("ineligible-candidate");
  if(!policyState) failures.push("missing-policy-state");
  if(effects!==0) failures.push("unexpected-effect");
  return {pass:failures.length===0,failures,evaluator:"deterministic-invariant-v1"};
}

export function seededBiasedModelGrade(fixture, seed = 20260816) {
  const leftWords=fixture.left.text.split(/\s+/).length;
  const rightWords=fixture.right.text.split(/\s+/).length;
  const positionBias=((hashString(fixture.id)+seed)%4)!==0;
  let selected=positionBias?fixture.left.id:(rightWords>leftWords?fixture.right.id:fixture.left.id);
  if(Math.abs(rightWords-leftWords)>=8) selected=rightWords>leftWords?fixture.right.id:fixture.left.id;
  return {selected,positionBias,verbosityBias:Math.abs(rightWords-leftWords)>=8,evaluator:"seeded-biased-grader-v1",seed};
}

export function blindCalibration(fixtures, grader = seededBiasedModelGrade, seed = 20260816) {
  const resolved=fixtures.filter((f)=>f.reference);
  const decisions=resolved.map((fixture)=>({id:fixture.id,reference:fixture.reference,...grader(fixture,seed)}));
  const correct=decisions.filter((d)=>d.selected===d.reference).length;
  const positionErrors=decisions.filter((d)=>d.selected!==d.reference && d.positionBias).map((d)=>d.id);
  const verbosityErrors=decisions.filter((d)=>d.selected!==d.reference && d.verbosityBias).map((d)=>d.id);
  return {sampleSize:resolved.length,agreement:resolved.length?correct/resolved.length:null,decisions,positionErrors,verbosityErrors,limitation:"Synthetic blind sample; agreement is not correctness or cross-context validity"};
}

export function disagreementReport(fixtures, modelDecisions, raterDecisions) {
  return fixtures.map((fixture)=>{
    const model=modelDecisions.find((d)=>d.id===fixture.id)?.selected ?? null;
    const rater=raterDecisions.find((d)=>d.id===fixture.id)?.selected ?? null;
    const unresolved=fixture.reference==null || (model && rater && model!==rater);
    return {caseId:fixture.id,reference:fixture.reference,model,rater,unresolved,authorityHandoff:unresolved?(fixture.dispute??"named criterion authority"):null};
  });
}
