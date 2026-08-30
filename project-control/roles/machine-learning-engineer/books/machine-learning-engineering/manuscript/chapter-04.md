# Chapter 4 — Make Data and Labels Contractual

Author: Komal Nakrani
Chapter ID: `MLE-CH-04`
Slug: `make-data-and-labels-contractual`
Part: `PART-02`
Milestone: `BL-03`

## MLE-CH-04-S01 — Decision and Bench Setup

### Bench Setup

`BL-02` fixes the task, incumbent, measures, segments, consequences, and owners. None of that makes the available data admissible. A table can have the expected columns while its origin is unknown. Labels can be syntactically valid while their meaning changed. Access can succeed after the permitted retention window expired. This chapter treats data and labels as lifecycle contracts rather than anonymous training inputs.

The decision is whether an exact dataset snapshot and label contract support the bounded task. Evidence includes origin, motivation, composition, collection, annotation, intended and excluded uses, transformations, permissions, retention, limitations, maintenance, responsible contacts, executable schemas, statistics, and exception records. The state remains CONTRACTED while `BL-03` records the contractual data and label basis. Data owners retain source truth, access, retention, and shared pipelines; domain owners retain label validity; privacy, legal, and governance owners retain formal decisions. The MLE owns workload-facing conformance and escalation, not the enterprise data estate.

### Bench Sheet

| Field | Required record |
|---|---|
| decision | Accept contract, HOLD, REJECT, or REOPEN |
| evidence | Snapshot identity, provenance, label meaning, permission, retention, checks, exceptions |
| state and dossier delta | `CONTRACTED` → `CONTRACTED`; create `BL-03` |
| authority route | Data, domain, privacy, legal, and governance owners retain decisions |
| next evidence | Transformation, consumer, and feedback lineage |

Bench Setup, decision, evidence, state and dossier delta, authority route, and next evidence keep machine checks and human judgments separate. Passing schema evidence may support shape conformance. It cannot approve provenance, permission, label truth, representativeness, or fitness.

The architecture projection turns “data quality” into bounded workload evidence. `MLE-CLM-004` requires traceable data and feedback evidence through change; `MLE-CLM-009` makes schema, allowed domains, provenance, versions, environments, transformations, and conformance executable; `MLE-CLM-017` exposes hidden dependencies and combined interface failures; `MLE-CLM-018` separates workload evidence from reusable platform ownership; and `MLE-CLM-020` reserves purpose, risk, compliance, and domain authorization for external authorities. Each identity changes a decision: an unresolved origin blocks admissibility, an unowned exception blocks disposition, and a changed legal basis reopens the contract rather than being silently annotated.

The associated limits are operational. `BND-02` routes generalized ingestion, warehouse, and data-platform architecture to Data Engineering. `BND-09` and `BND-10` route shared automation, feature platforms, schedulers, stores, and infrastructure to MLOps and platform owners. `BND-16` prevents a conformance result from becoming a privacy, legal, governance, or compliance determination; `BND-17` prevents a valid schema from becoming domain truth. `SCN-02` tests a proposed online feature store and tenancy model: the MLE specifies workload schema, freshness, compatibility, skew, and evidence while platform owners decide the shared architecture. `SCN-08` tests a population change after technical PASS and forces new admissibility evidence. Neither scenario claims a real deployment. `PD-02` names the chapter’s exact domain: make input and label identity, provenance, access, and meaning executable, without owning enterprise source truth or legal basis.

Before any validator runs, the bench sheet asks five setup questions. Which exact snapshot is proposed? Which label version and observation window give those rows meaning? Which origin and permission records are resolvable? Which machine predicates can fail deterministically? Which judgments still require a human authority? Writing the answers first prevents the later tool report from defining the question. A clean fixture and a meaning-disputed fixture are placed side by side so the reader can see that identical shapes may have different admissibility states.

## MLE-CH-04-S02 — Procedure: contract identity and meaning

### Source notes and currentness: data-contract evidence

Begin with an immutable snapshot identity. Record source system or collection, extraction or capture time, selection query or rule, file or object hashes, row or object counts, schema version, transformation history, owner, and parent identities. “Training data v3” is not sufficient if two people can resolve it to different bytes. If the source cannot provide immutable extraction, record the strongest bounded identity and its limitation rather than pretending reproducibility.

