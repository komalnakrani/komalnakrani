# LLM Engineering — Mosaic Desk Project Map

## Project contract

Mosaic Desk is a fictional multilingual evidence-grounded case-resolution assistant for an appliance service network. It proposes a structured case summary and next step from synthetic customer descriptions, technician notes, manuals, service bulletins, warranty terms, and parts metadata. It cites evidence, exposes uncertainty/conflict, and abstains or escalates. Humans retain warranty authorization and safety-critical repair decisions.

The project is intentionally not a generic chatbot and not an autonomous agent. A bounded follow-up-question feature may draft text but cannot contact a customer, order a part, approve warranty work, or alter a system of record.

All data is original/synthetic and versioned. No real customer, technician, health, payment, or commercial data enters the companion.

## Dossier invariant

Every milestone must preserve:

- exact artifact/version identity;
- source/provenance and permissions where relevant;
- behavior clause and publication-domain mapping;
- assumptions and limitations;
- executable or reviewable verification;
- decision and accountable owner;
- change history rather than overwritten rationale.

## Volume 1 milestones

### MD-01 — Responsibility, task, behavior, and authority

- **Chapters:** V1 Ch. 1–2
- **Consumes:** fictional service workflow, user/downstream-system map, baseline process, safety/warranty authority constraints.
- **Produces:** responsibility charter, language-task brief, input/output and consequence model, required/allowed/uncertain/abstaining/escalating/degraded/prohibited behavior, non-goals, authority/escalation map, evidence-ledger skeleton.
- **Decision:** whether the task is specific enough for an LLM experiment and what the model system may only propose.
- **Acceptance evidence:** every output field and consequential claim has a criterion and owner; “helpful,” “accurate,” and “safe” do not appear without operational definitions.
- **Failure injection:** a stakeholder asks the assistant to approve warranties because it can “read the policy better than people.”
- **Boundary test:** product owns priority; domain authority owns warranty/safety decisions; the LLM engineer owns behavior evidence and technical escalation paths.

### MD-02 — Mechanism and access posture

- **Chapters:** V1 Ch. 3–4
- **Consumes:** MD-01 behavior contract, representative seed cases, data/privacy/control constraints, response-time and cost assumptions.
- **Produces:** token/attention/generation consequence sheet, initial model comparison, managed/hosted/open-weight/hybrid posture analysis, model/access decision, migration seam, rejected alternatives.
- **Decision:** initial model-system path and what can be inspected, changed, logged, or hosted.
- **Acceptance evidence:** decision uses Mosaic cases and constraints; public leaderboard rank is not sufficient; access/control limits are explicit.
- **Failure injection:** the highest-scoring model cannot meet data residency or structured-output constraints.

### MD-03 — Reproducible baseline and typed boundary

- **Chapters:** V1 Ch. 5–7
- **Consumes:** chosen posture, MD-01 contract, seed cases.
- **Produces:** provider-neutral request/response/error interfaces, exact model/config identity, message/prompt template, decoding configuration, deterministic fixture, structured proposal schema, validator, uncertainty/citation fields, fallback table, baseline run.
- **Decision:** whether the baseline is reproducible enough to diagnose and whether free-form output can be excluded from consequential paths.
- **Acceptance evidence:** success, invalid output, timeout, provider/auth failure, abstention, and escalation run without unhandled ambiguity; test defaults require no secret.
- **Failure injection:** superficially fluent output omits the source ID and invents an authorization field.

### MD-04 — Context budget and failure behavior

- **Chapters:** V1 Ch. 8
- **Consumes:** MD-03 baseline, synthetic conversation/history/manual inputs.
- **Produces:** context-source inventory, token budget, selection/ordering/compression policy, truncation tests, conflicting/oversized/absent/unauthorized-context behavior, state boundary.
- **Decision:** what context belongs in each request and when the system must reduce capability, ask, abstain, or escalate.
- **Acceptance evidence:** essential evidence is not silently truncated; context selection and omissions appear in the trace; long context is tested rather than assumed.
- **Failure injection:** a long technician thread pushes the current safety bulletin out of the context window.

### MD-05 — Authorized retrieval and provenance path

- **Chapters:** V1 Ch. 9–11
- **Consumes:** behavior/context contracts, synthetic corpus, permissions/freshness metadata.
- **Produces:** retrieval problem statement, source/authority map, corpus card, ingestion/chunking configuration, candidate/retrieval/reranking interface, metadata filters, context assembler, source/citation/provenance trace, empty/stale/conflicting-evidence behavior.
- **Decision:** whether retrieval improves the defined task, and which retrieval path earns use.
- **Acceptance evidence:** retrieval and generation can be measured separately; unauthorized and superseded bulletins are excluded; citation targets are valid; no-evidence behavior is explicit.
- **Failure injection:** lexical retrieval finds the right part number in a revoked bulletin while vector retrieval returns a semantically similar but wrong appliance family.

### MD-06 — Representative joint evaluation

