# MLE-CH-18 — Contain, Roll Back, Repair, and Requalify

Blueprint status: Phase 07 production specification for Komal Nakrani. This is not manuscript prose and creates no code, visual asset, publication file, course, or authority decision.

## Frozen identity and production target

- **ID/order/slug/part:** `MLE-CH-18` / 18 / `contain-roll-back-repair-and-requalify` / `PART-06`.
- **Decision job:** Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair.
- **Thesis:** A model incident closes only when containment, evidence change, recovery identity, and requalification are explicit.
- **Reader endpoint:** Replay an incident and produce containment/rollback plus a new evidence-bearing candidate or a durable hold.
- **Milestone:** `BL-17` — Incident and requalification packet.
- **Incoming/outgoing state:** `OBSERVED` → `REQUALIFIED|ROLLED-BACK`; no automatic promotion.
- **Production target:** 2,400–3,200 words because a screen-first chapter needs visible procedure, evidence, failure, transfer, and qualification blocks without compressed microtype.
- **Primary decision question:** What must be contained now, which authority commands the incident, and what changed evidence is required before any repaired workload returns?

## Observable objectives

- Separate incident command, MLE diagnosis, formal decision authority, action, evidence, and timestamp in one state table.
- Reject same-identity repair and create a new candidate with an explicit changed-evidence diff and applicable requalification route.
- Bind every corrective action to an owner, due state, verification artifact, and affected evidence link without treating restoration as closure.

The reader must demonstrate each action in the deterministic Benchline fixture; recognizing terminology is insufficient.

## Prerequisites and five-sentence dossier bridge

- **Exact prerequisite artifacts:** `BL-15`, `BL-16`.
- **Upstream input-hash slot:** `aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa` is the frozen Phase 07 deterministic projection token; Phase 08 must bind accepted artifact hashes rather than inventing values.

The chapter consumes BL-15 for the tested operating envelope and BL-16 for signal, truth-maturity, and decision-routing evidence. It cannot silently repair an invalid baseline, missing owner, unsupported ground-truth claim, or mismatched rollback identity upstream. The incoming state is OBSERVED; incident action may end in a separately evidenced REQUALIFIED or ROLLED-BACK state. BL-17 records containment and restoration separately from repair qualification and post-incident learning. Chapter 19 accepts only the exact resulting state and audits its controls and formal decisions across the full history.

## Owned decision and retained authority

- **MLE-owned decision:** Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair.
- **Retained authority owner:** SRE owns incident command/fleet action; evaluation and formal authorities retain their gates.
- **MLE ceiling:** The MLE owns model-specific diagnosis and repair evidence, not fleet command or risk acceptance.
- **Boundary IDs:** `BND-05`, `BND-09`, `BND-10`, `BND-11`, `BND-12`, `BND-14`.
- **Escalation:** any missing owner, formal approval, security or policy exception, population validity decision, fleet action, or retained authority produces HOLD/REJECT/REOPEN with a named route.
- **Explicit non-scope:** No incident-command curriculum, fleet mitigation authority, independent evaluation sign-off, risk acceptance, or generalized postmortem program.

## Production sequence

| Section | Order | Production job | Chapter-specific teaching action | Primary claims | Sources | Cases | State and dossier delta | Depth |
|---|---:|---|---|---|---|---|---|---|
| `MLE-CH-18-S01` | 1 | Decision and Bench Setup | Frame the decision question “What must be contained now, which authority commands the incident, and what changed evidence is required before any repaired workload returns?” and expose architecture `MLE-CLM-003`, `MLE-CLM-013`, `MLE-CLM-016`, `MLE-CLM-017`, `MLE-CLM-018`, `MLE-CLM-019`, `MLE-CLM-022`, boundaries `BND-05`, `BND-09`, `BND-10`, `BND-11`, `BND-12`, `BND-14`, scenarios `SCN-01`, `SCN-04`, `SCN-07`, `SCN-09`, and domain `PD-11`. | none | none | none | BL-17 gains evidence from section 1. | `screen-first-1` |
| `MLE-CH-18-S02` | 2 | Procedure | Teach `MLE-BCLM-052`, `MLE-BCLM-053`, `MLE-BCLM-054` once as primary claims, with the exact 10 canonical source-to-claim edges. | `MLE-BCLM-052`, `MLE-BCLM-053`, `MLE-BCLM-054` | `MLE-BSRC-027`, `MLE-BSRC-031`, `MLE-BSRC-042`, `MLE-BSRC-007`, `MLE-BSRC-016`, `MLE-BSRC-040`, `MLE-BSRC-030`, `MLE-BSRC-039`, `MLE-BSRC-041` | none | BL-17 gains evidence from section 2. | `screen-first-2` |
| `MLE-CH-18-S03` | 3 | Evidence interpretation | Interpret the strongest bounded conclusion, the counterexample, and the limitation before presenting a disposition. | none | none | none | BL-17 gains evidence from section 3. | `screen-first-3` |
| `MLE-CH-18-S04` | 4 | Worked trace | Run `CASE-01`, `CASE-02`, `CASE-04`, `CASE-05`, `CASE-11`, `CASE-12` as truth-labeled traces; preserve reported/constructed facts separately from allowed inference. | none | none | `CASE-01`, `CASE-02`, `CASE-04`, `CASE-05`, `CASE-11`, `CASE-12` | BL-17 gains evidence from section 4. | `screen-first-4` |
| `MLE-CH-18-S05` | 5 | Failure lab | Execute both deterministic labs and discriminate each RED mutation using the chapter-specific failure evidence. | none | none | none | BL-17 gains evidence from section 5. | `screen-first-5` |
| `MLE-CH-18-S06` | 6 | Five-port transfer | Transfer the same decision and evidence shape through `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED` without privileging one mechanism. | none | none | none | BL-17 gains evidence from section 6. | `screen-first-6` |
| `MLE-CH-18-S07` | 7 | Assessment and Qualification Gate | Produce BL-17, apply its Qualification Gate, and route HOLD, REJECT, or REOPEN without self-approval. | none | none | none | BL-17 gains evidence from section 7. | `screen-first-7` |
| `MLE-CH-18-S08` | 8 | Durable handoff | Hand the accepted state, artifact identity, limitations, volatile-source triggers, authority route, and next evidence to Phase 08. | none | none | none | BL-17 gains evidence from section 8. | `screen-first-8` |

Primary treatment occurs only in `MLE-CH-18-S02`; every other claim contact is a cross-reference and cannot become a second primary lesson.

## Bench Setup, Bench Sheet, and Qualification Gate

### Bench Setup

- **Decision:** What must be contained now, which authority commands the incident, and what changed evidence is required before any repaired workload returns?
- **Fixed inputs:** `BL-15`, `BL-16` plus the exact offline fixtures listed below.
- **Baseline state:** `OBSERVED`.
- **Failure pressure:** A retrained artifact silently replaces the release without a new identity, changed-evidence diff, or independent requalification.
- **No silent repair:** a missing upstream artifact or mismatch is returned to its owning gate.

### Bench Sheet

