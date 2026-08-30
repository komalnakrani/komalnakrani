# Chapter 5 — Trace Features, Transformations, and Feedback

Author: Komal Nakrani
Chapter ID: `MLE-CH-05`
Slug: `trace-features-transformations-and-feedback`
Part: `PART-02`
Milestone: `BL-04`

## MLE-CH-05-S01 — Decision and Bench Setup

### Bench Setup

`BL-03` identifies the accepted snapshot and label meaning. A workload can still become unsupportable between that snapshot and a model input. Transformations may change without identity, shared features may conceal upstream dependencies, new consumers may appear, and decisions may feed future labels. A feature name or store entry does not reveal this graph. Chapter 5 asks whether every workload transformation, consumer, and feedback path is inspectable without making the MLE owner of shared data architecture.

The decision is to bind source snapshot, computation, version, owner, upstream and downstream dependencies, online and offline use, declared consumers, and feedback arrival. Evidence includes exact transformation hashes, lineage edges, consumer contracts, value comparisons, feedback rules, exceptions, and limitations. The state remains CONTRACTED while `BL-04` records the transformation and feedback graph. Data and platform owners retain shared sources and services; consumers own product behavior. The MLE specifies and tests workload transformations, not enterprise topology.

### Bench Sheet

| Field | Required record |
|---|---|
| decision | Accept graph, HOLD, REJECT, or REOPEN |
| evidence | Source, transform, values, consumers, feedback, owners, hashes |
| state and dossier delta | `CONTRACTED` → `CONTRACTED`; create `BL-04` |
| authority route | Data/platform own shared systems; consumers own behavior |
| next evidence | Population-aware split and train-serve conformance |

Bench Setup, decision, evidence, state and dossier delta, authority route, and next evidence keep lineage useful. The graph is not a platform diagram. It is a decision record showing which workload evidence changes when an edge changes.

The architecture mapping gives every graph edge a decision purpose. `MLE-CLM-004` carries traceable data, experiment, feedback, and retraining evidence through change. `MLE-CLM-009` makes provenance, transformation versions, train/serve environments, and conformance executable. `MLE-CLM-017` focuses the review on hidden dependencies, undeclared consumers, feedback, and interacting changes. `MLE-CLM-018` leaves reusable automation, stores, runtime, access boundaries, and fleet controls with shared-service owners while requiring workload-specific evidence from the MLE. The mapping is visible so a reviewer can trace each claim forward to a graph check and backward from a failed edge to its governing limit.

Those limits are `BND-02`, which routes generalized ingestion and enterprise data architecture to Data Engineering; `BND-09`, which routes reusable deployment automation and registries to MLOps; `BND-10`, which routes shared feature-store, scheduler, and platform topology to infrastructure owners; and `BND-16`, which reserves privacy, governance, legal, and compliance determinations. `SCN-02` applies them to a requested online feature store and tenancy model. The workload can demand source identity, freshness, skew, compatibility, exportability, and owner evidence, but it cannot select the enterprise topology by declaring it necessary. This is a constructed architecture pressure, not a report of a real platform. `PD-03` is the bounded domain: trace transformations, consumers, feedback, splits, and train-serve meaning while declining generalized data-platform ownership. `BL-04` records that trace, not an architectural approval.

The initial bench sheet is deliberately consumer-first. Select one scored output, name the consumer action it informs, and trace backward through feature version, transformation, source snapshot, and owner. Then trace forward from that action to every observation that may return as feedback. This two-direction walk catches a declared upstream graph that omits the downstream event creating future labels. A second reviewer repeats the walk from only the dossier. If the reviewer needs platform folklore, a dashboard tooltip, or the original author’s memory, the graph is not yet evidence. The setup records those unresolved dependencies before any graph query or parity comparison runs.

## MLE-CH-05-S02 — Procedure: build executable lineage

### Source notes and currentness: lineage evidence

Start from the exact `BL-03` snapshot and label identities. For every feature, record source field or parent feature, transformation identity, code or rule version, parameters, owner, output schema, online/offline use, and known consumers. For learned representations, include the fitting basis and artifact identity. For externally supplied features, record the interface, freshness expectation, and evidence the provider exports. Names are human aids; hashes and parent links establish identity.

