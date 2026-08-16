# Agentic AI Engineering — Book Architecture

## Identity

- **Title:** Agentic AI Engineering
- **Subtitle:** Designing, Evaluating, and Operating Systems That Act
- **Architecture version:** 1.0.0
- **Book structure:** one book, six parts, 20 chapters, six appendices
- **Role:** Agentic AI Engineer
- **Catalog position:** 3 of 32
- **Primary case:** FieldOps Relay, a fictional service-work coordination agent
- **Capstone dossier prefix:** `AR`
- **Default companion:** local, provider-neutral, deterministic, sandboxed, no
  paid API or secret required

## Series thesis

Professional agentic engineering is the discipline of converting justified
model-directed autonomy into bounded, inspectable, evaluable, recoverable task
execution across tools, state, people, and production systems.

## Reader promise

The reader will learn to make defensible decisions about whether and how a
system may act: design the loop and capability surface, preserve authority and
state, choose an orchestration topology, survive partial failure, evaluate
trajectories and effects, contain security risk, operate the system, and evolve
it without losing evidence.

The book promises professional judgment and an executable evidence chain, not
mastery of every current framework.

## Audience at entry

- experienced software, Applied AI, LLM, ML, platform, or automation engineers;
- technical leads and architects responsible for production agent systems;
- SRE, security, and product partners seeking implementation-depth literacy.

This is not a beginner programming or introductory generative-AI book.

## Prerequisites

Readers should be able to:

- build and test a service with typed APIs and persistent state;
- reason about async work, retries, failures, credentials, and observability;
- use LLM APIs, prompts, structured outputs, and retrieval at working depth;
- interpret task-specific evaluation evidence and basic distributions;
- use version control and read Python or TypeScript-style pseudocode.

The appendices provide concise refreshers, not substitute courses.

## Reader capability at exit

A successful reader can:

1. reject unnecessary autonomy and select a bounded agent topology when it is
   justified;
2. specify a goal, completion predicate, allowed actions, consequences,
   authority, budgets, non-goals, and stop/escalation behavior;
3. implement an inspectable run loop with explicit state and deterministic
   enforcement around model-selected actions;
4. design narrow, typed, authorized tools with credible error, effect,
   idempotency, and compensation semantics;
5. manage context, state, artifacts, and memory by provenance, freshness,
   permission, isolation, retention, and deletion;
6. choose and validate single-agent, router/worker, reviewer, and multi-agent
   patterns without rewarding complexity;
7. engineer durable execution across cancellation, retries, duplicate events,
   partial effects, handoffs, and deployment changes;
8. evaluate tasks, trajectories, tool calls, state transitions, side effects,
   controls, recovery, and final outcomes in a representative environment;
9. implement agent-specific identity, authorization, approval, sandbox,
   monitoring, and human-authority controls while preserving specialist roles;
10. release, observe, diagnose, contain, recover, and improve production runs;
11. version protocols, models, tools, policies, and harnesses and replay evidence
    through change;
12. distinguish a reusable agent capability from premature platform work and
    communicate uncertainty at the correct decision altitude.

## Non-scope

- broad Applied AI product development across non-agentic mechanisms;
- beginner LLM, prompt, RAG, or software-engineering instruction;
- foundation-model training, inference research, or novel planning algorithms;
- framework or cloud certification;
- generalized ML platform, IAM, cloud, SRE, data, FinOps, or security curricula;
- customer-engagement ownership, commercial discovery, or adoption programs;
- legal, privacy, compliance, safety, clinical, financial, or physical-world
  risk authorization;
- speculative AGI, consciousness, or fully autonomous organizations.

## Relationship to adjacent Komal books

- **Applied AI Engineering** decides among rules, search, ranking, predictive,
  generative, and agentic mechanisms and owns overall AI product behavior.
  This book assumes meaningful model-directed action and teaches its deeper
  execution semantics.
- **LLM Engineering** will own language-model-specific context, adaptation,
  inference, and generative behavior. This book treats a model as one component
  in an action loop.
- **Machine Learning Engineering** will own generalized data/model pipelines,
  training, serving, and model lifecycle.
- **Forward Deployed Engineering** owns the complete customer engagement,
  adoption, stabilization, and handoff; FieldOps Relay is a product-system
  case, not an embedded-client engagement.
