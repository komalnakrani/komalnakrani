# Applied AI Engineering

## Book identity

- **Title:** *Applied AI Engineering*
- **Subtitle:** *From Model Capability to Dependable Product Behavior*
- **Canonical slug:** `applied-ai-engineering`
- **Role:** Applied AI Engineer
- **Format:** one book, six parts, twenty-one chapters, six appendices
- **Edition line:** 1.x
- **Architecture version:** 1.0.0

## Thesis

Applied AI engineering is the discipline of turning uncertain model capability into useful, measurable, reliable, and governable product behavior through an evidence loop that begins with a real task and continues through operation and change.

## Reader promise

You will learn to engineer an AI-powered product as a falsifiable behavior system: define the task and consequence, specify acceptable behavior, select the simplest adequate mechanism, construct authorized data and context, build the surrounding software, evaluate representative failures, control operational tradeoffs, release within authority, diagnose real use, and change models or providers without losing the evidence that justified the system.

The book does not promise mastery of every model family, framework, industry, or specialist discipline. It teaches transferable decisions, artifacts, implementation boundaries, experiments, and operating practices that remain useful as specific AI capabilities change.

## Audience at entry

Primary readers are software, product, data, ML, solutions, or platform engineers who can already build ordinary application software and want to own AI-powered behavior in production.

The expected reader:

- can read and modify application code, APIs, schemas, tests, configuration, and structured logs;
- understands basic probability and common classification/ranking metrics at an introductory level;
- has used at least one learned model or AI service in a prototype, notebook, or application;
- understands databases, HTTP/service boundaries, identity/access, version control, and CI/CD concepts;
- can reason about user tasks and explain technical tradeoffs in writing.

Appendices provide compact refreshers and artifact templates, but the book is not a programming, statistics, linear algebra, or general machine-learning primer.

## Reader capability at exit

Given an AI product opportunity, incomplete evidence, uncertain model behavior, changing providers, operational constraints, and shared authority, the reader can:

1. define the user task, consequence, value hypothesis, non-goals, and AI/non-AI decision;
2. write a behavior contract covering required, unacceptable, uncertain, abstaining, escalating, and degraded behavior;
3. compare rules, search, ranking, predictive ML, generative models, agents, and hybrid mechanisms using evidence;
4. design task-specific data, context, retrieval, model, software, interface, trust, and ownership boundaries;
5. implement a production vertical slice with deterministic controls and inspectable failure behavior;
6. build representative, segmented evaluation and experimentation loops tied to user consequence;
7. balance quality, reliability, latency, capacity, and cost without hiding critical segments;
8. implement and test security, privacy, safety, abuse, human-review, and governance controls while respecting formal authority;
9. execute bounded release, monitoring, feedback, diagnosis, incident response, and iterative improvement;
10. evaluate model/provider/data changes and migrate without silent behavioral regression;
11. earn reusable mechanisms from repeated evidence and lead applied-AI decisions without absorbing adjacent-role ownership.

## Provisional Komal competency domains

These publication domains derive from Phase 01 evidence and Phase 04 scope. They are not presented as an Abhyaas certification standard. Later Abhyaas work must reconcile its independent competency/objective IDs through a documented coverage review.

| ID | Domain | Required capability |
| --- | --- | --- |
| AAE-K01 | Task, value, and AI decision | Define the user task and consequence, test the value hypothesis, and choose AI only when evidence supports it. |
| AAE-K02 | Behavior contracts and boundaries | Specify observable behavior, uncertainty, non-goals, escalation, degradation, and system/authority boundaries. |
| AAE-K03 | Model and mechanism selection | Compare deterministic, search, predictive, generative, agentic, adapted, and hybrid mechanisms under real constraints. |
| AAE-K04 | Data, context, retrieval, and grounding | Build authorized, representative task inputs and context paths with provenance, relevance, leakage, and limitation controls. |
| AAE-K05 | Production application and integration | Implement services, schemas, interfaces, orchestration, tools, validation, permissions, and user feedback around learned behavior. |
| AAE-K06 | Evaluation and experimentation | Create representative evidence, error taxonomies, segmented judgments, calibrated review, experiments, and release dispositions. |
| AAE-K07 | Operational quality and observability | Engineer reliability, latency, throughput, capacity, cost, privacy-safe signals, diagnosis, fallback, and recovery. |
| AAE-K08 | Responsible controls and authority | Implement and test proportionate privacy, security, safety, abuse, governance, and human-authority controls without self-authorizing risk. |
| AAE-K09 | Release, feedback, and incident learning | Bound rollout, monitor use and behavior, respond to incidents, and convert production evidence into controlled improvement. |
| AAE-K10 | Change, portability, and evidence-earned reuse | Survive model/provider/data change and build reusable mechanisms only when repeated evidence justifies them. |
| AAE-K11 | Advanced technical leadership | Set evidence standards, resolve cross-system tradeoffs, communicate limitations, mentor teams, and preserve adjacent-role authority. |

