# Chapter 10 Research Pack — Represent Populations and Consequential Segments

- Canonical chapter: `MLE-CH-10`
- Architecture version: `1.0.0`
- Integration contract: `3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433`
- Evidence currentness date: `2026-08-18`

## Frozen decision job

Build a representative suite and segment gate whose thresholds follow
consequence rather than aggregate convenience.

The milestone is `BL-09` — Population and segment qualification suite. Both
incoming and outgoing dossier states remain `CANDIDATE` until the suite is
accepted by the named authorities.

## Phase 06 contract coverage

- Exact source research needs: `Representative evaluation`; `Segment
  performance`; `Consequence-based thresholds`.
- Exact Phase 06 handoff: `Research primary sources for population and segment
  qualification.`
- Domain: `PD-06` — Representative Qualification.
- Domain research need: segments, calibration, uncertainty, and error analysis.

## Canonical claims

### `MLE-BCLM-028` — technical doctrine

Qualification evidence must describe and represent the intended population and
operating conditions, report relevant subgroup and intersectional performance,
and disclose known gaps rather than infer coverage from aggregate accuracy.

- Sources: `MLE-BSRC-006`, `MLE-BSRC-025`
- Confidence/durability: high/durable
- Limitation: representativeness is workload- and consequence-specific; no
  generic demographic checklist suffices.

### `MLE-BCLM-029` — bounded case inference

The Gender Shades audit demonstrates that an aggregate or broad-category result
can conceal much larger intersectional error, supporting targeted segment
inspection while not supplying universal groups or thresholds for other
workloads.

- Sources: `MLE-BSRC-011`, `MLE-BSRC-032`
- Confidence/durability: high/contextual
- Limitation: the historical systems, binary gender-classification task,
  phenotypic labels, dataset, and 2018 results remain explicit and cannot be
  presented as current vendor performance.

### `MLE-BCLM-030` — technical method

Segment gates require named consequences, accountable owners, thresholds,
precedence over aggregate gains, and a documented response to sparse or
missing evidence; the MLE implements the gate but cannot waive domain, safety,
or evaluation authority.

- Sources: `MLE-BSRC-025`, `MLE-BSRC-028`, `MLE-BSRC-032`
- Confidence/durability: high/durable
- Limitation: primary sources establish consequence- and context-aware
  evaluation but do not dictate this book's gate schema or threshold values.

## Source-to-claim matrix

| Source | Canonical identity and evidence role | Claims |
| --- | --- | --- |
| `MLE-BSRC-006` | Model Cards for Model Reporting, FAT* 2019 final; intended use, evaluation conditions, subgroup factors, caveats, and limitations | `MLE-BCLM-028` |
| `MLE-BSRC-011` | Gender Shades, PMLR 81 final (2018); bounded reported facts and attributed results | `MLE-BCLM-029` |
| `MLE-BSRC-025` | IMDRF/AIML WG/N88 FINAL:2025, published 2025-01-29; regulator-hosted representative and consequence-linked evaluation principles | `MLE-BCLM-028`, `MLE-BCLM-030` |
| `MLE-BSRC-028` | NIST AI RMF 1.0, NIST AI 100-1 final (2023); contextual metrics, accountability, and lifecycle decision evidence | `MLE-BCLM-030` |
| `MLE-BSRC-032` | NIST SP 1270 final (2022); context-aware bias taxonomy and measurement limitations | `MLE-BCLM-029`, `MLE-BCLM-030` |

Gender Shades supplies a dated public audit, not a current benchmark or
universal segment taxonomy. IMDRF N88 transfers only representative-evaluation
and consequence principles outside medical devices. NIST sources do not set
the workload's segments, thresholds, or acceptance decision.

## Frozen architecture trace

- Architecture claims: `MLE-CLM-011`, `MLE-CLM-016`, `MLE-CLM-019`,
  `MLE-CLM-020`
