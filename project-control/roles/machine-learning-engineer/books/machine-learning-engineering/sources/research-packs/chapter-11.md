# Chapter 11 Research Pack — Treat Uncertainty, Calibration, and Failure as Evidence

- Canonical chapter: `MLE-CH-11`
- Architecture version: `1.0.0`
- Integration contract: `3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433`
- Evidence currentness date: `2026-08-18`

## Frozen decision job

Record uncertainty or calibration where applicable, sample limits, error
taxonomy, and unresolved evidence.

The milestone is `BL-10` — Uncertainty and failure evidence. Both incoming and
outgoing dossier states remain `CANDIDATE`.

## Phase 06 contract coverage

- Exact source research needs: `Calibration`; `Uncertainty`; `Error analysis`;
  `Sample limitations`.
- Exact Phase 06 handoff: `Research primary sources for calibration,
  uncertainty, and error taxonomies.`
- Domain: `PD-06` — Representative Qualification.
- Domain research need: segments, calibration, uncertainty, and error analysis.

## Canonical claims

### `MLE-BCLM-031` — technical doctrine

For probabilistic classifiers, calibration asks whether predicted probability
corresponds to observed event frequency; discrimination or accuracy alone
cannot establish that interpretation.

- Sources: `MLE-BSRC-012`, `MLE-BSRC-023`
- Confidence/durability: high/durable
- Limitation: calibration applies only where outputs and decisions admit a
  meaningful probabilistic interpretation.

### `MLE-BCLM-032` — technical method

Calibration fitting and assessment must be separated from base-model fitting,
and every result must retain method, split, sample, binning or scoring choices,
segment scope, and uncertainty limits because post-processing success is
dataset- and model-dependent.

- Sources: `MLE-BSRC-012`, `MLE-BSRC-023`
- Confidence/durability: high/durable
- Limitation: no single calibration method or error summary is sufficient
  across output types and consequences.

### `MLE-BCLM-033` — technical doctrine

Metrics become decision evidence only when sample limitations, missing or
sparse segments, observed failure families, intended-use gaps, and unresolved
uncertainty travel with the reported value.

- Sources: `MLE-BSRC-006`, `MLE-BSRC-025`
- Confidence/durability: high/durable
- Limitation: the failure taxonomy is workload-specific and remains subject to
  independent evaluation and domain review.

## Source-to-claim matrix

| Source | Canonical identity and evidence role | Claims |
| --- | --- | --- |
| `MLE-BSRC-006` | Model Cards for Model Reporting, FAT* 2019 final; reporting categories for metrics, conditions, caveats, limitations, and recommendations | `MLE-BCLM-033` |
| `MLE-BSRC-012` | Guo et al., On Calibration of Modern Neural Networks, PMLR 70 final (2017); primary calibration definition and bounded empirical findings | `MLE-BCLM-031`, `MLE-BCLM-032` |
| `MLE-BSRC-023` | scikit-learn 1.9 probability-calibration documentation, verified 2026-08-18; current reliability-diagram and cross-validated calibration mechanisms | `MLE-BCLM-031`, `MLE-BCLM-032` |
| `MLE-BSRC-025` | IMDRF/AIML WG/N88 FINAL:2025; representative test, intended-use, local/global performance, and uncertainty principles | `MLE-BCLM-033` |

The calibration paper supports a probabilistic interpretation and bounded
method evidence, not universal efficacy of temperature scaling. scikit-learn
is a living mechanism source. Model cards and medical-device guidance transfer
evidence fields and consequence principles, not a universal taxonomy or formal
authorization.

## Frozen architecture trace

- Architecture claims: `MLE-CLM-011`, `MLE-CLM-016`, `MLE-CLM-019`
- Boundaries: `BND-01`, `BND-05`, `BND-15`, `BND-17`
- Scenario: `SCN-01` — an aggregate improvement conflicts with a protected,
  high-consequence segment; evaluator, product, and domain authority remain
  external.
