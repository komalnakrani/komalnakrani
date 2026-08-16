export function validateDataRecipe(recipe) {
  const errors = [];
  if (recipe?.incoming?.status !== "method-selection-complete-training-not-approved") errors.push("MD-09 no-training state changed");
  if (recipe?.trainingAuthorized !== false) errors.push("recipe grants training authority");
  const rejected = (recipe?.sources ?? []).find((source) => source.id === "production-export-convenient.csv");
  if (rejected?.decision !== "reject-unauthorized-overlapping-personal-data") errors.push("unsafe production export not rejected");
  if (!(recipe?.exampleSchema?.required ?? []).includes("sourceFamilyId")) errors.push("family lineage missing");
  if ((recipe?.hypothesis?.protectedCriteria ?? []).length < 7) errors.push("protected criteria incomplete");
  if (recipe?.mixturePlan?.isPopulationEstimate !== false) errors.push("mixture misrepresented as population estimate");
  if (recipe?.status !== "recipe-specified-data-gate-pending") errors.push("recipe status grants excess readiness");
  return {errors, eligibleSources:(recipe?.sources ?? []).filter((source)=>source.decision.startsWith("eligible") || source.decision.includes("review-required")).map((source)=>source.id), rejectedSources:(recipe?.sources ?? []).filter((source)=>source.decision.startsWith("reject")).map((source)=>source.id)};
}
