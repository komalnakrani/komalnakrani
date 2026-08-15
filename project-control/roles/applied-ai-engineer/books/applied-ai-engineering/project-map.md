# Applied AI Engineering — Capstone Project Map

## Project identity

- **Product:** Patchwork Find
- **Dossier prefix:** `PF`
- **Architecture version:** 1.0.0
- **Data:** deterministic synthetic catalog, query, image-feature, feedback, and incident records only
- **Default execution:** local, provider-neutral, no paid service or secret required

Patchwork Find is one evolving product-behavior dossier, not a sequence of disconnected tutorials. Each milestone changes a release or system decision and preserves earlier evidence, limitations, and superseded assumptions.

## Artifact lifecycle

Every dossier artifact records:

- stable ID, title, semantic version, owner, reviewers, and status;
- question or decision it supports;
- inputs and their versions/provenance;
- observed evidence, inference, and unresolved limitation as separate fields;
- approval or authority boundary where relevant;
- acceptance checks and links to executable evidence;
- superseded-by/change-history links.

The canonical chain is:

`task evidence -> behavior contract -> mechanism/system decision -> task data/context -> implementation -> evaluation -> operational/control evidence -> release -> production learning -> change/reuse decision`

## Milestone map

### PF-01 — Responsibility and task decision

- **Chapters:** 1–2
- **Consumes:** fictional product brief, stakeholder requests, baseline search behavior, synthetic support and query observations.
- **Produces:** Applied AI responsibility charter, adjacent-role boundary memo, user/task model, consequence map, baseline, value hypothesis, evidence log, explicit non-goals.
- **Decision:** whether the repair-part discovery problem is a credible Applied AI responsibility and which user task deserves investigation.
- **Acceptance evidence:** task and user are observable; consequence and baseline are explicit; the hypothesis can fail; FDE, product, data-platform, research, and formal-risk ownership are not absorbed.
- **Failure injection:** leadership asks for a conversational agent before any evidence shows that chat or autonomous action improves part matching.

### PF-02 — Behavior and authority contract

- **Chapter:** 3
- **Consumes:** PF-01 task evidence and consequence map.
- **Produces:** required/allowed/unacceptable behavior, uncertainty and abstention rules, escalation paths, degraded-mode behavior, non-goals, reviewer/authority map, initial evidence obligations.
- **Decision:** what Patchwork Find is permitted to claim or recommend and when it must ask for evidence, seller confirmation, qualified help, or stop.
- **Acceptance evidence:** every high-consequence path has observable behavior and named authority; uncertainty is not converted into persuasive certainty; non-goals protect scope.
- **Failure injection:** a product requirement says “always return the best compatible part,” including cases with missing model identifiers and ambiguous photos.

### PF-03 — Mechanism portfolio and experiment ladder

- **Chapter:** 4
- **Consumes:** PF-01 baseline and PF-02 behavior contract.
- **Produces:** comparison of deterministic filters, lexical/vector retrieval, ranking/classification, multimodal representations, generative explanation, and bounded tool behavior; staged experiment ladder; fallback concept.
- **Decision:** the simplest first mechanism and which capabilities remain conditional.
- **Acceptance evidence:** alternatives are tested against task quality, consequence, data, latency, cost, privacy, operability, and change risk; the initial path works without an LLM.
- **Failure injection:** a multimodal foundation model demo performs impressively on five hand-picked images but has no compatible evidence on long-tail categories.

### PF-04 — Task data and context contract

- **Chapters:** 5–6
- **Consumes:** behavior contract, mechanism decision, synthetic catalog/query generator.
- **Produces:** data card, provenance/licensing and permission map, sampling/segment plan, leakage review, context contract, retrieval/ranking design, freshness policy, grounding trace, empty-evidence behavior.
- **Decision:** whether the available data/context can support the promised behavior and which limitations require scope reduction.
- **Acceptance evidence:** consequential segments and missingness are visible; evaluation cases do not leak into tuning; retrieval respects permissions and freshness; no-evidence behavior is tested.
- **Failure injection:** seller-provided compatibility labels are duplicated across train and evaluation data and systematically favor high-volume sellers.

