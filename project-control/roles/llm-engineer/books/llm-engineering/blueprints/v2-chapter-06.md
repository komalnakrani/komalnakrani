# Volume 2 Chapter 6 Blueprint — Build Instruction and Demonstration Data

## Frozen identity and dependency

- Chapter: `V2-06`; milestone: `MD-11`; domains: `LLME-K07`, `LLME-K08`.
- Prerequisite: clean `MD-10` partitions and task/error taxonomy.
- Forward dependency: Chapter 9 uses rendered records in the training experiment.
- Reader transformation: from polished examples to evidence-linked, template-correct learning records.

## Measurable objectives

The reader can construct instruction/input/context/target metadata; validate evidence-linked targets; render exact chat templates and loss regions; balance positive/negative/abstention/multilingual cases; disclose synthetic generation; and run author/reviewer checks.

## Concept sequence and skill procedure

Diagnosed error → example objective → authorized input/context → target and evidence → template/mask → metadata/slice → review → coverage report. Procedure: assign clause; draft target; verify every claim; render template; inspect loss mask; peer/domain review; update coverage without touching holdouts.

## Mosaic Desk transition and failure injection

- Incoming: curated partitions and recipe.
- Failure injection: synthetic targets contain unsupported facts or the serving/training templates differ.
- Outgoing: instruction/demonstration dataset, rendering tests, evidence validation, author/reviewer provenance, and `MD-11` coverage report.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V2-C06-CL01` | `LLME-BSRC-006`, `LLME-BSRC-037`, `LLME-BSRC-039` | Demonstrations shape behavior but do not guarantee it. |
| `V2-C06-CL02` | `LLME-BSRC-015`, `LLME-BSRC-040` | Template/loss behavior is library/model specific. |
| `V2-C06-CL03` | `LLME-BSRC-008`, `LLME-BSRC-039` | Safety/provenance cases remain bounded evidence. |

Use `LLME-CASE-007` and `LLME-BSRC-008` for multilingual and staged-recipe lessons.

## Dual path, authority, and non-scope

Data trains the open-weight candidate; the managed baseline remains evaluation-only. Domain reviewers own correctness; privacy/legal authorize sources. Non-scope: model-generated data treated as independent truth or held-out examples entering training.

## Practice and assessment

Exercise: Create and audit four record types, including abstention and multilingual. Pass when targets are evidence-supported, templates round-trip, loss regions are intentional, and coverage gaps remain visible.

## Figures

- `V2-F06.1` — Intent: support the chapter learner decision. Composition: input, authorized context, target, loss region, metadata; those labels. Alt: one example shows exactly what is supplied and learned. Evidence role: claims 01–02.
- `V2-F06.2` — Intent: support the chapter learner decision. Composition: quilt maps clauses/errors to positive, negative, abstention, multilingual patches; short labels. Alt: coverage has varied learning signals and visible holes. Evidence role: claims 01 and 03.

## Durability, prohibitions, and Phase 08 handoff

Durable: evidence-linked targets, template identity, coverage/review. Volatile: library rendering APIs. Reverify docs. Prohibit synthetic-equals-correct and template mismatch. Phase 08 receives record anatomy and review drill.
