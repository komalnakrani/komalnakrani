export type ThemeCategory =
  | 'architecture-and-design'
  | 'arts-and-entertainment'
  | 'blog-and-editorial'
  | 'community-and-nonprofit'
  | 'documentation'
  | 'education'
  | 'environment'
  | 'food-and-drink'
  | 'government'
  | 'hair-and-beauty'
  | 'home-services'
  | 'hr-and-hiring'
  | 'launch-and-coming-soon'
  | 'medical'
  | 'music-and-audio'
  | 'personal'
  | 'portfolio-and-agency'
  | 'professional-services'
  | 'real-estate'
  | 'retail-and-e-commerce'
  | 'technology'
  | 'transportation'
  | 'travel'
  | 'ui-kit'
  | 'weddings-and-events'
  | 'wellness';

export interface CategoryMeta {
  slug: string;
  name: string;
  description: string;
}

export const CATEGORIES: CategoryMeta[] = [
  {
    slug: 'architecture-and-design',
    name: 'Architecture & Design',
    description: 'Elevate your spatial vision with minimalist architectural portfolios, interior design showcases, and studio websites.'
  },
  {
    slug: 'arts-and-entertainment',
    name: 'Arts & Entertainment',
    description: 'Vibrant, immersive layouts tailored for art galleries, music venues, film showcases, and creative performances.'
  },
  {
    slug: 'blog-and-editorial',
    name: 'Blog & Editorial',
    description: 'Typography-first publishing platforms, digital magazines, and newsletter layouts built for modern storytellers.'
  },
  {
    slug: 'community-and-nonprofit',
    name: 'Community & Nonprofit',
    description: 'Impact-driven web templates with donation flows, volunteer portals, and cause-oriented storytelling.'
  },
  {
    slug: 'documentation',
    name: 'Documentation',
    description: 'High-density technical documentation hubs, API spec explorers, and developer knowledge bases.'
  },
  {
    slug: 'education',
    name: 'Education',
    description: 'Modern LMS portals, course marketplaces, and academic institution landing pages engineered for learning.'
  },
  {
    slug: 'environment',
    name: 'Environment',
    description: 'Clean eco-conscious layouts for sustainability initiatives, renewable energy projects, and green tech.'
  },
  {
    slug: 'food-and-drink',
    name: 'Food & Drink',
    description: 'Mouth-watering restaurant menus, artisanal bakery storefronts, and beverage brand landing pages.'
  },
  {
    slug: 'government',
    name: 'Government',
    description: 'Accessible, high-trust digital service portals and civic information hubs built for public sector clarity.'
  },
  {
    slug: 'hair-and-beauty',
    name: 'Hair & Beauty',
    description: 'Sleek salon booking systems, luxury spa showcases, and cosmetic product landing pages.'
  },
  {
    slug: 'home-services',
    name: 'Home Services',
    description: 'Conversion-optimized landing pages for contractors, interior renovation, and residential maintenance.'
  },
  {
    slug: 'hr-and-hiring',
    name: 'HR & Hiring',
    description: 'Modern job boards, recruitment portals, and employer branding platforms designed to attract top talent.'
  },
  {
    slug: 'launch-and-coming-soon',
    name: 'Launch & Coming Soon',
    description: 'High-converting waitlist pages, product teaser portals, and launch countdown experiences.'
  },
  {
    slug: 'medical',
    name: 'Medical',
    description: 'Patient-centric clinic portals, telehealth landing pages, and healthcare practice management sites.'
  },
  {
    slug: 'music-and-audio',
    name: 'Music & Audio',
    description: 'Dynamic discography showcases, podcast hubs, and music streaming landing pages for audio creators.'
  },
  {
    slug: 'personal',
    name: 'Personal',
    description: 'Elegant personal branding sites, executive resume layouts, and personal bio portals.'
  },
  {
    slug: 'portfolio-and-agency',
    name: 'Portfolio & Agency',
    description: 'Show-stopping creative agency portfolios, freelance showcases, and digital studio landing pages.'
  },
  {
    slug: 'professional-services',
    name: 'Professional Services',
    description: 'Authoritative layouts for law firms, financial consultancies, accounting practices, and advisory agencies.'
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    description: 'High-converting property listing directories, luxury estate showcases, and broker agency platforms.'
  },
  {
    slug: 'retail-and-e-commerce',
    name: 'Retail & E-Commerce',
    description: 'Next-gen digital storefronts, product launch landing pages, and luxury e-commerce catalogs.'
  },
  {
    slug: 'technology',
    name: 'Technology',
    description: 'High-growth SaaS landing pages, AI platform showcases, and developer tool marketing sites.'
  },
  {
    slug: 'transportation',
    name: 'Transportation',
    description: 'Logistics management portals, fleet booking interfaces, and mobility service platforms.'
  },
  {
    slug: 'travel',
    name: 'Travel',
    description: 'Breathtaking destination guides, boutique hotel booking hubs, and luxury travel agency showcases.'
  },
  {
    slug: 'ui-kit',
    name: 'UI Kit',
    description: 'Comprehensive design systems, component libraries, and modular UI starters for rapid prototyping.'
  },
  {
    slug: 'weddings-and-events',
    name: 'Weddings & Events',
    description: 'Enchanting wedding invitations, event schedule portals, and RSVP management pages.'
  },
  {
    slug: 'wellness',
    name: 'Wellness',
    description: 'Calming fitness studio portals, holistic wellness landing pages, and spa booking systems.'
  },
];