- **AI Evaluation Engineering** will own evaluation science and generalized
  infrastructure. This book owns the evidence required to release and repair
  its particular agent system.
- **AI Security / Safety** own specialist threat and assurance depth. This book
  implements agent controls and preserves their formal authority.
- **MLOps / Platform / SRE** own generalized shared services. This book defines
  agent run, state, action, and recovery semantics on top of them.

## Learning progression

1. **Permission to act:** distinguish an agent from a workflow and contract the
   goal, consequence, authority, and stop conditions.
2. **Action surface:** build the loop, tools, identity boundary, and state model.
3. **Execution structure:** earn orchestration complexity and make long-running
   work durable, interruptible, and reviewable.
4. **Evidence:** evaluate the environment, trajectory, effects, and controls
   under realistic and adversarial conditions.
5. **Operation:** make runs diagnosable, budgeted, releasable, and recoverable.
6. **Evolution:** integrate protocols without surrendering semantics, replay
   change, and decide what deserves reuse.

Each part consumes and revises the same `AR-*` dossier. No chapter starts a
disconnected demo.

## Part and chapter architecture

### Part I — Decide What May Act

#### Chapter 1 — The Profession Behind the Agent

- **Meaningful job:** define the role by delegated-action accountability and
  separate model, agent, product, platform, and authority boundaries.
- **Reader decision:** identify whether a failure belongs to agentic engineering
  or an adjacent profession.
- **Produces:** `AR-01` responsibility charter and boundary memo.
- **Failure pressure:** the organization calls every LLM feature an agent and
  assigns one engineer ownership of product strategy, platform, safety, and
  business results.

#### Chapter 2 — Earn the Right to Use Autonomy

- **Meaningful job:** compare deterministic automation, assisted workflow,
  single agent, and multi-agent approaches by ambiguity, feedback, consequence,
  cost, and controllability.
- **Reader decision:** choose the least complex adequate execution model.
- **Produces:** `AR-01` task model, baseline, autonomy ladder, and rejection log.
- **Failure pressure:** a fixed state machine works, but leadership wants a
  multi-agent demonstration.

#### Chapter 3 — Contract the Goal, Actions, and Authority

- **Meaningful job:** specify completion, allowed/prohibited actions,
  consequence classes, budgets, uncertainty, approvals, escalation, and stop.
- **Reader decision:** make a delegated task testable before choosing tools.
- **Produces:** `AR-02` goal/action/authority contract.
- **Failure pressure:** “resolve the request” permits irreversible action with no
  named owner or completion evidence.

### Part II — Build the Action Surface

#### Chapter 4 — Make the Loop Inspectable

- **Meaningful job:** design observe/decide/act/verify progression with explicit
  run states, events, limits, cancellation, and deterministic enforcement.
- **Reader decision:** choose what the model may decide and what code must
  enforce.
- **Produces:** `AR-03` harness state machine and event contract.
- **Failure pressure:** an agent loops until the model says it is finished.

#### Chapter 5 — Treat Tools as Capabilities, Not Functions

- **Meaningful job:** design typed tools with narrow intent, pre/postconditions,
  errors, effect classes, idempotency, compensation, and test doubles.
- **Reader decision:** decide whether a capability is safe and legible enough to
  expose.
- **Produces:** `AR-04` capability catalog and tool contract suite.
- **Failure pressure:** a generic `run_sql` or `call_api` tool exposes authority
  far beyond the task.

#### Chapter 6 — Bind Identity, Delegation, and Consent

- **Meaningful job:** propagate user/service/agent/task identity, scope rights,
  bind approvals, separate proposal from execution, and make revocation real.
- **Reader decision:** determine which principal may authorize each effect.
- **Produces:** `AR-05` identity, delegation, approval, and audit design.
- **Failure pressure:** a background agent retains a user's broad token after
  the task or consent window ends.

#### Chapter 7 — Engineer State, Context, Artifacts, and Memory

- **Meaningful job:** distinguish authoritative workflow state, prompt context,
  scratch state, durable artifacts, preferences, and derived memory.
- **Reader decision:** choose what persists, why, for whom, and under which
  provenance, isolation, retention, and deletion rules.
- **Produces:** `AR-06` state/memory lifecycle and context assembler.
- **Failure pressure:** untrusted document text becomes durable memory and later
  controls a privileged tool.

### Part III — Orchestrate Work That Must Endure

#### Chapter 8 — Start With One Agent