## Learning progression

The six parts follow a recursive evidence loop. Later evidence may invalidate earlier assumptions, so chapters teach controlled return paths rather than a one-way waterfall.

### Part I — Define the Behavior

Establish accountability, begin with a real task, specify behavior and uncertainty, and earn the decision to use a learned mechanism.

### Part II — Construct the System

Build the authorized data/context substrate, design combined learned and deterministic boundaries, and implement one inspectable production path.

### Part III — Build the Evaluation Loop

Turn user consequence into representative cases, criteria, error taxonomies, calibrated judgments, experiments, and release evidence.

### Part IV — Engineer Operational Quality

Make behavior dependable under latency, cost, capacity, privacy, security, safety, and failure constraints, with signals that support diagnosis.

### Part V — Release, Learn, and Change

Cross the production threshold gradually, learn from real use and incidents, and survive changes to models, providers, data, and context.

### Part VI — Compound Sound Judgment

Earn shared mechanisms from repeated evidence and lead portfolio-level decisions without confusing influence with authority.

## Chapter architecture

### Part I — Define the Behavior

| Ch. | Title | Meaningful job | Reader capability at exit | Dossier artifact | Primary domains |
| ---: | --- | --- | --- | --- | --- |
| 1 | Behavior, Not Magic | Establishes the role's unit of accountability, evidence loop, limits, and relationship to models and adjacent roles. | Classify applied-AI work by decision and accountability; distinguish a demonstration, model result, feature, and dependable behavior. | responsibility charter, evidence-loop map, boundary memo | K01, K02, K11 |
| 2 | Start With the User Task | Teaches task, user, workflow, consequence, baseline, value, and feasibility discovery before mechanism selection. | Produce a task model and evidence log that can reject a fashionable but low-value AI proposal. | task brief, consequence map, baseline, value hypothesis, evidence log | K01, K11 |
| 3 | Write the Behavior Contract | Makes desired, unacceptable, uncertain, abstaining, escalating, and degraded behavior explicit. | Translate product intent into testable behavior and authority clauses without pretending uncertainty can be eliminated. | behavior contract, non-goals, authority/escalation map | K02, K08 |
| 4 | Choose the Simplest Adequate Mechanism | Compares deterministic logic, search, ranking, predictive models, generative models, agents, and hybrids. | Select or reject mechanisms using task evidence, consequence, data, quality, latency, cost, privacy, operability, and change risk. | mechanism decision record, experiment ladder, fallback concept | K01, K03, K07 |

### Part II — Construct the System