Primary teaching MLE-BCLM-010: the contract follows data and labels from creation context into use. It records why they exist, what they contain, how examples and annotations were gathered, permitted and prohibited purposes, transformations, documented weaknesses, upkeep duties, and accountable contacts. Datasheets for Datasets and Data Cards, `MLE-BSRC-002` and `MLE-BSRC-003`, support structured documentation. They do not validate assertions, settle permission, prove label truth, or establish fitness. Documentation creates reviewable claims; conformance and authority still require evidence.

Primary teaching MLE-BCLM-011: turn the contract into checks for shape, value domains, summary behavior, and deviations from an accepted reference. Such checks can reject malformed or changed inputs; even a perfect result says nothing by itself about label semantics, origin, authorization, population coverage, or suitability. The ML Test Score and TensorFlow Data Validation documentation, `MLE-BSRC-007` and `MLE-BSRC-024`, support executable checks and comparison categories. TFDV behavior and thresholds are mechanism-specific and current. A PASS result is bounded to the checks that ran.

Primary teaching MLE-BCLM-012: data quality, label validity, access, retention, and population exceptions cross organizational and formal boundaries. Data Cascades, AI RMF 1.0, and GMLP—`MLE-BSRC-004`, `MLE-BSRC-028`, and `MLE-BSRC-038`—support attention to distributed data work, context, and consequence. They do not transfer data, domain, privacy, legal, or governance authority to the MLE. The MLE supplies workload evidence and routes exceptions.

Separate machine-checkable identity from human-reviewed meaning. The identity block contains snapshot, schema, hashes, counts, feature and label fields, and parent transformations. The meaning block records purpose, population, collection context, label definition, annotation procedure, known ambiguity, excluded uses, and owner acceptance. The permission block records access basis, scope, retention, downstream restrictions, and formal owner decisions. The maintenance block records refresh, correction, versioning, expiry, and contact routes.

Define labels as contracts, not column names. For each label, record semantic definition, allowed values, observation or adjudication process, time relationship to prediction, annotator or source qualifications where relevant, uncertainty and disagreement treatment, version, owner, and known limitations. If “positive” changes from visible defect to any review-needed condition, the version and affected evidence must change. Keeping the integer value stable does not preserve meaning.

Bind every transformation applied before the snapshot becomes model input. Record source field, operation, parameters, code or rule identity, output field, missing-value behavior, and owner. Chapter 5 will expand lineage, but `BL-03` must already prevent an undocumented cleaning step from becoming invisible input truth. A corrected record creates a new snapshot identity and supersession link.

Write executable checks from the contract. Schema checks cover required fields, types, allowed domains, presence, ranges, and cross-field constraints. Statistical checks compare selected distributions or categories against an accepted reference with named thresholds. Identity checks recompute hashes and parent links. Retention checks compare the fixed clock with permitted windows. These checks are useful because they can fail precisely; they are not a general certificate.

Pair each machine-positive fixture with a meaning-negative fixture. A clean schema with missing provenance yields HOLD. Valid numeric labels whose definition drifted without versioning yield REJECT. A statistically similar snapshot used after retention expiry yields REOPEN or HOLD according to the owning decision. This pairing teaches readers not to let tooling overclaim.
The primary-treatment source ledger is versioned with the snapshot decision. `MLE-BSRC-002` is arXiv:1803.09010, verified 2026-08-18; documentation guidance cannot certify data quality. Recheck arXiv continuity at every publication freeze and preserve the exact revision used in integration. `MLE-BSRC-003` is the final ACM FAccT 2022 paper, verified 2026-08-18; bounded case studies do not validate permission or quality. Recheck index continuity at publication freezes and retain the 2022 identity.

> **Currentness record — `MLE-BSRC-007` / `MLE-BSRC-024`.** The ML Test Score is final IEEE Big Data 2017, verified 2026-08-18; its rubric is neither certification nor a universal gate. Recheck record and final-paper availability at publication freezes and translate tests into workload evidence rather than a score. Official TensorFlow Data Validation tutorial updated 2024-04-30; retrieved 2026-08-23. The living tutorial demonstrates schema, anomaly, drift, and skew mechanisms but does not determine semantic validity, acceptable shift, outcome degradation, or permission to retrain or promote; recheck tutorial/API semantics at each freeze.