| Field | Required entry |
|---|---|
| decision | Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair. |
| evidence | separates command, diagnosis, containment, rollback, changed evidence, new candidate identity, corrective actions, verification, and external requalification |
| state and dossier delta | `OBSERVED` → `REQUALIFIED|ROLLED-BACK` through `BL-17` |
| owner | SRE owns incident command/fleet action; evaluation and formal authorities retain their gates. |
| authority route | The MLE owns model-specific diagnosis and repair evidence, not fleet command or risk acceptance. |
| next action | a continuous control and formal-decision trace that consumes either the requalified candidate or the verified rollback state |
| next evidence | a continuous control and formal-decision trace that consumes either the requalified candidate or the verified rollback state |

### Qualification Gate

PASS only when incident and requalification packet is complete for the exact identities and bounds in this blueprint, its limitations remain visible, and every external decision has its real owner. Otherwise emit HOLD, REJECT, or REOPEN with the discriminating evidence and next owner; a technical PASS never self-authorizes release, operation, retirement, policy, or risk acceptance.

## Skill procedure and evidence interpretation

1. Open the incident record with time, affected workload identity, observation evidence, command owner, diagnosis owner, and formal decision owner.
2. Execute the externally commanded containment or rollback route and verify the exact previous-good identity.
3. Diff data, features, code, dependencies, interface, runtime, controls, and evaluation evidence against the released candidate.
4. Reject a repaired artifact that reuses the old identity; allocate a new candidate and link every changed-evidence obligation.
5. Return through the applicable technical and external gates before release or retain ROLLED-BACK with explicit next evidence.
6. Bind observed impact, causal evidence, contributing conditions, corrective actions, owners, due states, and verification artifacts.

- **Strongest supportable conclusion:** The exposure is contained or restored to a named previous-good state, and any repair is a new evidence-bearing candidate that passed the applicable requalification route.
- **Counterexample:** A retrained artifact silently replaces the release under the same identity after service restoration, with no changed-evidence diff or independent gate.
- **Limitation:** The MLE can diagnose and repair workload evidence but cannot command the fleet, declare regulatory or safety closure, or accept residual risk.

## Benchline artifact contract

| Contract field | Frozen production instruction |
|---|---|
| inputs | `BL-15`, `BL-16`; missing input is not reconstructed here |
| version/hash | artifact version `1.0.0`; exact input-hash slot and later accepted hashes remain visible |
| mutations | command owner collapsed into MLE; same-identity repaired artifact; rollback without exact target; repair bypasses qualification; postmortem action has no verification |
| output | `BL-17` incident and requalification packet |
| evidence | separates command, diagnosis, containment, rollback, changed evidence, new candidate identity, corrective actions, verification, and external requalification |
| owner | SRE owns incident command/fleet action; evaluation and formal authorities retain their gates. |
| authority route | The MLE owns model-specific diagnosis and repair evidence, not fleet command or risk acceptance. |
| legal disposition | `PASS`, `HOLD`, `REJECT`, or `REOPEN`; canonical outgoing state is `REQUALIFIED|ROLLED-BACK` |
| acceptance checks | identity, evidence, limitation, state, owner, and next action all resolve without self-approval |
| forbidden transitions | `HOLD->RELEASABLE`, `REJECT->RELEASABLE` |
| reopen triggers | `purpose or intended use->CONTRACTED`, `data, labels, features, or population->ADMISSIBLE`, `runtime, dependencies, interface, or serving envelope->RECONSTRUCTIBLE`, `authority, constraint, or permitted use->CONTRACTED` |

## Future deterministic companion contract

- **Truth label:** `synthetic-deterministic`.
- **Execution boundary:** offline and provider-neutral; no network, credentials, production system, provider mutation, or authority mutation.
- **Fixture families:** `incident-observation`, `rollback-pass`, `rollback-identity-mismatch`, `same-identity-repair`, `new-candidate-diff`, `missing-formal-owner`, `unverified-corrective-action`.
- **Expected records:** `BL-17` deterministic record, fixed input identity, observed evidence, disposition, limitation, owner, and next route.
- **Lab 01:** `MLE-CH-18-LAB-01` tests positive evidence completeness and fails missing expected evidence.
- **Lab 02:** `MLE-CH-18-LAB-02` injects failure/reopen pressure and fails illegal promotion or self-approval.
- **Phase boundary:** this blueprint specifies future fixtures and expected records only; it creates no companion code.

## Failure injections and diagnostics

| RED mutation | Discriminating evidence | Repair boundary | Illegal-path check |
|---|---|---|---|
| command owner collapsed into MLE | authority table shows self-command | route fleet action to SRE/operations | Illegal promotion, authority mutation, or silent upstream repair fails. |
| same-identity repaired artifact | artifact bytes changed under old identity | REJECT and allocate a new candidate | Illegal promotion, authority mutation, or silent upstream repair fails. |
| rollback without exact target | restoration cannot resolve BL-14 previous-good evidence | HOLD containment claim and repair recovery identity | Illegal promotion, authority mutation, or silent upstream repair fails. |
| repair bypasses qualification | changed evidence has no applicable gate | REOPEN and re-run required technical/external gates | Illegal promotion, authority mutation, or silent upstream repair fails. |
| postmortem action has no verification | due state closes without artifact | retain open corrective action; restoration is not closure | Illegal promotion, authority mutation, or silent upstream repair fails. |

A repair changes only its owned artifact, allocates a new identity when bytes or decision basis change, preserves failure history, and re-enters the applicable gate.

## Five-port transfer table

The decision job and evidence schema are invariant; only the mechanism changes. No port receives deeper status, looser proof, or automatic authority.

| Port | Invariant decision | Replaceable mechanism | Required evidence | External authority | Failure injection | Limitation | Result |
|---|---|---|---|---|---|---|---|
| `PORT-MANAGED` | All ports preserve incident authority, containment, changed evidence, recovery, and requalification semantics. | Provider-managed training, registry, serving, and observation. | Exportable identities, limits, configuration, evaluation, release, observation, and recovery records. | Provider/platform plus all product/domain/formal owners remain external. | Unavailable export or opaque provider state. | Provider claims are not workload qualification. | `PASS` |
| `PORT-CLASSICAL` | All ports preserve incident authority, containment, changed evidence, recovery, and requalification semantics. | Local feature transformation and statistical/classical estimator. | Feature identities, bounded run, calibrated/segment evidence where applicable, package, envelope, recovery. | Data, evaluation, product/domain, and formal owners remain external. | Feature order or preprocessing mismatch. | Simplicity does not remove lifecycle evidence. | `PASS` |
| `PORT-DEEP` | All ports preserve incident authority, containment, changed evidence, recovery, and requalification semantics. | Parameterized training, accelerator context, checkpoint, and tensor-serving path. | Data/run/checkpoint/tokenizer-or-preprocessor identities, bounded reproducibility, evaluation, envelope, recovery. | Research, evaluation, platform, and formal owners remain external. | Wrong checkpoint, preprocessing, or hardware-context identity. | Model scale and benchmark novelty do not replace evidence. | `PASS` |
| `PORT-EDGE` | All ports preserve incident authority, containment, changed evidence, recovery, and requalification semantics. | Benchline sensor/image input, constrained runtime, device package, and delayed feedback. | Sensor/data/label identity, edge package, measured envelope, rollback, controls, retirement. | Hardware, operations, domain, safety, security, platform, and product owners remain external. | Sensor shift, resource pressure, or stale device package. | Benchline is fictional and cannot imply real industrial performance or safety. | `PASS` |
| `PORT-SHARED` | All ports preserve incident authority, containment, changed evidence, recovery, and requalification semantics. | Multi-tenant shared features, training, registry, serving, and observability. | Tenant/workload identity, compatibility, resource envelope, control use, recovery, and owner routes. | Platform/SRE/security own shared systems and fleet decisions. | Tenant collision, shared-runtime upgrade, or fleet SLO pressure. | Workload evidence cannot claim platform-wide assurance. | `PASS` |

