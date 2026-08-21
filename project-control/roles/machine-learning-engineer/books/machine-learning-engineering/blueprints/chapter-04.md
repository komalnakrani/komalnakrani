# MLE-CH-04 — Make Data and Labels Contractual

Blueprint status: Phase 07 production specification; not manuscript prose. Author: Komal Nakrani. Creative system: Learning Systems Test Bench.

## Frozen identity and production target

- Chapter/order: `MLE-CH-04` / 4
- Slug/part: `make-data-and-labels-contractual` / `PART-02`
- Decision job: Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership.
- Thesis: Data and labels are executable lifecycle contracts, not anonymous training inputs.
- Reader endpoint: Validate a dataset snapshot and label contract and route every exception to its owner.
- Milestone: `BL-03` — Dataset and label contract
- State: `CONTRACTED` → `CONTRACTED`
- Word range: 4,400-5,000 words
- Word-range rationale: Dataset identity, label meaning, provenance, access, retention, population, and exception ownership require separate readable layers and two deterministic fixtures.

## Observable objectives

- Validate schema and snapshot identity without mistaking a clean schema for provenance, permission, label validity, representativeness, or fitness.
- Issue an exception record naming failed contract, affected population, evidence, retained authority, and next action.
- Bind dataset and label contracts to BL-01 purpose and BL-02 consequences.
- Route source truth, access, retention, label validity, privacy, and legal decisions to their owners.

## Prerequisites and five-sentence dossier bridge

Prerequisite artifacts: `BL-02`.

1. The inputs are BL-02 and its inherited BL-01 task, population, incumbent, consequence, and authority fields.
2. The prior state is CONTRACTED because data and label admissibility have not yet been demonstrated.
3. This chapter adds snapshot identity, schema, domains, provenance, collection and annotation history, label semantics, access, retention, maintenance, limitations, and exception routes.
4. BL-03 keeps the dossier CONTRACTED until Chapters 05 and 06 complete transformation and split/conformance evidence; no isolated schema pass promotes the workload.
5. Chapter 05 consumes BL-03 and must trace every transformation and consumer back to these exact source and label identities.

## Owned decision and retained authority

- MLE responsibility: Specify and test workload-facing data and label contracts, preserve evidence gaps, and escalate exceptions.
- Authority owner: Data owners retain source truth, access, retention, and shared pipeline authority; domain owners retain label validity.
- MLE ceiling: The MLE owns workload-facing contracts and conformance, not the enterprise data estate or legal basis.
- Boundaries: `BND-02`, `BND-09`, `BND-10`, `BND-16`, `BND-17`
- Escalation: Route source truth and shared pipelines to data owners, label validity to domain owners, and permission/retention questions to privacy, legal, and governance authorities.
- Explicit non-scope: No enterprise data architecture, legal-basis determination, privacy approval, domain label sign-off, or representativeness certification.

## Production sequence

| Section | Production job | Teaching action | State and dossier delta | Planned depth |
|---|---|---|---|---|
| `MLE-CH-04-S01` | Decision and Bench Setup | Frame MLE-CH-04 as a decision bench for: Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership. | Declare the BL-03 decision, inputs, state, owners, boundaries, and next evidence. | 450-550 words |
| `MLE-CH-04-S02` | Procedure | Teach the ordered procedure for MLE-CH-04: Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership. | Bind claims MLE-BCLM-010, MLE-BCLM-011, MLE-BCLM-012 to one primary teaching treatment. | 700-850 words |
| `MLE-CH-04-S03` | Evidence interpretation | Interpret strongest evidence, counterexample, and limitation for MLE-CH-04: Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership. | Record the strongest conclusion and the exact evidence ceiling for BL-03. | 500-600 words |
| `MLE-CH-04-S04` | Worked trace | Trace Benchline and bounded satellite/public cases for MLE-CH-04: Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership. | Apply CASE-01, CASE-02, CASE-03, CASE-04, CASE-05, CASE-06 while preserving constructed/public truth labels. | 550-650 words |
| `MLE-CH-04-S05` | Failure lab | Inject named RED failures and diagnose disposition for MLE-CH-04: Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership. | Record diagnostics for PROVENANCE-ABSENT, LABEL-SEMANTICS-DRIFT, RETENTION-EXPIRED. | 500-600 words |
| `MLE-CH-04-S06` | Five-port transfer | Transfer the invariant decision through five equal ports for MLE-CH-04: Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership. | Prove the same decision and evidence shape across PORT-MANAGED, PORT-CLASSICAL, PORT-DEEP, PORT-EDGE, PORT-SHARED. | 550-650 words |
| `MLE-CH-04-S07` | Assessment and Qualification Gate | Assess an observable artifact at the Qualification Gate for MLE-CH-04: Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership. | Qualify BL-03 through an artifact-based assessment and owner-routed retry. | 450-550 words |
| `MLE-CH-04-S08` | Durable handoff | Package the state and dossier delta for Phase 08 continuity in MLE-CH-04: Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership. | Freeze the BL-03 handoff, limitations, recheck triggers, and next dependency. | 350-450 words |

