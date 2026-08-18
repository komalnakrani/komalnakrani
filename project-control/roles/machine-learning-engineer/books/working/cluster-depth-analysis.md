# Machine Learning Engineer — Durable Learning-Cluster Depth Analysis

Status: **Phase 04 working analysis; no book-count, volume, or chapter decision**

Evidence authority: accepted Phase 01 `role-validation.md`,
`adjacent-role-boundary.md`, and `evidence-register.json`

Analysis date: 2026-08-18

## Method and non-decision boundary

This analysis groups the accepted Machine Learning Engineer responsibilities by
durable professional decision and artifact, not by framework, cloud, model
family, employer title, or assumed table of contents. A cluster is retained only
when it has a distinct workload-specific decision, a defensible practice loop,
and evidence that cannot be reduced to a tool tour. The eight clusters below
collectively cover all 22 accepted claims, all 17 adjacent-role rows, and all 10
accepted boundary scenarios. They are depth records for later structure
comparison; their number does **not** imply a book count, sequence, part count,
or chapter list.

For exact traceability, `BR-01` through `BR-17` refer, in order, to the 17 rows
of the accepted **Complete adjacent-role matrix**: Data Scientist, Data
Engineer, Applied Scientist, AI Research Engineer, AI Evaluation Engineer,
Applied AI Engineer, LLM Engineer, Agentic AI Engineer, MLOps Engineer, ML
Platform/Infrastructure Engineer, Software Engineer, Platform Engineer/SRE,
Product, Security, Safety, Privacy/AI Governance/Legal, and Domain authorities.
`S-01` through `S-10` refer, in order, to the 10 accepted **Scenario
classification tests**. These local locators add no new evidence or authority.

## Cluster inventory

| ID | Durable responsibility family | Controlling professional decision | Evidence center |
|---|---|---|---|
| `LC-01` | Workload purpose, task contract, and decision rights | Is ML a justified intervention for a defined population, consequence model, baseline, and accountable set of owners? | `MLE-CLM-002`, `MLE-CLM-006`, `MLE-CLM-008`, `MLE-CLM-015`, `MLE-CLM-020` |
| `LC-02` | Data, label, feature, and feedback contracts | Which versioned inputs, transformations, labels, and feedback paths are admissible for this workload, and what conformance evidence is missing? | `MLE-CLM-004`, `MLE-CLM-009`, `MLE-CLM-017`, `MLE-CLM-018` |
| `LC-03` | Baselines, experiments, and bounded reproducibility | Can a candidate change be reconstructed and compared without overstating determinism or confusing a tracked run with evidence? | `MLE-CLM-004`, `MLE-CLM-008`, `MLE-CLM-010`, `MLE-CLM-017` |
| `LC-04` | Representative evaluation and technical qualification | Is the candidate technically qualified for the intended conditions, segments, consequences, uncertainty, and independent gates? | `MLE-CLM-011`, `MLE-CLM-016`, `MLE-CLM-019`, `MLE-CLM-020` |
| `LC-05` | Release package, interfaces, lineage, and change seams | What exact executable-and-evidence unit is being released, and can it coexist, migrate, roll back, and be diagnosed? | `MLE-CLM-005`, `MLE-CLM-012`, `MLE-CLM-015`, `MLE-CLM-017`, `MLE-CLM-021` |
| `LC-06` | Serving envelope, observation, incident response, and requalification | Does the complete workload operate inside a measured envelope, and which evidence justifies containment, rollback, repair, retraining, or requalification? | `MLE-CLM-003`, `MLE-CLM-013`, `MLE-CLM-016`, `MLE-CLM-018` |
| `LC-07` | Security, formal authority, and retirement evidence | Are workload assets protected and lifecycle obligations inspectable without converting technical implementation into unilateral authorization? | `MLE-CLM-014`, `MLE-CLM-018`, `MLE-CLM-019`, `MLE-CLM-020` |
| `LC-08` | Cross-functional systems judgment and widening professional impact | Can the engineer make dependencies, tradeoffs, evidence, and decision ownership legible across teams and at increasing radius? | `MLE-CLM-001`, `MLE-CLM-005`, `MLE-CLM-006`, `MLE-CLM-007`, `MLE-CLM-021`, `MLE-CLM-022` |

## `LC-01` — Workload purpose, task contract, and decision rights

**Why this is durable.** The role begins before model selection but after no
single stakeholder may silently define the whole problem. The MLE must turn an
approved intent into a testable technical contract while keeping product,
domain, safety, privacy, governance, legal, and risk acceptance visible outside
the technical disposition. This connects the employer-observed lifecycle and
stakeholder work to the accepted task-contract standard. [`MLE-CLM-002`,
`MLE-CLM-006`, `MLE-CLM-008`, `MLE-CLM-015`, `MLE-CLM-020`; `BR-13`,
`BR-15`–`BR-17`; `S-01`, `S-08`]

| Depth dimension | Required depth record |
|---|---|
| Conceptual | Distinguish user outcome, operational decision, prediction target, proxy, intended population, consequence, constraint, non-goal, and technical qualification. Explain why “use ML” remains a hypothesis, not a premise. |
| Practical | Interrogate an ambiguous request; retain an incumbent, rule-based, or no-ML baseline; identify segments and failure consequences; write measurable acceptance evidence and unresolved assumptions. |
| Architecture | Draw the workload boundary from input and feedback sources through consumers, approvals, and recovery; mark who supplies requirements and who can stop release. |
| Implementation | Encode testable target definitions, input/output schemas at the contract edge, metric calculations, baseline behavior, and contract-version identifiers without prematurely selecting a model family. |
| Operational | Define how changed population, purpose, consumer, consequence, or label availability invalidates or reopens the contract after release. |
| Security/authority | Record sensitive uses, data constraints, threat/risk review routes, named approvers, and the difference between MLE technical disposition and product/domain/legal/safety authorization. |
| Project | Produce a contested task-contract dossier from incomplete stakeholder statements, including a defensible `NO ML`, `HOLD`, or bounded-candidate path and an escalation map. |
| Prerequisite | Basic supervised-learning vocabulary, descriptive statistics, software interfaces, and the ability to state assumptions; no specific cloud or framework is required. |
| Narrative | Move from an attractive but underspecified model request to an evidence-bearing problem contract whose missing authority is visible. The tension is premature technical certainty. |

