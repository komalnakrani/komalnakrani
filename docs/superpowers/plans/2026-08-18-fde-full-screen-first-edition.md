# Forward Deployed Engineering Full Screen-First Edition Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete private 7×10 Field Expedition Log review edition of *Forward Deployed Engineering* with 19 chapters, 38 ImageGen PNG figures, five appendices, complete opening/closing matter, and page-by-page QA.

**Architecture:** Graduate the accepted proof into a reusable HTML-to-PDF package under `tools/screen-first-books/`. A book configuration binds accepted publication truth to a semantic renderer, genre theme, local assets, Chrome print pipeline, deterministic PDF finalizer, and structural/visual QA. The public edition remains protected until a separately authorized promotion step.

**Tech Stack:** Node.js ESM, semantic HTML, CSS paged media, local Google Fonts, headless Google Chrome, Python with pypdf/pdfplumber/Pillow, Poppler, Node test runner, ImageGen PNG assets.

**Spec:** `docs/superpowers/specs/2026-08-18-fde-full-screen-first-edition-design.md`

## Global Constraints

- Output only the private review PDF at `output/pdf/forward-deployed-engineering-screen-first-review.pdf` during this plan.
- Preserve the current published manifest and public PDF byte-for-byte.
- Author identity is exactly Komal Nakrani.
- Render every page at 7 by 10 inches for screen-first reading.
- Use the approved FDE palette and local Barlow Condensed, Source Sans 3, and IBM Plex Mono fonts.
- Use exactly 38 ImageGen PNG figures; store no SVG or WebP review assets.
- Preserve accepted chapter, claim, source, figure, companion, and edition truth.
- Commit source, tests, canonical assets, and QA records; do not commit generated build directories or the private review PDF.

---

### Task 1: Freeze the full-book source contract

**Files:**
- Create: `tools/screen-first-books/books/forward-deployed-engineering.mjs`
- Create: `tools/screen-first-books/source-contract.mjs`
- Create: `tools/screen-first-books/tests/source-contract.test.mjs`
- Create: `tools/screen-first-books/README.md`

**Interfaces:**
- Consumes: `publication.json`, front matter, part introductions, 19 MDX chapters, five appendices, `figures.json`, `claims.json`, and `sources.json`.
- Produces: `loadBookContract(config): BookContract` with ordered parts, chapters, appendices, figures, claims, sources, hashes, and protected-publication hashes.

- [ ] **Step 1: Write the failing source-contract test**

```js
assert.equal(contract.chapters.length, 19);
assert.equal(contract.figures.length, 38);
assert.deepEqual(contract.partStarts, [1, 6, 11, 15, 18]);
assert.equal(contract.appendices.length, 5);
assert.equal(contract.author, 'Komal Nakrani');
assert.equal(contract.chapterFigureIds.every((ids) => ids.length === 2), true);
```

- [ ] **Step 2: Run the focused test and confirm it fails because the loader does not exist**

Run: `node --test tools/screen-first-books/tests/source-contract.test.mjs`

- [ ] **Step 3: Implement configuration and source loading**

The configuration must define the publication root, five part starts and names, output filename, protected manifest/PDF hashes, proof-derived palette, font paths, closing statement, and review-state metadata. The loader must parse front matter, preserve chapter order, bind exact figure IDs from `figures.json`, and reject missing or duplicate records.

- [ ] **Step 4: Run the source-contract test**

Run: `node --test tools/screen-first-books/tests/source-contract.test.mjs`
Expected: PASS.

- [ ] **Step 5: Commit the frozen source contract**

```bash
git add tools/screen-first-books
git commit -m "feat: freeze FDE screen-first source contract"
```

### Task 2: Parse the accepted Markdown and MDX subset

**Files:**
- Create: `tools/screen-first-books/markdown.mjs`
- Create: `tools/screen-first-books/tests/markdown.test.mjs`
- Create: `tools/screen-first-books/tests/fixtures/representative.mdx`

