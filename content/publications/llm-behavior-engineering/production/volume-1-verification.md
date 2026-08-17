# Volume 1 Hostile Verification - LLM Behavior Engineering

Original hostile audit: 2026-08-16

Current-state reconciliation: 2026-08-17

Issue: `#60` under Phase 08 parent `#46`

Accepted baseline entering review: `a89460a`

Result: `PASS - VOLUME 1 COMPLETE, 32 PNGS ACCEPTED, PUBLISHED AND RELEASE-VERIFIED`

## Frozen inventory

| Item | Verified count |
|---|---:|
| Chapters | 16/16 |
| Manuscript words | 44,485 |
| Accepted production claims | 48/48, exactly three per chapter |
| Registered sources | 43/43 reachable with HTTP 200 |
| Bounded case placements | 19 placements across 9 case IDs |
| Figure anchors | 32/32, exactly two per chapter |
| Accessible image containers | 32/32 |
| Long descriptions | 32/32 |
| Learning/state/immediate-QA sets | 16/16 each |
| Deterministic companion tests | 64/64 passing |
| Accepted canonical PNG assets | 32/32 |
| Byte-identical public PNG mirrors | 32/32 |
| SVG/WebP figure assets | 0 |
| Historical deterministic review proofs | 2/2 byte-identical, 210 A4 pages |
| Published-state final builds | A/B/public verified byte-identical, 210 A4 pages |

## Hostile-review method

The audit did not assume prior batch acceptance implied whole-volume correctness. It reconstructed the frozen Volume 1 architecture and checked every manuscript against the Phase 06 claim register, Phase 07 blueprints, publication registries, source back-mappings, case register, figure forecast, state records, and executable companion.

The automated audit required:

- contiguous chapter order and manifest/frontmatter agreement;
- exact canonical claim wording in the claim registry and manuscript prose;
- exact three-claim arrays and all canonical claim sources in each chapter;
- bidirectional claim/source registry mappings;
- every blueprint-required case ID present and every manuscript case ID registered;
- exact figure IDs `V1-F01.1` through `V1-F16.2`, PNG paths, labels, alt containers, and long descriptions;
- matching word counts in every immediate-QA record;
- explicit milestone presence across the `MD-01..MD-08` chain;
- exact accepted PNG assets, ready anchors, registry records, and byte-identical public mirrors;
- deterministic companion validation and no-effect boundaries;
- normalized exact-paragraph and shingle comparison inside Volume 1, against 55 other publication manuscripts, and against 94 LLM control/research files.

## Defects found and repaired

The hostile pass found issues that ordinary schema validation did not catch:

1. `CLM-006` and `CLM-008` in `claims.json` differed from the frozen register by wording and punctuation.
2. Chapters 1-3 and 6 carried the correct ideas and claim IDs but eight claim sentences did not reproduce their frozen statements exactly.
3. Chapters 1 and 2 discussed the prompt-injection boundary without naming bounded `LLME-CASE-014`; Chapter 3 discussed the Transformer paper without naming `LLME-CASE-001`.
4. Chapter 1-3 word records became stale after the corrective prose edits.

Corrections restored the exact claims, added the bounded case identifiers with adjacent limitations, and reconciled Chapter 1-3 QA/manifests to `3,331`, `3,001`, and `3,327` words. No chapter scope, claim meaning, authority, or architecture order changed.

## Continuity and non-repetition

| Milestone | Manuscript progression verified |
|---|---|
| `MD-01` | Chapters 1-2 establish responsibility, task, behavior states, and authority. |
| `MD-02` | Chapters 3-4 turn mechanism consequences into a reversible model/access decision. |
| `MD-03` | Chapters 5-7 bind baseline identity, message trust, and typed proposal/fallback behavior. |
| `MD-04` | Chapter 8 freezes finite context allocation, omissions, and conflict states. |
| `MD-05` | Chapters 9-11 define the retrieval question, stage trace, and provenance-preserving assembly. |
| `MD-06` | Chapters 12-14 create joint diagnosis, representative cases, error taxonomy, and calibrated judgment. |
| `MD-07` | Chapter 15 isolates change, preserves regressions/uncertainty, and records disposition. |
| `MD-08` | Chapter 16 integrates release, minimized observation, recovery, layered diagnosis, migration replay, and a negative adaptation referral. |

No substantive normalized paragraph of 18 or more words repeats between Volume 1 chapters. No such paragraph matches any other publication manuscript. No manuscript paragraph of 30 or more words is copied from the 94 role-control/research files. Internal ten-word-shingle overlap is zero. Cross-publication comparison found only one generic nine-word phrase represented by two overlapping eight-word shingles, with Jaccard `0.000165`; it is not material duplication.

