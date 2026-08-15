const listings = [
  ["PW-L001", "C-001", "T-COMMON-A", "Mechanical seal 16 mm", "common-seal", 16, "mm", "fresh", "allowed", [0.94, 0.08, 0.12]],
  ["PW-L002", "C-002", "T-COMMON-B", "Pump shaft seal 5/8 inch", "common-seal", 0.625, "in", "fresh", "allowed", [0.91, 0.1, 0.16]],
  ["PW-L003", "C-003", "T-LONG-A", "Legacy ceramic seat seal", "long-tail-seal", 18, "mm", "fresh", "allowed", [0.08, 0.93, 0.13]],
  ["PW-L004", "C-004", "T-DUP-A", "Universal garden pump seal 16 mm", "common-seal", 16, "mm", "fresh", "allowed", [0.9, 0.1, 0.1]],
  ["PW-L004-COPY", "C-004", "T-DUP-A", "Universal garden-pump seal, 16mm", "common-seal", 16, "mm", "fresh", "allowed", [0.9, 0.1, 0.1]],
  ["PW-L006", "C-006", "T-UNIT-MISSING", "Replacement seal diameter 16", "common-seal", 16, null, "fresh", "allowed", [0.86, 0.12, 0.11]],
  ["PW-L007", "C-007", "T-CONFLICT", "Seal for 18 mm shaft", "common-seal", 16, "mm", "fresh", "allowed", [0.72, 0.28, 0.14]],
  ["PW-L008", "C-008", "T-DENIED", "Private distributor seal 16 mm", "common-seal", 16, "mm", "fresh", "denied-assisted", [0.96, 0.05, 0.09]],
  ["PW-L009", "C-009", "T-STALE", "Archived pump seal 16 mm", "common-seal", 16, "mm", "stale", "allowed", [0.84, 0.11, 0.15]],
  ["PW-L010", "C-010", "T-EXCLUDED", "Pressure vessel safety seal", "excluded-safety", 16, "mm", "fresh", "allowed", [0.89, 0.09, 0.08]]
];

const naivePartitions = {
  "PW-L001": "development", "PW-L002": "tuning", "PW-L003": "challenge", "PW-L004": "development",
  "PW-L004-COPY": "release-evaluation", "PW-L006": "challenge", "PW-L007": "challenge", "PW-L008": "challenge",
  "PW-L009": "release-evaluation", "PW-L010": "challenge"
};

const cleanPartitions = {
  "C-001": "development", "C-002": "tuning", "C-003": "challenge", "C-004": "development", "C-006": "challenge",
  "C-007": "challenge", "C-008": "challenge", "C-009": "release-evaluation", "C-010": "challenge"
};

export function generateDataset(seed = 20260816) {
  const records = listings.map(([id, canonicalClusterId, generationTemplateId, title, family, shaftDiameter, unit, freshness, permission, imageFeatures]) => ({
    id, canonicalClusterId, generationTemplateId, title, family,
    shaftDiameter: { value: shaftDiameter, unit, status: unit ? "observed" : "missing", source: "synthetic_fixture" },
    freshness, permission, imageFeatures,
    sellerClaim: id.startsWith("PW-L004") ? "universal fit" : null,
    conflictingEvidence: id === "PW-L007",
    naivePartition: naivePartitions[id], cleanPartition: cleanPartitions[canonicalClusterId],
    caseStatus: "fictional-synthetic"
  }));
  const queries = [
    { id: "PW-Q001", family: "common-seal", text: "16 mm mechanical seal", shaftDiameter: { value: 16, unit: "mm" }, expectedState: "respond" },
    { id: "PW-Q002", family: "common-seal", text: "rubber ring for leaking garden pump", shaftDiameter: { value: 16, unit: "mm" }, expectedState: "respond" },
    { id: "PW-Q003", family: "common-seal", text: "replacement pump seal", shaftDiameter: null, expectedState: "clarify" },
    { id: "PW-Q004", family: "common-seal", text: "seal diameter 16", shaftDiameter: { value: 16, unit: null }, expectedState: "abstain" },
    { id: "PW-Q005", family: "long-tail-seal", text: "ceramic seat like photo", shaftDiameter: { value: 18, unit: "mm" }, imageFeatures: [0.09, 0.9, 0.14], expectedState: "respond" },
    { id: "PW-Q006", family: "excluded-safety", text: "pressure vessel seal", shaftDiameter: { value: 16, unit: "mm" }, expectedState: "prohibited" }
  ].map((query) => ({ ...query, caseStatus: "fictional-synthetic" }));
  return { schemaVersion: 1, version: "0.1.0", seed, caseStatus: "fictional-synthetic", representativenessClaim: "none", records, queries };
}
