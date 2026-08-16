import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { hasProhibitedEffect, validateLanguageTaskContract } from "../lib/validate-contract.mjs";

const contract = JSON.parse(await readFile(new URL("../contracts/mosaic-language-task-contract.json", import.meta.url), "utf8"));

test("Mosaic language-task contract is valid", () => assert.deepEqual(validateLanguageTaskContract(contract), []));
test("all six behavior states have at least one criterion", () => {
  const used = new Set(contract.clauses.map((clause) => clause.state));
  assert.deepEqual([...used].sort(), [...contract.states].sort());
});
test("prohibited effects preserve human and system authority", () => {
  for (const phrase of ["approve warranty", "contact customer", "order part", "modify system of record", "expose another case"]) {
    assert.equal(hasProhibitedEffect(contract, phrase), true, phrase);
  }
});
test("language and consequence segments remain explicit and thresholds uncalibrated", () => {
  assert.ok(contract.segments.some((segment) => segment.language === "Gujarati"));
  assert.ok(contract.segments.some((segment) => segment.language.includes("code-switch")));
  assert.ok(contract.segments.some((segment) => segment.consequence.includes("safety-critical")));
  assert.equal(contract.thresholdStatus, "calibrate after representative baseline");
});
