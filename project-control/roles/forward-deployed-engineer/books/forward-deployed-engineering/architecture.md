# Forward Deployed Engineering

## Book identity

- **Title:** *Forward Deployed Engineering*
- **Subtitle:** *From Ambiguous Workflow to Production Outcome*
- **Canonical slug:** `forward-deployed-engineering`
- **Role:** Forward Deployed Engineer (FDE)
- **Format:** one book, five parts, nineteen chapters, five appendices
- **Edition line:** 1.x
- **Architecture version:** 1.0.0

## Thesis

A professional Forward Deployed Engineer converts an ambiguous, high-value customer workflow into a secure, adopted, supportable production system and converts field evidence into reusable product leverage.

## Reader promise

You will learn to own a complex deployment as a decision system: discover how work really happens, contract for measurable outcomes, scope a safe production path, architect and build across customer constraints, prove quality and control, launch and stabilize, transfer ownership, and turn field learning into reusable product capability.

The book does not promise expertise in every industry or technology. It teaches the artifacts, engineering practices, questions, evidence, and boundary judgment that transfer across employers and platforms.

## Audience at entry

Primary readers are software, data, ML/AI, platform, solutions, implementation, or customer-facing engineers preparing for FDE work or already performing it without a coherent operating model.

The expected reader:

- has roughly two or more years of production engineering exposure, or equivalent depth from substantial projects;
- can read and modify application code, APIs, configuration, structured data, tests, and logs;
- understands basic networking, identity/access, databases, deployment environments, version control, and CI/CD concepts;
- has participated in at least one system delivery or production incident;
- can communicate technical tradeoffs in writing.

The book is accessible to earlier-career engineers through appendices and explicit artifact models, but it is not a programming primer.

## Reader capability at exit

Given an unfamiliar customer workflow, incomplete information, competing stakeholders, legacy systems, security constraints, and a fixed delivery horizon, the reader can:

1. produce a defensible workflow and problem model;
2. define measurable outcomes, guardrails, decision rights, non-goals, and exit criteria;
3. scope and sequence the smallest safe production path;
4. design integration, data, identity, operating, and ownership boundaries;
5. implement and diagnose a production vertical slice;
6. create test, evaluation, UAT, security, reliability, and release evidence;
7. execute staged rollout, rollback, incident response, and stabilization;
8. remove technical adoption blockers and complete an operable handoff;
9. distinguish customer-specific code from reusable platform leverage;
10. lead stakeholder decisions and escalate beyond personal authority;
11. explain when a specialist or adjacent role must own the next decision.

## Provisional Komal competency domains

These publication domains derive from Phase 01 evidence and govern the book. They are not represented as an Abhyaas certification standard. When Abhyaas resumes, its competency/objective IDs must be reconciled through a documented coverage review.

| ID | Domain | Required capability |
| --- | --- | --- |
| FDE-K01 | Role, ethics, and outcome ownership | Hold the deployed outcome while respecting authority, safety, and adjacent-role boundaries. |
| FDE-K02 | Workflow discovery and domain learning | Build evidence-backed models of work, users, decisions, data, exceptions, incentives, and failure cost. |
| FDE-K03 | Outcome contracts, scope, and sequencing | Define success and guardrails, control scope, expose dependencies, and sequence a safe path to value. |
| FDE-K04 | Architecture and customer integration | Define system, interface, deployment, and ownership boundaries under customer constraints. |
| FDE-K05 | Production engineering | Build, test, review, diagnose, and maintain production-grade application and automation code. |
| FDE-K06 | Data contracts and quality | Integrate bounded data paths with explicit semantics, lineage, validation, and exception handling. |
| FDE-K07 | AI/model integration and evaluation | Use AI conditionally; measure behavior, define controls, and connect model quality to workflow risk. |
| FDE-K08 | Security, privacy, governance, and compliance | Discover risk, design controls, produce evidence, respect formal authority, and escalate responsibly. |
| FDE-K09 | Verification, reliability, and operations | Make production claims testable through acceptance evidence, telemetry, objectives, recovery, and operations. |
| FDE-K10 | Rollout, adoption, enablement, and handoff | Cross the production threshold safely and leave a used, stable, supportable system. |
| FDE-K11 | Field learning and product leverage | Convert repeated evidence into reusable components, playbooks, and product feedback without premature abstraction. |
| FDE-K12 | Engagement leadership and portfolio judgment | Align decisions, manage ambiguity and tradeoffs, communicate evidence, and lead multiple deployments. |