- Boundaries: `BND-01`, `BND-05`, `BND-13`, `BND-15`, `BND-17`
- Scenarios: `SCN-01`, `SCN-08`
- Domain: `PD-06`
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`,
  `PORT-SHARED`
- Cases: `CASE-01`, `CASE-02`, `CASE-03`, `CASE-04`, `CASE-05`, `CASE-09`
- Milestone: `BL-09`

`SCN-01` supplies the aggregate-improvement/high-consequence-segment conflict.
`SCN-08` preserves the requirement to reopen evidence when the intended-use
population changes. Evaluation, product, domain, safety, governance, privacy,
legal, and regulatory authorities remain external.

## Case truth and bounded use

| Case | Truth label | Chapter use |
| --- | --- | --- |
| `CASE-01` Benchline Inspection Dossier | `FICTIONAL SYNTHETIC CAPSTONE` | Construct a population/segment suite for the edge workload; claim no industrial or safety result. |
| `CASE-02` Managed demand forecast | `CONSTRUCTED SATELLITE` | Test exportable population and segment evidence under provider opacity. |
| `CASE-03` Classical credit triage | `CONSTRUCTED SATELLITE` | Exercise consequential segment precedence with synthetic records only; no credit, fairness, or compliance authorization. |
| `CASE-04` Deep acoustic event classifier | `CONSTRUCTED SATELLITE` | Test segment sparsity and field-condition gaps with bounded local fixtures only. |
| `CASE-05` Shared ranking platform tenant | `CONSTRUCTED SATELLITE` | Keep tenant segment evidence distinct from fleet or platform-wide assurance. |
| `CASE-09` Gender Shades intersectional evaluation audit | `PUBLIC REPORTED CASE` | Teach audit method and bounded inference from the paper's historical task, systems, dataset, groups, results, and limitations. |

For `CASE-09`, the reported facts are the authors' balanced audit and the cited
IJB-A/Adience composition. The attributed result is up to 34.7% error for
darker-skinned women and a maximum 0.8% for lighter-skinned men in the audited
systems. The allowed inference is that broad results may hide important
intersectional errors. The figures, groups, and thresholds do not transfer.

## Durable doctrine, volatile examples, and conflicts

- Durable doctrine: representative populations and consequence-linked segments
  outrank aggregate convenience.
- Volatile examples: metric packages, fairness terminology, sector examples,
  and local threshold workflows.
- Current examples as of 2026-08-18: IMDRF N88 `FINAL:2025` is the pinned
  regulator example; AI RMF `1.0` is final but under announced revision; NIST
  SP 1270 remains the pinned 2022 publication.
- Historical example: Gender Shades remains a 2018 audit of three historical
  commercial systems and is never a current vendor comparison.
- Conflict to preserve: finer segmentation can reveal consequence while
  reducing per-cell sample size; missing/sparse cells require an explicit
  disposition, not silent aggregation.
- Recheck trigger: recheck FDA/IMDRF and NIST successor status at every freeze;
  retain the historical public-case identity and figures unchanged.

## Authority ceiling and misuse prohibitions

- Authority owner: evaluation owns suite adequacy; product, domain, and formal
  authorities own acceptable consequences.
- MLE ceiling: the MLE implements, diagnoses, and remediates but cannot waive a
  consequential gate.
- Do not use aggregate improvement to override a failed high-consequence
  segment.
- Do not copy Gender Shades group definitions, results, or thresholds into
  another workload.
- Do not present segment metrics as legal, fairness, safety, medical, or domain
  authorization.
- Do not let sparse or missing cells disappear from the disposition.

## Five-port transfer

| Port | Transfer requirement |
| --- | --- |
| `PORT-MANAGED` | Export population, operating-condition, segment, sample, and gap evidence; provider summaries are insufficient. |
| `PORT-CLASSICAL` | Retain feature/preprocessing context and calibration/segment evidence where applicable; model simplicity changes no gate. |
| `PORT-DEEP` | Bind checkpoint and preprocessor identity to the same population/segment suite and expose sparse cells. |
| `PORT-EDGE` | Include sensor, environment, device, and delayed-label conditions without inferring real field safety or performance. |
| `PORT-SHARED` | Evaluate workload/tenant populations while keeping fleet-wide and platform acceptance external. |

## Planned evidence artifacts

- `BL-09` population and segment qualification suite.
- Population card with intended population, operating conditions, known gaps,
  and sparse/missing cells.
- Exact aggregate/segment metric matrix with named consequence and owner.
- Gate-precedence fixture that forces HOLD when a consequential segment fails
  despite aggregate improvement.
- `CASE-09` fact/outcome/inference/limitation panel with dated historical labels.

## Exact Phase 07 handoff

- `MLE-BCLM-028`: Blueprint a population card and segment matrix whose missing
  or sparse cells block unsupported qualification language.
- `MLE-BCLM-029`: Use a bounded public-case sidebar separating reported
  results, allowed inference, forbidden inference, and transfer rule.
- `MLE-BCLM-030`: Specify precedence rules that force HOLD on a consequential
  segment failure even when the aggregate improves.

Evidence-gap disposition: none release-blocking
Rationale: representative-evaluation doctrine, context-aware standards, and the bounded historical audit support the three claims while preserving sample, transfer, and authority limitations.
Affected claim/source IDs: `MLE-BCLM-028`, `MLE-BCLM-029`, `MLE-BCLM-030`; `MLE-BSRC-006`, `MLE-BSRC-011`, `MLE-BSRC-025`, `MLE-BSRC-028`, `MLE-BSRC-032`.
