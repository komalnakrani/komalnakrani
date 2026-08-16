# Volume 1 Chapter 13 Blueprint — Build Representative Evaluation Cases

## Frozen identity and dependency

- Chapter: `V1-13`; milestone: `MD-06`; domains: `LLME-K01`, `LLME-K06`, `LLME-K10`.
- Prerequisite: behavior clauses and joint-evaluation failure matrix.
- Forward dependency: Chapter 14 assigns judges; Chapter 15 freezes the set for experiments.
- Reader transformation: from convenient examples to a documented, segmented, leakage-aware case asset.

## Measurable objectives

The reader can define a target population, justify sampling, tag meaningful intersections, document provenance/labels/ambiguity, isolate train/development/holdout data, detect duplicates/contamination, and state unsupported populations.

## Concept sequence and skill procedure

Behavior clause → target population/time → case sources/permissions → scenario/slice/condition matrix → labels/rubrics → split/deduplication → freeze/refresh/card. Procedure: map clauses to cells; sample nominal/edge/adversarial/out-of-scope cases; document label authority; hash/deduplicate; protect holdout; publish gaps.

## Mosaic Desk transition and failure injection

- Incoming: `MD-06` metric/failure questions.
- Failure injection: templated near-duplicates cross development and holdout, while Gujarati evidence-conflict cases are absent.
- Outgoing: evaluation-set card, coverage matrix, split manifest, contamination report, gaps, and refresh triggers.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V1-C13-CL01` | `LLME-BSRC-009`, `LLME-BSRC-010`, `LLME-BSRC-036` | Representativeness is relative to a defined population. |
| `V1-C13-CL02` | `LLME-BSRC-035`, `LLME-BSRC-034` | Deduplication thresholds have false-positive/negative tradeoffs. |
| `V1-C13-CL03` | `LLME-BSRC-037`, `LLME-BSRC-009` | Aggregate scores can hide language gaps. |

Use `LLME-CASE-006` for documented data processing and `LLME-BSRC-007` for multilingual stratification; neither grants data rights or local adequacy.

## Dual path, authority, and non-scope

The same frozen intended-use set compares managed and open-weight paths; implementation traces can differ. Privacy/domain owners authorize data and labels. Non-scope: fairness certification, unrestricted production-data collection, or synthetic data presented as real distribution.

## Practice and assessment

Exercise: Repair a biased inventory, remove leakage, and write prohibited uses. Pass when every clause/slice has visible support or a declared gap and every record has provenance, split, rubric, and ambiguity.

## Figures

- `V1-F13.1` — Intent: support the chapter learner decision. Composition: case population sampled into language/appliance/risk/evidence segments; those labels. Alt: sampled trays reveal covered and missing population cells. Evidence role: claims 01 and 03.
- `V1-F13.2` — Intent: support the chapter learner decision. Composition: source→annotate→split→freeze→refresh→retire with barriers; labels match stages. Alt: evaluation cases move through a controlled lifecycle. Evidence role: claim 02 and split integrity.

## Durability, prohibitions, and Phase 08 handoff

Durable: population-relative coverage, provenance, split firewall, disclosed gaps. Volatile: case distribution and refresh date. Prohibit random-equals-representative and synthetic-equals-real. Phase 08 receives the case schema, matrix, leakage drill, and card.