**Professional artifacts:** task contract; intended-use and excluded-use record;
population/segment definition; consequence table; stakeholder and authority map;
baseline brief; acceptance matrix; assumptions/non-goals log; technical
disposition template.

**Dependencies and natural merge points:** supplies the contract consumed by
`LC-02`, `LC-03`, and `LC-04`; changes to purpose or population reopen `LC-04`
and may trigger `LC-06`/`LC-07`. It can naturally share a case handoff with
`LC-04`, but must not merge so completely that task authority disappears inside
metric selection.

**Shallow-treatment risk:** reducing framing to “pick a business metric” or a
one-page requirements form. **Duplication risk:** repeating generic product
discovery, domain practice, AI governance, or evaluation-method ownership that
belongs to `BR-13`, `BR-15`, `BR-16`, `BR-17`, or `LC-04`.

**Context portability tests:**

- **Managed service:** the provider may supply training/deployment mechanisms,
  but the workload still needs a local population, baseline, consequence, and
  decision-rights contract.
- **Classical/statistical ML:** a regression or ranker still needs a justified
  target, baseline, segments, and acceptance evidence; low model complexity
  does not remove the contract.
- **Deep learning:** representation scale or pretraining does not authorize a
  use or replace an incumbent/no-ML comparison.
- **Physical/edge:** physical environment, hardware envelope, fail-safe state,
  and domain sign-off become explicit constraints; they do not make the MLE the
  hardware or domain authority.
- **Shared platform:** platform templates may collect fields, but workload
  purpose and acceptance cannot be inherited from the golden path.

## `LC-02` — Data, label, feature, and feedback contracts

**Why this is durable.** Learning behavior depends on versioned data semantics,
transformations, labels, environments, and feedback. The MLE owns the
model-facing contract and train/serve conformance while data engineering,
domain, privacy, and governance retain shared-estate truth and authority.
[`MLE-CLM-004`, `MLE-CLM-009`, `MLE-CLM-017`, `MLE-CLM-018`,
`MLE-CLM-020`; `BR-02`, `BR-09`, `BR-10`, `BR-16`, `BR-17`; `S-02`,
`S-04`, `S-08`]

| Depth dimension | Required depth record |
|---|---|
| Conceptual | Separate schema validity, semantic validity, provenance, representativeness, label validity, lawful use, freshness, leakage, skew, drift, and feedback effects; show why none implies all the others. |
| Practical | Inspect snapshots and splits; trace transformations; detect leakage and hidden consumers; compare training and serving environments; investigate stale or delayed labels; disposition anomalies with owners. |
| Architecture | Model offline/online paths, feature materialization, label arrival, feedback loops, source-of-truth boundaries, lineage, consumers, and failure propagation across shared data services. |
| Implementation | Build schema/domain checks, split assertions, transformation parity tests, provenance/version capture, freshness checks, skew/drift comparators, contract fixtures, and explicit exception records. |
| Operational | Define references and windows; monitor freshness, missingness, skew, label delay, feedback and consumer changes; route a signal to investigation rather than automatic retraining. |
| Security/authority | Implement approved access, minimization, retention, deletion, and lineage controls while keeping lawful basis, source truth, label meaning, and domain validity with their authorities. |
| Project | Create a versioned data/feature/label contract and conformance report for a workload with one leakage path, one delayed-label ambiguity, and one shared-pipeline dependency. |
| Prerequisite | Tabular and event data, basic probability/statistics, SQL or equivalent querying, schemas, data transformations, and test fundamentals. |
| Narrative | Follow a candidate whose offline success unravels when provenance, temporal splits, serving transformations, and delayed feedback are made visible. |

**Professional artifacts:** dataset and feature contract; label specification;
schema and provenance record; split/leakage review; transformation lineage;
train/serve consistency report; freshness/skew/drift evidence; exception and
consumer register.

**Dependencies and natural merge points:** consumes `LC-01` population and
consequence definitions; supplies fixed identities to `LC-03`, representative
conditions to `LC-04`, lineage to `LC-05`, and diagnostic signals to `LC-06`.
It naturally joins `LC-03` at immutable run inputs and `LC-06` at live data
signals, but the contract must not collapse into either experiment tracking or
monitoring dashboards.

**Shallow-treatment risk:** a schema-tool tutorial that equates statistical
conformance with semantic or legal validity. **Duplication risk:** teaching the
enterprise data platform, general data modeling, governance policy, or shared
feature-store tenancy owned by `BR-02`, `BR-10`, and `BR-16`.

**Context portability tests:**

- **Managed service:** provider validation features are mechanisms; dataset,
  transformation, exception, and authority records remain workload-owned.
- **Classical/statistical ML:** manual features, sampling, temporal leakage,
  calibration populations, and label definitions make this cluster fully
  applicable.
- **Deep learning:** unstructured corpora, learned representations, augmentation,
  pretraining provenance, and large artifacts extend rather than replace the
  same contract.
- **Physical/edge:** sensor calibration, device/firmware identity, environment,
  intermittent sync, and field labels enter the contract while hardware/domain
  truth stays external.
- **Shared platform:** a feature or data platform owns common service contracts;
  the MLE records which snapshot/features this release consumes and proves
  compatibility.

## `LC-03` — Baselines, experiments, and bounded reproducibility

**Why this is durable.** A learning workload changes through experiments whose
inputs, environments, hypotheses, results, and artifacts must be inspectable.
Reproducibility is bounded by software, hardware, and nondeterminism; tracking a
seed or run is necessary but never sufficient. [`MLE-CLM-004`, `MLE-CLM-008`,
`MLE-CLM-010`, `MLE-CLM-017`; `BR-01`, `BR-03`, `BR-04`, `BR-09`,
`BR-10`; `S-03`, `S-09`]

