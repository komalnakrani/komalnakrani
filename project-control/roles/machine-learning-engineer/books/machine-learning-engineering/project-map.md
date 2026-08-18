# Benchline Inspection Dossier — Project and Companion Map

> Architecture projection for *Machine Learning Engineering: From Task Contract to Operating Evidence* by Komal Nakrani.
> Contract version: `1.0.0` (`mle-phase-05-architecture/v1`). Canonical inputs: `architecture.md` SHA-256 `5f41bfc624f7085b8e3b2a12d6c2c3d52d6c21659eb5140d94cfa29b0edce630`; `architecture.json` SHA-256 `bb2b6fe1137b6b56ff4729d0131c1b9496804bcd3a37e07a92361f4af4da972f`.

## Truth and scope boundary

`CASE-01` is the **FICTIONAL SYNTHETIC CAPSTONE** named Benchline Inspection Dossier. Every datum, device condition, label, metric, incident, decision, and outcome in it is constructed. Primary sources may support doctrine in Phase 06; they do not make Benchline real. The case makes no production, industrial, safety, performance, commercial, or business claim.

Benchline is a bounded physical/edge inspection workload used to carry one evidence dossier across the entire lifecycle. It begins before Chapter 1 in `UNORIENTED`, produces exactly one milestone per chapter (`BL-00` through `BL-20`), proves non-serving state at `BL-19`, and ends only when the complete dossier is `REVIEWED` at `BL-20`. `PORT-EDGE` is the default narrative case, not a prerequisite, privileged curriculum, or richer learning path. The other four ports must satisfy the same evidence interface.

## Record and lineage contract

Every milestone record below binds: one chapter; an incoming and outgoing dossier state; explicit consumes, produces, and supersedes edges; one dossier artifact version; evidence state; an MLE workload-evidence owner; external authority; limitation; failure injection; recovery or requalification behavior; companion command intent; and one five-port transfer invariant.

- `consumes` identifies the immediately prior milestone/version plus named chapter prerequisites.
- `produces` identifies the chapter milestone and new dossier version.
- `supersedes` is a lineage edge, never deletion: prior evidence remains addressable and the new record states why it replaced the old version.
- A same-state chapter still produces a material evidence delta; it does not claim a lifecycle transition.
- `HOLD` and `REJECT` are dispositions, not release shortcuts.
- Purpose, data, runtime, use, or authority change invalidates named prior evidence and reopens at the legal target below.

## Legal dossier states

Initial pre-book state: `UNORIENTED`.

| From | To | Required evidence |
|---|---|---|
| `UNORIENTED` | `ORIENTED` | BL-00 |
| `ORIENTED` | `CONTRACTED` | BL-01 |
| `CONTRACTED` | `ADMISSIBLE` | BL-03 through BL-05 |
| `ADMISSIBLE` | `RECONSTRUCTIBLE` | BL-06 and BL-07 |
| `RECONSTRUCTIBLE` | `CANDIDATE` | BL-08 |
| `CANDIDATE` | `TECHNICALLY-QUALIFIED` | BL-09 through BL-11 PASS |
| `CANDIDATE` | `HOLD` | BL-11 HOLD with named repair |
| `CANDIDATE` | `REJECT` | BL-11 REJECT with reason |
| `HOLD` | `CANDIDATE` | Named repair, new evidence, and new candidate identity |
| `REJECT` | `CANDIDATE` | New task/candidate basis, new evidence, and requalification |
| `TECHNICALLY-QUALIFIED` | `RELEASABLE` | BL-12 through BL-14 |
| `RELEASABLE` | `OPERABLE` | BL-15 |
| `OPERABLE` | `OBSERVED` | BL-16 |
| `OBSERVED` | `REQUALIFIED` | BL-17 repaired candidate passes qualification |
| `OBSERVED` | `ROLLED-BACK` | BL-17 previous-good restoration |
| `REQUALIFIED` | `CONTROLLED` | BL-18 |
| `ROLLED-BACK` | `CONTROLLED` | BL-18 |
| `CONTROLLED` | `RETIRED` | BL-19 |
| `RETIRED` | `REVIEWED` | BL-20 |

### Explicitly forbidden transitions

- `HOLD->RELEASABLE` is blocked. A named repair, new evidence, a new candidate or task basis as applicable, and requalification are required.
- `REJECT->RELEASABLE` is blocked. A named repair, new evidence, a new candidate or task basis as applicable, and requalification are required.

### Reopen triggers

| Change | Legal reopen target | Prior evidence invalidated |
|---|---|---|
| purpose or intended use | `CONTRACTED` | task; population; acceptance; qualification; release |
| data, labels, features, or population | `ADMISSIBLE` | input conformance; experiment; qualification; release |
| runtime, dependencies, interface, or serving envelope | `RECONSTRUCTIBLE` | run identity; package; compatibility; operating evidence |
| authority, constraint, or permitted use | `CONTRACTED` | approvals; controls; technical disposition; release |

## Deterministic companion contract

Offline, provider-neutral, deterministic over fixed synthetic fixtures, pinned dependencies, stable IDs/hashes, no credentials, network, paid service, or real external effect; nondeterminism is measured and recorded rather than denied.

The companion is local, offline, provider-neutral, and deterministic over fixed synthetic fixtures. It uses stable artifact IDs and content hashes, pinned dependencies, and recorded execution context. It requires no credential, network connection, paid service, or real external effect. It never claims universal bit-for-bit determinism across hardware, runtimes, libraries, or providers; divergence is measured, bounded, and recorded.

Logical layout: `contracts`, `fixtures`, `core`, `checks`, `runs/expected`, `reports`, `ports`, `dossier-index`.

Common port interface: `task`, `population`, `incumbent`, `input and label identities`, `candidate descriptor`, `execution context`, `operating envelope`, `authority map`, `perturbation`, `expected evidence shape`.

Each chapter command is an intent contract only in Phase 05. No companion implementation or fixture is created here. An invocation reads fixed synthetic input, writes only local disposable output, emits stable identities/hashes and an evidence-state result, and cannot operate a real system.

## Five replaceable context ports

All ports implement the same fields: invariant decision, variable mechanism, required artifacts/evidence, external authority, failure injection, limitation, and transfer result.

### PORT-MANAGED — Managed service

- Invariant decision: Same workload contract, evidence schema, owner separation, and gate semantics.
- Variable mechanism: Provider-managed training, registry, serving, and observation.
- Required artifacts/evidence: Exportable identities, limits, configuration, evaluation, release, observation, and recovery records.
- External authority: Provider/platform plus all product/domain/formal owners remain external.
- Failure injection: Unavailable export or opaque provider state.
- Limitation: Provider claims are not workload qualification.
- Transfer result: Pass only when the dossier can move without provider-specific meaning loss.

### PORT-CLASSICAL — Classical/statistical

- Invariant decision: Same workload contract, evidence schema, owner separation, and gate semantics.
- Variable mechanism: Local feature transformation and statistical/classical estimator.
- Required artifacts/evidence: Feature identities, bounded run, calibrated/segment evidence where applicable, package, envelope, recovery.
- External authority: Data, evaluation, product/domain, and formal owners remain external.
- Failure injection: Feature order or preprocessing mismatch.
- Limitation: Simplicity does not remove lifecycle evidence.
- Transfer result: Pass when the complete dossier remains equivalent without deep-learning assumptions.

### PORT-DEEP — Deep learning

- Invariant decision: Same workload contract, evidence schema, owner separation, and gate semantics.
- Variable mechanism: Parameterized training, accelerator context, checkpoint, and tensor-serving path.
- Required artifacts/evidence: Data/run/checkpoint/tokenizer-or-preprocessor identities, bounded reproducibility, evaluation, envelope, recovery.
- External authority: Research, evaluation, platform, and formal owners remain external.
- Failure injection: Wrong checkpoint, preprocessing, or hardware-context identity.
- Limitation: Model scale and benchmark novelty do not replace evidence.
- Transfer result: Pass when deep mechanics remain a port rather than the curriculum spine.

### PORT-EDGE — Physical/edge

- Invariant decision: Same workload contract, evidence schema, owner separation, and gate semantics.
- Variable mechanism: Benchline sensor/image input, constrained runtime, device package, and delayed feedback.
- Required artifacts/evidence: Sensor/data/label identity, edge package, measured envelope, rollback, controls, retirement.
- External authority: Hardware, operations, domain, safety, security, platform, and product owners remain external.
- Failure injection: Sensor shift, resource pressure, or stale device package.
- Limitation: Benchline is fictional and cannot imply real industrial performance or safety.
- Transfer result: Pass only when edge detail does not become a prerequisite for other ports.

### PORT-SHARED — Shared platform

- Invariant decision: Same workload contract, evidence schema, owner separation, and gate semantics.
- Variable mechanism: Multi-tenant shared features, training, registry, serving, and observability.
- Required artifacts/evidence: Tenant/workload identity, compatibility, resource envelope, control use, recovery, and owner routes.
- External authority: Platform/SRE/security own shared systems and fleet decisions.
- Failure injection: Tenant collision, shared-runtime upgrade, or fleet SLO pressure.
- Limitation: Workload evidence cannot claim platform-wide assurance.
- Transfer result: Pass when the MLE contract uses shared capabilities without absorbing platform ownership.

## Chapter-by-chapter dossier progression

