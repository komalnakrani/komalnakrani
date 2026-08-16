# Verification - Volume 1 Chapters 1-3

Date: 2026-08-16

Issue: `#48` under parent `#46`

Result: `PASS - MANUSCRIPT COMPLETE, IMAGEGEN ASSETS PENDING`

## Production counts

- Chapters: 3/3 in frozen Volume 1 order.
- Words: 9,659 total (`3,331`, `3,001`, `3,327`) after the Volume 1 exact-claim/case hardening pass.
- Assigned claims: 9/9 unique production claims, exactly three per chapter, mapped to all nine accepted blueprint claim IDs.
- Production sources: 14; all 14 reachable with HTTP 200 on 2026-08-16 and all limitations retained.
- Bounded cases: `LLME-CASE-014` in Chapters 1-2; `LLME-CASE-001` in Chapter 3.
- Figure anchors: 6/6, exactly two `.png` paths and two accessible figure containers per chapter.
- Actual PNG/SVG/WebP assets: 0, intentionally pending root ImageGen production.
- Learning records: 3/3.
- Chapter state records: 3/3.
- Immediate QA records: 3/3.
- Companion tests: 12/12 passing, four per chapter, zero provider calls.

## Content checks

- `MD-01` begins with a synthetic demo, locks a proposal-only responsibility boundary, and ends with task-contract version 0.2.0.
- `MD-02` opens with a mechanism-consequence sheet, synthetic traces, context-headroom method, and behavior-identity record.
- Response, configured system behavior, consequence, observation, inference, evidence, decision, working owner, and formal authority remain distinct.
- Managed and open-weight paths share a provider-neutral behavior contract while preserving different configuration, compatibility, runtime, hardware, and operational responsibilities.
- Mosaic Desk remains fictional and synthetic. No deployed system, measured model quality, prevention, customer effect, safety result, or production outcome is invented.
- Attention is bounded to contextual computation and is not presented as a complete explanation, truth measure, or human cognition.
- Anthropomorphic phrases appear only as explicitly rejected language in a rewrite table; positive explanations use observable computation and output terms.
- Every figure anchor includes exact accepted ID, essential labels, accessible short text, a long description, and a bounded evidence role. No mascot is required.

## Automated verification

| Check | Result |
|---|---|
| JSON parse for publication, registries, companion contracts/fixtures, and production manifest | PASS |
| Lane-scoped publication workspace validation | PASS: 1 role, 1 publication, 0 errors |
| Repository-wide `npm run validate:publications` | PASS: 4 roles, 4 publications |
| LLM companion `node --test .../companion/tests/*.test.mjs` | PASS: 12/12 |
| Full `npm run check` | PASS: validators, repository tests, Astro build, and 630 built-site references across 36 HTML pages |
| Exact claim/figure/anchor/accessibility count script | PASS |
| Source URL reachability check | PASS: 14/14 HTTP 200 |
| Lane raster/vector asset count | PASS: 0 |
| Lane `git diff --check` and trailing-whitespace scan | PASS |

## Publication-system note

`figures.json` intentionally remains empty while the image files do not exist. The accepted semantic records live in the batch production manifest and manuscript anchors. Root should generate the six raster PNGs with ImageGen, verify visual fidelity and accessibility against those records, then add the corresponding schema-valid publication figure entries and frontmatter IDs. This avoids registering nonexistent assets as complete.

## Phase 08 continuation

The next writing batch starts Chapter 4 from `MD-02`: compare candidates against the frozen language-task contract, synthetic mechanism tests, privacy/control constraints, and operational assumptions. Do not choose by leaderboard, architecture prestige, or provider identity alone.