`MLE-BSRC-004` is the final ACM CHI 2021 study, verified 2026-08-18; its 53-practitioner sample and 92 percent figure are sample-specific. Recheck paper access at publication freezes and retain the study methods around every empirical claim. `MLE-BSRC-028` is final NIST AI 100-1, AI RMF 1.0, verified 2026-08-18; it is voluntary and under revision, not authorization. Recheck all three freezes and keep 1.0 explicit until a revision is published. `MLE-BSRC-038` is fixed October 2021 medical-device guidance, verified 2026-08-18; it is nonbinding and sector-specific. Recheck its direct PDF every freeze and prefer N88 FINAL:2025 when current guidance is required.

## MLE-CH-04-S03 — Interpret conformance and absence

The strongest supportable conclusion from `BL-03` is that a named snapshot and label version conform to stated workload checks and carry reviewable provenance, meaning, permission, limitations, and owners. It does not mean the data represents every future condition, labels are objectively true, permission is universal, or the model will be good.

Machine checks produce bounded evidence. A schema PASS means checked fields match stated constraints. A distribution comparison means selected statistics differ or do not differ under the chosen method and threshold. Neither result establishes why a difference occurred or whether it matters. Domain and evaluation owners interpret relevance; formal owners interpret permission.

`MLE-V04.1` is a semantic contract table at `MLE-CH-04-S03`. It labels snapshot identity, origin, schema, label meaning, permission, retention, check, exception, owner, disposition, limitation, and next evidence. Its long description distinguishes machine PASS from human or formal decisions and identifies missing provenance as HOLD even when schema passes.

Absence is especially dangerous. No anomaly may mean the data is stable, or that the chosen check cannot see the problem. No missing value may coexist with wrong semantics. No recorded exception may mean nothing failed, or that failures were hidden. Evidence interpretation records check coverage and blind spots, not merely results.

Conflicting evidence remains explicit. A source owner may confirm origin while a domain owner disputes label meaning. A privacy owner may narrow permitted use after technical checks pass. The record does not average these decisions. It issues HOLD or REOPEN, preserves the technical result, and routes the unresolved authority.

The evidence ceiling prevents familiar overclaims. `BL-03` cannot certify enterprise data architecture, legal basis, privacy approval, domain representativeness, or label truth. It can show exact workload-facing conformance and the status of external decisions. This is enough to make later changes diagnosable.

Interpret check results as claims with predicates. “Schema passed” means a named validator, version, ruleset, and snapshot produced recorded results. It does not mean all rows are correct. “No drift detected” means a chosen comparison over chosen fields and thresholds found no flagged difference. It does not mean distributions are identical, outcomes are unchanged, or future data is safe. The predicate and coverage travel with the result.

Thresholds in anomaly checks belong to the workload contract. A library default may demonstrate mechanics, but it cannot define materiality. Record who proposed the threshold, what consequence it represents, who accepted it, and when it must be rechecked. If no owner accepts it, the result may still be informative, but it cannot support progression.

Documentation has a different failure mode: confident assertions without verification. A datasheet may say labels were reviewed or permission exists. The dossier treats those statements as evidence inputs and asks for source identity and owner. It does not assume that a well-structured document makes every statement true. This preserves the value of documentation without turning form completion into assurance.

Conversely, missing narrative context can make perfect machine identity unusable. Exact bytes and hashes do not tell a reviewer what a label means, why observations were collected, or which use is excluded. Identity and meaning are complementary. A supportable workload needs both, plus the authority to use them.

The chapter distinguishes representativeness from conformance. Conformance asks whether the snapshot matches the stated contract. Representativeness asks whether that contract and snapshot adequately cover the intended population and conditions. The MLE can execute conformance checks; evaluation and domain owners judge adequacy. A PASS on the first cannot silently answer the second.
## MLE-CH-04-S04 — Worked trace and truth boundaries

> **Case-truth record — `CASE-01`.** `CASE-01` is a FICTIONAL SYNTHETIC CAPSTONE with no reported facts or attributed outcomes. The fixed Benchline dossier may exercise whether each lifecycle decision carries named evidence, limitation, owner, authority route, and next evidence. Do not infer real industrial performance, safety, production readiness, business outcome, or external approval. Move only the decision/evidence interface to another port; replace fixture data, mechanisms, thresholds, owners, and evidence. Its limitation remains no real production, industrial, safety, performance, or business claim.

