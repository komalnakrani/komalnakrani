# Forward Deployed Engineering - Visual System

Status: Phase 10 production system locked

## Direction

The figure system extends Komal's existing "engineering notebook meets print" identity. It uses near-white paper, near-black ink, slate navy for evidence and decision emphasis, sharp technical geometry, and restrained annotation. It does not introduce decorative illustration, inherited Alpesh assets, employer diagrams, screenshots, or invented customer outcomes.

## Canonical production

- Generator and editable specification: `scripts/generate-fde-figures.mjs`
- Publication assets: `content/publications/forward-deployed-engineering/assets/`
- Web mirrors: `public/assets/publications/forward-deployed-engineering/`
- Public registry: `content/publications/forward-deployed-engineering/figures.json`
- Extended production and accessibility record: `content/publications/forward-deployed-engineering/figure-production.json`
- Canvas: `1200 x 760`, responsive SVG with `viewBox="0 0 1200 760"`
- Identity: display IDs `F01.1` through `F19.2`; registry IDs `FIG-001` through `FIG-038`

The generator is deterministic and idempotent. It creates the canonical publication SVG, its identical web mirror, the two registries, chapter figure metadata, manuscript figure markup, and chapter visual state/QA reconciliation.

## Tokens

| Purpose | Token | Value | Contrast/use |
| --- | --- | --- | --- |
| Paper | `paper` | `#FFFFFF` | Primary figure ground |
| Wash | `wash` | `#F6F6F6` | Surrounding proof surface |
| Accent tint | `tint` | `#E7ECF2` | Decision fill, never sole meaning |
| Primary ink | `ink` | `#121212` | 18.73:1 on paper |
| Secondary ink | `ink2` | `#454545` | 9.59:1 on paper |
| Minimum text ink | `muted` | `#767676` | 4.54:1 on paper |
| Structural line | `line` | `#D1D1D1` | Non-text enclosure only |
| Accent | `accent` | `#2C4A6E` | 9.08:1 on paper |
| Accent ink | `accentInk` | `#1C3149` | 11.15:1 on tint |

Text uses Arial/Helvetica fallbacks inside the portable SVG and monospace only for figure identity and the semantic legend. The web shell may render the surrounding title and caption in Komal's Space Grotesk and Hanken Grotesk typography.

## Semantic grammar

- Solid dark or navy line: observed or required relationship.
- Dashed line or enclosure: ownership boundary or explicitly proposed state, always labeled.
- Diamond: decision.
- Navy fill: selected or terminal bounded state.
- Alternating navy/ink edge: adjacent categories remain distinguishable in grayscale.
- Arrow: direction or evidence flow; direction is never expressed by color alone.
- Footer: every figure declares Orchid fictional/synthetic status.

Actors, systems, evidence, decisions, boundaries, failures, controls, outcomes, and ownership retain the shapes and line meanings frozen in `visual-forecast.md`. Exact-comparison content stays in manuscript tables; figures are reserved for structure, sequence, boundary, state, or diagnostic relationships.

## Accessibility and export rules

- Every SVG has `role="img"`, a unique `<title>`, and a structural `<desc>` in reading order.
- Every MDX insertion has useful `alt`, explicit width/height, a visible caption, lazy loading, and async decoding.
- Every production record includes the full long description because these technical diagrams are not safely reducible to an empty alt string.
- Text, shape, line style, order, and labels preserve meaning in grayscale.
- The same SVG is used for web and print; no divergent redraw can drift from the manuscript.
- The narrowest essential labels remain readable in the A4-scale proof; complex detail remains available in long descriptions.

## Change control

Phase 10 may alter layout or accessibility text only when it preserves the Phase 09 decision purpose. A discovered content contradiction must open a documented content defect rather than being silently corrected in artwork. Regeneration must be followed by registry/hash verification, publication validation, raster proof, grayscale proof, and web/PDF assembly checks.
