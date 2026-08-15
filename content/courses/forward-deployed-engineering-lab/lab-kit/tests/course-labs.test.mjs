import assert from 'node:assert/strict';
import test from 'node:test';

import { runModule } from '../scenarios.mjs';

test('module 01 preserves evidence confidence and a genuine stop condition', async () => {
  const result = await runModule('01');
  assert.deepEqual(result.evidence.map((item) => item.status), ['reported', 'observed', 'inferred', 'unknown']);
  assert.match(result.stopCondition, /Stop if/);
});

test('module 01 refuses production and certification claims', async () => {
  const result = await runModule('01');
  assert.equal(result.boundary.productionProof, false);
  assert.equal(result.boundary.certificationUse, false);
});

test('module 02 completes the bounded synthetic path', async () => {
  const result = await runModule('02');
  assert.equal(result.accepted.state, 'ready-for-review');
  assert.equal(result.accepted.reason, 'bounded-path-complete');
});

test('module 02 blocks ambiguity before downstream calls', async () => {
  const result = await runModule('02');
  assert.equal(result.ambiguous.reason, 'equipment-ambiguous');
  assert.deepEqual(result.downstreamCallsAfterAmbiguity, { evidence: 0, inventory: 0 });
});

test('module 03 exposes a passing aggregate with a release-blocking critical failure', async () => {
  const result = await runModule('03');
  assert.equal(result.aggregatePassRate, 0.97);
  assert.equal(result.critical.grade.pass, true);
  assert.equal(result.critical.releaseBlocking, true);
});

test('module 03 stops rather than averaging away the critical segment', async () => {
  const result = await runModule('03');
  assert.match(result.disposition, /^stop-/);
});

test('module 04 exposes low-connectivity degradation', async () => {
  const result = await runModule('04');
  assert.ok(result.cohorts['low-connectivity'].averageLatencyMs > result.cohorts.connected.averageLatencyMs);
  assert.ok(result.cohorts['low-connectivity'].successRate < result.cohorts.connected.successRate);
});

test('module 04 rehearses roll-forward without claiming a production RTO', async () => {
  const result = await runModule('04');
  assert.equal(result.divergent.status, 'divergent');
  assert.equal(result.recovery.action, 'roll-forward');
  assert.equal(result.rehearsal.metLocalTarget, true);
  assert.match(result.rehearsal.limitation, /not a production RTO claim/);
});

test('module 05 preserves customer incident command', async () => {
  const result = await runModule('05');
  assert.equal(result.command.valid, true);
  assert.equal(result.timeline[0].confidence, 'confirmed');
});

test('module 05 blocks stabilization and transfer while evidence and access gaps remain', async () => {
  const result = await runModule('05');
  assert.equal(result.stabilization.stable, false);
  assert.equal(result.ownership.accepted, false);
  assert.equal(result.access.transferred, false);
  assert.deepEqual(result.access.retainedFde, ['release']);
});

test('module 06 produces a reduced-scope readiness decision and defers reuse to the agreed gate', async () => {
  const result = await runModule('06');
  assert.equal(result.readiness.disposition, 'reduced-scope');
  assert.equal(result.reuse.decision, 'defer');
  assert.match(result.closure.reuseState, /third-context/);
});

test('module 06 closes a complete traceable synthetic dossier', async () => {
  const result = await runModule('06');
  assert.equal(result.memo.valid, true);
  assert.equal(result.closure.valid, true);
  assert.match(result.closure.sourceHash, /^[a-f0-9]{64}$/);
});
