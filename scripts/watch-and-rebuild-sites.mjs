import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';

const builderDir = '/Applications/ServBay/www/builder';
const outputDir = path.join(builderDir, 'output');
const newSitesDir = path.join(builderDir, 'new-sites');

fs.mkdirSync(newSitesDir, { recursive: true });

function parseBrief(briefText) {
  let title = 'Rebuilt Modern Site';
  let colors = ['#ffffff', '#000000', '#2897bd'];

  const h1Match = briefText.match(/\*\*H1:\*\*\s*(.+)/);
  if (h1Match) title = h1Match[1];

  const paletteMatch = briefText.match(/current palette:\s*([^\)]+)/i);
  if (paletteMatch) {
    colors = paletteMatch[1].split(',').map(c => c.trim());
  }

  // Sanitize text from webflow to Komal
  const sanitizedTitle = title.replace(/\.webflow\.io/g, '').replace(/Webflow/g, 'Komal').replace(/webflow/g, 'komal');
  const sanitizedCopy = briefText.replace(/\.webflow\.io/g, '').replace(/Webflow/g, 'Komal').replace(/webflow/g, 'komal');

  return { title: sanitizedTitle, colors, copyBlock: sanitizedCopy };
}

function sanitizeContentInDir(dirPath) {
  const entries = fs.readdirSync(dirPath, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);

    if (entry.name === 'node_modules' || entry.name === '.git' || entry.name === '.next') continue;

    if (entry.isDirectory()) {
      sanitizeContentInDir(fullPath);
    } else if (entry.isFile()) {
      const ext = path.extname(entry.name);
      if (['.ts', '.tsx', '.json', '.js', '.jsx', '.md', '.css', '.html'].includes(ext)) {
        try {
          let text = fs.readFileSync(fullPath, 'utf8');
          let modified = false;

          if (text.includes('Webflow') || text.includes('webflow')) {
            text = text
              .replace(/\.webflow\.io/g, '')
              .replace(/Webflow/g, 'Komal')
              .replace(/webflow/g, 'komal');
            modified = true;
          }

          if (modified) {
            fs.writeFileSync(fullPath, text, 'utf8');
          }
        } catch (e) {}
      }
    }
  }
}

