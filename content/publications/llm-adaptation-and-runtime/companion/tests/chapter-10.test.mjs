import test from "node:test";import assert from "node:assert/strict";import{readFile}from"node:fs/promises";import{auditSftSimulation}from"../lib/sft-supervision.mjs";const x=JSON.parse(await readFile(new URL("../md12/mosaic-sft-checkpoint-simulation.json",import.meta.url)));
test("SFT evidence is simulation only",()=>assert.equal(auditSftSimulation(x).trainingExecuted,false));
test("all three checkpoint comparators remain visible",()=>assert.equal(auditSftSimulation(x).candidates,3));
test("lower-loss late checkpoint is rejected",()=>assert.equal(x.candidates.find(v=>v.id==="sft-late").disposition,"reject-forbidden-regressions"));
test("SFT simulation passes its audit",()=>assert.deepEqual(auditSftSimulation(x).errors,[]));