Primary teaching MLE-BCLM-013: a supportable feature or transformation needs stable identity for source, computation, version, owner, upstream dependencies, downstream consumers, and online/offline use. Hidden Technical Debt and Uber’s 2017 Michelangelo report, `MLE-BSRC-005` and `MLE-BSRC-043`, support dependency risk and dated feature-metadata mechanisms. Uber is a first-party historical example, not proof of complete lineage or a portable architecture.

Primary teaching MLE-BCLM-014: feedback loops, undeclared consumers, and distributed definition failures can alter future inputs and compound downstream failures. Data Cascades, Hidden Technical Debt, and Rules of Machine Learning—`MLE-BSRC-004`, `MLE-BSRC-005`, and `MLE-BSRC-015`—support bounded mechanisms and observations. They do not establish prevalence in every workload. Feedback arrival and consumers must be named and tested rather than inferred from a static graph.

Primary teaching MLE-BCLM-015: training and serving should share transformation logic where feasible and otherwise produce explicit conformance measurements over matched identities. `MLE-BSRC-015`, `MLE-BSRC-024`, `MLE-BSRC-043`, and `MLE-BSRC-044` support shared logic, executable comparisons, and dated Uber mechanisms. A feature store or shared library is implementation, not evidence that parity, freshness, or correctness holds.

Build the graph as typed edges. SOURCE edges connect `BL-03` fields to transformations. DERIVES edges connect transformations to feature versions. CONSUMES edges connect features or outputs to known workload consumers. FEEDS-BACK edges connect decisions or outcomes to later labels or features. OWNS edges identify retained authority. TESTED-BY edges connect each invariant to evidence. Each edge has identity, scope, owner, version, limitation, and supersession rule.

Record transformation semantics, not only code. State input domain, missing-value behavior, ordering, windowing, normalization, categorical handling, time cutoff, and output meaning. Two functions with the same name can produce different values; two implementations can be conformant if matched identities produce accepted equivalent values. The contract is about meaning and evidence, not code reuse as an end.

Inventory consumers actively. Search declared application configurations, batch jobs, device packages, exports, reports, and shared-service bindings. Record discovery method and limitation. Absence from the inventory is not proof that no consumer exists. The record states known consumers and unresolved discovery coverage. A newly discovered consumer creates an edge and may reopen compatibility or feedback evidence.

For each consumer, state which artifact or feature version it expects, interface, transformation context, fallback owner, and whether its actions can enter future data. Consumer identity is part of workload lineage because an output can become a label, filter, ranking exposure, or collection trigger. A feedback loop need not be malicious or incorrect to require evidence; it changes the distribution and interpretation of future observations.

Describe feedback timing. Record event time, decision time, observation time, label maturity, selection mechanism, and correction path. Distinguish direct labels, proxy signals, censored outcomes, and unavailable truth. Chapter 17 will deepen observation; here the goal is to prevent an undeclared decision path from silently becoming training input.
The primary-treatment lineage ledger fixes each source’s clock. `MLE-BSRC-005` is final NIPS 2015, verified 2026-08-18; its debt taxonomy is not a current platform prescription or prevalence estimate. Recheck all three freezes for page and paper availability and pair contemporary mechanisms with current official documentation. `MLE-BSRC-043` is Uber’s dated 2017 engineering report, browser-verified 2026-08-18 after ranged GET returned HTTP 406. It describes a historical first-party platform, not universal practice. Browser-recheck all three freezes, retain 2017 beside every quantity, and replace only if the official page disappears.

> **Currentness record — `MLE-BSRC-004` / `MLE-BSRC-015` / `MLE-BSRC-024`.** Data Cascades is the final ACM CHI 2021 study, verified 2026-08-18; its sample and 92 percent figure cannot be generalized. Recheck publication access and retain study scope. Official Google Rules of ML page updated 2025-08-25; retrieved 2026-08-23. Living first-party guidance from Google systems, not universal doctrine; recheck the page update date and material rule changes at each publication freeze. Official TensorFlow Data Validation tutorial updated 2024-04-30; retrieved 2026-08-23. The living tutorial demonstrates schema, anomaly, drift, and skew mechanisms but does not determine semantic validity, acceptable shift, outcome degradation, or permission to retrain or promote; recheck tutorial/API semantics at each freeze.

