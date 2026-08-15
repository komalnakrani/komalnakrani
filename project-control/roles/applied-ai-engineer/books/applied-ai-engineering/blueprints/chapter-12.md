# Chapter 12 Blueprint — Run Experiments That Change Decisions

## Purpose and exit capability

Design reproducible offline and online experiments that isolate a change, predeclare evidence, preserve uncertainty/segments, expose confounds, and end in retain/revise/reject/scope/release decisions.

## Prerequisites and non-scope

- Prerequisite: running slice, versioned cases, criteria, error taxonomy, calibrated evaluators.
- Non-scope: full statistics textbook, experimentation-platform engineering, or universal permission to randomize user exposure.

## Concepts, skills, and decision models

- Baseline, ablation, paired comparison, online controlled experiment, canary-as-release experiment.
- Hypothesis, assignment, metric/guardrail, sample/stopping, multiplicity, confound, reproducibility, negative evidence.
- Offline-to-online bridge and explicit decision/disposition.
- Skill: stop optimizing when evidence rejects the capability.

## Architecture, implementation, and stability

- Companion: versioned experiment runner, seeded paired cases, ablation switches, segment report, immutable plan/result packet, regression gate.
- Experimental principles are `durable`; vendor eval/experiment platforms are `replaceable`.

## Scenario and artifact progression

Create `PF-08` experiment packet v0.1. Test retrieval/ranker changes and whether generated explanations improve comprehension without reducing evidence fidelity, latency, or critical-segment quality.

## Cases and bounded use

- `AAE-C001`: positive offline/A-B signals versus missed qualitative behavior.
- `AAE-C003`: ranking/product online evidence.
- `AAE-C004`: shared-model comparison.
- `AAE-C012`: synthetic experiment results and rejection path.

## Failures, disputes, and tradeoffs

Significance as importance; metric after results; repeated grader tuning; hidden negative slices; online exposure as shortcut; non-reproducible provider version. Fast learning, user consequence, sample size, and iteration cost conflict.

## Exercise, companion work, and completion evidence

Pre-register, run, reproduce, and decide one ablation plus one paired comparison with a segment regression. Pass when plan precedes result, versions/hashes resolve, and preferred mechanism can be rejected.

## Figures

- `F12.1`: experiment graph; exposes baseline, change, confound, segment, and decision.
- `F12.2`: evidence-to-disposition flow; prevents result reporting without action.

## Evidence, competencies, depth, and handoff

- Claims: `C12.1`–`C12.6`; sources `AAE-S016`, `AAE-S017`, `AAE-S020`, `AAE-S022`, `AAE-S023`, `AAE-S026`, `AAE-S028`, `AAE-S031`, `AAE-S032`, `AAE-S046`.
- Domains: primary `AAE-K03`, `AAE-K06`, `AAE-K09`.
- Depth: major experimentation chapter; target 6,500–8,000 words.
- Handoff: Chapter 13 makes the selected behavior fail safely under realistic system conditions.
- Prohibitions: no significance-as-launch, average masking, online experiment without authority, or evaluator tuned to preference.
