# Forward Deployed Engineering ImageGen prompt record

## Purpose

This is the production prompt contract for the 38 original raster explainers in the private Field Expedition Log review edition. The accepted source file, dimensions, digest, semantic brief, essential labels, and QA disposition for every figure are recorded in `imagegen-production.json`.

The prompt generator is `../../visual-assets.mjs`. It combines each registered figure caption and alternative description with this locked direction:

- premium landscape PNG explanatory illustration;
- crisp realistic 3D editorial rendering with strong foreground, midground, and background separation;
- midnight field blue, expedition cyan, signal orange, cool paper, deep ink, and mist blue;
- orange reserved for decisions, warnings, exceptions, and handoffs;
- one unmistakable teaching relationship expressed through routes, gates, boundaries, evidence objects, and spatial grouping;
- no paragraphs or microtext embedded in the raster; essential labels remain selectable book text;
- no mascot, generic robot, logo, watermark, copied brand language, fake UI, or decorative filler;
- generous clear zones, sharp edges, and professional educational-publishing quality.

## Figure-specific prompt inputs

Each of the 38 prompts uses the registered `id`, `caption`, and `alt` values loaded from the accepted FDE publication contract. The normalized prompt can be reproduced with `buildFigurePrompt(figure, index)` in `../../visual-assets.mjs`; the exact accepted ImageGen output path is retained in `imagegen-production.json`.

## Rejection and correction record

- FIG-003: the first candidate embedded an unnecessary figure identifier; the accepted correction removed it.
- FIG-008: the first candidate embedded an unnecessary figure identifier and flattened authority; the accepted correction restored the intended authority boundary.
- FIG-024: the first candidate omitted the Operations row; the accepted correction restored the complete teaching relationship.

All other installed candidates passed the semantic, label, legibility, composition, palette, and originality review. No mascot was used in any of the 38 figures.
