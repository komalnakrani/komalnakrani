# MLE-CH-12 — Issue a Technical Qualification Disposition

> Production specification for *Machine Learning Engineering: From Task Contract to Operating Evidence* by Komal Nakrani. Phase 07 defines structure and evidence only; it creates no manuscript prose, code, assets, or publication output.

## Frozen identity and production target

| Field | Frozen value |
| --- | --- |
| Chapter | `MLE-CH-12` · order 12 · `issue-a-technical-qualification-disposition` |
| Part | `PART-04` |
| Decision job | Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT. |
| Thesis | Technical qualification is an explicit disposition with authority boundaries, not a single score or self-approved launch. |
| Reader endpoint | Issue a complete disposition that blocks incomplete or self-authorized evidence. |
| Milestone | `BL-11` — Technical qualification disposition |
| State | `CANDIDATE` → `TECHNICALLY-QUALIFIED|HOLD|REJECT` |
| Word range | 6,600-7,900 words |
| Word-range rationale | Complete one eight-section decision loop, two deterministic labs, five-port transfer, assessment, and handoff; add length only for evidence clarity. |

## Observable objectives

- Compile population, segment, uncertainty, failure, limitation, owner, and rollback evidence.
- Select an explicit disposition rather than a scalar score.
- Reject missing external ownership and self-approval.
- Reopen PASS when population or intended use changes.

Pass requires an inspectable `BL-11` artifact; recall alone does not qualify.

## Prerequisites and five-sentence dossier bridge

1. Consume `BL-09` and `BL-10` exactly; absence or hash mismatch forces HOLD.
2. Enter in `CANDIDATE` with prior failures, limitations, and owner routes still visible.
3. Add technical qualification disposition without silently repairing upstream evidence.
4. Emit `BL-11` in `TECHNICALLY-QUALIFIED|HOLD|REJECT` only through its legal gate and preserve reopen triggers.
5. Supply BL-12 release package only from TECHNICALLY-QUALIFIED; the next chapter may consume this record but cannot infer missing evidence.

## Owned decision and retained authority

- **MLE-owned decision:** Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT.
- **Authority owner:** Independent evaluation and relevant formal authorities retain stop-ship and acceptance decisions.
- **MLE ceiling:** The MLE issues the workload technical disposition and routes external decisions; it cannot self-approve them.
- **Boundaries:** `BND-01`, `BND-05`, `BND-13`, `BND-15`, `BND-16`, `BND-17`.
- **Escalation:** unresolved external decisions force HOLD and route to their named owners.
- **Non-scope:** no adjacent authority, real outcome, certification, or deployment approval is created.

## Production sequence

| Section | Job | Evidence | Dossier delta | Depth |
| --- | --- | --- | --- | --- |
| `MLE-CH-12-S01` | Decision and Bench Setup — Frame MLE-CH-12 for the decision job: Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT. | canonical trace | Open decision, evidence, state, owner, and next-action fields. | 700-850 words |
| `MLE-CH-12-S02` | Procedure — Teach MLE-CH-12 for the decision job: Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT. | MLE-BCLM-034, MLE-BCLM-035, MLE-BCLM-036 · MLE-BSRC-006, MLE-BSRC-019, MLE-BSRC-028, MLE-BSRC-025 | Build technical qualification disposition from canonical evidence. | 1,250-1,500 words |
| `MLE-CH-12-S03` | Evidence interpretation — Interpret MLE-CH-12 for the decision job: Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT. | canonical trace | Add bounded conclusion, counterexample, and limitation. | 850-1,050 words |
| `MLE-CH-12-S04` | Worked trace — Trace MLE-CH-12 for the decision job: Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT. | CASE-01, CASE-02, CASE-03, CASE-05, CASE-09 | Attach truth-bounded case traces. | 850-1,100 words |
| `MLE-CH-12-S05` | Failure lab — Inject MLE-CH-12 for the decision job: Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT. | canonical trace | Record RED evidence and repair boundary. | 700-900 words |
| `MLE-CH-12-S06` | Five-port transfer — Transfer MLE-CH-12 for the decision job: Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT. | canonical trace | Prove five-port parity. | 700-850 words |
| `MLE-CH-12-S07` | Assessment and Qualification Gate — Qualify MLE-CH-12 for the decision job: Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT. | canonical trace | Attach rubric and Qualification Gate. | 650-800 words |
| `MLE-CH-12-S08` | Durable handoff — Freeze MLE-CH-12 for the decision job: Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT. | canonical trace | Freeze continuity and recheck triggers. | 700-850 words |

