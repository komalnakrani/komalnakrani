import fs from 'node:fs';

const saasNames = [
  'Apex SaaS', 'Nova Startup', 'Lumina SaaS', 'Vortex Platform', 'Orbit B2B',
  'Pulse Cloud', 'Zenith AI', 'Strata Engine', 'Hyperion Flow', 'Aether SaaS',
  'Quantum Analytics', 'Helix CRM', 'Krypton DevTools', 'Spectra Platform', 'Nexus Cloud',
  'Aura Workspace', 'Velocity SaaS', 'Synthetix AI', 'Echo Platform', 'Prism Cloud',
  'Titan B2B', 'Horizon AI', 'Cipher SaaS', 'Ignite Launch', 'Vanguard SaaS',
  'Solstice Engine', 'Mirage Platform', 'Stellar AI', 'Cascade SaaS', 'Frontier B2B',
  'Apex Prime', 'Zenith Pro', 'Strata Pro', 'Hyperion X', 'Orbit Pro'
];

const agencyNames = [
  'Lexicon Studio', 'Atelier Quiet Luxury', 'Cyber Serif Agency', 'Disruptor Brutalist',
  'Red Sun Editorial', 'Obsidian Elite', 'Crimson Craft', 'Midnight Editorial',
  'Atmospheric Agency', 'Studio Editorial', 'Terroir Creative', 'Raw Form Agency',
  'Kinetix Agency', 'Vanguard Studio', 'Monolith Design', 'Aesthetic Core',
  'Veritas Agency', 'Noir Studio', 'Minimalist Craft', 'Prism Studio',
  'Serif Line', 'Architectural Type', 'Elysian Studio', 'Nexus Creative',
  'Apex Atelier'
];

const shaderNames = [
  'WebGL Matrix Canvas', 'Neural Aurora Shader', 'Fluid Dynamics 3D', 'Raymarching Particle Grid',
  'Hyperspace Tunnel 3D', 'Glassmorphic Distortion', 'Cybernetic Particle Wave', 'Holographic Mesh',
  'Quantum Field Shader', 'Organic Waveform 3D', 'Neon Velocity Canvas', 'Celestial Sphere 3D',
  'Voxel Terrain Engine', 'Sub Surface Light Mesh', 'Dark Matter Particle Grid'
];

const docsNames = [
  'HyperDocs Engine', 'Starlight Pro', 'SDK Reference Manual', 'DevHub Portal',
  'API Spec Explorer', 'OpenSource Docs', 'TypeDocs Engine', 'Nexus Knowledge Base',
  'Terminal Docs Shell', 'Codebase Manual'
];

const commerceNames = [
  'Commerce Core', 'Forest Sage Organic Store', 'Heavyweight Brutalist Shop', 'Season 04 Store',
  'Digital Asset Mart', 'Aesthetic Goods Co', 'Cyber Storefront', 'Minimal Merchant',
  'Luxurious Goods', 'Vogue Commerce', 'Artifact Store', 'Neobrutalist Shop',
  'Echo Storefront', 'Pulse Market', 'Urban Supply Co'
];

const themes = [];