- **Meaningful job:** build a capable single-agent baseline using deterministic
  structure, tool grouping, policy variables, and bounded planning.
- **Reader decision:** identify complexity that can be removed before adding
  agents.
- **Produces:** `AR-07` executable single-agent vertical slice and baseline.
- **Failure pressure:** a framework's abstraction hides state and failure paths.

#### Chapter 9 — Add Handoffs and Multiple Agents Only With Evidence

- **Meaningful job:** compare router, specialist, worker, reviewer, debate, and
  remote-agent structures; define handoff, state, ownership, cancellation, and
  aggregation contracts.
- **Reader decision:** decide whether separation improves measurable outcomes
  enough to pay its coordination cost.
- **Produces:** `AR-07` topology experiment and handoff contract.
- **Failure pressure:** two agents duplicate an effect after a timeout and each
  believes the other owns recovery.

#### Chapter 10 — Make Execution Durable and Effects Recoverable

- **Meaningful job:** checkpoint runs; implement leases, retries, deduplication,
  idempotency, compensation, resume, and ambiguous-effect reconciliation.
- **Reader decision:** classify failures as retry, resume, compensate, escalate,
  or stop.
- **Produces:** `AR-08` durable-execution and recovery packet.
- **Failure pressure:** a process crashes after an external effect succeeds but
  before the success is recorded.

#### Chapter 11 — Design Human Checkpoints That Can Actually Work

- **Meaningful job:** distinguish information request, review, confirmation,
  approval, intervention, takeover, and formal authorization; design timing and
  evidence for each.
- **Reader decision:** place a human decision where it is meaningful and
  operationally possible.
- **Produces:** `AR-08` human-authority workflow and takeover runbook.
- **Failure pressure:** an approval arrives after a time-sensitive action has
  already executed or the reviewer cannot see the relevant evidence.

### Part IV — Prove the Trajectory and Its Effects

#### Chapter 12 — Build a Representative Task Environment

- **Meaningful job:** define initial state, available tools, hidden constraints,
  success predicates, consequence segments, perturbations, and held-out tasks.
- **Reader decision:** determine what the harness can and cannot support.
- **Produces:** `AR-09` environment and task-set card.
- **Failure pressure:** a benchmark removes authorization, time, and tool errors,
  so the tested agent is not the deployed system.

#### Chapter 13 — Evaluate Outcomes, Actions, State, and Efficiency

- **Meaningful job:** construct trajectory schemas, deterministic assertions,
  state/effect checks, calibrated graders, human review, and segment reports.
- **Reader decision:** select credible evidence for each claim and consequence.
- **Produces:** `AR-09` evaluation system, taxonomy, and release gate.
- **Failure pressure:** final answer quality rises while invalid tool arguments,
  extra actions, and silent state corruption increase.

#### Chapter 14 — Attack Assumptions and Inject Failure

- **Meaningful job:** test direct/indirect injection, tool poisoning, confused
  authority, data exfiltration, cross-tenant state, approval bypass, timeouts,
  partial effects, and deceptive success signals.
- **Reader decision:** contain a failure at the narrowest credible boundary and
  state residual limits.
- **Produces:** `AR-10` threat/fault model, control matrix, and adversarial suite.
- **Failure pressure:** retrieved service notes instruct the agent to reveal a
  secret and call an unrelated privileged tool.

### Part V — Operate What Acts

#### Chapter 15 — Trace Runs Without Turning Logs Into Surveillance

- **Meaningful job:** design events and traces across model, tool, state, agent,
  service, approval, and effect boundaries with minimization and retention.
- **Reader decision:** locate the responsible transition without logging every
  sensitive payload.
- **Produces:** `AR-11` trace schema, run explorer, signal catalog, and redaction
  policy.
- **Failure pressure:** the team can see model latency but not which action or
  state transition caused an incorrect external effect.

#### Chapter 16 — Budget Quality, Time, Cost, and Capacity

- **Meaningful job:** model distributions for completion, turns, tokens, tool
  calls, elapsed time, queueing, concurrency, external cost, and tail risk.
- **Reader decision:** choose limits, degradation, routing, and capacity from
  consequence-aware evidence.
- **Produces:** `AR-11` operational envelope and load/cost experiments.
- **Failure pressure:** average cost is acceptable while rare loops exhaust a
  shared rate limit and block high-priority work.

