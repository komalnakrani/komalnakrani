# Chapter 13 Research Pack — Release a Package Plus Evidence

- Canonical chapter: `MLE-CH-13`
- Architecture version: `1.0.0`
- Integration contract: `3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433`
- Evidence currentness date: `2026-08-18`

## Frozen decision job

Bind executable artifact, dependencies, interface, intended/excluded use,
evaluated bounds, approvals, limitations, hashes, and previous-good target.

The milestone is `BL-12` — Evidence-bound release package. The incoming
prerequisite is `BL-11:TECHNICALLY-QUALIFIED`; the dossier remains
`TECHNICALLY-QUALIFIED` while the release unit is assembled.

## Phase 06 contract coverage

- Exact source research needs: `Model packaging`; `Model cards`; `SBOM and
  artifact lineage`.
- Exact Phase 06 handoff: `Research release bundles, evidence records, and
  recovery identity.`
- Domain: `PD-08` — Release and Compatibility Identity.
- Domain research need: packaging, model cards, compatibility, and migration.

## Canonical claims

### `MLE-BCLM-037` — technical method

A release manifest binds the executable's content digest, platform/runtime
configuration, component and dependency inventory, and resolvable provenance
to source, build, data, and run identities; mutable registry names or tags are
insufficient. The previous-good recovery target is recorded as a separate
immutable release identity.

- Sources: `MLE-BSRC-016`, `MLE-BSRC-018`, `MLE-BSRC-033`, `MLE-BSRC-036`,
  `MLE-BSRC-037`
- Confidence/durability: high/durable
- Limitation: content addressing and BOMs prove declared mechanical identity,
  not completeness, safety, license compliance, qualification, or approval.

### `MLE-BCLM-038` — technical mechanism

A model package can carry serialized artifacts or code, dependencies,
input/output/parameter signatures, and serving examples, but package validity
must be tested in the target context and cannot stand in for qualification
evidence.

- Source: `MLE-BSRC-017`
- Confidence/durability: high/contextual
- Limitation: MLflow is one replaceable mechanism and dependency inference can
  require explicit correction.

### `MLE-BCLM-039` — technical doctrine

The releasable record joins a resolvable executable/package identity with its
model report: intended and excluded uses, evaluated conditions and segments,
metrics, limitations, interface contract, and recorded approval state; it also
names, rather than infers, the previous-good recovery target. Neither an
unbound report nor an artifact without that evidence supplies the complete
release record.

- Sources: `MLE-BSRC-006`, `MLE-BSRC-016`, `MLE-BSRC-017`, `MLE-BSRC-028`,
  `MLE-BSRC-036`
- Confidence/durability: high/durable
- Limitation: model-card reporting categories do not alone establish artifact
  binding, approval, or recovery.

## Source-to-claim matrix

| Source | Canonical identity and evidence role | Claims |
| --- | --- | --- |
| `MLE-BSRC-006` | Model Cards for Model Reporting, FAT* 2019 final; intended/excluded use, evaluation, metrics, caveats, and limitation fields | `MLE-BCLM-039` |
| `MLE-BSRC-016` | Kubernetes rolling update/rollback documentation, modified 2026-03-15 and verified 2026-08-18; current revision/recovery mechanism with non-ML limits | `MLE-BCLM-037`, `MLE-BCLM-039` |
| `MLE-BSRC-017` | MLflow Models living documentation, accessed 2026-08-18; package, dependency, signature, and serving-example mechanism | `MLE-BCLM-038`, `MLE-BCLM-039` |
| `MLE-BSRC-018` | MLflow Tracking, MLflow 3 living documentation, accessed 2026-08-18; run/data/artifact identity mechanism | `MLE-BCLM-037` |
| `MLE-BSRC-028` | NIST AI RMF 1.0, NIST AI 100-1 final (2023); context, evidence, actors, and authority separation | `MLE-BCLM-039` |
| `MLE-BSRC-033` | OCI Image Format Specification `1.1.1`, published 2025-04-02; content-addressed image manifest/configuration/layer structure | `MLE-BCLM-037` |
| `MLE-BSRC-036` | SLSA Specification `1.2`; versioned provenance and attestation specification | `MLE-BCLM-037`, `MLE-BCLM-039` |
| `MLE-BSRC-037` | SPDX Specification `3.0.1`; versioned BOM data model for software, AI models, datasets, builds, integrity, provenance, and relationships | `MLE-BCLM-037` |

OCI, SLSA, and SPDX establish mechanical identity, provenance, and declared
inventory scopes; none proves model quality, approval, safety, legal status, or
complete recovery. Kubernetes rollback restores declared deployment revision
state, not external data, features, models, consumers, credentials, or
evaluation evidence. MLflow is a replaceable packaging/tracking example.

## Frozen architecture trace

- Architecture claims: `MLE-CLM-003`, `MLE-CLM-005`, `MLE-CLM-012`,
  `MLE-CLM-015`, `MLE-CLM-017`, `MLE-CLM-021`
- Boundaries: `BND-03`, `BND-04`, `BND-06`, `BND-07`, `BND-08`, `BND-09`,
  `BND-10`, `BND-11`
