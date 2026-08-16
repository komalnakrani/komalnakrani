# Volume 2 Chapter 11 Blueprint — Adapt Efficiently With PEFT

## Frozen identity and dependency

- Chapter: `V2-11`; milestone: `MD-12`; domains: `LLME-K07`, `LLME-K08`, `LLME-K09`.
- Prerequisite: SFT/no-tune results and exact base/tokenizer/runtime identity.
- Forward dependency: Chapter 12/13 compare remaining gaps; Chapter 14 packages selected artifacts.
- Reader transformation: from “cheap fine-tuning” to behavior/resource/compatibility evidence for adapters.

## Measurable objectives

The reader can explain low-rank adapters at decision depth; select target modules/rank/scale/dropout hypotheses; compare full/no-tune/PEFT resource and behavior; document quantized-base implications; verify base/adapter/template compatibility; and evaluate merged/unmerged artifacts.

## Concept sequence and skill procedure

Frozen base → trainable adapter surfaces → configuration/resource budget → training → target/retention evaluation → merge/hotswap/runtime consequences → lineage. Procedure: pin base; define adapter config; run bounded candidates; record memory/storage/time; replay behavior; test load/merge; select only on full frontier.

## Mosaic Desk transition and failure injection

- Incoming: SFT baseline and `MD-12` run machinery.
- Failure injection: adapter loads on the wrong base revision or is served without the training template; merging changes behavior.
- Outgoing: adapter configs/artifacts, compatibility/merge report, behavior-resource comparison, and completed `MD-12` candidate disposition.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V2-C11-CL01` | `LLME-BSRC-041` | LoRA formulation does not promise task equivalence. |
| `V2-C11-CL02` | `LLME-BSRC-042`, `LLME-BSRC-043`, `LLME-BSRC-061` | Resource/quantization effects are stack-specific. |
| `V2-C11-CL03` | `LLME-BSRC-039`, `LLME-BSRC-041`, `LLME-BSRC-043` | Adapters still require full behavioral/retention comparison. |

Use `LLME-CASE-009`; keep reported efficiencies bounded to evaluated settings.

## Dual path, authority, and non-scope

PEFT is open-weight; managed fine-tuning, if mentioned, is only a replaceable access example and must meet the common contract. Platform owns fleet/runtime; engineering owns adapter evidence. Non-scope: PEFT universally superior, parameter count as quality, or infrastructure orchestration.

## Practice and assessment

Exercise: Compare two adapter configurations and detect a compatibility mismatch. Pass when artifact lineage, resources, target/retention, merge state, and runtime assumptions are complete.

## Figures

- `V2-F11.1` — Intent: support the chapter learner decision. Composition: frozen base blocks with small adapter inserts; labels “frozen,” “adapter.” Alt: small trainable sidecars modify a frozen model. Evidence role: claim 01.
- `V2-F11.2` — Intent: support the chapter learner decision. Composition: candidates compared across rank/targets/memory/storage/quality/runtime; short labels. Alt: PEFT choices sit on a multi-dimensional tradeoff rig. Evidence role: claims 02–03.

## Durability, prohibitions, and Phase 08 handoff

Durable: pinned base, adapter lineage, full-frontier evaluation. Volatile: libraries/kernels/method variants. Reverify docs. Prohibit small-equals-safe and merge-equals-equivalent. Phase 08 receives adapter cutaway, ledger, and mismatch exercise.
