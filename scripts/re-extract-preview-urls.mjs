import fs from 'node:fs';

const sitemapPath = '/Applications/ServBay/www/komalnakrani/WEBFLOW_TEMPLATES_SITEMAP.md';
const outputPath = '/Applications/ServBay/www/komalnakrani/WEBFLOW_THEME_PREVIEW_URLS.md';

async function run() {
  const fileContent = fs.readFileSync(sitemapPath, 'utf8');
  const matches = [...fileContent.matchAll(/https:\/\/webflow\.com\/templates\/html\/[^\s\)]+/g)];
  const urls = Array.from(new Set(matches.map(m => m[0])));

  console.log(`Loaded ${urls.length} template URLs from sitemap.`);

  const results = [];
  const concurrency = 25;

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

          // 1. Search for webflow.io live preview site
          const ioMatch = html.match(/https?:\/\/[a-zA-Z0-9.-]+\.webflow\.io[^\s"'\\]*/i);
          if (ioMatch) {
            previewUrl = ioMatch[0];
          }

          // 2. Search for Webflow Designer preview link
          if (!previewUrl) {
            const designerMatch = html.match(/https?:\/\/webflow\.com\/design\/[^\s"'\\]+/i);
            if (designerMatch) {
              previewUrl = designerMatch[0];
            }
          }

          // 3. Search for preview iframe data-src or src
          if (!previewUrl) {
            const iframeMatch = html.match(/data-src="([^"]+)"/i) || html.match(/src="(https?:\/\/[^"]+)"/i);
            if (iframeMatch && iframeMatch[1] && iframeMatch[1] !== 'about:blank') {
              previewUrl = iframeMatch[1];
            }
          }
        }
      } catch (err) {
        // Fetch error
      }

      results.push({
        templateUrl,
        slug,
        previewUrl: previewUrl || 'N/A'
      });
    }));

    if ((i + concurrency) % 100 === 0 || i + concurrency >= urls.length) {
      console.log(`Processed ${Math.min(i + concurrency, urls.length)} / ${urls.length} templates...`);
    }
  }

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
  console.log(`🎉 Finished generating ${outputPath} with ${results.length} URLs!`);
}

run();
