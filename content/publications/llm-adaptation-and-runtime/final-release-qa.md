# Final release QA - LLM Adaptation and Runtime

Released: 2026-08-17 (Asia/Kolkata)

## Disposition

**PASS - PUBLISHED FIRST EDITION.** Volume 2 of the LLM Engineering series is published as version 1.0.0. The canonical web route and PDF download are enabled. This publication decision releases an educational edition only; it does not claim real training, model execution, benchmarking, adapter or checkpoint creation, deployment, production exposure, customer evidence, or organizational approval.

## Release source state

- Manifest: `status: published`, `edition.label: First edition`, `edition.publishedAt: 2026-08-17`, and `pdf.enabled: true`.
- Canonical URL: `https://komalnakrani.com/books/llm-adaptation-and-runtime/`.
- Canonical PDF filename: `llm-adaptation-and-runtime-v1.0.0.pdf`.
- Assembly: 17 chapters, five part introductions with starts `[1, 4, 9, 14, 17]`, seven appendices, 34 figures, 34 exact chapter-to-registry figure bindings, 57 source records, 51 claims, and zero recorded errata.
- `SRC-027` uses the current Google Cloud Gemini Enterprise Agent Platform destination and records access on 2026-08-17 while retaining its managed-implementation volatility and judge-calibration limitations.
- Product, domain, data, privacy/legal, security/safety, platform/SRE, incident, risk, and release authority remain separate from the LLM Engineer's technical evidence and recommendation.

## Deterministic optimized final PDFs

Both final files were built independently without `--proof` using the bundled PDF runtime and the same published source.

| Evidence | Final build 1 | Final build 2 |
| --- | --- | --- |
| PDF SHA-256 | `36199bf5e69a13502cbbdee4ba8a12a0fb606c04f3577c6870e82822cb93ccd4` | `36199bf5e69a13502cbbdee4ba8a12a0fb606c04f3577c6870e82822cb93ccd4` |
| Source SHA-256 | `1726b7c5534682e291e7946b5d626f60ccccdacf88e5284c0240a4fc439ad4bc` | `1726b7c5534682e291e7946b5d626f60ccccdacf88e5284c0240a4fc439ad4bc` |
| Bytes | 12,828,329 | 12,828,329 |
| Pages | 156 A4 | 156 A4 |
| Chapters / appendices / figures / sources / errata | 17 / 7 / 34 / 57 / 0 | 17 / 7 / 34 / 57 / 0 |
| Generated-at policy | `2026-08-17` | `2026-08-17` |

- PDF and adjacent build manifests compare byte for byte.
- The deterministic builder uses compressed page streams and embeds raster figures as quality-82, non-progressive JPEG streams without color subsampling. No non-deterministic postprocessor was applied. `pdfinfo` reports `Optimized: no` because the file is not Fast-Web-View linearized; this does not negate content-stream and image compression.
- The installed file at `public/downloads/llm-adaptation-and-runtime-v1.0.0.pdf` is byte-identical to both accepted final builds and has the same SHA-256.

## PDF structural and security audit

- Metadata: correct title, subject, author, producer, and deterministic 2000-01-01 creation/modification timestamps.
- Geometry: 156 A4 pages, PDF 1.4, zero rotation.
- Searchable text: all 156 pages contain extractable text; zero empty-text pages; minimum 51 and maximum 3,547 extracted characters per page.
- Outline: 35 recursive entries with zero unresolved destinations. The builder summary records 17 top-level chapter bookmarks; the recursive audit also includes front matter, five parts, seven appendices, and registries.
- Links: 127 total annotations: 70 internal and 57 external, covering 57 unique external source URLs; zero targetless links.
- Security/active content: not encrypted; zero forms, widgets, or JavaScript.

## Full rendered-page inspection

- Rasterized all 156 final-release pages at 72 DPI and reviewed six 26-page contact sheets.
- Re-rendered the cover, final front matter, Appendix G publication identity, release record, source register, and edition record at 150 DPI.
- No clipping, overlap, missing glyphs, broken images, blank assembly pages, malformed tables, bad section transitions, or footer/page-number defects were found.
- All 34 figures remain crisp, captioned, and legible. The new published state, canonical filename, publication date, and edition record render correctly.

## Validation and traceability

- Volume 2 deterministic companion: 68/68 tests pass.
- Volume 2 traceability symmetry: pass for 17 chapters, seven appendices, 57 sources, 51 claims, 34 figures, 34 exact chapter-to-registry figure bindings, six production batches, 36 declared case links, and 11 distinct cases.
- Figure-binding regression test: pass; empty, missing, extra, mismatched, or reordered chapter `figureIds` fail the Volume 2 audit.
- Publication validation: pass for four role records and five publication records.
- Publication validation tests: 4/4 pass.
- Full repository `npm run check`: pass, including schema validation, PDF artifact tests, all configured companion/course tests, production Astro build, and built-site reference audit.
- Built site: 129 HTML pages; 2,341 local `href`/`src` references resolve.

## Web and download smoke test

The local production preview returned HTTP 200 for:

- `/books/`;
- `/books/llm-adaptation-and-runtime/`;
- the first and final chapter routes;
- the edition index and version 1.0.0 record;
- the errata index;
- `/downloads/llm-adaptation-and-runtime-v1.0.0.pdf` with `application/pdf` and 12,828,329 bytes;
- a representative Volume 2 figure asset with `image/png`.

The production build contains all 17 chapter routes and 34 PNG figure assets. The overview exposes First edition, 2026-08-17, the canonical URL, and the enabled PDF download. The built download is byte-identical to the accepted final artifact.

## Release boundary

Version 1.0.0 is now a published educational edition. Mosaic Desk and all adaptation, data, training, package, resource, serving, incident, and release examples remain fictional, synthetic, simulated, or tabletop evidence exactly as labeled. Any later material source, manuscript, figure, registry, companion, metadata, or builder change requires reviewed edition handling and new deterministic artifact evidence; the published PDF must not be silently replaced under the same identity.

No Git commit, push, GitHub mutation, role/factory-state change, new book, or course work was performed in this release lane.