export interface Theme {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  /** Every theme is an Astro project; kept for display and future stacks. */
  framework: 'astro';
  category: ThemeCategory;
  categories?: ThemeCategory[];
  price: number;
  /**
   * Dodo Payments product id (pdt_…) for this theme's one-time purchase.
   * Until it is set, the buy button renders disabled rather than linking
   * to a checkout that does not exist.
   */
  dodoProductId?: string;
  /**
   * Optional former price, struck through beside `price` on cards and the
   * detail page. Leave unset and no strikethrough is shown — it is only ever
   * rendered from a real number you set here, never derived from a discount.
   */
  wasPrice?: number;
  featured: boolean;
  /** Unused by the rendered pages — preview routes are derived from `slug`. */
  previewUrl?: string;
  /** Unused by the rendered pages — card artwork is derived from `category`. */
  imageBg?: string;
  /**
   * Live, externally hosted URL for this theme, embedded in the preview
   * iframes. Optional: when absent the URL is derived from the slug by
   * liveUrlFor() in src/data/design.ts. Set it to point a theme at any host.
   */
  liveUrl?: string;
  badge?: string;
  techStack: string[];
  features: string[];
  /**
   * The pages this theme actually ships, taken from its live site. Rendered on
   * the detail page, so it must describe the real routes — never a generic list.
   */
  pages?: Array<{ name: string; path: string; desc: string }>;
}

export function getThemeCategories(theme: Theme): ThemeCategory[] {
  if (theme.categories && theme.categories.length > 0) {
    return theme.categories;
  }
  return [theme.category];
}

export function isThemeInCategory(theme: Theme, categorySlug: string): boolean {
  if (categorySlug === 'all') return true;
  if (categorySlug === 'featured') return Boolean(theme.featured);
  const cats = getThemeCategories(theme);
  return cats.includes(categorySlug as ThemeCategory);
}