| Depth dimension | Required depth record |
|---|---|
| Conceptual | Distinguish hypothesis, baseline, controlled comparison, repeatability, reproducibility, determinism, statistical variability, execution variance, and artifact identity. |
| Practical | Establish a simple retained baseline; freeze or regenerate splits; control variables; capture complete run context; rerun; compare divergence; state the strongest evidence-supported reproducibility claim. |
| Architecture | Separate experiment orchestration, data identity, compute/runtime, artifact storage, metadata, and approval; mark shared MLOps/platform services versus workload evidence. |
| Implementation | Capture code/dependency/data/parameter/seed/hardware identities and logs; implement baseline and experiment harnesses; hash material artifacts; produce comparable result records and rerun checks. |
| Operational | Preserve enough context to diagnose a promoted release, reproduce a failure within stated bounds, and distinguish environmental change from candidate change. |
| Security/authority | Protect code, dependencies, data, credentials, and artifacts; prevent metadata from leaking sensitive values; do not treat automated tracking as approval or scientific sign-off. |
| Project | Run a controlled candidate comparison on two execution environments, document irreducible divergence, and defend a bounded reproducibility statement with retained artifacts. |
| Prerequisite | Model fitting and evaluation basics, version control, dependency environments, randomness, basic experimental design, and command-line/test literacy. |
| Narrative | Replace the comforting “same seed means reproducible” story with an investigation that locates what can and cannot be reconstructed. |

**Professional artifacts:** baseline implementation; experiment plan; run
manifest; environment lock; immutable identities/hashes; comparison record;
rerun evidence; bounded reproducibility statement; divergence log.

**Dependencies and natural merge points:** consumes `LC-01` hypothesis and
baseline criteria plus `LC-02` data identities; supplies candidates and lineage
to `LC-04` and `LC-05`. It naturally shares an evidence chain with `LC-04`, but
method/research claims owned by `BR-01`, `BR-03`, and `BR-04` must not be
rebranded as MLE authority.

**Shallow-treatment risk:** an experiment-tracker walkthrough or seed checklist
without a rerun and limitation statement. **Duplication risk:** becoming an
applied-research methods curriculum, a statistics text, or a reusable MLOps
control-plane build owned by `BR-03`, `BR-04`, and `BR-09`.

**Context portability tests:**

- **Managed service:** generated run metadata must be inspected for missing data,
  code, dependency, image/runtime, and hardware identities; service execution
  is not automatic reproducibility.
- **Classical/statistical ML:** deterministic solvers can still vary through
  data order, libraries, preprocessing, or numerical context; baseline and
  experiment records remain required.
- **Deep learning:** accelerator kernels, distributed execution, checkpoints,
  large datasets, and throughput/determinism tradeoffs make bounded claims more
  visible, not uniquely defining.
- **Physical/edge:** training and field runtime are distinct environments;
  hardware/firmware and captured environmental data constrain reconstruction.
- **Shared platform:** orchestration and registries may be shared; the workload
  owner specifies evidence completeness and investigates divergence rather than
  owning the platform service.

## `LC-04` — Representative evaluation and technical qualification

**Why this is durable.** Qualification joins baseline comparison, representative
conditions, meaningful segments, uncertainty or calibration where applicable,
failure analysis, operational constraints, limitations, and independent gate
voices into a disposition. No aggregate score or self-certified dashboard is
enough. [`MLE-CLM-011`, `MLE-CLM-016`, `MLE-CLM-019`, `MLE-CLM-020`;
`BR-01`, `BR-03`, `BR-05`, `BR-07`, `BR-15`, `BR-17`; `S-01`, `S-04`,
`S-05`, `S-08`, `S-09`]

| Depth dimension | Required depth record |
|---|---|
| Conceptual | Separate metric from decision, aggregate from segment, statistical uncertainty from model uncertainty, calibration from accuracy, offline evidence from deployment evidence, technical disposition from authorization, and proxy from outcome. |
| Practical | Build representative suites; retain baselines; examine sample sizes, segments, errors, calibration/uncertainty where applicable, adversarial or consequence-led cases, and contradictory evidence; write `PASS`, `HOLD`, or `REJECT` with limitations. |
| Architecture | Connect evaluation datasets, candidate identities, deterministic integration tests, model-behavior suites, independent review gates, release evidence, and post-deployment observation without allowing the producer to silently redefine the gate. |
| Implementation | Implement metric and segment calculations, confidence/resampling procedures where justified, calibration/reliability analysis where applicable, error taxonomies, evaluation hooks, threshold tests, evidence snapshots, and reproducible gate reports. |
| Operational | Re-run qualification when population, model, data, feature, runtime, dependency, serving conditions, or intended use changes; connect live evidence to requalification rather than assuming offline permanence. |
| Security/authority | Preserve independent evaluation and safety stop-ship voice; route domain, fairness, safety, privacy, legal, and risk acceptance; expose missing evidence instead of converting it to a technical pass. |
| Project | Defend a candidate disposition where an aggregate improvement conflicts with a consequential segment and an operational constraint, including remediation and independent review routing. |
| Prerequisite | Classification/regression metrics, sampling and uncertainty basics, data splits, calibration concepts when relevant, software testing, and the `LC-01` contract. |
| Narrative | Let a celebrated score fail under segment, consequence, and deployment scrutiny, then rebuild qualification as a dossier rather than a number. |

**Professional artifacts:** representative evaluation suite; baseline comparison;
segment analysis; uncertainty/calibration evidence where applicable; error
taxonomy; limitation register; evaluation procedure; gate record; candidate
technical disposition; remediation/requalification packet.

**Dependencies and natural merge points:** consumes `LC-01` acceptance and
population, `LC-02` representative data/label evidence, and `LC-03` identified
candidates; supplies approval-linked evidence to `LC-05` and thresholds/triggers
to `LC-06`. It naturally joins `LC-06` for deployment evaluations, but the
independent adequacy decision of `BR-05` and safety/domain authority of `BR-15`
and `BR-17` must remain visible.

**Shallow-treatment risk:** metric catalogs, leaderboard optimization, or a
single “fairness” dashboard with universal thresholds. **Duplication risk:**
absorbing a full statistics curriculum, specialized LLM evaluation, safety
evaluation, or domain-validation profession owned by `BR-01`, `BR-05`,
`BR-07`, `BR-15`, and `BR-17`.

**Context portability tests:**

- **Managed service:** built-in evaluation cannot choose the population,
  consequences, independent reviewers, or acceptable limitations.
- **Classical/statistical ML:** calibration, thresholds, confidence, segments,
  residual diagnostics, and baseline interpretation are first-class; neural
  metrics are not required.
