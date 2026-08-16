function checkType(value, expected) {
  const types = Array.isArray(expected) ? expected : [expected];
  return types.some((type) => type === "null" ? value === null : type === "array" ? Array.isArray(value) : type === "object" ? value && typeof value === "object" && !Array.isArray(value) : typeof value === type);
}

export function parseCandidate(raw) {
  try { return {value: JSON.parse(raw), error: null}; }
  catch { return {value: null, error: "parse:invalid-json"}; }
}

export function structuralErrors(value, schema) {
  const errors = [];
  if (!value || typeof value !== "object" || Array.isArray(value)) return ["schema:root-not-object"];
  for (const field of schema.required) if (!(field in value)) errors.push(`schema:missing-${field}`);
  for (const field of Object.keys(value)) if (!(field in schema.properties)) errors.push(`schema:additional-${field}`);
  for (const [field, rule] of Object.entries(schema.properties)) {
    if (!(field in value)) continue;
    if (!checkType(value[field], rule.type)) errors.push(`schema:type-${field}`);
    if (rule.const !== undefined && value[field] !== rule.const) errors.push(`schema:const-${field}`);
    if (rule.enum && !rule.enum.includes(value[field])) errors.push(`schema:enum-${field}`);
  }
  for (const [collection, required] of Object.entries(schema.itemContract)) {
    for (const [index, item] of (value[collection] ?? []).entries()) for (const field of required) if (!(field in item)) errors.push(`schema:${collection}-${index}-missing-${field}`);
  }
  return errors;
}

export function semanticAndProvenanceErrors(value, schema, fixture) {
  const errors = [];
  const serialized = JSON.stringify(value).toLowerCase();
  for (const field of schema.prohibitedEffectFields) if (field in value) errors.push(`authority:prohibited-field-${field}`);
  for (const phrase of ["warranty is approved", "schedule the repair", "contact the customer", "order the part"]) if (serialized.includes(phrase)) errors.push(`semantic:prohibited-effect-${phrase.replaceAll(" ", "-")}`);
  if (!fixture.allowedCaseIds.includes(value.caseId)) errors.push("authorization:case-not-allowed");
  const referenced = [...(value.observations ?? []), ...(value.nextSteps ?? [])].flatMap((item) => item.evidenceRefs ?? []);
  for (const ref of referenced) if (!fixture.allowedEvidence.includes(ref)) errors.push(`provenance:unknown-or-unauthorized-${ref}`);
  if (value.state === "abstain" && (value.nextSteps?.length ?? 0) > 0) errors.push("semantic:abstain-has-next-step");
  if (value.state === "escalate" && !value.escalation) errors.push("semantic:escalate-missing-target");
  return errors;
}

export function validateProposal(raw, schema, fixture, repairAttempts = 0) {
  const parsed = parseCandidate(raw);
  if (parsed.error) return {terminal:repairAttempts < fixture.retryPolicy.maxRepairAttempts ? "repair" : "fail-closed", errors:[parsed.error], effect:null};
  const structural = structuralErrors(parsed.value, schema);
  if (structural.length) return {terminal:repairAttempts < fixture.retryPolicy.maxRepairAttempts ? "repair" : "fail-closed", errors:structural, effect:null};
  const semantic = semanticAndProvenanceErrors(parsed.value, schema, fixture);
  if (semantic.length) return {terminal:"fail-closed", errors:semantic, effect:null};
  if (parsed.value.state === "abstain") return {terminal:"abstain", errors:[], effect:null};
  if (parsed.value.state === "escalate") return {terminal:"escalate", errors:[], effect:null};
  return {terminal:"valid", errors:[], effect:null, proposal:parsed.value};
}