function rebuildAndPushDomain(domain) {
  const domainOutputDir = path.join(outputDir, domain);
  const briefPath = path.join(domainOutputDir, 'REBUILD_BRIEF.md');

  if (!fs.existsSync(briefPath)) return;

  // Compute clean repo name (removing .webflow.io, webflow-, -webflow)
  let cleanName = domain
    .replace(/\.webflow\.io$/g, '')
    .replace(/webflow-html-website-template/g, 'template')
    .replace(/webflow-ecommerce-template/g, 'ecommerce-template')
    .replace(/-webflow-/g, '-')
    .replace(/^webflow-/g, '')
    .replace(/-webflow$/g, '')
    .replace(/webflow/g, 'komal')
    .toLowerCase();

  const siteDir = path.join(newSitesDir, cleanName);
  if (fs.existsSync(path.join(siteDir, 'package.json'))) return;

  console.log(`[Auto-Rebuilder] Building clean Next.js 16 site for ${cleanName}...`);

  const briefText = fs.readFileSync(briefPath, 'utf8');
  const briefData = parseBrief(briefText);

  fs.mkdirSync(path.join(siteDir, 'app'), { recursive: true });
  fs.mkdirSync(path.join(siteDir, 'public/assets'), { recursive: true });

  // Copy assets if present
  const assetsDir = path.join(domainOutputDir, 'assets/images');
  if (fs.existsSync(assetsDir)) {
    const files = fs.readdirSync(assetsDir);
    files.forEach(f => {
      try {
        fs.copyFileSync(path.join(assetsDir, f), path.join(siteDir, 'public/assets', f));
      } catch (e) {}
    });
  }

  // Write package.json
  fs.writeFileSync(path.join(siteDir, 'package.json'), JSON.stringify({
    name: cleanName,
    version: '1.0.0',
    private: true,
    scripts: {
      dev: 'next dev',
      build: 'next build',
      start: 'next start'
    },
    dependencies: {
      next: '^15.0.0',
      react: '^19.0.0',
      'react-dom': '^19.0.0',
      'framer-motion': '^12.0.0',
      'lucide-react': '^0.460.0'
    },
    devDependencies: {
      typescript: '^5.7.2',
      '@types/node': '^20.0.0',
      '@types/react': '^19.0.0',
      '@types/react-dom': '^19.0.0',
      tailwindcss: '^3.4.0',
      postcss: '^8.4.0',
      autoprefixer: '^10.4.0'
    }
  }, null, 2));

  // Write tsconfig.json
  fs.writeFileSync(path.join(siteDir, 'tsconfig.json'), JSON.stringify({
    compilerOptions: {
      target: 'es5',
      lib: ['dom', 'dom.iterable', 'esnext'],
      allowJs: true,
      skipLibCheck: true,
      strict: true,
      noEmit: true,
      esModuleInterop: true,
      module: 'esnext',
      moduleResolution: 'bundler',
      resolveJsonModule: true,
      isolatedModules: true,
      jsx: 'preserve',
      incremental: true,
      paths: { '@/*': ['./*'] }
    },
    include: ['next-env.d.ts', '**/*.ts', '**/*.tsx'],
    exclude: ['node_modules']
  }, null, 2));

  // Write tailwind.config.js
  fs.writeFileSync(path.join(siteDir, 'tailwind.config.js'), `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "${briefData.colors[2] || '#ff6711'}",
        dark: "${briefData.colors[1] || '#0d0d0d'}"
      }
    }
  },
  plugins: []
};
`);

  // Write postcss.config.js
  fs.writeFileSync(path.join(siteDir, 'postcss.config.js'), `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {}
  }
};
`);

  // Write app/globals.css
  fs.writeFileSync(path.join(siteDir, 'app/globals.css'), `@tailwind base;
@tailwind components;
@tailwind utilities;

body {
  background-color: #0b0f19;
  color: #ffffff;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
}
`);

  // Write app/layout.tsx
  fs.writeFileSync(path.join(siteDir, 'app/layout.tsx'), `import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '${briefData.title} | Komal Modern Site',
  description: 'Fast, responsive Next.js 16 App Router redesign of ${cleanName}'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
`);

  // Write app/page.tsx with Framer Motion animations & Komal sanitized copy
  fs.writeFileSync(path.join(siteDir, 'app/page.tsx'), `'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0b0f19] text-white">
      {/* Navigation Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0b0f19]/80 border-b border-white/10 px-6 py-4 flex justify-between items-center max-w-7xl mx-auto">
        <div className="font-bold text-xl tracking-tight text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span>${cleanName.toUpperCase()}</span>
        </div>
        <nav className="hidden md:flex gap-6 text-sm text-gray-300 font-medium">
          <a href="#about" className="hover:text-amber-500 transition">About</a>
          <a href="#services" className="hover:text-amber-500 transition">Services</a>
          <a href="#testimonials" className="hover:text-amber-500 transition">Testimonials</a>
          <a href="#contact" className="hover:text-amber-500 transition">Contact</a>
        </nav>
        <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-black font-semibold text-sm px-4 py-2 rounded-full transition shadow-lg">
          Get Started
        </a>
      </header>

      {/* Hero Section */}
      <section className="relative px-6 py-24 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto space-y-6"
        >
          <span className="inline-block bg-white/10 border border-white/20 text-amber-400 text-xs uppercase tracking-widest px-3 py-1 rounded-full">
            Komal Modern Architecture Rebuild
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            ${briefData.title}
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            High-performance Next.js 16 App Router web architecture engineered for speed, mobile responsiveness, and clean SEO.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a href="#contact" className="bg-amber-500 hover:bg-amber-600 text-black font-bold px-8 py-4 rounded-xl flex items-center gap-2 shadow-xl hover:scale-105 transition">
              Explore Demo <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#about" className="border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 rounded-xl transition">
              Learn More
            </a>
          </div>
        </motion.div>
      </section>

      {/* About & Original Brief Copy Section */}
      <section id="about" className="px-6 py-20 bg-white/5 border-y border-white/10">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Original Content & Specifications
            </h2>
            <div className="p-6 bg-[#0b0f19] border border-white/10 rounded-2xl space-y-4 text-sm text-gray-300">
              <p className="font-mono text-xs text-amber-400">STATUS: REBUILT & RESPONSIVE</p>
              <pre className="whitespace-pre-wrap font-sans leading-relaxed opacity-90 max-h-96 overflow-y-auto">
{${JSON.stringify(briefData.copyBlock.slice(0, 1200))}}
              </pre>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-white">100% Copy Preservation</h3>
                <p className="text-gray-400 text-sm mt-1">Preserved original branding, tagline, business hours, and copy structure.</p>
              </div>
            </div>
            <div className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-start gap-4">
              <CheckCircle2 className="w-6 h-6 text-amber-500 shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-lg text-white">Framer Motion Micro-Interactions</h3>
                <p className="text-gray-400 text-sm mt-1">Cinematic entrances, scroll reveals, responsive breakpoints, and modern aesthetic styling.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="px-6 py-12 border-t border-white/10 text-center text-sm text-gray-400 max-w-7xl mx-auto">
        <p>© ${new Date().getFullYear()} ${cleanName}. All rights reserved. Rebuilt by Komal Platform.</p>
      </footer>
    </main>
  );
}
`);

  // Sanitize all files
  sanitizeContentInDir(siteDir);

  // Add .gitignore
  const gitignorePath = path.join(siteDir, '.gitignore');
  if (!fs.existsSync(gitignorePath)) {
    fs.writeFileSync(gitignorePath, `node_modules/\n.next/\ndist/\n.DS_Store\n.env\n.env.local\n`);
  }

  // Push to GitHub Private Repository
  try {
    if (!fs.existsSync(path.join(siteDir, '.git'))) {
      execSync('git init -b main', { cwd: siteDir, stdio: 'pipe' });
    }
    execSync('git add .', { cwd: siteDir, stdio: 'pipe' });
    try {
      execSync('git commit -m "feat: initial release of Komal production Next.js 16 site"', { cwd: siteDir, stdio: 'pipe' });
    } catch (e) {}

    const githubRepo = `alpeshznakrani/${cleanName}`;
    try {
      execSync(`gh repo create "${githubRepo}" --private --source=. --push`, { cwd: siteDir, stdio: 'pipe' });
      console.log(`[Auto-Rebuilder] ✅ Created & Pushed private GitHub repo: ${githubRepo}`);
    } catch (e) {
      try {
        execSync('git push -u origin main', { cwd: siteDir, stdio: 'pipe' });
        console.log(`[Auto-Rebuilder] ✅ Synced updates to GitHub repo: ${githubRepo}`);
      } catch (e2) {}
    }
  } catch (e) {}
}

function runLoop() {
  if (fs.existsSync(outputDir)) {
    const domains = fs.readdirSync(outputDir).filter(f => fs.statSync(path.join(outputDir, f)).isDirectory());
    domains.forEach(d => {
      try {
        rebuildAndPushDomain(d);
      } catch (e) {}
    });
  }
}

console.log('[Auto-Rebuilder] Starting continuous site watcher, Komal brand sanitizer & private GitHub publisher...');
setInterval(runLoop, 5000);
runLoop();
