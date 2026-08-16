# Chapter 16 Blueprint — Budget Quality, Time, Cost, and Capacity

## Identity and target

- Part V; primary `AGE-K10`, secondary `AGE-K06`, `AGE-K07`, `AGE-K08`
- Dossier: complete `AR-11 v1.0.0`
- Purpose/decision: choose consequence-aware limits, degradation, routing, and
  capacity from distributions rather than averages.
- Expected depth: advanced operational analysis; 8,000–10,000 words

## Objectives, prerequisites, and bridge

Reader builds joint budgets for quality/time/turn/token/tool/cost/queue/
concurrency/dependency, reasons about tails, and tests degradation. Prerequisite:
`AR-09`, `AR-11 v0.1.0`, percentile/queue basics.

1. Chapter 15 made FieldOps events observable.
2. Those events reveal distributions and shared-resource pressure, not only single-run traces.
3. A healthy mean can hide rare loops that starve urgent work.
4. This chapter defines an operational envelope and safe degradation paths.
5. Chapter 17 receives gates and stop signals for bounded release.

## Scope and sequence

Own agent-specific operational envelope. SRE/platform/FinOps own shared service
capacity, observability, and financial governance; product sets service goals.

| Section | Purpose | Evidence/artifact | Words |
| --- | --- | --- | ---: |
| Joint budget model | Quality plus resource dimensions | `AGE-BCLM-032`; `AGE-BSRC-025`, `027` | budget schema | 1,300–1,600 |
| Distributions/tails | p50/p95/p99 and consequence segments | `AGE-BCLM-031`; `AGE-BSRC-027`, `028` | segment report | 1,400–1,700 |
| Retry/queue/dependency | Model amplification and saturation | both claims; `AGE-BSRC-015`; `AGE-CASE-005` | load model | 1,400–1,700 |
| Multi-agent economics | Bound vendor case, parameterize cost | `AGE-BCLM-032`; `AGE-BSRC-013`; `AGE-CASE-001` | scenario table | 1,100–1,300 |
| Degradation/priority | Proposal-only, optional retrieval off, stop effects | both claims | policy | 1,300–1,600 |
| FieldOps load lab | Rare loop, slowdown, backlog, rate limit | all; `AGE-CASE-012` | `AR-11 v1.0.0` | 1,400–1,700 |

## Procedure, mistakes, trade-offs

Segment tasks/consequence -> set quality floors and hard resource limits ->
measure distributions -> model retries/queues/dependencies -> define degradation
and stop -> load test -> review supported envelope. Durable: joint budgets and
tails. Volatile: provider token pricing, quotas, context limits, vendor costs.

Failure injection: inventory slowdown, layered retries, urgent queue starvation, approval
backlog, rare long loop. Mistakes: averages only, token cost as whole cost,
unbounded concurrency, same limit for all consequence classes, live price as
durable fact. Trade-off: conservative limits contain incidents but can reduce
completion; degradation preserves service while narrowing capability.

Current examples: OpenTelemetry GenAI attributes and Google SRE monitoring/
canary guidance inform fields and operational reasoning; provider prices,
quotas, and dashboards remain parameterized volatile examples.

## Exercise, assessment, figures

- Exercise: derive envelope and response for four load traces. Rubric: dimensions
  5, tails/segments 5, capacity interaction 5, degradation 5.
- Required `F16.1`: labels `Quality`, `Time`, `Actions`, `Cost`, `Queue`,
  `Capacity`. Optional `F16.2`: short paths versus `Rare Loop`; exact numbers in
  accessible charts, not art.


Figure evidence role: each image is a conceptual or causal scaffold, never technical or empirical proof. Accessibility: caption, alt text, and long description must carry every essential relationship without relying on color.

## Phase 08 handoff

Use claims `031–032`, sources `013`, `015`, `025`, `027`, `028`, cases `001`,
`005`, `012`. Parameterize prices/quotas. End with `AR-11 v1.0.0` release signals,
limits, and degradation triggers for Chapter 17.

## Exact evidence manifest

- Claims: `AGE-BCLM-031`, `AGE-BCLM-032`
- Sources: `AGE-BSRC-013`, `AGE-BSRC-015`, `AGE-BSRC-025`, `AGE-BSRC-027`,
  `AGE-BSRC-028`
- Cases: `AGE-CASE-001`, `AGE-CASE-005`, `AGE-CASE-012`
