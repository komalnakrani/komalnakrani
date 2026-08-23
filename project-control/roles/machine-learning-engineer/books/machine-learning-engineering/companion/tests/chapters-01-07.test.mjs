import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { runPort } from '../lib/run.mjs';
import { canonicalJson, sha256Bytes } from '../lib/canonical-json.mjs';

const transitions = [
  ['UNORIENTED', 'ORIENTED'], ['ORIENTED', 'CONTRACTED'], ['CONTRACTED', 'CONTRACTED'],
  ['CONTRACTED', 'CONTRACTED'], ['CONTRACTED', 'CONTRACTED'], ['CONTRACTED', 'ADMISSIBLE'],
  ['ADMISSIBLE', 'ADMISSIBLE'],
];

test('chapters 01-07 reproduce BL-00 through BL-06 and their named negative labs', async () => {
  const sandbox = await mkdtemp(join(tmpdir(), 'mle-companion-a-'));
  const target = join(sandbox, 'run');
  let priorHash = sha256Bytes(await readFile(new URL('../fixtures/bl-entry.json', import.meta.url)));
  const history = [];
  try {
    for (let index = 0; index < 7; index += 1) {
      const milestoneId = `BL-${String(index).padStart(2, '0')}`;
      const expected = JSON.parse(await readFile(new URL(`../expected/bl-${String(index).padStart(2, '0')}.json`, import.meta.url)));
      const options = { target, history: { records: history }, milestoneId, priorHash, incomingState: transitions[index][0], outgoingState: transitions[index][1] };
      const accepted = await runPort('PORT-EDGE', options);
      assert.equal(canonicalJson(accepted), canonicalJson(expected));
      const negative = await runPort('PORT-EDGE', { ...options, mode: 'negative' });
      assert.match(negative.diagnostic, /^[A-Z][A-Z0-9_-]+$/);
      assert.ok(['HOLD', 'REJECT'].includes(negative.disposition));
      priorHash = sha256Bytes(canonicalJson(accepted));
      history.push(Object.freeze({ milestoneId, hash: priorHash }));
    }
  } finally { await rm(sandbox, { recursive: true, force: true }); }
});
