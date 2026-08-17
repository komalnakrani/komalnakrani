# Phase 11 Publication Release QA — LLM Behavior Engineering Volume 1

Status: **PASS — published First edition**

Release date: `2026-08-17`

This report records the final release transition for *LLM Behavior Engineering*, Volume 1 only. It does not revise the accepted manuscript, figures, companion behavior, source boundaries, professional-role boundaries, or synthetic-case disclosures. The historical review-proof report remains a record of the earlier review state.

## Published identity

- Publication: `llm-behavior-engineering`
- Version: `1.0.0`
- Edition label: `First edition`
- Manifest state: `status: published`
- Publication date: `edition.publishedAt: 2026-08-17`
- PDF disposition: `pdf.enabled: true`
- Canonical download: `/downloads/llm-behavior-engineering-v1.0.0.pdf`
- Chapters: 16
- Appendices: 6
- Figures: 32
- Sources: 43
- Recorded errata: 0

The refreshed `SRC-027` record remains unchanged during the publication transition. The final SHA-256 of `sources.json` is `00d6c11c2938c935381fa86ec5e3d6c65efc840ef2808e57ba75fa056a8e8604`.

## Deterministic final PDF

Two final builds were produced with the accepted shared builder without `--proof` from unchanged inputs:

| Build | Location | Bytes | Pages | PDF SHA-256 | Source SHA-256 |
| --- | --- | ---: | ---: | --- | --- |
| A | `output/pdf/llm-behavior-engineering-final-a/llm-behavior-engineering-v1.0.0.pdf` | 10,997,350 | 210 | `5cd5d16cd69c3c766fafa737812918cb1f37f34a91cb6753c7db044cd8c9375b` | `3e52cd46a0cd710d3cdf2e3f7e3733373c389845d1160bbe4226f758f79af957` |
| B | `tmp/pdfs/llm-behavior-engineering-final-b/llm-behavior-engineering-v1.0.0.pdf` | 10,997,350 | 210 | `5cd5d16cd69c3c766fafa737812918cb1f37f34a91cb6753c7db044cd8c9375b` | `3e52cd46a0cd710d3cdf2e3f7e3733373c389845d1160bbe4226f758f79af957` |

Builds A and B are byte-identical. The exact A artifact was installed at `public/downloads/llm-behavior-engineering-v1.0.0.pdf`; the public file and the emitted `dist` file are byte-identical to both builds and retain the same PDF digest.

## PDF structure, text, links, and security

The audit was run against the installed public PDF.

- 210 pages, all A4 at `595.276 × 841.89` points, with zero rotations.
- 390,151 searchable text characters; zero empty-text pages and zero replacement-glyph pages.
- Search checks found the title, First edition language, `Published: 2026-08-17`, `SRC-027`, and `Evaluate a judge model`.
- Deterministic creation and modification dates are both `2000-01-01T00:00:00Z`.
- Metadata title is `LLM Behavior Engineering`; author is `Komal Nakrani`.
- 33 recursive outline entries; all generated outline destinations resolve.
- 109 link annotations: 43 external source links, 66 internal links, and zero targetless links.
- Not encrypted; no AcroForm, JavaScript, embedded files, or open action.
- PDF version 1.4; the accepted shared builder's artifact opens and parses without structural error.

## Complete render review

The installed PDF was rendered at 144 DPI to 210 PNG pages (`1191 × 1684` each). Ten contact sheets cover pages 1–210 with no omissions. Every contact sheet was visually inspected, followed by full-resolution inspection of the cover, part and chapter transitions, dense formula/code and table pages, figure pages, Appendix F, figure registry, sources, and edition record.

Result: no clipping, overlap, frame loss, black boxes, missing glyphs, malformed tables/code, unreadable labels, broken figures, unexpected blank pages, or footer/header collisions were found. The edition record on page 210 visibly records version `1.0.0` and publication date `2026-08-17`.

The 32 canonical figure PNGs remain byte-identical to their 32 public mirrors. No figure or figure registry was changed during this transition.

## Executable and publication validation

| Gate | Result |
| --- | --- |
| Volume 1 companion tests | PASS — 64/64 |
| V1 source/claim/case symmetry audit | PASS — 16 chapters, 43 sources, 48 claims, 99 source-chapter links, 117 source-claim links, 48 production-claim links, 19 production-case links, 0 errors |
| `npm run validate:publications` | PASS — 4 role records, 5 publication records |
| `npm run test:publications` | PASS — 4/4 |
| `npm run test:pdf-artifacts` | PASS — 3/3 |
| `npm run build` | PASS — 129 static pages |
| `npm run check:site` | PASS — 2,341 local `href`/`src` references |
| `npm run check:render` | PASS — 129 routes × 2 viewports = 258 checks, 0 failures |

The first render-check attempt used port 4333 and could not start because the repository's managed Astro preview was already active on port 4321. No route was tested in that attempt. The check was rerun against the active current build on port 4321 and passed all 258 viewport-route checks.

Explicit production-preview smoke checks returned HTTP 200 and expected content for:

- `/books/llm-behavior-engineering/`
- `/books/llm-behavior-engineering/the-model-is-not-the-behavior/`
- `/books/llm-behavior-engineering/editions/1.0.0/`
- `/books/llm-behavior-engineering/errata/`
- `/downloads/llm-behavior-engineering-v1.0.0.pdf`

The download response is `application/pdf`, 10,997,350 bytes, and SHA-256 `5cd5d16cd69c3c766fafa737812918cb1f37f34a91cb6753c7db044cd8c9375b`.

## Scope and authority boundary

Only Volume 1 publication metadata, front-matter release language, Appendix F edition language, the final V1 PDF, and this release report were changed. Volume 2, role/factory state, other books, courses, source claims, accepted figures, Git history, and GitHub state remain outside this lane. Publication identifies the reviewed artifact; it does not approve any model, product, deployment, residual risk, organizational decision, or downstream use.

The release artifact and QA evidence are ready for root-owned independent verification and Git/GitHub handling.
