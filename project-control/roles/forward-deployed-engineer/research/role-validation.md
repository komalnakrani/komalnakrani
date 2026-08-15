# Forward Deployed Engineer — Role Validation

## Verdict

**PROCEED**

Use **Forward Deployed Engineer** as the canonical role name. Treat **FDE** as the standard abbreviation and **Forward Deployed Software Engineer (FDSE)** as a narrower engineering-heavy alias, not as a separate book subject.

## Why the role is valid

The evidence supports a durable standalone role rather than a company-specific label:

- OpenAI operates a named Forward Deployed Engineering function across multiple countries, management levels, and specializations. Palantir operates an international family spanning commercial, government, infrastructure, reliability, and autonomous-systems work. [FDE-CLM-005, FDE-CLM-006]
- Current employers in frontier models, voice AI, model infrastructure, commodities, and logistics converge on the same operating pattern: embed with customers, turn ambiguous workflows into technical scope, build production code and integrations, launch, stabilize, and drive adoption. [FDE-CLM-001 through FDE-CLM-004]
- The role has a distinct unit of ownership: the **deployed customer outcome**. A conventional product or specialist engineering role usually owns a codebase, platform, model, or data system; a solutions role usually owns advice and design; an FDE owns the technical engagement across those boundaries until it works in production. [FDE-CLM-011 through FDE-CLM-013]

## Canonical definition

A Forward Deployed Engineer is a customer-embedded production engineer who owns the technical path from an ambiguous, high-value operational problem to a secure, adopted, supportable production system—and turns field learning into reusable product leverage.

This definition has seven necessary elements:

1. **Customer and domain proximity** — direct work with users, domain experts, customer engineers, and decision-makers.
2. **End-to-end technical ownership** — discovery, scoping, architecture, implementation, rollout, stabilization, and handoff.
3. **Production-grade execution** — code, integrations, tests, telemetry, failure recovery, and operational documentation.
4. **Outcome accountability** — adoption, workflow impact, success criteria, reliability, and safe use.
5. **Constraint navigation** — security, privacy, compliance, networking, data, legacy systems, and organizational constraints.
6. **Cross-functional leadership** — coordinating product, engineering, research, security/GRC, go-to-market, customer success, and customer teams.
7. **Field-to-platform leverage** — reusable components, playbooks, patterns, and evidence-based product feedback.

Removing any one of the first four changes the role materially. A person who only advises is closer to solutions architecture; one who only builds an internal component is closer to software, ML, or data engineering; one who only manages adoption and relationships is closer to customer success or technical account management.

## Responsibility model

### 1. Discover and frame

- Map the real workflow, users, decision points, data, constraints, and failure cost.
- Separate the stated request from the operational problem.
- Define measurable success, adoption signals, non-goals, and exit criteria.
- Identify stakeholders, decision rights, dependencies, and deployment risk early.

### 2. Scope and architect

- Translate workflow evidence into a delivery sequence and system boundary.
- Select integration, data, model, application, and infrastructure patterns appropriate to the customer environment.
- Make explicit tradeoffs among scope, speed, quality, maintainability, and risk.
- Design for identity, access, privacy, compliance, observability, rollback, and support.

### 3. Build and integrate

- Write and review production-grade application, integration, automation, data, or evaluation code.
- Connect customer systems, APIs, data stores, identity systems, and deployment environments.
- Create tests, evaluation sets, acceptance checks, and diagnostic tooling.
- Resolve performance, networking, security, data-quality, and interoperability failures.

### 4. Launch and stabilize

- Plan staging, UAT, rollout, rollback, and production-readiness gates.
- Operate the system through launch, diagnose incidents, and remove adoption blockers.
- Establish telemetry, service objectives, runbooks, escalation paths, and ownership transfer.
- Demonstrate that the solution is safe, usable, reliable, and valuable in the actual workflow.

### 5. Enable and compound

- Train users and customer engineers at the depth needed for sustained adoption.
- Document operational decisions and remaining constraints.
- Extract reusable patterns without leaking customer-specific assumptions or data.
- Feed observed model, product, platform, and delivery gaps back to the owning teams.

