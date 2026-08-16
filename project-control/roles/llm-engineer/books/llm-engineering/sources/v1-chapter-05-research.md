# V1 Chapter 5 Research Pack — Establish a Reproducible Baseline

## Frozen identity

- Milestone: MD-03.
- Purpose: freeze the first repeatable behavior and cost record before prompt or retrieval changes.
- Reader outcome: create a run manifest, raw outputs, metrics, and limitations that another engineer can reproduce as closely as the access path permits.

## Evidence and claims

`V1-C05-CL01` (`LLME-BSRC-007`, `010`, `014`, `015`) supports versioning the whole inference configuration, not only a model label. `V1-C05-CL02` (`010`, `032`) supports preserving raw cases and outcome traces for regression analysis. `V1-C05-CL03` (`009`, `010`) supports separating benchmark evidence from intended-use evidence.

Minimum manifest fields: model and access identifier, date, system/user messages or template revision, tokenizer/template where observable, decoding parameters, tool/retrieval state, input-set revision, code revision, environment, per-case output, latency/cost observations, evaluator version, and known nondeterminism. Seeds may improve repeatability in some stacks but must not be described as a universal determinism guarantee.

## Mosaic Desk baseline

Run the frozen MD-01 contract set unchanged through each candidate. Failure injection: rerun identical inputs and expose material variation or a silent model alias change. The baseline comparison must keep provider-specific fields in adapters while emitting a common result schema. This is the first point where managed and open-weight paths share acceptance evidence without pretending their operational controls are identical.

## Limits and gaps

- A baseline is a timestamped reference, not ground truth or a quality guarantee.
- Latency and cost observations depend on concurrency, region, caching, hardware, and pricing date.
- Some managed services do not expose tokenizer or exact weights; record “not observable,” not an invented equivalent.
- Phase 07 must define the reader's reproducibility artifact and a controlled rerun exercise.

## Phase 07 blueprint handoff

Teach configuration identity, run manifests, raw-evidence retention, and benchmark-versus-product evidence. Skill check: identify missing fields in a misleading experiment log. Sources: `007`, `009`, `010`, `014`, `015`, `032`. Figures: baseline manifest stack and repeatability gap. Non-scope: optimization, production observability, and statistical power claims beyond the collected design.
