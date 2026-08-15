# Forward Deployed Engineer — Adjacent-Role Boundary

## Boundary rule

Classify work by its **primary decision and unit of accountability**, not by whether two roles use the same tools.

- **FDE primary decision:** What must we discover, build, integrate, launch, stabilize, and enable so this customer workflow produces a safe, measurable production outcome?
- **FDE unit of accountability:** the deployed customer outcome across the engagement lifecycle.

## Classification vocabulary

- **CORE HERE** — the FDE owns the decision and must perform it independently.
- **SHARED AT DIFFERENT DEPTH** — both roles participate, but the FDE's objective, evidence, or production accountability differs.
- **SUPPORTING** — useful implementation knowledge; a specialist normally owns the deeper system.
- **OUT OF SCOPE** — collaboration context only; not part of FDE professional mastery.

## Adjacent roles

| Adjacent role | Overall relationship | Adjacent role's center | FDE distinction |
| --- | --- | --- | --- |
| Applied AI Engineer | SHARED AT DIFFERENT DEPTH | Build and improve AI-powered capabilities, evaluations, model behavior, and application patterns | FDE uses those capabilities inside a customer engagement and owns integration, organizational constraints, rollout, adoption, and stable business outcome; not every FDE deployment is AI-centric. |
| Solutions Architect | SHARED AT DIFFERENT DEPTH | Understand objectives, advise, design a viable architecture, and guide use of a platform/service portfolio | FDE normally writes and debugs production code and remains accountable through go-live and stabilization. AWS explicitly routes hands-on implementation to professional services or partners in its model. [FDE-CLM-011] |
| AI Solutions Architect | SHARED AT DIFFERENT DEPTH | Advise on AI use-case feasibility, reference architecture, platform selection, governance posture, and prototypes | FDE converts architecture into a working customer system, owns real data/integration/evaluation failures, and proves workflow adoption. |
| Software Engineer | SUPPORTING | Own a software product, service, component, or platform through its engineering lifecycle | Production software engineering is essential to FDE, but customer-embedded discovery, cross-system delivery, adoption, and field-to-product learning define the extra role boundary. [FDE-CLM-012] |
| Machine Learning Engineer | SUPPORTING | Own model/data training and inference systems, model quality, performance, and ML lifecycle | FDE decides how model behavior affects the deployed workflow and may implement evals or inference integration; specialist model development and training research remain with ML teams unless explicitly part of the engagement. |
| Data Engineer | SUPPORTING | Own reliable data ingestion, transformation, storage, modeling, orchestration, and data-platform operations | FDE must diagnose and integrate customer data paths but does not automatically own the enterprise data platform or every upstream pipeline. |
| Technical Account Manager / Customer Engineer | SHARED AT DIFFERENT DEPTH | Own relationship health, adoption guidance, escalation coordination, platform expertise, and ongoing customer success | FDE takes direct build-and-launch accountability for a bounded deployment. Relationship ownership, renewals, entitlement/support management, and general account coverage remain outside the role. |
| Deployment Strategist | SHARED AT DIFFERENT DEPTH | Frame the operational problem, synthesize workflows/data, drive user adoption, communicate impact, and shape engagement direction | FDE owns the engineering implementation and stable technical system. Palantir's role description explicitly pairs strategists with FDEs for stable, extensible data integration. [FDE-CLM-013] |

## Capability boundary matrix

