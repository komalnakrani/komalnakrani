export function diagnoseCase(item) {
  if (item.retrieval.forbiddenFound) return { diagnosis: "authorization-hard-failure", retrievalPass: false, generationPass: false, hardFailure: true };
  if (item.answerability === "no-evidence") {
    const generationPass = item.generation.abstained && item.generation.unsupportedClaims === 0;
    return { diagnosis: generationPass ? "corpus-or-retrieval-with-bounded-generation" : "generation-abstention", retrievalPass: false, generationPass, hardFailure: !generationPass };
  }
  if (item.answerability === "disputed-source") return { diagnosis: "source-authority-dispute", retrievalPass: true, generationPass: item.generation.state === "escalate", hardFailure: false };
  if (item.retrieval.supportFound && item.assembly.supportIncluded && item.assembly.qualifierIntact && (!item.generation.usesSupport || item.generation.unsupportedClaims > 0 || !item.citation.entailed)) return { diagnosis: "generation-use", retrievalPass: true, generationPass: false, hardFailure: false };
  if (!item.retrieval.supportFound) return { diagnosis: "corpus-query-or-retrieval", retrievalPass: false, generationPass: item.generation.abstained, hardFailure: false };
  if (!item.assembly.supportIncluded || !item.assembly.qualifierIntact) return { diagnosis: "context-assembly", retrievalPass: true, generationPass: false, hardFailure: false };
  return { diagnosis: "joint-pass", retrievalPass: true, generationPass: true, hardFailure: false };
}

export function evaluateJointFixture(fixture) {
  return fixture.cases.map((item) => ({ id: item.id, ...diagnoseCase(item), expected: item.expectedDiagnosis }));
}

export function validateJointFixture(fixture) {
  const errors = [];
  if (fixture.fictional !== true) errors.push("joint evaluation must be fictional");
  if ((fixture.effects ?? []).length) errors.push("joint evaluation must expose no effects");
  for (const field of ["corpus", "labels", "retrieval", "assembly", "generation", "evaluator"]) if (!fixture.identities?.[field]) errors.push(`identities lack ${field}`);
  const families = new Set((fixture.metricQuestions ?? []).map((item) => item.family));
  for (const family of ["retrieval", "ranking", "generation", "citation", "behavior"]) if (!families.has(family)) errors.push(`metric family ${family} missing`);
  if (fixture.adjudication?.automatedEvaluatorAuthority !== false) errors.push("automated evaluator must have no authority");
  for (const result of evaluateJointFixture(fixture)) if (result.diagnosis !== result.expected) errors.push(`${result.id} expected ${result.expected} got ${result.diagnosis}`);
  return errors;
}