### PF-05 — Combined system and trust boundary

- **Chapter:** 7
- **Consumes:** PF-02 through PF-04.
- **Produces:** context/container diagrams, learned-versus-deterministic decision map, trust/data/state/authority boundaries, interface catalog, model/provider contract, architecture decision records.
- **Decision:** where each behavior, control, validation, and human decision belongs.
- **Acceptance evidence:** model, application, retrieval, catalog, policy, user interface, human, and runtime failures can be distinguished; sensitive and externally supplied data paths are explicit.
- **Failure injection:** a generated explanation can override a deterministic incompatibility rule because both are returned as untyped text.

### PF-06 — Inspectable production slice

- **Chapter:** 8
- **Consumes:** PF-05 architecture and contracts.
- **Produces:** local runnable query-to-results path, stable schemas, retrieval/ranking adapter, deterministic model/test double, validation, trace IDs, abstention/fallback, feature control, unit/contract/integration tests, repository map.
- **Decision:** whether one end-to-end behavior is real enough to evaluate rather than merely demonstrate.
- **Acceptance evidence:** behavior is reproducible without secrets; invalid outputs cannot bypass validation; controlled failures are observable; effects remain local and reversible.
- **Failure injection:** the ranking adapter times out after a partial result and the UI silently displays unvalidated candidates as compatible.

### PF-07 — Evaluation system

- **Chapters:** 9–11
- **Consumes:** behavior contract, data/context records, running slice, consequence map.
- **Produces:** evaluation-set card, scenario suite, coverage matrix, error taxonomy, severity/detectability model, segment report, criterion rubrics, deterministic checks, calibrated evaluator study, rater guidance, disagreement and limitation records.
- **Decision:** which system claims are supported, which fail, and which require specialist or user judgment.
- **Acceptance evidence:** rare/high-consequence cases are not averaged away; every criterion has a credible judgment method; automated graders are calibrated; contested cases preserve disagreement.
- **Failure injection:** aggregate top-k relevance improves while incompatible recommendations double for an underrepresented appliance category.

### PF-08 — Decision-changing experiments

- **Chapter:** 12
- **Consumes:** mechanism ladder, running slice, PF-07 evaluation system.
- **Produces:** baseline/ablation/paired-comparison plans, versioned runs, uncertainty and segment results, reproducibility record, decision log, regression gate, provisional release disposition.
- **Decision:** retain, revise, reject, or scope a model/system change; whether generated explanations earn inclusion.
- **Acceptance evidence:** hypotheses and stopping criteria precede results; system and model changes are distinguishable; important negative/segment findings remain visible.
- **Failure injection:** an experimenter repeatedly changes evaluator prompts until the preferred provider appears to win.

### PF-09 — Operational quality envelope

- **Chapters:** 13–15
- **Consumes:** running slice, evaluation taxonomy, experiment choice.
- **Produces:** layered failure register, fallback/recovery ladder, latency/capacity/cost budgets, load and degradation results, privacy-safe event/trace schema, signal catalog, feedback path, dashboard and diagnostic runbook design.
- **Decision:** whether Patchwork Find is diagnosable and useful within tail-latency, availability, spend, privacy, and recovery constraints.
- **Acceptance evidence:** user/behavior/context/model/tool/service/cost signals are distinguishable; budgets include tails and segments; traces minimize sensitive data; failure recovery is tested.
- **Failure injection:** overall latency meets the target while image-heavy mobile requests time out and produce ungrounded fallback explanations.

### PF-10 — Responsible control and authorization packet

