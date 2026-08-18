# Behavior Systems Atlas complete-edition QA

## Verdict

`PASS` for private screen-first review. The published Applied AI Engineering edition remains unchanged.

## Artifact

- Path: `output/pdf/applied-ai-engineering-screen-first-review.pdf`
- Author: Komal Nakrani
- Format: 7 by 10 inches, screen-first
- Pages: 992
- Bytes: 143,306,807
- SHA-256: `b34fec23c795672303d5752ce21603c56f2d112393d4d3b2d2d6991f1a29f327`
- Rendered HTML SHA-256: `6489aca57d2cea7cd941f166da462aa36999f27ff5d96617b4d8978c9139f269`
- Outline entries: 37
- PDF links: 86, with zero targetless links
- Extracted characters: 1,125,886

An independent build at `tmp/pdfs/applied-ai-screen-first-review-rebuild.pdf` has the same byte count and SHA-256. The files compare byte-for-byte equal.

## Design system

The private edition uses the Applied-specific `Behavior Systems Atlas` direction: deep indigo, electric violet, diagnostic aqua, consequence coral, and warm paper. Space Grotesk provides the display voice, Source Sans 3 the reading voice, and IBM Plex Mono the evidence and coordinate voice. The approved screen-first structural layer is retained while cover, system map, part openers, chapter coordinates, experiment artifacts, figure readings, registers, author page, and closing page receive their own Applied AI treatment.

## Content and structure

- 6 system part openers
- 21 chapter-coordinate openers
- 42 existing original ImageGen PNG explainers, exactly two per chapter
- 6 appendices
- source, claim, model/accessibility, authorship, and closing records
- complete opening matter, behavior-system map, chapter contracts, exercises, and handoffs

The PDF title is `Applied AI Engineering - Behavior Systems Atlas - Screen-First Review`; its author metadata is exactly `Komal Nakrani`. All 992 pages are searchable and 504 by 720 points. The PDF embeds Space Grotesk, Source Sans 3, and IBM Plex Mono, is not encrypted, contains all 42 registered figure identifiers, and has no sparse pages, wrong page sizes, replacement glyphs, or targetless links.

## Visual review

All 992 pages were rasterized at 72 DPI into 20 contact sheets, and every sheet was visually inspected. Cover, opening matter, contents, chapter and part transitions, figure spreads, tables, code artifacts, appendices, registers, author page, and closing page were additionally reviewed at 144 DPI. No blank pages, clipped content, overlaps, missing figures, malformed transitions, or illegible labels remain.

Two defects were caught and repaired before acceptance:

1. Applied pages initially lacked the incumbent structural layout rules, collapsing the cover, contents, and chapter contracts. The Applied renderer now consumes the approved shared structural layer before its genre-specific theme.
2. An inherited top margin shifted the absolutely positioned cover kicker into the title. The Applied theme now explicitly resets that margin, with a regression test.

## Protected published edition

- Published manifest SHA-256: `21c1b46aa29cca939da6a8e5f86f9a27e72303309e6f609691191fe6acb0b935`
- Published PDF SHA-256: `0ea2dbd9a77edf30dbaffba8700e17f684ea32abb9135d0afa5a630394914fda`

Both hashes remain frozen. This review work does not replace or mutate the public manifest or download.
