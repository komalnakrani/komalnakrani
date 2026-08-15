import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { validateContract } from "../lib/validate-contract.mjs";

const contract = JSON.parse(await readFile(new URL("../contracts/patchwork-behavior-contract.json", import.meta.url), "utf8"));

test("Patchwork contract is structurally valid", () => assert.deepEqual(validateContract(contract), []));
test("contract contains all fifteen v0.1 clauses", () => assert.equal(contract.clauses.length, 15));
test("prohibited effects preserve the non-autonomous boundary", () => {
  assert.ok(contract.scope.prohibitedEffects.includes("Automatic seller contact"));
  assert.ok(contract.scope.prohibitedEffects.includes("Purchase initiation or execution"));
});
test("every behavior state appears in at least one clause", () => {
  const used = new Set(contract.clauses.map((clause) => clause.state));
  assert.deepEqual([...contract.states].sort(), [...used].sort());
});
test("every clause names evidence, authority, and change triggers", () => {
  for (const clause of contract.clauses) {
    assert.ok(clause.evidence.length > 0, clause.id);
    assert.ok(clause.authority.length > 0, clause.id);
    assert.ok(clause.changeTriggers.length > 0, clause.id);
  }
});
