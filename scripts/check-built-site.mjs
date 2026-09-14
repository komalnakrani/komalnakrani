#!/usr/bin/env node
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import path from 'node:path';

const root = path.resolve(process.argv[2] ?? 'dist');

function filesBelow(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const target = path.join(directory, entry.name);
    return entry.isDirectory() ? filesBelow(target) : [target];
  });
}

function localTarget(value) {
  if (!value || /^(?:[a-z]+:|#|\/\/)/i.test(value)) return null;
  const clean = decodeURIComponent(value.split('#')[0].split('?')[0]);
  return clean || null;
}

function resolvesFrom(htmlFile, value) {
  const relative = value.startsWith('/') ? value.slice(1) : path.relative(root, path.resolve(path.dirname(htmlFile), value));
  const exact = path.join(root, relative);
  if (existsSync(exact) && statSync(exact).isFile()) return true;
  if (existsSync(path.join(exact, 'index.html'))) return true;
  if (!path.extname(exact) && existsSync(`${exact}.html`)) return true;
  return false;
}

if (!existsSync(root)) {
  console.error(`Built site directory does not exist: ${root}`);
  process.exit(1);
}

const htmlFiles = filesBelow(root).filter((file) => file.endsWith('.html'));
const failures = [];
let checked = 0;

// Documentation pages embed escaped sample markup inside <pre><code>. Those
// attributes are illustrations, not links the site has to resolve, so strip
// code blocks before scanning or every example URL reads as a broken link.
function withoutCodeBlocks(html) {
  return html.replace(/<pre\b[^>]*>[\s\S]*?<\/pre>/gi, ' ');
}

for (const htmlFile of htmlFiles) {
  const html = withoutCodeBlocks(readFileSync(htmlFile, 'utf8'));
  for (const match of html.matchAll(/\b(?:href|src)=(?:"([^"]+)"|'([^']+)')/g)) {
    const value = localTarget(match[1] ?? match[2]);
    if (!value) continue;
    checked += 1;
    if (!resolvesFrom(htmlFile, value)) failures.push(`${path.relative(root, htmlFile)} -> ${value}`);
  }
}

if (failures.length) {
  console.error(`Broken built-site references (${failures.length}):`);
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`Built-site references PASS: ${checked} local href/src values across ${htmlFiles.length} HTML pages.`);
