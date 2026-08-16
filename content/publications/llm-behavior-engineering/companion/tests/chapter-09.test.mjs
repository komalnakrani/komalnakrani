import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { eligibleUnits, validateRetrievalQuestion } from "../lib/retrieval-question.mjs";

const contract = JSON.parse(await readFile(new URL("../retrieval/mosaic-retrieval-question.json", import.meta.url), "utf8"));

test("retrieval question contract is complete and effect-free", () => assert.deepEqual(validateRetrievalQuestion(contract),[]));
test("eligibility precedes relevance and excludes other-tenant and revoked units", () => assert.deepEqual(eligibleUnits(contract).map((unit)=>unit.id),["UNIT-A7"]));
test("exact state and unauthorized authority select non-RAG paths", () => { assert.equal(contract.claimDecisions.find((x)=>x.id==="RQ-CASE-SCOPE").path,"deterministic-lookup"); assert.equal(contract.claimDecisions.find((x)=>x.id==="RQ-WARRANTY-APPROVAL").path,"abstain-escalate"); });
test("retrieval and generated behavior remain independent claim families", () => assert.notDeepEqual(contract.independentClaims.retrieval,contract.independentClaims.generatedBehavior));
