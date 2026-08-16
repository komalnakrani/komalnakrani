# Volume 1 Chapter 15 Blueprint — Run Experiments That Isolate Change

## Frozen identity and dependency

- Chapter: `V1-15`; milestone: `MD-07`; domains: `LLME-K03`, `LLME-K04`, `LLME-K05`, `LLME-K06`.
- Prerequisite: frozen `MD-06` cases, taxonomy, and evaluators.
- Forward dependency: Chapter 16 consumes accepted/rejected changes and regression gates.
- Reader transformation: from multi-change demos to attributable decisions with uncertainty and visible regressions.

## Measurable objectives

The reader can write a falsifiable hypothesis; freeze controls; design paired/repeated trials; expose segment/error/cost/latency results; identify confounds; predeclare stopping/disposition; and retain negative findings.

## Concept sequence and skill procedure

Decision → hypothesis → baseline/candidate → one variable family → paired cases/repeats → metrics/slices → uncertainty/confounds → retain/revise/reject/scope/release. Procedure: pre-register; version artifacts; execute repeats; inspect raw regressions; calculate appropriate summaries; record decision and residual uncertainty.

## Mosaic Desk transition and failure injection

- Incoming: baseline, retrieval/context configurations, and frozen evaluation.
- Failure injection: prompt, reranker, model, and judge change together; aggregate rises while Gujarati citation quality and p99 latency regress.
- Outgoing: experiment packet, paired results, confound record, decision log, regression gate, and `MD-07` disposition.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V1-C15-CL01` | `LLME-BSRC-007`, `LLME-BSRC-010`, `LLME-BSRC-011` | Attribution is bounded by the experimental design. |
| `V1-C15-CL02` | `LLME-BSRC-009`, `LLME-BSRC-031` | Aggregate improvement can hide consequential slices. |
| `V1-C15-CL03` | `LLME-BSRC-007`, `LLME-BSRC-032` | Summary metrics require raw-case regression review. |

Use `LLME-CASE-004` for retrieval-stage isolation and `LLME-BSRC-005` for judge controls; preserve both limitations.

## Dual path, authority, and non-scope

Common cases/criteria compare managed and open-weight access paths while environment-specific variance is recorded. Product owners decide tradeoff utility; platform supplies runtime facts. Non-scope: scientific causality beyond design, changing business priorities, or universal statistical tests.

## Practice and assessment

Exercise: Repair a confounded experiment and issue a retain/revise/reject/scope decision. Pass when one claim maps to one controlled change, all slices/costs/uncertainty are visible, and negative results remain.

## Figures

- `V1-F15.1` — Intent: support the chapter learner decision. Composition: baseline/candidate rig with one unlocked variable, repeats, segment lenses; labels “baseline,” “one change,” “trials,” “slices.” Alt: controlled candidates are compared under repeated cases. Evidence role: claim 01.
- `V1-F15.2` — Intent: support the chapter learner decision. Composition: evidence and uncertainty enter five disposition gates; labels “retain,” “revise,” “reject,” “scope,” “release.” Alt: measured results lead to explicit decisions. Evidence role: claims 02–03 and decision log.

## Durability, prohibitions, and Phase 08 handoff

Durable: predeclared hypothesis, controlled comparison, raw regressions, disposition. Volatile: evaluator/runtime variance. Prohibit improvement attribution after multi-change tests and aggregate-only release. Phase 08 receives the experiment packet and decision exercise.
