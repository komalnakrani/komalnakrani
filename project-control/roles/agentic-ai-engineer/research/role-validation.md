# Agentic AI Engineer — Role Validation

## Verdict

**PROCEED**

Use **Agentic AI Engineer** as the canonical catalog name. Treat **AI Agent
Engineer**, **Software Engineer — Agentic AI**, and employer-specific
**Agentic AI / AI Engineer** titles as aliases only when the work owns an
agent's action loop, tool effects, state, evaluation, controls, recovery, and
production operation. Do not classify every LLM application or fixed workflow
as agentic engineering.

## Why the role is valid

The exact title is currently used by independent employers in banking,
industrial energy, geospatial/mobility technology, biotechnology, consulting,
and enterprise technology. Closely matching titles appear in semiconductor,
telecommunications, and AI-platform organizations. These roles repeatedly ask
engineers to design, implement, evaluate, deploy, observe, and recover systems
that select tools or actions across multiple steps. [AGE-CLM-001,
AGE-CLM-002]

The repeated work is narrower than Applied AI Engineering and deeper than an
LLM integration. It begins after a team has evidence that model-directed
execution is justified, then owns the engineering consequences of letting a
probabilistic component choose the next step or effect: bounded authority,
capability interfaces, state and memory, orchestration, durable execution,
trajectory evaluation, action safety, observability, and recovery.
[AGE-CLM-003, AGE-CLM-004]

Current official engineering guidance reinforces this distinction. OpenAI and
Anthropic distinguish an agent from a simple model call or fixed workflow by
model-directed execution and dynamic tool use. Both recommend adding autonomy
incrementally and retaining explicit stopping or human-intervention paths.
[AGE-CLM-005, AGE-CLM-012]

## Canonical definition

An **Agentic AI Engineer** is a production software and AI-systems engineer who
designs, builds, evaluates, secures, deploys, and operates bounded systems in
which a model can choose and sequence tool-mediated actions, while preserving
explicit authority, inspectable state, recoverable effects, and evidence that
the intended task completes safely and reliably.

The role is defined by six necessary properties:

1. **Model-directed progression** — the model can choose at least part of the
   next action or route from observed state; a fixed deterministic workflow is
   not automatically an agent.
2. **Tool-mediated effects** — the system can inspect or change an environment
   through typed capability interfaces rather than merely produce prose.
3. **Bounded delegated authority** — identity, permissions, approvals,
   budgets, and stop conditions constrain what may happen on whose behalf.
4. **Stateful execution** — progress, context, artifacts, decisions, retries,
   and ownership survive beyond one model response and are managed explicitly.
5. **Trajectory and outcome evidence** — evaluation covers intermediate
   actions, tool correctness, state transitions, side effects, recovery, and
   final task result, not answer style alone.
6. **Operational recovery** — the system is observable, interruptible,
   resumable where appropriate, and capable of compensating, escalating, or
   stopping after partial failure.

If tool choice, state transition, authority, and recovery are absent, the work
normally belongs in Applied AI, LLM, or conventional workflow engineering.

## Responsibility model

### 1. Decide whether autonomy is justified

- Compare deterministic automation, an LLM-assisted workflow, a single agent,
  and multi-agent coordination against the task's ambiguity and consequence.
- Define an observable goal, completion evidence, action budget, non-goals,
  maximum autonomy, and reasons to stop or transfer control.
- Prefer the least complex topology that can meet the task; a multi-agent
  design is an earned decision, not a maturity badge. [AGE-CLM-005,
  AGE-CLM-008]

### 2. Engineer the agent loop and harness

- Separate the model, instructions/policy, state, tools, observation,
  validation, runtime, and user or human-authority boundaries.
- Implement explicit run states, turn/action limits, timeouts, cancellation,
  completion criteria, and deterministic enforcement around model choices.
- Preserve enough event and state history to reproduce a failure without
  treating hidden model reasoning as the only diagnostic record.

### 3. Design tools as capability interfaces

- Give tools narrow semantics, typed inputs and outputs, explicit errors,
  idempotency or compensation behavior, and realistic authorization.
- Distinguish data access, computation, communication, and effectful actions;
  treat effectful tools as the highest-control surface.
- Validate observations before they become new state; handle stale,
  contradictory, unavailable, or adversarial tool results.
- Version and test agent-computer interfaces independently of a particular
  orchestration framework. [AGE-CLM-006]

