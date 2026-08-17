#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { mkdtempSync, readdirSync, rmSync, statSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

const root = process.cwd();
const dist = path.join(root, 'dist');
const host = '127.0.0.1';
const port = Number(process.env.KOMAL_RENDER_PORT || '4333');
const baseUrl = `http://${host}:${port}`;
const chrome = process.env.CHROME_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const viewports = [
  { name: 'mobile', width: 390, height: 844 },
  { name: 'desktop', width: 1440, height: 1000 },
];

function htmlFiles(directory) {
  return readdirSync(directory).flatMap((entry) => {
    const absolute = path.join(directory, entry);
    return statSync(absolute).isDirectory()
      ? htmlFiles(absolute)
      : absolute.endsWith('.html')
        ? [absolute]
        : [];
  });
}

function routeFor(file) {
  const relative = path.relative(dist, file).split(path.sep).join('/');
  if (relative === 'index.html') return '/';
  if (relative.endsWith('/index.html')) return `/${relative.slice(0, -'index.html'.length)}`;
  return `/${relative}`;
}

async function waitForServer() {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(baseUrl, { signal: AbortSignal.timeout(500) });
      if (response.ok) return;
    } catch {
      // The preview process needs a short startup window.
    }
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error(`Astro preview did not become ready at ${baseUrl}`);
}

const preview = spawn('npm', ['run', 'preview', '--', '--host', host, '--port', String(port)], {
  cwd: root,
  stdio: ['ignore', 'ignore', 'pipe'],
});
let previewError = '';
preview.stderr.setEncoding('utf8');
preview.stderr.on('data', (chunk) => { previewError += chunk; });

const profile = mkdtempSync(path.join(os.tmpdir(), 'komal-render-check-'));
let browser;
let socket;

