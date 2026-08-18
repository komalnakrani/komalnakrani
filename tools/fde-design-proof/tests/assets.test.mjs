import assert from 'node:assert/strict';
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const proofRoot = path.resolve(here, '..');

async function walk(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(target) : [target];
  }));
  return nested.flat();
}

test('bundles all three readable local font files', async () => {
  const fonts = [
    'barlow-condensed.ttf',
    'source-sans-3.ttf',
    'ibm-plex-mono.ttf',
  ];

  for (const font of fonts) {
    const target = path.join(proofRoot, 'fonts', font);
    const info = await stat(target);
    assert.ok(info.size > 50_000, `${font} must be a real bundled font`);
    const signature = await readFile(target);
    assert.ok(
      signature.subarray(0, 4).equals(Buffer.from([0x00, 0x01, 0x00, 0x00])) ||
        signature.subarray(0, 4).toString('ascii') === 'OTTO',
      `${font} must have a TrueType or OpenType signature`,
    );
  }
});

test('contains no stored SVG or WebP assets', async () => {
  const files = await walk(proofRoot);
  const forbidden = files.filter((file) => /\.(?:svg|webp)$/i.test(file));
  assert.deepEqual(forbidden, []);
});