Primary teaching is confined to `MLE-CH-04-S02`; later appearances are trace, failure, transfer, assessment, or handoff uses rather than duplicate primary treatments.

## Bench Setup, Bench Sheet, and Qualification Gate

### Bench Setup

| Field | Frozen value |
|---|---|
| decision | Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership. |
| evidence | `MLE-BCLM-010`, `MLE-BCLM-011`, `MLE-BCLM-012` supported by `MLE-BSRC-002`, `MLE-BSRC-003`, `MLE-BSRC-007`, `MLE-BSRC-024`, `MLE-BSRC-004`, `MLE-BSRC-028`, `MLE-BSRC-038` |
| state | `CONTRACTED` |
| owner | Data owners retain source truth, access, retention, and shared pipeline authority; domain owners retain label validity. |
| next action | Execute the two deterministic labs and prepare `BL-03`. |

### Bench Sheet

| Field | Required reader record |
|---|---|
| decision | PASS, HOLD, REJECT, or REOPEN with one-sentence rationale |
| evidence | Input identities, measurements, failures, limitations, and hashes |
| state and dossier delta | `CONTRACTED` → `CONTRACTED`; produce `BL-03` v1.0.0 |
| authority route | Route source truth and shared pipelines to data owners, label validity to domain owners, and permission/retention questions to privacy, legal, and governance authorities. |
| next evidence | A transformation and feedback graph bound to the accepted dataset, label, source, consumer, and owner identities. |

### Qualification Gate

The gate passes only when the decision, evidence, state, owner, limitation, authority route, and next evidence are all explicit. Missing or disputed authority produces HOLD; a forbidden promotion produces REJECT; changed upstream evidence produces REOPEN.

## Skill procedure and evidence interpretation

1. Freeze dataset and label identities with version, hash, owner, and population.
2. Run executable schema, domain, missingness, and anomaly checks.
3. Review provenance, collection, annotation, permissions, retention, maintenance, and limitations separately.
4. Create an exception record for every failed or unevaluable field.
5. Issue BL-03 with evidence and authority routes; never promote on schema success alone.

- Strongest supportable conclusion: Data is contractually admissible only when machine checks and human authority review remain distinguishable and traceable.
- Counterexample: A schema-valid snapshot with an undocumented label change and expired retention basis fails the contract.
- Limitation: Documentation and conformance tests expose assertions; they do not independently prove truth, permission, or fitness.

Claim/source contract:

| Claim | Accepted sources | Limitation | Treatment |
|---|---|---|---|
| `MLE-BCLM-010` | `MLE-BSRC-002`, `MLE-BSRC-003` | Documentation records provenance and decisions but does not itself validate assertions, permissions, label truth, or fitness. | durable |
| `MLE-BCLM-011` | `MLE-BSRC-007`, `MLE-BSRC-024` | TFDV's anomaly types and comparators are framework-specific and require domain-set thresholds. | volatile mechanism context |
| `MLE-BCLM-012` | `MLE-BSRC-004`, `MLE-BSRC-028`, `MLE-BSRC-038` | The regulator example is medical-device-specific and the empirical cascade evidence is context-bounded. | durable |

## Benchline artifact contract

- Inputs: BENCHLINE-DATA-004 with synthetic snapshot DS-004, label contract LC-004, schema v3, provenance ledger, and exception owners.
- Version/hash: `BL-03` v1.0.0; the deterministic fixture and produced record receive SHA-256 identities at execution time.
- Mutations: PROVENANCE-ABSENT: retain a clean schema but delete origin and require HOLD. LABEL-SEMANTICS-DRIFT: change positive-label meaning without versioning and require REJECT. RETENTION-EXPIRED: advance the fixture date beyond the accepted window and require REOPEN to CONTRACTED.
- Output: BL-03 dataset and label contract plus owner-routed exception ledger.
- Evidence: fixed input identity, mutation result, measured record, explicit limitation, owner, disposition, and next action.
- Owner: Data owners retain source truth, access, retention, and shared pipeline authority; domain owners retain label validity.
- Authority route: Route source truth and shared pipelines to data owners, label validity to domain owners, and permission/retention questions to privacy, legal, and governance authorities.
- Legal dispositions: PASS, HOLD, REJECT, REOPEN.
- Acceptance checks: exact artifact identity; expected failure discrimination; no silent upstream repair; no automatic promotion; no MLE self-approval.

