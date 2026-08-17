# Agentic AI Engineering - Phase 11 Publication Handoff

Prepared: 2026-08-17

## Accepted input

- The 20-chapter manuscript is complete at 176,372 chapter words.
- The deterministic Agentic companion passes 60/60 tests.
- Phase 10 visual certification passes with 40 original ImageGen PNG figures, two per chapter.
- `content/publications/agentic-ai-engineering/figures.json` contains 40 accessible records.
- Canonical and public figure directories contain 40 byte-identical PNGs each.
- Publication validation, publication tests, Astro build, built-site reference checking, and `git diff --check` pass.

The Phase 10 inputs are frozen unless a demonstrated visual or accessibility defect is found. Provenance lives in `imagegen-production-log.md`; certification evidence lives in `project-control/roles/agentic-ai-engineer/qa/phase-10-visual-verification.md`.

## Current publication state

`content/publications/agentic-ai-engineering/publication.json` intentionally remains `draft`, with null version/edition/published date and PDF disabled. The Astro build therefore does not expose Agentic web routes yet. This is correct Phase 10 behavior, not a build defect.

Unlike Applied AI's already assembled publication, Agentic currently has no publication-level front matter, part introductions, appendices, or PDF proof. Phase 11 must assemble and validate those artifacts before changing publication state.

## Phase 11 executable scope

1. Assemble original front matter, six part introductions, and architecture-required appendices without changing the accepted chapter or figure teaching claims.
2. Add publication-specific PDF assembly metadata, part boundaries, running-case/figure notes, edition identity, errata guidance, and professional/non-certification boundaries.
3. Transition only to a review release candidate first; keep `publishedAt` null and PDF disabled during proofing.
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

Phase 11 is ready to open as the next Agentic current-book issue. No publication claim is made by this handoff.
