# MLE-CH-07 — Build Baselines and Controlled Comparisons

Blueprint status: Phase 07 production specification; not manuscript prose. Author: Komal Nakrani. Creative system: Learning Systems Test Bench.

## Frozen identity and production target

- Chapter/order: `MLE-CH-07` / 7
- Slug/part: `build-baselines-and-controlled-comparisons` / `PART-03`
- Decision job: Design a controlled experiment that retains the incumbent and changes only the claimed intervention.
- Thesis: An experiment is useful only when its hypothesis, controls, inputs, and comparison target make the change attributable.
- Reader endpoint: Run a frozen baseline/candidate harness and detect a confounded comparison.
- Milestone: `BL-06` — Controlled comparison plan
- State: `ADMISSIBLE` → `ADMISSIBLE`
- Word range: 4,300-4,900 words
- Word-range rationale: The comparison ledger and rerun envelope need enough vertical space to expose every control, omission, and attribution limit instead of collapsing into a tracker screenshot.

## Observable objectives

- Run incumbent and candidate against frozen inputs and identify every changed variable.
- Invalidate a comparison when preprocessing, data, evaluation, threshold, or environment changes outside the claimed intervention.
- Fail a successful tracker record that omits environment, input snapshot, or incumbent identity.
- Bound reconstruction claims to code, data, dependencies, hardware, randomness, repeated results, tolerance, and cost.

## Prerequisites and five-sentence dossier bridge

Prerequisite artifacts: `BL-05`.

1. The input is BL-05, which binds admissible data, transformations, split identity, population assumptions, and train-serve conformance.
2. The prior state is ADMISSIBLE, allowing controlled experimentation but not candidate qualification or scientific novelty claims.
3. This chapter adds incumbent and candidate identities, claimed intervention, changed-variable ledger, controls, measures, thresholds, environment, repeated-run envelope, owners, and attribution status.
4. BL-06 remains ADMISSIBLE because it is a controlled comparison plan; reconstructibility is completed with BL-07 in Chapter 08.
5. Chapter 08 consumes BL-06 and must record bounded rerun context without upgrading a tracker record into proof.

## Owned decision and retained authority

- MLE responsibility: Own workload experiment integrity, run identity, controls, comparison evidence, and explicit attribution limits.
- Authority owner: Applied Science owns scientific novelty claims; evaluation retains suite adequacy.
- MLE ceiling: The MLE owns workload experiment integrity, not the research agenda or independent gate.
- Boundaries: `BND-01`, `BND-03`, `BND-04`, `BND-09`, `BND-10`
- Escalation: Route scientific novelty to Applied Science and evaluation-suite adequacy to independent evaluation owners.
- Explicit non-scope: No causal claim from confounded evidence, scientific novelty acceptance, independent qualification, or promise of cross-platform exact reproduction.

## Production sequence

| Section | Production job | Teaching action | State and dossier delta | Planned depth |
|---|---|---|---|---|
| `MLE-CH-07-S01` | Decision and Bench Setup | Frame MLE-CH-07 as a decision bench for: Design a controlled experiment that retains the incumbent and changes only the claimed intervention. | Declare the BL-06 decision, inputs, state, owners, boundaries, and next evidence. | 450-550 words |
| `MLE-CH-07-S02` | Procedure | Teach the ordered procedure for MLE-CH-07: Design a controlled experiment that retains the incumbent and changes only the claimed intervention. | Bind claims MLE-BCLM-019, MLE-BCLM-020, MLE-BCLM-021 to one primary teaching treatment. | 700-850 words |
| `MLE-CH-07-S03` | Evidence interpretation | Interpret strongest evidence, counterexample, and limitation for MLE-CH-07: Design a controlled experiment that retains the incumbent and changes only the claimed intervention. | Record the strongest conclusion and the exact evidence ceiling for BL-06. | 500-600 words |
| `MLE-CH-07-S04` | Worked trace | Trace Benchline and bounded satellite/public cases for MLE-CH-07: Design a controlled experiment that retains the incumbent and changes only the claimed intervention. | Apply CASE-01, CASE-02, CASE-03, CASE-04, CASE-06, CASE-07 while preserving constructed/public truth labels. | 550-650 words |
| `MLE-CH-07-S05` | Failure lab | Inject named RED failures and diagnose disposition for MLE-CH-07: Design a controlled experiment that retains the incumbent and changes only the claimed intervention. | Record diagnostics for PREPROCESSING-CONFOUNDED, RUN-INCOMPLETE, REPRODUCTION-OVERCLAIM. | 500-600 words |
| `MLE-CH-07-S06` | Five-port transfer | Transfer the invariant decision through five equal ports for MLE-CH-07: Design a controlled experiment that retains the incumbent and changes only the claimed intervention. | Prove the same decision and evidence shape across PORT-MANAGED, PORT-CLASSICAL, PORT-DEEP, PORT-EDGE, PORT-SHARED. | 550-650 words |
| `MLE-CH-07-S07` | Assessment and Qualification Gate | Assess an observable artifact at the Qualification Gate for MLE-CH-07: Design a controlled experiment that retains the incumbent and changes only the claimed intervention. | Qualify BL-06 through an artifact-based assessment and owner-routed retry. | 450-550 words |
| `MLE-CH-07-S08` | Durable handoff | Package the state and dossier delta for Phase 08 continuity in MLE-CH-07: Design a controlled experiment that retains the incumbent and changes only the claimed intervention. | Freeze the BL-06 handoff, limitations, recheck triggers, and next dependency. | 350-450 words |