### 4. Own state, memory, and context lifecycle

- Separate authoritative workflow state from conversational context,
  short-lived scratch state, durable artifacts, user preferences, and derived
  memory.
- Define provenance, freshness, permissions, retention, deletion, isolation,
  compaction, and conflict rules.
- Prevent untrusted content from silently becoming policy, authority, or a
  privileged instruction.

### 5. Control identity, delegation, and effects

- Bind an invocation to the relevant user, service, agent, task, and approval
  context; enforce least privilege at the capability boundary.
- Make delegation depth, credential use, consent, approval, revocation, and
  audit evidence explicit.
- Separate proposing an action, authorizing it, executing it, confirming the
  effect, and recovering from it. [AGE-CLM-011, AGE-CLM-013]

### 6. Choose orchestration deliberately

- Start with a single agent plus clear tools and deterministic structure when
  sufficient.
- Add routers, specialists, workers, reviewers, or remote agents only when the
  separation has measurable value.
- Define handoff contracts, ownership of shared state, fan-out and aggregation
  rules, cancellation, duplicate-work prevention, and conflict resolution.
- Treat protocols such as MCP and A2A as replaceable interoperability
  mechanisms, not the profession's identity. [AGE-CLM-008, AGE-CLM-014]

### 7. Engineer durable execution and recovery

- Checkpoint long-running work and distinguish retryable, terminal,
  compensatable, and human-decision failures.
- Use idempotency keys, deduplication, leases or ownership records, bounded
  retries, backoff, time budgets, and explicit resume semantics where needed.
- Design for partial completion, unavailable tools, ambiguous effect status,
  duplicate events, cancellation, and model/provider changes mid-run.

### 8. Evaluate trajectories and outcomes

- Build realistic task environments, fixtures, initial states, perturbations,
  success predicates, consequence-aware failure taxonomies, and held-out cases.
- Measure task completion, action validity, tool selection/arguments, policy
  compliance, side effects, state correctness, recovery, efficiency, and
  segment-specific failure.
- Combine deterministic assertions, environment checks, calibrated graders,
  human review, and specialist judgment; record harness and budget because they
  are part of the tested system. [AGE-CLM-009]

### 9. Secure and govern the action surface

- Model direct and indirect prompt injection, tool poisoning, excessive
  agency, confused-deputy behavior, data exfiltration, cross-tenant state,
  unsafe delegation, and approval bypass.
- Enforce controls outside the model where feasible: capability allowlists,
  scope checks, sandboxing, validation, egress constraints, confirmation,
  monitoring, and revocation.
- Produce technical evidence for security, safety, privacy, legal, domain, and
  business-risk owners without claiming their formal authority.

### 10. Release, observe, and improve

- Trace runs across agent, tool, model, state, and service boundaries with
  privacy-aware event design.
- Operate budgets for quality, completion time, turns, tokens, tool calls,
  external cost, concurrency, and tail behavior.
- Release through simulation, replay, shadowing, bounded cohorts, approval
  modes, kill switches, and rollback or roll-forward evidence.
- Diagnose production incidents from actions and state transitions, contain
  effects, repair the responsible layer, and convert failures into tests and
  controls. [AGE-CLM-010, AGE-CLM-012]

## Typical deliverables

- agent suitability and autonomy decision record
- goal, action, consequence, authority, and stopping contract
- harness and run-state specification
- typed tool/capability catalog with error and effect semantics
- identity, authorization, delegation, approval, and audit design
- context/state/memory lifecycle record
- orchestration and handoff contracts
- durable-execution, idempotency, cancellation, and recovery plan
- executable sandbox or simulator and deterministic test doubles
- task, trajectory, tool, state, safety, and recovery evaluation suite
- trace/event schema, run explorer, signal catalog, and incident runbook
- quality/latency/cost/turn/action/capacity budgets
- release, rollback, kill-switch, and change-compatibility evidence
- protocol and provider portability record

## Operating contexts

- enterprise workflow and knowledge agents
- software-development and operations agents
- customer-support and service agents with bounded account actions
- industrial or field-work coordination agents
- research, analysis, and document-production agents
- browser/computer-use agents
- multi-agent systems spanning teams, platforms, or vendors
- internal agent platforms and reusable capability ecosystems