| Capability | Classification | FDE required depth | Explicit non-scope |
| --- | --- | --- | --- |
| Workflow discovery | CORE HERE | Observe and model real work; expose decisions, exceptions, users, data, constraints, and failure cost | Full organizational consulting transformation program |
| Outcome and success contract | CORE HERE | Define workflow value, adoption, technical SLOs, guardrails, acceptance, and exit criteria | Pricing, commercial contracting, or sales quota ownership |
| Technical scoping and sequencing | CORE HERE | Select the smallest safe production path; manage dependencies and tradeoffs | Enterprise portfolio/program governance unrelated to the deployment |
| Customer-system architecture | CORE HERE | Design integration, data, identity, deployment, operations, and support boundaries | Acting as permanent enterprise architecture authority for all customer systems |
| Production coding and integration | CORE HERE | Build, test, review, diagnose, and operate the code needed for the engagement | Owning every upstream product/platform component |
| Data engineering | SUPPORTING | Data contracts, quality checks, transformations, lineage, and pipeline integration needed for the solution | General-purpose data warehouse/lakehouse ownership |
| ML/model development | SUPPORTING | Understand model behavior and integrate appropriate models | Foundation-model research or generalized training optimization |
| AI evaluation | CORE HERE for AI deployments; otherwise OUT OF SCOPE | Build task-relevant evals, error taxonomies, guardrails, and release evidence tied to workflow risk | Benchmark research disconnected from deployment decisions |
| Security/privacy/compliance | CORE HERE for deployment decisions; SHARED AT DIFFERENT DEPTH for formal authority | Threat/risk discovery, least privilege, data handling, controls, evidence, and escalation | Acting as legal counsel, privacy officer, auditor, or authorizing official |
| Reliability and operations | CORE HERE through stabilization | Observability, SLOs, runbooks, rollback, incident diagnosis, capacity/cost signals, and ownership transfer | Permanent 24×7 operations ownership unless the operating model assigns it |
| Adoption and enablement | CORE HERE | Remove technical adoption blockers, train relevant users/engineers, and prove workflow use | General customer-success relationship management or renewal ownership |
| Product feedback and reuse | CORE HERE | Turn repeated evidence into reusable components, playbooks, or roadmap inputs | Product-management prioritization authority |
| Commercial negotiation | OUT OF SCOPE | Understand constraints and escalate implications | Pricing, terms, procurement negotiation, closing business |
| Formal regulatory approval | OUT OF SCOPE | Produce accurate technical evidence and support responsible authorities | Legal interpretations, certification issuance, or risk acceptance authority |
| Organization-wide change management | OUT OF SCOPE | Enable the bounded workflow and stakeholders | Enterprise HR, communications, or operating-model transformation |

## Scenario differentiation

### Scenario 1 — Regulated document-review agent

**Prompt:** A financial-services customer wants an LLM agent to review documents and recommend an action.

- **FDE objective:** discover the actual decision workflow; define where deterministic rules and human approval are mandatory; integrate identity, documents, case systems, and audit logs; create workflow-specific evals; launch safely; prove adoption and production stability.
- **Applied AI Engineer objective:** improve extraction/reasoning quality, prompt/tool design, evaluation methods, and model/application behavior.
- **AI Solutions Architect objective:** recommend an architecture, model/service pattern, data boundary, and governance approach.
- **Security/privacy objective:** evaluate controls and authorize or reject risk according to formal authority.

An FDE assessment asks for a deployment decision under conflicting workflow, integration, quality, and control constraints—not merely the best model or reference architecture.

### Scenario 2 — Unreliable manufacturing data integration

**Prompt:** A factory wants a production dashboard, but sensor identifiers, maintenance records, and planning data disagree.

- **FDE objective:** identify the decision the dashboard must support, establish a deployable data contract and exception path, build the bounded integration, validate with operators, launch with observability, and define ownership after handoff.
- **Data Engineer objective:** design and operate durable ingestion, transformation, quality, lineage, and storage across the data platform.
- **Software Engineer objective:** build and maintain the dashboard service and its product-quality behavior.
- **Deployment Strategist objective:** frame the operational question, user workflow, adoption plan, and impact narrative.

The FDE may write pipeline and UI code, but is assessed on the complete deployed workflow and its ownership boundary.

### Scenario 3 — Enterprise platform migration

**Prompt:** A customer must move an internal workload into a provider platform under a six-week deadline.

- **FDE objective:** validate the workflow and constraints, sequence the smallest safe migration, implement missing integration/automation, execute rollout and rollback, stabilize, and leave a supportable handoff.
- **Solutions Architect objective:** recommend a target architecture and migration path consistent with provider patterns and customer goals.
- **Technical Account Manager / Customer Engineer objective:** coordinate platform guidance, escalations, support, and long-term account health.
- **Platform Software Engineer objective:** fix or extend the provider's reusable platform capability.

The FDE is evaluated on delivery evidence and production outcome; the architect on design quality; the account role on durable customer success; the platform engineer on the reusable platform.

## Explicit book non-scope

The Forward Deployed Engineer publication will not attempt to make the reader:

- a foundation-model researcher or general ML scientist
- an enterprise data-platform specialist
- a cloud certification encyclopedia
- a security auditor, lawyer, or compliance authorizer
- a salesperson, commercial negotiator, or account executive
- a full customer-success or technical-account professional
- a generic project/program manager
- a domain expert in every customer industry

It will teach enough of those surfaces to make correct deployment decisions, collaborate effectively, recognize limits, and escalate to the accountable specialist.

## Assessment boundary test

A learning objective belongs in the core FDE scope only if all three are true:

1. it changes a customer deployment decision or production outcome;
2. an FDE must act or produce evidence, not merely recognize vocabulary; and
3. the objective remains useful across more than one employer's platform.

If it fails the first test, it is likely general technical background. If it fails the second, it is awareness or collaboration content. If it fails the third, it belongs in an example, lab variation, or source note rather than the durable core.

All bracketed claim IDs resolve to `evidence-register.json`.
