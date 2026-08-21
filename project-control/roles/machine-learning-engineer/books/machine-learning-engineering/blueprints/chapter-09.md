# MLE-CH-09 — Compare Candidates Without Losing the Baseline

> Production specification for *Machine Learning Engineering: From Task Contract to Operating Evidence* by Komal Nakrani. Phase 07 defines structure and evidence only; it creates no manuscript prose, code, assets, or publication output.

## Frozen identity and production target

| Field | Frozen value |
| --- | --- |
| Chapter | `MLE-CH-09` · order 9 · `compare-candidates-without-losing-the-baseline` |
| Part | `PART-03` |
| Decision job | Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage. |
| Thesis | Candidate selection is an evidence-routing decision, not a release pass or a deletion of losing evidence. |
| Reader endpoint | Produce a limitation-bearing candidate-for-qualification record and retain the incumbent. |
| Milestone | `BL-08` — Candidate-for-qualification record |
| State | `RECONSTRUCTIBLE` → `CANDIDATE` |
| Word range | 6,200-7,400 words |
| Word-range rationale | Complete one eight-section decision loop, two deterministic labs, five-port transfer, assessment, and handoff; add length only for evidence clarity. |

## Observable objectives

- Reconstruct incumbent, candidates, partitions, metric direction, and loss reasons.
- Detect selection/evaluation evidence collapse.
- Preserve failed segments and losing candidates.
- Nominate a nonterminal CANDIDATE with a next evaluator.

Pass requires an inspectable `BL-08` artifact; recall alone does not qualify.

## Prerequisites and five-sentence dossier bridge

1. Consume `BL-06` and `BL-07` exactly; absence or hash mismatch forces HOLD.
2. Enter in `RECONSTRUCTIBLE` with prior failures, limitations, and owner routes still visible.
3. Add candidate-for-qualification ledger without silently repairing upstream evidence.
4. Emit `BL-08` in `CANDIDATE` only through its legal gate and preserve reopen triggers.
5. Supply BL-09 population and segment suite; the next chapter may consume this record but cannot infer missing evidence.

## Owned decision and retained authority

- **MLE-owned decision:** Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage.
- **Authority owner:** Evaluation retains qualification validity; Applied Science retains scientific-claim authority.
- **MLE ceiling:** The MLE nominates a candidate but cannot self-certify the independent gate.
- **Boundaries:** `BND-01`, `BND-03`, `BND-04`, `BND-05`.
- **Escalation:** unresolved external decisions force HOLD and route to their named owners.
- **Non-scope:** no adjacent authority, real outcome, certification, or deployment approval is created.

## Production sequence

| Section | Job | Evidence | Dossier delta | Depth |
| --- | --- | --- | --- | --- |
| `MLE-CH-09-S01` | Decision and Bench Setup — Frame MLE-CH-09 for the decision job: Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage. | canonical trace | Open decision, evidence, state, owner, and next-action fields. | 700-850 words |
| `MLE-CH-09-S02` | Procedure — Teach MLE-CH-09 for the decision job: Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage. | MLE-BCLM-025, MLE-BCLM-026, MLE-BCLM-027 · MLE-BSRC-010, MLE-BSRC-022, MLE-BSRC-006, MLE-BSRC-018, MLE-BSRC-028 | Build candidate-for-qualification ledger from canonical evidence. | 1,250-1,500 words |
| `MLE-CH-09-S03` | Evidence interpretation — Interpret MLE-CH-09 for the decision job: Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage. | canonical trace | Add bounded conclusion, counterexample, and limitation. | 850-1,050 words |
| `MLE-CH-09-S04` | Worked trace — Trace MLE-CH-09 for the decision job: Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage. | CASE-01, CASE-03, CASE-04 | Attach truth-bounded case traces. | 850-1,100 words |
| `MLE-CH-09-S05` | Failure lab — Inject MLE-CH-09 for the decision job: Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage. | canonical trace | Record RED evidence and repair boundary. | 700-900 words |
| `MLE-CH-09-S06` | Five-port transfer — Transfer MLE-CH-09 for the decision job: Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage. | canonical trace | Prove five-port parity. | 700-850 words |
| `MLE-CH-09-S07` | Assessment and Qualification Gate — Qualify MLE-CH-09 for the decision job: Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage. | canonical trace | Attach rubric and Qualification Gate. | 650-800 words |
| `MLE-CH-09-S08` | Durable handoff — Freeze MLE-CH-09 for the decision job: Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage. | canonical trace | Freeze continuity and recheck triggers. | 700-850 words |

