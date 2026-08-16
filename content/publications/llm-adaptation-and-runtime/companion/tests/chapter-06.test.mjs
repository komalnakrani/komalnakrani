import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {auditInstructionData} from "../lib/instruction-data.mjs";
const fixture=JSON.parse(await readFile(new URL("../md11/mosaic-instruction-data.json",import.meta.url)));
test("only train vault records enter authoring",()=>assert.equal(fixture.allowedInputVault,"train"));
test("unsupported polished synthetic target is rejected",()=>assert.deepEqual(auditInstructionData(fixture).rejected,[{id:"INS-005",reason:"unsupported-synthetic-target"}]));
test("positive negative abstention and escalation signals are present",()=>assert.deepEqual(auditInstructionData(fixture).signals,["abstention","escalation","negative","positive"]));
test("template mismatch blocks rendering readiness and no training runs",()=>assert.deepEqual(auditInstructionData(fixture).errors,[]));