try {
  await waitForServer();
  browser = spawn(chrome, [
    '--headless=new',
    '--disable-background-networking',
    '--disable-component-update',
    '--disable-gpu',
    '--no-default-browser-check',
    '--no-first-run',
    '--remote-debugging-port=0',
    `--user-data-dir=${profile}`,
    'about:blank',
  ], { stdio: ['ignore', 'ignore', 'pipe'] });

  let browserError = '';
  const browserSocket = await new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(`Chrome DevTools endpoint timed out. ${browserError}`)), 10_000);
    browser.stderr.setEncoding('utf8');
    browser.stderr.on('data', (chunk) => {
      browserError += chunk;
      const match = browserError.match(/DevTools listening on (ws:\/\/[^\s]+)/);
      if (match) {
        clearTimeout(timer);
        resolve(match[1]);
      }
    });
    browser.once('error', reject);
    browser.once('exit', (code) => reject(new Error(`Chrome exited before the check (${code}). ${browserError}`)));
  });

  const debugPort = new URL(browserSocket).port;
  const targets = await fetch(`http://127.0.0.1:${debugPort}/json/list`).then((response) => response.json());
  const page = targets.find((target) => target.type === 'page');
  if (!page) throw new Error('Chrome did not expose a page target.');

  socket = new WebSocket(page.webSocketDebuggerUrl);
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
      const waiter = pending.get(message.id);
      pending.delete(message.id);
      return message.error ? waiter.reject(new Error(JSON.stringify(message.error))) : waiter.resolve(message.result);
    }
    const waiters = events.get(message.method) ?? [];
    events.delete(message.method);
    for (const resolve of waiters) resolve(message.params);
  });

  const command = (method, params = {}) => {
    const id = ++nextId;
    socket.send(JSON.stringify({ id, method, params }));
    return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
  };
  const event = (method) => new Promise((resolve) => events.set(method, [...(events.get(method) ?? []), resolve]));

  await command('Page.enable');
  await command('Runtime.enable');

  const routes = htmlFiles(dist).map(routeFor).sort();
  const failures = [];
  let checks = 0;

  for (const viewport of viewports) {
    await command('Emulation.setDeviceMetricsOverride', {
      width: viewport.width,
      height: viewport.height,
      deviceScaleFactor: 1,
      mobile: viewport.name === 'mobile',
      screenWidth: viewport.width,
      screenHeight: viewport.height,
    });

    for (const route of routes) {
      const loaded = event('Page.loadEventFired');
      await command('Page.navigate', { url: `${baseUrl}${route}` });
      await loaded;
      await command('Runtime.evaluate', { expression: 'document.fonts.ready', awaitPromise: true });
      await command('Runtime.evaluate', {
        expression: `(async () => {
          const images = [...document.images];
          for (const image of images) image.loading = 'eager';
          window.scrollTo(0, document.documentElement.scrollHeight);
          await Promise.all(images.map((image) => image.decode().catch(() => undefined)));
          window.scrollTo(0, 0);
        })()`,
        awaitPromise: true,
      });
      const result = await command('Runtime.evaluate', {
        expression: `JSON.stringify((() => {
          const duplicateIds = [...document.querySelectorAll('[id]')]
            .map((element) => element.id)
            .filter((id, index, ids) => ids.indexOf(id) !== index);
          const missingImages = [...document.images]
            .filter((image) => !image.complete || image.naturalWidth === 0)
            .map((image) => image.currentSrc || image.src);
          const missingAlt = [...document.images]
            .filter((image) => !image.hasAttribute('alt'))
            .map((image) => image.currentSrc || image.src);
          const unnamedLinks = [...document.querySelectorAll('a[href]')]
            .filter((link) => !(link.textContent || '').trim() && !link.getAttribute('aria-label'))
            .map((link) => link.getAttribute('href'));
          const pageTitle = document.querySelector('h1')?.textContent?.trim();
          const bodyTitle = document.querySelector('.book-prose > :first-child:is(h1, h2)')?.textContent?.trim();
          return {
            title: document.title,
            bodyText: document.body.innerText.trim().length,
            h1Count: document.querySelectorAll('h1').length,
            scrollWidth: document.documentElement.scrollWidth,
            innerWidth,
            duplicateIds,
            missingImages,
            missingAlt,
            unnamedLinks,
            duplicateBodyTitle: Boolean(pageTitle && bodyTitle && pageTitle === bodyTitle),
          };
        })())`,
        returnByValue: true,
      });
      const metrics = JSON.parse(result.result.value);
      checks += 1;
      const problems = [];
      if (!metrics.title) problems.push('missing title');
      if (metrics.bodyText < 20) problems.push('empty body');
      if (metrics.h1Count !== 1) problems.push(`${metrics.h1Count} h1 elements`);
      if (metrics.scrollWidth > metrics.innerWidth + 1) problems.push(`horizontal overflow ${metrics.scrollWidth}/${metrics.innerWidth}`);
      if (metrics.duplicateIds.length) problems.push(`duplicate ids: ${metrics.duplicateIds.join(', ')}`);
      if (metrics.missingImages.length) problems.push(`missing images: ${metrics.missingImages.join(', ')}`);
      if (metrics.missingAlt.length) problems.push(`images without alt: ${metrics.missingAlt.join(', ')}`);
      if (metrics.unnamedLinks.length) problems.push(`unnamed links: ${metrics.unnamedLinks.join(', ')}`);
      if (metrics.duplicateBodyTitle) problems.push('duplicate chapter title in body');
      if (problems.length) failures.push({ viewport: viewport.name, route, problems });
    }
  }

  console.log(JSON.stringify({ routes: routes.length, viewportRouteChecks: checks, viewports, failures }, null, 2));
  if (failures.length) process.exitCode = 1;
} finally {
  socket?.close();
  browser?.kill('SIGTERM');
  preview.kill('SIGTERM');
  await Promise.all([
    browser ? Promise.race([once(browser, 'exit'), new Promise((resolve) => setTimeout(resolve, 2_000))]) : undefined,
    Promise.race([once(preview, 'exit'), new Promise((resolve) => setTimeout(resolve, 2_000))]),
  ]);
  rmSync(profile, { recursive: true, force: true });
  if (previewError && process.exitCode) console.error(previewError);
}
