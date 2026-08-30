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

export const docSections: DocSection[] = [
  {
    title: 'Getting Started',
    items: [
      { slug: 'getting-started', title: 'Quickstart Guide' },
      { slug: 'installation', title: 'Installation & Setup' },
      { slug: 'folder-structure', title: 'Directory Structure' },
      { slug: 'licensing', title: 'Commercial Licensing' },
    ]
  },
  {
    title: 'Astro 5 Themes',
    items: [
      { slug: 'astro-quickstart', title: 'Astro 5 Setup' },
      { slug: 'astro-styling', title: 'Tailwind & CSS Tokens' },
      { slug: 'astro-mdx', title: 'MDX Content & Blog' },
      { slug: 'astro-deployment', title: 'Deploying Astro Sites' },
    ]
  },
  {
    title: 'Next.js 15 Themes',
    items: [
      { slug: 'nextjs-quickstart', title: 'Next.js 15 App Router' },
      { slug: 'nextjs-stripe', title: 'Stripe Payments Setup' },
      { slug: 'nextjs-auth', title: 'NextAuth Authentication' },
      { slug: 'nextjs-deployment', title: 'Vercel Deployment' },
    ]
  },
  {
    title: 'AI Solutions Kits',
    items: [
      { slug: 'ai-rag-setup', title: 'Autonomous RAG Agent Setup' },
      { slug: 'ai-multi-agent', title: 'CrewAI Content Engine' },
      { slug: 'ai-local-llm', title: 'Ollama Local LLM Wrapper' },
      { slug: 'ai-voice-webrtc', title: 'Voice AI WebRTC Setup' },
    ]
  }
];

