const tokens = (text = "") => new Set(text.toLowerCase().match(/[a-z0-9]+/g) ?? []);
const mm = (dimension) => dimension?.unit === "in" ? dimension.value * 25.4 : dimension?.unit === "mm" ? dimension.value : null;

export function lexicalScore(query, record) {
  const queryTokens = tokens(query.text);
  const recordTokens = tokens(`${record.title} ${record.family}`);
  const overlap = [...queryTokens].filter((token) => recordTokens.has(token)).length;
  return queryTokens.size ? overlap / queryTokens.size : 0;
}

export function cosineScore(left, right) {
  if (!left?.length || left.length !== right?.length) return 0;
  const dot = left.reduce((sum, value, index) => sum + value * right[index], 0);
  const leftNorm = Math.sqrt(left.reduce((sum, value) => sum + value * value, 0));
  const rightNorm = Math.sqrt(right.reduce((sum, value) => sum + value * value, 0));
  return leftNorm && rightNorm ? dot / (leftNorm * rightNorm) : 0;
}

function eligibility(query, record) {
  if (record.family !== query.family) return { allowed: false, reason: "scope" };
  if (record.permission !== "allowed") return { allowed: false, reason: "permission" };
  if (record.freshness !== "fresh") return { allowed: false, reason: "stale" };
  if (record.conflictingEvidence) return { allowed: false, reason: "conflicting-evidence" };
  if (record.shaftDiameter.status !== "observed") return { allowed: false, reason: "missing-unit" };
  const queryMm = mm(query.shaftDiameter);
  const recordMm = mm(record.shaftDiameter);
  if (queryMm != null && recordMm != null && Math.abs(queryMm - recordMm) > 0.5) return { allowed: false, reason: "deterministic-incompatibility" };
  return { allowed: true, reason: "eligible" };
}

export function retrieve(query, records, mode = "hybrid") {
  if (query.family === "excluded-safety") return { state: "prohibited", candidates: [], trace: { mode, included: [], excluded: [{ reason: "prohibited-scope" }] } };
  if (!query.shaftDiameter) return { state: "clarify", candidates: [], trace: { mode, included: [], excluded: [{ reason: "missing-required-dimension" }] } };
  if (!query.shaftDiameter.unit) return { state: "abstain", candidates: [], trace: { mode, included: [], excluded: [{ reason: "missing-unit" }] } };

  const scored = records.map((record) => {
    const lexical = lexicalScore(query, record);
    const vector = cosineScore(query.imageFeatures, record.imageFeatures);
    const retrievalScore = mode === "lexical" ? lexical : mode === "vector" ? vector : Math.max(lexical, vector) + Math.min(lexical, vector) * 0.25;
    return { record, lexical, vector, retrievalScore };
  }).filter((item) => item.retrievalScore > 0 || item.record.family === query.family);

  const included = [];
  const excluded = [];
  for (const item of scored) {
    const decision = eligibility(query, item.record);
    if (!decision.allowed) {
      excluded.push({ candidateRef: item.record.id, reason: decision.reason });
      continue;
    }
    const exactDimension = Math.abs(mm(query.shaftDiameter) - mm(item.record.shaftDiameter)) <= 0.1 ? 0.35 : 0.15;
    included.push({
      id: item.record.id,
      canonicalClusterId: item.record.canonicalClusterId,
      sourceId: item.record.id,
      sourceVersion: "0.1.0",
      caseStatus: item.record.caseStatus,
      provenance: "synthetic_fixture",
      freshness: item.record.freshness,
      permission: item.record.permission,
      channelScores: { lexical: item.lexical, vector: item.vector },
      orderingScore: item.retrievalScore + exactDimension,
      matchedFields: ["family", "shaftDiameter"],
      unresolvedFields: [],
      instructionData: item.record.title
    });
  }
  included.sort((a, b) => b.orderingScore - a.orderingScore || a.id.localeCompare(b.id));
  const byCluster = new Map();
  for (const candidate of included) if (!byCluster.has(candidate.canonicalClusterId)) byCluster.set(candidate.canonicalClusterId, candidate);
  const deduplicated = [...byCluster.values()];
  return {
    state: deduplicated.length ? "respond" : "abstain",
    candidates: deduplicated,
    trace: {
      schemaVersion: 1, mode, contractVersion: "0.1.0", datasetVersion: "0.1.0",
      queryId: query.id, transformations: ["lowercase-tokenize", "explicit-unit-normalization"],
      included: deduplicated.map(({ id, channelScores, orderingScore }) => ({ id, channelScores, orderingScore })),
      excluded, downstream: "structured-evidence-only", generatedFallback: false
    }
  };
}
