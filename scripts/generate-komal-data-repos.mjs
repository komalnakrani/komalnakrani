import fs from 'node:fs';
import path from 'node:path';

const targetDir = '/Applications/ServBay/www/komal-data';

const themeConfigs = [
  { name: 'Apex SaaS', framework: 'astro', category: 'saas', bg: '#0d0d0d', accent: '#ff6711', cardBg: '#101820' },
  { name: 'Apex SaaS', framework: 'nextjs', category: 'saas', bg: '#0d0d0d', accent: '#ff6711', cardBg: '#101820' },
  { name: 'Lexicon Studio', framework: 'astro', category: 'agency', bg: '#fffdfa', accent: '#ff6711', cardBg: '#fdf9f4' },
  { name: 'Lexicon Studio', framework: 'nextjs', category: 'agency', bg: '#fffdfa', accent: '#ff6711', cardBg: '#fdf9f4' },
  { name: 'Kinetix Job Board', framework: 'astro', category: 'job board', bg: '#0b0f19', accent: '#10b981', cardBg: '#111827' },
  { name: 'Kinetix Job Board', framework: 'nextjs', category: 'job board', bg: '#0b0f19', accent: '#10b981', cardBg: '#111827' },
  { name: 'Veritas Directory', framework: 'astro', category: 'directory', bg: '#0f172a', accent: '#3b82f6', cardBg: '#1e293b' },
  { name: 'Veritas Directory', framework: 'nextjs', category: 'directory', bg: '#0f172a', accent: '#3b82f6', cardBg: '#1e293b' },
  { name: 'Sanctuary Real Estate', framework: 'astro', category: 'real estate', bg: '#101820', accent: '#eab308', cardBg: '#111822' },
  { name: 'Sanctuary Real Estate', framework: 'nextjs', category: 'real estate', bg: '#101820', accent: '#eab308', cardBg: '#111822' },
  { name: 'AudioPulse Podcast', framework: 'astro', category: 'podcast', bg: '#0d0d0d', accent: '#ec4899', cardBg: '#18181b' },
  { name: 'AudioPulse Podcast', framework: 'nextjs', category: 'podcast', bg: '#0d0d0d', accent: '#ec4899', cardBg: '#18181b' },
  { name: 'Summit Tech Event', framework: 'astro', category: 'event', bg: '#050505', accent: '#8b5cf6', cardBg: '#0d1117' },
  { name: 'Summit Tech Event', framework: 'nextjs', category: 'event', bg: '#050505', accent: '#8b5cf6', cardBg: '#0d1117' },
  { name: 'Commerce Core Store', framework: 'astro', category: 'ecommerce', bg: '#0f172a', accent: '#f43f5e', cardBg: '#1e293b' },
  { name: 'Commerce Core Store', framework: 'nextjs', category: 'ecommerce', bg: '#0f172a', accent: '#f43f5e', cardBg: '#1e293b' },
  { name: 'HyperDocs Manual', framework: 'astro', category: 'documentation', bg: '#101820', accent: '#ff8400', cardBg: '#111822' },
  { name: 'HyperDocs Manual', framework: 'nextjs', category: 'documentation', bg: '#101820', accent: '#ff8400', cardBg: '#111822' }
];

