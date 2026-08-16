# Verification - Volume 1 Chapters 10-12

Date: 2026-08-16

Issue: `#57` under parent `#46`

Result: `PASS - MANUSCRIPT COMPLETE, IMAGEGEN ASSETS PENDING`

## Production counts

- Chapters: 3/3 in frozen Volume 1 order.
- Words: 7,784 total (`2,585`, `2,532`, `2,667`).
- Assigned claims: 9/9 exact, exactly three per chapter.
- Sources used: 12; all 12 returned HTTP 200 on 2026-08-16 with limitations retained.
- Cases: `LLME-CASE-004`, `LLME-CASE-002`, and `LLME-CASE-003`, each bounded to its accepted role.
- Figure anchors: 6/6, exactly two accessible PNG paths per chapter.
- Actual PNG/SVG/WebP assets: 0.
- Learning/state/immediate-QA records: 3/3 each.
- Companion tests added: 12/12; cumulative target: 48/48.

## Content checks

- Chapter 10 freezes ingestion/chunk identity and preserves separately diagnosable query, candidate, authorization, fusion, reranking, and selection evidence.
- Chapter 11 completes `MD-05` with provenance envelopes, source states, trust labels, citation targets, context budget, assembly manifest, and domain-authority handoff.
- Chapter 12 opens `MD-06` with answerability labels, component-plus-joint evidence, controlled interventions, hard gates, evaluator limits, and disputed-case routing.
- Managed/open-weight paths share semantic contracts while preserving service opacity versus artifact/runtime/hardware/packing responsibility differences.
- Authorization, provenance, conflict, absence, correct abstention, and no-effect boundaries remain explicit.
- No benchmark, customer, production, quality, latency, security, correctness, or causal outcome is invented.

## Automated verification

| Check | Result |
|---|---|
| JSON parse | PASS |
| Exact claim/figure/PNG/accessibility counts | PASS: 3 exact accepted claims, 2 figure IDs, 2 PNG anchors, 2 accessible containers, and 2 long descriptions per chapter |
| New companion tests | PASS: 12/12 |
| Cumulative LLM companion | PASS: 48/48 |
| Companion runner | PASS: all validator error arrays empty; selected evidence, assembly states, and joint diagnoses emitted as designed |
| Lane-scoped publication validation | PASS: 1 role, 1 publication, 0 errors |
| Repository-wide `npm run check` | PASS: validators, repository tests, Astro build, and 630 built-site references across 36 HTML pages |
| Source URL reachability | PASS: 12/12 HTTP 200 |
| PNG/SVG/WebP asset count | PASS: 0 |
| `git diff --check` and whitespace | PASS |

## Publication-system note

`figures.json` remains empty until actual raster assets exist. The batch manifest and chapter anchors retain the six accepted semantic records. Root should create them with ImageGen, verify essential labels and accessibility, then add schema-valid publication figure records and frontmatter IDs.

## Next handoff

Chapter 13 receives the first `MD-06` diagnostic evidence and must build a representative, segmented, leakage-aware, versioned case asset. It cannot promote these synthetic diagnostic fixtures into population-quality claims.