## Cases and truth boundaries

### CASE-01 — Benchline Inspection Dossier

- **Identity and truth label:** FICTIONAL SYNTHETIC CAPSTONE; constructed-capstone. All data, results, incidents, and outcomes are constructed; primary sources support doctrine only.
- **Chapter use:** Carry one bounded inspection workload through complete evidence-preserving retirement.
- **Authority:** Fictional product, operations, domain, evaluation, platform, security, safety, privacy, legal, and governance owners remain separate.

**Reported facts:**
None recorded; preserve that absence.

**Attributed outcomes:**
None recorded; preserve that absence.

**Allowed inference:**
None recorded; preserve that absence.

**Forbidden inference:** Do not infer unreported outcomes for Benchline Inspection Dossier.

**Limitations:**
- No real production, industrial, safety, performance, or business claim.

**Transfer rule:**
None recorded; preserve that absence.

### CASE-02 — Managed demand forecast

- **Identity and truth label:** CONSTRUCTED SATELLITE; constructed-satellite. No provider outcome is claimed; official docs may support current mechanism notes.
- **Chapter use:** Test exportability and evidence ownership under managed opacity.
- **Authority:** Product/domain/provider/platform/formal owners remain external.

**Reported facts:**
None recorded; preserve that absence.

**Attributed outcomes:**
None recorded; preserve that absence.

**Allowed inference:**
None recorded; preserve that absence.

**Forbidden inference:** Do not infer unreported outcomes for Managed demand forecast.

**Limitations:**
- Not a cloud-provider tutorial.

**Transfer rule:**
None recorded; preserve that absence.

### CASE-04 — Deep acoustic event classifier

- **Identity and truth label:** CONSTRUCTED SATELLITE; constructed-satellite. Synthetic fixtures and bounded local runs only; no field performance claim.
- **Chapter use:** Stress run identity, checkpoint/preprocessor binding, uncertainty, and serving limits.
- **Authority:** Research, evaluation, platform, domain, safety, and product owners remain external.

**Reported facts:**
None recorded; preserve that absence.

**Attributed outcomes:**
None recorded; preserve that absence.

**Allowed inference:**
None recorded; preserve that absence.

**Forbidden inference:** Do not infer unreported outcomes for Deep acoustic event classifier.

**Limitations:**
- Not a deep-learning recipe book.

**Transfer rule:**
None recorded; preserve that absence.

### CASE-05 — Shared ranking platform tenant

- **Identity and truth label:** CONSTRUCTED SATELLITE; constructed-satellite. Synthetic tenant and fleet evidence; no SLO or platform assurance claim.
- **Chapter use:** Separate workload qualification from tenancy, fleet, platform, and incident-command authority.
- **Authority:** Platform, SRE, security, product, domain, and evaluation owners remain external.

**Reported facts:**
None recorded; preserve that absence.

**Attributed outcomes:**
None recorded; preserve that absence.

**Allowed inference:**
None recorded; preserve that absence.

**Forbidden inference:** Do not infer unreported outcomes for Shared ranking platform tenant.

**Limitations:**
- Not a platform-engineering curriculum.

**Transfer rule:**
None recorded; preserve that absence.

### CASE-11 — PyTorch nightly dependency-chain compromise

- **Identity and truth label:** PUBLIC REPORTED CASE; public-incident. Use only the PyTorch Foundation's reported affected window, package mechanism, indicators, scope caveats, and mitigations; SLSA and SSDF are transfer context, and no affected-population, loss, or complete-cleanup outcome is invented.
- **Chapter use:** Trace an affected release candidate from dependency origin through containment and reject any claim of complete cleanup without consumer-side residual-path evidence.
- **Authority:** PyTorch owns its report; security owns trust roots and exceptions, package and platform owners control indexes and promotion, SRE or incident owners command response, consumers verify their environments, and formal authorities remain external to the MLE.

**Reported facts:**
- PyTorch reported learning on 2022-12-30 of a malicious torchtriton package uploaded to PyPI with the same name as its nightly dependency.
- The advisory bounded affected installations to PyTorch-nightly on Linux installed via pip between 2022-12-25 and 2022-12-30 and reported stable packages unaffected.
- The advisory published a malicious binary SHA-256 and described data collection and encrypted DNS exfiltration behavior.
- PyTorch reported removing torchtriton as a dependency, replacing it with pytorch-triton, removing affected nightly packages from its indices, and coordinating package-name control with PyPI.

**Attributed outcomes:**
- PyTorch attributed package substitution to PyPI taking precedence over its nightly index for the same dependency name.
- PyTorch stated that the malicious binary executed when the package was imported and that this was not PyTorch's default behavior.
- PyTorch attributed the listed mitigation steps to its response; no complete count of affected or cleaned environments was reported.

**Allowed inference:**
- Dependency origin, version, digest, and resolver/index context belong in the release identity, not just the package name.
- Containment evidence must distinguish project-side removal from consumer-side non-serving and credential cleanup.
- Supply-chain assurance should test expected provenance and fail mismatches before promotion.

**Forbidden inference:** Do not infer unreported outcomes for PyTorch nightly dependency-chain compromise.

**Limitations:**
- First-party advisory, not independent forensics.
- No verified population-wide cleanup or loss outcome.
- No universal claim about package managers, model registries, or all supply-chain attacks.
- Stable PyTorch packages were explicitly outside the reported affected scope.

**Transfer rule:**
- Transfer the identity and verification method to any of the five ports, but replace pip/index mechanics with that port's actual package path.
- Do not claim that SLSA or SSDF would have prevented the exact event unless a specific implemented control and trust root are evidenced.
- Use the case to test release integrity, containment, residual-path audit, and evidence review; never use it as proof of model performance.

### CASE-12 — Knight Capital deployment and control failure