Primary teaching occurs exactly once in `MLE-CH-12-S02`; all later uses are cross-references or applications.

## Bench Setup, Bench Sheet, and Qualification Gate

### Bench Setup

- Decision: Does complete evidence justify PASS, HOLD, or REJECT without self-approval or an illegal transition?
- Inputs: `BL-09`, `BL-10` plus canonical mappings and offline fixtures.
- Failure pressure: A technically strong candidate self-certifies evaluation or ignores a missing formal owner.

### Bench Sheet

| decision | evidence | state and dossier delta | owner | authority route | next evidence |
| --- | --- | --- | --- | --- | --- |
| Does complete evidence justify PASS, HOLD, or REJECT without self-approval or an illegal transition? | technical qualification disposition and failure trace | `CANDIDATE` → `TECHNICALLY-QUALIFIED|HOLD|REJECT` via `BL-11` | MLE compiles workload evidence | Independent evaluation and relevant formal authorities retain stop-ship and acceptance decisions. | BL-12 release package only from TECHNICALLY-QUALIFIED |

### Qualification Gate

- PASS: identities, evidence, limitations, owner routes, ports, and acceptance checks resolve.
- HOLD: required evidence or external decision is missing or a recoverable failure remains.
- REJECT: the candidate basis cannot satisfy the named contract.
- REOPEN: a frozen lifecycle trigger invalidates scope.
- Illegal: automatic promotion, hidden failure, silent upstream repair, or self-approval.

## Skill procedure and evidence interpretation

1. Resolve BL-09 and BL-10 identities.
2. Check population, segments, consequences, uncertainty, failures, limits, and rollback.
3. Check independent and formal owner routes.
4. Apply deterministic PASS, HOLD, or REJECT rules.
5. Inject a scope change and invalidate out-of-scope PASS.
6. Record repair and requalification without illegal release.

- **Strongest supportable conclusion:** The workload receives a bounded technical disposition; external stop-ship authority remains external.
- **Counterexample:** Strong metrics lack a domain owner, change scope, or self-certify evaluation.
- **Limitation:** This book’s disposition vocabulary does not replace sector rules or legal decisions.

## Benchline artifact contract

| Field | Requirement |
| --- | --- |
| Inputs | `BL-09`, `BL-10` with hashes and unresolved limitations |
| Version/hash | `BL-11` version `1.0.0`; all records resolve immutably |
| Mutations | Remove the evaluator and change population after synthetic PASS. |
| Output | technical qualification disposition |
| Evidence | `MLE-BCLM-034`, `MLE-BCLM-035`, `MLE-BCLM-036` with `MLE-BSRC-006`, `MLE-BSRC-019`, `MLE-BSRC-028`, `MLE-BSRC-025` |
| Owner | MLE owns workload-specific assembly and diagnostics |
| authority route | Independent evaluation and relevant formal authorities retain stop-ship and acceptance decisions. |
| Legal disposition | PASS / HOLD / REJECT / REOPEN within `TECHNICALLY-QUALIFIED|HOLD|REJECT` |
| Acceptance | identities resolve, RED is detected, limitations remain, prohibited effects are absent |

## Future deterministic companion contract

Only offline, synthetic, provider-neutral fixtures are allowed; Phase 07 creates no code.
- disposition schema.
- authority matrix.
- illegal-transition mutations.
- scope-change reopen record.
- Expected records: `BL-11`, both lab records, diagnostics, and disposition.
- No network, provider account, production system, credential, real person, deployment, or authority mutation.

## Failure injections and diagnostics

| RED failure | Discriminating evidence | Repair boundary |
| --- | --- | --- |
| `EXTERNAL_OWNER_MISSING` | Remove a required evaluator but retain PASS. | HOLD and route the missing decision. |
| `MLE_SELF_APPROVAL` | Let the evidence compiler approve the independent gate. | Separate recommendation from acceptance. |
| `POPULATION_CHANGED` | Change population while reusing PASS. | REOPEN and require scoped re-evaluation. |
| `HOLD_TO_RELEASABLE` | Advance HOLD or REJECT directly to release. | Return through legal candidate and qualification states. |

Every repair gets a new evidence identity; diagnostics cannot promote state or approve themselves.

## Five-port transfer table

