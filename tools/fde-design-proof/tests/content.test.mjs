import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

import { book, proofPages } from '../content.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '../../..');

const expectedKinds = [
  'cover',
  'inside-cover',
  'title',
  'copyright',
  'how-to',
  'legend',
  'contents',
  'contents',
  'part-opener',
  'chapter-opener',
  'instruction',
  'instruction-rail',
  'case-evidence',
  'comparison',
  'figure',
  'figure-reading',
  'decision',
  'artifact',
  'exercise',
  'recap',
  'appendix',
  'records',
  'author',
  'closing',
];

function normalize(value) {
  return value.replace(/\s+/g, ' ').trim();
}

test('defines the approved book identity', () => {
  assert.equal(book.title, 'Forward Deployed Engineering');
  assert.equal(book.author, 'Komal Nakrani');
  assert.match(book.status, /Design proof - not the published edition/);
});

test('defines exactly 24 ordered and unique proof pages', () => {
  assert.equal(proofPages.length, 24);
  assert.deepEqual(proofPages.map((page) => page.pageNumber), Array.from({ length: 24 }, (_, index) => index + 1));
  assert.deepEqual(proofPages.map((page) => page.kind), expectedKinds);
  assert.equal(new Set(proofPages.map((page) => page.pageNumber)).size, 24);
});

test('keeps authorship and proof state visible throughout the model', () => {
  assert.equal(proofPages[0].author, 'Komal Nakrani');
  assert.equal(proofPages[2].author, 'Komal Nakrani');
  assert.equal(proofPages[22].author, 'Komal Nakrani');
  assert.match(proofPages[1].body.join(' '), /not the published edition/i);
  assert.match(proofPages[3].body.join(' '), /design proof/i);
});

test('verifies every sourced excerpt against its repository source', async () => {
  const sourcedPages = proofPages.filter((page) => page.sourcePath || page.sourceNeedle);
  assert.ok(sourcedPages.length >= 10, 'at least ten pages must carry source-verifiable material');

  for (const page of sourcedPages) {
    assert.ok(page.sourcePath, `page ${page.pageNumber} needs sourcePath`);
    assert.ok(page.sourceNeedle, `page ${page.pageNumber} needs sourceNeedle`);
    const source = await readFile(path.join(repoRoot, page.sourcePath), 'utf8');
    assert.ok(
      normalize(source).includes(normalize(page.sourceNeedle)),
      `page ${page.pageNumber} excerpt must exist in ${page.sourcePath}`,
    );
  }
});

test('reserves figure pages for one local PNG and selectable labels', () => {
  const figure = proofPages.find((page) => page.kind === 'figure');
  assert.equal(figure.asset, 'assets/system-boundary-field.png');
  assert.deepEqual(figure.labels, [
    'CUSTOMER WORKFLOW',
    'EVIDENCE BOUNDARY',
    'DEPLOYED SERVICE',
    'EXTERNAL AUTHORITY',
  ]);
  assert.match(figure.alt, /customer workflow/i);
});
