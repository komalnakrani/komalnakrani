# Forward Deployed Engineering Screen-First Design Proof Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Produce one private, visually verified, 24-page Forward Deployed Engineering screen-first design-proof PDF.

**Architecture:** An isolated Node renderer reads a source-verified proof content model, emits fixed 7 by 10 inch semantic HTML pages, and invokes locally installed Google Chrome to print a PDF. A small Python finalizer applies deterministic metadata; a Python audit verifies page geometry, text, metadata, and raster safety without touching the published book pipeline.

**Tech Stack:** Node.js ESM, HTML, CSS paged media, Google Chrome headless, Python, pypdf, pdfplumber, Poppler, ImageGen PNG.

**Spec:** `docs/superpowers/specs/2026-08-18-fde-screen-first-design-proof-design.md`

## Global Constraints

- Output exactly one private 24-page PDF at `output/pdf/forward-deployed-engineering-screen-first-design-proof.pdf`.
- Keep the published Forward Deployed Engineering manifest and PDF unchanged.
- Use only real repository content and consistent Komal Nakrani attribution.
- Use Barlow Condensed, Source Sans 3, and IBM Plex Mono from local bundled files.
- Use no SVG or WebP assets in the proof.
- Use one new ImageGen PNG figure with selectable HTML labels and a visible explanation.
- Render fixed 7 by 10 inch portrait pages with screen-first type and spacing.
- Do not fetch any runtime dependency during proof generation.

---

### Task 1: Establish the isolated proof package and font assets

**Files:**
- Create: `tools/fde-design-proof/README.md`
- Create: `tools/fde-design-proof/fonts/README.md`
- Create: `tools/fde-design-proof/fonts/OFL.txt`
- Create: `tools/fde-design-proof/fonts/barlow-condensed.ttf`
- Create: `tools/fde-design-proof/fonts/source-sans-3.ttf`
- Create: `tools/fde-design-proof/fonts/ibm-plex-mono.ttf`
- Test: `tools/fde-design-proof/tests/assets.test.mjs`

**Interfaces:**
- Produces: repository-local font paths and an asset-policy test used by the renderer.

- [ ] **Step 1: Write the failing asset-policy test**

Create a Node test that requires all three font files, rejects zero-byte files, scans `tools/fde-design-proof/` for `.svg` and `.webp`, and fails if either extension exists.

- [ ] **Step 2: Run the test to verify it fails**

Run: `node --test tools/fde-design-proof/tests/assets.test.mjs`

Expected: FAIL because the local font files do not exist.

- [ ] **Step 3: Download the three font files and license from the official Google Fonts repository**

Use pinned raw GitHub URLs and document source URLs and retrieval date in `fonts/README.md`. Rename the variable font files to the stable local names above.

- [ ] **Step 4: Run the test to verify it passes**

Run: `node --test tools/fde-design-proof/tests/assets.test.mjs`

Expected: PASS with three non-empty font files and zero forbidden asset types.

- [ ] **Step 5: Commit**

```bash
git add tools/fde-design-proof/README.md tools/fde-design-proof/fonts tools/fde-design-proof/tests/assets.test.mjs
git commit -m "build: add local fonts for FDE design proof"
```

### Task 2: Build a source-verified 24-page content model

**Files:**
- Create: `tools/fde-design-proof/content.mjs`
- Create: `tools/fde-design-proof/tests/content.test.mjs`

**Interfaces:**
- Produces: `proofPages: ProofPage[]`, where each page has `pageNumber`, `kind`, `title`, `body`, `sourcePath`, and optional semantic blocks.
- Consumes: `content/publications/forward-deployed-engineering/` manuscripts, front matter, publication metadata, sources, and figures.

- [ ] **Step 1: Write failing content tests**

Test exact page count 24, unique page numbers 1 through 24, author equality to `Komal Nakrani`, proof-status copy, required page kinds, and source verification for every quoted manuscript excerpt.

- [ ] **Step 2: Run the tests to verify failure**

Run: `node --test tools/fde-design-proof/tests/content.test.mjs`

Expected: FAIL because `content.mjs` does not exist.

