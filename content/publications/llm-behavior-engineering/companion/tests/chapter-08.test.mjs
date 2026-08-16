import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { packContext, withRecord } from "../lib/context-packer.mjs";

const ledger = JSON.parse(await readFile(new URL("../context/mosaic-context-ledger.json", import.meta.url), "utf8"));

test("context packer reserves output and excludes unauthorized evidence", () => { const result=packContext(ledger); assert.equal(result.reservedOutput,20); assert.ok(result.omitted.some((item)=>item.id==="SB-OTHER-TENANT"&&item.reason==="unauthorized")); assert.ok(!result.selected.some((item)=>item.id==="SB-OTHER-TENANT")); });
test("mandatory evidence outranks optional history and omissions remain visible", () => { const result=packContext(ledger); assert.ok(result.selected.some((item)=>item.id==="SB-CURRENT")); assert.ok(result.omitted.some((item)=>item.id==="HISTORY-DUP"&&item.reason==="oversized")); assert.equal(result.terminal,"degraded"); });
test("absent, stale, and conflicting mandatory evidence remain distinct", () => { assert.equal(packContext(withRecord(ledger,"SB-CURRENT",{present:false})).omitted.find((x)=>x.id==="SB-CURRENT").reason,"absent"); assert.equal(packContext(withRecord(ledger,"SB-CURRENT",{fresh:false})).omitted.find((x)=>x.id==="SB-CURRENT").reason,"stale"); assert.equal(packContext(withRecord(ledger,"SB-CURRENT",{conflict:true})).terminal,"escalate"); });
test("identical ledger creates identical deterministic identity", () => assert.equal(packContext(ledger).ledgerIdentity,packContext(structuredClone(ledger)).ledgerIdentity));
