# MLE-CH-06 — Split Without Leakage and Test Train-Serve Conformance

Blueprint status: Phase 07 production specification; not manuscript prose. Author: Komal Nakrani. Creative system: Learning Systems Test Bench.

## Frozen identity and production target

- Chapter/order: `MLE-CH-06` / 6
- Slug/part: `split-without-leakage-and-test-train-serve-conformance` / `PART-02`
- Decision job: Choose population-aware splits and prove that training and serving transformations conform.
- Thesis: A candidate is inadmissible when time, identity, population, or transformation leakage contaminates its evidence.
- Reader endpoint: Fail a leaked split, stale identity, or serving-transform mismatch and record bounded exceptions.
- Milestone: `BL-05` — Split and conformance evidence
- State: `CONTRACTED` → `ADMISSIBLE`
- Word range: 4,500-5,100 words
- Word-range rationale: Temporal, entity, population, and transformation checks need distinct diagrams and limitation panels so parity is never confused with quality.

## Observable objectives

- Fail temporal, repeated-entity, and post-outcome leakage with a named information path.
- Record target population, time window, group keys, anticipated shifts, and the external judge of representativeness.
- Compare matched train and serve identities, values, missingness, transformations, distributions, and prediction context.
- Move CONTRACTED to ADMISSIBLE only with BL-03 through BL-05 evidence.

## Prerequisites and five-sentence dossier bridge

Prerequisite artifacts: `BL-03`, `BL-04`.

1. The inputs are BL-03 and BL-04, carrying dataset/label identity and the complete transformation/feedback graph.
2. The prior state is CONTRACTED because leakage safety, population relevance, and train-serve conformance remain unresolved.
3. This chapter adds split keys, cutoff, time and group identity, anticipated shifts, matched example IDs, parity dimensions, thresholds, owners, and strongest limitation.
4. BL-05 can move the dossier to ADMISSIBLE only when every named leakage mutation fails as expected and external owners accept representativeness obligations.
5. Chapter 07 consumes BL-05 and must freeze these admissible inputs rather than changing them to favor a candidate.

## Owned decision and retained authority

- MLE responsibility: Design workload splits, execute leakage and conformance tests, and report their limitations.
- Authority owner: Domain/evaluation owners judge representativeness; platform/data owners retain shared runtime/source authority.
- MLE ceiling: The MLE designs workload splits and conformance tests but cannot self-certify population validity.
- Boundaries: `BND-02`, `BND-09`, `BND-10`, `BND-17`
- Escalation: Route representativeness to domain/evaluation owners and shared source/runtime issues to data/platform owners.
- Explicit non-scope: No population-validity self-certification, domain label approval, external-validity claim, model-quality claim, or platform-wide parity assurance.

## Production sequence

| Section | Production job | Teaching action | State and dossier delta | Planned depth |
|---|---|---|---|---|
| `MLE-CH-06-S01` | Decision and Bench Setup | Frame MLE-CH-06 as a decision bench for: Choose population-aware splits and prove that training and serving transformations conform. | Declare the BL-05 decision, inputs, state, owners, boundaries, and next evidence. | 450-550 words |
| `MLE-CH-06-S02` | Procedure | Teach the ordered procedure for MLE-CH-06: Choose population-aware splits and prove that training and serving transformations conform. | Bind claims MLE-BCLM-016, MLE-BCLM-017, MLE-BCLM-018 to one primary teaching treatment. | 700-850 words |
| `MLE-CH-06-S03` | Evidence interpretation | Interpret strongest evidence, counterexample, and limitation for MLE-CH-06: Choose population-aware splits and prove that training and serving transformations conform. | Record the strongest conclusion and the exact evidence ceiling for BL-05. | 500-600 words |
| `MLE-CH-06-S04` | Worked trace | Trace Benchline and bounded satellite/public cases for MLE-CH-06: Choose population-aware splits and prove that training and serving transformations conform. | Apply CASE-01, CASE-03, CASE-04, CASE-05, CASE-06, CASE-07 while preserving constructed/public truth labels. | 550-650 words |
| `MLE-CH-06-S05` | Failure lab | Inject named RED failures and diagnose disposition for MLE-CH-06: Choose population-aware splits and prove that training and serving transformations conform. | Record diagnostics for TEMPORAL-LEAK, ENTITY-LEAK, SERVE-MISMATCH. | 500-600 words |
| `MLE-CH-06-S06` | Five-port transfer | Transfer the invariant decision through five equal ports for MLE-CH-06: Choose population-aware splits and prove that training and serving transformations conform. | Prove the same decision and evidence shape across PORT-MANAGED, PORT-CLASSICAL, PORT-DEEP, PORT-EDGE, PORT-SHARED. | 550-650 words |
| `MLE-CH-06-S07` | Assessment and Qualification Gate | Assess an observable artifact at the Qualification Gate for MLE-CH-06: Choose population-aware splits and prove that training and serving transformations conform. | Qualify BL-05 through an artifact-based assessment and owner-routed retry. | 450-550 words |
| `MLE-CH-06-S08` | Durable handoff | Package the state and dossier delta for Phase 08 continuity in MLE-CH-06: Choose population-aware splits and prove that training and serving transformations conform. | Freeze the BL-05 handoff, limitations, recheck triggers, and next dependency. | 350-450 words |

Primary teaching is confined to `MLE-CH-06-S02`; later appearances are trace, failure, transfer, assessment, or handoff uses rather than duplicate primary treatments.

## Bench Setup, Bench Sheet, and Qualification Gate