**Interfaces:**
- Consumes: raw Markdown/MDX strings and a chapter-to-figure map.
- Produces: `parsePublicationMarkdown(raw, context): SemanticBlock[]` with headings, paragraphs, lists, quotes, tables, code, and figure records.

- [ ] **Step 1: Write parser tests for every accepted content shape**

```js
assert.deepEqual(blocks.map((block) => block.type), [
  'heading', 'paragraph', 'quote', 'list', 'table', 'code', 'figure'
]);
assert.equal(blocks.find((block) => block.type === 'figure').id, 'FIG-001');
assert.equal(blocks.some((block) => JSON.stringify(block).includes('<script')), false);
```

- [ ] **Step 2: Run the parser test and confirm it fails**

Run: `node --test tools/screen-first-books/tests/markdown.test.mjs`

- [ ] **Step 3: Implement the semantic parser**

Support headings levels 1-4, paragraphs, ordered/unordered lists, blockquotes, fenced code, pipe tables, links, inline code, bold, italic, and existing `<figure class="book-figure">` blocks. Escape all source text before applying controlled inline markup. Replace figure file selection with the review PNG bound to the registered figure ID.

- [ ] **Step 4: Verify parser behavior against all 19 chapters and five appendices**

Run: `node --test tools/screen-first-books/tests/markdown.test.mjs tools/screen-first-books/tests/source-contract.test.mjs`
Expected: PASS with no unsupported block errors.

- [ ] **Step 5: Commit the parser**

```bash
git add tools/screen-first-books/markdown.mjs tools/screen-first-books/tests
git commit -m "feat: parse FDE manuscript for screen-first layout"
```

### Task 3: Build the reusable Field Expedition Log renderer

**Files:**
- Create: `tools/screen-first-books/render.mjs`
- Create: `tools/screen-first-books/theme-base.css`
- Create: `tools/screen-first-books/books/forward-deployed-engineering.css`
- Create: `tools/screen-first-books/tests/render.test.mjs`
- Copy: `tools/fde-design-proof/fonts/*` to `tools/screen-first-books/fonts/`

**Interfaces:**
- Consumes: `BookContract` and parsed semantic blocks.
- Produces: `renderBookHtml(contract): string`, a self-contained semantic HTML publication with local fonts/assets only.

- [ ] **Step 1: Write failing renderer tests**

```js
assert.match(html, /data-book="forward-deployed-engineering"/);
assert.equal((html.match(/class="chapter-coordinate"/g) || []).length, 19);
assert.equal((html.match(/class="book-figure"/g) || []).length, 38);
assert.match(html, /Leave the system more legible than you found it\./);
assert.doesNotMatch(html, /\.svg|\.webp|https:\/\/fonts\./);
```

- [ ] **Step 2: Run the renderer test and confirm it fails**

Run: `node --test tools/screen-first-books/tests/render.test.mjs`

- [ ] **Step 3: Implement opening, navigation, part, chapter, body, figure, exercise, appendix, author, and closing components**

The renderer must reproduce the accepted proof language: route lines for orientation, evidence rails for reading, coordinate markers for exercises and gates, and orange only for semantic decisions. It must include a complete contents route, page-mode classes, running part/chapter strings, figure captions and long descriptions, source and edition records, and no generic mascot.

- [ ] **Step 4: Implement paged-media CSS**

Set `@page { size: 7in 10in; }`, screen-first margins, 11.5pt Source Sans 3 body type, local font faces, widows/orphans of at least three, break avoidance for headings/captions/code rows, repeated table headers, named orientation pages, visible folios, and chapter/part page breaks.

- [ ] **Step 5: Run renderer tests and inspect generated HTML in Chrome**

Run: `node --test tools/screen-first-books/tests/render.test.mjs`
Expected: PASS.

- [ ] **Step 6: Commit the renderer and theme**

```bash
git add tools/screen-first-books
git commit -m "feat: render full Field Expedition Log edition"
```

### Task 4: Produce and integrate 38 ImageGen figures

