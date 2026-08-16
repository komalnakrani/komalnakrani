# Volume 2 Chapter 16 Blueprint — Compress, Serve, and Preserve Behavior

## Frozen identity and dependency

- Chapter: `V2-16`; milestone: `MD-15`; domains: `LLME-K06`, `LLME-K09`, `LLME-K11`.
- Prerequisite: packaged artifacts, workload model, and frozen behavior suite.
- Forward dependency: Chapter 17 releases only the selected measured frontier point.
- Reader transformation: from maximum-throughput optimization to behavior-preserving quality/resource selection and graceful degradation.

## Measurable objectives

The reader can compare quantization/calibration/kernel/runtime/batching/cache/speculative variants; verify compatibility; replay target/retention/language behavior; measure memory/latency/tails/throughput/cost; build a Pareto frontier; and define fallback/degradation behavior.

## Concept sequence and skill procedure

Reference artifact/workload → one serving intervention → compatibility → systems benchmark → full behavior replay → slice regressions → frontier → fallback/stop. Procedure: freeze reference; create candidate; record bit/calibration/kernel/runtime; benchmark identical load; rerun all gates; reject dominated/unsafe variants; document fallback.

## Mosaic Desk transition and failure injection

- Incoming: `MD-15` resource model and candidates.
- Failure injection: quantization doubles synthetic throughput but increases citation-schema errors on long Gujarati inputs; lower memory yields no speedup on unsupported kernels.
- Outgoing: serving experiments, quality/resource frontier, selected/rejected configurations, behavior replay, degradation ladder, and completed `MD-15` handoff.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V2-C16-CL01` | `LLME-BSRC-043`, `LLME-BSRC-056`, `LLME-BSRC-057`, `LLME-BSRC-059`, `LLME-BSRC-061` | Compression quality/speed are model/calibration/kernel dependent. |
| `V2-C16-CL02` | `LLME-BSRC-055`, `LLME-BSRC-058`, `LLME-BSRC-062` | Scheduler/serving effects are workload dependent. |
| `V2-C16-CL03` | `LLME-BSRC-009`, `LLME-BSRC-060`, `LLME-BSRC-063` | Every variant needs behavioral and service requalification. |

Use `LLME-CASE-012` for compression and `LLME-BSRC-011` for serving; published numbers are non-portable.

## Dual path, authority, and non-scope

Open-weight variants expose controls; managed-model optimization remains limited to provider features and measured behavior. Platform selects deployment and capacity; LLM engineering proves behavior tradeoffs. Non-scope: universal losslessness, benchmark marketing, kernel development, or throughput-only release.

## Practice and assessment

Exercise: Construct a frontier from synthetic results and reject one fast candidate. Pass when target/retention/slice/service evidence and fallback states determine selection.

## Figures

- `V2-F16.1` — Intent: support the chapter learner decision. Composition: serving candidates plotted across behavior/tail/throughput/memory/cost; short axis labels. Alt: no single configuration dominates all quality/resource dimensions. Evidence role: all three claims.
- `V2-F16.2` — Intent: support the chapter learner decision. Composition: full→quantized/alternate→reduced context→queue→abstain→fallback/stop; short labels. Alt: runtime pressure follows bounded degradation steps. Evidence role: operational fallback artifact.

## Durability, prohibitions, and Phase 08 handoff

Durable: reference comparison, full replay, Pareto/frontier, degradation. Volatile: algorithms/kernels/hardware. Rebenchmark. Prohibit bit-width-as-speed and perplexity-as-acceptance. Phase 08 receives bake-off and rejection scenario.
