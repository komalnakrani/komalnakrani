# Phase 11 publication proof QA

## Scope and disposition

- Publication: `llm-behavior-engineering`, Volume 1 of the LLM Engineering series.
- Disposition: **review proof pass; not published**.
- Publication invariant after proof generation: `status` is `review`, `edition.publishedAt` is `null`, and `pdf.enabled` is `false`.
- Scope boundary: this review covers only Volume 1 publication source and proof output. It does not certify Volume 2 or authorize publication.

## Complete-edition source assembly

- Front matter: present in `front-matter/front-matter.md` and identifies the file as a review proof rather than a published edition.
- Part introductions: five introductions in `front-matter/part-introductions.md`, aligned with chapter starts 1, 5, 9, 13, and 16.
- Chapters: 16 chapter source files assembled in manifest order.
- Appendices: six Volume1-local appendices assembled after the chapters.
- Figures: 32 accepted canonical PNG figures, two per chapter, with a generated figure registry.
- Registries: 43 sources, claims registry, figures registry, zero-entry errata registry, and an edition record are assembled into the proof.

## Deterministic proof builds

Both proofs were built independently with the bundled PDF Python runtime and the repository PDF builder in proof mode.

| Check | Proof 1 | Proof 2 |
| --- | --- | --- |
| PDF filename | `llm-behavior-engineering-v1.0.0.pdf` | `llm-behavior-engineering-v1.0.0.pdf` |
| Page count | 210 | 210 |
| Bytes | 10,997,119 | 10,997,119 |
| PDF SHA-256 | `62476f25d475d42b790194b8c0dd15e0de79b2f82140e6725fbff6bcc6f60476` | `62476f25d475d42b790194b8c0dd15e0de79b2f82140e6725fbff6bcc6f60476` |
| Source SHA-256 | `01fd392df1bbe610a163848f71b0c5f9999f4c281c62e1b0a8ce7ec6f7e07018` | `01fd392df1bbe610a163848f71b0c5f9999f4c281c62e1b0a8ce7ec6f7e07018` |
| Chapter count | 16 | 16 |
| Appendix count | 6 | 6 |
| Figure count | 32 | 32 |
| Source count | 43 | 43 |
| Errata count | 0 | 0 |

- Byte comparison: identical.
- Build timestamps: suppressed; the proof manifests record `generatedAt` as `null`.
- PDF metadata dates: deterministic `2000-01-01` creation and modification dates.
- Page geometry: A4 throughout.

## Structural and interaction inspection

- Text extraction: all 210 pages contain extractable text; no empty-text page was found.
- Outline: 33 recursive outline entries resolve to pages. The builder's top-level bookmark metric is 17.
- Outline coverage: copyright and proof boundary, contents, five parts, 16 chapters, appendices, six appendix entries, figure registry, sources, and edition record.
- Links: 109 annotations inspected: 43 external URI links and 66 internal destinations.
- Link integrity: zero targetless annotations; all 43 external URIs are unique and retained in the source registry.
- Security and forms: no encryption, forms, or JavaScript.

## Rendered-page inspection

- All 210 pages were rasterized at 72 DPI and inspected in six contact sheets.
- Cover, copyright/proof boundary, contents, every part transition, representative chapter starts, all appendix transitions, figure registry, sources, and edition record were also inspected at 120 DPI.
- No visible clipping, overlap, missing figure, blank page caused by failed assembly, or missing glyph was observed.
- Figures remain legible and consistently placed with their captions and explanatory text.
- The edition record renders `Published: None`, which faithfully reflects the manifest's null publication date. The front matter and Appendix F explicitly identify the artifact as an unpublished review proof.

## Release boundary

These files are deterministic review artifacts only. Publication remains disabled in the manifest, no release PDF is enabled, and no published date has been asserted. A later release decision must rerun the publication gates after any source or metadata change.
