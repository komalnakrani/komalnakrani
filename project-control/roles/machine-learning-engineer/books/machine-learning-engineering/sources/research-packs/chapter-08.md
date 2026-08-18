# Chapter 08 Research Pack — Bind Run Identity and Bounded Reproducibility

- Canonical chapter: `MLE-CH-08`
- Architecture version: `1.0.0`
- Integration contract: `3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433`
- Evidence currentness date: `2026-08-18`

## Frozen decision job

Freeze code, data, dependency, parameter, seed, hardware, and execution-context
identity and state the strongest supportable rerun claim.

The milestone is `BL-07` — Run identity and reproducibility statement. The
incoming dossier state is `ADMISSIBLE`; the outgoing state is
`RECONSTRUCTIBLE`.

## Phase 06 contract coverage

- Exact source research needs: `Reproducibility standards`; `Hardware
  nondeterminism`; `Experiment metadata`.
- Exact Phase 06 handoff: `Research bounded reproducibility and required run
  identities.`
- Domain: `PD-04` — Controlled Experiment Identity.
- Domain research need: experiments, metadata, and nondeterminism.

## Canonical claims

### `MLE-BCLM-022` — technical doctrine

Reproducibility must be claimed against a named code, data, dependency, device,
release, and execution context; identical seeds do not justify a universal
bit-for-bit promise across releases or hardware.

- Sources: `MLE-BSRC-009`, `MLE-BSRC-021`
- Confidence/durability: high/durable
- Limitation: the defensible bound depends on the workload and cannot be
  inferred from a framework deterministic switch alone.
- Volatility rule: preserve the bounded-claim rule; date and pin framework,
  accelerator, driver, and deterministic-operation examples.

### `MLE-BCLM-023` — technical method

A reconstructible run record binds source revision, immutable data identity,
environment and dependency lock, parameters, seeds, hardware/runtime context,
timestamps, metrics, and artifact digests rather than treating a tracker run ID
as sufficient evidence.

- Sources: `MLE-BSRC-009`, `MLE-BSRC-018`
- Confidence/durability: high/durable
- Limitation: a manifest proves recorded identity and supports reconstruction;
  it does not prove completeness or scientific validity.
- Volatility rule: the schema purpose is durable; tracker field names and
  storage APIs are dated mechanisms.

### `MLE-BCLM-024` — technical mechanism

Determinism controls can seed known randomness, choose deterministic
operations, and fail on known nondeterministic operations, but their coverage
and performance costs must travel with the rerun result.

- Source: `MLE-BSRC-021`
- Confidence/durability: high/contextual
- Limitation: exact controls vary by framework, operator, backend, and release;
  unsupported nondeterminism remains recorded.
- Volatility rule: pin every API example to a release while retaining the
  coverage, performance, and limitation pattern.

## Source-to-claim matrix

| Source | Canonical identity and evidence role | Claims |
| --- | --- | --- |
| `MLE-BSRC-009` | Pineau et al., JMLR 22(164), final (2021); research-program evidence for inspectable code, data, reporting, and workflow artifacts | `MLE-BCLM-022`, `MLE-BCLM-023` |
| `MLE-BSRC-018` | MLflow Tracking, MLflow 3 living documentation, accessed 2026-08-18; current run-metadata mechanism only | `MLE-BCLM-023` |
| `MLE-BSRC-021` | PyTorch 2.13 Reproducibility documentation, published 2026-05-14 and verified 2026-08-18; versioned controls and explicit cross-context limits | `MLE-BCLM-022`, `MLE-BCLM-024` |

The research paper supports transferable evidence principles, while the two
official project sources support current mechanisms only. A logged tracker run
or enabled deterministic mode is not independently sufficient support for a
reproducibility claim.

## Frozen architecture trace

- Architecture claims: `MLE-CLM-010`, `MLE-CLM-017`, `MLE-CLM-018`,
  `MLE-CLM-022`
- Boundaries: `BND-03`, `BND-04`, `BND-09`, `BND-10`
- Scenario: `SCN-03` — a run cannot be reproduced bit-for-bit on different
  hardware; platform/infrastructure owners retain supported-runtime authority.
