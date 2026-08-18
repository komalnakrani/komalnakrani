import { execFileSync, spawn } from 'node:child_process';
import { accessSync, constants, mkdirSync, mkdtempSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { proofPages } from './content.mjs';
import { renderProofHtml } from './render.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, '../..');
const bundledPython = '/Users/alpesh/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3';

export const buildPaths = Object.freeze({
  repoRoot,
  proofRoot: here,
  buildDirectory: path.join(here, 'build'),
  html: path.join(here, 'build', 'proof.html'),
  finalPdf: path.join(repoRoot, 'output', 'pdf', 'forward-deployed-engineering-screen-first-design-proof.pdf'),
});

export function resolveChrome() {
  const candidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
  ].filter(Boolean);

  for (const candidate of candidates) {
    try {
      accessSync(candidate, constants.X_OK);
      return candidate;
    } catch {
      // Continue to the next explicit local candidate.
    }
  }
  throw new Error(`Local Chrome executable not found. Checked: ${candidates.join(', ')}`);
}

export function resolvePython() {
  const candidate = process.env.PDF_PYTHON || bundledPython;
  accessSync(candidate, constants.X_OK);
  return candidate;
}

export function renderBuildHtml() {
  return renderProofHtml(proofPages, { stylesheet: 'theme.css' });
}

function delay(milliseconds) {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
}

export async function waitForStableFile(filePath, options = {}) {
  const intervalMs = options.intervalMs ?? 150;
  const stableChecks = options.stableChecks ?? 3;
  const timeoutMs = options.timeoutMs ?? 120_000;
  const startedAt = Date.now();
  let previousSize = -1;
  let stableCount = 0;

  while (Date.now() - startedAt < timeoutMs) {
    try {
      const size = statSync(filePath).size;
      if (size > 0 && size === previousSize) {
        stableCount += 1;
        if (stableCount >= stableChecks) return size;
      } else {
        stableCount = 0;
        previousSize = size;
      }
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }
    await delay(intervalMs);
  }
  throw new Error(`Timed out waiting for stable output: ${filePath}`);
}

function terminateProcessGroup(child) {
  if (!child.pid || child.exitCode !== null) return;
  try {
    process.kill(-child.pid, 'SIGTERM');
  } catch (error) {
    if (error.code !== 'ESRCH') throw error;
  }
}

async function printWithChrome(rawPdf, profileDirectory) {
  const child = spawn(resolveChrome(), [
    '--headless',
    '--disable-gpu',
    '--disable-background-networking',
    '--disable-component-update',
    '--disable-default-apps',
    '--disable-sync',
    '--metrics-recording-only',
    '--no-first-run',
    '--allow-file-access-from-files',
    '--print-to-pdf-no-header',
    '--no-pdf-header-footer',
    `--user-data-dir=${profileDirectory}`,
    `--print-to-pdf=${rawPdf}`,
    pathToFileURL(buildPaths.html).href,
  ], {
    cwd: repoRoot,
    detached: true,
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  let stderr = '';
  child.stderr.on('data', (chunk) => {
    stderr += chunk.toString();
  });

  try {
    await waitForStableFile(rawPdf);
    const tail = readFileSync(rawPdf).subarray(-64).toString('latin1');
    if (!tail.includes('%%EOF')) throw new Error(`Chrome output is missing PDF EOF marker: ${rawPdf}`);
  } catch (error) {
    const detail = stderr.trim();
    throw new Error(`${error.message}${detail ? `\nChrome stderr:\n${detail}` : ''}`);
  } finally {
    terminateProcessGroup(child);
    await delay(250);
    if (child.pid && child.exitCode === null) {
      try {
        process.kill(-child.pid, 'SIGKILL');
      } catch (error) {
        if (error.code !== 'ESRCH') throw error;
      }
    }
  }
}

export async function buildProof(outputPath = buildPaths.finalPdf) {
  mkdirSync(buildPaths.buildDirectory, { recursive: true });
  mkdirSync(path.dirname(outputPath), { recursive: true });
  writeFileSync(buildPaths.html, renderBuildHtml(), 'utf8');

  const tempBase = path.join(repoRoot, 'tmp', 'pdfs');
  mkdirSync(tempBase, { recursive: true });
  const tempDirectory = mkdtempSync(path.join(tempBase, 'fde-screen-proof-'));
  const profileDirectory = path.join(tempDirectory, 'chrome-profile');
  const rawPdf = path.join(tempDirectory, 'proof-raw.pdf');

  try {
    await printWithChrome(rawPdf, profileDirectory);

    execFileSync(resolvePython(), [
      path.join(here, 'finalize_pdf.py'),
      rawPdf,
      outputPath,
    ], {
      cwd: repoRoot,
      stdio: 'inherit',
      timeout: 120_000,
    });
  } finally {
    rmSync(tempDirectory, { recursive: true, force: true });
  }

  return outputPath;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const outputIndex = process.argv.indexOf('--output');
  const output = outputIndex >= 0 ? path.resolve(process.argv[outputIndex + 1]) : buildPaths.finalPdf;
  process.stdout.write(`${await buildProof(output)}${os.EOL}`);
}