- [ ] **Step 3: Implement the content model**

Select real excerpts from `front-matter/front-matter.md`, `front-matter/part-introductions.md`, `chapters/enter-the-customer-system.mdx`, and `chapters/draw-the-real-system-boundary.mdx`. Record a `sourceNeedle` for each excerpt and assert the normalized source contains it when the module loads.

- [ ] **Step 4: Run the tests to verify pass**

Run: `node --test tools/fde-design-proof/tests/content.test.mjs`

Expected: PASS with 24 pages and zero unsupported copy.

- [ ] **Step 5: Commit**

```bash
git add tools/fde-design-proof/content.mjs tools/fde-design-proof/tests/content.test.mjs
git commit -m "feat: define source-verified FDE proof pages"
```

### Task 3: Render the Field Expedition Log HTML system

**Files:**
- Create: `tools/fde-design-proof/render.mjs`
- Create: `tools/fde-design-proof/theme.css`
- Create: `tools/fde-design-proof/tests/render.test.mjs`

**Interfaces:**
- Consumes: `proofPages` from `content.mjs`.
- Produces: `renderProofHtml(pages, options): string` and `tools/fde-design-proof/build/proof.html`.

- [ ] **Step 1: Write failing renderer tests**

Verify 24 `<section class="page">` elements, local `@font-face` URLs, 7 by 10 inch `@page`, semantic page classes, author text, visible proof label, figure alt text, page numbers, and no `http`, `svg`, or `webp` references.

- [ ] **Step 2: Run the tests to verify failure**

Run: `node --test tools/fde-design-proof/tests/render.test.mjs`

Expected: FAIL because renderer and theme do not exist.

- [ ] **Step 3: Implement semantic HTML rendering**

Create focused renderers for orientation, instruction, decision, contents, figure, exercise, appendix, author, and closing pages. Escape all supplied text. Keep labels selectable and preserve logical heading order.

- [ ] **Step 4: Implement the committed CSS world**

Use the exact palette and typography from the spec, 55 to 68 character body measure, visible focus semantics in source HTML, fixed page geometry, stable overflow handling, and page-specific rhythm. Use CSS route geometry only; do not create vector assets.

- [ ] **Step 5: Run the tests to verify pass**