- Scenarios: `SCN-05`, `SCN-09`, `SCN-10`
- Domain: `PD-08`
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`,
  `PORT-SHARED`
- Cases: `CASE-01`, `CASE-02`, `CASE-03`, `CASE-04`, `CASE-05`
- Milestone: `BL-12`

The scenario set preserves LLM-behavior, scientific-novelty, and security
authority boundaries. Packaging an LLM feature, a novel architecture, or an
integrity-reviewed artifact does not transfer those adjacent decisions to the
MLE.

## Case truth and bounded use

| Case | Truth label | Chapter use |
| --- | --- | --- |
| `CASE-01` Benchline Inspection Dossier | `FICTIONAL SYNTHETIC CAPSTONE` | Assemble the edge package, evidence links, approval states, limits, and previous-good identity; no real deployment or safety outcome. |
| `CASE-02` Managed demand forecast | `CONSTRUCTED SATELLITE` | Test exportable package and evidence identities under managed-service opacity. |
| `CASE-03` Classical credit triage | `CONSTRUCTED SATELLITE` | Bind estimator, preprocessing, evaluation, limits, authorities, and recovery using synthetic records only. |
| `CASE-04` Deep acoustic event classifier | `CONSTRUCTED SATELLITE` | Bind checkpoint, preprocessor, dependencies, runtime, run evidence, and recovery target with bounded local fixtures. |
| `CASE-05` Shared ranking platform tenant | `CONSTRUCTED SATELLITE` | Keep tenant/workload package evidence distinct from shared registry, platform, and fleet assurance. |

All five cases are constructed and carry no reported real facts or outcomes.
Their sole use is to prove that the same evidence-bound release contract
transfers across all ports without provider, model-family, edge, or shared-
platform meaning becoming the curriculum spine.

## Durable doctrine, volatile examples, and conflicts

- Durable doctrine: executable identity and supporting evidence are one
  releasable unit.
- Volatile examples: registry vendors, packaging formats, runtime containers,
  tracker/package APIs, and deployment commands.
- Current examples as of 2026-08-18: OCI `1.1.1`, SLSA `1.2`, and SPDX `3.0.1`
  are pinned versioned specifications; Kubernetes documentation was last
  modified 2026-03-15; MLflow Models and Tracking are mutable latest routes.
- Conflict to preserve: a valid content digest or package signature can coexist
  with missing evaluated bounds, limitations, approval, consumer contract, or
  recovery identity.
- Recheck trigger: recheck all living project documentation at every freeze;
  recheck specification status at blueprint, manuscript, and publication
  freeze; pin concrete MLflow and Kubernetes versions before executable use.

## Authority ceiling and misuse prohibitions

- Authority owner: security, platform, product, domain, and evaluation owners
  retain their formal approvals.
- MLE ceiling: the MLE assembles and verifies the workload package but cannot
  fabricate or substitute approvals.
- Do not treat a registry tag, package load, image digest, BOM, provenance
  attestation, model card, or rollback command as a complete release.
- Do not infer previous-good identity from a mutable name or most recent
  revision.
- Do not claim dependency inference is complete without verification and
  explicit correction.
- Do not let packaging absorb LLM, agentic, research, platform, application,
  security, or formal authority.

## Five-port transfer

| Port | Transfer requirement |
| --- | --- |
| `PORT-MANAGED` | Export immutable artifact, run, data, configuration, evidence, limitation, approval, and recovery identities from the provider. |
| `PORT-CLASSICAL` | Bind estimator, preprocessing/features, dependencies, interface, evidence report, and previous-good package. |
| `PORT-DEEP` | Bind checkpoint, tokenizer/preprocessor, framework/runtime, accelerator context, dependencies, evaluation, and recovery. |
| `PORT-EDGE` | Bind device package, sensor/data identity, constrained runtime, evidence, rollout owner, and previous-good device target. |
| `PORT-SHARED` | Bind tenant/workload package and compatibility identity while keeping registry, platform, SRE, security, and fleet authority external. |

## Planned evidence artifacts

- `BL-12` evidence-bound release package.
- Release-manifest graph resolving executable digest, runtime configuration,
  components, dependencies, provenance, source, build, data, run, report,
  approval, interface, and previous-good identities.
- Failure fixtures for mutable tags, missing dependencies, unresolved evidence
  links, and absent recovery targets.
- Explicit package signatures, examples, dependencies, and isolated
  target-context prediction check.
- Mechanism-bound currentness ledger for OCI, SLSA, SPDX, Kubernetes, and
  MLflow examples.

## Exact Phase 07 handoff

- `MLE-BCLM-037`: Define a release-manifest graph with digest resolution and
  failure tests for mutable tags, missing dependencies, and absent recovery
  targets.
- `MLE-BCLM-038`: Blueprint package checks around explicit signatures,
  examples, dependencies, and isolated target-context prediction.
- `MLE-BCLM-039`: Make every evidence link digest- or version-resolving and
  reject release when evaluated bounds, limitations, approval state, or
  previous-good target is absent.

Evidence-gap disposition: none release-blocking
Rationale: accepted reporting, package, provenance, BOM, content-addressing, tracking, governance, and rollback sources jointly support all three claims while preserving mechanical-versus-qualification limits.
Affected claim/source IDs: `MLE-BCLM-037`, `MLE-BCLM-038`, `MLE-BCLM-039`; `MLE-BSRC-006`, `MLE-BSRC-016`, `MLE-BSRC-017`, `MLE-BSRC-018`, `MLE-BSRC-028`, `MLE-BSRC-033`, `MLE-BSRC-036`, `MLE-BSRC-037`.
