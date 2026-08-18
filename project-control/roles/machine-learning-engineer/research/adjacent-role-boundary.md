# Machine Learning Engineer — Adjacent-Role Boundary

## Classification vocabulary

- **CORE HERE** — the Machine Learning Engineer is the primary owner of the
  workload-specific technical decision and its evidence. [`MLE-CLM-015`]
- **SHARED AT DIFFERENT DEPTH** — both roles implement related work, but their
  units of accountability and final decisions differ. [`MLE-CLM-021`]
- **SUPPORTING** — the adjacent role owns the primary shared capability or
  authority; the Machine Learning Engineer supplies workload requirements,
  integration, or evidence. [`MLE-CLM-018`]
- **OUT OF SCOPE** — the Machine Learning Engineer may implement constraints or
  prepare evidence but does not own the formal decision. [`MLE-CLM-020`]

The classification describes accountable centers, not staffing law. One person
may wear several hats in a small team, but the release record must still say
which decision was exercised under which authority. [`MLE-CLM-018`,
`MLE-CLM-020`, `MLE-CLM-021`]

## Primary boundary

**CORE HERE:** qualify and operate a versioned learning workload across its
task, data/feature, experiment, model, evaluation, package, serving, monitoring,
recovery, change, and retirement evidence. [`MLE-CLM-008`, `MLE-CLM-009`,
`MLE-CLM-010`, `MLE-CLM-011`, `MLE-CLM-012`, `MLE-CLM-013`, `MLE-CLM-014`,
`MLE-CLM-015`]

**Primary decision:** whether a candidate learning system is technically
qualified for a defined serving envelope and which evidence, limitation, or
recovery condition controls the disposition. Product, domain, independent
evaluation, security, safety, privacy, governance, legal, and organizational
risk authorities retain their respective acceptance decisions.
[`MLE-CLM-019`, `MLE-CLM-020`]

## Complete adjacent-role matrix

