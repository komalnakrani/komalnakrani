# MLE-CH-11 — Treat Uncertainty, Calibration, and Failure as Evidence

> Production specification for *Machine Learning Engineering: From Task Contract to Operating Evidence* by Komal Nakrani. Phase 07 defines structure and evidence only; it creates no manuscript prose, code, assets, or publication output.

## Frozen identity and production target

| Field | Frozen value |
| --- | --- |
| Chapter | `MLE-CH-11` · order 11 · `treat-uncertainty-calibration-and-failure-as-evidence` |
| Part | `PART-04` |
| Decision job | Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence. |
| Thesis | A score becomes decision evidence only when its uncertainty, calibration relevance, failure families, and limitations are explicit. |
| Reader endpoint | Interpret calibration and resampling evidence without converting it into universal confidence. |
| Milestone | `BL-10` — Uncertainty and failure evidence |
| State | `CANDIDATE` → `CANDIDATE` |
| Word range | 6,500-7,800 words |
| Word-range rationale | Complete one eight-section decision loop, two deterministic labs, five-port transfer, assessment, and handoff; add length only for evidence clarity. |

## Observable objectives

- Determine whether probability calibration applies.
- Separate model-fit, calibration-fit, and assessment partitions.
- Interpret exact reliability evidence without universal confidence.
- Block metrics that hide sparse samples or failure families.

Pass requires an inspectable `BL-10` artifact; recall alone does not qualify.

## Prerequisites and five-sentence dossier bridge

1. Consume `BL-09` exactly; absence or hash mismatch forces HOLD.
2. Enter in `CANDIDATE` with prior failures, limitations, and owner routes still visible.
3. Add calibration-applicability, uncertainty, and failure ledger without silently repairing upstream evidence.
4. Emit `BL-10` in `CANDIDATE` only through its legal gate and preserve reopen triggers.
5. Supply BL-11 technical disposition; the next chapter may consume this record but cannot infer missing evidence.

## Owned decision and retained authority

- **MLE-owned decision:** Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence.
- **Authority owner:** Evaluation owns method adequacy; domain/safety authorities judge consequential error sufficiency.
- **MLE ceiling:** The MLE computes and diagnoses evidence but cannot turn method output into formal acceptance.
- **Boundaries:** `BND-01`, `BND-05`, `BND-15`, `BND-17`.
- **Escalation:** unresolved external decisions force HOLD and route to their named owners.
- **Non-scope:** no adjacent authority, real outcome, certification, or deployment approval is created.

## Production sequence

| Section | Job | Evidence | Dossier delta | Depth |
| --- | --- | --- | --- | --- |
| `MLE-CH-11-S01` | Decision and Bench Setup — Frame MLE-CH-11 for the decision job: Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence. | canonical trace | Open decision, evidence, state, owner, and next-action fields. | 700-850 words |
| `MLE-CH-11-S02` | Procedure — Teach MLE-CH-11 for the decision job: Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence. | MLE-BCLM-031, MLE-BCLM-032, MLE-BCLM-033 · MLE-BSRC-012, MLE-BSRC-023, MLE-BSRC-006, MLE-BSRC-025 | Build calibration-applicability, uncertainty, and failure ledger from canonical evidence. | 1,250-1,500 words |
| `MLE-CH-11-S03` | Evidence interpretation — Interpret MLE-CH-11 for the decision job: Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence. | canonical trace | Add bounded conclusion, counterexample, and limitation. | 850-1,050 words |
| `MLE-CH-11-S04` | Worked trace — Trace MLE-CH-11 for the decision job: Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence. | CASE-01, CASE-03, CASE-04, CASE-09 | Attach truth-bounded case traces. | 850-1,100 words |
| `MLE-CH-11-S05` | Failure lab — Inject MLE-CH-11 for the decision job: Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence. | canonical trace | Record RED evidence and repair boundary. | 700-900 words |
| `MLE-CH-11-S06` | Five-port transfer — Transfer MLE-CH-11 for the decision job: Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence. | canonical trace | Prove five-port parity. | 700-850 words |
| `MLE-CH-11-S07` | Assessment and Qualification Gate — Qualify MLE-CH-11 for the decision job: Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence. | canonical trace | Attach rubric and Qualification Gate. | 650-800 words |
| `MLE-CH-11-S08` | Durable handoff — Freeze MLE-CH-11 for the decision job: Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence. | canonical trace | Freeze continuity and recheck triggers. | 700-850 words |

