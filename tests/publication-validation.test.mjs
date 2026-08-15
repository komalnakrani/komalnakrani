import assert from 'node:assert/strict';
import { cp, mkdtemp, readFile, writeFile } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

import { validateWorkspace } from '../scripts/lib/publication-validator.mjs';

const fixtureRoot = path.resolve('tests/fixtures/publication');

test('valid source-backed publication fixture passes', async () => {
  const result = await validateWorkspace({ root: fixtureRoot });
  assert.equal(result.ok, true, result.errors.join('\n'));
  assert.equal(result.publications.length, 1);
});

test('unknown manifest properties and missing provenance fail', async () => {
  const temporary = await mkdtemp(path.join(os.tmpdir(), 'komal-publication-invalid-'));
  await cp(fixtureRoot, temporary, { recursive: true });
  const publicationFile = path.join(
    temporary,
    'content/publications/pipeline-verification/publication.json',
  );
  const publication = JSON.parse(await readFile(publicationFile, 'utf8'));
  publication.unreviewedShortcut = true;
  await writeFile(publicationFile, `${JSON.stringify(publication, null, 2)}\n`);

  const chapterFile = path.join(
    temporary,
    'content/publications/pipeline-verification/chapters/one-source.mdx',
  );
  const chapter = (await readFile(chapterFile, 'utf8')).replace('  - SRC-001\n', '  - SRC-999\n');
  await writeFile(chapterFile, chapter);

  const result = await validateWorkspace({ root: temporary });
  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /additional properties|must NOT have additional properties/);
  assert.match(result.errors.join('\n'), /unknown source SRC-999/);
});

test('figure records without accessible metadata fail schema validation', async () => {
  const temporary = await mkdtemp(path.join(os.tmpdir(), 'komal-publication-figure-'));
  await cp(fixtureRoot, temporary, { recursive: true });
  const figureFile = path.join(
    temporary,
    'content/publications/pipeline-verification/figures.json',
  );
  await writeFile(
    figureFile,
    JSON.stringify(
      {
        schemaVersion: 1,
        figures: [
          {
            id: 'FIG-001',
            file: 'assets/pipeline.png',
            alt: '',
            caption: '',
            chapterSlug: 'one-source',
            creator: 'Komal Nakrani',
            sourceIds: ['SRC-001'],
            license: 'Original',
          },
        ],
      },
      null,
      2,
    ),
  );
  const result = await validateWorkspace({ root: temporary });
  assert.equal(result.ok, false);
  assert.match(result.errors.join('\n'), /must NOT have fewer than 20 characters/);
});
