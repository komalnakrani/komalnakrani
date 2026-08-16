function exclusionReason(envelope, request) {
  if (envelope.tenant !== request.tenant || !envelope.purposes.includes(request.purpose)) return "unauthorized";
  if (envelope.superseded) return "stale";
  return null;
}

export function assembleProvenance(fixture, scenarioId) {
  const scenario = fixture.scenarios.find((item) => item.id === scenarioId);
  if (!scenario) throw new Error(`unknown scenario ${scenarioId}`);
  const byId = new Map(fixture.envelopes.map((item) => [item.id, item]));
  const included = [];
  const excluded = [];
  let used = 0;
  for (const id of scenario.selectedEnvelopeIds) {
    const envelope = byId.get(id);
    const reason = exclusionReason(envelope, fixture.request);
    if (reason) {
      excluded.push({ id, reason });
      continue;
    }
    if (used + envelope.units > fixture.policy.evidenceBudget) {
      excluded.push({ id, reason: "omitted-budget" });
      continue;
    }
    included.push(envelope);
    used += envelope.units;
  }
  const hasSupport = included.some((item) => item.supportRole === "supporting");
  const hasConflict = included.some((item) => item.supportRole === "conflicting");
  const terminal = hasSupport && hasConflict ? "escalate" : hasSupport ? "answer" : "abstain";
  const citations = included.flatMap((item) => fixture.citationHandles[item.id] ? [{ handle: fixture.citationHandles[item.id], envelopeId: item.id, parentSourceId: item.parentSourceId, revision: item.revision, span: item.span, target: item.citationTarget }] : []);
  return {
    scenarioId,
    policyVersion: fixture.policy.version,
    used,
    reservedOutput: fixture.policy.reservedOutput,
    included: included.map((item) => ({ id: item.id, trust: item.trust, supportRole: item.supportRole, text: item.text })),
    excluded,
    citations,
    terminal,
    effect: null
  };
}

export function validateProvenanceFixture(fixture) {
  const errors = [];
  if (fixture.fictional !== true) errors.push("assembly fixture must be fictional");
  if ((fixture.effects ?? []).length) errors.push("assembly fixture must expose no effects");
  for (const envelope of fixture.envelopes ?? []) {
    for (const field of ["unitId", "parentSourceId", "sourceFamily", "owner", "authorityClass", "revision", "digest", "span", "citationTarget", "tenant", "purposes", "effectiveFrom", "supportRole", "trust", "units", "text"]) if (envelope[field] === undefined) errors.push(`${envelope.id} lacks ${field}`);
    if (envelope.trust !== fixture.policy.trust) errors.push(`${envelope.id} has wrong trust label`);
  }
  for (const scenario of fixture.scenarios ?? []) {
    const actual = assembleProvenance(fixture, scenario.id).terminal;
    if (actual !== scenario.expectedTerminal) errors.push(`${scenario.id} expected ${scenario.expectedTerminal} got ${actual}`);
  }
  return errors;
}
