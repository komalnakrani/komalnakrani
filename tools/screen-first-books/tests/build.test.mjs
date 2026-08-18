import assert from 'node:assert/strict';
import path from 'node:path';
import test from 'node:test';

import { buildPaths, renderBuildHtml } from '../build.mjs';

test('targets a private complete FDE screen-first review PDF', () => {
  assert.match(buildPaths.finalPdf, /output\/pdf\/forward-deployed-engineering-screen-first-review\.pdf$/);
  assert.doesNotMatch(buildPaths.finalPdf, /public\/downloads/);
});

test('renders the complete screen-first source into a printable HTML document', () => {
  const html = renderBuildHtml();
  assert.match(html, /Forward Deployed Engineering/);
  assert.match(html, /Komal Nakrani/);
  assert.equal((html.match(/class="book-figure"/g) || []).length, 38);
  assert.equal((html.match(/class="chapter-coordinate/g) || []).length, 19);
  assert.equal(path.extname(buildPaths.html), '.html');
});
