# Chapter 14 Research Pack — Bind Interfaces, Consumers, and Compatibility

- Canonical chapter: `MLE-CH-14`
- Architecture version: `1.0.0`
- Integration contract: `3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433`
- Evidence currentness date: `2026-08-18`

## Frozen decision job

Freeze request/response contracts, consumer identities, coexistence/migration
evidence, and fallback ownership.

The milestone is `BL-13` — Consumer and compatibility record. The incoming and
outgoing dossier state remains `TECHNICALLY-QUALIFIED` while compatibility
evidence is completed.

## Phase 06 contract coverage

- Exact source research needs: `Interface compatibility`; `Model consumers`;
  `Migration and rollback`.
- Exact Phase 06 handoff: `Research compatibility, consumer registries, and
  migration evidence.`
- Domain: `PD-08` — Release and Compatibility Identity.
- Domain research need: packaging, model cards, compatibility, and migration.

## Canonical claims

### `MLE-BCLM-040` — technical doctrine

Compatibility evidence must distinguish model format, operator set, model
version, request/response semantics, runtime implementation, and consumer
identity because these version axes can evolve independently.

- Source: `MLE-BSRC-020`
- Confidence/durability: high/durable
- Limitation: ONNX supplies a concrete versioning example; other formats and
  product APIs require their own axes and tests.

### `MLE-BCLM-041` — technical method

A breaking interface or semantic change requires an explicit incompatible
version. For any change, the compatibility record names the old and new
consumer fixtures actually tested, the supported coexistence or migration
window, and the rollback target; untested consumers remain a recorded
limitation rather than being implied compatible.

- Sources: `MLE-BSRC-016`, `MLE-BSRC-017`, `MLE-BSRC-020`, `MLE-BSRC-034`
- Confidence/durability: high/durable
- Limitation: semantic version labels are meaningful only against a declared
  contract; real compatibility must be demonstrated for known consumers.

### `MLE-BCLM-042` — technical mechanism

Model signatures and format checkers can reject known schema or serialization
mismatches, while hidden dependencies and undeclared consumers remain outside
that proof. The compatibility record therefore inventories known consumers,
records unresolved discovery limits, and routes fallback ownership to the
relevant consumer or platform owner.

- Sources: `MLE-BSRC-005`, `MLE-BSRC-017`, `MLE-BSRC-020`, `MLE-BSRC-028`
- Confidence/durability: high/contextual
- Limitation: MLflow and ONNX validators are mechanism examples; application
  and platform owners retain consumer and shared-interface authority.

## Source-to-claim matrix

| Source | Canonical identity and evidence role | Claims |
| --- | --- | --- |
| `MLE-BSRC-005` | Hidden Technical Debt in Machine Learning Systems, NIPS 2015 final; durable undeclared-consumer and hidden-dependency doctrine | `MLE-BCLM-042` |
| `MLE-BSRC-016` | Kubernetes rolling update/rollback documentation, modified 2026-03-15; current coexistence/revision/rollback mechanism with bounded scope | `MLE-BCLM-041` |
| `MLE-BSRC-017` | MLflow Models living documentation, accessed 2026-08-18; package signature and schema-enforcement mechanism | `MLE-BCLM-041`, `MLE-BCLM-042` |
| `MLE-BSRC-020` | ONNX Versioning, ONNX `1.23.0`; versioned official rules for IR, operator-set, model, and checker scope | `MLE-BCLM-040`, `MLE-BCLM-041`, `MLE-BCLM-042` |
| `MLE-BSRC-028` | NIST AI RMF 1.0, NIST AI 100-1 final (2023); actors, context, accountability, and unresolved-risk routing | `MLE-BCLM-042` |
| `MLE-BSRC-034` | Semantic Versioning `2.0.0`, final (2013); declared public-API version discipline | `MLE-BCLM-041` |

ONNX and SemVer support version discipline but do not discover consumers or
prove product compatibility. MLflow and Kubernetes are living mechanism
examples. Hidden Technical Debt supports the existence of undeclared consumers
and hidden dependencies, not their prevalence in a particular workload. AI RMF
does not allocate the local fallback owner.

## Frozen architecture trace

- Architecture claims: `MLE-CLM-005`, `MLE-CLM-012`, `MLE-CLM-017`,
  `MLE-CLM-018`, `MLE-CLM-021`
