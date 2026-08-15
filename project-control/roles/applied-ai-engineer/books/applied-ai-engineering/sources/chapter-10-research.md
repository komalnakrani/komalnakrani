# Chapter 10 Research — Name the Errors That Matter

## Architecture anchors

- Primary domains: `AAE-K01`, `AAE-K06`, `AAE-K08`
- Dossier milestone: `PF-07`
- Forecast figures: `F10.1`, `F10.2`

## Research question

How should errors be classified by consequence, detectability, segment, uncertainty, control, and release implication instead of collapsed into one quality score?

## Claim and evidence map

- **C10.1 — Metric choice depends on task type and error meaning.** `AAE-S023` distinguishes classification, ranking, regression, clustering, and related measures; product consequence selects among them.
- **C10.2 — Confidence and correctness are different properties.** `AAE-S024` supports calibration measurement; `AAE-S025` supports risk-coverage decisions through abstention.
- **C10.3 — Multiple evaluation dimensions can conflict.** `AAE-S026` provides multi-metric benchmark evidence; no single scalar should erase safety, fairness, robustness, efficiency, or segment findings.
- **C10.4 — Aggregate performance can hide intersectional and demographic disparities.** `AAE-S049` and `AAE-S050` support explicit segments and both error directions with strict context limits.
- **C10.5 — Model-based evaluators have positional, verbosity, and self-related biases in studied settings.** `AAE-S027` supports known judge limitations; `AAE-S029` supplies current implementation guidance requiring tests.
- **C10.6 — Product feedback can reward the wrong behavior.** `AAE-S046` and `AAE-S053` illustrate short-term feedback and engagement-proxy blind spots.

## Error-record fields

Category, behavior clause, consequence, affected user/segment, frequency evidence, severity, detectability, reversibility, confidence/calibration, root layer, existing control, residual risk, evaluator, uncertainty, and release disposition.

## Cases

- `AAE-C001` requires a new taxonomy category after qualitative warnings.
- `AAE-C003` separates relevance, engagement, conversion, and exposure effects.
- `AAE-C006` and `AAE-C011` prevent aggregate accuracy from closing segment questions.
- `AAE-C012` distinguishes irrelevant, incompatible, unsupported, stale, overconfident, and correctly abstained results.

## Disputes and limits

Severity and acceptable rates are socio-technical decisions involving product, domain, safety, legal, and business authorities. Calibration may vary after shift. A confusion matrix describes outcomes at a threshold but does not choose the threshold.

## Remaining gaps

No release-blocking gap. Patchwork severity levels and release thresholds remain fictional case policy to define and label in Phase 07.

## Blueprint constraints

Include a threshold decision where aggregate relevance improves but one high-consequence segment worsens. Require a disposition, not just a chart.

## Manuscript prohibitions

Do not maximize F1/AUC/relevance by default, label a model “fair” or “safe” from one metric, or convert uncalibrated confidence into user-facing probability.