Primary teaching is confined to `MLE-CH-07-S02`; later appearances are trace, failure, transfer, assessment, or handoff uses rather than duplicate primary treatments.

## Bench Setup, Bench Sheet, and Qualification Gate

### Bench Setup

| Field | Frozen value |
|---|---|
| decision | Design a controlled experiment that retains the incumbent and changes only the claimed intervention. |
| evidence | `MLE-BCLM-019`, `MLE-BCLM-020`, `MLE-BCLM-021` supported by `MLE-BSRC-007`, `MLE-BSRC-010`, `MLE-BSRC-015`, `MLE-BSRC-018`, `MLE-BSRC-043`, `MLE-BSRC-021` |
| state | `ADMISSIBLE` |
| owner | Applied Science owns scientific novelty claims; evaluation retains suite adequacy. |
| next action | Execute the two deterministic labs and prepare `BL-06`. |

### Bench Sheet

| Field | Required reader record |
|---|---|
| decision | PASS, HOLD, REJECT, or REOPEN with one-sentence rationale |
| evidence | Input identities, measurements, failures, limitations, and hashes |
| state and dossier delta | `ADMISSIBLE` → `ADMISSIBLE`; produce `BL-06` v1.0.0 |
| authority route | Route scientific novelty to Applied Science and evaluation-suite adequacy to independent evaluation owners. |
| next evidence | A reconstruction record that binds code, data, dependencies, hardware, randomness, repeated results, and known nondeterminism. |

### Qualification Gate

The gate passes only when the decision, evidence, state, owner, limitation, authority route, and next evidence are all explicit. Missing or disputed authority produces HOLD; a forbidden promotion produces REJECT; changed upstream evidence produces REOPEN.

## Skill procedure and evidence interpretation

1. Freeze incumbent, candidate, input snapshot, preprocessing, evaluation procedure, thresholds, and environment.
2. Name the sole claimed intervention and enumerate every observed change.
3. Execute both paths and preserve raw measures plus segment evidence.
4. Run completeness and repeated-run checks over code, data, dependencies, hardware, and randomness.
5. Mark the result attributable, confounded, or unresolved and issue BL-06 with owners and limitations.

- Strongest supportable conclusion: A comparison supports attribution only when the intervention is isolated and the evidence record is complete enough to inspect.
- Counterexample: A tracked candidate win is confounded when preprocessing and input snapshot changed with the model.
- Limitation: Controlled comparison and bounded reruns do not by themselves prove causality, generalization, qualification, or release readiness.

Claim/source contract:

| Claim | Accepted sources | Limitation | Treatment |
|---|---|---|---|
| `MLE-BCLM-019` | `MLE-BSRC-007`, `MLE-BSRC-010`, `MLE-BSRC-015` | The sources support controls and baselines but do not convert an observational comparison into a universal causal claim. | durable |
| `MLE-BCLM-020` | `MLE-BSRC-018`, `MLE-BSRC-043` | The MLflow page is a living mechanism description and Uber is a dated first-party platform report. | volatile mechanism context |
| `MLE-BCLM-021` | `MLE-BSRC-018`, `MLE-BSRC-021` | PyTorch documents one framework; external services, drivers, data order, and hardware add further nondeterminism. | durable |

## Benchline artifact contract

- Inputs: BENCHLINE-COMPARE-007 with retained incumbent, candidate intervention, frozen BL-05 inputs, run ledger, and repeated-run envelope.
- Version/hash: `BL-06` v1.0.0; the deterministic fixture and produced record receive SHA-256 identities at execution time.
- Mutations: PREPROCESSING-CONFOUNDED: alter normalization only for the candidate and require REJECT. RUN-INCOMPLETE: omit environment or incumbent identity from a successful tracker record and require HOLD. REPRODUCTION-OVERCLAIM: demand exact cross-platform equality outside the recorded envelope and require REOPEN.
- Output: BL-06 controlled comparison plan with changed-variable ledger, run completeness record, and bounded rerun envelope.
- Evidence: fixed input identity, mutation result, measured record, explicit limitation, owner, disposition, and next action.
- Owner: Applied Science owns scientific novelty claims; evaluation retains suite adequacy.
- Authority route: Route scientific novelty to Applied Science and evaluation-suite adequacy to independent evaluation owners.
- Legal dispositions: PASS, HOLD, REJECT, REOPEN.
- Acceptance checks: exact artifact identity; expected failure discrimination; no silent upstream repair; no automatic promotion; no MLE self-approval.

