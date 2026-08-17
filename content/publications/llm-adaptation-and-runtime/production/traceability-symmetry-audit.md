# Volume 2 traceability symmetry audit

## Purpose

This lane-local gate prevents publication metadata from drifting away from the Volume 2 manuscript. It is intentionally independent of Phase 10 visual integration and does not modify assets, figure records, common manifests, or provenance.

## Command

From the repository root:

```sh
node content/publications/llm-adaptation-and-runtime/production/audit-traceability.mjs
```

## Enforced invariants

- The 17 publication chapters exactly match the frozen Volume 2 architecture order and titles.
- Part starts remain `[1, 4, 9, 14, 17]`.
- Publication state remains `published`, `edition.publishedAt` remains `2026-08-17`, and `pdf.enabled` remains `true` for the canonical release.
- Every chapter `sourceIds` entry resolves to `sources.json`.
- Every chapter `claimIds` entry resolves to `claims.json`, belongs to that chapter, and appears visibly in the manuscript.
- Every claim source resolves.
- Every source `usedIn.chapterSlugs` array exactly equals the forward chapter-frontmatter truth in publication order.
- Every source `usedIn.claimIds` array exactly equals the forward claim-registry truth in claim order.
- Every case declared by the six Volume 2 production batch records resolves to the series case register.
- Every declared production case link has the matching reverse `V2-NN` chapter entry in the case register.
- Every declared case ID appears visibly and in full in its chapter manuscript.
- All seven Volume 2 appendix source files remain present.

The case-study register may intentionally contain additional architecture or cross-volume uses. The enforced symmetry is therefore exact from each Volume 2 production declaration to its reverse register entry and visible chapter link; broader registered uses are not deleted.

## Current reconciliation

- Source records reconciled: 24.
- Source total: 57.
- Claim total: 51.
- Production case links checked: 36 across 17 chapters.
- Distinct Volume 2 production cases: 11.
- Missing reverse case links repaired: five.
- Previously abbreviated or absent visible case placements repaired: 18.

The gate must pass before a final release artifact or later release handoff is accepted.