All versions are immutable dossier snapshots. `benchline-dossier@1.0.0` is a reviewable record, not a production assurance claim.

### BL-00 — Chapter 1: The MLE Decision Center

- Part: `PART-01`
- State: `UNORIENTED` → `ORIENTED`
- Consumes: Fictional `CASE-01@1.0.0` brief and pre-book `UNORIENTED` state
- Produces: `BL-00@1.0.0` named “Workload orientation charter” and `benchline-dossier@0.1.0`.
- Supersedes: None; this is the first dossier snapshot.
- Artifact version: `benchline-dossier@0.1.0`
- Evidence state: `ORIENTED`; the evidence record is “Workload orientation charter” and its acceptance evidence is “Classify an ambiguous request, artifact, owner, and state without using title-based shortcuts.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Locate the workload-specific MLE decision inside the full lifecycle and authority map.”
- External authority: Product and domain authorities own purpose; named specialists own formal gates.
- Authority limitation: The MLE identifies and supplies evidence but does not absorb adjacent authority.
- Failure injection: A team treats a trained artifact and an org-chart title as sufficient ownership evidence.
- Recovery/requalification: Remain `UNORIENTED`; repair the orientation charter and rerun `inspect-orientation`.
- Companion command intent: `inspect-orientation` — Create immutable case index, evidence-state enum, owner registry, and canonical IDs.
- Five-port transfer rule: Every port exposes the same decision center, evidence state, and external authority map.
- Transfer proof requirement: Run the chapter’s `LC-08`, `LC-01` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-01 — Chapter 2: Contract the Task and Decision Rights

- Part: `PART-01`
- State: `ORIENTED` → `CONTRACTED`
- Consumes: `BL-00@1.0.0`, `benchline-dossier@0.1.0`, and prerequisite artifacts `BL-00`
- Produces: `BL-01@1.0.0` named “Task and authority contract” and `benchline-dossier@0.2.0`.
- Supersedes: `benchline-dossier@0.1.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.2.0`
- Evidence state: `CONTRACTED`; the evidence record is “Task and authority contract” and its acceptance evidence is “Repair a task contract that lacks an owner, exclusion, or NO-ML branch.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Convert an approved purpose into a bounded task contract with explicit decision owners and a NO-ML or HOLD path.”
- External authority: Product owns purpose and priority; domain and formal authorities own validity and permissibility.
- Authority limitation: The MLE translates an approved purpose into technical evidence requirements but cannot authorize it.
- Failure injection: A technically feasible model is proposed without an authorized purpose, population, or risk owner.
- Recovery/requalification: Remain at `ORIENTED` (or the last valid branch); repair the named evidence, issue a new artifact version, and rerun `validate-task-contract` before any legal advance.
- Companion command intent: `validate-task-contract` — Validate intended and excluded use, population, decision, owner, constraints, and missing-owner failures.
- Five-port transfer rule: Mechanisms vary; task, population, incumbent, consequence, owner, and exit semantics do not.
- Transfer proof requirement: Run the chapter’s `LC-01`, `LC-08` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-02 — Chapter 3: Retain the Incumbent and Name Consequences

- Part: `PART-01`
- State: `CONTRACTED` → `CONTRACTED`
- Consumes: `BL-01@1.0.0`, `benchline-dossier@0.2.0`, and prerequisite artifacts `BL-01`
- Produces: `BL-02@1.0.0` named “Incumbent and consequence record” and `benchline-dossier@0.3.0`.
- Supersedes: `benchline-dossier@0.2.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.3.0`
- Evidence state: `CONTRACTED`; the evidence record is “Incumbent and consequence record” and its acceptance evidence is “Reject an aggregate improvement that violates a named consequence threshold.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Bind a measurable incumbent, consequence model, segment obligations, and acceptance target before candidate work.”
- External authority: Product and domain owners accept the consequence model; evaluation owns independent gate adequacy.
- Authority limitation: The MLE implements and measures the incumbent but does not set business or domain tolerance alone.
- Failure injection: A new model is called better using a metric that was never tied to the incumbent or consequence.
- Recovery/requalification: Remain at `CONTRACTED` (or the last valid branch); repair the named evidence, issue a new artifact version, and rerun `run-incumbent` before any legal advance.
- Companion command intent: `run-incumbent` — Execute deterministic incumbent and acceptance-matrix checks.
- Five-port transfer rule: Every port retains a runnable incumbent and the same consequence-linked decision thresholds.
- Transfer proof requirement: Run the chapter’s `LC-01`, `LC-03` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-03 — Chapter 4: Make Data and Labels Contractual

- Part: `PART-02`
- State: `CONTRACTED` → `CONTRACTED`
- Consumes: `BL-02@1.0.0`, `benchline-dossier@0.3.0`, and prerequisite artifacts `BL-02`
- Produces: `BL-03@1.0.0` named “Dataset and label contract” and `benchline-dossier@0.4.0`.
- Supersedes: `benchline-dossier@0.3.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.4.0`
- Evidence state: `CONTRACTED`; the evidence record is “Dataset and label contract” and its acceptance evidence is “Diagnose a fixture whose schema passes but provenance or label meaning is invalid.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership.”
- External authority: Data owners retain source truth, access, retention, and shared pipeline authority; domain owners retain label validity.
- Authority limitation: The MLE owns workload-facing contracts and conformance, not the enterprise data estate or legal basis.
- Failure injection: A clean schema hides invalid provenance, label meaning, retention, or population use.
- Recovery/requalification: Remain at `CONTRACTED` (or the last valid branch); repair the named evidence, issue a new artifact version, and rerun `check-data-contract` before any legal advance.
- Companion command intent: `check-data-contract` — Validate schema, domains, label semantics, provenance, access, retention, and exception fixtures.
- Five-port transfer rule: Every port binds exact input and label identities even when storage and feature mechanisms differ.
- Transfer proof requirement: Run the chapter’s `LC-02`, `LC-08` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-04 — Chapter 5: Trace Features, Transformations, and Feedback

- Part: `PART-02`
- State: `CONTRACTED` → `CONTRACTED`
- Consumes: `BL-03@1.0.0`, `benchline-dossier@0.4.0`, and prerequisite artifacts `BL-03`
- Produces: `BL-04@1.0.0` named “Transformation and feedback graph” and `benchline-dossier@0.5.0`.
- Supersedes: `benchline-dossier@0.4.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.5.0`
- Evidence state: `CONTRACTED`; the evidence record is “Transformation and feedback graph” and its acceptance evidence is “Find a hidden dependency in a transformation/feedback graph and route its owner.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Bind feature identity, transformations, feedback arrival, and source/consumer lineage without owning shared data architecture.”
- External authority: Data/platform owners retain shared sources and services; consumers own their product behavior.
- Authority limitation: The MLE specifies and tests workload transformations, not enterprise data-platform topology.
- Failure injection: An individually correct transformation creates hidden skew or feedback through an undeclared consumer.
- Recovery/requalification: Remain at `CONTRACTED` (or the last valid branch); repair the named evidence, issue a new artifact version, and rerun `trace-transformations` before any legal advance.
- Companion command intent: `trace-transformations` — Hash transformation outputs and trace source, feature, consumer, and label-arrival identities.
- Five-port transfer rule: Each port exposes the same transformation and feedback evidence even when feature computation moves.
- Transfer proof requirement: Run the chapter’s `LC-02`, `LC-05` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-05 — Chapter 6: Split Without Leakage and Test Train-Serve Conformance

- Part: `PART-02`
- State: `CONTRACTED` → `ADMISSIBLE`
- Consumes: `BL-04@1.0.0`, `benchline-dossier@0.5.0`, and prerequisite artifacts `BL-03`, `BL-04`
- Produces: `BL-05@1.0.0` named “Split and conformance evidence” and `benchline-dossier@0.6.0`.
- Supersedes: `benchline-dossier@0.5.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.6.0`
- Evidence state: `ADMISSIBLE`; the evidence record is “Split and conformance evidence” and its acceptance evidence is “Repair a temporal/group leak and explain the strongest remaining limitation.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Choose population-aware splits and prove that training and serving transformations conform.”
- External authority: Domain/evaluation owners judge representativeness; platform/data owners retain shared runtime/source authority.
- Authority limitation: The MLE designs workload splits and conformance tests but cannot self-certify population validity.
- Failure injection: A high offline result depends on future information or a serving path that computes different inputs.
- Recovery/requalification: Remain at `CONTRACTED` (or the last valid branch); repair the named evidence, issue a new artifact version, and rerun `audit-splits` before any legal advance.
- Companion command intent: `audit-splits` — Run temporal, group, population, leakage, identity, and train-serve conformance failures.
- Five-port transfer rule: All ports prove equivalent split identity and train-serve semantics despite different execution mechanics.
- Transfer proof requirement: Run the chapter’s `LC-02`, `LC-03` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-06 — Chapter 7: Build Baselines and Controlled Comparisons