`MLE-BSRC-044` is Uber’s dated 2025 engineering report, browser-verified 2026-08-18 after ranged GET returned HTTP 406. Every scale, rollout, and improvement statement remains first-party and bounded to that environment. Browser-recheck all three freezes and preserve the 2025 as-of date for every mechanism and quantity.

## MLE-CH-05-S03 — Interpret graphs and parity evidence

The strongest conclusion from `BL-04` is that declared workload features, transformations, consumers, and feedback edges are traceable under stated discovery and conformance limits. It does not prove the graph is globally complete, the features are useful, the platform is reliable, or feedback is harmless.

Lineage can be structurally complete and semantically wrong. A graph may connect every node while the transformation meaning changed. Conversely, a transformation may be correct while an undeclared consumer creates a new feedback path. Evidence interpretation checks identity, values, semantics, time, consumers, owners, and limitations together. `MLE-V05.1` is the selectable semantic lineage table at this anchor; it preserves exact source, transformation, consumer, feedback, decision, evidence, state, owner, limitation, and next-action fields.

> **MLE-F05.1 — CANDIDATE — NOT GENERATED.** Insertion anchor: `MLE-CH-05-S03`. Decision: trace a delayed feedback dependency across separately owned planes. Exact labels: `SOURCE`, `TRANSFORM`, `CONSUMER`, `FEEDBACK`; all exact identifiers and numeric truth remain in selectable semantic text. Caption: “A separately owned consumer returns delayed feedback without erasing source and transformation ownership.” Alt text: “Four-plane lineage cutaway tracing source through transformation to a separately owned consumer and delayed feedback return.” Long description: “A source plane passes versioned inputs into a transformation bench; a separately owned consumer plane receives the output; a delayed feedback conduit returns consumer events toward future source evidence without erasing the ownership partitions; the adjacent semantic table retains every identity, state, owner, limitation, and next action.” Dimensions: 2400 × 1600 PNG, 3:2 landscape. Canonical path: `src/assets/books/machine-learning-engineering/figures/fig-mle-05-01.png`. Image provenance: ImageGen only; retain the canonical PNG and its prompt provenance when the candidate is produced. Prompt: original crisp, colorful, realistic 3D technical cutaway in the frozen palette, four separated planes, ownership partitions, directional conduits, bright editorial lighting, generous label-safe space, and no people. Prohibited content: no SVG, WebP, fake UI, logo, watermark, mascot, Komal likeness, neural glow, robot, stock laboratory, paragraph, code, number, chart, pseudo-text, unsafe industrial claim, or copied composition.

Parity evidence is predicate-bound. “Values matched” means named examples, fields, versions, contexts, tolerance, and time produced the recorded comparison. It does not mean future values match or quality is acceptable. “Shared code” means a code identity is reused; it does not mean upstream sources, freshness, configuration, or dependencies are equal.

Consumer discovery has a negative-claim limit. The inventory can state no additional consumer was found by named methods at a recorded time. It cannot prove no unknown consumer exists. This limitation travels into migration, incident, and retirement evidence. A later discovery triggers REOPEN rather than embarrassment-driven deletion.

The evidence ceiling prevents platform overreach. `BL-04` cannot certify an enterprise feature store, shared platform, consumer product, or organization-wide lineage. It establishes workload-facing edges and the status of external decisions. That is enough to diagnose which claims a change invalidates.

Interpret lineage as a set of falsifiable claims. An edge saying source A feeds transformation B can be tested through configuration, logs, hashes, or a controlled fixture. An edge saying consumer C uses feature D can be tested through its manifest and request trace. An ownership edge can be tested against a decision record. A decorative arrow without evidence is a hypothesis and should be labeled MISSING or PROPOSED.

The strongest remaining limitation is unknown-path risk. Discovery methods and rechecks reduce it but cannot eliminate it. Later compatibility and retirement gates use the known inventory, run negative probes, and preserve delayed rechecks. `BL-04` makes that future honesty possible.

## MLE-CH-05-S04 — Worked trace and case truth

> **Case-truth record — `CASE-01`.** `CASE-01` is the FICTIONAL SYNTHETIC CAPSTONE with no reported facts or attributed outcomes. The fixed Benchline dossier may exercise whether each lifecycle decision carries named evidence, limitation, owner, authority route, and next evidence. Do not infer real industrial performance, safety, production readiness, business outcome, or external approval. Move only the decision/evidence interface to another port; replace fixture data, mechanisms, thresholds, owners, and evidence. Its limitation remains no real production, industrial, safety, performance, or business claim.