## Learning progression

The book follows the deployment lifecycle but repeatedly loops backward when new evidence changes an earlier assumption.

### Part I — Own the Outcome

Establish the role boundary, enter a customer system responsibly, discover real work, and convert evidence into an outcome contract and executable scope.

### Part II — Design the Deployment

Draw the real system boundary, integrate data and interfaces, account for deployment environments, bound AI behavior, and build controls into architecture.

### Part III — Build Evidence Into the System

Create a production vertical slice, verify behavior, make it observable and operable, and engineer repeatable release and recovery.

### Part IV — Launch Into Reality

Pass readiness gates, roll out safely, stabilize through real failures, enable users and operators, and transfer ownership.

### Part V — Turn Delivery Into Leverage

Separate one-off customer work from reusable product capability and grow from one engagement to portfolio-level judgment.

## Chapter architecture

### Part I — Own the Outcome

| Ch. | Title | Meaningful job | Reader capability at exit | Capstone artifact | Primary domains |
| ---: | --- | --- | --- | --- | --- |
| 1 | The Deployed Outcome | Introduces the role's unit of accountability, lifecycle, boundaries, and ethical stance. | Diagnose whether a task is FDE core, shared, supporting, or outside scope; define “done” as a production outcome. | FDE responsibility charter and boundary memo | K01, K12 |
| 2 | Enter the Customer System | Teaches evidence discipline, domain learning, stakeholder access, trust, confidentiality, and authority. | Plan discovery without pretending to domain expertise or collecting unnecessary access/data. | Discovery plan, stakeholder map, evidence log | K01, K02, K08 |
| 3 | Map the Workflow That Actually Exists | Builds professional workflow discovery and diagnosis skill. | Model actors, decisions, state, data, tools, exceptions, incentives, handoffs, and failure cost; test the model with users. | Current-state workflow, exception taxonomy, problem statement | K02 |
| 4 | Contract for an Outcome | Teaches measurable outcomes, guardrails, adoption, decision rights, assumptions, and non-goals. | Turn workflow evidence into an outcome contract that can reject a convincing but useless prototype. | Outcome contract, metric tree, decision-rights map | K01, K03, K10 |
| 5 | Scope the First Safe Production Path | Teaches vertical slicing, dependency exposure, uncertainty reduction, estimation, sequencing, and tradeoffs. | Select and defend the smallest safe production path; structure reversible milestones and exit criteria. | Scope boundary, dependency map, milestone plan, risk register | K03, K08, K12 |

### Part II — Design the Deployment

| Ch. | Title | Meaningful job | Reader capability at exit | Capstone artifact | Primary domains |
| ---: | --- | --- | --- | --- | --- |
| 6 | Draw the Real System Boundary | Teaches architecture as responsibility, trust, data, runtime, and failure boundaries—not boxes alone. | Produce a context/container design with explicit ownership, assumptions, failure propagation, and build/buy/reuse decisions. | Architecture decision set and responsibility-boundary diagram | K04, K08, K09 |
| 7 | Make Interfaces and Data Explicit | Teaches contracts for APIs, events, schemas, semantics, quality, lineage, idempotency, and exceptions. | Design integration and data contracts that survive messy customer systems and operational retries. | Interface catalog, canonical data contract, quality rules, reconciliation plan | K04, K06, K09 |
| 8 | Fit the Customer Environment | Explains cloud/VPC/on-prem topology, identity, secrets, networking, configuration, tenancy, capacity, and environment parity. | Adapt a design to customer infrastructure without hiding operational or security ownership. | Deployment topology, identity flow, environment/configuration matrix | K04, K08, K09 |
| 9 | Put AI Inside a Bounded Workflow | Teaches when AI is appropriate, task decomposition, model/tool boundaries, evals, deterministic logic, human review, latency, and cost. | Design an AI-assisted path whose uncertainty and controls are visible; reject AI where it weakens the workflow. | AI decision record, error taxonomy, eval plan, control ladder | K03, K07, K08, K09 |
| 10 | Build Security and Governance Into Delivery | Teaches threat/risk discovery, least privilege, data handling, privacy, auditability, control evidence, formal authority, and escalation. | Integrate controls into scope and architecture and produce evidence without impersonating legal, security, or authorizing roles. | Threat/risk model, control matrix, data-handling record, approval path | K01, K04, K08 |