## Typical deliverables

- problem and workflow map
- stakeholder/decision-rights map
- outcome contract with success and guardrail metrics
- technical scope and sequenced delivery plan
- architecture and integration design
- data-flow, identity/access, privacy, threat, and compliance notes
- working production code and configuration
- test, evaluation, UAT, and acceptance evidence
- observability and production-readiness checklist
- rollout, rollback, incident, and support runbooks
- user enablement and technical handoff materials
- deployment outcome review
- reusable component or playbook proposal
- field-to-product evidence memo

## Operating contexts

The role is credible across several contexts, but its implementation depth varies:

- **Enterprise application and data deployments:** workflow translation, integrations, data pipelines, and operational adoption.
- **AI/agent deployments:** evaluation design, model behavior, deterministic controls, human review, latency/cost, and safety.
- **Infrastructure/platform deployments:** customer environments, networking, identity, cloud/VPC/on-prem constraints, and reliability.
- **Regulated or public-sector deployments:** governance evidence, access boundaries, auditability, and domain-specific controls.
- **Early-stage founding FDE:** broader account and process ownership, often including definition of the employer's deployment method.

AI is a major current specialization, not the universal definition. The book must teach AI-specific deployment patterns where valuable while retaining a technology-neutral role core. [FDE-CLM-009]

## Stakeholders

- customer users and domain experts
- customer engineering, data, security, IT, operations, and leadership
- product and platform engineering
- applied AI/research or specialist engineering teams
- security, privacy, legal, compliance, and GRC
- solutions architecture, sales/partnerships, customer success, and technical account teams
- support, SRE/operations, and implementation partners

## Failure modes the role must prevent

- solving the request instead of the workflow problem
- a convincing prototype with no production path
- undefined success or adoption criteria
- hidden dependencies and unowned decisions
- customer-specific code that cannot be supported
- platform abstractions created too early from one customer
- weak data, evaluation, security, or compliance evidence
- launch without observability, rollback, incident ownership, or handoff
- adoption treated as a nontechnical afterthought
- field learning that never reaches product or platform teams

## Career and seniority shape

The evidence skews toward experienced engineers because the role combines engineering judgment, ambiguity, stakeholder influence, and production accountability. Junior or internship paths exist, especially in mature FDE organizations, but the fully autonomous role is normally senior. Progression can move toward staff/principal FDE, deployment technical lead, forward-deployed management, platform/product engineering, solutions architecture, or domain-specific leadership.

## Book architecture implications

The book must organize learning around an engagement lifecycle and decision system, not around a single vendor stack. It should make reusable engineering artifacts visible and assess judgment under incomplete information. The durable spine is:

1. role and outcome ownership
2. discovery and workflow modeling
3. success contracts and scope
4. architecture in customer constraints
5. integration and production engineering
6. data/AI evaluation where applicable
7. security, governance, and deployment safety
8. testing, observability, rollout, and reliability
9. adoption, enablement, and handoff
10. field learning, reuse, and product feedback
11. engagement leadership and portfolio judgment

## Limitations and instability

- FDE is not a separately standardized O*NET occupation; it is an employer-defined specialization with convergent practice. [FDE-CLM-014]
- Titles vary among FDE, FDSE, deployment engineer, implementation engineer, and customer-facing product engineer. Title alone is insufficient; the lifecycle and production-ownership tests control classification.
- Job postings are volatile and often describe aspirational breadth. The role model therefore uses only responsibilities repeated across multiple employers.
- Early-stage postings can blend sales engineering, customer success, product management, and support into FDE. The book will teach collaboration with those functions without silently absorbing all of them.
- Tools, models, clouds, and frameworks change quickly. They are examples and implementation choices, not the role boundary.

## Gate decision

Phase 01 passes. Proceed to book scope with the canonical name **Forward Deployed Engineer** and the boundary defined in `adjacent-role-boundary.md`.

All bracketed claim IDs resolve to `evidence-register.json`.
