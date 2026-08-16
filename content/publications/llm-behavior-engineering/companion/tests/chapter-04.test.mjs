import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { eligibleCandidates, failedGates, validateAccessDecision } from "../lib/access-decision.mjs";

const record = JSON.parse(await readFile(new URL("../selection/mosaic-access-candidates.json", import.meta.url), "utf8"));

test("Mosaic access decision satisfies all structural hard gates", () => assert.deepEqual(validateAccessDecision(record), []));
test("the synthetic benchmark leader is rejected by deployment constraints", () => {
  const candidate = record.candidates.find((item) => item.id === "CAND-BENCHMARK-LEADER");
  assert.deepEqual(failedGates(candidate, record.hardGates), ["residence", "allowedDataInterface"]);
});
test("only hard-gate survivors can be selected", () => assert.deepEqual(eligibleCandidates(record).map((item) => item.id), ["CAND-MANAGED-A"]));
test("selection is reversible and the common seam exposes no effects", () => {
  assert.ok(record.decision.requalificationTriggers.includes("model or endpoint deprecation"));
  assert.deepEqual(record.commonInterface.effects, []);
  for (const candidate of record.candidates) assert.ok(candidate.responsibilities && candidate.evidenceLimit);
});
