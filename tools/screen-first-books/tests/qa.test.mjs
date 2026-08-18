import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '../../..');
const reviewPdf = path.join(repoRoot, 'output/pdf/forward-deployed-engineering-screen-first-review.pdf');
const qaScript = path.join(repoRoot, 'tools/screen-first-books/qa.py');
const python = process.env.PDF_PYTHON || '/Users/alpesh/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3';

test('audits the complete private review PDF when the local artifact is present', {
  skip: !existsSync(reviewPdf),
}, () => {
  const output = execFileSync(python, [qaScript, reviewPdf], {
    cwd: repoRoot,
    encoding: 'utf8',
  });
  const report = JSON.parse(output);

  assert.equal(report.status, 'PASS');
  assert.equal(report.pages, 592);
  assert.equal(report.outlineEntries, 33);
  assert.deepEqual(report.sparsePages, []);
  assert.deepEqual(report.wrongPageSizes, []);
  assert.equal(report.sha256, '86f32e507ca9eb9c0cd6394f1c1e5a58c0891a540b98c5b1546ac20bd653595d');
});
