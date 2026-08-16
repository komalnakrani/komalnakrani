# Verification - Volume 1 Chapters 13-15

Date: 2026-08-16

Issue: `#58` under parent `#46`

Result: `PASS - MANUSCRIPT COMPLETE, IMAGEGEN ASSETS PENDING`

## Production counts

- Chapters: 3/3 in frozen Volume 1 order.
- Words: 7,619 total (`2,523`, `2,571`, `2,525`).
- Assigned claims: 9/9 exact, exactly three per chapter.
- Sources used: 15; all 15 returned HTTP 200 on 2026-08-16 with limitations retained.
- Cases: `LLME-CASE-006`, `LLME-CASE-007`, `LLME-CASE-005`, and `LLME-CASE-004`, each bounded to its accepted role.
- Figure anchors: 6/6, exactly two accessible PNG paths per chapter.
- Actual PNG/SVG/WebP assets: 0.
- Learning/state/immediate-QA records: 3/3 each.
- Companion tests added: 12/12; cumulative target: 60/60.

## Content checks

- Chapter 13 converts the first `MD-06` diagnoses into a versioned, provenance-bearing, segmented case asset with declared exclusions, family-aware splits, leakage checks, multilingual gaps, and refresh/retirement rules.
- Chapter 14 completes the `MD-06` judgment system by separating criteria, error category, consequence, severity, detectability, segment, control, and disposition; deterministic checks, model graders, humans, domain specialists, and formal authorities remain distinct.
- Chapter 15 opens `MD-07` with a preregistered paired experiment, one valid variable-family change, an explicitly confounded alternative, repeated trials, uncertainty limits, visible Gujarati and tail-duration regressions, and a `revise` disposition.
- Managed/open-weight paths share semantic evaluation contracts while preserving provider/service opacity versus artifact, runtime, dependency, hardware, and evaluator-stack responsibility differences.
- Abstention, conflict escalation, regression gates, and no-effect boundaries remain explicit; graders and engineers receive no domain or release authority.
- No benchmark, customer, production, quality, latency, fairness, security, correctness, judge-accuracy, or causal outcome is invented.

## Automated verification

| Check | Result |
|---|---|
| JSON parse | PASS |
| Exact claim/figure/PNG/accessibility counts | PASS: 3 exact accepted claims, 2 figure IDs, 2 PNG anchors, 2 accessible containers, and 2 long descriptions per chapter |
| New companion tests | PASS: 12/12 |
| Cumulative LLM companion | PASS: 60/60 |
| Companion runner | PASS: all validator error arrays empty; known raw leakage, repaired split, gaps, judge bias/disagreement, regressions, confounds, and `revise` disposition emitted as designed |
| Lane-scoped publication validation | PASS: 1 role, 1 publication, 0 errors |
| Repository-wide `npm run check` | PASS: validators, repository tests, Astro build, and 630 built-site references across 36 HTML pages |
| Source URL reachability | PASS: 15/15 HTTP 200 |
| PNG/SVG/WebP asset count | PASS: 0 |
| `git diff --check` and whitespace | PASS |

## Publication-system note

`figures.json` remains empty until actual raster assets exist. The batch manifest and chapter anchors retain the six accepted semantic records. Root should create them with ImageGen, verify essential labels and accessibility, then add schema-valid publication figure records and frontmatter IDs.

## Next handoff

Chapter 16 receives the complete `MD-01..MD-07` dossier and must build a bounded release, observation, rollback, provider-migration, and adaptation-referral packet for `MD-08`. It must not promote synthetic experiment results into production readiness or transfer privacy, platform, domain, product, security, or release authority to the LLM engineer.
