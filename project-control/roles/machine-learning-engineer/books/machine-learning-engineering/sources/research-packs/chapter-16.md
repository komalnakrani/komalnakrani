# MLE-CH-16 — Measure the Serving Envelope

- Integration contract: `3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433`
- Architecture: version `1.0.0`; Markdown SHA-256 `5f41bfc624f7085b8e3b2a12d6c2c3d52d6c21659eb5140d94cfa29b0edce630`; JSON SHA-256 `bb2b6fe1137b6b56ff4729d0131c1b9496804bcd3a37e07a92361f4af4da972f`
- Research verification date: `2026-08-18`
- Decision job: Measure representative demand, latency, error, capacity, staged exposure, bake/abort rules, and degraded mode for the workload.

## Canonical book claims

1. `MLE-BCLM-046` (`technical-doctrine`, high confidence, durable): A serving claim must report a latency distribution, including decision-relevant tail percentiles under representative demand, because mean latency can hide rare slow requests that dominate end-to-end behavior as fan-out, utilization, or scale increases.
2. `MLE-BCLM-047` (`technical-method`, high confidence, durable): A workload serving-envelope record binds a named demand and concurrency fixture to the measured latency distribution, request errors, resource observations, observed saturation or failure point, and tested degraded or rollback behavior; every reported bound remains fixture-specific and cannot be promoted to a fleet SLO or untested production guarantee.
3. `MLE-BCLM-048` (`technical-method`, high confidence, durable): Staged exposure should compare a time-bounded candidate population with a control using attributable signals and absolute operating limits, with named bake, abort, rollback, and degraded-mode routes; a globally aggregated dashboard can hide a failing canary.

## Source-to-claim map

| Claim | Canonical sources | Evidence role | Ceiling |
|---|---|---|---|
| `MLE-BCLM-046` | `MLE-BSRC-008` | Original research on tail behavior in distributed online services | No universal percentile, SLO, latency target, or ML-production guarantee transfers from the paper. |
| `MLE-BCLM-047` | `MLE-BSRC-007`, `MLE-BSRC-008`, `MLE-BSRC-016`, `MLE-BSRC-040` | Production-readiness tests, distributional latency, current rollout mechanics, and staged-release method | Kubernetes rollback covers deployment-template state only; the fixed fixture cannot establish fleet capacity or model correctness. |
| `MLE-BCLM-048` | `MLE-BSRC-039`, `MLE-BSRC-040` | Regulator-reported deployment/control failure plus first-party canary method | The Knight event is not ML; canarying neither replaces qualification nor grants release authority. |

## Architecture trace