## Future deterministic companion contract

- Truth label: `synthetic-deterministic`.
- Lab 01 is the positive fixed-fixture path; Lab 02 injects illegal promotion or self-approval.
- Fixtures remain offline, provider-neutral, immutable, and free of network, production, or authority mutation.
- Expected records are `BL-06` evidence, input/output hashes, named failures, disposition, owner route, and next evidence.
- Phase 07 creates no companion code; these are only future execution contracts.

## Failure injections and diagnostics

- PREPROCESSING-CONFOUNDED: alter normalization only for the candidate and require REJECT.
- RUN-INCOMPLETE: omit environment or incumbent identity from a successful tracker record and require HOLD.
- REPRODUCTION-OVERCLAIM: demand exact cross-platform equality outside the recorded envelope and require REOPEN.

Diagnostic evidence must distinguish the newly injected failure from pre-existing gaps. Repair may change only the failed contract field and must create a new artifact identity. HOLD and REJECT can never promote directly to RELEASABLE, and the workload owner cannot self-approve an external gate.

## Five-port transfer table

| Port | Replaceable mechanics | Invariant decision | Required evidence | Failure injection | Limitation |
|---|---|---|---|---|---|
| `PORT-MANAGED` | Provider-managed training, registry, serving, and observation. | Every port preserves the intervention, control variables, incumbent, and evidence contract. | Exportable identities, limits, configuration, evaluation, release, observation, and recovery records. | Unavailable export or opaque provider state. | Provider claims are not workload qualification. |
| `PORT-CLASSICAL` | Local feature transformation and statistical/classical estimator. | Every port preserves the intervention, control variables, incumbent, and evidence contract. | Feature identities, bounded run, calibrated/segment evidence where applicable, package, envelope, recovery. | Feature order or preprocessing mismatch. | Simplicity does not remove lifecycle evidence. |
| `PORT-DEEP` | Parameterized training, accelerator context, checkpoint, and tensor-serving path. | Every port preserves the intervention, control variables, incumbent, and evidence contract. | Data/run/checkpoint/tokenizer-or-preprocessor identities, bounded reproducibility, evaluation, envelope, recovery. | Wrong checkpoint, preprocessing, or hardware-context identity. | Model scale and benchmark novelty do not replace evidence. |
| `PORT-EDGE` | Benchline sensor/image input, constrained runtime, device package, and delayed feedback. | Every port preserves the intervention, control variables, incumbent, and evidence contract. | Sensor/data/label identity, edge package, measured envelope, rollback, controls, retirement. | Sensor shift, resource pressure, or stale device package. | Benchline is fictional and cannot imply real industrial performance or safety. |
| `PORT-SHARED` | Multi-tenant shared features, training, registry, serving, and observability. | Every port preserves the intervention, control variables, incumbent, and evidence contract. | Tenant/workload identity, compatibility, resource envelope, control use, recovery, and owner routes. | Tenant collision, shared-runtime upgrade, or fleet SLO pressure. | Workload evidence cannot claim platform-wide assurance. |

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

- **CASE-02 — Managed demand forecast** — CONSTRUCTED SATELLITE
  - Truth rule: No provider outcome is claimed; official docs may support current mechanism notes.
  - Reported facts: none; the fixture is constructed.
  - Attributed outcomes: none.
  - Allowed inference: use only the synthetic decision trace defined in this chapter.
  - Forbidden inference: Do not infer unreported outcomes for Managed demand forecast.
  - Limitation: Not a cloud-provider tutorial.
  - Transfer rule: Must produce the same dossier fields without provider names.

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

- Exercise output: Audit two apparently successful runs, identify the confounded one, and specify the minimum new evidence required for a valid comparison.
- Rubric: assess Design a controlled experiment that retains the incumbent and changes only the claimed intervention. using exact identities, observable evidence, explicit limitation, state, owner, disposition, and next action.
- Answer intent: explain why the evidence supports the disposition and what it does not support.
- Observable PASS evidence: `BL-06` passes its named Qualification Gate and preserves all authority limits.
- HOLD/REJECT/REOPEN path: issue a new evidence request and artifact version; never silently repair or self-approve.
- Authority limit: The MLE owns workload experiment integrity, not the research agenda or independent gate.

## Visual and accessibility contract

A semantic experiment card and changed-variable ledger with incumbent/candidate identities, controls, intervention, evidence, attribution status, owner, and next action.

