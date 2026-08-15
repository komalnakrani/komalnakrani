# Chapter 11 Blueprint — Combine Machine, Human, and Domain Judgment

## Purpose and exit capability

Select, calibrate, and combine deterministic checks, reference comparisons, model graders, trained raters, users, specialists, and accountable authorities for each system claim.

## Prerequisites and non-scope

- Prerequisite: criteria/error taxonomy and evaluation set.
- Non-scope: universal judge model, replacement of domain expertise, or claim that agreement proves correctness.

## Concepts, skills, and decision models

- Judgment stack: invariant -> reference -> model grader -> trained rater -> specialist -> authority.
- Rubrics, blind sampling, calibration set, disagreement, adjudication, inter-rater evidence, evaluator drift.
- Interaction and recovery evaluation; scalable judgment versus credible judgment.
- Skill: choose cheapest credible evidence while preserving unknowns.

## Architecture, implementation, and stability

- Companion: deterministic graders, seeded biased model-grader fixture, rater rubric, blind sample, calibration/disagreement report.
- Evaluation design is `durable`; grader APIs/prompts/models are `volatile and locally calibrated`.

## Scenario and artifact progression

Extend `PF-07` to v0.3 with evaluator design, calibration study, rater guide, disagreement log, and authority handoff. Compatibility truth remains specialist/seller evidence where data is insufficient.

## Cases and bounded use

- `AAE-C005`: expert label provenance, not automatic authorization.
- `AAE-C006`: evaluator population/category limits.
- `AAE-C008`: interaction and failure recovery.
- `AAE-C009`: deterministic schema claim only.
- `AAE-C012`: synthetic calibration/adjudication.

## Failures, disputes, and tradeoffs

Model judge as objective; human majority as truth; domain expert as infallible; rater instruction changed after results; user preference as authorized behavior. Cost, scale, consistency, expertise, latency, and independence conflict.

## Exercise, companion work, and completion evidence

Assign evaluators to 12 claims, run blind calibration, expose position/verbosity bias, and leave one dispute unresolved. Pass when limitations and authority are explicit and automated evidence is bounded by measured agreement/error.

## Figures

- `F11.1`: judgment stack; assigns claims to credible evidence sources.
- `F11.2`: calibration flow; shows how a scalable evaluator earns limited trust.

## Evidence, competencies, depth, and handoff

- Claims: `C11.1`–`C11.5`; sources `AAE-S003`, `AAE-S024`, `AAE-S026`, `AAE-S027`, `AAE-S029`, `AAE-S030`, `AAE-S049`, `AAE-S050`, `AAE-S051`.
- Domains: primary `AAE-K06`, `AAE-K08`; secondary `AAE-K02`.
- Depth: major evaluation-practice chapter; target 6,500–8,000 words.
- Handoff: Chapter 12 uses calibrated criteria/evaluators in decision-changing experiments.
- Prohibitions: no objective-judge claim, majority-as-truth, authority laundering, or uncalibrated evaluator used as acceptance.