Primary teaching occurs exactly once in `MLE-CH-11-S02`; all later uses are cross-references or applications.

## Bench Setup, Bench Sheet, and Qualification Gate

### Bench Setup

- Decision: What can the score support after sample limits, failure families, and calibration applicability are visible?
- Inputs: `BL-09` plus canonical mappings and offline fixtures.
- Failure pressure: A well-calibrated aggregate hides sparse evidence, an important error family, or an inapplicable probability interpretation.

### Bench Sheet

| decision | evidence | state and dossier delta | owner | authority route | next evidence |
| --- | --- | --- | --- | --- | --- |
| What can the score support after sample limits, failure families, and calibration applicability are visible? | calibration-applicability, uncertainty, and failure ledger and failure trace | `CANDIDATE` → `CANDIDATE` via `BL-10` | MLE compiles workload evidence | Evaluation owns method adequacy; domain/safety authorities judge consequential error sufficiency. | BL-11 technical disposition |

### Qualification Gate

- PASS: identities, evidence, limitations, owner routes, ports, and acceptance checks resolve.
- HOLD: required evidence or external decision is missing or a recoverable failure remains.
- REJECT: the candidate basis cannot satisfy the named contract.
- REOPEN: a frozen lifecycle trigger invalidates scope.
- Illegal: automatic promotion, hidden failure, silent upstream repair, or self-approval.

## Skill procedure and evidence interpretation

1. State output semantics and calibration applicability.
2. Freeze independent fit and assessment partitions.
3. Compute the selectable reliability or uncertainty record.
4. Expose sample limits and named error families.
5. Write the bounded interpretation and counterexample.
6. Route consequential sufficiency to evaluation and domain or safety owners.

- **Strongest supportable conclusion:** The metric supports only its named output meaning, partition design, sample scope, and observed failures.
- **Counterexample:** A calibrated aggregate hides a sparse consequential segment.
- **Limitation:** Calibration and uncertainty methods do not establish safety or segment sufficiency.

## Benchline artifact contract

| Field | Requirement |
| --- | --- |
| Inputs | `BL-09` with hashes and unresolved limitations |
| Version/hash | `BL-10` version `1.0.0`; all records resolve immutably |
| Mutations | Remove sample count and one failure family. |
| Output | calibration-applicability, uncertainty, and failure ledger |
| Evidence | `MLE-BCLM-031`, `MLE-BCLM-032`, `MLE-BCLM-033` with `MLE-BSRC-012`, `MLE-BSRC-023`, `MLE-BSRC-006`, `MLE-BSRC-025` |
| Owner | MLE owns workload-specific assembly and diagnostics |
| authority route | Evaluation owns method adequacy; domain/safety authorities judge consequential error sufficiency. |
| Legal disposition | PASS / HOLD / REJECT / REOPEN within `CANDIDATE` |
| Acceptance | identities resolve, RED is detected, limitations remain, prohibited effects are absent |

## Future deterministic companion contract

Only offline, synthetic, provider-neutral fixtures are allowed; Phase 07 creates no code.
- applicability record.
- independent partition fixture.
- reliability table.
- failure-ledger mutation.
- Expected records: `BL-10`, both lab records, diagnostics, and disposition.
- No network, provider account, production system, credential, real person, deployment, or authority mutation.

## Failure injections and diagnostics

| RED failure | Discriminating evidence | Repair boundary |
| --- | --- | --- |
| `CALIBRATION_INAPPLICABLE` | Apply probability language to an output without event-probability meaning. | Record non-applicability and use appropriate evidence. |
| `PARTITIONS_REUSED` | Fit and assess calibration on one sample. | Restore independent partitions and recompute. |
| `FAILURE_FAMILY_HIDDEN` | Hide a sparse segment or unresolved error family. | Expose it and HOLD or narrow the claim. |

Every repair gets a new evidence identity; diagnostics cannot promote state or approve themselves.

## Five-port transfer table

