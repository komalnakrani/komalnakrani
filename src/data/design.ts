/* =====================================================================
   Design constants for the "Komal Themes" design system.
   Source: Komal Themes.dc.html (Claude Design project).

   The design specifies a per-theme accent colour drawn from a muted,
   earthy palette that sits quietly against the cream/ink shell. The real
   theme records in themes.ts only carry `imageBg`, and all 200 of those
   resolve to one of 11 near-identical dark+orange gradients — not enough
   variety to key a card accent from, and the wrong hue family for this
   palette. So accents are assigned per category instead, which also makes
   cards in the same category read as a set.
   ===================================================================== */

import type { Theme, ThemeCategory } from './themes';

/** The design's accent palette, in the order it appears in the source file. */
export const ACCENTS = {
  sage: '#7C8F6B',
  clay: '#B08A6A',
  slate: '#6E7C8F',
  teal: '#5E7B72',
  mauve: '#9A7B8C',
  olive: '#8A8560',
  periwinkle: '#6D6F8F'
} as const;

const ACCENT_ORDER = [
  ACCENTS.sage,
  ACCENTS.clay,
  ACCENTS.slate,
  ACCENTS.teal,
  ACCENTS.mauve,
  ACCENTS.olive,
  ACCENTS.periwinkle
];

const CATEGORY_ACCENTS: Partial<Record<ThemeCategory, string>> = {
  'architecture-and-design': ACCENTS.slate,
  'arts-and-entertainment': ACCENTS.mauve,
  'blog-and-editorial': ACCENTS.mauve,
  'community-and-nonprofit': ACCENTS.teal,
  documentation: ACCENTS.periwinkle,
  education: ACCENTS.periwinkle,
  environment: ACCENTS.sage,
  'food-and-drink': ACCENTS.clay,
  government: ACCENTS.slate,
  'hair-and-beauty': ACCENTS.mauve,
  'home-services': ACCENTS.clay,
  'hr-and-hiring': ACCENTS.slate,
  'launch-and-coming-soon': ACCENTS.periwinkle,
  medical: ACCENTS.teal,
  'music-and-audio': ACCENTS.mauve,
  personal: ACCENTS.olive,
  'portfolio-and-agency': ACCENTS.slate,
  'professional-services': ACCENTS.slate,
  'real-estate': ACCENTS.clay,
  'retail-and-e-commerce': ACCENTS.clay,
  technology: ACCENTS.periwinkle,
  transportation: ACCENTS.slate,
  travel: ACCENTS.teal,
  'ui-kit': ACCENTS.olive,
  'weddings-and-events': ACCENTS.mauve,
  wellness: ACCENTS.sage
};

/** Stable 32-bit string hash — keeps generated values identical across builds. */
function hash(input: string): number {
  let h = 2166136261;
  for (let i = 0; i < input.length; i += 1) {
    h ^= input.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return Math.abs(h);
}

/** The card accent for a theme: category-keyed, hash-assigned as a fallback. */
export function accentFor(theme: Pick<Theme, 'slug' | 'category'>): string {
  return CATEGORY_ACCENTS[theme.category] ?? ACCENT_ORDER[hash(theme.slug) % ACCENT_ORDER.length];
}

/** Human label for the card's kind line, e.g. "PORTFOLIO & AGENCY". */
export function kindFor(theme: Pick<Theme, 'category'>): string {
  return theme.category.replace(/-and-/g, ' & ').replace(/-/g, ' ').toUpperCase();
}

/**
 * Display name with the edition suffixes stripped. Catalogue names carry
 * trailing parentheticals that blow out fixed-width tabs and card titles, so
 * those are dropped for display.
 */
export function nameFor(theme: Pick<Theme, 'name'>): string {
  return theme.name.replace(/\s*\([^)]*\)\s*$/, '').trim() || theme.name;
}

/* ---------------------------------------------------------------------
   Live preview resolution.

   An inner page needs exactly two things from you: the theme's brief (name,
   tagline, description, features — all already on the Theme record) and a URL
   to show in the iframe. Set `liveUrl` on the theme to point anywhere; leave
   it off and the URL is derived from the slug against the preview subdomain.
   --------------------------------------------------------------------- */

/** Subdomain host that slug-derived previews resolve against. */
export const PREVIEW_HOST = 'komalnakrani.com';

/** Strips the packaging noise out of a slug to get its preview subdomain label. */
export function cleanSlugFor(theme: Pick<Theme, 'slug'>): string {
  return theme.slug
    .replace(/\.theme\.io$/g, '')
    .replace(/theme-html-website-template/g, 'template')
    .replace(/theme-ecommerce-template/g, 'ecommerce')
    .replace(/-theme-/g, '-')
    .replace(/^theme-/g, '')
    .replace(/-theme$/g, '')
    .replace(/theme/g, 'komal')
    .replace(/-next$/g, '')
    .replace(/-astro$/g, '')
    .toLowerCase();
}

/** The URL embedded in every preview iframe for this theme. */
export function liveUrlFor(theme: Pick<Theme, 'slug' | 'liveUrl'>): string {
  return theme.liveUrl ?? `https://${cleanSlugFor(theme)}.${PREVIEW_HOST}`;
}

/** The host label shown in the fake browser address bar. */
export function liveHostFor(theme: Pick<Theme, 'slug' | 'liveUrl'>): string {
  try {
    return new URL(liveUrlFor(theme)).host;
  } catch {
    return `${cleanSlugFor(theme)}.${PREVIEW_HOST}`;
  }
}

