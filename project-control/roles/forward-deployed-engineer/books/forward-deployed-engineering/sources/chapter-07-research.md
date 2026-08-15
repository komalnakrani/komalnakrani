# Chapter 07 Research — Make Interfaces and Data Explicit

## Research question

Which contracts make APIs, events, data semantics, quality, lineage, reconciliation, retries, and exceptions testable?

## Claim and evidence map

- **C07.1 — OpenAPI and AsyncAPI provide versioned, machine-readable descriptions for HTTP and message-driven interfaces.** `R06-S020`, `R06-S021`.
- **C07.2 — JSON Schema can validate structure but does not prove business semantics.** `R06-S022` plus its recorded limitation.
- **C07.3 — HTTP defines idempotent method semantics, while application retry safety still depends on intent and implementation.** `R06-S023`, `R06-S024`.
- **C07.4 — A general structured-data quality model can inform requirements and evaluation.** `R06-S025`.
- **C07.5 — Semantic versioning communicates compatibility only after a public API is declared.** `R06-S028`.

## Durable principles

An interface catalog records owner, consumer, transport, authentication, schema, semantic invariants, consistency, ordering, timeout, retry, idempotency, rate limit, version, error model, observability, and support path. A data contract adds identifiers, units, timezone, null/unknown semantics, provenance, validation, retention, reconciliation, and exception ownership.

## Cases

- `R06-C009` exposes the distinction between duplicate parameters and duplicate caller intent.
- `R06-C001` shows schema/configuration validation failing to represent operational state.
- `R06-C008` shows why syntactically valid queries or outputs still need correctness evidence.
- `R06-C010` injects duplicate equipment IDs and an ERP timeout after a write.

## Disputes and limits

Exactly-once effects are not obtained merely by labeling message delivery “exactly once.” Schema registries, canonical models, and event sourcing add cost and can be wrong for a small bounded path. Data-quality dimensions and thresholds are domain decisions.

## Remaining gaps

No release blocker. The blueprint must include executable idempotency and reconciliation examples with a deterministic failure harness.

## Manuscript prohibitions

Do not promise retry safety from HTTP method alone, confuse schema validity with semantic validity, or invent universal quality thresholds.