### Part III — Build Evidence Into the System

| Ch. | Title | Meaningful job | Reader capability at exit | Capstone artifact | Primary domains |
| ---: | --- | --- | --- | --- | --- |
| 11 | Build a Production Vertical Slice | Teaches implementation strategy across UI/API/automation/integration boundaries, code quality, flags, migration, and supportability. | Build one end-to-end path with production constraints, representative data, controlled failure behavior, and reviewable code. | Running vertical slice, repository map, technical debt register | K04, K05, K06 |
| 12 | Prove Behavior Before Production | Teaches test strategy, contract/integration tests, task evals, UAT, adversarial cases, traceability, and release evidence. | Construct an evidence system that connects requirements and workflow risk to automated tests, evals, UAT, and known limitations. | Verification matrix, test/eval suite, UAT protocol, release evidence packet | K05, K07, K08, K09 |
| 13 | Make the System Observable and Operable | Teaches telemetry design, service objectives, model/workflow quality signals, alerting, capacity, performance, cost, and diagnostic paths. | Detect whether the system is healthy, useful, safe, and affordable—and know which evidence to inspect first. | Signal catalog, dashboards, SLOs, alert/runbook links, capacity/cost model | K07, K09, K10 |
| 14 | Engineer Release and Recovery | Teaches environments, configuration, CI/CD evidence, migrations, feature control, rollback/roll-forward, backups, and recovery rehearsal. | Produce a repeatable release path and demonstrate recovery from realistic failure. | Release pipeline, migration/rollback plan, recovery rehearsal record | K05, K08, K09 |

### Part IV — Launch Into Reality

| Ch. | Title | Meaningful job | Reader capability at exit | Capstone artifact | Primary domains |
| ---: | --- | --- | --- | --- | --- |
| 15 | Cross the Production Threshold | Teaches production-readiness gates, rollout patterns, cutover, communications, go/no-go decisions, and evidence gaps. | Select and execute a rollout strategy whose blast radius, decision authority, rollback trigger, and success evidence are explicit. | Readiness review, rollout plan, go/no-go record, launch communications | K03, K08, K09, K10 |
| 16 | Stabilize Under Real Conditions | Teaches incident command, triage, customer communication, containment, correction, learning, and stabilization exit criteria. | Lead the technical response to a deployment incident and distinguish emergency repair from durable correction. | Incident timeline, decision log, corrective-action plan, stabilization report | K01, K05, K09, K10, K12 |
| 17 | Make the Solution Usable and Ownable | Teaches adoption diagnosis, enablement, workflow fit, documentation, support model, knowledge transfer, ownership acceptance, and disengagement. | Remove technical adoption friction and complete a handoff that is evidenced by customer capability, not document delivery alone. | Adoption review, enablement plan, support/RACI model, handoff acceptance | K02, K03, K10, K12 |

### Part V — Turn Delivery Into Leverage

| Ch. | Title | Meaningful job | Reader capability at exit | Capstone artifact | Primary domains |
| ---: | --- | --- | --- | --- | --- |
| 18 | Turn Field Evidence Into Product Leverage | Teaches pattern thresholds, customer-specific versus reusable work, abstraction timing, playbooks, product feedback, and outcome reviews. | Propose reusable capability with evidence while preserving customer isolation and avoiding premature platform design. | Outcome review, pattern ledger, reuse proposal, field-to-product memo | K05, K11, K12 |
| 19 | Lead Beyond One Deployment | Teaches portfolio triage, multi-engagement risk, staffing, delegation, executive communication, escalation, technical strategy, and career development. | Allocate attention across deployments, communicate evidence at multiple altitudes, and define a personal growth path without losing engineering depth. | Portfolio review, escalation memo, operating cadence, growth plan | K01, K03, K11, K12 |

## Chapter existence audit

Every chapter performs at least one required job:

