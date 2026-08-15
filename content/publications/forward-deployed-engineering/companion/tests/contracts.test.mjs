import test from "node:test";
import assert from "node:assert/strict";
import { equipmentFingerprint, validateEquipmentRecord } from "../src/contracts.mjs";
import { classifyExternalCompletion, reconcileEquipmentCandidates } from "../src/reconciliation.mjs";

const valid = {
  equipmentId: "OES-PUMP7",
  region: "west",
  residency: "west",
  status: "active",
  observedAt: "2026-08-16T00:00:00.000Z",
  sourceVersion: "registry-v3"
};

test("structural and semantic equipment validation passes a bounded synthetic record", () => {
  assert.deepEqual(validateEquipmentRecord(valid), { ok: true, errors: [] });
  assert.equal(equipmentFingerprint(valid), "OES-PUMP7|west|active|registry-v3");
});

test("valid-looking structure fails regional residency semantics", () => {
  const result = validateEquipmentRecord({ ...valid, residency: "east" });
  assert.equal(result.ok, false);
  assert.match(result.errors.join(" "), /west residency/);
});

test("equipment candidates preserve missing, confirmed, and ambiguous states", () => {
  assert.equal(reconcileEquipmentCandidates([]).state, "missing");
  assert.equal(reconcileEquipmentCandidates([valid]).state, "confirmed");
  assert.equal(reconcileEquipmentCandidates([valid, { ...valid, equipmentId: "OES-PUMP8" }]).state, "ambiguous");
});

test("external completion remains unknown after a missing response", () => {
  assert.equal(classifyExternalCompletion({ accepted: true, finalState: null, responseReceived: false }), "unknown");
  assert.equal(classifyExternalCompletion({ accepted: true, finalState: "committed", responseReceived: true }), "completed");
});
