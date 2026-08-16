# Appendix A - Mathematical and Measurement Refresher

This appendix refreshes the measurement ideas used by the chapters. It aims at decision depth: enough structure to recognize what a number can and cannot support, design a credible review, and know when qualified statistical help is required. It is not a probability or statistics course, and it does not turn synthetic Patchwork results into real-product evidence.

## Begin with the claim, not the formula

Before choosing a metric, write the decision claim in a complete sentence:

> For population P, segment S, behavior version V, observation window W, and method M, evidence E is adequate to support disposition D, subject to limitations L and authority A.

Every symbol matters. A metric calculated on a convenient sample is not automatically evidence about the intended population. A result for text queries is not evidence for image-heavy queries. A mean does not describe a tail. A confidence interval around a biased sample does not repair the bias. A statistically detectable change may be too small or too indirect to change the product decision.

Use a measurement record with at least:

- claim and decision it informs;
- population, inclusion, exclusion, and unit of analysis;
- behavior, data, model, configuration, policy, and evaluator versions;
- outcome and error definitions;
- segments and critical cases;
- sampling and grouping method;
- metric formula and threshold;
- uncertainty method and assumptions;
- observed result, negative evidence, and missing evidence;
- limitation, owner, authority, and next trigger.

## Probability and uncertainty

A probability is defined relative to a model, process, or empirical population. `P(A)` describes the probability of event A under that definition. `P(A | B)` describes the probability of A conditional on B. Reversing the condition changes the question:

```text
P(incompatible | system recommends) != P(system recommends | incompatible)
```

The first quantity asks about harm among recommendations. The second asks whether incompatible cases are detected or exposed. Both may matter, but they have different denominators and consequences.

Use the complement rule when it clarifies a gate:

```text
P(at least one critical error) = 1 - P(no critical error)
```

Do not assume independent trials merely because the records are stored as separate rows. Repeated templates, the same seller, the same user, the same item family, or the same labeling instruction can create correlated outcomes. Group related cases before splitting or estimating uncertainty.

### Aleatoric and epistemic uncertainty

It can be useful to separate two broad uncertainty sources:

- **aleatoric uncertainty:** variation or ambiguity inherent in the observed task, such as a genuinely ambiguous worn-part image;
- **epistemic uncertainty:** uncertainty caused by limited knowledge, coverage, measurement, or model fit, such as an unobserved appliance family.

The boundary is contextual rather than absolute. The engineering response matters more than the label. Inherent ambiguity may require clarification, abstention, or specialist review. Knowledge gaps may require new data, a narrower population, a different mechanism, or a stop. Neither justifies inventing certainty.

## Confusion matrices and consequence

For a binary decision, define the positive class before calculating anything. In a compatibility screen, `positive` might mean `present as compatible`, but a different review may define `positive` as `requires specialist review`. Changing the positive class changes the meaning of every metric.

| Actual / predicted | Predicted positive | Predicted negative |
| --- | --- | --- |
| Actual positive | true positive (TP) | false negative (FN) |
| Actual negative | false positive (FP) | true negative (TN) |

Common rates are:

```text
precision = TP / (TP + FP)
recall = TP / (TP + FN)
specificity = TN / (TN + FP)
false positive rate = FP / (FP + TN)
false negative rate = FN / (FN + TP)
accuracy = (TP + TN) / (TP + FP + FN + TN)
```

No rate carries consequence by itself. If a false compatible recommendation is more serious than a correct abstention, record them as different states. In Chapter 10, Patchwork keeps incompatible, unsupported, stale, permission-denied, overconfident, and correct-abstention behavior separate. A confusion matrix can support that policy only after its labels map to the actual product states.

### Base rates and predictive value

Precision depends on prevalence. A test with stable sensitivity and specificity can have very different precision in populations with different base rates. If critical incompatibility is rare in a convenience sample, a favorable aggregate can hide poor evidence where the error matters.

Always report the denominator and relevant prevalence. If the release population differs from the evaluation population, do not mechanically transfer predictive value. Either reweight with defensible population evidence, resample the target population, or narrow the claim.

### Cost-weighted summaries

A weighted loss can make consequence explicit:

```text
expected loss = sum over error types e of P(e) * consequence_cost(e)
```

This can support comparison, but it is dangerous when consequence costs are invented, incomparable, or used to average away a non-negotiable boundary. Keep hard gates separate. A permission exposure or prohibited autonomous effect should not become acceptable because many low-cost successes offset it numerically.

## Thresholds are operating policies

