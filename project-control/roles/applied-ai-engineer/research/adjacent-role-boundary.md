# Applied AI Engineer - Adjacent-Role Boundary

## Boundary rule

Classify work by its **primary technical decision and unit of accountability**, not by a title, model family, framework, or shared tool.

- **Applied AI Engineer primary decision:** What combination of task definition, data/context, model behavior, evaluation, controls, software, and product interaction will produce useful and dependable AI-powered behavior for defined users?
- **Applied AI Engineer unit of accountability:** measurable AI-powered product or system behavior across its application lifecycle.

## Classification vocabulary

- **CORE HERE** - the Applied AI Engineer owns the decision and must produce working behavior and evidence.
- **SHARED AT DIFFERENT DEPTH** - both roles participate, but their objective, evidence, or lifecycle accountability differs.
- **SUPPORTING** - enough depth to integrate, diagnose, and collaborate; a specialist owns the generalized system.
- **OUT OF SCOPE** - collaboration context only; not Applied AI professional mastery.

## Adjacent role map

| Adjacent role | Relationship | Adjacent role center | Applied AI distinction | Exam-item difference |
| --- | --- | --- | --- | --- |
| Forward Deployed Engineer | SHARED AT DIFFERENT DEPTH | Own a customer-embedded path from ambiguous workflow through production, adoption, stabilization, handoff, and field-to-product learning | Own AI system/product behavior and evaluation; may serve many users or a reusable product without owning an entire customer engagement | Applied AI item asks how to define/evaluate/fix model-system behavior; FDE item asks how to decide and deliver under customer workflow, integration, authority, adoption, and ownership constraints. |
| Agentic AI Engineer | SHARED AT DIFFERENT DEPTH; narrower specialization | Engineer controlled autonomy: planning, tools, permissions, memory/state, multi-step execution, recovery, and agent evaluation | Covers agents where useful but also non-agentic generation, search, ranking, recommendation, classification, vision, speech, and hybrid ML products | Applied AI item may decide whether an agent is justified; agentic item assumes meaningful autonomy and tests action semantics, permission boundaries, state, and recovery. |
| LLM Engineer | SHARED AT DIFFERENT DEPTH; narrower specialization | Build and optimize language-model applications, context, retrieval, adaptation, evaluation, inference interaction, and generative behavior | Model-family-neutral accountability across AI modalities and product/system behavior | Applied AI item can choose non-LLM or hybrid mechanisms; LLM item requires language-model-specific behavior, context, token, inference, or adaptation judgment. |
| Machine Learning Engineer | SHARED AT DIFFERENT DEPTH | Own data/model training, feature/model pipelines, serving, performance, monitoring, and ML lifecycle | Own task/user behavior, application integration, experience, evaluation, and combined probabilistic/deterministic system | Applied AI item chooses a product/system change from user-task evidence; MLE item chooses a training, serving, data, model-performance, or ML lifecycle change. |
| AI Research Engineer | SHARED AT DIFFERENT DEPTH | Create or validate generally novel model methods, capabilities, experiments, and research infrastructure | Reproduce/adapt useful methods and turn them into reliable product behavior and production evidence | Applied AI item optimizes usefulness under product constraints; research item tests experimental validity, novelty, generalization, or capability discovery. |
| AI Solutions Architect | SHARED AT DIFFERENT DEPTH | Establish feasibility, target architecture, platform/service choices, governance posture, and implementation guidance | Must implement, evaluate, ship, diagnose, and continuously improve the running system | Architect item selects and defends a design; Applied AI item must repair or release an implemented behavior using evidence. |
| Software / Product Engineer | SHARED AT DIFFERENT DEPTH | Own product features, services, interfaces, state, quality, and software lifecycle | Adds model uncertainty, behavior evaluation, data/context/model decisions, guardrails, feedback, and AI-specific change risk | Software item diagnoses deterministic state/code behavior; Applied AI item distinguishes model, context, evaluation, data, control, and product failure. |
| Data Engineer | SUPPORTING | Own reliable ingestion, transformation, storage, modeling, quality, lineage, and data-platform operations | Own task-specific data/context behavior and evidence, using platform contracts rather than absorbing all upstream data ownership | Applied AI item fixes relevance/representativeness/context for a behavior; data item fixes generalized pipeline correctness and data-product reliability. |
| MLOps / AI Platform Engineer | SHARED AT DIFFERENT DEPTH | Own reusable training/serving/evaluation infrastructure, deployment automation, model registry, runtime, observability, and platform reliability | Uses platforms to own one AI system's task behavior, evidence, experience, and release decision | Applied AI item interprets behavior/evaluation and chooses a system change; platform item chooses scalable shared mechanisms and operating controls. |
| AI Product Manager | SHARED AT DIFFERENT DEPTH | Own product opportunity, prioritization, roadmap, stakeholder alignment, value, and product outcomes | Own technical behavior contracts, architecture, implementation, evidence, and operational limitations | Product item prioritizes or scopes user/business value; Applied AI item turns the selected outcome into a technically credible, measurable system. |
| AI Safety / Security / Responsible AI specialist | SHARED AT DIFFERENT DEPTH | Define specialized threat/risk methods, policy/control expectations, assurance, red teaming, incident, or governance practice | Implement and verify controls in the product while routing formal decisions to designated authorities | Applied AI item implements/tests a control and reports residual evidence; specialist item determines deeper threat, assurance, or governance requirements; authorizer accepts or rejects risk. |
| Domain expert / clinical, legal, safety authority | SUPPORTING or OUT OF SCOPE | Own domain truth, professional judgment, policy interpretation, or formal authorization | Convert authorized domain requirements into testable behavior without replacing the expert or authority | Applied AI item designs escalation and evidence; domain item makes the substantive professional decision. |

