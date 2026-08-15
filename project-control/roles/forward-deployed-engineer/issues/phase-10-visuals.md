# Phase 10 - Forward Deployed Engineering Publication Visuals

GitHub issue: [#17](https://github.com/alpeshznakrani/komalnakrani/issues/17)

## Objective

Turn the frozen `F01.1` through `F19.2` specifications into a coherent, accessible, publication-ready visual system for web and PDF without reopening or silently changing the Phase 09 content lock.

## Required work

1. Define reusable visual tokens, typography, geometry, color, contrast, line, symbol, and export rules that belong to Komal.
2. Produce all 38 chapter figures as deterministic source-controlled assets.
3. Preserve each figure's manuscript decision purpose, Orchid continuity, authority boundaries, and fictional/synthetic status.
4. Add concise captions, meaningful alt text, long descriptions where structural complexity requires them, and accessible reading order.
5. Integrate assets into manuscript/publication metadata and remove frozen placeholder syntax only after matching figure verification.
6. Verify legibility at web and A4 print sizes, grayscale differentiation, contrast, text extraction expectations, and no clipping or overflow.
7. Update the figure manifest, chapter state/QA, dossier state, and visual QA records.

## Acceptance criteria

- [x] `F01.1` through `F19.2` each resolve to one final source-controlled figure and publication asset.
- [x] No inherited Alpesh identity, image, text, or content appears in the visual set.
- [x] Every figure matches the frozen Phase 09 purpose and does not imply unsupported outcome, certification, compliance, safety, security, or authority.
- [x] Every asset has figure ID, title, caption, alt text, long-description disposition, chapter, source type, dimensions/viewBox, and status metadata.
- [x] Complex figures remain understandable in grayscale and at final PDF scale.
- [x] Web and PDF paths resolve; no placeholder syntax remains in canonical chapters.
- [x] Visual QA, publication validation/tests, companion tests, Astro build, demo/rehearsal, hash verification, and `git diff --check` pass.

## Handoff

Phase 11 receives content-locked prose plus final verified visuals and may perform publication/PDF assembly without redesigning the book.
