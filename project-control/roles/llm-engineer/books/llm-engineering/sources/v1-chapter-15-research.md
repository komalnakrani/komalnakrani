# V1 Chapter 15 Research Pack — Run Experiments That Isolate Change

## Frozen identity

- Milestone: MD-07.
- Purpose: make behavior changes attributable enough to support an engineering decision.
- Reader outcome: design paired experiments, retain raw evidence, and report uncertainty and tradeoffs.

## Evidence and claims

`V1-C15-CL01` (`LLME-BSRC-007`, `010`, `011`) supports changing one named factor while preserving a versioned comparison. `V1-C15-CL02` (`009`, `031`) supports slice-level and risk-level interpretation rather than one aggregate. `V1-C15-CL03` (`007`, `032`) supports inspecting regressions and raw cases alongside summary metrics.

Durable experiment elements: hypothesis, change factor, frozen controls, paired cases, repeat policy, metrics, uncertainty, slice results, latency/cost, regression review, and decision rule. Statistical techniques must match sampling and dependence; Phase 06 does not prescribe a universal test.

## Mosaic Desk experiment

Compare one prompt revision or one reranker while freezing everything else. Failure injection: the aggregate faithfulness score rises while Hindi-English cases and tail latency regress. The decision record must expose Pareto tradeoffs and case-level changes. Use `LLME-CASE-004` for retrieval-stage isolation and `005` for judge-order controls.

## Limits and gaps

- API and hardware variability can confound results; log timing and environment.
- Multiple simultaneous changes prevent clean attribution.
- A statistically visible difference may be operationally irrelevant, and vice versa.
- Product owners set tradeoff priorities; the engineer supplies evidence and uncertainty.

## Phase 07 blueprint handoff

Teach hypothesis cards, paired comparisons, slice tables, regression review, and decision memos. Sources: `007`, `009–011`, `031`, `032`; cases: `004`, `005`. Figures: controlled experiment bench and Pareto frontier. Non-scope: claiming scientific causality beyond the design or selecting business priorities.
