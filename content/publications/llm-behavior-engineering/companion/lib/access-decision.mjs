export function failedGates(candidate, requiredGates) {
  return requiredGates.filter((gate) => candidate.gates?.[gate] !== true);
}

export function eligibleCandidates(record) {
  return record.candidates.filter((candidate) => failedGates(candidate, record.hardGates).length === 0);
}

export function validateAccessDecision(record) {
  const errors = [];
  if (record.fictional !== true) errors.push("access fixture must mark Mosaic Desk fictional");
  if (record.commonInterface?.effects?.length !== 0) errors.push("common interface must remain effect-free");
  if (!Array.isArray(record.hardGates) || record.hardGates.length < 4) errors.push("hard gates are incomplete");
  for (const candidate of record.candidates ?? []) {
    for (const gate of record.hardGates ?? []) if (!(gate in (candidate.gates ?? {}))) errors.push(`${candidate.id} lacks gate ${gate}`);
    if (!candidate.responsibilities || !candidate.surfaces || !candidate.evidenceLimit) errors.push(`${candidate.id} lacks responsibility evidence`);
  }
  const eligible = new Set(eligibleCandidates(record).map((candidate) => candidate.id));
  if (!eligible.has(record.decision?.selectedCandidateId)) errors.push("selected candidate fails a hard gate");
  if (!Array.isArray(record.decision?.requalificationTriggers) || record.decision.requalificationTriggers.length < 4) errors.push("requalification triggers are incomplete");
  return errors;
}