#### Chapter 17 — Release, Interrupt, Recover, and Learn

- **Meaningful job:** move through replay, simulation, shadow, read-only,
  approval-required, bounded cohort, and broader release with kill/rollback
  triggers and incident learning.
- **Reader decision:** select the smallest exposure that answers the next
  question and know when to halt.
- **Produces:** `AR-12` readiness, rollout, incident, and verified-correction
  packet.
- **Failure pressure:** an agent completes tasks faster but creates duplicate
  work orders after a retry storm.

### Part VI — Evolve Without Losing Control

#### Chapter 18 — Interoperate Without Surrendering Semantics

- **Meaningful job:** place tool/context and agent-to-agent protocols behind
  local contracts; validate discovery, capability claims, identity, versions,
  timeouts, and remote ownership.
- **Reader decision:** decide what an MCP/A2A or custom adapter can standardize
  and what remains application-specific.
- **Produces:** `AR-13` protocol adapter and interoperability contract.
- **Failure pressure:** a remote agent's advertised capability changes while
  local policy still assumes the old effect and approval semantics.

#### Chapter 19 — Replay Change Across Model, Tool, Policy, and Harness

- **Meaningful job:** inventory behavior-affecting components, preserve version
  evidence, replay tasks, compare trajectories, migrate state, and retire safely.
- **Reader decision:** distinguish compatible change from a new system claim.
- **Produces:** `AR-13` compatibility matrix and migration disposition.
- **Failure pressure:** a model update improves completion but increases
  unnecessary actions and ignores more stop requests.

#### Chapter 20 — Lead the Evidence, Not the Hype

- **Meaningful job:** review systems at portfolio altitude, establish action and
  evidence standards, choose reusable seams, define platform handoff, mentor,
  and communicate uncertainty without absorbing other authorities.
- **Reader decision:** determine what has earned reuse and which agent should be
  reduced, repaired, or retired.
- **Produces:** `AR-14` capstone defense, pattern ledger, reuse/platform proposal,
  and leadership brief.
- **Failure pressure:** one successful pilot is declared an enterprise agent
  platform and broad autonomy is treated as a strategic target.

## Chapter existence audit

| Chapter | Conceptual model | Professional skill | Architecture | Implementation | Diagnosis / operations | Tradeoff / project advance |
| ---: | :---: | :---: | :---: | :---: | :---: | :---: |
| 1 | yes | yes |  |  |  | yes |
| 2 | yes | yes |  |  |  | yes |
| 3 | yes | yes | yes |  |  | yes |
| 4 | yes | yes | yes | yes | yes | yes |
| 5 | yes | yes | yes | yes | yes | yes |
| 6 | yes | yes | yes | yes | yes | yes |
| 7 | yes | yes | yes | yes | yes | yes |
| 8 |  | yes | yes | yes | yes | yes |
| 9 | yes | yes | yes | yes | yes | yes |
| 10 | yes | yes | yes | yes | yes | yes |
| 11 | yes | yes | yes | yes | yes | yes |
| 12 | yes | yes | yes | yes |  | yes |
| 13 | yes | yes |  | yes | yes | yes |
| 14 | yes | yes | yes | yes | yes | yes |
| 15 | yes | yes | yes | yes | yes | yes |
| 16 | yes | yes | yes | yes | yes | yes |
| 17 | yes | yes | yes | yes | yes | yes |
| 18 | yes | yes | yes | yes | yes | yes |
| 19 | yes | yes | yes | yes | yes | yes |
| 20 | yes | yes | yes |  | yes | yes |

Every chapter performs at least two meaningful jobs and changes an `AR-*`
decision or artifact.

## Provisional competency domains

These `AGE-K*` domains guide the Komal book; they are not an Abhyaas standard.

1. `AGE-K01` — agent suitability and action contracts
2. `AGE-K02` — loop, harness, and run-state engineering
3. `AGE-K03` — tools and capability interfaces
4. `AGE-K04` — state, context, artifacts, and memory
5. `AGE-K05` — identity, authorization, delegation, and consent
6. `AGE-K06` — orchestration, handoffs, and multi-agent coordination
7. `AGE-K07` — durable execution, effects, and recovery
8. `AGE-K08` — task, trajectory, state, action, and outcome evaluation
9. `AGE-K09` — security controls and human authority
10. `AGE-K10` — observability, performance, and AgentOps
11. `AGE-K11` — release, interoperability, and change
12. `AGE-K12` — technical leadership and evidence-earned reuse