- Part: `PART-03`
- State: `ADMISSIBLE` → `ADMISSIBLE`
- Consumes: `BL-05@1.0.0`, `benchline-dossier@0.6.0`, and prerequisite artifacts `BL-05`
- Produces: `BL-06@1.0.0` named “Controlled comparison plan” and `benchline-dossier@0.7.0`.
- Supersedes: `benchline-dossier@0.6.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.7.0`
- Evidence state: `ADMISSIBLE`; the evidence record is “Controlled comparison plan” and its acceptance evidence is “Identify and repair a comparison whose apparent gain is confounded.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Design a controlled experiment that retains the incumbent and changes only the claimed intervention.”
- External authority: Applied Science owns scientific novelty claims; evaluation retains suite adequacy.
- Authority limitation: The MLE owns workload experiment integrity, not the research agenda or independent gate.
- Failure injection: A candidate wins because data, preprocessing, or evaluation changed with the model.
- Recovery/requalification: Remain at `ADMISSIBLE` (or the last valid branch); repair the named evidence, issue a new artifact version, and rerun `run-controlled-comparison` before any legal advance.
- Companion command intent: `run-controlled-comparison` — Execute baseline and candidate against frozen inputs with a confounding mutation.
- Five-port transfer rule: Every port preserves the intervention, control variables, incumbent, and evidence contract.
- Transfer proof requirement: Run the chapter’s `LC-03` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-07 — Chapter 8: Bind Run Identity and Bounded Reproducibility

- Part: `PART-03`
- State: `ADMISSIBLE` → `RECONSTRUCTIBLE`
- Consumes: `BL-06@1.0.0`, `benchline-dossier@0.7.0`, and prerequisite artifacts `BL-06`
- Produces: `BL-07@1.0.0` named “Run identity and reproducibility statement” and `benchline-dossier@0.8.0`.
- Supersedes: `benchline-dossier@0.7.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.8.0`
- Evidence state: `RECONSTRUCTIBLE`; the evidence record is “Run identity and reproducibility statement” and its acceptance evidence is “Write the strongest defensible reproducibility statement from two divergent runs.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Freeze code, data, dependency, parameter, seed, hardware, and execution-context identity and state the strongest supportable rerun claim.”
- External authority: Platform owners define supported runtime; research/evaluation owners retain claim-validity decisions.
- Authority limitation: The MLE records and tests bounded reconstruction, not universal determinism.
- Failure injection: A same-seed rerun diverges across hardware and the team upgrades local repeatability into an absolute claim.
- Recovery/requalification: Remain at `ADMISSIBLE` (or the last valid branch); repair the named evidence, issue a new artifact version, and rerun `verify-run-identity` before any legal advance.
- Companion command intent: `verify-run-identity` — Validate manifests/hashes and record a deliberate cross-context divergence fixture.
- Five-port transfer rule: All ports record comparable identities and context limits; none promises universal bit determinism.
- Transfer proof requirement: Run the chapter’s `LC-03`, `LC-08` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-08 — Chapter 9: Compare Candidates Without Losing the Baseline

- Part: `PART-03`
- State: `RECONSTRUCTIBLE` → `CANDIDATE`
- Consumes: `BL-07@1.0.0`, `benchline-dossier@0.8.0`, and prerequisite artifacts `BL-06`, `BL-07`
- Produces: `BL-08@1.0.0` named “Candidate-for-qualification record” and `benchline-dossier@0.9.0`.
- Supersedes: `benchline-dossier@0.8.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.9.0`
- Evidence state: `CANDIDATE`; the evidence record is “Candidate-for-qualification record” and its acceptance evidence is “Refuse a candidate record that omits its failed segment or incumbent.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage.”
- External authority: Evaluation retains qualification validity; Applied Science retains scientific-claim authority.
- Authority limitation: The MLE nominates a candidate but cannot self-certify the independent gate.
- Failure injection: Selection erases a failed segment, failed candidate, or baseline and is mistaken for qualification.
- Recovery/requalification: Remain at `RECONSTRUCTIBLE` (or the last valid branch); repair the named evidence, issue a new artifact version, and rerun `select-candidate` before any legal advance.
- Companion command intent: `select-candidate` — Produce deterministic candidate comparison with explicit limitations and retained baseline.
- Five-port transfer rule: Selection consumes the same comparison evidence and never implies release authority.
- Transfer proof requirement: Run the chapter’s `LC-03`, `LC-04`, `LC-05` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-09 — Chapter 10: Represent Populations and Consequential Segments

- Part: `PART-04`
- State: `CANDIDATE` → `CANDIDATE`
- Consumes: `BL-08@1.0.0`, `benchline-dossier@0.9.0`, and prerequisite artifacts `BL-08`
- Produces: `BL-09@1.0.0` named “Population and segment qualification suite” and `benchline-dossier@0.10.0`.
- Supersedes: `benchline-dossier@0.9.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.10.0`
- Evidence state: `CANDIDATE`; the evidence record is “Population and segment qualification suite” and its acceptance evidence is “Issue HOLD when aggregate gain conflicts with a critical segment threshold.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Build a representative suite and segment gate whose thresholds follow consequence rather than aggregate convenience.”
- External authority: Evaluation owns suite adequacy; product/domain/formal authorities own acceptable consequences.
- Authority limitation: The MLE implements, diagnoses, and remediates but cannot waive a consequential gate.
- Failure injection: The average improves while a protected or high-consequence segment regresses.
- Recovery/requalification: Remain at `CANDIDATE` (or the last valid branch); repair the named evidence, issue a new artifact version, and rerun `evaluate-segments` before any legal advance.
- Companion command intent: `evaluate-segments` — Calculate exact aggregate/segment metrics and enforce gate precedence.
- Five-port transfer rule: Every port uses the same named population, segment, consequence, and precedence contract.
- Transfer proof requirement: Run the chapter’s `LC-04` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-10 — Chapter 11: Treat Uncertainty, Calibration, and Failure as Evidence

- Part: `PART-04`
- State: `CANDIDATE` → `CANDIDATE`
- Consumes: `BL-09@1.0.0`, `benchline-dossier@0.10.0`, and prerequisite artifacts `BL-09`
- Produces: `BL-10@1.0.0` named “Uncertainty and failure evidence” and `benchline-dossier@0.11.0`.
- Supersedes: `benchline-dossier@0.10.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.11.0`
- Evidence state: `CANDIDATE`; the evidence record is “Uncertainty and failure evidence” and its acceptance evidence is “Repair an overconfident qualification note using sample and failure evidence.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence.”
- External authority: Evaluation owns method adequacy; domain/safety authorities judge consequential error sufficiency.
- Authority limitation: The MLE computes and diagnoses evidence but cannot turn method output into formal acceptance.
- Failure injection: A well-calibrated aggregate hides sparse evidence, an important error family, or an inapplicable probability interpretation.
- Recovery/requalification: Remain at `CANDIDATE` (or the last valid branch); repair the named evidence, issue a new artifact version, and rerun `analyze-uncertainty` before any legal advance.
- Companion command intent: `analyze-uncertainty` — Run exact calibration/resampling fixtures and mutation tests for missing limits.
- Five-port transfer rule: All ports expose uncertainty, failure, and limitation evidence appropriate to their model output.
- Transfer proof requirement: Run the chapter’s `LC-04` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-11 — Chapter 12: Issue a Technical Qualification Disposition

- Part: `PART-04`
- State: `CANDIDATE` → `TECHNICALLY-QUALIFIED|HOLD|REJECT`
- Consumes: `BL-10@1.0.0`, `benchline-dossier@0.11.0`, and prerequisite artifacts `BL-09`, `BL-10`
- Produces: `BL-11@1.0.0` named “Technical qualification disposition” and `benchline-dossier@0.12.0`.
- Supersedes: `benchline-dossier@0.11.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.12.0`
- Evidence state: `TECHNICALLY-QUALIFIED|HOLD|REJECT`; the evidence record is “Technical qualification disposition” and its acceptance evidence is “Produce a HOLD or REJECT record that names repair and requalification rather than hiding failure.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT.”
- External authority: Independent evaluation and relevant formal authorities retain stop-ship and acceptance decisions.
- Authority limitation: The MLE issues the workload technical disposition and routes external decisions; it cannot self-approve them.
- Failure injection: A technically strong candidate self-certifies evaluation or ignores a missing formal owner.
- Recovery/requalification: A `HOLD` names repair and returns through a new `CANDIDATE`; a `REJECT` requires a new task/candidate basis, new evidence, and requalification. Neither may advance directly to `RELEASABLE`.
- Companion command intent: `issue-disposition` — Gate engine rejects self-authorization, missing evidence, and illegal progress from HOLD or REJECT.
- Five-port transfer rule: All ports produce the same disposition fields and authority separation.
- Transfer proof requirement: Run the chapter’s `LC-04`, `LC-08` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-12 — Chapter 13: Release a Package Plus Evidence

