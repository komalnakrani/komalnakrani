const PARTITIONS = new Set(["development", "tuning", "challenge", "release-evaluation"]);

export function validateDataset(dataset) {
  const errors = [];
  if (dataset.caseStatus !== "fictional-synthetic") errors.push("dataset must remain fictional-synthetic");
  if (dataset.representativenessClaim !== "none") errors.push("synthetic dataset cannot claim representativeness");
  const ids = new Set();
  for (const record of dataset.records ?? []) {
    if (ids.has(record.id)) errors.push(`duplicate id ${record.id}`);
    ids.add(record.id);
    for (const key of ["canonicalClusterId", "generationTemplateId", "title", "family", "freshness", "permission", "naivePartition", "cleanPartition"]) {
      if (record[key] == null) errors.push(`${record.id}: missing ${key}`);
    }
    if (!PARTITIONS.has(record.naivePartition) || !PARTITIONS.has(record.cleanPartition)) errors.push(`${record.id}: invalid partition`);
    if (!Array.isArray(record.imageFeatures) || record.imageFeatures.length !== 3) errors.push(`${record.id}: imageFeatures must have length 3`);
    if (record.shaftDiameter?.status === "observed" && !record.shaftDiameter.unit) errors.push(`${record.id}: observed dimension needs unit`);
  }
  return errors;
}

export function findGroupLeakage(records, partitionField) {
  const groups = new Map();
  for (const record of records) {
    const key = `${record.canonicalClusterId}|${record.generationTemplateId}`;
    if (!groups.has(key)) groups.set(key, new Set());
    groups.get(key).add(record[partitionField]);
  }
  return [...groups.entries()].filter(([, partitions]) => partitions.size > 1).map(([group, partitions]) => ({ group, partitions: [...partitions].sort() }));
}

export function dataFitnessReport(dataset) {
  const naiveLeakage = findGroupLeakage(dataset.records, "naivePartition");
  const cleanLeakage = findGroupLeakage(dataset.records, "cleanPartition");
  const segments = {
    missingUnit: dataset.records.filter((r) => r.shaftDiameter.status === "missing").length,
    unauthorized: dataset.records.filter((r) => r.permission !== "allowed").length,
    stale: dataset.records.filter((r) => r.freshness === "stale").length,
    conflicting: dataset.records.filter((r) => r.conflictingEvidence).length,
    excluded: dataset.records.filter((r) => r.family === "excluded-safety").length,
    longTail: dataset.records.filter((r) => r.family === "long-tail-seal").length
  };
  return {
    structuralErrors: validateDataset(dataset), naiveLeakage, cleanLeakage, segments,
    disposition: cleanLeakage.length ? "repair-and-replay" : "narrow",
    limitations: ["synthetic mechanics only", "long-tail release claim unsupported", "no real-world prevalence"]
  };
}
