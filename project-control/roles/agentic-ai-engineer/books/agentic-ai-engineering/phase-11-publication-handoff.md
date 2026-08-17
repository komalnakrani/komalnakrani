# Agentic AI Engineering - Phase 11 Publication Handoff

Prepared: 2026-08-17
Updated after final publication verification: 2026-08-17

## Current disposition

Phase 11 is locally complete under root issue #32. Original front matter, all six part introductions, and all six appendices are assembled. The optimized final edition passes at 600 pages and SHA-256 `787939e34f561fbc54e901ca258175786a3ad71926fc0c814112553071cc909a`; all pages and all public routes have been inspected. The manifest is `published`, `publishedAt` is `2026-08-17`, and the exact final PDF download is enabled. Final durable evidence is `project-control/roles/agentic-ai-engineer/qa/phase-11-publication-release.md`; the earlier review-proof evidence remains in `qa/phase-11-publication-assembly.md`.

## Accepted input

- The 20-chapter manuscript is complete at 176,372 chapter words.
- The deterministic Agentic companion passes 60/60 tests.
- Phase 10 visual certification passes with 40 original ImageGen PNG figures, two per chapter.
- `content/publications/agentic-ai-engineering/figures.json` contains 40 accessible records.
- Canonical and public figure directories contain 40 byte-identical PNGs each.
- Publication validation, publication tests, Astro build, built-site reference checking, and `git diff --check` pass.

The Phase 10 inputs are frozen unless a demonstrated visual or accessibility defect is found. Provenance lives in `imagegen-production-log.md`; certification evidence lives in `project-control/roles/agentic-ai-engineer/qa/phase-10-visual-verification.md`.

## Current publication state

`content/publications/agentic-ai-engineering/publication.json` is `published`, with version 1.0.0, First edition, published date 2026-08-17, and PDF enabled. The Astro build exposes the overview, 20 chapters, edition, and errata routes and installs the exact deterministic final PDF.

Agentic now has publication-level front matter, six part introductions, six appendices, a validated deterministic final PDF, an exact public mirror, and responsive web-route proof. Root issue #32 remains open only for root-owned independent verification, Git actions, and GitHub reconciliation.

## Phase 11 executable scope

1. Assemble original front matter, six part introductions, and architecture-required appendices without changing the accepted chapter or figure teaching claims.
2. Add publication-specific PDF assembly metadata, part boundaries, running-case/figure notes, edition identity, errata guidance, and professional/non-certification boundaries.
3. Transition only to a review release candidate first; keep `publishedAt` null, enable the PDF flag only for the local proof builder, and restore it to disabled after proofing.
4. Build the complete PDF twice and verify deterministic byte identity, source/PDF hashes, page count, searchable text, metadata, outline, internal/external links, and exact public download mirror.
5. Rasterize and inspect every PDF page for clipping, blank pages, broken glyphs, figures, captions, tables, code, part/appendix order, and page furniture.
6. Enable and inspect the complete web edition: overview, all 20 chapters, edition, errata, figures, navigation, canonical metadata, and desktop/mobile overflow.
7. Mark version 1.0.0 `published`, set `publishedAt`, and enable the PDF only after the exact rendered web/PDF artifacts pass.
8. Record final hashes and publication QA, then hand back for issue closure. Do not start a new role/book or Abhyaas work.

## Hard boundaries

- Preserve the existing light editorial Astro UI.
- Keep canonical figures as PNG; do not add SVG or stored WebP sources.
- Do not regenerate accepted Phase 10 artwork without a documented defect.
- Preserve FieldOps Relay as fictional and all synthetic examples as non-production evidence.
- Preserve explicit authority, identity, privacy, recovery, protocol, and professional-practice limitations.

Phase 11 publication delivery is locally complete. Root issue #32 and Phase 11
issue #73 remain unclosed; no commit or push was performed in this lane.