| Ch. | Title | Meaningful job | Reader capability at exit | Dossier artifact | Primary domains |
| ---: | --- | --- | --- | --- | --- |
| 5 | Make Task Data Representative | Teaches provenance, permissions, sampling, labels, segments, edge cases, leakage, drift assumptions, and documentation. | Build a task dataset whose limits are visible and whose composition matches consequential use better than convenience data. | data card, sampling plan, segment register, leakage review | K04, K06, K08 |
| 6 | Engineer Context and Retrieval | Teaches query/input transformation, indexes/representations, retrieval, ranking, grounding, context assembly, freshness, citations, and memory limits. | Design and test a context path that exposes relevance, provenance, permission, staleness, and empty-evidence behavior. | context contract, retrieval/ranking design, grounding trace | K03, K04, K07 |
| 7 | Draw the Combined System Boundary | Separates model behavior from application, policy, orchestration, data, product, human, and infrastructure boundaries. | Produce an architecture whose trust, state, failure, ownership, and deterministic/learned decisions are inspectable. | system/context diagrams, trust/authority boundaries, decision records | K02, K03, K05, K08 |
| 8 | Build an Inspectable Vertical Slice | Teaches production services, schemas, structured output, validation, interfaces, queues, tools, permissions, feature control, tests, and trace IDs. | Implement one end-to-end behavior path that can succeed, abstain, fail safely, and expose evidence without secret-dependent default execution. | running slice, repository map, interface schemas, deterministic test double | K05, K07, K08 |

### Part III — Build the Evaluation Loop

| Ch. | Title | Meaningful job | Reader capability at exit | Dossier artifact | Primary domains |
| ---: | --- | --- | --- | --- | --- |
| 9 | Turn Consequences Into Evaluation Cases | Teaches case construction, provenance, representativeness, splits, adversarial and rare cases, coverage, and versioning. | Build an evaluation set that represents the behavior contract and can reveal important failures hidden by aggregate convenience samples. | evaluation-set card, scenario suite, coverage matrix | K02, K04, K06 |
| 10 | Name the Errors That Matter | Teaches criteria, error taxonomy, severity, detectability, segment analysis, thresholds, tradeoffs, and uncertainty. | Diagnose quality by consequence and segment instead of optimizing a single score or model leaderboard. | error taxonomy, criterion rubric, segment report, threshold record | K01, K06, K08 |
| 11 | Combine Machine, Human, and Domain Judgment | Teaches deterministic checks, model-based grading, calibration, rater guidance, disagreement, specialist review, and authority. | Choose the cheapest credible judgment method for each claim and quantify limitations of automated and human evaluation. | evaluator design, calibration study, rater guide, disagreement log | K06, K08 |
| 12 | Run Experiments That Change Decisions | Teaches baselines, ablations, paired comparisons, uncertainty, offline/online connection, stopping, reproducibility, and release disposition. | Design an experiment whose result can select, reject, or revise a model/system change without laundering weak evidence. | experiment plan, result packet, decision log, regression gate | K03, K06, K09 |

### Part IV — Engineer Operational Quality

| Ch. | Title | Meaningful job | Reader capability at exit | Dossier artifact | Primary domains |
| ---: | --- | --- | --- | --- | --- |
| 13 | Design for Probabilistic Failure | Teaches layered failure modes, timeouts, retries, idempotency, abstention, fallbacks, circuit breaking, degradation, and recovery semantics. | Make failures bounded and diagnosable across model, data/context, tool, orchestration, interface, dependency, and product layers. | failure-mode register, fallback ladder, recovery tests | K02, K05, K07 |
| 14 | Budget Latency, Capacity, and Cost | Teaches end-to-end budgets, quality/cost frontiers, caching/batching, capacity, quotas, load, spend controls, and degradation choices. | Defend a system configuration that meets user-task timing and cost constraints without averaging away tail behavior. | budget model, load/cost experiment, tradeoff record | K03, K07 |
| 15 | Observe Behavior Without Betraying Users | Teaches product, behavior, model, retrieval, tool, service, and business signals; trace design; feedback; privacy; retention; and diagnostic views. | Create a privacy-conscious signal system that distinguishes usefulness, behavior quality, system health, and data/context failure. | signal catalog, trace schema, feedback path, dashboard/runbook design | K04, K07, K08, K09 |
| 16 | Implement Controls and Preserve Authority | Integrates threat modeling, misuse, prompt/input attacks, data exposure, tool permissions, human review, auditability, policy, control testing, and approval boundaries. | Implement proportionate controls, produce evidence and residual limitations, and route formal decisions to accountable authorities. | threat/harms model, control matrix, test evidence, approval/escalation packet | K02, K05, K08 |

### Part V — Release, Learn, and Change

