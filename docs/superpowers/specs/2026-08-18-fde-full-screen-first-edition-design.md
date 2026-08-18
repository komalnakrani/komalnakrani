# Forward Deployed Engineering Full Screen-First Edition

## Status

Approved for autonomous implementation on 2026-08-18 after acceptance of the 24-page Field Expedition Log design proof.

## Objective

Convert the complete *Forward Deployed Engineering* publication into the approved Field Expedition Log visual system without changing its technical claims, source provenance, companion behavior, web publication, or currently published PDF until a complete private review edition passes visual and structural QA.

## Frozen publication truth

- Author: Komal Nakrani.
- Title: *Forward Deployed Engineering*.
- Subtitle: *From Ambiguous Workflow to Production Outcome*.
- Source: the 19 accepted MDX chapters, five appendices, front matter, part introductions, claims, sources, figures, and edition records in `content/publications/forward-deployed-engineering/`.
- Manuscript scope: 69,662 chapter words, 38 figure positions, five journey parts, and the existing Orchid Assist running case.
- No source text, illustration, branding, or distinctive layout from the six Zebra Learn reference PDFs may appear.

## Approved visual standard

The approved proof is the visual contract. The complete edition uses:

- 7 by 10 inch portrait pages optimized for screen reading.
- Barlow Condensed for orientation, Source Sans 3 for reading, and IBM Plex Mono for coordinates and technical artifacts.
- Midnight `#07192F`, cyan `#00A8CF`, signal orange `#FF7A1A`, paper `#F4F7FB`, ink `#10233C`, and mist `#D9F7FF`.
- Route Map pages for opening matter, contents, part introductions, chapter coordinates, and the ending.
- Evidence Rail pages for sustained reading, case evidence, figures, captions, tables, and source context.
- Field Coordinate pages for exercises, gates, recaps, and handoffs.
- Signal orange only for decisions, warnings, exceptions, interventions, and committed handoffs.

## Full-edition architecture

The review edition is assembled as one HTML document and printed through local Chrome. The renderer parses the accepted Markdown/MDX subset into semantic HTML and uses CSS paged media for trim, margins, running location, folios, chapter/part breaks, widows, orphans, and fragmentation control. A deterministic Python finalizer adds metadata, outlines, and validates page geometry.

The implementation is isolated under `tools/screen-first-books/`. Per-book configuration lives under `tools/screen-first-books/books/`. The first configuration is Forward Deployed Engineering, but parsing, rendering, build, and QA code remain reusable for future genre-specific books.

The private review artifact is written to `output/pdf/forward-deployed-engineering-screen-first-review.pdf`. The published manifest and `public/downloads/forward-deployed-engineering-v1.0.0.pdf` remain unchanged during review production.

## Page system

### Opening matter

The edition begins with a full cover, series/edition statement, title page, copyright and authorship record, how-to-read route, visual legend, complete route-map contents, and five-part journey overview.

### Part transitions

Five dramatic part openings introduce:

1. Own the Outcome — Chapters 1-5.
2. Design the Deployment — Chapters 6-10.
3. Build Evidence into the System — Chapters 11-14.
4. Launch into Reality — Chapters 15-17.
5. Turn Delivery into Leverage — Chapters 18-19.

### Chapters

Every chapter begins with a coordinate opener carrying chapter number, title, summary, reading time, part, claims, companion milestone, and route position. The body uses generous reading pages, sectional markers, evidence rails, tables, code/artifact panels, decision blocks, figure spreads, exercises, a chapter gate, and a next-coordinate handoff.

### Figures

- Replace all 38 legacy SVG figures in the review edition with 38 original ImageGen PNGs.
- Each image is crisp, colorful, dimensional, explanatory, and free of embedded prose, logos, watermarks, or generic mascots.
- Precise essential labels remain selectable HTML over or beside the image.
- Every figure retains its registered ID, technical intent, alt text, caption, and source relationship.
- No SVG or WebP asset may be referenced by the review renderer.

### Closing matter

The edition ends with all five appendices, source/claim/figure/accessibility records, edition and authorship record, About Komal Nakrani, and the approved closing statement: “Leave the system more legible than you found it.”

## Accessibility and reading quality

- Body text must remain at least 11.5pt with approximately 1.48 leading.
- Long-form lines target 55-68 characters.
- Captions, footnotes, tables, and code remain readable without zoom-dependent microtype.
- Headings maintain semantic order and avoid stranded headings.
- Tables repeat headers and may split only across rows.
- Figures carry visible captions, concise alt text, and longer interpretation text where needed.
- Color never carries meaning alone.
- All text is searchable and selectable.
- Internal contents, chapter, appendix, figure, and source links remain live where supported.

## Determinism and provenance

- Fonts and assets are local.
- Each ImageGen prompt, accepted source path, canonical filename, dimensions, and SHA-256 hash is recorded.
- Two independent final builds must have matching page counts, source digests, and content structure; byte identity is preferred.
- The review PDF must carry title, author, subject, producer, and review-state metadata.

## Verification gates

1. Exactly 19 chapters, 38 registered figures, five parts, and five appendices are present.
2. All 38 review figures are PNGs with canonical/public-review byte checks and no SVG/WebP references.
3. Komal Nakrani is the only book author identity.
4. All expected headings, figure IDs, chapter titles, appendix titles, and closing phrases extract from the PDF.
5. Every page is 7 by 10 inches, searchable, nonblank, and free of replacement glyphs.
6. The full PDF is rasterized; every page appears in a contact sheet; all high-risk, transition, table, code, figure, and appendix pages receive full-resolution inspection.
7. No clipping, overlap, missing figure, broken table, tiny text, orphan heading, or unintended blank page remains.
8. Publication validation, all repository tests, Astro build, and built-site reference checks pass.
9. The current published manifest and PDF remain unchanged during private review production.
10. A durable QA report records artifact hashes, page count, render inventory, visual repairs, and promotion readiness.

## Promotion boundary

The private full-book review PDF is the next deliverable. Promotion to the public download, edition metadata, and web surface is a separate atomic step after the completed review artifact passes all gates.