- Domain: `PD-04`
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`,
  `PORT-SHARED`
- Cases: `CASE-01`, `CASE-02`, `CASE-04`, `CASE-05`, `CASE-08`
- Milestone: `BL-07`

## Case truth and bounded use

| Case | Truth label | Chapter use |
| --- | --- | --- |
| `CASE-01` Benchline Inspection Dossier | `FICTIONAL SYNTHETIC CAPSTONE` | Carry a constructed edge run through manifest identity and a bounded rerun statement; no real field or performance outcome. |
| `CASE-02` Managed demand forecast | `CONSTRUCTED SATELLITE` | Test exportable run identity under managed opacity; provider metadata is not qualification. |
| `CASE-04` Deep acoustic event classifier | `CONSTRUCTED SATELLITE` | Stress checkpoint, preprocessor, accelerator, seed, and runtime identity with bounded local fixtures only. |
| `CASE-05` Shared ranking platform tenant | `CONSTRUCTED SATELLITE` | Separate tenant/workload reconstruction from shared-platform assurance. |
| `CASE-08` PyTorch bounded reproducibility contract | `PUBLIC REPORTED CASE` | Use PyTorch's reported limits and mechanisms plus research-transfer context to draft the strongest supportable rerun statement; claim no production outcome. |

For `CASE-08`, reported facts are limited to PyTorch's documented lack of
complete cross-release/platform/CPU-GPU guarantees and its deterministic
algorithm controls. The attributed outcome is PyTorch's report that slower
deterministic operations can aid experimentation, debugging, and regression
testing. The allowed inference is a bounded, context-named rerun claim—not
bitwise portability or complete mechanism coverage.

## Durable doctrine, volatile examples, and conflicts

- Durable doctrine: immutable run identity and honest context limits make
  evidence reconstructible.
- Volatile examples: hardware SKUs, driver versions, tracker APIs, backend
  behavior, and deterministic-operator coverage.
- Current examples as of 2026-08-18: PyTorch `2.13` is the pinned framework
  example; MLflow Tracking is a mutable MLflow 3 documentation route and must
  be pinned before executable examples.
- Conflict to preserve: research reproducibility language does not imply
  production bit identity; framework determinism controls do not cover every
  external source of nondeterminism.
- Recheck trigger: recheck all three URLs at blueprint, manuscript, and
  publication freeze, and whenever framework, CUDA/cuDNN, device, driver,
  tracker, or runtime context changes.

## Authority ceiling and misuse prohibitions

- Authority owner: platform owners define supported runtime; research and
  evaluation owners retain claim-validity decisions.
- MLE ceiling: the MLE records and tests bounded reconstruction, not universal
  determinism.
- Do not present a seed, tracker ID, deterministic flag, or matching metric as
  a reproducibility certificate.
- Do not erase a divergent cross-context rerun or call it equivalent without a
  declared tolerance and decision owner.
- Do not turn PyTorch behavior into a framework-neutral guarantee.
- Do not absorb scientific-novelty, platform, or infrastructure authority.

## Five-port transfer

| Port | Transfer requirement |
| --- | --- |
| `PORT-MANAGED` | Export source/data/configuration identities and provider limits; opaque provider state forces a bounded claim or HOLD. |
| `PORT-CLASSICAL` | Preserve feature/preprocessing, estimator, dependency, seed, and environment identity; simplicity does not remove evidence. |
| `PORT-DEEP` | Bind checkpoint, preprocessor/tokenizer, accelerator, framework, backend, driver, and deterministic-control coverage. |
| `PORT-EDGE` | Bind sensor/data, device package, constrained runtime, and delayed-feedback context without claiming field reproducibility. |
| `PORT-SHARED` | Bind tenant/workload identity and shared-runtime version while leaving fleet assurance and platform support external. |

## Planned evidence artifacts

- `BL-07` run-identity and reproducibility statement.
- Mandatory run-capsule manifest with hash checks and explicit missing-field
  failures.
- Same-context repeatability versus cross-context reconstruction decision
  table.
- Deliberate CPU/GPU or hardware-context divergence fixture with retained
  evidence and declared tolerance.
- Mechanism-versus-claim matrix for seeded, deterministic, unsupported, and
  performance-cost outcomes.

## Exact Phase 07 handoff

- `MLE-BCLM-022`: Blueprint a run-capsule decision table that distinguishes
  same-context repeatability, bounded reconstruction, numerical tolerance, and
  unsupported cross-context identity.
- `MLE-BCLM-023`: Specify mandatory manifest fields, hash checks, missing-field
  failures, and a deliberate cross-context divergence fixture.
- `MLE-BCLM-024`: Create a mechanism-versus-claim matrix with seeded,
  deterministic, unsupported, and performance-cost outcomes.

Evidence-gap disposition: none release-blocking
Rationale: all three claims have accepted primary or official support, explicit context limits, dated current mechanisms, and a bounded public-case transfer rule.
Affected claim/source IDs: `MLE-BCLM-022`, `MLE-BCLM-023`, `MLE-BCLM-024`; `MLE-BSRC-009`, `MLE-BSRC-018`, `MLE-BSRC-021`.
