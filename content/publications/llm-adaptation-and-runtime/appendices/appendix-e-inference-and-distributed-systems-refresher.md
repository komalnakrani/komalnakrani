# Appendix E - Inference and Distributed-Systems Refresher

This appendix supports Chapters 14-17 at decision depth. It does not replace platform, performance, accelerator, networking, database, reliability, security, or SRE expertise.

## The model-system request path

An inference request can cross admission, routing, tokenization, model loading, scheduling, prefill, decode, validation, retrieval or tools, caching, human review, persistence, and observation. End-to-end behavior depends on each version and timeout boundary, not only the model kernel.

Draw the path with:

- principal, tenant, region, and authorization;
- request and response schema versions;
- tokenizer, template, model, adapter, precision, runtime, and router identities;
- queue and timeout boundaries;
- mutable state and caches;
- retries and idempotency;
- validators, fallback, and human gates;
- privacy-minimized signals;
- owner and recovery action at each layer.

## Weight, activation, and KV memory

Weight memory depends on parameter count, representation, quantization metadata, replicas, sharding, and runtime overhead. Active inference also needs workspace, allocator, graph, kernel, activation, communication, and cache memory.

Autoregressive attention commonly retains key/value state for prior tokens. KV demand grows with active sequences, retained context, layers, hidden/head dimensions, representation, and implementation. Prefix sharing, paging, eviction, offload, and quantization can change the boundary, but each introduces compatibility, latency, fragmentation, or behavior questions.

Do not infer safe concurrency from weight fit alone. Measure the complete runtime under the intended context and output distributions.

## Prefill and decode

Prefill processes the input context and often uses parallel matrix operations. Decode produces tokens sequentially per sequence while schedulers batch work across requests. Their latency and resource characteristics differ.

Report end-to-end latency as well as time to first token and inter-token or generation timing when relevant. A short prompt/long output workload and a long prompt/short output workload can have similar token totals and very different behavior.

## Batching and scheduling

Static batching waits for a group and can add queue delay. Dynamic or continuous batching admits work as sequences arrive or complete. Larger batches may improve device utilization while increasing latency, memory pressure, interference, and tail risk.

Record admission, queue discipline, priorities, maximum tokens, cancellation, fairness, padding or packing, preemption, and overload behavior. Throughput at saturation is not the same as capacity under a latency objective.

## Caching

Result caching, prefix caching, and KV reuse solve different problems. A cache key must bind every behavior-bearing input and authorization boundary. Include model, tokenizer, template, adapter, schema, decoding, context/evidence version, principal or permission scope, and relevant control configuration.

Caching can leak data, serve stale evidence, cross tenants, hide a regression, or make benchmark traffic unrepresentative. Define freshness, invalidation, isolation, eviction, observation, and fail-closed behavior. A cache hit is not evidence that the underlying model would still pass.

## Routing and multiple variants

A router may choose among models, adapters, precisions, replicas, regions, or fallbacks. The routing rule becomes part of the behavior contract. Record eligibility, feature inputs, confidence or threshold semantics, excluded segments, health signals, capacity signals, audit fields, and fallback behavior.

A cheaper or faster variant must pass its own target, retention, language, control, compatibility, and workload gates. Aggregate router quality can hide a failing segment.

## Parallelism and specialist boundaries

Data, tensor, pipeline, sequence, or expert parallelism can change memory, communication, failure recovery, numerical behavior, and operational complexity. The LLM Engineer should understand their task-level consequences and evidence needs. Infrastructure and performance specialists own topology, kernel, collective, scheduler, and hardware qualification.

Escalate when conclusions depend on device topology, interconnect saturation, kernel selection, compiler behavior, allocator fragmentation, multi-node recovery, or production capacity. Do not convert a conceptual calculation into a platform promise.

## Queues, overload, and tail behavior

Arrival bursts, long contexts, slow decodes, retries, and unavailable replicas can amplify queue length. Average latency can remain acceptable while a consequential segment encounters severe tails.

Define admission and load-shedding policy, maximum queue time, request budget, cancellation, retry ownership, degradation ladder, backpressure, and recovery. A retry consumes capacity and can worsen the incident. Unknown completion requires reconciliation before repeating any external effect.

## Capacity evidence

A capacity claim should name:

- workload population and time window;
- input/output/context distributions and segments;
- concurrency, arrival, burst, and cache assumptions;
- exact package, runtime, hardware, topology, and region;
- warmup, load duration, percentiles, errors, saturation, and exclusions;
- memory boundary and observed headroom;
- behavior replay under load;
- failure and recovery behavior;
- owner, expiry, and next trigger.

Synthetic examples can validate equations and state transitions. Local tests can qualify one environment. Neither automatically predicts production traffic or hardware.

## Timeouts, retries, and unknown outcomes

Timeouts bound waiting, not necessarily work. A client can time out while the server continues. Retrying a non-idempotent operation can duplicate an effect. Use an idempotency key tied to stable intent, reconcile unknown outcomes, and separate model proposal from authorized action.

Mosaic Desk stops before external effect. Its runtime records still model timeout, fallback, and reconciliation so an integrating product team can preserve that boundary.

## Observation without raw-content default

Useful signals often include version identifiers, state transitions, segment IDs, reason codes, latency buckets, token buckets, resource buckets, validator outcomes, fallback path, and correlation identifiers. Raw prompts, evidence, outputs, labels, gradients, or traces may contain sensitive or restricted data.

Collect only what has a named purpose, owner, retention period, access policy, decision, blind spot, and deletion behavior. Privacy-minimized telemetry is not automatically sufficient or approved; it is a design input for the responsible specialists.

## Layered diagnosis

Investigate regressions across:

1. task and population change;
2. data recipe, split, rendering, or rights change;
3. retrieval or authorized evidence change;
4. prompt, template, tokenizer, model, adapter, or decoding change;
5. schema, validation, evaluator, or human-review change;
6. precision, quantization, runtime, kernel, router, cache, or capacity change;
7. product workflow, permissions, or observation change.

Ask for the next discriminating evidence. Do not optimize the first plausible layer before consequence is contained.

## Release and rollback

Release uses immutable artifacts, bounded exposure, shadow or canary evidence where authorized, named stop triggers, privacy-minimized observation, complete fallback, and formal authority. Rollback must restore the whole prior tuple and reconcile state that cannot be reversed.

After recovery, replay the contract, update the incident and change ledger, expire invalid evidence, and record what remains unknown. Restoration alone is not durable learning.