The authoritative mapping is `competency-to-chapter.csv`.

## Project progression

The capstone, **FieldOps Relay**, coordinates a fictional, low-stakes service
request over deterministic synthetic equipment, knowledge, technician,
inventory, and scheduling data. It may inspect records and produce proposals.
It may reserve a synthetic appointment or part only after explicit approval in
the local sandbox. No real external system or credential is used.

The case was chosen because it provides:

- heterogeneous read and effectful tools;
- deadlines, partial information, and conflicting observations;
- action authority and human approval;
- long-running state, handoffs, retries, and compensation;
- measurable task outcomes and consequential failure without pretending the
  system controls a real industrial process.

The full milestone chain is specified in `project-map.md`.

### Satellite-case requirement

Every durable method must withstand at least one contrast:

- a code-change agent with repository and CI tools;
- an IT access-request agent with identity/approval constraints;
- a customer-service remedy agent with financial effect boundaries;
- a research agent where source quality and coverage matter;
- a document-processing workflow where an agent should be rejected.

Satellite cases test transfer; they do not become second capstones or borrowed
company stories.

## Terminology standard

- **Agent:** a system in which a model can select and sequence tool-mediated
  actions toward a goal using observed state within bounded authority.
- **Workflow:** predetermined control flow, even if one step calls a model.
- **Agentic system:** umbrella term; use `agent` only when model-directed control
  is material.
- **Harness:** deterministic software surrounding model choice: state machine,
  tools, policies, limits, event handling, validation, and runtime integration.
- **Run:** one versioned attempt to complete a task, with stable identity,
  initial state, budgets, events, outcome, and disposition.
- **Trajectory:** ordered observations, decisions, tool calls, effects, state
  transitions, handoffs, approvals, errors, and outputs in a run.
- **Tool / capability:** a typed interface that exposes bounded data,
  computation, communication, or effect semantics.
- **Observation:** validated result made available to the run; not automatically
  trusted instruction or authoritative state.
- **Authoritative state:** externally or deterministically validated workflow
  facts; distinct from model context or derived memory.
- **Memory:** retained derived information intended to influence future runs;
  always qualified by scope, provenance, permission, retention, and deletion.
- **Effect:** a state change outside the agent's private reasoning/context.
- **Delegation:** bounded authority granted by a principal for a task, scope,
  duration, and consequence class.
- **Approval:** named authority permits a proposed effect using stated evidence;
  not a decorative UI click.
- **Compensation:** a defined follow-up action that mitigates a completed effect;
  not proof the original effect was transactionally rolled back.
- **Handoff:** transfer of task responsibility plus state, authority, evidence,
  and completion expectations—not merely a message.
- **Guardrail:** only a specific implemented mechanism; never a vague safety
  claim.
- **AgentOps:** agent-specific evaluation, tracing, runtime, release, incident,
  and change practices; it does not replace MLOps, platform engineering, or SRE.

## Source and claim conventions

- Phase 01 evidence uses `AGE-SRC-*` and `AGE-CLM-*`.
- Phase 06 book sources will use `AGE-BSRC-*`; manuscript claims use
  `AGE-BCLM-*` so occupation evidence cannot silently stand in for technical
  evidence.
- Every material, externally verifiable claim maps to a structured record.
- Chapter packs distinguish source statement, author inference, fictional-case
  decision, and normative recommendation.
- Employer postings support role patterns only; they do not establish best
  practice.
- Protocols, models, APIs, frameworks, prices, legal requirements, benchmarks,
  and product behavior receive dates/versions and limitations.
- Real incidents may be analyzed only from public primary evidence; no facts are
  transferred into FieldOps Relay without labeling it fictional synthesis.

## Artifact and cross-reference conventions

- Stable dossier artifacts use `AR-01` through `AR-14` plus semantic version,
  owner, status, input evidence, assumptions, limitations, and change history.
- Chapters extend or supersede artifacts explicitly; no silent replacement.
- Figures use `F<chapter>.<sequence>`; every reference names the exact ID and
  chapter.
- Exercises state inputs, action/authority decision, expected artifact,
  observable evidence, failure injection, and adjacent-role limit.
- Tables carry exact mappings; ImageGen raster art carries spatial, causal,
  state, sequence, or memory relationships with external captions and legends.