> **Case-truth records — `CASE-03` / `CASE-05`.** `CASE-03` is a CONSTRUCTED SATELLITE with no reported facts or attributed outcomes. The constructed classical fixture may test that qualification and authority gates still apply to a simple model. Do not infer a lending outcome, measured fairness or compliance, financial advice, or credit authorization. Preserve the evidence interface without deep-learning assumptions and route local domain and risk decisions externally. Its limitation remains that it is not financial advice or credit authorization. `CASE-05` is also constructed: The constructed shared-tenant fixture may test separation of workload evidence from tenant, fleet, and platform authority. Do not infer platform-wide SLO or performance, business effect, isolation assurance, or approval. Preserve workload evidence when the substrate changes and recheck every substrate-bound relation. Its limitation remains that it is not a platform-engineering curriculum. `CASE-06` and `CASE-07` are PUBLIC REPORTED CASES. All Benchline graph nodes, values, consumers, feedback, and outcomes are synthetic.

Benchline begins at `DATA-BL-003`. A transformation normalizes the constructed image statistic, emits a feature version, and feeds the incumbent and proposed comparison harness. Two consumers are declared: the synthetic review queue and an offline report. A feedback edge returns simulated reviewed outcomes after a maturity delay. Every edge records identity, owner, and limitation.

CONSUMER-UNDECLARED adds `C-03`. Discovery finds an executable dependency absent from the graph, so the result is HOLD. FEEDBACK-EDGE-HIDDEN routes a decision outcome into later labels without declaration, producing REOPEN because future input meaning changes. PARITY-BY-NAME retains the feature name but changes serving values; matched-ID comparison returns REJECT.

`CASE-06` truth record: reported facts are the 2017 paper’s 28-test taxonomy, system categories, and author-experience statement; the attributed outcome is only its roadmap framing. Allowed inference is that selected data and feature tests can expose a hidden consumer or parity obligation. Forbidden inference is that a score certifies lineage. Limitations retain the dated Google method, no universal threshold, and no audited causal outcome. Transfer selects by failure and consequence, replaces points with owner-bound dispositions, uses tools only as mechanisms, and works across all five ports without assuming a shared platform.

`CASE-07` truth record: reported facts are Uber’s dated 2017 workflow and feature mechanisms plus its 2025 conformance mechanisms; attributed outcomes are first-party adoption and scale statements, not independent audit. Allowed inference is that stable feature, transformation, input, and run identities make comparison gaps inspectable. Forbidden inference is reproduced performance, reliability, safety, or business outcome. Limitations keep 2017 and 2025 states distinct, retain first-party browser-verification scope, and prohibit importing Uber design. Transfer uses provider-neutral fields, keeps as-of dates, requires equivalent evidence across all five ports, and never claims that a feature store or tracker reproduces Uber outcomes.

The lineage trace gives provenance and reasoning different columns: reported facts sit beside attributed outcomes, while allowed inference sits opposite forbidden inference and its limitations. Constructed cases have no real attributed outcomes. The provider-neutral transfer is a field and decision pattern, not a platform clone.

The worked result is `BL-04`, a selectable graph plus value checks, consumer inventory, feedback timing, owners, discovery methods, and next evidence. A missing edge does not get repaired by relabeling the graph “best effort.” It receives a bounded limitation or a new version after evidence.

Trace one synthetic value end to end. The source image identity resolves to `DATA-BL-003`. Transformation `T-BL-005-A` reads a recorded statistic, applies a versioned normalization, and emits feature `F-BL-005-A`. The incumbent consumes that version in an offline harness. The queue consumer consumes a separately bound output. A delayed synthetic review result may later enter a label fixture. Every hop has an exact parent and timestamp semantics.

The undeclared consumer mutation adds a report export that selects only high-priority outcomes. Even if it never changes the live queue, its selection can affect what is analyzed and later labeled. The graph therefore records it as both consumer and potential feedback context. HOLD names the consumer owner and asks whether the use is permitted and how it affects future evidence.

