import assert from "node:assert/strict";
import test from "node:test";
import { generateDataset } from "../data/generate-dataset.mjs";
import { proposeSellerQuestion, runVerticalSlice } from "../lib/vertical-slice.mjs";

const dataset = generateDataset();
const request = dataset.queries.find((item) => item.id === "PW-Q001");

test("success returns only validated structured evidence and no effect", () => {
  const result = runVerticalSlice({request,records:dataset.records});
  assert.equal(result.state, "respond");
  assert.equal(result.result.guaranteesCompatibility, false);
  assert.deepEqual(result.effects, []);
});
test("retrieval abstention remains explicit", () => {
  const impossible = {...request,id:"PW-Q-EMPTY",shaftDiameter:{value:999,unit:"mm"}};
  assert.equal(runVerticalSlice({request:impossible,records:dataset.records}).state, "abstain");
});
test("invalid provider output cannot drive product or tool effect", () => {
  const result = runVerticalSlice({request,records:dataset.records,scenario:"invalid-output"});
  assert.equal(result.reasonCode, "INVALID_PROVIDER_OUTPUT");
  assert.deepEqual(result.effects, []);
  assert.equal(result.result, undefined);
});
test("dependency timeout degrades without a partial result", () => {
  const result = runVerticalSlice({request,records:dataset.records,scenario:"timeout"});
  assert.equal(result.state, "degraded");
  assert.equal(result.result, undefined);
  assert.deepEqual(result.effects, []);
});
test("authorization failure stops before retrieval result or effect", () => {
  const result = runVerticalSlice({request,records:dataset.records,actor:{authenticated:true,scopes:[]}});
  assert.equal(result.reasonCode, "AUTHORIZATION_FAILED");
  assert.equal(result.result, undefined);
  assert.deepEqual(result.effects, []);
});
test("seller question is a reversible unconfirmed draft", () => {
  const outcome = proposeSellerQuestion({candidateId:"PW-L001",question:"Can you confirm the measured shaft diameter and unit?"});
  assert.equal(outcome.accepted, true);
  assert.equal(outcome.proposal.effect, "draft-only");
  assert.equal(outcome.proposal.confirmed, false);
  assert.deepEqual(outcome.effects, []);
});
