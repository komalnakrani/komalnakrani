import test from "node:test";
import assert from "node:assert/strict";
import { IntentConflictError, IntentLedger } from "../src/intent-ledger.mjs";

test("the same intent and semantics replay the recorded result", () => {
  const ledger = new IntentLedger();
  const first = ledger.begin({ intentId: "intent-001", fingerprint: "part-7|ticket-9" });
  assert.equal(first.replay, false);
  ledger.complete("intent-001", { reservationId: "synthetic-77" });
  const replay = ledger.begin({ intentId: "intent-001", fingerprint: "part-7|ticket-9" });
  assert.equal(replay.replay, true);
  assert.equal(replay.record.result.reservationId, "synthetic-77");
});

test("reusing an intent identifier for different semantics is a conflict", () => {
  const ledger = new IntentLedger();
  ledger.begin({ intentId: "intent-001", fingerprint: "part-7|ticket-9" });
  assert.throws(
    () => ledger.begin({ intentId: "intent-001", fingerprint: "part-8|ticket-9" }),
    IntentConflictError
  );
});

test("ambiguous completion requires reconciliation instead of blind retry", () => {
  const ledger = new IntentLedger();
  ledger.begin({ intentId: "intent-002", fingerprint: "part-7|ticket-10" });
  ledger.markUnknown("intent-002", "response timed out after dispatch");
  assert.equal(ledger.get("intent-002").state, "unknown");
  ledger.reconcile("intent-002", { reservationId: "synthetic-88" });
  assert.equal(ledger.get("intent-002").state, "completed");
});
