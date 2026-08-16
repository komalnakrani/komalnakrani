import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { validateProposal } from "../lib/proposal-validator.mjs";

const load = async (relative) => JSON.parse(await readFile(new URL(relative, import.meta.url), "utf8"));
const schema = await load("../output/mosaic-proposal-schema.json");
const bundle = await load("../output/mosaic-output-fixtures.json");
const run = (id) => { const fixture=bundle.fixtures.find((item)=>item.id===id); return validateProposal(fixture.raw,schema,bundle,fixture.repairAttempts??0); };

test("valid typed proposal remains effect-free", () => { const result=run("VALID"); assert.equal(result.terminal,"valid"); assert.equal(result.effect,null); });
test("parse and structural failures follow bounded repair policy", () => { assert.equal(run("MALFORMED").terminal,"fail-closed"); assert.equal(run("STRUCTURAL").terminal,"repair"); });
test("schema-valid authorization and fabricated provenance fail closed", () => { const result=run("SEMANTIC-PROVENANCE"); assert.equal(result.terminal,"fail-closed"); assert.ok(result.errors.some((error)=>error.startsWith("semantic:"))); assert.ok(result.errors.some((error)=>error.startsWith("provenance:"))); });
test("abstain and escalate stay explicit terminal states", () => { assert.equal(run("ABSTAIN").terminal,"abstain"); assert.equal(run("ESCALATE").terminal,"escalate"); });
