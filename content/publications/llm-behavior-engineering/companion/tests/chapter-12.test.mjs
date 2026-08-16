import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { diagnoseCase, evaluateJointFixture, validateJointFixture } from "../lib/joint-evaluation.mjs";

const fixture = JSON.parse(await readFile(new URL("../evaluation/mosaic-joint-evaluation.json", import.meta.url), "utf8"));

test("joint evaluation preserves component identities, metric questions, and no effects", () => assert.deepEqual(validateJointFixture(fixture), []));
test("retrieval success with ignored evidence diagnoses generation use", () => assert.deepEqual(diagnoseCase(fixture.cases[0]), { diagnosis: "generation-use", retrievalPass: true, generationPass: false, hardFailure: false }));
test("retrieval absence with correct abstention preserves bounded generation success", () => assert.deepEqual(diagnoseCase(fixture.cases[1]), { diagnosis: "corpus-or-retrieval-with-bounded-generation", retrievalPass: false, generationPass: true, hardFailure: false }));
test("authorization failure stays hard and source-faithful output does not settle authority", () => {
  const results = Object.fromEntries(evaluateJointFixture(fixture).map((item) => [item.id, item]));
  assert.equal(results["EVAL-C-FORBIDDEN-CANDIDATE"].hardFailure, true);
  assert.equal(results["EVAL-D-WRONG-SOURCE-FAITHFUL"].diagnosis, "source-authority-dispute");
  assert.equal(fixture.adjudication.automatedEvaluatorAuthority, false);
});
