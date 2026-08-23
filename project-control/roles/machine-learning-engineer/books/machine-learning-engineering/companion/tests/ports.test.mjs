import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { PORTS, runThroughPort } from '../lib/ports.mjs';
import { canonicalJson } from '../lib/canonical-json.mjs';

test('five ports are equal, ordered, and none is privileged', () => {
  assert.deepEqual(PORTS, ['PORT-MANAGED', 'PORT-CLASSICAL', 'PORT-DEEP', 'PORT-EDGE', 'PORT-SHARED']);
  assert.equal(new Set(PORTS).size, 5);
});

test('all five adapters preserve an identical enumerable decision and evidence shape', () => {
  const envelope = Object.freeze({ decision: 'Bind evidence.', evidence: Object.freeze(['fixture']), disposition: 'PASS' });
  const outputs = PORTS.map((port) => runThroughPort(port, envelope));
  assert.equal(new Set(outputs.map((output) => canonicalJson(output))).size, 1);
  assert.deepEqual(outputs.map((output) => Object.keys(output)), Array(5).fill(['decision', 'evidence', 'disposition']));
  assert.deepEqual(outputs.map((output) => output.port), PORTS);
  assert.equal(outputs.every((output) => Object.getOwnPropertyDescriptor(output, 'port').enumerable === false), true);
});

test('unknown ports fail closed rather than falling back to a reference implementation', () => {
  assert.throws(() => runThroughPort('PORT-DEFAULT', {}), (error) => error.code === 'PORT_UNKNOWN');
});
