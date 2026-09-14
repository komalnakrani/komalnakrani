export interface DocSection {
  title: string;
  items: { slug: string; title: string }[];
}

export interface DocArticle {
  slug: string;
  category: string;
  title: string;
  description: string;
  lastUpdated: string;
  content: string;
}

/**
 * Every theme in the catalog is an Astro project that builds to static files.
 * These docs describe that stack and nothing else — no server runtime, no
 * payments layer, no auth provider, because no theme ships one.
 */
export const docSections: DocSection[] = [
  {
    title: 'Getting Started',
    items: [
      { slug: 'getting-started', title: 'Quickstart Guide' },
      { slug: 'installation', title: 'Installation & Setup' },
      { slug: 'folder-structure', title: 'Project Structure' },
      { slug: 'licensing', title: 'Commercial Licensing' },
    ]
  },
  {
    title: 'Working With Your Theme',
    items: [
      { slug: 'astro-config', title: 'Astro Configuration' },
      { slug: 'astro-pages', title: 'Pages & Routing' },
      { slug: 'astro-styling', title: 'Styling & Design Tokens' },
      { slug: 'astro-content', title: 'Content Collections' },
      { slug: 'astro-rss', title: 'RSS Feeds' },
    ]
  },
  {
    title: 'Going Live',
    items: [
      { slug: 'deploy-cloudflare', title: 'Deploy to Cloudflare Pages' },
      { slug: 'deploy-static', title: 'Other Static Hosts' },
      { slug: 'custom-domains', title: 'Custom Domains' },
    ]
  }
];