- Part: `PART-05`
- State: `TECHNICALLY-QUALIFIED` → `TECHNICALLY-QUALIFIED`
- Consumes: `BL-11@1.0.0`, `benchline-dossier@0.12.0`, and prerequisite artifacts `BL-11:TECHNICALLY-QUALIFIED`
- Produces: `BL-12@1.0.0` named “Evidence-bound release package” and `benchline-dossier@0.13.0`.
- Supersedes: `benchline-dossier@0.12.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.13.0`
- Evidence state: `TECHNICALLY-QUALIFIED`; the evidence record is “Evidence-bound release package” and its acceptance evidence is “Reject a package whose executable hash resolves but evaluated bounds or recovery target do not.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Bind executable artifact, dependencies, interface, intended/excluded use, evaluated bounds, approvals, limitations, hashes, and previous-good target.”
- External authority: Security, platform, product, domain, and evaluation owners retain their formal approvals.
- Authority limitation: The MLE assembles and verifies the workload package but cannot fabricate or substitute approvals.
- Failure injection: A registry entry points to an artifact but loses evaluated bounds, limitations, or recovery identity.
- Recovery/requalification: Remain at `TECHNICALLY-QUALIFIED` (or the last valid branch); repair the named evidence, issue a new artifact version, and rerun `assemble-release` before any legal advance.
- Companion command intent: `assemble-release` — Build release manifest and verify artifact, dependency, interface, approval, limit, and recovery links.
- Five-port transfer rule: Every port accepts the same release evidence schema even when package mechanics differ.
- Transfer proof requirement: Run the chapter’s `LC-05` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-13 — Chapter 14: Bind Interfaces, Consumers, and Compatibility

- Part: `PART-05`
- State: `TECHNICALLY-QUALIFIED` → `TECHNICALLY-QUALIFIED`
- Consumes: `BL-12@1.0.0`, `benchline-dossier@0.13.0`, and prerequisite artifacts `BL-12`
- Produces: `BL-13@1.0.0` named “Consumer and compatibility record” and `benchline-dossier@0.14.0`.
- Supersedes: `benchline-dossier@0.13.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.14.0`
- Evidence state: `TECHNICALLY-QUALIFIED`; the evidence record is “Consumer and compatibility record” and its acceptance evidence is “Diagnose a migration that passes the new client but strands an undeclared old consumer.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Freeze request/response contracts, consumer identities, coexistence/migration evidence, and fallback ownership.”
- External authority: Consumer/application owners accept product compatibility; platform owners own shared interface support.
- Authority limitation: The MLE validates workload compatibility but does not own every consuming application or agent effect.
- Failure injection: An undeclared consumer or incompatible response shape turns a valid model into a failing product path.
- Recovery/requalification: Remain at `TECHNICALLY-QUALIFIED` (or the last valid branch); repair the named evidence, issue a new artifact version, and rerun `test-compatibility` before any legal advance.
- Companion command intent: `test-compatibility` — Run contract, backward-compatibility, coexistence, migration, and fallback-owner tests.
- Five-port transfer rule: All ports expose equivalent interface, consumer, migration, and fallback evidence.
- Transfer proof requirement: Run the chapter’s `LC-05` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-14 — Chapter 15: Preserve Integrity, Lineage, and Recovery Identity

- Part: `PART-05`
- State: `TECHNICALLY-QUALIFIED` → `RELEASABLE`
- Consumes: `BL-13@1.0.0`, `benchline-dossier@0.14.0`, and prerequisite artifacts `BL-12`, `BL-13`
- Produces: `BL-14@1.0.0` named “Integrity and recovery packet” and `benchline-dossier@0.15.0`.
- Supersedes: `benchline-dossier@0.14.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.15.0`
- Evidence state: `RELEASABLE`; the evidence record is “Integrity and recovery packet” and its acceptance evidence is “Trace and reject a package with correct metrics but a broken integrity or recovery chain.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Verify end-to-end lineage, inventory, integrity, access evidence, promotion packet, and previous-good recovery identity.”
- External authority: Security owns control requirements and exceptions; platform owners own shared promotion mechanisms.
- Authority limitation: The MLE implements/tests workload controls and supplies evidence without self-approving security exceptions.
- Failure injection: The candidate is valid but its dependency, signer, access, lineage, or previous-good identity is ambiguous.
- Recovery/requalification: Remain at `TECHNICALLY-QUALIFIED` (or the last valid branch); repair the named evidence, issue a new artifact version, and rerun `verify-integrity` before any legal advance.
- Companion command intent: `verify-integrity` — Mutate hashes, lineage, signer, access, inventory, and recovery identities and fail closed.
- Five-port transfer rule: All ports preserve verifiable lineage, integrity, access, and previous-good identity.
- Transfer proof requirement: Run the chapter’s `LC-05`, `LC-07` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-15 — Chapter 16: Measure the Serving Envelope

- Part: `PART-06`
- State: `RELEASABLE` → `OPERABLE`
- Consumes: `BL-14@1.0.0`, `benchline-dossier@0.15.0`, and prerequisite artifacts `BL-14`
- Produces: `BL-15@1.0.0` named “Measured serving envelope” and `benchline-dossier@0.16.0`.
- Supersedes: `benchline-dossier@0.15.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.16.0`
- Evidence state: `OPERABLE`; the evidence record is “Measured serving envelope” and its acceptance evidence is “Reject a serving claim that uses only mean latency or extrapolates beyond its fixture.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Measure representative demand, latency, error, capacity, staged exposure, bake/abort rules, and degraded mode for the workload.”
- External authority: Platform/SRE own fleet capacity, SLOs, and incident command; product owns exposure intent.
- Authority limitation: The MLE owns model-workload envelope evidence, not generalized fleet reliability.
- Failure injection: An average latency benchmark hides tail failure, resource saturation, or an absent degraded mode.
- Recovery/requalification: Remain at `RELEASABLE` (or the last valid branch); repair the named evidence, issue a new artifact version, and rerun `measure-envelope` before any legal advance.
- Companion command intent: `measure-envelope` — Replay synthetic request traces and assert envelope, staged exposure, bake, abort, and degraded-mode records.
- Five-port transfer rule: All ports report comparable demand, latency, error, capacity, failure, and limitation evidence.
- Transfer proof requirement: Run the chapter’s `LC-06` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-16 — Chapter 17: Observe Without Inventing Ground Truth

- Part: `PART-06`
- State: `OPERABLE` → `OBSERVED`
- Consumes: `BL-15@1.0.0`, `benchline-dossier@0.16.0`, and prerequisite artifacts `BL-15`
- Produces: `BL-16@1.0.0` named “Observation and decision-routing contract” and `benchline-dossier@0.17.0`.
- Supersedes: `benchline-dossier@0.16.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.17.0`
- Evidence state: `OBSERVED`; the evidence record is “Observation and decision-routing contract” and its acceptance evidence is “Convert a drift alert into an investigation record without claiming outcome degradation.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Bind observation signals, delayed labels, proxies, drift, segments, owners, and alert-to-decision routes without automatic truth claims.”
- External authority: Evaluation/domain owners define sufficient evidence; SRE/platform own shared telemetry and incident mechanisms.
- Authority limitation: The MLE diagnoses workload evidence but cannot invent ground truth or automate formal disposition.
- Failure injection: A proxy drift alert is treated as ground truth and triggers an unreviewed retrain or promotion.
- Recovery/requalification: Remain at `OPERABLE` (or the last valid branch); repair the named evidence, issue a new artifact version, and rerun `replay-observations` before any legal advance.
- Companion command intent: `replay-observations` — Replay fixed observation stream; preserve delayed outcomes; block auto-retrain and auto-promote.
- Five-port transfer rule: Every port exposes truth availability, proxy limits, segments, owners, and decision routes.
- Transfer proof requirement: Run the chapter’s `LC-06`, `LC-02`, `LC-04` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-17 — Chapter 18: Contain, Roll Back, Repair, and Requalify

- Part: `PART-06`
- State: `OBSERVED` → `REQUALIFIED|ROLLED-BACK`
- Consumes: `BL-16@1.0.0`, `benchline-dossier@0.17.0`, and prerequisite artifacts `BL-15`, `BL-16`
- Produces: `BL-17@1.0.0` named “Incident and requalification packet” and `benchline-dossier@0.18.0`.
- Supersedes: `benchline-dossier@0.17.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.18.0`
- Evidence state: `REQUALIFIED|ROLLED-BACK`; the evidence record is “Incident and requalification packet” and its acceptance evidence is “Reject a same-identity retrain and build a valid changed-evidence requalification packet.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair.”
- External authority: SRE owns incident command/fleet action; evaluation and formal authorities retain their gates.
- Authority limitation: The MLE owns model-specific diagnosis and repair evidence, not fleet command or risk acceptance.
- Failure injection: A retrained artifact silently replaces the release without a new identity, changed-evidence diff, or independent requalification.
- Recovery/requalification: Contain first; either restore the previous-good identity to `ROLLED-BACK` or bind a repaired candidate to new qualification evidence before `REQUALIFIED`.
- Companion command intent: `replay-incident` — Replay incident state machine; require command/decision split, containment, changed-evidence diff, new candidate, and requalification.
- Five-port transfer rule: All ports preserve incident authority, containment, changed evidence, recovery, and requalification semantics.
- Transfer proof requirement: Run the chapter’s `LC-06`, `LC-08`, `LC-04`, `LC-05` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-18 — Chapter 19: Trace Controls, Exceptions, and Formal Decisions

