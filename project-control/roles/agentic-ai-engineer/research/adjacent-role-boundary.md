# Agentic AI Engineer — Adjacent-Role Boundary

## Boundary rule

Classify work by the **primary engineering decision** and **unit of
accountability**, not by a title, framework, or the presence of an LLM.

- **Primary decision:** How can a model-directed system choose and sequence
  actions while remaining bounded, inspectable, evaluable, interruptible, and
  recoverable?
- **Unit of accountability:** successful and acceptable task execution through
  tool-mediated actions, including intermediate state, delegated authority,
  side effects, and recovery.

## Classification vocabulary

- **CORE HERE** — the Agentic AI Engineer owns the implemented decision and its
  task/action evidence.
- **SHARED AT DIFFERENT DEPTH** — both roles participate, but the objective,
  evidence, or lifecycle accountability differs.
- **SUPPORTING** — the role must integrate and diagnose; a specialist owns the
  generalized mechanism or formal decision.
- **OUT OF SCOPE** — collaboration context only; not Agentic AI professional
  mastery.

## Adjacent-role matrix

| Adjacent role | Relationship | Adjacent role center | Agentic AI distinction | Exam-item difference |
| --- | --- | --- | --- | --- |
| Applied AI Engineer | SHARED AT DIFFERENT DEPTH; broader parent profession | Turn AI capability into useful, measurable product/system behavior across mechanisms and modalities | Assumes model-directed multi-step action is justified, then goes deep on tools, authority, state, orchestration, trajectory evidence, durable execution, and recovery | Applied AI asks whether an agent is needed and whether overall behavior serves the task; Agentic AI asks how a run may act, persist, hand off, fail, recover, and prove acceptable effects. |
| LLM Engineer | SHARED AT DIFFERENT DEPTH | Language-model behavior, context, retrieval, prompting, adaptation, inference interaction, and generative evaluation | Owns the action runtime around a model: capability semantics, state transitions, permissions, effects, pause/resume, compensation, and multi-agent coordination | LLM item diagnoses token/context/model-output behavior; Agentic item diagnoses a failed or unsafe trajectory across tools, state, authority, and runtime. |
| Machine Learning Engineer | SUPPORTING / SHARED AT DIFFERENT DEPTH | Training/data/model pipelines, serving, performance, monitoring, and ML lifecycle | Consumes model capability and owns agent task/action execution; may select models but not generalized training or serving systems | MLE item selects a data/training/serving change; Agentic item selects a harness, tool, state, authority, evaluation, or recovery change. |
| Forward Deployed Engineer | SHARED AT DIFFERENT DEPTH | Own an embedded customer engagement from ambiguous workflow through production, adoption, stabilization, and handoff | Owns an agent system's bounded execution; may serve a reusable product without owning the complete customer transformation | FDE item resolves customer process, integration, adoption, or handoff constraints; Agentic item resolves action semantics, authority, state, or recovery within the agent system. |
| AI Research Engineer | SUPPORTING / SHARED AT DIFFERENT DEPTH | Create and validate novel or generalizable model/agent capability and experimental methods | Turns available capability into an operable action system under real permissions and consequences | Research item tests novelty/generalization or experimental validity; Agentic item makes a production task complete acceptably under budgets and failures. |
| AI Evaluation Engineer | SHARED AT DIFFERENT DEPTH | Design evaluation science, datasets, graders, benchmarks, measurement validity, and evaluation infrastructure across AI systems | Owns the evaluation requirements and release evidence of one agent system, including environment, trajectory, tools, state, and effects | Evaluation item chooses methodology and validates claims across systems; Agentic item uses credible evidence to change or release a particular action system. |
| MLOps / ML Platform Engineer | SUPPORTING | Generalized model/data lifecycle, deployment, observability, governance, and shared ML/AI platform capabilities | Owns agent-specific runtime semantics, action traces, state, tools, approvals, and recovery atop shared services | Platform item designs reusable tenant/runtime/serving capability; Agentic item diagnoses a run and controls task effects using those services. |
| Platform Engineer / SRE | SUPPORTING | Reliable shared infrastructure, service ownership, developer experience, capacity, incident systems, and SLO mechanisms | Defines agent task/action signals, state semantics, failure modes, and safe degradation; collaborates on shared runtime reliability | SRE/platform item repairs shared availability or capacity; Agentic item determines whether an agent may retry, resume, compensate, abstain, or transfer control. |
| Software / Product Engineer | SHARED AT DIFFERENT DEPTH | Deterministic product features, services, interfaces, application state, and software lifecycle | Adds model-directed control flow, uncertain action choice, trajectory evaluation, delegated authority, and agent-specific recovery | Software item reasons from specified state transitions; Agentic item constrains and verifies probabilistically selected transitions and effects. |
| Data Engineer | SUPPORTING | Reliable data ingestion, transformation, storage, quality, and data-product operation | Owns how an agent requests, interprets, authorizes, and acts on context within a task | Data item repairs pipeline correctness/freshness; Agentic item decides how stale/partial/unauthorized observations change a run. |
| AI Product Manager | SHARED AT DIFFERENT DEPTH | User problem, product strategy, priority, adoption, success metrics, rollout policy, and business outcome | Owns technical autonomy recommendation, action contract, evidence, implementation, and operational limits | Product item prioritizes or scopes a workflow; Agentic item demonstrates whether proposed autonomy is technically safe and supportable. |
| AI Solutions Architect | SHARED AT DIFFERENT DEPTH | Target architecture, platform/service selection, integration posture, governance alignment, and implementation guidance | Must implement, evaluate, release, diagnose, and recover the running agent behavior | Architect item selects and defends topology; Agentic item proves and repairs actual task/action behavior under failure. |
| AI Security Engineer | SUPPORTING with mandatory partnership | Security architecture, threat modeling, identity/control standards, adversarial assurance, incident and enterprise security authority | Implements agent-specific capability, validation, sandbox, scope, monitoring, and revocation mechanisms and supplies evidence | Security item determines systemic threat/control adequacy; Agentic item implements and tests the action-boundary control without claiming risk acceptance. |
| AI Safety Engineer | SUPPORTING with mandatory partnership | Safety objectives, hazard analysis, evaluations, mitigations, assurance, and escalation for material AI risk | Implements bounded behavior and produces technical evidence for designated safety authority | Safety item judges safety case or mitigation sufficiency; Agentic item ensures the agent stops, escalates, or is constrained as specified. |
| Privacy / governance / compliance / legal | OUT OF SCOPE authority; mandatory stakeholder where applicable | Policy interpretation, lawful basis, rights, records, control governance, and formal approval/accountability | Implements data minimization, consent, retention, access, audit, and evidence under approved requirements | Agentic item cannot decide legality or accept organizational risk; it tests whether an approved requirement is enforced. |
| Domain professional / operator | OUT OF SCOPE authority; critical collaborator | Domain judgment and authority over consequential decisions or physical/financial/clinical effects | Engineers the system to solicit, preserve, and enforce domain review or approval | Agentic item names escalation and evidence; it does not replace domain licensure or operational authority. |

