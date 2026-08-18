# Forward Deployed Engineering Screen-First Design Proof

## Status

Approved for autonomous implementation on 2026-08-18. This specification creates one private design-proof PDF. It does not replace the published Forward Deployed Engineering edition.

## Objective

Create a polished 24-page PDF that proves the new Komal publication standard from cover through closing page. The proof must make substantial technical material easier and more enjoyable to read on screens, demonstrate the selected Field Expedition Log direction, and provide enough representative pages to approve or revise the system before full-book migration.

## Source and authorship boundaries

- Author: Komal Nakrani, consistently attributed on every authorship surface.
- Use only existing Forward Deployed Engineering manuscript, publication, figure, source, and edition truth from this repository.
- The six supplied Zebra Learn PDFs informed craft study only. Their content, brand, artwork, layouts, and distinctive devices must not appear in this proof.
- Do not change the published manifest, public download, current PDF, manuscript claims, sources, or edition identity.
- The proof is explicitly labeled `Design proof - not the published edition`.

## Creative direction

### Thesis

The book is a field expedition through consequential customer systems, not a manuscript exported onto paper. It refuses the category default of dense white pages with repetitive headers and decorative technical motifs.

### Visual world

The Field Expedition Log uses route maps for orientation, evidence rails for sustained reading, and field coordinates for practice. Midnight field blue establishes terrain, expedition cyan traces evidence, signal orange marks decisions, cool reading paper supports long sessions, and mist blue identifies low-intensity evidence fields.

### Story

The reader always knows where they are, what evidence is being examined, which decision is active, and what the next field coordinate requires. Dramatic orientation pages alternate with calm instructional pages so visual energy supports stamina instead of competing with it.

### First page

The cover is a full midnight field with a large condensed title, a single routed cyan path, one orange decision coordinate, the subtitle, and Komal Nakrani's name. It must read immediately at thumbnail size and remain disciplined at full-screen size.

### Form

One coherent hybrid: Route Map for cover, contents, part openings, and major transitions; Evidence Rail for body pages, figures, examples, and decision checkpoints; Field Coordinates for chapter openings, exercises, recaps, and closing journey.

## Page format and typography

- Trim: 7 by 10 inches, portrait, optimized for screen reading.
- Body measure: target 55 to 68 characters.
- Body: 11.5pt Source Sans 3 with approximately 1.48 line height.
- Display: Barlow Condensed Semibold/Bold for cover, part, chapter, and major statement typography.
- Technical: IBM Plex Mono Medium for code, coordinates, evidence identifiers, and measured data only.
- Bundle all font files locally. The proof build must not fetch fonts from the network.
- Use larger captions, footnotes, and tables than the current edition. Never shrink text to preserve page count.

## Color roles

- Midnight field blue: `#07192F`
- Expedition cyan: `#00A8CF`
- Signal orange: `#FF7A1A`
- Cool reading paper: `#F4F7FB`
- Deep ink: `#10233C`
- Mist blue: `#D9F7FF`

Signal orange is semantic. It marks a decision, warning, intervention, exception, or committed handoff; it is not general decoration. All text combinations must meet WCAG AA contrast for their size.

## Proof page manifest

The proof contains exactly 24 pages:

1. Front cover
2. Inside-cover series statement and proof status
3. Full title and author page
4. Copyright, edition, authorship, and design-proof record
5. How to use this field log
6. Visual legend: evidence, decision, warning, coordinate, handoff
7. Contents route, first half
8. Contents route, second half
9. Part opener
10. Chapter coordinate opener
11. Calm long-form reading page
12. Reading page with evidence rail and field note
13. Running-case evidence page
14. Workflow and authority comparison page
15. Full explanatory ImageGen figure page
16. Figure interpretation and evidence-boundary page
17. Decision checkpoint page
18. Structured artifact or code page
19. Applied exercise page
20. Chapter recap and next-coordinate handoff
21. Appendix/template sample
22. Source, figure, and accessibility record sample
23. About Komal Nakrani
24. Closing expedition page and back-cover statement

## Page components

### Orientation pages

Full-field color, large condensed typography, route geometry, coordinates, and generous negative space. Use on the cover, part opener, chapter opener, and closing page only.

### Instruction pages

Cool reading paper, deep-ink body copy, stable vertical rhythm, running location, and optional evidence rail. The rail may contain source context, a bounded claim, a field note, a case state, or a cross-reference. It must never become a decorative sidebar.

### Decision pages

Compress current state into a decision, comparison, exercise, or handoff. Orange identifies the active intervention. Decision pages must state the evidence available, authority boundary, and resulting next action.

### Figures

Create one new crisp, colorful, dimensional explanatory PNG with ImageGen. Do not use SVG or WebP. The generated visual supplies the scene and spatial relationships; precise labels are overlaid as selectable HTML text to guarantee spelling and accessibility. The figure receives a descriptive caption and interpretation page. No mascot is needed for this technical concept.

### Decorative geometry

Route lines, coordinate tabs, rules, and simple diagram annotations may be built with HTML and CSS. They are interface and page geometry, not image substitutes. No SVG assets are permitted in the proof.

## Rendering architecture

Build a private proof with deterministic HTML and CSS, rendered by locally installed Google Chrome in headless mode. Each page is an explicit fixed-size HTML section with controlled page breaks. The source remains searchable text; internal anchors and external links remain live where supported.

The proof implementation is isolated under `tools/fde-design-proof/`. It reads real publication files but does not modify them. Output is written to `output/pdf/forward-deployed-engineering-screen-first-design-proof.pdf`.

The existing ReportLab publication renderer stays unchanged. Full-book renderer integration is a separate phase after approval of this proof.

## Accessibility and navigation

- Maintain logical heading order and reading order in the HTML source.
- Provide descriptive alt text for the generated visual and a visible caption.
- Never depend on color alone; pair every semantic color with a label or shape.
- Preserve selectable/searchable text and live links.
- Include visible page numbers except on the front cover.
- Add PDF metadata for title, author, subject, and keywords.
- Verify that common PDF readers can search for the title, author, chapter heading, and selected body phrases.

## Determinism and asset policy

- Use only local fonts and local assets.
- Record the final generated PNG prompt and generation provenance in the proof directory.
- Copy the accepted generated PNG into the repository before the proof references it.
- Do not introduce stored SVG or WebP files.
- Run the proof build twice and require matching page counts. Record hashes; byte identity is preferred but not required if Chrome metadata differs.

## Verification gates

The proof is deliverable only when all gates pass:

1. Exactly 24 pages at 7 by 10 inches.
2. Author metadata and visible attribution consistently say Komal Nakrani.
3. Text extraction finds expected titles, headings, and body phrases.
4. The PDF contains no blank pages and no page with suspiciously little content outside intentional orientation pages.
5. Every page rasterizes successfully at high resolution.
6. A contact sheet and every high-risk page are visually inspected for clipping, overlap, missing glyphs, tiny type, awkward breaks, and weak contrast.
7. The generated figure is PNG, sharp, correctly placed, and explained by selectable labels and caption.
8. No source content from the visual-reference PDFs appears in the proof.
9. Existing publication validation and repository checks continue to pass.
10. The published Forward Deployed Engineering PDF and manifest remain byte-for-byte and state-for-state unchanged.

## Acceptance boundary

This proof establishes the design standard. Approval authorizes a later full-book migration, including systematic conversion or replacement of legacy publication figures with ImageGen PNGs. Rejection or revision affects only the isolated proof system and does not disturb the published edition.
