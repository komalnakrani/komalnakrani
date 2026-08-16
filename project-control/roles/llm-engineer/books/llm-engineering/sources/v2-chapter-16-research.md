# V2 Chapter 16 Research Pack — Compress, Serve, and Preserve Behavior

## Frozen identity

- Milestone: MD-15.
- Purpose: evaluate quantization, optimized kernels, batching, and speculative decoding as new release candidates with behavioral evidence.
- Reader outcome: compare quality, memory, latency, throughput, compatibility, and cost under the target workload.

## Evidence and claims

`V2-C16-CL01` (`LLME-BSRC-043`, `056`, `057`, `059`, `061`) supports compression as method- and calibration-dependent. `V2-C16-CL02` (`055`, `058`, `062`) supports scheduler and serving-stack effects. `V2-C16-CL03` (`009`, `060`, `063`) supports rerunning behavioral and service evaluations rather than assuming numerical equivalence.

Use `LLME-CASE-012` for quantization and `011` for serving. Reported gains remain bounded to cited models/hardware. Nominal bit width alone does not predict end-to-end speed.

## Mosaic Desk bake-off

Compare an uncompressed reference with two compatible quantized artifacts under the Chapter 15 workload. Measure task/slice/retention behavior, invalid-output rate, time to first token, inter-token latency, throughput, tail latency, and memory. Failure injection: aggregate quality looks stable but Hindi-English or evidence citations regress; another method reduces memory without speedup due to unsupported kernels.

## Limits and boundary

- Perplexity alone is not application acceptance evidence.
- Speculative decoding output-distribution guarantees depend on the exact algorithm and implementation assumptions.
- Platform selects operational deployment; LLM engineering validates behavior preservation and workload tradeoffs.

## Phase 07 blueprint handoff

Blueprint compression taxonomy, compatibility matrix, controlled bake-off, and behavior-equivalence report. Sources: `009`, `043`, `055–063`; cases: `011`, `012`. Figures: compression press and serving racecourse. Non-scope: vendor leaderboard, universal losslessness, or infrastructure provisioning.