- **Chapters:** V1 Ch. 12–14
- **Consumes:** MD-01 clauses, MD-03 baseline, MD-05 retrieval path.
- **Produces:** evaluation-set card, provenance and split manifest, clause/segment/condition coverage matrix, rare/adversarial/multilingual cases, retrieval and generation criteria, error taxonomy with severity/detectability, deterministic checks, references, model-grader specification/calibration, rater/domain guide, disagreement and limitation log.
- **Decision:** which behavior claims are supported, unsupported, or require domain/specialist judgment.
- **Acceptance evidence:** no aggregate score hides appliance-family, language, safety, or evidence-conflict failures; graders are calibrated against independent human/domain judgments where used.
- **Failure injection:** average citation precision improves while a low-resource-language segment receives unsupported warranty statements.

### MD-07 — Decision-changing experiments

- **Chapters:** V1 Ch. 15
- **Consumes:** frozen MD-06 evaluation, context/retrieval/baseline configurations.
- **Produces:** hypotheses, baselines, ablations, paired and repeated trials, segment/error results, confound and reproducibility record, cost/latency measurements, decision log, regression gate.
- **Decision:** retain, revise, reject, or scope prompt, context, retrieval, reranking, decoding, or model changes.
- **Acceptance evidence:** one variable family changes per causal claim; stopping and disposition criteria precede results; negative findings remain visible.
- **Failure injection:** prompt, reranker, model, and judge are changed together and the preferred model is credited for all improvement.

### MD-08 — Production release, provider change, and adaptation handoff

- **Chapters:** V1 Ch. 16
- **Consumes:** complete MD-01–MD-07 dossier.
- **Produces:** production service adapter, reliability/latency/cost budgets, privacy-minimized trace and signal catalog, threat/control matrix, readiness packet, internal/shadow/cohort plan, rollback triggers, incident trace, provider/model compatibility matrix, migration replay, changed limitations, adaptation handoff.
- **Decision:** release posture; provider migration disposition; whether a residual failure is stable, valuable, data-supported, and adaptation-sensitive enough for Volume 2.
- **Acceptance evidence:** the system succeeds, abstains, degrades, and fails safely; control claims have tests; the provider change replays behavior evidence; adaptation is rejected until new evidence clears its gate.
- **Failure injection:** provider retirement plus a replacement that improves English formatting but worsens Gujarati evidence citation and tail latency.

## Volume 2 milestones

### MD-09 — Adaptation hypothesis and model/tokenizer inspection

- **Chapters:** V2 Ch. 1–3
- **Consumes:** frozen MD-08 handoff and new repeated failures involving domain shorthand and structured multilingual output.
- **Produces:** handoff audit, exact baseline identity, target/retention/control/resource criteria, model/tokenizer surface inspection, intervention ladder, disconfirmation and stopping criteria, access/resource budget.
- **Decision:** whether to run no-tune repair, SFT, PEFT, preference optimization, distillation, continued pretraining, model replacement, or no project.
- **Acceptance evidence:** the hypothesized failure is not better explained by task/context/retrieval/schema/grader defects; success and forbidden regressions are explicit.
- **Failure injection:** examples reveal that half the “model failures” are malformed upstream language codes.

### MD-10 — Data recipe and separation

- **Chapters:** V2 Ch. 4–5
- **Consumes:** MD-09 hypothesis, authorized synthetic source records, frozen evaluation assets.
- **Produces:** example schema, source/rights/provenance rules, language/domain balance, inclusion/exclusion/quality rules, generation/review process, normalization, hashes, deduplication and near-duplicate report, train/development/evaluation/retention split manifest, contamination review, dataset card.
- **Decision:** whether the available data can support the adaptation claim without compromising evaluation or controls.
- **Acceptance evidence:** another engineer can reproduce the dataset; overlap and excluded data are reported; convenience sampling does not erase protected segments.
- **Failure injection:** templated synthetic examples create near-duplicates across train and evaluation splits.

### MD-11 — Instruction, preference, and retention datasets

- **Chapters:** V2 Ch. 6–8
- **Consumes:** MD-10 recipe/splits, behavior contract, error taxonomy.
- **Produces:** instruction/demonstration data, negative/abstention cases, preference pairs/rubrics/rater evidence where justified, multilingual balance report, protected capability/control/segment retention suite.
- **Decision:** which learning signal corresponds to each diagnosed error and which candidate adaptations are now testable.
- **Acceptance evidence:** formatting, verbosity, and annotator preference are not mistaken for correctness; protected failures are release-blocking; data limitations are explicit.
- **Failure injection:** preference raters consistently favor longer answers even when concise answers cite stronger evidence.

### MD-12 — Reproducible SFT and PEFT experiments

- **Chapters:** V2 Ch. 9–11
- **Consumes:** MD-09 experiment ladder, MD-10/11 data, frozen V1/V2 evaluation.
- **Produces:** training run manifests, seeds/configs/precision, checkpoints/adapters, resource logs, failure recovery, learning curves, no-tune/full-or-selective/PEFT comparisons, target/retention/segment/control results, inference/storage consequences, selection/rejection report.
- **Decision:** whether any adaptation earns promotion to a release candidate.
- **Acceptance evidence:** lower loss is not treated as sufficient; model/checkpoint/tokenizer/adapter identities are complete; gains survive held-out and protected suites; resource costs are reported.
- **Failure injection:** the highest target score comes from a checkpoint that regresses abstention and increases malformed citations.