- Boundaries: `BND-06`, `BND-07`, `BND-08`, `BND-09`, `BND-10`, `BND-11`
- Scenarios: `SCN-02`, `SCN-05`, `SCN-06`
- Domain: `PD-08`
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`,
  `PORT-SHARED`
- Cases: `CASE-01`, `CASE-05`, `CASE-10`
- Milestone: `BL-13`

The scenario set tests reusable feature-platform, LLM behavior, and agent-effect
boundaries. Consumer compatibility evidence does not transfer ownership of the
feature platform, LLM behavior lifecycle, agent authority, application, or
shared runtime to the MLE.

## Case truth and bounded use

| Case | Truth label | Chapter use |
| --- | --- | --- |
| `CASE-01` Benchline Inspection Dossier | `FICTIONAL SYNTHETIC CAPSTONE` | Test old/new edge consumer fixtures, migration, coexistence, and fallback ownership; no real device or product outcome. |
| `CASE-05` Shared ranking platform tenant | `CONSTRUCTED SATELLITE` | Separate workload compatibility from tenancy, fleet, shared-runtime, and incident-command authority. |
| `CASE-10` ONNX multi-axis compatibility contract | `PUBLIC REPORTED CASE` | Use ONNX's documented version axes/checker boundary and SemVer discipline to produce a bounded compatibility or migration disposition. |

For `CASE-10`, reported facts are ONNX's distinct IR, operator-set, and model
versions and its declared operator-set/checker behavior. The attributed outcome
is normative version-policy guidance, not measured field compatibility. The
allowed inference is that compatibility requires all declared axes and known
consumer tests. It does not imply universal ONNX portability, automatic
consumer discovery, or production success.

## Durable doctrine, volatile examples, and conflicts

- Durable doctrine: interfaces, consumers, coexistence, migration, and fallback
  are versioned release evidence.
- Volatile examples: serving protocols, client SDKs, runtime support matrices,
  checker behavior, and migration windows.
- Current examples as of 2026-08-18: ONNX `1.23.0` is the pinned format example;
  Kubernetes documentation was modified 2026-03-15; MLflow Models remains a
  mutable latest route; SemVer `2.0.0` is the durable declared-API example.
- Conflict to preserve: a format or schema checker may pass while a consumer is
  undeclared, a runtime differs, product semantics break, or no fallback owner
  exists.
- Recheck trigger: recheck ONNX/runtime compatibility and living project
  documentation at every freeze and whenever selected format, runtime, client,
  protocol, or consumer versions change.

## Authority ceiling and misuse prohibitions

- Authority owner: consumer/application owners accept product compatibility;
  platform owners own shared interface support.
- MLE ceiling: the MLE validates workload compatibility but does not own every
  consuming application or agent effect.
- Do not treat a file extension, model version, SemVer label, signature, schema
  check, or ONNX checker pass as complete compatibility evidence.
- Do not imply untested or undeclared consumers are compatible.
- Do not remove the old path before the coexistence/migration evidence and
  fallback owner are recorded.
- Do not infer universal runtime portability from the ONNX specification.
- Do not absorb application, platform, LLM, agentic, or security authority.

## Five-port transfer

| Port | Transfer requirement |
| --- | --- |
| `PORT-MANAGED` | Export provider format/runtime/interface versions and known consumer tests; opaque compatibility claims force a limitation or HOLD. |
| `PORT-CLASSICAL` | Test feature order, preprocessing, estimator serialization, request/response schema, old/new clients, and rollback. |
| `PORT-DEEP` | Bind checkpoint/format/opset-or-equivalent/runtime/preprocessor axes and test every known consumer. |
| `PORT-EDGE` | Test device runtime, package, sensor/preprocessor contract, delayed rollout, old/new device consumers, and fallback target. |
| `PORT-SHARED` | Inventory tenants/consumers and shared-runtime versions while leaving platform/SRE/security and fleet decisions external. |

## Planned evidence artifacts

- `BL-13` consumer and compatibility record.
- Compatibility ledger keyed by producer, artifact, format/IR/operator set or
  equivalent, runtime, interface, consumer, and test result.
- Old/new consumer fixtures with coexistence/migration window and immutable
  rollback target.
- Migration state machine with breaking/nonbreaking decisions and known/
  unresolved consumer inventory.
- Failure fixtures for undeclared old consumer, missing fallback owner,
  premature deprecation, schema mismatch, and checker-pass/product-failure.

## Exact Phase 07 handoff

- `MLE-BCLM-040`: Blueprint a compatibility ledger keyed by producer, artifact,
  IR/opset or equivalent, runtime, consumer, interface, and test result.
- `MLE-BCLM-041`: Create a migration state machine with old/new fixtures and
  fail paths for undeclared consumers, missing fallback owner, and premature
  deprecation.
- `MLE-BCLM-042`: Blueprint schema/checker fixtures plus a deliberately
  undeclared old consumer that forces HOLD despite package validation.

Evidence-gap disposition: none release-blocking
Rationale: accepted original research, official format/package/deployment documentation, version specifications, and governance evidence support the three compatibility claims while preserving checker, discovery, runtime, and authority limitations.
Affected claim/source IDs: `MLE-BCLM-040`, `MLE-BCLM-041`, `MLE-BCLM-042`; `MLE-BSRC-005`, `MLE-BSRC-016`, `MLE-BSRC-017`, `MLE-BSRC-020`, `MLE-BSRC-028`, `MLE-BSRC-034`.
