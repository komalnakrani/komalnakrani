import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '../../..');
const reviewPdf = path.join(repoRoot, 'output/pdf/llm-behavior-engineering-screen-first-review.pdf');
const qaScript = path.join(repoRoot, 'tools/screen-first-books/qa-llm-behavior.py');
const python = process.env.PDF_PYTHON || '/Users/alpesh/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3';

test('audits the complete LLM Behavior private review PDF', {
  skip: !existsSync(reviewPdf),
}, () => {
  const output = execFileSync(python, [qaScript, reviewPdf], { cwd: repoRoot, encoding: 'utf8' });
  const report = JSON.parse(output);
  assert.equal(report.status, 'PASS');
  assert.equal(report.pages, 371);
  assert.equal(report.outlineEntries, 33);
  assert.deepEqual(report.sparsePages, []);
  assert.deepEqual(report.wrongPageSizes, []);
  assert.equal(report.figureIdentifiers, 32);
});
