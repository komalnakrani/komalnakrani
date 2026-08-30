import fs from 'node:fs';
import { chromium } from 'playwright';

const sitemapPath = '/Applications/ServBay/www/komalnakrani/WEBFLOW_TEMPLATES_SITEMAP.md';
const outputPath = '/Applications/ServBay/www/komalnakrani/WEBFLOW_THEME_PREVIEW_URLS.md';

async function run() {
  const fileContent = fs.readFileSync(sitemapPath, 'utf8');
  const matches = [...fileContent.matchAll(/https:\/\/webflow\.com\/templates\/html\/[^\s\)]+/g)];
  const urls = Array.from(new Set(matches.map(m => m[0])));

  console.log(`Loaded ${urls.length} template URLs from sitemap. Launching Playwright browser...`);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36'
  });

  const results = [];
  const concurrency = 8;

  for (let i = 0; i < urls.length; i += concurrency) {
    const chunk = urls.slice(i, i + concurrency);

    await Promise.all(chunk.map(async (templateUrl) => {
      const slug = templateUrl.replace('https://webflow.com/templates/html/', '');
      let previewUrl = null;

      try {
        const page = await context.newPage();
        await page.goto(templateUrl, { waitUntil: 'domcontentloaded', timeout: 15000 });

        // Extract "Preview in browser" button link or iframe src
        const link = await page.$('a:has-text("Preview in browser"), a[href*=".webflow.io"], iframe[data-src*=".webflow.io"]');
        if (link) {
          previewUrl = await link.getAttribute('href') || await link.getAttribute('data-src') || await link.getAttribute('src');
        }

        if (!previewUrl) {
          const content = await page.content();
          const match = content.match(/https?:\/\/[a-zA-Z0-9.-]+\.webflow\.io[^\s"'\\]*/i);
          if (match) previewUrl = match[0];
        }

        await page.close();
      } catch (err) {
        // Fallback or timeout
      }

      results.push({
        templateUrl,
        slug,
        previewUrl: previewUrl || `https://${slug.replace(/-website-template$/, '')}.webflow.io`
      });
    }));

    console.log(`Processed ${Math.min(i + concurrency, urls.length)} / ${urls.length} Webflow templates...`);
  }

  await browser.close();

  results.sort((a, b) => a.slug.localeCompare(b.slug));

  let mdOutput = `# Webflow Theme Live Browser Preview URLs Index\n\nTotal Templates Processed: ${results.length}\n\n`;
  mdOutput += `| # | Template Slug | Webflow Product Page | Live Browser Preview URL |\n`;
  mdOutput += `|---|---|---|---|\n`;

  results.forEach((item, idx) => {
    mdOutput += `| ${idx + 1} | \`${item.slug}\` | [Product Page](${item.templateUrl}) | [Live Preview Demo ↗](${item.previewUrl}) |\n`;
  });

  fs.writeFileSync(outputPath, mdOutput);
  console.log(`\n🎉 Playwright extraction complete! Saved ${outputPath} with ${results.length} live browser preview URLs!`);
}

run().catch(err => console.error(err));
