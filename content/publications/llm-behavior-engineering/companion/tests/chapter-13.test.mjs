import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { coverageGaps, splitLeakage, validateEvaluationSet } from "../lib/evaluation-cases.mjs";

const fixture = JSON.parse(await readFile(new URL("../evaluation/mosaic-evaluation-set.json", import.meta.url), "utf8"));

test("evaluation set has provenance, split, rubric, gaps, and no effects", () => assert.deepEqual(validateEvaluationSet(fixture), []));
test("raw random-row split leaks a transformed family while repaired split does not", () => {
  assert.deepEqual(splitLeakage(fixture.cases, "rawSplit"), [{ familyId: "FAM-TEMPLATE-1", splits: ["development", "holdout"] }]);
  assert.deepEqual(splitLeakage(fixture.cases), []);
});
test("Gujarati conflict and absence remain declared gaps rather than aggregate success", () => {
  const gaps = coverageGaps(fixture);
  assert.ok(gaps.some((item) => item.language === "Gujarati" && item.evidenceState === "conflicting"));
  assert.ok(gaps.some((item) => item.language === "Gujarati" && item.evidenceState === "absent"));
});
test("holdout records are family-aware and prohibited from training use", () => {
  assert.equal(fixture.splitPolicy.groupBy, "familyId");
  assert.equal(fixture.splitPolicy.trainingUse, false);
  assert.equal(fixture.splitPolicy.exposureLedger, true);
});