### Bench Setup

| Field | Frozen value |
|---|---|
| decision | Choose population-aware splits and prove that training and serving transformations conform. |
| evidence | `MLE-BCLM-016`, `MLE-BCLM-017`, `MLE-BCLM-018` supported by `MLE-BSRC-014`, `MLE-BSRC-015`, `MLE-BSRC-013`, `MLE-BSRC-025`, `MLE-BSRC-024`, `MLE-BSRC-044` |
| state | `CONTRACTED` |
| owner | Domain/evaluation owners judge representativeness; platform/data owners retain shared runtime/source authority. |
| next action | Execute the two deterministic labs and prepare `BL-05`. |

### Bench Sheet

| Field | Required reader record |
|---|---|
| decision | PASS, HOLD, REJECT, or REOPEN with one-sentence rationale |
| evidence | Input identities, measurements, failures, limitations, and hashes |
| state and dossier delta | `CONTRACTED` → `ADMISSIBLE`; produce `BL-05` v1.0.0 |
| authority route | Route representativeness to domain/evaluation owners and shared source/runtime issues to data/platform owners. |
| next evidence | A controlled baseline/candidate comparison that freezes BL-05 inputs and changes only the claimed intervention. |

### Qualification Gate

The gate passes only when the decision, evidence, state, owner, limitation, authority route, and next evidence are all explicit. Missing or disputed authority produces HOLD; a forbidden promotion produces REJECT; changed upstream evidence produces REOPEN.

## Skill procedure and evidence interpretation

1. Name prediction time, target population, time window, entity/group keys, cutoff, and anticipated shifts.
2. Construct temporal, repeated-entity, and post-outcome leakage fixtures.
3. Freeze train and serve transformation identities plus matched example IDs.
4. Compare schema, values/distributions, missingness, transformations, and prediction context.
5. Issue ADMISSIBLE only with clean evidence, external owner acceptance, and an explicit remaining limitation.

- Strongest supportable conclusion: Admissibility requires both uncontaminated split evidence and bounded train-serve conformance evidence.
- Counterexample: Perfect train-serve parity does not rescue a split that leaks post-outcome information or excludes the intended deployment population.
- Limitation: No finite test proves the absence of every leakage path or establishes population validity and model quality.

Claim/source contract:

| Claim | Accepted sources | Limitation | Treatment |
|---|---|---|---|
| `MLE-BCLM-016` | `MLE-BSRC-014`, `MLE-BSRC-015` | The correct grouping and time boundary require workload and domain knowledge; no generic algorithm proves absence of leakage. | durable |
| `MLE-BCLM-017` | `MLE-BSRC-013`, `MLE-BSRC-025` | WILDS demonstrates selected shifts and FDA guidance is sector-specific; neither sets universal representativeness criteria. | durable |
| `MLE-BCLM-018` | `MLE-BSRC-015`, `MLE-BSRC-024`, `MLE-BSRC-044` | Google and Uber mechanisms are first-party; comparator coverage and alert thresholds do not establish external validity. | volatile mechanism context |

## Benchline artifact contract

- Inputs: BENCHLINE-SPLIT-006 with timestamped synthetic entities, group keys, future-derived field, matched train/serve rows, and shift assumptions.
- Version/hash: `BL-05` v1.0.0; the deterministic fixture and produced record receive SHA-256 identities at execution time.
- Mutations: TEMPORAL-LEAK: cross the prediction cutoff and require REJECT. ENTITY-LEAK: place repeated device IDs on both sides and require HOLD. SERVE-MISMATCH: change missing-value handling for a matched ID and require REJECT.
- Output: BL-05 split and conformance evidence with leakage paths, parity matrix, owner decisions, and remaining limitation.
- Evidence: fixed input identity, mutation result, measured record, explicit limitation, owner, disposition, and next action.
- Owner: Domain/evaluation owners judge representativeness; platform/data owners retain shared runtime/source authority.
- Authority route: Route representativeness to domain/evaluation owners and shared source/runtime issues to data/platform owners.
- Legal dispositions: PASS, HOLD, REJECT, REOPEN.
- Acceptance checks: exact artifact identity; expected failure discrimination; no silent upstream repair; no automatic promotion; no MLE self-approval.

## Future deterministic companion contract

- Truth label: `synthetic-deterministic`.
- Lab 01 is the positive fixed-fixture path; Lab 02 injects illegal promotion or self-approval.
- Fixtures remain offline, provider-neutral, immutable, and free of network, production, or authority mutation.
- Expected records are `BL-05` evidence, input/output hashes, named failures, disposition, owner route, and next evidence.
- Phase 07 creates no companion code; these are only future execution contracts.

## Failure injections and diagnostics

- TEMPORAL-LEAK: cross the prediction cutoff and require REJECT.
- ENTITY-LEAK: place repeated device IDs on both sides and require HOLD.
- SERVE-MISMATCH: change missing-value handling for a matched ID and require REJECT.

Diagnostic evidence must distinguish the newly injected failure from pre-existing gaps. Repair may change only the failed contract field and must create a new artifact identity. HOLD and REJECT can never promote directly to RELEASABLE, and the workload owner cannot self-approve an external gate.

## Five-port transfer table

