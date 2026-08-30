import fs from 'node:fs';
import path from 'node:path';

const targetDir = '/Applications/ServBay/www/komal-data';

const themeConfigs = [
  { name: 'Apex SaaS', framework: 'astro', type: 'saas', bg: '#0d0d0d', accent: '#ff6711', cardBg: '#101820' },
  { name: 'Apex SaaS', framework: 'nextjs', type: 'saas', bg: '#0d0d0d', accent: '#ff6711', cardBg: '#101820' },
  { name: 'Nova Startup', framework: 'astro', type: 'saas', bg: '#0b0f19', accent: '#3b82f6', cardBg: '#111827' },
  { name: 'Nova Startup', framework: 'nextjs', type: 'saas', bg: '#0b0f19', accent: '#3b82f6', cardBg: '#111827' },
  { name: 'Lexicon Studio', framework: 'astro', type: 'agency', bg: '#fffdfa', accent: '#ff6711', cardBg: '#fdf9f4' },
  { name: 'Lexicon Studio', framework: 'nextjs', type: 'agency', bg: '#fffdfa', accent: '#ff6711', cardBg: '#fdf9f4' },
  { name: 'WebGL Matrix Canvas', framework: 'astro', type: 'shader', bg: '#050505', accent: '#10b981', cardBg: '#0d1117' },
  { name: 'WebGL Matrix Canvas', framework: 'nextjs', type: 'shader', bg: '#050505', accent: '#10b981', cardBg: '#0d1117' },
  { name: 'HyperDocs Engine', framework: 'astro', type: 'docs', bg: '#101820', accent: '#ff8400', cardBg: '#111822' },
  { name: 'HyperDocs Engine', framework: 'nextjs', type: 'docs', bg: '#101820', accent: '#ff8400', cardBg: '#111822' },
  { name: 'Commerce Core', framework: 'astro', type: 'ecommerce', bg: '#0f172a', accent: '#ec4899', cardBg: '#1e293b' },
  { name: 'Commerce Core', framework: 'nextjs', type: 'ecommerce', bg: '#0f172a', accent: '#ec4899', cardBg: '#1e293b' }
];