- **Chapter:** 16
- **Consumes:** behavior/authority contract, architecture, evaluation failures, operational signals.
- **Produces:** threat/harms and misuse model, data-handling record, permissions design, control matrix, adversarial/control tests, human-review procedure, audit record, residual-limitations and approval/escalation packet.
- **Decision:** whether technical controls are implemented and evidenced enough for designated owners to make the release decision.
- **Acceptance evidence:** each control maps objective -> mechanism -> verification -> residual limit -> owner; engineer recommendations do not impersonate legal, security, safety, or business-risk acceptance.
- **Failure injection:** the documentation claims seller-manipulation protection, but the only implementation is an instruction in a generative prompt.

### PF-11 — Bounded release and production learning

- **Chapters:** 17–18
- **Consumes:** PF-07 through PF-10 evidence.
- **Produces:** readiness packet, shadow/internal/cohort plan, feature flags, online-measurement and rollback triggers, go/no-go record, production trace, feedback/metric interpretation, incident timeline, containment, correction, post-incident learning and verification.
- **Decision:** release posture, blast radius, whether to continue/ramp/hold/rollback, and which layer must change after observed failure.
- **Acceptance evidence:** authority and stop triggers are present; online claims connect to task evidence; incident learning changes an artifact, test, control, or operating mechanism.
- **Failure injection:** seller engagement rises after launch because misleading listings learn to mimic compatibility language; aggregate conversion masks increased return reports.

### PF-12 — Change, reuse, and leadership review

- **Chapters:** 19–21
- **Consumes:** complete dossier and a forced provider/model update.
- **Produces:** change inventory, compatibility matrix, shadow/replay comparison, migration/rollback disposition, pattern ledger, reuse proposal, validation/disconfirmation plan, portfolio review, evidence-standard memo, escalation brief, growth plan.
- **Decision:** whether and how to migrate; which mechanisms have earned reuse; how to allocate attention and authority across a small portfolio of AI systems.
- **Acceptance evidence:** the behavior contract and evaluation evidence survive change; new limitations are explicit; reuse cites repeated patterns; leadership communication preserves uncertainty and owner decisions.
- **Failure injection:** the current provider retires a model with four weeks' notice while the proposed replacement improves average relevance, worsens calibrated abstention, and changes cost/latency tails.

## Executable companion shape

The companion remains intentionally small and inspectable. Minimum components:

- deterministic synthetic catalog, query, segment, image-feature, seller, feedback, and incident generators;
- task/behavior contract and dataset/evaluation schemas;
- lexical and simple vector-like retrieval/ranking baselines that run locally;
- pluggable representation/ranking/generative interfaces with deterministic test doubles;
- compatibility-rule and prohibited-claim policy engine;
- context assembler with provenance, freshness, and permission fields;
- structured result/explanation schema with abstention and escalation;
- optional bounded seller-question tool that produces a draft only and requires confirmation;
- event/trace store with configurable redaction and retention simulation;
- evaluation runner, segment/error report, calibrated-evaluator fixture, and regression gate;
- load/cost simulator, failure injection, feature cohort, rollback, incident, and change-replay scripts.

Provider integrations are optional adapters. The default path cannot depend on network access, a paid key, a specific framework, or destructive external effects.

## Assessment modes

Every milestone supports four checks:

1. **Artifact audit:** internal consistency, evidence lineage, limitations, version/change history, and authority boundaries.
2. **Executable check:** deterministic behavior, schemas, tests, evaluation cases, failure injection, signals, and replay.
3. **Decision defense:** explanation of tradeoffs, rejected alternatives, uncertainty, and the next evidence needed.
4. **Contradictory change:** update the dossier and code after new evidence without erasing the previous rationale.

## Final capstone pass condition

The final dossier must prove a coherent and replayable chain:

`observed task -> behavior/authority contract -> mechanism and data/context evidence -> implemented system -> representative evaluation -> operational and control evidence -> bounded release -> production learning -> model/provider change -> evidence-earned reuse decision`

A missing link is an explicit evidence gap. A polished demo, aggregate score, vendor claim, or policy statement cannot substitute for it.