> **Case-truth records — `CASE-02` / `CASE-03`.** `CASE-02` is a CONSTRUCTED SATELLITE with no reported facts or attributed outcomes. The constructed managed fixture may test exportable identity and evidence under provider opacity. Do not infer provider capability or outcome, real accuracy or use, approval, or a cloud tutorial. Reproduce the same dossier fields without provider names using the selected service's actual evidence. Its limitation remains that it is not a cloud-provider tutorial. `CASE-03` is also constructed: The constructed classical fixture may test that qualification and authority gates still apply to a simple model. Do not infer a lending outcome, measured fairness or compliance, financial advice, or credit authorization. Preserve the evidence interface without deep-learning assumptions and route local domain and risk decisions externally. Its limitation remains that it is not financial advice or credit authorization.

> **Case-truth records — `CASE-04` / `CASE-05`.** `CASE-04` is a CONSTRUCTED SATELLITE with no reported facts or attributed outcomes. The constructed deep fixture may test checkpoint, preprocessor, runtime, uncertainty, and serving identity bindings. Do not infer real accuracy, acoustic safety, field performance, production behavior, or approval. Preserve the same decision/evidence job when the model family or runtime changes. Its limitation remains that it is not a deep-learning recipe book. `CASE-05` is also constructed: The constructed shared-tenant fixture may test separation of workload evidence from tenant, fleet, and platform authority. Do not infer platform-wide SLO or performance, business effect, isolation assurance, or approval. Preserve workload evidence when the substrate changes and recheck every substrate-bound relation. Its limitation remains that it is not a platform-engineering curriculum. `CASE-06` is a PUBLIC REPORTED CASE.

Benchline snapshot `DATA-BL-003` contains synthetic image identifiers, capture-condition fields, and a review label. The positive contract records generation origin, fixed hashes, composition, label rule, annotator simulation, intended exercise use, excluded real-world use, retention window, and owners. Schema and identity checks pass. That result remains `synthetic-deterministic` and does not imply real industrial data quality.

PROVENANCE-ABSENT removes origin while retaining clean schema and statistics. The result is HOLD because the bytes cannot be connected to a reviewed source basis. LABEL-SEMANTICS-DRIFT keeps values but changes positive-label meaning. The validator detects the unversioned definition change and returns REJECT. RETENTION-EXPIRED advances the fixed fixture date beyond the accepted window, producing REOPEN to CONTRACTED or an owner-routed HOLD.

The satellites apply those fixed truth boundaries to exportable snapshot identity, label and authority evidence, preprocessing inputs, and tenant-versus-platform ownership.

For `CASE-06`, reported facts include the paper’s data and feature test categories and its production-experience framing. Attributed outcomes remain the authors’ roadmap claims. The allowed inference is that data tests should be selected by failure mode and expected evidence. The forbidden inference is that a point total certifies a dataset. Limitations include dated Google context and no universal threshold. Transfer selects checks from failure and consequence, records owner-bound dispositions instead of points, uses current TFDV mechanisms only as examples, and carries the method across all five ports without assuming shared-platform infrastructure.

Inside the snapshot trace, a provenance column distinguishes reported facts from attributed outcomes, while a decision column distinguishes allowed inference from forbidden inference. The limitations cell travels with both. Constructed cases have no real attributed outcomes. Public methods do not lend their authority to Benchline. Source wording, figures, UIs, and proprietary implementations are not imported.

The practical lesson is that a data contract can fail for different reasons. Malformed bytes are technical conformance failures. Unknown origin is a provenance gap. Changed label meaning is semantic invalidation. Expired permission is an authority or retention problem. Each requires a different owner and repair, so a single “data quality score” would obscure the decision.

Walk the positive fixture from parent to output. `BL-02` names the accepted task and incumbent snapshot obligation. The synthetic generator produces immutable bytes and a manifest. The label contract names its constructed rule and explicitly says it is not real observation. Schema and identity checks run against those bytes. Owner fields are fixture roles, not real signatures. `BL-03` records PASS for contract mechanics while its limitation prohibits any real-world inference.

Now keep every byte and check result fixed but remove the origin field. This is not a cosmetic omission. Without origin, the reviewer cannot know whether the snapshot is the accepted generator output or an unrelated file with the same shape. The correct HOLD demonstrates why schema and provenance are independent evidence families.

