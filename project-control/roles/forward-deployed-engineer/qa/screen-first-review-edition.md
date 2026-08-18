# FDE screen-first review-edition handoff

## Status

`PASS` and ready for the user's private design review. This handoff does not promote or replace the current public edition.

## Deliverable

- PDF: `output/pdf/forward-deployed-engineering-screen-first-review.pdf`
- Author: Komal Nakrani
- Design system: Field Expedition Log
- Reading mode: 7 by 10 inch screen-first pages
- Inventory: 5 parts, 19 chapters, 38 ImageGen PNG explainers, and 5 appendices
- Pages: 592
- Bytes: 102,847,285
- SHA-256: `86f32e507ca9eb9c0cd6394f1c1e5a58c0891a540b98c5b1546ac20bd653595d`

## Verification evidence

- Two independent builds are byte-identical.
- All 592 pages are searchable, correctly sized, nonblank, and free of sparse continuation pages.
- All pages were rasterized; all 13 contact sheets and representative high-risk pages were visually inspected.
- The book has 33 outline entries, 88 link annotations, and zero targetless links.
- All 38 figures are original accepted PNGs with recorded ImageGen provenance, dimensions, SHA-256 digests, essential labels, and visual-QA disposition.
- The package uses local Barlow Condensed, Source Sans 3, and IBM Plex Mono fonts.
- Focused tool tests, structural PDF QA, publication validation, repository checks, and diff hygiene are required to remain green at final commit.

## Protected boundary

The published manifest remains `d35f7a1198961f7c6d0da6bb86af581bdcc01dae89f0b0e9908bfa470f53d7fb`. The published PDF remains `96b5bce887d315ceb5390287eb693b0ead4b9ed3328470913c9dd07f9a91b050`. Promotion is a separate user decision after review.

## Hold boundary

Do not redesign another book from this handoff. Wait for the user's review of this complete edition and use the accepted result as the standard for subsequent books.
