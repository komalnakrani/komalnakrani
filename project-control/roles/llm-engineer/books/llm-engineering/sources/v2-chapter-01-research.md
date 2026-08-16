# V2 Chapter 1 Research Pack — Start From a Frozen Behavior Baseline

## Frozen identity

- Milestone: MD-09.
- Purpose: carry Volume 1 evidence into adaptation without silently changing the task.
- Reader outcome: define base checkpoint, inference configuration, dataset revision, and pre-adaptation behavior ledger.

## Evidence and claims

`V2-C01-CL01` (`LLME-BSRC-007`, `010`, `039`) supports freezing a comparable base before post-training. `V2-C01-CL02` (`009`, `011`, `039`) supports preserving intended-use, safety, and slice evaluations. `V2-C01-CL03` (`007`, `019`, `025`) supports retaining RAG/no-RAG controls so adaptation is not credited for retrieval changes.

Use `LLME-CASE-008` only as a documented staged-recipe example. The durable rule is continuity of evidence across stages. Current base model releases and leaderboards are volatile.

## Mosaic Desk investigation

Freeze the managed Volume 1 behavior record and establish an open-weight base candidate using the same contract cases. Failure injection: tokenizer/template changes alongside the checkpoint, making a claimed “training gain” uninterpretable. The baseline manifest must name weights, revision hash, tokenizer, template, decoding, retrieval/tool state, evaluator, and hardware/runtime.

## Limits and boundary

- Managed and open-weight candidates need comparable outcomes, not identical internal observability.
- A frozen baseline does not prove the adaptation data is lawful, safe, or representative.
- Phase 07 must explicitly separate behavior improvement from infrastructure change.

## Phase 07 blueprint handoff

Blueprint a cross-volume evidence bridge and baseline-freeze exercise. Sources: `007`, `009–011`, `019`, `025`, `039`; case: `008`. Figures: frozen baseline vault and managed/open-weight bridge. Non-scope: training method selection or manuscript prose.
