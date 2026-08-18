import assert from 'node:assert/strict';
import { access, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { buildPaths, renderBuildHtml, resolveChrome, waitForStableFile } from '../build.mjs';

test('resolves a local Chrome executable without network dependency', async () => {
  const chrome = resolveChrome();
  assert.ok(path.isAbsolute(chrome));
  await access(chrome);
});

test('targets only the isolated private proof output', () => {
  assert.match(buildPaths.finalPdf, /output\/pdf\/forward-deployed-engineering-screen-first-design-proof\.pdf$/);
  assert.doesNotMatch(buildPaths.finalPdf, /public\/downloads/);
  assert.doesNotMatch(buildPaths.finalPdf, /forward-deployed-engineering-v1\.0\.0\.pdf$/);
});

test('renders a self-contained offline build document', async () => {
  const html = renderBuildHtml();
  assert.match(html, /<section class="page page--cover"/);
  assert.equal((html.match(/<section class="page /g) ?? []).length, 24);
  assert.doesNotMatch(html, /(?:src|href)="https?:/i);
  assert.match(html, /system-boundary-field\.png/);

  const source = await readFile(new URL('../build.mjs', import.meta.url), 'utf8');
  assert.match(source, /--disable-background-networking/);
  assert.match(source, /--print-to-pdf-no-header/);
});

test('detects a completed PDF by stable nonzero file size without waiting for Chrome to exit', async () => {
  const directory = await mkdtemp(path.join(os.tmpdir(), 'fde-stable-file-'));
  const target = path.join(directory, 'proof.pdf');
  try {
    await writeFile(target, Buffer.alloc(4096, 1));
    const size = await waitForStableFile(target, { intervalMs: 10, stableChecks: 2, timeoutMs: 500 });
    assert.equal(size, 4096);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
