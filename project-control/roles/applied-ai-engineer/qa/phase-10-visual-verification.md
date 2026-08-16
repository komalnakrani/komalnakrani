# Applied AI Engineering - Phase 10 Visual Verification

Status: **PASS** under issue #63

Date: 2026-08-16

## Scope

This gate certifies the 42 final ImageGen teaching figures for *Applied AI Engineering: From Model Capability to Dependable Product Behavior*. It verifies the actual rendered images, manuscript anchors, figure registry, ImageGen provenance, canonical/public delivery copies, accessibility text, and the locked PNG-only source policy. It does not publish the book or assemble its PDF.

## Inventory and file integrity

| Check | Result |
| --- | --- |
| Figure registry | PASS: 42 unique records, exactly two per chapter |
| Canonical assets | PASS: 42 real PNG files |
| Public mirrors | PASS: 42 files, byte-identical to canonical assets |
| Forbidden source formats | PASS: zero SVG and zero stored WebP files |
| Provenance | PASS: every filename resolves to a built-in ImageGen output and prompt record |
| Accessibility metadata | PASS: every record has substantive alt text, caption, chapter, creator, and license |
| Native dimensions | PASS: 30 at 1568x1003, ten at 1586x992, one at 1565x1005, one at 1619x971 |

## Rendered teaching review

The Phase 09 contact-sheet inspection was re-used as accepted rendered-image evidence and reconciled against the final Phase 09 prose/metadata repairs. Each image has one dominant teaching relationship, short essential labels, book-width legibility, and a caption that states its evidence role or limitation. Meaning is carried through lanes, gates, shapes, hierarchy, placement, arrows, or state changes rather than color alone.

No figure uses a generic presenter or unnecessary mascot. The early rejected presenter drafts were never copied into the repository. No final figure purports to depict Komal Nakrani. Vendor marks, logos, watermarks, and decorative robot imagery are absent.

The five visual-truth issues previously identified for F19.1, F19.2, F20.2, F21.1, and F21.2 remain correctly repaired in manuscript/registry language. Their rendered conceptual scaffolds are no longer overstated as canonical Patchwork evidence or exact workflow order.

## Production contract

- Canonical creation tool: built-in ImageGen.
- Canonical source: original PNG raster only.
- Astro may create delivery derivatives; derivatives are not canonical sources.
- Essential text is limited to explanatory labels and short footers.
- Mascot use remains optional and pedagogical; an identity-preserving Komal reference would be mandatory if ever used.
- Figures remain conceptual or causal teaching scaffolds unless a caption explicitly identifies illustrative synthetic values.

## Validation evidence

- Registry/canonical/public count: 42/42/42.
- Mirror and MIME errors: zero.
- Missing ImageGen-log entries: zero.
- Missing required registry fields: zero.
- SVG/WebP source artifacts: zero.
- `npm run validate:publications`: PASS.
- `git diff --check`: PASS.

Final disposition: **PASS**. Phase 11 may assemble and render the web/PDF publication without generating replacement artwork.
