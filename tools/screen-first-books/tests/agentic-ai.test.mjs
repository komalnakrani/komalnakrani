import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const packageRoot = path.resolve(here, '..');

test('loads the complete Agentic AI Autonomy Control Room contract', async () => {
  const [{ loadBookContract }, { default: config }] = await Promise.all([
    import('../source-contract.mjs'),
    import('../books/agentic-ai-engineering.mjs'),
  ]);
  const contract = loadBookContract(config);

  assert.equal(contract.slug, 'agentic-ai-engineering');
  assert.equal(contract.author, 'Komal Nakrani');
  assert.equal(contract.chapters.length, 20);
  assert.equal(contract.figures.length, 40);
  assert.equal(contract.parts.length, 6);
  assert.equal(contract.appendices.length, 6);
  assert.deepEqual(contract.partStarts, [1, 4, 8, 12, 15, 18]);
  assert.equal(contract.chapterFigureIds.every((ids) => ids.length === 2), true);
});

test('renders Agentic AI with its own control-room visual and editorial language', async () => {
  const [{ renderAgenticAiHtml }, { loadBookContract }, { default: config }] = await Promise.all([
    import('../render-agentic-ai.mjs'),
    import('../source-contract.mjs'),
    import('../books/agentic-ai-engineering.mjs'),
  ]);
  const html = renderAgenticAiHtml(loadBookContract(config));
  const visibleMarkup = html.slice(html.indexOf('</style>'));

  assert.match(html, /Autonomy Control Room/);
  assert.match(html, /CONTROL PLANE \/ ROOM 01/);
  assert.match(html, /Read every action as an authorized trajectory/);
  assert.match(html, /class="chapter-coordinate/g);
  assert.equal((html.match(/class="book-figure/g) || []).length, 40);
  assert.equal((html.match(/class="part-opener/g) || []).length, 6);
  assert.doesNotMatch(visibleMarkup, /Behavior Systems Atlas|Read the product as a behavior system|END OF ATLAS/);
  const css = readFileSync(path.join(packageRoot, 'books/agentic-ai-engineering.css'), 'utf8');
  assert.match(css, /--signal-green:\s*#5EE6A8/);
  assert.equal(existsSync(path.join(packageRoot, 'books/agentic-ai-engineering.css')), true);
});

test('targets a private Agentic AI review PDF', async () => {
  const { agenticBuildPaths } = await import('../build-agentic-ai.mjs');

  assert.match(agenticBuildPaths.finalPdf, /output\/pdf\/agentic-ai-engineering-screen-first-review\.pdf$/);
  assert.doesNotMatch(agenticBuildPaths.finalPdf, /public\/downloads/);
});