| Port | Invariant decision | Mechanism | Required evidence | External authority | Failure / limitation | Result |
| --- | --- | --- | --- | --- | --- | --- |
| `PORT-MANAGED` | All ports produce the same disposition fields and authority separation. | Provider-managed training, registry, serving, and observation. | Exportable identities, limits, configuration, evaluation, release, observation, and recovery records. | Provider/platform plus all product/domain/formal owners remain external. | Unavailable export or opaque provider state.; Provider claims are not workload qualification. | PASS |
| `PORT-CLASSICAL` | All ports produce the same disposition fields and authority separation. | Local feature transformation and statistical/classical estimator. | Feature identities, bounded run, calibrated/segment evidence where applicable, package, envelope, recovery. | Data, evaluation, product/domain, and formal owners remain external. | Feature order or preprocessing mismatch.; Simplicity does not remove lifecycle evidence. | PASS |
| `PORT-DEEP` | All ports produce the same disposition fields and authority separation. | Parameterized training, accelerator context, checkpoint, and tensor-serving path. | Data/run/checkpoint/tokenizer-or-preprocessor identities, bounded reproducibility, evaluation, envelope, recovery. | Research, evaluation, platform, and formal owners remain external. | Wrong checkpoint, preprocessing, or hardware-context identity.; Model scale and benchmark novelty do not replace evidence. | PASS |
| `PORT-EDGE` | All ports produce the same disposition fields and authority separation. | Benchline sensor/image input, constrained runtime, device package, and delayed feedback. | Sensor/data/label identity, edge package, measured envelope, rollback, controls, retirement. | Hardware, operations, domain, safety, security, platform, and product owners remain external. | Sensor shift, resource pressure, or stale device package.; Benchline is fictional and cannot imply real industrial performance or safety. | PASS |
| `PORT-SHARED` | All ports produce the same disposition fields and authority separation. | Multi-tenant shared features, training, registry, serving, and observability. | Tenant/workload identity, compatibility, resource envelope, control use, recovery, and owner routes. | Platform/SRE/security own shared systems and fleet decisions. | Tenant collision, shared-runtime upgrade, or fleet SLO pressure.; Workload evidence cannot claim platform-wide assurance. | PASS |

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

### `CASE-02` — Managed demand forecast (CONSTRUCTED SATELLITE)

- Use: Apply Managed demand forecast without exceeding its truth boundary.
- Reported facts: none; synthetic or constructed case.
- Attributed outcomes: none.
- Allowed inference: Only the documented transfer method.
- Forbidden inference: do not infer unreported outcomes for Managed demand forecast.
- Limitation: Not a cloud-provider tutorial.
- Transfer rule: Preserve the decision and evidence job.

### `CASE-03` — Classical credit triage (CONSTRUCTED SATELLITE)

- Use: Apply Classical credit triage without exceeding its truth boundary.
- Reported facts: none; synthetic or constructed case.
- Attributed outcomes: none.
- Allowed inference: Only the documented transfer method.
- Forbidden inference: do not infer unreported outcomes for Classical credit triage.
- Limitation: Not financial advice or credit authorization.
- Transfer rule: Preserve the decision and evidence job.

### `CASE-05` — Shared ranking platform tenant (CONSTRUCTED SATELLITE)

- Use: Apply Shared ranking platform tenant without exceeding its truth boundary.
- Reported facts: none; synthetic or constructed case.
- Attributed outcomes: none.
- Allowed inference: Only the documented transfer method.
- Forbidden inference: do not infer unreported outcomes for Shared ranking platform tenant.
- Limitation: Not a platform-engineering curriculum.
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

- **Output:** `BL-11` evidence artifact.
- **Rubric:** execute the decision job with exact identities, visible limitations, correct state, and retained authority.
- **Answer intent:** explain decision, evidence, state, owner, next action, and why the strongest rejected alternative overclaims.
- **Pass evidence:** the artifact and both labs satisfy the Qualification Gate.
- **Retry:** HOLD or REOPEN with new evidence; REJECT when the basis cannot qualify; never self-approve.
- **Authority limit:** The MLE issues the workload technical disposition and routes external decisions; it cannot self-approve them.

## Visual and accessibility contract