## Future deterministic companion contract

- Truth label: `synthetic-deterministic`.
- Lab 01 is the positive fixed-fixture path; Lab 02 injects illegal promotion or self-approval.
- Fixtures remain offline, provider-neutral, immutable, and free of network, production, or authority mutation.
- Expected records are `BL-03` evidence, input/output hashes, named failures, disposition, owner route, and next evidence.
- Phase 07 creates no companion code; these are only future execution contracts.

## Failure injections and diagnostics

- PROVENANCE-ABSENT: retain a clean schema but delete origin and require HOLD.
- LABEL-SEMANTICS-DRIFT: change positive-label meaning without versioning and require REJECT.
- RETENTION-EXPIRED: advance the fixture date beyond the accepted window and require REOPEN to CONTRACTED.

Diagnostic evidence must distinguish the newly injected failure from pre-existing gaps. Repair may change only the failed contract field and must create a new artifact identity. HOLD and REJECT can never promote directly to RELEASABLE, and the workload owner cannot self-approve an external gate.

## Five-port transfer table

| Port | Replaceable mechanics | Invariant decision | Required evidence | Failure injection | Limitation |
|---|---|---|---|---|---|
| `PORT-MANAGED` | Provider-managed training, registry, serving, and observation. | Every port binds exact input and label identities even when storage and feature mechanisms differ. | Exportable identities, limits, configuration, evaluation, release, observation, and recovery records. | Unavailable export or opaque provider state. | Provider claims are not workload qualification. |
| `PORT-CLASSICAL` | Local feature transformation and statistical/classical estimator. | Every port binds exact input and label identities even when storage and feature mechanisms differ. | Feature identities, bounded run, calibrated/segment evidence where applicable, package, envelope, recovery. | Feature order or preprocessing mismatch. | Simplicity does not remove lifecycle evidence. |
| `PORT-DEEP` | Parameterized training, accelerator context, checkpoint, and tensor-serving path. | Every port binds exact input and label identities even when storage and feature mechanisms differ. | Data/run/checkpoint/tokenizer-or-preprocessor identities, bounded reproducibility, evaluation, envelope, recovery. | Wrong checkpoint, preprocessing, or hardware-context identity. | Model scale and benchmark novelty do not replace evidence. |
| `PORT-EDGE` | Benchline sensor/image input, constrained runtime, device package, and delayed feedback. | Every port binds exact input and label identities even when storage and feature mechanisms differ. | Sensor/data/label identity, edge package, measured envelope, rollback, controls, retirement. | Sensor shift, resource pressure, or stale device package. | Benchline is fictional and cannot imply real industrial performance or safety. |
| `PORT-SHARED` | Multi-tenant shared features, training, registry, serving, and observability. | Every port binds exact input and label identities even when storage and feature mechanisms differ. | Tenant/workload identity, compatibility, resource envelope, control use, recovery, and owner routes. | Tenant collision, shared-runtime upgrade, or fleet SLO pressure. | Workload evidence cannot claim platform-wide assurance. |

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

## Exercises, assessment, and answer intent

- Exercise output: Diagnose two passing schema reports that differ only in provenance and label meaning; select the supportable disposition for each.
- Rubric: assess Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership. using exact identities, observable evidence, explicit limitation, state, owner, disposition, and next action.
- Answer intent: explain why the evidence supports the disposition and what it does not support.
- Observable PASS evidence: `BL-03` passes its named Qualification Gate and preserves all authority limits.
- HOLD/REJECT/REOPEN path: issue a new evidence request and artifact version; never silently repair or self-approve.
- Authority limit: The MLE owns workload-facing contracts and conformance, not the enterprise data estate or legal basis.

## Visual and accessibility contract

Semantic stacked contract layers—identity, machine conformance, provenance, label meaning, permission/retention, and exception route—paired with a selectable lineage table.

| Visual | Treatment | Anchor | Essential labels | Candidate | Reserved path |
|---|---|---|---|---|---|
| `MLE-V04.1` | semantic-html-css | `MLE-CH-04-S03` | decision, evidence, state, owner, next action | not-applicable | none |

Caption intent: explain the `BL-03` decision evidence. Alt intent: identify the decision, evidence, state, owner, and next action. Long description follows the visual in reading order and enumerates every relationship. All IDs, values, thresholds, axes, tables, and numeric truth remain selectable semantic HTML/CSS; color is never the only signal.