A score threshold maps a continuous or ordered signal to behavior. Raising a threshold often reduces false positive exposure and increases abstention or false negatives. Lowering it often increases coverage and error exposure. The exact tradeoff depends on score behavior, population, and product states.

Choose a threshold by sweeping plausible values on frozen cases and reporting, for every value:

- coverage and abstention;
- false matches and missed compatible cases;
- critical error count;
- segment-specific precision and recall;
- permission, freshness, and known-incompatibility violations;
- latency, capacity, or cost changes if the threshold changes downstream work;
- unresolved cases and confidence limits.

Do not choose on the release set after examining its outcomes. Do not call the score a probability unless calibration evidence supports that interpretation for the relevant population. Record the threshold as versioned product policy with owner, authority, rationale, limitations, and change trigger.

## Ranking and retrieval measurements

Ranking systems return an ordered list rather than one binary decision. Common measures include:

```text
precision@k = relevant items in top k / k
recall@k = relevant items in top k / all relevant items
reciprocal rank = 1 / rank of first relevant item
DCG@k = sum from i=1 to k of gain_i / log2(i + 1)
nDCG@k = DCG@k / ideal_DCG@k
```

Each requires a relevance definition. `Relevant` may mean textually similar, useful for discovery, evidence-supported, compatible, authorized, fresh, or safe to present. Those are not interchangeable. A retrieval measure can improve while product behavior regresses if unauthorized or stale candidates enter the list, known incompatibilities rank highly, or explanations overstate evidence.

Report ranking measures by task and segment. Preserve empty-result and abstention behavior. State how ties, duplicates, canonical item clusters, missing judgments, and multiple acceptable items are handled. If relevance labels come from assessors, document assessor qualification, guidance, disagreement, and the limits of the labeling process.

## Calibration and reliability

A system is calibrated for a defined event and population when cases assigned a score near `p` experience that event at approximately rate `p`. Calibration is not the same as ranking quality, discrimination, correctness, or usefulness.

A reliability table groups predictions into score ranges and compares average score with observed event rate. An expected calibration error is often written as:

```text
ECE = sum over bins b of (n_b / n) * abs(observed_rate_b - average_score_b)
```

The result depends on binning, sample size, event definition, and population. A low ECE can coexist with serious local miscalibration or weak discrimination. A score may be calibrated overall and unreliable for a critical segment. Report the reliability view, not only a scalar summary.

For language or multimodal outputs, a verbal confidence statement is not automatically a calibrated probability. The system may instead expose an evidence state: sufficient, missing, stale, conflicting, unauthorized, or outside scope. A structured evidence state can be more actionable than an unsupported decimal.

Model-based graders also require calibration, but the event differs. You may measure agreement with adjudicated labels on a blind sample, disagreement by criterion and segment, position or verbosity sensitivity, and failure on stop conditions. Agreement does not establish substantive truth. Keep specialist review and decision authority separate.

## Sampling, grouping, and representativeness

Let the intended population be the set of task events for which the product claim is made. The observed sample is the subset available for evaluation. The two can differ because of logging, access, product exposure, feedback selection, language, geography, device, time, seller participation, or label availability.

Record:

- sampling frame and how a case could enter;
- inclusion and exclusion rules;
- known missing groups;
- unit of analysis;
- clustering or construction groups;
- time window and seasonality;
- segment intersections;
- label availability and missingness;
- whether weights are used and why;
- how the release population may differ.

Random row splitting is unsafe when related records can cross development and evaluation. Group by the unit that carries shared information: user, seller, template, item family, source document, session, time block, or construction lineage. Freeze the release set and hash its identity. Keep evaluator-development examples out of the evidence used to claim evaluator performance.

### Missing data

Missingness is a product state and a measurement problem. Three rough mechanisms are often discussed:

- missing completely at random: missingness is unrelated to observed or unobserved values;
- missing at random conditional on observed values: missingness can be modeled using observed information;
- missing not at random: missingness depends on the unobserved value or a related hidden process.

These labels rely on assumptions that data alone may not verify. In practice, describe why information is missing and how the system behaves. If dimensions are commonly absent for a seller category, dropping those rows can erase the very abstention path the product needs to test.

## Estimates and uncertainty intervals

A point estimate summarizes the observed sample. An interval describes uncertainty under a specified method and assumptions. A frequentist confidence interval is a procedure whose repeated intervals cover the fixed parameter at the stated long-run rate under the model. It is not generally the probability that the fixed parameter lies inside this one observed interval. A Bayesian credible interval describes posterior probability under the prior and likelihood assumptions.

