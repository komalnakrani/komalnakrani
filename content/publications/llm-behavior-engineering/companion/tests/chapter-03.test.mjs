import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { generationIdentity, renderTemplate, tokenizeByPieces, tokenizeByRuns, traceMessage } from "../lib/token-trace.mjs";

const fixtures = JSON.parse(await readFile(new URL("../mechanics/mosaic-token-fixtures.json", import.meta.url), "utf8"));

test("pedagogical tokenizers create different representations", () => {
  for (const message of fixtures.messages.slice(0, 3)) {
    assert.notDeepEqual(tokenizeByRuns(message.text), tokenizeByPieces(message.text), message.id);
  }
});
test("chat templating changes sequence length and is part of the trace", () => {
  const message = fixtures.messages[0];
  assert.ok(tokenizeByRuns(renderTemplate(message, fixtures.template)).length > tokenizeByRuns(message.text).length);
  assert.match(traceMessage(message, fixtures.template).rendered, /<system>/);
});
test("long fixture exposes budget risk under at least one tokenizer", () => {
  const longTrace = traceMessage(fixtures.messages.find((message) => message.id === "MSG-LONG"), fixtures.template);
  assert.equal(longTrace.budget.piecesOverflow, true);
});
test("generation configuration changes behavior identity deterministically", () => {
  const a = generationIdentity({temperature:0, topP:1, templateVersion:"0.1.0"});
  const b = generationIdentity({temperature:0.7, topP:1, templateVersion:"0.1.0"});
  assert.notEqual(a, b);
  assert.equal(a, generationIdentity({topP:1, templateVersion:"0.1.0", temperature:0}));
});
