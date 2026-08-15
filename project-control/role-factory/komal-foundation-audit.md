# Komal publishing foundation audit

Date: 2026-08-16
Repository: `alpeshznakrani/komalnakrani`
Issue: [#1](https://github.com/alpeshznakrani/komalnakrani/issues/1)
Verdict: **clean visual shell with publication foundations still to build**

## Authoritative ownership boundary

The Astro application was intentionally copied from AlpeshNakrani.com only for
its visual structure. Its typography, spacing, component language, and editorial
route patterns are approved. Its identity, biography, books, manuscripts,
figures, covers, recommendations, solution pages, marketing claims, integrations,
and commercial links do not belong to Komal.

The initial full-site upload was stopped when this boundary was clarified. The
active source now contains no inherited author content and no generic relabeling.
Every Komal book will be scoped, researched, written, illustrated, reviewed, and
attributed from scratch.

## Verification baseline

- Removed 1,477 inherited tracked files from the active tree.
- Removed old catalog records, 407 inherited MDX chapters, 408 inherited figure
  files, 35 cover records, solution/landing pages, identity media, testimonials,
  third-party sales links, analytics, booking, and agent-discovery integrations.
- `npm install --package-lock-only --ignore-scripts`: PASS.
- `npm run build`: PASS on Node 22.23.1 / npm 10.9.8.
- Astro generated 4 static pages in 1.36 seconds: home, roles, books, and 404.
- Dependency audit: 7 advisories (1 low, 6 high). No breaking force-upgrade was applied.
- Targeted source scan outside factory records found no Alpesh, ViitorCloud,
  Amazon, or booking-link residue.

## Preserved visual foundation

- `src/styles/theme.css`: established light technical/editorial tokens and responsive primitives.
- `src/styles/components.css`: reusable page, card, reader, navigation, and publication layout styles.
- `src/components/Btn.astro`, `Icon.astro`, and `K.astro`: generic visual primitives.
- New Komal masthead, footer, CSS cover, and book card use the existing visual language.
- Home, role library, book library, book overview, and chapter route patterns are retained as lean scaffolding.

## Capability matrix

| Capability | State | Evidence | Next requirement |
| --- | --- | --- | --- |
| Komal identity shell | Implemented | `src/layouts/Layout.astro`, masthead, footer, favicon/manifest | Add reviewed biography/contact data only when supplied. |
| Role catalog | Scaffolded | `src/data/publications.ts`, `src/pages/roles/index.astro` | Add typed role evidence, boundary, competency, and publication mappings. |
| Book catalog | Scaffolded | `BOOKS`, `/books`, `BookCard`, CSS `Cover` | Add only original reviewed publication records. |
| Series and volumes | Typed | `Book.series`, `Book.volume` | Add canonical series identity and ordering validation. |
| Editions/status | Partial | `Book.edition`, `PublicationStatus`; public routes filter to `published` | Add semantic versions, dates, hashes, supersession, and immutable manifests. |
| Chapter routes | Scaffolded | `/books/[id]` and `/books/[id]/[chapter]` | Connect canonical MDX manuscripts and reject missing or orphan chapters. |
| Sources | Missing | no source records retained | Add structured source registry and claim/chapter traceability before writing. |
| Figures | Missing by design | inherited figure library removed | Add original figure manifests, alt text, captions, and file validation per book. |
| PDF delivery | Missing by design | inherited PDF scripts removed | Create a reproducible generator from canonical manuscripts and verify output. |
| Errata | Missing | no model or route | Add edition-scoped errata records and public pages. |
| Courses | Missing | no course model/routes | Decide per role under `BUILD_COURSE: AUTO`; not universally required. |
| Role state | Factory-level only | this state file | Create `project-control/roles/<slug>/ROLE-STATE.md` with the first role issue. |

## Required foundation work

### P0 — publication truth model

Define role, book, series, volume, edition, source, claim, figure, erratum, and
publication-manifest schemas. Only `published` records may generate public routes.

### P0 — canonical manuscript and validation pipeline

Introduce fresh MDX manuscript storage and a validation command that rejects
missing metadata, unmapped objectives, source gaps, broken figures, duplicate
chapter identities, accessibility failures, or edition mismatches.

### P0 — reproducible reading and PDF outputs

Render the same canonical manuscript into accessible web chapters and versioned
PDFs. Publish a download only when its manifest, checksum, page count, and visual
QA pass.

### P1 — errata and lifecycle

Expose edition-scoped errata and make superseded/withdrawn status explicit without
breaking canonical links.

### P2 — dependency maintenance

Audit the remaining 7 advisories in a scoped issue. Do not mix breaking dependency
upgrades into role research or manuscript work.

## Exact next executable action

After issue #1 closes on the verified lean GitHub baseline, open one Komal
foundation issue implementing the typed publication truth model, source registry,
canonical MDX loader, validation command, edition/errata routes, original-figure
manifest, and reproducible PDF delivery before the first role begins.