- **Identity and truth label:** PUBLIC REPORTED CASE; public-incident. Preserve the regulator’s reported findings, the issuer’s attributed statements, the settlement’s no-admit-or-deny limitation, and the fact that this was automated trading software rather than ML; invent no ML outcome, regulatory conclusion, or complete retirement proof.
- **Chapter use:** Trace deployment identity, serving limits, alert ownership, containment, control effectiveness, and residual paths without treating a removal statement as complete non-serving proof.
- **Authority:** The SEC and Knight own their respective reported records; platform and SRE owners retain serving and incident command, compliance and risk authorities retain regulatory and exposure decisions, product and domain owners retain use decisions, and the MLE owns only workload-specific evidence and bounded transfer.

**Reported facts:**
- The SEC reported that incorrect deployment activated defective router behavior and produced more than four million orders while attempting to fill 212 customer orders during the first 45 minutes after market open.
- The SEC reported more than 397 million shares traded, several billion dollars in unwanted positions, and an eventual loss of more than $460 million.
- The SEC reported 97 automated error emails before market open that were not designed or acted upon as system alerts.
- The SEC reported inadequate deployment/testing, pre-submission, aggregate-exposure, incident-response, and control-review procedures.
- The SEC-hosted issuer filing stated that the software was subsequently removed and reported an approximate pre-tax loss of $457.6 million.

**Attributed outcomes:**
- The SEC attributed the erroneous orders and loss to the deployment and control failures described in its order.
- The SEC required a $12 million penalty and an independent consultant review as part of the settled enforcement action.
- Knight attributed removal of the implicated software and business impact in its issuer filing; complete terminal-path evidence was not published in the reviewed sources.

**Allowed inference:**
- Serving envelopes need hard absolute controls and attributable signals, not only averages or passive messages.
- Incident closure should preserve changed identity, control evidence, owners, and independent requalification rather than silently replacing code.
- Control review should inject plausible malfunction and inspect root causes, not merely inventory controls.
- Reported removal of one software component is weaker than proof that no endpoint, alias, credential, consumer, or fallback path remains.

**Forbidden inference:** Do not infer unreported outcomes for Knight Capital deployment and control failure.

**Limitations:**
- Not an ML system or evidence of ML-specific failure rates.
- SEC settlement was without admitting or denying the findings.
- The official SEC search result exposed the exact issuer removal and approximate pre-tax loss statements, while full-document extraction remained size-limited; later freezes must recheck the accession and passage.
- No public evidence reviewed here proves all serving paths, credentials, consumers, or recovery copies were eliminated.

**Transfer rule:**
- Transfer deployment, signal-routing, hard-limit, incident, control-review, and residual-path methods only; do not transfer trading thresholds or regulatory conclusions.
- For each ML port, replace router nodes and order paths with that port's model packages, endpoints, devices, aliases, consumers, credentials, and fallback routes.
- Do not imply that an MLE owns fleet incident command, financial controls, regulator compliance, or formal risk acceptance.

## Exercises, assessment, and answer intent

- **Exercise output:** `BL-17` evidence artifact. Reject a same-identity retrain, execute a named rollback, and construct the changed-evidence packet for a new candidate.
- **Rubric:** assess Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair. through exact identity, bounded evidence, limitation, state, owner, authority route, and next evidence.
- **Answer intent:** explain the decision, evidence, state, owner, and next action; show why the strongest tempting overclaim fails.
- **Observable PASS evidence:** `BL-17` passes its named Qualification Gate with all RED mutations discriminated.
- **Retry route:** HOLD or REOPEN with new evidence; REJECT when the basis is invalid; never self-approve.
- **Authority limit:** The MLE owns model-specific diagnosis and repair evidence, not fleet command or risk acceptance.

## Visual and accessibility contract

A semantic incident state table carries exact fields; MLE-F18.1 is reserved for a later incident-to-requalification cutaway only.

| Visual | Kind | Anchor | Essential labels | Caption intent | Alt intent | Long-description intent | Candidate status | Reserved path |
|---|---|---|---|---|---|---|---|---|
| `MLE-V18.1` | `semantic-html-css` | `MLE-CH-18-S03` | decision, evidence, state, owner, next action | Explain the BL-17 decision evidence. | Text alternative for MLE-CH-18 evidence flow. | Ordered description of MLE-CH-18 evidence, state, owner, and next action. | `not-applicable` | null |
| `MLE-F18.1` | `imagegen-candidate` | `MLE-CH-18-S03` | decision, evidence, state, owner, next action | Explain the BL-17 decision evidence. | Text alternative for MLE-CH-18 evidence flow. | Ordered description of MLE-CH-18 evidence, state, owner, and next action. | `reserved` | `assets/images/machine-learning-engineering/MLE-F18.1-2400x1600.png` |

All tables, thresholds, percentiles, identities, traces, states, and other numeric truth remain semantic HTML/CSS and selectable. Color is never the only signal. No SVG, WebP, fake UI, logo, watermark, decorative mascot, or generated asset is created in Phase 07.

## Durable doctrine, volatile context, and re-verification

- **Durable doctrine:** Containment, rollback, repair, and requalification preserve identity and authority under change.
- **Volatile examples kept outside doctrine:** Incident tooling; Current rollback mechanisms.

| Source | Identity | Durability/volatility | Exact recheck trigger | Limitation retained in production |
|---|---|---|---|---|
| `MLE-BSRC-007` | The ML Test Score: A Rubric for ML Production Readiness and Technical Debt Reduction | `durable` / low | Recheck at publication freezes for record and final-paper availability; translate its tests into current workload evidence rather than copying a score threshold. | The rubric does not establish universal pass scores, domain acceptance, safety, privacy, security, compliance, business outcomes, or workload-specific authority. |
| `MLE-BSRC-016` | Update a Deployment Without Downtime | `volatile` / medium | Recheck Kubernetes version semantics, revision-history defaults, and command behavior at every freeze. | Mechanism-only vendor-neutral project documentation; no ML-specific correctness or production-outcome authority. |
| `MLE-BSRC-027` | AI RMF Core | `volatile` / high | Mandatory recheck at every freeze and immediately if the revision notice, Govern, Map, Measure, or Manage outcomes, or a revised AI RMF is published. | The Core requires contextual profiles, organization-specific authority, and evidence. It does not certify a system, assign legal approval, identify the MLE as a formal authority, or independently establish who owns a particular decision. |
| `MLE-BSRC-030` | Secure Software Development Framework (SSDF) Version 1.1 | `volatile` / low | Recheck at each freeze for a successor SSDF version or material errata. | Security framework scope does not confer security-risk acceptance or replace model/data/domain evaluation. |
| `MLE-BSRC-031` | Security and Privacy Controls for Information Systems and Organizations | `volatile` / medium | Mandatory recheck at each freeze for a new 5.x release, changed control text, mappings, or baselines. | A catalog entry is not proof that a workload control works and does not authorize the MLE to tailor or accept residual risk alone. |
| `MLE-BSRC-039` | SEC Charges Knight Capital With Violations of Market Access Rule | `durable` / low | Recheck via browser at each freeze and replace only with the linked final SEC order if it provides equivalent accessible facts and limitations. | This is a trading-software incident, not an ML production study; transfer is limited to deployment, alerting, control, incident, and review methods. |
| `MLE-BSRC-040` | Canarying Releases | `durable` / low | Recheck if the chapter is revised; re-evaluate any implementation-specific examples at each freeze. | Canarying is not a substitute for offline qualification, domain evaluation, security review, or fleet SLO ownership. |
| `MLE-BSRC-041` | Postmortem Culture: Learning from Failure | `durable` / low | Recheck if the official chapter is revised; preserve named ownership and action-item limitations. | Does not define model requalification, domain evidence, risk acceptance, or a universal incident-command structure. |
| `MLE-BSRC-042` | Compromised PyTorch-nightly dependency chain between December 25th and December 30th, 2022 | `volatile` / medium | Recheck at each freeze for corrections, newly reported scope, changed indicators, or a linked independent final incident report. | Cannot establish general attack prevalence, universal resolver behavior, or complete cleanup across every affected user's environment. |

