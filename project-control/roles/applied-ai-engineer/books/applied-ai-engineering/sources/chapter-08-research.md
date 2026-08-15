# Chapter 08 Research — Build an Inspectable Vertical Slice

## Architecture anchors

- Primary domains: `AAE-K05`, `AAE-K07`, `AAE-K08`
- Dossier milestone: `PF-06`
- Forecast figures: `F08.1`, `F08.2`

## Research question

What is the smallest production-real behavior path that can be executed, tested, failed, traced, and reviewed without hiding behind provider or framework magic?

## Claim and evidence map

- **C08.1 — A production slice needs tests and monitors across data, model, code, and infrastructure.** `AAE-S007` supplies readiness surfaces; `AAE-S005` describes integration challenges.
- **C08.2 — Data validation must occur at system boundaries and across training/serving assumptions.** `AAE-S009` supports schema/skew/anomaly checks.
- **C08.3 — Structured output is valuable only when the application owns schema validation, business invariants, and effects.** `AAE-S043` and `AAE-S044` support provider interface mechanics and limits.
- **C08.4 — Timeouts/retries require idempotency and bounded amplification.** `AAE-S034` supports dependency-failure engineering; model cost and nondeterminism make duplicate calls additionally visible.
- **C08.5 — Secure provenance, versioning, and release preparation begin during implementation.** `AAE-S037`, `AAE-S048`, and `AAE-S052` support secure development and traceable versions.

## Slice obligations

One request must cross input schema, permission, context/retrieval, deterministic rules, learned adapter, output schema, user display, event/trace, abstention, and failure path. Local deterministic adapters are the reference behavior; network providers remain optional.

## Cases

- `AAE-C002` supplies the product shape of a multimodal retrieval path.
- `AAE-C009` shows why syntactic conformance is one boundary property, not system correctness.
- `AAE-C010` supplies cross-layer readiness questions.
- `AAE-C012` injects a partial ranking timeout and tests that unvalidated candidates cannot become compatibility claims.

## Disputes and limits

A vertical slice is not an MVP promise or a production launch. It includes one thin path of real obligations, not mock diagrams, but can still lack scale and representative evaluation. Framework convenience may be useful if contracts and state remain inspectable.

## Remaining gaps

No release-blocking research gap. Concrete language/framework choices remain Phase 13 companion implementation decisions and cannot become manuscript prerequisites.

## Blueprint constraints

The chapter exit must be runnable without secrets or internet access and include at least one success, abstention, invalid output, dependency timeout, and authorization failure test.

## Manuscript prohibitions

Do not call a notebook or provider call a vertical slice, present retry as universally safe, or let untyped/unvalidated output drive an effect.
