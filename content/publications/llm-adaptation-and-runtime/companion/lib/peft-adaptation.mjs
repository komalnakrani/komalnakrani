export function auditPeftSimulation(x){
  const errors=[];
  if(x.trainingExecuted!==false||x.artifactsCreated!==false)errors.push("fabricated execution");
  for(const k of ["baseRevision","baseDigest","tokenizerRevision","tokenizerDigest","template","runtime","dependencyLock","quantization","mergeState"])if(!x.compatibilityTuple?.[k])errors.push(`missing ${k}`);
  if(x.wrongBaseFailure?.decision!=="reject-before-load-base-digest-mismatch")errors.push("wrong base accepted");
  if(x.wrongTokenizerFailure?.decision!=="reject-before-load-tokenizer-mismatch")errors.push("wrong tokenizer accepted");
  const wide=x.adapterCandidates?.find(v=>v.id==="peft-r16-attn-mlp");
  if(!String(wide?.disposition).startsWith("reject"))errors.push("protected regression accepted");
  if(x.mergeTest?.attempted!==false||x.mergeTest?.equivalenceClaim!==false)errors.push("merge outcome fabricated");
  return {errors,candidates:x.adapterCandidates?.length??0,forwarded:x.forwardedCandidate};
}
