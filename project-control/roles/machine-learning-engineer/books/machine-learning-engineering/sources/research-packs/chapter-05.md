# Chapter 05 Research Pack — Trace Features, Transformations, and Feedback

## Integration binding

- Chapter: `MLE-CH-05`
- Architecture: version `1.0.0`, frozen Phase 05 Markdown and JSON recorded by the canonical integration manifest
- Integration contract: `3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433`
- Decision job: Bind feature identity, transformations, feedback arrival, and source/consumer lineage without owning shared data architecture.
- Milestone: `BL-04` — Transformation and feedback graph

## Frozen research handoff

- Exact source research needs: Feature lineage; Feedback loops; Train-serving transformations.
- Exact Phase 06 handoff: Research system-interface failures, lineage, and feedback dependencies.
- Durable doctrine: Transformations, consumers, feedback, and source truth need explicit identity.
- Volatile examples: Feature-store products; Stream-processing frameworks.

## Exact book claims

1. `MLE-BCLM-013` (`technical-doctrine`, high confidence, durable): A supportable feature or transformation needs stable identity for its source, computation, version, owner, upstream dependencies, downstream consumers, and online/offline use; a shared feature name or store entry alone is insufficient lineage.
2. `MLE-BCLM-014` (`technical-doctrine`, high confidence, durable): Feedback loops, undeclared consumers, and distributed data-definition failures can change future inputs and compound downstream failures, so feedback arrival and consumer dependencies must be named and tested rather than inferred from a static feature graph.
3. `MLE-BCLM-015` (`technical-method`, high confidence, contextual): Training and serving should share transformation logic where feasible and otherwise produce explicit conformance measurements over matched identities; a feature store is an implementation mechanism, not evidence that parity, freshness, or correctness holds.

## Source-to-claim evidence map

| Claim | Accepted sources | Evidence carried | Authority limit |
|---|---|---|---|
| `MLE-BCLM-013` | `MLE-BSRC-005`, `MLE-BSRC-043` | Hidden Technical Debt identifies data dependencies and undeclared consumers; Uber's dated report describes canonical feature metadata and offline/online mechanisms. | Uber is a historical first-party mechanism example, not proof of complete lineage or a portable platform architecture. |
| `MLE-BCLM-014` | `MLE-BSRC-004`, `MLE-BSRC-005`, `MLE-BSRC-015` | Data Cascades, Hidden Technical Debt, and Google's living guide support distributed definition failures, feedback loops, undeclared consumers, and the need to measure pipeline behavior. | These sources establish mechanisms and bounded observations, not universal prevalence or magnitude. |
| `MLE-BCLM-015` | `MLE-BSRC-015`, `MLE-BSRC-024`, `MLE-BSRC-043`, `MLE-BSRC-044` | Current official guidance, executable comparisons, and dated Uber reports support shared logic where feasible plus measured schema/value/distribution/imputation conformance. | Shared code or a feature store does not prove freshness, parity, correctness, external validity, or authorization. |

## Architecture trace

