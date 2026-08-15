export function applyControlLadder({ suggestion, equipmentMatch, safetyRelevant, approval }) {
  if (equipmentMatch !== "confirmed") return { action: "block", reason: "equipment-not-confirmed" };
  if (!suggestion || suggestion.state !== "suggested") return { action: "fallback", reason: suggestion?.reason ?? "no-suggestion" };
  if (suggestion.prohibited === true) return { action: "block", reason: "deterministic-policy" };
  if (safetyRelevant && approval !== "approved") return { action: "require-approval", reason: "qualified-approval-required" };
  return { action: "present", reason: "bounded-suggestion" };
}
