# V2 Chapter 3 Research Pack — Choose the Smallest Adaptation Ladder

## Frozen identity

- Milestone: MD-09.
- Purpose: escalate from prompting/RAG through adapters, full tuning, preference methods, distillation, or continued pretraining only when evidence requires it.
- Reader outcome: write an adaptation decision with a falsifiable gap and exit criteria.

## Evidence and claims

`V2-C03-CL01` (`LLME-BSRC-007`, `041`, `044`, `046`, `048`) supports matching intervention to the diagnosed behavior gap. `V2-C03-CL02` (`039`, `042`, `043`) supports resource and lifecycle comparisons across staged post-training and PEFT. `V2-C03-CL03` (`011`, `009`) supports retaining simpler controls and rollback evidence.

## Mosaic Desk decision

Start from the frozen open-weight baseline. Test whether prompt/RAG corrections already address the gap; then consider supervised adapters for stable format/task behavior. Failure injection: the team proposes fine-tuning to fix stale policy knowledge that should remain in retrieval. Use `LLME-CASE-008`, `009`, and `010` as bounded options, not a mandatory stack.

## Limits and boundary

- Method papers report results under specific models/data; there is no universal adaptation ranking.
- Training increases data governance, evaluation, packaging, and rollback obligations.
- Product defines the desired behavior; platform/MLOps owns shared training infrastructure; LLM engineering owns method-to-behavior evidence.

## Phase 07 blueprint handoff

Blueprint a diagnostic ladder and stop/go worksheet. Sources: `007`, `009`, `011`, `039`, `041–044`, `046`, `048`; cases: `008–010`. Figures: adaptation staircase and wrong-problem trap. Non-scope: detailed optimizer configuration.