- Domain: `PD-06`
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`,
  `PORT-SHARED`
- Cases: `CASE-01`, `CASE-03`, `CASE-04`, `CASE-09`
- Milestone: `BL-10`

## Case truth and bounded use

| Case | Truth label | Chapter use |
| --- | --- | --- |
| `CASE-01` Benchline Inspection Dossier | `FICTIONAL SYNTHETIC CAPSTONE` | Construct uncertainty, error-family, and sample-limit evidence for an edge classifier; no real field result. |
| `CASE-03` Classical credit triage | `CONSTRUCTED SATELLITE` | Test probability-calibration applicability and segment limits using synthetic records; no credit or compliance authorization. |
| `CASE-04` Deep acoustic event classifier | `CONSTRUCTED SATELLITE` | Stress checkpoint-specific calibration and failure families with bounded local runs only. |
| `CASE-09` Gender Shades intersectional evaluation audit | `PUBLIC REPORTED CASE` | Use the historical audit to show that broad results can hide intersectional error and that group/sample limitations travel with metrics. |

`CASE-09` retains the paper's 2018 task, systems, dataset, grouping, and reported
numbers. It supports inspection of meaningful intersections but neither proves
calibration nor supplies a universal error taxonomy, group definition,
threshold, or current vendor result.

## Durable doctrine, volatile examples, and conflicts

- Durable doctrine: uncertainty, calibration applicability, failure taxonomy,
  and sample limits travel with metrics.
- Volatile examples: calibration libraries, uncertainty methods, bin defaults,
  plotting APIs, and sector terminology.
- Current examples as of 2026-08-18: scikit-learn `1.9` is the pinned library
  example; IMDRF N88 `FINAL:2025` is the pinned regulator-hosted example.
- Historical evidence: Guo et al. remains a bounded 2017 study; its selected
  datasets and architectures do not establish current or universal method
  performance.
- Conflict to preserve: accuracy/discrimination and calibration answer distinct
  questions; apparently good aggregate calibration can coexist with sparse
  segments, important error families, or inapplicable probability semantics.
- Recheck trigger: recheck living scikit-learn behavior at every freeze and
  FDA/IMDRF publication status at blueprint, manuscript, and publication
  freeze.

## Authority ceiling and misuse prohibitions

- Authority owner: evaluation owns method adequacy; domain and safety
  authorities judge consequential error sufficiency.
- MLE ceiling: the MLE computes and diagnoses evidence but cannot turn method
  output into formal acceptance.
- Do not treat accuracy, discrimination, expected calibration error, or a
  reliability plot as a complete qualification result.
- Do not apply probability calibration where the output lacks a meaningful
  probabilistic interpretation.
- Do not reuse base-model fitting data for calibration assessment without
  recording the dependence and limitation.
- Do not hide sparse samples, missing segments, observed failure families, or
  intended-use gaps behind a summary score.

## Five-port transfer

| Port | Transfer requirement |
| --- | --- |
| `PORT-MANAGED` | Export prediction, split, sample, method, segment, and limitation records; provider dashboards are not independent evidence. |
| `PORT-CLASSICAL` | Assess calibration where probabilities are meaningful and bind preprocessing/feature identity to every result. |
| `PORT-DEEP` | Bind calibration and failure evidence to checkpoint, preprocessor, dataset, and runtime context. |
| `PORT-EDGE` | Include sensor/environment gaps, delayed labels, and sparse field-like fixtures without claiming real field safety. |
| `PORT-SHARED` | Keep tenant/workload uncertainty evidence distinct from shared platform or fleet assurance. |

## Planned evidence artifacts

- `BL-10` uncertainty and failure evidence record.
- Exact selectable reliability table with applicability decision, sample counts,
  bins or scoring choices, and segment scope.
- Independent base-fit, calibration-fit, and calibration-assessment partitions.
- Failure ledger with sample limits, missing/sparse segments, error families,
  intended-use gaps, and unresolved uncertainty.
- Mutation checks that prevent a qualification-ready metric when required
  limits are absent.

## Exact Phase 07 handoff

- `MLE-BCLM-031`: Blueprint an exact selectable reliability table and require a
  statement of whether probability calibration is applicable.
- `MLE-BCLM-032`: Define a calibration evidence record with independent
  partitions and mutation tests for omitted sample and method limits.
- `MLE-BCLM-033`: Create a failure ledger that cannot emit a
  qualification-ready metric while unresolved samples, segments, or error
  families are hidden.

Evidence-gap disposition: none release-blocking
Rationale: primary calibration research, official current mechanisms, reporting doctrine, and consequence-aware regulator guidance support all claims with explicit applicability and sample limitations.
Affected claim/source IDs: `MLE-BCLM-031`, `MLE-BCLM-032`, `MLE-BCLM-033`; `MLE-BSRC-006`, `MLE-BSRC-012`, `MLE-BSRC-023`, `MLE-BSRC-025`.
