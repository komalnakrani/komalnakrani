import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { validateInterfaceSet, validateProviderEnvelope, validateToolProposal } from "../lib/interfaces.mjs";

const interfaces = JSON.parse(await readFile(new URL("../contracts/patchwork-interface-set.json", import.meta.url), "utf8"));

test("all eight combined-system boundaries are explicit", () => assert.deepEqual(validateInterfaceSet(interfaces), []));
test("learned output and tool proposals remain untrusted", () => {
  assert.equal(interfaces.boundaries.find((item) => item.name === "providerAdapter").trust, "untrusted");
  assert.equal(interfaces.boundaries.find((item) => item.name === "toolProposal").trust, "untrusted");
});
test("provider envelope rejects partial output", () => assert.ok(validateProviderEnvelope({adapterVersion:"x",status:"ok",candidateIds:[]}).length > 0));
test("tool proposal cannot begin confirmed or effectful", () => assert.ok(validateToolProposal({kind:"seller-question-draft",effect:"send",confirmed:true,question:"Is this compatible?"}).length > 0));
test("every boundary names owner, state, validator, failure, and authority", () => {
  for (const item of interfaces.boundaries) for (const field of ["owner","stateOwner","validator","failureDisposition","authority"]) assert.ok(item[field], `${item.name}:${field}`);
});