| Port | Replaceable mechanics | Invariant decision | Required evidence | Failure injection | Limitation |
|---|---|---|---|---|---|
| `PORT-MANAGED` | Provider-managed training, registry, serving, and observation. | All ports prove equivalent split identity and train-serve semantics despite different execution mechanics. | Exportable identities, limits, configuration, evaluation, release, observation, and recovery records. | Unavailable export or opaque provider state. | Provider claims are not workload qualification. |
| `PORT-CLASSICAL` | Local feature transformation and statistical/classical estimator. | All ports prove equivalent split identity and train-serve semantics despite different execution mechanics. | Feature identities, bounded run, calibrated/segment evidence where applicable, package, envelope, recovery. | Feature order or preprocessing mismatch. | Simplicity does not remove lifecycle evidence. |
| `PORT-DEEP` | Parameterized training, accelerator context, checkpoint, and tensor-serving path. | All ports prove equivalent split identity and train-serve semantics despite different execution mechanics. | Data/run/checkpoint/tokenizer-or-preprocessor identities, bounded reproducibility, evaluation, envelope, recovery. | Wrong checkpoint, preprocessing, or hardware-context identity. | Model scale and benchmark novelty do not replace evidence. |
| `PORT-EDGE` | Benchline sensor/image input, constrained runtime, device package, and delayed feedback. | All ports prove equivalent split identity and train-serve semantics despite different execution mechanics. | Sensor/data/label identity, edge package, measured envelope, rollback, controls, retirement. | Sensor shift, resource pressure, or stale device package. | Benchline is fictional and cannot imply real industrial performance or safety. |
| `PORT-SHARED` | Multi-tenant shared features, training, registry, serving, and observability. | All ports prove equivalent split identity and train-serve semantics despite different execution mechanics. | Tenant/workload identity, compatibility, resource envelope, control use, recovery, and owner routes. | Tenant collision, shared-runtime upgrade, or fleet SLO pressure. | Workload evidence cannot claim platform-wide assurance. |

Every port retains equal status: no provider, model family, device, or shared platform becomes the curriculum spine.

## Cases and truth boundaries

- **CASE-01 — Benchline Inspection Dossier** — FICTIONAL SYNTHETIC CAPSTONE
  - Truth rule: All data, results, incidents, and outcomes are constructed; primary sources support doctrine only.
  - Reported facts: none; the fixture is constructed.
  - Attributed outcomes: none.
  - Allowed inference: use only the synthetic decision trace defined in this chapter.
  - Forbidden inference: Do not infer unreported outcomes for Benchline Inspection Dossier.
  - Limitation: No real production, industrial, safety, performance, or business claim.
  - Transfer rule: Every chapter decision must transfer to the four satellite ports.

- **CASE-03 — Classical credit triage** — CONSTRUCTED SATELLITE
  - Truth rule: Synthetic records only; no lending, fairness, compliance, or outcome claim.
  - Reported facts: none; the fixture is constructed.
  - Attributed outcomes: none.
  - Allowed inference: use only the synthetic decision trace defined in this chapter.
  - Forbidden inference: Do not infer unreported outcomes for Classical credit triage.
  - Limitation: Not financial advice or credit authorization.
  - Transfer rule: Must satisfy the same evidence interface without deep-learning assumptions.

- **CASE-04 — Deep acoustic event classifier** — CONSTRUCTED SATELLITE
  - Truth rule: Synthetic fixtures and bounded local runs only; no field performance claim.
  - Reported facts: none; the fixture is constructed.
  - Attributed outcomes: none.
  - Allowed inference: use only the synthetic decision trace defined in this chapter.
  - Forbidden inference: Do not infer unreported outcomes for Deep acoustic event classifier.
  - Limitation: Not a deep-learning recipe book.
  - Transfer rule: Must preserve the same decision/evidence job when swapped for another model family.

- **CASE-05 — Shared ranking platform tenant** — CONSTRUCTED SATELLITE
  - Truth rule: Synthetic tenant and fleet evidence; no SLO or platform assurance claim.
  - Reported facts: none; the fixture is constructed.
  - Attributed outcomes: none.
  - Allowed inference: use only the synthetic decision trace defined in this chapter.
  - Forbidden inference: Do not infer unreported outcomes for Shared ranking platform tenant.
  - Limitation: Not a platform-engineering curriculum.
  - Transfer rule: Workload evidence must remain valid when the shared substrate changes.

- **CASE-06 — Google ML Test Score production-readiness method** — PUBLIC REPORTED CASE
  - Truth rule: Use only the paper's reported 2017 test taxonomy and attributed author claims; treat NIST AI RMF and TensorFlow Data Validation only as bounded transfer context, and invent no certification, universal threshold, causal readiness outcome, or formal approval.
  - Reported fact: The paper presents 28 specific tests and monitoring needs grouped as a production-readiness rubric.
  - Reported fact: The authors state that the tests are drawn from experience with a wide range of production ML systems.
  - Reported fact: The method includes data/feature, model-development, infrastructure, and monitoring concerns beyond offline model evaluation.
  - Attributed outcome: The authors characterize the rubric as an easy-to-follow roadmap for improving production readiness and reducing technical debt; the paper does not provide a universal causal or quantitative outcome for adopting it.
  - Allowed inference: A multi-layer test inventory can reveal missing evidence that a model-only review would miss.
  - Allowed inference: The useful transfer unit is a test's decision job and evidence, not its point value.
  - Allowed inference: A HOLD can be justified by a release-critical missing test even when other checks pass.
  - Forbidden inference: Do not infer unreported outcomes for Google ML Test Score production-readiness method.
  - Limitation: No universal score or threshold is supported. The paper predates many current frameworks and deployment patterns. Google experience is not independent evidence of outcomes elsewhere. No paper figure, wording, or proprietary implementation is imported.
  - Transfer rule: Select tests from failure modes and consequence, never to satisfy a count quota. Replace point totals with evidence-bearing PASS, HOLD, or REJECT decisions and named owners. Use current official mechanisms only as examples that implement a test category. Carry the method across all five ports without assuming a shared platform.