Next, change label semantics while preserving integers. A naive validator sees no schema change. The contract validator compares label-definition version and parent bindings and detects drift. Because prior results were interpreted under the old meaning, the change creates a new snapshot identity and invalidates affected evidence. REJECT prevents silent reuse; a new contract may later proceed.

The retention mutation shows why a fixed clock belongs in deterministic fixtures. At one timestamp the use is inside the recorded window; at another it is not. The mechanism does not decide whether extension is permissible. It exposes expiry and routes to the external owner. The MLE cannot extend the date inside the result.

## MLE-CH-04-S05 — Failure lab

Dataset and label mechanics in this section are specifications for reader analysis. The companion merely packages fixed labels into a generic offline record with identity, metadata, outcome code, limitations, ownership, route, and truth state. It neither validates provenance nor judges semantics, permission, retention, or fitness; the named failure results are expected exercise responses.

The satellites test different blind spots. Managed systems may conceal extraction identity. Classical workflows may keep data in local files with weak provenance. Deep workflows may multiply preprocessing and augmentation steps. Edge workflows may delay synchronization and labels. Shared platforms may blur tenant and source ownership. The same contract fields expose each limitation without requiring identical implementation.

The public method is handled carefully. The ML Test Score encourages data and feature tests, but this manuscript does not copy its scoring or claim that a chosen tool implements the whole method. It translates a test category into a workload decision: named failure, expected evidence, disposition, owner, and next action. That translation is portable and bounded.

No case fact is allowed to leak. The constructed credit case does not support a fairness or lending conclusion. The acoustic case does not support field accuracy. The managed case does not compare providers. The shared case does not describe fleet assurance. The explicit case-truth lanes make those prohibitions reviewable.

The snapshot lab pair assigns different work to its fixtures. `MLE-CH-04-LAB-01` reconstructs an admissible snapshot from `FIX-MLE-CH-04-1`; `MLE-CH-04-LAB-02` corrupts identity and label timing in `FIX-MLE-CH-04-2`. Both are offline and `synthetic-deterministic`. Fixed bytes, clock, and seed must converge on a canonical `BL-03` or an explicit failure record, with no network, provider, production, credential, or authority mutation.

The positive lab verifies snapshot hash, schema, counts, label-contract version, provenance, permission, retention, limitations, owners, and parent `BL-02`. It runs checks twice and requires byte-identical results. PASS applies only to this dataset-contract gate.

PROVENANCE-ABSENT deletes origin and expects HOLD. Repair supplies reviewed provenance under a new identity; it cannot fabricate source truth. LABEL-SEMANTICS-DRIFT changes meaning without versioning and expects REJECT. Repair creates a new contract and snapshot, links supersession, and reopens affected evidence. RETENTION-EXPIRED crosses the accepted date and requires REOPEN or HOLD with the formal owner route.

The second lab also attempts illegal promotion and self-approval. A schema validator cannot sign privacy, legal, domain, or governance fields. A HOLD or REJECT cannot advance to RELEASABLE. Every repair preserves the failed record and changes only fields within the responsible owner’s boundary.

Diagnostics distinguish the new mutation from known limitations. Input/output hashes, check coverage, observed mismatch, disposition, owner route, limitation, and next evidence are all recorded. No hidden upstream repair is allowed.

The lab additionally proves canonical immutability. The positive input bytes are hashed before every mutation. A mutation creates a derived fixture rather than editing the original. Each output names its prior hash. Running a repair creates another record; it never rewrites `BL-02` or an earlier `BL-03` attempt. Reviewers can reconstruct the full chain.

Effect checks matter even for data exercises. The runner cannot read a production table, environment credential, provider account, or local secret. It cannot call a shell tool or network service. All bytes are committed synthetic fixtures. This protects the truth boundary and makes the exercise reproducible without paid access.

The acceptance check verifies owner-route exactness. A missing provenance field routes to the data owner. Label-semantic drift routes to the domain owner and affected evaluation. Retention expiry routes to the formal owner. If every failure routes to “MLE,” the lab fails even when dispositions are otherwise correct.