function buildCategorySpecificThemes() {
  themeConfigs.forEach((item) => {
    const slugBase = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const repoSlug = `${slugBase}-${item.framework === 'astro' ? 'astro' : 'next'}`;
    const repoPath = path.join(targetDir, repoSlug);

    fs.mkdirSync(repoPath, { recursive: true });
    const isAstro = item.framework === 'astro';

    // package.json with devDependencies for TypeScript
    fs.writeFileSync(path.join(repoPath, 'package.json'), JSON.stringify({
      name: repoSlug,
      type: isAstro ? 'module' : undefined,
      version: '1.0.0',
      private: true,
      scripts: {
        dev: isAstro ? 'astro dev' : 'next dev',
        build: isAstro ? 'astro build' : 'next build',
        start: isAstro ? 'astro preview' : 'next start'
      },
      dependencies: isAstro
        ? { astro: '^5.0.0', tailwindcss: '^3.4.0', '@astrojs/mdx': '^4.0.0' }
        : { next: '^15.0.0', react: '^19.0.0', 'react-dom': '^19.0.0', 'next-sanity': '^9.0.0', stripe: '^17.0.0' },
      devDependencies: {
        typescript: '^5.7.2',
        '@types/node': '^20.0.0',
        '@types/react': '^19.0.0',
        '@types/react-dom': '^19.0.0'
      }
    }, null, 2));

    if (isAstro) {
      const pagesDir = path.join(repoPath, 'src/pages');
      fs.mkdirSync(path.join(pagesDir, 'legal'), { recursive: true });

      fs.writeFileSync(path.join(repoPath, 'astro.config.mjs'), `import { defineConfig } from 'astro/config';\nimport mdx from '@astrojs/mdx';\nexport default defineConfig({ integrations: [mdx()] });\n`);

      const cookieScript = `
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/osano/cookieconsent@3.1.0/build/cookieconsent.min.css" />
        <script src="https://cdn.jsdelivr.net/gh/osano/cookieconsent@3.1.0/build/cookieconsent.min.js"></script>
        <script>
          window.addEventListener("load", function(){
            window.wpcc.init({
              "border":"thin",
              "corners":"small",
              "colors":{
                "popup":{"background":"${item.cardBg}","text":"#ffffff","border":"${item.accent}"},
                "button":{"background":"${item.accent}","text":"#ffffff"}
              },
              "position":"bottom-right",
              "content":{"href":"/legal/cookies"}
            });
          });
        </script>
      `;

      // Category-tailored Page Generation
      if (item.category === 'job board') {
        fs.writeFileSync(path.join(pagesDir, 'index.astro'), `---
---
<!doctype html><html><head><title>${item.name} - Job Board</title></head><body style="margin:0;background:${item.bg};color:#fff;font-family:system-ui;"><main style="padding:80px;text-align:center;"><h1 style="font-size:48px;">${item.name}</h1><p style="color:#9ca3af;">Find tech roles & post open developer jobs.</p><a href="/jobs" style="background:${item.accent};color:#fff;padding:12px 24px;border-radius:8px;text-decoration:none;">Browse 50+ Open Jobs →</a></main>${cookieScript}</body></html>`);
        fs.writeFileSync(path.join(pagesDir, 'jobs.astro'), `---
---
<!doctype html><html><head><title>Open Jobs - ${item.name}</title></head><body style="margin:0;background:${item.bg};color:#fff;font-family:system-ui;"><main style="padding:60px;max-width:800px;margin:0 auto;"><h1>All Tech Jobs</h1><div style="background:${item.cardBg};padding:20px;border-radius:8px;margin-top:20px;"><h3>Senior Full-Stack Engineer</h3><p style="color:#9ca3af;">Remote · $160,000 - $190,000</p></div></main></body></html>`);
        fs.writeFileSync(path.join(pagesDir, 'post-job.astro'), `---
---
<!doctype html><html><head><title>Post a Job - ${item.name}</title></head><body style="margin:0;background:${item.bg};color:#fff;font-family:system-ui;"><main style="padding:60px;max-width:600px;margin:0 auto;"><h1>Post an Open Role</h1></main></body></html>`);
      } else if (item.category === 'directory') {
        fs.writeFileSync(path.join(pagesDir, 'index.astro'), `---
---
<!doctype html><html><head><title>${item.name} - Directory</title></head><body style="margin:0;background:${item.bg};color:#fff;font-family:system-ui;"><main style="padding:80px;text-align:center;"><h1 style="font-size:48px;">${item.name}</h1><p style="color:#9ca3af;">Curated directory of AI tools, startups, and resources.</p></main>${cookieScript}</body></html>`);
        fs.writeFileSync(path.join(pagesDir, 'directory.astro'), `---
---
<!doctype html><html><head><title>Directory Listings - ${item.name}</title></head><body style="margin:0;background:${item.bg};color:#fff;font-family:system-ui;"><main style="padding:60px;max-width:800px;margin:0 auto;"><h1>Curated Listings</h1></main></body></html>`);
      } else if (item.category === 'real estate') {
        fs.writeFileSync(path.join(pagesDir, 'index.astro'), `---
---
<!doctype html><html><head><title>${item.name} - Luxury Real Estate</title></head><body style="margin:0;background:${item.bg};color:#fff;font-family:system-ui;"><main style="padding:80px;text-align:center;"><h1 style="font-size:48px;">${item.name}</h1><p style="color:#9ca3af;">Exclusive architectural homes and luxury real estate listings.</p></main>${cookieScript}</body></html>`);
        fs.writeFileSync(path.join(pagesDir, 'properties.astro'), `---
---
<!doctype html><html><head><title>Properties Catalog - ${item.name}</title></head><body style="margin:0;background:${item.bg};color:#fff;font-family:system-ui;"><main style="padding:60px;max-width:800px;margin:0 auto;"><h1>Available Estates</h1></main></body></html>`);
      } else if (item.category === 'podcast') {
        fs.writeFileSync(path.join(pagesDir, 'index.astro'), `---
---
<!doctype html><html><head><title>${item.name} - Podcast Show</title></head><body style="margin:0;background:${item.bg};color:#fff;font-family:system-ui;"><main style="padding:80px;text-align:center;"><h1 style="font-size:48px;">${item.name}</h1><p style="color:#9ca3af;">Conversations with leading AI researchers and founders.</p></main>${cookieScript}</body></html>`);
        fs.writeFileSync(path.join(pagesDir, 'episodes.astro'), `---
---
<!doctype html><html><head><title>All Episodes - ${item.name}</title></head><body style="margin:0;background:${item.bg};color:#fff;font-family:system-ui;"><main style="padding:60px;max-width:800px;margin:0 auto;"><h1>Recent Episodes</h1></main></body></html>`);
      } else {
        // Standard SaaS / Agency default
        fs.writeFileSync(path.join(pagesDir, 'index.astro'), `---
---
<!doctype html><html><head><title>${item.name}</title></head><body style="margin:0;background:${item.bg};color:#fff;font-family:system-ui;"><main style="padding:80px;text-align:center;"><h1 style="font-size:48px;">${item.name}</h1><p style="color:#9ca3af;">Production multi-page starter kit.</p></main>${cookieScript}</body></html>`);
      }

      // Legal pages for all
      fs.writeFileSync(path.join(pagesDir, 'legal/privacy.astro'), `---
---
<!doctype html><html><head><title>Privacy Policy - ${item.name}</title></head><body style="margin:0;background:${item.bg};color:#fff;font-family:system-ui;"><main style="padding:60px;"><h1>Privacy Policy</h1></main></body></html>`);
      fs.writeFileSync(path.join(pagesDir, 'legal/cookies.astro'), `---
---
<!doctype html><html><head><title>Cookie Policy - ${item.name}</title></head><body style="margin:0;background:${item.bg};color:#fff;font-family:system-ui;"><main style="padding:60px;"><h1>Cookie Policy (Osano Consent)</h1></main></body></html>`);
    } else {
      // Next.js App Router setup
      const appDir = path.join(repoPath, 'app');
      fs.mkdirSync(appDir, { recursive: true });

      fs.writeFileSync(path.join(appDir, 'layout.tsx'), `export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body style={{ margin: 0, background: '${item.bg}', color: '#ffffff', fontFamily: 'system-ui, sans-serif' }}>{children}</body></html>; }\n`);
      fs.writeFileSync(path.join(appDir, 'page.tsx'), `export default function Home() { return <main style={{ padding: '80px 24px', textAlign: 'center' }}><h1 style={{ fontSize: '52px', margin: '0 0 16px' }}>${item.name}</h1><p style={{ fontSize: '18px', color: '#9ca3af', maxWidth: '600px', margin: '0 auto' }}>Full-stack Next.js 15 App Router theme for ${item.category}.</p></main>; }\n`);
    }
  });

  console.log(`Successfully generated category-tailored themes across all 17 Lexington categories in ${targetDir}!`);
}

buildCategorySpecificThemes();
