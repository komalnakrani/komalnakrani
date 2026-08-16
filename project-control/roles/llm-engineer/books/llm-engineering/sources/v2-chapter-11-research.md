# V2 Chapter 11 Research Pack — Adapt Efficiently With PEFT

## Frozen identity

- Milestone: MD-12.
- Purpose: choose and validate parameter-efficient adaptation when it meets the behavior target.
- Reader outcome: reason about low-rank adapters, quantized bases, resource savings, compatibility, and artifact lineage.

## Evidence and claims

`V2-C11-CL01` (`LLME-BSRC-041`) supports LoRA's frozen-base, trainable-low-rank formulation. `V2-C11-CL02` (`042`, `043`, `061`) supports QLoRA/PEFT resource tradeoffs with runtime constraints. `V2-C11-CL03` (`039`, `041`, `043`) supports comparing adapters with the frozen baseline and retention suite.

Use `LLME-CASE-009`. Its reported efficiencies remain bounded to evaluated settings; no equivalence to full tuning is asserted.

## Mosaic Desk experiment

Train two adapter ranks against the same dataset and evaluate target behavior, retention, memory, wall time, and final artifact behavior. Failure injection: an adapter is loaded on the wrong base revision or served without the training chat template. Record base hash, adapter config, target modules, quantization config, merge status, and runtime.

## Limits and boundary

- Parameter count is not a quality metric.
- Quantization during adaptation can change numerical behavior and supported kernels.
- Adapter merging creates a new artifact that must be evaluated.
- Platform owns fleet operations; LLM engineering owns adaptation and equivalence evidence.

## Phase 07 blueprint handoff

Blueprint LoRA mechanism, resource ledger, compatibility matrix, and adapter comparison. Sources: `039`, `041–043`, `061`; case: `009`. Figures: low-rank sidecar and artifact compatibility stack. Non-scope: declaring PEFT universally superior.