Negative results include the strongest state still supported. A provenance HOLD does not erase the task contract. A label drift rejection does not rewrite prior observations. Expiry may reopen permission without claiming the bytes changed. State precision prevents teams from treating every defect as a total restart or, conversely, as a minor warning.
## MLE-CH-04-S06 — Five-port transfer

The portable element is the dataset-contract interface, not a tested implementation. A hidden adapter field distinguishes ports but supplies no provider export, local file provenance, augmentation trace, device synchronization, or shared-pipeline evidence. Reviewers must obtain those facts independently.

`PORT-MANAGED` requires exportable dataset identity, schema, statistics, label meaning, permission status, and limitations even when the provider stores data. Provider validation is not provenance or authorization.

`PORT-CLASSICAL` preserves feature order, source snapshot, preprocessing, and label semantics. A small table or simple estimator does not remove access, retention, or consequence duties.

`PORT-DEEP` binds large datasets, preprocessing, augmentation, label version, and checkpoint inputs. Scale does not prove representativeness. Research and platform mechanics remain ports.

`PORT-EDGE` binds sensor or image origin, capture conditions, delayed synchronization, label maturity, and device package context. Benchline remains fictional and cannot imply real industrial performance or safety.

`PORT-SHARED` separates tenant dataset and label contracts from shared ingestion, feature, warehouse, and platform ownership. Workload evidence cannot claim platform-wide assurance.

The invariant decision is admissibility of an exact data and label basis under the task contract. All adapters receive identity, meaning, permission, checks, exceptions, owners, perturbation, and expected evidence. All return disposition, state, limitation, route, and next evidence.

Transfer tests run the positive and missing-provenance fixtures everywhere. Port mechanics vary, but a clean schema with unknown origin produces HOLD on every port. If a provider badge, simple file, large corpus, device source, or shared catalog makes one port pass automatically, it has changed the meaning of the gate.

Current tools are replaceable examples. TFDV APIs, provider validators, dataframe libraries, deep-data pipelines, device sync tools, and catalog services may change. Durable doctrine is exact identity, reviewable meaning, bounded checks, owner-routed exceptions, and preserved limitations.

Port equality is tested semantically. Each record must answer: which exact data, what do labels mean, which uses are permitted, which checks ran, what failed, who owns the decision, what limitation remains, and what evidence comes next? A port may add fields, but it may not omit these answers because its mechanism is convenient.

Opaque managed exports and disconnected edge devices illustrate bounded evidence. If a service cannot export exact bytes, record the provider identity, retrieval evidence, and limitation; HOLD when the contract requires stronger identity. If an edge device cannot be observed now, record unavailable evidence and recheck schedule. Do not manufacture completeness.

Shared platforms require two owner layers. The workload owner is accountable for the tenant’s task and evidence. Platform and data owners retain shared source and pipeline decisions. A shared catalog entry can support identity but does not grant permission or prove tenant label meaning. The dossier keeps the layers linked and distinct.

The deep port must not become the norm. Augmentation, tokenization, or checkpoint linkage are mechanism fields only when applicable. The classical port may use a short preprocessing function; the managed port may expose a configuration digest; the edge port may use a device-side transform. The invariant is resolvable transformation and meaning, not a specific artifact type.

When the same positive fixture passes all ports, the result demonstrates the contract interface. It does not prove equal model quality or real deployment readiness. When missing provenance fails all ports, it demonstrates a durable boundary: mechanics cannot substitute for source truth.

CASE-06 crosses the ports only through its accepted transfer rules. Tests are selected from snapshot and label failure modes and their consequences, not to fill a quota. Point totals become evidence-bearing PASS, HOLD, or REJECT records with a named owner. Living validators may illustrate schema or anomaly mechanisms, but their green output never becomes source truth. The same test decision must remain expressible on managed, classical, deep, edge, and shared paths without assuming a shared platform. In this chapter that means a schema test can expose missing evidence, while provenance, permission, label meaning, and representativeness remain separately owned decisions.

Transfer also checks negative equivalence. An opaque managed export, a reordered classical feature frame, a changed deep preprocessor, a stale edge package, and a shared feature revision differ mechanically. Each must still identify the affected snapshot predicate, preserve the old evidence, and route a bounded disposition rather than translating platform confidence into admissibility.

## MLE-CH-04-S07 — Assessment and Qualification Gate