| Ch. | Title | Meaningful job | Reader capability at exit | Dossier artifact | Primary domains |
| ---: | --- | --- | --- | --- | --- |
| 17 | Release to Learn Safely | Teaches readiness evidence, shadow/internal/canary/cohort rollout, flags, blast radius, go/no-go authority, rollback, and online measurement. | Select and execute the smallest rollout that can test the next uncertainty without exposing an unjustified consequence. | readiness packet, rollout/rollback plan, go/no-go record | K06, K07, K08, K09 |
| 18 | Diagnose Real Use and Incidents | Teaches feedback interpretation, metric gaming, distribution shift, layered triage, containment, incident roles, correction, and learning. | Reconstruct a behavior regression, contain harm, identify the responsible layer, and turn production evidence into a verified change. | incident timeline, diagnostic trace, correction and learning record | K06, K07, K08, K09 |
| 19 | Change Models Without Losing the Product | Teaches provider/model/data/context versioning, shadow comparison, migration, fallback, compatibility, rollback, drift, and evidence replay. | Replace or update a model/provider while preserving the behavior contract and making regressions, changed limits, and operational tradeoffs visible. | change dossier, compatibility matrix, replay report, migration disposition | K03, K06, K07, K10 |

### Part VI — Compound Sound Judgment

| Ch. | Title | Meaningful job | Reader capability at exit | Dossier artifact | Primary domains |
| ---: | --- | --- | --- | --- | --- |
| 20 | Earn Reuse From Repeated Evidence | Teaches pattern thresholds, reusable evaluations, adapters, policy/control components, context mechanisms, observability, portability, and disconfirmation. | Decide what to standardize, keep local, retire, or test again without converting one successful feature into premature platform doctrine. | pattern ledger, reuse proposal, validation/disconfirmation plan | K05, K06, K07, K10 |
| 21 | Lead Applied AI Decisions | Integrates portfolio triage, evidence standards, technical strategy, stakeholder communication, research/product/platform collaboration, mentoring, and authority limits. | Lead multiple applied-AI decisions, surface uncertainty at the right altitude, allocate engineering attention, and define a growth path without losing technical evidence. | portfolio review, evidence-standard memo, escalation brief, growth plan | K01, K08, K10, K11 |

## Chapter existence audit

A chapter exists only if it does at least one of these jobs: introduces a necessary decision model, builds a professional artifact/skill, teaches architecture or implementation, makes evidence falsifiable, adds an operational capability, or integrates tradeoffs at a demonstrably higher level.

- Chapters 1–4 establish distinct accountability, task, contract, and mechanism decisions; none can be merged without obscuring a gate that may stop the project.
- Chapters 5 and 6 separate representative task evidence from runtime context/retrieval behavior; conflating them would hide training/evaluation leakage and production relevance failures.
- Chapters 7 and 8 separate system responsibility design from working implementation evidence.
- Chapters 9–12 create four different evaluation capabilities: case coverage, consequential error definition, credible judgment, and decision-changing experimentation.
- Chapters 13–16 address distinct production obligations: failure semantics, resource budgets, observable evidence, and authority/control implementation.
- Chapters 17–19 distinguish release learning, live diagnosis/incident response, and planned model/provider change.
- Chapters 20–21 add cross-system reuse evidence and portfolio/organizational judgment; neither restates single-feature operation.
- Every chapter changes the capstone dossier; none exists for technology fashion, employer trivia, or chapter-count symmetry.

## Original running product case

### Patchwork Find — evidence-backed repair-part discovery

**Patchwork** is a fictional marketplace that helps households and small repair businesses find compatible replacement parts across inconsistent seller listings. Inputs may include a photo of a worn part, a natural-language description, partial dimensions, an appliance label, and structured catalog attributes. A wrong match can waste money, delay a repair, or create unsafe use; the product must distinguish confident discovery from cases that require measurements, seller confirmation, a qualified technician, or no recommendation.

The reader develops **Patchwork Find**, a bounded product capability that combines multimodal representation, hybrid retrieval, ranking/classification, structured compatibility evidence, and optional generated explanations. Deterministic rules enforce known incompatibilities and prohibited claims. The initial useful path does not require an LLM. Generative behavior is added only where experiments show that it improves comprehension without obscuring evidence. A later bounded assistant may prepare—not execute—seller questions, with explicit user confirmation and tool permissions.

