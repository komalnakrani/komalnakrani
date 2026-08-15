import test from "node:test";
import assert from "node:assert/strict";

import {
  artifactHash,
  chooseRecovery,
  recoveryRehearsal,
  simulateMigration,
  validateReleaseRecord,
  validateRestoreEvidence,
} from "../src/release-recovery.mjs";

test("a release record binds code, configuration, schema, migration, evidence, cohort, and recovery", () => {
  const artifact = { files: ["vertical-slice.mjs"], version: "v1" };
  const record = {
    codeVersion: "commit-synthetic-1",
    configVersion: "config-v1",
    schemaVersion: "schema-v2",
    migrationVersion: "migration-v2",
    artifactHash: artifactHash(artifact),
    evidenceBundle: "evidence-v1",
    cohort: "synthetic-local",
    owner: "release-owner",
    stopCondition: "critical verification failure",
    recoveryPath: "roll-forward-v2.1",
  };
  assert.equal(validateReleaseRecord(record).valid, true);
  assert.notEqual(artifactHash(artifact), artifactHash({ ...artifact, version: "v2" }));
});

test("a backup without an executed integrity-checked restore is not recovery evidence", () => {
  const result = validateRestoreEvidence({
    backupId: "backup-1",
    createdAt: "2026-08-16T00:00:00Z",
    scope: "synthetic records",
    owner: "data-owner",
  });
  assert.equal(result.valid, false);
  assert.deepEqual(result.gaps, ["restoreTestedAt", "integrityVerified"]);
});

test("destructive or externally visible state chooses roll-forward instead of fictional rollback", () => {
  assert.deepEqual(
    chooseRecovery({
      externallyVisible: true,
      reversible: false,
      destructiveMigration: true,
      dependencyHealthy: true,
    }),
    { action: "roll-forward", reason: "rollback-cannot-preserve-state" },
  );
});

test("migration capacity pressure stops before changing state", () => {
  const initial = { records: [{ id: "a", schemaVersion: 1 }, { id: "b", schemaVersion: 1 }] };
  const result = simulateMigration({
    state: initial,
    requestedConnections: 12,
    capacityLimit: 4,
  });
  assert.equal(result.status, "stopped");
  assert.equal(result.applied, 0);
  assert.deepEqual(result.state, initial);
});

test("partial migration exposes divergent state for explicit recovery", () => {
  const result = simulateMigration({
    state: { records: [{ id: "a", schemaVersion: 1 }, { id: "b", schemaVersion: 1 }] },
    requestedConnections: 2,
    capacityLimit: 4,
    failAfter: 1,
  });
  assert.equal(result.status, "divergent");
  assert.deepEqual(result.state.records.map((item) => item.schemaVersion), [2, 1]);
});

test("a rehearsal compares a local target while preserving its production limitation", () => {
  const result = recoveryRehearsal({
    scenario: "synthetic partial migration",
    initialState: "one v2 and one v1 record",
    action: "roll-forward",
    expectedState: "all v2 records",
    actualState: "all v2 records",
    observedMs: 42,
    targetMs: 100,
    evidence: "release-recovery.test.mjs",
    owner: "recovery-owner",
    limitation: "local in-memory timing; not a production RTO claim",
  });
  assert.equal(result.valid, true);
  assert.equal(result.metLocalTarget, true);
  assert.match(result.limitation, /not a production RTO/);
});
