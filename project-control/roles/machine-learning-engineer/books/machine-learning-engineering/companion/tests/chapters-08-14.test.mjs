import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, mkdtemp, rm } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import { runPort } from '../lib/run.mjs';
import { canonicalJson, sha256Bytes } from '../lib/canonical-json.mjs';

const transitions = [
  ['UNORIENTED','ORIENTED'], ['ORIENTED','CONTRACTED'], ['CONTRACTED','CONTRACTED'],
  ['CONTRACTED','CONTRACTED'], ['CONTRACTED','CONTRACTED'], ['CONTRACTED','ADMISSIBLE'],
  ['ADMISSIBLE','ADMISSIBLE'], ['ADMISSIBLE','RECONSTRUCTIBLE'], ['RECONSTRUCTIBLE','CANDIDATE'],
  ['CANDIDATE','CANDIDATE'], ['CANDIDATE','CANDIDATE'], ['CANDIDATE','TECHNICALLY-QUALIFIED'],
  ['TECHNICALLY-QUALIFIED','TECHNICALLY-QUALIFIED'], ['TECHNICALLY-QUALIFIED','TECHNICALLY-QUALIFIED'],
];

test('chapters 08-14 reproduce BL-07 through BL-13 and retain the BL-06 seam', async () => {
  const sandbox = await mkdtemp(join(tmpdir(), 'mle-companion-b-'));
  const target = join(sandbox, 'run');
  const entry = await readFile(new URL('../fixtures/bl-entry.json', import.meta.url));
  let priorHash = sha256Bytes(entry);
  const history = [];
  try {
    for (let index = 0; index < 14; index += 1) {
      const milestoneId = `BL-${String(index).padStart(2, '0')}`;
      const expected = JSON.parse(await readFile(new URL(`../expected/bl-${String(index).padStart(2, '0')}.json`, import.meta.url)));
      const options = { target, history: { records: history }, milestoneId, priorHash, incomingState: transitions[index][0], outgoingState: transitions[index][1] };
      const accepted = await runPort('PORT-CLASSICAL', options);
      if (index >= 7) {
        assert.equal(canonicalJson(accepted), canonicalJson(expected));
        const negative = await runPort('PORT-CLASSICAL', { ...options, mode: 'negative' });
        assert.match(negative.diagnostic, /^[A-Z][A-Z0-9_-]+$/);
      }
      priorHash = sha256Bytes(canonicalJson(accepted));
      history.push(Object.freeze({ milestoneId, hash: priorHash }));
    }
  } finally { await rm(sandbox, { recursive: true, force: true }); }
});
