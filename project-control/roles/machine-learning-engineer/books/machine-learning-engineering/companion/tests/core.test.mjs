import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { canonicalJson, sha256Bytes } from '../lib/canonical-json.mjs';
import { createEvidenceEnvelope } from '../lib/evidence-envelope.mjs';
import {
  CHAPTER_CONTRACTS, ENTRY_HASH, POSITIVE_FIXTURES, MUTATION_CONTRACTS,
  createPositiveRecord, createNegativeRecord,
} from '../lib/dossier.mjs';
import { REOPEN_TRIGGERS } from '../lib/lifecycle.mjs';

function validateClosedSchema(value, schema, path = '$') {
  const actualType = Array.isArray(value) ? 'array' : value === null ? 'null' : typeof value;
  if (schema.type) assert.equal(actualType, schema.type, `${path} type`);
  if (Object.hasOwn(schema, 'const')) assert.deepEqual(value, schema.const, `${path} const`);
  if (schema.enum) assert.ok(schema.enum.includes(value), `${path} enum`);
  if (schema.minLength) assert.ok(value.length >= schema.minLength, `${path} minLength`);
  if (schema.pattern) assert.match(value, new RegExp(schema.pattern), `${path} pattern`);
  if (schema.minItems) assert.ok(value.length >= schema.minItems, `${path} minItems`);
  if (schema.items && Array.isArray(value)) {
    value.forEach((item, index) => validateClosedSchema(item, schema.items, `${path}[${index}]`));
  }
  if (actualType === 'object') {
    for (const required of schema.required ?? []) assert.ok(Object.hasOwn(value, required), `${path}.${required} required`);
    if (schema.additionalProperties === false) {
      for (const key of Object.keys(value)) assert.ok(Object.hasOwn(schema.properties, key), `${path}.${key} is not declared`);
    }
    for (const [key, child] of Object.entries(value)) {
      if (schema.properties?.[key]) validateClosedSchema(child, schema.properties[key], `${path}.${key}`);
    }
  }
}

test('canonical JSON recursively sorts object keys, preserves array order, and emits one LF', () => {
  const value = { z: 1, nested: { z: false, a: null }, array: [{ b: 2, a: 1 }, 'x'] };
  assert.equal(canonicalJson(value), '{"array":[{"a":1,"b":2},"x"],"nested":{"a":null,"z":false},"z":1}\n');
});

test('SHA-256 is computed over exact canonical bytes', () => {
  assert.equal(sha256Bytes('{"a":2,"z":1}\n'), '7078d9c3f6bc0b2e8f2d2e047a89abd6383ed8b5662e40920c9d3121a80e9956');
});

test('evidence envelopes retain bounded authority and are deeply immutable', () => {
  const envelope = createEvidenceEnvelope({
    chapterId: 'MLE-CH-01',
    decision: 'Orient the workload.',
    evidence: ['fixed fixture'],
    owner: 'Product and domain authorities',
    authorityRoute: 'Route formal decisions to named owners.',
    authorityCeiling: 'Mechanics only; no production or approval claim.',
    limitation: 'Synthetic evidence cannot prove real outcomes.',
    nextEvidence: 'Task contract',
  });
  assert.equal(envelope.truthState, 'synthetic-deterministic');
  assert.throws(() => envelope.evidence.push('mutation'), TypeError);
  assert.throws(() => { envelope.owner = 'MLE'; }, TypeError);
});

test('evidence envelopes fail closed when an authority boundary is absent', () => {
  assert.throws(
    () => createEvidenceEnvelope({ chapterId: 'MLE-CH-01', decision: 'x', evidence: ['x'] }),
    (error) => error.code === 'ENVELOPE_INVALID' && /owner/.test(error.message),
  );
});

test('all three JSON contracts are parseable and require authority-bounded evidence fields', async () => {
  const names = ['evidence-envelope.schema.json', 'dossier-record.schema.json', 'port-result.schema.json'];
  for (const name of names) {
    const schema = JSON.parse(await readFile(new URL(`../contracts/${name}`, import.meta.url), 'utf8'));
    assert.equal(schema.$schema, 'https://json-schema.org/draft/2020-12/schema');
    assert.equal(schema.additionalProperties, false);
    assert.ok(schema.required.includes('authorityCeiling'));
    assert.ok(schema.required.includes('limitation'));
  }
});

