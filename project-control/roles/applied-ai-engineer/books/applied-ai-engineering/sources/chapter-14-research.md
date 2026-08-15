# Chapter 14 Research — Budget Latency, Capacity, and Cost

## Architecture anchors

- Primary domains: `AAE-K03`, `AAE-K07`
- Dossier milestone: `PF-09`
- Forecast figures: `F14.1`, `F14.2`

## Research question

How should end-to-end latency, tail behavior, throughput, capacity, quality, and spend become explicit product decisions rather than infrastructure afterthoughts?

## Claim and evidence map

- **C14.1 — Tail latency across fan-out systems can dominate user experience.** `AAE-S033` supports distribution-aware budgets and mitigation tradeoffs.
- **C14.2 — Timeout/retry choices consume capacity and can worsen overload.** `AAE-S034` supports bounded retries, backoff, jitter, and idempotency.
- **C14.3 — Monitoring latency, traffic, errors, and saturation is necessary but not sufficient for AI product quality.** `AAE-S035` supplies service signals; chapter 15 adds behavior/context signals.
- **C14.4 — Retrieval architecture exposes an effectiveness-efficiency frontier.** `AAE-S017`, `AAE-S018`, and `AAE-S020` supply late interaction, ANN, and multimodal product examples.
- **C14.5 — Personalization and shared rankers create measurable serving and maintenance tradeoffs.** `AAE-S021` reports cache/latency challenges; `AAE-S022` reports motivation for canonical rankers.
- **C14.6 — Provider/model choice must include cost and latency as versioned application evidence.** `AAE-S028` and `AAE-S047` support evolving provider evaluation/change context without supplying timeless prices.

## Budget model

Allocate user-time and spend across input processing, retrieval, ranking, model calls, tools, validation, interface, network, and fallback. Record average and tail, cold/warm state, segment/device/region, peak capacity, concurrency/quotas, cache validity, duplicate work, degradation, and quality impact.

## Cases

- `AAE-C002` shows embedding/index/ANN product architecture.
- `AAE-C003` shows personalization reducing cache reuse.
- `AAE-C004` connects model reuse with maintenance and serving decisions.
- `AAE-C012` forces separate budgets for text-only and image-heavy mobile queries.

## Disputes and limits

Cost is not just provider tokens; include data, indexing, evaluation, review, observability, retries, incident load, and engineering maintenance. Caching can violate freshness, permission, or personalization assumptions. Faster is not always better if it removes evidence or control.

## Remaining gaps

No release-blocking gap. Current vendor prices and named model throughput are intentionally deferred to dated companion adapters.

## Blueprint constraints

Require a quality-latency-cost frontier and at least one tail/segment failure hidden by the mean. Every optimization must state what assumption or quality dimension it risks.

## Manuscript prohibitions

Do not publish timeless provider price comparisons, optimize only average latency, or claim caching/batching is free of semantic and privacy tradeoffs.