- Part: `PART-07`
- State: `REQUALIFIED|ROLLED-BACK` → `CONTROLLED`
- Consumes: `BL-17@1.0.0`, `benchline-dossier@0.18.0`, and prerequisite artifacts `BL-01`, `BL-03`, `BL-11`, `BL-14`, `BL-17`
- Produces: `BL-18@1.0.0` named “Control, exception, and formal-decision trace” and `benchline-dossier@0.19.0`.
- Supersedes: `benchline-dossier@0.18.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.19.0`
- Evidence state: `CONTROLLED`; the evidence record is “Control, exception, and formal-decision trace” and its acceptance evidence is “Trace an exception backward and fail it if its evidence or authority is absent.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Integrate workload-specific control tests, exceptions, residual limits, and formal decisions accumulated since the task contract.”
- External authority: Security, safety, privacy, governance, legal, product, domain, and evaluation owners retain formal decisions.
- Authority limitation: The MLE implements/tests workload controls and routes exceptions but cannot self-approve them.
- Failure injection: A final checklist masks missing earlier evidence, an unsigned exception, or an authority that never approved the decision.
- Recovery/requalification: Remain at `REQUALIFIED|ROLLED-BACK` (or the last valid branch); repair the named evidence, issue a new artifact version, and rerun `audit-controls` before any legal advance.
- Companion command intent: `audit-controls` — Run least-privilege, integrity, exception, owner, residual-limit, and unsigned/unapproved mutation checks.
- Five-port transfer rule: All ports preserve the same control evidence and external authority while implementation mechanics vary.
- Transfer proof requirement: Run the chapter’s `LC-07`, `LC-08` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-19 — Chapter 20: Retire the Workload and Prove Non-Serving State

- Part: `PART-07`
- State: `CONTROLLED` → `RETIRED`
- Consumes: `BL-18@1.0.0`, `benchline-dossier@0.19.0`, and prerequisite artifacts `BL-18`
- Produces: `BL-19@1.0.0` named “Retirement and non-serving proof” and `benchline-dossier@0.20.0`.
- Supersedes: `benchline-dossier@0.19.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@0.20.0`
- Evidence state: `RETIRED`; the evidence record is “Retirement and non-serving proof” and its acceptance evidence is “Find a residual serving path after nominal deletion and repair the retirement record.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Execute retirement across consumers, endpoints, credentials, monitoring, registry, retention, recovery, and archive, then prove no serving path remains.”
- External authority: Product/domain/formal authorities approve retirement and retention; platform/security owners execute shared shutdown controls.
- Authority limitation: The MLE verifies workload non-serving evidence but cannot set legal retention or shared-system policy.
- Failure injection: The endpoint is deleted while credentials, consumers, monitoring, fallback routes, or registry aliases can still serve the model.
- Recovery/requalification: Any live endpoint, alias, credential, monitor, consumer, or recovery path blocks `RETIRED`; remove or formally retain it and rerun `verify-retirement`.
- Companion command intent: `verify-retirement` — Decommission fixture state only and audit consumers, endpoints, credentials, monitors, registry aliases, retention, and recovery.
- Five-port transfer rule: Every port proves non-serving state across its own paths using the same terminal evidence semantics.
- Transfer proof requirement: Run the chapter’s `LC-07`, `LC-08` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

### BL-20 — Chapter 21: Review the Dossier and Raise the Standard

- Part: `PART-07`
- State: `RETIRED` → `REVIEWED`
- Consumes: `BL-19@1.0.0`, `benchline-dossier@0.20.0`, and prerequisite artifacts `BL-00`, `BL-01`, `BL-02`, `BL-03`, `BL-04`, `BL-05`, `BL-06`, `BL-07`, `BL-08`, `BL-09`, `BL-10`, `BL-11`, `BL-12`, `BL-13`, `BL-14`, `BL-15`, `BL-16`, `BL-17`, `BL-18`, `BL-19`
- Produces: `BL-20@1.0.0` named “Hostile-reviewed dossier and reusable standard” and `benchline-dossier@1.0.0`.
- Supersedes: `benchline-dossier@0.20.0`; the prior immutable snapshot remains addressable in the dossier index.
- Artifact version: `benchline-dossier@1.0.0`
- Evidence state: `REVIEWED`; the evidence record is “Hostile-reviewed dossier and reusable standard” and its acceptance evidence is “Hostile-review the full dossier, identify one local defect and one systemic issue, and route both correctly.”
- Workload-evidence owner: Machine Learning Engineer, limited to integrity of this dossier delta and the decision job “Hostile-review the complete dossier, derive one reusable workload standard, and route one systemic issue to its actual owner.”
- External authority: Each specialist retains its decision; organization owners decide shared platform or policy adoption.
- Authority limitation: The MLE mentors through evidence review and routes systemic issues; it does not unilaterally set cross-team policy.
- Failure injection: A senior review becomes career advice, a tool checklist, or an MLE-owned platform policy instead of evidence-based improvement.
- Recovery/requalification: Any broken identity, link, authority record, port result, or non-serving proof returns the dossier to its earliest invalidated legal state; review cannot repair evidence by assertion.
- Companion command intent: `verify-dossier` — One offline verify-dossier entry point checks identities, links, authority records, five ports, and terminal non-serving state.
- Five-port transfer rule: The reusable standard is expressed through the shared interface and passes all five ports without privileged depth.
- Transfer proof requirement: Run the chapter’s `LC-08`, `LC-01`, `LC-02`, `LC-03`, `LC-04`, `LC-05`, `LC-06`, `LC-07` context records and the part-exit record for each of `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`; no port may weaken evidence, authority, limitation, or failure behavior.

## Terminal non-serving and review proof

`BL-19` may produce `RETIRED` only when the synthetic audit shows no serving endpoint, live alias, active credential, workload monitor, undeclared consumer, promotion route, or recovery route capable of returning the workload to service. Any deliberately retained record has a named retention owner and does not serve. This is evidence about the local fictional fixture only.

`BL-20` consumes that exact immutable `BL-19` non-serving proof. It reaches `REVIEWED` only when the offline `verify-dossier` intent checks all milestone identities, predecessor and supersession links, versions and hashes, authority records, legal states, 40 cluster-context results, 35 part-exit results, limitations, and terminal non-serving evidence. `REVIEWED` cannot substitute for `RETIRED`.

## Forty cluster-context transfer cases

Each of the eight learning clusters is exercised through all five ports. These are semantic records, not a list of port names. A case passes only when its exact invariant decision, required evidence, external authority, injected failure, limitation, and transfer result remain true.

### CTX-LC01-MANAGED — LC-01 × PORT-MANAGED

- Invariant decision: Bound purpose, population, incumbent, consequence, and owners.
- Variable mechanism: Managed intake and training service.
- Required evidence: Exported task contract and incumbent result.
- External authority: Product, domain, provider/platform, and formal owners.
- Injected failure: Provider default silently changes target population.
- Limitation: Managed configuration is not authorization.
- Transfer result: Same contract and HOLD path remain portable.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC01-CLASSICAL — LC-01 × PORT-CLASSICAL

- Invariant decision: Bound purpose, population, incumbent, consequence, and owners.
- Variable mechanism: Local statistical estimator and rules incumbent.
- Required evidence: Task contract, executable incumbent, consequence matrix.
- External authority: Product, domain, evaluation, and formal owners.
- Injected failure: Simple estimator is assumed to need no owner.
- Limitation: Simplicity does not authorize use.
- Transfer result: Same contract and HOLD path remain portable.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC01-DEEP — LC-01 × PORT-DEEP

- Invariant decision: Bound purpose, population, incumbent, consequence, and owners.
- Variable mechanism: Deep candidate and accelerator context.
- Required evidence: Task contract, incumbent, population, consequence, owner map.
- External authority: Product, domain, research, evaluation, and formal owners.
- Injected failure: Model capability drives an unapproved purpose expansion.
- Limitation: Model scale does not define purpose.
- Transfer result: Same contract and HOLD path remain portable.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC01-EDGE — LC-01 × PORT-EDGE

- Invariant decision: Bound purpose, population, incumbent, consequence, and owners.
- Variable mechanism: Benchline inspection line and constrained device.
- Required evidence: Inspection contract, rule incumbent, consequence and authority map.
- External authority: Product, operations, industrial-domain, safety, and formal owners.
- Injected failure: Device feasibility is mistaken for domain approval.
- Limitation: Fictional case supplies no industrial assurance.
- Transfer result: Same contract and HOLD path remain portable.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC01-SHARED — LC-01 × PORT-SHARED

- Invariant decision: Bound purpose, population, incumbent, consequence, and owners.
- Variable mechanism: Shared platform workload intake.
- Required evidence: Tenant task contract, incumbent, consequence, ownership split.
- External authority: Product/domain owners plus platform/SRE/security.
- Injected failure: Platform tenancy is treated as workload approval.
- Limitation: Shared admission is not technical qualification.
- Transfer result: Same contract and HOLD path remain portable.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC02-MANAGED — LC-02 × PORT-MANAGED

- Invariant decision: Make input, label, feature, split, feedback, and conformance evidence admissible.
- Variable mechanism: Provider dataset and feature services.
- Required evidence: Exportable versions, provenance, transforms, split, and serving representation.
- External authority: Data, domain, provider/platform, privacy, and legal owners.
- Injected failure: Opaque provider transform changes without evidence.
- Limitation: Provider validation does not prove workload meaning.
- Transfer result: Admissibility record survives provider replacement.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC02-CLASSICAL — LC-02 × PORT-CLASSICAL

- Invariant decision: Make input, label, feature, split, feedback, and conformance evidence admissible.
- Variable mechanism: Tabular feature pipeline and statistical target.
- Required evidence: Schema, label definition, feature order, temporal split, parity result.
- External authority: Data, domain, privacy, and legal owners.
- Injected failure: Feature order or target leakage changes evidence.
- Limitation: Readable features do not eliminate provenance duties.
- Transfer result: Admissibility record survives estimator replacement.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC02-DEEP — LC-02 × PORT-DEEP

