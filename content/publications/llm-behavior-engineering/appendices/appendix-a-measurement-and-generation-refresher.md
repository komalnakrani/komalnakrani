# Appendix A - Measurement and Generation Refresher

This appendix refreshes the mechanism and measurement ideas used by Volume 1. It supplies decision depth: enough structure to ask a credible question, identify an invalid comparison, and know when qualified statistical, evaluation, or research help is required. It is not a substitute for a probability, information theory, machine learning, or experimental-design course.

## Start with the claim

Write the intended claim before selecting a metric:

```text
For task T, population P, segment S, behavior version V,
configuration C, method M, and observation window W,
evidence E supports disposition D subject to limitations L
and authority A.
```

Changing any named element can change the meaning of the result. A score on English manual questions is not evidence for Gujarati-English case notes. A result under one message template is not automatically evidence for another. A mean can hide a tail or critical segment. More repeated samples do not repair a biased population or invalid judge.

## Tokens, templates, and context

A tokenizer maps text into discrete token identifiers. Different tokenizers can split the same string differently, and a chat template can add control tokens or separators that change the final sequence. Therefore a character count, word count, or estimate from another model is not the actual context cost.

Record at least:

- tokenizer and template identity;
- message roles and serialization order;
- normalization and truncation rules;
- input, reserved-output, and total token counts;
- omitted or compressed items and their reason;
- model and runtime version that consumed the sequence.

Attention helps representations incorporate other positions, but it is not a factual database, explanation of intent, or proof of causal reasoning. Position, context ordering, conflicting evidence, and truncation can change behavior. Use mechanism knowledge to design tests, not to infer unsupported inner explanations from one response.

## Generation and acceptable variation

At each step, a language model produces scores over possible next tokens. Decoding converts those scores into a path. Greedy, sampled, and constrained decoding can expose different behavior even when the model and prompt are unchanged.

A deterministic seed or temperature setting does not guarantee universal reproducibility. Provider implementations, kernels, model snapshots, concurrency, templates, and hidden service changes can matter. Treat a baseline as a complete configuration and run repeated trials when the production method admits variation.

Do not classify all variation as error. The behavior contract should distinguish:

- semantically equivalent acceptable variation;
- schema or citation failure;
- unsupported claim change;
- protected-language or segment regression;
- correct abstention or escalation;
- prohibited effect or authority transfer.

## Retrieval measures

Retrieval evaluation begins with an answerable question and an eligible evidence set. Candidate relevance is not enough. Permission, freshness, source authority, revision, scope, and qualifying span may exclude a highly similar document.

Common measures include:

```text
recall@k = eligible relevant items retrieved in top k / eligible relevant items
precision@k = eligible relevant items retrieved in top k / k
reciprocal rank = 1 / rank of first eligible relevant item
```

These formulas require a defensible relevance and eligibility judgment. They do not establish that the generated proposal used the evidence correctly. Evaluate candidate formation, filters, reranking, context assembly, answerability, citation support, abstention, and final behavior separately before joining them in an end-to-end case record.

## Classification and consequence

For a binary decision, define the positive class and consequence before calculating rates. Precision, recall, specificity, and false-positive or false-negative rates have different denominators. Predictive value can change with prevalence.

If incompatible, stale, unauthorized, missing, conflicting, and unsupported states have different consequences, do not collapse them into one negative class merely to simplify a metric. Preserve the behavior state and segment that the decision gate actually uses.

## Uncertainty and repeated evidence

An interval quantifies uncertainty under a method and its assumptions. It does not repair leakage, selection bias, label ambiguity, grader coupling, or a changed configuration. A narrow interval around the wrong quantity remains weak evidence.

Group related cases before splitting or estimating uncertainty. Templates, source families, translated variants, users, devices, or repeated records can create dependence. Preserve the raw paired outcomes and segment counts so a reviewer can see whether an aggregate improvement hides a protected regression.

## Evaluator validity

Assign each claim to the cheapest credible judge:

- deterministic checks for parse, schema, exact identity, and referential conditions;
- reference checks where a qualified reference exists;
- model graders for bounded repeatable criteria only after calibration and bias review;
- trained humans for contextual judgments with a guide and disagreement record;
- domain specialists for domain truth;
- accountable authority for formal acceptance, release, or risk decisions.

Agreement is not validity. A grader and rater can share length, style, position, or familiarity bias. Preserve blinded order, anchor cases, disagreement, abstention, and limitations.

## Controlled comparisons

A useful experiment records its hypothesis, rejection conditions, baseline, one named change, frozen controls, cases, segments, repetitions, evaluator, thresholds, stopping rule, confounds, and disposition before results are inspected.

If prompt, retrieval, context, schema, evaluator, model, and runtime all change, the comparison can still test the package, but it cannot support a narrow causal claim about one component. Name the actual unit of change.

## When to stop

Stop or narrow the claim when the population is undefined, a critical segment is absent, the evaluator cannot judge the claim, the baseline cannot be reproduced, leakage cannot be bounded, a protected regression crosses its gate, or the decision authority is missing. Recording `unknown`, `untestable`, `reject`, or `reduced scope` is a valid engineering result.
