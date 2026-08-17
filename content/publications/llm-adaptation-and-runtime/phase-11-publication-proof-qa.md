# Phase 11 publication proof QA

## Scope and current disposition

- Publication: `llm-adaptation-and-runtime`, Volume 2 of the LLM Engineering series.
- Current disposition: **deterministic review-proof pass; not published**.
- Publication invariant: `status` is `review`, `edition.publishedAt` is `null`, and `pdf.enabled` is `false`.
- Scope boundary: this report owns Volume 2 front matter, part introductions, appendices, review metadata, and later proof inspection. Phase 10 figures, assets, mirrors, registry, common provenance, and common manifest remain separately owned.

## Complete-edition source assembly

- Front matter: present in `front-matter/front-matter.md` and identifies the file as a review edition rather than a published edition.
- Part introductions: five introductions in `front-matter/part-introductions.md`, aligned with chapter starts 1, 4, 9, 14, and 17.
- Chapters: 17 chapter source files remain assembled in manifest order.
- Appendices: seven Volume2-local appendices are present after the chapters.
- Registries: source, claim, figure, and errata registry paths remain bound in `publication.json`.
- Boundaries: Mosaic Desk remains fictional; its data, run values, candidates, capacity, incident, and release evidence remain synthetic or simulated. No real training, model execution, benchmark, adapter/checkpoint creation, deployment, production incident, or release is claimed.
- Authority: product, domain, data, privacy/legal, security, platform/SRE, risk, and release authority remain separate from the LLM Engineer's technical recommendation.

## Metadata review

- Edition label: `First edition review`.
- Part starts: `[1, 4, 9, 14, 17]`.
- Appendix summary: present and aligned with the seven appendix source files.
- Figure registry note: declares 34 original synthetic PNG teaching figures and excludes measured model, product, user, capacity, and production interpretations.
- Publication state: review only.
- Publication date: null.
- Canonical PDF: disabled.

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
- The edition record's `Published: None` is the truthful rendering of `edition.publishedAt: null` for this review-only proof, not a publication claim.

## Traceability and final state

- Forward/reverse source and claim symmetry: pass for 57 sources and 51 claims.
- Forward/reverse case-study symmetry: pass for 36 declared links spanning 11 cases.
- Production case placements: all 18 declared placements expose the full case identifier visibly.
- Companion validation: 68/68 tests pass.
- Publication schema/source validation and publication tests: pass.
- Originality scan: zero exact duplicate paragraphs and zero nontrivial cross-file 12-gram overlaps above the review threshold.
- Retained publication state: `status: review`, `edition.publishedAt: null`, and `pdf.enabled: false`.

## Release boundary

This complete-edition source and both deterministic files pass the review-proof gate, not the publication gate. No release PDF is enabled and no published date has been asserted. Any later source, figure, registry, metadata, or builder change invalidates the proof source digest and requires the affected gates to rerun.