| Port | Invariant decision | Mechanism | Required evidence | External authority | Failure / limitation | Result |
| --- | --- | --- | --- | --- | --- | --- |
| `PORT-MANAGED` | All ports expose uncertainty, failure, and limitation evidence appropriate to their model output. | Provider-managed training, registry, serving, and observation. | Exportable identities, limits, configuration, evaluation, release, observation, and recovery records. | Provider/platform plus all product/domain/formal owners remain external. | Unavailable export or opaque provider state.; Provider claims are not workload qualification. | PASS |
| `PORT-CLASSICAL` | All ports expose uncertainty, failure, and limitation evidence appropriate to their model output. | Local feature transformation and statistical/classical estimator. | Feature identities, bounded run, calibrated/segment evidence where applicable, package, envelope, recovery. | Data, evaluation, product/domain, and formal owners remain external. | Feature order or preprocessing mismatch.; Simplicity does not remove lifecycle evidence. | PASS |
| `PORT-DEEP` | All ports expose uncertainty, failure, and limitation evidence appropriate to their model output. | Parameterized training, accelerator context, checkpoint, and tensor-serving path. | Data/run/checkpoint/tokenizer-or-preprocessor identities, bounded reproducibility, evaluation, envelope, recovery. | Research, evaluation, platform, and formal owners remain external. | Wrong checkpoint, preprocessing, or hardware-context identity.; Model scale and benchmark novelty do not replace evidence. | PASS |
| `PORT-EDGE` | All ports expose uncertainty, failure, and limitation evidence appropriate to their model output. | Benchline sensor/image input, constrained runtime, device package, and delayed feedback. | Sensor/data/label identity, edge package, measured envelope, rollback, controls, retirement. | Hardware, operations, domain, safety, security, platform, and product owners remain external. | Sensor shift, resource pressure, or stale device package.; Benchline is fictional and cannot imply real industrial performance or safety. | PASS |
| `PORT-SHARED` | All ports expose uncertainty, failure, and limitation evidence appropriate to their model output. | Multi-tenant shared features, training, registry, serving, and observability. | Tenant/workload identity, compatibility, resource envelope, control use, recovery, and owner routes. | Platform/SRE/security own shared systems and fleet decisions. | Tenant collision, shared-runtime upgrade, or fleet SLO pressure.; Workload evidence cannot claim platform-wide assurance. | PASS |

No port is privileged; mechanism changes cannot change the decision job, evidence shape, or authority separation.

## Cases and truth boundaries

### `CASE-01` — Benchline Inspection Dossier (FICTIONAL SYNTHETIC CAPSTONE)

- Use: Apply Benchline Inspection Dossier without exceeding its truth boundary.
- Reported facts: none; synthetic or constructed case.
- Attributed outcomes: none.
- Allowed inference: Only the documented transfer method.
- Forbidden inference: do not infer unreported outcomes for Benchline Inspection Dossier.
- Limitation: No real production, industrial, safety, performance, or business claim.
- Transfer rule: Preserve the decision and evidence job.

### `CASE-03` — Classical credit triage (CONSTRUCTED SATELLITE)

- Use: Apply Classical credit triage without exceeding its truth boundary.
- Reported facts: none; synthetic or constructed case.
- Attributed outcomes: none.
- Allowed inference: Only the documented transfer method.
- Forbidden inference: do not infer unreported outcomes for Classical credit triage.
- Limitation: Not financial advice or credit authorization.
- Transfer rule: Preserve the decision and evidence job.

### `CASE-04` — Deep acoustic event classifier (CONSTRUCTED SATELLITE)

- Use: Apply Deep acoustic event classifier without exceeding its truth boundary.
- Reported facts: none; synthetic or constructed case.
- Attributed outcomes: none.
- Allowed inference: Only the documented transfer method.
- Forbidden inference: do not infer unreported outcomes for Deep acoustic event classifier.
- Limitation: Not a deep-learning recipe book.
- Transfer rule: Preserve the decision and evidence job.

### `CASE-09` — Gender Shades intersectional evaluation audit (PUBLIC REPORTED CASE)

- Use: Apply Gender Shades intersectional evaluation audit without exceeding its truth boundary.
- Reported facts: The paper reports that IJB-A and Adience were 79.6% and 86.2% lighter-skinned, respectively. The audit evaluated three commercial systems on the authors' balanced dataset.
- Attributed outcomes: The paper reports error rates up to 34.7% for darker-skinned women and a maximum of 0.8% for lighter-skinned men.
- Allowed inference: Aggregate performance may conceal important intersectional errors.
- Forbidden inference: do not infer unreported outcomes for Gender Shades intersectional evaluation audit.
- Limitation: Not evidence of current vendor performance.
- Transfer rule: Transfer the audit pattern and warning about aggregates, not the group taxonomy or numeric thresholds.

