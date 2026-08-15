# Phase 11 - Forward Deployed Engineering Publication and PDF

GitHub issue: [#18](https://github.com/alpeshznakrani/komalnakrani/issues/18)

## Objective

Assemble the accepted Phase 09 prose and Phase 10 visuals into a complete, deterministic, accessible web edition and downloadable PDF, then verify the actual rendered artifacts before declaring the edition published.

## Required work

1. Complete publication metadata, edition record, copyright/front matter, part introductions, appendices, source list, figure list, and errata paths.
2. Render all nineteen chapter routes with final figures, captions, sources, navigation, canonical metadata, and accessible reading structure.
3. Upgrade the deterministic PDF pipeline to include front/back matter, all chapters, all 38 SVGs, captions, appendices, sources, page furniture, bookmarks/metadata, and stable artifact hashes.
4. Verify typography, tables, code, page breaks, figures, links, headings, overflow, orphan/widow risk, grayscale, and text extraction in the actual PDF.
5. Verify the built web edition at desktop and mobile widths, including all book, chapter, edition, errata, figure, and download paths.
6. Record final edition and PDF manifests, checksums, page count, build hash, source hash, and publication QA.
7. Publish only if every acceptance gate passes; do not imply certification or real customer outcomes.

## Acceptance criteria

- [ ] The publication and role are marked published only after final artifacts pass.
- [ ] All public web routes build and render the full nineteen-chapter edition.
- [ ] All 38 figures render with captions and accessible alternatives on web and PDF.
- [ ] The PDF contains complete front matter, five parts, nineteen chapters, five appendices, sources, figure registry, and edition record.
- [ ] PDF render inspection finds no clipping, blank pages, broken glyphs, missing figures, unreadable tables/code, or incorrect page furniture.
- [ ] Web desktop/mobile inspection finds no overflow, broken links/assets, inaccessible navigation, or placeholder content.
- [ ] Deterministic rebuilds produce the recorded source/PDF/build hashes.
- [ ] Publication validation/tests, 64 companion tests, Astro build, demo/rehearsal, link/asset checks, and `git diff --check` pass.

## Handoff

Phase 13 receives a verified published book and decides AUTO whether a Komal course adds material teaching value. Phase 19 later performs role-level final QA after all non-deferred Komal artifacts are complete.
