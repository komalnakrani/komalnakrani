# V2 Chapter 5 Research Pack — Curate, Deduplicate, and Separate

## Frozen identity

- Milestone: MD-10.
- Purpose: turn authorized source material into traceable training, development, and holdout partitions.
- Reader outcome: document filters, deduplication, contamination checks, and rejected records.

## Evidence and claims

`V2-C05-CL01` (`LLME-BSRC-035`, `034`) supports deduplication as both quality and evaluation-integrity work. `V2-C05-CL02` (`034`, `036`, `039`) supports versioned filtering and mixture records. `V2-C05-CL03` (`034`, `039`) supports retaining audit artifacts and known data limitations.

Use `LLME-CASE-006` as the data-pipeline case and `008` as a post-training recipe case. Durable controls include content hashes, near-duplicate policy, source/split lineage, rejection reasons, and contamination reports. Specific thresholds and tools are corpus-dependent.

## Mosaic Desk experiment

Normalize threads without erasing message boundaries, then compare exact and approximate duplication. Failure injection: templated signatures make unrelated emails look duplicated, while lightly edited evaluation examples evade exact matching. Inspect false removals and residual leakage across language slices.

## Limits and boundary

- Deduplication metrics are proxy decisions; semantic overlap is not binary.
- Removing duplicates may reduce memorization risk but does not guarantee privacy.
- Domain and privacy owners decide allowable content; the engineer makes transformations auditable.

## Phase 07 blueprint handoff

Blueprint curation stages, rejection ledger, split firewall, and contamination drill. Sources: `034–036`, `039`; cases: `006`, `008`. Figures: curation sieve and split firewall. Non-scope: universal similarity threshold or privacy certification.
