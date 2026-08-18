import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, '..');

test('loads the complete LLM Behavior Language Systems Studio contract', async () => {
  const [{ loadBookContract }, { default: config }] = await Promise.all([
    import('../source-contract.mjs'),
    import('../books/llm-behavior-engineering.mjs'),
  ]);
  const contract = loadBookContract(config);

  assert.equal(contract.slug, 'llm-behavior-engineering');
  assert.equal(contract.author, 'Komal Nakrani');
  assert.equal(contract.chapters.length, 16);
  assert.equal(contract.figures.length, 32);
  assert.equal(contract.parts.length, 5);
  assert.equal(contract.appendices.length, 6);
  assert.deepEqual(contract.partStarts, [1, 5, 9, 13, 16]);
  assert.equal(contract.chapterFigureIds.every((ids) => ids.length === 2), true);
});

test('renders LLM Behavior with its own studio visual and editorial language', async () => {
  const [{ renderLlmBehaviorHtml }, { loadBookContract }, { default: config }] = await Promise.all([
    import('../render-llm-behavior.mjs'),
    import('../source-contract.mjs'),
    import('../books/llm-behavior-engineering.mjs'),
  ]);
  const html = renderLlmBehaviorHtml(loadBookContract(config));
  const visibleMarkup = html.slice(html.indexOf('</style>'));

  assert.match(html, /Language Systems Studio/);
  assert.match(html, /LANGUAGE SYSTEMS \/ STUDIO 01/);
  assert.match(html, /Read language behavior as a designed interface/);
  assert.equal((html.match(/class="book-figure/g) || []).length, 32);
  assert.equal((html.match(/class="part-opener/g) || []).length, 5);
  assert.doesNotMatch(visibleMarkup, /Behavior Systems Atlas|Read the product as a behavior system|END OF ATLAS/);
  const css = readFileSync(path.join(packageRoot, 'books/llm-behavior-engineering.css'), 'utf8');
  assert.match(css, /--studio-cobalt:\s*#3157D5/);
  assert.equal(existsSync(path.join(packageRoot, 'books/llm-behavior-engineering.css')), true);
});

test('targets a private LLM Behavior review PDF', async () => {
  const { llmBehaviorBuildPaths } = await import('../build-llm-behavior.mjs');
  assert.match(llmBehaviorBuildPaths.finalPdf, /output\/pdf\/llm-behavior-engineering-screen-first-review\.pdf$/);
  assert.doesNotMatch(llmBehaviorBuildPaths.finalPdf, /public\/downloads/);
});