function generateMultiPageThemes() {
  themeConfigs.forEach((item) => {
    const slugBase = item.name.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const repoSlug = `${slugBase}-${item.framework === 'astro' ? 'astro' : 'next'}`;
    const repoPath = path.join(targetDir, repoSlug);

    fs.mkdirSync(repoPath, { recursive: true });

    const isAstro = item.framework === 'astro';

    // 1. package.json
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
        : { next: '^15.0.0', react: '^19.0.0', 'react-dom': '^19.0.0', 'next-sanity': '^9.0.0', stripe: '^17.0.0' }
    }, null, 2));

    if (isAstro) {
      // Create Astro pages
      const pagesDir = path.join(repoPath, 'src/pages');
      fs.mkdirSync(path.join(pagesDir, 'blog'), { recursive: true });
      fs.mkdirSync(path.join(pagesDir, 'legal'), { recursive: true });

      fs.writeFileSync(path.join(repoPath, 'astro.config.mjs'), `import { defineConfig } from 'astro/config';\nimport mdx from '@astrojs/mdx';\nexport default defineConfig({ integrations: [mdx()] });\n`);

      // Cookie Consent component with Osano Script
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

      // Header Layout Helper
      const navHtml = `
        <header style="padding:20px 32px;background:${item.cardBg};border-bottom:1px solid rgba(255,255,255,0.1);display:flex;justify-content:space-between;align-items:center;">
          <a href="/" style="font-weight:800;font-size:20px;color:#ffffff;text-decoration:none;">${item.name}</a>
          <nav style="display:flex;gap:20px;font-size:14px;">
            <a href="/" style="color:#d1d5db;text-decoration:none;">Home</a>
            <a href="/about" style="color:#d1d5db;text-decoration:none;">About</a>
            <a href="/services" style="color:#d1d5db;text-decoration:none;">Services</a>
            <a href="/pricing" style="color:#d1d5db;text-decoration:none;">Pricing</a>
            <a href="/blog" style="color:#d1d5db;text-decoration:none;">Blog</a>
            <a href="/contact" style="color:${item.accent};font-weight:700;text-decoration:none;">Contact</a>
          </nav>
        </header>
      `;

      const footerHtml = `
        <footer style="padding:40px 32px;background:${item.cardBg};border-top:1px solid rgba(255,255,255,0.1);color:#9ca3af;font-size:13px;text-align:center;">
          <div style="margin-bottom:16px;display:flex;gap:16px;justify-content:center;">
            <a href="/legal/privacy" style="color:#9ca3af;">Privacy Policy</a>
            <a href="/legal/terms" style="color:#9ca3af;">Terms of Service</a>
            <a href="/legal/cookies" style="color:#9ca3af;">Cookie Settings</a>
          </div>
          <div>© 2026 ${item.name} · Built with Astro 5 & Tailwind CSS</div>
        </footer>
      `;

      // Index Page
      fs.writeFileSync(path.join(pagesDir, 'index.astro'), `---
---
<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"/><title>${item.name} - Home</title></head>
  <body style="margin:0;background:${item.bg};color:#ffffff;font-family:system-ui,sans-serif;">
    ${navHtml}
    <main style="max-width:1000px;margin:0 auto;padding:80px 24px;text-align:center;">
      <div style="font-family:monospace;font-size:12px;color:${item.accent};margin-bottom:16px;">ASTRO 5 MULTI-PAGE THEME</div>
      <h1 style="font-size:56px;font-weight:800;margin:0 0 20px;">${item.name}</h1>
      <p style="font-size:20px;color:#9ca3af;max-width:640px;margin:0 auto 36px;">Production-grade multi-page Astro 5 starter kit engineered for 100/100 Core Web Vitals speed.</p>
      <a href="/pricing" style="background:${item.accent};color:#ffffff;padding:14px 28px;border-radius:8px;font-weight:700;text-decoration:none;">View Pricing & Features →</a>
    </main>
    ${footerHtml}
    ${cookieScript}
  </body>
</html>
`);

      // About Page
      fs.writeFileSync(path.join(pagesDir, 'about.astro'), `---
---
<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"/><title>About - ${item.name}</title></head>
  <body style="margin:0;background:${item.bg};color:#ffffff;font-family:system-ui,sans-serif;">
    ${navHtml}
    <main style="max-width:800px;margin:0 auto;padding:60px 24px;">
      <h1 style="font-size:44px;">About ${item.name}</h1>
      <p style="color:#9ca3af;font-size:18px;line-height:1.6;">Our mission is to build high-performance web applications and turnkey tools with zero bloat and absolute craftsmanship.</p>
    </main>
    ${footerHtml}
    ${cookieScript}
  </body>
</html>
`);

      // Services Page
      fs.writeFileSync(path.join(pagesDir, 'services.astro'), `---
---
<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"/><title>Services & Features - ${item.name}</title></head>
  <body style="margin:0;background:${item.bg};color:#ffffff;font-family:system-ui,sans-serif;">
    ${navHtml}
    <main style="max-width:1000px;margin:0 auto;padding:60px 24px;">
      <h1 style="font-size:44px;">Services & Capabilities</h1>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:24px;margin-top:32px;">
        <div style="background:${item.cardBg};padding:24px;border-radius:12px;border:1px solid rgba(255,255,255,0.1);">
          <h3 style="color:${item.accent};margin:0 0 10px;">01. Performance Engineering</h3>
          <p style="color:#9ca3af;font-size:14px;margin:0;">100/100 Core Web Vitals score optimization out of the box.</p>
        </div>
        <div style="background:${item.cardBg};padding:24px;border-radius:12px;border:1px solid rgba(255,255,255,0.1);">
          <h3 style="color:${item.accent};margin:0 0 10px;">02. Type-Safe Architecture</h3>
          <p style="color:#9ca3af;font-size:14px;margin:0;">Strict TypeScript schemas and tailwind token design systems.</p>
        </div>
      </div>
    </main>
    ${footerHtml}
    ${cookieScript}
  </body>
</html>
`);

      // Pricing Page
      fs.writeFileSync(path.join(pagesDir, 'pricing.astro'), `---
---
<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"/><title>Pricing - ${item.name}</title></head>
  <body style="margin:0;background:${item.bg};color:#ffffff;font-family:system-ui,sans-serif;">
    ${navHtml}
    <main style="max-width:800px;margin:0 auto;padding:60px 24px;text-align:center;">
      <h1 style="font-size:44px;">Transparent Pricing</h1>
      <div style="background:${item.cardBg};border:2px solid ${item.accent};padding:40px;border-radius:16px;max-width:360px;margin:32px auto 0;">
        <div style="font-size:48px;font-weight:800;">$29 <span style="font-size:14px;color:#9ca3af;">/ one-time</span></div>
        <p style="color:#9ca3af;font-size:14px;margin:12px 0 24px;">Full commercial license & source code ownership.</p>
        <a href="/contact" style="background:${item.accent};color:#ffffff;padding:12px 24px;border-radius:8px;font-weight:700;text-decoration:none;display:block;">Buy Commercial License</a>
      </div>
    </main>
    ${footerHtml}
    ${cookieScript}
  </body>
</html>
`);

      // Blog Index Page
      fs.writeFileSync(path.join(pagesDir, 'blog/index.astro'), `---
---
<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"/><title>Blog & Insights - ${item.name}</title></head>
  <body style="margin:0;background:${item.bg};color:#ffffff;font-family:system-ui,sans-serif;">
    ${navHtml}
    <main style="max-width:800px;margin:0 auto;padding:60px 24px;">
      <h1 style="font-size:44px;">Blog & Technical Insights</h1>
      <div style="background:${item.cardBg};padding:24px;border-radius:12px;border:1px solid rgba(255,255,255,0.1);margin-top:24px;">
        <h2 style="font-size:22px;margin:0 0 8px;"><a href="/blog/welcome/" style="color:#ffffff;text-decoration:none;">Building High-Performance Web Applications in 2026</a></h2>
        <p style="color:#9ca3af;font-size:14px;">Learn how zero-JS Astro 5 architectures deliver 100/100 Lighthouse performance.</p>
      </div>
    </main>
    ${footerHtml}
    ${cookieScript}
  </body>
</html>
`);

      // Blog Slug Page
      fs.writeFileSync(path.join(pagesDir, 'blog/[slug].astro'), `---
---
<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"/><title>Article - ${item.name}</title></head>
  <body style="margin:0;background:${item.bg};color:#ffffff;font-family:system-ui,sans-serif;">
    ${navHtml}
    <main style="max-width:700px;margin:0 auto;padding:60px 24px;">
      <h1 style="font-size:40px;">Building High-Performance Web Applications in 2026</h1>
      <p style="color:#9ca3af;font-size:16px;line-height:1.7;">A detailed technical deep-dive into zero client-side JavaScript hydration and component optimization.</p>
    </main>
    ${footerHtml}
    ${cookieScript}
  </body>
</html>
`);

      // Contact Page
      fs.writeFileSync(path.join(pagesDir, 'contact.astro'), `---
---
<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"/><title>Contact - ${item.name}</title></head>
  <body style="margin:0;background:${item.bg};color:#ffffff;font-family:system-ui,sans-serif;">
    ${navHtml}
    <main style="max-width:600px;margin:0 auto;padding:60px 24px;">
      <h1 style="font-size:44px;">Get in Touch</h1>
      <form style="display:flex;flex-direction:column;gap:16px;margin-top:24px;">
        <input type="text" placeholder="Your Name" style="padding:14px;background:${item.cardBg};border:1px solid rgba(255,255,255,0.1);color:#ffffff;border-radius:8px;"/>
        <input type="email" placeholder="Your Email" style="padding:14px;background:${item.cardBg};border:1px solid rgba(255,255,255,0.1);color:#ffffff;border-radius:8px;"/>
        <textarea placeholder="Your Message" rows="5" style="padding:14px;background:${item.cardBg};border:1px solid rgba(255,255,255,0.1);color:#ffffff;border-radius:8px;"></textarea>
        <button type="button" style="background:${item.accent};color:#ffffff;padding:14px;border:none;border-radius:8px;font-weight:700;cursor:pointer;">Send Message</button>
      </form>
    </main>
    ${footerHtml}
    ${cookieScript}
  </body>
</html>
`);

      // Legal Pages
      fs.writeFileSync(path.join(pagesDir, 'legal/privacy.astro'), `---
---
<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"/><title>Privacy Policy - ${item.name}</title></head>
  <body style="margin:0;background:${item.bg};color:#ffffff;font-family:system-ui,sans-serif;">
    ${navHtml}
    <main style="max-width:700px;margin:0 auto;padding:60px 24px;">
      <h1>Privacy Policy</h1>
      <p style="color:#9ca3af;">Official GDPR Privacy Policy outlining user data handling, cookie preferences, and security compliance for ${item.name}.</p>
    </main>
    ${footerHtml}
  </body>
</html>
`);

      fs.writeFileSync(path.join(pagesDir, 'legal/terms.astro'), `---
---
<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"/><title>Terms of Service - ${item.name}</title></head>
  <body style="margin:0;background:${item.bg};color:#ffffff;font-family:system-ui,sans-serif;">
    ${navHtml}
    <main style="max-width:700px;margin:0 auto;padding:60px 24px;">
      <h1>Terms of Service</h1>
      <p style="color:#9ca3af;">Commercial license agreement and terms of use for ${item.name}.</p>
    </main>
    ${footerHtml}
  </body>
</html>
`);

      fs.writeFileSync(path.join(pagesDir, 'legal/cookies.astro'), `---
---
<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"/><title>Cookie Consent Policy - ${item.name}</title></head>
  <body style="margin:0;background:${item.bg};color:#ffffff;font-family:system-ui,sans-serif;">
    ${navHtml}
    <main style="max-width:700px;margin:0 auto;padding:60px 24px;">
      <h1>Cookie Consent Policy</h1>
      <p style="color:#9ca3af;">This site uses Osano CookieConsent to manage visitor cookie preferences in compliance with GDPR and CCPA guidelines.</p>
    </main>
    ${footerHtml}
  </body>
</html>
`);
    } else {
      // Next.js App Router multi-page setup
      const appDir = path.join(repoPath, 'app');
      fs.mkdirSync(path.join(appDir, 'about'), { recursive: true });
      fs.mkdirSync(path.join(appDir, 'services'), { recursive: true });
      fs.mkdirSync(path.join(appDir, 'pricing'), { recursive: true });
      fs.mkdirSync(path.join(appDir, 'blog'), { recursive: true });
      fs.mkdirSync(path.join(appDir, 'contact'), { recursive: true });
      fs.mkdirSync(path.join(appDir, 'legal/privacy'), { recursive: true });
      fs.mkdirSync(path.join(appDir, 'legal/terms'), { recursive: true });
      fs.mkdirSync(path.join(appDir, 'legal/cookies'), { recursive: true });

      fs.writeFileSync(path.join(appDir, 'layout.tsx'), `export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body style={{ margin: 0, background: '${item.bg}', color: '#ffffff', fontFamily: 'system-ui, sans-serif' }}>{children}</body></html>; }\n`);
      fs.writeFileSync(path.join(appDir, 'page.tsx'), `export default function Home() { return <main style={{ padding: '80px 24px', textAlign: 'center' }}><div style={{ fontFamily: 'monospace', color: '${item.accent}', fontSize: '12px', marginBottom: '16px' }}>NEXT.JS 15 MULTI-PAGE THEME · SANITY CMS</div><h1 style={{ fontSize: '56px', margin: '0 0 16px' }}>${item.name}</h1><p style={{ fontSize: '18px', color: '#9ca3af', maxWidth: '600px', margin: '0 auto' }}>Full-stack Next.js 15 App Router boilerplate with multi-page routing & Stripe.</p></main>; }\n`);
      fs.writeFileSync(path.join(appDir, 'about/page.tsx'), `export default function About() { return <main style={{ padding: '60px 24px', maxWidth: '800px', margin: '0 auto' }}><h1>About ${item.name}</h1><p style={{ color: '#9ca3af' }}>Full-stack Next.js 15 App Router template built for scale.</p></main>; }\n`);
      fs.writeFileSync(path.join(appDir, 'pricing/page.tsx'), `export default function Pricing() { return <main style={{ padding: '60px 24px', textAlign: 'center' }}><h1>Pricing & Licensing</h1></main>; }\n`);
      fs.writeFileSync(path.join(appDir, 'blog/page.tsx'), `export default function Blog() { return <main style={{ padding: '60px 24px', maxWidth: '800px', margin: '0 auto' }}><h1>Blog Insights</h1></main>; }\n`);
      fs.writeFileSync(path.join(appDir, 'contact/page.tsx'), `export default function Contact() { return <main style={{ padding: '60px 24px', maxWidth: '600px', margin: '0 auto' }}><h1>Contact Us</h1></main>; }\n`);
    }
  });

  console.log(`Successfully generated full multi-page themes with Osano Cookie Consent & legal pages in ${targetDir}!`);
}

generateMultiPageThemes();