- Architecture claims: `MLE-CLM-003`, `MLE-CLM-013`, `MLE-CLM-016`, `MLE-CLM-018`
- Boundaries: `BND-09`, `BND-10`, `BND-11`, `BND-12`
- Scenarios: `SCN-02`, `SCN-07`, `SCN-09`
- Production domain: `PD-10`
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`
- Cases: `CASE-01`, `CASE-02`, `CASE-04`, `CASE-05`, `CASE-12`
- Milestone: `BL-15` — Measured serving envelope
- Dossier transition: `RELEASABLE → OPERABLE`
- Source-research needs: `ML serving`; `Tail latency`; `Capacity testing`; `Staged delivery`
- Exact Phase 06 handoff: `Research serving-envelope and staged-exposure evidence.`

## Case truth and use

- Architecture carriers: `CASE-01` (FICTIONAL SYNTHETIC CAPSTONE), `CASE-02` (CONSTRUCTED SATELLITE, managed), `CASE-04` (CONSTRUCTED SATELLITE, deep), and `CASE-05` (CONSTRUCTED SATELLITE, shared). Synthetic traces test the same envelope fields without claiming production performance.
- Claim-linked public case: `CASE-12` (PUBLIC REPORTED CASE, Knight Capital deployment and control failure, `PORT-SHARED`). `MLE-BSRC-039` supplies regulator-reported facts/outcomes/limitations; `MLE-BSRC-040` is transfer context.
- Allowed use: motivate attributable signals, hard absolute limits, complete target identity, abort/rollback routes, and malfunction-oriented testing.
- Prohibited use: describe the event as ML, transfer trading thresholds or regulatory conclusions, omit the settlement's no-admit-or-deny limitation, or treat the loss as an ML serving benchmark.

## Durable doctrine, volatility, and currentness

- Durable doctrine: Representative operating envelopes bind demand, tail behavior, failure, capacity, and rollback.
- Volatile examples: accelerator SKUs, serving frameworks, instance prices, traffic-split mechanisms, and observability products.
- Dated current examples: Kubernetes deployment guidance was last modified `2026-03-15` and verified `2026-08-18`; the Google SRE canary chapter (`2018`) and The Tail at Scale (`2013`) were verified `2026-08-18`; SEC release `2013-222` was browser-verified `2026-08-18` after command-line HTTP `403`.
- Recheck triggers: verify Kubernetes revision/rollback semantics at every freeze; recheck the SEC page through a browser; date every runtime, accelerator, deployment controller, trace fixture, and absolute threshold.
- Conflict resolution: rollout progress and rollback mechanics can be current while remaining insufficient to restore external data, feature, credential, consumer, and evaluation state. The serving envelope therefore records those limitations.

## Authority ceiling

- Exact architecture MLE ceiling: The MLE owns model-workload envelope evidence, not generalized fleet reliability.
- Platform/SRE own fleet capacity, SLOs, shared telemetry, and incident command; product owns exposure intent and formal release owners retain disposition.
- The MLE owns workload-specific fixtures, trace evidence, model-serving behavior, and recovery tests, not generalized fleet reliability.

## Five-port transfer

| Port | Representative fixture | Envelope-specific limitation |
|---|---|---|
| `PORT-MANAGED` | Named provider endpoint, concurrency, batch/online mode, quotas, candidate/control windows | Provider capacity and hidden scheduler behavior remain external. |
| `PORT-CLASSICAL` | CPU process/service demand, preprocessing cost, p50/p95/p99, errors, saturation | One host or synthetic load does not establish fleet SLOs. |
| `PORT-DEEP` | Model server, accelerator/runtime identity, batching, queueing, resource and tail traces | SKU and serving framework results are dated. |
| `PORT-EDGE` | Device class, local/connected mode, power/thermal state, deadlines, fallback | Disconnected and thermal states require explicit fixtures. |
| `PORT-SHARED` | Tenant-isolated candidate/control traces, hard limits, abort and degraded routes | Fleet and tenancy mechanisms remain platform-owned. |

## Misuse prohibitions

- Do not publish mean-only latency, fixture-free capacity, globally aggregated canary signals, or untested production guarantees.
- Do not translate an OPERABLE workload finding into a fleet SLO, model-quality finding, domain acceptance, or formal release.
- Do not privilege accelerator-backed serving; every port must produce the same bounded evidence fields.

## Planned evidence artifacts

- Deterministic five-port request traces with demand, concurrency, p50/p95/p99, errors, resource observations, and saturation/failure point.
- Serving-envelope disposition record that issues `OPERABLE` or `HOLD` with explicit fixture and non-extrapolation fields.
- Staged-exposure record separating candidate/control populations, bake window, attributable signals, absolute limits, abort trigger, rollback identity, and degraded mode.
- Mutations for mean-only reporting, missing fixture identity, aggregated canary masking, incomplete target rollout, and absent recovery route.

## Exact Phase 07 handoff

- `MLE-BCLM-046`: `Blueprint deterministic request traces with p50, p95, p99, error, saturation, and explicit non-extrapolation.`
- `MLE-BCLM-047`: `Make the reader issue OPERABLE or HOLD from a fixed trace and reject a mean-only or fixture-free claim.`
- `MLE-BCLM-048`: `Blueprint a staged-exposure record with separate candidate/control signals, absolute limits, decision owner, abort trigger, and rollback identity.`

## Evidence-gap disposition

Evidence-gap disposition: none release-blocking

Rationale: Primary research, official project documentation, first-party engineering guidance, and bounded regulator facts support the three claims. Absolute thresholds and fleet conclusions remain fixture- and authority-bounded.

Affected claim/source IDs: `MLE-BCLM-046`, `MLE-BCLM-047`, `MLE-BCLM-048`; `MLE-BSRC-007`, `MLE-BSRC-008`, `MLE-BSRC-016`, `MLE-BSRC-039`, `MLE-BSRC-040`.
