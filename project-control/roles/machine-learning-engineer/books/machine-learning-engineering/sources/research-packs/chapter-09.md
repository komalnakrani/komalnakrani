# Chapter 09 Research Pack — Compare Candidates Without Losing the Baseline

- Canonical chapter: `MLE-CH-09`
- Architecture version: `1.0.0`
- Integration contract: `3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433`
- Evidence currentness date: `2026-08-18`

## Frozen decision job

Select a candidate for qualification while retaining baseline, failed
candidates, limitations, and evidence lineage.

The milestone is `BL-08` — Candidate-for-qualification record. The incoming
dossier state is `RECONSTRUCTIBLE`; the outgoing state is `CANDIDATE`.

## Phase 06 contract coverage

- Exact source research needs: `Model comparison`; `Model selection
  limitations`; `Evidence records`.
- Exact Phase 06 handoff: `Research candidate comparison without release
  overclaim.`
- Domain: `PD-05` — Candidate Evidence.
- Domain research need: model comparison and selection records.

## Canonical claims

### `MLE-BCLM-025` — technical doctrine

Selecting the best observed candidate can overfit a finite-sample selection
criterion, so model selection belongs inside the evaluation procedure and must
remain separated from the evidence used to estimate the selected procedure's
performance.

- Sources: `MLE-BSRC-010`, `MLE-BSRC-022`
- Confidence/durability: high/durable
- Limitation: nested cross-validation is one mechanism, not a universal
  prescription; time, group, spatial, or external validation may govern split
  design.

### `MLE-BCLM-026` — technical method

A candidate-for-qualification record preserves the incumbent and candidate
identities, dataset and evaluation procedure, metric direction, observed
segment failures, selection rationale, and limitations; the selected result
remains interpretable only while the comparison and selection evidence that
produced it remains available.

- Sources: `MLE-BSRC-006`, `MLE-BSRC-010`, `MLE-BSRC-018`
- Confidence/durability: high/durable
- Limitation: tracking and reporting structures do not establish that the
  candidate set, population, or metrics were adequate.

### `MLE-BCLM-027` — technical doctrine

Candidate nomination is an evidence-routing action, not technical qualification
or release approval; the record must state intended conditions, unresolved
risks, next evaluator, and the MLE's authority ceiling.

- Sources: `MLE-BSRC-006`, `MLE-BSRC-028`
- Confidence/durability: high/durable
- Limitation: local governance determines the evaluator and approval chain;
  the book does not invent authority from a model report.

## Source-to-claim matrix

| Source | Canonical identity and evidence role | Claims |
| --- | --- | --- |
| `MLE-BSRC-006` | Model Cards for Model Reporting, FAT* 2019 final; durable reporting categories and explicit caveats | `MLE-BCLM-026`, `MLE-BCLM-027` |
| `MLE-BSRC-010` | Cawley and Talbot, JMLR 11(70), final (2010); primary selection-overfitting doctrine | `MLE-BCLM-025`, `MLE-BCLM-026` |
| `MLE-BSRC-018` | MLflow Tracking, MLflow 3 living documentation, accessed 2026-08-18; current comparison-record mechanism | `MLE-BCLM-026` |
| `MLE-BSRC-022` | scikit-learn 1.9 stable nested/non-nested cross-validation example, verified 2026-08-18; mechanism illustration | `MLE-BCLM-025` |
| `MLE-BSRC-028` | NIST AI RMF 1.0, NIST AI 100-1 final (2023); documented actors, context, and decision evidence | `MLE-BCLM-027` |

The JMLR paper supplies the durable selection-bias basis. Library and tracker
documentation remain replaceable mechanisms. Model cards and AI RMF support
recording and authority separation; neither authorizes nomination, qualification,
or release.

## Frozen architecture trace

- Architecture claims: `MLE-CLM-011`, `MLE-CLM-015`, `MLE-CLM-017`
- Boundaries: `BND-01`, `BND-03`, `BND-04`, `BND-05`
- Scenario: `SCN-09` — an applied scientist proposes a novel architecture with
  promising offline results; scientific-claim authority remains external.
