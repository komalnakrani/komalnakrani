# V2 Chapter 15 Research Pack — Reason About Inference Memory and Throughput

## Frozen identity

- Milestone: MD-15.
- Purpose: connect weights, activations, KV cache, prefill, decode, batching, and parallelism to measured service behavior.
- Reader outcome: build a workload-specific memory/performance budget without importing headline benchmarks.

## Evidence and claims

`V2-C15-CL01` (`LLME-BSRC-055`, `059`, `062`) supports KV-cache and scheduler effects on concurrency. `V2-C15-CL02` (`055`, `058`, `060`, `062`) supports separating prefill/decode, batch, throughput, and tail latency. `V2-C15-CL03` (`054`, `060`, `050`) supports validating precision, kernels, and parallelism on target hardware.

Use `LLME-CASE-011`; its reported throughput is explicitly non-portable. Durable variables: model bytes, cache bytes per active sequence, input/output length distributions, arrival rate, batch policy, time to first token, inter-token latency, throughput, tail latency, and utilization.

## Mosaic Desk benchmark

Construct short-message, long-thread, and burst-arrival workloads. Failure injection: throughput rises under batching while p99 first-token latency violates the desk's interactive contract. Compare warm/cold state and record hardware/software exactly.

## Limits and boundary

- Benchmark figures depend on model, hardware, precision, kernels, scheduler, and workload.
- Peak memory estimates need runtime confirmation.
- Platform/SRE owns capacity and reliability; LLM engineering connects serving choices to behavior and workload evidence.

## Phase 07 blueprint handoff

Blueprint a memory ledger, prefill/decode timeline, workload generator, and Pareto analysis. Sources: `050`, `054`, `055`, `058–060`, `062`; case: `011`. Figures: KV-cache warehouse and latency timeline. Non-scope: fleet orchestration or universal throughput claims.
