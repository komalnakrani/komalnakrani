import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { biasedJudge, calibrationResults, validateErrorAndJudgeSystem } from "../lib/judge-calibration.mjs";

const fixture = JSON.parse(await readFile(new URL("../evaluation/mosaic-error-taxonomy.json", import.meta.url), "utf8"));

test("error specimens keep consequence, severity, detectability, disposition, and authority distinct", () => assert.deepEqual(validateErrorAndJudgeSystem(fixture), []));
test("position-biased judge flips when equivalent candidates are reversed", () => {
  const pair = fixture.calibration.pair;
  assert.equal(biasedJudge(pair, ["A", "B"], "position"), "A");
  assert.equal(biasedJudge(pair, ["B", "A"], "position"), "B");
});
test("verbosity-biased judge prefers longer text despite equivalent support anchor", () => {
  assert.equal(biasedJudge(fixture.calibration.pair, ["A", "B"], "verbosity"), "B");
  assert.equal(fixture.calibration.pair.credibleAnchor, "equivalent-on-support");
});
test("calibration retains disagreements, correct abstention, and no model-grader authority", () => {
  assert.equal(calibrationResults(fixture).length, 3);
  assert.ok(fixture.calibration.disagreements.every((item) => item.status === "retained"));
  assert.equal(fixture.specimens.find((item) => item.id === "STATE-ABSTAIN").disposition, "accept");
  assert.equal(fixture.authority.modelGrader, false);
});
