#!/usr/bin/env node
/**
 * 16:9 Thumbnail Regeneration Script with 10-Second Load Delay
 * 
 * - Enforces 16:9 aspect ratio screenshots (1200 x 675px)
 * - Waits 10 seconds (10,000ms) after page load before taking screenshot
 * - Unhides preloader overlays, triggers scroll events to force lazy images/fonts
 * - Saves high-quality WebP images to public/themes/<slug>.webp
 */

import { spawn } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync, existsSync } from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { themes } from '../src/data/themes';
import { cleanSlugFor } from '../src/data/design';

const WIDTH = 1200;
const HEIGHT = 675; // 1200 / 675 = 16:9 Aspect Ratio
const LOAD_DELAY_MS = 10000; // 10 seconds delay after page load as requested
const CHROME_PATH = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const PUBLIC_THEMES_DIR = path.resolve('public/themes');

mkdirSync(PUBLIC_THEMES_DIR, { recursive: true });

async function captureThumbnail(slug, liveUrl) {
  const outputPath = path.join(PUBLIC_THEMES_DIR, `${slug}.webp`);
  const profile = mkdtempSync(path.join(os.tmpdir(), 'thumb-reg-'));

  const child = spawn(CHROME_PATH, [
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
  try {
    const browserSocket = await new Promise((resolve, reject) => {
      const timer = setTimeout(() => reject(new Error(`Chrome DevTools endpoint timed out`)), 10_000);
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
      child.once('exit', (code) => reject(new Error(`Chrome exited prematurely (${code})`)));
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
    socket.addEventListener('message', ({ data }) => {
      const message = JSON.parse(data);
      if (message.id && pending.has(message.id)) {
        const { resolve, reject } = pending.get(message.id);
        pending.delete(message.id);
        return message.error ? reject(new Error(JSON.stringify(message.error))) : resolve(message.result);
      }
    });

    function command(method, params = {}) {
      const id = ++nextId;
      socket.send(JSON.stringify({ id, method, params }));
      return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
    }

    await command('Page.enable');
    await command('Runtime.enable');
    await command('Emulation.setDeviceMetricsOverride', {
      width: WIDTH,
      height: HEIGHT,
      deviceScaleFactor: 1,
      mobile: false,
      screenWidth: WIDTH,
      screenHeight: HEIGHT,
    });

    console.log(`[Navigating] ${slug} -> ${liveUrl}`);
    await command('Page.navigate', { url: liveUrl });

    // Wait 10 seconds for page, JS animations, fonts, and images to settle completely
    console.log(`[Waiting 10 seconds] For ${slug} assets & animations to render accurately...`);
    await new Promise((resolve) => setTimeout(resolve, LOAD_DELAY_MS));

    // Force hide preloaders and trigger scroll/resizes to ensure hero section is visible
    await command('Runtime.evaluate', {
      expression: `(() => {
        try {
          const loaders = document.querySelectorAll('.preloader, .loader, #preloader, #loader, [class*="preloader"], [class*="loading"], [id*="preloader"]');
          loaders.forEach(el => { el.style.display = 'none'; el.style.opacity = '0'; });

          window.scrollTo(0, 100);
          window.scrollTo(0, 0);
          window.dispatchEvent(new Event('scroll'));
          window.dispatchEvent(new Event('resize'));

          const heroEls = document.querySelectorAll('header *, section *, main *, .hero *');
          heroEls.forEach(el => {
            const style = window.getComputedStyle(el);
            if (style.opacity === '0') el.style.opacity = '1';
            if (style.visibility === 'hidden') el.style.visibility = 'visible';
          });
        } catch (e) {}
      })()`,
      awaitPromise: true
    });

    await new Promise((resolve) => setTimeout(resolve, 1000));

    const capture = await command('Page.captureScreenshot', { 
      format: 'webp', 
      quality: 85, 
      fromSurface: true,
      clip: {
        x: 0,
        y: 0,
        width: WIDTH,
        height: HEIGHT,
        scale: 1
      }
    });

    writeFileSync(outputPath, Buffer.from(capture.data, 'base64'));
    console.log(`[Saved 16:9 Thumbnail] ✅ ${slug}.webp (${WIDTH}x${HEIGHT})`);
    socket.close();
    return true;
  } catch (err) {
    console.error(`[Error] Failed to capture ${slug}:`, err.message);
    return false;
  } finally {
    child.kill('SIGTERM');
    try {
      rmSync(profile, { recursive: true, force: true, maxRetries: 3, retryDelay: 200 });
    } catch (e) {}
  }
}

async function main() {
  console.log(`🚀 Starting 16:9 Thumbnail Regeneration (${WIDTH}x${HEIGHT}) with ${LOAD_DELAY_MS/1000}s Delay`);
  console.log(`Total themes to process: ${themes.length}\n`);

  let count = 0;
  for (const theme of themes) {
    count++;
    const slug = theme.slug;
    const cleanSub = cleanSlugFor(theme);
    const liveUrl = theme.liveUrl || `https://${cleanSub}.komalnakrani.com`;
    
    console.log(`\n--- Processing [${count}/${themes.length}]: ${slug} ---`);
    await captureThumbnail(slug, liveUrl);
  }

  console.log(`\n🎉 Completed 16:9 Thumbnail Regeneration for all themes!`);
}

main().catch(console.error);
