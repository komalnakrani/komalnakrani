#!/usr/bin/env node
import { spawnSync } from 'node:child_process';
import path from 'node:path';

import { validateWorkspace } from './lib/publication-validator.mjs';

function option(name, fallback) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
}

const root = path.resolve(option('--root', process.cwd()));
const slug = option('--slug');
const outputDirectory = path.resolve(option('--output-dir', path.join(root, 'output/pdf')));
const proof = process.argv.includes('--proof');
if (!slug) {
  console.error('Usage: npm run build:pdf -- --slug <publication-slug> [--proof] [--root <fixture-root>] [--output-dir <directory>]');
  process.exit(2);
}

const validation = await validateWorkspace({ root });
if (!validation.ok) {
  console.error('PDF build refused because publication validation failed:');
  for (const error of validation.errors) console.error(`- ${error}`);
  process.exit(1);
}

const publication = validation.publications.find((record) => record.manifest.slug === slug);
if (!publication) {
  console.error(`Publication not found: ${slug}`);
  process.exit(1);
}
const proofable = proof && ['draft', 'review'].includes(publication.manifest.status);
if ((!proofable && publication.manifest.status !== 'published') || !publication.manifest.pdf.enabled) {
  console.error(`Publication ${slug} is not an enabled published PDF edition.`);
  process.exit(1);
}

const python = process.env.PDF_PYTHON || 'python3';
const command = spawnSync(
  python,
  [
    path.resolve('scripts/build-publication-pdf.py'),
    '--publication-dir',
    publication.directory,
    '--output-dir',
    outputDirectory,
  ],
  { cwd: process.cwd(), encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] },
);

if (command.stdout) process.stdout.write(command.stdout);
if (command.stderr) process.stderr.write(command.stderr);
if (command.error) {
  console.error(`Unable to run ${python}: ${command.error.message}`);
  console.error('Install requirements-pdf.txt or set PDF_PYTHON to a compatible Python runtime.');
  process.exit(1);
}
process.exit(command.status ?? 1);