- **Deep learning:** high-dimensional outputs and behavior suites may demand
  specialized tests, but the durable decision remains representative,
  consequence-linked qualification.
- **Physical/edge:** representative environments include device, sensor,
  timing, energy, weather, or safety conditions; domain authorities retain
  real-world acceptance.
- **Shared platform:** common evaluators provide plumbing; workload owners set
  and satisfy use-specific evidence while independent functions retain gate
  validity.

## `LC-05` — Release package, interfaces, lineage, and change seams

**Why this is durable.** The releasable unit is an executable artifact bound to
dependencies, inference interface, lineage, evaluated conditions, limitations,
approval state, compatibility, and recovery target. It must survive version
coexistence and change without becoming a registry-entry or container tutorial.
[`MLE-CLM-005`, `MLE-CLM-012`, `MLE-CLM-015`, `MLE-CLM-017`,
`MLE-CLM-021`; `BR-03`, `BR-04`, `BR-06`–`BR-11`; `S-05`, `S-06`,
`S-09`, `S-10`]

| Depth dimension | Required depth record |
|---|---|
| Conceptual | Define the versioned learning workload, release bundle, interface contract, lineage graph, compatibility, consumer, dependency, change surface, blast radius, previous-good target, and retirement status. |
| Practical | Package candidate and dependencies; validate request/response behavior; trace data/run/code lineage; enumerate consumers; test version coexistence and compatibility; make rollback and migration seams executable. |
| Architecture | Delineate model adapter, inference boundary, application consumer, shared registry/serving plane, feature/data dependencies, telemetry, staged versions, fallback, and recovery path. |
| Implementation | Build model packaging, environment lock, inference schemas, validators, adapters, test doubles, hashes/signatures where required, lineage links, compatibility tests, deprecation flags, and release-manifest generation. |
| Operational | Track deployed and previous-good identities, consumers, interface errors, dependency versions, deprecation, rollback readiness, and evidence changes across each release. |
| Security/authority | Apply artifact integrity and access controls, protect dependencies and release channels, retain approval evidence, and avoid treating signature or registry presence as security or organizational acceptance. |
| Project | Assemble and verify a release bundle that must coexist with an older consumer, survive a dependency change, and prove lineage and rollback target without changing shared platform policy. |
| Prerequisite | Software packaging, APIs/schemas, dependency management, version control, automated testing, containers or an equivalent deployable format, and evidence from `LC-02`–`LC-04`. |
| Narrative | Turn “the model file is ready” into a forensic journey through missing consumers, hidden dependencies, incompatible schemas, and the evidence that must travel with the artifact. |

**Professional artifacts:** versioned model package; dependency/environment
lock; inference schema; release manifest; lineage graph; intended/excluded-use
record; compatibility report; consumer register; model card or equivalent;
previous-good and recovery target; migration/deprecation record.

**Dependencies and natural merge points:** binds `LC-02`–`LC-04` evidence into
the unit operated by `LC-06` and protected/retired by `LC-07`. It naturally
shares interface tests with software engineering and promotion mechanics with
MLOps, but it must keep the one-workload evidence decision distinct from
`BR-09`, `BR-10`, and `BR-11` shared systems.

**Shallow-treatment risk:** “serialize a model, build an API, push to a
registry.” **Duplication risk:** generic API/container engineering, registry
administration, platform architecture, LLM application composition, or agent
tool authorization owned by `BR-06`–`BR-11`.

**Context portability tests:**

- **Managed service:** provider package/registry formats remain replaceable;
  the release still needs lineage, conditions, limitations, compatibility,
  approval state, and recovery target.
- **Classical/statistical ML:** small serialized models still depend on feature
  transformations, library versions, schemas, and consumers.
- **Deep learning:** weights, tokenizers/preprocessors, accelerators, model
  shards, and runtime compatibility enlarge the bundle without redefining it.
- **Physical/edge:** firmware, hardware target, update channel, offline fallback,
  and field rollback join the release identity; hardware ownership remains
  separate.
- **Shared platform:** platform owns supported packaging and promotion
  mechanisms; the MLE proves workload compatibility and evidence completeness.

## `LC-06` — Serving envelope, observation, incident response, and requalification

**Why this is durable.** Production qualification connects model behavior to
software and operational evidence: representative load, latency, errors,
capacity, health, data/model signals, staged traffic, rollback, diagnosis, and
controlled change. Drift is a clue, not a verdict, and retraining creates a new
candidate. [`MLE-CLM-003`, `MLE-CLM-013`, `MLE-CLM-016`, `MLE-CLM-017`,
`MLE-CLM-018`; `BR-09`–`BR-12`; `S-02`, `S-04`, `S-07`, `S-09`]

| Depth dimension | Required depth record |
|---|---|
| Conceptual | Distinguish serving envelope, workload health, model behavior, proxy drift, confirmed degradation, capacity, tail latency, saturation, staged exposure, bake gate, containment, rollback, repair, retraining, and requalification. |
| Practical | Generate representative demand; profile warm/cold and tail behavior; inject malformed inputs and dependency failures; stage traffic; define alerts and delayed-label assumptions; rehearse rollback; diagnose changes across data/model/application/runtime/infrastructure layers. |
| Architecture | Map inference path, dependencies, resource and scaling limits, telemetry, label-return path, alert routing, previous-good release, degraded mode, platform/SRE handoff, and requalification loop. |
| Implementation | Build load and capacity tests, request validation, readiness/health probes, model/data/segment telemetry, trace correlation, alert-to-decision logic, staged-release configuration, failure handlers, rollback automation interfaces, and evidence capture. |
| Operational | Own model-specific diagnosis and remediation; participate in incidents under named command; choose observe, contain, roll back, repair, retrain, or requalify; record recovery time, evidence, owners, and follow-up. |
| Security/authority | Include abuse, access, integrity, privacy-safe telemetry, and dependency compromise signals; security and SRE retain incident/fleet authority, while evaluation/domain owners retain evidence sufficiency and consequence thresholds. |
| Project | Qualify and stage a workload under burst demand, delayed labels, a dependency fault, and a misleading drift alert; execute a rollback rehearsal and defend the post-incident requalification decision. |
| Prerequisite | Service fundamentals, concurrency and latency percentiles, observability, basic capacity reasoning, deployment concepts, incident vocabulary, and the release identity from `LC-05`. |
| Narrative | A green offline gate enters production, meets tail and dependency failures, raises ambiguous alerts, and is recovered through evidence rather than reflexive retraining. |