export const docArticles: Record<string, DocArticle> = {
  'getting-started': {
    slug: 'getting-started',
    category: 'Getting Started',
    title: 'Quickstart Guide',
    description: 'Learn how to download, extract, and launch your Astro 5, Next.js 15, or AI Solution Kit source code.',
    lastUpdated: 'August 2026',
    content: `
### Overview

Welcome to the official Komal Nakrani Documentation Center. Whether you purchased an individual **$29 Astro or Next.js Theme**, a **$39 Turnkey AI Solution Kit**, or the **$199 Lifetime All-Access Pass**, this guide will help you launch your project in under 5 minutes.

### 1. Download & Extract

Upon completing your checkout, your license key (\`KN-KEY-XXXX-YYYY\`) and download links are delivered instantly. Extract the \`.zip\` archive to your local working directory:

\`\`\`bash
unzip theme-package.zip
cd theme-package
\`\`\`

### 2. Install Dependencies

All templates use Node.js **v20+** or **v22+**. Run your preferred package manager to install dependencies:

\`\`\`bash
npm install
# or pnpm install / bun install
\`\`\`

### 3. Start Development Server

Run the development server to launch your project locally at \`http://localhost:4321\` (Astro) or \`http://localhost:3000\` (Next.js):

\`\`\`bash
npm run dev
\`\`\`

> **Tip**: All themes achieve **100/100 Core Web Vitals** performance out of the box with zero additional configuration required.
`
  },
  'installation': {
    slug: 'installation',
    category: 'Getting Started',
    title: 'Installation & Setup',
    description: 'Detailed instructions for Node.js environments, environment variables, and CLI tooling.',
    lastUpdated: 'August 2026',
    content: `
### Environment Requirements

Before installing your theme or AI kit, verify that your system meets the following requirements:

- **Node.js**: \`v20.0.0\` or higher (\`v22.x.x\` recommended)
- **Package Manager**: \`npm\`, \`pnpm\`, or \`bun\`
- **Git**: Installed and configured

### Setting Up Environment Variables

Copy the \`.env.example\` file to create your local \`.env\` file:

\`\`\`bash
cp .env.example .env
\`\`\`

Populate the required keys depending on your template:

\`\`\`env
# Public Site Metadata
PUBLIC_SITE_URL="https://yourdomain.com"

# Stripe Gateway (Next.js & Storefronts)
STRIPE_SECRET_KEY="sk_test_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."

# AI Solution Kits (OpenAI / Anthropic / Pinecone)
OPENAI_API_KEY="sk-proj-..."
ANTHROPIC_API_KEY="sk-ant-..."
PINECONE_API_KEY="pcsk_..."
\`\`\`
`
  },
  'folder-structure': {
    slug: 'folder-structure',
    category: 'Getting Started',
    title: 'Directory Structure',
    description: 'Understand the organized folder architecture of our Astro 5 and Next.js 15 templates.',
    lastUpdated: 'August 2026',
    content: `
### Astro 5 Theme Architecture

\`\`\`
├── src/
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Global HTML Shell & SEO Metadata
│   ├── pages/            # File-based routes & MDX collections
│   ├── styles/           # Global CSS variables & typography tokens
│   └── data/             # Type-safe TypeScript data catalogs
├── public/               # Static assets, fonts & favicon SVGs
├── astro.config.mjs      # Astro 5 configuration
└── package.json
\`\`\`

### Next.js 15 App Router Architecture

\`\`\`
├── app/                  # Next.js 15 App Router routes & layouts
├── components/           # React 19 Client & Server components
├── lib/                  # Database connections & Stripe client
├── styles/               # Global CSS & Tailwind configuration
├── prisma/               # Database schema definitions
└── package.json
\`\`\`
`
  },
  'licensing': {
    slug: 'licensing',
    category: 'Getting Started',
    title: 'Commercial Licensing',
    description: 'Learn about commercial usage rights, client deployments, and redistribution rules.',
    lastUpdated: 'August 2026',
    content: `
### Commercial Rights Summary

Both individual purchases ($29 themes / $39 AI solution kits) and the **$199 Lifetime All-Access Pass** include full commercial rights:

- ✅ **Unlimited Personal Projects**: Build as many personal sites as you wish.
- ✅ **Unlimited Client Deployments**: Build commercial sites and web apps for paying clients.
- ✅ **SaaS Application Usage**: Use the template code inside commercial SaaS products.
- ❌ **No Redistribution**: You may not re-sell or redistribute the raw template source code on public marketplaces.
`
  },
  'astro-quickstart': {
    slug: 'astro-quickstart',
    category: 'Astro 5 Themes',
    title: 'Astro 5 Setup & Configuration',
    description: 'Getting started with Astro 5 Content Layer, Server Islands, and zero-JS hydration.',
    lastUpdated: 'August 2026',
    content: `
### Astro 5 Engine Highlights

All Astro 5 themes leverage the new **Content Layer API**, **Server Islands**, and optimized asset pipeline:

\`\`\`bash
# Run local dev server
npm run dev

# Build production bundle to dist/
npm run build

# Preview production build locally
npm run preview
\`\`\`

> **Note**: Astro 5 builds produce static HTML files with zero client-side JavaScript overhead unless explicitly hydrated with \`client:visible\`.
`
  },
  'astro-styling': {
    slug: 'astro-styling',
    category: 'Astro 5 Themes',
    title: 'Tailwind CSS & Token Systems',
    description: 'Customizing brand colors, Orlean & Satoshi font stacks, and CSS design tokens.',
    lastUpdated: 'August 2026',
    content: `
### Modifying Design Tokens

Open \`src/styles/theme.css\` to customize your palette variables:

\`\`\`css
:root {
  --ark-orange: #ff6711;
  --ark-ink: #101820;
  --ark-paper: #fffdfa;
  --font-display: "Orlean", "Inter", sans-serif;
  --font-body: "AventaLight", "Inter", sans-serif;
}
\`\`\`
`
  },
  'astro-mdx': {
    slug: 'astro-mdx',
    category: 'Astro 5 Themes',
    title: 'MDX Content & Blog Integration',
    description: 'Creating blog posts, case studies, and documentation pages with MDX and frontmatter.',
    lastUpdated: 'August 2026',
    content: `
### Adding a New MDX Article

Create a new \`.mdx\` file inside \`src/content/blog/\`:

\`\`\`mdx
---
title: "Building Scale RAG Applications"
pubDate: 2026-08-30
author: "Komal Nakrani"
image: "/images/blog-01.jpg"
---

# Introduction

Your long-form markdown content goes here...
\`\`\`
`
  },
  'astro-deployment': {
    slug: 'astro-deployment',
    category: 'Astro 5 Themes',
    title: 'Deploying Astro Sites to Vercel & Netlify',
    description: 'One-click zero-config deployment to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.',
    lastUpdated: 'August 2026',
    content: `
### Vercel Deployment

Connect your Git repository to Vercel. Vercel automatically detects Astro 5 and builds the static output in under 30 seconds.

\`\`\`bash
npx vercel
\`\`\`
`
  },
  'nextjs-quickstart': {
    slug: 'nextjs-quickstart',
    category: 'Next.js 15 Themes',
    title: 'Next.js 15 App Router Setup',
    description: 'Getting started with Next.js 15, React 19 Server Components, and Server Actions.',
    lastUpdated: 'August 2026',
    content: `
### Next.js 15 App Router Architecture

All Next.js 15 templates utilize React 19 Server Components by default for optimal server-rendered performance.

\`\`\`bash
# Start Next.js dev server
npm run dev
\`\`\`
`
  },
  'nextjs-stripe': {
    slug: 'nextjs-stripe',
    category: 'Next.js 15 Themes',
    title: 'Stripe Payments & Checkout Setup',
    description: 'Configuring Stripe Webhooks, Subscription Products, and Checkout Sessions in Next.js 15.',
    lastUpdated: 'August 2026',
    content: `
### Stripe Checkout Setup

Add your Stripe keys to \`.env\`:

\`\`\`env
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
\`\`\`

The webhook handler at \`app/api/webhooks/stripe/route.ts\` automatically provisions user access upon successful payment.
`
  },
  'nextjs-auth': {
    slug: 'nextjs-auth',
    category: 'Next.js 15 Themes',
    title: 'NextAuth Authentication Setup',
    description: 'Pre-configured GitHub, Google, and Email magic link authentication.',
    lastUpdated: 'August 2026',
    content: `
### Configuring Auth Providers

Edit \`app/api/auth/[...nextauth]/route.ts\` to toggle providers:

\`\`\`ts
import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};
\`\`\`
`
  },
  'nextjs-deployment': {
    slug: 'nextjs-deployment',
    category: 'Next.js 15 Themes',
    title: 'Vercel Deployment',
    description: 'Deploying Next.js 15 App Router with zero cold starts.',
    lastUpdated: 'August 2026',
    content: `
### Deploying Next.js to Vercel

Push your repository to GitHub and import it into Vercel. Set your environment variables in the Vercel Dashboard for instant live deployment.
`
  },
  'ai-rag-setup': {
    slug: 'ai-rag-setup',
    category: 'AI Solutions Kits',
    title: 'Autonomous RAG Agent Setup ($39 Kit)',
    description: 'Complete architecture guide for document vectorization, hybrid search, and chat widget embedding.',
    lastUpdated: 'August 2026',
    content: `
### Autonomous RAG Agent Architecture

This solution kit ($39) ingests PDFs, Notion export files, and OpenAPI documentation into a vector database (Pinecone or Qdrant), querying them via Claude 3.5 Sonnet or OpenAI GPT-4o with hybrid BM25 + vector reranking.

\`\`\`bash
# 1. Install RAG dependencies
npm install @pinecone-database/pinecone @langchain/openai @langchain/community

# 2. Ingest your docs
npx tsx scripts/ingest-docs.ts
\`\`\`
`
  },
  'ai-multi-agent': {
    slug: 'ai-multi-agent',
    category: 'AI Solutions Kits',
    title: 'CrewAI Content Engine Setup ($39 Kit)',
    description: 'Setting up multi-agent researcher, writer, and SEO auditor workflows.',
    lastUpdated: 'August 2026',
    content: `
### CrewAI Multi-Agent Workflow

The Multi-Agent Content Kit uses CrewAI to orchestrate autonomous web research (Tavily API), long-form drafting, and image creation (Flux API).

\`\`\`python
# Run autonomous content crew
python run_crew.py --topic "Astro 5 vs Next.js 15 Architecture"
\`\`\`
`
  },
  'ai-local-llm': {
    slug: 'ai-local-llm',
    category: 'AI Solutions Kits',
    title: 'Ollama Local LLM Wrapper Setup ($39 Kit)',
    description: 'Building private, offline AI desktop applications with Tauri, SQLite VSS, and Ollama.',
    lastUpdated: 'August 2026',
    content: `
### 100% Private Local LLM Stack

Run DeepSeek R1, Llama 3.3, or Qwen 2.5 locally on your Apple Silicon Mac or GPU PC with zero cloud API costs.

\`\`\`bash
# Pull local LLM model
ollama pull llama3.3

# Launch local desktop app
npm run tauri dev
\`\`\`
`
  },
  'ai-voice-webrtc': {
    slug: 'ai-voice-webrtc',
    category: 'AI Solutions Kits',
    title: 'Voice AI WebRTC Setup ($39 Kit)',
    description: 'Configuring sub-400ms voice discovery agents with LiveKit, Deepgram STT, and ElevenLabs.',
    lastUpdated: 'August 2026',
    content: `
### Real-Time Voice Agent Pipeline

Connect LiveKit WebRTC with OpenAI Realtime API or Deepgram + ElevenLabs for conversational voice agents.

\`\`\`bash
# Start LiveKit Voice Server
npm run start:voice
\`\`\`
`
  }
};
