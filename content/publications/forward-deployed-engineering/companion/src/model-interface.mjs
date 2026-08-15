export class DeterministicModelDouble {
  constructor({ cases = {} } = {}) {
    this.cases = cases;
    this.version = "deterministic-double-v1";
  }

  async suggest({ caseId, evidence }) {
    if (!Array.isArray(evidence) || evidence.length === 0) {
      return { state: "abstain", reason: "evidence-required", suggestions: [], modelVersion: this.version };
    }
    const fixture = this.cases[caseId];
    if (!fixture) return { state: "abstain", reason: "unknown-case", suggestions: [], modelVersion: this.version };
    return { ...structuredClone(fixture), modelVersion: this.version };
  }
}

export async function runWithBudget(model, input, { timeoutMs = 100, maxCostUnits = 10 } = {}) {
  if (timeoutMs <= 0 || maxCostUnits <= 0) return { state: "blocked", reason: "invalid-budget" };
  let timer;
  const timeout = new Promise((resolve) => {
    timer = setTimeout(() => resolve({ state: "fallback", reason: "timeout" }), timeoutMs);
  });
  const result = await Promise.race([model.suggest(input), timeout]);
  clearTimeout(timer);
  const costUnits = Array.isArray(input.evidence) ? input.evidence.length : 0;
  if (costUnits > maxCostUnits) return { state: "fallback", reason: "cost-budget" };
  return { ...result, costUnits };
}
