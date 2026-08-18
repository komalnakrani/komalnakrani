import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '../../..');
const python = '/Users/alpesh/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3';
const proof = path.join(repoRoot, 'output/pdf/forward-deployed-engineering-screen-first-design-proof.pdf');

test('passes structural QA for the final proof', () => {
  const output = execFileSync(python, [path.join(repoRoot, 'tools/fde-design-proof/qa.py'), proof], {
    cwd: repoRoot,
    encoding: 'utf8',
  });
  const report = JSON.parse(output);
  assert.equal(report.status, 'PASS');
  assert.equal(report.pages, 24);
  assert.equal(report.author, 'Komal Nakrani');
  assert.equal(report.emptyPages.length, 0);
  assert.equal(report.forbiddenReferenceHits.length, 0);
  assert.equal(report.publishedEditionChanged, false);
});