- Treatment: semantic Qualification Gate joining evidence, state, owner, rollback, and next action.
- Anchor: `MLE-CH-12-S03`.
- Labels: decision, evidence, state, owner, next action.
- Caption and alt: explain the decision without implying an outcome.
- Long description: preserve ordered branches and every semantic value.
- Numeric truth: selectable semantic HTML/CSS only.
- Candidate: not applicable; no image is authorized.

## Durable doctrine, volatile context, and re-verification

- **Durable doctrine:** PASS, HOLD, and REJECT bind evidence, population, owner, limitation, rollback, and next evidence.
- **Volatile context:** workflow, approval product, titles, sector triggers.
- **Recheck:** execute every claim instruction and source trigger at manuscript and publication freeze and whenever the named context changes.
- **Never durable:** current UI/API behavior, vendor promises, support matrices, transferred thresholds, or unreported outcomes.

## Originality and adjacent-publication boundary

- **ND/PUB result:** PASS — endpoint is distinct and evidence-specific.
- This is workload disposition routing rather than governance design, certification, or legal advice.
- Forward Deployed Engineering, Applied AI Engineering, Agentic AI Engineering, LLM Behavior Engineering, and LLM Adaptation and Runtime retain their separate endpoints and provide no evidence here.

## Phase 08 handoff and evidence manifest