| Adjacent role or authority | Classification | Adjacent center | Machine Learning Engineer distinction | Concrete decision test | Authority retained elsewhere |
|---|---|---|---|---|---|
| Data Scientist | **SHARED AT DIFFERENT DEPTH** | Statistical analysis, experiment design, inference, insight, and model prototyping | Turns an evidence-worthy model into a versioned, served, observed, recoverable workload | “Which analysis or method best supports the conclusion?” versus “Can this model-system be qualified and operated?” | Statistical interpretation and analytical sign-off [`MLE-CLM-015`, `MLE-CLM-021`] |
| Data Engineer | **SUPPORTING** | Durable ingestion, transformation, lineage, quality, and governed data products | Owns model-facing data/feature contracts and train/serve conformance, not the enterprise data estate | “What is the canonical shared data product?” versus “Which validated snapshot/features does this release consume?” | Source truth, access, retention, and shared pipeline authority [`MLE-CLM-009`, `MLE-CLM-018`, `MLE-CLM-020`] |
| Applied Scientist | **SHARED AT DIFFERENT DEPTH** | Applied research, methods, experimental proof, and scientific tradeoffs | Converts a credible method into an operable workload under production constraints | “Does the method advance empirical performance?” versus “Does its implementation pass workload qualification and recovery?” | Scientific claims and novelty acceptance [`MLE-CLM-015`, `MLE-CLM-021`] |
| AI Research Engineer | **SHARED AT DIFFERENT DEPTH** | Research-enabling implementations, scalable experiments, and frontier-method realization | Centers repeatable product/runtime qualification rather than research velocity | “How should the experiment be implemented for learning speed?” versus “Which implementation is supportable in production?” | Research agenda and experimental-claim authority [`MLE-CLM-017`, `MLE-CLM-021`] |
| AI Evaluation Engineer | **SHARED AT DIFFERENT DEPTH** | Measurement validity, adversarial/representative suites, independent release evidence | Implements hooks and remediates failures but should not self-certify every gate | “Is this suite adequate and has its gate passed?” versus “How should the workload be repaired and requalified?” | Evaluation-method validity and independent stop-ship voice [`MLE-CLM-011`, `MLE-CLM-019`] |
| Applied AI Engineer | **SHARED AT DIFFERENT DEPTH** | User-facing AI capability, application composition, interaction, and fallback behavior | Centers the general learning-system lifecycle, including non-generative workloads | “How should the product experience use or contain AI?” versus “Which model/data/serving release is technically qualified?” | Application UX and product-integration acceptance [`MLE-CLM-015`, `MLE-CLM-021`] |
| LLM Engineer | **SHARED AT DIFFERENT DEPTH** | Language-model data, context, retrieval, adaptation, inference, and behavior controls | Supplies the broader model lifecycle and workload qualification across model families | “Which LLM-specific behavior intervention is justified?” versus “Is the complete learning workload qualified and supportable?” | LLM behavior-specialist design and applicable safety/evaluation gates [`MLE-CLM-019`, `MLE-CLM-021`] |
| Agentic AI Engineer | **SHARED AT DIFFERENT DEPTH** | Tool-using action loops, state, permissions, effects, and recovery | Qualifies learned components and model-serving behavior rather than action authorization | “Which tools, state transitions, and effect permissions are allowed?” versus “Which model release and monitoring contract are qualified?” | Tool authorization, action policy, workflow, security, and domain authority [`MLE-CLM-018`, `MLE-CLM-020`, `MLE-CLM-021`] |
| MLOps Engineer | **SHARED AT DIFFERENT DEPTH** | Reusable lifecycle automation, registries, promotion mechanisms, and control plumbing | Owns one workload's qualification rules and correct use of the shared path | “What is the supported golden pipeline?” versus “What evidence and rollback target does this workload require?” | Shared automation service, control-plane, and platform standards [`MLE-CLM-016`, `MLE-CLM-018`] |
| ML Platform Engineer / ML Infrastructure Engineer | **SUPPORTING** | Shared compute, orchestration, feature/model services, serving substrate, observability, tenancy, and developer experience | Supplies workload requirements and validates compatibility/sizing without owning the fleet | “Which runtime, tenancy, capacity, and upgrade path does the platform support?” versus “What is this workload's measured envelope?” | Fleet, tenancy, shared runtime, capacity, and platform reliability [`MLE-CLM-018`, `MLE-CLM-021`] |
| Software Engineer | **SHARED AT DIFFERENT DEPTH** | General application/service correctness, APIs, distributed systems, and maintainability | Adds data/model uncertainty, qualification, train/serve skew, drift, and retraining controls | “Is the deterministic service contract correct?” versus “Are stochastic model/data behaviors qualified inside it?” | Non-ML application architecture and service ownership [`MLE-CLM-016`, `MLE-CLM-017`, `MLE-CLM-021`] |
| Platform Engineer / Site Reliability Engineer | **SUPPORTING** | Fleet availability, incident command, SLOs, shared capacity, infrastructure mitigation, and postmortem process | Owns model-behavior signals and workload remediation while participating in incident response | “What traffic/fleet mitigation protects the service?” versus “Should this model, feature, or training state be rolled back or requalified?” | Incident command, global SLOs, shared infrastructure, and fleet rollback [`MLE-CLM-016`, `MLE-CLM-018`] |
| Product | **OUT OF SCOPE** | User problem, business outcome, priority, acceptable tradeoffs, and launch intent | Converts the approved objective into measurable model-system evidence | “Is this outcome worth pursuing and what user promise is acceptable?” versus “Does the technical candidate meet that contract?” | Product priority, commercial decision, and business acceptance [`MLE-CLM-008`, `MLE-CLM-020`] |
| Security | **SUPPORTING** | Threat model, access policy, secure architecture, adversarial control, and security acceptance | Implements and tests model-workload controls and reports residual limitations | “Which controls and exceptions are acceptable?” versus “How are the required controls implemented in this workload?” | Security policy, exceptions, incident authority, and sign-off [`MLE-CLM-014`, `MLE-CLM-018`, `MLE-CLM-020`] |
| Safety | **SHARED AT DIFFERENT DEPTH** | Harm taxonomy, evaluation, mitigation sufficiency, escalation, and stop-ship criteria | Engineers mitigations and monitoring without becoming the sole judge of acceptable harm | “Is the safety evidence sufficient to release?” versus “Which data/model/pipeline change addresses the observed failure?” | Safety criteria, independent escalation, and risk acceptance [`MLE-CLM-019`, `MLE-CLM-020`] |
| Privacy / AI Governance / Legal | **OUT OF SCOPE** | Lawful basis, rights, policy, impact assessment, records, risk tolerance, and regulated obligations | Converts constraints into data/model controls, lineage, deletion, access, monitoring, and evidence | “Is the data use and deployment permissible?” versus “How can the approved constraint be implemented and verified?” | Interpretation, waivers, formal approval, and regulatory accountability [`MLE-CLM-014`, `MLE-CLM-020`] |
| Domain authorities | **OUT OF SCOPE** | Real-world validity, intended use, consequence model, professional judgment, and sector-specific effectiveness/safety | Encodes and tests domain constraints without substituting benchmark success for domain acceptance | “Are the population, endpoint, workflow, and residual risks valid?” versus “Does the implementation enforce and monitor those bounds?” | Clinical, financial, industrial, scientific, operational, or regulatory sign-off [`MLE-CLM-008`, `MLE-CLM-020`] |

## Scenario classification tests

1. **A candidate ranker improves average relevance but regresses a protected
   high-consequence segment.** The MLE owns diagnosis, remediation, and
   requalification (**CORE HERE**); evaluation defines the adequate gate
   (**SHARED AT DIFFERENT DEPTH**); product/domain authorities decide whether
   the remaining tradeoff is acceptable (**OUT OF SCOPE**). [`MLE-CLM-011`,
   `MLE-CLM-019`, `MLE-CLM-020`]
2. **A reusable feature platform needs a new online store and tenancy model.**
   Platform/data engineering owns the shared architecture (**SUPPORTING**); the
   MLE owns workload schema, freshness, skew, compatibility, and qualification
   evidence (**CORE HERE**). [`MLE-CLM-009`, `MLE-CLM-018`]
