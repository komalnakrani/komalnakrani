# Appendix A - Adaptation Measurement and Optimization Refresher

This appendix recalls the concepts used to interpret the volume's decisions. It is not a substitute for foundational study in probability, statistics, linear algebra, optimization, or deep learning. The examples remain synthetic and do not prescribe a real training configuration.

## Begin with a behavior claim

An adaptation claim should identify:

| Field | Question |
| --- | --- |
| contract | which required or prohibited behavior is being tested? |
| baseline | which exact model-system version is the comparator? |
| intervention | what single surface changed? |
| population | which intended cases and segments are represented? |
| measure | which deterministic check, rater, judge, or resource instrument produced the observation? |
| uncertainty | what variation, disagreement, or missing coverage remains? |
| protection | which retention and control cases may not regress? |
| disposition | retain, revise, reject, scope, hold, or send to release review? |

Optimization loss, preference score, benchmark score, and product outcome are different claims. None should silently stand in for another.

## Tokens, examples, and loss regions

A tokenizer maps text to token identifiers under a named revision. The template maps roles and fields to a serialized token sequence. Changing either can alter length, truncation, control tokens, padding, labels, and which positions contribute to the objective.

For supervised next-token training, the usual sequence loss averages negative log probability over selected target positions. A loss mask decides which positions count. The engineering record must preserve tokenizer, template, truncation, padding, special tokens, label construction, loss mask, and denominator. Two runs with different effective target regions are not clean comparators even if both report "training loss."

Perplexity is an exponential transformation of average token loss. It remains tokenizer-, corpus-, and implementation-dependent. It does not directly measure citation validity, abstention, schema compliance, product value, or safety.

## Gradient and optimizer state

Gradient-based optimization estimates a direction that changes parameters to reduce an objective on sampled batches. Learning rate, schedule, optimizer, weight decay, clipping, precision, accumulation, batch order, and random seed all affect the trajectory.

Effective batch size should be stated in the implementation's actual units. A common data-parallel form is:

`examples per device x devices x gradient accumulation steps`

Sequence packing, variable lengths, token-based batching, dropped batches, and distributed reduction semantics can make that shorthand incomplete. Record the measured tokens, examples, updates, and world size rather than trusting one configuration label.

A resumable checkpoint may need weights or adapters, optimizer state, scheduler state, scaler state, random-number-generator state, data cursor, sampler state, and the exact code/config identity. Loading weights alone is not necessarily a faithful resume.

## Full adaptation and parameter-efficient adaptation

Full fine-tuning updates all or a broad set of model parameters. Parameter-efficient methods hold the base fixed and learn a smaller change such as adapters or low-rank matrices. A common low-rank update represents a weight change as the product of two smaller matrices, scaled by a declared factor.

Fewer trainable parameters can reduce some training-memory and storage costs, but it does not prove better behavior, faster inference, merge equivalence, lower operational cost, or compatibility. Rank, scale, dropout, target modules, base revision, tokenizer, template, precision, quantization, merge state, and runtime all belong to the candidate identity.

## Preference objectives

Preference methods learn from comparisons or scores. Their objective is a proxy for the desired behavior, not the behavior contract itself. Pair construction, reference policy, temperature or regularization, position randomization, rater population, criterion wording, disagreement, verbosity/style bias, and judge coupling can change the learned shortcut.

Evaluate a preference candidate with independent target, retention, language, control, and resource evidence. If the same judge defines the pairs and declares success, record the coupling rather than calling the result independent validation.

## Distillation and continued pretraining

Distillation transfers behavior or distributions from a teacher into a student. It introduces teacher limitations, generation or logit identity, filtering, rights, cost, and refresh dependencies. Continued pretraining changes a model on additional unlabeled or weakly structured text. It may target domain representation or language modeling rather than the typed behavior contract.

Neither is "more advanced SFT." Each requires a distinct mechanism hypothesis, data and rights argument, resource envelope, protected evaluation, and rollback plan. Reject the method when the residual is better explained by an interface, retrieval, label, evaluation, or runtime defect.

## Precision, quantization, and numerical comparison

Precision changes storage, arithmetic, memory, speed, numerical stability, and sometimes behavior. Quantization maps values to a lower-precision representation using a declared method and, where relevant, a calibration artifact. "Four bit" is not a complete configuration.

Compare variants on the same model-system tuple, inputs, workload, runtime conditions, and protected evaluation. Exact output equality may be inappropriate for stochastic generation; vague semantic similarity is also insufficient. Predeclare deterministic fields, tolerances, behavioral gates, repeated trials, and adjudication rules.

## Target, retention, and control evidence

Report target gain beside retention and control behavior. Useful lanes include:

- the diagnosed residual and its language or domain segments;
- ordinary in-distribution behavior that should remain stable;
- rare but consequential cases;
- abstention, refusal, escalation, and evidence-conflict states;
- schema, citation, permission, privacy, and safety controls;
- satellite cases that challenge over-specialization;
- resource and compatibility consequences.

An aggregate improvement cannot compensate for a release-blocking protected regression unless the designated authority explicitly changes the contract. The engineer cannot make that trade by renaming the aggregate.

## Repeated evidence and uncertainty

Random seeds, sampling, batch order, non-deterministic kernels, distributed execution, and judge variability can change observations. Repeat the method at the level relevant to the claim and retain the distribution, not only the best run.

A confidence interval or variability band does not repair a biased population, contaminated split, invalid judge, or changed configuration. Uncertainty language should name the source of uncertainty and the population to which the estimate applies.

## Resource measurements

Training and inference resource claims require explicit units and boundaries. Record wall time, device time, peak allocated and reserved memory where applicable, tokens or examples processed, energy or cost method when claimed, storage, checkpoint count, network assumptions, warmup, concurrency, and workload distribution.

The synthetic resource units in the companion demonstrate comparison logic only. They are not GPU measurements, vendor prices, capacity forecasts, or service-level objectives.

## Decision checklist

Before promoting an adaptation result, confirm:

1. the baseline and candidate identities are immutable and comparable;
2. the data population, split, rights, and rendering are reproducible;
3. the intervention and alternative explanations were preregistered;
4. loss and proxy metrics are separated from held-out behavior;
5. target, retention, language, control, compatibility, and resource gates all ran;
6. uncertainty, disagreement, missing coverage, and failed candidates remain visible;
7. the artifact exists and its lineage is verified;
8. the runtime envelope matches the intended workload;
9. rollback restores a complete prior model system;
10. formal owners, specialist reviews, and release authority remain separate.