`MLE-CH-04-ASMT-01` supplies a snapshot, schema report, label definition, access record, retention window, and exceptions. The reader must produce `BL-03`, distinguish machine and human evidence, inject one failure, and issue PASS, HOLD, REJECT, or REOPEN.

### Qualification Gate

PASS requires exact snapshot and parent identity, provenance, composition, collection, annotation and label meaning, intended/excluded uses, transformations, permission, retention, maintenance, responsible contacts, checks, limitations, exceptions, owners, and next evidence. Missing provenance yields HOLD. Unversioned label drift yields REJECT. Changed population or expired basis yields REOPEN or HOLD according to the contract.

A successful answer walks one candidate snapshot from source identity through label timing and permission, then points to the first check that justifies its disposition. It must also name the ceiling: a schema PASS cannot prove label truth, documentation cannot prove permission, and owner approval cannot repair corrupted identity. Each evidence family remains necessary and bounded.

The MLE owns workload-facing contracts and conformance, not enterprise data architecture, legal basis, privacy approval, or domain sign-off. An otherwise complete artifact with MLE self-approval fails. Retry creates a new version, preserves the old record, and routes changes to retained owners.

The exact Answer intent is: Explain the decision, evidence, state, owner, and next action. The response identifies the proposed snapshot and label version, cites origin, schema, meaning, permission, retention, and conformance results, states whether the basis remains CONTRACTED, and routes every unresolved exception. It then requests the precise graph or split evidence needed next. A table of green checks is not an answer when it cannot explain which predicate passed, which human judgment remains open, or why the transition is legal.

The assessment includes two deliberately conflicting packets. One has byte-stable provenance and schema but disputed label meaning; it remains HOLD because machine identity cannot settle domain truth. The other has domain-approved labels but an unresolved legal basis; approval from the domain owner cannot substitute for privacy or legal authority. A third packet changes only documentation wording. The reader must decide whether that produces a superseding note or changes snapshot identity, and justify the choice from evidence. Observable PASS evidence is exact: BL-03 passes its named qualification gate.

The authority limit remains: the MLE owns workload-facing contracts and conformance, not the enterprise data estate or legal basis. Data Engineering, platform, privacy, legal, governance, and domain owners keep their assigned decisions. Retry is HOLD or REOPEN with new evidence; never self-approve. The retry preserves the failed snapshot record, creates a new evidence identity for the repaired field, recomputes affected checks, and leaves unrelated accepted evidence immutable.

Scoring gives separate credit for the predicate, the observed evidence, the limitation, and the authority route. A correct disposition with an invented owner fails, as does a complete owner table attached to an unresolvable snapshot.

## MLE-CH-04-S08 — Durable handoff

`BL-03` version 1.0.0 attaches dataset and label evidence to the still-CONTRACTED `BL-02` basis. Its accepted parent link is hash `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`, not a claim that the input was freshly executed. Snapshot and label identities, provenance, schema, meaning, permission, retention, exceptions, conformance observations, owners, and limitations make up the change, supported by `MLE-BCLM-010` through `MLE-BCLM-012`. Superseding records preserve the failed ancestor.

The dataset contract remains CONTRACTED until split evidence supports admissibility. Under Appendix B, reopen can only move from a later state to an earlier justified target when the requested evidence could already exist; it cannot turn UNORIENTED into CONTRACTED. A changed snapshot, label meaning, permission, or retention basis invalidates only dependent records and keeps the triggering exception with its authority owner.

The chapter-specific rechecks travel with the record: machine-checkable identity fields remain separate from human-reviewed provenance, label meaning, permission, and limitations; a passing schema fixture is paired with a failing provenance or label-semantics exercise; and each exception names the failed contract, affected population, evidence, retained authority, and next action. These are evidence obligations, not claims about an external system. The dossier supports only this chapter’s bounded decision; PASS cannot certify later gates, public-case outcomes remain attributed, and synthetic evidence remains synthetic-deterministic.

The evidence ceiling excludes enterprise data architecture, legal-basis determination, privacy approval, domain label sign-off, and representativeness certification. Consume `BL-02` without silent repair and produce `BL-03` for Chapter 5. The next chapter receives accepted snapshot and label meaning, then traces transformations, consumers, and feedback without redesigning enterprise data architecture. The evidence manifest, legal state, limitations, rechecks, lineage, and exact next dependency travel together.
