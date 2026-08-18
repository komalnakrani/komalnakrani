# Build the complete FDE screen-first Field Expedition Log edition

## Objective

Apply the user-approved Field Expedition Log design system to the complete *Forward Deployed Engineering* book and produce a private, fully verified 7×10 screen-first review PDF before any public-edition mutation.

## Scope

- Complete opening matter and route-map contents.
- Five part openings and nineteen chapter-coordinate openings.
- All accepted manuscript content, tables, code, exercises, chapter gates, and handoffs.
- Thirty-eight original ImageGen PNG explanatory figures with selectable labels and provenance.
- Five appendices, source/figure/accessibility records, author page, and closing page.
- Deterministic HTML-to-PDF build, metadata, outlines, live links, structural QA, full-page raster review, and repository regression checks.

## Locked constraints

- Author is Komal Nakrani.
- Use the approved genre palette and typography.
- Preserve claims, sources, companion behavior, role boundaries, and original authorship.
- Do not reuse content or distinctive layouts from supplied reference PDFs.
- Do not store or reference SVG/WebP review figures.
- Do not replace the current published FDE manifest or PDF during private review production.
- Do not start another book, role, course, or Abhyaas work inside this issue.

## Acceptance

- [x] Private review PDF exists at `output/pdf/forward-deployed-engineering-screen-first-review.pdf`.
- [x] Exactly 19 chapters, 38 PNG figures, five parts, and five appendices are present.
- [x] Every page is 7×10, searchable, nonblank, rasterized, and visually inspected.
- [x] Fonts, headings, figures, tables, exercises, transitions, author identity, and ending pages are clean.
- [x] Tool tests, publication validation, PDF artifact tests, repository build, and built-site references pass.
- [x] Published FDE manifest and public PDF remain unchanged.
- [x] Durable QA and review handoff are recorded.

## Design and implementation records

- `DESIGN.md`
- `docs/superpowers/specs/2026-08-18-fde-full-screen-first-edition-design.md`
- `docs/superpowers/plans/2026-08-18-fde-full-screen-first-edition.md`
