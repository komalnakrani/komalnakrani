import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { baselineIdentity, validateBaseline } from "../lib/baseline.mjs";

const load = async (relative) => JSON.parse(await readFile(new URL(relative, import.meta.url), "utf8"));
const manifest = await load("../baseline/mosaic-baseline-manifest.json");
const fixtures = await load("../baseline/mosaic-result-fixtures.json");

test("Mosaic baseline and result fixtures are valid and effect-free", () => assert.deepEqual(validateBaseline(manifest, fixtures), []));
test("canonical identity is stable across object key order", () => {
  const reordered = Object.fromEntries(Object.entries(manifest).reverse());
  assert.equal(baselineIdentity(manifest), baselineIdentity(reordered));
});
test("changing a behavior-facing field changes baseline identity", () => {
  const changed = structuredClone(manifest);
  changed.messages.contractVersion = "0.1.0";
  assert.notEqual(baselineIdentity(manifest), baselineIdentity(changed));
});
test("deterministic fixtures explicitly refuse live-quality claims", () => {
  for (const claim of ["live model quality", "factuality", "multilingual capability", "production latency", "bitwise provider determinism"]) {
    assert.ok(manifest.unsupportedClaims.includes(claim));
  }
  assert.match(fixtures.limitation, /not live language-model observations/);
});