- Writer instruction: Write MLE-CH-12 from this production specification using the eight-section sequence, exact evidence mappings, Benchline continuity, and authority ceiling; preserve selectable semantic records and do not invent outcomes.
- Continuity: BL-11 carries technical qualification disposition into BL-12 release package only from TECHNICALLY-QUALIFIED.
- Prohibited: scalar score is complete; MLE self-approves; HOLD or REJECT proceeds directly.
- Claims: `MLE-BCLM-034`, `MLE-BCLM-035`, `MLE-BCLM-036`.
- Sources: `MLE-BSRC-006`, `MLE-BSRC-019`, `MLE-BSRC-028`, `MLE-BSRC-025`.
- Cases: `CASE-01`, `CASE-02`, `CASE-03`, `CASE-05`, `CASE-09`.
- Architecture: `MLE-CLM-006`, `MLE-CLM-011`, `MLE-CLM-019`, `MLE-CLM-020`, `MLE-CLM-022`.
- Boundaries: `BND-01`, `BND-05`, `BND-13`, `BND-15`, `BND-16`, `BND-17`.
- Scenarios: `SCN-01`, `SCN-08`, `SCN-09`.
- Domains: `PD-07`.
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`.
- Milestone: `BL-11`.
- Phase 08 remains inactive until Phase 07 closes.

PHASE07-CHAPTER-PROJECTION-START

```json
{
  "chapter": {
    "chapterId": "MLE-CH-12",
    "order": 12,
    "title": "Issue a Technical Qualification Disposition",
    "slug": "issue-a-technical-qualification-disposition",
    "partId": "PART-04",
    "decisionJob": "Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT.",
    "thesis": "Technical qualification is an explicit disposition with authority boundaries, not a single score or self-approved launch.",
    "readerEndpoint": "Issue a complete disposition that blocks incomplete or self-authorized evidence.",
    "prerequisiteArtifacts": [
      "BL-09",
      "BL-10"
    ],
    "incomingState": "CANDIDATE",
    "outgoingStates": [
      "TECHNICALLY-QUALIFIED|HOLD|REJECT"
    ],
    "milestoneId": "BL-11",
    "authorityOwner": "Independent evaluation and relevant formal authorities retain stop-ship and acceptance decisions.",
    "mleCeiling": "The MLE issues the workload technical disposition and routes external decisions; it cannot self-approve them.",
    "primaryClaimIds": [
      "MLE-BCLM-034",
      "MLE-BCLM-035",
      "MLE-BCLM-036"
    ],
    "sectionIds": [
      "MLE-CH-12-S01",
      "MLE-CH-12-S02",
      "MLE-CH-12-S03",
      "MLE-CH-12-S04",
      "MLE-CH-12-S05",
      "MLE-CH-12-S06",
      "MLE-CH-12-S07",
      "MLE-CH-12-S08"
    ],
    "labIds": [
      "MLE-CH-12-LAB-01",
      "MLE-CH-12-LAB-02"
    ],
    "assessmentIds": [
      "MLE-CH-12-ASMT-01"
    ],
    "visualIds": [
      "MLE-V12.1"
    ],
    "portIds": [
      "PORT-MANAGED",
      "PORT-CLASSICAL",
      "PORT-DEEP",
      "PORT-EDGE",
      "PORT-SHARED"
    ],
    "nextChapterId": "MLE-CH-13"
  },
  "claimTeaching": [
    {
      "claimId": "MLE-BCLM-034",
      "chapterId": "MLE-CH-12",
      "primarySectionId": "MLE-CH-12-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-006",
        "MLE-BSRC-019",
        "MLE-BSRC-028"
      ],
      "caseIds": [
        "CASE-01",
        "CASE-02",
        "CASE-03",
        "CASE-05",
        "CASE-09"
      ],
      "limitation": "PASS/HOLD/REJECT is the book's evidence-state vocabulary, not terminology imposed by NIST or the model-card paper.",
      "durability": "durable",
      "volatilityTreatment": "Disposition fields are durable; local workflow systems and approval names are volatile.",
      "recheckTriggers": [
        "Specify an executable disposition schema and illegal-transition tests from HOLD or REJECT."
      ]
    },
    {
      "claimId": "MLE-BCLM-035",
      "chapterId": "MLE-CH-12",
      "primarySectionId": "MLE-CH-12-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-019",
        "MLE-BSRC-028"
      ],
      "caseIds": [
        "CASE-01",
        "CASE-02",
        "CASE-03",
        "CASE-05",
        "CASE-09"
      ],
      "limitation": "Actual authority allocation must be named by the organization and sector; the book cannot certify independence from a title alone.",
      "durability": "durable",
      "volatilityTreatment": "Decision-right separation is durable; current role names and governance tooling are contextual.",
      "recheckTriggers": [
        "Add an authority matrix whose missing external owner forces HOLD and whose MLE self-approval path fails validation."
      ]
    },
    {
      "claimId": "MLE-BCLM-036",
      "chapterId": "MLE-CH-12",
      "primarySectionId": "MLE-CH-12-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-025",
        "MLE-BSRC-028"
      ],
      "caseIds": [
        "CASE-01",
        "CASE-02",
        "CASE-03",
        "CASE-05"
      ],
      "limitation": "The trigger and resulting formal status depend on sector rules and local change control; HOLD is the book's technical state.",
      "durability": "durable",
      "volatilityTreatment": "Change-trigger doctrine is durable; regulatory examples and review mechanisms are dated.",
      "recheckTriggers": [
        "Blueprint a population-change mutation that invalidates PASS and names the missing requalification evidence and external authority."
      ]
    }
  ],
  "sourceUses": [
    {
      "sourceId": "MLE-BSRC-006",
      "claimId": "MLE-BCLM-034",
      "chapterId": "MLE-CH-12",
      "sectionIds": [
        "MLE-CH-12-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "A model card is a reporting structure, not proof of accuracy, fairness, safety, compliance, qualification, release approval, or an authority to set acceptance thresholds.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck the Google Research record and final-paper link at blueprint, manuscript, and publication freeze while preserving the 2019 paper identity."
    },
    {
      "sourceId": "MLE-BSRC-019",
      "claimId": "MLE-BCLM-034",
      "chapterId": "MLE-CH-12",
      "sectionIds": [
        "MLE-CH-12-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Provides a menu of actions; it does not certify a system or allocate local approval rights.",
      "durability": "volatile",
      "volatility": "high",
      "recheckTrigger": "Recheck at every freeze; export/pin the cited playbook version if Phase 07 depends on exact action wording."
    },
    {
      "sourceId": "MLE-BSRC-028",
      "claimId": "MLE-BCLM-034",
      "chapterId": "MLE-CH-12",
      "sectionIds": [
        "MLE-CH-12-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "AI RMF 1.0 does not assign organization-specific MLE ownership, set workload thresholds, certify compliance, prescribe this book's PASS/HOLD/REJECT vocabulary, or collapse formal authority into a metric producer.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck at blueprint, manuscript, and publication freeze for the announced revision; keep version 1.0 explicit and replace or dual-cite only after a revised framework is actually published."
    },
    {
      "sourceId": "MLE-BSRC-019",
      "claimId": "MLE-BCLM-035",
      "chapterId": "MLE-CH-12",
      "sectionIds": [
        "MLE-CH-12-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Provides a menu of actions; it does not certify a system or allocate local approval rights.",
      "durability": "volatile",
      "volatility": "high",
      "recheckTrigger": "Recheck at every freeze; export/pin the cited playbook version if Phase 07 depends on exact action wording."
    },
    {
      "sourceId": "MLE-BSRC-028",
      "claimId": "MLE-BCLM-035",
      "chapterId": "MLE-CH-12",
      "sectionIds": [
        "MLE-CH-12-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "AI RMF 1.0 does not assign organization-specific MLE ownership, set workload thresholds, certify compliance, prescribe this book's PASS/HOLD/REJECT vocabulary, or collapse formal authority into a metric producer.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck at blueprint, manuscript, and publication freeze for the announced revision; keep version 1.0 explicit and replace or dual-cite only after a revised framework is actually published."
    },
    {
      "sourceId": "MLE-BSRC-025",
      "claimId": "MLE-BCLM-036",
      "chapterId": "MLE-CH-12",
      "sectionIds": [
        "MLE-CH-12-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Transfer only the representative-evaluation and consequence principles; do not turn this book into medical-device guidance.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck the FDA/IMDRF publication status at each freeze and preserve the N88 FINAL:2025 edition identity if cited."
    },
    {
      "sourceId": "MLE-BSRC-028",
      "claimId": "MLE-BCLM-036",
      "chapterId": "MLE-CH-12",
      "sectionIds": [
        "MLE-CH-12-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "AI RMF 1.0 does not assign organization-specific MLE ownership, set workload thresholds, certify compliance, prescribe this book's PASS/HOLD/REJECT vocabulary, or collapse formal authority into a metric producer.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck at blueprint, manuscript, and publication freeze for the announced revision; keep version 1.0 explicit and replace or dual-cite only after a revised framework is actually published."
    }
  ],
  "casePlacements": [
    {
      "caseId": "CASE-01",
      "chapterId": "MLE-CH-12",
      "sectionIds": [
        "MLE-CH-12-S04"
      ],
      "usePurpose": "Apply Benchline Inspection Dossier without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-02",
      "chapterId": "MLE-CH-12",
      "sectionIds": [
        "MLE-CH-12-S04"
      ],
      "usePurpose": "Apply Managed demand forecast without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-03",
      "chapterId": "MLE-CH-12",
      "sectionIds": [
        "MLE-CH-12-S04"
      ],
      "usePurpose": "Apply Classical credit triage without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-05",
      "chapterId": "MLE-CH-12",
      "sectionIds": [
        "MLE-CH-12-S04"
      ],
      "usePurpose": "Apply Shared ranking platform tenant without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-09",
      "chapterId": "MLE-CH-12",
      "sectionIds": [
        "MLE-CH-12-S04"
      ],
      "usePurpose": "Apply Gender Shades intersectional evaluation audit without exceeding its truth boundary."
    }
  ],
  "dossier": {
    "chapterId": "MLE-CH-12",
    "milestoneId": "BL-11",
    "incomingState": "CANDIDATE",
    "inputArtifactIds": [
      "BL-09",
      "BL-10"
    ],
    "inputHashes": [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    ],
    "producedArtifactId": "BL-11",
    "artifactVersion": "1.0.0",
    "legalOutgoingStates": [
      "TECHNICALLY-QUALIFIED|HOLD|REJECT"
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
    "nextChapterId": "MLE-CH-13"
  },
  "ports": [
    {
      "chapterId": "MLE-CH-12",
      "portId": "PORT-MANAGED",
      "invariantDecision": "All ports produce the same disposition fields and authority separation.",
      "variableMechanism": "Provider-managed training, registry, serving, and observation.",
      "requiredEvidence": "Exportable identities, limits, configuration, evaluation, release, observation, and recovery records.",
      "externalAuthority": "Provider/platform plus all product/domain/formal owners remain external.",
      "failureInjection": "Unavailable export or opaque provider state.",
      "limitation": "Provider claims are not workload qualification.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-12",
      "portId": "PORT-CLASSICAL",
      "invariantDecision": "All ports produce the same disposition fields and authority separation.",
      "variableMechanism": "Local feature transformation and statistical/classical estimator.",
      "requiredEvidence": "Feature identities, bounded run, calibrated/segment evidence where applicable, package, envelope, recovery.",
      "externalAuthority": "Data, evaluation, product/domain, and formal owners remain external.",
      "failureInjection": "Feature order or preprocessing mismatch.",
      "limitation": "Simplicity does not remove lifecycle evidence.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-12",
      "portId": "PORT-DEEP",
      "invariantDecision": "All ports produce the same disposition fields and authority separation.",
      "variableMechanism": "Parameterized training, accelerator context, checkpoint, and tensor-serving path.",
      "requiredEvidence": "Data/run/checkpoint/tokenizer-or-preprocessor identities, bounded reproducibility, evaluation, envelope, recovery.",
      "externalAuthority": "Research, evaluation, platform, and formal owners remain external.",
      "failureInjection": "Wrong checkpoint, preprocessing, or hardware-context identity.",
      "limitation": "Model scale and benchmark novelty do not replace evidence.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-12",
      "portId": "PORT-EDGE",
      "invariantDecision": "All ports produce the same disposition fields and authority separation.",
      "variableMechanism": "Benchline sensor/image input, constrained runtime, device package, and delayed feedback.",
      "requiredEvidence": "Sensor/data/label identity, edge package, measured envelope, rollback, controls, retirement.",
      "externalAuthority": "Hardware, operations, domain, safety, security, platform, and product owners remain external.",
      "failureInjection": "Sensor shift, resource pressure, or stale device package.",
      "limitation": "Benchline is fictional and cannot imply real industrial performance or safety.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-12",
      "portId": "PORT-SHARED",
      "invariantDecision": "All ports produce the same disposition fields and authority separation.",
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
      "sectionId": "MLE-CH-12-S01",
      "chapterId": "MLE-CH-12",
      "order": 1,
      "purpose": "Decision and Bench Setup",
      "teachingAction": "Frame MLE-CH-12 for the decision job: Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [
        "MLE-CLM-006",
        "MLE-CLM-011",
        "MLE-CLM-019",
        "MLE-CLM-020",
        "MLE-CLM-022"
      ],
      "boundaryIds": [
        "BND-01",
        "BND-05",
        "BND-13",
        "BND-15",
        "BND-16",
        "BND-17"
      ],
      "scenarioIds": [
        "SCN-01",
        "SCN-08",
        "SCN-09"
      ],
      "domainIds": [
        "PD-07"
      ],
      "portIds": [],
      "artifactDelta": "Open decision, evidence, state, owner, and next-action fields.",
      "plannedDepth": "700-850 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-12-S02",
      "chapterId": "MLE-CH-12",
      "order": 2,
      "purpose": "Procedure",
      "teachingAction": "Teach MLE-CH-12 for the decision job: Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT.",
      "claimIds": [
        "MLE-BCLM-034",
        "MLE-BCLM-035",
        "MLE-BCLM-036"
      ],
      "sourceIds": [
        "MLE-BSRC-006",
        "MLE-BSRC-019",
        "MLE-BSRC-028",
        "MLE-BSRC-025"
      ],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Build technical qualification disposition from canonical evidence.",
      "plannedDepth": "1,250-1,500 words",
      "claimDisposition": "primary"
    },
    {
      "sectionId": "MLE-CH-12-S03",
      "chapterId": "MLE-CH-12",
      "order": 3,
      "purpose": "Evidence interpretation",
      "teachingAction": "Interpret MLE-CH-12 for the decision job: Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT.",
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
      "sectionId": "MLE-CH-12-S04",
      "chapterId": "MLE-CH-12",
      "order": 4,
      "purpose": "Worked trace",
      "teachingAction": "Trace MLE-CH-12 for the decision job: Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [
        "CASE-01",
        "CASE-02",
        "CASE-03",
        "CASE-05",
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
      "sectionId": "MLE-CH-12-S05",
      "chapterId": "MLE-CH-12",
      "order": 5,
      "purpose": "Failure lab",
      "teachingAction": "Inject MLE-CH-12 for the decision job: Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT.",
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
      "sectionId": "MLE-CH-12-S06",
      "chapterId": "MLE-CH-12",
      "order": 6,
      "purpose": "Five-port transfer",
      "teachingAction": "Transfer MLE-CH-12 for the decision job: Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT.",
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
      "sectionId": "MLE-CH-12-S07",
      "chapterId": "MLE-CH-12",
      "order": 7,
      "purpose": "Assessment and Qualification Gate",
      "teachingAction": "Qualify MLE-CH-12 for the decision job: Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT.",
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
      "sectionId": "MLE-CH-12-S08",
      "chapterId": "MLE-CH-12",
      "order": 8,
      "purpose": "Durable handoff",
      "teachingAction": "Freeze MLE-CH-12 for the decision job: Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT.",
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
      "labId": "MLE-CH-12-LAB-01",
      "chapterId": "MLE-CH-12",
      "truthState": "synthetic-deterministic",
      "inputContract": "MLE-CH-12 fixed offline fixture 1",
      "fixedFixtureIds": [
        "FIX-MLE-CH-12-1"
      ],
      "redFailures": [
        "missing expected evidence"
      ],
      "expectedEvidence": [
        "BL-11 deterministic record"
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
        "MLE-CH-12 evidence identity and owner route remain exact."
      ]
    },
    {
      "labId": "MLE-CH-12-LAB-02",
      "chapterId": "MLE-CH-12",
      "truthState": "synthetic-deterministic",
      "inputContract": "MLE-CH-12 fixed offline fixture 2",
      "fixedFixtureIds": [
        "FIX-MLE-CH-12-2"
      ],
      "redFailures": [
        "illegal promotion or self-approval"
      ],
      "expectedEvidence": [
        "BL-11 deterministic record"
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
        "MLE-CH-12 evidence identity and owner route remain exact."
      ]
    }
  ],
  "assessment": [
    {
      "assessmentId": "MLE-CH-12-ASMT-01",
      "chapterId": "MLE-CH-12",
      "exerciseOutput": "BL-11 evidence artifact",
      "rubric": "Assess Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT. with observable evidence.",
      "answerIntent": "Explain the decision, evidence, state, owner, and next action.",
      "observablePassEvidence": "BL-11 passes its named qualification gate.",
      "authorityLimit": "The MLE issues the workload technical disposition and routes external decisions; it cannot self-approve them.",
      "retryRoute": "HOLD or REOPEN with new evidence; never self-approve."
    }
  ],
  "visuals": [
    {
      "visualId": "MLE-V12.1",
      "chapterId": "MLE-CH-12",
      "kind": "semantic-html-css",
      "insertionAnchor": "MLE-CH-12-S03",
      "decisionHelped": "Combine population, segment, uncertainty, consequence, limitation, owner, and rollback evidence into PASS, HOLD, or REJECT.",
      "essentialLabels": [
        "decision",
        "evidence",
        "state",
        "owner",
        "next action"
      ],
      "captionIntent": "Explain the BL-11 decision evidence.",
      "altIntent": "Text alternative for MLE-CH-12 evidence flow.",
      "longDescriptionIntent": "Ordered description of MLE-CH-12 evidence, state, owner, and next action.",
      "numericTruthDisposition": "semantic-html-css",
      "candidateStatus": "not-applicable",
      "reservedPath": null
    }
  ],
  "handoff": {
    "chapterId": "MLE-CH-12",
    "phase08Instructions": "Write MLE-CH-12 from this production specification using the eight-section sequence, exact evidence mappings, Benchline continuity, and authority ceiling; preserve selectable semantic records and do not invent outcomes.",
    "continuityBridge": "BL-11 carries technical qualification disposition into BL-12 release package only from TECHNICALLY-QUALIFIED.",
    "wordRange": "6,600-7,900 words",
    "wordRangeRationale": "The range funds one decision setup, three canonical claims, a worked trace, two labs, five-port transfer, qualification, and durable handoff without padding.",
    "recheckTriggers": [
      "Specify an executable disposition schema and illegal-transition tests from HOLD or REJECT.",
      "Add an authority matrix whose missing external owner forces HOLD and whose MLE self-approval path fails validation.",
      "Blueprint a population-change mutation that invalidates PASS and names the missing requalification evidence and external authority.",
      "Recheck the Google Research record and final-paper link at blueprint, manuscript, and publication freeze while preserving the 2019 paper identity.",
      "Recheck at every freeze; export/pin the cited playbook version if Phase 07 depends on exact action wording.",
      "Recheck at blueprint, manuscript, and publication freeze for the announced revision; keep version 1.0 explicit and replace or dual-cite only after a revised framework is actually published.",
      "Recheck the FDA/IMDRF publication status at each freeze and preserve the N88 FINAL:2025 edition identity if cited."
    ],
    "prohibitedClaims": [
      "scalar score is complete",
      "MLE self-approves",
      "HOLD or REJECT proceeds directly"
    ],
    "evidenceManifest": [
      "MLE-BCLM-034",
      "MLE-BCLM-035",
      "MLE-BCLM-036"
    ]
  }
}
```

PHASE07-CHAPTER-PROJECTION-END
