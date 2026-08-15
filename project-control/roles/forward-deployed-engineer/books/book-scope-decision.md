# Forward Deployed Engineer — Book Scope and Volume Decision

## Decision

**SINGLE BOOK**

Working title: **Forward Deployed Engineering**

One-sentence thesis: **A professional Forward Deployed Engineer converts an ambiguous, high-value customer workflow into a secure, adopted, supportable production system and converts field evidence into reusable product leverage.**

Reader transformation: **The reader moves from being a capable engineer who can build software to an engagement-owning engineer who can discover, scope, architect, implement, launch, stabilize, hand off, and compound a customer deployment under real constraints.**

The title remains a Phase 05 working title; the one-book decision and thesis are locked.

## Inputs and constraint handling

Phase 01 provides a current role definition, evidence register, responsibility model, deliverables, failure modes, and adjacent-role boundary. There are no existing Komal manuscripts to preserve. All prose, cases, figures, labs, and exercises will be original.

The competency standard and objective map normally supplied by Abhyaas are intentionally unavailable under the user-locked Komal-first order. This does not block the publication scope because the role-validation evidence defines the durable professional lifecycle. When Abhyaas resumes, its standard must be checked against this scope; any mismatch creates an edition/change record rather than an undocumented rewrite.

## Competency-cluster depth estimates

Scale: Low, Moderate, High, or Very High. “Natural projects” counts materially distinct project milestones, not every exercise.

| Cluster | Conceptual | Practical | Prerequisite | Architecture | Operations | Security / reliability | Natural projects | Narrative relationship |
| --- | --- | --- | --- | --- | --- | --- | ---: | --- |
| Role, ethics, and outcome ownership | High | Moderate | Low | Low | Moderate | High | 1 | Establishes the decision system and professional boundary used everywhere else. |
| Workflow discovery and domain learning | High | Very High | Moderate | Moderate | Moderate | Moderate | 2 | Starts every deployment and supplies evidence for scope, architecture, controls, and adoption. |
| Success contracts, scoping, and sequencing | High | Very High | Moderate | High | High | High | 2 | Converts discovery into an executable, testable delivery path. |
| Customer-system architecture and integration | Very High | Very High | High | Very High | High | Very High | 3 | Uses the scope contract to design the deployable system boundary. |
| Production application and automation engineering | High | Very High | High | Very High | High | High | 3 | Implements the architecture and exposes hidden constraints. |
| Data contracts, quality, and pipelines | High | High | High | High | High | High | 2 | Cross-cutting implementation surface; bounded to deployment needs rather than enterprise platform ownership. |
| AI/model integration and evaluation | High | High | High | High | High | Very High | 2 | Current specialization taught as a conditional track and through the running case, not as the universal role definition. |
| Security, privacy, governance, and compliance | Very High | High | Moderate | Very High | High | Very High | 2 | Constraint and evidence layer from discovery through handoff; cannot be isolated as a late checklist. |
| Testing, observability, reliability, and incident readiness | High | Very High | High | High | Very High | Very High | 3 | Makes production claims falsifiable and supports safe rollout/stabilization. |
| Rollout, adoption, enablement, and handoff | High | Very High | Moderate | Moderate | Very High | High | 2 | Completes the outcome; depends on every previous artifact. |
| Field feedback, reuse, and product leverage | High | High | Moderate | High | High | Moderate | 2 | Turns one delivery into organizational learning without overgeneralizing customer specifics. |
| Engagement leadership and portfolio judgment | Very High | High | High | High | High | High | 2 | Integrates all prior clusters across stakeholders, ambiguity, tradeoffs, and parallel deployments. |

## Why one coherent book exists

The professional work is a single feedback-rich lifecycle:

1. discover the workflow and failure cost;
2. define outcomes, constraints, and decision rights;
3. scope and sequence a safe production path;
4. architect customer integrations and operating boundaries;
5. build and validate the system;
6. establish security, governance, observability, and reliability evidence;
7. roll out, stabilize, enable, and hand off;
8. convert field learning into reusable product leverage.

Each stage consumes artifacts and decisions from earlier stages. Later production evidence often sends the engineer back to discovery, scope, or architecture. A single volume can preserve that loop and let one running case mature from ambiguity to measurable operation.

## Multi-volume options rejected

### Rejected: two volumes split at build

- Proposed volume A: discovery, scope, and architecture.
- Proposed volume B: implementation, operations, adoption, and reuse.

This split fails because architecture quality cannot be taught or assessed without implementation and operational evidence, while implementation decisions require the original workflow and success contract. Both volumes would need to reteach constraints, stakeholders, risk, and the running case. Neither creates an independent reader transformation: design without deployment is not FDE competence, and deployment without discovery is generic implementation.