- **CASE-07 — Uber Michelangelo feature and deployment evidence pattern** — PUBLIC REPORTED CASE
  - Truth rule: Use only Uber's dated first-party descriptions and attributed scale or adoption statements; supporting external sources provide doctrine or mechanism context, and no independent safety, reliability, business-value, or platform-assurance outcome is invented.
  - Reported fact: Uber's 2017 report says that before Michelangelo it lacked uniform reproducible training and prediction pipelines, a standard experiment store and comparison path, and an established model deployment path.
  - Reported fact: The 2017 report describes a six-step workflow covering data management, training, evaluation, deployment, prediction, and monitoring, with a shared feature store and offline/online mechanisms.
  - Reported fact: Uber's 2025 report describes schema validation, identical missing-value and imputation handling between training and serving, recorded offline feature statistics, standardized model reports, and deployment validation mechanisms.
  - Attributed outcome: Uber reported in 2017 that Michelangelo had served production use cases for about a year, had become its de-facto ML system, and was used by dozens of teams; these are not independently audited here.
  - Attributed outcome: Uber reported in 2025 that Michelangelo supported over 400 active use cases, more than 20,000 monthly training jobs, and over 15 million real-time predictions per second at peak; all quantities remain 2025 first-party claims.
  - Allowed inference: Stable feature, transformation, input, and run identities can make conformance failures and comparison gaps easier to detect.
  - Allowed inference: A shared platform can supply mechanisms for workload evidence without itself qualifying the workload.
  - Allowed inference: Training-serving parity needs measured evidence even when the organization reuses code or a feature store.
  - Forbidden inference: Do not infer unreported outcomes for Uber Michelangelo feature and deployment evidence pattern.
  - Limitation: First-party reports, not an independent audit or incident postmortem. The 2017 and 2025 system states differ and must not be collapsed into one timeless architecture. The public pages returned HTTP 406 to command-line ranged GET and were verified through the browser path. No Uber prose, figures, UI, branding, or architecture drawings may be imported into the book.
  - Transfer rule: Re-express every lesson as provider-neutral evidence fields and validation decisions. Carry an as-of date beside every reported quantity or mechanism state. Require the same transformation, lineage, comparison, and limitation evidence for managed, classical, deep, edge, and shared ports. Do not claim that adopting a feature store or tracker reproduces Uber's reported outcomes.

## Exercises, assessment, and answer intent

- Exercise output: Repair a split with temporal and entity leakage, then state what the corrected evidence still cannot prove.
- Rubric: assess Choose population-aware splits and prove that training and serving transformations conform. using exact identities, observable evidence, explicit limitation, state, owner, disposition, and next action.
- Answer intent: explain why the evidence supports the disposition and what it does not support.
- Observable PASS evidence: `BL-05` passes its named Qualification Gate and preserves all authority limits.
- HOLD/REJECT/REOPEN path: issue a new evidence request and artifact version; never silently repair or self-approve.
- Authority limit: The MLE designs workload splits and conformance tests but cannot self-certify population validity.

## Visual and accessibility contract

Semantic split rails and a train/serve parity matrix with exact IDs, thresholds, differences, owner, disposition, and a separate limitation panel.

| Visual | Treatment | Anchor | Essential labels | Candidate | Reserved path |
|---|---|---|---|---|---|
| `MLE-V06.1` | semantic-html-css | `MLE-CH-06-S03` | decision, evidence, state, owner, next action | not-applicable | none |

Caption intent: explain the `BL-05` decision evidence. Alt intent: identify the decision, evidence, state, owner, and next action. Long description follows the visual in reading order and enumerates every relationship. All IDs, values, thresholds, axes, tables, and numeric truth remain selectable semantic HTML/CSS; color is never the only signal.

## Durable doctrine, volatile context, and re-verification

- Durable doctrine: Split identity, leakage tests, and train-serve conformance are release evidence.
- Volatile examples: Current data-frame library; Current serving transform API.
- `MLE-BCLM-016`: Retain learn-predict separation as doctrine and version concrete split keys, cutoff times, and exception policies. Recheck when: Blueprint temporal, repeated-entity, and post-outcome feature mutations that each fail with a named leaked information path.
- `MLE-BCLM-017`: Version population and shift assumptions with the task contract and do not treat a benchmark taxonomy as exhaustive. Recheck when: Blueprint a split dossier that states what changed, what remained invariant, who judges representativeness, and the strongest remaining limitation.
- `MLE-BCLM-018`: Freeze conformance dimensions and date tool APIs, thresholds, and platform reports. Recheck when: Blueprint parity checks with matched example IDs and a separate limitation panel that forbids interpreting parity as quality or authorization.
- Dated mechanisms, job postings, tool APIs, framework behavior, platform reports, and sector guidance cannot enter durable doctrine without a fresh identity and bounded authority statement.

## Originality and adjacent-publication boundary

ND-01 through ND-10 PASS: the endpoint is workload admissibility evidence, not independent evaluation assurance, enterprise data validation, or an adjacent publication workflow.

PUB-01 through PUB-05 remain input/output neighbors only. The chapter creates a versioned learning-workload disposition and Benchline dossier delta; it does not copy their prose, cases, figures, layouts, accountable centers, or reader endpoints. Replaceability across classical, deep, managed, edge, and shared ports remains mandatory.

