import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { validateCharter } from "../lib/validate-charter.mjs";

const charter = JSON.parse(await readFile(new URL("../contracts/mosaic-responsibility-charter.json", import.meta.url), "utf8"));

test("Mosaic responsibility charter is valid", () => assert.deepEqual(validateCharter(charter), []));
test("Mosaic remains fictional and proposal-only", () => {
  assert.equal(charter.fictional, true);
  assert.equal(charter.taskStatus, "proposal-only");
});
test("every charter claim separates working owner from authority", () => {
  for (const claim of charter.claims) {
    assert.ok(claim.workingOwner);
    assert.ok(claim.authority);
    assert.notEqual(claim.statement, claim.evidence.join(" "));
  }
});
test("warranty and external effects stay outside the model boundary", () => {
  const statements = charter.claims.map((claim) => claim.statement).join(" ").toLowerCase();
  assert.match(statements, /cannot approve warranty/);
  assert.match(statements, /cannot contact a customer/);
});