**Professional artifacts:** serving-envelope report; workload model; latency and
capacity profile; staged-rollout plan; bake/abort gates; monitoring contract;
signal and label-delay register; alert-to-decision map; incident evidence packet;
rollback rehearsal; change/retraining dossier; post-change observation record.

**Dependencies and natural merge points:** consumes the `LC-05` package and
`LC-02`/`LC-04` signals; feeds security/retirement evidence to `LC-07` and
systemic lessons to `LC-08`. It naturally joins `LC-04` around deployment
evaluation and `LC-05` around rollback, but must not absorb shared fleet SLOs,
incident command, generalized observability, or golden pipelines from `BR-09`,
`BR-10`, and `BR-12`.

**Shallow-treatment risk:** endpoint deployment plus an accuracy dashboard, or
drift-triggered automatic retraining. **Duplication risk:** a general SRE,
Kubernetes, cloud deployment, observability, or MLOps automation curriculum.

**Context portability tests:**

- **Managed service:** provider autoscaling, canary, and monitoring need locally
  justified workloads, thresholds, owners, label-delay treatment, and recovery
  evidence.
- **Classical/statistical ML:** CPU latency, batch schedules, data drift,
  threshold changes, calibration decay, and pipeline faults require the same
  operability decisions.
- **Deep learning:** accelerators, batching, memory, warmup, throughput, and
  specialized behavior telemetry intensify envelope work but do not define it.
- **Physical/edge:** energy, thermal limits, intermittent network, sensor faults,
  local fallback, fleet heterogeneity, and safe field update extend the measured
  envelope; device-fleet command stays external.
- **Shared platform:** SRE/platform owns fleet response and global reliability;
  the MLE supplies workload sizing, model-specific signals, rollback target,
  degradation behavior, and requalification evidence.

## `LC-07` — Security, formal authority, and retirement evidence

**Why this is durable.** Security and lifecycle accountability run through data,
code, dependencies, artifacts, endpoints, logs, incidents, retention, and final
decommissioning. The MLE implements and tests approved workload controls and
preserves evidence; named authorities retain policy, exceptions, safety,
privacy, legal, domain, and risk decisions. [`MLE-CLM-014`, `MLE-CLM-018`,
`MLE-CLM-019`, `MLE-CLM-020`; `BR-05`, `BR-08`, `BR-13`–`BR-17`;
`S-01`, `S-06`, `S-08`, `S-10`]

| Depth dimension | Required depth record |
|---|---|
| Conceptual | Define ML asset inventory, trust boundary, attack surface, threat assumption, control, evidence, residual limitation, authority, exception, retention obligation, retirement trigger, and decommissioning proof. |
| Practical | Trace data/model/code/dependency attack paths; implement least privilege, integrity, provenance, logging, and recovery controls; test them; route exceptions; periodically reassess use, value, risk, cost, staleness, and supportability; retire without orphaning consumers or obligations. |
| Architecture | Map trust zones, identities, artifact and release supply chain, endpoint access, telemetry and incident routes, approval gates, downstream consumers, retention stores, credential shutdown, fallback, and recovery window. |
| Implementation | Produce inventories and bills of materials; enforce approved access; sign/hash where justified; validate provenance; add tamper/dependency checks and audit events; implement deletion/deactivation hooks; verify endpoint, credential, monitoring, and registry shutdown. |
| Operational | Monitor control health and model-specific abuse/integrity signals; participate in security incidents; preserve evidence; requalify after material change; execute retirement and verify the workload no longer serves. |
| Security/authority | Teach implementation depth while explicitly reserving threat/control acceptance, exceptions, lawful basis, safety sufficiency, risk tolerance, regulated fitness, and domain validity to named owners. Independent gates may stop or reverse release. |
| Project | Build a workload threat-and-control record, respond to an artifact-integrity requirement, and retire the workload with consumer notice, retention basis, credential shutdown, monitoring closure, and verified non-serving state. |
| Prerequisite | Basic application security, identity/access, dependency hygiene, logging, incident handling, data lifecycle concepts, and the package/operations evidence from `LC-05`–`LC-06`. |
| Narrative | Expose the false finish line of “production is running”: an integrity challenge and later retirement reveal continuous controls, authority, and evidence obligations. |

**Professional artifacts:** asset and trust-boundary inventory; ML threat model;
control implementation/test record; software/model bill of materials; access and
integrity evidence; residual-limitations packet; exception/approval route;
security incident runbook; periodic review; retirement decision; consumer,
retention, decommission, and verified-non-serving records.

**Dependencies and natural merge points:** spans evidence produced by every
earlier cluster and closes the lifecycle after `LC-06`. It naturally shares
artifact integrity with `LC-05` and incident response with `LC-06`, but formal
authorization must remain visibly outside the MLE at `BR-13`–`BR-17`.

**Shallow-treatment risk:** a security checklist, model card, compliance badge,
or endpoint deletion presented as sufficient assurance. **Duplication risk:**
teaching enterprise security architecture, privacy/legal interpretation,
governance policy, safety acceptance, or domain regulation as MLE-owned work.

**Context portability tests:**

- **Managed service:** shared-responsibility boundaries, provider controls, data
  location, identity, logs, export/deletion, and decommission proof must be made
  explicit; provider certification is not workload authorization.
- **Classical/statistical ML:** training-data poisoning, artifact substitution,
  sensitive features, endpoint abuse, dependency compromise, and retention
  remain material even for small models.
- **Deep learning:** large artifacts, opaque dependencies, pretraining supply
  chains, inversion/extraction, accelerators, and specialized safety evidence
  extend the same control-and-authority structure.
- **Physical/edge:** device tamper, signed updates, local secrets, disconnected
  logs, physical recovery, and fleet decommissioning extend workload evidence;
  safety/hardware authorities remain named.
- **Shared platform:** security/platform sets common policies and services; the
  MLE proves correct workload use, records residual limitations, and never
  self-approves an exception.

## `LC-08` — Cross-functional systems judgment and widening professional impact