/* ---------------------------------------------------------------------
   Launch / scarcity configuration.
   --------------------------------------------------------------------- */

export const DROP = {
  /** Countdown length in seconds (48h), per the design. */
  countdownSeconds: 172800,
  /** Licence ceiling per theme, used for the scarcity bar. */
  licenseCap: 200,
  /** Waitlist size shown in the hero and story block. */
  waitlist: 1284,

  /**
   * The all-access pass is the only price the pricing page quotes. Individual
   * themes carry their own `price` on the Theme record and are quoted on their
   * own cards and detail pages — never here.
   */
  allAccessPrice: 99,
  /** The pass's previous list price, struck through on the pass card. */
  allAccessWas: 199
} as const;

/** Discount the pass is currently advertised at, derived so copy can't drift. */
export const ALL_ACCESS_DISCOUNT = Math.round(
  (1 - DROP.allAccessPrice / DROP.allAccessWas) * 100
);

/**
 * What the all-access pass includes. Shared by the pricing page and the
 * homepage pass panel so the two can never disagree.
 */
export const PASS_INCLUDES = [
  'Every theme in the catalog',
  'Every theme released from here on — free, for as long as you own the pass',
  'Full source code — no obfuscation, no build-only bundles',
  'The shared component library every theme is built on',
  'Unlimited client and commercial projects',
  'Free updates for every theme you own, forever',
  'Direct email access to Komal',
  'One payment — there is nothing to renew'
];

/* ---------------------------------------------------------------------
   Dodo Payments — one-time digital products.

   The site is static, so we use Dodo's hosted checkout ("static payment
   links"). No API key ever reaches the browser and no server is required.
   Dodo is Merchant of Record: it handles tax, delivers the files and issues
   the licence key, then returns the buyer to RETURN_PATH.
   --------------------------------------------------------------------- */

export const DODO = {
  checkoutBase: 'https://checkout.dodopayments.com/buy',
  /** Where Dodo sends the buyer after payment. Must be an absolute URL. */
  returnUrl: 'https://komalnakrani.com/checkout/success/',
  /** Product id for the all-access pass. Set once created in Dodo. */
  allAccessProductId: 'pdt_0NnZBOvGt6qPNFYimLKVC' as string
} as const;

/**
 * Hosted checkout URL for a Dodo product, or null when the product has not
 * been created yet — callers render a disabled state rather than a dead link.
 */
export function checkoutUrl(productId: string | undefined, opts: { quantity?: number } = {}): string | null {
  if (!productId) return null;
  const params = new URLSearchParams({ redirect_url: DODO.returnUrl });
  if (opts.quantity && opts.quantity !== 1) params.set('quantity', String(opts.quantity));
  return `${DODO.checkoutBase}/${productId}?${params.toString()}`;
}

export interface PriceRange {
  min: number;
  max: number;
  /** True when every theme happens to share one price. */
  flat: boolean;
}

/**
 * The spread of individual theme prices. Copy says "from $min" so it stays
 * correct however the per-theme prices are set.
 */
export function priceRange(list: Array<Pick<Theme, 'price'>>): PriceRange {
  const prices = list.map((t) => t.price).filter((n) => Number.isFinite(n));
  if (prices.length === 0) return { min: 0, max: 0, flat: true };
  const min = Math.min(...prices);
  const max = Math.max(...prices);
  return { min, max, flat: min === max };
}

/** "$29" when every theme is the same price, otherwise "from $29". */
export function priceLabel(range: PriceRange): string {
  return range.flat ? `$${range.min}` : `from $${range.min}`;
}

export interface Scarcity {
  sold: number;
  total: number;
  remaining: number;
  percent: number;
  label: string;
  low: boolean;
}

/**
 * Per-theme licence counts. Derived from a hash of the slug so the bars are
 * deterministic — the same theme shows the same number on every build.
 */
export function scarcityFor(theme: Pick<Theme, 'slug'>): Scarcity {
  const total = DROP.licenseCap;
  const sold = 58 + (hash(theme.slug) % 139);
  const remaining = total - sold;
  return {
    sold,
    total,
    remaining,
    percent: Math.round((sold / total) * 100),
    label: remaining <= 15 ? `Only ${remaining} left` : `${sold} sold`,
    low: remaining <= 15
  };
}

/** Rotating social-proof entries shown in the fixed ticker. */
export const TICKS: Array<[string, string]> = [
  ['Priya in Bengaluru', 'bought the All-Access Pass'],
  ['Daniel in Berlin', 'bought a theme licence'],
  ['Mei in Singapore', 'joined the waitlist'],
  ['Rafael in Lisbon', 'bought a theme licence'],
  ['Sam in Austin', 'bought the All-Access Pass'],
  ['Nadia in Dubai', 'bought a theme licence']
];

/** Device frames for the live-preview panel. */
export const DEVICES = [
  { id: 'desktop', label: 'Desktop', w: 1000, h: 560, note: 'Desktop — 1440px viewport' },
  { id: 'tablet', label: 'Tablet', w: 640, h: 560, note: 'Tablet — 834 × 1112' },
  { id: 'mobile', label: 'Mobile', w: 340, h: 560, note: 'Mobile — 390 × 844' }
] as const;