Case identity, fact, attributed outcome, inference, limitation, and transfer remain distinct.

## Exercises, assessment, and answer intent

- **Output:** `BL-10` evidence artifact.
- **Rubric:** execute the decision job with exact identities, visible limitations, correct state, and retained authority.
- **Answer intent:** explain decision, evidence, state, owner, next action, and why the strongest rejected alternative overclaims.
- **Pass evidence:** the artifact and both labs satisfy the Qualification Gate.
- **Retry:** HOLD or REOPEN with new evidence; REJECT when the basis cannot qualify; never self-approve.
- **Authority limit:** The MLE computes and diagnoses evidence but cannot turn method output into formal acceptance.

## Visual and accessibility contract

- Treatment: selectable reliability strip, interval table, and semantic failure taxonomy.
- Anchor: `MLE-CH-11-S03`.
- Labels: decision, evidence, state, owner, next action.
- Caption and alt: explain the decision without implying an outcome.
- Long description: preserve ordered branches and every semantic value.
- Numeric truth: selectable semantic HTML/CSS only.
- Candidate: not applicable; no image is authorized.

## Durable doctrine, volatile context, and re-verification

- **Durable doctrine:** Uncertainty, calibration applicability, failure taxonomy, and sample limits travel with metrics.
- **Volatile context:** calibration library, bins, uncertainty method, plotting API.
- **Recheck:** execute every claim instruction and source trigger at manuscript and publication freeze and whenever the named context changes.
- **Never durable:** current UI/API behavior, vendor promises, support matrices, transferred thresholds, or unreported outcomes.

## Originality and adjacent-publication boundary

- **ND/PUB result:** PASS — endpoint is distinct and evidence-specific.
- This is evidence interpretation rather than a calibration recipe catalog or risk acceptance.
- Forward Deployed Engineering, Applied AI Engineering, Agentic AI Engineering, LLM Behavior Engineering, and LLM Adaptation and Runtime retain their separate endpoints and provide no evidence here.

## Phase 08 handoff and evidence manifest

