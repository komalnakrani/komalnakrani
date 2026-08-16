import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {evaluateAdaptationLadder} from "../lib/adaptation-ladder.mjs";
const fixture = JSON.parse(await readFile(new URL("../md09/mosaic-adaptation-ladder.json", import.meta.url)));
test("does not execute training",()=>assert.equal(fixture.trainingExecuted,false));
test("routes upstream and freshness failures to repairs",()=>assert.deepEqual(evaluateAdaptationLadder(fixture).selected.slice(0,2),[{failure:"malformed-language-code",action:"repair-upstream"},{failure:"stale-policy-knowledge",action:"repair-retrieval"}]));
test("rejects mechanism-mismatched options",()=>assert.ok(evaluateAdaptationLadder(fixture).rejected.includes("preference")));
test("completes method selection without approval",()=>assert.deepEqual(evaluateAdaptationLadder(fixture).errors,[]));