**Files:**
- Create: `tools/screen-first-books/books/forward-deployed-engineering/assets/*.png`
- Create: `tools/screen-first-books/books/forward-deployed-engineering/imagegen-production.json`
- Create: `tools/screen-first-books/books/forward-deployed-engineering/imagegen-prompts.md`
- Create: `tools/screen-first-books/visual-assets.mjs`
- Create: `tools/screen-first-books/tests/visual-assets.test.mjs`

**Interfaces:**
- Consumes: the 38 accepted figure IDs, titles, alts, captions, chapter context, and approved visual language.
- Produces: 38 canonical PNGs and `loadVisualAssets(): VisualAssetRecord[]` with hashes, dimensions, prompt provenance, essential labels, and acceptance state.

- [ ] **Step 1: Write failing visual-asset inventory tests**

```js
assert.equal(records.length, 38);
assert.equal(new Set(records.map((record) => record.sha256)).size, 38);
assert.equal(records.every((record) => record.mime === 'image/png'), true);
assert.equal(records.every((record) => record.accepted === true), true);
assert.equal(records.some((record) => /\.svg|\.webp/.test(record.file)), false);
```

- [ ] **Step 2: Generate figures with ImageGen in bounded batches**

Each prompt must request a crisp dimensional technical explainer in the FDE palette, a clear single teaching relationship, restrained or no embedded words, no mascot unless pedagogically necessary, and no logo/watermark. Use the registered alt/caption as semantic input. Reject illegible, misleading, decorative, or duplicate concepts.

- [ ] **Step 3: Install accepted assets and record provenance**

Copy accepted ImageGen outputs to stable figure filenames corresponding to FIG-001 through FIG-038. Record generation source, prompt, width, height, SHA-256, essential selectable labels, and visual-QA disposition.

- [ ] **Step 4: Run asset inventory tests**

Run: `node --test tools/screen-first-books/tests/visual-assets.test.mjs`
Expected: 38/38 PASS, no SVG/WebP review assets.

- [ ] **Step 5: Commit canonical review assets**

```bash
git add tools/screen-first-books/books/forward-deployed-engineering tools/screen-first-books/visual-assets.mjs tools/screen-first-books/tests/visual-assets.test.mjs
git commit -m "feat: add FDE screen-first explanatory figures"
```

### Task 5: Build and finalize the complete review PDF

**Files:**
- Create: `tools/screen-first-books/build.mjs`
- Create: `tools/screen-first-books/finalize_pdf.py`
- Create: `tools/screen-first-books/tests/build.test.mjs`
- Generate: `output/pdf/forward-deployed-engineering-screen-first-review.pdf`

**Interfaces:**
- Consumes: rendered HTML, local fonts, 38 accepted PNGs, and book configuration.
- Produces: a finalized 7×10 review PDF plus a machine-readable build result containing page count, SHA-256, source digest, byte count, outline count, and link count.

- [ ] **Step 1: Write failing build tests**

```js
assert.equal(buildPaths.output.endsWith('forward-deployed-engineering-screen-first-review.pdf'), true);
assert.equal(buildPaths.output.includes('public/downloads'), false);
assert.equal(resolveChrome().length > 0, true);
```

- [ ] **Step 2: Run build tests and confirm they fail**

Run: `node --test tools/screen-first-books/tests/build.test.mjs`

- [ ] **Step 3: Implement deterministic Chrome printing and PDF finalization**

Render a self-contained local HTML file, print with header/footer disabled, terminate Chrome only after a stable PDF with an EOF marker exists, then use pypdf to set Komal metadata and chapter/appendix outlines. Write only the private review output.

- [ ] **Step 4: Build twice and compare results**

Run twice with separate temporary outputs. Require equal page count, extracted-text hash, outline structure, and source digest; record byte hashes and whether they match.

- [ ] **Step 5: Run build tests**

Run: `node --test tools/screen-first-books/tests/build.test.mjs`
Expected: PASS.

- [ ] **Step 6: Commit build tooling**

```bash
git add tools/screen-first-books/build.mjs tools/screen-first-books/finalize_pdf.py tools/screen-first-books/tests/build.test.mjs
git commit -m "build: create full FDE screen-first review PDF"
```

