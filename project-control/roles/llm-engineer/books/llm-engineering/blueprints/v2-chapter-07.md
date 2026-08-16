# Volume 2 Chapter 7 Blueprint — Build Preference and Feedback Data

## Frozen identity and dependency

- Chapter: `V2-07`; milestone: `MD-11`; domains: `LLME-K06`, `LLME-K07`, `LLME-K08`, `LLME-K10`.
- Prerequisite: clean partitions and explicit behavior/error criteria.
- Forward dependency: Chapter 12 consumes preference pairs only if justified.
- Reader transformation: from “better answer” labels to criterion-specific, bias-audited comparative evidence.

## Measurable objectives

The reader can construct comparable pairs; write criterion-specific rubrics; blind/randomize order; preserve annotator/model-grader identity and rationale; measure disagreement; detect position/verbosity/style/coupling bias; and adjudicate without erasing dissent.

## Concept sequence and skill procedure

Target criterion → pair construction → blinded order → rubric/rater → rationale/disagreement → calibration/bias tests → adjudication → dataset limits. Procedure: isolate one criterion; randomize; collect reason labels; swap order; compare human/model judges; retain contested pairs; separate from holdout.

## Mosaic Desk transition and failure injection

- Incoming: behavior clauses and instruction data.
- Failure injection: raters consistently prefer longer first responses despite weaker citations.
- Outgoing: preference schema, pairs, rubric, rater/grader calibration, disagreement report, and bounded feedback dataset for `MD-11`.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V2-C07-CL01` | `LLME-BSRC-006`, `LLME-BSRC-028`, `LLME-BSRC-030` | Preference is criterion/context evidence, not truth. |
| `V2-C07-CL02` | `LLME-BSRC-028`, `LLME-BSRC-030` | Order/style and label quality can distort signal. |
| `V2-C07-CL03` | `LLME-BSRC-009`, `LLME-BSRC-008` | Representativeness and risk limits still apply. |

Use `LLME-CASE-005` and `LLME-BSRC-010`; judge agreement and DPO results stay setup-bound.

## Dual path, authority, and non-scope

Preference data targets open-weight optimization but can evaluate managed and open-weight paths. Product/domain authorities define valued criteria; engineers operationalize/audit them. Non-scope: popularity as correctness, moral authority, or uncalibrated model labeling.

## Practice and assessment

Exercise: Build reordered pairs and diagnose bias. Pass when rationales, agreement, swaps, disputed cases, provenance, and holdout separation are complete.

## Figures

- `V2-F07.1` — Intent: support the chapter learner decision. Composition: two outputs on a blinded pair bench with rubric/disagreement; labels “A,” “B,” “rubric,” “disagree.” Alt: a blinded comparison records criterion and disagreement. Evidence role: claim 01.
- `V2-F07.2` — Intent: support the chapter learner decision. Composition: length, position, style, familiarity, coupling magnets; matching labels. Alt: five biases pull preference away from intended quality. Evidence role: claims 02–03.

## Durability, prohibitions, and Phase 08 handoff

Durable: criterion-specific comparison, randomization, disagreement. Volatile: rater pools and grader models. Prohibit preference-equals-truth. Phase 08 receives annotation guide and bias exercise.