A source recheck can update dated mechanism text but cannot silently change a canonical claim, case fact, authority ceiling, or dossier transition.

## Originality and adjacent-publication boundary

**ND/PUB result:** PASS — `ND-01..ND-10` against `PUB-01..PUB-05`. The unit remains a versioned learning workload and evidence dossier; all text, cases, tables, state rails, and progression must be original Komal work.

| Publication | Endpoint boundary | Permissible contact | Chapter result |
|---|---|---|---|
| `PUB-01` | Forward Deployed Engineering | Consumes an approved purpose; does not teach engagement, adoption, commercial scope, or field handoff. | PASS — The chapter owns workload-specific diagnosis and requalification evidence, not agent trajectory recovery, application fallback design, fleet incident command, or platform rollout services. |
| `PUB-02` | Applied AI Engineering | Owns model/data/serving workload evidence; does not teach user-experience or application-behavior composition. | PASS — The chapter owns workload-specific diagnosis and requalification evidence, not agent trajectory recovery, application fallback design, fleet incident command, or platform rollout services. |
| `PUB-03` | Agentic AI Engineering | Qualifies learned components; does not teach tool authority, action state, effects, or recovery. | PASS — The chapter owns workload-specific diagnosis and requalification evidence, not agent trajectory recovery, application fallback design, fleet incident command, or platform rollout services. |
| `PUB-04` | LLM Behavior Engineering | Consumes accepted LLM behavior interventions; does not teach prompting, retrieval, or grader design. | PASS — The chapter owns workload-specific diagnosis and requalification evidence, not agent trajectory recovery, application fallback design, fleet incident command, or platform rollout services. |
| `PUB-05` | LLM Adaptation and Runtime | Treats deep and LLM mechanisms as replaceable ports; does not teach post-training recipes or LLM-specialist inference. | PASS — The chapter owns workload-specific diagnosis and requalification evidence, not agent trajectory recovery, application fallback design, fleet incident command, or platform rollout services. |

Evidence-newness PASS: substantive teaching is sourced from `MLE-BCLM-052`, `MLE-BCLM-053`, `MLE-BCLM-054`, not from another Komal publication. Replaceability PASS: the decision and evidence survive all five ports. Merge-or-route PASS: no extra book, volume, course, or specialist curriculum is created.

## Phase 08 handoff and evidence manifest

- **Writer instruction:** write MLE-CH-18 from this blueprint without inventing evidence or authority; preserve the Bench Setup → Bench Sheet → Qualification Gate reading path and the exact state and dossier delta.
- **Continuity bridge:** `OBSERVED` becomes `REQUALIFIED|ROLLED-BACK` through `BL-17`; a continuous control and formal-decision trace that consumes either the requalified candidate or the verified rollback state
- **Word range:** 2,400–3,200 words; expand screen-first tables, procedures, failure evidence, port transfer, and accessibility rather than compressing them.
- **Prohibited claims:** no universal performance, safety, compliance, business outcome, production success, complete cleanup, or external authorization claim.
- **Claims:** `MLE-BCLM-052`, `MLE-BCLM-053`, `MLE-BCLM-054`.
- **Sources:** `MLE-BSRC-027`, `MLE-BSRC-031`, `MLE-BSRC-042`, `MLE-BSRC-007`, `MLE-BSRC-016`, `MLE-BSRC-040`, `MLE-BSRC-030`, `MLE-BSRC-039`, `MLE-BSRC-041`.
- **Cases:** `CASE-01`, `CASE-02`, `CASE-04`, `CASE-05`, `CASE-11`, `CASE-12`.
- **Architecture claims:** `MLE-CLM-003`, `MLE-CLM-013`, `MLE-CLM-016`, `MLE-CLM-017`, `MLE-CLM-018`, `MLE-CLM-019`, `MLE-CLM-022`.
- **Boundaries:** `BND-05`, `BND-09`, `BND-10`, `BND-11`, `BND-12`, `BND-14`.
- **Scenarios:** `SCN-01`, `SCN-04`, `SCN-07`, `SCN-09`.
- **Domains:** `PD-11`.
- **Ports:** `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`.
- **Milestone:** `BL-17`.
- **Recheck triggers:** Incident tooling; Current rollback mechanisms; also apply every exact source trigger above before publication freeze.
- **Phase status:** Phase 08 remains inactive; this handoff authorizes no manuscript, code, image, asset, PDF, website, publication, course, Abhyaas work, certification, second volume, catalog position 6, or next role.

PHASE07-CHAPTER-PROJECTION-START

