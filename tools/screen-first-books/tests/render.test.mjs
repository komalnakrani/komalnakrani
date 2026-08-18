import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, '..');
const rendererPath = path.join(packageRoot, 'render.mjs');

test('renders the complete FDE contract as the Field Expedition Log', async () => {
  assert.equal(existsSync(rendererPath), true, 'render.mjs must exist');
  const [{ renderBookHtml }, { loadBookContract }, { default: config }] = await Promise.all([
    import('../render.mjs'),
    import('../source-contract.mjs'),
    import('../books/forward-deployed-engineering.mjs'),
  ]);
  const html = renderBookHtml(loadBookContract(config));

  assert.match(html, /data-book="forward-deployed-engineering"/);
  assert.equal((html.match(/class="chapter-coordinate page--full"/g) || []).length, 19);
  assert.equal((html.match(/class="book-figure"/g) || []).length, 38);
  assert.equal((html.match(/class="part-opener page--full"/g) || []).length, 5);
  assert.equal((html.match(/class="appendix-opener page--full"/g) || []).length, 5);
  assert.match(html, /Leave the system more legible than you found it\./);
  assert.match(html, /Komal Nakrani/);
  assert.match(html, /7 x 10 in \/ screen-first/);
  assert.doesNotMatch(html, /\.svg|\.webp|https:\/\/fonts\./i);
});

test('renders semantic and accessible publication structures', async () => {
  assert.equal(existsSync(rendererPath), true, 'render.mjs must exist');
  const [{ renderBookHtml }, { loadBookContract }, { default: config }] = await Promise.all([
    import('../render.mjs'),
    import('../source-contract.mjs'),
    import('../books/forward-deployed-engineering.mjs'),
  ]);
  const html = renderBookHtml(loadBookContract(config));

  assert.equal((html.match(/<main\b/g) || []).length, 1);
  assert.equal((html.match(/<figure\b/g) || []).length, 38);
  assert.equal((html.match(/<figcaption\b/g) || []).length, 38);
  assert.equal((html.match(/<article class="chapter-body"/g) || []).length, 19);
  assert.match(html, /<nav class="contents-route page--flow"/);
  assert.match(html, /<section class="source-register register"/);
  assert.match(html, /<section class="figure-register register"/);
  assert.match(html, /<section class="author-page page--full"/);
});

test('moves headings that directly introduce full-page figures onto the figure page', async () => {
  const [{ renderBookHtml }, { loadBookContract }, { default: config }] = await Promise.all([
    import('../render.mjs'),
    import('../source-contract.mjs'),
    import('../books/forward-deployed-engineering.mjs'),
  ]);
  const html = renderBookHtml(loadBookContract(config));

  assert.match(html, /class="figure-prelude"/);
  assert.doesNotMatch(html, /class="section-heading[^"]*"[^>]*>[^<]+<\/h[2-4]>\s*<figure class="book-figure"/);
});