## Code conventions

- The default companion runs locally without paid services, external effects,
  secret credentials, or a live model provider.
- A deterministic model double chooses from bounded actions so harness, state,
  permission, failure, and evaluation behavior is reproducible.
- Tools operate only on a temporary/sandboxed synthetic environment and expose
  typed results, idempotency keys, effect records, and injected failures.
- Provider and protocol adapters are optional and isolated behind stable local
  interfaces.
- Tests cover state machines, tool schemas, identity/scope, approvals,
  idempotency, retry/resume, handoffs, cancellation, evaluation, traces,
  redaction, budgets, and change replay—not prompt snapshots alone.
- No example may send a real message, alter a real account, modify an external
  repository, or invoke a destructive effect by default.

## Visual language and production rule

The user has explicitly overridden the earlier vector preference:

- all book art is generated through **ImageGen** as crisp raster artwork;
- create no SVG assets;
- favor colorful, artistic, dimensional 3D or realistic technical scenes;
- use the Komal guide mascot only when her presence is pedagogically useful,
  never as decorative clutter;
- when the mascot is justified, use ImageGen with Komal's original-photo
  identity references under `/Applications/ServBay/www/komal/mascot/`, led by
  `original-face-identity-board.png` and `identity-sources/`; a generic mascot
  or altered identity is not acceptable;
- explanatory figures may include short essential labels when they materially
  improve comprehension; labels must be spelled correctly, remain legible at
  publication size, and be regenerated or repaired in raster form if they fail;
  captions, legends, and long descriptions still carry full accessible meaning;
- every image must remove a learning problem and pass technical, mobile, PDF,
  alt-text, and provenance review.

The complete plan is `visual-forecast.md`. Phase 05 creates specifications only;
root visual production will generate actual assets with ImageGen.

## Edition and version scheme

- Architecture begins at `1.0.0` when Phase 05 is accepted.
- Book edition begins at `1.0.0` only after final hostile QA.
- Chapter numbers remain stable within an edition; structural change requires an
  architecture decision record.
- Source, claim, dossier, protocol, adapter, fixture, and figure IDs are stable.
- Generated raster figures record ImageGen disclosure, prompt/spec version,
  output hash, derivatives, and QA status.
- Corrections enter a visible errata/change record; no silent PDF replacement.

## Appendix architecture

1. **A — Agent System and Distributed Failure Refresher:** queues, timeouts,
   leases, idempotency, consistency, cancellation, and compensation at task
   depth.
2. **B — Action-System Artifact Templates:** autonomy, goal/action/authority,
   capability, state/memory, handoff, recovery, evaluation, trace, and release
   records.
3. **C — Threat, Control, and Human-Authority Checklists:** compact prompts for
   identity, injection, effects, approvals, audit, privacy, and residual limits.
4. **D — Provider-Neutral Companion Guide:** local setup, sandbox, deterministic
   model/tool doubles, event store, fault injection, and optional adapters.
5. **E — Protocol and Portability Notes:** versioned MCP/A2A concepts, local
   contract mapping, compatibility questions, and vendor-neutral seams.
6. **F — Terminology, Sources, Figures, and Edition Records:** glossary,
   provenance, visual disclosure, errata, and index conventions.

## Expected manuscript allocation

- front matter and orientation: 4,000–5,000 words;
- Part I: 18,000–21,000;
- Part II: 28,000–32,000;
- Part III: 26,000–30,000;
- Part IV: 21,000–24,000;
- Part V: 21,000–24,000;
- Part VI: 16,000–19,000;
- appendices: 11,000–14,000.

Target total: approximately 135,000–155,000 original words, excluding source
records and executable code. These are depth controls, not quotas.

## Phase 06 handoff

Phase 06 must create a source/claim register and one evidence pack per frozen
chapter. Each pack identifies:

- claims requiring current or durable primary evidence;
- contradictory definitions and implementation choices;
- FieldOps Relay decisions and synthetic-data needs;
- at least one satellite-case stress test;
- evaluation, security, identity, operations, and adjacent-role limits;
- provisional ImageGen visual specifications and learning problems;
- unresolved research gaps.

Phase 06 may refine evidence and examples but cannot change the title, one-book
decision, 20-chapter list, case identity, role boundary, or ImageGen-only raster
policy without a versioned architecture change record.