**Why this is durable.** Current titles and seniority are inconsistent, but the
accepted responsibility center and advanced-depth evidence converge on a
portable progression: make one workload's evidence and handoffs dependable,
then widen to ambiguous interfaces, reusable technical standards, cross-team
architecture, initiative leadership, mentoring, and systemic learning without
absorbing adjacent professions. [`MLE-CLM-001`, `MLE-CLM-005`,
`MLE-CLM-006`, `MLE-CLM-007`, `MLE-CLM-018`, `MLE-CLM-021`,
`MLE-CLM-022`; `BR-01`–`BR-17`; `S-01`–`S-10`]

| Depth dimension | Required depth record |
|---|---|
| Conceptual | Distinguish role title from accountability, collaboration from authority transfer, one-workload optimization from shared-system policy, local symptom from systemic cause, seniority from years, and technical leadership from management or novelty. |
| Practical | Build responsibility maps; negotiate interfaces; communicate evidence and limitations; review dossiers; surface hidden dependencies; route shared-system problems; mentor through artifacts and incident learning; block incomplete releases. |
| Architecture | Reason across workload, application, data, experiment, platform, serving, observability, security, evaluation, product, and domain boundaries while identifying the owner and change radius of each decision. |
| Implementation | Create reusable templates, validators, test patterns, evidence schemas, review checklists, and compatibility conventions for workload teams without unilaterally changing shared control planes or policy. |
| Operational | Lead cross-layer diagnosis, learning reviews, migration planning, and evidence-standard improvements; separate workload remediation from platform/fleet/policy escalation. |
| Security/authority | Make decision rights, stop-ship voices, incident roles, exceptions, and approvals explicit; prevent organizational convenience or seniority from erasing independent authority. |
| Project | Conduct a cross-functional qualification review spanning all clusters, resolve conflicting evidence and ownership, propose one reusable workload standard, and route one systemic platform/policy issue to its owner. |
| Prerequisite | Credible working depth in `LC-01`–`LC-07`, technical writing, review and facilitation skills, and experience reasoning from evidence under ambiguity. |
| Narrative | Revisit the same workload at increasing radius: first as an implementer, then an independent owner, then a cross-team technical leader whose success is better decisions and systems—not owning every decision. |

**Professional artifacts:** RACI/decision-rights map; interface and dependency
map; evidence review packet; tradeoff memo; architecture decision record;
initiative plan; reusable qualification pattern; review checklist; mentoring and
incident-learning record; escalation proposal.

**Dependencies and natural merge points:** synthesizes all seven technical
clusters and makes their handoffs executable. It may be embedded through every
cluster as practice and assessed through an integrative project, but must remain
visible enough to test claim `MLE-CLM-022`. Its reusable outputs stop at the
workload standard boundary; platform, MLOps, SRE, security, evaluation,
governance, and domain owners retain their systems and formal authorities.

**Shallow-treatment risk:** career advice, stakeholder platitudes, or title
ladders detached from evidence and artifacts. **Duplication risk:** turning
leadership into generalized management content or using “staff” to justify an
MLE takeover of any `BR-01`–`BR-17` decision center.

**Context portability tests:**

- **Managed service:** mature judgment includes making provider/customer
  responsibility, portability, evidence gaps, and exit paths legible.
- **Classical/statistical ML:** systems impact and cross-functional consequence
  can be high even when the model is simple; algorithm novelty is irrelevant to
  seniority.
- **Deep learning:** scale and specialization increase dependency and review
  radius but do not turn the MLE into research, LLM, safety, or platform
  authority.
- **Physical/edge:** hardware, field operations, safety, and domain interfaces
  widen collaboration; explicit authority becomes more important.
- **Shared platform:** staff depth includes distinguishing a reusable workload
  standard from a platform capability, then negotiating rather than silently
  seizing the platform roadmap.

## Cross-cluster dependencies and merge discipline

The durable evidence flow is a revisable graph, not an implied publication
sequence:

`LC-01` defines the task and authorities; `LC-02` binds inputs and feedback;
`LC-03` identifies candidate evidence; `LC-04` qualifies behavior; `LC-05`
binds executable artifact and dossier; `LC-06` qualifies and diagnoses live
operation; `LC-07` protects and closes the lifecycle. `LC-08` crosses all seven
to make interfaces, ownership, review, and widening impact explicit. Any live
change can reopen an upstream contract rather than merely moving forward.

Natural merge points for later comparison are:

- `LC-01` + `LC-04`: consequence-aware acceptance and disposition, provided
  product/domain/evaluation authority remains visible.
- `LC-02` + `LC-03`: immutable data identities inside reproducible runs,
  provided data conformance is not reduced to tracking metadata.
- `LC-03` + `LC-04`: candidate comparison and qualification, provided
  experiment success is not equated with release approval.
- `LC-05` + `LC-06`: deployable identity, staged release, and rollback,
  provided packaging does not replace an operating envelope.
- `LC-06` + `LC-07`: incident, control, recovery, and retirement evidence,
  provided security and formal authorization remain independent.
- `LC-08` across any cluster: systems judgment can be practiced within the
  technical work, provided its cross-boundary artifacts and advanced-depth
  expectations remain assessable.

The following merges are unsafe because they erase a durable decision:

- task framing into model selection (`LC-01` disappears);
- data contract into experiment tracking (`LC-02` disappears);
- evaluation into a metric function (`LC-04` disappears);
- release evidence into a registry/container (`LC-05` disappears);
- monitoring into a dashboard or automatic retrain trigger (`LC-06`
  disappears);
- security/retirement into launch paperwork (`LC-07` disappears); or
- cross-functional authority into generic “soft skills” (`LC-08` disappears).

## Accepted-claim coverage audit

