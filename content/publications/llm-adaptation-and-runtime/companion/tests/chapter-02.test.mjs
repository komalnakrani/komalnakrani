import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {inspectModelBoundary} from "../lib/model-boundary.mjs";
const fixture = JSON.parse(await readFile(new URL("../md09/mosaic-model-tokenizer-inspection.json", import.meta.url)));
test("records exact-shaped synthetic digests",()=>assert.equal(inspectModelBoundary(fixture).errors.length,0));
test("blocks mismatched template and serialization",()=>assert.deepEqual(inspectModelBoundary(fixture).blockers,["pad-eos-serving-assumption","template-family","golden-serialization"]));
test("tokenizer contrast declares no winner",()=>assert.ok(fixture.tokenizerContrast.every((row)=>row.winner===null)));
test("managed comparator does not invent internals",()=>assert.equal(fixture.managedComparator.fabricatedInternals,false));