- Invariant decision: Make input, label, feature, split, feedback, and conformance evidence admissible.
- Variable mechanism: Deep preprocessing, augmentations, and tensor pipeline.
- Required evidence: Dataset, labels, preprocessor, augmentation, split, feedback, serving identity.
- External authority: Data, domain, research, privacy, and platform owners.
- Injected failure: Serving preprocessor differs from training identity.
- Limitation: Large data does not prove representative meaning.
- Transfer result: Admissibility record survives model-family replacement.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC02-EDGE — LC-02 × PORT-EDGE

- Invariant decision: Make input, label, feature, split, feedback, and conformance evidence admissible.
- Variable mechanism: Sensor/image capture, edge transform, delayed inspection labels.
- Required evidence: Sensor identity, capture conditions, label rules, transforms, split, feedback delay.
- External authority: Operations, domain, data, safety, privacy, and hardware owners.
- Injected failure: Sensor shift or future-maintenance leakage contaminates the split.
- Limitation: Synthetic fixtures cannot prove field representativeness.
- Transfer result: Admissibility record transfers to non-image inputs.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC02-SHARED — LC-02 × PORT-SHARED

- Invariant decision: Make input, label, feature, split, feedback, and conformance evidence admissible.
- Variable mechanism: Multi-tenant feature and data platform.
- Required evidence: Tenant/source identities, transformations, freshness, split, permissions, consumers.
- External authority: Data/platform/security/privacy owners.
- Injected failure: Tenant alias resolves to a different shared feature version.
- Limitation: Platform lineage does not certify workload use.
- Transfer result: Admissibility record survives platform upgrade.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC03-MANAGED — LC-03 × PORT-MANAGED

- Invariant decision: Preserve incumbent, controlled change, run identity, bounded rerun claim, and candidate lineage.
- Variable mechanism: Provider experiment and tuning service.
- Required evidence: Exported configuration, data/code identity, context, metrics, artifacts, limits.
- External authority: Provider/platform, evaluation, and research owners.
- Injected failure: Hidden managed default changes between runs.
- Limitation: Provider repeatability is context-bounded.
- Transfer result: Comparison reconstructs outside provider-specific UI.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC03-CLASSICAL — LC-03 × PORT-CLASSICAL

- Invariant decision: Preserve incumbent, controlled change, run identity, bounded rerun claim, and candidate lineage.
- Variable mechanism: Local estimator and feature pipeline.
- Required evidence: Code/data/dependency/parameter/seed/context identities and results.
- External authority: Evaluation and statistical/scientific owners.
- Injected failure: Preprocessing changes with estimator.
- Limitation: Deterministic code does not eliminate data/context bounds.
- Transfer result: Candidate comparison survives library replacement.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC03-DEEP — LC-03 × PORT-DEEP

- Invariant decision: Preserve incumbent, controlled change, run identity, bounded rerun claim, and candidate lineage.
- Variable mechanism: Accelerated training and checkpoints.
- Required evidence: Code/data/dependency/seed/hardware/checkpoint/preprocessor identities.
- External authority: Research, evaluation, and platform owners.
- Injected failure: Cross-hardware rerun diverges.
- Limitation: Same seed is not universal bit determinism.
- Transfer result: Bounded claim and comparison survive hardware change.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC03-EDGE — LC-03 × PORT-EDGE

- Invariant decision: Preserve incumbent, controlled change, run identity, bounded rerun claim, and candidate lineage.
- Variable mechanism: Benchline candidate trained locally for constrained target.
- Required evidence: Capture/data/run/device-target identities, incumbent, candidate, limitations.
- External authority: Research, evaluation, hardware, and operations owners.
- Injected failure: Quantization and preprocessing both change.
- Limitation: Fixture run is not field performance.
- Transfer result: Controlled comparison transfers beyond edge mechanics.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC03-SHARED — LC-03 × PORT-SHARED

- Invariant decision: Preserve incumbent, controlled change, run identity, bounded rerun claim, and candidate lineage.
- Variable mechanism: Shared multi-tenant training service.
- Required evidence: Tenant/run/resource/runtime/data/code identities and comparison.
- External authority: Platform, SRE, evaluation, and research owners.
- Injected failure: Shared runtime revision changes execution context.
- Limitation: Platform run ID alone is incomplete evidence.
- Transfer result: Comparison survives shared-runtime migration.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC04-MANAGED — LC-04 × PORT-MANAGED

- Invariant decision: Preserve population, segments, consequence, limits, independent gate, and PASS/HOLD/REJECT semantics.
- Variable mechanism: Provider evaluation facilities.
- Required evidence: Exported cases, results, segment tables, limitations, and gate record.
- External authority: Evaluation, product, domain, safety, and formal owners.
- Injected failure: Provider aggregate passes while critical segment fails.
- Limitation: Provider score is not independent release authority.
- Transfer result: Disposition can be reproduced outside provider UI.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC04-CLASSICAL — LC-04 × PORT-CLASSICAL

- Invariant decision: Preserve population, segments, consequence, limits, independent gate, and PASS/HOLD/REJECT semantics.
- Variable mechanism: Statistical metrics and calibration where applicable.
- Required evidence: Population/segment metrics, uncertainty, calibration applicability, failures, limits.
- External authority: Evaluation, product, domain, privacy/legal owners.
- Injected failure: Mean result hides consequential subgroup regression.
- Limitation: Interpretable estimator is not automatically qualified.
- Transfer result: Disposition survives estimator change.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC04-DEEP — LC-04 × PORT-DEEP

- Invariant decision: Preserve population, segments, consequence, limits, independent gate, and PASS/HOLD/REJECT semantics.
- Variable mechanism: Deep classifier evaluation and uncertainty diagnostics.
- Required evidence: Representative cases, segment/failure results, uncertainty limits, gate owners.
- External authority: Evaluation, research, domain, safety, and product owners.
- Injected failure: Benchmark gain hides tail failure.
- Limitation: Benchmark novelty is not qualification.
- Transfer result: Disposition survives model-family change.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC04-EDGE — LC-04 × PORT-EDGE

- Invariant decision: Preserve population, segments, consequence, limits, independent gate, and PASS/HOLD/REJECT semantics.
- Variable mechanism: Benchline environmental and defect-segment tests.
- Required evidence: Conditions, defect segments, uncertainty/failures, consequence thresholds, gate owners.
- External authority: Industrial-domain, operations, safety, evaluation, and product owners.
- Injected failure: Rare consequential defect segment regresses.
- Limitation: Synthetic test cannot prove industrial safety.
- Transfer result: Disposition semantics transfer beyond inspection imagery.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC04-SHARED — LC-04 × PORT-SHARED

- Invariant decision: Preserve population, segments, consequence, limits, independent gate, and PASS/HOLD/REJECT semantics.
- Variable mechanism: Tenant-specific evaluation on shared services.
- Required evidence: Tenant population/segments, shared-context limits, gate owners, disposition.
- External authority: Evaluation, product/domain, platform, and formal owners.
- Injected failure: Fleet aggregate masks one tenant regression.
- Limitation: Platform health is not workload qualification.
- Transfer result: Disposition survives tenant or platform migration.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC05-MANAGED — LC-05 × PORT-MANAGED

- Invariant decision: Bind executable, evidence, interfaces, consumers, lineage, integrity, access, migration, fallback, and recovery.
- Variable mechanism: Managed registry and endpoint.
- Required evidence: Exported package/config/interface/consumer/approval/limit/recovery identities.
- External authority: Provider/platform, security, consumer, evaluation, and product owners.
- Injected failure: Endpoint exists but package evidence cannot export.
- Limitation: Managed registry is not the release dossier.
- Transfer result: Release remains interpretable off provider.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC05-CLASSICAL — LC-05 × PORT-CLASSICAL

- Invariant decision: Bind executable, evidence, interfaces, consumers, lineage, integrity, access, migration, fallback, and recovery.
- Variable mechanism: Serialized estimator plus transform package.
- Required evidence: Estimator/transform/dependency/interface/consumer/hash/recovery records.
- External authority: Consumer, platform, security, evaluation, and product owners.
- Injected failure: Transform package or consumer contract is omitted.
- Limitation: Small artifact still has a system interface.
- Transfer result: Release survives serialization-format change.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC05-DEEP — LC-05 × PORT-DEEP

- Invariant decision: Bind executable, evidence, interfaces, consumers, lineage, integrity, access, migration, fallback, and recovery.
- Variable mechanism: Checkpoint/preprocessor/runtime package.
- Required evidence: Checkpoint, preprocessor, runtime, interface, lineage, signer, consumer, recovery.
- External authority: Research, platform, security, evaluation, and consumers.
- Injected failure: Right checkpoint is paired with wrong preprocessor.
- Limitation: Checkpoint identity alone is incomplete.
- Transfer result: Release survives runtime-format change.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC05-EDGE — LC-05 × PORT-EDGE