The explicit separate Applied AI Engineer, Applied AI Architect, Forward Deployed Engineer, research, infrastructure, and safety families in current employer catalogs reinforce these distinctions, while customer-facing Applied AI postings show that organizations sometimes blend them. Accountability, not title alone, controls. [AAE-CLM-012, AAE-CLM-015]

## Capability boundary matrix

| Capability | Classification | Required Applied AI depth | Explicit non-scope |
| --- | --- | --- | --- |
| Use-case and task formulation | CORE HERE | Define user task, decision, value hypothesis, consequence, non-goals, uncertainty, and evidence | General company strategy or portfolio authority |
| AI/non-AI mechanism choice | CORE HERE | Compare rules, search, traditional ML, generative AI, agents, and hybrids by evidence and constraints | Treating AI adoption as an objective in itself |
| Behavior contract | CORE HERE | Specify allowed, required, unacceptable, abstaining, escalating, and degraded behavior | Formal legal/policy approval |
| Model/provider choice | CORE HERE for the application | Evaluate capability, quality, cost, latency, privacy, deployment, change, and fallback fit | General foundation-model procurement or research roadmap |
| Prompt/context/retrieval design | CORE HERE where used | Construct and test task context, grounding, structured output, retrieval, and failure handling | Defining the whole role as prompt engineering |
| Agent design | CORE HERE when an agent is justified; otherwise optional | Bound task, tools, permissions, actions, state, human review, and evaluation | Deep agent-platform specialization or universal multi-agent architecture |
| Model adaptation/fine-tuning | SHARED AT DIFFERENT DEPTH | Select and execute bounded adaptation tied to task evidence and regression controls | General pretraining, scaling-law research, or training-platform ownership |
| Production software | CORE HERE | Services, schemas, APIs, orchestration, validation, integration, interfaces, tests, and debugging | Owning every product/platform component |
| Task data and evaluation sets | CORE HERE | Provenance, permissions, sampling, labels, segments, adversarial cases, leakage control, and limitations | General enterprise data platform ownership |
| Evaluation and experimentation | CORE HERE | Offline/online evidence, error taxonomy, calibrated graders, human review, experiments, regression, and release disposition | Claiming one benchmark or model judge proves acceptance |
| Reliability, latency, and cost | CORE HERE for system behavior; shared operationally | Budgets, failure modes, caching, retries, fallbacks, capacity signals, cost/quality tradeoffs, and safe degradation | Permanent ownership of shared cloud/runtime infrastructure |
| Observability and feedback | CORE HERE | Privacy-safe traces, behavior/product signals, user feedback, cohorts, diagnosis, and learning loop | Logging sensitive content by default |
| Security/privacy/safety controls | CORE HERE for implementation; SHARED for requirements | Threat discovery, data minimization, permissions, guardrails, abuse cases, testing, and review evidence | Acting as authorizing official, auditor, lawyer, clinician, privacy officer, or security authority |
| Product prioritization | SUPPORTING | Quantify feasibility, evidence quality, technical risk, uncertainty, and tradeoffs | Roadmap or commercial authority |
| Customer deployment lifecycle | SUPPORTING unless assigned | Provide AI expertise, behavior evidence, integration support, and diagnosis | Automatically owning discovery, commercial scope, adoption, account health, and handoff across the whole customer system |
| Research | SUPPORTING; sometimes SHARED | Reproduce, adapt, evaluate, and operationalize methods | General novelty, publication, or model-capability research agenda |
| Reusable applied-AI mechanisms | CORE HERE at advanced depth | Earn shared evaluation, behavior, integration, and reliability components from repeated evidence | Premature platform abstraction or unilateral platform roadmap |

## Scenario differentiation

### Scenario 1 - Clinical recommendation feature

A health product wants AI to summarize longitudinal data and recommend the next care-management action.

