import test from "node:test";
import assert from "node:assert/strict";
import {readFile} from "node:fs/promises";
import {auditFrozenBaseline} from "../lib/frozen-baseline.mjs";
const fixture = JSON.parse(await readFile(new URL("../md09/mosaic-frozen-adaptation-baseline.json", import.meta.url)));
test("inherits the negative MD-08 disposition",()=>assert.equal(fixture.inheritedHandoff.adaptation,"not-justified"));
test("rejects the three-surface candidate",()=>assert.equal(fixture.confoundedCandidate.disposition,"rejected-confounded"));
test("exposes half the failures as upstream",()=>assert.deepEqual(auditFrozenBaseline(fixture).upstreamFailures,["MD09-F01","MD09-F02"]));
test("permits method selection but not training",()=>assert.deepEqual(auditFrozenBaseline(fixture).errors,[]));
