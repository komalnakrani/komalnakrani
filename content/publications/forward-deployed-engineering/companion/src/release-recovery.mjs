import { createHash } from "node:crypto";

const RELEASE_FIELDS = [
  "codeVersion",
  "configVersion",
  "schemaVersion",
  "migrationVersion",
  "artifactHash",
  "evidenceBundle",
  "cohort",
  "owner",
  "stopCondition",
  "recoveryPath",
];

function present(value) {
  return typeof value === "string" ? value.trim().length > 0 : value != null;
}

export function artifactHash(value) {
  return createHash("sha256").update(JSON.stringify(value)).digest("hex");
}

export function validateReleaseRecord(record) {
  const gaps = RELEASE_FIELDS.filter((field) => !present(record?.[field]));
  if (present(record?.artifactHash) && !/^[a-f0-9]{64}$/.test(record.artifactHash)) {
    gaps.push("artifactHash:invalid");
  }
  return { valid: gaps.length === 0, gaps };
}

export function validateRestoreEvidence(record) {
  const gaps = [];
  if (!present(record?.backupId)) gaps.push("backupId");
  if (!present(record?.createdAt)) gaps.push("createdAt");
  if (!present(record?.restoreTestedAt)) gaps.push("restoreTestedAt");
  if (record?.integrityVerified !== true) gaps.push("integrityVerified");
  if (!present(record?.scope)) gaps.push("scope");
  if (!present(record?.owner)) gaps.push("owner");
  return { valid: gaps.length === 0, gaps };
}

export function chooseRecovery({
  externallyVisible,
  reversible,
  destructiveMigration,
  dependencyHealthy,
  restoreEvidence,
}) {
  if (!dependencyHealthy) return { action: "isolate", reason: "dependency-unhealthy" };
  if (destructiveMigration || (externallyVisible && !reversible)) {
    return { action: "roll-forward", reason: "rollback-cannot-preserve-state" };
  }
  if (reversible) return { action: "rollback", reason: "compatible-reversible-change" };
  if (validateRestoreEvidence(restoreEvidence).valid) {
    return { action: "restore", reason: "verified-restore-evidence" };
  }
  return { action: "stop", reason: "no-verified-recovery-path" };
}

export function simulateMigration({ state, requestedConnections, capacityLimit, failAfter = null }) {
  if (requestedConnections > capacityLimit) {
    return {
      state: structuredClone(state),
      status: "stopped",
      reason: "capacity-gate",
      applied: 0,
    };
  }

  const next = structuredClone(state);
  let applied = 0;
  for (const record of next.records) {
    if (failAfter != null && applied >= failAfter) {
      return { state: next, status: "divergent", reason: "partial-migration", applied };
    }
    record.schemaVersion = 2;
    record.evidenceVersion ??= "unresolved";
    applied += 1;
  }
  return { state: next, status: "completed", reason: "migration-applied", applied };
}

export function recoveryRehearsal({
  scenario,
  initialState,
  action,
  expectedState,
  actualState,
  observedMs,
  targetMs,
  evidence,
  owner,
  limitation,
}) {
  const gaps = [];
  for (const [field, value] of Object.entries({
    scenario,
    initialState,
    action,
    expectedState,
    actualState,
    observedMs,
    targetMs,
    evidence,
    owner,
    limitation,
  })) {
    if (!present(value)) gaps.push(field);
  }
  return {
    valid: gaps.length === 0,
    gaps,
    metLocalTarget: gaps.length === 0 && actualState === expectedState && observedMs <= targetMs,
    scenario,
    action,
    observedMs,
    targetMs,
    limitation,
  };
}
