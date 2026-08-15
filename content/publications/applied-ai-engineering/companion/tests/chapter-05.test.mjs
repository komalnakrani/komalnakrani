import assert from "node:assert/strict";
import test from "node:test";
import { generateDataset } from "../data/generate-dataset.mjs";
import { dataFitnessReport, validateDataset } from "../lib/validate-data.mjs";

test("seeded synthetic data is deterministic", () => assert.deepEqual(generateDataset(), generateDataset()));
test("dataset is structurally valid without claiming representativeness", () => {
  const dataset = generateDataset();
  assert.deepEqual(validateDataset(dataset), []);
  assert.equal(dataset.caseStatus, "fictional-synthetic");
  assert.equal(dataset.representativenessClaim, "none");
});
test("naive row split exposes duplicate and template leakage", () => {
  const report = dataFitnessReport(generateDataset());
  assert.deepEqual(report.naiveLeakage, [{ group: "C-004|T-DUP-A", partitions: ["development", "release-evaluation"] }]);
});
test("grouped clean split removes the known duplicate leakage route", () => assert.deepEqual(dataFitnessReport(generateDataset()).cleanLeakage, []));
test("critical missing, unauthorized, stale, conflicting, and excluded states remain visible", () => {
  const { segments } = dataFitnessReport(generateDataset());
  assert.deepEqual(segments, { missingUnit: 1, unauthorized: 1, stale: 1, conflicting: 1, excluded: 1, longTail: 1 });
});
test("clean mechanics still narrow unsupported long-tail and real-world claims", () => {
  const report = dataFitnessReport(generateDataset());
  assert.equal(report.disposition, "narrow");
  assert.ok(report.limitations.includes("long-tail release claim unsupported"));
  assert.ok(report.limitations.includes("no real-world prevalence"));
});