```json
{
  "chapter": {
    "chapterId": "MLE-CH-18",
    "order": 18,
    "title": "Contain, Roll Back, Repair, and Requalify",
    "slug": "contain-roll-back-repair-and-requalify",
    "partId": "PART-06",
    "decisionJob": "Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair.",
    "thesis": "A model incident closes only when containment, evidence change, recovery identity, and requalification are explicit.",
    "readerEndpoint": "Replay an incident and produce containment/rollback plus a new evidence-bearing candidate or a durable hold.",
    "prerequisiteArtifacts": [
      "BL-15",
      "BL-16"
    ],
    "incomingState": "OBSERVED",
    "outgoingStates": [
      "REQUALIFIED|ROLLED-BACK"
    ],
    "milestoneId": "BL-17",
    "authorityOwner": "SRE owns incident command/fleet action; evaluation and formal authorities retain their gates.",
    "mleCeiling": "The MLE owns model-specific diagnosis and repair evidence, not fleet command or risk acceptance.",
    "primaryClaimIds": [
      "MLE-BCLM-052",
      "MLE-BCLM-053",
      "MLE-BCLM-054"
    ],
    "sectionIds": [
      "MLE-CH-18-S01",
      "MLE-CH-18-S02",
      "MLE-CH-18-S03",
      "MLE-CH-18-S04",
      "MLE-CH-18-S05",
      "MLE-CH-18-S06",
      "MLE-CH-18-S07",
      "MLE-CH-18-S08"
    ],
    "labIds": [
      "MLE-CH-18-LAB-01",
      "MLE-CH-18-LAB-02"
    ],
    "assessmentIds": [
      "MLE-CH-18-ASMT-01"
    ],
    "visualIds": [
      "MLE-V18.1",
      "MLE-F18.1"
    ],
    "portIds": [
      "PORT-MANAGED",
      "PORT-CLASSICAL",
      "PORT-DEEP",
      "PORT-EDGE",
      "PORT-SHARED"
    ],
    "nextChapterId": "MLE-CH-19"
  },
  "claimTeaching": [
    {
      "claimId": "MLE-BCLM-052",
      "chapterId": "MLE-CH-18",
      "primarySectionId": "MLE-CH-18-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-027",
        "MLE-BSRC-031",
        "MLE-BSRC-042"
      ],
      "caseIds": [
        "CASE-11",
        "CASE-12"
      ],
      "limitation": "Organization-specific incident roles and escalation paths must be supplied locally; the book cannot appoint them.",
      "durability": "durable",
      "volatilityTreatment": "Keep authority separation stable; treat current paging, deployment, and incident tools as replaceable mechanisms.",
      "recheckTriggers": [
        "Blueprint an incident state table with command owner, MLE diagnosis owner, formal decision owner, action, evidence, and timestamp."
      ]
    },
    {
      "claimId": "MLE-BCLM-053",
      "chapterId": "MLE-CH-18",
      "primarySectionId": "MLE-CH-18-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-007",
        "MLE-BSRC-016",
        "MLE-BSRC-027",
        "MLE-BSRC-040"
      ],
      "caseIds": [
        "CASE-12"
      ],
      "limitation": "A platform rollback may restore only deployment-template state; data, feature, model, credential, consumer, and evaluation recovery require separate evidence.",
      "durability": "durable",
      "volatilityTreatment": "Stable identity and requalification rule; version-specific rollback commands remain volatile.",
      "recheckTriggers": [
        "Require a same-identity repair mutation to fail, then construct a new candidate, changed-evidence diff, and requalification packet."
      ]
    },
    {
      "claimId": "MLE-BCLM-054",
      "chapterId": "MLE-CH-18",
      "primarySectionId": "MLE-CH-18-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-030",
        "MLE-BSRC-039",
        "MLE-BSRC-041"
      ],
      "caseIds": [
        "CASE-12"
      ],
      "limitation": "A postmortem records and routes learning; it is not proof that actions were completed or that a repaired model is qualified.",
      "durability": "durable",
      "volatilityTreatment": "Keep record fields stable; incident taxonomy and tooling are contextual.",
      "recheckTriggers": [
        "Blueprint a postmortem-to-requalification chain in which each corrective action has an owner, due state, verification artifact, and affected evidence link."
      ]
    }
  ],
  "sourceUses": [
    {
      "sourceId": "MLE-BSRC-027",
      "claimId": "MLE-BCLM-052",
      "chapterId": "MLE-CH-18",
      "sectionIds": [
        "MLE-CH-18-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "The Core requires contextual profiles, organization-specific authority, and evidence. It does not certify a system, assign legal approval, identify the MLE as a formal authority, or independently establish who owns a particular decision.",
      "durability": "volatile",
      "volatility": "high",
      "recheckTrigger": "Mandatory recheck at every freeze and immediately if the revision notice, Govern, Map, Measure, or Manage outcomes, or a revised AI RMF is published."
    },
    {
      "sourceId": "MLE-BSRC-031",
      "claimId": "MLE-BCLM-052",
      "chapterId": "MLE-CH-18",
      "sectionIds": [
        "MLE-CH-18-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "A catalog entry is not proof that a workload control works and does not authorize the MLE to tailor or accept residual risk alone.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Mandatory recheck at each freeze for a new 5.x release, changed control text, mappings, or baselines."
    },
    {
      "sourceId": "MLE-BSRC-042",
      "claimId": "MLE-BCLM-052",
      "chapterId": "MLE-CH-18",
      "sectionIds": [
        "MLE-CH-18-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Cannot establish general attack prevalence, universal resolver behavior, or complete cleanup across every affected user's environment.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck at each freeze for corrections, newly reported scope, changed indicators, or a linked independent final incident report."
    },
    {
      "sourceId": "MLE-BSRC-007",
      "claimId": "MLE-BCLM-053",
      "chapterId": "MLE-CH-18",
      "sectionIds": [
        "MLE-CH-18-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "The rubric does not establish universal pass scores, domain acceptance, safety, privacy, security, compliance, business outcomes, or workload-specific authority.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck at publication freezes for record and final-paper availability; translate its tests into current workload evidence rather than copying a score threshold."
    },
    {
      "sourceId": "MLE-BSRC-016",
      "claimId": "MLE-BCLM-053",
      "chapterId": "MLE-CH-18",
      "sectionIds": [
        "MLE-CH-18-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Mechanism-only vendor-neutral project documentation; no ML-specific correctness or production-outcome authority.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck Kubernetes version semantics, revision-history defaults, and command behavior at every freeze."
    },
    {
      "sourceId": "MLE-BSRC-027",
      "claimId": "MLE-BCLM-053",
      "chapterId": "MLE-CH-18",
      "sectionIds": [
        "MLE-CH-18-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "The Core requires contextual profiles, organization-specific authority, and evidence. It does not certify a system, assign legal approval, identify the MLE as a formal authority, or independently establish who owns a particular decision.",
      "durability": "volatile",
      "volatility": "high",
      "recheckTrigger": "Mandatory recheck at every freeze and immediately if the revision notice, Govern, Map, Measure, or Manage outcomes, or a revised AI RMF is published."
    },
    {
      "sourceId": "MLE-BSRC-040",
      "claimId": "MLE-BCLM-053",
      "chapterId": "MLE-CH-18",
      "sectionIds": [
        "MLE-CH-18-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Canarying is not a substitute for offline qualification, domain evaluation, security review, or fleet SLO ownership.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck if the chapter is revised; re-evaluate any implementation-specific examples at each freeze."
    },
    {
      "sourceId": "MLE-BSRC-030",
      "claimId": "MLE-BCLM-054",
      "chapterId": "MLE-CH-18",
      "sectionIds": [
        "MLE-CH-18-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Security framework scope does not confer security-risk acceptance or replace model/data/domain evaluation.",
      "durability": "volatile",
      "volatility": "low",
      "recheckTrigger": "Recheck at each freeze for a successor SSDF version or material errata."
    },
    {
      "sourceId": "MLE-BSRC-039",
      "claimId": "MLE-BCLM-054",
      "chapterId": "MLE-CH-18",
      "sectionIds": [
        "MLE-CH-18-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "This is a trading-software incident, not an ML production study; transfer is limited to deployment, alerting, control, incident, and review methods.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck via browser at each freeze and replace only with the linked final SEC order if it provides equivalent accessible facts and limitations."
    },
    {
      "sourceId": "MLE-BSRC-041",
      "claimId": "MLE-BCLM-054",
      "chapterId": "MLE-CH-18",
      "sectionIds": [
        "MLE-CH-18-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Does not define model requalification, domain evidence, risk acceptance, or a universal incident-command structure.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck if the official chapter is revised; preserve named ownership and action-item limitations."
    }
  ],
  "casePlacements": [
    {
      "caseId": "CASE-01",
      "chapterId": "MLE-CH-18",
      "sectionIds": [
        "MLE-CH-18-S04"
      ],
      "usePurpose": "Apply Benchline Inspection Dossier without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-02",
      "chapterId": "MLE-CH-18",
      "sectionIds": [
        "MLE-CH-18-S04"
      ],
      "usePurpose": "Apply Managed demand forecast without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-04",
      "chapterId": "MLE-CH-18",
      "sectionIds": [
        "MLE-CH-18-S04"
      ],
      "usePurpose": "Apply Deep acoustic event classifier without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-05",
      "chapterId": "MLE-CH-18",
      "sectionIds": [
        "MLE-CH-18-S04"
      ],
      "usePurpose": "Apply Shared ranking platform tenant without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-11",
      "chapterId": "MLE-CH-18",
      "sectionIds": [
        "MLE-CH-18-S04"
      ],
      "usePurpose": "Apply PyTorch nightly dependency-chain compromise without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-12",
      "chapterId": "MLE-CH-18",
      "sectionIds": [
        "MLE-CH-18-S04"
      ],
      "usePurpose": "Apply Knight Capital deployment and control failure without exceeding its truth boundary."
    }
  ],
  "dossier": {
    "chapterId": "MLE-CH-18",
    "milestoneId": "BL-17",
    "incomingState": "OBSERVED",
    "inputArtifactIds": [
      "BL-15",
      "BL-16"
    ],
    "inputHashes": [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    ],
    "producedArtifactId": "BL-17",
    "artifactVersion": "1.0.0",
    "legalOutgoingStates": [
      "REQUALIFIED|ROLLED-BACK"
    ],
    "forbiddenTransitions": [
      "HOLD->RELEASABLE",
      "REJECT->RELEASABLE"
    ],
    "reopenTriggers": [
      "purpose or intended use->CONTRACTED",
      "data, labels, features, or population->ADMISSIBLE",
      "runtime, dependencies, interface, or serving envelope->RECONSTRUCTIBLE",
      "authority, constraint, or permitted use->CONTRACTED"
    ],
    "nextChapterId": "MLE-CH-19"
  },
  "ports": [
    {
      "chapterId": "MLE-CH-18",
      "portId": "PORT-MANAGED",
      "invariantDecision": "All ports preserve incident authority, containment, changed evidence, recovery, and requalification semantics.",
      "variableMechanism": "Provider-managed training, registry, serving, and observation.",
      "requiredEvidence": "Exportable identities, limits, configuration, evaluation, release, observation, and recovery records.",
      "externalAuthority": "Provider/platform plus all product/domain/formal owners remain external.",
      "failureInjection": "Unavailable export or opaque provider state.",
      "limitation": "Provider claims are not workload qualification.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-18",
      "portId": "PORT-CLASSICAL",
      "invariantDecision": "All ports preserve incident authority, containment, changed evidence, recovery, and requalification semantics.",
      "variableMechanism": "Local feature transformation and statistical/classical estimator.",
      "requiredEvidence": "Feature identities, bounded run, calibrated/segment evidence where applicable, package, envelope, recovery.",
      "externalAuthority": "Data, evaluation, product/domain, and formal owners remain external.",
      "failureInjection": "Feature order or preprocessing mismatch.",
      "limitation": "Simplicity does not remove lifecycle evidence.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-18",
      "portId": "PORT-DEEP",
      "invariantDecision": "All ports preserve incident authority, containment, changed evidence, recovery, and requalification semantics.",
      "variableMechanism": "Parameterized training, accelerator context, checkpoint, and tensor-serving path.",
      "requiredEvidence": "Data/run/checkpoint/tokenizer-or-preprocessor identities, bounded reproducibility, evaluation, envelope, recovery.",
      "externalAuthority": "Research, evaluation, platform, and formal owners remain external.",
      "failureInjection": "Wrong checkpoint, preprocessing, or hardware-context identity.",
      "limitation": "Model scale and benchmark novelty do not replace evidence.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-18",
      "portId": "PORT-EDGE",
      "invariantDecision": "All ports preserve incident authority, containment, changed evidence, recovery, and requalification semantics.",
      "variableMechanism": "Benchline sensor/image input, constrained runtime, device package, and delayed feedback.",
      "requiredEvidence": "Sensor/data/label identity, edge package, measured envelope, rollback, controls, retirement.",
      "externalAuthority": "Hardware, operations, domain, safety, security, platform, and product owners remain external.",
      "failureInjection": "Sensor shift, resource pressure, or stale device package.",
      "limitation": "Benchline is fictional and cannot imply real industrial performance or safety.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-18",
      "portId": "PORT-SHARED",
      "invariantDecision": "All ports preserve incident authority, containment, changed evidence, recovery, and requalification semantics.",
      "variableMechanism": "Multi-tenant shared features, training, registry, serving, and observability.",
      "requiredEvidence": "Tenant/workload identity, compatibility, resource envelope, control use, recovery, and owner routes.",
      "externalAuthority": "Platform/SRE/security own shared systems and fleet decisions.",
      "failureInjection": "Tenant collision, shared-runtime upgrade, or fleet SLO pressure.",
      "limitation": "Workload evidence cannot claim platform-wide assurance.",
      "transferResult": "PASS"
    }
  ],
  "sections": [
    {
      "sectionId": "MLE-CH-18-S01",
      "chapterId": "MLE-CH-18",
      "order": 1,
      "purpose": "Decision and Bench Setup",
      "teachingAction": "MLE-CH-18 performs the chapter-specific Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair. action at production step 1.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [
        "MLE-CLM-003",
        "MLE-CLM-013",
        "MLE-CLM-016",
        "MLE-CLM-017",
        "MLE-CLM-018",
        "MLE-CLM-019",
        "MLE-CLM-022"
      ],
      "boundaryIds": [
        "BND-05",
        "BND-09",
        "BND-10",
        "BND-11",
        "BND-12",
        "BND-14"
      ],
      "scenarioIds": [
        "SCN-01",
        "SCN-04",
        "SCN-07",
        "SCN-09"
      ],
      "domainIds": [
        "PD-11"
      ],
      "portIds": [],
      "artifactDelta": "BL-17 gains evidence from section 1.",
      "plannedDepth": "screen-first-1",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-18-S02",
      "chapterId": "MLE-CH-18",
      "order": 2,
      "purpose": "Procedure",
      "teachingAction": "MLE-CH-18 performs the chapter-specific Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair. action at production step 2.",
      "claimIds": [
        "MLE-BCLM-052",
        "MLE-BCLM-053",
        "MLE-BCLM-054"
      ],
      "sourceIds": [
        "MLE-BSRC-027",
        "MLE-BSRC-031",
        "MLE-BSRC-042",
        "MLE-BSRC-007",
        "MLE-BSRC-016",
        "MLE-BSRC-040",
        "MLE-BSRC-030",
        "MLE-BSRC-039",
        "MLE-BSRC-041"
      ],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "BL-17 gains evidence from section 2.",
      "plannedDepth": "screen-first-2",
      "claimDisposition": "primary"
    },
    {
      "sectionId": "MLE-CH-18-S03",
      "chapterId": "MLE-CH-18",
      "order": 3,
      "purpose": "Evidence interpretation",
      "teachingAction": "MLE-CH-18 performs the chapter-specific Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair. action at production step 3.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "BL-17 gains evidence from section 3.",
      "plannedDepth": "screen-first-3",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-18-S04",
      "chapterId": "MLE-CH-18",
      "order": 4,
      "purpose": "Worked trace",
      "teachingAction": "MLE-CH-18 performs the chapter-specific Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair. action at production step 4.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [
        "CASE-01",
        "CASE-02",
        "CASE-04",
        "CASE-05",
        "CASE-11",
        "CASE-12"
      ],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "BL-17 gains evidence from section 4.",
      "plannedDepth": "screen-first-4",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-18-S05",
      "chapterId": "MLE-CH-18",
      "order": 5,
      "purpose": "Failure lab",
      "teachingAction": "MLE-CH-18 performs the chapter-specific Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair. action at production step 5.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "BL-17 gains evidence from section 5.",
      "plannedDepth": "screen-first-5",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-18-S06",
      "chapterId": "MLE-CH-18",
      "order": 6,
      "purpose": "Five-port transfer",
      "teachingAction": "MLE-CH-18 performs the chapter-specific Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair. action at production step 6.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [
        "PORT-MANAGED",
        "PORT-CLASSICAL",
        "PORT-DEEP",
        "PORT-EDGE",
        "PORT-SHARED"
      ],
      "artifactDelta": "BL-17 gains evidence from section 6.",
      "plannedDepth": "screen-first-6",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-18-S07",
      "chapterId": "MLE-CH-18",
      "order": 7,
      "purpose": "Assessment and Qualification Gate",
      "teachingAction": "MLE-CH-18 performs the chapter-specific Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair. action at production step 7.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "BL-17 gains evidence from section 7.",
      "plannedDepth": "screen-first-7",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-18-S08",
      "chapterId": "MLE-CH-18",
      "order": 8,
      "purpose": "Durable handoff",
      "teachingAction": "MLE-CH-18 performs the chapter-specific Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair. action at production step 8.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "BL-17 gains evidence from section 8.",
      "plannedDepth": "screen-first-8",
      "claimDisposition": "cross-reference"
    }
  ],
  "labs": [
    {
      "labId": "MLE-CH-18-LAB-01",
      "chapterId": "MLE-CH-18",
      "truthState": "synthetic-deterministic",
      "inputContract": "MLE-CH-18 fixed offline fixture 1",
      "fixedFixtureIds": [
        "FIX-MLE-CH-18-1"
      ],
      "redFailures": [
        "missing expected evidence"
      ],
      "expectedEvidence": [
        "BL-17 deterministic record"
      ],
      "prohibitedEffects": [
        "No network, provider, production, or authority mutation."
      ],
      "legalDispositions": [
        "PASS",
        "HOLD",
        "REJECT",
        "REOPEN"
      ],
      "acceptanceChecks": [
        "MLE-CH-18 evidence identity and owner route remain exact."
      ]
    },
    {
      "labId": "MLE-CH-18-LAB-02",
      "chapterId": "MLE-CH-18",
      "truthState": "synthetic-deterministic",
      "inputContract": "MLE-CH-18 fixed offline fixture 2",
      "fixedFixtureIds": [
        "FIX-MLE-CH-18-2"
      ],
      "redFailures": [
        "illegal promotion or self-approval"
      ],
      "expectedEvidence": [
        "BL-17 deterministic record"
      ],
      "prohibitedEffects": [
        "No network, provider, production, or authority mutation."
      ],
      "legalDispositions": [
        "PASS",
        "HOLD",
        "REJECT",
        "REOPEN"
      ],
      "acceptanceChecks": [
        "MLE-CH-18 evidence identity and owner route remain exact."
      ]
    }
  ],
  "assessment": [
    {
      "assessmentId": "MLE-CH-18-ASMT-01",
      "chapterId": "MLE-CH-18",
      "exerciseOutput": "BL-17 evidence artifact",
      "rubric": "Assess Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair. with observable evidence.",
      "answerIntent": "Explain the decision, evidence, state, owner, and next action.",
      "observablePassEvidence": "BL-17 passes its named qualification gate.",
      "authorityLimit": "The MLE owns model-specific diagnosis and repair evidence, not fleet command or risk acceptance.",
      "retryRoute": "HOLD or REOPEN with new evidence; never self-approve."
    }
  ],
  "visuals": [
    {
      "visualId": "MLE-V18.1",
      "chapterId": "MLE-CH-18",
      "kind": "semantic-html-css",
      "insertionAnchor": "MLE-CH-18-S03",
      "decisionHelped": "Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair.",
      "essentialLabels": [
        "decision",
        "evidence",
        "state",
        "owner",
        "next action"
      ],
      "captionIntent": "Explain the BL-17 decision evidence.",
      "altIntent": "Text alternative for MLE-CH-18 evidence flow.",
      "longDescriptionIntent": "Ordered description of MLE-CH-18 evidence, state, owner, and next action.",
      "numericTruthDisposition": "semantic-html-css",
      "candidateStatus": "not-applicable",
      "reservedPath": null
    },
    {
      "visualId": "MLE-F18.1",
      "chapterId": "MLE-CH-18",
      "kind": "imagegen-candidate",
      "insertionAnchor": "MLE-CH-18-S03",
      "decisionHelped": "Separate incident command from workload diagnosis, contain or roll back, bind changed evidence, and require a new candidate identity after repair.",
      "essentialLabels": [
        "decision",
        "evidence",
        "state",
        "owner",
        "next action"
      ],
      "captionIntent": "Explain the BL-17 decision evidence.",
      "altIntent": "Text alternative for MLE-CH-18 evidence flow.",
      "longDescriptionIntent": "Ordered description of MLE-CH-18 evidence, state, owner, and next action.",
      "numericTruthDisposition": "semantic-html-css",
      "candidateStatus": "reserved",
      "reservedPath": "assets/images/machine-learning-engineering/MLE-F18.1-2400x1600.png"
    }
  ],
  "handoff": {
    "chapterId": "MLE-CH-18",
    "phase08Instructions": "Write MLE-CH-18 from this blueprint without inventing evidence or authority.",
    "continuityBridge": "OBSERVED becomes REQUALIFIED|ROLLED-BACK through BL-17.",
    "wordRange": "2400-3200",
    "wordRangeRationale": "Screen-first teaching requires visible procedure, evidence, failure, transfer, and qualification blocks.",
    "recheckTriggers": [
      "Incident tooling",
      "Current rollback mechanisms"
    ],
    "prohibitedClaims": [
      "No universal performance, safety, compliance, or business outcome claim."
    ],
    "evidenceManifest": [
      "MLE-BCLM-052",
      "MLE-BCLM-053",
      "MLE-BCLM-054"
    ]
  }
}
```

PHASE07-CHAPTER-PROJECTION-END