That initial path is a mandatory non-LLM architecture and assessment path, not a temporary placeholder for chat or agent functionality.

The system must handle sparse catalog data, duplicate and misleading listings, permission/licensing constraints, regional variation, cold-start segments, ambiguous photos, provider/model changes, latency/cost pressure, privacy-conscious traces, seller gaming, and fairness to long-tail inventory. It supports a full behavior evidence loop without making the book a customer-deployment, e-commerce, computer-vision, LLM, or agent-specialist curriculum.

Patchwork and all named records, users, sellers, products, metrics, incidents, and data are original fictional constructs. Synthetic data will be generated for all executable examples. No real marketplace behavior or endorsement is implied.

## Satellite-case requirements

Satellite cases prevent Patchwork's commerce context and mechanism mix from becoming a hidden universal model.

1. **High-consequence classification and human authority:** a fictional care-operations message routing system must expose segment-specific error cost, professional review, escalation, and a hard limit on clinical claims. It tests whether the common artifacts survive high-consequence use without teaching medicine.
2. **Bounded generative/tool behavior:** a fictional internal engineering assistant may summarize diagnostics and prepare a reversible change, but tool permissions, confirmation, state, idempotency, interruption, and recovery must be explicit. It tests when an agent is justified without becoming the Agentic AI curriculum.
3. **Predictive/non-generative path:** at least one forecasting or classification example must run without retrieval, chat, prompting, or a language model and still use the same task-contract-evaluation-release loop.
4. **Anti-pattern countercases:** short scenarios must include a convincing demo with no representative evidence, a benchmark win that harms a critical segment, a control documented but not implemented, a provider upgrade with silent regression, and a reusable platform proposal based on one feature.

No real organization may be presented as the capstone or used to manufacture confidential operational detail. Real primary-source cases in Phase 06 may support bounded claims only.

## Terminology locks

- **AI system:** the complete product behavior path, including learned models, deterministic software, data/context, interfaces, controls, humans, and runtime dependencies.
- **Model:** a learned component; never shorthand for the complete system.
- **Behavior contract:** versioned statement of required, allowed, unacceptable, uncertain, abstaining, escalating, and degraded behavior plus evidence expectations.
- **Evaluation case / evaluation set:** versioned task inputs, context, expected criteria, segments, provenance, and limitations; never called “ground truth” when judgments are conditional or contested.
- **Evidence loop:** task -> contract -> mechanism/system -> evaluation -> release/operation -> feedback/change -> revised task/contract/system.
- **Error taxonomy:** consequence-oriented failure categories with severity, detectability, affected segments, and control/release implications.
- **Control:** an implemented mechanism with a stated objective and verification evidence; a policy sentence alone is not a control.
- **Guardrail:** permitted only for a specific technical mechanism; not used as a vague synonym for safety.
- **Human review / human authority:** review is an activity; authority identifies who may decide. “Human in the loop” is insufficient without task, timing, evidence, competence, and decision rights.
- **Agent:** a system granted bounded capability to choose and execute multi-step tool actions using state; not a synonym for every generative workflow.
- **Release disposition:** go, conditional go, reduce scope, delay, or stop, tied to named evidence and authority.
- **Provider/model change:** any component update that can alter behavior or operational characteristics, including silent hosted-model updates where detectable.
- **Applied AI Engineer:** canonical role. AI Engineer, Applied ML, and employer-specific aliases appear only with responsibility evidence. LLM Engineer and Agentic AI Engineer remain specializations.

## Source and claim conventions

- Every material externally verifiable claim receives a stable `AAE-SRC-*` source link through a structured claim record.
- Chapter research packs distinguish source statement, author inference, case synthesis, and normative recommendation.
- Prefer primary standards, documentation, research, engineering publications, incident reports, and official employer/product evidence.
- Volatile APIs, models, prices, benchmarks, and legal/regulatory claims require access dates and edition-visible limitations.
- Job postings support role-pattern evidence, not universal industry truth.
- Real incidents and studies may be summarized and analyzed; their facts may not be silently transferred into Patchwork.
- Direct quotations remain short and necessary. The manuscript's teaching, synthesis, examples, and diagrams are original.
- Unsupported factual precision, invented interview dialogue, fake measured results, and inaccessible internal evidence are prohibited.

