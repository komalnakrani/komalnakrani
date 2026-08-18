# Forward Deployed Engineering screen-first design proof QA

Status: **PASS**

This record covers the private 24-page design proof only. It does not replace or modify the published Forward Deployed Engineering edition.

## Accepted artifact

- Output: `output/pdf/forward-deployed-engineering-screen-first-design-proof.pdf`
- Format: 24 pages, 7 x 10 inches, portrait, screen-first PDF
- Author metadata: Komal Nakrani
- Title metadata: Forward Deployed Engineering - Screen-First Design Proof
- File size: 2,907,692 bytes
- SHA-256: `71d6dcb26a3919dd75e6a1d4a56fe4e2829390f64c78e71d2799cda725c2e464`
- Determinism: two independent final builds were byte-identical

## Design system evidence

- Display: Barlow Condensed (`e476562ec9c1e16cf16475895b511f08c804f438cc9a9f80a44ea50a0eeb5b65`)
- Reading: Source Sans 3 (`042fe2cc0b933e328410d7acbd0aa6a1873dca5aef81875f4bc214b08825c7b9`)
- Technical labels: IBM Plex Mono (`6a3412f058c7d8dfd9170c41e85ade48e5156ecb89356110ca57a0a27734af46`)
- All three fonts are locally bundled and embedded in the PDF.
- ImageGen system-boundary figure: `36fb2e36f3db93ca32b1a0ee7bb99e73da9c667b1e46487349b84b732c4d62f8`
- The figure is a PNG with selectable HTML labels; no SVG or stored WebP assets are used.

## Automated verification

- Tool tests: 19/19 passed.
- Structural QA: PASS.
- Page count: 24/24.
- Page size: every page is 504 x 720 points.
- Extracted text: 12,683 characters; no empty pages.
- Required phrases: all present.
- Reference-book text scan: no Zebra Learn or supplied-reference content found.
- Fonts: all required font families present.
- Published-edition guard: unchanged.

## Visual verification

- Rendered every page at 144 DPI.
- Inspected the 24-page contact sheet.
- Inspected full-resolution pages 1, 5, 7, 9, 10, 11, 12, 15, 17, 18, 19, 23, and 24.
- No clipping, overlap, empty page, missing glyph, broken figure, or unreadably small body text remained.

Defects repaired during the final visual pass:

- Separated the page 17 decision marker from its heading.
- Corrected the page 15 deployed-service and external-authority label leaders.
- Developed page 18 with purpose, owner, expiry, and result evidence blocks.

## Isolation and provenance

- Published manifest SHA-256 remains `d35f7a1198961f7c6d0da6bb86af581bdcc01dae89f0b0e9908bfa470f53d7fb`.
- Published PDF SHA-256 remains `96b5bce887d315ceb5390287eb693b0ead4b9ed3328470913c9dd07f9a91b050`.
- The supplied reference books informed visual ambition only; their content was not reused.
- The artifact is labeled `Design proof - not the published edition.`