### MD-13 — Advanced-method rejection or pilot

- **Chapters:** V2 Ch. 12–13
- **Consumes:** MD-12 evidence and remaining error categories.
- **Produces:** preference-method experiment or explicit rejection; distillation/continued-pretraining decision; if justified, bounded pilot with teacher/source identity, objective, data, costs, target/retention/control results, limitations.
- **Decision:** whether an advanced intervention adds distinct value beyond the selected SFT/PEFT/no-tune path.
- **Acceptance evidence:** at least one fashionable method is rejected with evidence; a pilot cannot bypass the baseline and protected suite.
- **Failure injection:** preference optimization raises a model-grader score because the grader shares the same verbosity bias as the training data.

### MD-14 — Model-system packaging

- **Chapters:** V2 Ch. 14
- **Consumes:** selected candidate and complete lineage.
- **Produces:** model/checkpoint/tokenizer/adapter/runtime/config inventory, artifact format, hashes/signatures, license/provenance record, model-change card, stable request/response compatibility results, promotion state, rollback artifact.
- **Decision:** whether the candidate is a traceable deployable release artifact, not whether it is approved for production.
- **Acceptance evidence:** every component identity resolves; adapter/base/tokenizer mismatch fails closed; the prior production version remains recoverable.
- **Failure injection:** an adapter loads on a different tokenizer/model revision without an obvious runtime error.

### MD-15 — Inference and serving frontier

- **Chapters:** V2 Ch. 15–16
- **Consumes:** packaged candidates, V1 task budgets, frozen evaluation.
- **Produces:** weight/precision/context/KV/batch/cache memory model, load scenarios, recorded serving traces, quantization/runtime/batching/caching/routing variants, tail latency/throughput/capacity/cost results, complete behavior replay, quality-resource frontier, fallback/degradation ladder, specialist interface.
- **Decision:** serving configuration and boundary between LLM Engineer work and performance/platform ownership.
- **Acceptance evidence:** no performance optimization ships on throughput alone; tails and protected segments are visible; hardware/runtime assumptions are recorded; escalation occurs for kernel/platform changes.
- **Failure injection:** quantization doubles throughput but increases citation-schema errors only on long Gujarati inputs.

### MD-16 — Adapted release, incident, change replay, and leadership review

- **Chapters:** V2 Ch. 17
- **Consumes:** complete series dossier and selected serving configuration.
- **Produces:** release readiness and authority packet, shadow/internal/cohort record, behavior/runtime/privacy/control signals, rollout and rollback triggers, injected incident timeline and containment, correction, verification, checkpoint/tokenizer/runtime change replay, deprecation record, portfolio evidence map, standards/reuse and escalation memo.
- **Decision:** release/ramp/hold/rollback; correction layer; future adaptation/runtime investment; what to standardize and what remains local.
- **Acceptance evidence:** online evidence ties to the contract; model and runtime regressions can be separated; incident learning updates artifacts/tests/controls; formal authorities make formal decisions; leadership preserves uncertainty.
- **Failure injection:** a routine tokenizer/runtime update reduces memory but changes truncation and low-resource-language behavior after a partial rollout.

## Companion verification matrix

| Capability | Deterministic/default verification | Optional live/accelerated evidence | Prohibited shortcut |
| --- | --- | --- | --- |
| Model boundary | scripted model fixture covering success/abstain/invalid/timeout/provider error | one or more explicitly configured provider adapters | paid secret required for tests |
| Retrieval/context | synthetic corpus and fixed lexical/vector-like results | replaceable embedding/reranking adapters | copied proprietary corpus |
| Evaluation | deterministic assertions, recorded outputs/graders, coverage and split checks | calibrated live model grader or domain-rater study | uncalibrated judge as ground truth |
| Adaptation | deterministic run/checkpoint simulator and tiny data transformations | small open-weight SFT/PEFT lab where resources permit | claiming training occurred when only simulated |
| Inference | resource calculator, recorded trace fixtures, replayed quality results | local/remote serving benchmark with hardware record | fabricated throughput or hidden hardware |
| Controls | executable permissions/provenance/schema/redaction/failure tests | specialist review where available | system prompt as proof of control |
| Release/change | feature cohort, compatibility, rollback, incident and migration simulation | bounded live adapter shadowing | broad rollout without evidence/authority |

## Final project pass condition

Mosaic Desk passes only if the complete version chain can be reconstructed and replayed, each behavior claim has credible evidence and limitations, at least one adaptation and one serving optimization are rejected for valid reasons, the selected candidate preserves protected behavior, the default companion remains runnable without secrets or accelerators, and every adjacent specialist/formal authority boundary is explicit.