3. **A training run cannot be reproduced bit-for-bit on different hardware.**
   The MLE must state and test a bounded reproducibility claim (**CORE HERE**),
   while platform owners decide shared runtime support (**SUPPORTING**); no one
   may upgrade bounded evidence into an absolute guarantee. [`MLE-CLM-010`]
4. **A production drift alert fires while delayed outcome labels remain
   unavailable.** The MLE investigates proxies, data contracts, segments, and
   serving changes (**CORE HERE**) but does not automatically retrain or promote;
   evaluation owners define sufficient measurement evidence (**SHARED AT
   DIFFERENT DEPTH**), while domain owners define consequence thresholds
   (**OUT OF SCOPE**). [`MLE-CLM-013`, `MLE-CLM-019`, `MLE-CLM-020`]
5. **An LLM feature needs prompt, retrieval, and behavior-evaluation changes.**
   LLM Engineering owns the language-model intervention
   (**SHARED AT DIFFERENT DEPTH**); the MLE owns broader package, lifecycle,
   serving-envelope, monitoring, and rollback integration. [`MLE-CLM-018`,
   `MLE-CLM-021`]
6. **An agent may initiate a refund through a tool.** Agentic Engineering owns
   state and effect recovery (**SHARED AT DIFFERENT DEPTH**), while security and
   domain owners define permission and approval (**OUT OF SCOPE**). The MLE
   qualifies the model component and its model-specific release evidence, not
   payment authority. [`MLE-CLM-020`, `MLE-CLM-021`]
7. **A shared serving cluster exceeds its fleet SLO during a model rollout.**
   SRE/platform owns incident command and fleet mitigation (**SUPPORTING**); the
   MLE owns model rollback, workload degradation, compatibility evidence, and
   requalification decisions (**CORE HERE**). [`MLE-CLM-013`, `MLE-CLM-018`]
8. **A medical model passes technical tests but its intended-use population has
   changed.** The MLE records the mismatch, blocks the technical disposition,
   and prepares new evidence (**CORE HERE**); clinical, regulatory, privacy,
   safety, and governance owners decide permissibility and validity (**OUT OF
   SCOPE**). [`MLE-CLM-008`, `MLE-CLM-019`, `MLE-CLM-020`]
9. **An applied scientist proposes a novel architecture with promising offline
   results.** The scientist owns the research claim (**SHARED AT DIFFERENT
   DEPTH**); the MLE owns the retained baseline, packaging, representative
   qualification, serving envelope, staged release, and recovery evidence.
   [`MLE-CLM-011`, `MLE-CLM-012`, `MLE-CLM-013`, `MLE-CLM-021`]
10. **A security review requires artifact integrity and restricted model
    access.** Security owns control requirements and acceptance
    (**SUPPORTING**); the MLE implements workload-specific signing, access,
    inventory, monitoring, and evidence without self-approving an exception.
    [`MLE-CLM-014`, `MLE-CLM-020`]

## Core-here checklist

Keep an item in this book's core only when its primary output is evidence for a
specific learning workload's task contract, data/feature conformance, bounded
experiment, model qualification, release package, serving envelope, monitoring,
recovery, model change, or retirement. [`MLE-CLM-008`, `MLE-CLM-009`,
`MLE-CLM-010`, `MLE-CLM-011`, `MLE-CLM-012`, `MLE-CLM-013`, `MLE-CLM-014`]

## Supporting checklist

Teach enough shared data engineering, software engineering, MLOps, ML platform,
infrastructure, SRE, security, evaluation, and domain practice to let the MLE
specify interfaces, use the capability correctly, diagnose the workload, and
route the decision. Do not turn supporting depth into ownership of the shared
system or formal authority. [`MLE-CLM-018`, `MLE-CLM-019`, `MLE-CLM-020`]

## Book-boundary enforcement

Every proposed chapter must pass all of these checks:

- Names the workload-specific MLE decision and professional artifact.
  [`MLE-CLM-015`]
- States which evidence changes that decision. [`MLE-CLM-011`,
  `MLE-CLM-016`]
- Identifies the adjacent owner when a shared platform or formal authority is
  involved. [`MLE-CLM-018`, `MLE-CLM-020`, `MLE-CLM-021`]
- Preserves the distinction between technical qualification and authorization.
  [`MLE-CLM-019`, `MLE-CLM-020`]
- Treats frameworks, vendors, and current job topology as replaceable examples.
  [`MLE-CLM-005`, `MLE-CLM-007`]
- Avoids presenting one score, dashboard, registry entry, model card, or policy
  as complete assurance. [`MLE-CLM-011`, `MLE-CLM-012`, `MLE-CLM-014`,
  `MLE-CLM-016`]
- Uses generative and agentic systems only where they illuminate broader MLE
  lifecycle decisions; it does not duplicate the LLM or Agentic books.
  [`MLE-CLM-021`]
- Routes research novelty, enterprise data, generalized platforms, incident
  command, legal interpretation, safety acceptance, and domain sign-off to
  their accountable professions. [`MLE-CLM-018`, `MLE-CLM-019`,
  `MLE-CLM-020`, `MLE-CLM-021`]