export const docArticles: Record<string, DocArticle> = {
  'getting-started': {
    slug: 'getting-started',
    category: 'Getting Started',
    title: 'Quickstart Guide',
    description: 'Clone your theme and run it locally in about two minutes.',
    lastUpdated: 'September 2026',
    content: `
### Running your theme

Your purchase grants read access to the theme's private GitHub repository —
the invitation goes to your order email. Accept it, then:

1. **Clone the repository**:
\`\`\`bash
git clone git@github.com:komalnakrani/your-theme.git
cd your-theme/
\`\`\`

2. **Install dependencies**:
\`\`\`bash
npm install
\`\`\`

3. **Start the dev server**:
\`\`\`bash
npm run dev
\`\`\`

Astro serves the site at \`http://localhost:4321\`. Edits to any file under \`src/\` reload in the browser immediately.

### Building for production

\`\`\`bash
npm run build
\`\`\`

This writes a complete static site to \`dist/\`. There is no server to run — \`dist/\` is plain HTML, CSS and assets, ready for any static host.

To check the production build locally before you deploy it:

\`\`\`bash
npm run preview
\`\`\`

> Every theme ships zero JavaScript by default. If a page has no interactive component, the browser downloads no JS at all.

### Getting updates

Because your theme is a repository rather than a one-off download, updates arrive with a pull:

\`\`\`bash
git pull origin main
\`\`\`

Keep your own work on a branch so that stays painless:

\`\`\`bash
git checkout -b my-site
\`\`\`
`
  },

  'installation': {
    slug: 'installation',
    category: 'Getting Started',
    title: 'Installation & Setup',
    description: 'Requirements, first-run configuration and the handful of values worth changing straight away.',
    lastUpdated: 'September 2026',
    content: `
### Requirements

- **Node.js 20 or newer** — check with \`node -v\`
- **npm**, **pnpm** or **yarn** — the examples use npm
- Any editor; the official Astro VS Code extension adds syntax highlighting for \`.astro\` files

### First run

\`\`\`bash
npm install
npm run dev
\`\`\`

### Change these first

Before you get far into customising, set the values that appear across the whole site:

1. **Site URL** — in \`astro.config.mjs\`, set \`site\` to your real domain. Canonical URLs, the sitemap and the RSS feed are all derived from it.
2. **Site metadata** — title, description and social image defaults live in the shared layout under \`src/layouts/\`.
3. **Favicon** — replace the files in \`public/\`.

\`\`\`js
// astro.config.mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://your-domain.com',
});
\`\`\`

> Leaving \`site\` at its placeholder value is the single most common setup mistake. It produces a sitemap and feed full of the wrong domain.
`
  },

  'folder-structure': {
    slug: 'folder-structure',
    category: 'Getting Started',
    title: 'Project Structure',
    description: 'Where everything lives in an Astro theme, and which directories are special.',
    lastUpdated: 'September 2026',
    content: `
### Directory layout

\`\`\`text
your-theme/
├── public/               # Copied to the build as-is (favicon, fonts, images)
├── src/
│   ├── pages/            # File-based routes — every file here becomes a URL
│   ├── layouts/          # Page shells wrapped around route content
│   ├── components/       # Reusable .astro components
│   ├── content/          # Markdown and MDX collections
│   ├── styles/           # Global stylesheets and design tokens
│   └── content.config.ts # Collection schemas
├── astro.config.mjs      # Astro config and integrations
└── package.json
\`\`\`

### The two directories that are special

**\`src/pages/\`** drives routing. There is no route config — the file path *is* the URL:

| File | URL |
| --- | --- |
| \`src/pages/index.astro\` | \`/\` |
| \`src/pages/about.astro\` | \`/about/\` |
| \`src/pages/work/[slug].astro\` | \`/work/anything/\` |

**\`public/\`** is copied to the output untouched. A file at \`public/logo.svg\` is served at \`/logo.svg\`. Put things here only when they must keep their exact filename — everything imported through \`src/\` gets hashed and optimised instead.
`
  },

  'licensing': {
    slug: 'licensing',
    category: 'Getting Started',
    title: 'Commercial Licensing',
    description: 'What you may and may not do with the source code you bought.',
    lastUpdated: 'September 2026',
    content: `
### What your licence covers

Both an individual theme purchase and the All-Access Pass grant full commercial rights:

- Build unlimited websites for **yourself or your own business**
- Build unlimited websites for **paying clients**
- Modify the source however you like — there is no obfuscated or build-only code
- Keep using and updating what you bought, permanently

### What it does not cover

- **Reselling or redistributing the theme files** as a template, kit or starter
- Claiming authorship of the original theme source
- Including the raw theme in a product whose value *is* the template itself

The line is straightforward: sell the site you built, not the thing you built it from.

See the [full licence agreement](/legal/license/) for the binding terms.
`
  },

  'astro-config': {
    slug: 'astro-config',
    category: 'Working With Your Theme',
    title: 'Astro Configuration',
    description: 'The config file, the integrations your theme ships with, and what each one does.',
    lastUpdated: 'September 2026',
    content: `
### astro.config.mjs

\`\`\`js
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://your-domain.com',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  integrations: [mdx(), sitemap()],
});
\`\`\`

### What each option does

- **\`site\`** — your production URL. Required for the sitemap, RSS feed and canonical tags.
- **\`trailingSlash\`** — how strictly URLs are matched. \`'ignore'\` accepts both forms, which is the most forgiving across hosts.
- **\`build.format\`** — \`'directory'\` emits \`about/index.html\` rather than \`about.html\`, so URLs end in a slash.

### Integrations

- **\`@astrojs/mdx\`** — lets content files mix Markdown with components
- **\`@astrojs/sitemap\`** — generates \`sitemap-index.xml\` at build time

Add an integration with the CLI, which installs it and wires up the config in one step:

\`\`\`bash
npx astro add sitemap
\`\`\`
`
  },

  'astro-pages': {
    slug: 'astro-pages',
    category: 'Working With Your Theme',
    title: 'Pages & Routing',
    description: 'Adding pages, building dynamic routes, and sharing a layout across them.',
    lastUpdated: 'September 2026',
    content: `
### Adding a page

Create a file in \`src/pages/\`. An \`.astro\` file has frontmatter above the fence and markup below it:

\`\`\`astro
---
import Layout from '../layouts/Layout.astro';

const heading = 'About the studio';
---
<Layout title="About">
  <h1>{heading}</h1>
  <p>Anything here is plain HTML.</p>
</Layout>
\`\`\`

### Dynamic routes

A filename in brackets becomes a parameter. Static builds need to know every URL up front, so the file exports \`getStaticPaths()\`:

\`\`\`astro
---
import { getCollection } from 'astro:content';

export async function getStaticPaths() {
  const posts = await getCollection('journal');
  return posts.map((post) => ({
    params: { slug: post.id },
    props: { post },
  }));
}

const { post } = Astro.props;
const { Content } = await post.render();
---
<article>
  <h1>{post.data.title}</h1>
  <Content />
</article>
\`\`\`

Anything returned in \`props\` is available on \`Astro.props\`, which avoids re-fetching the entry inside the template.
`
  },

  'astro-styling': {
    slug: 'astro-styling',
    category: 'Working With Your Theme',
    title: 'Styling & Design Tokens',
    description: 'Scoped styles, global stylesheets, and changing a theme\'s palette in one place.',
    lastUpdated: 'September 2026',
    content: `
### Scoped by default

A \`<style>\` block inside a \`.astro\` file applies only to that component. Astro scopes it automatically — no naming convention required, and no chance of leaking:

\`\`\`astro
<div class="card">
  <h2>Scoped</h2>
</div>

<style>
  /* .card here cannot affect any other component */
  .card { border: 1px solid var(--rule); border-radius: 20px; }
</style>
\`\`\`

To deliberately style something globally, use \`is:global\`:

\`\`\`astro
<style is:global>
  body { margin: 0; }
</style>
\`\`\`

### Design tokens

Every theme keeps its palette, type and spacing as custom properties in one stylesheet under \`src/styles/\`. Changing the look of the whole site means editing those values, not hunting through components:

\`\`\`css
:root {
  --paper: #FBFAF6;
  --ink-900: #14140F;
  --accent: #9BA88C;

  --r-pill: 64px;
  --font-body: 'Questrial', system-ui, sans-serif;
}
\`\`\`

> Start with the tokens. Most rebrands need nothing else.
`
  },

  'astro-content': {
    slug: 'astro-content',
    category: 'Working With Your Theme',
    title: 'Content Collections',
    description: 'How journal posts and other Markdown content are defined, validated and queried.',
    lastUpdated: 'September 2026',
    content: `
### Defining a collection

Collections give your Markdown a schema, so a missing or misspelled frontmatter field fails the build instead of the page:

\`\`\`ts
// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const journal = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/journal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { journal };
\`\`\`

### Writing an entry

\`\`\`markdown
---
title: "Notes from the four o'clock shift"
description: "Working notes on topology and look development."
publishDate: 2026-02-14
---

Body copy starts here.
\`\`\`

### Querying entries

\`\`\`astro
---
import { getCollection } from 'astro:content';

const posts = (await getCollection('journal', ({ data }) => !data.draft))
  .sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf());
---
<ul>
  {posts.map((post) => (
    <li>
      <a href={\`/journal/\${post.id}/\`}>{post.data.title}</a>
    </li>
  ))}
</ul>
\`\`\`

The filter callback runs at build time, so drafts never reach the output at all.
`
  },

  'astro-rss': {
    slug: 'astro-rss',
    category: 'Working With Your Theme',
    title: 'RSS Feeds',
    description: 'Every theme ships a working feed — here is how it is wired and how to change it.',
    lastUpdated: 'September 2026',
    content: `
### The feed endpoint

The feed is a route like any other. It lives at \`src/pages/rss.xml.js\` and is served at \`/rss.xml\`:

\`\`\`js
import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('journal', ({ data }) => !data.draft);

  return rss({
    title: 'Journal',
    description: 'Notes from the studio.',
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.publishDate,
      link: \`/journal/\${post.id}/\`,
    })),
  });
}
\`\`\`

### Linking it

Add the feed to your \`<head>\` so readers and browsers can discover it:

\`\`\`html
<link rel="alternate" type="application/rss+xml" title="Journal" href="/rss.xml" />
\`\`\`

> \`context.site\` comes from \`site\` in \`astro.config.mjs\`. If that is unset, item links resolve relative and most readers will reject the feed.
`
  },

  'deploy-cloudflare': {
    slug: 'deploy-cloudflare',
    category: 'Going Live',
    title: 'Deploy to Cloudflare Pages',
    description: 'Connect a repository and ship the static build — the setup every theme in this catalog runs on.',
    lastUpdated: 'September 2026',
    content: `
Every live preview in this catalog is served from Cloudflare Pages, so this path is the best tested.

### From a Git repository

1. In the Cloudflare dashboard, open **Workers & Pages → Create → Pages → Connect to Git**
2. Pick your repository
3. Set the build settings:

| Setting | Value |
| --- | --- |
| Framework preset | Astro |
| Build command | \`npm run build\` |
| Build output directory | \`dist\` |

4. **Save and Deploy**

Every push to your production branch rebuilds and redeploys. Pull requests get their own preview URL.

### From your machine

\`\`\`bash
npm run build
npx wrangler pages deploy dist
\`\`\`

### Node version

If the build fails on a Node version mismatch, pin it with an environment variable in the project settings:

\`\`\`text
NODE_VERSION = 20
\`\`\`
`
  },

  'deploy-static': {
    slug: 'deploy-static',
    category: 'Going Live',
    title: 'Other Static Hosts',
    description: 'Netlify, Vercel, GitHub Pages or any bucket that serves files.',
    lastUpdated: 'September 2026',
    content: `
\`npm run build\` produces a directory of static files. Anything that can serve a folder can host a theme.

### The settings every host asks for

| Setting | Value |
| --- | --- |
| Build command | \`npm run build\` |
| Output directory | \`dist\` |
| Node version | 20 or newer |

### Netlify

Either connect the repository with the settings above, or commit a \`netlify.toml\`:

\`\`\`toml
[build]
  command = "npm run build"
  publish = "dist"
\`\`\`

### Vercel

Import the repository; Vercel detects Astro and fills in the build command and output directory. No adapter is needed for a static build.

### GitHub Pages

Serve \`dist/\` from a workflow. If the site lives under a subpath, set both values in \`astro.config.mjs\`:

\`\`\`js
export default defineConfig({
  site: 'https://your-name.github.io',
  base: '/your-repo',
});
\`\`\`

> Forgetting \`base\` on a subpath deploy is what breaks every stylesheet and link at once.
`
  },

  'custom-domains': {
    slug: 'custom-domains',
    category: 'Going Live',
    title: 'Custom Domains',
    description: 'Point your own domain at a deployed theme and keep canonical URLs correct.',
    lastUpdated: 'September 2026',
    content: `
### 1. Set the site URL first

Before pointing DNS, update \`astro.config.mjs\` and redeploy. Canonical tags, the sitemap and the RSS feed are generated from this value:

\`\`\`js
export default defineConfig({
  site: 'https://your-domain.com',
});
\`\`\`

### 2. Add the domain to your host

On Cloudflare Pages: **your project → Custom domains → Set up a domain**. The dashboard tells you the record to create.

### 3. Create the DNS record

| Type | Name | Target |
| --- | --- | --- |
| CNAME | \`www\` | \`your-project.pages.dev\` |
| CNAME | \`store\` | \`your-project.pages.dev\` |

A subdomain takes a **CNAME** pointing at the deployment host. For an apex domain (\`example.com\` with no subdomain), use your provider's flattening feature — Cloudflare calls it CNAME flattening — or the ALIAS/ANAME record type if they offer one.

### 4. Wait, then verify

DNS changes propagate in minutes to a few hours. Check whether a record is live before assuming the deploy is broken:

\`\`\`bash
dig +short store.your-domain.com
\`\`\`

An empty response means the record has not propagated yet. Certificates are issued automatically once it has.
`
  },
};