test('all forty-two labs bind immutable fixed fixture bytes and named diagnostics', async () => {
  const entryBytes = await readFile(new URL('../fixtures/bl-entry.json', import.meta.url), 'utf8');
  const mutationBytes = await readFile(new URL('../fixtures/mutations.json', import.meta.url), 'utf8');
  const entryFixture = JSON.parse(entryBytes);
  const mutationFixture = JSON.parse(mutationBytes);
  assert.equal(sha256Bytes(entryBytes), ENTRY_HASH);
  assert.equal(entryFixture.positiveLabs.length, 21);
  assert.equal(mutationFixture.mutations.length, 21);
  assert.equal(POSITIVE_FIXTURES.length, 21);
  assert.equal(MUTATION_CONTRACTS.length, 21);
  assert.equal(Object.isFrozen(POSITIVE_FIXTURES[0]), true);
  assert.deepEqual(POSITIVE_FIXTURES, entryFixture.positiveLabs);
  assert.deepEqual(MUTATION_CONTRACTS.map(({ labId: _labId, ...fixture }) => fixture), mutationFixture.mutations);
  const positive = createPositiveRecord({ milestoneId: 'BL-00', priorHash: 'a'.repeat(64), incomingState: 'UNORIENTED', outgoingState: 'ORIENTED' });
  const negative = createNegativeRecord({ milestoneId: 'BL-00', priorHash: 'a'.repeat(64), incomingState: 'UNORIENTED' });
  assert.equal(positive.fixtureHash, sha256Bytes(canonicalJson(entryFixture.positiveLabs[0])));
  assert.equal(negative.fixtureHash, sha256Bytes(canonicalJson(mutationFixture.mutations[0])));
  assert.equal(negative.diagnostic, mutationFixture.mutations[0].diagnostic);
});

test('all produced positive, negative, and reopen records satisfy the closed JSON contracts', async () => {
  const dossierSchema = JSON.parse(await readFile(new URL('../contracts/dossier-record.schema.json', import.meta.url), 'utf8'));
  const portSchema = JSON.parse(await readFile(new URL('../contracts/port-result.schema.json', import.meta.url), 'utf8'));
  for (const contract of CHAPTER_CONTRACTS) {
    const priorHash = String(contract.index + 1).padStart(64, '0');
    const positive = createPositiveRecord({
      milestoneId: contract.milestoneId, priorHash,
      incomingState: contract.incomingState, outgoingState: contract.outgoingState,
      predecessorState: contract.incomingState,
    });
    const negative = createNegativeRecord({
      milestoneId: contract.milestoneId, priorHash, incomingState: contract.incomingState,
    });
    validateClosedSchema(positive, dossierSchema);
    validateClosedSchema(negative, portSchema);
    if (negative.disposition === 'REOPEN') {
      for (const field of ['changedEvidence', 'invalidatedEvidence', 'reopenTarget', 'reopenTrigger', 'sourceState']) {
        assert.ok(Object.hasOwn(negative, field), `${contract.milestoneId} REOPEN must include ${field}`);
      }
    }
  }
  for (const trigger of REOPEN_TRIGGERS) {
    const reopened = createNegativeRecord({
      milestoneId: 'BL-00', priorHash: ENTRY_HASH, incomingState: 'UNORIENTED', reopenTrigger: trigger.change,
    });
    validateClosedSchema(reopened, portSchema);
    assert.equal(reopened.disposition, 'REOPEN');
    assert.equal(reopened.reopenTrigger, trigger.change);
    assert.equal(reopened.reopenTarget, trigger.reopenTarget);
    assert.deepEqual(reopened.invalidatedEvidence, trigger.invalidates);
    assert.match(reopened.outputHash, /^[a-f0-9]{64}$/);
  }
});