Run: `node --test tools/fde-design-proof/tests/render.test.mjs`

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add tools/fde-design-proof/render.mjs tools/fde-design-proof/theme.css tools/fde-design-proof/tests/render.test.mjs
git commit -m "feat: render Field Expedition Log proof pages"
```

### Task 4: Generate and integrate the explanatory PNG

**Files:**
- Create: `tools/fde-design-proof/assets/system-boundary-field.png`
- Create: `tools/fde-design-proof/assets/system-boundary-field.prompt.md`
- Modify: `tools/fde-design-proof/content.mjs`
- Modify: `tools/fde-design-proof/tests/assets.test.mjs`

**Interfaces:**
- Produces: one accepted ImageGen PNG referenced by pages 15 and 16.

- [ ] **Step 1: Add failing PNG assertions**

Require PNG signature, minimum 1400 pixel long edge, exact repository path, and a prompt/provenance record.

- [ ] **Step 2: Generate the figure with built-in ImageGen**

Create a crisp dimensional cutaway of a deployed customer system with four spatially distinct zones: customer workflow, evidence boundary, deployed service, and external authority. Request no embedded words, mascot, logo, watermark, or decorative icon cloud.

- [ ] **Step 3: Inspect and accept or regenerate**

Open the generated image and verify explanatory composition, clear zones, crisp edges, palette fit, and absence of accidental text or mascot. Copy only the accepted PNG into the proof assets directory and record the final prompt and output identity.

- [ ] **Step 4: Add selectable labels in the content model**

Overlay `CUSTOMER WORKFLOW`, `EVIDENCE BOUNDARY`, `DEPLOYED SERVICE`, and `EXTERNAL AUTHORITY` in HTML. Provide descriptive alt text and a caption that explains that the scene is illustrative.

- [ ] **Step 5: Run asset and renderer tests**

Run: `node --test tools/fde-design-proof/tests/assets.test.mjs tools/fde-design-proof/tests/render.test.mjs`

Expected: PASS.

- [ ] **Step 6: Commit**

```bash
git add tools/fde-design-proof/assets tools/fde-design-proof/content.mjs tools/fde-design-proof/tests/assets.test.mjs
git commit -m "feat: add explanatory system-boundary figure"
```

### Task 5: Build and finalize the PDF

**Files:**
- Create: `tools/fde-design-proof/build.mjs`
- Create: `tools/fde-design-proof/finalize_pdf.py`
- Create: `tools/fde-design-proof/tests/build.test.mjs`
- Create: `output/pdf/forward-deployed-engineering-screen-first-design-proof.pdf`

**Interfaces:**
- Consumes: rendered HTML, local Chrome, accepted PNG, and bundled Python.
- Produces: stable final PDF at the specified output path.

- [ ] **Step 1: Write the failing build contract test**

Verify the build script exports `buildProof`, resolves Chrome locally, disables network access in the HTML, and targets only the private proof output.

- [ ] **Step 2: Run the test to verify failure**

Run: `node --test tools/fde-design-proof/tests/build.test.mjs`

Expected: FAIL because build files do not exist.

- [ ] **Step 3: Implement HTML and Chrome PDF generation**

Write the rendered HTML to `tools/fde-design-proof/build/proof.html`. Invoke `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome` with headless, print-to-PDF, no header/footer, and a temporary isolated user-data directory.

- [ ] **Step 4: Apply metadata with bundled Python**

Set title, author, subject, creator, and keywords through pypdf without changing page content.

- [ ] **Step 5: Build twice**

Run the build into two temporary output paths, require both to contain 24 pages and identical extracted text, then install one as the final proof.

- [ ] **Step 6: Run build tests**

Run: `node --test tools/fde-design-proof/tests/build.test.mjs`

Expected: PASS.

- [ ] **Step 7: Commit**

```bash
git add tools/fde-design-proof/build.mjs tools/fde-design-proof/finalize_pdf.py tools/fde-design-proof/tests/build.test.mjs output/pdf/forward-deployed-engineering-screen-first-design-proof.pdf
git commit -m "feat: build FDE screen-first design proof"
```

### Task 6: Perform structural, visual, and regression QA

**Files:**
- Create: `tools/fde-design-proof/qa.py`
- Create: `tools/fde-design-proof/QA.md`
- Create: `tmp/pdfs/fde-design-proof-render/` during QA only

**Interfaces:**
- Consumes: final proof PDF and current publication state.
- Produces: machine-readable pass/fail output and durable visual-QA record.

- [ ] **Step 1: Implement structural QA**

Require 24 pages, exact 7 by 10 inch media boxes, expected metadata, expected extracted phrases, zero empty pages, no replacement glyphs, and unchanged published manifest/PDF hashes captured before the proof build.

- [ ] **Step 2: Render every page at high resolution**

Use bundled Poppler `pdftoppm` and create a contact sheet. Inspect all 24 pages and full-resolution versions of pages 1, 5, 7, 9, 10, 11, 12, 15, 17, 18, 19, 23, and 24.

- [ ] **Step 3: Repair every material defect and rebuild**

Fix clipping, weak contrast, awkward page rhythm, accidental tiny text, missing labels, broken links, and image softness. Re-run structural and visual checks after every repair.

- [ ] **Step 4: Run repository regression checks**

Run:

```bash
npm run validate:publications
npm run test:publications
npm run check
git diff --check
```

Expected: all commands PASS.

- [ ] **Step 5: Write the durable QA record**

Record page count, dimensions, hashes, font files, figure provenance, inspected page list, structural results, and confirmation that the published edition stayed unchanged.

- [ ] **Step 6: Commit**

```bash
git add tools/fde-design-proof/qa.py tools/fde-design-proof/QA.md tools/fde-design-proof output/pdf/forward-deployed-engineering-screen-first-design-proof.pdf
git commit -m "test: verify FDE screen-first design proof"
```