The hidden feedback mutation is more severe because it changes the data-generating process. Outcomes from prioritized items become future labels while unreviewed items remain unlabeled. The old data contract no longer describes label availability. REOPEN preserves the prior graph, creates a changed-evidence record, and routes label meaning and evaluation adequacy to retained owners.

The parity-by-name mutation demonstrates a precise technical failure. Training and serving both expose `surface_score`, but serving applies a different missing-value default. Matched example hashes resolve, names match, code may even share most logic, yet observed values differ. REJECT prevents a misleading parity claim and asks for corrected transformation identity and new evidence.

## MLE-CH-05-S05 — Failure lab

No lineage graph or parity computation is implemented by the companion. Its executable scope is a deterministic wrapper around fixture labels, generic evidence fields, hashes, disposition, limitation, owner route, and truth state. Reverse-edge analysis, consumer discovery, and value comparison below belong to the reader exercise, with outcomes stated as grading expectations.

Public case use is deliberately secondary. The chapter teaches the decision through Benchline’s constructed trace, then uses dated reports to show that similar evidence categories have appeared in public engineering accounts. It does not make Uber the curriculum spine or import proprietary architecture. This order preserves originality and portability.

`CASE-06` offers a different transfer: tests are selected from failure pressure, not counted for points. A consumer-discovery test matters because hidden dependencies can invalidate evidence. A parity test matters because same-name features can diverge. The result is a named PASS, HOLD, or REJECT with owners, not a readiness score.

Case limitations remain active during the exercise. No synthetic value becomes an observed production metric. No public reported quantity becomes Benchline scale. No classical example authorizes credit. No shared case claims fleet assurance. These prohibitions shape the prose and the result schema.

`MLE-CH-05-LAB-01` starts with `FIX-MLE-CH-05-1` and must reverse-trace a scored feature to its snapshot and transform. `MLE-CH-05-LAB-02` uses `FIX-MLE-CH-05-2` to expose a hidden consumer and feedback edge. These offline `synthetic-deterministic` exercises use immutable inputs, a fixed clock, and a fixed seed. They either emit canonical `BL-04` evidence or a named failure without network, provider, production, credential, or authority mutation.

The positive lab resolves `BL-03`, recomputes transformation and value hashes, verifies declared consumers and feedback timing, and emits byte-identical results on repeat. PASS is limited to the graph gate.

CONSUMER-UNDECLARED adds `C-03` and requires HOLD with a consumer-owner route. FEEDBACK-EDGE-HIDDEN changes future-label input and requires REOPEN. PARITY-BY-NAME changes values while names remain equal and requires REJECT. Each diagnostic isolates the injected failure.

Repair boundaries are exact. Consumer inventory can add an evidenced edge; it cannot claim complete discovery. A feedback repair creates new data meaning and affected-evidence links. A parity repair changes transformation or serving evidence under a new identity. No result silently changes upstream `BL-03`.

The second lab attempts illegal promotion and self-approval. A graph PASS cannot qualify a model or approve platform architecture. HOLD and REJECT cannot jump to release. Its record binds the changed edge and graph hashes to the observed break, then routes the disposition, bounded consequence, repair owner, and next evidence.

The positive lab also verifies reverse equality: every forward source-transform, transform-feature, feature-consumer, and feedback edge has the expected reverse reference. Deleting one reverse link fails even if the diagram still looks complete. This prevents integration reports from drifting away from the canonical graph.

Fixed fixtures make value comparisons explainable. The expected values are derived from local synthetic bytes, not downloaded data or a model service. The test records exact operations and tolerances. The purpose is to demonstrate conformance mechanics, not real feature engineering performance.

Effect tests reject environment-secret reads, network calls, shell execution, cloud SDKs, external models, provider mutation, and writes outside a fresh caller directory. A lineage exercise that quietly queries a production catalog violates the offline companion boundary even if convenient. The companion remains local and provider-neutral.

Each failure produces next evidence that can actually resolve it. The hidden consumer asks for an owner, use contract, and graph edge. The feedback path asks for revised data and label meaning plus evaluation. The value mismatch asks for transform diagnosis and a new parity record. Generic investigate text is insufficient.

Repeatability includes failure bytes. Running the same mutation twice yields the same canonical record and hash. A repair yields a different identity because evidence changed. Earlier outputs remain immutable. This chain teaches why diagnostic history is part of supportability.
## MLE-CH-05-S06 — Five-port transfer

