# Agentic AI Engineering - Phase 11 Publication Handoff

Prepared: 2026-08-17
Updated after review proof: 2026-08-17

## Current disposition

Issue #73 is active. Original front matter, all six part introductions, and all six appendices are assembled. Deterministic repaired proofs pass at 600 pages and SHA-256 `ebc7aacc416c7615a006f1c9aaa06fdcfb7e2ed8030f6475dcb0ad92df0a7419`; all pages have been rendered and inspected. The manifest is `review`, `publishedAt` is null, and PDF download remains disabled. Durable evidence is `project-control/roles/agentic-ai-engineer/qa/phase-11-publication-assembly.md`.

## Accepted input

- The 20-chapter manuscript is complete at 176,372 chapter words.
- The deterministic Agentic companion passes 60/60 tests.
- Phase 10 visual certification passes with 40 original ImageGen PNG figures, two per chapter.
- `content/publications/agentic-ai-engineering/figures.json` contains 40 accessible records.
- Canonical and public figure directories contain 40 byte-identical PNGs each.
- Publication validation, publication tests, Astro build, built-site reference checking, and `git diff --check` pass.

The Phase 10 inputs are frozen unless a demonstrated visual or accessibility defect is found. Provenance lives in `imagegen-production-log.md`; certification evidence lives in `project-control/roles/agentic-ai-engineer/qa/phase-10-visual-verification.md`.

## Current publication state

`content/publications/agentic-ai-engineering/publication.json` is now `review`, with version 1.0.0, release-candidate edition label, null published date, and PDF disabled. The Astro build therefore does not expose Agentic web routes yet. This is the correct post-proof state, not a build defect.

Agentic now has publication-level front matter, six part introductions, six appendices, and a validated deterministic PDF proof. Publication remains gated on root's exact public mirror and responsive web-route review.

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

Phase 11 review proof is complete under open issue #73. No publication claim is made by this handoff.