## Durable doctrine, volatile context, and re-verification

- Durable doctrine: Input and label meaning, provenance, population, and permissions travel with evidence.
- Volatile examples: Current storage engine; Current annotation platform.
- `MLE-BCLM-010`: Keep the contract categories stable and version every dataset snapshot, label definition, owner, and maintenance state. Recheck when: Blueprint a contract with separate machine-checkable identity fields and human-reviewed provenance, label-meaning, permission, and limitation fields.
- `MLE-BCLM-011`: Freeze semantic requirements independently of the current TFDV API and date all example thresholds. Recheck when: Pair every passing schema fixture with a failing provenance or label-semantics fixture to prevent tool-result overclaim.
- `MLE-BCLM-012`: Preserve decision routing as doctrine; treat sector rules, retention schedules, and owner titles as versioned external inputs. Recheck when: Blueprint exception records that name the failed contract, affected population, evidence, retained authority, and next action.
- Dated mechanisms, job postings, tool APIs, framework behavior, platform reports, and sector guidance cannot enter durable doctrine without a fresh identity and bounded authority statement.

## Originality and adjacent-publication boundary

ND-01 through ND-10 PASS: the unit remains workload-facing admissibility evidence, not enterprise data products, generalized governance, AI application behavior, or an adjacent book artifact chain.

PUB-01 through PUB-05 remain input/output neighbors only. The chapter creates a versioned learning-workload disposition and Benchline dossier delta; it does not copy their prose, cases, figures, layouts, accountable centers, or reader endpoints. Replaceability across classical, deep, managed, edge, and shared ports remains mandatory.

## Phase 08 handoff and evidence manifest