export const themes: Theme[] = [
  {
    "id": "cast-and-render",
    "name": "Cast & Render",
    "slug": "cast-and-render",
    "dodoProductId": "pdt_0NnZBNm08P9VmoPQsi7we",
    "tagline": "A 3D object studio portfolio that opens on the reel and closes on a brief.",
    "description": "Cast & Render is a portfolio for a studio whose work is the pitch. A timed loading sequence runs into a reel-first hero, the work index insists that nothing was rendered before the brief was signed, and the about page lays out a four-step pipeline in the same order every time. The brief page promises a written reply — scope, price band and the next free slot on the farm — inside two working days. Built for render houses, product-CGI teams and motion studios.",
    "framework": "astro",
    "category": "portfolio-and-agency",
    "categories": [
      "portfolio-and-agency",
      "arts-and-entertainment"
    ],
    "price": 39,
    "featured": true,
    "badge": "Featured",
    "liveUrl": "https://cast-and-render.pages.dev",
    "techStack": [
      "Astro",
      "Zero-JS output",
      "Inter Tight",
      "Responsive CSS",
      "RSS"
    ],
    "features": [
      "Timed loading sequence into a reel-first hero",
      "Work index with per-object case pages",
      "Four-step pipeline explainer on the about page",
      "Journal archived by year (2025, 2026)",
      "Brief form with a stated two-day reply promise"
    ],
    "pages": [
      { "name": "Home", "path": "/", "desc": "Cast & Render is a 3D object studio. Six kinds of mesh, one render farm, and a queue that starts before the sun does." },
      { "name": "Works", "path": "/work/", "desc": "Selected objects, surfaces and motion from Cast & Render — product CGI, look dev and scroll-grade motion, exported to order." },
      { "name": "About", "path": "/about/", "desc": "Cast & Render is a six-person 3D object studio at 112 Render Lane. Blockout by day two, topology before beauty, export to order." },
      { "name": "Journal", "path": "/blog/", "desc": "Notes from the render farm: topology, look dev, motion pipelines and why the studio opens at four." },
      { "name": "Start a brief", "path": "/brief/", "desc": "Tell Cast & Render what the object is, what it has to prove and when you need it. Blockout inside two working days." }
    ]
  },
  {
    "id": "prisma-studio",
    "name": "Prisma",
    "slug": "prisma-studio",
    "dodoProductId": "pdt_0NnZBO4jJyqbdMOtu97Ll",
    "tagline": "A collective site for directors and cinematographers, built around the unmade shot.",
    "description": "Prisma is shaped like a collective rather than a studio — no house style, no reception desk. The collective page shows the work in the order they would show it, workshops run capped at twelve people, and the journal publishes notes as they settle. Large character-split headline animation carries pages that are deliberately light on imagery. Suited to production collectives, artist rosters and agencies that sell judgement over volume.",
    "framework": "astro",
    "category": "arts-and-entertainment",
    "categories": [
      "arts-and-entertainment",
      "portfolio-and-agency"
    ],
    "price": 49,
    "featured": true,
    "badge": "Featured",
    "liveUrl": "https://prisma-studio.pages.dev",
    "techStack": [
      "Astro",
      "Character-split animation",
      "Responsive CSS",
      "RSS"
    ],
    "features": [
      "Collective work index with per-project pages",
      "Long-form origin story page",
      "Workshops programme capped at twelve",
      "Journal with four working-note essays",
      "Inquiries page that invites unfinished material",
      "Animated split-letter headlines"
    ],
    "pages": [
      { "name": "Home", "path": "/", "desc": "Prisma is a worldwide collective of directors, cinematographers and storytellers, bound not by place or title but by a shared appetite for the unmade shot." },
      { "name": "Our story", "path": "/story/", "desc": "How the collective came together, and what it refuses to rush." },
      { "name": "Collective", "path": "/collective/", "desc": "Films, commissions and title work from the Prisma collective." },
      { "name": "Workshops", "path": "/workshops/", "desc": "Small sessions on colour, cutting, sound and looking properly at a frame." },
      { "name": "Journal", "path": "/journal/", "desc": "Notes on colour, cutting and the parts of the job nobody bills for." },
      { "name": "Join the lab", "path": "/inquiries/", "desc": "Start a conversation with the collective." }
    ]
  },
  {
    "id": "halo-usd",
    "name": "USD Halo",
    "slug": "halo-usd",
    "dodoProductId": "pdt_0NnZBOVif6jthF0dO4ShO",
    "tagline": "A fintech product site for a reward-bearing digital dollar.",
    "description": "USD Halo has to explain a mechanism, not just a benefit, and the site is built around that. The network page argues the peg from the bad day rather than the good one, the rewards page shows the yield working in four steps with no euphemisms, and the news index carries attestations and post-mortems. A scrolling partner marquee runs across the homepage. Fits stablecoins, fintech products and any launch that has to look solvent.",
    "framework": "astro",
    "category": "technology",
    "categories": [
      "technology",
      "professional-services"
    ],
    "price": 45,
    "featured": true,
    "badge": "Featured",
    "liveUrl": "https://halo-usd.pages.dev",
    "techStack": [
      "Astro",
      "Marquee animation",
      "Responsive CSS",
      "RSS"
    ],
    "features": [
      "Mechanism-led hero with switchable use modes",
      "Network page framed around failure conditions",
      "Four-step rewards explainer",
      "Ecosystem grid: treasury, payouts, settlement, builders",
      "Partner logo marquee",
      "News index with attestations and post-mortems"
    ],
    "pages": [
      { "name": "Home", "path": "/", "desc": "USD Halo is a reward-bearing digital dollar. It stays pegged, stays liquid, and routes idle balances into vetted strategies without asking you to manage anything." },
      { "name": "Network", "path": "/network/", "desc": "How the peg holds, where reserves sit, and what happens on a bad day." },
      { "name": "Ecosystem", "path": "/ecosystem/", "desc": "The ways teams put the coin to work — treasury, payouts, settlement and more." },
      { "name": "Rewards", "path": "/rewards/", "desc": "Where the yield comes from, in four steps and no euphemisms." },
      { "name": "News", "path": "/news/", "desc": "Protocol updates, attestations and the occasional post-mortem." },
      { "name": "Get started", "path": "/contact/", "desc": "Talk to the team about an integration or a treasury allocation." }
    ]
  },
  {
    "id": "cordex",
    "name": "Cordex",
    "slug": "cordex",
    "dodoProductId": "pdt_0NnZBOeOYOdzXfTOoU9UK",
    "tagline": "An industrial catalogue for a manufacturer whose customers read spec sheets.",
    "description": "Cordex is a B2B manufacturing site organised around a real catalogue: five product families, each with its own page, sat beside the industries served and a technical section that explains how to read the numbers — including what they do not mean. The notes section runs standards explainers from the test bench. Built for component manufacturers and suppliers selling into an audited supply chain.",
    "framework": "astro",
    "category": "professional-services",
    "categories": [
      "professional-services",
      "transportation",
      "technology"
    ],
    "price": 59,
    "featured": true,
    "badge": "Most complete",
    "liveUrl": "https://cordex-dn2.pages.dev",
    "techStack": [
      "Astro",
      "Spec tables",
      "Responsive CSS",
      "RSS"
    ],
    "features": [
      "Five product family pages: Vantex CH, VH10, AG, Flexrun PS, RX",
      "Industries breakdown across construction, EV, bus, rail and agriculture",
      "Technical page explaining how to read each figure",
      "Abrasion, temperature and fire standards tables",
      "Test-bench notes section",
      "Free sample request keyed to duty cycle"
    ],
    "pages": [
      { "name": "Home", "path": "/", "desc": "Cordex makes braided and extruded sleeving that keeps looms alive under heat, abrasion and vibration. Tested to the standards our customers are audited against." },
      { "name": "Product range", "path": "/products/", "desc": "The full Cordex range, with the standards each product is tested to." },
      { "name": "Product detail", "path": "/products/vantex-ch/", "desc": "Heavy braided sleeving for plant that works in grit. Built for scrape resistance first and everything else second." },
      { "name": "Industries", "path": "/industries/", "desc": "Where Cordex sleeving is specified, and what each sector tests for." },
      { "name": "Technical", "path": "/technical/", "desc": "The standards Cordex tests to, and how to read the numbers." },
      { "name": "Notes", "path": "/notes/", "desc": "Technical notes, standards explainers and test results." },
      { "name": "Request samples", "path": "/contact/", "desc": "Tell us the loom and the duty cycle." }
    ]
  },
  {
    "id": "dental-health",
    "name": "Dental Health",
    "slug": "dental-health",
    "dodoProductId": "pdt_0NnZBOgzUrvcM9GiPJ7Ja",
    "tagline": "A dental practice site with treatment pages, a smile gallery and same-day booking.",
    "description": "Dental Health behaves like a front desk. Every treatment lists visit count and chair time first, because those are the two things people actually want to know. Four treatments get their own pages, a dental-emergency route stays reachable from every screen, and the about page commits to four rules including the honest option first and no silent upselling. Suited to dental practices, clinics and single-location providers who book by appointment.",
    "framework": "astro",
    "category": "medical",
    "categories": [
      "medical",
      "wellness",
      "professional-services"
    ],
    "price": 49,
    "featured": false,
    "liveUrl": "https://dental-health.pages.dev",
    "techStack": [
      "Astro",
      "Booking form",
      "Responsive CSS",
      "RSS"
    ],
    "features": [
      "Four treatment pages: veneers, crowns, whitening, implants",
      "Visit count and chair time listed on every treatment",
      "Persistent dental-emergency route with held slots",
      "Smile gallery of unretouched cosmetic work",
      "Practice rules page: longer appointments, no silent upselling",
      "Plain-language journal explainers"
    ],
    "pages": [
      { "name": "Home", "path": "/", "desc": "A dental practice built around unhurried appointments, plain explanations and equipment that earns its place. Same-day emergencies, always." },
      { "name": "Services", "path": "/services/", "desc": "Treatments we offer, what each one involves, and how many visits it takes." },
      { "name": "Treatment detail", "path": "/services/veneers/", "desc": "Thin porcelain facings bonded to the front of a tooth, used to change shape, colour or alignment." },
      { "name": "About the practice", "path": "/about/", "desc": "How the practice runs, and the four rules it will not bend on." },
      { "name": "Journal", "path": "/journal/", "desc": "Plain-language explainers and practice news." },
      { "name": "Book appointment", "path": "/book/", "desc": "Request an appointment, or call the practice directly." }
    ]
  },
  {
    "id": "hollow-press",
    "name": "Hollow Press",
    "slug": "hollow-press",
    "dodoProductId": "pdt_0NnZBOil1Q9tdK41kgvXQ",
    "tagline": "An independent record label with a catalogue, pressing notes and a demo inbox.",
    "description": "Hollow Press is built for a label that presses small runs and wants the catalogue to read like an archive. Releases carry format and edition size, the notes section runs essays on pressing economics and why the label refuses repress money, and the demo page promises a real reply in six weeks rather than a polite template. Fits record labels, publishers and small-batch makers who release on a schedule.",
    "framework": "astro",
    "category": "music-and-audio",
    "categories": [
      "music-and-audio",
      "arts-and-entertainment",
      "blog-and-editorial"
    ],
    "price": 55,
    "featured": true,
    "badge": "Featured",
    "liveUrl": "https://hollow-press.pages.dev",
    "techStack": [
      "Astro",
      "Editorial layout",
      "Responsive CSS",
      "RSS"
    ],
    "features": [
      "Catalogue in release order with four record pages",
      "Format, edition size and catalogue number per release",
      "Liner essays on mastering cost and repressing",
      "Demo submission with a stated six-week reply",
      "Label history page",
      "RSS feed"
    ],
    "pages": [
      { "name": "Home", "path": "/", "desc": "Hollow Press cuts small runs of music that would not survive a committee. Nine releases a year, pressed in editions of five hundred, mastered loud enough to hear the room." },
      { "name": "Catalogue", "path": "/catalogue/", "desc": "Every Hollow Press release, in catalogue order." },
      { "name": "Release detail", "path": "/catalogue/tidal-flats/", "desc": "Six long pieces for prepared piano and tape hiss, recorded in an unheated church over one February." },
      { "name": "Notes", "path": "/notes/", "desc": "Liner essays, shop news and the occasional complaint about pressing plants." },
      { "name": "Send a demo", "path": "/demos/", "desc": "We listen to everything, slowly." },
      { "name": "About the label", "path": "/about/", "desc": "How the label works, and the four rules it will not bend on." }
    ]
  },
  {
    "id": "toonhub",
    "name": "Toonhub",
    "slug": "toonhub",
    "dodoProductId": "pdt_0NnZBOo2vNeXHZA6yXjBn",
    "tagline": "A small-run collectibles storefront organised by numbered drops.",
    "description": "Toonhub sells short runs, so the site is organised by drop rather than by stock. Four figures each get a product page with finishing notes, the drops section doubles as a release log covering 700 casts, and the whole layout assumes a run sells out and never returns. The about page states the rules plainly: four a year, numbered then gone, original casts only. Built for collectibles and limited-edition makers.",
    "framework": "astro",
    "category": "retail-and-e-commerce",
    "categories": [
      "retail-and-e-commerce",
      "arts-and-entertainment"
    ],
    "price": 55,
    "featured": false,
    "liveUrl": "https://toonhub-7o7.pages.dev",
    "techStack": [
      "Astro",
      "Product pages",
      "Responsive CSS",
      "RSS"
    ],
    "features": [
      "Figure catalogue with four product pages",
      "Per-figure finishing and casting notes",
      "Drops index doubling as a release log",
      "Numbered-edition product layout",
      "Studio rules page: four a year, never recast",
      "RSS feed"
    ],
    "pages": [
      { "name": "Home", "path": "/", "desc": "Toonhub casts short runs of original vinyl figures. Four drops a year, numbered, and never repeated once the run is gone." },
      { "name": "Figures", "path": "/figures/", "desc": "Every Toonhub figure, in series order." },
      { "name": "Figure detail", "path": "/figures/bell-hop/", "desc": "The first cast. Round-eared, slightly stooped, holding nothing at all." },
      { "name": "Drops", "path": "/drops/", "desc": "Release announcements and restocks." },
      { "name": "About the studio", "path": "/about/", "desc": "How the studio works." }
    ]
  },
  {
    "id": "meridian-ev",
    "name": "Meridian",
    "slug": "meridian-ev",
    "dodoProductId": "pdt_0NnZBOrYSmKkUAfmMmpfb",
    "tagline": "An EV marque site for vehicles meant to be opened and serviced.",
    "description": "Meridian is a vehicle marque site that argues its engineering rather than asserting it. Three model pages carry full specifications, the engineering section names four decisions and what each one costs, and the service section publishes every maintenance document free and unversioned behind no login. Reservations are refundable until the body goes on the line. Fits vehicle makers, hardware companies and any product sold on repairability.",
    "framework": "astro",
    "category": "transportation",
    "categories": [
      "transportation",
      "technology",
      "environment"
    ],
    "price": 59,
    "featured": true,
    "badge": "Featured",
    "liveUrl": "https://meridian-ev.pages.dev",
    "techStack": [
      "Astro",
      "Spec tables",
      "Responsive CSS",
      "RSS"
    ],
    "features": [
      "Three model pages: M/1 Estate, M/2 Panel Van, M/3 Utility",
      "Range, charge time and kerb weight spec blocks",
      "Engineering page costing four design decisions",
      "Public service documentation section",
      "Refundable reservation flow",
      "Engineering journal and service bulletins"
    ],
    "pages": [
      { "name": "Home", "path": "/", "desc": "Meridian builds electric vehicles that can be opened, diagnosed and repaired by anyone with the manual. Every part number is public and every service procedure ships with the car." },
      { "name": "Vehicles", "path": "/vehicles/", "desc": "The full Meridian range, with complete specifications." },
      { "name": "Model detail", "path": "/vehicles/m1-estate/", "desc": "The long-roof car the range started with. Two motors, twelve modules, and a boot you can sleep in." },
      { "name": "Engineering", "path": "/engineering/", "desc": "Four decisions that shape every Meridian, and what each one costs." },
      { "name": "Service", "path": "/service/", "desc": "Every document needed to maintain the car, free and public." },
      { "name": "Journal", "path": "/journal/", "desc": "Engineering notes and service bulletins." },
      { "name": "Reserve", "path": "/reserve/", "desc": "Place a refundable reservation, or ask a question first." }
    ]
  },
  {
    "id": "drift-planner",
    "name": "Drift",
    "slug": "drift-planner",
    "dodoProductId": "pdt_0NnZBOtZ8UcwppOlCaAlo",
    "tagline": "A low-stimulation SaaS landing page for a calm, ADHD-friendly planner.",
    "description": "Drift practises what it sells: no streaks, no badges, no red, no notifications by default. The approach page is built entirely around the four patterns the product refuses to ship, the features page argues for less arranged better, and the sign-up page has no card and no trial clock. Type is large, motion is slow, and the case is made in short sections rather than a feature wall. Suited to wellness software and focus tools.",
    "framework": "astro",
    "category": "technology",
    "categories": [
      "technology",
      "wellness",
      "launch-and-coming-soon"
    ],
    "price": 39,
    "featured": false,
    "liveUrl": "https://drift-planner.pages.dev",
    "techStack": [
      "Astro",
      "Low-motion design",
      "Responsive CSS",
      "RSS"
    ],
    "features": [
      "Calm, low-stimulation design system",
      "Features page arguing for less, arranged better",
      "Approach page built on four refusals",
      "No-card, no-trial-clock sign-up page",
      "Journal on attention and quiet software"
    ],
    "pages": [
      { "name": "Home", "path": "/", "desc": "Drift is a quiet, low-stimulation planner that turns a scattered head into one clear next step. No streaks, no badges, nothing that shouts." },
      { "name": "Features", "path": "/features/", "desc": "What Drift does, and what it deliberately does not." },
      { "name": "Approach", "path": "/approach/", "desc": "The four things Drift refuses to do, and why." },
      { "name": "Journal", "path": "/journal/", "desc": "Notes on attention, planning, and building quiet software." },
      { "name": "Start for free", "path": "/start/", "desc": "Join the early access list." }
    ]
  }
];