| Accepted claim | Primary cluster(s) | Why coverage is not incidental |
|---|---|---|
| `MLE-CLM-001` | `LC-08` | Title legitimacy is bounded by accountability and volatility, not used as curriculum structure. |
| `MLE-CLM-002` | `LC-01`, `LC-05`, `LC-06` | Problem-to-production accountability appears across contract, integration, and operation. |
| `MLE-CLM-003` | `LC-05`, `LC-06` | Production delivery is an evidence-bearing package operated inside a measured envelope. |
| `MLE-CLM-004` | `LC-02`, `LC-03`, `LC-06` | Data, experiment, evaluation feedback, and retraining mechanisms remain traceable across change. |
| `MLE-CLM-005` | `LC-05`, `LC-08` | Workload architecture remains portable without absorbing generalized platform engineering. |
| `MLE-CLM-006` | `LC-01`, `LC-08` | Stakeholder evidence becomes explicit contracts, handoffs, and decision rights. |
| `MLE-CLM-007` | `LC-08` | Competency depth is based on decision radius and evidence, not employer years or title. |
| `MLE-CLM-008` | `LC-01`, `LC-03` | Task contract and simple retained baseline precede candidate complexity. |
| `MLE-CLM-009` | `LC-02` | Executable data/feature expectations and limitations are the cluster center. |
| `MLE-CLM-010` | `LC-03` | Complete run identity and bounded reproducibility are the cluster center. |
| `MLE-CLM-011` | `LC-04` | Representative, segment-aware, limitation-bearing disposition is the cluster center. |
| `MLE-CLM-012` | `LC-05` | Executable artifact and evidence travel as one versioned release unit. |
| `MLE-CLM-013` | `LC-06` | Capacity, staged release, monitoring, rollback, and controlled requalification are one operating decision loop. |
| `MLE-CLM-014` | `LC-07` | Continuous security records, authority, rollback state, and retirement define the lifecycle obligation. |
| `MLE-CLM-015` | `LC-01`, `LC-05` | Workload-specific technical qualification and integration anchor the retained center. |
| `MLE-CLM-016` | `LC-04`, `LC-06` | Multi-layer readiness and live failure evidence prevent offline/code-test shortcuts. |
| `MLE-CLM-017` | `LC-02`, `LC-03`, `LC-05`, `LC-06` | Hidden dependencies and combined changes are traced across data, run, interface, and operation. |
| `MLE-CLM-018` | `LC-02`, `LC-05`–`LC-08` | Shared data/platform/MLOps/SRE/security capability is consumed without authority absorption. |
| `MLE-CLM-019` | `LC-04`, `LC-07` | Independent evaluation/safety gates can stop or reverse the workload lifecycle. |
| `MLE-CLM-020` | `LC-01`, `LC-04`, `LC-07`, `LC-08` | Technical evidence and implemented controls remain distinct from formal authorization. |
| `MLE-CLM-021` | `LC-05`, `LC-08` | Adjacent AI/research/software centers remain distinct despite shared implementation. |
| `MLE-CLM-022` | `LC-08` | Advanced depth is directly assessed through radius, ambiguity, architecture, initiative, mentorship, and standards. |

Coverage result: **22/22 accepted claims have explicit primary-cluster depth.**

## Adjacent-role row coverage audit

| Boundary row | Retained touchpoint | Scope discipline exercised |
|---|---|---|
| `BR-01` Data Scientist | `LC-03`, `LC-04`, `LC-08` | Consume defensible analysis/method evidence; retain workload qualification; do not seize statistical sign-off. |
| `BR-02` Data Engineer | `LC-02`, `LC-08` | Own model-facing consumption/conformance; do not own enterprise source truth, retention, or shared pipelines. |
| `BR-03` Applied Scientist | `LC-03`–`LC-05`, `LC-08` | Convert method to operable candidate; retain scientific-claim authority elsewhere. |
| `BR-04` AI Research Engineer | `LC-03`, `LC-05`, `LC-08` | Prefer production-supportable implementation without absorbing research agenda or claim authority. |
| `BR-05` AI Evaluation Engineer | `LC-04`, `LC-07`, `LC-08` | Implement hooks/remediation while independent evaluation retains suite adequacy and stop-ship voice. |
| `BR-06` Applied AI Engineer | `LC-05`, `LC-08` | Qualify the general learning workload; do not own user-experience composition and fallback acceptance. |
| `BR-07` LLM Engineer | `LC-04`, `LC-05`, `LC-08` | Apply the general lifecycle where relevant; do not duplicate LLM-specific behavior intervention. |
| `BR-08` Agentic AI Engineer | `LC-05`, `LC-07`, `LC-08` | Qualify model component/release; do not own tool effects, state policy, or action permission. |
| `BR-09` MLOps Engineer | `LC-02`, `LC-03`, `LC-05`, `LC-06`, `LC-08` | Specify workload evidence and correct golden-path use; do not own shared lifecycle automation. |
| `BR-10` ML Platform/Infrastructure | `LC-02`, `LC-03`, `LC-05`, `LC-06`, `LC-08` | Supply compatibility, sizing, and signal requirements; do not own fleet/tenancy/runtime policy. |
| `BR-11` Software Engineer | `LC-05`, `LC-06`, `LC-08` | Add learned-behavior qualification inside interfaces; retain non-ML service architecture elsewhere. |
| `BR-12` Platform Engineer/SRE | `LC-06`, `LC-08` | Own model-specific diagnosis/remediation under shared incident command and fleet policy. |
| `BR-13` Product | `LC-01`, `LC-04`, `LC-08` | Convert approved outcome into evidence; do not own priority, user promise, or business acceptance. |
| `BR-14` Security | `LC-05`–`LC-08` | Implement/test workload controls; retain security policy, exceptions, incident authority, and sign-off elsewhere. |
| `BR-15` Safety | `LC-01`, `LC-04`, `LC-07`, `LC-08` | Engineer mitigation/monitoring; do not self-certify harm sufficiency or risk acceptance. |
| `BR-16` Privacy/AI Governance/Legal | `LC-01`, `LC-02`, `LC-07`, `LC-08` | Implement approved constraints and evidence; do not interpret law, waive policy, or authorize deployment. |
| `BR-17` Domain authorities | `LC-01`, `LC-02`, `LC-04`, `LC-07`, `LC-08` | Encode and test domain bounds; do not substitute technical scores for real-world validity or sign-off. |

Coverage result: **17/17 accepted adjacent-role rows have an explicit retained
touchpoint and authority boundary.**

## Accepted-scenario coverage audit

