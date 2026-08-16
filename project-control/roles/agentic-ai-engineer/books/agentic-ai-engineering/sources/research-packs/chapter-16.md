# Chapter 16 Research Pack — Budget Quality, Time, Cost, and Capacity

## Frozen job and evidence question

Define the operational envelope across quality, latency, turns, tokens, tools,
external cost, queues, concurrency and dependency capacity. Decide hard limits,
degradation and routing by consequence segment. Complete `AR-11`.

## Claims to carry

- `AGE-BCLM-031`: operate on distributions/tails and traffic/error/latency/
  saturation signals, not averages alone.
- `AGE-BCLM-032`: agent budgets are joint system constraints rather than token
  price alone.

## Source findings

- `AGE-BSRC-027` provides core monitoring signals and cautions against noisy,
  nonactionable metrics.
- `AGE-BSRC-015` connects retry policies, jitter and retry-layer coordination to
  load and stability.
- `AGE-BSRC-025` offers model/token/tool telemetry names with evolving stability.
- `AGE-BSRC-013` is a bounded multi-agent case where reported quality comes with
  far higher token use; it demonstrates tradeoff, not a general ratio.
- `AGE-BSRC-028` supports control/canary comparison and decision thresholds.

## Operational-envelope model

Per task/consequence segment record: completion/policy/recovery floors;
p50/p95/p99 elapsed time; turn and tool-call caps; input/output token estimates;
external-call/cost caps; concurrency; queue delay/depth; dependency quotas;
retry budget; cancellation latency; effect rate; and degraded/stop behaviors.
Separate simulated cost units from current provider prices. Never embed volatile
pricing as an invariant claim.

## FieldOps Relay load lab

Generate mostly short runs plus rare loops. Add inventory slowdown, rate limit,
priority queue, retry amplification and approval backlog. Show that acceptable
average cost can coexist with tail exhaustion that blocks urgent work. Test
degrade-to-proposal-only, disable optional retrieval, reduce concurrency and
stop new effectful runs.

## Phase 07 blueprint seed

Sequence: multi-dimensional budget -> distributions/segments -> queue and
dependency model -> retry interaction -> degradation -> capacity review.
Required `F16.1`; `F16.2` useful. Exact percentiles and definitions belong in
tables/charts derived from companion data, not ImageGen artwork.

## Gaps to keep visible

Synthetic load cannot predict provider quotas, network behavior or human-review
capacity. Cost is provider/region/contract/date specific; Phase 07 should use a
parameterized cost model and label examples.