- Invariant decision: Bind executable, evidence, interfaces, consumers, lineage, integrity, access, migration, fallback, and recovery.
- Variable mechanism: Signed device package and line interface.
- Required evidence: Device package, sensor/preprocessor, consumers, compatibility, signer, fallback, recovery.
- External authority: Hardware, operations, platform, security, safety, and consumers.
- Injected failure: Stale device package or incompatible sensor firmware.
- Limitation: Signed package is not domain approval.
- Transfer result: Release semantics transfer to non-edge packaging.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC05-SHARED — LC-05 × PORT-SHARED

- Invariant decision: Bind executable, evidence, interfaces, consumers, lineage, integrity, access, migration, fallback, and recovery.
- Variable mechanism: Multi-tenant registry and shared serving contract.
- Required evidence: Tenant package, interface, consumers, compatibility, access, promotion, recovery.
- External authority: Platform, SRE, security, product, evaluation, and consumers.
- Injected failure: Shared runtime upgrade breaks one tenant consumer.
- Limitation: Platform promotion does not certify workload.
- Transfer result: Release survives platform upgrade.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC06-MANAGED — LC-06 × PORT-MANAGED

- Invariant decision: Measure envelope, truth availability, signals, containment, rollback, changed evidence, and requalification.
- Variable mechanism: Managed endpoint and monitoring.
- Required evidence: Demand/latency/error/capacity export, signals, labels, rollback, requalification.
- External authority: Provider/platform/SRE, evaluation, product, and domain owners.
- Injected failure: Managed alert auto-triggers promotion or retraining.
- Limitation: Provider telemetry is not ground truth.
- Transfer result: Operating evidence remains exportable and reviewable.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC06-CLASSICAL — LC-06 × PORT-CLASSICAL

- Invariant decision: Measure envelope, truth availability, signals, containment, rollback, changed evidence, and requalification.
- Variable mechanism: CPU service with delayed outcomes.
- Required evidence: Latency/error/capacity, feature/output drift, outcome delay, rollback, new identity.
- External authority: SRE/platform, evaluation, product, and domain owners.
- Injected failure: Proxy drift is treated as outcome failure.
- Limitation: Low compute does not remove truth delay.
- Transfer result: Operating evidence survives estimator replacement.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC06-DEEP — LC-06 × PORT-DEEP

- Invariant decision: Measure envelope, truth availability, signals, containment, rollback, changed evidence, and requalification.
- Variable mechanism: Accelerated serving and checkpoint updates.
- Required evidence: Tail/resource envelope, signals, model/data changes, rollback, new checkpoint identity.
- External authority: Platform/SRE, research, evaluation, product, and domain owners.
- Injected failure: Retrained checkpoint reuses old release identity.
- Limitation: Offline gain cannot authorize live change.
- Transfer result: Requalification semantics survive model-family change.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC06-EDGE — LC-06 × PORT-EDGE

- Invariant decision: Measure envelope, truth availability, signals, containment, rollback, changed evidence, and requalification.
- Variable mechanism: Benchline device envelope, sensor shift, and delayed inspection outcomes.
- Required evidence: Device latency/resource/failure, signals, truth delay, fallback, rollback, repaired identity.
- External authority: Operations, hardware, SRE/platform, domain, safety, and evaluation owners.
- Injected failure: Sensor shift and resource saturation combine.
- Limitation: Synthetic replay is not field reliability.
- Transfer result: Operating logic transfers beyond physical devices.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC06-SHARED — LC-06 × PORT-SHARED

- Invariant decision: Measure envelope, truth availability, signals, containment, rollback, changed evidence, and requalification.
- Variable mechanism: Shared fleet, tenant signals, and coordinated rollback.
- Required evidence: Tenant envelope/signals, fleet context, incident split, workload rollback, requalification.
- External authority: SRE/platform incident command plus evaluation/product/domain owners.
- Injected failure: Fleet SLO breach obscures model-specific failure.
- Limitation: Workload evidence cannot claim fleet assurance.
- Transfer result: Operating record survives shared-substrate change.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC07-MANAGED — LC-07 × PORT-MANAGED

- Invariant decision: Trace assets, controls, exceptions, formal decisions, retirement, and non-serving proof.
- Variable mechanism: Provider control and deletion interfaces.
- Required evidence: Exported inventory, access/integrity controls, exceptions, endpoints, credentials, retention, deletion proof.
- External authority: Provider/platform, security, privacy/legal, product/domain owners.
- Injected failure: Provider deletion leaves an alias or credential path.
- Limitation: Provider confirmation alone may not prove every consumer path.
- Transfer result: Control and retirement evidence remains independently auditable.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC07-CLASSICAL — LC-07 × PORT-CLASSICAL

- Invariant decision: Trace assets, controls, exceptions, formal decisions, retirement, and non-serving proof.
- Variable mechanism: Local artifact and service controls.
- Required evidence: Inventory, permissions, integrity, exceptions, consumers, endpoint, credentials, archive.
- External authority: Security, privacy/legal, product/domain, platform owners.
- Injected failure: Local artifact copy remains servable after endpoint deletion.
- Limitation: Simple artifacts can still leak or persist.
- Transfer result: Control and retirement proof survives packaging change.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC07-DEEP — LC-07 × PORT-DEEP

- Invariant decision: Trace assets, controls, exceptions, formal decisions, retirement, and non-serving proof.
- Variable mechanism: Checkpoint, training data, serving runtime, and accelerator assets.
- Required evidence: Inventory, lineage, access/integrity, exceptions, endpoint/credentials, retention, archive.
- External authority: Security, research, privacy/legal, platform, product/domain owners.
- Injected failure: Retired endpoint leaves an accessible checkpoint copy.
- Limitation: Model weights may require distinct retention and access decisions.
- Transfer result: Control proof survives model-family change.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC07-EDGE — LC-07 × PORT-EDGE

- Invariant decision: Trace assets, controls, exceptions, formal decisions, retirement, and non-serving proof.
- Variable mechanism: Distributed device packages, credentials, and recovery media.
- Required evidence: Device inventory, package/access integrity, exceptions, consumer notice, revoke/remove proof.
- External authority: Operations, hardware, security, safety, legal, product/domain owners.
- Injected failure: One disconnected device retains a servable package.
- Limitation: Synthetic inventory is not physical assurance.
- Transfer result: Non-serving semantics transfer beyond edge devices.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC07-SHARED — LC-07 × PORT-SHARED

- Invariant decision: Trace assets, controls, exceptions, formal decisions, retirement, and non-serving proof.
- Variable mechanism: Tenant controls within shared registry, serving, and observability.
- Required evidence: Tenant inventory, access/integrity, exceptions, aliases, endpoints, credentials, monitor and archive state.
- External authority: Platform/SRE/security/privacy/legal and product/domain owners.
- Injected failure: Shared alias or fallback route still references retired tenant model.
- Limitation: Tenant retirement cannot claim platform retirement.
- Transfer result: Retirement proof survives tenant migration.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC08-MANAGED — LC-08 × PORT-MANAGED

- Invariant decision: Review evidence, ambiguity, cross-team radius, mentoring, and routed systemic improvement without title shortcuts.
- Variable mechanism: Managed-service dossier review.
- Required evidence: Complete exported dossier, limitations, owner routes, one reusable standard.
- External authority: Provider/platform and all formal owners retain decisions.
- Injected failure: Reusable standard becomes a provider-specific checklist.
- Limitation: Tool fluency is not advanced MLE depth.
- Transfer result: Standard remains provider-neutral.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC08-CLASSICAL — LC-08 × PORT-CLASSICAL

- Invariant decision: Review evidence, ambiguity, cross-team radius, mentoring, and routed systemic improvement without title shortcuts.
- Variable mechanism: Classical-workload dossier review.
- Required evidence: Complete dossier, limitations, review decisions, routed systemic issue.
- External authority: Evaluation, product/domain, data, platform, and formal owners.
- Injected failure: Reviewer dismisses lifecycle depth because model is simple.
- Limitation: Algorithm complexity is not professional depth.
- Transfer result: Standard remains model-family neutral.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC08-DEEP — LC-08 × PORT-DEEP

- Invariant decision: Review evidence, ambiguity, cross-team radius, mentoring, and routed systemic improvement without title shortcuts.
- Variable mechanism: Deep-workload dossier review.
- Required evidence: Complete dossier, bounded claims, owner routes, reusable standard.
- External authority: Research, evaluation, platform, security, product/domain owners.
- Injected failure: Benchmark novelty displaces lifecycle evidence.
- Limitation: Novelty and scale are not authority.
- Transfer result: Standard remains model-family neutral.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC08-EDGE — LC-08 × PORT-EDGE

- Invariant decision: Review evidence, ambiguity, cross-team radius, mentoring, and routed systemic improvement without title shortcuts.
- Variable mechanism: Benchline full dossier review.
- Required evidence: BL-00 through BL-20, five-port comparison, formal-owner routes.
- External authority: Operations, hardware, domain, safety, security, platform, evaluation, product owners.
- Injected failure: Benchline-specific mechanics become universal doctrine.
- Limitation: Fictional edge case is only the default teaching port.
- Transfer result: Standard passes all four satellite contexts.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

### CTX-LC08-SHARED — LC-08 × PORT-SHARED