Transfer preserves the lineage record shape while leaving port behavior untested. The adapter’s metadata variation does not trace a managed catalog, hand-coded transform, learned representation, device package, or tenant substrate. Such evidence must be produced locally before asserting conformance.

`PORT-MANAGED` requires exportable feature, transformation, consumer, and parity identities despite provider opacity. A platform catalog entry is not complete lineage.

`PORT-CLASSICAL` traces hand-coded transformations, batch consumers, and feedback with the same fields. Simplicity does not remove hidden dependencies.

`PORT-DEEP` binds preprocessors, learned representations, checkpoints, hardware context, and consumers. Model scale does not replace value checks.

`PORT-EDGE` distinguishes device-side computation, stale packages, delayed synchronization, and field feedback. Benchline’s constructed device trace can test whether those edges are named; it says nothing about the safety of any physical system.

`PORT-SHARED` preserves tenant lineage and declared consumers while platform owners retain shared topology, tenancy, and fleet decisions. Tenant evidence cannot claim platform assurance.

The invariant decision is whether exact transformations and feedback dependencies remain inspectable. Every adapter receives source, feature, transform, consumer, feedback, owner, perturbation, and expected evidence; every result returns disposition, limitation, route, and next evidence. No port is privileged.

The positive and PARITY-BY-NAME fixtures run on all ports. Port-specific mechanics may differ, but matched identity and accepted values must agree. An adapter that passes because names match, code is shared, or the provider claims parity fails the contract.

Transfer also compares discovery limits. Managed opacity, local scripts, checkpoint pipelines, disconnected devices, and multi-tenant services expose different blind spots. Each record states how consumers were sought and what remains unknown. Equality means honest evidence shape, not equal visibility.

Current feature-store products, stream frameworks, TFDV APIs, provider interfaces, and platform reports are dated examples. Durable doctrine remains exact lineage, measured conformance, explicit feedback, and retained authority.

The transfer table should be read row by row, not as five mini-curricula. For managed systems, export opacity is the pressure. For classical systems, overlooked local preprocessing is the pressure. For deep systems, checkpoint and preprocessor coupling is the pressure. For edge systems, device/version and delayed feedback are pressures. For shared systems, tenant and fleet boundaries are pressures. Each pressure tests the same invariant.

Port adapters may use different evidence mechanics. A managed service might provide an export manifest. A classical pipeline might hash a local function and dataset. A deep workflow might bind a preprocessor package and checkpoint. An edge workflow might bind device package and sync state. A shared service might bind tenant configuration and platform release. The common envelope preserves meaning across them.

No adapter can promote itself through extra capability. A provider’s lineage catalog does not establish all consumers. A feature store does not prove parity. A deep framework’s shared preprocessing does not prove values. A device manifest does not prove field freshness. A platform registry does not accept tenant consequences. Each capability supplies evidence subject to the same gate.

The comparison exposes invariant fields against variable mechanics. If removing a named product makes the decision impossible to express, rewrite the concept at the evidence level; that is the practical test for provider-neutral teaching.

Cross-port failure equality is disposition equality for equivalent contract defects, not identical error text. A hidden consumer yields HOLD everywhere, but the consumer evidence may be a service endpoint, batch export, checkpoint tool, device client, or tenant integration. The route names the appropriate owner without changing the workload boundary.

The part’s next chapter uses the combined graph to choose splits and conformance tests. That is why transfer cannot end with generic lineage complete. It must expose time, identity, grouping, transformation, and feedback facts that can become leakage or train-serve mismatch evidence.

Public-case transfer remains explicit. CASE-06 selects tests from failure and consequence rather than a quota, replaces point totals with owner-bound dispositions, treats current tools only as mechanisms, and works across every port without assuming a shared platform. CASE-07 re-expresses lessons as provider-neutral fields, keeps an as-of date beside quantities and mechanisms, requires equivalent lineage and comparison evidence on all ports, and forbids claiming that a feature store or tracker reproduces Uber’s outcomes. These rules keep the lineage decision portable while the public reports remain dated and attributed.

## MLE-CH-05-S07 — Assessment and Qualification Gate

`MLE-CH-05-ASMT-01` gives the reader a source snapshot, transformations, two declared consumers, one hidden consumer, and matched-ID values. The reader must create `BL-04`, expose the hidden edge, test parity, state discovery limitations, and issue PASS, HOLD, REJECT, or REOPEN.

