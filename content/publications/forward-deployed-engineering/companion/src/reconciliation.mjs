export function reconcileEquipmentCandidates(candidates) {
  if (!Array.isArray(candidates)) throw new TypeError("candidates must be an array");
  const valid = candidates.filter((candidate) => candidate.status === "active");
  if (valid.length === 0) return { state: "missing", equipmentId: null, candidates: [] };
  const ids = [...new Set(valid.map((candidate) => candidate.equipmentId))].sort();
  if (ids.length === 1) return { state: "confirmed", equipmentId: ids[0], candidates: valid };
  return { state: "ambiguous", equipmentId: null, candidates: valid };
}

export function classifyExternalCompletion({ accepted, finalState, responseReceived }) {
  if (responseReceived && finalState === "committed") return "completed";
  if (responseReceived && accepted === false) return "rejected";
  if (!responseReceived || (accepted && !finalState)) return "unknown";
  return "inconsistent";
}
