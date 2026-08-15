# Applied AI Engineering — Visual Forecast

## Visual policy

Use a figure only when spatial form materially improves a boundary, sequence, comparison, state change, evidence relationship, tradeoff, or diagnostic path. Decorative AI imagery, screenshots of fashionable tools, model-brand collages, and diagrams that merely restate a list are prohibited.

Every final figure must:

- have a unique ID, descriptive caption, text alternative, long-description disposition, and source/provenance record;
- remain legible in grayscale on an A4/Letter page and at typical web reading width;
- use consistent tokens for observed evidence, inference, decision, model, deterministic component, data/context, user/human authority, control, risk, and outcome;
- not encode essential meaning only with color, line position, or unexplained iconography;
- use fictional/synthetic data unless a licensed primary source explicitly supports reproduction;
- identify the chapter claim, learning decision, and `PF-*` artifact it supports;
- never copy an employer diagram, inherited site asset, or another Komal role's figure architecture.

## Visual grammar

- **User or accountable human:** rounded capsule with explicit role label
- **Learned model/component:** rounded rectangle with dotted inner boundary
- **Deterministic software/policy:** squared rectangle with solid inner boundary
- **Data/context/evidence artifact:** document, table, or cylinder shape as appropriate
- **Decision:** diamond with named owner or automated rule
- **Control/gate:** transverse bar or shield marker with verification link
- **Risk/failure:** warning marker plus consequence label
- **Observed evidence:** solid line/container
- **Inference or assumption:** dashed line/container
- **Allowed flow:** solid directional arrow
- **Feedback/learning:** curved return arrow
- **Blocked/abstained flow:** terminated line with reason
- **Version change:** paired before/after state with replay path

## Planned figures

| ID | Ch. | Form | Working caption / concept | Decision or understanding enabled | Dossier relationship |
| --- | ---: | --- | --- | --- | --- |
| F01.1 | 1 | system boundary | Product behavior surrounds—but is not equal to—the model | Separates component capability from complete user-visible accountability | PF-01 responsibility charter |
| F01.2 | 1 | recursive loop | The applied-AI evidence loop and its return paths | Shows why build, evaluation, operation, and change revise earlier assumptions | Full PF chain |
| F02.1 | 2 | task anatomy | User, trigger, context, decision/action, consequence, baseline, and evidence | Prevents vague “use case” descriptions from hiding the actual task | PF-01 task brief |
| F02.2 | 2 | hypothesis tree | User value, behavior, adoption, operational, and business assumptions | Selects which uncertainty to test before choosing a model | PF-01 value hypothesis |
| F03.1 | 3 | state model | Required, allowed, uncertain, abstaining, escalating, degraded, and prohibited behavior | Makes behavior clauses mutually legible and testable | PF-02 behavior contract |
| F03.2 | 3 | authority map | System recommendation, human review, domain decision, and formal authorization | Distinguishes review activity from decision rights | PF-02 authority map |
| F04.1 | 4 | decision ladder | Rules, search, ranking, predictive model, generation, bounded agent, and hybrid | Selects the least complex adequate mechanism | PF-03 mechanism record |
| F04.2 | 4 | tradeoff frontier | Quality, consequence, latency, cost, privacy, operability, and change risk | Replaces “best model” with constraint-aware selection | PF-03 experiment ladder |
| F05.1 | 5 | dataset composition | Population, observed sample, labels, segments, missingness, and exclusions | Reveals whose task behavior the data can and cannot represent | PF-04 data card |
| F05.2 | 5 | leakage map | Training, tuning, evaluator development, evaluation, and production feedback paths | Detects direct and indirect contamination | PF-04 leakage review |
| F06.1 | 6 | retrieval pipeline | Input transformation through candidates, ranking, permissions, context, and provenance | Locates relevance and grounding failure before blaming the model | PF-04 context contract |
| F06.2 | 6 | empty/stale state tree | Sufficient, conflicting, stale, unauthorized, and absent evidence behaviors | Forces explicit context failure and abstention behavior | PF-04 grounding trace |
| F07.1 | 7 | layered architecture | User/interface, application, policy, context, learned component, tools, and runtime | Separates responsibilities and failure propagation across the combined system | PF-05 architecture |
| F07.2 | 7 | trust/state boundary | Data, identity, state, tool effects, owners, and authority across boundaries | Exposes where controls and validation must live | PF-05 boundary set |
| F08.1 | 8 | vertical trace | One Patchwork query across schema, retrieval, rules, ranker, explanation, UI, and telemetry | Defines inspectable end-to-end production behavior | PF-06 running slice |
| F08.2 | 8 | structured-result anatomy | Candidate, evidence, confidence/uncertainty, incompatibility, explanation, and escalation fields | Prevents untyped model text from becoming product authority | PF-06 schemas |
| F09.1 | 9 | coverage matrix | Behavior clauses by segment, normal/edge/adversarial case, and data condition | Shows where an evaluation set supports or misses a claim | PF-07 coverage matrix |
| F09.2 | 9 | dataset lifecycle | Source/provenance to sampling, annotation, split, freeze, refresh, and retirement | Makes evaluation cases versioned engineering assets | PF-07 evaluation-set card |
| F10.1 | 10 | error topology | Failure category linked to consequence, detectability, segment, control, and disposition | Moves diagnosis beyond one aggregate metric | PF-07 error taxonomy |
| F10.2 | 10 | threshold surface | False-match, abstention, coverage, and segment consequence tradeoffs | Selects thresholds with visible costs rather than a universal optimum | PF-07 threshold record |
| F11.1 | 11 | judgment stack | Deterministic assertion, reference comparison, model grader, user/rater, specialist, and authority | Assigns each claim to the cheapest credible evaluator | PF-07 evaluator design |
| F11.2 | 11 | calibration flow | Sample, blind judgment, disagreement, adjudication, grader comparison, and limitation | Shows how automated evaluation earns bounded trust | PF-07 calibration study |
| F12.1 | 12 | experiment graph | Baseline, ablation, paired change, confound, segment result, and decision | Distinguishes decision-changing experiments from metric collection | PF-08 experiment packet |
| F12.2 | 12 | evidence-to-disposition | Results and uncertainty entering retain/revise/reject/scope/release decisions | Forces explicit action from experimental evidence | PF-08 decision log |
| F13.1 | 13 | failure matrix | Model, data/context, tool, orchestration, interface, dependency, and user-state failures | Prevents every symptom from being treated as a prompt/model problem | PF-09 failure register |
| F13.2 | 13 | fallback ladder | Retry, alternate path, reduced capability, abstain, human review, and stop | Selects safe degradation by consequence and state | PF-09 fallback/recovery plan |
| F14.1 | 14 | end-to-end budget | User-time budget decomposed across product, retrieval, model, tools, and network tails | Shows where latency optimization matters to the task | PF-09 budget model |
| F14.2 | 14 | quality-cost-capacity frontier | Configurations plotted with tail latency, spend, capacity, and quality/segment bounds | Makes operational tradeoffs explicit and testable | PF-09 load/cost experiment |
| F15.1 | 15 | signal lattice | User outcome, product use, behavior, context, model, tool, service, and cost signals | Separates usefulness from system health and model score | PF-09 signal catalog |
| F15.2 | 15 | privacy-aware trace | Raw event to minimization, redaction, access, retention, aggregation, and diagnostic view | Designs observability without default content surveillance | PF-09 trace schema |
| F16.1 | 16 | evidence chain | Threat/harm -> objective -> implementation -> test -> residual limit -> authority | Distinguishes a control from documentation or prompt instruction | PF-10 control matrix |
| F16.2 | 16 | bounded tool sequence | Intent, permission, proposed effect, validation, confirmation, execution, audit, recovery | Makes generative tool use safe and inspectable | PF-10 tool/human control |
| F17.1 | 17 | rollout comparison | Offline, shadow, internal, canary, cohort, region, and broad release | Selects the smallest production exposure that answers the next question | PF-11 rollout plan |
| F17.2 | 17 | readiness gate | Behavior, evaluation, operational, control, owner, and rollback evidence entering disposition | Prevents launch review from becoming checklist theater | PF-11 readiness packet |
| F18.1 | 18 | layered diagnostic tree | User symptom traced through product, data/context, model, tool, control, and runtime evidence | Identifies the responsible layer before changing code/model | PF-11 diagnostic trace |
| F18.2 | 18 | incident learning loop | Detection, containment, authority, correction, verification, artifact update, and monitoring | Connects incident response to durable system change | PF-11 incident record |
| F19.1 | 19 | compatibility matrix | Behavior clauses and operational budgets compared across current and candidate versions | Reveals regressions hidden by aggregate provider benchmarks | PF-12 compatibility matrix |
| F19.2 | 19 | migration state machine | Inventory, shadow, replay, bounded cohort, rollback, ramp, and retirement | Makes provider/model change a controlled release | PF-12 migration disposition |
| F20.1 | 20 | reuse ladder | Local fix, repeated pattern, configurable component, shared service, and platform candidate | Establishes evidence thresholds for abstraction | PF-12 pattern ledger |
| F20.2 | 20 | portability seam map | Stable behavior/eval contracts around provider, context, policy, and runtime adapters | Shows what reuse can preserve and what must remain system-specific | PF-12 reuse proposal |
| F21.1 | 21 | portfolio evidence map | Systems plotted by consequence, evidence gap, change exposure, operational burden, and leverage | Allocates senior engineering attention without relying on hype or revenue alone | PF-12 portfolio review |
| F21.2 | 21 | decision-altitude stack | Implementation, system, product, portfolio, specialist, and formal-authority decisions | Communicates evidence upward while preserving owner boundaries | PF-12 leadership packet |