| Scenario | Cluster stress path | Required learning outcome |
|---|---|---|
| `S-01` ranker improves average but harms a protected high-consequence segment | `LC-01` → `LC-04` → `LC-07`/`LC-08` | Diagnose and requalify without letting the MLE redefine evaluation, product, or domain acceptance. [`MLE-CLM-011`, `MLE-CLM-019`, `MLE-CLM-020`] |
| `S-02` reusable feature platform needs online store and tenancy | `LC-02` → `LC-05`/`LC-06` → `LC-08` | Specify workload schema, freshness, skew, compatibility, and evidence while platform/data owners decide shared architecture. [`MLE-CLM-009`, `MLE-CLM-018`] |
| `S-03` training cannot reproduce bit-for-bit across hardware | `LC-03` → `LC-08` | Test and state a bounded claim; route shared runtime support to platform owners. [`MLE-CLM-010`] |
| `S-04` drift alert with delayed labels | `LC-02` → `LC-04` → `LC-06` | Investigate proxies and changes without automatic retraining/promotion; retain evaluation and domain threshold authority. [`MLE-CLM-013`, `MLE-CLM-019`, `MLE-CLM-020`] |
| `S-05` LLM feature changes prompt, retrieval, and behavior evaluation | `LC-04` → `LC-05`/`LC-06` → `LC-08` | Integrate package, serving, monitoring, and rollback while LLM Engineering owns its specialized intervention. [`MLE-CLM-018`, `MLE-CLM-021`] |
| `S-06` agent may initiate a refund | `LC-01` → `LC-05` → `LC-07`/`LC-08` | Qualify model evidence without granting tool/payment authority or owning effect recovery. [`MLE-CLM-020`, `MLE-CLM-021`] |
| `S-07` serving cluster breaches fleet SLO during rollout | `LC-05` → `LC-06` → `LC-08` | Exercise workload rollback, degradation, compatibility, and requalification under SRE/platform incident command. [`MLE-CLM-013`, `MLE-CLM-018`] |
| `S-08` medical model's intended-use population changes | `LC-01`/`LC-02` → `LC-04` → `LC-07` | Record invalidated bounds and block technical disposition while formal authorities decide validity and permissibility. [`MLE-CLM-008`, `MLE-CLM-019`, `MLE-CLM-020`] |
| `S-09` novel architecture has promising offline results | `LC-03` → `LC-04` → `LC-05`/`LC-06` | Retain baseline and build package, qualification, envelope, staged release, and recovery while scientist owns research claim. [`MLE-CLM-011`, `MLE-CLM-012`, `MLE-CLM-013`, `MLE-CLM-021`] |
| `S-10` security requires artifact integrity and restricted access | `LC-05` → `LC-07` → `LC-08` | Implement signing/access/inventory/monitoring evidence while security owns requirements and exception acceptance. [`MLE-CLM-014`, `MLE-CLM-020`] |

Coverage result: **10/10 accepted scenarios exercise explicit cluster paths and
preserve the accepted decision boundary.**

## Five-context anti-overfit result

Every cluster passes all five required context tests:

| Context | Clusters tested | What changes | What must remain invariant |
|---|---|---|---|
| Managed service | `LC-01`–`LC-08` | Provider/customer boundary, product mechanisms, control visibility, portability, and exit path | Workload contract, evidence completeness, local decision owners, qualification, recovery, and residual limitations |
| Classical/statistical ML | `LC-01`–`LC-08` | Model mechanics, resource scale, diagnostics, and sometimes determinism | Lifecycle evidence, representative qualification, interfaces, operability, security, authority, and retirement |
| Deep learning | `LC-01`–`LC-08` | Artifact/data scale, accelerator/runtime constraints, nondeterminism, specialized behavior tests, and supply chain | The workload-specific decision center and its dossier; research/LLM/safety/platform authority remains separate |
| Physical/edge | `LC-01`–`LC-08` | Hardware/firmware identity, environmental conditions, energy/thermal limits, connectivity, field updates, and physical safety | Technical qualification inside explicit domain, hardware, fleet, and safety boundaries |
| Shared platform | `LC-01`–`LC-08` | Reuse of common data, experiment, registry, serving, observability, security, and deployment services | The MLE owns one workload's evidence and correct use; shared service, fleet, tenancy, policy, and incident authority stay elsewhere |

No cluster depends on one context for its existence. No context is proposed as a
separate cluster merely because its tools differ. The portability failure to
avoid is using deep learning or a managed cloud pipeline as the default story,
then treating classical, embedded, or shared-platform work as exceptions. The
durable spine is the versioned workload and qualification dossier across all
five contexts. [`MLE-CLM-005`, `MLE-CLM-010`, `MLE-CLM-013`,
`MLE-CLM-015`, `MLE-CLM-018`]

## Risks for the next comparison gate

- **False separation by lifecycle stage:** the eight depth records are
  distinct decisions, not evidence that each deserves an independent
  publication unit.
- **False compression by artifact:** one dossier connects the clusters but does
  not eliminate their different reasoning, practice, and failure modes.
- **Framework inflation:** tool-specific setup must remain replaceable examples;
  no framework, cloud, registry, orchestrator, or model family justifies extra
  scope. [`MLE-CLM-005`]
- **Adjacent-role leakage:** evaluation, MLOps, platform, SRE, security, safety,
  privacy, governance, legal, product, research, LLM, agentic, and domain depth
  must stop at the recorded decision boundary. [`MLE-CLM-018`,
  `MLE-CLM-019`, `MLE-CLM-020`, `MLE-CLM-021`]
- **Artifact theater:** task briefs, tracked runs, dashboards, registry entries,
  model cards, signatures, and checklists are insufficient unless their
  evidence changes a named decision.
- **Seniority inflation:** advanced depth must widen ambiguity, consequence,
  architecture, initiative, mentoring, and standards—not merely add algorithms
  or rename the reader “staff.” [`MLE-CLM-022`]
- **Context bias:** managed-service and deep-learning examples can dominate
  visuals and exercises; later structure must preserve comparable reasoning in
  classical/statistical and physical/edge cases while respecting shared-
  platform boundaries.

## Gate handoff

This analysis supplies eight independently described responsibility families,
their full depth dimensions, professional artifacts, prerequisites,
dependencies, merge points, shallow/duplication risks, and context portability
tests. It deliberately leaves open whether later comparison should combine or
separate them. Any subsequent structure proposal must preserve 22/22 claim,
17/17 boundary-row, and 10/10 scenario coverage and must explain any merge using
the decision-preservation tests above.
