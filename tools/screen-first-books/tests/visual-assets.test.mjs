import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, '..');
const modulePath = path.join(packageRoot, 'visual-assets.mjs');

test('defines a bounded ImageGen prompt for every FDE figure', async () => {
  assert.equal(existsSync(modulePath), true, 'visual-assets.mjs must exist');
  const [{ buildFigurePrompt }, { loadBookContract }, { default: config }] = await Promise.all([
    import('../visual-assets.mjs'),
    import('../source-contract.mjs'),
    import('../books/forward-deployed-engineering.mjs'),
  ]);
  const contract = loadBookContract(config);
  const prompts = contract.figures.map((figure, index) => buildFigurePrompt(figure, index));

  assert.equal(prompts.length, 38);
  assert.equal(prompts.every((prompt) => prompt.includes('PNG')), true);
  assert.equal(prompts.every((prompt) => prompt.includes('no mascot')), true);
  assert.equal(prompts.every((prompt) => prompt.includes('no logo or watermark')), true);
  assert.equal(prompts.every((prompt) => !prompt.includes('.svg') && !prompt.includes('.webp')), true);
});

test('accepts exactly 38 unique canonical PNG assets', async () => {
  assert.equal(existsSync(modulePath), true, 'visual-assets.mjs must exist');
  const { loadVisualAssets } = await import('../visual-assets.mjs');
  const records = loadVisualAssets();

  assert.equal(records.length, 38);
  assert.equal(new Set(records.map((record) => record.id)).size, 38);
  assert.equal(new Set(records.map((record) => record.sha256)).size, 38);
  assert.equal(records.every((record) => record.mime === 'image/png'), true);
  assert.equal(records.every((record) => record.accepted === true), true);
  assert.equal(records.every((record) => record.width >= 1400 && record.height >= 900), true);
  assert.equal(records.some((record) => /\.svg|\.webp/i.test(record.file)), false);
});
