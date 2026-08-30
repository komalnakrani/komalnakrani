import fs from 'node:fs';
import path from 'node:path';

const sitemapPath = '/Applications/ServBay/www/komalnakrani/WEBFLOW_TEMPLATES_SITEMAP.md';
const outputPath = '/Applications/ServBay/www/komalnakrani/WEBFLOW_THEME_PREVIEW_URLS.md';

async function extractPreviewUrls() {
  if (!fs.existsSync(sitemapPath)) {
    console.error(`Error: Sitemap file not found at ${sitemapPath}`);
    return;
  }

  const fileContent = fs.readFileSync(sitemapPath, 'utf8');
  const matches = [...fileContent.matchAll(/https:\/\/webflow\.com\/templates\/html\/[^\s\)]+/g)];
  const urls = Array.from(new Set(matches.map(m => m[0])));

  console.log(`Loaded ${urls.length} template URLs from sitemap MD file.`);
  console.log(`Processing template preview URLs in parallel batches...`);

  const results = [];
  const concurrency = 20;

  for (let i = 0; i < urls.length; i += concurrency) {
    const chunk = urls.slice(i, i + concurrency);
    
    await Promise.all(chunk.map(async (templateUrl) => {
      const slug = templateUrl.replace('https://webflow.com/templates/html/', '');
      let previewUrl = null;

      try {
        const response = await fetch(templateUrl, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
          }
        });

        if (response.ok) {
          const html = await response.text();
          
          // 1. Check for "Preview in browser" button link
          const btnMatch = html.match(/href="([^"]+)"[^>]*>Preview in browser<\/a>/i);
          if (btnMatch && btnMatch[1]) {
            previewUrl = btnMatch[1];
          }

          // 2. Check for iframe data-src (webflow.io)
          if (!previewUrl) {
            const iframeMatch = html.match(/data-src="([^"]+)"/i);
            if (iframeMatch && iframeMatch[1] && iframeMatch[1] !== 'about:blank') {
              previewUrl = iframeMatch[1];
            }
          }

          // 3. Check for webflow.io link regex
          if (!previewUrl) {
            const ioMatch = html.match(/href="(https?:\/\/[^"]+\.webflow\.io[^"]*)"/i);
            if (ioMatch && ioMatch[1]) {
              previewUrl = ioMatch[1];
            }
          }
        }
      } catch (err) {
        // Fetch notice
      }

      results.push({
        templateUrl,
        slug,
        previewUrl: previewUrl || 'N/A (No direct preview URL found)'
      });
    }));

    if ((i + concurrency) % 100 === 0 || i + concurrency >= urls.length) {
      console.log(`Processed ${Math.min(i + concurrency, urls.length)} / ${urls.length} templates...`);
    }
  }

  // Sort by slug alphabetically
  results.sort((a, b) => a.slug.localeCompare(b.slug));

  let mdOutput = `# Webflow Theme Browser Preview URLs Index\n\nTotal Templates Processed: ${results.length}\n\n`;
  mdOutput += `| # | Template Slug | Webflow Product Page | Live Browser Preview URL |\n`;
  mdOutput += `|---|---|---|---|\n`;

  results.forEach((item, idx) => {
    const previewLink = item.previewUrl.startsWith('http')
      ? `[Preview Live Demo](${item.previewUrl})`
      : item.previewUrl;
    mdOutput += `| ${idx + 1} | \`${item.slug}\` | [Product Page](${item.templateUrl}) | ${previewLink} |\n`;
  });

  fs.writeFileSync(outputPath, mdOutput);
  console.log(`\n🎉 Successfully created ${outputPath} with ${results.length} mapped preview URLs!`);
}

extractPreviewUrls();
