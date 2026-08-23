import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { runPort } from '../lib/run.mjs';
import { canonicalJson, sha256Bytes } from '../lib/canonical-json.mjs';
import { PORTS } from '../lib/ports.mjs';

const transitions = [
  ['UNORIENTED','ORIENTED'], ['ORIENTED','CONTRACTED'], ['CONTRACTED','CONTRACTED'],
  ['CONTRACTED','CONTRACTED'], ['CONTRACTED','CONTRACTED'], ['CONTRACTED','ADMISSIBLE'],
  ['ADMISSIBLE','ADMISSIBLE'], ['ADMISSIBLE','RECONSTRUCTIBLE'], ['RECONSTRUCTIBLE','CANDIDATE'],
  ['CANDIDATE','CANDIDATE'], ['CANDIDATE','CANDIDATE'], ['CANDIDATE','TECHNICALLY-QUALIFIED'],
  ['TECHNICALLY-QUALIFIED','TECHNICALLY-QUALIFIED'], ['TECHNICALLY-QUALIFIED','TECHNICALLY-QUALIFIED'],
  ['TECHNICALLY-QUALIFIED','RELEASABLE'], ['RELEASABLE','OPERABLE'], ['OPERABLE','OBSERVED'],
  ['OBSERVED','REQUALIFIED'], ['REQUALIFIED','CONTROLLED'], ['CONTROLLED','RETIRED'], ['RETIRED','REVIEWED'],
];

const fullTransitions = [
  ['UNORIENTED','ORIENTED'], ['ORIENTED','CONTRACTED'], ['CONTRACTED','CONTRACTED'],
  ['CONTRACTED','CONTRACTED'], ['CONTRACTED','CONTRACTED'], ['CONTRACTED','ADMISSIBLE'],
  ['ADMISSIBLE','ADMISSIBLE'], ['ADMISSIBLE','RECONSTRUCTIBLE'], ['RECONSTRUCTIBLE','CANDIDATE'],
  ['CANDIDATE','CANDIDATE'], ['CANDIDATE','CANDIDATE'], ['CANDIDATE','TECHNICALLY-QUALIFIED'],
  ['TECHNICALLY-QUALIFIED','TECHNICALLY-QUALIFIED'], ['TECHNICALLY-QUALIFIED','TECHNICALLY-QUALIFIED'],
  ['TECHNICALLY-QUALIFIED','RELEASABLE'], ['RELEASABLE','OPERABLE'], ['OPERABLE','OBSERVED'],
  ['OBSERVED','ROLLED-BACK'], ['ROLLED-BACK','CONTROLLED'], ['CONTROLLED','RETIRED'], ['RETIRED','REVIEWED'],
];

const rollbackHashes = Object.freeze({
  'BL-17': '7a350a151ef72419d0656781bcf6d069b25ea46a0abc607193043aa6a8eb386b',
  'BL-18': '648c774450ae096772e2979a1f3497bee8fa35716c917067646f7a74feb1499e',
  'BL-19': '36a463403d74cf499142094f86c9d052fee67b4950bec92dd9e8e4b615df5d31',
  'BL-20': '41ef6cf6352761f3c51a8ec5c6eb84f560d74741635a677a119c73ef3dcabf53',
});

test('chapters 15-21 reproduce BL-14 through BL-20 and finish RETIRED before REVIEWED', async () => {
  const sandbox = await mkdtemp(join(tmpdir(), 'mle-companion-c-'));
  const target = join(sandbox, 'run');
  const entry = await readFile(new URL('../fixtures/bl-entry.json', import.meta.url));
  let priorHash = sha256Bytes(entry);
  const history = [];
  try {
    for (let index = 0; index < 21; index += 1) {
      const milestoneId = `BL-${String(index).padStart(2, '0')}`;
      const expected = JSON.parse(await readFile(new URL(`../expected/bl-${String(index).padStart(2, '0')}.json`, import.meta.url)));
      const options = { target, history: { records: history }, milestoneId, priorHash, incomingState: transitions[index][0], outgoingState: transitions[index][1] };
      const accepted = await runPort('PORT-DEEP', options);
      if (index >= 14) {
        assert.equal(canonicalJson(accepted), canonicalJson(expected));
        const negative = await runPort('PORT-DEEP', { ...options, mode: 'negative' });
        assert.match(negative.diagnostic, /^[A-Z][A-Z0-9_-]+$/);
      }
      priorHash = sha256Bytes(canonicalJson(accepted));
      history.push(Object.freeze({ milestoneId, hash: priorHash }));
    }
    assert.equal(history.at(-1).milestoneId, 'BL-20');
  } finally { await rm(sandbox, { recursive: true, force: true }); }
});

test('all five ports materialize the complete OBSERVED to ROLLED-BACK to CONTROLLED branch', async () => {
  const sandbox = await mkdtemp(join(tmpdir(), 'mle-companion-rollback-'));
  const entry = await readFile(new URL('../fixtures/bl-entry.json', import.meta.url));
  try {
    for (const port of PORTS) {
      const target = join(sandbox, port.toLowerCase());
      let priorHash = sha256Bytes(entry);
      const history = [];
      for (let index = 0; index < 21; index += 1) {
        const milestoneId = `BL-${String(index).padStart(2, '0')}`;
        const accepted = await runPort(port, {
          target, history: { records: history }, milestoneId, priorHash,
          incomingState: fullTransitions[index][0], outgoingState: fullTransitions[index][1],
          ...(index === 17 ? { branch: 'rollback' } : {}),
        });
        assert.equal(accepted.incomingState, fullTransitions[index][0]);
        assert.equal(accepted.outgoingState, fullTransitions[index][1]);
        assert.equal(accepted.outgoingState.includes('|'), false);
        priorHash = sha256Bytes(canonicalJson(accepted));
        if (rollbackHashes[milestoneId]) assert.equal(priorHash, rollbackHashes[milestoneId]);
        if (index === 17) {
          assert.deepEqual(accepted.evidence, [
            'BL-17 fixed-fixture contract satisfied for the previous-good recovery identity.',
            'Any repaired new-candidate identity remains separate and must requalify under external authority.',
          ]);
        }
        if (index === 18) {
          assert.deepEqual(accepted.evidence, [
            'BL-18 fixed-fixture control gate consumed the exact ROLLED-BACK recovery identity.',
            'Control does not waive requalification or any external authority decision.',
          ]);
        }
        history.push(Object.freeze({ milestoneId, hash: priorHash }));
      }
      assert.equal(history[17].milestoneId, 'BL-17');
      assert.equal(history[18].milestoneId, 'BL-18');
      assert.equal(history.at(-1).milestoneId, 'BL-20');
    }
  } finally { await rm(sandbox, { recursive: true, force: true }); }
});