- Writer instruction: Draft MLE-CH-04 from this projection, keep the eight-section order, preserve all claim/source/case identities, and render BL-03 as selectable screen-first evidence furniture.
- Continuity: Consume BL-02 without silent repair; produce BL-03 for MLE-CH-05.
- Prohibited claims: No enterprise data architecture, legal-basis determination, privacy approval, domain label sign-off, or representativeness certification. Do not invent public-case facts, outcomes, authority, production results, or certification. Do not activate Phase 08, create code, or generate assets from this blueprint.
- Claims: `MLE-BCLM-010`, `MLE-BCLM-011`, `MLE-BCLM-012`
- Sources: `MLE-BSRC-002`, `MLE-BSRC-003`, `MLE-BSRC-007`, `MLE-BSRC-024`, `MLE-BSRC-004`, `MLE-BSRC-028`, `MLE-BSRC-038`
- Cases: `CASE-01`, `CASE-02`, `CASE-03`, `CASE-04`, `CASE-05`, `CASE-06`
- Architecture claims: `MLE-CLM-004`, `MLE-CLM-009`, `MLE-CLM-017`, `MLE-CLM-018`, `MLE-CLM-020`
- Boundaries: `BND-02`, `BND-09`, `BND-10`, `BND-16`, `BND-17`
- Scenarios: `SCN-02`, `SCN-08`
- Domains: `PD-02`
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`
- Milestone: `BL-03`
- Phase 08 remains inactive.

PHASE07-CHAPTER-PROJECTION-START

```json
{
  "chapter": {
    "chapterId": "MLE-CH-04",
    "order": 4,
    "title": "Make Data and Labels Contractual",
    "slug": "make-data-and-labels-contractual",
    "partId": "PART-02",
    "decisionJob": "Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership.",
    "thesis": "Data and labels are executable lifecycle contracts, not anonymous training inputs.",
    "readerEndpoint": "Validate a dataset snapshot and label contract and route every exception to its owner.",
    "prerequisiteArtifacts": [
      "BL-02"
    ],
    "incomingState": "CONTRACTED",
    "outgoingStates": [
      "CONTRACTED"
    ],
    "milestoneId": "BL-03",
    "authorityOwner": "Data owners retain source truth, access, retention, and shared pipeline authority; domain owners retain label validity.",
    "mleCeiling": "The MLE owns workload-facing contracts and conformance, not the enterprise data estate or legal basis.",
    "primaryClaimIds": [
      "MLE-BCLM-010",
      "MLE-BCLM-011",
      "MLE-BCLM-012"
    ],
    "sectionIds": [
      "MLE-CH-04-S01",
      "MLE-CH-04-S02",
      "MLE-CH-04-S03",
      "MLE-CH-04-S04",
      "MLE-CH-04-S05",
      "MLE-CH-04-S06",
      "MLE-CH-04-S07",
      "MLE-CH-04-S08"
    ],
    "labIds": [
      "MLE-CH-04-LAB-01",
      "MLE-CH-04-LAB-02"
    ],
    "assessmentIds": [
      "MLE-CH-04-ASMT-01"
    ],
    "visualIds": [
      "MLE-V04.1"
    ],
    "portIds": [
      "PORT-MANAGED",
      "PORT-CLASSICAL",
      "PORT-DEEP",
      "PORT-EDGE",
      "PORT-SHARED"
    ],
    "nextChapterId": "MLE-CH-05"
  },
  "claimTeaching": [
    {
      "claimId": "MLE-BCLM-010",
      "chapterId": "MLE-CH-04",
      "primarySectionId": "MLE-CH-04-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-002",
        "MLE-BSRC-003"
      ],
      "caseIds": [
        "CASE-01",
        "CASE-02",
        "CASE-03",
        "CASE-04",
        "CASE-05"
      ],
      "limitation": "Documentation records provenance and decisions but does not itself validate assertions, permissions, label truth, or fitness.",
      "durability": "durable",
      "volatilityTreatment": "Keep the contract categories stable and version every dataset snapshot, label definition, owner, and maintenance state.",
      "recheckTriggers": [
        "Blueprint a contract with separate machine-checkable identity fields and human-reviewed provenance, label-meaning, permission, and limitation fields."
      ]
    },
    {
      "claimId": "MLE-BCLM-011",
      "chapterId": "MLE-CH-04",
      "primarySectionId": "MLE-CH-04-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-007",
        "MLE-BSRC-024"
      ],
      "caseIds": [
        "CASE-01",
        "CASE-02",
        "CASE-03",
        "CASE-04",
        "CASE-05",
        "CASE-06"
      ],
      "limitation": "TFDV's anomaly types and comparators are framework-specific and require domain-set thresholds.",
      "durability": "volatile",
      "volatilityTreatment": "Freeze semantic requirements independently of the current TFDV API and date all example thresholds.",
      "recheckTriggers": [
        "Pair every passing schema fixture with a failing provenance or label-semantics fixture to prevent tool-result overclaim."
      ]
    },
    {
      "claimId": "MLE-BCLM-012",
      "chapterId": "MLE-CH-04",
      "primarySectionId": "MLE-CH-04-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-004",
        "MLE-BSRC-028",
        "MLE-BSRC-038"
      ],
      "caseIds": [
        "CASE-01",
        "CASE-02",
        "CASE-03",
        "CASE-04",
        "CASE-05"
      ],
      "limitation": "The regulator example is medical-device-specific and the empirical cascade evidence is context-bounded.",
      "durability": "durable",
      "volatilityTreatment": "Preserve decision routing as doctrine; treat sector rules, retention schedules, and owner titles as versioned external inputs.",
      "recheckTriggers": [
        "Blueprint exception records that name the failed contract, affected population, evidence, retained authority, and next action."
      ]
    }
  ],
  "sourceUses": [
    {
      "sourceId": "MLE-BSRC-002",
      "claimId": "MLE-BCLM-010",
      "chapterId": "MLE-CH-04",
      "sectionIds": [
        "MLE-CH-04-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "A datasheet records assertions and questions; it does not execute validation or settle legal authority.",
      "durability": "volatile",
      "volatility": "low",
      "recheckTrigger": "Recheck at publication freezes for arXiv continuity and preserve the exact revision used during canonical integration."
    },
    {
      "sourceId": "MLE-BSRC-003",
      "claimId": "MLE-BCLM-010",
      "chapterId": "MLE-CH-04",
      "sectionIds": [
        "MLE-CH-04-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Does not prescribe executable schema checks, retention law, or domain label validity.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck at publication freezes for index continuity; retain the 2022 paper identity."
    },
    {
      "sourceId": "MLE-BSRC-007",
      "claimId": "MLE-BCLM-011",
      "chapterId": "MLE-CH-04",
      "sectionIds": [
        "MLE-CH-04-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "The rubric does not establish universal pass scores, domain acceptance, safety, privacy, security, compliance, business outcomes, or workload-specific authority.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck at publication freezes for record and final-paper availability; translate its tests into current workload evidence rather than copying a score threshold."
    },
    {
      "sourceId": "MLE-BSRC-024",
      "claimId": "MLE-BCLM-011",
      "chapterId": "MLE-CH-04",
      "sectionIds": [
        "MLE-CH-04-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Detection coverage and thresholds are implementation- and domain-specific. Passing input comparisons does not prove provenance, permission, representativeness, label truth, model adequacy, causal attribution, or permission to retrain and promote.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck at every freeze and whenever TFX/TFDV releases alter schemas, comparators, API fields, threshold behavior, or tutorial semantics."
    },
    {
      "sourceId": "MLE-BSRC-004",
      "claimId": "MLE-BCLM-012",
      "chapterId": "MLE-CH-04",
      "sectionIds": [
        "MLE-CH-04-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Does not establish universal causal frequency, a technical validator, or authority transfer to the MLE.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck at publication freezes for paper access; keep empirical claims tied to the study sample and methods."
    },
    {
      "sourceId": "MLE-BSRC-028",
      "claimId": "MLE-BCLM-012",
      "chapterId": "MLE-CH-04",
      "sectionIds": [
        "MLE-CH-04-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "AI RMF 1.0 does not assign organization-specific MLE ownership, set workload thresholds, certify compliance, prescribe this book's PASS/HOLD/REJECT vocabulary, or collapse formal authority into a metric producer.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck at blueprint, manuscript, and publication freeze for the announced revision; keep version 1.0 explicit and replace or dual-cite only after a revised framework is actually published."
    },
    {
      "sourceId": "MLE-BSRC-038",
      "claimId": "MLE-BCLM-012",
      "chapterId": "MLE-CH-04",
      "sectionIds": [
        "MLE-CH-04-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "The 2021 principles do not authorize non-medical deployments, allocate internal MLE authority, provide universal thresholds, or supersede the distinct IMDRF N88 FINAL:2025 edition.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck direct-PDF availability at every freeze; retain the October 2021 identity only for claims that require the historical joint principles and prefer IMDRF N88 FINAL:2025 for current guidance."
    }
  ],
  "casePlacements": [
    {
      "caseId": "CASE-01",
      "chapterId": "MLE-CH-04",
      "sectionIds": [
        "MLE-CH-04-S04"
      ],
      "usePurpose": "Apply Benchline Inspection Dossier without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-02",
      "chapterId": "MLE-CH-04",
      "sectionIds": [
        "MLE-CH-04-S04"
      ],
      "usePurpose": "Apply Managed demand forecast without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-03",
      "chapterId": "MLE-CH-04",
      "sectionIds": [
        "MLE-CH-04-S04"
      ],
      "usePurpose": "Apply Classical credit triage without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-04",
      "chapterId": "MLE-CH-04",
      "sectionIds": [
        "MLE-CH-04-S04"
      ],
      "usePurpose": "Apply Deep acoustic event classifier without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-05",
      "chapterId": "MLE-CH-04",
      "sectionIds": [
        "MLE-CH-04-S04"
      ],
      "usePurpose": "Apply Shared ranking platform tenant without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-06",
      "chapterId": "MLE-CH-04",
      "sectionIds": [
        "MLE-CH-04-S04"
      ],
      "usePurpose": "Apply Google ML Test Score production-readiness method without exceeding its truth boundary."
    }
  ],
  "dossier": {
    "chapterId": "MLE-CH-04",
    "milestoneId": "BL-03",
    "incomingState": "CONTRACTED",
    "inputArtifactIds": [
      "BL-02"
    ],
    "inputHashes": [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    ],
    "producedArtifactId": "BL-03",
    "artifactVersion": "1.0.0",
    "legalOutgoingStates": [
      "CONTRACTED"
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
    "nextChapterId": "MLE-CH-05"
  },
  "ports": [
    {
      "chapterId": "MLE-CH-04",
      "portId": "PORT-MANAGED",
      "invariantDecision": "Every port binds exact input and label identities even when storage and feature mechanisms differ.",
      "variableMechanism": "Provider-managed training, registry, serving, and observation.",
      "requiredEvidence": "Exportable identities, limits, configuration, evaluation, release, observation, and recovery records.",
      "externalAuthority": "Provider/platform plus all product/domain/formal owners remain external.",
      "failureInjection": "Unavailable export or opaque provider state.",
      "limitation": "Provider claims are not workload qualification.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-04",
      "portId": "PORT-CLASSICAL",
      "invariantDecision": "Every port binds exact input and label identities even when storage and feature mechanisms differ.",
      "variableMechanism": "Local feature transformation and statistical/classical estimator.",
      "requiredEvidence": "Feature identities, bounded run, calibrated/segment evidence where applicable, package, envelope, recovery.",
      "externalAuthority": "Data, evaluation, product/domain, and formal owners remain external.",
      "failureInjection": "Feature order or preprocessing mismatch.",
      "limitation": "Simplicity does not remove lifecycle evidence.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-04",
      "portId": "PORT-DEEP",
      "invariantDecision": "Every port binds exact input and label identities even when storage and feature mechanisms differ.",
      "variableMechanism": "Parameterized training, accelerator context, checkpoint, and tensor-serving path.",
      "requiredEvidence": "Data/run/checkpoint/tokenizer-or-preprocessor identities, bounded reproducibility, evaluation, envelope, recovery.",
      "externalAuthority": "Research, evaluation, platform, and formal owners remain external.",
      "failureInjection": "Wrong checkpoint, preprocessing, or hardware-context identity.",
      "limitation": "Model scale and benchmark novelty do not replace evidence.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-04",
      "portId": "PORT-EDGE",
      "invariantDecision": "Every port binds exact input and label identities even when storage and feature mechanisms differ.",
      "variableMechanism": "Benchline sensor/image input, constrained runtime, device package, and delayed feedback.",
      "requiredEvidence": "Sensor/data/label identity, edge package, measured envelope, rollback, controls, retirement.",
      "externalAuthority": "Hardware, operations, domain, safety, security, platform, and product owners remain external.",
      "failureInjection": "Sensor shift, resource pressure, or stale device package.",
      "limitation": "Benchline is fictional and cannot imply real industrial performance or safety.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-04",
      "portId": "PORT-SHARED",
      "invariantDecision": "Every port binds exact input and label identities even when storage and feature mechanisms differ.",
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
      "sectionId": "MLE-CH-04-S01",
      "chapterId": "MLE-CH-04",
      "order": 1,
      "purpose": "Decision and Bench Setup",
      "teachingAction": "Frame MLE-CH-04 as a decision bench for: Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [
        "MLE-CLM-004",
        "MLE-CLM-009",
        "MLE-CLM-017",
        "MLE-CLM-018",
        "MLE-CLM-020"
      ],
      "boundaryIds": [
        "BND-02",
        "BND-09",
        "BND-10",
        "BND-16",
        "BND-17"
      ],
      "scenarioIds": [
        "SCN-02",
        "SCN-08"
      ],
      "domainIds": [
        "PD-02"
      ],
      "portIds": [],
      "artifactDelta": "Declare the BL-03 decision, inputs, state, owners, boundaries, and next evidence.",
      "plannedDepth": "450-550 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-04-S02",
      "chapterId": "MLE-CH-04",
      "order": 2,
      "purpose": "Procedure",
      "teachingAction": "Teach the ordered procedure for MLE-CH-04: Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership.",
      "claimIds": [
        "MLE-BCLM-010",
        "MLE-BCLM-011",
        "MLE-BCLM-012"
      ],
      "sourceIds": [
        "MLE-BSRC-002",
        "MLE-BSRC-003",
        "MLE-BSRC-007",
        "MLE-BSRC-024",
        "MLE-BSRC-004",
        "MLE-BSRC-028",
        "MLE-BSRC-038"
      ],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Bind claims MLE-BCLM-010, MLE-BCLM-011, MLE-BCLM-012 to one primary teaching treatment.",
      "plannedDepth": "700-850 words",
      "claimDisposition": "primary"
    },
    {
      "sectionId": "MLE-CH-04-S03",
      "chapterId": "MLE-CH-04",
      "order": 3,
      "purpose": "Evidence interpretation",
      "teachingAction": "Interpret strongest evidence, counterexample, and limitation for MLE-CH-04: Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Record the strongest conclusion and the exact evidence ceiling for BL-03.",
      "plannedDepth": "500-600 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-04-S04",
      "chapterId": "MLE-CH-04",
      "order": 4,
      "purpose": "Worked trace",
      "teachingAction": "Trace Benchline and bounded satellite/public cases for MLE-CH-04: Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [
        "CASE-01",
        "CASE-02",
        "CASE-03",
        "CASE-04",
        "CASE-05",
        "CASE-06"
      ],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Apply CASE-01, CASE-02, CASE-03, CASE-04, CASE-05, CASE-06 while preserving constructed/public truth labels.",
      "plannedDepth": "550-650 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-04-S05",
      "chapterId": "MLE-CH-04",
      "order": 5,
      "purpose": "Failure lab",
      "teachingAction": "Inject named RED failures and diagnose disposition for MLE-CH-04: Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Record diagnostics for PROVENANCE-ABSENT, LABEL-SEMANTICS-DRIFT, RETENTION-EXPIRED.",
      "plannedDepth": "500-600 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-04-S06",
      "chapterId": "MLE-CH-04",
      "order": 6,
      "purpose": "Five-port transfer",
      "teachingAction": "Transfer the invariant decision through five equal ports for MLE-CH-04: Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership.",
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
      "sectionId": "MLE-CH-04-S07",
      "chapterId": "MLE-CH-04",
      "order": 7,
      "purpose": "Assessment and Qualification Gate",
      "teachingAction": "Assess an observable artifact at the Qualification Gate for MLE-CH-04: Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Qualify BL-03 through an artifact-based assessment and owner-routed retry.",
      "plannedDepth": "450-550 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-04-S08",
      "chapterId": "MLE-CH-04",
      "order": 8,
      "purpose": "Durable handoff",
      "teachingAction": "Package the state and dossier delta for Phase 08 continuity in MLE-CH-04: Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Freeze the BL-03 handoff, limitations, recheck triggers, and next dependency.",
      "plannedDepth": "350-450 words",
      "claimDisposition": "cross-reference"
    }
  ],
  "labs": [
    {
      "labId": "MLE-CH-04-LAB-01",
      "chapterId": "MLE-CH-04",
      "truthState": "synthetic-deterministic",
      "inputContract": "MLE-CH-04 fixed offline fixture 1",
      "fixedFixtureIds": [
        "FIX-MLE-CH-04-1"
      ],
      "redFailures": [
        "missing expected evidence"
      ],
      "expectedEvidence": [
        "BL-03 deterministic record"
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
        "MLE-CH-04 evidence identity and owner route remain exact."
      ]
    },
    {
      "labId": "MLE-CH-04-LAB-02",
      "chapterId": "MLE-CH-04",
      "truthState": "synthetic-deterministic",
      "inputContract": "MLE-CH-04 fixed offline fixture 2",
      "fixedFixtureIds": [
        "FIX-MLE-CH-04-2"
      ],
      "redFailures": [
        "illegal promotion or self-approval"
      ],
      "expectedEvidence": [
        "BL-03 deterministic record"
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
        "MLE-CH-04 evidence identity and owner route remain exact."
      ]
    }
  ],
  "assessment": [
    {
      "assessmentId": "MLE-CH-04-ASMT-01",
      "chapterId": "MLE-CH-04",
      "exerciseOutput": "BL-03 evidence artifact",
      "rubric": "Assess Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership. with observable evidence.",
      "answerIntent": "Explain the decision, evidence, state, owner, and next action.",
      "observablePassEvidence": "BL-03 passes its named qualification gate.",
      "authorityLimit": "The MLE owns workload-facing contracts and conformance, not the enterprise data estate or legal basis.",
      "retryRoute": "HOLD or REOPEN with new evidence; never self-approve."
    }
  ],
  "visuals": [
    {
      "visualId": "MLE-V04.1",
      "chapterId": "MLE-CH-04",
      "kind": "semantic-html-css",
      "insertionAnchor": "MLE-CH-04-S03",
      "decisionHelped": "Define admissible dataset and label identities with provenance, access, retention, domain, and exception ownership.",
      "essentialLabels": [
        "decision",
        "evidence",
        "state",
        "owner",
        "next action"
      ],
      "captionIntent": "Explain the BL-03 decision evidence.",
      "altIntent": "Text alternative for MLE-CH-04 evidence flow.",
      "longDescriptionIntent": "Ordered description of MLE-CH-04 evidence, state, owner, and next action.",
      "numericTruthDisposition": "semantic-html-css",
      "candidateStatus": "not-applicable",
      "reservedPath": null
    }
  ],
  "handoff": {
    "chapterId": "MLE-CH-04",
    "phase08Instructions": "Draft MLE-CH-04 from this projection, keep the eight-section order, preserve all claim/source/case identities, and render BL-03 as selectable screen-first evidence furniture.",
    "continuityBridge": "Consume BL-02 without silent repair; produce BL-03 for MLE-CH-05.",
    "wordRange": "4,400-5,000 words",
    "wordRangeRationale": "Dataset identity, label meaning, provenance, access, retention, population, and exception ownership require separate readable layers and two deterministic fixtures.",
    "recheckTriggers": [
      "Blueprint a contract with separate machine-checkable identity fields and human-reviewed provenance, label-meaning, permission, and limitation fields.",
      "Pair every passing schema fixture with a failing provenance or label-semantics fixture to prevent tool-result overclaim.",
      "Blueprint exception records that name the failed contract, affected population, evidence, retained authority, and next action."
    ],
    "prohibitedClaims": [
      "No enterprise data architecture, legal-basis determination, privacy approval, domain label sign-off, or representativeness certification.",
      "Do not invent public-case facts, outcomes, authority, production results, or certification.",
      "Do not activate Phase 08, create code, or generate assets from this blueprint."
    ],
    "evidenceManifest": [
      "MLE-BCLM-010",
      "MLE-BCLM-011",
      "MLE-BCLM-012"
    ]
  }
}
```

PHASE07-CHAPTER-PROJECTION-END