## Phase 08 handoff and evidence manifest

- Writer instruction: Draft MLE-CH-06 from this projection, keep the eight-section order, preserve all claim/source/case identities, and render BL-05 as selectable screen-first evidence furniture.
- Continuity: Consume BL-03 and BL-04 without silent repair; produce BL-05 for MLE-CH-07.
- Prohibited claims: No population-validity self-certification, domain label approval, external-validity claim, model-quality claim, or platform-wide parity assurance. Do not invent public-case facts, outcomes, authority, production results, or certification. Do not activate Phase 08, create code, or generate assets from this blueprint.
- Claims: `MLE-BCLM-016`, `MLE-BCLM-017`, `MLE-BCLM-018`
- Sources: `MLE-BSRC-014`, `MLE-BSRC-015`, `MLE-BSRC-013`, `MLE-BSRC-025`, `MLE-BSRC-024`, `MLE-BSRC-044`
- Cases: `CASE-01`, `CASE-03`, `CASE-04`, `CASE-05`, `CASE-06`, `CASE-07`
- Architecture claims: `MLE-CLM-004`, `MLE-CLM-009`, `MLE-CLM-010`, `MLE-CLM-017`
- Boundaries: `BND-02`, `BND-09`, `BND-10`, `BND-17`
- Scenarios: `SCN-03`, `SCN-08`
- Domains: `PD-03`
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`
- Milestone: `BL-05`
- Phase 08 remains inactive.

PHASE07-CHAPTER-PROJECTION-START

```json
{
  "chapter": {
    "chapterId": "MLE-CH-06",
    "order": 6,
    "title": "Split Without Leakage and Test Train-Serve Conformance",
    "slug": "split-without-leakage-and-test-train-serve-conformance",
    "partId": "PART-02",
    "decisionJob": "Choose population-aware splits and prove that training and serving transformations conform.",
    "thesis": "A candidate is inadmissible when time, identity, population, or transformation leakage contaminates its evidence.",
    "readerEndpoint": "Fail a leaked split, stale identity, or serving-transform mismatch and record bounded exceptions.",
    "prerequisiteArtifacts": [
      "BL-03",
      "BL-04"
    ],
    "incomingState": "CONTRACTED",
    "outgoingStates": [
      "ADMISSIBLE"
    ],
    "milestoneId": "BL-05",
    "authorityOwner": "Domain/evaluation owners judge representativeness; platform/data owners retain shared runtime/source authority.",
    "mleCeiling": "The MLE designs workload splits and conformance tests but cannot self-certify population validity.",
    "primaryClaimIds": [
      "MLE-BCLM-016",
      "MLE-BCLM-017",
      "MLE-BCLM-018"
    ],
    "sectionIds": [
      "MLE-CH-06-S01",
      "MLE-CH-06-S02",
      "MLE-CH-06-S03",
      "MLE-CH-06-S04",
      "MLE-CH-06-S05",
      "MLE-CH-06-S06",
      "MLE-CH-06-S07",
      "MLE-CH-06-S08"
    ],
    "labIds": [
      "MLE-CH-06-LAB-01",
      "MLE-CH-06-LAB-02"
    ],
    "assessmentIds": [
      "MLE-CH-06-ASMT-01"
    ],
    "visualIds": [
      "MLE-V06.1"
    ],
    "portIds": [
      "PORT-MANAGED",
      "PORT-CLASSICAL",
      "PORT-DEEP",
      "PORT-EDGE",
      "PORT-SHARED"
    ],
    "nextChapterId": "MLE-CH-07"
  },
  "claimTeaching": [
    {
      "claimId": "MLE-BCLM-016",
      "chapterId": "MLE-CH-06",
      "primarySectionId": "MLE-CH-06-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-014",
        "MLE-BSRC-015"
      ],
      "caseIds": [
        "CASE-01",
        "CASE-03",
        "CASE-04",
        "CASE-05"
      ],
      "limitation": "The correct grouping and time boundary require workload and domain knowledge; no generic algorithm proves absence of leakage.",
      "durability": "durable",
      "volatilityTreatment": "Retain learn-predict separation as doctrine and version concrete split keys, cutoff times, and exception policies.",
      "recheckTriggers": [
        "Blueprint temporal, repeated-entity, and post-outcome feature mutations that each fail with a named leaked information path."
      ]
    },
    {
      "claimId": "MLE-BCLM-017",
      "chapterId": "MLE-CH-06",
      "primarySectionId": "MLE-CH-06-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-013",
        "MLE-BSRC-025"
      ],
      "caseIds": [
        "CASE-01",
        "CASE-03",
        "CASE-04",
        "CASE-05"
      ],
      "limitation": "WILDS demonstrates selected shifts and FDA guidance is sector-specific; neither sets universal representativeness criteria.",
      "durability": "durable",
      "volatilityTreatment": "Version population and shift assumptions with the task contract and do not treat a benchmark taxonomy as exhaustive.",
      "recheckTriggers": [
        "Blueprint a split dossier that states what changed, what remained invariant, who judges representativeness, and the strongest remaining limitation."
      ]
    },
    {
      "claimId": "MLE-BCLM-018",
      "chapterId": "MLE-CH-06",
      "primarySectionId": "MLE-CH-06-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-015",
        "MLE-BSRC-024",
        "MLE-BSRC-044"
      ],
      "caseIds": [
        "CASE-01",
        "CASE-03",
        "CASE-04",
        "CASE-05",
        "CASE-06",
        "CASE-07"
      ],
      "limitation": "Google and Uber mechanisms are first-party; comparator coverage and alert thresholds do not establish external validity.",
      "durability": "volatile",
      "volatilityTreatment": "Freeze conformance dimensions and date tool APIs, thresholds, and platform reports.",
      "recheckTriggers": [
        "Blueprint parity checks with matched example IDs and a separate limitation panel that forbids interpreting parity as quality or authorization."
      ]
    }
  ],
  "sourceUses": [
    {
      "sourceId": "MLE-BSRC-014",
      "claimId": "MLE-BCLM-016",
      "chapterId": "MLE-CH-06",
      "sectionIds": [
        "MLE-CH-06-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "The paper does not enumerate every modern leakage mode or prove a particular split valid.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck institutional record and DOI at publication freezes; replace only with an author-controlled full-text record if the current page is withdrawn."
    },
    {
      "sourceId": "MLE-BSRC-015",
      "claimId": "MLE-BCLM-016",
      "chapterId": "MLE-CH-06",
      "sectionIds": [
        "MLE-CH-06-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Named Google mechanisms and observations require transfer tests; the guide does not decide intended purpose or acceptable consequence.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck the living page at all three publication freezes and record material rule-number or content changes."
    },
    {
      "sourceId": "MLE-BSRC-013",
      "claimId": "MLE-BCLM-017",
      "chapterId": "MLE-CH-06",
      "sectionIds": [
        "MLE-CH-06-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Benchmark performance cannot authorize real-world use or set a workload's split strategy.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck PMLR record at publication freezes; preserve the 2021 benchmark scope and avoid importing benchmark visuals."
    },
    {
      "sourceId": "MLE-BSRC-025",
      "claimId": "MLE-BCLM-017",
      "chapterId": "MLE-CH-06",
      "sectionIds": [
        "MLE-CH-06-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Transfer only the representative-evaluation and consequence principles; do not turn this book into medical-device guidance.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck the FDA/IMDRF publication status at each freeze and preserve the N88 FINAL:2025 edition identity if cited."
    },
    {
      "sourceId": "MLE-BSRC-015",
      "claimId": "MLE-BCLM-018",
      "chapterId": "MLE-CH-06",
      "sectionIds": [
        "MLE-CH-06-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Named Google mechanisms and observations require transfer tests; the guide does not decide intended purpose or acceptable consequence.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck the living page at all three publication freezes and record material rule-number or content changes."
    },
    {
      "sourceId": "MLE-BSRC-024",
      "claimId": "MLE-BCLM-018",
      "chapterId": "MLE-CH-06",
      "sectionIds": [
        "MLE-CH-06-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Detection coverage and thresholds are implementation- and domain-specific. Passing input comparisons does not prove provenance, permission, representativeness, label truth, model adequacy, causal attribution, or permission to retrain and promote.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck at every freeze and whenever TFX/TFDV releases alter schemas, comparators, API fields, threshold behavior, or tutorial semantics."
    },
    {
      "sourceId": "MLE-BSRC-044",
      "claimId": "MLE-BCLM-018",
      "chapterId": "MLE-CH-06",
      "sectionIds": [
        "MLE-CH-06-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Cannot prove that these controls universally prevent incidents or that stated outcomes transfer outside Uber.",
      "durability": "durable",
      "volatility": "medium",
      "recheckTrigger": "Browser-recheck at all three publication freezes and preserve the 2025 as-of date for all mechanisms and quantities."
    }
  ],
  "casePlacements": [
    {
      "caseId": "CASE-01",
      "chapterId": "MLE-CH-06",
      "sectionIds": [
        "MLE-CH-06-S04"
      ],
      "usePurpose": "Apply Benchline Inspection Dossier without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-03",
      "chapterId": "MLE-CH-06",
      "sectionIds": [
        "MLE-CH-06-S04"
      ],
      "usePurpose": "Apply Classical credit triage without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-04",
      "chapterId": "MLE-CH-06",
      "sectionIds": [
        "MLE-CH-06-S04"
      ],
      "usePurpose": "Apply Deep acoustic event classifier without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-05",
      "chapterId": "MLE-CH-06",
      "sectionIds": [
        "MLE-CH-06-S04"
      ],
      "usePurpose": "Apply Shared ranking platform tenant without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-06",
      "chapterId": "MLE-CH-06",
      "sectionIds": [
        "MLE-CH-06-S04"
      ],
      "usePurpose": "Apply Google ML Test Score production-readiness method without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-07",
      "chapterId": "MLE-CH-06",
      "sectionIds": [
        "MLE-CH-06-S04"
      ],
      "usePurpose": "Apply Uber Michelangelo feature and deployment evidence pattern without exceeding its truth boundary."
    }
  ],
  "dossier": {
    "chapterId": "MLE-CH-06",
    "milestoneId": "BL-05",
    "incomingState": "CONTRACTED",
    "inputArtifactIds": [
      "BL-03",
      "BL-04"
    ],
    "inputHashes": [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    ],
    "producedArtifactId": "BL-05",
    "artifactVersion": "1.0.0",
    "legalOutgoingStates": [
      "ADMISSIBLE"
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
    "nextChapterId": "MLE-CH-07"
  },
  "ports": [
    {
      "chapterId": "MLE-CH-06",
      "portId": "PORT-MANAGED",
      "invariantDecision": "All ports prove equivalent split identity and train-serve semantics despite different execution mechanics.",
      "variableMechanism": "Provider-managed training, registry, serving, and observation.",
      "requiredEvidence": "Exportable identities, limits, configuration, evaluation, release, observation, and recovery records.",
      "externalAuthority": "Provider/platform plus all product/domain/formal owners remain external.",
      "failureInjection": "Unavailable export or opaque provider state.",
      "limitation": "Provider claims are not workload qualification.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-06",
      "portId": "PORT-CLASSICAL",
      "invariantDecision": "All ports prove equivalent split identity and train-serve semantics despite different execution mechanics.",
      "variableMechanism": "Local feature transformation and statistical/classical estimator.",
      "requiredEvidence": "Feature identities, bounded run, calibrated/segment evidence where applicable, package, envelope, recovery.",
      "externalAuthority": "Data, evaluation, product/domain, and formal owners remain external.",
      "failureInjection": "Feature order or preprocessing mismatch.",
      "limitation": "Simplicity does not remove lifecycle evidence.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-06",
      "portId": "PORT-DEEP",
      "invariantDecision": "All ports prove equivalent split identity and train-serve semantics despite different execution mechanics.",
      "variableMechanism": "Parameterized training, accelerator context, checkpoint, and tensor-serving path.",
      "requiredEvidence": "Data/run/checkpoint/tokenizer-or-preprocessor identities, bounded reproducibility, evaluation, envelope, recovery.",
      "externalAuthority": "Research, evaluation, platform, and formal owners remain external.",
      "failureInjection": "Wrong checkpoint, preprocessing, or hardware-context identity.",
      "limitation": "Model scale and benchmark novelty do not replace evidence.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-06",
      "portId": "PORT-EDGE",
      "invariantDecision": "All ports prove equivalent split identity and train-serve semantics despite different execution mechanics.",
      "variableMechanism": "Benchline sensor/image input, constrained runtime, device package, and delayed feedback.",
      "requiredEvidence": "Sensor/data/label identity, edge package, measured envelope, rollback, controls, retirement.",
      "externalAuthority": "Hardware, operations, domain, safety, security, platform, and product owners remain external.",
      "failureInjection": "Sensor shift, resource pressure, or stale device package.",
      "limitation": "Benchline is fictional and cannot imply real industrial performance or safety.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-06",
      "portId": "PORT-SHARED",
      "invariantDecision": "All ports prove equivalent split identity and train-serve semantics despite different execution mechanics.",
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
      "sectionId": "MLE-CH-06-S01",
      "chapterId": "MLE-CH-06",
      "order": 1,
      "purpose": "Decision and Bench Setup",
      "teachingAction": "Frame MLE-CH-06 as a decision bench for: Choose population-aware splits and prove that training and serving transformations conform.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [
        "MLE-CLM-004",
        "MLE-CLM-009",
        "MLE-CLM-010",
        "MLE-CLM-017"
      ],
      "boundaryIds": [
        "BND-02",
        "BND-09",
        "BND-10",
        "BND-17"
      ],
      "scenarioIds": [
        "SCN-03",
        "SCN-08"
      ],
      "domainIds": [
        "PD-03"
      ],
      "portIds": [],
      "artifactDelta": "Declare the BL-05 decision, inputs, state, owners, boundaries, and next evidence.",
      "plannedDepth": "450-550 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-06-S02",
      "chapterId": "MLE-CH-06",
      "order": 2,
      "purpose": "Procedure",
      "teachingAction": "Teach the ordered procedure for MLE-CH-06: Choose population-aware splits and prove that training and serving transformations conform.",
      "claimIds": [
        "MLE-BCLM-016",
        "MLE-BCLM-017",
        "MLE-BCLM-018"
      ],
      "sourceIds": [
        "MLE-BSRC-014",
        "MLE-BSRC-015",
        "MLE-BSRC-013",
        "MLE-BSRC-025",
        "MLE-BSRC-024",
        "MLE-BSRC-044"
      ],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Bind claims MLE-BCLM-016, MLE-BCLM-017, MLE-BCLM-018 to one primary teaching treatment.",
      "plannedDepth": "700-850 words",
      "claimDisposition": "primary"
    },
    {
      "sectionId": "MLE-CH-06-S03",
      "chapterId": "MLE-CH-06",
      "order": 3,
      "purpose": "Evidence interpretation",
      "teachingAction": "Interpret strongest evidence, counterexample, and limitation for MLE-CH-06: Choose population-aware splits and prove that training and serving transformations conform.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Record the strongest conclusion and the exact evidence ceiling for BL-05.",
      "plannedDepth": "500-600 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-06-S04",
      "chapterId": "MLE-CH-06",
      "order": 4,
      "purpose": "Worked trace",
      "teachingAction": "Trace Benchline and bounded satellite/public cases for MLE-CH-06: Choose population-aware splits and prove that training and serving transformations conform.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [
        "CASE-01",
        "CASE-03",
        "CASE-04",
        "CASE-05",
        "CASE-06",
        "CASE-07"
      ],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Apply CASE-01, CASE-03, CASE-04, CASE-05, CASE-06, CASE-07 while preserving constructed/public truth labels.",
      "plannedDepth": "550-650 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-06-S05",
      "chapterId": "MLE-CH-06",
      "order": 5,
      "purpose": "Failure lab",
      "teachingAction": "Inject named RED failures and diagnose disposition for MLE-CH-06: Choose population-aware splits and prove that training and serving transformations conform.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Record diagnostics for TEMPORAL-LEAK, ENTITY-LEAK, SERVE-MISMATCH.",
      "plannedDepth": "500-600 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-06-S06",
      "chapterId": "MLE-CH-06",
      "order": 6,
      "purpose": "Five-port transfer",
      "teachingAction": "Transfer the invariant decision through five equal ports for MLE-CH-06: Choose population-aware splits and prove that training and serving transformations conform.",
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
      "artifactDelta": "Prove the same decision and evidence shape across PORT-MANAGED, PORT-CLASSICAL, PORT-DEEP, PORT-EDGE, PORT-SHARED.",
      "plannedDepth": "550-650 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-06-S07",
      "chapterId": "MLE-CH-06",
      "order": 7,
      "purpose": "Assessment and Qualification Gate",
      "teachingAction": "Assess an observable artifact at the Qualification Gate for MLE-CH-06: Choose population-aware splits and prove that training and serving transformations conform.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Qualify BL-05 through an artifact-based assessment and owner-routed retry.",
      "plannedDepth": "450-550 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-06-S08",
      "chapterId": "MLE-CH-06",
      "order": 8,
      "purpose": "Durable handoff",
      "teachingAction": "Package the state and dossier delta for Phase 08 continuity in MLE-CH-06: Choose population-aware splits and prove that training and serving transformations conform.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Freeze the BL-05 handoff, limitations, recheck triggers, and next dependency.",
      "plannedDepth": "350-450 words",
      "claimDisposition": "cross-reference"
    }
  ],
  "labs": [
    {
      "labId": "MLE-CH-06-LAB-01",
      "chapterId": "MLE-CH-06",
      "truthState": "synthetic-deterministic",
      "inputContract": "MLE-CH-06 fixed offline fixture 1",
      "fixedFixtureIds": [
        "FIX-MLE-CH-06-1"
      ],
      "redFailures": [
        "missing expected evidence"
      ],
      "expectedEvidence": [
        "BL-05 deterministic record"
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
        "MLE-CH-06 evidence identity and owner route remain exact."
      ]
    },
    {
      "labId": "MLE-CH-06-LAB-02",
      "chapterId": "MLE-CH-06",
      "truthState": "synthetic-deterministic",
      "inputContract": "MLE-CH-06 fixed offline fixture 2",
      "fixedFixtureIds": [
        "FIX-MLE-CH-06-2"
      ],
      "redFailures": [
        "illegal promotion or self-approval"
      ],
      "expectedEvidence": [
        "BL-05 deterministic record"
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
        "MLE-CH-06 evidence identity and owner route remain exact."
      ]
    }
  ],
  "assessment": [
    {
      "assessmentId": "MLE-CH-06-ASMT-01",
      "chapterId": "MLE-CH-06",
      "exerciseOutput": "BL-05 evidence artifact",
      "rubric": "Assess Choose population-aware splits and prove that training and serving transformations conform. with observable evidence.",
      "answerIntent": "Explain the decision, evidence, state, owner, and next action.",
      "observablePassEvidence": "BL-05 passes its named qualification gate.",
      "authorityLimit": "The MLE designs workload splits and conformance tests but cannot self-certify population validity.",
      "retryRoute": "HOLD or REOPEN with new evidence; never self-approve."
    }
  ],
  "visuals": [
    {
      "visualId": "MLE-V06.1",
      "chapterId": "MLE-CH-06",
      "kind": "semantic-html-css",
      "insertionAnchor": "MLE-CH-06-S03",
      "decisionHelped": "Choose population-aware splits and prove that training and serving transformations conform.",
      "essentialLabels": [
        "decision",
        "evidence",
        "state",
        "owner",
        "next action"
      ],
      "captionIntent": "Explain the BL-05 decision evidence.",
      "altIntent": "Text alternative for MLE-CH-06 evidence flow.",
      "longDescriptionIntent": "Ordered description of MLE-CH-06 evidence, state, owner, and next action.",
      "numericTruthDisposition": "semantic-html-css",
      "candidateStatus": "not-applicable",
      "reservedPath": null
    }
  ],
  "handoff": {
    "chapterId": "MLE-CH-06",
    "phase08Instructions": "Draft MLE-CH-06 from this projection, keep the eight-section order, preserve all claim/source/case identities, and render BL-05 as selectable screen-first evidence furniture.",
    "continuityBridge": "Consume BL-03 and BL-04 without silent repair; produce BL-05 for MLE-CH-07.",
    "wordRange": "4,500-5,100 words",
    "wordRangeRationale": "Temporal, entity, population, and transformation checks need distinct diagrams and limitation panels so parity is never confused with quality.",
    "recheckTriggers": [
      "Blueprint temporal, repeated-entity, and post-outcome feature mutations that each fail with a named leaked information path.",
      "Blueprint a split dossier that states what changed, what remained invariant, who judges representativeness, and the strongest remaining limitation.",
      "Blueprint parity checks with matched example IDs and a separate limitation panel that forbids interpreting parity as quality or authorization."
    ],
    "prohibitedClaims": [
      "No population-validity self-certification, domain label approval, external-validity claim, model-quality claim, or platform-wide parity assurance.",
      "Do not invent public-case facts, outcomes, authority, production results, or certification.",
      "Do not activate Phase 08, create code, or generate assets from this blueprint."
    ],
    "evidenceManifest": [
      "MLE-BCLM-016",
      "MLE-BCLM-017",
      "MLE-BCLM-018"
    ]
  }
}
```

PHASE07-CHAPTER-PROJECTION-END