Primary teaching occurs exactly once in `MLE-CH-09-S02`; all later uses are cross-references or applications.

## Bench Setup, Bench Sheet, and Qualification Gate

### Bench Setup

- Decision: Which candidate may advance without erasing the incumbent, losing evidence, or claiming qualification?
- Inputs: `BL-06`, `BL-07` plus canonical mappings and offline fixtures.
- Failure pressure: Selection erases a failed segment, failed candidate, or baseline and is mistaken for qualification.

### Bench Sheet

| decision | evidence | state and dossier delta | owner | authority route | next evidence |
| --- | --- | --- | --- | --- | --- |
| Which candidate may advance without erasing the incumbent, losing evidence, or claiming qualification? | candidate-for-qualification ledger and failure trace | `RECONSTRUCTIBLE` → `CANDIDATE` via `BL-08` | MLE compiles workload evidence | Evaluation retains qualification validity; Applied Science retains scientific-claim authority. | BL-09 population and segment suite |

### Qualification Gate

- PASS: identities, evidence, limitations, owner routes, ports, and acceptance checks resolve.
- HOLD: required evidence or external decision is missing or a recoverable failure remains.
- REJECT: the candidate basis cannot satisfy the named contract.
- REOPEN: a frozen lifecycle trigger invalidates scope.
- Illegal: automatic promotion, hidden failure, silent upstream repair, or self-approval.

## Skill procedure and evidence interpretation

1. Freeze incumbent, candidate, data, split, metric, and intended-condition identities.
2. Separate selection evidence from evidence estimating the selected procedure.
3. Compare candidates while preserving losses and failed segments.
4. Explain selection bias and context limits.
5. Write unresolved risks and the next evaluator into the nomination.
6. Refuse qualification or release language at CANDIDATE.

- **Strongest supportable conclusion:** The candidate may proceed only to independent qualification under recorded limitations.
- **Counterexample:** A winner is selected and estimated on one small sample while a failed segment disappears.
- **Limitation:** No comparison design guarantees representative candidates, adequate metrics, or approval.

## Benchline artifact contract

| Field | Requirement |
| --- | --- |
| Inputs | `BL-06`, `BL-07` with hashes and unresolved limitations |
| Version/hash | `BL-08` version `1.0.0`; all records resolve immutably |
| Mutations | Erase the incumbent and one failed segment. |
| Output | candidate-for-qualification ledger |
| Evidence | `MLE-BCLM-025`, `MLE-BCLM-026`, `MLE-BCLM-027` with `MLE-BSRC-010`, `MLE-BSRC-022`, `MLE-BSRC-006`, `MLE-BSRC-018`, `MLE-BSRC-028` |
| Owner | MLE owns workload-specific assembly and diagnostics |
| authority route | Evaluation retains qualification validity; Applied Science retains scientific-claim authority. |
| Legal disposition | PASS / HOLD / REJECT / REOPEN within `CANDIDATE` |
| Acceptance | identities resolve, RED is detected, limitations remain, prohibited effects are absent |

## Future deterministic companion contract

Only offline, synthetic, provider-neutral fixtures are allowed; Phase 07 creates no code.
- immutable candidate ledger.
- selection/evaluation partition fixture.
- failed-segment mutation.
- nonterminal state record.
- Expected records: `BL-08`, both lab records, diagnostics, and disposition.
- No network, provider account, production system, credential, real person, deployment, or authority mutation.

## Failure injections and diagnostics

