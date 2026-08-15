# Chapter 17 Research — Release to Learn Safely

## Architecture anchors

- Primary domains: `AAE-K06`, `AAE-K07`, `AAE-K08`, `AAE-K09`
- Dossier milestone: `PF-11`
- Forecast figures: `F17.1`, `F17.2`

## Research question

How should a team choose readiness evidence, blast radius, rollout population, stop/rollback triggers, and decision authority so production teaches the next uncertainty without unjustified exposure?

## Claim and evidence map

- **C17.1 — Canarying is a partial, time-limited change exposure evaluated against a control.** `AAE-S032` supports bounded rollout and representative/attributable signals.
- **C17.2 — AI readiness evidence must cover data, model, code, infrastructure, and monitoring.** `AAE-S007` supplies cross-layer tests; the score is not an authorization.
- **C17.3 — Risk controls and release decisions depend on context and named governance roles.** `AAE-S001`, `AAE-S002`, and `AAE-S054` support mapping and disposition boundaries.
- **C17.4 — Calibration/abstention and segment results can determine rollout scope.** `AAE-S024`, `AAE-S025`, and `AAE-S049` support operating-point and segment evidence.
- **C17.5 — Model behavior can regress despite positive offline/A-B signals, so qualitative and behavior-specific stop signals matter.** `AAE-S046` provides a first-party rollback case.
- **C17.6 — Secure release and traceable component versions are necessary.** `AAE-S037`, `AAE-S048`, and `AAE-S052` support versioned release evidence.

## Release packet

Behavior/evaluation status, known limitations, operational budgets, control evidence, unresolved risks, owner approvals, population and duration, feature/config/model/data versions, exposure path, user/support readiness, monitoring, go/conditional-go/reduce/delay/stop disposition, triggers, rollback/roll-forward, and command/escalation roles.

## Cases

- `AAE-C001` shows why positive signals did not justify continued exposure.
- `AAE-C003` provides online ranking experimentation context.
- `AAE-C010` supplies readiness questions.
- `AAE-C011` requires segment-aware release constraints.
- `AAE-C012` begins with shadow evidence, then an internal/bounded cohort; image-heavy/ambiguous cases remain restricted.

## Disputes and limits

Production is not an ethical substitute for pre-release evidence. A small cohort may still expose high consequence. Canary populations can be unrepresentative and signals contaminated. Rollback can be stateful or operationally costly.

## Remaining gaps

No release-blocking gap. Phase 07 must create fictional Patchwork decision roles and thresholds and label them as teaching assumptions.

## Blueprint constraints

Require a go/conditional-go/reduce/delay/stop choice under conflicting quality, segment, latency, control, and deadline evidence. No single “launch checklist” answer.

## Manuscript prohibitions

Do not call production testing acceptable by default, treat feature flags as risk elimination, or let the engineer accept legal/security/business risk on behalf of absent owners.
