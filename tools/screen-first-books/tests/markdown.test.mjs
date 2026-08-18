import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, '..');
const modulePath = path.join(packageRoot, 'markdown.mjs');
const fixture = readFileSync(path.join(here, 'fixtures/representative.mdx'), 'utf8');

test('parses every accepted publication block into semantic records', async () => {
  assert.equal(existsSync(modulePath), true, 'markdown.mjs must exist');
  const { parsePublicationMarkdown } = await import('../markdown.mjs');
  const blocks = parsePublicationMarkdown(fixture, {
    figures: [{ id: 'FIG-001', reviewFile: 'fig-001.png' }],
  });

  assert.deepEqual(blocks.map((block) => block.type), [
    'heading', 'paragraph', 'quote', 'list', 'table', 'code', 'figure',
  ]);
  assert.equal(blocks.find((block) => block.type === 'figure').id, 'FIG-001');
  assert.equal(blocks.find((block) => block.type === 'figure').reviewFile, 'fig-001.png');
  assert.deepEqual(blocks.find((block) => block.type === 'table').header, ['Signal', 'Owner']);
  assert.equal(blocks.find((block) => block.type === 'table').rows.length, 1);
  assert.equal(blocks.some((block) => JSON.stringify(block).includes('<script')), false);
  assert.match(blocks.find((block) => block.type === 'paragraph').html, /&lt;script&gt;/);
});

test('parses every FDE chapter and appendix without unsupported content', async () => {
  assert.equal(existsSync(modulePath), true, 'markdown.mjs must exist');
  const [{ parsePublicationMarkdown }, { loadBookContract }, { default: config }] = await Promise.all([
    import('../markdown.mjs'),
    import('../source-contract.mjs'),
    import('../books/forward-deployed-engineering.mjs'),
  ]);
  const contract = loadBookContract(config);
  const chapterBlocks = contract.chapters.map((chapter) => parsePublicationMarkdown(chapter.source, {
    figures: chapter.figures.map((figure) => ({ ...figure, reviewFile: `${figure.id.toLowerCase()}.png` })),
  }));
  const appendixBlocks = contract.appendices.map((appendix) => parsePublicationMarkdown(appendix.source));

  assert.equal(chapterBlocks.length, 19);
  assert.equal(appendixBlocks.length, 5);
  assert.equal(chapterBlocks.flat().filter((block) => block.type === 'figure').length, 38);
  assert.equal(chapterBlocks.flat().some((block) => block.type === 'unsupported'), false);
  assert.equal(appendixBlocks.flat().some((block) => block.type === 'unsupported'), false);
});
