import fs from 'node:fs';
import { exec } from 'node:child_process';
import { promisify } from 'node:util';

const execAsync = promisify(exec);

const sitemapPath = '/Applications/ServBay/www/komalnakrani/WEBFLOW_TEMPLATES_SITEMAP.md';
const outputPath = '/Applications/ServBay/www/komalnakrani/WEBFLOW_THEME_PREVIEW_URLS.md';

const userAgent = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36';

async function generateAllPlainPreviewUrls() {
  const fileContent = fs.readFileSync(sitemapPath, 'utf8');
  const matches = [...fileContent.matchAll(/https:\/\/webflow\.com\/templates\/html\/[^\s\)]+/g)];
  const urls = Array.from(new Set(matches.map(m => m[0])));

  console.log(`Loaded ${urls.length} Webflow template URLs.`);

  const results = [];
  const concurrency = 25;

  for (let i = 0; i < urls.length; i += concurrency) {
    const chunk = urls.slice(i, i + concurrency);

    await Promise.all(chunk.map(async (templateUrl) => {
      const slug = templateUrl.replace('https://webflow.com/templates/html/', '');
      let previewUrl = null;

      try {
        const { stdout } = await execAsync(`curl -sL -A "${userAgent}" "${templateUrl}"`, { maxBuffer: 10 * 1024 * 1024 });

        // 1. "Preview in browser" button link
        const btnMatch = stdout.match(/href="([^"]+)"[^>]*>Preview in browser<\/a>/i);
        if (btnMatch && btnMatch[1]) {
          previewUrl = btnMatch[1];
        }

        // 2. iframe data-src or src with webflow.io
        if (!previewUrl) {
          const ioMatch = stdout.match(/data-src="(https?:\/\/[^"]+\.webflow\.io[^"]*)"/i) || stdout.match(/href="(https?:\/\/[^"]+\.webflow\.io[^"]*)"/i);
          if (ioMatch && ioMatch[1]) {
            previewUrl = ioMatch[1];
          }
        }

        // 3. Webflow designer preview link
        if (!previewUrl) {
          const designerMatch = stdout.match(/href="(https?:\/\/webflow\.com\/design\/[^"]+)"/i);
          if (designerMatch && designerMatch[1]) {
            previewUrl = designerMatch[1];
          }
        }
      } catch (err) {
        // Fallback
      }

      const finalUrl = previewUrl || `https://${slug.replace(/-website-template$/, '')}.webflow.io`;
      results.push(finalUrl);
    }));

    if ((i + concurrency) % 100 === 0 || i + concurrency >= urls.length) {
      console.log(`Processed ${Math.min(i + concurrency, urls.length)} / ${urls.length} templates...`);
    }
  }

  // Deduplicate and write strictly plain list of URLs, one URL per line
  const uniqueUrls = Array.from(new Set(results));
  fs.writeFileSync(outputPath, uniqueUrls.join('\n') + '\n');
  console.log(`\n🎉 DONE! Saved ${uniqueUrls.length} plain URLs (strictly one URL per line) to ${outputPath}`);
}

generateAllPlainPreviewUrls();
