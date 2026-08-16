import { retrieve } from "./retrieval.mjs";
import { validateProviderEnvelope, validateToolProposal } from "./interfaces.mjs";

const makeTrace = (request, scenario) => ({
  schemaVersion: 1,
  traceId: `trace-${request.id}-${scenario}`,
  contractVersion: "0.1.0",
  interfaceVersion: "0.1.0",
  scenario,
  transitions: [],
  effectAttempts: [],
  caseStatus: "fictional-synthetic"
});

const finish = (trace, state, reasonCode, payload = {}) => {
  trace.transitions.push({ state, reasonCode });
  return { schemaVersion: 1, state, reasonCode, trace, effects: [], ...payload };
};

export function deterministicProviderAdapter(retrieval, scenario = "success") {
  if (scenario === "timeout") return { schemaVersion: 1, adapterVersion: "local-0.1.0", status: "timeout", errorCode: "DEPENDENCY_TIMEOUT" };
  if (scenario === "invalid-output") return { adapterVersion: "local-0.1.0", status: "ok", candidateIds: "not-an-array" };
  return {
    schemaVersion: 1,
    adapterVersion: "local-0.1.0",
    outputVersion: "0.1.0",
    status: "ok",
    candidateIds: retrieval.candidates.map((candidate) => candidate.id),
    explanation: "Structured evidence is available for review; compatibility is not guaranteed."
  };
}

export function runVerticalSlice({ request, records, actor = { authenticated: true, scopes: ["patchwork:discover"] }, scenario = "success" }) {
  const trace = makeTrace(request, scenario);
  trace.transitions.push({ state: "received", reasonCode: "REQUEST_ACCEPTED" });

  if (!actor.authenticated || !actor.scopes?.includes("patchwork:discover")) {
    trace.transitions.push({ state: "blocked", reasonCode: "AUTHORIZATION_FAILED" });
    return finish(trace, "prohibited", "AUTHORIZATION_FAILED");
  }
  trace.transitions.push({ state: "authorized", reasonCode: "DISCOVERY_SCOPE_PRESENT" });

  const retrieval = retrieve(request, records, "hybrid");
  trace.transitions.push({ state: retrieval.state, reasonCode: "RETRIEVAL_DECISION", candidateCount: retrieval.candidates.length });
  if (retrieval.state !== "respond") return finish(trace, retrieval.state, `RETRIEVAL_${retrieval.state.toUpperCase()}`, { retrieval });

  const envelope = deterministicProviderAdapter(retrieval, scenario);
  const envelopeErrors = validateProviderEnvelope(envelope);
  if (envelope.status === "timeout") return finish(trace, "degraded", "DEPENDENCY_TIMEOUT", { retrieval, provider: envelope });
  if (envelopeErrors.length) return finish(trace, "abstain", "INVALID_PROVIDER_OUTPUT", { retrieval, validationErrors: envelopeErrors });

  const allowedIds = new Set(retrieval.candidates.map((candidate) => candidate.id));
  if (envelope.candidateIds.some((id) => !allowedIds.has(id))) return finish(trace, "abstain", "UNVALIDATED_CANDIDATE", { retrieval });

  const rankedResults = envelope.candidateIds.map((id) => retrieval.candidates.find((candidate) => candidate.id === id));
  const result = finish(trace, "respond", "VALIDATED_STRUCTURED_RESULT", {
    result: {
      schemaVersion: 1,
      candidates: rankedResults,
      explanation: envelope.explanation,
      claim: "evidence-backed-candidates-for-review",
      guaranteesCompatibility: false
    }
  });
  result.trace.transitions.push({ state: "presented", reasonCode: "NO_EXTERNAL_EFFECT" });
  return result;
}

export function proposeSellerQuestion({ candidateId, question }) {
  const proposal = { schemaVersion: 1, kind: "seller-question-draft", candidateId, question, effect: "draft-only", confirmed: false };
  const errors = validateToolProposal(proposal);
  return { accepted: errors.length === 0, errors, proposal, effects: [] };
}
