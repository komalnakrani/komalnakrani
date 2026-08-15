const REQUIRED = [
  "observation",
  "contexts",
  "frequency",
  "variance",
  "consequence",
  "workaround",
  "evidenceQuality",
  "isolation",
  "candidateLeverage",
  "disconfirmingEvidence",
  "validation",
  "owner",
];

export function validatePatternLedgerEntry(entry) {
  const gaps = REQUIRED.filter((field) => {
    const value = entry?.[field];
    return Array.isArray(value) ? value.length === 0 : value == null || value === "";
  });
  return { valid: gaps.length === 0, gaps };
}

export function classifyLeverage(entry) {
  const validation = validatePatternLedgerEntry(entry);
  if (!validation.valid) return { decision: "reject", reason: "incomplete-evidence", validation };
  if (entry.containsCustomerSpecificData === true || entry.isolation === "not-isolated") {
    return { decision: "reject", reason: "customer-isolation-failed", validation };
  }
  if (entry.contexts.length < 2 || entry.frequency < 2) {
    return { decision: "defer", reason: "single-context-pattern", validation };
  }
  if (!entry.invariant || entry.variance === "unknown") {
    return { decision: "defer", reason: "invariant-not-established", validation };
  }
  return { decision: "propose", reason: "evidence-supported-seam", validation };
}

export function fieldToProductPacket(packet) {
  const required = [
    "problem",
    "workflow",
    "evidence",
    "currentWorkaround",
    "invariant",
    "variance",
    "proposal",
    "impact",
    "uncertainty",
    "owner",
    "nextValidation",
    "disconfirmation",
    "maintenance",
    "compatibility",
  ];
  const gaps = required.filter((field) => !packet?.[field]);
  return { valid: gaps.length === 0, gaps, packet };
}
