import test from "node:test";import assert from "node:assert/strict";import{readFile}from"node:fs/promises";import{auditPeftSimulation}from"../lib/peft-adaptation.mjs";const x=JSON.parse(await readFile(new URL("../md12/mosaic-peft-candidate-simulation.json",import.meta.url)));
test("PEFT fixtures create no artifact",()=>assert.equal(x.artifactsCreated,false));
test("two bounded adapter candidates are compared",()=>assert.equal(auditPeftSimulation(x).candidates,2));
test("wrong base fails before load",()=>assert.equal(x.wrongBaseFailure.decision,"reject-before-load-base-digest-mismatch"));
test("PEFT simulation passes its audit",()=>assert.deepEqual(auditPeftSimulation(x).errors,[]));
