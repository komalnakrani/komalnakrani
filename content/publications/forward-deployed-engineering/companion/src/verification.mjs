const REQUIRED = [
  "riskId",
  "criterion",
  "method",
  "evidenceType",
  "segment",
  "expected",
  "observed",
  "limitation",
  "owner",
];

const EVIDENCE_TYPES = new Set([
  "deterministic-assertion",
  "statistical-estimate",
  "expert-judgment",
  "user-acceptance",
]);

function present(value) {
  return typeof value === "string" ? value.trim().length > 0 : value != null;
}

export function verifyEvidenceRecord(record) {
  const gaps = REQUIRED.filter((field) => !present(record?.[field]));
  if (present(record?.evidenceType) && !EVIDENCE_TYPES.has(record.evidenceType)) {
    gaps.push("evidenceType:unsupported");
  }
  if (typeof record?.passed !== "boolean") gaps.push("passed");
  return { valid: gaps.length === 0, gaps };
}

export function buildVerificationReport(records) {
  const results = records.map((record) => ({
    ...record,
    validation: verifyEvidenceRecord(record),
  }));
  const segments = {};
  for (const result of results) {
    const segment = result.segment ?? "unclassified";
    segments[segment] ??= { passed: 0, failed: 0, invalid: 0 };
    if (!result.validation.valid) segments[segment].invalid += 1;
    else segments[segment][result.passed ? "passed" : "failed"] += 1;
  }

  const blocksRelease = results.some((result) =>
    !result.validation.valid ||
    (result.segment === "safety-critical" && result.passed === false),
  );

  return {
    results,
    segments,
    disposition: blocksRelease ? "block" : "candidate",
  };
}

export function calibrateGrader({ humanLabels, graderLabels }) {
  if (!Array.isArray(humanLabels) || humanLabels.length === 0) {
    throw new TypeError("humanLabels are required");
  }
  const graderByCase = new Map((graderLabels ?? []).map((item) => [item.caseId, item.label]));
  let agreements = 0;
  const disagreements = [];
  for (const human of humanLabels) {
    const grader = graderByCase.get(human.caseId);
    if (grader === human.label) agreements += 1;
    else disagreements.push({ caseId: human.caseId, human: human.label, grader: grader ?? null });
  }
  return {
    caseCount: humanLabels.length,
    agreement: agreements / humanLabels.length,
    disagreements,
  };
}
