# Phase 11 historical review-proof QA (superseded)

> **Historical evidence notice:** This file preserves the deterministic review-proof evidence captured before publication. Its review-state metadata and proof hashes are historical and have been superseded as the current release authority by [`final-release-qa.md`](./final-release-qa.md) and the published [`publication.json`](./publication.json).

## Historical scope and disposition

- Publication: `llm-adaptation-and-runtime`, Volume 2 of the LLM Engineering series.
- Proof-time disposition: **deterministic review-proof pass; not yet published at the time this evidence was recorded**.
- Proof-time invariant: `status` was `review`, `edition.publishedAt` was `null`, and `pdf.enabled` was `false`.
- Current release disposition: **published First edition**, dated `2026-08-17`, with `pdf.enabled: true`; see the current manifest and final release QA linked above.
- Scope boundary: this historical report covered Volume 2 front matter, part introductions, appendices, review metadata, and proof inspection. Phase 10 figures, assets, mirrors, registry, common provenance, and common manifest remained separately owned.

## Complete-edition source assembly

- Front matter: at proof time, present in `front-matter/front-matter.md` and identifying the file as a review edition rather than a published edition.
- Part introductions: five introductions in `front-matter/part-introductions.md`, aligned with chapter starts 1, 4, 9, 14, and 17.
- Chapters: 17 chapter source files remain assembled in manifest order.
- Appendices: seven Volume2-local appendices are present after the chapters.
- Registries: source, claim, figure, and errata registry paths remain bound in `publication.json`.
- Boundaries: Mosaic Desk remains fictional; its data, run values, candidates, capacity, incident, and release evidence remain synthetic or simulated. No real training, model execution, benchmark, adapter/checkpoint creation, deployment, production incident, or release is claimed.
- Authority: product, domain, data, privacy/legal, security, platform/SRE, risk, and release authority remain separate from the LLM Engineer's technical recommendation.

## Historical metadata review

- Proof-time edition label: `First edition review`.
- Part starts: `[1, 4, 9, 14, 17]`.
- Appendix summary: present and aligned with the seven appendix source files.
- Figure registry note: declares 34 original synthetic PNG teaching figures and excludes measured model, product, user, capacity, and production interpretations.
- Proof-time publication state: review only.
- Proof-time publication date: null.
- Proof-time canonical PDF: disabled.

## Source-assembly validation

- Publication schema/source validation: pass.
- Publication validation tests: pass, including optional part-boundary and publication-note coverage.
- Expected source structure: 17 chapters, five part introductions, and seven appendices.
- Whitespace/error check for the owned publication source: pass.

## Visual gate

- Figure registry: 34 accepted Volume 2 records, V2-F01.1 through V2-F17.2.
- Integration: every one of the 17 chapters contains exactly two non-pending figure blocks and two image elements.
- Assets: 34 canonical PNG files and 34 public PNG mirrors; all corresponding hashes are byte-identical.
- Completeness: dimensions, alt text, long descriptions, captions, hashes, and provenance are present.
- Formats: no canonical SVG or WebP figure asset.
- Disposition: pass.

## Deterministic review proofs

Both proofs were built independently with the bundled PDF runtime from the same assembled source. The resulting PDFs are byte-identical.

| Evidence | Proof 1 | Proof 2 |
| --- | --- | --- |
| PDF SHA-256 | `09d4b2cd13614759d922735d689766ad68ef8054c0f7a11db2f96a2d9d1c3aa5` | `09d4b2cd13614759d922735d689766ad68ef8054c0f7a11db2f96a2d9d1c3aa5` |
| Source SHA-256 | `1fe0ab331f907049c143e1fe90ce96e204ad1c0668980b3079f232b79ee76460` | `1fe0ab331f907049c143e1fe90ce96e204ad1c0668980b3079f232b79ee76460` |
| Bytes | 12,828,137 | 12,828,137 |
| Pages | 156 A4 | 156 A4 |
| Chapters / appendices / figures / sources / errata | 17 / 7 / 34 / 57 / 0 | 17 / 7 / 34 / 57 / 0 |
| Generated timestamp | null | null |

- File comparison: byte-for-byte pass.
- PDF metadata: deterministic creation and modification dates of 2000-01-01 UTC; title, author, subject, and version are correct.
- Security and active content: not encrypted; zero forms; zero JavaScript.
- Searchable text: all 156 pages contain extractable text; zero empty-text pages.
- Outline: 35 recursive entries, all destinations resolved. The builder summary reports 17 top-level chapter bookmarks; the recursive audit additionally covers front matter, five parts, seven appendices, and registries.
- Links: 127 annotations total: 57 external and 70 internal; zero targetless links. The external set contains 57 unique source URLs.
- Geometry: A4 throughout.

## Rendered-page inspection

- Rasterized all 156 pages at 72 DPI and reviewed six 26-page contact sheets.
- Re-rendered and reviewed 24 critical pages at 120 DPI: cover, copyright, contents, all five part starts, the first chapter after each part boundary, appendices landing page, all seven appendix starts, figure registry, sources, and edition record.
- No visible clipping, overlap, missing glyphs, broken images, blank assembly pages, malformed tables, or bad section transitions.
- Figures remain crisp and legible with their captions; dense registry and source pages remain within the page bounds.
- The edition record's `Published: None` was the truthful rendering of `edition.publishedAt: null` for this historical review-only proof, not a statement of the current published edition.

## Traceability and proof-time state

- Forward/reverse source and claim symmetry: pass for 57 sources and 51 claims.
- Forward/reverse case-study symmetry: pass for 36 declared links spanning 11 cases.
- Production case placements: all 18 declared placements expose the full case identifier visibly.
- Companion validation: 68/68 tests pass.
- Publication schema/source validation and publication tests: pass.
- Originality scan: zero exact duplicate paragraphs and zero nontrivial cross-file 12-gram overlaps above the review threshold.
- Retained proof-time state: `status: review`, `edition.publishedAt: null`, and `pdf.enabled: false`. This state applies only to the historical proof recorded here and is not the current manifest state.

## Historical release boundary and current authority

At the time this evidence was recorded, the complete-edition source and both deterministic files passed the review-proof gate but had not passed the publication gate; no release PDF was then enabled and no publication date had then been asserted. Those proof-time files and hashes remain valid historical evidence for that review snapshot.

That disposition is superseded. The current `publication.json` records the published First edition dated `2026-08-17` with its canonical PDF enabled, and `final-release-qa.md` records the accepted final-release hashes, render inspection, validation, and web checks. Any future material source, figure, registry, metadata, or builder change remains subject to the current edition and release controls documented there.
