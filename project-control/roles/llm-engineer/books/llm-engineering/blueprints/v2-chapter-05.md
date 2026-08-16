# Volume 2 Chapter 5 Blueprint — Curate, Deduplicate, and Separate

## Frozen identity and dependency

- Chapter: `V2-05`; milestone: `MD-10`; domains: `LLME-K06`, `LLME-K07`, `LLME-K10`.
- Prerequisite: versioned data recipe.
- Forward dependency: Chapters 6–8 consume clean, separated partitions.
- Reader transformation: from recipe intent to an auditable dataset with protected claim validity.

## Measurable objectives

The reader can normalize without erasing task structure; record filters/rejections; detect exact/near duplicates; quantify false-removal/leakage risk; isolate train/development/evaluation/retention/control sets; and reproduce hashes/manifests.

## Concept sequence and skill procedure

Raw authorized records → normalization → quality/safety filters → exact/near deduplication → split assignment → overlap/contamination audit → immutable manifest/card. Procedure: hash originals; apply logged transforms; retain rejected ledger; test similarity thresholds; split by provenance/group; audit every boundary; freeze versions.

## Mosaic Desk transition and failure injection

- Incoming: `MD-10` recipe and synthetic records.
- Failure injection: signatures create false duplicates while lightly edited evaluation examples leak into train.
- Outgoing: curated records, rejection ledger, hashes, overlap report, separate vault manifests, limitations, and completed `MD-10` data gate.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V2-C05-CL01` | `LLME-BSRC-035`, `LLME-BSRC-034` | Deduplication is threshold- and representation-dependent. |
| `V2-C05-CL02` | `LLME-BSRC-034`, `LLME-BSRC-036`, `LLME-BSRC-039` | Filters/mixtures require versioned rationale. |
| `V2-C05-CL03` | `LLME-BSRC-034`, `LLME-BSRC-039` | Audit artifacts expose, not eliminate, data limitations. |

Use `LLME-CASE-006` for data-process documentation and `LLME-BSRC-008` for recipe lineage.

## Dual path, authority, and non-scope

Partitions target open-weight training but the evaluation firewall also protects managed comparison. Privacy/domain owners decide allowable content; LLM engineering makes transformations reproducible. Non-scope: privacy guarantee, universal similarity threshold, or hidden deletion of rejected data.

## Practice and assessment

Exercise: Run a paper overlap audit and repair a contaminated split. Pass when hashes, transformations, rejection reasons, split rules, overlaps, and residual uncertainty reproduce.

## Figures

- `V2-F05.1` — Intent: support the chapter learner decision. Composition: near-identical records cross split barriers and trigger alarms; labels “train,” “dev,” “eval,” “overlap.” Alt: indirect duplicates threaten evaluation integrity. Evidence role: claim 01.
- `V2-F05.2` — Intent: support the chapter learner decision. Composition: five physically separated hashed vaults; labels “train,” “dev,” “eval,” “retention,” “control.” Alt: dataset purposes remain isolated and versioned. Evidence role: claims 02–03.

## Durability, prohibitions, and Phase 08 handoff

Durable: logged transforms, rejected ledger, split firewall, overlap audit. Volatile: thresholds/tools. Prohibit deduplication-as-privacy and silent filtering. Phase 08 receives pipeline steps, audit exercise, and manifests.
