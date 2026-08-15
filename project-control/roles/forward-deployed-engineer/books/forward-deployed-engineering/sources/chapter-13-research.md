# Chapter 13 Research — Make the System Observable and Operable

## Research question

Which signals let operators distinguish health, usefulness, safety, affordability, capacity, and data/model quality—and diagnose the next question?

## Claim and evidence map

- **C13.1 — User-relevant indicators and objectives should be tied to action and tradeoffs.** `R06-S047`.
- **C13.2 — Traces, metrics, and logs are distinct telemetry signals.** `R06-S048`; current documentation is version-sensitive.
- **C13.3 — Production ML/AI operation requires data and model-quality evidence in addition to service health.** `R06-S037`, `R06-S038`.
- **C13.4 — Data-quality and software-quality models can structure requirements without prescribing local thresholds.** `R06-S025`, `R06-S044`.
- **C13.5 — Support demand and feedback are operating signals, not merely a post-launch inconvenience.** `R06-S014`.

## Durable principles

Design signals from promises and failure modes. Maintain separate but linked views for service health, workflow outcome/adoption, data quality, AI behavior, security/audit, support demand, performance/capacity, and cost. Every alert needs owner, condition, evidence link, urgency, and a first diagnostic action. Record explicit blind spots.

## Cases

- `R06-C002` shows why retries and new requests may need separate demand signals.
- `R06-C004` ties migration load to connection capacity.
- `R06-C005` shows task-quality regressions that infrastructure health may miss.
- `R06-C010` injects poor low-connectivity-site latency hidden by a healthy aggregate.

## Disputes and limits

More telemetry can increase cost, privacy exposure, and operator noise. SLO targets and alert thresholds are business/risk decisions, not universal values. Observability does not mean retaining every prompt, payload, or sensitive record.

## Remaining gaps

No release blocker. The companion must expose inspectable local metrics and diagnostic paths without requiring a commercial observability service.

## Manuscript prohibitions

Do not equate dashboard existence with operability, use global averages to conceal cohorts, or log sensitive data by default.