| RED failure | Discriminating evidence | Repair boundary |
| --- | --- | --- |
| `BASELINE_ERASED` | Delete the incumbent after ranking. | Restore baseline identity and evidence. |
| `PARTITIONS_COLLAPSED` | Use one sample to select and independently certify the winner. | Restore an appropriate nested, temporal, grouped, spatial, or external design. |
| `CANDIDATE_PROMOTED` | Rename nomination as qualification or release. | Return to CANDIDATE and route independent review. |

Every repair gets a new evidence identity; diagnostics cannot promote state or approve themselves.

## Five-port transfer table

| Port | Invariant decision | Mechanism | Required evidence | External authority | Failure / limitation | Result |
| --- | --- | --- | --- | --- | --- | --- |
| `PORT-MANAGED` | Selection consumes the same comparison evidence and never implies release authority. | Provider-managed training, registry, serving, and observation. | Exportable identities, limits, configuration, evaluation, release, observation, and recovery records. | Provider/platform plus all product/domain/formal owners remain external. | Unavailable export or opaque provider state.; Provider claims are not workload qualification. | PASS |
| `PORT-CLASSICAL` | Selection consumes the same comparison evidence and never implies release authority. | Local feature transformation and statistical/classical estimator. | Feature identities, bounded run, calibrated/segment evidence where applicable, package, envelope, recovery. | Data, evaluation, product/domain, and formal owners remain external. | Feature order or preprocessing mismatch.; Simplicity does not remove lifecycle evidence. | PASS |
| `PORT-DEEP` | Selection consumes the same comparison evidence and never implies release authority. | Parameterized training, accelerator context, checkpoint, and tensor-serving path. | Data/run/checkpoint/tokenizer-or-preprocessor identities, bounded reproducibility, evaluation, envelope, recovery. | Research, evaluation, platform, and formal owners remain external. | Wrong checkpoint, preprocessing, or hardware-context identity.; Model scale and benchmark novelty do not replace evidence. | PASS |
| `PORT-EDGE` | Selection consumes the same comparison evidence and never implies release authority. | Benchline sensor/image input, constrained runtime, device package, and delayed feedback. | Sensor/data/label identity, edge package, measured envelope, rollback, controls, retirement. | Hardware, operations, domain, safety, security, platform, and product owners remain external. | Sensor shift, resource pressure, or stale device package.; Benchline is fictional and cannot imply real industrial performance or safety. | PASS |
| `PORT-SHARED` | Selection consumes the same comparison evidence and never implies release authority. | Multi-tenant shared features, training, registry, serving, and observability. | Tenant/workload identity, compatibility, resource envelope, control use, recovery, and owner routes. | Platform/SRE/security own shared systems and fleet decisions. | Tenant collision, shared-runtime upgrade, or fleet SLO pressure.; Workload evidence cannot claim platform-wide assurance. | PASS |

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

Case identity, fact, attributed outcome, inference, limitation, and transfer remain distinct.

## Exercises, assessment, and answer intent

- **Output:** `BL-08` evidence artifact.
- **Rubric:** execute the decision job with exact identities, visible limitations, correct state, and retained authority.
- **Answer intent:** explain decision, evidence, state, owner, next action, and why the strongest rejected alternative overclaims.
- **Pass evidence:** the artifact and both labs satisfy the Qualification Gate.
- **Retry:** HOLD or REOPEN with new evidence; REJECT when the basis cannot qualify; never self-approve.
- **Authority limit:** The MLE nominates a candidate but cannot self-certify the independent gate.

## Visual and accessibility contract

- Treatment: semantic candidate ledger with retained-baseline rail.
- Anchor: `MLE-CH-09-S03`.
- Labels: decision, evidence, state, owner, next action.
- Caption and alt: explain the decision without implying an outcome.
- Long description: preserve ordered branches and every semantic value.
- Numeric truth: selectable semantic HTML/CSS only.
- Candidate: not applicable; no image is authorized.

## Durable doctrine, volatile context, and re-verification

- **Durable doctrine:** Candidate identity retains baselines, failures, limitations, and comparison lineage.
- **Volatile context:** ranking service, tuning library, split API, tracker and approval UI.
- **Recheck:** execute every claim instruction and source trigger at manuscript and publication freeze and whenever the named context changes.
- **Never durable:** current UI/API behavior, vendor promises, support matrices, transferred thresholds, or unreported outcomes.

