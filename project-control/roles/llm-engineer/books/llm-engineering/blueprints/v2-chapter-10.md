# Volume 2 Chapter 10 Blueprint — Supervise the Model

## Frozen identity and dependency

- Chapter: `V2-10`; milestone: `MD-12`; domains: `LLME-K07`, `LLME-K08`.
- Prerequisite: approved training experiment and instruction data.
- Forward dependency: Chapter 11 compares PEFT; Chapter 12 considers preference optimization only after SFT evidence.
- Reader transformation: from falling loss to checkpoint decisions grounded in held-out behavior.

## Measurable objectives

The reader can explain supervised next-token training/masking; diagnose learning curves, data dominance, overfit and checkpoint divergence; compare against no-tune baseline; evaluate target/retention/language slices; and select/reject with raw examples.

## Concept sequence and skill procedure

Rendered targets/mask → supervised objective → updates/checkpoints → train/development loss → held-out behavior → retention/control → selection. Procedure: verify batches; run bounded SFT; inspect examples and token contributions; evaluate checkpoints; compare slices/resources; retain, stop, or reject.

## Mosaic Desk transition and failure injection

- Incoming: `MD-12` manifest and reviewed demonstrations.
- Failure injection: boilerplate dominates tokens so loss falls while evidence-link correctness stalls; late checkpoint loses abstention.
- Outgoing: SFT checkpoints, curves, behavior/retention tables, diagnostic notes, selection or rejection report.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V2-C10-CL01` | `LLME-BSRC-006`, `LLME-BSRC-040` | SFT objective teaches data patterns, not guaranteed behavior. |
| `V2-C10-CL02` | `LLME-BSRC-009`, `LLME-BSRC-039`, `LLME-BSRC-040` | Checkpoints require intended-use and retention evaluation. |
| `V2-C10-CL03` | `LLME-BSRC-037`, `LLME-BSRC-038` | Multilingual aggregate results hide language variation. |

Use `LLME-CASE-007` and `LLME-BSRC-008` within reported model/language/recipe limits.

## Dual path, authority, and non-scope

SFT is open-weight; the managed path remains a frozen comparator. Data/domain owners validate examples; platform supplies run integrity. Non-scope: full RLHF, universal hyperparameters, or claiming lower loss means better product behavior.

## Practice and assessment

Exercise: Interpret synthetic curves and raw checkpoint outputs, then reject or select. Pass when selection follows protected behavior and evidence, not final training loss.

## Figures

- `V2-F10.1` — Intent: support the chapter learner decision. Composition: base→examples→checkpoints→behavior eval→selection; short labels. Alt: SFT produces checkpoints that require separate behavior evaluation. Evidence role: claims 01–02.
- `V2-F10.2` — Intent: support the chapter learner decision. Composition: train loss descends as held-out/retention bends away; labels “train,” “held-out,” “retention,” “stop.” Alt: apparent optimization accompanies behavior regression. Evidence role: claims 02–03.

## Durability, prohibitions, and Phase 08 handoff

Durable: objective/target clarity, checkpoint evaluation, loss-behavior separation. Volatile: trainer APIs and recipes. Prohibit final-loss selection and cross-language generalization. Phase 08 receives diagnostic curves and decision exercise.
