import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, '..');

test('loads the complete LLM Adaptation Model Adaptation Foundry contract', async () => {
  const [{ loadBookContract }, { default: config }] = await Promise.all([
    import('../source-contract.mjs'), import('../books/llm-adaptation-and-runtime.mjs'),
  ]);
  const contract = loadBookContract(config);
  assert.equal(contract.slug, 'llm-adaptation-and-runtime');
  assert.equal(contract.author, 'Komal Nakrani');
  assert.equal(contract.chapters.length, 17);
  assert.equal(contract.figures.length, 34);
  assert.equal(contract.parts.length, 5);
  assert.equal(contract.appendices.length, 7);
  assert.deepEqual(contract.partStarts, [1, 4, 9, 14, 17]);
  assert.equal(contract.chapterFigureIds.every((ids) => ids.length === 2), true);
});

test('renders LLM Adaptation with its own foundry visual and production language', async () => {
  const [{ renderLlmAdaptationHtml }, { loadBookContract }, { default: config }] = await Promise.all([
    import('../render-llm-adaptation.mjs'), import('../source-contract.mjs'), import('../books/llm-adaptation-and-runtime.mjs'),
  ]);
  const html = renderLlmAdaptationHtml(loadBookContract(config));
  const visibleMarkup = html.slice(html.indexOf('</style>'));
  assert.match(html, /Model Adaptation Foundry/);
  assert.match(html, /MODEL ADAPTATION \/ FOUNDRY 02/);
  assert.match(html, /Treat every model change as a controlled transformation/);
  assert.equal((html.match(/class="book-figure/g) || []).length, 34);
  assert.equal((html.match(/class="part-opener/g) || []).length, 5);
  assert.doesNotMatch(visibleMarkup, /Language Systems Studio|Behavior Systems Atlas|END OF STUDIO/);
  assert.match(readFileSync(path.join(packageRoot, 'books/llm-adaptation-and-runtime.css'), 'utf8'), /--reactor-lime:\s*#B7F34A/);
});

test('targets a private LLM Adaptation review PDF', async () => {
  const { llmAdaptationBuildPaths } = await import('../build-llm-adaptation.mjs');
  assert.match(llmAdaptationBuildPaths.finalPdf, /output\/pdf\/llm-adaptation-and-runtime-screen-first-review\.pdf$/);
  assert.doesNotMatch(llmAdaptationBuildPaths.finalPdf, /public\/downloads/);
});
