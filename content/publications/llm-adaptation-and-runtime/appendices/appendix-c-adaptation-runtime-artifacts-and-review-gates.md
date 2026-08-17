# Appendix C - Adaptation and Runtime Artifacts and Review Gates

These templates summarize the Mosaic dossier from `MD-09` through `MD-16`. They are starting points for review, not universal forms, controls, approvals, or compliance evidence.

## MD-09 - Adaptation gate

Record:

- inherited behavior contract, baseline, evaluation, budgets, release state, and unresolved defects;
- new residual population, repeated evidence, first divergent layer, and alternative explanations;
- falsifiable adaptation hypothesis, expected target, protected behavior, rejection rules, and stop conditions;
- immutable model/tokenizer/template/runtime candidate tuple;
- compatibility results and blockers;
- intervention ladder from no-change and system repair through weight change and replacement;
- access, reversibility, resources, rights, specialists, owners, and authority;
- disposition: reject, investigate, data-plan-only, or training review.

Gate: training cannot begin while the residual is not stable, smaller interventions are untested, the artifact tuple is incompatible, or required authority is absent.

## MD-10 - Data recipe and separation

Record:

- example unit, population, source, purpose, rights, privacy class, retention, deletion, and owner;
- target and protected segment balance;
- inclusion, exclusion, quality, normalization, and rejection rules;
- transforms with code/config identities;
- exact and near-duplicate families;
- train, development, evaluation, retention, and control split manifests;
- overlap checks, inaccessible overlap, contamination limitations, and freeze/refresh policy;
- accepted and rejected counts with reasons;
- disposition and unresolved data authority.

Gate: a recipe can pass mechanically while the data remain insufficient, unrepresentative, unauthorized, or blocked.

## MD-11 - Instruction, preference, and protected evidence

Instruction record:

- behavior clause and source evidence;
- input, authorized context, expected output or terminal state;
- tokenizer/template render identity;
- target and loss-mask regions;
- language, domain, consequence, evidence state, and difficulty tags;
- reviewer, checks, limitations, and split assignment.

Preference record:

- admissible candidates and criterion-specific comparison;
- randomized display order and length/style controls;
- rater qualification, independence, disagreement, and adjudication;
- source evidence and privacy handling;
- known shortcut and coupling risks.

Protected suite:

- target, retention, language, abstention, escalation, safety, permission, citation, schema, and satellite-case lanes;
- deterministic, human, domain, model-judge, or authority method for each claim;
- hard gate versus diagnostic measure;
- owner and change trigger.

Gate: learning data do not become training-ready while rendering, rights, coverage, or protected evidence remain blocked.

## MD-12 - Training and candidate comparison

Run card:

- question, baseline, intervention, and alternative explanations;
- exact model-system and dataset identities;
- objective, optimizer, schedule, precision, seeds, batch/packing, checkpoints, logging, resources, and recovery;
- smoke, stop, evaluation, and promotion gates;
- executed versus planned state.

Candidate matrix:

| Lane | No tune | SFT | PEFT | Required disposition |
| --- | --- | --- | --- | --- |
| diagnosed target | observation | observation | observation | minimum gain or reject |
| retention | observation | observation | observation | no prohibited regression |
| language segments | observation | observation | observation | segment gates preserved |
| controls | observation | observation | observation | all hard gates pass |
| compatibility | observation | observation | observation | exact tuple passes |
| resources | observation | observation | observation | within declared envelope |

Gate: loss improvement, trainable-parameter count, or one aggregate score cannot promote a candidate.

## MD-13 - Preference and advanced-method decision

Record:

- residuals after the smallest credible candidate;
- whether preference evidence adds a distinct criterion;
- data bias, judge/rater coupling, reference behavior, and protected evaluation;
- distillation teacher/student thesis, transfer artifact, rights, costs, and failure modes;
- continued-pretraining corpus thesis, tokenizer/domain evidence, contamination, rights, compute, and forgetting risks;
- system repair or replacement alternatives;
- execution state, rejected methods, limitations, and next trigger.

Gate: method sophistication is not evidence. Reject any method whose mechanism does not match a distinct residual.

## MD-14 - Model-system package

Inventory:

- weights, tokenizer, template, adapter, schema, defaults, runtime, precision/quantization, controls, and routing;
- content identities, lineage, licenses, notices, and provenance;
- required versus present state;
- integrity and compatibility results;
- target, retention, control, and resource evidence;
- security, privacy, platform, product/domain, and release review references;
- limitations, promotion state, fallback, and complete rollback tuple.

Gate: missing artifacts remain missing. A valid hash with an incompatible tuple blocks before load.

## MD-15 - Inference and serving envelope

Workload card:

- input and output token distributions;
- concurrency, arrival pattern, burst and queue assumptions;
- prefill and decode timing;
- weight, KV, activation, allocator, and overhead boundaries;
- batch, cache, routing, parallelism, and loading configuration;
- latency percentiles, throughput, error, saturation, and degradation behavior;
- target, retention, language, and control replay for every serving variant;
- hardware, runtime, measurement window, warmup, and exclusions.

Frontier record:

- candidate variants and exact tuple identities;
- behavior and resource observations with uncertainty;
- dominated and rejected candidates;
- fallback ladder and expiry trigger;
- specialist owner and capacity limitation.

Gate: a fast aggregate cannot erase a protected regression or unsupported tail/capacity claim.

## MD-16 - Release, incident, and change record

Readiness packet:

- complete dossier index and digests;
- current package and serving tuple;
- passed, failed, missing, and expired gates;
- intended cohort, exclusions, exposure, signals, stop triggers, fallback, rollback, owner, and authority;
- explicit go, conditional go, reduce scope, delay, or hold disposition.

Incident/change record:

- detected symptom, affected version and segment, first safe action, and authority;
- privacy-minimized timeline of confirmed facts, unknowns, hypotheses, and evidence requests;
- layered diagnosis across task, data, retrieval, prompt/template, tokenizer/model, validation, evaluator, runtime, capacity, product, and observation;
- containment, rollback or roll-forward, reconciliation, and recovery evidence;
- checkpoint/tokenizer/runtime migration replay;
- durable changes to evaluation, controls, card, monitoring, ownership, and limitations.

Gate: a reconstructed dossier can correctly end in hold. No artifact or engineer approves itself.

## Review order

Use this order so downstream work cannot hide an upstream gap:

1. behavior and authority contract;
2. residual and causal layer;
3. artifact compatibility;
4. data purpose, rights, population, and separation;
5. experiment identity and execution state;
6. target, retention, language, control, and uncertainty;
7. package integrity and compatibility;
8. workload-specific resource qualification;
9. security, privacy, platform, product/domain, and release gates;
10. exposure, signals, stop, recovery, and change replay.