| Visual | Treatment | Anchor | Essential labels | Candidate | Reserved path |
|---|---|---|---|---|---|
| `MLE-V07.1` | semantic-html-css | `MLE-CH-07-S03` | decision, evidence, state, owner, next action | not-applicable | none |

Caption intent: explain the `BL-06` decision evidence. Alt intent: identify the decision, evidence, state, owner, and next action. Long description follows the visual in reading order and enumerates every relationship. All IDs, values, thresholds, axes, tables, and numeric truth remain selectable semantic HTML/CSS; color is never the only signal.

## Durable doctrine, volatile context, and re-verification

- Durable doctrine: Retained baselines and controlled variables make candidate evidence attributable.
- Volatile examples: Experiment trackers; Current model libraries.
- `MLE-BCLM-019`: Keep the changed-variable ledger stable and version every data, code, environment, and measure identity. Recheck when: Blueprint a baseline/candidate harness with a mutation that changes preprocessing and must invalidate the comparison.
- `MLE-BCLM-020`: Define required run fields independently of any tracker, and pin versions for all API examples. Recheck when: Blueprint a run record completeness test that fails when environment, input snapshot, or incumbent identity was omitted despite a successful tracker run.
- `MLE-BCLM-021`: Keep bounded-reconstruction doctrine stable while versioning framework-specific controls and known nondeterministic operations. Recheck when: Blueprint a rerun envelope that records context, repeated results, tolerance, performance cost, and the strongest remaining reproducibility limitation.
- Dated mechanisms, job postings, tool APIs, framework behavior, platform reports, and sector guidance cannot enter durable doctrine without a fresh identity and bounded authority statement.

## Originality and adjacent-publication boundary

ND-01 through ND-10 PASS: this is workload experiment identity and attribution evidence, not a research agenda, generalized evaluation program, AI product experiment, or LLM adaptation recipe.

PUB-01 through PUB-05 remain input/output neighbors only. The chapter creates a versioned learning-workload disposition and Benchline dossier delta; it does not copy their prose, cases, figures, layouts, accountable centers, or reader endpoints. Replaceability across classical, deep, managed, edge, and shared ports remains mandatory.

## Phase 08 handoff and evidence manifest

