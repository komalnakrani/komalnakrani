# Chapter 07 Research — Draw the Combined System Boundary

## Architecture anchors

- Primary domains: `AAE-K02`, `AAE-K03`, `AAE-K05`, `AAE-K08`
- Dossier milestone: `PF-05`
- Forecast figures: `F07.1`, `F07.2`

## Research question

Where should learned behavior, deterministic policy, data/context, orchestration, product state, tools, human decisions, infrastructure, and formal authority live?

## Claim and evidence map

- **C07.1 — ML systems accumulate dependencies and coupling outside model code.** `AAE-S005`, `AAE-S006`, and `AAE-S007` support cross-layer ownership, tests, and debt.
- **C07.2 — Data/context and serving boundaries need explicit contracts and change detection.** `AAE-S009` and `AAE-S048` support validation and version intent; semantic behavior needs richer evidence than API compatibility.
- **C07.3 — Structured output can strengthen an interface without making model content trusted.** `AAE-S043` and `AAE-S044` support schema/tool interfaces and documented limits.
- **C07.4 — Secure development and AI threat frames span software, model, data, supply chain, and runtime.** `AAE-S037`, `AAE-S039`, `AAE-S041`, and `AAE-S042` support layered trust boundaries.
- **C07.5 — Reusable registries and artifacts improve traceability but do not prove behavioral compatibility.** `AAE-S052` supplies an implementation mechanism; `AAE-S055` supplies system-documentation rationale.

## Boundary dimensions

Draw responsibility, trust, data, identity, state, runtime, failure propagation, external dependency, model/provider, and authority boundaries. For each, name who validates, detects, contains, corrects, and approves.

## Cases

- `AAE-C002` separates representation, index, retrieval, and product layers.
- `AAE-C007` tests upstream/downstream responsibility for data cascades.
- `AAE-C009` places schema enforcement before application validation and effects.
- `AAE-C012` prevents generated compatibility language from overriding deterministic incompatibility rules.

## Disputes and limits

Boundary placement changes with team topology and platform maturity. A diagram is a decision record only when assumptions, failure paths, and owners are explicit. “Human approval” is not a component box unless competence, evidence, time, and authority are named.

## Remaining gaps

No release-blocking gap. Phase 07 must specify fictional Patchwork owners and trust zones as case assumptions, not claims about marketplace organizations.

## Blueprint constraints

Require at least three rejected boundary placements and one failure-propagation trace. The architecture must work with a deterministic test double and an optional provider adapter.

## Manuscript prohibitions

Do not draw the model as the whole system, place controls only around prompts, or confuse interface versioning with behavior compatibility.
