const CONFIDENCE = new Set(["confirmed", "probable", "unknown"]);

export class IncidentTimeline {
  #events = [];

  append({ occurredAt, track, statement, confidence, evidence }) {
    if (!occurredAt || !track || !statement || !CONFIDENCE.has(confidence)) {
      throw new TypeError("occurredAt, track, statement, and valid confidence are required");
    }
    if (confidence === "confirmed" && !evidence) {
      throw new TypeError("confirmed statements require evidence");
    }
    const previous = this.#events.at(-1);
    if (previous && Date.parse(occurredAt) < Date.parse(previous.occurredAt)) {
      throw new RangeError("timeline must remain chronological");
    }
    const event = Object.freeze({ occurredAt, track, statement, confidence, evidence: evidence ?? null });
    this.#events.push(event);
    return event;
  }

  list() {
    return [...this.#events];
  }
}

export function validateIncidentCommand(command) {
  const gaps = [];
  for (const field of ["incidentCommander", "technicalLead", "communicationsOwner", "customerImpactOwner", "cadence"]) {
    if (!command?.[field]) gaps.push(field);
  }
  if (command?.fdeActorId && command.fdeActorId === command.incidentCommander && command.fdeDesignatedCommander !== true) {
    gaps.push("fdeDesignatedCommander");
  }
  return { valid: gaps.length === 0, gaps };
}

export function incidentUpdate({ impact, facts, unknowns, actions, nextUpdateAt, eta }) {
  if (!impact || !Array.isArray(facts) || !Array.isArray(unknowns) || !Array.isArray(actions) || !nextUpdateAt) {
    throw new TypeError("impact, facts, unknowns, actions, and nextUpdateAt are required");
  }
  if (eta && eta.confidence !== "confirmed") {
    throw new TypeError("unconfirmed ETA must not be published as an ETA");
  }
  return Object.freeze({ impact, facts, unknowns, actions, nextUpdateAt, eta: eta ?? null });
}

export function validateCorrectiveAction(action) {
  const gaps = [];
  for (const field of ["condition", "systemChange", "owner", "dueAt", "verification", "evidence"]) {
    if (!action?.[field]) gaps.push(field);
  }
  if (action?.systemChange?.toLowerCase().includes("be more careful")) gaps.push("systemChange:blame-only");
  return { valid: gaps.length === 0, gaps };
}

export function stabilizationDisposition(record) {
  const requirements = [
    "impactContained",
    "serviceRestored",
    "durableCorrectionVerified",
    "regressionEvidence",
    "monitoringWindowComplete",
    "ownerTransferred",
    "residualRiskDisposition",
  ];
  const missing = requirements.filter((field) => !record?.[field]);
  return {
    stable: missing.length === 0,
    missing,
    disposition: missing.length === 0 ? "exit-stabilization" : "continue-stabilization",
  };
}
