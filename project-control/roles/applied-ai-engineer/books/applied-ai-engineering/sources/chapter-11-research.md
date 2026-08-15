# Chapter 11 Research — Combine Machine, Human, and Domain Judgment

## Architecture anchors

- Primary domains: `AAE-K06`, `AAE-K08`
- Dossier milestone: `PF-07`
- Forecast figures: `F11.1`, `F11.2`

## Research question

Which claims can be judged by deterministic checks, reference comparison, model graders, users/raters, specialists, or accountable authorities—and how is each evaluator calibrated?

## Claim and evidence map

- **C11.1 — Human-AI interaction must be evaluated through observable use, correction, and change, not model outputs alone.** `AAE-S003` and `AAE-S030` support interaction and integration-testing methods.
- **C11.2 — Model-based judging can be useful but exhibits systematic biases in studied settings.** `AAE-S027` supports position, verbosity, and self-enhancement concerns; `AAE-S029` documents current grader types.
- **C11.3 — Broad benchmark frameworks benefit from transparent scenarios, metrics, and raw artifacts.** `AAE-S026` supports multi-dimensional evaluation while remaining separate from product acceptance.
- **C11.4 — Domain labels and judgments have provenance, expertise, and uncertainty.** `AAE-S051` documents radiologist participation and label process; it does not make all expert judgment infallible.
- **C11.5 — Calibration and segment evidence are required before trusting a judge or score across contexts.** `AAE-S024`, `AAE-S049`, and `AAE-S050` support calibration and subgroup analysis.

## Judgment hierarchy

Use deterministic checks for syntax/invariants; references for exact known targets; calibrated models for bounded scalable judgments; trained raters for defined criteria; domain specialists for substantive truth; named authorities for approval. A higher-cost evaluator is not automatically better, and agreement is not correctness.

## Cases

- `AAE-C005` separates label-production expertise from application authorization.
- `AAE-C006` tests whether evaluator categories and benchmark composition hide affected groups.
- `AAE-C008` adds user interaction and recovery evidence.
- `AAE-C009` proves schema validity only.
- `AAE-C012` requires calibrated compatibility-review cases and preserves disagreement.

## Disputes and limits

Inter-rater agreement can expose ambiguity but cannot settle normative disputes. Model judges can reproduce provider/style preferences. Domain specialists can disagree or work under incomplete evidence. User preference can conflict with long-term interest or authorized behavior.

## Remaining gaps

No release-blocking gap. Phase 07 must define rater training, blind sampling, adjudication, and stop conditions for synthetic Patchwork exercises.

## Blueprint constraints

Require an evaluator-selection matrix and a calibration study with intentionally biased model-judge outputs. At least one claim must remain unresolved and routed to a named authority.

## Manuscript prohibitions

Do not call a model judge objective, equate majority vote with truth, or use “human in the loop” without competence, evidence, timing, and authority.
