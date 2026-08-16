import test from "node:test";import assert from "node:assert/strict";import{readFile}from"node:fs/promises";import{auditRetentionControl}from"../lib/retention-control.mjs";const x=JSON.parse(await readFile(new URL("../md11/mosaic-retention-control-suite.json",import.meta.url)));
test("five protected lanes exist",()=>assert.equal(Object.keys(x.lanes).length,5));
test("retrieval messages schema and evaluators stay frozen",()=>assert.ok(Object.values(x.frozen).every(Boolean)));
test("target-style candidate fails three protected rules",()=>assert.deepEqual(auditRetentionControl(x).failedRules,["R1","R2","R3"]));
test("forbidden regression rejects candidate",()=>assert.deepEqual(auditRetentionControl(x).errors,[]));
