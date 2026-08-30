import test from 'node:test';
import assert from 'node:assert/strict';
import {
  STATES, LEGAL_TRANSITIONS, FORBIDDEN_TRANSITIONS, REOPEN_TRIGGERS,
  assertLegalTransition, resolveReopen,
} from '../lib/lifecycle.mjs';
import { CHAPTER_CONTRACTS } from '../lib/dossier.mjs';

test('lifecycle exposes exactly seventeen ordered states', () => {
  assert.deepEqual(STATES, [
    'UNORIENTED', 'ORIENTED', 'CONTRACTED', 'ADMISSIBLE', 'RECONSTRUCTIBLE',
    'CANDIDATE', 'TECHNICALLY-QUALIFIED', 'HOLD', 'REJECT', 'RELEASABLE',
    'OPERABLE', 'OBSERVED', 'REQUALIFIED', 'ROLLED-BACK', 'CONTROLLED',
    'RETIRED', 'REVIEWED',
  ]);
});

test('lifecycle exposes exactly nineteen legal transitions', () => {
  assert.equal(LEGAL_TRANSITIONS.length, 19);
  assert.deepEqual(LEGAL_TRANSITIONS.map(({ from, to }) => `${from}->${to}`), [
    'UNORIENTED->ORIENTED', 'ORIENTED->CONTRACTED', 'CONTRACTED->ADMISSIBLE',
    'ADMISSIBLE->RECONSTRUCTIBLE', 'RECONSTRUCTIBLE->CANDIDATE',
    'CANDIDATE->TECHNICALLY-QUALIFIED', 'CANDIDATE->HOLD', 'CANDIDATE->REJECT',
    'HOLD->CANDIDATE', 'REJECT->CANDIDATE', 'TECHNICALLY-QUALIFIED->RELEASABLE',
    'RELEASABLE->OPERABLE', 'OPERABLE->OBSERVED', 'OBSERVED->REQUALIFIED',
    'OBSERVED->ROLLED-BACK', 'REQUALIFIED->CONTROLLED', 'ROLLED-BACK->CONTROLLED',
    'CONTROLLED->RETIRED', 'RETIRED->REVIEWED',
  ]);
  const declared = new Set(LEGAL_TRANSITIONS.map(({ from, to }) => `${from}->${to}`));
  const persisted = new Set(CHAPTER_CONTRACTS.flatMap((contract) => contract.incomingStates.flatMap(
    (from) => contract.outgoingStates.map((to) => `${from}->${to}`),
  )));
  assert.equal(declared.size, 19);
  assert.equal(persisted.size, 19);
  assert.deepEqual([...declared].filter((key) => !persisted.has(key)), [
    'CANDIDATE->HOLD', 'CANDIDATE->REJECT', 'HOLD->CANDIDATE', 'REJECT->CANDIDATE',
  ]);
  assert.deepEqual([...persisted].filter((key) => !declared.has(key)), [
    'CONTRACTED->CONTRACTED', 'ADMISSIBLE->ADMISSIBLE', 'CANDIDATE->CANDIDATE',
    'TECHNICALLY-QUALIFIED->TECHNICALLY-QUALIFIED',
  ]);
});

test('two forbidden direct release transitions fail with a named diagnostic', () => {
  assert.deepEqual(FORBIDDEN_TRANSITIONS, ['HOLD->RELEASABLE', 'REJECT->RELEASABLE']);
  for (const transition of FORBIDDEN_TRANSITIONS) {
    const [from, to] = transition.split('->');
    assert.throws(() => assertLegalTransition(from, to), (error) => error.code === 'FORBIDDEN_TRANSITION');
  }
});

test('self-state dossier enrichment is permitted without inventing a lifecycle promotion', () => {
  assert.doesNotThrow(() => assertLegalTransition('CONTRACTED', 'CONTRACTED', { allowMilestoneEnrichment: true }));
  assert.throws(() => assertLegalTransition('CONTRACTED', 'CONTRACTED'), (error) => error.code === 'ILLEGAL_TRANSITION');
});

test('four reopen triggers resolve to exact earlier evidence states', () => {
  assert.deepEqual(REOPEN_TRIGGERS.map(({ change, reopenTarget }) => [change, reopenTarget]), [
    ['purpose or intended use', 'CONTRACTED'],
    ['data labels features or population', 'ADMISSIBLE'],
    ['runtime dependencies interface or serving envelope', 'RECONSTRUCTIBLE'],
    ['authority constraint or permitted use', 'CONTRACTED'],
  ]);
  for (const trigger of REOPEN_TRIGGERS) {
    assert.equal(resolveReopen(trigger.change).reopenTarget, trigger.reopenTarget);
    assert.equal(resolveReopen(trigger.change, 'REQUALIFIED').reopenTarget, trigger.reopenTarget);
    for (const early of ['UNORIENTED', trigger.reopenTarget]) {
      assert.throws(() => resolveReopen(trigger.change, early), (error) => error.code === 'DOSSIER_TRANSITION_INVALID');
    }
  }
  assert.throws(() => resolveReopen('metric moved'), (error) => error.code === 'REOPEN_TRIGGER_UNKNOWN');
});
