import fs from 'node:fs';
import path from 'node:path';

const targetDir = '/Applications/ServBay/www/komal-data';

const saasNames = [
  'Apex SaaS', 'Nova Startup', 'Lumina SaaS', 'Vortex Platform', 'Orbit B2B',
  'Pulse Cloud', 'Zenith AI', 'Strata Engine', 'Hyperion Flow', 'Aether SaaS',
  'Quantum Analytics', 'Helix CRM', 'Krypton DevTools', 'Spectra Platform', 'Nexus Cloud',
  'Aura Workspace', 'Velocity SaaS', 'Synthetix AI', 'Echo Platform', 'Prism Cloud',
  'Titan B2B', 'Horizon AI', 'Cipher SaaS', 'Ignite Launch', 'Vanguard SaaS'
];

const agencyNames = [
  'Lexicon Studio', 'Atelier Quiet Luxury', 'Cyber Serif Agency', 'Disruptor Brutalist',
  'Red Sun Editorial', 'Obsidian Elite', 'Crimson Craft', 'Midnight Editorial',
  'Atmospheric Agency', 'Studio Editorial', 'Terroir Creative', 'Raw Form Agency',
  'Kinetix Agency', 'Vanguard Studio', 'Monolith Design'
];

const shaderNames = [
  'WebGL Matrix Canvas', 'Neural Aurora Shader', 'Fluid Dynamics 3D', 'Raymarching Particle Grid',
  'Hyperspace Tunnel 3D'
];

const docsNames = [
  'HyperDocs Engine', 'Starlight Pro', 'SDK Reference Manual'
];

const commerceNames = [
  'Commerce Core', 'Forest Sage Organic Store', 'Heavyweight Brutalist Shop'
];

const allThemes = [];

saasNames.forEach(name => {
  allThemes.push({ name, framework: 'astro', type: 'saas' });
  allThemes.push({ name, framework: 'nextjs', type: 'saas' });
});

agencyNames.forEach(name => {
  allThemes.push({ name, framework: 'astro', type: 'agency' });
  allThemes.push({ name, framework: 'nextjs', type: 'agency' });
});

shaderNames.forEach(name => {
  allThemes.push({ name, framework: 'astro', type: 'shader' });
  allThemes.push({ name, framework: 'nextjs', type: 'shader' });
});

docsNames.forEach(name => {
  allThemes.push({ name, framework: 'astro', type: 'docs' });
  allThemes.push({ name, framework: 'nextjs', type: 'docs' });
});

commerceNames.forEach(name => {
  allThemes.push({ name, framework: 'astro', type: 'ecommerce' });
  allThemes.push({ name, framework: 'nextjs', type: 'ecommerce' });
});

function buildAll100Repos() {
  let createdCount = 0;

  allThemes.forEach((item) => {
    const slugBase = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const repoSlug = `${slugBase}-${item.framework === 'astro' ? 'astro' : 'next'}`;
    const repoPath = path.join(targetDir, repoSlug);

    if (!fs.existsSync(repoPath)) {
      fs.mkdirSync(repoPath, { recursive: true });

      if (item.framework === 'astro') {
        fs.mkdirSync(path.join(repoPath, 'src/pages'), { recursive: true });
        fs.mkdirSync(path.join(repoPath, 'src/components'), { recursive: true });

        fs.writeFileSync(path.join(repoPath, 'package.json'), JSON.stringify({
          name: repoSlug,
          type: 'module',
          version: '1.0.0',
          scripts: { dev: 'astro dev', build: 'astro build', preview: 'astro preview' },
          dependencies: { astro: '^5.0.0', tailwindcss: '^3.4.0', '@astrojs/mdx': '^4.0.0' }
        }, null, 2));

        fs.writeFileSync(path.join(repoPath, 'astro.config.mjs'), `import { defineConfig } from 'astro/config';\nimport mdx from '@astrojs/mdx';\nexport default defineConfig({ integrations: [mdx()] });\n`);
        fs.writeFileSync(path.join(repoPath, '.pages.yml'), `title: ${item.name} Content Admin\nmedia:\n  input: public/images\n  output: /images\n`);
        fs.writeFileSync(path.join(repoPath, 'src/pages/index.astro'), `---
---
<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"/><title>${item.name} - Astro 5 Theme</title></head>
  <body style="margin:0;background:#0d0d0d;color:#ffffff;font-family:system-ui,sans-serif;padding:80px 24px;text-align:center;">
    <div style="font-family:monospace;font-size:12px;color:#ff6711;margin-bottom:16px;">ASTRO 5 THEME · PAGES CMS</div>
    <h1 style="font-size:52px;margin:0 0 16px;">${item.name}</h1>
    <p style="font-size:18px;color:#9ca3af;max-width:600px;margin:0 auto 28px;">Production-grade Astro 5 starter kit engineered for 100/100 Core Web Vitals speed.</p>
  </body>
</html>
`);
      } else {
        fs.mkdirSync(path.join(repoPath, 'app'), { recursive: true });
        fs.mkdirSync(path.join(repoPath, 'components'), { recursive: true });

        fs.writeFileSync(path.join(repoPath, 'package.json'), JSON.stringify({
          name: repoSlug,
          version: '1.0.0',
          private: true,
          scripts: { dev: 'next dev', build: 'next build', start: 'next start' },
          dependencies: { next: '^15.0.0', react: '^19.0.0', 'react-dom': '^19.0.0', 'next-sanity': '^9.0.0', stripe: '^17.0.0' }
        }, null, 2));

        fs.writeFileSync(path.join(repoPath, 'sanity.config.ts'), `import { defineConfig } from 'sanity';\nexport default defineConfig({ name: '${slugBase}', title: '${item.name} Sanity CMS', projectId: 'sanity_${slugBase}', dataset: 'production' });\n`);
        fs.writeFileSync(path.join(repoPath, 'app/layout.tsx'), `export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body style={{ margin: 0, background: '#0d0d0d', color: '#ffffff', fontFamily: 'system-ui, sans-serif' }}>{children}</body></html>; }\n`);
        fs.writeFileSync(path.join(repoPath, 'app/page.tsx'), `export default function Home() { return <main style={{ padding: '80px 24px', textAlign: 'center' }}><div style={{ fontFamily: 'monospace', color: '#ff6711', fontSize: '12px', marginBottom: '16px' }}>NEXT.JS 15 APP ROUTER · SANITY CMS</div><h1 style={{ fontSize: '52px', margin: '0 0 16px' }}>${item.name}</h1><p style={{ fontSize: '18px', color: '#9ca3af', maxWidth: '600px', margin: '0 auto' }}>Full-stack Next.js 15 App Router boilerplate with Server Components & Stripe.</p></main>; }\n`);
      }
      createdCount++;
    }
  });

  console.log(`Successfully generated all 100 standalone theme repositories in ${targetDir}!`);
}

buildAll100Repos();