### Rejected: two volumes split into technical and customer-facing work

- Proposed volume A: production systems engineering.
- Proposed volume B: discovery, stakeholders, adoption, and engagement leadership.

This contradicts the role definition. The role's distinguishing skill is integration of customer context and production engineering. Separating them would recreate a generic software book and a generic consulting/customer-success book, then rely on cross-volume synthesis to recover the actual role.

### Rejected: three volumes for foundations, delivery, and leadership

The foundations volume would lack an independently useful endpoint; the delivery volume would need most of the foundations; the leadership volume would repeat discovery, scoping, risk, operations, and feedback at higher complexity. Senior judgment is better expressed through later chapters and increasingly ambiguous case variations within the same work.

### Rejected: AI-specific separate volume

AI is a substantial present-day deployment context, but not all verified FDE work is AI-specific. A separate AI volume would either repeat the complete lifecycle or become an Applied AI Engineering book. The single book will include AI-specific chapters/sections, evaluation artifacts, and case branches while keeping model research and generalized ML platform work outside scope.

## Domain ownership

The single book owns the following complete learning arc:

- FDE role identity, judgment, ethics, and outcome accountability
- customer/domain discovery and workflow modeling
- stakeholder mapping and decision rights
- success/guardrail metrics, scoping, estimation, sequencing, and dependency management
- customer-system architecture and integration boundaries
- production application, automation, API, and data integration
- bounded data engineering and data-quality evidence
- conditional AI/model integration, task evaluation, and human/deterministic control design
- security, privacy, compliance, governance, and risk collaboration
- testing, observability, reliability, cost/performance, release, rollback, and incident readiness
- rollout, UAT, enablement, adoption, production stabilization, support, and handoff
- reusable components, playbooks, field feedback, and product/platform influence
- multi-stakeholder engagement leadership and senior portfolio judgment

## Explicit non-scope

The book will not become a substitute for:

- a general programming or computer-science introduction
- a vendor cloud certification guide
- full enterprise architecture practice
- enterprise-wide data platform engineering
- foundation-model research, model training science, or comprehensive MLOps
- security auditing, legal advice, privacy office practice, or regulatory authorization
- sales, pricing, procurement, or contract negotiation
- general customer-success/account management
- generic project/program management
- industry-specific professional licensing or domain expertise

When the FDE must make an informed boundary decision, collaborate, create technical evidence, or escalate, the relevant concepts remain in scope at that decision depth.

## Cross-volume dependency

Not applicable: there is one book.

Internal dependencies must still be explicit. Later parts may assume artifacts from earlier parts, but concise cross-references will replace re-teaching. Labs will carry one versioned deployment dossier forward so the reader can see how decisions and evidence evolve.

## Non-overlap rules

1. Teach a specialist topic only to the depth needed for an FDE deployment decision, artifact, implementation, diagnosis, or escalation.
2. Put platform-specific syntax in examples or labs; keep the main model provider-neutral.
3. Do not repeat discovery, architecture, security, or operations concepts in every technology chapter; extend the same canonical artifacts.
4. Do not duplicate Applied AI, Solutions Architecture, Data Engineering, ML Engineering, Security, or Customer Success curricula.
5. Adoption content must connect to system behavior, workflow evidence, enablement, or handoff—not general relationship management.
6. Leadership content must add ambiguity, scale, competing objectives, or organizational leverage—not restate basic delivery steps.
7. Case studies and exercises must test decisions and evidence, not trivia about employers or product interfaces.

## Natural project model

Use one original capstone deployment with milestone releases rather than disconnected toy projects. It must support at least:

- ambiguous workflow interviews and evidence synthesis
- success contract and risk register
- customer-system/data integration
- an AI-assisted path plus a deterministic/human-review fallback
- identity, data handling, governance, and auditability
- tests/evals, observability, SLOs, and failure injection
- staged rollout, UAT, rollback, incident handling, and handoff
- adoption measurement and a field-to-product reuse proposal

Short satellite cases may vary industry, infrastructure, or regulation to prevent the running case from becoming a hidden universal template.

## Phase 05 handoff

Design one book around the engagement lifecycle. Phase 05 must lock the final title/subtitle, audience, prerequisites, parts, chapters, projects, terminology, competency coverage, visual forecast, and edition scheme while preserving the thesis and non-overlap rules above.

## Acceptance-test result

Every plausible split produced interdependent theses, duplicated lifecycle context, or an adjacent-role book. The split test therefore requires merging. **SINGLE BOOK is confirmed.**
