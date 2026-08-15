# Chapter 12 Research — Run Experiments That Change Decisions

## Architecture anchors

- Primary domains: `AAE-K03`, `AAE-K06`, `AAE-K09`
- Dossier milestone: `PF-08`
- Forecast figures: `F12.1`, `F12.2`

## Research question

How can offline and online experiments isolate a decision-relevant change, preserve uncertainty and segments, and stop weak evidence from becoming a launch rationale?

## Claim and evidence map

- **C12.1 — Multi-scenario and multi-metric evaluation is needed for heterogeneous behavior.** `AAE-S026` supplies a transparent evaluation framework; product cases must still be representative.
- **C12.2 — Evaluation should be task-specific, continuously replayed, and tied to explicit criteria.** `AAE-S028` supplies current vendor guidance; `AAE-S023` supplies metric definitions.
- **C12.3 — Controlled experiments require trustworthy design, instrumentation, guardrails, and interpretation.** `AAE-S031` supports large-scale online experiment discipline and limitations.
- **C12.4 — A canary is a bounded release experiment requiring representative, attributable signals.** `AAE-S032` connects experimental comparison to release control.
- **C12.5 — Offline and online positives can still miss a behavior category.** `AAE-S046` reports the sycophancy update's qualitative, offline, and A/B blind spots.
- **C12.6 — Retrieval/ranking and shared-model changes need component and end-to-end comparisons.** `AAE-S016`, `AAE-S017`, `AAE-S020`, and `AAE-S022` supply mechanisms and first-party cases.

## Experiment packet

Record decision, hypothesis, baseline, one controlled change, versions, population/segments, assignment or pairing, metrics/criteria, guardrails, sample/stopping rationale, confounds, implementation check, results with uncertainty, negative evidence, reproducibility, and disposition.

## Cases

- `AAE-C001` demonstrates that positive signals do not overrule an unmeasured consequential behavior.
- `AAE-C003` and `AAE-C004` show ranking and shared-model experiments with product/maintenance tradeoffs.
- `AAE-C012` tests whether generated explanations improve comprehension without lowering evidence fidelity or segment quality.

## Disputes and limits

Statistical significance does not imply practical or ethical acceptability. Online experimentation may be disallowed for high-consequence behavior. Multiple testing, peeking, metric changes, novelty, interference, and instrumentation bugs can invalidate inference.

## Remaining gaps

No release-blocking gap. Detailed statistical power instruction belongs in Appendix A and the companion; the chapter must remain decision-centered.

## Blueprint constraints

Include an ablation, paired comparison, segment regression, and a result that forces “reject” or “reduce scope.” Preserve the pre-result plan and every changed criterion.

## Manuscript prohibitions

Do not use significance as a release command, hide negative segments behind an average, or repeatedly tune the grader until the preferred model wins.