- Architecture claims: `MLE-CLM-004`, `MLE-CLM-009`, `MLE-CLM-017`, `MLE-CLM-018`.
- Boundaries: `BND-02`, `BND-09`, `BND-10`, `BND-16`.
- Scenario: `SCN-02`.
- Domain: `PD-03`.
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`.
- Cases: `CASE-01`, `CASE-03`, `CASE-05`, `CASE-06`, `CASE-07`.
- Five-port invariant: Each port exposes the same transformation and feedback evidence even when feature computation moves.

## Case truth and permitted use

| Case | Truth label | Chapter use and transfer limit |
|---|---|---|
| `CASE-01` — Benchline Inspection Dossier | FICTIONAL SYNTHETIC CAPSTONE | Build and mutate a transformation/feedback graph; no graph, failure, or outcome is a real production claim. |
| `CASE-03` — Classical credit triage | CONSTRUCTED SATELLITE | Prove that simple transformations retain lineage and feedback duties; not financial advice or credit authorization. |
| `CASE-05` — Shared ranking platform tenant | CONSTRUCTED SATELLITE | Separate workload lineage and consumer evidence from shared platform topology; not a platform curriculum. |
| `CASE-06` — Google ML Test Score production-readiness method | PUBLIC REPORTED CASE | Transfer selected feature/data test decision jobs and expected evidence without Google scoring or tooling. |
| `CASE-07` — Uber Michelangelo feature and deployment evidence pattern | PUBLIC REPORTED CASE | Use dated first-party facts only to motivate provider-neutral feature, transformation, consumer, parity, and limitation fields. |

`CASE-07` reported facts include the 2017 six-step workflow, shared feature mechanisms, and the 2025 conformance controls. Its scale and adoption statements remain attributed outcomes. The two system states must remain distinct, and no Uber-specific topology or claimed result transfers.

## Durable, volatile, and conflicting evidence treatment

- Keep source, computation, version, owner, upstream/downstream dependencies, consumers, online/offline use, feedback arrival, and parity evidence as durable semantic fields.
- Treat feature-store products, stream frameworks, TFDV APIs, Google rule numbering, and platform interfaces as dated mechanisms.
- Recheck `MLE-BSRC-015` and `MLE-BSRC-024` at every freeze; recheck Uber browser-only pages and preserve the 2017 and 2025 as-of labels.
- The 2017 Uber report supports feature metadata and shared computation mechanisms; the 2025 report supports later validation mechanisms. They are evidence of reported organization-specific patterns, not one timeless architecture.
- Shared transformation code reduces one skew source but can conflict with data-time, freshness, external dependency, and serving-context differences. The pack therefore requires measured parity over matched identities.

## Dated current examples

- TFDV living documentation (`MLE-BSRC-024`) and Google's Rules of ML (`MLE-BSRC-015`) were verified on 2026-08-18; any API, field, rule number, or threshold example must be date-stamped.
- Uber's Michelangelo report (`MLE-BSRC-043`) is a 2017 first-party system description, not a current universal platform model.
- Uber's deployment-safety report (`MLE-BSRC-044`) is a 2025 first-party account of schema, imputation, distribution, reporting, and validation mechanisms; its quantities and outcomes retain the 2025 attribution.

## Authority ceiling

Authority owner: Data/platform owners retain shared sources and services; consumers own their product behavior.

MLE ceiling: The MLE specifies and tests workload transformations, not enterprise data-platform topology.

Data and platform owners retain shared sources and services; consumers own their product behavior. Privacy and governance owners retain formal decisions. The MLE specifies, identities, and tests workload transformations, consumer dependencies, feedback paths, and parity evidence; the MLE does not own enterprise data-platform topology or infer permission from lineage.

## Five-port transfer

- `PORT-MANAGED`: demand exportable feature/transformation identities and parity evidence despite provider opacity.
- `PORT-CLASSICAL`: trace hand-coded transformations and batch feedback with the same fields.
- `PORT-DEEP`: bind preprocessing and learned feature/checkpoint dependencies to exact versions.
- `PORT-EDGE`: distinguish device-side computation, delayed synchronization, and field feedback arrival.
- `PORT-SHARED`: preserve tenant lineage and declared consumers while platform owners retain shared topology.

## Misuse prohibitions

- Do not treat a feature name, store entry, shared library, or platform graph as complete lineage.
- Do not infer the absence of feedback or undeclared consumers from a static graph.
- Do not claim shared code proves parity, freshness, correctness, quality, or authorization.
- Do not collapse Uber's 2017 and 2025 reports or transfer their attributed scale and outcomes.
- Do not import Uber branding, prose, figures, UI, proprietary interfaces, or architecture drawings.
- Do not make the workload MLE owner of shared data-platform topology or consumer product behavior.

## Planned evidence artifacts

- `BL-04` transformation and feedback graph keyed by source snapshot, transformation hash, owner, upstream/downstream dependencies, declared consumers, online/offline use, and feedback arrival.
- Selectable lineage table from source snapshot through transformation identity to every declared consumer and feedback input.
- Mutation where an undeclared consumer adds a feedback edge and produces an owner-routed HOLD.
- Five-port parity tests comparing exact feature identities and values while allowing port-specific computation mechanisms.

## Exact Phase 07 handoff

- For `MLE-BCLM-013`: Blueprint a selectable lineage table from source snapshot through transformation hash to every declared consumer and feedback input.
- For `MLE-BCLM-014`: Blueprint a graph mutation where an undeclared consumer creates a feedback edge and forces an owner-routed HOLD.
- For `MLE-BCLM-015`: Blueprint five-port parity tests that compare exact feature identity and values while allowing port-specific computation mechanics.
- Phase 07 must preserve the exact architecture trace, dated public-case state, source authority limits, five-port invariant, and `BL-04` milestone. Named products may illustrate mechanisms only after version/currentness checks.

Evidence-gap disposition: none release-blocking

Rationale: Accepted original research, official documentation, and bounded first-party reports cover lineage fields, feedback and consumer failure mechanisms, and parity measurement. Product-specific mechanisms and reported outcomes are explicitly date-bound and excluded from doctrine.

Affected claim/source IDs: `MLE-BCLM-013`, `MLE-BCLM-014`, `MLE-BCLM-015`; `MLE-BSRC-004`, `MLE-BSRC-005`, `MLE-BSRC-015`, `MLE-BSRC-024`, `MLE-BSRC-043`, `MLE-BSRC-044`.
