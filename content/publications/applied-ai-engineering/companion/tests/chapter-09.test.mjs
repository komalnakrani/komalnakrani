import assert from "node:assert/strict";
import test from "node:test";
import { generateEvaluationCases } from "../evaluation/generate-cases.mjs";
import { contaminationReport, coverageReport, splitHash, validateEvaluationCase } from "../lib/evaluation.mjs";

const cases = generateEvaluationCases();

test("evaluation fixture generation is deterministic and versioned", () => {
  assert.deepEqual(generateEvaluationCases(), generateEvaluationCases());
  assert.match(splitHash(cases), /^[a-f0-9]{64}$/);
});
test("every case maps clauses, segments, data states, mechanisms, and consequences", () => {
  for (const item of cases) assert.deepEqual(validateEvaluationCase(item), []);
});
test("coverage report keeps unsupported clauses visible", () => {
  const report = coverageReport(cases, ["PF-B01","PF-B02","PF-B03","PF-B04","PF-B05","PF-B06","PF-B07","PF-B08","PF-B09","PF-B10","PF-B11","PF-B12","PF-B13","PF-B14","PF-B15"]);
  assert.ok(report.uncoveredClauses.includes("PF-B03"));
  assert.ok(report.uncoveredClauses.includes("PF-B15"));
  assert.equal(report.gapsVisible, true);
});
test("clean suite has no construction-group leakage", () => assert.deepEqual(contaminationReport(cases), []));
test("a copied construction group across development and release is detected", () => {
  const leaked = cases.map((item) => item.caseId === "PF-E005" ? {...item,constructionGroup:"ordinary-16mm"} : item);
  assert.deepEqual(contaminationReport(leaked), [{constructionGroup:"ordinary-16mm",partitions:["development","release-evaluation"]}]);
});
test("suite contains ordinary, rare, adversarial, interaction, and failure consequences without claiming prevalence", () => {
  const segments = new Set(cases.flatMap((item) => item.segments));
  for (const required of ["common-family","missing-measurement","ambiguous-unit","excluded-category","dependency-timeout","user-correction"]) assert.ok(segments.has(required));
});
