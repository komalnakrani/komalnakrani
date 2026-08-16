import { createHash } from "node:crypto";

const canonical = (value) => {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === "object") return Object.fromEntries(Object.keys(value).sort().map((key) => [key, canonical(value[key])]));
  return value;
};

export function validateEvaluationCase(value) {
  const errors = [];
  if (value.schemaVersion !== 1) errors.push("schemaVersion must equal 1");
  if (!/^PF-E\d{3}$/.test(value.caseId ?? "")) errors.push("caseId is invalid");
  if (value.caseStatus !== "fictional-synthetic") errors.push("caseStatus must be fictional-synthetic");
  if (value.provenance !== "deterministic-fixture-generator") errors.push("provenance is invalid");
  for (const field of ["contractClauseIds", "segments", "dataStates", "mechanisms", "consequences"]) if (!value[field]?.length) errors.push(`${field} must be non-empty`);
  if (value.expected?.effectCount !== 0) errors.push("evaluation fixtures cannot authorize effects");
  return errors;
}

export function splitHash(cases) {
  const frozen = cases.map(({ caseId, suiteVersion, partition, constructionGroup }) => ({ caseId, suiteVersion, partition, constructionGroup })).sort((a, b) => a.caseId.localeCompare(b.caseId));
  return createHash("sha256").update(JSON.stringify(canonical(frozen))).digest("hex");
}

export function contaminationReport(cases) {
  const groups = new Map();
  for (const item of cases) {
    if (!groups.has(item.constructionGroup)) groups.set(item.constructionGroup, new Set());
    groups.get(item.constructionGroup).add(item.partition);
  }
  return [...groups.entries()]
    .filter(([, partitions]) => partitions.has("release-evaluation") && [...partitions].some((partition) => partition !== "release-evaluation"))
    .map(([constructionGroup, partitions]) => ({ constructionGroup, partitions: [...partitions].sort() }));
}

export function coverageReport(cases, requiredClauses) {
  const dimensions = { clauses: {}, segments: {}, dataStates: {}, mechanisms: {}, consequences: {} };
  const fields = { clauses: "contractClauseIds", segments: "segments", dataStates: "dataStates", mechanisms: "mechanisms", consequences: "consequences" };
  for (const item of cases) for (const [dimension, field] of Object.entries(fields)) for (const value of item[field]) dimensions[dimension][value] = (dimensions[dimension][value] ?? 0) + 1;
  const uncoveredClauses = requiredClauses.filter((clause) => !dimensions.clauses[clause]);
  return {
    suiteVersion: cases[0]?.suiteVersion ?? null,
    caseCount: cases.length,
    dimensions,
    uncoveredClauses,
    gapsVisible: true,
    limitations: ["synthetic construction only", "coverage is not prevalence", "case count is not deployment assurance"]
  };
}