The role applies only when the system performs meaningful model-directed
multi-step execution. A chatbot, classifier, retrieval answer, or fixed workflow
does not enter this scope merely because marketing calls it an agent.

## Stakeholders

- users and people delegating work to an agent
- operators, domain experts, reviewers, and action approvers
- product, design, Applied AI, LLM, and software engineering teams
- service/API owners and data/platform teams
- identity, security, privacy, safety, legal, compliance, audit, and risk owners
- SRE, platform, MLOps, FinOps, support, and incident-response partners
- vendors and remote-agent or tool providers

## Common failures the role must prevent

- choosing an agent because a fixed workflow seems less fashionable
- granting broad credentials to compensate for unclear tool boundaries
- confusing retrieved or tool-returned text with trusted instructions
- letting a model both propose and authorize a consequential effect
- assuming a successful final answer means the trajectory was acceptable
- evaluating in a toy harness that omits production tools, budgets, or controls
- using retries without idempotency and duplicating external effects
- losing progress or ownership after a timeout, crash, handoff, or deployment
- storing memory without provenance, permission, isolation, or deletion rules
- adding agents to solve prompt complexity and multiplying failure paths
- treating a handoff as a chat message rather than a state/authority transfer
- logging secrets or sensitive tool results in full traces
- no cancellation, pause, kill switch, compensation, or human takeover path
- silent tool, protocol, model, policy, or provider change that breaks behavior
- claiming “human in the loop” without a named decision and workable timing

## Career and seniority shape

Current roles strongly favor experienced software engineers because action
systems combine distributed-systems failure, AI uncertainty, security,
evaluation, and operational responsibility. Employer titles range from
Engineer to Lead, Staff, Principal, and Solutions Engineer, so seniority cannot
be inferred from the words “Agentic AI” alone. [AGE-CLM-015]

Advanced practitioners design shared capability and evidence standards, review
high-consequence topologies, establish recovery and observability patterns,
guide protocol and platform decisions, and mentor teams. They do not absorb
product priority, formal risk acceptance, specialist security/safety judgment,
or generalized platform ownership.

## Tool and market volatility

The role is credible but young. Titles, team boundaries, protocols, hosted
products, and orchestration frameworks are changing quickly. Current job posts
frequently name LangGraph, ADK, Semantic Kernel, AutoGen, CrewAI, MCP, A2A,
Azure, AWS, and Google Cloud; none is a durable role definition.
[AGE-CLM-016]

The lasting content is the engineering of delegated action: authority,
capabilities, state, orchestration, evidence, failure, recovery, and operation.

## Book implications

The book must assume professional software-engineering foundations and teach a
single evidence-bearing path from justified autonomy to controlled production
operation. It must not become:

- a prompt-writing guide;
- a catalog of agent frameworks;
- an LLM internals or fine-tuning book;
- a broad Applied AI lifecycle duplicate;
- a generalized distributed-systems, IAM, SRE, or security curriculum;
- a speculative treatment of fully autonomous organizations.

It must go materially deeper than the Applied AI book on tool semantics,
delegated authority, state and memory, agent loops, single/multi-agent
topologies, durable execution, trajectory evaluation, effect safety,
observability, and recovery.

## Limitations

- The title is emergent and not standardized; some employers use it for broad
  Applied AI, GenAI, platform, FDE, or solutions work.
- Job descriptions are recruiting artifacts and can overstate autonomy or
  combine several professions; only repeated responsibilities support the
  boundary.
- Many current implementations are LLM-based, but the durable boundary is
  model-directed action rather than one model family.
- Provider guides express vendor experience and product abstractions. They
  support recurring engineering problems, not universal architecture mandates.
- NIST's 2026 identity document is a concept paper, not a final standard. It
  identifies open engineering questions and cannot be cited as settled policy.
- Evaluation, monitoring, protocol, identity, and security practices are
  evolving; every edition must re-verify volatile implementation guidance.

## Gate decision

Phase 01 passes with verdict **PROCEED**.

The exact title has credible current usage across independent employers and a
defensible unit of accountability: **reliable, recoverable task execution
through bounded model-directed tool actions**. Preserve Applied AI Engineer as
the broader product/system-behavior profession; preserve LLM Engineer as the
language-model specialization; preserve ML Engineer, FDE, research, platform,
product, and specialist safety/security authority as explicit boundaries.

All bracketed claim IDs resolve to `evidence-register.json`.
