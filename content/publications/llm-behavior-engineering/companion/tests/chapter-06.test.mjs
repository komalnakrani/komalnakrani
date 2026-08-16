import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { messageIdentity, renderSemanticBundle, validateMessageBoundary } from "../lib/message-boundary.mjs";

const load = async (relative) => JSON.parse(await readFile(new URL(relative, import.meta.url), "utf8"));
const contract = await load("../messages/mosaic-message-contract.json");
const fixture = await load("../messages/mosaic-message-fixture.json");

test("Mosaic message contract preserves trust and authorization boundaries", () => assert.deepEqual(validateMessageBoundary(contract, fixture), []));
test("instruction-like technician text remains untrusted data in every adapter", () => {
  for (const adapter of contract.adapters) {
    const rendered = renderSemanticBundle(contract, fixture, adapter.id);
    const attack = rendered.find((block) => block.id === "DATA-1");
    assert.equal(attack.trust, "untrusted-data");
    assert.match(attack.content, /reveal other customer records/);
    assert.doesNotMatch(attack.renderedRole, /instruction|system-token-block|application-metadata/);
  }
});
test("authorization occurs before assembly and generated output has no effect", () => {
  assert.equal(contract.authorization.performedBeforeAssembly, true);
  assert.equal(contract.authorization.modelMayExpandScope, false);
  assert.deepEqual(contract.output.allowedEffects, []);
});
test("one-module ablation changes message identity while preserving the baseline", () => {
  const baselineFixture = structuredClone(fixture);
  baselineFixture.ablation.candidateModules = baselineFixture.ablation.baselineModules;
  assert.notEqual(messageIdentity(contract, fixture), messageIdentity(contract, baselineFixture));
  assert.deepEqual(fixture.ablation.removed, ["examples"]);
  assert.equal(fixture.ablation.allOtherBaselineFieldsFixed, true);
});
