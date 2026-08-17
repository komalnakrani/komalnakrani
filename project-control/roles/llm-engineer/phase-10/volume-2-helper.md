# Volume 2 ImageGen helper QA

Date: 2026-08-17
Lane: `llm-adaptation-and-runtime` only
Status: complete and commit-ready

## Certified result

- Accepted figures: 34/34, `V2-F01.1` through `V2-F17.2`.
- Canonical assets: `content/publications/llm-adaptation-and-runtime/assets/`.
- Public mirrors: `public/assets/publications/llm-adaptation-and-runtime/`.
- Format and dimensions: 34 PNG files, each 1536 x 1024.
- Mirror integrity: every canonical/public pair is byte-identical by SHA-256.
- Visual direction: crisp, colorful, realistic 3D explanatory scenes; no mascot, logo, watermark, or identity reference.
- Label review: every accepted image was visually inspected against its chapter's essential-label contract. No misspelling or unrelated label was accepted.

## Rejection log

- `V2-F02.2`: rejected one candidate because `length` appeared twice; regenerated with one shared length gauge.
- `V2-F13.1`: rejected one candidate because `reject` appeared on every route; regenerated with one shared rejection buffer.
- `V2-F14.1`: rejected one candidate because `hash` appeared on both a compartment and seal; regenerated with the seal as the sole hash label.

No rejected candidate was installed in a canonical or public asset path. `V2-F01.1` and `V2-F01.2` were inspected and accepted from the concurrently supplied Volume 1 lane sources, as directed; their current mirrors are byte-identical.

## Integration

- All 34 MDX figure anchors now use ready `className="book-figure"` blocks with `data-png`, accessible `img` alt text, explicit 1536 x 1024 dimensions, lazy loading, and async decoding.
- Pending Volume 2 anchors: 0.
- `content/publications/llm-adaptation-and-runtime/figures.json`: 34 accessible registry records.
- Shared Phase 10 asset manifest: 66 unique records = 32 preserved Volume 1 + 34 appended Volume 2.
- Shared Phase 10 provenance: 66 unique records = 32 preserved Volume 1 + 34 appended Volume 2, including generated source, labels, SHA-256, dimensions, paths, and disclosure.

Registry and ledger digests at handoff:

- Volume 2 `figures.json`: `ca597cf6aa0e75be461a20f643f8cd6588c29f0f3eb54a8a42f70585f3776b42`
- Phase 10 `asset-manifest.json`: `617e08759551a2d41dec6d2ebb91706f0dae3b5b8ff70d42637257fc734f3e75`
- Phase 10 `provenance.json`: `f48a3e8552e5b50381e743cd58118435d4b7677f239cc9c33ac50732d6467778`

## Verification

- Combined integrity script: PASS (`66` unique assets; `32` V1 + `34` V2; `34` ready anchors; `34` registry records; `34` byte-identical V2 mirrors; zero pending anchors or duplicate IDs).
- `npm run validate:publications`: PASS (4 role records, 5 publication records).
- `npm run test:publications`: PASS (4/4 tests).
- `PDF_PYTHON=/tmp/llm-v2-qa.7AwRUG/bin/python npm run check`: PASS, including PDF artifact tests, all course/companion suites, Astro build (85 pages), and built-site reference validation (1,537 local references).
- `git diff --check`: PASS.

No commit, push, publication transition, or new book/role work was performed by this lane.
