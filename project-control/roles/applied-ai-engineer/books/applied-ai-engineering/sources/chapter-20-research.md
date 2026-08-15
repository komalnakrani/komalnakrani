# Chapter 20 Research — Earn Reuse From Repeated Evidence

## Architecture anchors

- Primary domains: `AAE-K05`, `AAE-K06`, `AAE-K07`, `AAE-K10`
- Dossier milestone: `PF-12`
- Forecast figures: `F20.1`, `F20.2`

## Research question

When should a local evaluation, adapter, context mechanism, control, observability pattern, or model become reusable—and which product-specific evidence must remain local?

## Claim and evidence map

- **C20.1 — ML system reuse can centralize entanglement and hidden debt.** `AAE-S006` requires attention to coupling, feedback, and undeclared consumers.
- **C20.2 — Readiness tests and monitors can become reusable evidence mechanisms when their assumptions remain explicit.** `AAE-S007` supports cross-layer test patterns; no numeric score becomes a platform gate by default.
- **C20.3 — Shared rankers can reduce maintenance while increasing common change risk.** `AAE-S022` supplies a first-party canonicalization case.
- **C20.4 — Data/model/system documentation can support portability and review.** `AAE-S011`, `AAE-S012`, and `AAE-S055` support documented uses, limits, and claims.
- **C20.5 — Registries and version contracts support traceability but are mechanisms, not evidence of semantic reuse.** `AAE-S048` and `AAE-S052` support version records.
- **C20.6 — Current search practice may use LLM-derived signals to complement rather than erase existing relevance signals.** `AAE-S053` supplies a current first-party case, labeled volatile.

## Reuse test

Require repeated compatible tasks, stable behavior/evaluation seams, named local versus shared assumptions, ownership and service level, privacy/security isolation, version/change policy, fallback, migration path, adoption/maintenance economics, and a disconfirmation experiment.

## Cases

- `AAE-C004` is the primary shared-ranker tradeoff case.
- `AAE-C007` cautions that centralized mechanisms can propagate upstream data assumptions.
- `AAE-C010` tests reuse of readiness questions without copying a score.
- `AAE-C012` compares local compatibility rules with reusable result schemas, evaluation tooling, and provider adapters.

## Disputes and limits

Copying can be cheaper and safer than premature abstraction. A platform creates consumers, contracts, migration, support, and governance obligations. Reusable evaluation logic often still needs local data, thresholds, segments, and authority.

## Remaining gaps

No release-blocking gap. Phase 07 must set a fictional evidence threshold for Patchwork reuse and include a “keep local” decision.

## Blueprint constraints

Require a pattern ledger with at least one rejected abstraction and a disconfirmation plan. Make the reader separate reusable mechanism, reusable evidence form, and reusable product decision.

## Manuscript prohibitions

Do not call one feature a platform, claim provider adapters provide portability by themselves, or standardize thresholds/controls across consequences without local validation.