- **Applied AI Engineer:** define allowed behavior and escalation, choose a hybrid mechanism, construct authorized context, build retrieval and structured output, create segmented clinical/safety evaluations with domain owners, implement controls and human review, integrate the feature, monitor, and iterate.
- **Agentic AI Engineer:** if the system takes multi-step actions, own tool permissions, state, planning, action confirmation, idempotency, interruption, and recovery.
- **Machine Learning Engineer:** own specialized training/serving/data pipelines, model performance, or inference optimization where needed.
- **Clinical authority:** define clinical correctness and policy and authorize use; the engineer cannot self-approve clinical risk.
- **AI Product Manager:** decide product priority, intended user value, rollout strategy, and outcome tradeoffs with accountable stakeholders.

An Applied AI assessment presents conflicting task quality, segment safety, latency, cost, and user-evidence signals and asks for the next system/release decision. It does not ask the candidate to practice medicine.

### Scenario 2 - Enterprise customer copilot

A customer wants an AI assistant over internal knowledge and business systems.

- **Forward Deployed Engineer:** discover the real customer workflow, align decision rights, integrate customer systems, manage the delivery path, prove adoption, stabilize, and transfer ownership.
- **Applied AI Engineer:** design and evaluate assistant behavior, context/retrieval, structured outputs, tool boundaries, model choice, feedback, and model-system failure handling.
- **AI Solutions Architect:** recommend target architecture, platform/service patterns, deployment posture, and governance approach.
- **MLOps/AI Platform Engineer:** supply reusable deployment, registry, evaluation, inference, and observability mechanisms.

The same person can cover several roles in a small team. The exam boundary follows the decision: customer engagement/outcome for FDE, AI behavior/evidence for Applied AI, target design for architecture, shared mechanisms for platform.

### Scenario 3 - Production quality regression after a model change

A provider update improves aggregate quality but worsens a high-consequence user segment and increases latency.

- **Applied AI Engineer:** reproduce by segment, determine whether model/context/prompt/retrieval/control/product behavior caused the regression, compare fallback/provider/adaptation choices, update the evaluation/release disposition, and preserve user and operational evidence.
- **LLM Engineer:** diagnose language-model-specific context, inference, prompt, token, adaptation, or serving interaction at greater depth.
- **Machine Learning Engineer:** diagnose model/data/serving pipeline effects, retraining or adaptation behavior, and generalized model performance.
- **AI Safety specialist:** determine specialized risk/test requirements and review residual evidence.
- **Business/risk authority:** decide whether residual risk and value justify the authorized release posture.

An Applied AI answer cannot average away the segment or declare a model safe. It must change the running behavior or release decision and route authority correctly.

### Scenario 4 - Search and recommendation without an LLM

A materials marketplace wants multimodal product discovery and personalized ranking.

- **Applied AI Engineer:** formulate user search/recommendation tasks, build multimodal representations and hybrid retrieval/ranking, design offline and online evaluation, integrate the experience, manage latency/cost, and learn from user behavior without corrupting the metric.
- **LLM Engineer:** supports only where language-model generation or reasoning is actually used.
- **Data Engineer:** owns durable catalog/event pipelines and semantic data contracts.
- **Product Engineer:** owns deterministic application experience and services with shared integration.

This scenario is mandatory boundary evidence: Applied AI remains valid when no chat interface, prompt framework, or autonomous agent is used. [AAE-CLM-010]

## Explicit Komal book non-scope

The Applied AI Engineer publication will not attempt to make the reader:

- a foundation-model or general AI research scientist
- a universal machine-learning algorithm or training specialist
- an agent-platform specialist at the depth reserved for Agentic AI Engineer
- an LLM-only specialist at the depth reserved for LLM Engineer
- an enterprise data-platform or MLOps platform owner
- a cloud/vendor certification encyclopedia
- a product manager, salesperson, or commercial owner
- a security auditor, red-team specialist, lawyer, privacy officer, clinician, safety authority, or organizational risk acceptor
- an FDE accountable for every customer workflow, integration, adoption, stabilization, and handoff decision

It will teach enough of each collaboration surface to make correct applied-AI decisions, implement safe technical boundaries, produce evidence, and escalate to accountable owners.

## Assessment boundary test

An objective belongs in core Applied AI scope only if all four are true:

1. it changes the behavior, evidence, release, or operation of an AI-powered product/system;
2. the engineer must implement, evaluate, diagnose, or decide—not merely recognize vocabulary;
3. it remains useful across model providers, frameworks, products, and more than one employer context; and
4. it does not depend on absorbing another role's formal authority or generalized platform/research ownership.

If it fails the first test, it is likely general AI awareness. If it fails the second, it is conceptual background. If it fails the third, it belongs in an example or lab. If it fails the fourth, it is a collaboration boundary.

All bracketed claim IDs resolve to `evidence-register.json`.
