import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import test from 'node:test';
import {authorizeInvocation,handleReservationOutcome,replay,transition,validateCatalog,verifyCompletion} from '../lib/runtime.mjs';

const root = new URL('../dossier/', import.meta.url);
const read = async (name) => JSON.parse(await readFile(new URL(name, root),'utf8'));

test('AR-03 accepts only declared transitions with stable run identity', async () => {
  const contract = await read('ar-03-v1.0.0.json');
  const initial = {runId:'run-fieldops-001',state:'CREATED',sequence:0,counters:{turns:0,actions:0,effects:0}};
  const result = replay(contract, initial, [{type:'run.started'},{type:'observation.recorded'},{type:'proposal.emitted'}]);
  assert.equal(result.ok,true); assert.equal(result.run.state,'VALIDATING'); assert.equal(result.run.runId,initial.runId); assert.equal(result.run.sequence,3);
  assert.equal(transition(contract,result.run,{type:'completion.verified'}).reason,'illegal_transition');
});

test('AR-03 cancellation wins before an effect and terminal state cannot advance', async () => {
  const contract = await read('ar-03-v1.0.0.json');
  const run = {runId:'r1',state:'VALIDATING',sequence:4,counters:{turns:1,actions:2,effects:0}};
  const cancelled = transition(contract,run,{type:'run.cancelled'});
  assert.equal(cancelled.run.state,'CANCELLED');
  assert.equal(transition(contract,cancelled.run,{type:'proposal.allowed'}).reason,'terminal_state');
});

test('AR-03 completion ignores model assertion and requires all external evidence', async () => {
  const contract = await read('ar-03-v1.0.0.json');
  assert.equal(verifyCompletion(contract,['model-says-complete']).ok,false);
  assert.equal(verifyCompletion(contract,contract.completion.requiredEvidence).ok,true);
});

test('AR-03 event replay rejects illegal paths and counters stay monotonic', async () => {
  const contract = await read('ar-03-v1.0.0.json');
  const run = {runId:'r1',state:'OBSERVING',sequence:1,counters:{turns:0,actions:0,effects:0}};
  const one = transition(contract,run,{type:'observation.recorded',increment:'turns'});
  assert.equal(one.run.counters.turns,1);
  const illegal = transition(contract,one.run,{type:'effect.recorded',increment:'effects'});
  assert.equal(illegal.ok,false); assert.equal(illegal.run.counters.turns,1);
});

test('AR-04 catalog has five narrow capabilities and no generic master key', async () => {
  const catalog = await read('ar-04-v1.0.0.json');
  assert.deepEqual(validateCatalog(catalog),[]);
  assert.deepEqual(catalog.capabilities.map((item)=>item.id),['read_equipment','search_manual','check_inventory','propose_reservation','reserve_part']);
  assert.ok(['run_sql','execute_shell','call_arbitrary_api'].every((id)=>catalog.rejectedCapabilities.includes(id)));
});

test('AR-04 ambiguous commit reconciles and same key with changed intent is denied', async () => {
  const catalog = await read('ar-04-v1.0.0.json'); const ledger = new Map();
  const request = {idempotencyKey:'key-1',principal:'p1',taskId:'t1',runId:'r1',proposalHash:'h1',partId:'part-A17',slotId:'slot-B2',quantity:1};
  assert.deepEqual(handleReservationOutcome(catalog,ledger,request,'timeout-after-commit'),{status:'AMBIGUOUS',next:'RECONCILE'});
  assert.equal(handleReservationOutcome(catalog,ledger,request,'retry').status,'FOUND');
  assert.equal(handleReservationOutcome(catalog,ledger,{...request,quantity:2},'retry').reason,'SAME_KEY_DIFFERENT_INTENT');
});

test('AR-05 exact live audience-bound invocation passes', async () => {
  const envelope = await read('ar-05-v1.0.0.json');
  const invocation = {...envelope.approval,agentId:envelope.delegation.agentId,tokenAudience:envelope.delegation.audience,effect:true};
  assert.deepEqual(authorizeInvocation(envelope,invocation,'2026-08-16T09:06:00Z'),{ok:true,reasons:[]});
});

test('AR-05 rejects part, slot, run, scope, audience, expiry, revocation, and replay mutations', async () => {
  const envelope = await read('ar-05-v1.0.0.json');
  const base = {...envelope.approval,agentId:envelope.delegation.agentId,tokenAudience:envelope.delegation.audience,effect:true};
  const mutations = [{partId:'other'},{slotId:'other'},{runId:'other'},{scope:'reservation:all'},{tokenAudience:'https://other.example'},{delegationRevoked:true},{credentialExposedToModel:true}];
  for (const mutation of mutations) assert.equal(authorizeInvocation(envelope,{...base,...mutation},'2026-08-16T09:06:00Z').ok,false,JSON.stringify(mutation));
  assert.equal(authorizeInvocation(envelope,base,'2026-08-16T09:10:00Z').ok,false,'expiry');
  assert.equal(authorizeInvocation({...envelope,approval:{...envelope.approval,used:true}},base,'2026-08-16T09:06:00Z').ok,false,'replay');
});

test('AR-05 rejects session identity without a verified principal', async () => {
  const envelope = await read('ar-05-v1.0.0.json');
  const invocation = {...envelope.approval,principal:null,sessionId:'session-123',agentId:envelope.delegation.agentId,tokenAudience:envelope.delegation.audience,effect:true};
  const result = authorizeInvocation(envelope,invocation,'2026-08-16T09:06:00Z');
  assert.equal(result.ok,false); assert.ok(result.reasons.includes('principal'));
});