- Chapters 1, 4, 6, 9, and 10 introduce or extend conceptual/decision models.
- Chapters 2, 3, 5, 7, 11, 12, 13, 14, 15, 16, and 17 build professional skills and artifacts.
- Chapters 6–14 teach architecture, implementation, verification, diagnosis, or operations.
- Chapters 5, 9, 10, 15, 16, 18, and 19 explicitly teach tradeoffs under uncertainty.
- Every chapter advances the capstone dossier; none exists only to increase chapter count.

## Original running case

### Orchid Equipment Services — assisted field-service resolution

Orchid Equipment Services (OES) maintains industrial equipment for distributed customers. Service requests arrive through inconsistent channels. Technicians search manuals, old tickets, inventory systems, and tribal knowledge before deciding what to inspect, which part to carry, and when to escalate. Leaders want an “AI copilot,” but the actual workflow contains safety-critical decisions, unreliable identifiers, regional data boundaries, legacy APIs, intermittent connectivity, and multiple ownership teams.

The reader joins a bounded deployment named **Orchid Assist**. It integrates ticketing, equipment registry, inventory/ERP, identity, curated manuals, and telemetry. AI may summarize evidence and propose ranked actions, but deterministic eligibility rules and qualified-human approval control safety-relevant recommendations.

The case is fictional and original. It must never imply endorsement by or factual claims about a real employer, product, or customer.

### Why this case supports the whole architecture

- The stated AI request can be reframed around resolution time, first-visit success, safety, and evidence quality.
- Data quality and integration are difficult enough to require real contracts and reconciliation.
- The system needs UI, APIs, automation, AI evaluation, deterministic rules, identity, audit, and operations.
- A staged rollout can begin with one equipment family and region.
- Safety, privacy, support, adoption, and handoff cannot be deferred.
- Repeated integration/evaluation patterns can become product leverage without making all customer code generic.

## Satellite-case requirements

Each part must include at least one short counterexample or transfer case. Across the book the set must cover:

- a non-AI infrastructure/platform deployment;
- a regulated document workflow;
- a public-sector or high-governance environment;
- a real-time voice or event-driven application;
- a data/analytics deployment with no generative model;
- an early-stage founding-FDE context and a mature multi-role team;
- at least one failed or stopped deployment where rejection is the correct outcome.

Satellite cases must change a decision, not merely decorate prose. They should show where the Orchid Assist pattern does not transfer.

## Project progression

The capstone is one versioned deployment dossier with executable and documentary evidence. Milestones are detailed in `project-map.md`.

1. role charter and discovery plan
2. verified current-state workflow
3. outcome contract and decision rights
4. safe vertical scope and delivery plan
5. architecture, interfaces, data, environment, AI, and control decisions
6. production vertical slice
7. verification and UAT evidence
8. observability, operations, release, and recovery evidence
9. readiness and staged rollout
10. incident stabilization and operable handoff
11. outcome review and reuse proposal

## Terminology standard

Use these terms consistently:

- **Forward Deployed Engineer (FDE):** canonical role. Use **FDSE** only when discussing the narrower employer title.
- **customer:** the organization receiving the deployment; not interchangeable with individual users.
- **user:** a person who performs or is affected by the workflow.
- **stakeholder:** a person or group with evidence, impact, influence, responsibility, or decision authority.
- **workflow:** the real sequence of decisions, actions, data, tools, handoffs, and exceptions that produces an operational result.
- **deployment:** the complete socio-technical change from scoped problem through production adoption and ownership—not merely copying software to an environment.
- **release:** a controlled change to software/configuration; a release may be one event inside a deployment.
- **production outcome:** measurable, sustained workflow value achieved within explicit guardrails in the live environment.
- **outcome metric:** evidence of intended workflow value.
- **guardrail metric:** evidence that value is not achieved by unacceptable harm, risk, cost, or degradation.
- **acceptance criterion:** a testable condition for a deliverable or gate.
- **exit criterion:** a testable condition for ending a phase, pilot, stabilization period, or engagement.
- **constraint:** a real boundary that shapes a solution; do not use it as a synonym for an untested assumption.
- **assumption:** an unverified proposition recorded with owner, consequence, and validation path.
- **decision right:** authority to make or approve a named decision.
- **vertical slice:** the smallest end-to-end path that crosses representative interfaces and constraints and produces usable evidence.
- **evaluation / eval:** systematic measurement of system behavior against task-relevant criteria; define the object and dataset whenever used.
- **UAT:** user acceptance testing against agreed workflow and acceptance criteria; not an informal demo.
- **stabilization:** the bounded period after rollout in which real operating evidence is used to correct defects and confirm ownership/readiness.
- **handoff:** evidence-backed transfer of operation, support, knowledge, and decision ownership.
- **product leverage:** reusable capability or learning supported by repeated field evidence, not customer-specific code renamed as a platform.