## Figure count and balance

- 42 planned figures: two per chapter.
- 0 decorative illustrations in the technical body.
- Forms include boundary/system maps, recursive loops, state models, matrices, decision ladders, pipelines, traces, tradeoff frontiers, timelines, and diagnostic trees.
- At least 20 figures directly instantiate Patchwork Find; all transferable figures must also withstand at least one satellite-case test.
- At least six figures make non-generative or model-family-neutral decisions visible; agent-specific content is limited to bounded tool/action cases.
- Exact comparisons and mappings remain tables when spatial encoding would reduce precision.

## Creation order

1. Draft a low-fidelity evidence sketch during each chapter research pack.
2. Validate the sketch against the claim, decision, competency domain, and `PF-*` artifact.
3. Revise after blueprint and manuscript logic stabilizes; do not use artwork to conceal an unresolved claim.
4. Create the final canonical vector/source figure through a deterministic or inspectable process.
5. Export web and print variants from the same canonical source.
6. Run label, contrast, grayscale, small-size, reading-order, alt-text, long-description, and PDF-render checks.
7. Record versions, source hashes, export hashes, provenance, reviewer, and QA disposition.

## Phase 10 handoff fields

Each final figure record must include:

- figure ID, semantic version, title, chapter, and insertion anchor;
- diagram form, dimensions/viewBox, canonical editable source, and generation method;
- web/print/publication paths and cryptographic hashes;
- caption, short alternative, and long-description disposition/content;
- supported claim IDs, competency domains, and `PF-*` artifacts;
- data/source provenance and synthetic-data seed where applicable;
- model/provider/tool disclosure if an external generation step is used;
- reviewer, evidence QA, visual QA, accessibility, grayscale, and publication status.
