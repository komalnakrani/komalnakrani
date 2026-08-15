const LEVEL = new Map([["low", 0], ["medium", 1], ["high", 2], ["critical", 3]]);

function required(value, field) {
  if (value == null || value === "") throw new TypeError(`${field} is required`);
}

export function prioritizePortfolio(engagements) {
  for (const engagement of engagements) {
    for (const field of ["engagementId", "consequence", "reversibility", "evidenceGap", "decisionLatency", "nextDecision", "confidence", "owner"]) {
      required(engagement[field], field);
    }
  }
  return [...engagements].sort((a, b) => {
    const consequence = LEVEL.get(b.consequence) - LEVEL.get(a.consequence);
    if (consequence !== 0) return consequence;
    const evidenceGap = LEVEL.get(b.evidenceGap) - LEVEL.get(a.evidenceGap);
    if (evidenceGap !== 0) return evidenceGap;
    const reversibility = LEVEL.get(a.reversibility) - LEVEL.get(b.reversibility);
    if (reversibility !== 0) return reversibility;
    return LEVEL.get(b.decisionLatency) - LEVEL.get(a.decisionLatency);
  }).map((engagement, index) => ({
    ...engagement,
    ordinalPriority: index + 1,
    explanation: "ordered by consequence, evidence gap, low reversibility, then decision latency; no cardinal risk score",
  }));
}

export function validateDelegationContract(contract) {
  const gaps = [];
  for (const field of ["objective", "authority", "evidence", "constraints", "reviewPoints", "escalation", "owner"]) {
    const value = contract?.[field];
    if (Array.isArray(value) ? value.length === 0 : !value) gaps.push(field);
  }
  return { valid: gaps.length === 0, gaps };
}

export function multiAltitudeMemo({ executive, operational, technical, sharedFacts, authority, reviewTrigger }) {
  const gaps = [];
  for (const [field, value] of Object.entries({ executive, operational, technical, sharedFacts, authority, reviewTrigger })) {
    if (Array.isArray(value) ? value.length === 0 : !value) gaps.push(field);
  }
  return { valid: gaps.length === 0, gaps, executive, operational, technical, sharedFacts };
}

export function dossierIndex({ sourceHash, buildHash, issueState, riskState, reuseState, nextOwner }) {
  const gaps = [];
  for (const [field, value] of Object.entries({ sourceHash, buildHash, issueState, riskState, reuseState, nextOwner })) {
    if (!value) gaps.push(field);
  }
  return { valid: gaps.length === 0, gaps, sourceHash, buildHash, issueState, riskState, reuseState, nextOwner };
}