Avoid “solution,” “AI,” “ready,” “secure,” “reliable,” “done,” and “customer success” without naming the evidence or boundary meant.

## Cross-reference convention

- Refer to chapters as “Chapter 7, *Make Interfaces and Data Explicit*” on first nearby use and “Chapter 7” thereafter.
- Refer to capstone artifacts by stable IDs defined in `project-map.md`, such as `OA-04 Scope and Delivery Plan`.
- Refer to figures by chapter-scoped IDs, such as `F07.2`.
- Refer to external evidence through canonical source IDs in chapter research packs; manuscript citations resolve to edition source records.
- Use “Earlier” or “Later” only with a chapter or artifact reference; never rely on page numbers in source text.
- Do not repeat a complete model in a later chapter. Summarize the delta and link to the canonical explanation.

## Code and artifact convention

- Examples use provider-neutral interfaces first; vendor-specific implementations are explicitly labeled alternatives.
- All commands and code must be executable or clearly marked pseudocode.
- Every code sample identifies its role in the deployment, failure behavior, security boundary, and test evidence where material.
- Configuration excludes secrets and uses safe fictional identifiers/data.
- Capstone artifacts are versioned; later chapters modify them through explicit decision/change records.
- A “template” must include purpose, required inputs, completion criteria, and a filled case example.

## Visual system

Figures must explain relationships, sequences, boundaries, choices, evidence, or failure behavior. Decorative imagery is not part of the technical manuscript. `visual-forecast.md` defines the planned set and creation rules.

## Appendices

### Appendix A — Deployment dossier templates

Purpose, required inputs, completion criteria, and blank structures for the core artifacts.

### Appendix B — Gate and review checklists

Discovery readiness, architecture review, AI/control review, production readiness, incident stabilization, adoption, and handoff checks. Checklists summarize—not replace—the chapter decision models.

### Appendix C — Technical field references

Compact protocol, reliability, security, data-quality, evaluation, and rollout references used across implementations, with source links and version dates.

### Appendix D — Glossary and adjacent-role boundary

Canonical terminology, abbreviations, and concise “who owns what” comparisons.

### Appendix E — Orchid Assist dossier index

Artifact/version index, evidence trace, code/lab map, and final outcome review for the complete capstone.

## Edition and version scheme

- Book editions use semantic versioning: `MAJOR.MINOR.PATCH`.
- **MAJOR:** role boundary, thesis, lifecycle, or book architecture changes incompatibly.
- **MINOR:** substantial new/updated chapter material, case variation, standard, or technical practice without breaking the architecture.
- **PATCH:** factual, citation, code, typographic, link, or layout correction with no learning-architecture change.
- First publication target: `1.0.0`.
- Each edition records manuscript source hash, generated PDF hash, build timestamp, source-access cutoff, and errata disposition.
- Volatile tools and employer postings receive access/version dates; durable models are written independently of their interfaces.

## Source and claim standard

- Material technical or empirical claims require primary sources where available.
- Chapter research packs must identify claim, source, access date, stability, limitation, and intended manuscript use.
- Employer postings support role practice, not universal engineering truth.
- Standards and official documentation control normative or version-specific statements.
- Case-study facts must be sourced; the fictional Orchid case is clearly identified as constructed.
- Unsupported precision, composite anecdotes presented as facts, and unverifiable performance claims are prohibited.

## Architecture change control

Phase 06 research may refine examples and section emphasis but cannot silently change the thesis, chapter list, domain ownership, or capstone purpose. A change requires:

1. the new evidence or discovered contradiction;
2. affected domains, chapters, artifacts, and visuals;
3. duplication/gap analysis;
4. an architecture version decision; and
5. a GitHub issue comment plus state update.

## Phase 05 gate

The single-book architecture is actionable for source research. It preserves one coherent lifecycle, gives every chapter an observable professional job, advances one original capstone dossier, covers all provisional Komal domains, and keeps adjacent-role specialist depth out of scope.