## Classification tests

### Test 1 — fixed workflow or agent?

A system uses an LLM to extract invoice fields, then deterministic code follows
a fixed approval route.

**Classification:** Applied AI / LLM plus workflow engineering. The model does
not control workflow execution. Agentic techniques can be supporting, but this
is not CORE HERE.

### Test 2 — bounded tool choice

A service agent chooses whether to inspect account history, request missing
evidence, draft a remedy, or escalate. It cannot issue a refund; an approved
deterministic service performs that effect after policy and human checks.

**Classification:** CORE HERE. Tool choice, state, completion, escalation, and
authority boundaries require agentic engineering.

### Test 3 — broad Applied AI behavior

A team compares rules, ranking, retrieval, generation, and a bounded agent for a
product recommendation feature.

**Classification:** Applied AI owns the mechanism decision. Agentic AI owns the
deep implementation only if model-directed actions are selected.

### Test 4 — model improvement

A team fine-tunes a model to improve function-call argument accuracy across a
benchmark.

**Classification:** LLM/ML/Research engineering owns the model change. Agentic
AI supplies task/tool traces and validates whether the changed model improves
the running action system without new effects or regressions.

### Test 5 — customer engagement

An engineer embeds with a manufacturer, redesigns a maintenance workflow,
integrates six legacy systems, trains operators, deploys an agent, and hands
ownership to the customer.

**Classification:** FDE owns the engagement outcome. Agentic AI owns the agent
runtime if responsibilities are split.

### Test 6 — shared runtime

A platform team provides tenant isolation, sandbox execution, secrets,
checkpoint storage, trace ingestion, and deployment primitives for hundreds of
agents.

**Classification:** AI/ML Platform Engineering. Agentic AI owns task/action
semantics and system evidence for an agent built on those primitives.

### Test 7 — consequential security decision

A prompt-injection test shows a finance agent can use a privileged tool after
reading malicious document content.

**Classification:** Agentic AI must contain and repair the tool/authority path;
AI Security owns broader threat assurance and formal security disposition.

## Core here

- agent suitability and autonomy-level recommendation
- goal, action, consequence, authority, and stopping contracts
- model-directed loop/harness and run-state machine
- typed tool semantics and observation validation
- context, state, memory, artifact, and provenance lifecycle within the agent
- identity propagation, delegated authorization, approvals, and effect audit
- single-agent, router, worker, reviewer, and multi-agent topology decisions
- handoff, shared-state, cancellation, conflict, and ownership semantics
- durable execution, idempotency, retry, resume, compensation, and recovery
- environment, trajectory, tool, state, effect, safety, and outcome evaluation
- agent-specific tracing, budget control, diagnosis, release, and incident repair
- protocol adapters and compatibility evidence for agent/tool/agent boundaries

## Supporting only

- foundation-model training, adaptation, inference infrastructure, and research
- organization-wide data platform, IAM, cloud platform, or SRE systems
- generalized evaluation platforms and benchmark governance
- enterprise security architecture and safety assurance
- product strategy, user-research authority, commercial outcome, and adoption
- full customer engagement, procurement, organizational change, and handoff

## Explicitly out of scope

- authorizing legal, regulatory, privacy, security, safety, clinical, financial,
  or physical-world risk
- replacing a licensed or designated domain decision maker
- treating “fully autonomous” as a default or desirable end state
- training foundation models or researching generalized agent intelligence as
  the primary job
- building an enterprise agent platform as the primary accountability
- owning every downstream service merely because an agent calls it
- making live production changes without the repository/user authority granted

## Boundary enforcement for the book

Every chapter, project, and exercise must answer:

1. What model-directed action, state, authority, or recovery decision makes
   this Agentic AI rather than generic Applied AI or software engineering?
2. What observable environment or task evidence proves the decision?
3. Which specialist or organizational authority remains outside the engineer?
4. Would the chapter still exist if agent frameworks and vendors changed?

If the first answer is unclear, move or remove the material. If the third is
missing, repair the authority boundary before publication.