Use the method appropriate to the decision and data-generating process. For proportions, avoid relying blindly on a normal approximation with small samples or rates near zero or one. For clustered data, account for clustering. For paired comparisons, preserve the pairing. For tail latency, use an interval or resampling method suited to quantiles rather than reporting only a mean standard error.

An interval does not address systematic bias, leakage, label error, construct mismatch, unobserved segments, or evaluator invalidity. State those limitations beside the interval.

### Zero observed critical errors

Zero failures in a finite sample does not prove zero failure probability. A simple rough bound sometimes called the rule of three says that with zero observed events in `n` independent trials, an approximate 95 percent upper bound on the event rate is `3/n`. The independence and representativeness assumptions are substantial. Use the result to resist a zero-risk claim, not to manufacture safety evidence.

## Comparing systems and changes

Prefer paired comparisons when the same cases can be evaluated under baseline and candidate. Pairing controls case difficulty and makes regression identity visible. For each case record baseline state, candidate state, segment, consequence, evaluator, and disposition.

Separate:

- primary metric;
- hard guardrails;
- critical segments;
- operational envelope;
- known confounds;
- negative and inconclusive evidence;
- practical importance;
- decision authority.

An average difference can be positive while a critical clause regresses. A confidence interval that excludes zero does not make the effect practically valuable. A result whose interval includes zero may still expose a deterministic prohibited failure. Statistical evidence informs the disposition; it does not replace the product contract.

### Multiple comparisons and peeking

If many metrics, segments, thresholds, or experiments are examined, some favorable results may occur by chance. Predeclare primary decisions and guardrails. Mark exploratory findings as exploratory. Preserve all tested variants and negative results. If sequential monitoring is necessary, use a method and stopping rule designed for it rather than repeatedly applying a fixed-sample threshold.

Chapter 12 uses preregistration to protect the decision from result-driven rewriting. Record the plan hash before the result. If the plan changes, create a new version and explain why.

## Operational distributions

Latency, cost, and capacity are distributions and system relationships, not single constants.

- `p50` describes the median observation.
- `p95` is the value at or below which approximately 95 percent of observations fall under the measurement definition.
- `p99` exposes a more extreme tail but requires more data for stable estimation.

State the percentile method, sample size, time window, traffic mix, cold/warm state, retries, failures, and segment. End-to-end user time may include authorization, retrieval, model work, validation, network, rendering, and optional explanation. Summing component p95 values does not necessarily equal end-to-end p95 because slow components may not coincide and paths may run in parallel.

Capacity depends on arrival rate, concurrency, service time, queueing, retries, fan-out, and shared constraints. A retry can improve one request while amplifying load for everyone. Measure successful, degraded, abstaining, failed, and timed-out paths separately. Keep permission-correct caching and freshness semantics inside the performance claim.

## Worked synthetic decision

Suppose a Patchwork candidate ranker improves recall@5 from 0.78 to 0.84 on sixteen frozen synthetic cases. Two facts prevent an adoption claim:

1. one incompatible long-tail case moves from abstain to presented candidate;
2. the image-heavy segment is absent from the suite.

The proper record is not `candidate wins by six points`. It is:

- aggregate recall: improved on the frozen synthetic suite;
- critical compatibility behavior: regressed on one long-tail case;
- image-heavy behavior: unknown and unsupported;
- population inference: prohibited because the set is small and constructed;
- operational effect: unmeasured unless the paired run includes latency and cost;
- disposition: reject or revise for the claimed scope; a narrower experiment may be proposed;
- authority: named product/domain/release owners decide exposure after receiving the evidence.

The example demonstrates why measurement begins with consequence and ends with disposition.

## Measurement review checklist

Before accepting a number, ask:

1. What exact claim and decision does it support?
2. What is the numerator, denominator, unit, population, segment, and time window?
3. Which behavior/data/model/configuration/evaluator versions produced it?
4. How were cases sampled, grouped, labeled, split, and frozen?
5. Which failures can the metric hide?
6. Are hard gates reported separately from averages or weighted summaries?
7. Does the uncertainty method match the design and dependence structure?
8. What bias, leakage, missingness, or construct mismatch remains?
9. Is the effect practically consequential?
10. What evidence would disconfirm or narrow the result?
11. Who owns the metric, and who holds the decision authority?
12. What is the next trigger for refresh, escalation, or retirement?

If these questions cannot be answered, the appropriate state is `gap`, `unknown`, or `untestable`, not a more impressive decimal.
