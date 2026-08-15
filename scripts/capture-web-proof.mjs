#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

function option(name, fallback) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
}

const url = option('--url');
const output = path.resolve(option('--output', 'tmp/web-proof/capture.png'));
const width = Number(option('--width', '1440'));
const height = Number(option('--height', '1100'));
const chrome = option('--chrome', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome');
if (!url) {
  console.error('Usage: node scripts/capture-web-proof.mjs --url <url> [--output file] [--width 1440] [--height 1100]');
  process.exit(2);
}
mkdirSync(path.dirname(output), { recursive: true });

const profile = mkdtempSync(path.join(os.tmpdir(), 'komal-web-proof-'));
const child = spawn(chrome, [
  '--headless=new',
  '--disable-background-networking',
  '--disable-component-update',
  '--disable-gpu',
  '--hide-scrollbars',
  '--no-default-browser-check',
  '--no-first-run',
  '--remote-debugging-port=0',
  `--user-data-dir=${profile}`,
  'about:blank',
], { stdio: ['ignore', 'ignore', 'pipe'] });

let stderr = '';
const browserSocket = await new Promise((resolve, reject) => {
  const timer = setTimeout(() => reject(new Error(`Chrome DevTools endpoint timed out. ${stderr}`)), 10_000);
  child.stderr.setEncoding('utf8');
  child.stderr.on('data', (chunk) => {
    stderr += chunk;
    const match = stderr.match(/DevTools listening on (ws:\/\/[^\s]+)/);
    if (match) {
      clearTimeout(timer);
      resolve(match[1]);
    }
  });
  child.once('error', reject);
  child.once('exit', (code) => reject(new Error(`Chrome exited before capture (${code}). ${stderr}`)));
});

const port = new URL(browserSocket).port;
let targets = [];
for (let attempt = 0; attempt < 20; attempt += 1) {
  targets = await fetch(`http://127.0.0.1:${port}/json/list`).then((response) => response.json());
  if (targets.some((target) => target.type === 'page')) break;
  await new Promise((resolve) => setTimeout(resolve, 50));
}
const page = targets.find((target) => target.type === 'page');
if (!page) throw new Error('Chrome did not expose a page target.');

const socket = new WebSocket(page.webSocketDebuggerUrl);
await new Promise((resolve, reject) => {
  socket.addEventListener('open', resolve, { once: true });
  socket.addEventListener('error', reject, { once: true });
});

let nextId = 0;
const pending = new Map();
const events = new Map();
socket.addEventListener('message', ({ data }) => {
  const message = JSON.parse(data);
  if (message.id && pending.has(message.id)) {
    const { resolve, reject } = pending.get(message.id);
    pending.delete(message.id);
    return message.error ? reject(new Error(JSON.stringify(message.error))) : resolve(message.result);
  }
  const waiters = events.get(message.method) ?? [];
  events.delete(message.method);
  for (const resolve of waiters) resolve(message.params);
});

function command(method, params = {}) {
  const id = ++nextId;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

function event(method) {
  return new Promise((resolve) => events.set(method, [...(events.get(method) ?? []), resolve]));
}

try {
  await command('Page.enable');
  await command('Runtime.enable');
  await command('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: false,
    screenWidth: width,
    screenHeight: height,
  });
  const loaded = event('Page.loadEventFired');
  await command('Page.navigate', { url });
  await loaded;
  await command('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true });
  const metrics = await command('Runtime.evaluate', {
    expression: `JSON.stringify({
      innerWidth,
      innerHeight,
      scrollWidth: document.documentElement.scrollWidth,
      scrollHeight: document.documentElement.scrollHeight,
      readyState: document.readyState,
      overflowingElements: [...document.querySelectorAll('body *')]
        .map((element) => {
          const rect = element.getBoundingClientRect();
          return {
            tag: element.tagName.toLowerCase(),
            className: String(element.className || ''),
            text: (element.textContent || '').trim().replace(/\\s+/g, ' ').slice(0, 100),
            left: Math.round(rect.left),
            right: Math.round(rect.right),
            width: Math.round(rect.width),
            scrollWidth: element.scrollWidth,
          };
        })
        .filter((item) => item.right > innerWidth + 1 || item.left < -1 || item.scrollWidth > item.width + 1)
        .slice(0, 20),
    })`,
    returnByValue: true,
  });
  const capture = await command('Page.captureScreenshot', { format: 'png', fromSurface: true });
  writeFileSync(output, Buffer.from(capture.data, 'base64'));
  const result = JSON.parse(metrics.result.value);
  console.log(JSON.stringify({ output, url, ...result, overflowX: result.scrollWidth > result.innerWidth }, null, 2));
  if (result.scrollWidth > result.innerWidth) process.exitCode = 1;
} finally {
  socket.close();
  child.kill('SIGTERM');
  await Promise.race([once(child, 'exit'), new Promise((resolve) => setTimeout(resolve, 2_000))]);
  rmSync(profile, { recursive: true, force: true });
}
