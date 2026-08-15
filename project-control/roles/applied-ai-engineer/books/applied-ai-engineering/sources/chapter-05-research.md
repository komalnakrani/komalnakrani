# Chapter 05 Research — Make Task Data Representative

## Architecture anchors

- Primary domains: `AAE-K04`, `AAE-K06`, `AAE-K08`
- Dossier milestone: `PF-04`
- Forecast figures: `F05.1`, `F05.2`

## Research question

What evidence is needed to claim that task data represents consequential use, is permitted, and can support development and evaluation without leakage?

## Claim and evidence map

- **C05.1 — Dataset documentation should record motivation, composition, collection, processing, intended use, and limitations.** `AAE-S010` and `AAE-S011` provide complementary documentation approaches; neither proves fitness.
- **C05.2 — Production validation must detect structural anomalies, skew, and drift while semantic review remains necessary.** `AAE-S009` supplies production data-validation mechanisms.
- **C05.3 — Data problems can compound through organizational and technical stages.** `AAE-S013` and `AAE-S014` support the data-cascade pattern.
- **C05.4 — Aggregate composition can hide consequential intersectional or demographic performance gaps.** `AAE-S049` and `AAE-S050` support predeclared segment analysis with strict context limits.
- **C05.5 — Multimodal transfer and evaluation remain data-dependent.** `AAE-S015` reports broad transfer results while also exposing dataset/benchmark context; `AAE-S020` supplies a domain adaptation case.
- **C05.6 — Dataset permission, privacy, and threat assumptions must be part of the record.** `AAE-S038`, `AAE-S039`, and `AAE-S041` support privacy and adversarial considerations.

## Data-card minimum

Record unit of observation, population, collection and label process, provenance/license/permission, time window, segments, missingness, duplicates, annotator/domain roles, preprocessing, train/tune/eval separation, leakage routes, known skews, prohibited uses, retention, refresh triggers, and unresolved limitations.

## Cases

- `AAE-C005` shows domain-expert and label-provenance documentation.
- `AAE-C006` and `AAE-C011` show why aggregate metrics and underspecified populations are insufficient.
- `AAE-C007` connects neglected data decisions to downstream system failure.
- `AAE-C012` requires synthetic catalog and query segments plus explicit seller-signal limitations.

## Disputes and limits

“Representative” is always relative to a specified task, time, population, and consequence. Perfect coverage is impossible; unknown and excluded populations must be explicit. Synthetic data supports safe execution and failure injection but cannot establish real-world prevalence or user behavior.

## Remaining gaps

No release-blocking research gap. Phase 07 must define Patchwork's synthetic population and segment assumptions without implying they describe a real marketplace.

## Blueprint constraints

Require a visible leakage diagram, a sampling/segment decision, a prohibited-use clause, and a correction after discovering duplicated seller labels across development and evaluation.

## Manuscript prohibitions

Do not call labels ground truth without qualification, equate schema validity with representativeness, or infer current commercial-system performance from historical demographic studies.
