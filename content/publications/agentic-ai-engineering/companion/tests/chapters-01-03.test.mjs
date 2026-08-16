import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { approvalMatches, validateAr01, validateAr02 } from '../lib/contracts.mjs';

const root = new URL('../dossier/', import.meta.url);
const read = async (name) => JSON.parse(await readFile(new URL(name, root), 'utf8'));

test('AR-01 v0.1 assigns one explicit primary owner and authority to every decision', async () => {
  const record = await read('ar-01-v0.1.0.json');
  assert.deepEqual(validateAr01(record), []);
  assert.ok(record.decisions.some((decision) => decision.classification === 'owned'));
  assert.ok(record.decisions.some((decision) => decision.classification === 'partnered'));
  assert.ok(record.decisions.some((decision) => decision.classification === 'escalated'));
});

test('AR-01 v0.2 evaluates four levels and keeps multi-agent superiority disputed', async () => {
  const record = await read('ar-01-v0.2.0.json');
  assert.deepEqual(validateAr01(record), []);
  assert.equal(record.executionLevels.length, 4);
  assert.equal(record.selectedLevel, 'single-agent');
  assert.equal(record.executionLevels.find((level) => level.id === 'multi-agent').status, 'rejected-no-fieldops-evidence');
});

test('AR-02 gives every action owner, authority, evidence, stop, and escalation', async () => {
  const record = await read('ar-02-v1.0.0.json');
  assert.deepEqual(validateAr02(record), []);
  assert.ok(record.actions.every((action) => action.owner && action.authority && Array.isArray(action.evidence) && action.stop && action.escalation));
  assert.deepEqual(record.actions.filter((action) => action.class === 'effect').map((action) => action.id), ['reserve_part']);
});

test('approval accepts the exact live proposal once', () => {
  const proposal = {principal:'p1',taskId:'t1',runId:'r1',proposalHash:'h1',partId:'part-7',slotId:'slot-2',quantity:1,scope:'reserve:synthetic'};
  const approval = {...proposal,expiresAt:'2026-08-16T12:00:00Z',used:false};
  assert.equal(approvalMatches(approval, proposal, '2026-08-16T11:00:00Z'), true);
});

test('approval rejects every identity, effect, scope, expiry, and replay mutation', () => {
  const proposal = {principal:'p1',taskId:'t1',runId:'r1',proposalHash:'h1',partId:'part-7',slotId:'slot-2',quantity:1,scope:'reserve:synthetic'};
  const base = {...proposal,expiresAt:'2026-08-16T12:00:00Z',used:false};
  for (const [field, value] of [['principal','p2'],['taskId','t2'],['runId','r2'],['proposalHash','h2'],['partId','part-8'],['slotId','slot-3'],['quantity',2],['scope','reserve:all']]) {
    assert.equal(approvalMatches({...base,[field]:value}, proposal, '2026-08-16T11:00:00Z'), false, field);
  }
  assert.equal(approvalMatches({...base,used:true}, proposal, '2026-08-16T11:00:00Z'), false, 'replay');
  assert.equal(approvalMatches(base, proposal, '2026-08-16T12:00:00Z'), false, 'expiry');
});