- Writer instruction: Draft MLE-CH-07 from this projection, keep the eight-section order, preserve all claim/source/case identities, and render BL-06 as selectable screen-first evidence furniture.
- Continuity: Consume BL-05 without silent repair; produce BL-06 for MLE-CH-08.
- Prohibited claims: No causal claim from confounded evidence, scientific novelty acceptance, independent qualification, or promise of cross-platform exact reproduction. Do not invent public-case facts, outcomes, authority, production results, or certification. Do not activate Phase 08, create code, or generate assets from this blueprint.
- Claims: `MLE-BCLM-019`, `MLE-BCLM-020`, `MLE-BCLM-021`
- Sources: `MLE-BSRC-007`, `MLE-BSRC-010`, `MLE-BSRC-015`, `MLE-BSRC-018`, `MLE-BSRC-043`, `MLE-BSRC-021`
- Cases: `CASE-01`, `CASE-02`, `CASE-03`, `CASE-04`, `CASE-06`, `CASE-07`
- Architecture claims: `MLE-CLM-004`, `MLE-CLM-008`, `MLE-CLM-010`, `MLE-CLM-017`
- Boundaries: `BND-01`, `BND-03`, `BND-04`, `BND-09`, `BND-10`
- Scenarios: `SCN-09`
- Domains: `PD-04`
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`
- Milestone: `BL-06`
- Phase 08 remains inactive.

PHASE07-CHAPTER-PROJECTION-START

```json
{
  "chapter": {
    "chapterId": "MLE-CH-07",
    "order": 7,
    "title": "Build Baselines and Controlled Comparisons",
    "slug": "build-baselines-and-controlled-comparisons",
    "partId": "PART-03",
    "decisionJob": "Design a controlled experiment that retains the incumbent and changes only the claimed intervention.",
    "thesis": "An experiment is useful only when its hypothesis, controls, inputs, and comparison target make the change attributable.",
    "readerEndpoint": "Run a frozen baseline/candidate harness and detect a confounded comparison.",
    "prerequisiteArtifacts": [
      "BL-05"
    ],
    "incomingState": "ADMISSIBLE",
    "outgoingStates": [
      "ADMISSIBLE"
    ],
    "milestoneId": "BL-06",
    "authorityOwner": "Applied Science owns scientific novelty claims; evaluation retains suite adequacy.",
    "mleCeiling": "The MLE owns workload experiment integrity, not the research agenda or independent gate.",
    "primaryClaimIds": [
      "MLE-BCLM-019",
      "MLE-BCLM-020",
      "MLE-BCLM-021"
    ],
    "sectionIds": [
      "MLE-CH-07-S01",
      "MLE-CH-07-S02",
      "MLE-CH-07-S03",
      "MLE-CH-07-S04",
      "MLE-CH-07-S05",
      "MLE-CH-07-S06",
      "MLE-CH-07-S07",
      "MLE-CH-07-S08"
    ],
    "labIds": [
      "MLE-CH-07-LAB-01",
      "MLE-CH-07-LAB-02"
    ],
    "assessmentIds": [
      "MLE-CH-07-ASMT-01"
    ],
    "visualIds": [
      "MLE-V07.1"
    ],
    "portIds": [
      "PORT-MANAGED",
      "PORT-CLASSICAL",
      "PORT-DEEP",
      "PORT-EDGE",
      "PORT-SHARED"
    ],
    "nextChapterId": "MLE-CH-08"
  },
  "claimTeaching": [
    {
      "claimId": "MLE-BCLM-019",
      "chapterId": "MLE-CH-07",
      "primarySectionId": "MLE-CH-07-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-007",
        "MLE-BSRC-010",
        "MLE-BSRC-015"
      ],
      "caseIds": [
        "CASE-01",
        "CASE-02",
        "CASE-03",
        "CASE-04",
        "CASE-06"
      ],
      "limitation": "The sources support controls and baselines but do not convert an observational comparison into a universal causal claim.",
      "durability": "durable",
      "volatilityTreatment": "Keep the changed-variable ledger stable and version every data, code, environment, and measure identity.",
      "recheckTriggers": [
        "Blueprint a baseline/candidate harness with a mutation that changes preprocessing and must invalidate the comparison."
      ]
    },
    {
      "claimId": "MLE-BCLM-020",
      "chapterId": "MLE-CH-07",
      "primarySectionId": "MLE-CH-07-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-018",
        "MLE-BSRC-043"
      ],
      "caseIds": [
        "CASE-01",
        "CASE-02",
        "CASE-03",
        "CASE-04",
        "CASE-07"
      ],
      "limitation": "The MLflow page is a living mechanism description and Uber is a dated first-party platform report.",
      "durability": "volatile",
      "volatilityTreatment": "Define required run fields independently of any tracker, and pin versions for all API examples.",
      "recheckTriggers": [
        "Blueprint a run record completeness test that fails when environment, input snapshot, or incumbent identity was omitted despite a successful tracker run."
      ]
    },
    {
      "claimId": "MLE-BCLM-021",
      "chapterId": "MLE-CH-07",
      "primarySectionId": "MLE-CH-07-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-018",
        "MLE-BSRC-021"
      ],
      "caseIds": [
        "CASE-01",
        "CASE-02",
        "CASE-03",
        "CASE-04"
      ],
      "limitation": "PyTorch documents one framework; external services, drivers, data order, and hardware add further nondeterminism.",
      "durability": "durable",
      "volatilityTreatment": "Keep bounded-reconstruction doctrine stable while versioning framework-specific controls and known nondeterministic operations.",
      "recheckTriggers": [
        "Blueprint a rerun envelope that records context, repeated results, tolerance, performance cost, and the strongest remaining reproducibility limitation."
      ]
    }
  ],
  "sourceUses": [
    {
      "sourceId": "MLE-BSRC-007",
      "claimId": "MLE-BCLM-019",
      "chapterId": "MLE-CH-07",
      "sectionIds": [
        "MLE-CH-07-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "The rubric does not establish universal pass scores, domain acceptance, safety, privacy, security, compliance, business outcomes, or workload-specific authority.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck at publication freezes for record and final-paper availability; translate its tests into current workload evidence rather than copying a score threshold."
    },
    {
      "sourceId": "MLE-BSRC-010",
      "claimId": "MLE-BCLM-019",
      "chapterId": "MLE-CH-07",
      "sectionIds": [
        "MLE-CH-07-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Does not identify a universally best validation design or authorize release.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck URL at publication freeze; retain limitations if later methods are substituted."
    },
    {
      "sourceId": "MLE-BSRC-015",
      "claimId": "MLE-BCLM-019",
      "chapterId": "MLE-CH-07",
      "sectionIds": [
        "MLE-CH-07-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Named Google mechanisms and observations require transfer tests; the guide does not decide intended purpose or acceptable consequence.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck the living page at all three publication freezes and record material rule-number or content changes."
    },
    {
      "sourceId": "MLE-BSRC-018",
      "claimId": "MLE-BCLM-020",
      "chapterId": "MLE-CH-07",
      "sectionIds": [
        "MLE-CH-07-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Tracking preserves only recorded metadata. It does not prove that controls were held fixed, eliminate omitted environment state, establish causal attribution or fair comparison, or confer qualification and release authority.",
      "durability": "volatile",
      "volatility": "high",
      "recheckTrigger": "Recheck at every freeze and pin a concrete MLflow version before manuscript freeze if any field, API, storage behavior, or executable example is named."
    },
    {
      "sourceId": "MLE-BSRC-043",
      "claimId": "MLE-BCLM-020",
      "chapterId": "MLE-CH-07",
      "sectionIds": [
        "MLE-CH-07-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Self-reported platform description without independent audit; named scale and architecture are historical and organization-specific.",
      "durability": "durable",
      "volatility": "medium",
      "recheckTrigger": "Browser-recheck at all three publication freezes; retain reported quantities with 2017 as-of labels and replace only if the official page is withdrawn."
    },
    {
      "sourceId": "MLE-BSRC-018",
      "claimId": "MLE-BCLM-021",
      "chapterId": "MLE-CH-07",
      "sectionIds": [
        "MLE-CH-07-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Tracking preserves only recorded metadata. It does not prove that controls were held fixed, eliminate omitted environment state, establish causal attribution or fair comparison, or confer qualification and release authority.",
      "durability": "volatile",
      "volatility": "high",
      "recheckTrigger": "Recheck at every freeze and pin a concrete MLflow version before manuscript freeze if any field, API, storage behavior, or executable example is named."
    },
    {
      "sourceId": "MLE-BSRC-021",
      "claimId": "MLE-BCLM-021",
      "chapterId": "MLE-CH-07",
      "sectionIds": [
        "MLE-CH-07-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "PyTorch controls do not cover every external source of nondeterminism, prove that a workload is reproducible, or establish how another framework or service behaves.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck the pinned 2.13 page at every freeze and whenever the recorded PyTorch, CUDA, cuDNN, platform, hardware, or deterministic-operation context changes; never return to the mutable stable URL for this identity."
    }
  ],
  "casePlacements": [
    {
      "caseId": "CASE-01",
      "chapterId": "MLE-CH-07",
      "sectionIds": [
        "MLE-CH-07-S04"
      ],
      "usePurpose": "Apply Benchline Inspection Dossier without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-02",
      "chapterId": "MLE-CH-07",
      "sectionIds": [
        "MLE-CH-07-S04"
      ],
      "usePurpose": "Apply Managed demand forecast without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-03",
      "chapterId": "MLE-CH-07",
      "sectionIds": [
        "MLE-CH-07-S04"
      ],
      "usePurpose": "Apply Classical credit triage without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-04",
      "chapterId": "MLE-CH-07",
      "sectionIds": [
        "MLE-CH-07-S04"
      ],
      "usePurpose": "Apply Deep acoustic event classifier without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-06",
      "chapterId": "MLE-CH-07",
      "sectionIds": [
        "MLE-CH-07-S04"
      ],
      "usePurpose": "Apply Google ML Test Score production-readiness method without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-07",
      "chapterId": "MLE-CH-07",
      "sectionIds": [
        "MLE-CH-07-S04"
      ],
      "usePurpose": "Apply Uber Michelangelo feature and deployment evidence pattern without exceeding its truth boundary."
    }
  ],
  "dossier": {
    "chapterId": "MLE-CH-07",
    "milestoneId": "BL-06",
    "incomingState": "ADMISSIBLE",
    "inputArtifactIds": [
      "BL-05"
    ],
    "inputHashes": [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    ],
    "producedArtifactId": "BL-06",
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
    "nextChapterId": "MLE-CH-08"
  },
  "ports": [
    {
      "chapterId": "MLE-CH-07",
      "portId": "PORT-MANAGED",
      "invariantDecision": "Every port preserves the intervention, control variables, incumbent, and evidence contract.",
      "variableMechanism": "Provider-managed training, registry, serving, and observation.",
      "requiredEvidence": "Exportable identities, limits, configuration, evaluation, release, observation, and recovery records.",
      "externalAuthority": "Provider/platform plus all product/domain/formal owners remain external.",
      "failureInjection": "Unavailable export or opaque provider state.",
      "limitation": "Provider claims are not workload qualification.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-07",
      "portId": "PORT-CLASSICAL",
      "invariantDecision": "Every port preserves the intervention, control variables, incumbent, and evidence contract.",
      "variableMechanism": "Local feature transformation and statistical/classical estimator.",
      "requiredEvidence": "Feature identities, bounded run, calibrated/segment evidence where applicable, package, envelope, recovery.",
      "externalAuthority": "Data, evaluation, product/domain, and formal owners remain external.",
      "failureInjection": "Feature order or preprocessing mismatch.",
      "limitation": "Simplicity does not remove lifecycle evidence.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-07",
      "portId": "PORT-DEEP",
      "invariantDecision": "Every port preserves the intervention, control variables, incumbent, and evidence contract.",
      "variableMechanism": "Parameterized training, accelerator context, checkpoint, and tensor-serving path.",
      "requiredEvidence": "Data/run/checkpoint/tokenizer-or-preprocessor identities, bounded reproducibility, evaluation, envelope, recovery.",
      "externalAuthority": "Research, evaluation, platform, and formal owners remain external.",
      "failureInjection": "Wrong checkpoint, preprocessing, or hardware-context identity.",
      "limitation": "Model scale and benchmark novelty do not replace evidence.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-07",
      "portId": "PORT-EDGE",
      "invariantDecision": "Every port preserves the intervention, control variables, incumbent, and evidence contract.",
      "variableMechanism": "Benchline sensor/image input, constrained runtime, device package, and delayed feedback.",
      "requiredEvidence": "Sensor/data/label identity, edge package, measured envelope, rollback, controls, retirement.",
      "externalAuthority": "Hardware, operations, domain, safety, security, platform, and product owners remain external.",
      "failureInjection": "Sensor shift, resource pressure, or stale device package.",
      "limitation": "Benchline is fictional and cannot imply real industrial performance or safety.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-07",
      "portId": "PORT-SHARED",
      "invariantDecision": "Every port preserves the intervention, control variables, incumbent, and evidence contract.",
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
      "sectionId": "MLE-CH-07-S01",
      "chapterId": "MLE-CH-07",
      "order": 1,
      "purpose": "Decision and Bench Setup",
      "teachingAction": "Frame MLE-CH-07 as a decision bench for: Design a controlled experiment that retains the incumbent and changes only the claimed intervention.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [
        "MLE-CLM-004",
        "MLE-CLM-008",
        "MLE-CLM-010",
        "MLE-CLM-017"
      ],
      "boundaryIds": [
        "BND-01",
        "BND-03",
        "BND-04",
        "BND-09",
        "BND-10"
      ],
      "scenarioIds": [
        "SCN-09"
      ],
      "domainIds": [
        "PD-04"
      ],
      "portIds": [],
      "artifactDelta": "Declare the BL-06 decision, inputs, state, owners, boundaries, and next evidence.",
      "plannedDepth": "450-550 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-07-S02",
      "chapterId": "MLE-CH-07",
      "order": 2,
      "purpose": "Procedure",
      "teachingAction": "Teach the ordered procedure for MLE-CH-07: Design a controlled experiment that retains the incumbent and changes only the claimed intervention.",
      "claimIds": [
        "MLE-BCLM-019",
        "MLE-BCLM-020",
        "MLE-BCLM-021"
      ],
      "sourceIds": [
        "MLE-BSRC-007",
        "MLE-BSRC-010",
        "MLE-BSRC-015",
        "MLE-BSRC-018",
        "MLE-BSRC-043",
        "MLE-BSRC-021"
      ],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Bind claims MLE-BCLM-019, MLE-BCLM-020, MLE-BCLM-021 to one primary teaching treatment.",
      "plannedDepth": "700-850 words",
      "claimDisposition": "primary"
    },
    {
      "sectionId": "MLE-CH-07-S03",
      "chapterId": "MLE-CH-07",
      "order": 3,
      "purpose": "Evidence interpretation",
      "teachingAction": "Interpret strongest evidence, counterexample, and limitation for MLE-CH-07: Design a controlled experiment that retains the incumbent and changes only the claimed intervention.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Record the strongest conclusion and the exact evidence ceiling for BL-06.",
      "plannedDepth": "500-600 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-07-S04",
      "chapterId": "MLE-CH-07",
      "order": 4,
      "purpose": "Worked trace",
      "teachingAction": "Trace Benchline and bounded satellite/public cases for MLE-CH-07: Design a controlled experiment that retains the incumbent and changes only the claimed intervention.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [
        "CASE-01",
        "CASE-02",
        "CASE-03",
        "CASE-04",
        "CASE-06",
        "CASE-07"
      ],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Apply CASE-01, CASE-02, CASE-03, CASE-04, CASE-06, CASE-07 while preserving constructed/public truth labels.",
      "plannedDepth": "550-650 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-07-S05",
      "chapterId": "MLE-CH-07",
      "order": 5,
      "purpose": "Failure lab",
      "teachingAction": "Inject named RED failures and diagnose disposition for MLE-CH-07: Design a controlled experiment that retains the incumbent and changes only the claimed intervention.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Record diagnostics for PREPROCESSING-CONFOUNDED, RUN-INCOMPLETE, REPRODUCTION-OVERCLAIM.",
      "plannedDepth": "500-600 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-07-S06",
      "chapterId": "MLE-CH-07",
      "order": 6,
      "purpose": "Five-port transfer",
      "teachingAction": "Transfer the invariant decision through five equal ports for MLE-CH-07: Design a controlled experiment that retains the incumbent and changes only the claimed intervention.",
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
      "sectionId": "MLE-CH-07-S07",
      "chapterId": "MLE-CH-07",
      "order": 7,
      "purpose": "Assessment and Qualification Gate",
      "teachingAction": "Assess an observable artifact at the Qualification Gate for MLE-CH-07: Design a controlled experiment that retains the incumbent and changes only the claimed intervention.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Qualify BL-06 through an artifact-based assessment and owner-routed retry.",
      "plannedDepth": "450-550 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-07-S08",
      "chapterId": "MLE-CH-07",
      "order": 8,
      "purpose": "Durable handoff",
      "teachingAction": "Package the state and dossier delta for Phase 08 continuity in MLE-CH-07: Design a controlled experiment that retains the incumbent and changes only the claimed intervention.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Freeze the BL-06 handoff, limitations, recheck triggers, and next dependency.",
      "plannedDepth": "350-450 words",
      "claimDisposition": "cross-reference"
    }
  ],
  "labs": [
    {
      "labId": "MLE-CH-07-LAB-01",
      "chapterId": "MLE-CH-07",
      "truthState": "synthetic-deterministic",
      "inputContract": "MLE-CH-07 fixed offline fixture 1",
      "fixedFixtureIds": [
        "FIX-MLE-CH-07-1"
      ],
      "redFailures": [
        "missing expected evidence"
      ],
      "expectedEvidence": [
        "BL-06 deterministic record"
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
        "MLE-CH-07 evidence identity and owner route remain exact."
      ]
    },
    {
      "labId": "MLE-CH-07-LAB-02",
      "chapterId": "MLE-CH-07",
      "truthState": "synthetic-deterministic",
      "inputContract": "MLE-CH-07 fixed offline fixture 2",
      "fixedFixtureIds": [
        "FIX-MLE-CH-07-2"
      ],
      "redFailures": [
        "illegal promotion or self-approval"
      ],
      "expectedEvidence": [
        "BL-06 deterministic record"
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
        "MLE-CH-07 evidence identity and owner route remain exact."
      ]
    }
  ],
  "assessment": [
    {
      "assessmentId": "MLE-CH-07-ASMT-01",
      "chapterId": "MLE-CH-07",
      "exerciseOutput": "BL-06 evidence artifact",
      "rubric": "Assess Design a controlled experiment that retains the incumbent and changes only the claimed intervention. with observable evidence.",
      "answerIntent": "Explain the decision, evidence, state, owner, and next action.",
      "observablePassEvidence": "BL-06 passes its named qualification gate.",
      "authorityLimit": "The MLE owns workload experiment integrity, not the research agenda or independent gate.",
      "retryRoute": "HOLD or REOPEN with new evidence; never self-approve."
    }
  ],
  "visuals": [
    {
      "visualId": "MLE-V07.1",
      "chapterId": "MLE-CH-07",
      "kind": "semantic-html-css",
      "insertionAnchor": "MLE-CH-07-S03",
      "decisionHelped": "Design a controlled experiment that retains the incumbent and changes only the claimed intervention.",
      "essentialLabels": [
        "decision",
        "evidence",
        "state",
        "owner",
        "next action"
      ],
      "captionIntent": "Explain the BL-06 decision evidence.",
      "altIntent": "Text alternative for MLE-CH-07 evidence flow.",
      "longDescriptionIntent": "Ordered description of MLE-CH-07 evidence, state, owner, and next action.",
      "numericTruthDisposition": "semantic-html-css",
      "candidateStatus": "not-applicable",
      "reservedPath": null
    }
  ],
  "handoff": {
    "chapterId": "MLE-CH-07",
    "phase08Instructions": "Draft MLE-CH-07 from this projection, keep the eight-section order, preserve all claim/source/case identities, and render BL-06 as selectable screen-first evidence furniture.",
    "continuityBridge": "Consume BL-05 without silent repair; produce BL-06 for MLE-CH-08.",
    "wordRange": "4,300-4,900 words",
    "wordRangeRationale": "The comparison ledger and rerun envelope need enough vertical space to expose every control, omission, and attribution limit instead of collapsing into a tracker screenshot.",
    "recheckTriggers": [
      "Blueprint a baseline/candidate harness with a mutation that changes preprocessing and must invalidate the comparison.",
      "Blueprint a run record completeness test that fails when environment, input snapshot, or incumbent identity was omitted despite a successful tracker run.",
      "Blueprint a rerun envelope that records context, repeated results, tolerance, performance cost, and the strongest remaining reproducibility limitation."
    ],
    "prohibitedClaims": [
      "No causal claim from confounded evidence, scientific novelty acceptance, independent qualification, or promise of cross-platform exact reproduction.",
      "Do not invent public-case facts, outcomes, authority, production results, or certification.",
      "Do not activate Phase 08, create code, or generate assets from this blueprint."
    ],
    "evidenceManifest": [
      "MLE-BCLM-019",
      "MLE-BCLM-020",
      "MLE-BCLM-021"
    ]
  }
}
```

PHASE07-CHAPTER-PROJECTION-END
