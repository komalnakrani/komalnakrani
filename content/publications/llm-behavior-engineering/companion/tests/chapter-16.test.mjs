import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { adaptationDisposition, migrationSummary, privacyUnsafeSignals, validateMigrationHandoff, validateReleaseDossier, validateServiceAdapter } from "../lib/release-change.mjs";

const load = async (relative) => JSON.parse(await readFile(new URL(relative, import.meta.url), "utf8"));
const adapter = await load("../release/mosaic-service-adapter.json");
const release = await load("../release/mosaic-release-dossier.json");
const handoff = await load("../release/mosaic-migration-handoff.json");

test("provider-neutral adapter preserves one behavior seam, explicit responsibilities, and no effects", () => {
  assert.deepEqual(validateServiceAdapter(adapter), []);
  assert.equal(adapter.semanticContract.effect, null);
  assert.deepEqual(adapter.implementations.map((item) => item.path), ["managed", "open-weight"]);
  assert.ok(adapter.implementations.find((item) => item.path === "open-weight").requiredEvidence.includes("checkpoint digest"));
});

test("release packet stages authority, privacy-minimized signals, and recoverable fallback", () => {
  assert.deepEqual(validateReleaseDossier(release), []);
  assert.deepEqual(privacyUnsafeSignals(release), []);
  assert.equal(release.readinessGates.find((gate) => gate.id === "release").status, "not-approved");
  assert.deepEqual(release.stages.map((stage) => stage.id), ["offline", "internal", "shadow", "bounded-cohort"]);
});

test("migration replay holds the candidate and diagnoses provider and permission failures separately", () => {
  assert.deepEqual(validateMigrationHandoff(handoff), []);
  const summary = migrationSummary(handoff);
  assert.deepEqual(summary.improvements, ["MIG-EN-FORMAT"]);
  assert.deepEqual(summary.regressions, ["MIG-GU-CITATION"]);
  assert.equal(summary.tailRegression, true);
  assert.equal(summary.disposition, "hold-and-keep-current-fallback");
  assert.deepEqual(handoff.failureInjections.map((item) => item.layer), ["model-provider-adapter", "retrieval-authorization"]);
});

test("adaptation stays rejected without a stable valuable data-supported adaptation-sensitive residual", () => {
  assert.equal(adaptationDisposition(handoff.adaptationReferral), "not-justified");
  assert.ok(handoff.adaptationReferral.simplerRepairsRemaining.length > 0);
  assert.equal(handoff.volume2Handoff.status, "audit-required-no-adaptation-approved");
  assert.equal(handoff.volume2Handoff.forbiddenInference, "a provider migration regression proves that weight adaptation is needed");
});
