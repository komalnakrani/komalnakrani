import test from "node:test";import assert from "node:assert/strict";import{readFile}from"node:fs/promises";import{auditTrainingExperiment}from"../lib/training-experiment.mjs";const x=JSON.parse(await readFile(new URL("../md12/mosaic-training-experiment.json",import.meta.url)));
test("effective batch is explicit",()=>assert.equal(auditTrainingExperiment(x).effectiveBatch,16));
test("unrecorded accumulation change is rejected",()=>assert.equal(x.invalidBatchCandidate.decision,"reject-unrecorded-effective-batch-change"));
test("weights-only resume is invalid",()=>assert.equal(x.invalidResume.decision,"resume-invalid-missing-state"));
test("template blocker prevents every run",()=>assert.deepEqual(auditTrainingExperiment(x).errors,[]));
