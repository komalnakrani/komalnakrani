# Chapter 13 Research — Design for Probabilistic Failure

## Architecture anchors

- Primary domains: `AAE-K02`, `AAE-K05`, `AAE-K07`
- Dossier milestone: `PF-09`
- Forecast figures: `F13.1`, `F13.2`

## Research question

How can failures across model, data/context, tool, orchestration, interface, dependency, and user state be bounded, distinguished, and recovered without unsafe repetition?

## Claim and evidence map

- **C13.1 — ML system failures emerge from coupling and dependencies beyond model error.** `AAE-S006` and `AAE-S007` support layered tests and hidden debt.
- **C13.2 — Timeouts and retries can amplify load and require idempotency, backoff, and jitter.** `AAE-S034` supplies service engineering principles.
- **C13.3 — Tail behavior matters because component fan-out amplifies slow outliers.** `AAE-S033` supports distribution and tail analysis rather than mean latency alone.
- **C13.4 — Monitoring should begin with user-visible symptoms and actionable signals.** `AAE-S035` supports symptoms/causes and golden signals.
- **C13.5 — Structured outputs reduce one failure class but leave semantic and effect failures.** `AAE-S043` and `AAE-S044` support schema/tool mechanics; `AAE-S040` adds insecure output/excessive-agency risk.
- **C13.6 — Adversarial failure spans input, data, model, and supply chain.** `AAE-S039`, `AAE-S041`, and `AAE-S042` supply threat vocabulary.

## Failure record

Layer, initiating condition, user consequence, propagation, detection, containment, correction, recovery, retry safety, state consistency, control owner, authority, evidence, and unresolved residual.

## Cases

- `AAE-C007` prevents downstream model patches from hiding upstream data causes.
- `AAE-C009` separates schema success from semantic/effect safety.
- `AAE-C010` supplies multi-layer readiness questions.
- `AAE-C012` injects partial retrieval, duplicate calls, stale context, invalid structured output, and tool confirmation failure.

## Disputes and limits

Probabilistic behavior is not an excuse for unbounded failure. Conversely, no control eliminates all uncertainty. Retrying a read-only model call differs from retrying a tool effect; an apparently idempotent request may still create cost or user-visible inconsistency.

## Remaining gaps

No release-blocking gap. Companion failure-injection implementation will determine exact retry/timeout values and must record them as versioned examples.

## Blueprint constraints

Require a failure-mode matrix and a fallback ladder with stop conditions. At least one fallback must reduce capability or abstain rather than call a larger model.

## Manuscript prohibitions

Do not treat every failure as hallucination, recommend retries without idempotency/load analysis, or use a generic apology as safe degradation.
