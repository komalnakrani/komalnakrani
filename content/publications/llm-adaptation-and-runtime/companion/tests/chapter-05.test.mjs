import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {auditCuration} from "../lib/curate-separate.mjs";
const fixture=JSON.parse(await readFile(new URL("../md10/mosaic-curation-manifest.json",import.meta.url)));
test("signature false duplicate is repaired without merging task records",()=>assert.equal(fixture.duplicateAudit.signatureFalsePositive.repairedDecision,"distinct-task-bearing-content"));
test("paraphrased evaluation family is rejected from train",()=>assert.deepEqual(auditCuration(fixture).rejected[0],{recordId:"REC-007",reason:"holdout-family-overlap"}));
test("five purpose vaults remain separately identified",()=>assert.deepEqual(auditCuration(fixture).vaultCounts,{train:2,development:1,evaluation:1,retention:1,control:1}));
test("synthetic MD-10 curation audit passes without training authority",()=>assert.deepEqual(auditCuration(fixture).errors,[]));
