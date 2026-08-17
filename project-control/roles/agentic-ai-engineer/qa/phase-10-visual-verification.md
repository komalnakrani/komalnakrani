# Agentic AI Engineering - Phase 10 Visual Verification

Status: **PASS** under issue #69

Date: 2026-08-17

## Scope

This gate certifies the 40 final teaching figures for *Agentic AI Engineering: Designing, Evaluating, and Operating Systems That Act*. It verifies the actual rendered images, manuscript anchors, figure registry, built-in ImageGen provenance, canonical/public delivery copies, accessibility text, and PNG-only source policy. It does not assemble, render, or publish the complete web/PDF edition.

## Inventory and file integrity

| Check | Result |
| --- | --- |
| Figure registry | PASS: 40 unique records, exactly two per chapter |
| Canonical assets | PASS: 40 real PNG files |
| Public mirrors | PASS: 40 files, byte-identical to canonical assets |
| Manuscript anchors | PASS: 40 real `<img>` elements; zero pending placeholders |
| Forbidden source formats | PASS: zero SVG and zero stored WebP files in the Agentic publication paths |
| Provenance | PASS: every filename resolves by SHA-256 to a built-in ImageGen output and accepted prompt/render summary |
| Accessibility metadata | PASS: every registry record has substantive alt text, caption, chapter, creator, and license |
| Native dimensions | PASS: manuscript width/height metadata matches every PNG header |

## Rendered teaching review

All 40 images were inspected individually or in accepted batches and reconciled through a final 40-image contact sheet. Each image presents one dominant teaching relationship with short essential labels and book-width legibility. Meaning is carried through gates, lanes, routes, locks, containers, matrices, layers, shapes, hierarchy, or state changes rather than color alone.

F11.1 and F20.1 preserve Komal Nakrani's identity from `/Applications/ServBay/www/komal/mascot/sheets/001-canonical-identity-mixed.png`. They depict her only where human review and evidence-led portfolio judgment are the lesson. All other new figures are object-led; no generic presenter, robot, or mascot is used.

The figures remain conceptual or causal scaffolds. Captions retain explicit limitations: no exactly-once guarantee, no rollback promise, no universal topology winner, no production-equivalence claim, no security assurance, no empirical performance result, no protocol-trust guarantee, and no transfer proof.

## Production contract

- Canonical creation tool: built-in ImageGen, one call per accepted asset.
- Canonical source: original PNG raster only.
- Astro may create delivery derivatives; derivatives are not canonical sources.
- Essential text is limited to short explanatory labels.
- Identity-preserving references are mandatory whenever Komal is depicted.
- Canonical and public copies must remain byte-identical.

## Validation evidence

- Registry/canonical/public count: 40/40/40.
- Mirror, MIME, dimension, and reference errors: zero.
- Missing built-in ImageGen provenance matches: zero.
- Stale `book-figure--pending` / `ImageGen raster pending` references: zero.
- Agentic companion: 60/60 tests PASS.
- `npm run validate:publications`: PASS, five publication records.
- `npm run test:publications`: PASS, 4/4 tests.
- `npm run build`: PASS, 61 static pages; Agentic routes remain intentionally absent while its manifest is `draft`.
- `npm run check:site`: PASS, 1,093 local references.
- `git diff --check`: PASS.

Final disposition: **PASS**. Phase 11 may assemble the complete edition and then perform PDF/web publication QA without generating replacement artwork.
