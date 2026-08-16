import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { assembleProvenance, validateProvenanceFixture } from "../lib/provenance-assembler.mjs";

const fixture = JSON.parse(await readFile(new URL("../context/mosaic-provenance-assembly.json", import.meta.url), "utf8"));

test("provenance fixture preserves complete envelopes and no effects", () => assert.deepEqual(validateProvenanceFixture(fixture), []));
test("supporting assembly retains citation source revision and span", () => {
  const result = assembleProvenance(fixture, "SUPPORTING");
  assert.deepEqual(result.citations.find((item) => item.handle === "CITE-A7"), { handle: "CITE-A7", envelopeId: "EV-A7-SEC3", parentSourceId: "SB-A-7", revision: "7", span: "section-3", target: "SB-A-7#section-3" });
  assert.equal(result.effect, null);
});
test("stale and unauthorized evidence remain distinct exclusions", () => assert.deepEqual(Object.fromEntries(assembleProvenance(fixture, "SUPPORTING").excluded.map((item) => [item.id, item.reason])), { "EV-A2-SEC4": "stale", "EV-B4": "unauthorized" }));
test("instruction-bearing evidence remains untrusted while conflict and absence diverge", () => {
  const support = assembleProvenance(fixture, "SUPPORTING");
  assert.equal(support.included.find((item) => item.id === "EV-NOTE-17").trust, "untrusted-retrieved-data");
  assert.equal(assembleProvenance(fixture, "CONFLICT").terminal, "escalate");
  assert.equal(assembleProvenance(fixture, "ABSENT").terminal, "abstain");
});
