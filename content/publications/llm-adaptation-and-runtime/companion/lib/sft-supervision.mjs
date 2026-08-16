export function auditSftSimulation(x){
  const errors=[];
  if(x.trainingExecuted!==false||x.artifactsCreated!==false)errors.push("fabricated execution");
  if(!x.simulationOnly)errors.push("simulation label missing");
  if(!String(x.blocker).includes("template"))errors.push("inherited blocker missing");
  const late=x.candidates?.find(v=>v.id==="sft-late");
  const early=x.candidates?.find(v=>v.id==="sft-early");
  if(!(late?.trainLoss<early?.trainLoss))errors.push("loss failure absent");
  if(late?.disposition!=="reject-forbidden-regressions")errors.push("late checkpoint not rejected");
  if(x.forwardedCandidate!=="sft-early")errors.push("wrong simulated comparator");
  return {errors,candidates:x.candidates?.length??0,trainingExecuted:x.trainingExecuted};
}
