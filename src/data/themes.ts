export interface Theme {
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

export const themes: Theme[] = [
  {
    "id": "apex-saas-astro",
    "name": "Apex SaaS",
    "slug": "apex-saas-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Apex SaaS",
    "description": "Ultra-fast Astro 5 starter kit engineered for Apex SaaS. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": true,
    "previewUrl": "/preview/apex-saas-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff6711 160%)",
    "badge": "Featured",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "apex-saas-next",
    "name": "Apex SaaS",
    "slug": "apex-saas-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Apex SaaS",
    "description": "Production Next.js 15 App Router boilerplate for Apex SaaS. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": true,
    "previewUrl": "/preview/apex-saas-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff8200 160%)",
    "badge": "Featured",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "nova-startup-astro",
    "name": "Nova Startup",
    "slug": "nova-startup-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Nova Startup",
    "description": "Ultra-fast Astro 5 starter kit engineered for Nova Startup. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": true,
    "previewUrl": "/preview/nova-startup-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Featured",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "nova-startup-next",
    "name": "Nova Startup",
    "slug": "nova-startup-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Nova Startup",
    "description": "Production Next.js 15 App Router boilerplate for Nova Startup. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": true,
    "previewUrl": "/preview/nova-startup-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6b35 160%)",
    "badge": "Featured",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "lumina-saas-astro",
    "name": "Lumina SaaS",
    "slug": "lumina-saas-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Lumina SaaS",
    "description": "Ultra-fast Astro 5 starter kit engineered for Lumina SaaS. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": true,
    "previewUrl": "/preview/lumina-saas-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff6711 160%)",
    "badge": "Featured",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "lumina-saas-next",
    "name": "Lumina SaaS",
    "slug": "lumina-saas-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Lumina SaaS",
    "description": "Production Next.js 15 App Router boilerplate for Lumina SaaS. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": true,
    "previewUrl": "/preview/lumina-saas-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff8200 160%)",
    "badge": "Featured",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "vortex-platform-astro",
    "name": "Vortex Platform",
    "slug": "vortex-platform-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Vortex Platform",
    "description": "Ultra-fast Astro 5 starter kit engineered for Vortex Platform. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/vortex-platform-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "vortex-platform-next",
    "name": "Vortex Platform",
    "slug": "vortex-platform-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Vortex Platform",
    "description": "Production Next.js 15 App Router boilerplate for Vortex Platform. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/vortex-platform-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6b35 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "orbit-b2b-astro",
    "name": "Orbit B2B",
    "slug": "orbit-b2b-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Orbit B2B",
    "description": "Ultra-fast Astro 5 starter kit engineered for Orbit B2B. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/orbit-b2b-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff6711 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "orbit-b2b-next",
    "name": "Orbit B2B",
    "slug": "orbit-b2b-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Orbit B2B",
    "description": "Production Next.js 15 App Router boilerplate for Orbit B2B. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/orbit-b2b-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff8200 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "pulse-cloud-astro",
    "name": "Pulse Cloud",
    "slug": "pulse-cloud-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Pulse Cloud",
    "description": "Ultra-fast Astro 5 starter kit engineered for Pulse Cloud. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/pulse-cloud-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "pulse-cloud-next",
    "name": "Pulse Cloud",
    "slug": "pulse-cloud-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Pulse Cloud",
    "description": "Production Next.js 15 App Router boilerplate for Pulse Cloud. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/pulse-cloud-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6b35 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "zenith-ai-astro",
    "name": "Zenith AI",
    "slug": "zenith-ai-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Zenith AI",
    "description": "Ultra-fast Astro 5 starter kit engineered for Zenith AI. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/zenith-ai-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff6711 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "zenith-ai-next",
    "name": "Zenith AI",
    "slug": "zenith-ai-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Zenith AI",
    "description": "Production Next.js 15 App Router boilerplate for Zenith AI. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/zenith-ai-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff8200 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "strata-engine-astro",
    "name": "Strata Engine",
    "slug": "strata-engine-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Strata Engine",
    "description": "Ultra-fast Astro 5 starter kit engineered for Strata Engine. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/strata-engine-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "strata-engine-next",
    "name": "Strata Engine",
    "slug": "strata-engine-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Strata Engine",
    "description": "Production Next.js 15 App Router boilerplate for Strata Engine. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/strata-engine-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6b35 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "hyperion-flow-astro",
    "name": "Hyperion Flow",
    "slug": "hyperion-flow-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Hyperion Flow",
    "description": "Ultra-fast Astro 5 starter kit engineered for Hyperion Flow. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/hyperion-flow-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff6711 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "hyperion-flow-next",
    "name": "Hyperion Flow",
    "slug": "hyperion-flow-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Hyperion Flow",
    "description": "Production Next.js 15 App Router boilerplate for Hyperion Flow. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/hyperion-flow-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff8200 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "aether-saas-astro",
    "name": "Aether SaaS",
    "slug": "aether-saas-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Aether SaaS",
    "description": "Ultra-fast Astro 5 starter kit engineered for Aether SaaS. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/aether-saas-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "aether-saas-next",
    "name": "Aether SaaS",
    "slug": "aether-saas-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Aether SaaS",
    "description": "Production Next.js 15 App Router boilerplate for Aether SaaS. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/aether-saas-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6b35 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "quantum-analytics-astro",
    "name": "Quantum Analytics",
    "slug": "quantum-analytics-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Quantum Analytics",
    "description": "Ultra-fast Astro 5 starter kit engineered for Quantum Analytics. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/quantum-analytics-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff6711 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "quantum-analytics-next",
    "name": "Quantum Analytics",
    "slug": "quantum-analytics-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Quantum Analytics",
    "description": "Production Next.js 15 App Router boilerplate for Quantum Analytics. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/quantum-analytics-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff8200 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "helix-crm-astro",
    "name": "Helix CRM",
    "slug": "helix-crm-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Helix CRM",
    "description": "Ultra-fast Astro 5 starter kit engineered for Helix CRM. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/helix-crm-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "helix-crm-next",
    "name": "Helix CRM",
    "slug": "helix-crm-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Helix CRM",
    "description": "Production Next.js 15 App Router boilerplate for Helix CRM. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/helix-crm-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6b35 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "krypton-devtools-astro",
    "name": "Krypton DevTools",
    "slug": "krypton-devtools-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Krypton DevTools",
    "description": "Ultra-fast Astro 5 starter kit engineered for Krypton DevTools. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/krypton-devtools-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff6711 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "krypton-devtools-next",
    "name": "Krypton DevTools",
    "slug": "krypton-devtools-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Krypton DevTools",
    "description": "Production Next.js 15 App Router boilerplate for Krypton DevTools. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/krypton-devtools-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff8200 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "spectra-platform-astro",
    "name": "Spectra Platform",
    "slug": "spectra-platform-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Spectra Platform",
    "description": "Ultra-fast Astro 5 starter kit engineered for Spectra Platform. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/spectra-platform-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "spectra-platform-next",
    "name": "Spectra Platform",
    "slug": "spectra-platform-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Spectra Platform",
    "description": "Production Next.js 15 App Router boilerplate for Spectra Platform. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/spectra-platform-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6b35 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "nexus-cloud-astro",
    "name": "Nexus Cloud",
    "slug": "nexus-cloud-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Nexus Cloud",
    "description": "Ultra-fast Astro 5 starter kit engineered for Nexus Cloud. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/nexus-cloud-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff6711 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "nexus-cloud-next",
    "name": "Nexus Cloud",
    "slug": "nexus-cloud-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Nexus Cloud",
    "description": "Production Next.js 15 App Router boilerplate for Nexus Cloud. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/nexus-cloud-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff8200 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "aura-workspace-astro",
    "name": "Aura Workspace",
    "slug": "aura-workspace-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Aura Workspace",
    "description": "Ultra-fast Astro 5 starter kit engineered for Aura Workspace. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/aura-workspace-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "aura-workspace-next",
    "name": "Aura Workspace",
    "slug": "aura-workspace-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Aura Workspace",
    "description": "Production Next.js 15 App Router boilerplate for Aura Workspace. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/aura-workspace-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6b35 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "velocity-saas-astro",
    "name": "Velocity SaaS",
    "slug": "velocity-saas-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Velocity SaaS",
    "description": "Ultra-fast Astro 5 starter kit engineered for Velocity SaaS. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/velocity-saas-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff6711 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "velocity-saas-next",
    "name": "Velocity SaaS",
    "slug": "velocity-saas-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Velocity SaaS",
    "description": "Production Next.js 15 App Router boilerplate for Velocity SaaS. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/velocity-saas-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff8200 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "synthetix-ai-astro",
    "name": "Synthetix AI",
    "slug": "synthetix-ai-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Synthetix AI",
    "description": "Ultra-fast Astro 5 starter kit engineered for Synthetix AI. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/synthetix-ai-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "synthetix-ai-next",
    "name": "Synthetix AI",
    "slug": "synthetix-ai-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Synthetix AI",
    "description": "Production Next.js 15 App Router boilerplate for Synthetix AI. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/synthetix-ai-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6b35 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "echo-platform-astro",
    "name": "Echo Platform",
    "slug": "echo-platform-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Echo Platform",
    "description": "Ultra-fast Astro 5 starter kit engineered for Echo Platform. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/echo-platform-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff6711 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "echo-platform-next",
    "name": "Echo Platform",
    "slug": "echo-platform-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Echo Platform",
    "description": "Production Next.js 15 App Router boilerplate for Echo Platform. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/echo-platform-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff8200 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "prism-cloud-astro",
    "name": "Prism Cloud",
    "slug": "prism-cloud-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Prism Cloud",
    "description": "Ultra-fast Astro 5 starter kit engineered for Prism Cloud. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/prism-cloud-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "prism-cloud-next",
    "name": "Prism Cloud",
    "slug": "prism-cloud-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Prism Cloud",
    "description": "Production Next.js 15 App Router boilerplate for Prism Cloud. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/prism-cloud-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6b35 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "titan-b2b-astro",
    "name": "Titan B2B",
    "slug": "titan-b2b-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Titan B2B",
    "description": "Ultra-fast Astro 5 starter kit engineered for Titan B2B. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/titan-b2b-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff6711 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "titan-b2b-next",
    "name": "Titan B2B",
    "slug": "titan-b2b-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Titan B2B",
    "description": "Production Next.js 15 App Router boilerplate for Titan B2B. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/titan-b2b-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff8200 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "horizon-ai-astro",
    "name": "Horizon AI",
    "slug": "horizon-ai-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Horizon AI",
    "description": "Ultra-fast Astro 5 starter kit engineered for Horizon AI. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/horizon-ai-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "horizon-ai-next",
    "name": "Horizon AI",
    "slug": "horizon-ai-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Horizon AI",
    "description": "Production Next.js 15 App Router boilerplate for Horizon AI. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/horizon-ai-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6b35 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "cipher-saas-astro",
    "name": "Cipher SaaS",
    "slug": "cipher-saas-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Cipher SaaS",
    "description": "Ultra-fast Astro 5 starter kit engineered for Cipher SaaS. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/cipher-saas-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff6711 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "cipher-saas-next",
    "name": "Cipher SaaS",
    "slug": "cipher-saas-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Cipher SaaS",
    "description": "Production Next.js 15 App Router boilerplate for Cipher SaaS. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/cipher-saas-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff8200 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "ignite-launch-astro",
    "name": "Ignite Launch",
    "slug": "ignite-launch-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Ignite Launch",
    "description": "Ultra-fast Astro 5 starter kit engineered for Ignite Launch. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/ignite-launch-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "ignite-launch-next",
    "name": "Ignite Launch",
    "slug": "ignite-launch-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Ignite Launch",
    "description": "Production Next.js 15 App Router boilerplate for Ignite Launch. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/ignite-launch-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6b35 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "vanguard-saas-astro",
    "name": "Vanguard SaaS",
    "slug": "vanguard-saas-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Vanguard SaaS",
    "description": "Ultra-fast Astro 5 starter kit engineered for Vanguard SaaS. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/vanguard-saas-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff6711 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "vanguard-saas-next",
    "name": "Vanguard SaaS",
    "slug": "vanguard-saas-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Vanguard SaaS",
    "description": "Production Next.js 15 App Router boilerplate for Vanguard SaaS. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/vanguard-saas-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff8200 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "solstice-engine-astro",
    "name": "Solstice Engine",
    "slug": "solstice-engine-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Solstice Engine",
    "description": "Ultra-fast Astro 5 starter kit engineered for Solstice Engine. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/solstice-engine-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "solstice-engine-next",
    "name": "Solstice Engine",
    "slug": "solstice-engine-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Solstice Engine",
    "description": "Production Next.js 15 App Router boilerplate for Solstice Engine. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/solstice-engine-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6b35 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "mirage-platform-astro",
    "name": "Mirage Platform",
    "slug": "mirage-platform-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Mirage Platform",
    "description": "Ultra-fast Astro 5 starter kit engineered for Mirage Platform. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/mirage-platform-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff6711 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "mirage-platform-next",
    "name": "Mirage Platform",
    "slug": "mirage-platform-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Mirage Platform",
    "description": "Production Next.js 15 App Router boilerplate for Mirage Platform. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/mirage-platform-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff8200 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "stellar-ai-astro",
    "name": "Stellar AI",
    "slug": "stellar-ai-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Stellar AI",
    "description": "Ultra-fast Astro 5 starter kit engineered for Stellar AI. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/stellar-ai-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "stellar-ai-next",
    "name": "Stellar AI",
    "slug": "stellar-ai-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Stellar AI",
    "description": "Production Next.js 15 App Router boilerplate for Stellar AI. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/stellar-ai-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6b35 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "cascade-saas-astro",
    "name": "Cascade SaaS",
    "slug": "cascade-saas-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Cascade SaaS",
    "description": "Ultra-fast Astro 5 starter kit engineered for Cascade SaaS. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/cascade-saas-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff6711 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "cascade-saas-next",
    "name": "Cascade SaaS",
    "slug": "cascade-saas-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Cascade SaaS",
    "description": "Production Next.js 15 App Router boilerplate for Cascade SaaS. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/cascade-saas-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff8200 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "frontier-b2b-astro",
    "name": "Frontier B2B",
    "slug": "frontier-b2b-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Frontier B2B",
    "description": "Ultra-fast Astro 5 starter kit engineered for Frontier B2B. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/frontier-b2b-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "frontier-b2b-next",
    "name": "Frontier B2B",
    "slug": "frontier-b2b-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Frontier B2B",
    "description": "Production Next.js 15 App Router boilerplate for Frontier B2B. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/frontier-b2b-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6b35 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "apex-prime-astro",
    "name": "Apex Prime",
    "slug": "apex-prime-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Apex Prime",
    "description": "Ultra-fast Astro 5 starter kit engineered for Apex Prime. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/apex-prime-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff6711 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "apex-prime-next",
    "name": "Apex Prime",
    "slug": "apex-prime-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Apex Prime",
    "description": "Production Next.js 15 App Router boilerplate for Apex Prime. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/apex-prime-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff8200 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "zenith-pro-astro",
    "name": "Zenith Pro",
    "slug": "zenith-pro-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Zenith Pro",
    "description": "Ultra-fast Astro 5 starter kit engineered for Zenith Pro. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/zenith-pro-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "zenith-pro-next",
    "name": "Zenith Pro",
    "slug": "zenith-pro-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Zenith Pro",
    "description": "Production Next.js 15 App Router boilerplate for Zenith Pro. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/zenith-pro-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6b35 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "strata-pro-astro",
    "name": "Strata Pro",
    "slug": "strata-pro-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Strata Pro",
    "description": "Ultra-fast Astro 5 starter kit engineered for Strata Pro. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/strata-pro-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff6711 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "strata-pro-next",
    "name": "Strata Pro",
    "slug": "strata-pro-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Strata Pro",
    "description": "Production Next.js 15 App Router boilerplate for Strata Pro. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/strata-pro-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff8200 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "hyperion-x-astro",
    "name": "Hyperion X",
    "slug": "hyperion-x-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Hyperion X",
    "description": "Ultra-fast Astro 5 starter kit engineered for Hyperion X. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/hyperion-x-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "hyperion-x-next",
    "name": "Hyperion X",
    "slug": "hyperion-x-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Hyperion X",
    "description": "Production Next.js 15 App Router boilerplate for Hyperion X. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/hyperion-x-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6b35 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "orbit-pro-astro",
    "name": "Orbit Pro",
    "slug": "orbit-pro-astro",
    "tagline": "High-Converting Astro 5 Landing Page & Marketing Template for Orbit Pro",
    "description": "Ultra-fast Astro 5 starter kit engineered for Orbit Pro. Includes 100/100 Lighthouse performance, dynamic pricing toggle, and MDX blog integration.",
    "framework": "astro",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/orbit-pro-astro/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff6711 160%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "MDX",
      "Framer Motion"
    ],
    "features": [
      "100/100 Lighthouse Performance Score",
      "Dark & Light Mode Switcher",
      "Dynamic Pricing Table (Monthly/Annual)",
      "SEO & OpenGraph Automated Metadata",
      "Interactive Product Showcase UI"
    ]
  },
  {
    "id": "orbit-pro-next",
    "name": "Orbit Pro",
    "slug": "orbit-pro-next",
    "tagline": "Full-Stack Next.js 15 App Router B2B Starter for Orbit Pro",
    "description": "Production Next.js 15 App Router boilerplate for Orbit Pro. Pre-configured with NextAuth, Stripe subscriptions, User Dashboard, and Server Actions.",
    "framework": "nextjs",
    "category": "saas",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/orbit-pro-next/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff8200 160%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Stripe",
      "Prisma"
    ],
    "features": [
      "Next.js 15 App Router & Server Actions",
      "Stripe Subscriptions & Checkout Flow",
      "User Dashboard & Account Portal Shell",
      "NextAuth Authentication Integration",
      "Shadcn UI & Lucide Icons Integrated"
    ]
  },
  {
    "id": "lexicon-studio-astro",
    "name": "Lexicon Studio",
    "slug": "lexicon-studio-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Lexicon Studio",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": true,
    "previewUrl": "/preview/lexicon-studio-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Agency",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "lexicon-studio-next",
    "name": "Lexicon Studio",
    "slug": "lexicon-studio-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Lexicon Studio",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": true,
    "previewUrl": "/preview/lexicon-studio-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Agency",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "atelier-quiet-luxury-astro",
    "name": "Atelier Quiet Luxury",
    "slug": "atelier-quiet-luxury-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Atelier Quiet Luxury",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": true,
    "previewUrl": "/preview/atelier-quiet-luxury-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Agency",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "atelier-quiet-luxury-next",
    "name": "Atelier Quiet Luxury",
    "slug": "atelier-quiet-luxury-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Atelier Quiet Luxury",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": true,
    "previewUrl": "/preview/atelier-quiet-luxury-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Agency",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "cyber-serif-agency-astro",
    "name": "Cyber Serif Agency",
    "slug": "cyber-serif-agency-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Cyber Serif Agency",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/cyber-serif-agency-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "cyber-serif-agency-next",
    "name": "Cyber Serif Agency",
    "slug": "cyber-serif-agency-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Cyber Serif Agency",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/cyber-serif-agency-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "disruptor-brutalist-astro",
    "name": "Disruptor Brutalist",
    "slug": "disruptor-brutalist-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Disruptor Brutalist",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/disruptor-brutalist-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "disruptor-brutalist-next",
    "name": "Disruptor Brutalist",
    "slug": "disruptor-brutalist-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Disruptor Brutalist",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/disruptor-brutalist-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "red-sun-editorial-astro",
    "name": "Red Sun Editorial",
    "slug": "red-sun-editorial-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Red Sun Editorial",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/red-sun-editorial-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "red-sun-editorial-next",
    "name": "Red Sun Editorial",
    "slug": "red-sun-editorial-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Red Sun Editorial",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/red-sun-editorial-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "obsidian-elite-astro",
    "name": "Obsidian Elite",
    "slug": "obsidian-elite-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Obsidian Elite",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/obsidian-elite-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "obsidian-elite-next",
    "name": "Obsidian Elite",
    "slug": "obsidian-elite-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Obsidian Elite",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/obsidian-elite-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "crimson-craft-astro",
    "name": "Crimson Craft",
    "slug": "crimson-craft-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Crimson Craft",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/crimson-craft-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "crimson-craft-next",
    "name": "Crimson Craft",
    "slug": "crimson-craft-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Crimson Craft",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/crimson-craft-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "midnight-editorial-astro",
    "name": "Midnight Editorial",
    "slug": "midnight-editorial-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Midnight Editorial",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/midnight-editorial-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "midnight-editorial-next",
    "name": "Midnight Editorial",
    "slug": "midnight-editorial-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Midnight Editorial",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/midnight-editorial-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "atmospheric-agency-astro",
    "name": "Atmospheric Agency",
    "slug": "atmospheric-agency-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Atmospheric Agency",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/atmospheric-agency-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "atmospheric-agency-next",
    "name": "Atmospheric Agency",
    "slug": "atmospheric-agency-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Atmospheric Agency",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/atmospheric-agency-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "studio-editorial-astro",
    "name": "Studio Editorial",
    "slug": "studio-editorial-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Studio Editorial",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/studio-editorial-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "studio-editorial-next",
    "name": "Studio Editorial",
    "slug": "studio-editorial-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Studio Editorial",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/studio-editorial-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "terroir-creative-astro",
    "name": "Terroir Creative",
    "slug": "terroir-creative-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Terroir Creative",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/terroir-creative-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "terroir-creative-next",
    "name": "Terroir Creative",
    "slug": "terroir-creative-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Terroir Creative",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/terroir-creative-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "raw-form-agency-astro",
    "name": "Raw Form Agency",
    "slug": "raw-form-agency-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Raw Form Agency",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/raw-form-agency-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "raw-form-agency-next",
    "name": "Raw Form Agency",
    "slug": "raw-form-agency-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Raw Form Agency",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/raw-form-agency-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "kinetix-agency-astro",
    "name": "Kinetix Agency",
    "slug": "kinetix-agency-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Kinetix Agency",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/kinetix-agency-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "kinetix-agency-next",
    "name": "Kinetix Agency",
    "slug": "kinetix-agency-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Kinetix Agency",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/kinetix-agency-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "vanguard-studio-astro",
    "name": "Vanguard Studio",
    "slug": "vanguard-studio-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Vanguard Studio",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/vanguard-studio-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "vanguard-studio-next",
    "name": "Vanguard Studio",
    "slug": "vanguard-studio-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Vanguard Studio",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/vanguard-studio-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "monolith-design-astro",
    "name": "Monolith Design",
    "slug": "monolith-design-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Monolith Design",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/monolith-design-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "monolith-design-next",
    "name": "Monolith Design",
    "slug": "monolith-design-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Monolith Design",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/monolith-design-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "aesthetic-core-astro",
    "name": "Aesthetic Core",
    "slug": "aesthetic-core-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Aesthetic Core",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/aesthetic-core-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "aesthetic-core-next",
    "name": "Aesthetic Core",
    "slug": "aesthetic-core-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Aesthetic Core",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/aesthetic-core-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "veritas-agency-astro",
    "name": "Veritas Agency",
    "slug": "veritas-agency-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Veritas Agency",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/veritas-agency-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "veritas-agency-next",
    "name": "Veritas Agency",
    "slug": "veritas-agency-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Veritas Agency",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/veritas-agency-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "noir-studio-astro",
    "name": "Noir Studio",
    "slug": "noir-studio-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Noir Studio",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/noir-studio-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "noir-studio-next",
    "name": "Noir Studio",
    "slug": "noir-studio-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Noir Studio",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/noir-studio-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "minimalist-craft-astro",
    "name": "Minimalist Craft",
    "slug": "minimalist-craft-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Minimalist Craft",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/minimalist-craft-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "minimalist-craft-next",
    "name": "Minimalist Craft",
    "slug": "minimalist-craft-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Minimalist Craft",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/minimalist-craft-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "prism-studio-astro",
    "name": "Prism Studio",
    "slug": "prism-studio-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Prism Studio",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/prism-studio-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "prism-studio-next",
    "name": "Prism Studio",
    "slug": "prism-studio-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Prism Studio",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/prism-studio-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "serif-line-astro",
    "name": "Serif Line",
    "slug": "serif-line-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Serif Line",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/serif-line-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "serif-line-next",
    "name": "Serif Line",
    "slug": "serif-line-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Serif Line",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/serif-line-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "architectural-type-astro",
    "name": "Architectural Type",
    "slug": "architectural-type-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Architectural Type",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/architectural-type-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "architectural-type-next",
    "name": "Architectural Type",
    "slug": "architectural-type-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Architectural Type",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/architectural-type-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "elysian-studio-astro",
    "name": "Elysian Studio",
    "slug": "elysian-studio-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Elysian Studio",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/elysian-studio-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "elysian-studio-next",
    "name": "Elysian Studio",
    "slug": "elysian-studio-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Elysian Studio",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/elysian-studio-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "nexus-creative-astro",
    "name": "Nexus Creative",
    "slug": "nexus-creative-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Nexus Creative",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/nexus-creative-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "nexus-creative-next",
    "name": "Nexus Creative",
    "slug": "nexus-creative-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Nexus Creative",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/nexus-creative-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "apex-atelier-astro",
    "name": "Apex Atelier",
    "slug": "apex-atelier-astro",
    "tagline": "Editorial Design Agency & Portfolio Theme for Apex Atelier",
    "description": "Editorial agency theme with custom cursor micro-interactions, Orlean typography, and interactive case study layouts.",
    "framework": "astro",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/apex-atelier-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #ede9e3 100%)",
    "badge": "Astro 5",
    "techStack": [
      "Astro 5",
      "Tailwind CSS",
      "TypeScript",
      "GSAP",
      "Lenis Scroll"
    ],
    "features": [
      "Editorial Grid System with Orlean & Satoshi Typography",
      "Interactive Case Study Layouts",
      "Custom Smooth Scroll & Hover Effects",
      "Contact Form Integration",
      "Fully Responsive Layout"
    ]
  },
  {
    "id": "apex-atelier-next",
    "name": "Apex Atelier",
    "slug": "apex-atelier-next",
    "tagline": "High-Performance Next.js Portfolio & Studio Theme for Apex Atelier",
    "description": "Next.js 15 agency portfolio theme with Framer Motion page transitions, dark mode, and dynamic CMS integration.",
    "framework": "nextjs",
    "category": "agency",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/apex-atelier-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #1a1a1a 100%)",
    "badge": "Next.js 15",
    "techStack": [
      "Next.js 15",
      "React 19",
      "Tailwind CSS",
      "Framer Motion"
    ],
    "features": [
      "Framer Motion Animated Transitions",
      "Dark & Light Mode Switcher",
      "Dynamic Case Study CMS Support",
      "High-density Portfolio Filter",
      "SEO Optimized Metadata"
    ]
  },
  {
    "id": "webgl-matrix-canvas-astro",
    "name": "WebGL Matrix Canvas (Astro Canvas)",
    "slug": "webgl-matrix-canvas-astro",
    "tagline": "Interactive 3D WebGL & Shader Landing Page for WebGL Matrix Canvas",
    "description": "High-impact 3D canvas landing template powered by Three.js and custom GLSL shaders, running on Astro 5.",
    "framework": "astro",
    "category": "portfolio",
    "price": 29,
    "featured": true,
    "previewUrl": "/preview/webgl-matrix-canvas-astro/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6711 180%)",
    "badge": "3D WebGL Canvas",
    "techStack": [
      "Astro 5",
      "Three.js",
      "GLSL Shaders",
      "Tailwind CSS"
    ],
    "features": [
      "GPU-Accelerated WebGL Shader Background",
      "Interactive Mouse & Gyroscope Physics",
      "Custom Post-Processing Effects",
      "60 FPS Performance Guaranteed",
      "Fallback Static Canvas for Low-power Devices"
    ]
  },
  {
    "id": "webgl-matrix-canvas-next",
    "name": "WebGL Matrix Canvas (Next.js R3F)",
    "slug": "webgl-matrix-canvas-next",
    "tagline": "React Three Fiber 3D Experience Theme for WebGL Matrix Canvas",
    "description": "React Three Fiber & Drei 3D interactive web template built for Next.js 15 App Router.",
    "framework": "nextjs",
    "category": "portfolio",
    "price": 29,
    "featured": true,
    "previewUrl": "/preview/webgl-matrix-canvas-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 180%)",
    "badge": "R3F 3D",
    "techStack": [
      "Next.js 15",
      "React Three Fiber",
      "Three.js",
      "Tailwind CSS"
    ],
    "features": [
      "React Three Fiber (R3F) Canvas Pipeline",
      "Interactive 3D Asset Viewer & Model Loader",
      "Smooth Camera Orbit & Scroll Animations",
      "Next.js App Router Integration",
      "Ultra High-Density Visual Depth"
    ]
  },
  {
    "id": "neural-aurora-shader-astro",
    "name": "Neural Aurora Shader (Astro Canvas)",
    "slug": "neural-aurora-shader-astro",
    "tagline": "Interactive 3D WebGL & Shader Landing Page for Neural Aurora Shader",
    "description": "High-impact 3D canvas landing template powered by Three.js and custom GLSL shaders, running on Astro 5.",
    "framework": "astro",
    "category": "portfolio",
    "price": 29,
    "featured": true,
    "previewUrl": "/preview/neural-aurora-shader-astro/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6711 180%)",
    "badge": "3D WebGL Canvas",
    "techStack": [
      "Astro 5",
      "Three.js",
      "GLSL Shaders",
      "Tailwind CSS"
    ],
    "features": [
      "GPU-Accelerated WebGL Shader Background",
      "Interactive Mouse & Gyroscope Physics",
      "Custom Post-Processing Effects",
      "60 FPS Performance Guaranteed",
      "Fallback Static Canvas for Low-power Devices"
    ]
  },
  {
    "id": "neural-aurora-shader-next",
    "name": "Neural Aurora Shader (Next.js R3F)",
    "slug": "neural-aurora-shader-next",
    "tagline": "React Three Fiber 3D Experience Theme for Neural Aurora Shader",
    "description": "React Three Fiber & Drei 3D interactive web template built for Next.js 15 App Router.",
    "framework": "nextjs",
    "category": "portfolio",
    "price": 29,
    "featured": true,
    "previewUrl": "/preview/neural-aurora-shader-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 180%)",
    "badge": "R3F 3D",
    "techStack": [
      "Next.js 15",
      "React Three Fiber",
      "Three.js",
      "Tailwind CSS"
    ],
    "features": [
      "React Three Fiber (R3F) Canvas Pipeline",
      "Interactive 3D Asset Viewer & Model Loader",
      "Smooth Camera Orbit & Scroll Animations",
      "Next.js App Router Integration",
      "Ultra High-Density Visual Depth"
    ]
  },
  {
    "id": "fluid-dynamics-3d-astro",
    "name": "Fluid Dynamics 3D (Astro Canvas)",
    "slug": "fluid-dynamics-3d-astro",
    "tagline": "Interactive 3D WebGL & Shader Landing Page for Fluid Dynamics 3D",
    "description": "High-impact 3D canvas landing template powered by Three.js and custom GLSL shaders, running on Astro 5.",
    "framework": "astro",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/fluid-dynamics-3d-astro/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6711 180%)",
    "badge": "3D WebGL Canvas",
    "techStack": [
      "Astro 5",
      "Three.js",
      "GLSL Shaders",
      "Tailwind CSS"
    ],
    "features": [
      "GPU-Accelerated WebGL Shader Background",
      "Interactive Mouse & Gyroscope Physics",
      "Custom Post-Processing Effects",
      "60 FPS Performance Guaranteed",
      "Fallback Static Canvas for Low-power Devices"
    ]
  },
  {
    "id": "fluid-dynamics-3d-next",
    "name": "Fluid Dynamics 3D (Next.js R3F)",
    "slug": "fluid-dynamics-3d-next",
    "tagline": "React Three Fiber 3D Experience Theme for Fluid Dynamics 3D",
    "description": "React Three Fiber & Drei 3D interactive web template built for Next.js 15 App Router.",
    "framework": "nextjs",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/fluid-dynamics-3d-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 180%)",
    "badge": "R3F 3D",
    "techStack": [
      "Next.js 15",
      "React Three Fiber",
      "Three.js",
      "Tailwind CSS"
    ],
    "features": [
      "React Three Fiber (R3F) Canvas Pipeline",
      "Interactive 3D Asset Viewer & Model Loader",
      "Smooth Camera Orbit & Scroll Animations",
      "Next.js App Router Integration",
      "Ultra High-Density Visual Depth"
    ]
  },
  {
    "id": "raymarching-particle-grid-astro",
    "name": "Raymarching Particle Grid (Astro Canvas)",
    "slug": "raymarching-particle-grid-astro",
    "tagline": "Interactive 3D WebGL & Shader Landing Page for Raymarching Particle Grid",
    "description": "High-impact 3D canvas landing template powered by Three.js and custom GLSL shaders, running on Astro 5.",
    "framework": "astro",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/raymarching-particle-grid-astro/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6711 180%)",
    "badge": "3D WebGL Canvas",
    "techStack": [
      "Astro 5",
      "Three.js",
      "GLSL Shaders",
      "Tailwind CSS"
    ],
    "features": [
      "GPU-Accelerated WebGL Shader Background",
      "Interactive Mouse & Gyroscope Physics",
      "Custom Post-Processing Effects",
      "60 FPS Performance Guaranteed",
      "Fallback Static Canvas for Low-power Devices"
    ]
  },
  {
    "id": "raymarching-particle-grid-next",
    "name": "Raymarching Particle Grid (Next.js R3F)",
    "slug": "raymarching-particle-grid-next",
    "tagline": "React Three Fiber 3D Experience Theme for Raymarching Particle Grid",
    "description": "React Three Fiber & Drei 3D interactive web template built for Next.js 15 App Router.",
    "framework": "nextjs",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/raymarching-particle-grid-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 180%)",
    "badge": "R3F 3D",
    "techStack": [
      "Next.js 15",
      "React Three Fiber",
      "Three.js",
      "Tailwind CSS"
    ],
    "features": [
      "React Three Fiber (R3F) Canvas Pipeline",
      "Interactive 3D Asset Viewer & Model Loader",
      "Smooth Camera Orbit & Scroll Animations",
      "Next.js App Router Integration",
      "Ultra High-Density Visual Depth"
    ]
  },
  {
    "id": "hyperspace-tunnel-3d-astro",
    "name": "Hyperspace Tunnel 3D (Astro Canvas)",
    "slug": "hyperspace-tunnel-3d-astro",
    "tagline": "Interactive 3D WebGL & Shader Landing Page for Hyperspace Tunnel 3D",
    "description": "High-impact 3D canvas landing template powered by Three.js and custom GLSL shaders, running on Astro 5.",
    "framework": "astro",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/hyperspace-tunnel-3d-astro/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6711 180%)",
    "badge": "3D WebGL Canvas",
    "techStack": [
      "Astro 5",
      "Three.js",
      "GLSL Shaders",
      "Tailwind CSS"
    ],
    "features": [
      "GPU-Accelerated WebGL Shader Background",
      "Interactive Mouse & Gyroscope Physics",
      "Custom Post-Processing Effects",
      "60 FPS Performance Guaranteed",
      "Fallback Static Canvas for Low-power Devices"
    ]
  },
  {
    "id": "hyperspace-tunnel-3d-next",
    "name": "Hyperspace Tunnel 3D (Next.js R3F)",
    "slug": "hyperspace-tunnel-3d-next",
    "tagline": "React Three Fiber 3D Experience Theme for Hyperspace Tunnel 3D",
    "description": "React Three Fiber & Drei 3D interactive web template built for Next.js 15 App Router.",
    "framework": "nextjs",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/hyperspace-tunnel-3d-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 180%)",
    "badge": "R3F 3D",
    "techStack": [
      "Next.js 15",
      "React Three Fiber",
      "Three.js",
      "Tailwind CSS"
    ],
    "features": [
      "React Three Fiber (R3F) Canvas Pipeline",
      "Interactive 3D Asset Viewer & Model Loader",
      "Smooth Camera Orbit & Scroll Animations",
      "Next.js App Router Integration",
      "Ultra High-Density Visual Depth"
    ]
  },
  {
    "id": "glassmorphic-distortion-astro",
    "name": "Glassmorphic Distortion (Astro Canvas)",
    "slug": "glassmorphic-distortion-astro",
    "tagline": "Interactive 3D WebGL & Shader Landing Page for Glassmorphic Distortion",
    "description": "High-impact 3D canvas landing template powered by Three.js and custom GLSL shaders, running on Astro 5.",
    "framework": "astro",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/glassmorphic-distortion-astro/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6711 180%)",
    "badge": "3D WebGL Canvas",
    "techStack": [
      "Astro 5",
      "Three.js",
      "GLSL Shaders",
      "Tailwind CSS"
    ],
    "features": [
      "GPU-Accelerated WebGL Shader Background",
      "Interactive Mouse & Gyroscope Physics",
      "Custom Post-Processing Effects",
      "60 FPS Performance Guaranteed",
      "Fallback Static Canvas for Low-power Devices"
    ]
  },
  {
    "id": "glassmorphic-distortion-next",
    "name": "Glassmorphic Distortion (Next.js R3F)",
    "slug": "glassmorphic-distortion-next",
    "tagline": "React Three Fiber 3D Experience Theme for Glassmorphic Distortion",
    "description": "React Three Fiber & Drei 3D interactive web template built for Next.js 15 App Router.",
    "framework": "nextjs",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/glassmorphic-distortion-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 180%)",
    "badge": "R3F 3D",
    "techStack": [
      "Next.js 15",
      "React Three Fiber",
      "Three.js",
      "Tailwind CSS"
    ],
    "features": [
      "React Three Fiber (R3F) Canvas Pipeline",
      "Interactive 3D Asset Viewer & Model Loader",
      "Smooth Camera Orbit & Scroll Animations",
      "Next.js App Router Integration",
      "Ultra High-Density Visual Depth"
    ]
  },
  {
    "id": "cybernetic-particle-wave-astro",
    "name": "Cybernetic Particle Wave (Astro Canvas)",
    "slug": "cybernetic-particle-wave-astro",
    "tagline": "Interactive 3D WebGL & Shader Landing Page for Cybernetic Particle Wave",
    "description": "High-impact 3D canvas landing template powered by Three.js and custom GLSL shaders, running on Astro 5.",
    "framework": "astro",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/cybernetic-particle-wave-astro/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6711 180%)",
    "badge": "3D WebGL Canvas",
    "techStack": [
      "Astro 5",
      "Three.js",
      "GLSL Shaders",
      "Tailwind CSS"
    ],
    "features": [
      "GPU-Accelerated WebGL Shader Background",
      "Interactive Mouse & Gyroscope Physics",
      "Custom Post-Processing Effects",
      "60 FPS Performance Guaranteed",
      "Fallback Static Canvas for Low-power Devices"
    ]
  },
  {
    "id": "cybernetic-particle-wave-next",
    "name": "Cybernetic Particle Wave (Next.js R3F)",
    "slug": "cybernetic-particle-wave-next",
    "tagline": "React Three Fiber 3D Experience Theme for Cybernetic Particle Wave",
    "description": "React Three Fiber & Drei 3D interactive web template built for Next.js 15 App Router.",
    "framework": "nextjs",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/cybernetic-particle-wave-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 180%)",
    "badge": "R3F 3D",
    "techStack": [
      "Next.js 15",
      "React Three Fiber",
      "Three.js",
      "Tailwind CSS"
    ],
    "features": [
      "React Three Fiber (R3F) Canvas Pipeline",
      "Interactive 3D Asset Viewer & Model Loader",
      "Smooth Camera Orbit & Scroll Animations",
      "Next.js App Router Integration",
      "Ultra High-Density Visual Depth"
    ]
  },
  {
    "id": "holographic-mesh-astro",
    "name": "Holographic Mesh (Astro Canvas)",
    "slug": "holographic-mesh-astro",
    "tagline": "Interactive 3D WebGL & Shader Landing Page for Holographic Mesh",
    "description": "High-impact 3D canvas landing template powered by Three.js and custom GLSL shaders, running on Astro 5.",
    "framework": "astro",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/holographic-mesh-astro/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6711 180%)",
    "badge": "3D WebGL Canvas",
    "techStack": [
      "Astro 5",
      "Three.js",
      "GLSL Shaders",
      "Tailwind CSS"
    ],
    "features": [
      "GPU-Accelerated WebGL Shader Background",
      "Interactive Mouse & Gyroscope Physics",
      "Custom Post-Processing Effects",
      "60 FPS Performance Guaranteed",
      "Fallback Static Canvas for Low-power Devices"
    ]
  },
  {
    "id": "holographic-mesh-next",
    "name": "Holographic Mesh (Next.js R3F)",
    "slug": "holographic-mesh-next",
    "tagline": "React Three Fiber 3D Experience Theme for Holographic Mesh",
    "description": "React Three Fiber & Drei 3D interactive web template built for Next.js 15 App Router.",
    "framework": "nextjs",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/holographic-mesh-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 180%)",
    "badge": "R3F 3D",
    "techStack": [
      "Next.js 15",
      "React Three Fiber",
      "Three.js",
      "Tailwind CSS"
    ],
    "features": [
      "React Three Fiber (R3F) Canvas Pipeline",
      "Interactive 3D Asset Viewer & Model Loader",
      "Smooth Camera Orbit & Scroll Animations",
      "Next.js App Router Integration",
      "Ultra High-Density Visual Depth"
    ]
  },
  {
    "id": "quantum-field-shader-astro",
    "name": "Quantum Field Shader (Astro Canvas)",
    "slug": "quantum-field-shader-astro",
    "tagline": "Interactive 3D WebGL & Shader Landing Page for Quantum Field Shader",
    "description": "High-impact 3D canvas landing template powered by Three.js and custom GLSL shaders, running on Astro 5.",
    "framework": "astro",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/quantum-field-shader-astro/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6711 180%)",
    "badge": "3D WebGL Canvas",
    "techStack": [
      "Astro 5",
      "Three.js",
      "GLSL Shaders",
      "Tailwind CSS"
    ],
    "features": [
      "GPU-Accelerated WebGL Shader Background",
      "Interactive Mouse & Gyroscope Physics",
      "Custom Post-Processing Effects",
      "60 FPS Performance Guaranteed",
      "Fallback Static Canvas for Low-power Devices"
    ]
  },
  {
    "id": "quantum-field-shader-next",
    "name": "Quantum Field Shader (Next.js R3F)",
    "slug": "quantum-field-shader-next",
    "tagline": "React Three Fiber 3D Experience Theme for Quantum Field Shader",
    "description": "React Three Fiber & Drei 3D interactive web template built for Next.js 15 App Router.",
    "framework": "nextjs",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/quantum-field-shader-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 180%)",
    "badge": "R3F 3D",
    "techStack": [
      "Next.js 15",
      "React Three Fiber",
      "Three.js",
      "Tailwind CSS"
    ],
    "features": [
      "React Three Fiber (R3F) Canvas Pipeline",
      "Interactive 3D Asset Viewer & Model Loader",
      "Smooth Camera Orbit & Scroll Animations",
      "Next.js App Router Integration",
      "Ultra High-Density Visual Depth"
    ]
  },
  {
    "id": "organic-waveform-3d-astro",
    "name": "Organic Waveform 3D (Astro Canvas)",
    "slug": "organic-waveform-3d-astro",
    "tagline": "Interactive 3D WebGL & Shader Landing Page for Organic Waveform 3D",
    "description": "High-impact 3D canvas landing template powered by Three.js and custom GLSL shaders, running on Astro 5.",
    "framework": "astro",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/organic-waveform-3d-astro/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6711 180%)",
    "badge": "3D WebGL Canvas",
    "techStack": [
      "Astro 5",
      "Three.js",
      "GLSL Shaders",
      "Tailwind CSS"
    ],
    "features": [
      "GPU-Accelerated WebGL Shader Background",
      "Interactive Mouse & Gyroscope Physics",
      "Custom Post-Processing Effects",
      "60 FPS Performance Guaranteed",
      "Fallback Static Canvas for Low-power Devices"
    ]
  },
  {
    "id": "organic-waveform-3d-next",
    "name": "Organic Waveform 3D (Next.js R3F)",
    "slug": "organic-waveform-3d-next",
    "tagline": "React Three Fiber 3D Experience Theme for Organic Waveform 3D",
    "description": "React Three Fiber & Drei 3D interactive web template built for Next.js 15 App Router.",
    "framework": "nextjs",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/organic-waveform-3d-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 180%)",
    "badge": "R3F 3D",
    "techStack": [
      "Next.js 15",
      "React Three Fiber",
      "Three.js",
      "Tailwind CSS"
    ],
    "features": [
      "React Three Fiber (R3F) Canvas Pipeline",
      "Interactive 3D Asset Viewer & Model Loader",
      "Smooth Camera Orbit & Scroll Animations",
      "Next.js App Router Integration",
      "Ultra High-Density Visual Depth"
    ]
  },
  {
    "id": "neon-velocity-canvas-astro",
    "name": "Neon Velocity Canvas (Astro Canvas)",
    "slug": "neon-velocity-canvas-astro",
    "tagline": "Interactive 3D WebGL & Shader Landing Page for Neon Velocity Canvas",
    "description": "High-impact 3D canvas landing template powered by Three.js and custom GLSL shaders, running on Astro 5.",
    "framework": "astro",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/neon-velocity-canvas-astro/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6711 180%)",
    "badge": "3D WebGL Canvas",
    "techStack": [
      "Astro 5",
      "Three.js",
      "GLSL Shaders",
      "Tailwind CSS"
    ],
    "features": [
      "GPU-Accelerated WebGL Shader Background",
      "Interactive Mouse & Gyroscope Physics",
      "Custom Post-Processing Effects",
      "60 FPS Performance Guaranteed",
      "Fallback Static Canvas for Low-power Devices"
    ]
  },
  {
    "id": "neon-velocity-canvas-next",
    "name": "Neon Velocity Canvas (Next.js R3F)",
    "slug": "neon-velocity-canvas-next",
    "tagline": "React Three Fiber 3D Experience Theme for Neon Velocity Canvas",
    "description": "React Three Fiber & Drei 3D interactive web template built for Next.js 15 App Router.",
    "framework": "nextjs",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/neon-velocity-canvas-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 180%)",
    "badge": "R3F 3D",
    "techStack": [
      "Next.js 15",
      "React Three Fiber",
      "Three.js",
      "Tailwind CSS"
    ],
    "features": [
      "React Three Fiber (R3F) Canvas Pipeline",
      "Interactive 3D Asset Viewer & Model Loader",
      "Smooth Camera Orbit & Scroll Animations",
      "Next.js App Router Integration",
      "Ultra High-Density Visual Depth"
    ]
  },
  {
    "id": "celestial-sphere-3d-astro",
    "name": "Celestial Sphere 3D (Astro Canvas)",
    "slug": "celestial-sphere-3d-astro",
    "tagline": "Interactive 3D WebGL & Shader Landing Page for Celestial Sphere 3D",
    "description": "High-impact 3D canvas landing template powered by Three.js and custom GLSL shaders, running on Astro 5.",
    "framework": "astro",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/celestial-sphere-3d-astro/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6711 180%)",
    "badge": "3D WebGL Canvas",
    "techStack": [
      "Astro 5",
      "Three.js",
      "GLSL Shaders",
      "Tailwind CSS"
    ],
    "features": [
      "GPU-Accelerated WebGL Shader Background",
      "Interactive Mouse & Gyroscope Physics",
      "Custom Post-Processing Effects",
      "60 FPS Performance Guaranteed",
      "Fallback Static Canvas for Low-power Devices"
    ]
  },
  {
    "id": "celestial-sphere-3d-next",
    "name": "Celestial Sphere 3D (Next.js R3F)",
    "slug": "celestial-sphere-3d-next",
    "tagline": "React Three Fiber 3D Experience Theme for Celestial Sphere 3D",
    "description": "React Three Fiber & Drei 3D interactive web template built for Next.js 15 App Router.",
    "framework": "nextjs",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/celestial-sphere-3d-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 180%)",
    "badge": "R3F 3D",
    "techStack": [
      "Next.js 15",
      "React Three Fiber",
      "Three.js",
      "Tailwind CSS"
    ],
    "features": [
      "React Three Fiber (R3F) Canvas Pipeline",
      "Interactive 3D Asset Viewer & Model Loader",
      "Smooth Camera Orbit & Scroll Animations",
      "Next.js App Router Integration",
      "Ultra High-Density Visual Depth"
    ]
  },
  {
    "id": "voxel-terrain-engine-astro",
    "name": "Voxel Terrain Engine (Astro Canvas)",
    "slug": "voxel-terrain-engine-astro",
    "tagline": "Interactive 3D WebGL & Shader Landing Page for Voxel Terrain Engine",
    "description": "High-impact 3D canvas landing template powered by Three.js and custom GLSL shaders, running on Astro 5.",
    "framework": "astro",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/voxel-terrain-engine-astro/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6711 180%)",
    "badge": "3D WebGL Canvas",
    "techStack": [
      "Astro 5",
      "Three.js",
      "GLSL Shaders",
      "Tailwind CSS"
    ],
    "features": [
      "GPU-Accelerated WebGL Shader Background",
      "Interactive Mouse & Gyroscope Physics",
      "Custom Post-Processing Effects",
      "60 FPS Performance Guaranteed",
      "Fallback Static Canvas for Low-power Devices"
    ]
  },
  {
    "id": "voxel-terrain-engine-next",
    "name": "Voxel Terrain Engine (Next.js R3F)",
    "slug": "voxel-terrain-engine-next",
    "tagline": "React Three Fiber 3D Experience Theme for Voxel Terrain Engine",
    "description": "React Three Fiber & Drei 3D interactive web template built for Next.js 15 App Router.",
    "framework": "nextjs",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/voxel-terrain-engine-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 180%)",
    "badge": "R3F 3D",
    "techStack": [
      "Next.js 15",
      "React Three Fiber",
      "Three.js",
      "Tailwind CSS"
    ],
    "features": [
      "React Three Fiber (R3F) Canvas Pipeline",
      "Interactive 3D Asset Viewer & Model Loader",
      "Smooth Camera Orbit & Scroll Animations",
      "Next.js App Router Integration",
      "Ultra High-Density Visual Depth"
    ]
  },
  {
    "id": "sub-surface-light-mesh-astro",
    "name": "Sub Surface Light Mesh (Astro Canvas)",
    "slug": "sub-surface-light-mesh-astro",
    "tagline": "Interactive 3D WebGL & Shader Landing Page for Sub Surface Light Mesh",
    "description": "High-impact 3D canvas landing template powered by Three.js and custom GLSL shaders, running on Astro 5.",
    "framework": "astro",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/sub-surface-light-mesh-astro/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6711 180%)",
    "badge": "3D WebGL Canvas",
    "techStack": [
      "Astro 5",
      "Three.js",
      "GLSL Shaders",
      "Tailwind CSS"
    ],
    "features": [
      "GPU-Accelerated WebGL Shader Background",
      "Interactive Mouse & Gyroscope Physics",
      "Custom Post-Processing Effects",
      "60 FPS Performance Guaranteed",
      "Fallback Static Canvas for Low-power Devices"
    ]
  },
  {
    "id": "sub-surface-light-mesh-next",
    "name": "Sub Surface Light Mesh (Next.js R3F)",
    "slug": "sub-surface-light-mesh-next",
    "tagline": "React Three Fiber 3D Experience Theme for Sub Surface Light Mesh",
    "description": "React Three Fiber & Drei 3D interactive web template built for Next.js 15 App Router.",
    "framework": "nextjs",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/sub-surface-light-mesh-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 180%)",
    "badge": "R3F 3D",
    "techStack": [
      "Next.js 15",
      "React Three Fiber",
      "Three.js",
      "Tailwind CSS"
    ],
    "features": [
      "React Three Fiber (R3F) Canvas Pipeline",
      "Interactive 3D Asset Viewer & Model Loader",
      "Smooth Camera Orbit & Scroll Animations",
      "Next.js App Router Integration",
      "Ultra High-Density Visual Depth"
    ]
  },
  {
    "id": "dark-matter-particle-grid-astro",
    "name": "Dark Matter Particle Grid (Astro Canvas)",
    "slug": "dark-matter-particle-grid-astro",
    "tagline": "Interactive 3D WebGL & Shader Landing Page for Dark Matter Particle Grid",
    "description": "High-impact 3D canvas landing template powered by Three.js and custom GLSL shaders, running on Astro 5.",
    "framework": "astro",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/dark-matter-particle-grid-astro/",
    "imageBg": "linear-gradient(135deg, #0d0d0d 0%, #ff6711 180%)",
    "badge": "3D WebGL Canvas",
    "techStack": [
      "Astro 5",
      "Three.js",
      "GLSL Shaders",
      "Tailwind CSS"
    ],
    "features": [
      "GPU-Accelerated WebGL Shader Background",
      "Interactive Mouse & Gyroscope Physics",
      "Custom Post-Processing Effects",
      "60 FPS Performance Guaranteed",
      "Fallback Static Canvas for Low-power Devices"
    ]
  },
  {
    "id": "dark-matter-particle-grid-next",
    "name": "Dark Matter Particle Grid (Next.js R3F)",
    "slug": "dark-matter-particle-grid-next",
    "tagline": "React Three Fiber 3D Experience Theme for Dark Matter Particle Grid",
    "description": "React Three Fiber & Drei 3D interactive web template built for Next.js 15 App Router.",
    "framework": "nextjs",
    "category": "portfolio",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/dark-matter-particle-grid-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 180%)",
    "badge": "R3F 3D",
    "techStack": [
      "Next.js 15",
      "React Three Fiber",
      "Three.js",
      "Tailwind CSS"
    ],
    "features": [
      "React Three Fiber (R3F) Canvas Pipeline",
      "Interactive 3D Asset Viewer & Model Loader",
      "Smooth Camera Orbit & Scroll Animations",
      "Next.js App Router Integration",
      "Ultra High-Density Visual Depth"
    ]
  },
  {
    "id": "hyperdocs-engine-astro",
    "name": "HyperDocs Engine (Astro Docs)",
    "slug": "hyperdocs-engine-astro",
    "tagline": "Technical Documentation & Knowledge Base for HyperDocs Engine",
    "description": "Fast technical documentation theme with Pagefind offline full-text search and auto-generated sidebar navigation.",
    "framework": "astro",
    "category": "docs",
    "price": 29,
    "featured": true,
    "previewUrl": "/preview/hyperdocs-engine-astro/",
    "imageBg": "linear-gradient(135deg, #111822 0%, #101820 100%)",
    "badge": "Docs",
    "techStack": [
      "Astro 5",
      "Starlight",
      "Pagefind Search",
      "Tailwind CSS"
    ],
    "features": [
      "Offline Full-Text Search with Pagefind",
      "Multi-language Code Snippets with Copy Button",
      "Auto-generated Breadcrumbs & Sidebar",
      "Software Release Versioning Support"
    ]
  },
  {
    "id": "hyperdocs-engine-next",
    "name": "HyperDocs Engine (Nextra Docs)",
    "slug": "hyperdocs-engine-next",
    "tagline": "Nextra & MDX Technical Documentation Shell for HyperDocs Engine",
    "description": "Nextra & MDX documentation starter built for Next.js 15, optimized for developer APIs and SDK manuals.",
    "framework": "nextjs",
    "category": "docs",
    "price": 29,
    "featured": true,
    "previewUrl": "/preview/hyperdocs-engine-next/",
    "imageBg": "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
    "badge": "Docs",
    "techStack": [
      "Next.js 15",
      "Nextra",
      "MDX",
      "Tailwind CSS"
    ],
    "features": [
      "Nextra MDX Documentation Engine",
      "Algolia & FlexSearch Instant Search",
      "Interactive API Explorer Modal",
      "Automatic Table of Contents"
    ]
  },
  {
    "id": "starlight-pro-astro",
    "name": "Starlight Pro (Astro Docs)",
    "slug": "starlight-pro-astro",
    "tagline": "Technical Documentation & Knowledge Base for Starlight Pro",
    "description": "Fast technical documentation theme with Pagefind offline full-text search and auto-generated sidebar navigation.",
    "framework": "astro",
    "category": "docs",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/starlight-pro-astro/",
    "imageBg": "linear-gradient(135deg, #111822 0%, #101820 100%)",
    "badge": "Docs",
    "techStack": [
      "Astro 5",
      "Starlight",
      "Pagefind Search",
      "Tailwind CSS"
    ],
    "features": [
      "Offline Full-Text Search with Pagefind",
      "Multi-language Code Snippets with Copy Button",
      "Auto-generated Breadcrumbs & Sidebar",
      "Software Release Versioning Support"
    ]
  },
  {
    "id": "starlight-pro-next",
    "name": "Starlight Pro (Nextra Docs)",
    "slug": "starlight-pro-next",
    "tagline": "Nextra & MDX Technical Documentation Shell for Starlight Pro",
    "description": "Nextra & MDX documentation starter built for Next.js 15, optimized for developer APIs and SDK manuals.",
    "framework": "nextjs",
    "category": "docs",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/starlight-pro-next/",
    "imageBg": "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
    "badge": "Docs",
    "techStack": [
      "Next.js 15",
      "Nextra",
      "MDX",
      "Tailwind CSS"
    ],
    "features": [
      "Nextra MDX Documentation Engine",
      "Algolia & FlexSearch Instant Search",
      "Interactive API Explorer Modal",
      "Automatic Table of Contents"
    ]
  },
  {
    "id": "sdk-reference-manual-astro",
    "name": "SDK Reference Manual (Astro Docs)",
    "slug": "sdk-reference-manual-astro",
    "tagline": "Technical Documentation & Knowledge Base for SDK Reference Manual",
    "description": "Fast technical documentation theme with Pagefind offline full-text search and auto-generated sidebar navigation.",
    "framework": "astro",
    "category": "docs",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/sdk-reference-manual-astro/",
    "imageBg": "linear-gradient(135deg, #111822 0%, #101820 100%)",
    "badge": "Docs",
    "techStack": [
      "Astro 5",
      "Starlight",
      "Pagefind Search",
      "Tailwind CSS"
    ],
    "features": [
      "Offline Full-Text Search with Pagefind",
      "Multi-language Code Snippets with Copy Button",
      "Auto-generated Breadcrumbs & Sidebar",
      "Software Release Versioning Support"
    ]
  },
  {
    "id": "sdk-reference-manual-next",
    "name": "SDK Reference Manual (Nextra Docs)",
    "slug": "sdk-reference-manual-next",
    "tagline": "Nextra & MDX Technical Documentation Shell for SDK Reference Manual",
    "description": "Nextra & MDX documentation starter built for Next.js 15, optimized for developer APIs and SDK manuals.",
    "framework": "nextjs",
    "category": "docs",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/sdk-reference-manual-next/",
    "imageBg": "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
    "badge": "Docs",
    "techStack": [
      "Next.js 15",
      "Nextra",
      "MDX",
      "Tailwind CSS"
    ],
    "features": [
      "Nextra MDX Documentation Engine",
      "Algolia & FlexSearch Instant Search",
      "Interactive API Explorer Modal",
      "Automatic Table of Contents"
    ]
  },
  {
    "id": "devhub-portal-astro",
    "name": "DevHub Portal (Astro Docs)",
    "slug": "devhub-portal-astro",
    "tagline": "Technical Documentation & Knowledge Base for DevHub Portal",
    "description": "Fast technical documentation theme with Pagefind offline full-text search and auto-generated sidebar navigation.",
    "framework": "astro",
    "category": "docs",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/devhub-portal-astro/",
    "imageBg": "linear-gradient(135deg, #111822 0%, #101820 100%)",
    "badge": "Docs",
    "techStack": [
      "Astro 5",
      "Starlight",
      "Pagefind Search",
      "Tailwind CSS"
    ],
    "features": [
      "Offline Full-Text Search with Pagefind",
      "Multi-language Code Snippets with Copy Button",
      "Auto-generated Breadcrumbs & Sidebar",
      "Software Release Versioning Support"
    ]
  },
  {
    "id": "devhub-portal-next",
    "name": "DevHub Portal (Nextra Docs)",
    "slug": "devhub-portal-next",
    "tagline": "Nextra & MDX Technical Documentation Shell for DevHub Portal",
    "description": "Nextra & MDX documentation starter built for Next.js 15, optimized for developer APIs and SDK manuals.",
    "framework": "nextjs",
    "category": "docs",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/devhub-portal-next/",
    "imageBg": "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
    "badge": "Docs",
    "techStack": [
      "Next.js 15",
      "Nextra",
      "MDX",
      "Tailwind CSS"
    ],
    "features": [
      "Nextra MDX Documentation Engine",
      "Algolia & FlexSearch Instant Search",
      "Interactive API Explorer Modal",
      "Automatic Table of Contents"
    ]
  },
  {
    "id": "api-spec-explorer-astro",
    "name": "API Spec Explorer (Astro Docs)",
    "slug": "api-spec-explorer-astro",
    "tagline": "Technical Documentation & Knowledge Base for API Spec Explorer",
    "description": "Fast technical documentation theme with Pagefind offline full-text search and auto-generated sidebar navigation.",
    "framework": "astro",
    "category": "docs",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/api-spec-explorer-astro/",
    "imageBg": "linear-gradient(135deg, #111822 0%, #101820 100%)",
    "badge": "Docs",
    "techStack": [
      "Astro 5",
      "Starlight",
      "Pagefind Search",
      "Tailwind CSS"
    ],
    "features": [
      "Offline Full-Text Search with Pagefind",
      "Multi-language Code Snippets with Copy Button",
      "Auto-generated Breadcrumbs & Sidebar",
      "Software Release Versioning Support"
    ]
  },
  {
    "id": "api-spec-explorer-next",
    "name": "API Spec Explorer (Nextra Docs)",
    "slug": "api-spec-explorer-next",
    "tagline": "Nextra & MDX Technical Documentation Shell for API Spec Explorer",
    "description": "Nextra & MDX documentation starter built for Next.js 15, optimized for developer APIs and SDK manuals.",
    "framework": "nextjs",
    "category": "docs",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/api-spec-explorer-next/",
    "imageBg": "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
    "badge": "Docs",
    "techStack": [
      "Next.js 15",
      "Nextra",
      "MDX",
      "Tailwind CSS"
    ],
    "features": [
      "Nextra MDX Documentation Engine",
      "Algolia & FlexSearch Instant Search",
      "Interactive API Explorer Modal",
      "Automatic Table of Contents"
    ]
  },
  {
    "id": "opensource-docs-astro",
    "name": "OpenSource Docs (Astro Docs)",
    "slug": "opensource-docs-astro",
    "tagline": "Technical Documentation & Knowledge Base for OpenSource Docs",
    "description": "Fast technical documentation theme with Pagefind offline full-text search and auto-generated sidebar navigation.",
    "framework": "astro",
    "category": "docs",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/opensource-docs-astro/",
    "imageBg": "linear-gradient(135deg, #111822 0%, #101820 100%)",
    "badge": "Docs",
    "techStack": [
      "Astro 5",
      "Starlight",
      "Pagefind Search",
      "Tailwind CSS"
    ],
    "features": [
      "Offline Full-Text Search with Pagefind",
      "Multi-language Code Snippets with Copy Button",
      "Auto-generated Breadcrumbs & Sidebar",
      "Software Release Versioning Support"
    ]
  },
  {
    "id": "opensource-docs-next",
    "name": "OpenSource Docs (Nextra Docs)",
    "slug": "opensource-docs-next",
    "tagline": "Nextra & MDX Technical Documentation Shell for OpenSource Docs",
    "description": "Nextra & MDX documentation starter built for Next.js 15, optimized for developer APIs and SDK manuals.",
    "framework": "nextjs",
    "category": "docs",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/opensource-docs-next/",
    "imageBg": "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
    "badge": "Docs",
    "techStack": [
      "Next.js 15",
      "Nextra",
      "MDX",
      "Tailwind CSS"
    ],
    "features": [
      "Nextra MDX Documentation Engine",
      "Algolia & FlexSearch Instant Search",
      "Interactive API Explorer Modal",
      "Automatic Table of Contents"
    ]
  },
  {
    "id": "typedocs-engine-astro",
    "name": "TypeDocs Engine (Astro Docs)",
    "slug": "typedocs-engine-astro",
    "tagline": "Technical Documentation & Knowledge Base for TypeDocs Engine",
    "description": "Fast technical documentation theme with Pagefind offline full-text search and auto-generated sidebar navigation.",
    "framework": "astro",
    "category": "docs",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/typedocs-engine-astro/",
    "imageBg": "linear-gradient(135deg, #111822 0%, #101820 100%)",
    "badge": "Docs",
    "techStack": [
      "Astro 5",
      "Starlight",
      "Pagefind Search",
      "Tailwind CSS"
    ],
    "features": [
      "Offline Full-Text Search with Pagefind",
      "Multi-language Code Snippets with Copy Button",
      "Auto-generated Breadcrumbs & Sidebar",
      "Software Release Versioning Support"
    ]
  },
  {
    "id": "typedocs-engine-next",
    "name": "TypeDocs Engine (Nextra Docs)",
    "slug": "typedocs-engine-next",
    "tagline": "Nextra & MDX Technical Documentation Shell for TypeDocs Engine",
    "description": "Nextra & MDX documentation starter built for Next.js 15, optimized for developer APIs and SDK manuals.",
    "framework": "nextjs",
    "category": "docs",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/typedocs-engine-next/",
    "imageBg": "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
    "badge": "Docs",
    "techStack": [
      "Next.js 15",
      "Nextra",
      "MDX",
      "Tailwind CSS"
    ],
    "features": [
      "Nextra MDX Documentation Engine",
      "Algolia & FlexSearch Instant Search",
      "Interactive API Explorer Modal",
      "Automatic Table of Contents"
    ]
  },
  {
    "id": "nexus-knowledge-base-astro",
    "name": "Nexus Knowledge Base (Astro Docs)",
    "slug": "nexus-knowledge-base-astro",
    "tagline": "Technical Documentation & Knowledge Base for Nexus Knowledge Base",
    "description": "Fast technical documentation theme with Pagefind offline full-text search and auto-generated sidebar navigation.",
    "framework": "astro",
    "category": "docs",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/nexus-knowledge-base-astro/",
    "imageBg": "linear-gradient(135deg, #111822 0%, #101820 100%)",
    "badge": "Docs",
    "techStack": [
      "Astro 5",
      "Starlight",
      "Pagefind Search",
      "Tailwind CSS"
    ],
    "features": [
      "Offline Full-Text Search with Pagefind",
      "Multi-language Code Snippets with Copy Button",
      "Auto-generated Breadcrumbs & Sidebar",
      "Software Release Versioning Support"
    ]
  },
  {
    "id": "nexus-knowledge-base-next",
    "name": "Nexus Knowledge Base (Nextra Docs)",
    "slug": "nexus-knowledge-base-next",
    "tagline": "Nextra & MDX Technical Documentation Shell for Nexus Knowledge Base",
    "description": "Nextra & MDX documentation starter built for Next.js 15, optimized for developer APIs and SDK manuals.",
    "framework": "nextjs",
    "category": "docs",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/nexus-knowledge-base-next/",
    "imageBg": "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
    "badge": "Docs",
    "techStack": [
      "Next.js 15",
      "Nextra",
      "MDX",
      "Tailwind CSS"
    ],
    "features": [
      "Nextra MDX Documentation Engine",
      "Algolia & FlexSearch Instant Search",
      "Interactive API Explorer Modal",
      "Automatic Table of Contents"
    ]
  },
  {
    "id": "terminal-docs-shell-astro",
    "name": "Terminal Docs Shell (Astro Docs)",
    "slug": "terminal-docs-shell-astro",
    "tagline": "Technical Documentation & Knowledge Base for Terminal Docs Shell",
    "description": "Fast technical documentation theme with Pagefind offline full-text search and auto-generated sidebar navigation.",
    "framework": "astro",
    "category": "docs",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/terminal-docs-shell-astro/",
    "imageBg": "linear-gradient(135deg, #111822 0%, #101820 100%)",
    "badge": "Docs",
    "techStack": [
      "Astro 5",
      "Starlight",
      "Pagefind Search",
      "Tailwind CSS"
    ],
    "features": [
      "Offline Full-Text Search with Pagefind",
      "Multi-language Code Snippets with Copy Button",
      "Auto-generated Breadcrumbs & Sidebar",
      "Software Release Versioning Support"
    ]
  },
  {
    "id": "terminal-docs-shell-next",
    "name": "Terminal Docs Shell (Nextra Docs)",
    "slug": "terminal-docs-shell-next",
    "tagline": "Nextra & MDX Technical Documentation Shell for Terminal Docs Shell",
    "description": "Nextra & MDX documentation starter built for Next.js 15, optimized for developer APIs and SDK manuals.",
    "framework": "nextjs",
    "category": "docs",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/terminal-docs-shell-next/",
    "imageBg": "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
    "badge": "Docs",
    "techStack": [
      "Next.js 15",
      "Nextra",
      "MDX",
      "Tailwind CSS"
    ],
    "features": [
      "Nextra MDX Documentation Engine",
      "Algolia & FlexSearch Instant Search",
      "Interactive API Explorer Modal",
      "Automatic Table of Contents"
    ]
  },
  {
    "id": "codebase-manual-astro",
    "name": "Codebase Manual (Astro Docs)",
    "slug": "codebase-manual-astro",
    "tagline": "Technical Documentation & Knowledge Base for Codebase Manual",
    "description": "Fast technical documentation theme with Pagefind offline full-text search and auto-generated sidebar navigation.",
    "framework": "astro",
    "category": "docs",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/codebase-manual-astro/",
    "imageBg": "linear-gradient(135deg, #111822 0%, #101820 100%)",
    "badge": "Docs",
    "techStack": [
      "Astro 5",
      "Starlight",
      "Pagefind Search",
      "Tailwind CSS"
    ],
    "features": [
      "Offline Full-Text Search with Pagefind",
      "Multi-language Code Snippets with Copy Button",
      "Auto-generated Breadcrumbs & Sidebar",
      "Software Release Versioning Support"
    ]
  },
  {
    "id": "codebase-manual-next",
    "name": "Codebase Manual (Nextra Docs)",
    "slug": "codebase-manual-next",
    "tagline": "Nextra & MDX Technical Documentation Shell for Codebase Manual",
    "description": "Nextra & MDX documentation starter built for Next.js 15, optimized for developer APIs and SDK manuals.",
    "framework": "nextjs",
    "category": "docs",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/codebase-manual-next/",
    "imageBg": "linear-gradient(135deg, #1a1a1a 0%, #0d0d0d 100%)",
    "badge": "Docs",
    "techStack": [
      "Next.js 15",
      "Nextra",
      "MDX",
      "Tailwind CSS"
    ],
    "features": [
      "Nextra MDX Documentation Engine",
      "Algolia & FlexSearch Instant Search",
      "Interactive API Explorer Modal",
      "Automatic Table of Contents"
    ]
  },
  {
    "id": "commerce-core-astro",
    "name": "Commerce Core (Astro Store)",
    "slug": "commerce-core-astro",
    "tagline": "Digital Goods & E-Commerce Storefront for Commerce Core",
    "description": "Lightweight e-commerce storefront for Astro 5 with Snipcart or LemonSqueezy integration.",
    "framework": "astro",
    "category": "ecommerce",
    "price": 29,
    "featured": true,
    "previewUrl": "/preview/commerce-core-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #fffbf6 100%)",
    "badge": "Store",
    "techStack": [
      "Astro 5",
      "LemonSqueezy",
      "Tailwind CSS",
      "TypeScript"
    ],
    "features": [
      "LemonSqueezy & Stripe Instant Checkout",
      "Product Gallery & Lightbox Viewer",
      "Instant Cart Drawer Component",
      "Digital License Key Delivery Flow"
    ]
  },
  {
    "id": "commerce-core-next",
    "name": "Commerce Core (Next.js Store)",
    "slug": "commerce-core-next",
    "tagline": "Full-Stack E-Commerce & Digital Goods Marketplace for Commerce Core",
    "description": "Next.js 15 digital goods marketplace starter with Stripe webhooks and license delivery logic.",
    "framework": "nextjs",
    "category": "ecommerce",
    "price": 29,
    "featured": true,
    "previewUrl": "/preview/commerce-core-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Store",
    "techStack": [
      "Next.js 15",
      "Stripe",
      "Prisma",
      "Tailwind CSS"
    ],
    "features": [
      "Stripe Checkout & Customer Portal",
      "Digital License Delivery & Webhook Handler",
      "Live Product Search & Filtering",
      "Order History & Invoice Generation"
    ]
  },
  {
    "id": "forest-sage-organic-store-astro",
    "name": "Forest Sage Organic Store (Astro Store)",
    "slug": "forest-sage-organic-store-astro",
    "tagline": "Digital Goods & E-Commerce Storefront for Forest Sage Organic Store",
    "description": "Lightweight e-commerce storefront for Astro 5 with Snipcart or LemonSqueezy integration.",
    "framework": "astro",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/forest-sage-organic-store-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #fffbf6 100%)",
    "badge": "Store",
    "techStack": [
      "Astro 5",
      "LemonSqueezy",
      "Tailwind CSS",
      "TypeScript"
    ],
    "features": [
      "LemonSqueezy & Stripe Instant Checkout",
      "Product Gallery & Lightbox Viewer",
      "Instant Cart Drawer Component",
      "Digital License Key Delivery Flow"
    ]
  },
  {
    "id": "forest-sage-organic-store-next",
    "name": "Forest Sage Organic Store (Next.js Store)",
    "slug": "forest-sage-organic-store-next",
    "tagline": "Full-Stack E-Commerce & Digital Goods Marketplace for Forest Sage Organic Store",
    "description": "Next.js 15 digital goods marketplace starter with Stripe webhooks and license delivery logic.",
    "framework": "nextjs",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/forest-sage-organic-store-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Store",
    "techStack": [
      "Next.js 15",
      "Stripe",
      "Prisma",
      "Tailwind CSS"
    ],
    "features": [
      "Stripe Checkout & Customer Portal",
      "Digital License Delivery & Webhook Handler",
      "Live Product Search & Filtering",
      "Order History & Invoice Generation"
    ]
  },
  {
    "id": "heavyweight-brutalist-shop-astro",
    "name": "Heavyweight Brutalist Shop (Astro Store)",
    "slug": "heavyweight-brutalist-shop-astro",
    "tagline": "Digital Goods & E-Commerce Storefront for Heavyweight Brutalist Shop",
    "description": "Lightweight e-commerce storefront for Astro 5 with Snipcart or LemonSqueezy integration.",
    "framework": "astro",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/heavyweight-brutalist-shop-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #fffbf6 100%)",
    "badge": "Store",
    "techStack": [
      "Astro 5",
      "LemonSqueezy",
      "Tailwind CSS",
      "TypeScript"
    ],
    "features": [
      "LemonSqueezy & Stripe Instant Checkout",
      "Product Gallery & Lightbox Viewer",
      "Instant Cart Drawer Component",
      "Digital License Key Delivery Flow"
    ]
  },
  {
    "id": "heavyweight-brutalist-shop-next",
    "name": "Heavyweight Brutalist Shop (Next.js Store)",
    "slug": "heavyweight-brutalist-shop-next",
    "tagline": "Full-Stack E-Commerce & Digital Goods Marketplace for Heavyweight Brutalist Shop",
    "description": "Next.js 15 digital goods marketplace starter with Stripe webhooks and license delivery logic.",
    "framework": "nextjs",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/heavyweight-brutalist-shop-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Store",
    "techStack": [
      "Next.js 15",
      "Stripe",
      "Prisma",
      "Tailwind CSS"
    ],
    "features": [
      "Stripe Checkout & Customer Portal",
      "Digital License Delivery & Webhook Handler",
      "Live Product Search & Filtering",
      "Order History & Invoice Generation"
    ]
  },
  {
    "id": "season-04-store-astro",
    "name": "Season 04 Store (Astro Store)",
    "slug": "season-04-store-astro",
    "tagline": "Digital Goods & E-Commerce Storefront for Season 04 Store",
    "description": "Lightweight e-commerce storefront for Astro 5 with Snipcart or LemonSqueezy integration.",
    "framework": "astro",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/season-04-store-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #fffbf6 100%)",
    "badge": "Store",
    "techStack": [
      "Astro 5",
      "LemonSqueezy",
      "Tailwind CSS",
      "TypeScript"
    ],
    "features": [
      "LemonSqueezy & Stripe Instant Checkout",
      "Product Gallery & Lightbox Viewer",
      "Instant Cart Drawer Component",
      "Digital License Key Delivery Flow"
    ]
  },
  {
    "id": "season-04-store-next",
    "name": "Season 04 Store (Next.js Store)",
    "slug": "season-04-store-next",
    "tagline": "Full-Stack E-Commerce & Digital Goods Marketplace for Season 04 Store",
    "description": "Next.js 15 digital goods marketplace starter with Stripe webhooks and license delivery logic.",
    "framework": "nextjs",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/season-04-store-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Store",
    "techStack": [
      "Next.js 15",
      "Stripe",
      "Prisma",
      "Tailwind CSS"
    ],
    "features": [
      "Stripe Checkout & Customer Portal",
      "Digital License Delivery & Webhook Handler",
      "Live Product Search & Filtering",
      "Order History & Invoice Generation"
    ]
  },
  {
    "id": "digital-asset-mart-astro",
    "name": "Digital Asset Mart (Astro Store)",
    "slug": "digital-asset-mart-astro",
    "tagline": "Digital Goods & E-Commerce Storefront for Digital Asset Mart",
    "description": "Lightweight e-commerce storefront for Astro 5 with Snipcart or LemonSqueezy integration.",
    "framework": "astro",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/digital-asset-mart-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #fffbf6 100%)",
    "badge": "Store",
    "techStack": [
      "Astro 5",
      "LemonSqueezy",
      "Tailwind CSS",
      "TypeScript"
    ],
    "features": [
      "LemonSqueezy & Stripe Instant Checkout",
      "Product Gallery & Lightbox Viewer",
      "Instant Cart Drawer Component",
      "Digital License Key Delivery Flow"
    ]
  },
  {
    "id": "digital-asset-mart-next",
    "name": "Digital Asset Mart (Next.js Store)",
    "slug": "digital-asset-mart-next",
    "tagline": "Full-Stack E-Commerce & Digital Goods Marketplace for Digital Asset Mart",
    "description": "Next.js 15 digital goods marketplace starter with Stripe webhooks and license delivery logic.",
    "framework": "nextjs",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/digital-asset-mart-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Store",
    "techStack": [
      "Next.js 15",
      "Stripe",
      "Prisma",
      "Tailwind CSS"
    ],
    "features": [
      "Stripe Checkout & Customer Portal",
      "Digital License Delivery & Webhook Handler",
      "Live Product Search & Filtering",
      "Order History & Invoice Generation"
    ]
  },
  {
    "id": "aesthetic-goods-co-astro",
    "name": "Aesthetic Goods Co (Astro Store)",
    "slug": "aesthetic-goods-co-astro",
    "tagline": "Digital Goods & E-Commerce Storefront for Aesthetic Goods Co",
    "description": "Lightweight e-commerce storefront for Astro 5 with Snipcart or LemonSqueezy integration.",
    "framework": "astro",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/aesthetic-goods-co-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #fffbf6 100%)",
    "badge": "Store",
    "techStack": [
      "Astro 5",
      "LemonSqueezy",
      "Tailwind CSS",
      "TypeScript"
    ],
    "features": [
      "LemonSqueezy & Stripe Instant Checkout",
      "Product Gallery & Lightbox Viewer",
      "Instant Cart Drawer Component",
      "Digital License Key Delivery Flow"
    ]
  },
  {
    "id": "aesthetic-goods-co-next",
    "name": "Aesthetic Goods Co (Next.js Store)",
    "slug": "aesthetic-goods-co-next",
    "tagline": "Full-Stack E-Commerce & Digital Goods Marketplace for Aesthetic Goods Co",
    "description": "Next.js 15 digital goods marketplace starter with Stripe webhooks and license delivery logic.",
    "framework": "nextjs",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/aesthetic-goods-co-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Store",
    "techStack": [
      "Next.js 15",
      "Stripe",
      "Prisma",
      "Tailwind CSS"
    ],
    "features": [
      "Stripe Checkout & Customer Portal",
      "Digital License Delivery & Webhook Handler",
      "Live Product Search & Filtering",
      "Order History & Invoice Generation"
    ]
  },
  {
    "id": "cyber-storefront-astro",
    "name": "Cyber Storefront (Astro Store)",
    "slug": "cyber-storefront-astro",
    "tagline": "Digital Goods & E-Commerce Storefront for Cyber Storefront",
    "description": "Lightweight e-commerce storefront for Astro 5 with Snipcart or LemonSqueezy integration.",
    "framework": "astro",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/cyber-storefront-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #fffbf6 100%)",
    "badge": "Store",
    "techStack": [
      "Astro 5",
      "LemonSqueezy",
      "Tailwind CSS",
      "TypeScript"
    ],
    "features": [
      "LemonSqueezy & Stripe Instant Checkout",
      "Product Gallery & Lightbox Viewer",
      "Instant Cart Drawer Component",
      "Digital License Key Delivery Flow"
    ]
  },
  {
    "id": "cyber-storefront-next",
    "name": "Cyber Storefront (Next.js Store)",
    "slug": "cyber-storefront-next",
    "tagline": "Full-Stack E-Commerce & Digital Goods Marketplace for Cyber Storefront",
    "description": "Next.js 15 digital goods marketplace starter with Stripe webhooks and license delivery logic.",
    "framework": "nextjs",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/cyber-storefront-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Store",
    "techStack": [
      "Next.js 15",
      "Stripe",
      "Prisma",
      "Tailwind CSS"
    ],
    "features": [
      "Stripe Checkout & Customer Portal",
      "Digital License Delivery & Webhook Handler",
      "Live Product Search & Filtering",
      "Order History & Invoice Generation"
    ]
  },
  {
    "id": "minimal-merchant-astro",
    "name": "Minimal Merchant (Astro Store)",
    "slug": "minimal-merchant-astro",
    "tagline": "Digital Goods & E-Commerce Storefront for Minimal Merchant",
    "description": "Lightweight e-commerce storefront for Astro 5 with Snipcart or LemonSqueezy integration.",
    "framework": "astro",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/minimal-merchant-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #fffbf6 100%)",
    "badge": "Store",
    "techStack": [
      "Astro 5",
      "LemonSqueezy",
      "Tailwind CSS",
      "TypeScript"
    ],
    "features": [
      "LemonSqueezy & Stripe Instant Checkout",
      "Product Gallery & Lightbox Viewer",
      "Instant Cart Drawer Component",
      "Digital License Key Delivery Flow"
    ]
  },
  {
    "id": "minimal-merchant-next",
    "name": "Minimal Merchant (Next.js Store)",
    "slug": "minimal-merchant-next",
    "tagline": "Full-Stack E-Commerce & Digital Goods Marketplace for Minimal Merchant",
    "description": "Next.js 15 digital goods marketplace starter with Stripe webhooks and license delivery logic.",
    "framework": "nextjs",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/minimal-merchant-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Store",
    "techStack": [
      "Next.js 15",
      "Stripe",
      "Prisma",
      "Tailwind CSS"
    ],
    "features": [
      "Stripe Checkout & Customer Portal",
      "Digital License Delivery & Webhook Handler",
      "Live Product Search & Filtering",
      "Order History & Invoice Generation"
    ]
  },
  {
    "id": "luxurious-goods-astro",
    "name": "Luxurious Goods (Astro Store)",
    "slug": "luxurious-goods-astro",
    "tagline": "Digital Goods & E-Commerce Storefront for Luxurious Goods",
    "description": "Lightweight e-commerce storefront for Astro 5 with Snipcart or LemonSqueezy integration.",
    "framework": "astro",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/luxurious-goods-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #fffbf6 100%)",
    "badge": "Store",
    "techStack": [
      "Astro 5",
      "LemonSqueezy",
      "Tailwind CSS",
      "TypeScript"
    ],
    "features": [
      "LemonSqueezy & Stripe Instant Checkout",
      "Product Gallery & Lightbox Viewer",
      "Instant Cart Drawer Component",
      "Digital License Key Delivery Flow"
    ]
  },
  {
    "id": "luxurious-goods-next",
    "name": "Luxurious Goods (Next.js Store)",
    "slug": "luxurious-goods-next",
    "tagline": "Full-Stack E-Commerce & Digital Goods Marketplace for Luxurious Goods",
    "description": "Next.js 15 digital goods marketplace starter with Stripe webhooks and license delivery logic.",
    "framework": "nextjs",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/luxurious-goods-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Store",
    "techStack": [
      "Next.js 15",
      "Stripe",
      "Prisma",
      "Tailwind CSS"
    ],
    "features": [
      "Stripe Checkout & Customer Portal",
      "Digital License Delivery & Webhook Handler",
      "Live Product Search & Filtering",
      "Order History & Invoice Generation"
    ]
  },
  {
    "id": "vogue-commerce-astro",
    "name": "Vogue Commerce (Astro Store)",
    "slug": "vogue-commerce-astro",
    "tagline": "Digital Goods & E-Commerce Storefront for Vogue Commerce",
    "description": "Lightweight e-commerce storefront for Astro 5 with Snipcart or LemonSqueezy integration.",
    "framework": "astro",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/vogue-commerce-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #fffbf6 100%)",
    "badge": "Store",
    "techStack": [
      "Astro 5",
      "LemonSqueezy",
      "Tailwind CSS",
      "TypeScript"
    ],
    "features": [
      "LemonSqueezy & Stripe Instant Checkout",
      "Product Gallery & Lightbox Viewer",
      "Instant Cart Drawer Component",
      "Digital License Key Delivery Flow"
    ]
  },
  {
    "id": "vogue-commerce-next",
    "name": "Vogue Commerce (Next.js Store)",
    "slug": "vogue-commerce-next",
    "tagline": "Full-Stack E-Commerce & Digital Goods Marketplace for Vogue Commerce",
    "description": "Next.js 15 digital goods marketplace starter with Stripe webhooks and license delivery logic.",
    "framework": "nextjs",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/vogue-commerce-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Store",
    "techStack": [
      "Next.js 15",
      "Stripe",
      "Prisma",
      "Tailwind CSS"
    ],
    "features": [
      "Stripe Checkout & Customer Portal",
      "Digital License Delivery & Webhook Handler",
      "Live Product Search & Filtering",
      "Order History & Invoice Generation"
    ]
  },
  {
    "id": "artifact-store-astro",
    "name": "Artifact Store (Astro Store)",
    "slug": "artifact-store-astro",
    "tagline": "Digital Goods & E-Commerce Storefront for Artifact Store",
    "description": "Lightweight e-commerce storefront for Astro 5 with Snipcart or LemonSqueezy integration.",
    "framework": "astro",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/artifact-store-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #fffbf6 100%)",
    "badge": "Store",
    "techStack": [
      "Astro 5",
      "LemonSqueezy",
      "Tailwind CSS",
      "TypeScript"
    ],
    "features": [
      "LemonSqueezy & Stripe Instant Checkout",
      "Product Gallery & Lightbox Viewer",
      "Instant Cart Drawer Component",
      "Digital License Key Delivery Flow"
    ]
  },
  {
    "id": "artifact-store-next",
    "name": "Artifact Store (Next.js Store)",
    "slug": "artifact-store-next",
    "tagline": "Full-Stack E-Commerce & Digital Goods Marketplace for Artifact Store",
    "description": "Next.js 15 digital goods marketplace starter with Stripe webhooks and license delivery logic.",
    "framework": "nextjs",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/artifact-store-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Store",
    "techStack": [
      "Next.js 15",
      "Stripe",
      "Prisma",
      "Tailwind CSS"
    ],
    "features": [
      "Stripe Checkout & Customer Portal",
      "Digital License Delivery & Webhook Handler",
      "Live Product Search & Filtering",
      "Order History & Invoice Generation"
    ]
  },
  {
    "id": "neobrutalist-shop-astro",
    "name": "Neobrutalist Shop (Astro Store)",
    "slug": "neobrutalist-shop-astro",
    "tagline": "Digital Goods & E-Commerce Storefront for Neobrutalist Shop",
    "description": "Lightweight e-commerce storefront for Astro 5 with Snipcart or LemonSqueezy integration.",
    "framework": "astro",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/neobrutalist-shop-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #fffbf6 100%)",
    "badge": "Store",
    "techStack": [
      "Astro 5",
      "LemonSqueezy",
      "Tailwind CSS",
      "TypeScript"
    ],
    "features": [
      "LemonSqueezy & Stripe Instant Checkout",
      "Product Gallery & Lightbox Viewer",
      "Instant Cart Drawer Component",
      "Digital License Key Delivery Flow"
    ]
  },
  {
    "id": "neobrutalist-shop-next",
    "name": "Neobrutalist Shop (Next.js Store)",
    "slug": "neobrutalist-shop-next",
    "tagline": "Full-Stack E-Commerce & Digital Goods Marketplace for Neobrutalist Shop",
    "description": "Next.js 15 digital goods marketplace starter with Stripe webhooks and license delivery logic.",
    "framework": "nextjs",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/neobrutalist-shop-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Store",
    "techStack": [
      "Next.js 15",
      "Stripe",
      "Prisma",
      "Tailwind CSS"
    ],
    "features": [
      "Stripe Checkout & Customer Portal",
      "Digital License Delivery & Webhook Handler",
      "Live Product Search & Filtering",
      "Order History & Invoice Generation"
    ]
  },
  {
    "id": "echo-storefront-astro",
    "name": "Echo Storefront (Astro Store)",
    "slug": "echo-storefront-astro",
    "tagline": "Digital Goods & E-Commerce Storefront for Echo Storefront",
    "description": "Lightweight e-commerce storefront for Astro 5 with Snipcart or LemonSqueezy integration.",
    "framework": "astro",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/echo-storefront-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #fffbf6 100%)",
    "badge": "Store",
    "techStack": [
      "Astro 5",
      "LemonSqueezy",
      "Tailwind CSS",
      "TypeScript"
    ],
    "features": [
      "LemonSqueezy & Stripe Instant Checkout",
      "Product Gallery & Lightbox Viewer",
      "Instant Cart Drawer Component",
      "Digital License Key Delivery Flow"
    ]
  },
  {
    "id": "echo-storefront-next",
    "name": "Echo Storefront (Next.js Store)",
    "slug": "echo-storefront-next",
    "tagline": "Full-Stack E-Commerce & Digital Goods Marketplace for Echo Storefront",
    "description": "Next.js 15 digital goods marketplace starter with Stripe webhooks and license delivery logic.",
    "framework": "nextjs",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/echo-storefront-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Store",
    "techStack": [
      "Next.js 15",
      "Stripe",
      "Prisma",
      "Tailwind CSS"
    ],
    "features": [
      "Stripe Checkout & Customer Portal",
      "Digital License Delivery & Webhook Handler",
      "Live Product Search & Filtering",
      "Order History & Invoice Generation"
    ]
  },
  {
    "id": "pulse-market-astro",
    "name": "Pulse Market (Astro Store)",
    "slug": "pulse-market-astro",
    "tagline": "Digital Goods & E-Commerce Storefront for Pulse Market",
    "description": "Lightweight e-commerce storefront for Astro 5 with Snipcart or LemonSqueezy integration.",
    "framework": "astro",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/pulse-market-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #fffbf6 100%)",
    "badge": "Store",
    "techStack": [
      "Astro 5",
      "LemonSqueezy",
      "Tailwind CSS",
      "TypeScript"
    ],
    "features": [
      "LemonSqueezy & Stripe Instant Checkout",
      "Product Gallery & Lightbox Viewer",
      "Instant Cart Drawer Component",
      "Digital License Key Delivery Flow"
    ]
  },
  {
    "id": "pulse-market-next",
    "name": "Pulse Market (Next.js Store)",
    "slug": "pulse-market-next",
    "tagline": "Full-Stack E-Commerce & Digital Goods Marketplace for Pulse Market",
    "description": "Next.js 15 digital goods marketplace starter with Stripe webhooks and license delivery logic.",
    "framework": "nextjs",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/pulse-market-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Store",
    "techStack": [
      "Next.js 15",
      "Stripe",
      "Prisma",
      "Tailwind CSS"
    ],
    "features": [
      "Stripe Checkout & Customer Portal",
      "Digital License Delivery & Webhook Handler",
      "Live Product Search & Filtering",
      "Order History & Invoice Generation"
    ]
  },
  {
    "id": "urban-supply-co-astro",
    "name": "Urban Supply Co (Astro Store)",
    "slug": "urban-supply-co-astro",
    "tagline": "Digital Goods & E-Commerce Storefront for Urban Supply Co",
    "description": "Lightweight e-commerce storefront for Astro 5 with Snipcart or LemonSqueezy integration.",
    "framework": "astro",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/urban-supply-co-astro/",
    "imageBg": "linear-gradient(135deg, #fffdfa 0%, #fffbf6 100%)",
    "badge": "Store",
    "techStack": [
      "Astro 5",
      "LemonSqueezy",
      "Tailwind CSS",
      "TypeScript"
    ],
    "features": [
      "LemonSqueezy & Stripe Instant Checkout",
      "Product Gallery & Lightbox Viewer",
      "Instant Cart Drawer Component",
      "Digital License Key Delivery Flow"
    ]
  },
  {
    "id": "urban-supply-co-next",
    "name": "Urban Supply Co (Next.js Store)",
    "slug": "urban-supply-co-next",
    "tagline": "Full-Stack E-Commerce & Digital Goods Marketplace for Urban Supply Co",
    "description": "Next.js 15 digital goods marketplace starter with Stripe webhooks and license delivery logic.",
    "framework": "nextjs",
    "category": "ecommerce",
    "price": 29,
    "featured": false,
    "previewUrl": "/preview/urban-supply-co-next/",
    "imageBg": "linear-gradient(135deg, #101820 0%, #ff8200 160%)",
    "badge": "Store",
    "techStack": [
      "Next.js 15",
      "Stripe",
      "Prisma",
      "Tailwind CSS"
    ],
    "features": [
      "Stripe Checkout & Customer Portal",
      "Digital License Delivery & Webhook Handler",
      "Live Product Search & Filtering",
      "Order History & Invoice Generation"
    ]
  }
];