### Task 6: Perform structural and complete visual QA

**Files:**
- Create: `tools/screen-first-books/qa.py`
- Create: `tools/screen-first-books/tests/qa.test.mjs`
- Create: `tools/screen-first-books/books/forward-deployed-engineering/QA.md`
- Generate: `tmp/pdfs/fde-screen-first-review-render/`
- Generate: `tmp/pdfs/fde-screen-first-review-contact-sheets/`

**Interfaces:**
- Consumes: final review PDF, contract, asset registry, and protected publication hashes.
- Produces: `run_qa(pdf_path): dict` and durable QA evidence.

- [ ] **Step 1: Write failing QA tests**

```js
assert.equal(report.status, 'PASS');
assert.equal(report.chapterTitlesFound, 19);
assert.equal(report.figureIdsFound, 38);
assert.equal(report.appendixTitlesFound, 5);
assert.deepEqual(report.wrongPageSizes, []);
assert.deepEqual(report.emptyPages, []);
assert.equal(report.publishedEditionChanged, false);
```

- [ ] **Step 2: Implement structural QA**

Check metadata, authorship, 7×10 geometry, searchable text, page density, chapter/part/figure/appendix inventory, outlines, links, fonts, replacement glyphs, forbidden reference-book strings, PNG-only asset contract, and published-edition protection.

- [ ] **Step 3: Render every page at 144 DPI**

Use Poppler to create one PNG per page and contact sheets covering the full book. Run automated blank/sparse/outer-edge checks before visual inspection.

- [ ] **Step 4: Inspect every contact sheet and all high-risk pages**

Inspect cover, contents, every part opener, every chapter opener, every figure page, all table/code pages, appendix transitions, author page, and closing page at full resolution. Repair the HTML/CSS or asset, rebuild, and rerender after each defect.

- [ ] **Step 5: Record final QA evidence**

The durable report must include page count, byte/hash/source digest, two-build comparison, 38 asset hashes, structural results, visual inspection coverage, repaired defects, and protected-publication hashes.

- [ ] **Step 6: Run focused QA tests**

Run: `node --test tools/screen-first-books/tests/*.test.mjs`
Run: `${PDF_PYTHON} tools/screen-first-books/qa.py output/pdf/forward-deployed-engineering-screen-first-review.pdf`
Expected: PASS.

- [ ] **Step 7: Commit QA source and evidence**

```bash
git add tools/screen-first-books/qa.py tools/screen-first-books/tests/qa.test.mjs tools/screen-first-books/books/forward-deployed-engineering/QA.md
git commit -m "test: verify full FDE screen-first edition"
```

### Task 7: Run repository regression gates and hand off review edition

**Files:**
- Modify: `project-control/role-factory/FACTORY-STATE.md`
- Create: `project-control/roles/forward-deployed-engineer/qa/screen-first-review-edition.md`

**Interfaces:**
- Consumes: complete QA evidence and current repository state.
- Produces: a durable review-ready handoff without public-edition mutation.

- [ ] **Step 1: Run all repository checks**

Run: `npm run validate:publications`
Run: `npm run test:publications`
Run: `PDF_PYTHON=${BUNDLED_PYTHON} npm run check`
Run: `git diff --check`
Expected: all PASS.

- [ ] **Step 2: Verify protected public state**

Confirm the published manifest and public PDF hashes exactly match the frozen hashes and neither path appears in `git status --porcelain`.

- [ ] **Step 3: Record the review-edition handoff**

State that the complete screen-first review artifact is ready, list its exact path/hash/page count, summarize visual QA, and preserve the separate promotion boundary.

- [ ] **Step 4: Commit and push reviewed source changes**

```bash
git add project-control/role-factory/FACTORY-STATE.md project-control/roles/forward-deployed-engineer/qa/screen-first-review-edition.md
git commit -m "docs: hand off FDE screen-first review edition"
git push origin main
```

- [ ] **Step 5: Deliver the private review PDF**

Provide the exact local PDF artifact to the user. Do not replace the public download or change edition metadata in this plan.