- Domain: `PD-05`
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`,
  `PORT-SHARED`
- Cases: `CASE-01`, `CASE-03`, `CASE-04`
- Milestone: `BL-08`

## Case truth and bounded use

| Case | Truth label | Chapter use |
| --- | --- | --- |
| `CASE-01` Benchline Inspection Dossier | `FICTIONAL SYNTHETIC CAPSTONE` | Nominate a constructed edge candidate while retaining its incumbent, failed segment, losing candidates, and limitations. |
| `CASE-03` Classical credit triage | `CONSTRUCTED SATELLITE` | Demonstrate that a simple estimator still needs independent selection/evaluation evidence; no lending or compliance inference. |
| `CASE-04` Deep acoustic event classifier | `CONSTRUCTED SATELLITE` | Compare checkpoint candidates under one controlled record and retain failed candidates; no field-performance claim. |

All three cases are constructed. They contain no reported public facts,
attributed real outcomes, or permission to generalize a selected winner into a
qualified or released workload.

## Durable doctrine, volatile examples, and conflicts

- Durable doctrine: candidate identity retains baselines, failures,
  limitations, and comparison lineage.
- Volatile examples: ranking libraries, tuning services, tracker interfaces,
  approval screens, and split APIs.
- Current examples as of 2026-08-18: scikit-learn `1.9` illustrates nested
  evaluation; MLflow 3 documents comparison records; NIST AI RMF `1.0` remains
  final but is under announced revision.
- Conflict to preserve: a best observed score may be selection-biased; a
  complete tracker record can still encode an inadequate candidate set,
  population, metric, or split.
- Recheck trigger: recheck living MLflow/scikit-learn routes at every freeze
  and AI RMF revision status at blueprint, manuscript, and publication freeze.

## Authority ceiling and misuse prohibitions

- Authority owner: evaluation retains qualification validity; Applied Science
  retains scientific-claim authority.
- MLE ceiling: the MLE nominates a candidate but cannot self-certify the
  independent gate.
- Do not delete the incumbent, failed candidates, failed segments, or
  comparison procedure after selection.
- Do not reuse selection data as independent evidence without naming the
  resulting bias and limitation.
- Do not present nested cross-validation as universally correct for temporal,
  grouped, spatial, or externally validated data.
- Do not convert `CANDIDATE` into PASS, launch approval, or scientific novelty.

## Five-port transfer

| Port | Transfer requirement |
| --- | --- |
| `PORT-MANAGED` | Export candidate, incumbent, evaluation, limitation, and loss records from the provider; provider rank is not qualification. |
| `PORT-CLASSICAL` | Preserve preprocessing/feature and estimator identities plus calibration or segment limits where applicable. |
| `PORT-DEEP` | Compare checkpoint/preprocessor/runtime identities under the same procedure and retain failed deep candidates. |
| `PORT-EDGE` | Include constrained-device and field-context limits without converting local fixture gains into field evidence. |
| `PORT-SHARED` | Keep workload candidate evidence distinct from tenant, fleet, and shared-platform acceptance. |

## Planned evidence artifacts

- `BL-08` candidate-for-qualification record.
- Immutable candidate ledger with incumbent, candidates, loss reasons,
  selection procedure, failed segments, and limitations.
- Controlled nested/non-nested selection fixture with explicit partition
  identities.
- Mutation checks that refuse erased baselines, losing evidence, intended
  conditions, next evaluator, or unresolved risk.
- Nonterminal `CANDIDATE` state transition record.

## Exact Phase 07 handoff

- `MLE-BCLM-025`: Blueprint a comparison fixture in which a non-nested winner
  is refused and selection/evaluation partitions are explicit.
- `MLE-BCLM-026`: Define a candidate ledger with immutable baseline, loss
  reasons, limitation fields, and mutation tests for erased evidence.
- `MLE-BCLM-027`: Make CANDIDATE a nonterminal dossier state with mandatory
  next-owner and unresolved-evidence fields.

Evidence-gap disposition: none release-blocking
Rationale: primary selection-bias research, durable reporting/governance sources, and current mechanism documentation jointly support all three claims without conferring qualification or release authority.
Affected claim/source IDs: `MLE-BCLM-025`, `MLE-BCLM-026`, `MLE-BCLM-027`; `MLE-BSRC-006`, `MLE-BSRC-010`, `MLE-BSRC-018`, `MLE-BSRC-022`, `MLE-BSRC-028`.