function generateThemes() {
  // 1. SaaS Category (35 Astro, 35 Next.js = 70 themes)
  saasNames.forEach((baseName, i) => {
    const slugBase = baseName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const isFeatured = i < 3;

    // Astro Edition
    themes.push({
      id: `${slugBase}-astro`,
      name: `${baseName} (Astro Edition)`,
      slug: `${slugBase}-astro`,
      tagline: `High-Converting Astro 5 Landing Page & Marketing Template for ${baseName}`,
      description: `Ultra-fast Astro 5 starter kit engineered for ${baseName}. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.`,
      framework: 'astro',
      category: 'saas',
      price: 29,
      featured: isFeatured,
      previewUrl: `/preview/${slugBase}-astro/`,
      imageBg: `linear-gradient(135deg, #101820 0%, ${i % 2 === 0 ? '#ff6711' : '#ff8200'} 160%)`,
      badge: isFeatured ? 'Astro 5 · Featured' : 'Astro 5',
      techStack: ['Astro 5', 'Tailwind CSS', 'TypeScript', 'MDX', 'Framer Motion'],
      features: [
        '100/100 Lighthouse Performance Score',
        'Dark & Light Mode Switcher',
        'Dynamic Pricing Table (Monthly/Annual)',
        'SEO & OpenGraph Automated Metadata',
        'Interactive Product Showcase UI'
      ]
    });

    // Next.js Edition
    themes.push({
      id: `${slugBase}-next`,
      name: `${baseName} (Next.js Edition)`,
      slug: `${slugBase}-next`,
      tagline: `Full-Stack Next.js 15 App Router B2B Starter for ${baseName}`,
      description: `Production Next.js 15 App Router boilerplate for ${baseName}. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.`,
      framework: 'nextjs',
      category: 'saas',
      price: 29,
      featured: isFeatured,
      previewUrl: `/preview/${slugBase}-next/`,
      imageBg: `linear-gradient(135deg, #0d0d0d 0%, ${i % 2 === 0 ? '#ff8200' : '#ff6b35'} 160%)`,
      badge: isFeatured ? 'Next.js 15 · Featured' : 'Next.js 15',
      techStack: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Stripe', 'Prisma'],
      features: [
        'Next.js 15 App Router & Server Actions',
        'Stripe Subscriptions & Checkout Flow',
        'User Dashboard & Account Portal Shell',
        'NextAuth Authentication Integration',
        'Shadcn UI & Lucide Icons Integrated'
      ]
    });
  });

  // 2. Agency & Portfolio Category (25 Astro, 25 Next.js = 50 themes)
  agencyNames.forEach((baseName, i) => {
    const slugBase = baseName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const isFeatured = i < 2;

    themes.push({
      id: `${slugBase}-astro`,
      name: `${baseName} (Astro Edition)`,
      slug: `${slugBase}-astro`,
      tagline: `Editorial Design Agency & Portfolio Theme for ${baseName}`,
      description: `Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.`,
      framework: 'astro',
      category: 'agency',
      price: 29,
      featured: isFeatured,
      previewUrl: `/preview/${slugBase}-astro/`,
      imageBg: 'linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)',
      badge: isFeatured ? 'Astro 5 · Agency' : 'Astro 5',
      techStack: ['Astro 5', 'Tailwind CSS', 'TypeScript', 'GSAP', 'Lenis Scroll'],
      features: [
        'Editorial Grid System with Orlean & Satoshi Typography',
        'Interactive Case Study Layouts',
        'Custom Smooth Scroll & Hover Effects',
        'Contact Form Integration',
        'Fully Responsive Layout'
      ]
    });

    themes.push({
      id: `${slugBase}-next`,
      name: `${baseName} (Next.js Edition)`,
      slug: `${slugBase}-next`,
      tagline: `High-Performance Next.js Portfolio & Studio Theme for ${baseName}`,
      description: `Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.`,
      framework: 'nextjs',
      category: 'agency',
      price: 29,
      featured: isFeatured,
      previewUrl: `/preview/${slugBase}-next/`,
      imageBg: 'linear-gradient(135deg, #101820 0%, #1a1a1a 100%)',
      badge: isFeatured ? 'Next.js 15 · Agency' : 'Next.js 15',
      techStack: ['Next.js 15', 'React 19', 'Tailwind CSS', 'Framer Motion'],
      features: [
        'Framer Motion Animated Transitions',
        'Dark & Light Mode Switcher',
        'Dynamic Case Study CMS Support',
        'High-density Portfolio Filter',
        'SEO Optimized Metadata'
      ]
    });
  });

  // 3. 3D & WebGL Canvas Shaders (15 Astro, 15 Next.js = 30 themes)
  shaderNames.forEach((baseName, i) => {
    const slugBase = baseName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const isFeatured = i < 2;

    themes.push({
      id: `${slugBase}-astro`,
      name: `${baseName} (Astro Canvas)`,
      slug: `${slugBase}-astro`,
      tagline: `Interactive 3D WebGL & Shader Landing Page for ${baseName}`,
      description: `High-impact 3D canvas landing template powered by Three.js and custom GLSL shaders, running on Astro 5.`,
      framework: 'astro',
      category: 'portfolio',
      price: 29,
      featured: isFeatured,
      previewUrl: `/preview/${slugBase}-astro/`,
      imageBg: 'linear-gradient(135deg, #0d0d0d 0%, #ff6711 180%)',
      badge: '3D WebGL Canvas',
      techStack: ['Astro 5', 'Three.js', 'GLSL Shaders', 'Tailwind CSS'],
      features: [
        'GPU-Accelerated WebGL Shader Background',
        'Interactive Mouse & Gyroscope Physics',
        'Custom Post-Processing Effects',
        '60 FPS Performance Guaranteed',
        'Fallback Static Canvas for Low-power Devices'
      ]
    });

    themes.push({
      id: `${slugBase}-next`,
      name: `${baseName} (Next.js R3F)`,
      slug: `${slugBase}-next`,
      tagline: `React Three Fiber 3D Experience Theme for ${baseName}`,
      description: `React Three Fiber & Drei 3D interactive web template built for Next.js 15 App Router.`,
      framework: 'nextjs',
      category: 'portfolio',
      price: 29,
      featured: isFeatured,
      previewUrl: `/preview/${slugBase}-next/`,
      imageBg: 'linear-gradient(135deg, #101820 0%, #ff8200 180%)',
      badge: 'Next.js 15 · R3F 3D',
      techStack: ['Next.js 15', 'React Three Fiber', 'Three.js', 'Tailwind CSS'],
      features: [
        'React Three Fiber (R3F) Canvas Pipeline',
        'Interactive 3D Asset Viewer & Model Loader',
        'Smooth Camera Orbit & Scroll Animations',
        'Next.js App Router Integration',
        'Ultra High-Density Visual Depth'
      ]
    });
  });

  // 4. Docs Category (10 Astro, 10 Next.js = 20 themes)
  docsNames.forEach((baseName, i) => {
    const slugBase = baseName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const isFeatured = i === 0;

    themes.push({
      id: `${slugBase}-astro`,
      name: `${baseName} (Astro Docs)`,
      slug: `${slugBase}-astro`,
      tagline: `Technical Documentation & Knowledge Base for ${baseName}`,
      description: `Fast technical documentation theme with Pagefind offline full-text search and auto-generated sidebar navigation.`,
      framework: 'astro',
      category: 'docs',
      price: 29,
      featured: isFeatured,
      previewUrl: `/preview/${slugBase}-astro/`,
      imageBg: 'linear-gradient(135deg, #111822 0%, #101820 100%)',
      badge: 'Astro 5 · Docs',
      techStack: ['Astro 5', 'Starlight', 'Pagefind Search', 'Tailwind CSS'],
      features: [
        'Offline Full-Text Search with Pagefind',
        'Multi-language Code Snippets with Copy Button',
        'Auto-generated Breadcrumbs & Sidebar',
        'Software Release Versioning Support'
      ]
    });

    themes.push({
      id: `${slugBase}-next`,
      name: `${baseName} (Nextra Docs)`,
      slug: `${slugBase}-next`,
      tagline: `Nextra & MDX Technical Documentation Shell for ${baseName}`,
      description: `Nextra & MDX documentation starter built for Next.js 15, optimized for developer APIs and SDK manuals.`,
      framework: 'nextjs',
      category: 'docs',
      price: 29,
      featured: isFeatured,
      previewUrl: `/preview/${slugBase}-next/`,
      imageBg: 'linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)',
      badge: 'Next.js 15 · Docs',
      techStack: ['Next.js 15', 'Nextra', 'MDX', 'Tailwind CSS'],
      features: [
        'Nextra MDX Documentation Engine',
        'Algolia & FlexSearch Instant Search',
        'Interactive API Explorer Modal',
        'Automatic Table of Contents'
      ]
    });
  });

  // 5. E-Commerce Category (15 Astro, 15 Next.js = 30 themes)
  commerceNames.forEach((baseName, i) => {
    const slugBase = baseName.toLowerCase().replace(/[^a-z0-9]+/g, '-');
    const isFeatured = i === 0;

    themes.push({
      id: `${slugBase}-astro`,
      name: `${baseName} (Astro Store)`,
      slug: `${slugBase}-astro`,
      tagline: `Digital Goods & E-Commerce Storefront for ${baseName}`,
      description: `Lightweight e-commerce storefront for Astro 5 with Snipcart or LemonSqueezy integration.`,
      framework: 'astro',
      category: 'ecommerce',
      price: 29,
      featured: isFeatured,
      previewUrl: `/preview/${slugBase}-astro/`,
      imageBg: 'linear-gradient(135deg, #fffdfa 0%, #fffbf6 100%)',
      badge: 'Astro 5 · Store',
      techStack: ['Astro 5', 'LemonSqueezy', 'Tailwind CSS', 'TypeScript'],
      features: [
        'LemonSqueezy & Stripe Instant Checkout',
        'Product Gallery & Lightbox Viewer',
        'Instant Cart Drawer Component',
        'Digital License Key Delivery Flow'
      ]
    });

    themes.push({
      id: `${slugBase}-next`,
      name: `${baseName} (Next.js Store)`,
      slug: `${slugBase}-next`,
      tagline: `Full-Stack E-Commerce & Digital Goods Marketplace for ${baseName}`,
      description: `Next.js 15 digital goods marketplace starter with Stripe webhooks and license delivery logic.`,
      framework: 'nextjs',
      category: 'ecommerce',
      price: 29,
      featured: isFeatured,
      previewUrl: `/preview/${slugBase}-next/`,
      imageBg: 'linear-gradient(135deg, #101820 0%, #ff8200 160%)',
      badge: 'Next.js 15 · Store',
      techStack: ['Next.js 15', 'Stripe', 'Prisma', 'Tailwind CSS'],
      features: [
        'Stripe Checkout & Customer Portal',
        'Digital License Delivery & Webhook Handler',
        'Live Product Search & Filtering',
        'Order History & Invoice Generation'
      ]
    });
  });
}

generateThemes();

const fileContent = `export interface Theme {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  framework: 'astro' | 'nextjs';
  category: 'saas' | 'agency' | 'portfolio' | 'ai-app' | 'docs' | 'ecommerce';
  price: number;
  featured: boolean;
  previewUrl: string;
  imageBg: string;
  badge?: string;
  techStack: string[];
  features: string[];
}

export const themes: Theme[] = ${JSON.stringify(themes, null, 2)};
`;

fs.writeFileSync('/Applications/ServBay/www/komalnakrani/src/data/themes.ts', fileContent);
console.log(`Updated previewUrl to /preview/[slug]/ across all ${themes.length} themes!`);