- Writer instruction: Write MLE-CH-11 from this production specification using the eight-section sequence, exact evidence mappings, Benchline continuity, and authority ceiling; preserve selectable semantic records and do not invent outcomes.
- Continuity: BL-10 carries calibration-applicability, uncertainty, and failure ledger into BL-11 technical disposition.
- Prohibited: accuracy implies calibration; calibration implies safety; one method covers every output.
- Claims: `MLE-BCLM-031`, `MLE-BCLM-032`, `MLE-BCLM-033`.
- Sources: `MLE-BSRC-012`, `MLE-BSRC-023`, `MLE-BSRC-006`, `MLE-BSRC-025`.
- Cases: `CASE-01`, `CASE-03`, `CASE-04`, `CASE-09`.
- Architecture: `MLE-CLM-011`, `MLE-CLM-016`, `MLE-CLM-019`.
- Boundaries: `BND-01`, `BND-05`, `BND-15`, `BND-17`.
- Scenarios: `SCN-01`.
- Domains: `PD-06`.
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`.
- Milestone: `BL-10`.
- Phase 08 remains inactive until Phase 07 closes.

PHASE07-CHAPTER-PROJECTION-START

```json
{
  "chapter": {
    "chapterId": "MLE-CH-11",
    "order": 11,
    "title": "Treat Uncertainty, Calibration, and Failure as Evidence",
    "slug": "treat-uncertainty-calibration-and-failure-as-evidence",
    "partId": "PART-04",
    "decisionJob": "Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence.",
    "thesis": "A score becomes decision evidence only when its uncertainty, calibration relevance, failure families, and limitations are explicit.",
    "readerEndpoint": "Interpret calibration and resampling evidence without converting it into universal confidence.",
    "prerequisiteArtifacts": [
      "BL-09"
    ],
    "incomingState": "CANDIDATE",
    "outgoingStates": [
      "CANDIDATE"
    ],
    "milestoneId": "BL-10",
    "authorityOwner": "Evaluation owns method adequacy; domain/safety authorities judge consequential error sufficiency.",
    "mleCeiling": "The MLE computes and diagnoses evidence but cannot turn method output into formal acceptance.",
    "primaryClaimIds": [
      "MLE-BCLM-031",
      "MLE-BCLM-032",
      "MLE-BCLM-033"
    ],
    "sectionIds": [
      "MLE-CH-11-S01",
      "MLE-CH-11-S02",
      "MLE-CH-11-S03",
      "MLE-CH-11-S04",
      "MLE-CH-11-S05",
      "MLE-CH-11-S06",
      "MLE-CH-11-S07",
      "MLE-CH-11-S08"
    ],
    "labIds": [
      "MLE-CH-11-LAB-01",
      "MLE-CH-11-LAB-02"
    ],
    "assessmentIds": [
      "MLE-CH-11-ASMT-01"
    ],
    "visualIds": [
      "MLE-V11.1"
    ],
    "portIds": [
      "PORT-MANAGED",
      "PORT-CLASSICAL",
      "PORT-DEEP",
      "PORT-EDGE",
      "PORT-SHARED"
    ],
    "nextChapterId": "MLE-CH-12"
  },
  "claimTeaching": [
    {
      "claimId": "MLE-BCLM-031",
      "chapterId": "MLE-CH-11",
      "primarySectionId": "MLE-CH-11-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-012",
        "MLE-BSRC-023"
      ],
      "caseIds": [
        "CASE-01",
        "CASE-03",
        "CASE-04",
        "CASE-09"
      ],
      "limitation": "Calibration is applicable only where outputs and decisions admit a meaningful probabilistic interpretation.",
      "durability": "durable",
      "volatilityTreatment": "Definition is durable; plotting APIs, bin defaults, and current libraries are volatile.",
      "recheckTriggers": [
        "Blueprint an exact selectable reliability table and require a statement of whether probability calibration is applicable."
      ]
    },
    {
      "claimId": "MLE-BCLM-032",
      "chapterId": "MLE-CH-11",
      "primarySectionId": "MLE-CH-11-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-012",
        "MLE-BSRC-023"
      ],
      "caseIds": [
        "CASE-01",
        "CASE-03",
        "CASE-04",
        "CASE-09"
      ],
      "limitation": "No single calibration method or error summary is sufficient across output types and consequences.",
      "durability": "durable",
      "volatilityTreatment": "Separation and limitation fields are durable; current method recommendations are dated and contextual.",
      "recheckTriggers": [
        "Define a calibration evidence record with independent partitions and mutation tests for omitted sample and method limits."
      ]
    },
    {
      "claimId": "MLE-BCLM-033",
      "chapterId": "MLE-CH-11",
      "primarySectionId": "MLE-CH-11-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-006",
        "MLE-BSRC-025"
      ],
      "caseIds": [
        "CASE-01",
        "CASE-03",
        "CASE-04",
        "CASE-09"
      ],
      "limitation": "The required failure taxonomy is workload-specific and remains subject to independent evaluation and domain review.",
      "durability": "durable",
      "volatilityTreatment": "Evidence fields are durable; named uncertainty tools and sector terminology remain dated.",
      "recheckTriggers": [
        "Create a failure ledger that cannot emit a qualification-ready metric while unresolved samples, segments, or error families are hidden."
      ]
    }
  ],
  "sourceUses": [
    {
      "sourceId": "MLE-BSRC-012",
      "claimId": "MLE-BCLM-031",
      "chapterId": "MLE-CH-11",
      "sectionIds": [
        "MLE-CH-11-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Accuracy and calibration are distinct; calibration results do not establish downstream safety, domain validity, or segment sufficiency.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck URL at publication freeze and keep dataset/model/method bounds visible in any worked example."
    },
    {
      "sourceId": "MLE-BSRC-023",
      "claimId": "MLE-BCLM-031",
      "chapterId": "MLE-CH-11",
      "sectionIds": [
        "MLE-CH-11-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Binning, sample size, split design, scoring, and model/output type constrain interpretation.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck at every freeze and pin a version before any executable blueprint or numeric example."
    },
    {
      "sourceId": "MLE-BSRC-012",
      "claimId": "MLE-BCLM-032",
      "chapterId": "MLE-CH-11",
      "sectionIds": [
        "MLE-CH-11-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Accuracy and calibration are distinct; calibration results do not establish downstream safety, domain validity, or segment sufficiency.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck URL at publication freeze and keep dataset/model/method bounds visible in any worked example."
    },
    {
      "sourceId": "MLE-BSRC-023",
      "claimId": "MLE-BCLM-032",
      "chapterId": "MLE-CH-11",
      "sectionIds": [
        "MLE-CH-11-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Binning, sample size, split design, scoring, and model/output type constrain interpretation.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck at every freeze and pin a version before any executable blueprint or numeric example."
    },
    {
      "sourceId": "MLE-BSRC-006",
      "claimId": "MLE-BCLM-033",
      "chapterId": "MLE-CH-11",
      "sectionIds": [
        "MLE-CH-11-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "A model card is a reporting structure, not proof of accuracy, fairness, safety, compliance, qualification, release approval, or an authority to set acceptance thresholds.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck the Google Research record and final-paper link at blueprint, manuscript, and publication freeze while preserving the 2019 paper identity."
    },
    {
      "sourceId": "MLE-BSRC-025",
      "claimId": "MLE-BCLM-033",
      "chapterId": "MLE-CH-11",
      "sectionIds": [
        "MLE-CH-11-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Transfer only the representative-evaluation and consequence principles; do not turn this book into medical-device guidance.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck the FDA/IMDRF publication status at each freeze and preserve the N88 FINAL:2025 edition identity if cited."
    }
  ],
  "casePlacements": [
    {
      "caseId": "CASE-01",
      "chapterId": "MLE-CH-11",
      "sectionIds": [
        "MLE-CH-11-S04"
      ],
      "usePurpose": "Apply Benchline Inspection Dossier without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-03",
      "chapterId": "MLE-CH-11",
      "sectionIds": [
        "MLE-CH-11-S04"
      ],
      "usePurpose": "Apply Classical credit triage without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-04",
      "chapterId": "MLE-CH-11",
      "sectionIds": [
        "MLE-CH-11-S04"
      ],
      "usePurpose": "Apply Deep acoustic event classifier without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-09",
      "chapterId": "MLE-CH-11",
      "sectionIds": [
        "MLE-CH-11-S04"
      ],
      "usePurpose": "Apply Gender Shades intersectional evaluation audit without exceeding its truth boundary."
    }
  ],
  "dossier": {
    "chapterId": "MLE-CH-11",
    "milestoneId": "BL-10",
    "incomingState": "CANDIDATE",
    "inputArtifactIds": [
      "BL-09"
    ],
    "inputHashes": [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    ],
    "producedArtifactId": "BL-10",
    "artifactVersion": "1.0.0",
    "legalOutgoingStates": [
      "CANDIDATE"
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
    "nextChapterId": "MLE-CH-12"
  },
  "ports": [
    {
      "chapterId": "MLE-CH-11",
      "portId": "PORT-MANAGED",
      "invariantDecision": "All ports expose uncertainty, failure, and limitation evidence appropriate to their model output.",
      "variableMechanism": "Provider-managed training, registry, serving, and observation.",
      "requiredEvidence": "Exportable identities, limits, configuration, evaluation, release, observation, and recovery records.",
      "externalAuthority": "Provider/platform plus all product/domain/formal owners remain external.",
      "failureInjection": "Unavailable export or opaque provider state.",
      "limitation": "Provider claims are not workload qualification.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-11",
      "portId": "PORT-CLASSICAL",
      "invariantDecision": "All ports expose uncertainty, failure, and limitation evidence appropriate to their model output.",
      "variableMechanism": "Local feature transformation and statistical/classical estimator.",
      "requiredEvidence": "Feature identities, bounded run, calibrated/segment evidence where applicable, package, envelope, recovery.",
      "externalAuthority": "Data, evaluation, product/domain, and formal owners remain external.",
      "failureInjection": "Feature order or preprocessing mismatch.",
      "limitation": "Simplicity does not remove lifecycle evidence.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-11",
      "portId": "PORT-DEEP",
      "invariantDecision": "All ports expose uncertainty, failure, and limitation evidence appropriate to their model output.",
      "variableMechanism": "Parameterized training, accelerator context, checkpoint, and tensor-serving path.",
      "requiredEvidence": "Data/run/checkpoint/tokenizer-or-preprocessor identities, bounded reproducibility, evaluation, envelope, recovery.",
      "externalAuthority": "Research, evaluation, platform, and formal owners remain external.",
      "failureInjection": "Wrong checkpoint, preprocessing, or hardware-context identity.",
      "limitation": "Model scale and benchmark novelty do not replace evidence.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-11",
      "portId": "PORT-EDGE",
      "invariantDecision": "All ports expose uncertainty, failure, and limitation evidence appropriate to their model output.",
      "variableMechanism": "Benchline sensor/image input, constrained runtime, device package, and delayed feedback.",
      "requiredEvidence": "Sensor/data/label identity, edge package, measured envelope, rollback, controls, retirement.",
      "externalAuthority": "Hardware, operations, domain, safety, security, platform, and product owners remain external.",
      "failureInjection": "Sensor shift, resource pressure, or stale device package.",
      "limitation": "Benchline is fictional and cannot imply real industrial performance or safety.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-11",
      "portId": "PORT-SHARED",
      "invariantDecision": "All ports expose uncertainty, failure, and limitation evidence appropriate to their model output.",
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
      "sectionId": "MLE-CH-11-S01",
      "chapterId": "MLE-CH-11",
      "order": 1,
      "purpose": "Decision and Bench Setup",
      "teachingAction": "Frame MLE-CH-11 for the decision job: Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [
        "MLE-CLM-011",
        "MLE-CLM-016",
        "MLE-CLM-019"
      ],
      "boundaryIds": [
        "BND-01",
        "BND-05",
        "BND-15",
        "BND-17"
      ],
      "scenarioIds": [
        "SCN-01"
      ],
      "domainIds": [
        "PD-06"
      ],
      "portIds": [],
      "artifactDelta": "Open decision, evidence, state, owner, and next-action fields.",
      "plannedDepth": "700-850 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-11-S02",
      "chapterId": "MLE-CH-11",
      "order": 2,
      "purpose": "Procedure",
      "teachingAction": "Teach MLE-CH-11 for the decision job: Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence.",
      "claimIds": [
        "MLE-BCLM-031",
        "MLE-BCLM-032",
        "MLE-BCLM-033"
      ],
      "sourceIds": [
        "MLE-BSRC-012",
        "MLE-BSRC-023",
        "MLE-BSRC-006",
        "MLE-BSRC-025"
      ],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Build calibration-applicability, uncertainty, and failure ledger from canonical evidence.",
      "plannedDepth": "1,250-1,500 words",
      "claimDisposition": "primary"
    },
    {
      "sectionId": "MLE-CH-11-S03",
      "chapterId": "MLE-CH-11",
      "order": 3,
      "purpose": "Evidence interpretation",
      "teachingAction": "Interpret MLE-CH-11 for the decision job: Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Add bounded conclusion, counterexample, and limitation.",
      "plannedDepth": "850-1,050 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-11-S04",
      "chapterId": "MLE-CH-11",
      "order": 4,
      "purpose": "Worked trace",
      "teachingAction": "Trace MLE-CH-11 for the decision job: Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [
        "CASE-01",
        "CASE-03",
        "CASE-04",
        "CASE-09"
      ],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Attach truth-bounded case traces.",
      "plannedDepth": "850-1,100 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-11-S05",
      "chapterId": "MLE-CH-11",
      "order": 5,
      "purpose": "Failure lab",
      "teachingAction": "Inject MLE-CH-11 for the decision job: Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Record RED evidence and repair boundary.",
      "plannedDepth": "700-900 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-11-S06",
      "chapterId": "MLE-CH-11",
      "order": 6,
      "purpose": "Five-port transfer",
      "teachingAction": "Transfer MLE-CH-11 for the decision job: Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence.",
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
      "artifactDelta": "Prove five-port parity.",
      "plannedDepth": "700-850 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-11-S07",
      "chapterId": "MLE-CH-11",
      "order": 7,
      "purpose": "Assessment and Qualification Gate",
      "teachingAction": "Qualify MLE-CH-11 for the decision job: Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Attach rubric and Qualification Gate.",
      "plannedDepth": "650-800 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-11-S08",
      "chapterId": "MLE-CH-11",
      "order": 8,
      "purpose": "Durable handoff",
      "teachingAction": "Freeze MLE-CH-11 for the decision job: Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Freeze continuity and recheck triggers.",
      "plannedDepth": "700-850 words",
      "claimDisposition": "cross-reference"
    }
  ],
  "labs": [
    {
      "labId": "MLE-CH-11-LAB-01",
      "chapterId": "MLE-CH-11",
      "truthState": "synthetic-deterministic",
      "inputContract": "MLE-CH-11 fixed offline fixture 1",
      "fixedFixtureIds": [
        "FIX-MLE-CH-11-1"
      ],
      "redFailures": [
        "missing expected evidence"
      ],
      "expectedEvidence": [
        "BL-10 deterministic record"
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
        "MLE-CH-11 evidence identity and owner route remain exact."
      ]
    },
    {
      "labId": "MLE-CH-11-LAB-02",
      "chapterId": "MLE-CH-11",
      "truthState": "synthetic-deterministic",
      "inputContract": "MLE-CH-11 fixed offline fixture 2",
      "fixedFixtureIds": [
        "FIX-MLE-CH-11-2"
      ],
      "redFailures": [
        "illegal promotion or self-approval"
      ],
      "expectedEvidence": [
        "BL-10 deterministic record"
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
        "MLE-CH-11 evidence identity and owner route remain exact."
      ]
    }
  ],
  "assessment": [
    {
      "assessmentId": "MLE-CH-11-ASMT-01",
      "chapterId": "MLE-CH-11",
      "exerciseOutput": "BL-10 evidence artifact",
      "rubric": "Assess Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence. with observable evidence.",
      "answerIntent": "Explain the decision, evidence, state, owner, and next action.",
      "observablePassEvidence": "BL-10 passes its named qualification gate.",
      "authorityLimit": "The MLE computes and diagnoses evidence but cannot turn method output into formal acceptance.",
      "retryRoute": "HOLD or REOPEN with new evidence; never self-approve."
    }
  ],
  "visuals": [
    {
      "visualId": "MLE-V11.1",
      "chapterId": "MLE-CH-11",
      "kind": "semantic-html-css",
      "insertionAnchor": "MLE-CH-11-S03",
      "decisionHelped": "Record uncertainty or calibration where applicable, sample limits, error taxonomy, and unresolved evidence.",
      "essentialLabels": [
        "decision",
        "evidence",
        "state",
        "owner",
        "next action"
      ],
      "captionIntent": "Explain the BL-10 decision evidence.",
      "altIntent": "Text alternative for MLE-CH-11 evidence flow.",
      "longDescriptionIntent": "Ordered description of MLE-CH-11 evidence, state, owner, and next action.",
      "numericTruthDisposition": "semantic-html-css",
      "candidateStatus": "not-applicable",
      "reservedPath": null
    }
  ],
  "handoff": {
    "chapterId": "MLE-CH-11",
    "phase08Instructions": "Write MLE-CH-11 from this production specification using the eight-section sequence, exact evidence mappings, Benchline continuity, and authority ceiling; preserve selectable semantic records and do not invent outcomes.",
    "continuityBridge": "BL-10 carries calibration-applicability, uncertainty, and failure ledger into BL-11 technical disposition.",
    "wordRange": "6,500-7,800 words",
    "wordRangeRationale": "The range funds one decision setup, three canonical claims, a worked trace, two labs, five-port transfer, qualification, and durable handoff without padding.",
    "recheckTriggers": [
      "Blueprint an exact selectable reliability table and require a statement of whether probability calibration is applicable.",
      "Define a calibration evidence record with independent partitions and mutation tests for omitted sample and method limits.",
      "Create a failure ledger that cannot emit a qualification-ready metric while unresolved samples, segments, or error families are hidden.",
      "Recheck URL at publication freeze and keep dataset/model/method bounds visible in any worked example.",
      "Recheck at every freeze and pin a version before any executable blueprint or numeric example.",
      "Recheck the Google Research record and final-paper link at blueprint, manuscript, and publication freeze while preserving the 2019 paper identity.",
      "Recheck the FDA/IMDRF publication status at each freeze and preserve the N88 FINAL:2025 edition identity if cited."
    ],
    "prohibitedClaims": [
      "accuracy implies calibration",
      "calibration implies safety",
      "one method covers every output"
    ],
    "evidenceManifest": [
      "MLE-BCLM-031",
      "MLE-BCLM-032",
      "MLE-BCLM-033"
    ]
  }
}
```

PHASE07-CHAPTER-PROJECTION-END
