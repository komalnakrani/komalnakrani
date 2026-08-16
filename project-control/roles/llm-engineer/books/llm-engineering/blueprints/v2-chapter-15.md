# Volume 2 Chapter 15 Blueprint — Reason About Inference Memory and Throughput

## Frozen identity and dependency

- Chapter: `V2-15`; milestone: `MD-15`; domains: `LLME-K02`, `LLME-K09`, `LLME-K12`.
- Prerequisite: verified `MD-14` packages and Volume 1 service budgets.
- Forward dependency: Chapter 16 compares compression/serving variants on this workload model.
- Reader transformation: from headline throughput to workload-specific memory, latency, tail, and capacity reasoning.

## Measurable objectives

The reader can budget weights/activations/KV state; distinguish prefill/decode and time-to-first/inter-token latency; model input/output lengths, arrivals, batching/cache/parallelism; record hardware/runtime; measure p50/p95/p99 and throughput; and escalate kernel/platform work correctly.

## Concept sequence and skill procedure

Artifact bytes → request lengths → prefill → KV growth/decode → scheduler/batching/cache → concurrency → latency tails/throughput/utilization → capacity decision. Procedure: define workload distributions; estimate memory; benchmark warm/cold; separate stages; vary concurrency; capture tails; compare against behavior budgets.

## Mosaic Desk transition and failure injection

- Incoming: packaged candidates and task budgets.
- Failure injection: batching raises throughput but violates p99 first-token latency for interactive cases.
- Outgoing: resource model, short/long/burst load plan, serving traces, assumptions, specialist interface, and candidate frontier inputs for `MD-15`.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V2-C15-CL01` | `LLME-BSRC-055`, `LLME-BSRC-059`, `LLME-BSRC-062` | KV/scheduler results depend on workload and implementation. |
| `V2-C15-CL02` | `LLME-BSRC-055`, `LLME-BSRC-058`, `LLME-BSRC-060`, `LLME-BSRC-062` | Throughput and tail latency must be reported separately. |
| `V2-C15-CL03` | `LLME-BSRC-054`, `LLME-BSRC-060`, `LLME-BSRC-050` | Precision/kernel/parallelism require target-hardware validation. |

Use `LLME-CASE-011`; its published throughput numbers are non-portable.

## Dual path, authority, and non-scope

Open-weight serving exposes memory/scheduler choices; managed service exposes measured service-level behavior, not internals. Platform/SRE owns capacity/reliability and kernel specialists own low-level optimization. Non-scope: fleet orchestration, portable benchmark promises, or hidden hardware.

## Practice and assessment

Exercise: Build a memory ledger and diagnose throughput/tail tradeoff. Pass when workload, hardware, runtime, warm state, percentiles, errors, and behavior constraints are all recorded.

## Figures

- `V2-F15.1` — Intent: support the chapter learner decision. Composition: weights/activations/KV/batch/context occupy finite shelves; short labels. Alt: inference components compete for memory. Evidence role: claims 01 and 03.
- `V2-F15.2` — Intent: support the chapter learner decision. Composition: arrivals enter batching/cache/routing with a tail marker; labels “arrivals,” “batch,” “cache,” “tail.” Alt: scheduling improves utilization while some requests wait. Evidence role: claim 02.

## Durability, prohibitions, and Phase 08 handoff

Durable: workload identity, stage metrics, tail/throughput separation. Volatile: hardware/kernels/versions. Rebenchmark. Prohibit headline portability and average-only latency. Phase 08 receives calculator concepts and workload drill.
