const REQUIRED_SIGNAL_FIELDS = [
  "signalId",
  "promise",
  "failure",
  "kind",
  "owner",
  "urgency",
  "firstAction",
  "privacyRule",
  "retention",
];

const ALLOWED_KINDS = new Set(["metric", "trace", "log", "support-event"]);
const FORBIDDEN_SAMPLE_FIELDS = new Set(["payload", "prompt", "secret", "document", "freeText"]);

function present(value) {
  return typeof value === "string" ? value.trim().length > 0 : value != null;
}

export function validateSignalRecord(record) {
  const gaps = REQUIRED_SIGNAL_FIELDS.filter((field) => !present(record?.[field]));
  if (present(record?.kind) && !ALLOWED_KINDS.has(record.kind)) gaps.push("kind:unsupported");
  if (!Array.isArray(record?.segmentKeys) || record.segmentKeys.length === 0) gaps.push("segmentKeys");
  return { valid: gaps.length === 0, gaps };
}

export function summarizeCohorts(samples) {
  const cohorts = {};
  for (const sample of samples) {
    for (const field of Object.keys(sample)) {
      if (FORBIDDEN_SAMPLE_FIELDS.has(field)) throw new TypeError(`forbidden telemetry field: ${field}`);
    }
    const cohort = sample.cohort ?? "unclassified";
    cohorts[cohort] ??= { count: 0, successful: 0, totalLatencyMs: 0 };
    cohorts[cohort].count += 1;
    cohorts[cohort].successful += sample.success ? 1 : 0;
    cohorts[cohort].totalLatencyMs += sample.latencyMs;
  }
  for (const cohort of Object.values(cohorts)) {
    cohort.successRate = cohort.successful / cohort.count;
    cohort.averageLatencyMs = cohort.totalLatencyMs / cohort.count;
    delete cohort.totalLatencyMs;
  }
  return cohorts;
}

export function nextDiagnosticEvidence({ serviceHealthy, cohortDegraded, evidenceTrusted, policyBlocked }) {
  if (!serviceHealthy) return "inspect-service-and-dependency-trace";
  if (cohortDegraded) return "compare-cohort-connectivity-latency-and-fallback";
  if (!evidenceTrusted) return "inspect-equipment-binding-provenance-and-freshness";
  if (policyBlocked) return "inspect-policy-version-authorization-and-approval";
  return "inspect-workflow-adoption-support-and-outcome";
}