### Qualification Gate

PASS requires resolvable source and transform identity, semantics, version, owner, upstream/downstream edges, online/offline use, declared consumers, feedback arrival, value checks, discovery method, limitations, and next evidence. Hidden consumer yields HOLD. Hidden feedback yields REOPEN. Same name with changed values yields REJECT.

The answer must use one reverse trace to justify the disposition, identify the first unresolved dependency, and state who can supply its evidence. It must then stop at the proper ceiling: a complete graph cannot prove quality, permission, or global completeness; shared code cannot prove parity; and an owner cannot repair a hash mismatch by approval.

Data/platform owners retain shared sources and services; consumers own product behavior. The MLE specifies and tests workload transformations without owning enterprise topology. Self-approval or platform-wide claims fail. Retry creates a new graph identity and preserves history.

The exact Answer intent is: Explain the decision, evidence, state, owner, and next action. The response starts at a named scored feature, reverse-traces its source snapshot and transformation, enumerates consumers and feedback inputs, cites the parity predicate, and states whether BL-04 remains CONTRACTED. It routes an unresolved edge to the owner able to supply evidence and names the split or conformance record required next. A dense graph without that decision explanation is not a passing answer.

The assessor supplies a graph with three traps. One edge has a transformation name but no version or hash. Another consumer appears only in access logs and is absent from the declared inventory. A third path reuses code in training and serving but produces no matched-example evidence. The reader must identify each discriminating gap rather than mark the graph complete by visual inspection. An owner’s verbal assurance cannot repair a hash mismatch, and shared code cannot prove value parity. Observable PASS evidence is exact: BL-04 passes its named qualification gate.

Evidence credit depends on resolving the hidden consumer through logs without claiming that the search proves global completeness.

The authority limit remains: the MLE specifies and tests workload transformations, not enterprise data-platform topology. Data, platform, consumer, privacy, and legal owners keep their assigned decisions. Retry is HOLD or REOPEN with new evidence; never self-approve. A retry allocates a new graph or evidence identity, preserves the failed edge and prior bytes, changes only the owned field, reruns affected checks, and explains why the new evidence changes the disposition.

The rubric scores reverse trace and forward consequence separately. A source-to-feature path without a consumer inventory is incomplete; a consumer list without a versioned transformation is equally incomplete. The answer must also distinguish “not discovered by the named method” from “does not exist.” Only the former is supportable, and it travels with the method, date, and residual unknown-path limitation.

## MLE-CH-05-S08 — Durable handoff

`BL-04` version 1.0.0 consumes the immutable CONTRACTED data basis in `BL-03`. Parent hash `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa` is a recorded planning identity, not newly produced evidence. This chapter adds source, transform, feature, consumer, feedback, parity, owner, limitation, and unresolved-edge identities under `MLE-BCLM-013`, `MLE-BCLM-014`, and `MLE-BCLM-015`. A corrected edge creates a successor and retains the earlier graph.

Lineage evidence leaves the workload at CONTRACTED. A reopen follows Appendix B’s backward-only condition: later source state, earlier target, and evidence that could already have existed. It never upgrades UNORIENTED to CONTRACTED. A feature, consumer, feedback, or authority change keeps the trigger and graph history, then reopens only the dependent evidence owned by that relation.

The chapter-specific rechecks travel with the record: the lineage table runs from source snapshot through transformation hash to every declared consumer and feedback input; an undeclared-consumer exercise creates a feedback edge and forces an owner-routed HOLD; and five-port comparisons retain exact feature identity and value fields while allowing port-specific mechanics. These are evidence obligations, not claims about an external system. The dossier supports only this chapter’s bounded decision; PASS cannot certify later gates, public-case outcomes remain attributed, and synthetic evidence remains synthetic-deterministic.

The evidence ceiling excludes enterprise feature-store architecture, platform topology ownership, consumer product decisions, and any claim that shared code proves parity. Consume `BL-03` without silent repair and produce `BL-04` for Chapter 6. The next chapter receives traceable lineage and must establish leakage-resistant splits and train-serve conformance without treating shared code as parity. The evidence manifest, legal state, limitations, rechecks, lineage, and exact next dependency travel together.