## Originality and adjacent-publication boundary

- **ND/PUB result:** PASS — endpoint is distinct and evidence-specific.
- This is candidate evidence rather than tuning recipes, novelty review, or formal evaluation.
- Forward Deployed Engineering, Applied AI Engineering, Agentic AI Engineering, LLM Behavior Engineering, and LLM Adaptation and Runtime retain their separate endpoints and provide no evidence here.

## Phase 08 handoff and evidence manifest

- Writer instruction: Write MLE-CH-09 from this production specification using the eight-section sequence, exact evidence mappings, Benchline continuity, and authority ceiling; preserve selectable semantic records and do not invent outcomes.
- Continuity: BL-08 carries candidate-for-qualification ledger into BL-09 population and segment suite.
- Prohibited: best score proves generalization; nested CV is universal; nomination equals qualification or release.
- Claims: `MLE-BCLM-025`, `MLE-BCLM-026`, `MLE-BCLM-027`.
- Sources: `MLE-BSRC-010`, `MLE-BSRC-022`, `MLE-BSRC-006`, `MLE-BSRC-018`, `MLE-BSRC-028`.
- Cases: `CASE-01`, `CASE-03`, `CASE-04`.
- Architecture: `MLE-CLM-011`, `MLE-CLM-015`, `MLE-CLM-017`.
- Boundaries: `BND-01`, `BND-03`, `BND-04`, `BND-05`.
- Scenarios: `SCN-09`.
- Domains: `PD-05`.
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`.
- Milestone: `BL-08`.
- Phase 08 remains inactive until Phase 07 closes.

PHASE07-CHAPTER-PROJECTION-START

```json
{
  "chapter": {
    "chapterId": "MLE-CH-09",
    "order": 9,
    "title": "Compare Candidates Without Losing the Baseline",
    "slug": "compare-candidates-without-losing-the-baseline",
    "partId": "PART-03",
    "decisionJob": "Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage.",
    "thesis": "Candidate selection is an evidence-routing decision, not a release pass or a deletion of losing evidence.",
    "readerEndpoint": "Produce a limitation-bearing candidate-for-qualification record and retain the incumbent.",
    "prerequisiteArtifacts": [
      "BL-06",
      "BL-07"
    ],
    "incomingState": "RECONSTRUCTIBLE",
    "outgoingStates": [
      "CANDIDATE"
    ],
    "milestoneId": "BL-08",
    "authorityOwner": "Evaluation retains qualification validity; Applied Science retains scientific-claim authority.",
    "mleCeiling": "The MLE nominates a candidate but cannot self-certify the independent gate.",
    "primaryClaimIds": [
      "MLE-BCLM-025",
      "MLE-BCLM-026",
      "MLE-BCLM-027"
    ],
    "sectionIds": [
      "MLE-CH-09-S01",
      "MLE-CH-09-S02",
      "MLE-CH-09-S03",
      "MLE-CH-09-S04",
      "MLE-CH-09-S05",
      "MLE-CH-09-S06",
      "MLE-CH-09-S07",
      "MLE-CH-09-S08"
    ],
    "labIds": [
      "MLE-CH-09-LAB-01",
      "MLE-CH-09-LAB-02"
    ],
    "assessmentIds": [
      "MLE-CH-09-ASMT-01"
    ],
    "visualIds": [
      "MLE-V09.1"
    ],
    "portIds": [
      "PORT-MANAGED",
      "PORT-CLASSICAL",
      "PORT-DEEP",
      "PORT-EDGE",
      "PORT-SHARED"
    ],
    "nextChapterId": "MLE-CH-10"
  },
  "claimTeaching": [
    {
      "claimId": "MLE-BCLM-025",
      "chapterId": "MLE-CH-09",
      "primarySectionId": "MLE-CH-09-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-010",
        "MLE-BSRC-022"
      ],
      "caseIds": [
        "CASE-01",
        "CASE-03",
        "CASE-04"
      ],
      "limitation": "Nested cross-validation is one mechanism, not a universal prescription; time, group, spatial, or external validation may govern the split design.",
      "durability": "durable",
      "volatilityTreatment": "Preserve selection-bias doctrine; date library-specific split APIs and example numbers.",
      "recheckTriggers": [
        "Blueprint a comparison fixture in which a non-nested winner is refused and selection/evaluation partitions are explicit."
      ]
    },
    {
      "claimId": "MLE-BCLM-026",
      "chapterId": "MLE-CH-09",
      "primarySectionId": "MLE-CH-09-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-006",
        "MLE-BSRC-010",
        "MLE-BSRC-018"
      ],
      "caseIds": [
        "CASE-01",
        "CASE-03",
        "CASE-04"
      ],
      "limitation": "Tracking and reporting structures do not establish that the candidate set, evaluation population, or metrics were adequate.",
      "durability": "durable",
      "volatilityTreatment": "Keep the evidence-retention fields durable; treat ranking services and tracker UIs as replaceable mechanisms.",
      "recheckTriggers": [
        "Define a candidate ledger with immutable baseline, loss reasons, limitation fields, and mutation tests for erased evidence."
      ]
    },
    {
      "claimId": "MLE-BCLM-027",
      "chapterId": "MLE-CH-09",
      "primarySectionId": "MLE-CH-09-S02",
      "crossReferenceSectionIds": [],
      "sourceIds": [
        "MLE-BSRC-006",
        "MLE-BSRC-028"
      ],
      "caseIds": [
        "CASE-01",
        "CASE-03",
        "CASE-04"
      ],
      "limitation": "Local governance determines the formal evaluator and approval chain; the book may not invent authority from a model report.",
      "durability": "durable",
      "volatilityTreatment": "Authority separation is durable; workflow product names and approval screens are volatile.",
      "recheckTriggers": [
        "Make CANDIDATE a nonterminal dossier state with mandatory next-owner and unresolved-evidence fields."
      ]
    }
  ],
  "sourceUses": [
    {
      "sourceId": "MLE-BSRC-010",
      "claimId": "MLE-BCLM-025",
      "chapterId": "MLE-CH-09",
      "sectionIds": [
        "MLE-CH-09-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Does not identify a universally best validation design or authorize release.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck URL at publication freeze; retain limitations if later methods are substituted."
    },
    {
      "sourceId": "MLE-BSRC-022",
      "claimId": "MLE-BCLM-025",
      "chapterId": "MLE-CH-09",
      "sectionIds": [
        "MLE-CH-09-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "A nested split is not automatically representative, uncertainty-complete, or appropriate for every data structure.",
      "durability": "volatile",
      "volatility": "medium",
      "recheckTrigger": "Recheck at every freeze and pin a version if code or screenshots are planned."
    },
    {
      "sourceId": "MLE-BSRC-006",
      "claimId": "MLE-BCLM-026",
      "chapterId": "MLE-CH-09",
      "sectionIds": [
        "MLE-CH-09-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "A model card is a reporting structure, not proof of accuracy, fairness, safety, compliance, qualification, release approval, or an authority to set acceptance thresholds.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck the Google Research record and final-paper link at blueprint, manuscript, and publication freeze while preserving the 2019 paper identity."
    },
    {
      "sourceId": "MLE-BSRC-010",
      "claimId": "MLE-BCLM-026",
      "chapterId": "MLE-CH-09",
      "sectionIds": [
        "MLE-CH-09-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Does not identify a universally best validation design or authorize release.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck URL at publication freeze; retain limitations if later methods are substituted."
    },
    {
      "sourceId": "MLE-BSRC-018",
      "claimId": "MLE-BCLM-026",
      "chapterId": "MLE-CH-09",
      "sectionIds": [
        "MLE-CH-09-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "Tracking preserves only recorded metadata. It does not prove that controls were held fixed, eliminate omitted environment state, establish causal attribution or fair comparison, or confer qualification and release authority.",
      "durability": "volatile",
      "volatility": "high",
      "recheckTrigger": "Recheck at every freeze and pin a concrete MLflow version before manuscript freeze if any field, API, storage behavior, or executable example is named."
    },
    {
      "sourceId": "MLE-BSRC-006",
      "claimId": "MLE-BCLM-027",
      "chapterId": "MLE-CH-09",
      "sectionIds": [
        "MLE-CH-09-S02"
      ],
      "evidenceRole": "doctrine",
      "limitation": "A model card is a reporting structure, not proof of accuracy, fairness, safety, compliance, qualification, release approval, or an authority to set acceptance thresholds.",
      "durability": "durable",
      "volatility": "low",
      "recheckTrigger": "Recheck the Google Research record and final-paper link at blueprint, manuscript, and publication freeze while preserving the 2019 paper identity."
    },
    {
      "sourceId": "MLE-BSRC-028",
      "claimId": "MLE-BCLM-027",
      "chapterId": "MLE-CH-09",
      "sectionIds": [
        "MLE-CH-09-S02"
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
      "chapterId": "MLE-CH-09",
      "sectionIds": [
        "MLE-CH-09-S04"
      ],
      "usePurpose": "Apply Benchline Inspection Dossier without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-03",
      "chapterId": "MLE-CH-09",
      "sectionIds": [
        "MLE-CH-09-S04"
      ],
      "usePurpose": "Apply Classical credit triage without exceeding its truth boundary."
    },
    {
      "caseId": "CASE-04",
      "chapterId": "MLE-CH-09",
      "sectionIds": [
        "MLE-CH-09-S04"
      ],
      "usePurpose": "Apply Deep acoustic event classifier without exceeding its truth boundary."
    }
  ],
  "dossier": {
    "chapterId": "MLE-CH-09",
    "milestoneId": "BL-08",
    "incomingState": "RECONSTRUCTIBLE",
    "inputArtifactIds": [
      "BL-06",
      "BL-07"
    ],
    "inputHashes": [
      "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
    ],
    "producedArtifactId": "BL-08",
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
    "nextChapterId": "MLE-CH-10"
  },
  "ports": [
    {
      "chapterId": "MLE-CH-09",
      "portId": "PORT-MANAGED",
      "invariantDecision": "Selection consumes the same comparison evidence and never implies release authority.",
      "variableMechanism": "Provider-managed training, registry, serving, and observation.",
      "requiredEvidence": "Exportable identities, limits, configuration, evaluation, release, observation, and recovery records.",
      "externalAuthority": "Provider/platform plus all product/domain/formal owners remain external.",
      "failureInjection": "Unavailable export or opaque provider state.",
      "limitation": "Provider claims are not workload qualification.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-09",
      "portId": "PORT-CLASSICAL",
      "invariantDecision": "Selection consumes the same comparison evidence and never implies release authority.",
      "variableMechanism": "Local feature transformation and statistical/classical estimator.",
      "requiredEvidence": "Feature identities, bounded run, calibrated/segment evidence where applicable, package, envelope, recovery.",
      "externalAuthority": "Data, evaluation, product/domain, and formal owners remain external.",
      "failureInjection": "Feature order or preprocessing mismatch.",
      "limitation": "Simplicity does not remove lifecycle evidence.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-09",
      "portId": "PORT-DEEP",
      "invariantDecision": "Selection consumes the same comparison evidence and never implies release authority.",
      "variableMechanism": "Parameterized training, accelerator context, checkpoint, and tensor-serving path.",
      "requiredEvidence": "Data/run/checkpoint/tokenizer-or-preprocessor identities, bounded reproducibility, evaluation, envelope, recovery.",
      "externalAuthority": "Research, evaluation, platform, and formal owners remain external.",
      "failureInjection": "Wrong checkpoint, preprocessing, or hardware-context identity.",
      "limitation": "Model scale and benchmark novelty do not replace evidence.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-09",
      "portId": "PORT-EDGE",
      "invariantDecision": "Selection consumes the same comparison evidence and never implies release authority.",
      "variableMechanism": "Benchline sensor/image input, constrained runtime, device package, and delayed feedback.",
      "requiredEvidence": "Sensor/data/label identity, edge package, measured envelope, rollback, controls, retirement.",
      "externalAuthority": "Hardware, operations, domain, safety, security, platform, and product owners remain external.",
      "failureInjection": "Sensor shift, resource pressure, or stale device package.",
      "limitation": "Benchline is fictional and cannot imply real industrial performance or safety.",
      "transferResult": "PASS"
    },
    {
      "chapterId": "MLE-CH-09",
      "portId": "PORT-SHARED",
      "invariantDecision": "Selection consumes the same comparison evidence and never implies release authority.",
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
      "sectionId": "MLE-CH-09-S01",
      "chapterId": "MLE-CH-09",
      "order": 1,
      "purpose": "Decision and Bench Setup",
      "teachingAction": "Frame MLE-CH-09 for the decision job: Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [],
      "architectureClaimIds": [
        "MLE-CLM-011",
        "MLE-CLM-015",
        "MLE-CLM-017"
      ],
      "boundaryIds": [
        "BND-01",
        "BND-03",
        "BND-04",
        "BND-05"
      ],
      "scenarioIds": [
        "SCN-09"
      ],
      "domainIds": [
        "PD-05"
      ],
      "portIds": [],
      "artifactDelta": "Open decision, evidence, state, owner, and next-action fields.",
      "plannedDepth": "700-850 words",
      "claimDisposition": "cross-reference"
    },
    {
      "sectionId": "MLE-CH-09-S02",
      "chapterId": "MLE-CH-09",
      "order": 2,
      "purpose": "Procedure",
      "teachingAction": "Teach MLE-CH-09 for the decision job: Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage.",
      "claimIds": [
        "MLE-BCLM-025",
        "MLE-BCLM-026",
        "MLE-BCLM-027"
      ],
      "sourceIds": [
        "MLE-BSRC-010",
        "MLE-BSRC-022",
        "MLE-BSRC-006",
        "MLE-BSRC-018",
        "MLE-BSRC-028"
      ],
      "caseIds": [],
      "architectureClaimIds": [],
      "boundaryIds": [],
      "scenarioIds": [],
      "domainIds": [],
      "portIds": [],
      "artifactDelta": "Build candidate-for-qualification ledger from canonical evidence.",
      "plannedDepth": "1,250-1,500 words",
      "claimDisposition": "primary"
    },
    {
      "sectionId": "MLE-CH-09-S03",
      "chapterId": "MLE-CH-09",
      "order": 3,
      "purpose": "Evidence interpretation",
      "teachingAction": "Interpret MLE-CH-09 for the decision job: Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage.",
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
      "sectionId": "MLE-CH-09-S04",
      "chapterId": "MLE-CH-09",
      "order": 4,
      "purpose": "Worked trace",
      "teachingAction": "Trace MLE-CH-09 for the decision job: Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage.",
      "claimIds": [],
      "sourceIds": [],
      "caseIds": [
        "CASE-01",
        "CASE-03",
        "CASE-04"
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
      "sectionId": "MLE-CH-09-S05",
      "chapterId": "MLE-CH-09",
      "order": 5,
      "purpose": "Failure lab",
      "teachingAction": "Inject MLE-CH-09 for the decision job: Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage.",
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
      "sectionId": "MLE-CH-09-S06",
      "chapterId": "MLE-CH-09",
      "order": 6,
      "purpose": "Five-port transfer",
      "teachingAction": "Transfer MLE-CH-09 for the decision job: Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage.",
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
      "sectionId": "MLE-CH-09-S07",
      "chapterId": "MLE-CH-09",
      "order": 7,
      "purpose": "Assessment and Qualification Gate",
      "teachingAction": "Qualify MLE-CH-09 for the decision job: Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage.",
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
      "sectionId": "MLE-CH-09-S08",
      "chapterId": "MLE-CH-09",
      "order": 8,
      "purpose": "Durable handoff",
      "teachingAction": "Freeze MLE-CH-09 for the decision job: Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage.",
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
      "labId": "MLE-CH-09-LAB-01",
      "chapterId": "MLE-CH-09",
      "truthState": "synthetic-deterministic",
      "inputContract": "MLE-CH-09 fixed offline fixture 1",
      "fixedFixtureIds": [
        "FIX-MLE-CH-09-1"
      ],
      "redFailures": [
        "missing expected evidence"
      ],
      "expectedEvidence": [
        "BL-08 deterministic record"
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
        "MLE-CH-09 evidence identity and owner route remain exact."
      ]
    },
    {
      "labId": "MLE-CH-09-LAB-02",
      "chapterId": "MLE-CH-09",
      "truthState": "synthetic-deterministic",
      "inputContract": "MLE-CH-09 fixed offline fixture 2",
      "fixedFixtureIds": [
        "FIX-MLE-CH-09-2"
      ],
      "redFailures": [
        "illegal promotion or self-approval"
      ],
      "expectedEvidence": [
        "BL-08 deterministic record"
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
        "MLE-CH-09 evidence identity and owner route remain exact."
      ]
    }
  ],
  "assessment": [
    {
      "assessmentId": "MLE-CH-09-ASMT-01",
      "chapterId": "MLE-CH-09",
      "exerciseOutput": "BL-08 evidence artifact",
      "rubric": "Assess Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage. with observable evidence.",
      "answerIntent": "Explain the decision, evidence, state, owner, and next action.",
      "observablePassEvidence": "BL-08 passes its named qualification gate.",
      "authorityLimit": "The MLE nominates a candidate but cannot self-certify the independent gate.",
      "retryRoute": "HOLD or REOPEN with new evidence; never self-approve."
    }
  ],
  "visuals": [
    {
      "visualId": "MLE-V09.1",
      "chapterId": "MLE-CH-09",
      "kind": "semantic-html-css",
      "insertionAnchor": "MLE-CH-09-S03",
      "decisionHelped": "Select a candidate for qualification while retaining baseline, failed candidates, limitations, and evidence lineage.",
      "essentialLabels": [
        "decision",
        "evidence",
        "state",
        "owner",
        "next action"
      ],
      "captionIntent": "Explain the BL-08 decision evidence.",
      "altIntent": "Text alternative for MLE-CH-09 evidence flow.",
      "longDescriptionIntent": "Ordered description of MLE-CH-09 evidence, state, owner, and next action.",
      "numericTruthDisposition": "semantic-html-css",
      "candidateStatus": "not-applicable",
      "reservedPath": null
    }
  ],
  "handoff": {
    "chapterId": "MLE-CH-09",
    "phase08Instructions": "Write MLE-CH-09 from this production specification using the eight-section sequence, exact evidence mappings, Benchline continuity, and authority ceiling; preserve selectable semantic records and do not invent outcomes.",
    "continuityBridge": "BL-08 carries candidate-for-qualification ledger into BL-09 population and segment suite.",
    "wordRange": "6,200-7,400 words",
    "wordRangeRationale": "The range funds one decision setup, three canonical claims, a worked trace, two labs, five-port transfer, qualification, and durable handoff without padding.",
    "recheckTriggers": [
      "Blueprint a comparison fixture in which a non-nested winner is refused and selection/evaluation partitions are explicit.",
      "Define a candidate ledger with immutable baseline, loss reasons, limitation fields, and mutation tests for erased evidence.",
      "Make CANDIDATE a nonterminal dossier state with mandatory next-owner and unresolved-evidence fields.",
      "Recheck URL at publication freeze; retain limitations if later methods are substituted.",
      "Recheck at every freeze and pin a version if code or screenshots are planned.",
      "Recheck the Google Research record and final-paper link at blueprint, manuscript, and publication freeze while preserving the 2019 paper identity.",
      "Recheck at every freeze and pin a concrete MLflow version before manuscript freeze if any field, API, storage behavior, or executable example is named.",
      "Recheck at blueprint, manuscript, and publication freeze for the announced revision; keep version 1.0 explicit and replace or dual-cite only after a revised framework is actually published."
    ],
    "prohibitedClaims": [
      "best score proves generalization",
      "nested CV is universal",
      "nomination equals qualification or release"
    ],
    "evidenceManifest": [
      "MLE-BCLM-025",
      "MLE-BCLM-026",
      "MLE-BCLM-027"
    ]
  }
}
```

PHASE07-CHAPTER-PROJECTION-END