- Invariant decision: Review evidence, ambiguity, cross-team radius, mentoring, and routed systemic improvement without title shortcuts.
- Variable mechanism: Shared-platform tenant dossier review.
- Required evidence: Workload dossier, platform dependencies, owner routes, reusable workload standard.
- External authority: Platform/SRE/security and all workload formal owners.
- Injected failure: Workload standard silently becomes platform policy.
- Limitation: MLE can propose but not unilaterally mandate cross-team policy.
- Transfer result: Standard improves workload evidence without absorbing platform ownership.
- Proof disposition: Required `PASS`; otherwise the owning milestone remains at its last valid state and the failure enters its repair/requalification path.

## Thirty-five part-exit compatibility checks

Every part exit runs once for every port. A `PASS` means the named evidence and decision semantics transfer without provider, model-family, edge, or platform assumptions. Failure blocks the part exit and preserves the last valid dossier state.

| Check ID | Part | Port | Exact compatibility check | Required result |
|---|---|---|---|---|
| `PEX-01-MANAGED` | `PART-01` | `PORT-MANAGED` | Task, incumbent, consequence, authority, and NO-ML/HOLD transfer. | `PASS` or no state advance |
| `PEX-01-CLASSICAL` | `PART-01` | `PORT-CLASSICAL` | Task, incumbent, consequence, authority, and NO-ML/HOLD transfer. | `PASS` or no state advance |
| `PEX-01-DEEP` | `PART-01` | `PORT-DEEP` | Task, incumbent, consequence, authority, and NO-ML/HOLD transfer. | `PASS` or no state advance |
| `PEX-01-EDGE` | `PART-01` | `PORT-EDGE` | Task, incumbent, consequence, authority, and NO-ML/HOLD transfer. | `PASS` or no state advance |
| `PEX-01-SHARED` | `PART-01` | `PORT-SHARED` | Task, incumbent, consequence, authority, and NO-ML/HOLD transfer. | `PASS` or no state advance |
| `PEX-02-MANAGED` | `PART-02` | `PORT-MANAGED` | Data, label, feature, split, feedback, lineage, and conformance transfer. | `PASS` or no state advance |
| `PEX-02-CLASSICAL` | `PART-02` | `PORT-CLASSICAL` | Data, label, feature, split, feedback, lineage, and conformance transfer. | `PASS` or no state advance |
| `PEX-02-DEEP` | `PART-02` | `PORT-DEEP` | Data, label, feature, split, feedback, lineage, and conformance transfer. | `PASS` or no state advance |
| `PEX-02-EDGE` | `PART-02` | `PORT-EDGE` | Data, label, feature, split, feedback, lineage, and conformance transfer. | `PASS` or no state advance |
| `PEX-02-SHARED` | `PART-02` | `PORT-SHARED` | Data, label, feature, split, feedback, lineage, and conformance transfer. | `PASS` or no state advance |
| `PEX-03-MANAGED` | `PART-03` | `PORT-MANAGED` | Baseline, experiment, run identity, bounded reproducibility, and candidate transfer. | `PASS` or no state advance |
| `PEX-03-CLASSICAL` | `PART-03` | `PORT-CLASSICAL` | Baseline, experiment, run identity, bounded reproducibility, and candidate transfer. | `PASS` or no state advance |
| `PEX-03-DEEP` | `PART-03` | `PORT-DEEP` | Baseline, experiment, run identity, bounded reproducibility, and candidate transfer. | `PASS` or no state advance |
| `PEX-03-EDGE` | `PART-03` | `PORT-EDGE` | Baseline, experiment, run identity, bounded reproducibility, and candidate transfer. | `PASS` or no state advance |
| `PEX-03-SHARED` | `PART-03` | `PORT-SHARED` | Baseline, experiment, run identity, bounded reproducibility, and candidate transfer. | `PASS` or no state advance |
| `PEX-04-MANAGED` | `PART-04` | `PORT-MANAGED` | Population, segment, uncertainty, failure, authority, and disposition transfer. | `PASS` or no state advance |
| `PEX-04-CLASSICAL` | `PART-04` | `PORT-CLASSICAL` | Population, segment, uncertainty, failure, authority, and disposition transfer. | `PASS` or no state advance |
| `PEX-04-DEEP` | `PART-04` | `PORT-DEEP` | Population, segment, uncertainty, failure, authority, and disposition transfer. | `PASS` or no state advance |
| `PEX-04-EDGE` | `PART-04` | `PORT-EDGE` | Population, segment, uncertainty, failure, authority, and disposition transfer. | `PASS` or no state advance |
| `PEX-04-SHARED` | `PART-04` | `PORT-SHARED` | Population, segment, uncertainty, failure, authority, and disposition transfer. | `PASS` or no state advance |
| `PEX-05-MANAGED` | `PART-05` | `PORT-MANAGED` | Package, consumer, compatibility, lineage, integrity, access, and recovery transfer. | `PASS` or no state advance |
| `PEX-05-CLASSICAL` | `PART-05` | `PORT-CLASSICAL` | Package, consumer, compatibility, lineage, integrity, access, and recovery transfer. | `PASS` or no state advance |
| `PEX-05-DEEP` | `PART-05` | `PORT-DEEP` | Package, consumer, compatibility, lineage, integrity, access, and recovery transfer. | `PASS` or no state advance |
| `PEX-05-EDGE` | `PART-05` | `PORT-EDGE` | Package, consumer, compatibility, lineage, integrity, access, and recovery transfer. | `PASS` or no state advance |
| `PEX-05-SHARED` | `PART-05` | `PORT-SHARED` | Package, consumer, compatibility, lineage, integrity, access, and recovery transfer. | `PASS` or no state advance |
| `PEX-06-MANAGED` | `PART-06` | `PORT-MANAGED` | Envelope, observation, incident, rollback, changed evidence, and requalification transfer. | `PASS` or no state advance |
| `PEX-06-CLASSICAL` | `PART-06` | `PORT-CLASSICAL` | Envelope, observation, incident, rollback, changed evidence, and requalification transfer. | `PASS` or no state advance |
| `PEX-06-DEEP` | `PART-06` | `PORT-DEEP` | Envelope, observation, incident, rollback, changed evidence, and requalification transfer. | `PASS` or no state advance |
| `PEX-06-EDGE` | `PART-06` | `PORT-EDGE` | Envelope, observation, incident, rollback, changed evidence, and requalification transfer. | `PASS` or no state advance |
| `PEX-06-SHARED` | `PART-06` | `PORT-SHARED` | Envelope, observation, incident, rollback, changed evidence, and requalification transfer. | `PASS` or no state advance |
| `PEX-07-MANAGED` | `PART-07` | `PORT-MANAGED` | Controls, formal decisions, retirement, non-serving proof, and reusable standard transfer. | `PASS` or no state advance |
| `PEX-07-CLASSICAL` | `PART-07` | `PORT-CLASSICAL` | Controls, formal decisions, retirement, non-serving proof, and reusable standard transfer. | `PASS` or no state advance |
| `PEX-07-DEEP` | `PART-07` | `PORT-DEEP` | Controls, formal decisions, retirement, non-serving proof, and reusable standard transfer. | `PASS` or no state advance |
| `PEX-07-EDGE` | `PART-07` | `PORT-EDGE` | Controls, formal decisions, retirement, non-serving proof, and reusable standard transfer. | `PASS` or no state advance |
| `PEX-07-SHARED` | `PART-07` | `PORT-SHARED` | Controls, formal decisions, retirement, non-serving proof, and reusable standard transfer. | `PASS` or no state advance |

## Port equality and replaceability proof

- `PORT-EDGE` hosts the fictional Benchline story, but every chapter’s decision, dossier delta, authority ceiling, limitation, failure behavior, and recovery path must be expressible through all five ports.
- `PORT-MANAGED` may vary provider mechanisms but cannot hide evidence or transfer meaning.
- `PORT-CLASSICAL` may use simpler mechanics but cannot omit lifecycle, qualification, control, or retirement evidence.
- `PORT-DEEP` may require richer run/checkpoint context but cannot replace the book spine with model-family technique.
- `PORT-SHARED` may depend on shared services but cannot let workload evidence claim fleet or platform authority.
- A port is replaceable only when all eight of its cluster-context cases and all seven part-exit checks pass. Therefore each port has exactly 15 required checks; the project has 40 unique cluster-context cases and 35 unique part-exit checks.

## Safety and authority invariants

- The dossier records external decisions; it never fabricates product, domain, evaluation, security, safety, privacy, governance, legal, platform, SRE, operations, hardware, or provider approval.
- Synthetic evidence cannot authorize real deployment, operation, lending, industrial inspection, safety action, or business decision.
- The companion cannot contact, configure, deploy to, monitor, stop, retire, or recover any external system.
- A qualification result applies only to the named synthetic workload identity, population, use, evidence version, runtime context, and authority record.
- Missing evidence or owner is a blocking state, not a prompt for invention.
- No milestone deletes history. Repair creates a new version and preserves the invalidated record, reason, owner, and reopen target.

## Completion invariant

Exactly 21 connected milestone records exist: one for each chapter and no orphan. The only initial node is `UNORIENTED`; the only terminal state is `REVIEWED`; and the terminal path contains `BL-19` / `RETIRED` non-serving proof before `BL-20`. The map contains exactly five ports, 40 cluster-context cases, and 35 part-exit checks. No real effect, production claim, credential, network dependency, provider lock-in, companion code, fixture, manuscript, research pack, visual asset, publication output, course, certification, question bank, second volume, or next-role output is part of this Phase 05 artifact.
