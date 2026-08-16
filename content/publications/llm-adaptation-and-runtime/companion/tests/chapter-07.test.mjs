import test from "node:test";import assert from "node:assert/strict";import{readFile}from"node:fs/promises";import{auditPreferenceData}from"../lib/preference-data.mjs";const x=JSON.parse(await readFile(new URL("../md11/mosaic-preference-data.json",import.meta.url)));
test("biased long-first pair is rejected",()=>assert.deepEqual(auditPreferenceData(x).rejected,["PAIR-001"]));
test("hard failure is not preference",()=>assert.equal(x.pairs[1].decision,"not-a-preference-pair-hard-gate-decides"));
test("criterion-stable pair survives order swap",()=>assert.deepEqual(auditPreferenceData(x).accepted,["PAIR-003"]));
test("preference audit remains bounded",()=>assert.deepEqual(auditPreferenceData(x).errors,[]));
