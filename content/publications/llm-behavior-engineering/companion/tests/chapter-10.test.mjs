import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { runRetrievalPipeline, validateRetrievalPipeline } from "../lib/retrieval-pipeline.mjs";

const fixture = JSON.parse(await readFile(new URL("../retrieval/mosaic-retrieval-pipeline.json", import.meta.url), "utf8"));

test("retrieval pipeline freezes corpus and stage identities without effects", () => assert.deepEqual(validateRetrievalPipeline(fixture), []));
test("authorization, revocation, and applicability precede reranking", () => {
  const result = runRetrievalPipeline(fixture);
  assert.deepEqual(result.selected.map((unit) => unit.id), ["UNIT-A7"]);
  assert.deepEqual(Object.fromEntries(result.excluded.map((item) => [item.id, item.reason])), fixture.expected.excludedReasons);
  assert.equal(result.effect, null);
});
test("selected evidence retains parent revision span and digest", () => assert.deepEqual(runRetrievalPipeline(fixture).selected[0], { id: "UNIT-A7", parentId: "SB-A-7", revision: "7", span: "section-3", digest: "unit-a7-digest" }));
test("hypothetical document remains an unciteable query experiment", () => {
  assert.equal(fixture.hypotheticalDocument.enabled, false);
  assert.equal(fixture.hypotheticalDocument.citeable, false);
  assert.equal(fixture.hypotheticalDocument.authority, false);
});
