const base = {
  schemaVersion: 1,
  suiteVersion: "0.1.0",
  caseStatus: "fictional-synthetic",
  provenance: "deterministic-fixture-generator"
};

const cases = [
  ["PF-E001", "development", ["PF-B01","PF-B02"], ["common-family","explicit-measurement"], ["fresh","authorized","sufficient"], ["lexical","vector-like","policy"], ["wrong-candidate-cost"], "respond", "VALIDATED_STRUCTURED_RESULT", "ordinary-16mm", {id:"PW-EQ001",family:"common-seal",text:"16 mm mechanical seal",shaftDiameter:{value:16,unit:"mm"}}],
  ["PF-E002", "challenge", ["PF-B05"], ["missing-measurement"], ["incomplete"], ["query-validation"], ["premature-recommendation"], "clarify", "RETRIEVAL_CLARIFY", "missing-measurement", {id:"PW-EQ002",family:"common-seal",text:"replacement seal",shaftDiameter:null}],
  ["PF-E003", "challenge", ["PF-B06"], ["ambiguous-unit"], ["ambiguous"], ["query-validation","policy"], ["wrong-unit-cost"], "abstain", "RETRIEVAL_ABSTAIN", "missing-unit", {id:"PW-EQ003",family:"common-seal",text:"seal diameter 16",shaftDiameter:{value:16,unit:null}}],
  ["PF-E004", "challenge", ["PF-B08"], ["empty-evidence"], ["absent"], ["retrieval","policy"], ["invented-listing"], "abstain", "RETRIEVAL_ABSTAIN", "empty-999mm", {id:"PW-EQ004",family:"common-seal",text:"999 mm seal",shaftDiameter:{value:999,unit:"mm"}}],
  ["PF-E005", "release-evaluation", ["PF-B04","PF-B14"], ["excluded-category"], ["prohibited"], ["scope-policy"], ["unsafe-category-assistance"], "prohibited", "RETRIEVAL_PROHIBITED", "excluded-safety", {id:"PW-EQ005",family:"excluded-safety",text:"pressure vessel seal",shaftDiameter:{value:16,unit:"mm"}}],
  ["PF-E006", "release-evaluation", ["PF-B11"], ["dependency-timeout"], ["partial"], ["provider-adapter","fallback"], ["silent-partial-result"], "degraded", "DEPENDENCY_TIMEOUT", "timeout", {id:"PW-EQ006",family:"common-seal",text:"16 mm mechanical seal",shaftDiameter:{value:16,unit:"mm"},scenario:"timeout"}],
  ["PF-E007", "release-evaluation", ["PF-B01","PF-B04"], ["invalid-structured-output"], ["invalid"], ["provider-adapter","validation"], ["unvalidated-result-effect"], "abstain", "INVALID_PROVIDER_OUTPUT", "invalid-output", {id:"PW-EQ007",family:"common-seal",text:"16 mm mechanical seal",shaftDiameter:{value:16,unit:"mm"},scenario:"invalid-output"}],
  ["PF-E008", "release-evaluation", ["PF-B14"], ["unauthorized-actor"], ["unauthorized"], ["identity","permission"], ["unauthorized-access"], "prohibited", "AUTHORIZATION_FAILED", "authorization", {id:"PW-EQ008",family:"common-seal",text:"16 mm mechanical seal",shaftDiameter:{value:16,unit:"mm"},actor:"denied"}],
  ["PF-E009", "challenge", ["PF-B12"], ["stale-source"], ["stale"], ["freshness-policy"], ["stale-compatibility-implication"], "abstain", "RETRIEVAL_ABSTAIN", "stale-only", {id:"PW-EQ009",family:"stale-only",text:"archived seal",shaftDiameter:{value:16,unit:"mm"}}],
  ["PF-E010", "challenge", ["PF-B10"], ["user-correction"], ["corrected"], ["query-validation","retrieval"], ["ignored-correction"], "respond", "VALIDATED_STRUCTURED_RESULT", "correction-flow", {id:"PW-EQ010",family:"common-seal",text:"corrected 16 mm mechanical seal",shaftDiameter:{value:16,unit:"mm"}}]
];

export function generateEvaluationCases(seed = 20260816) {
  return cases.map(([caseId, partition, contractClauseIds, segments, dataStates, mechanisms, consequences, state, reason, constructionGroup, input]) => ({
    ...base,
    caseId,
    partition,
    contractClauseIds,
    segments,
    dataStates,
    mechanisms,
    consequences,
    input,
    expected: { state, effectCount: 0, reasonCodes: [reason] },
    constructionGroup,
    seed
  }));
}
