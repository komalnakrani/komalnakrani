import { execFileSync, spawn } from 'node:child_process';
import { accessSync, constants, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import config from './books/llm-behavior-engineering.mjs';
import { renderLlmBehaviorHtml } from './render-llm-behavior.mjs';
import { loadBookContract } from './source-contract.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '../..');
const bundledPython = '/Users/alpesh/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3';

export const llmBehaviorBuildPaths = Object.freeze({
  repoRoot,
  buildDirectory: path.join(here, 'build'),
  html: path.join(here, 'build', 'llm-behavior-engineering.html'),
  finalPdf: path.join(repoRoot, 'output/pdf/llm-behavior-engineering-screen-first-review.pdf'),
});

function resolveChrome() {
  const candidates = [process.env.CHROME_PATH, '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/Applications/Chromium.app/Contents/MacOS/Chromium'].filter(Boolean);
  for (const candidate of candidates) {
    try { accessSync(candidate, constants.X_OK); return candidate; } catch { /* next */ }
  }
  throw new Error(`Local Chrome executable not found: ${candidates.join(', ')}`);
}

function resolvePython() {
  const candidate = process.env.PDF_PYTHON || bundledPython;
  accessSync(candidate, constants.X_OK);
  return candidate;
}

export function renderLlmBehaviorBuildHtml() {
  const contract = loadBookContract(config);
  for (const figure of contract.figures) {
    const asset = path.join(contract.publicationDirectory, figure.file);
    if (!existsSync(asset)) throw new Error(`Missing LLM Behavior PNG: ${asset}`);
    if (path.extname(asset).toLowerCase() !== '.png') throw new Error(`LLM Behavior review accepts PNG only: ${asset}`);
  }
  return renderLlmBehaviorHtml(contract);
}

function delay(milliseconds) { return new Promise((resolve) => setTimeout(resolve, milliseconds)); }

async function waitForStableFile(filePath, timeoutMs = 300_000) {
  const started = Date.now();
  let prior = -1;
  let stable = 0;
  while (Date.now() - started < timeoutMs) {
    try {
      const size = statSync(filePath).size;
      stable = size > 0 && size === prior ? stable + 1 : 0;
      prior = size;
      if (stable >= 4) return size;
    } catch (error) { if (error.code !== 'ENOENT') throw error; }
    await delay(250);
  }
  throw new Error(`Timed out waiting for ${filePath}`);
}

function stopGroup(child, signal) {
  if (!child.pid || child.exitCode !== null) return;
  try { process.kill(-child.pid, signal); } catch (error) { if (error.code !== 'ESRCH') throw error; }
}

async function printWithChrome(rawPdf, profileDirectory) {
  const child = spawn(resolveChrome(), [
    '--headless', '--disable-gpu', '--disable-background-networking', '--disable-component-update',
    '--disable-default-apps', '--disable-sync', '--metrics-recording-only', '--no-first-run',
    '--allow-file-access-from-files', '--print-to-pdf-no-header', '--no-pdf-header-footer',
    `--user-data-dir=${profileDirectory}`, `--print-to-pdf=${rawPdf}`, pathToFileURL(llmBehaviorBuildPaths.html).href,
  ], { cwd: repoRoot, detached: true, stdio: ['ignore', 'pipe', 'pipe'] });
  let stderr = '';
  child.stderr.on('data', (chunk) => { stderr += chunk.toString(); });
  try {
    await waitForStableFile(rawPdf);
    if (!readFileSync(rawPdf).subarray(-64).toString('latin1').includes('%%EOF')) throw new Error('Chrome output missing PDF EOF');
  } catch (error) {
    throw new Error(`${error.message}${stderr.trim() ? `\n${stderr.trim()}` : ''}`);
  } finally {
    stopGroup(child, 'SIGTERM');
    await delay(250);
    stopGroup(child, 'SIGKILL');
  }
}

function outlineRecord(contract) {
  return [
    { title: 'LLM Behavior Engineering', match: contract.title },
    { title: 'Language system map', match: 'Language system map' },
    ...contract.parts.map((part) => ({ title: `Studio ${part.roman}: ${part.title}`, match: part.title })),
    ...contract.chapters.map((chapter) => ({ title: `Chapter ${chapter.order}: ${chapter.title}`, match: chapter.title })),
    ...contract.appendices.map((appendix) => ({ title: `Appendix ${appendix.id}: ${appendix.title}`, match: appendix.title })),
    { title: 'Source register', match: 'Source use remains visible' },
    { title: 'Claim register', match: 'Claims remain bound tochapters' },
    { title: 'Studio-plate and accessibility register', match: 'Every studio plate has areading' },
    { title: 'About Komal Nakrani', match: 'AUTHOR / ORIGINAL PROFESSIONAL EDUCATION' },
  ];
}

export async function buildLlmBehaviorBook(outputPath = llmBehaviorBuildPaths.finalPdf) {
  const contract = loadBookContract(config);
  mkdirSync(llmBehaviorBuildPaths.buildDirectory, { recursive: true });
  mkdirSync(path.dirname(outputPath), { recursive: true });
  writeFileSync(llmBehaviorBuildPaths.html, renderLlmBehaviorBuildHtml(), 'utf8');
  const tempBase = path.join(repoRoot, 'tmp/pdfs');
  mkdirSync(tempBase, { recursive: true });
  const temp = mkdtempSync(path.join(tempBase, 'llm-behavior-screen-first-'));
  const rawPdf = path.join(temp, 'book-raw.pdf');
  const outline = path.join(temp, 'outline.json');
  writeFileSync(outline, `${JSON.stringify(outlineRecord(contract), null, 2)}\n`);
  try {
    await printWithChrome(rawPdf, path.join(temp, 'chrome-profile'));
    execFileSync(resolvePython(), [path.join(here, 'finalize_llm_behavior_pdf.py'), rawPdf, outputPath, outline], { cwd: repoRoot, stdio: 'inherit', timeout: 300_000 });
  } finally { rmSync(temp, { recursive: true, force: true }); }
  return outputPath;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const outputIndex = process.argv.indexOf('--output');
  const output = outputIndex >= 0 ? path.resolve(process.argv[outputIndex + 1]) : llmBehaviorBuildPaths.finalPdf;
  process.stdout.write(`${await buildLlmBehaviorBook(output)}${os.EOL}`);
}