The chapters revisit the same Mosaic Desk system only to consume and change its dossier. Later chapters reference prior artifacts rather than reteaching their procedures.

## Claims, sources, and cases

- All `CLM-001..CLM-048` statements match `V1-C01-CL01..V1-C16-CL03` exactly.
- Every chapter includes all canonical claim sources; all claim/source registry mappings resolve in both directions.
- All 43 registered source URLs returned HTTP 200 after redirects on 2026-08-16. Reachability does not replace the adjacent paper, benchmark, provider, and authority limitations.
- Nineteen case placements use nine registered cases. Every blueprint-required case is named. Papers remain setup-bound, lifecycle evidence remains volatile, and Mosaic outcomes remain synthetic.
- No source, case, schema, judge, safety guide, or model card is promoted into proof of source truth, representativeness, control sufficiency, production quality, or formal approval.

## Figure and visual certification

All 32 exact anchors now render accepted original synthetic ImageGen PNG teaching figures, two per chapter. Every ready figure block has a canonical PNG path, accessible alt text, short essential labels, non-color cues where relevant, a caption with evidence role, and a long description. `figures.json` contains 32 records, and every canonical file has a byte-identical public mirror. The common Phase 10 manifest and provenance ledger record generation source, dimensions, SHA-256, label review, mascot non-use, and disclosure. No canonical SVG or WebP figure asset is used.

## Companion and authority verification

The deterministic companion now covers all sixteen chapters with 64 passing tests. The runner returns empty validator error arrays across charter, task contract, access posture, baseline, messages, typed output, context, retrieval, provenance, joint evaluation, case-set leakage, judgment, experiments, release, and migration.

Chapter 16 specifically verifies:

- one proposal-only semantic adapter contract across managed/open-weight paths;
- explicit provider, platform/SRE, LLM engineering, product, domain, privacy, security, incident, and release responsibilities;
- no external effects and no self-approval;
- purpose-bound signals with no raw content or direct identifiers;
- ordered offline/internal/shadow/bounded-cohort states with stop triggers and fallback;
- separate provider-adapter and retrieval-authorization failure layers;
- migration hold after Gujarati citation and synthetic tail-duration regression;
- adaptation `not-justified` until stable, valuable, data-supported, adaptation-sensitive evidence survives simpler repairs.

## Automated gates

| Check | Result |
|---|---|
| All role-local JSON parses | PASS |
| Whole-volume custom hostile audit | PASS: zero unresolved failures |
| Claim/source/case/figure/word back-mapping | PASS |
| Source reachability | PASS: 43/43 HTTP 200 |
| New Chapter 16 companion | PASS: 4/4 |
| Full Volume 1 companion | PASS: 64/64 |
| Companion runner | PASS: all error arrays empty |
| Lane-scoped publication validation | PASS: 1 role, 1 publication, 0 errors |
| Repository-wide `npm run check` | PASS: validators, repository tests, PDF artifact tests, 85-page Astro build, and 1,537 built-site references |
| Originality/near-duplicate scan | PASS: no material duplication |
| Accepted PNG certification | PASS: 32 canonical + 32 byte-identical public mirrors |
| Figure integration and registry | PASS: 32/32 ready anchors and 32 records; zero pending anchors |
| Historical review proof determinism | PASS: two byte-identical 210-page PDFs |
| Historical review PDF SHA-256 | `62476f25d475d42b790194b8c0dd15e0de79b2f82140e6725fbff6bcc6f60476` |
| Historical review source SHA-256 | `01fd392df1bbe610a163848f71b0c5f9999f4c281c62e1b0a8ce7ec6f7e07018` |
| Published-state final A/B/public result | Verified byte-identical: 10,997,350 bytes, 210 pages |
| Published-state PDF SHA-256 | `5cd5d16cd69c3c766fafa737812918cb1f37f34a91cb6753c7db044cd8c9375b` |
| `git diff --check` and trailing whitespace | PASS |

## Current publication boundary

Volume 1 manuscript, visual, companion, assembly, and historical deterministic review-proof gates pass. Root has transitioned `publication.json` to `status: published`, `edition.publishedAt: 2026-08-17`, and `pdf.enabled: true`. The published-state A/B/public builds are verified byte-identical at SHA-256 `5cd5d16cd69c3c766fafa737812918cb1f37f34a91cb6753c7db044cd8c9375b`, 10,997,350 bytes, and 210 pages. The earlier `62476f…` review proof remains historical review evidence and is not the published-state artifact identity.

Root independently reconciled canonical/public PDF copy integrity, the full 210-page rendered release inspection, and web/download behavior. Any later source, figure, registry, metadata, or builder change invalidates the affected final build and requires the affected gates to rerun.
