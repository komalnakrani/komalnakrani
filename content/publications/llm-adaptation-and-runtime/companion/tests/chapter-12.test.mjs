import test from "node:test";import assert from "node:assert/strict";import{readFile}from"node:fs/promises";import{auditPreferenceSimulation}from"../lib/preference-optimization.mjs";const x=JSON.parse(await readFile(new URL("../md13/mosaic-preference-optimization-simulation.json",import.meta.url)));
test("preference optimization did not run",()=>assert.equal(x.trainingExecuted,false));
test("four candidate paths use one comparison",()=>assert.equal(auditPreferenceSimulation(x).candidates,4));
test("proxy-only gain is rejected",()=>assert.equal(x.disposition,"reject-proxy-only-gain"));
test("preference simulation passes its audit",()=>assert.deepEqual(auditPreferenceSimulation(x).errors,[]));
