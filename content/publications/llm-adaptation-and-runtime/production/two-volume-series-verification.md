# Hostile Verification - LLM Engineering Two-Volume Series

Original hostile audit: 2026-08-16

Current-state reconciliation: 2026-08-18

Result: **PASS - both volumes published; deterministic PDF, render, web, and download release QA complete**.

- 2 volumes, 33/33 chapters, 72,012 manuscript words.
- 99/99 exact accepted claims: 48 in Volume 1 and 51 in Volume 2.
- 66/66 accepted original synthetic ImageGen PNG teaching figures: 32 in Volume 1 and 34 in Volume 2.
- 66/66 ready figure anchors, registry records, canonical PNGs, and byte-identical public mirrors; zero pending anchors and no canonical SVG/WebP figure assets.
- 16/16 Mosaic Desk milestones, MD-01 through MD-16.
- 14/14 registered case studies represented with bounded use.
- 66/66 unique source URLs resolved successfully at the 2026-08-17 source-currentness gate: 65 with HTTP 200 and the NIST PDF with HTTP 206 on a ranged GET after a non-representative HEAD response.
- 132/132 deterministic series companion tests pass: 64 in Volume 1 and 68 in Volume 2.

Volume 1 ends at MD-08 with release held for authority, provider migration held with fallback, retrieval authorization separated, and adaptation referral not justified. Volume 2 verifies those dispositions and investigates only a new bounded residual. It does not reinterpret migration failure as tuning permission. The series closes its fictional Mosaic dossier with a reconstructable package hold, not forced success.

Both complete editions historically passed deterministic review-proof QA:

| Volume | Paired proof result | Pages | Bytes | PDF SHA-256 | Source SHA-256 |
| --- | --- | ---: | ---: | --- | --- |
| V1, *LLM Behavior Engineering* | byte-identical | 210 | 10,997,119 | `62476f25d475d42b790194b8c0dd15e0de79b2f82140e6725fbff6bcc6f60476` | `01fd392df1bbe610a163848f71b0c5f9999f4c281c62e1b0a8ce7ec6f7e07018` |
| V2, *LLM Adaptation and Runtime* | byte-identical | 156 | 12,828,137 | `09d4b2cd13614759d922735d689766ad68ef8054c0f7a11db2f96a2d9d1c3aa5` | `1fe0ab331f907049c143e1fe90ce96e204ad1c0668980b3079f232b79ee76460` |

Every historical review-proof page had extractable text. Outline destinations, internal/external links, all-page raster contact sheets, and representative higher-resolution structural pages passed. Publication/JSON validation, claim/anchor/milestone/case coverage, originality, companion tests, asset/mirror integrity, PDF determinism, diff checks, full repository check, build, and site-reference validation passed at that review gate.

Root has now transitioned both manifests to `status: published`, `edition.publishedAt: 2026-08-17`, and `pdf.enabled: true`. The published-state final A/B results supplied to this reconciliation are:

| Volume | Final A/B result | Expected pages | Bytes | Published-state PDF SHA-256 |
| --- | --- | ---: | ---: | --- |
| V1, *LLM Behavior Engineering* | verified byte-identical | 210 | 10,997,350 | `5cd5d16cd69c3c766fafa737812918cb1f37f34a91cb6753c7db044cd8c9375b` |
| V2, *LLM Adaptation and Runtime* | verified byte-identical | 156 | 12,828,329 | `36199bf5e69a13502cbbdee4ba8a12a0fb606c04f3577c6870e82822cb93ccd4` |

The earlier `62476f…` and `09d4b2…` hashes remain historical review-proof identities. Root independently reconciled the final reports and verified canonical/public PDF copy equality, all-page rendered-release inspection, 129 built pages, 2,341 local references, and 258 responsive route checks with zero failures. Any future source, figure, registry, metadata, or builder change invalidates the affected final build and requires the affected gates to rerun.
