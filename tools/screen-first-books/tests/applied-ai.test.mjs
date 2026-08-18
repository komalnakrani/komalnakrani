import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, '..');

test('loads the complete Applied AI Behavior Systems Atlas contract', async () => {
  const [{ loadBookContract }, { default: config }] = await Promise.all([
    import('../source-contract.mjs'),
    import('../books/applied-ai-engineering.mjs'),
  ]);
  const contract = loadBookContract(config);

  assert.equal(contract.slug, 'applied-ai-engineering');
  assert.equal(contract.author, 'Komal Nakrani');
  assert.equal(contract.chapters.length, 21);
  assert.equal(contract.figures.length, 42);
  assert.equal(contract.parts.length, 6);
  assert.equal(contract.appendices.length, 6);
  assert.deepEqual(contract.partStarts, [1, 5, 9, 13, 17, 20]);
  assert.equal(contract.chapterFigureIds.every((ids) => ids.length === 2), true);
});

test('renders the Applied AI book as a distinct screen-first visual system', async () => {
  const [{ renderAppliedAiHtml }, { loadBookContract }, { default: config }] = await Promise.all([
    import('../render-applied-ai.mjs'),
    import('../source-contract.mjs'),
    import('../books/applied-ai-engineering.mjs'),
  ]);
  const html = renderAppliedAiHtml(loadBookContract(config));
  const visibleMarkup = html.slice(html.indexOf('</style>'));

  assert.match(html, /data-book="applied-ai-engineering"/);
  assert.match(html, /Behavior Systems Atlas/);
  assert.match(html, /Space Grotesk/);
  assert.equal((html.match(/class="chapter-coordinate/g) || []).length, 21);
  assert.equal((html.match(/class="book-figure/g) || []).length, 42);
  assert.equal((html.match(/class="part-opener/g) || []).length, 6);
  assert.match(html, /Make behavior legible before making it intelligent\./);
  assert.match(html, /\.chapter-contract \{ display: grid/);
  assert.doesNotMatch(visibleMarkup, /FIELD EXPEDITION LOG|Expedition route|\.svg|\.webp/);
  assert.equal(existsSync(path.join(packageRoot, 'books/applied-ai-engineering.css')), true);
});

test('keeps the absolute cover kicker clear of the title', () => {
  const css = readFileSync(path.join(packageRoot, 'books/applied-ai-engineering.css'), 'utf8');

  assert.match(css, /\.cover-kicker \{[^}]*margin:\s*0;/s);
});

test('targets a private Applied AI review PDF without touching the public download', async () => {
  const { appliedBuildPaths } = await import('../build-applied-ai.mjs');

  assert.match(appliedBuildPaths.finalPdf, /output\/pdf\/applied-ai-engineering-screen-first-review\.pdf$/);
  assert.doesNotMatch(appliedBuildPaths.finalPdf, /public\/downloads/);
  assert.match(appliedBuildPaths.html, /tools\/screen-first-books\/build\/applied-ai-engineering\.html$/);
});