## Artifact and cross-reference conventions

- Capstone artifacts use stable IDs `PF-01` through `PF-12`, semantic versions, owners, status, evidence links, limitations, and change history.
- A later chapter extends or supersedes an earlier artifact; it does not silently replace the previous decision.
- Cross-references name the exact chapter and artifact/figure ID, not “as discussed above.”
- Tables carry exact mappings or comparisons; figures carry spatial, sequential, boundary, state, or diagnostic relationships.
- Every exercise states inputs, required decision, output artifact, acceptance evidence, failure injection, and adjacent-role limit.
- Chapters separate Patchwork narrative, transferable method, satellite test, and executable companion work.

## Code conventions

- The companion must run locally without paid services, secret credentials, or a live model provider by using deterministic interfaces and test doubles.
- Provider adapters are optional, versioned, and isolated behind stable contracts.
- Synthetic data generation is deterministic and documents known bias/coverage limits.
- Tests cover schemas, permissions, retrieval/ranking behavior, fallbacks, error segments, regression gates, traces, and change replay—not prompt snapshots alone.
- Examples favor inspectable code and explicit state over framework magic. No framework becomes a prerequisite for understanding the book.
- Security examples use non-secret placeholders and safe local effects; tool examples cannot perform destructive external actions.

## Edition and version scheme

- Architecture: semantic version, beginning `1.0.0` when Phase 05 closes.
- Book edition: `1.x`; manuscript/publication version begins `1.0.0` after final QA.
- Chapters: stable numbers within an edition and front-matter slugs; structural changes require an architecture version and decision record.
- Sources: stable IDs; refresh status and access dates may change without renumbering.
- Figures: `F<chapter>.<sequence>` plus semantic production version and content hash.
- Capstone dossier: `PF-*` artifact ID plus semantic version and change log.
- Code/data: tagged releases aligned with book edition; generated evidence records versions and seeds.
- Provider-specific examples display tested model/API version, access date, adapter version, and fallback limitation.
- Corrections after publication enter an errata/change record; no silent PDF or web replacement.

## Appendix architecture

1. **A — Mathematical and Measurement Refresher:** probability, uncertainty, confusion matrices, ranking, calibration, sampling, confidence/credible intervals at decision depth.
2. **B — Artifact Templates:** behavior contract, data/eval cards, mechanism record, experiment packet, control matrix, release and change dossiers.
3. **C — System and Threat Checklists:** compact prompts for boundary, failure, privacy/security, tool, human-authority, and change review.
4. **D — Provider-Neutral Companion Guide:** local setup, deterministic adapters, synthetic data, test/eval runner, and optional provider integration.
5. **E — Terminology and Adjacent-Role Guide:** canonical definitions, acronyms, and ownership/escalation boundary.
6. **F — Source, Figure, and Edition Records:** source register instructions, figure provenance, version policy, corrections, and index conventions.

## Expected manuscript allocation

The architecture targets approximately 140,000–165,000 original words, excluding source records and executable code:

- front matter and orientation: 4,000–6,000;
- Part I: 23,000–27,000;
- Part II: 27,000–31,000;
- Part III: 27,000–31,000;
- Part IV: 27,000–31,000;
- Part V: 19,000–23,000;
- Part VI: 11,000–14,000;
- appendices: 12,000–16,000.

These are depth controls, not quotas. A chapter must satisfy its job and evidence needs; repetition or padding must be removed even if the result is shorter.

## Phase 06 handoff

Phase 06 must create one research pack per frozen chapter, a structured source/claim register, and an original case-study register. Each pack must identify claims requiring evidence, primary-source targets, contradictions/limitations, Patchwork decisions, satellite-case use, provisional figures, and gaps. It may refine evidence and examples but cannot change the 21-chapter list, title/thesis, competency domains, or role boundary without a documented architecture change decision.
