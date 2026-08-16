import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import test from 'node:test';
import {acceptHandoffResult,admitMemory,contextDecision,deleteMemory,topologyDisposition,validateFreeze,validateHandoff} from '../lib/state-and-topology.mjs';

const root = new URL('../dossier/', import.meta.url);
const read = async (name) => JSON.parse(await readFile(new URL(name,root),'utf8'));

test('AR-06 defines six distinct lifecycle classes', async () => {
  const record = await read('ar-06-v1.0.0.json');
  assert.deepEqual(record.classes.map((item)=>item.id),['workflow-state','model-context','scratch-state','artifact','preference','memory']);
  assert.equal(record.classes.filter((item)=>item.authoritative).map((item)=>item.id).join(','),'workflow-state');
  assert.ok(record.classes.every((item)=>item.permissions && item.retention && item.deletion));
});

test('AR-06 blocks injection, cross-tenant, expired, deleted, and unauthorized context', async () => {
  const record = await read('ar-06-v1.0.0.json');
  const base = {tenantId:'a',requestTenantId:'a',principalId:'p1',permissions:['p1']};
  assert.equal(contextDecision(record,base).allow,true);
  for (const mutation of [{tenantId:'b'},{expiresAt:'2026-08-16T09:00:00Z'},{deleted:true},{permissions:[]},{untrustedInstruction:true,asPolicy:true}]) assert.equal(contextDecision(record,{...base,...mutation}).allow,false,JSON.stringify(mutation));
});

test('AR-06 memory admission requires provenance permission expiry and resolved trust', async () => {
  const record = await read('ar-06-v1.0.0.json');
  const valid = {sourceId:'source-1',permission:'user:p1',expiresAt:'2026-09-01T00:00:00Z',conflict:false,trust:'verified',authority:false};
  assert.deepEqual(admitMemory(record,valid),{admit:true,reasons:[]});
  for (const mutation of [{sourceId:null},{permission:null},{expiresAt:null},{conflict:true},{trust:'untrusted'},{authority:true}]) assert.equal(admitMemory(record,{...valid,...mutation}).admit,false);
});

test('AR-06 deletion removes content, creates tombstone, and invalidates derivatives', () => {
  const store = new Map([['m1',{value:'preference',downstreamRefs:['ctx-7','artifact-2']}]]);
  const result = deleteMemory(store,'m1');
  assert.equal(result.deleted,true); assert.equal(store.has('m1'),false); assert.equal(result.tombstone.contentRetained,false); assert.deepEqual(result.invalidated,['ctx-7','artifact-2']);
});

test('AR-07 v0.1 freezes a single-agent configuration and effect boundary', async () => {
  const baseline = await read('ar-07-v0.1.0.json');
  assert.deepEqual(validateFreeze(baseline),[]); assert.equal(baseline.syntheticBaseline.cases,7); assert.equal(baseline.syntheticBaseline.forbiddenEffects,0); assert.equal(baseline.configuration.runOwner,'fieldops-agent-001');
});

test('AR-07 baseline faults all have bounded controls', async () => {
  const baseline = await read('ar-07-v0.1.0.json');
  assert.equal(baseline.faults.length,6); assert.ok(baseline.faults.every((fault)=>fault.control)); assert.equal(baseline.taskSet.find((task)=>task.id==='ambiguous-effect').expected,'reconcile-then-verify');
});

test('AR-07 v1 handoff is complete, read-only, and keeps one final owner', async () => {
  const experiment = await read('ar-07-v1.0.0.json');
  assert.deepEqual(validateHandoff(experiment),[]); assert.equal(experiment.handoffContract.finalOwner,'fieldops-agent-001'); assert.equal(experiment.handoffContract.budget.effects,0);
});

test('handoff rejects stale, cancelled, late, duplicate-key, and conflicting results', async () => {
  const experiment = await read('ar-07-v1.0.0.json');
  const current = {stateVersion:7,cancelled:false};
  const base = {stateVersion:7,cancelled:false,duplicateKey:experiment.handoffContract.duplicateKey,now:10,leaseExpiresAt:30,conflict:false};
  assert.equal(acceptHandoffResult(experiment,base,current).accept,true);
  for (const mutation of [{stateVersion:6},{cancelled:true},{now:31},{duplicateKey:'wrong'},{conflict:true}]) assert.equal(acceptHandoffResult(experiment,{...base,...mutation},current).accept,false,JSON.stringify(mutation));
});

test('two workers cannot receive effect capability through the handoff', async () => {
  const experiment = await read('ar-07-v1.0.0.json');
  const widened = {...experiment.handoffContract,capabilities:['search_manual','reserve_part'],budget:{...experiment.handoffContract.budget,effects:1}};
  assert.ok(validateHandoff(experiment,widened).includes('effect_authority_widened')); assert.ok(validateHandoff(experiment,widened).includes('effect_capability_delegated'));
});

test('synthetic comparison retains one agent and disputed cost-effectiveness', async () => {
  const experiment = await read('ar-07-v1.0.0.json');
  assert.equal(topologyDisposition(experiment),'single-agent'); assert.equal(experiment.disputedClaim.id,'AGE-BCLM-018'); assert.equal(experiment.disputedClaim.status,'contested'); assert.equal(experiment.disposition.selectedTopology,'single-agent');
});
