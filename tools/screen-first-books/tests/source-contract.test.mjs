import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, '..');
const modulePath = path.join(packageRoot, 'source-contract.mjs');

test('loads the complete accepted FDE publication contract', async () => {
  assert.equal(existsSync(modulePath), true, 'source-contract.mjs must exist');
  const [{ loadBookContract }, { default: config }] = await Promise.all([
    import('../source-contract.mjs'),
    import('../books/forward-deployed-engineering.mjs'),
  ]);
  const contract = loadBookContract(config);

  assert.equal(contract.chapters.length, 19);
  assert.equal(contract.figures.length, 38);
  assert.deepEqual(contract.partStarts, [1, 6, 11, 15, 18]);
  assert.equal(contract.appendices.length, 5);
  assert.equal(contract.author, 'Komal Nakrani');
  assert.equal(contract.chapterFigureIds.every((ids) => ids.length === 2), true);
  assert.equal(new Set(contract.chapters.map((chapter) => chapter.slug)).size, 19);
  assert.equal(new Set(contract.figures.map((figure) => figure.id)).size, 38);
});

test('freezes the approved public-edition protection hashes', async () => {
  assert.equal(existsSync(modulePath), true, 'source-contract.mjs must exist');
  const [{ loadBookContract }, { default: config }] = await Promise.all([
    import('../source-contract.mjs'),
    import('../books/forward-deployed-engineering.mjs'),
  ]);
  const contract = loadBookContract(config);

  assert.equal(contract.protectedPublication.manifest.sha256, 'd35f7a1198961f7c6d0da6bb86af581bdcc01dae89f0b0e9908bfa470f53d7fb');
  assert.equal(contract.protectedPublication.pdf.sha256, '96b5bce887d315ceb5390287eb693b0ead4b9ed3328470913c9dd07f9a91b050');
  assert.equal(contract.output.endsWith('output/pdf/forward-deployed-engineering-screen-first-review.pdf'), true);
  assert.equal(contract.output.includes('public/downloads'), false);
});
