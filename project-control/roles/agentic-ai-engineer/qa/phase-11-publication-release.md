# Agentic AI Engineering - Version 1.0.0 Publication Release

Status: **PASS - PUBLISHED WEB AND PDF EDITION VERIFIED**

Date: 2026-08-17

Issues: root #32; Phase 11 #73

## Release identity

- Publication: *Agentic AI Engineering: Designing, Evaluating, and Operating Systems That Act*
- Author: Komal Nakrani
- Edition: First edition, version 1.0.0
- State: `published`
- Published date: `2026-08-17`
- Canonical URL: `https://komalnakrani.com/books/agentic-ai-engineering/`
- Download filename: `agentic-ai-engineering-v1.0.0.pdf`

## Final PDF artifact

- Pages: 600 A4 pages
- Bytes: 17,106,362
- PDF SHA-256: `787939e34f561fbc54e901ca258175786a3ad71926fc0c814112553071cc909a`
- Source SHA-256: `841e1f394597d35ca1e6d3aafbf0572af999c0f74b443335abededdf0eef195b`
- Chapter count: 20
- Appendix count: 6
- Figure count: 40
- Source count: 44
- Errata count: 0

Two independently generated final outputs were byte-identical. The installed
artifact at `public/downloads/agentic-ai-engineering-v1.0.0.pdf` is also
byte-identical to both builds. The production-preview download returned HTTP
200, `application/pdf`, 17,106,362 bytes, and the same SHA-256.

## PDF inspection

- Metadata matches the exact title, author, and subject; creation and
  modification timestamps are deterministically fixed at 2000-01-01 UTC.
- The PDF is unencrypted and contains no JavaScript or embedded files.
- The recursive outline contains 38 entries.
- All 122 links resolve to explicit targets: 76 internal and 46 external, with
  zero targetless annotations.
- Searchable-text audit found zero empty pages, zero replacement glyphs, and a
  minimum of 171 non-space characters on any page.
- All 600 pages rendered at 144 DPI to 1,191 x 1,684 PNGs.
- Automated raster inspection found zero blank or sparse pages, zero outer-edge
  marks, and zero missing page frames.
- Ten contact sheets covering the complete edition were visually inspected.
- Full-resolution pages 1, 2, 451, 529, 585, and 600 were inspected. The cover,
  fitted overlong code, Appendix F, and published edition record are clean.

## Asset and authority integrity

- All 40 accepted canonical figures remain PNG, with 40 byte-identical public
  mirrors and no canonical SVG or WebP sources.
- FieldOps Relay remains explicitly fictional.
- Synthetic artifacts remain examples, not operational or production evidence.
- Authority, identity, consent, privacy, recovery, and protocol boundaries are
  unchanged from the accepted manuscript and architecture.

## Web publication QA

- Publication validation, repository tests, Astro production build, and
  built-site reference validation pass with Agentic enabled.
- The build contains 85 HTML pages and 1,537 checked local references.
- Rendered-site inspection passes all 170 route/viewport combinations: 85
  routes at 390 x 844 mobile and 1,440 x 1,000 desktop, with zero failures.
- The rendered checker verifies title presence, non-empty bodies, exactly one
  H1, no duplicate chapter-body title, no horizontal document overflow, unique
  IDs, valid image loads and alt attributes, and named links.
- Overview, first chapter, edition 1.0.0, errata, and PDF routes all return HTTP
  200 from the production preview.
- Overview and first-chapter desktop/mobile captures were visually inspected.
  They show the published identity, PDF action, responsive layout, and no
  document-level horizontal overflow. Code blocks remain intentionally
  horizontally scrollable within their bounded containers on narrow screens.
- The chapter renderer suppresses a redundant manuscript H1 on the web while
  retaining it in the print source. A rendered-site regression first reproduced
  the duplicate on all 20 Agentic chapters, then passes after the scoped fix.

Web-proof captures:

- `tmp/web-proof/agentic-published-overview-desktop.png`
- `tmp/web-proof/agentic-published-overview-mobile.png`
- `tmp/web-proof/agentic-published-chapter-desktop.png`
- `tmp/web-proof/agentic-published-chapter-mobile.png`

## Disposition

Phase 11 is locally `PASS`. Version 1.0.0 is in published state and the public
download is the exact final artifact identified above. Root issue #32 remains
open for independent verification, commit, push, and GitHub reconciliation.
No issue was closed and no Git action was performed in this lane.

Future corrections must use the Appendix F errata and edition rules; web and
PDF content must not be silently changed under this edition identity. Do not
start Phase 13, a course, a new role/book, or Abhyaas work without explicit user
authorization.
