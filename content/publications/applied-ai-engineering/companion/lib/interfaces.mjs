const NAMES = ["query", "candidate", "rankedResult", "policy", "explanation", "toolProposal", "trace", "providerAdapter"];
const TRUST = new Set(["untrusted", "validated-data", "deterministic-control", "evidence-record"]);
const DISPOSITIONS = new Set(["block", "abstain", "degrade", "diagnose-only"]);

export function validateInterfaceSet(value) {
  const errors = [];
  if (value.schemaVersion !== 1) errors.push("schemaVersion must equal 1");
  if (value.interfaceSetId !== "PF-05") errors.push("interfaceSetId must equal PF-05");
  if (value.caseStatus !== "fictional-synthetic") errors.push("caseStatus must be fictional-synthetic");
  if (!/^\d+\.\d+\.\d+$/.test(value.version ?? "")) errors.push("version must use semver");
  const byName = new Map((value.boundaries ?? []).map((boundary) => [boundary.name, boundary]));
  for (const name of NAMES) {
    const boundary = byName.get(name);
    if (!boundary) { errors.push(`missing boundary ${name}`); continue; }
    if (!TRUST.has(boundary.trust)) errors.push(`${name}: invalid trust`);
    if (!DISPOSITIONS.has(boundary.failureDisposition)) errors.push(`${name}: invalid failure disposition`);
    for (const field of ["owner", "stateOwner", "validator", "authority"]) if (!boundary[field]) errors.push(`${name}: missing ${field}`);
  }
  return errors;
}

export function validateProviderEnvelope(envelope) {
  const errors = [];
  if (envelope.schemaVersion !== 1) errors.push("provider envelope schemaVersion must equal 1");
  if (!envelope.adapterVersion) errors.push("provider adapterVersion is required");
  if (!envelope.status || !["ok", "invalid", "timeout"].includes(envelope.status)) errors.push("provider status is invalid");
  if (envelope.status === "ok") {
    if (!Array.isArray(envelope.candidateIds)) errors.push("candidateIds must be an array");
    if (!envelope.outputVersion) errors.push("outputVersion is required");
  }
  return errors;
}

export function validateToolProposal(proposal) {
  const errors = [];
  if (proposal.kind !== "seller-question-draft") errors.push("unsupported tool proposal kind");
  if (proposal.effect !== "draft-only") errors.push("tool proposal must remain draft-only");
  if (proposal.confirmed !== false) errors.push("tool proposal must begin unconfirmed");
  if (!proposal.question || proposal.question.length < 10) errors.push("bounded draft question is required");
  return errors;
}
