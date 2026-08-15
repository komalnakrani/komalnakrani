# Orchid Assist — Capstone Project Map

## Project purpose

The capstone makes the book's promise observable. The reader must leave with a versioned deployment dossier and working vertical slice whose decisions can be traced from workflow evidence through production outcome and reuse proposal.

This is one evolving project, not nineteen disconnected exercises.

## Scenario baseline

Orchid Equipment Services maintains industrial equipment across regions. The proposed Orchid Assist deployment aims to reduce service-resolution time and improve first-visit success without weakening safety, privacy, auditability, cost, or technician judgment.

Initial request: “Give every technician an AI copilot trained on our manuals and service history.”

Known complications are deliberately incomplete at the start:

- tickets, equipment registry, inventory, manuals, and telemetry use inconsistent identifiers;
- safety-critical recommendations require qualified-human approval;
- some sites have intermittent connectivity;
- customer data and identity boundaries vary by region;
- a legacy ERP has rate limits and weak failure semantics;
- technicians distrust suggestions that hide their evidence;
- responsibility is split across service operations, IT, data, security, inventory, and regional leaders;
- the pilot deadline precedes a seasonal service peak.

Later chapters reveal additional evidence only when the reader has a method for handling it.

## Artifact rules

- Stable artifact IDs use `OA-NN`.
- Every milestone records version, owner, decision date, inputs, assumptions, evidence, open risk, and acceptance state.
- Later chapters amend artifacts through decision/change records rather than replacing history silently.
- Documentary artifacts require a filled Orchid example and a reusable blank template.
- Code/configuration uses synthetic data, safe identifiers, no secrets, and reproducible commands.
- A milestone passes only when its acceptance evidence is present; file creation alone is not completion.

## Milestones

### OA-01 — Responsibility charter and discovery plan

- **Chapters:** 1–2
- **Produces:** role boundary, engagement purpose, authority/escalation limits, stakeholder hypothesis, access/data minimization plan, interview/observation plan, evidence log.
- **Decision:** whether the FDE has enough legitimate access and sponsorship to begin discovery.
- **Acceptance evidence:** every requested access/data element maps to a discovery question; formal decisions name an accountable owner; role non-scope is explicit.
- **Failure injection:** a sponsor asks for unrestricted production exports “to move faster.”

### OA-02 — Verified current-state workflow

- **Chapter:** 3
- **Produces:** workflow/state map, actor/decision map, system/data inventory, exception taxonomy, observed-versus-reported gaps, failure-cost analysis, revised problem statement.
- **Decision:** which operational decision and bottleneck the deployment should address.
- **Acceptance evidence:** users validate normal and exceptional paths; contradictions remain visible; the problem statement is not a restatement of “build an AI copilot.”
- **Failure injection:** service leaders optimize ticket closure while technicians optimize safe first-visit resolution.

### OA-03 — Outcome contract and decision rights

- **Chapter:** 4
- **Produces:** outcome metric tree, guardrails, adoption measures, baselines, acceptance/exit criteria, non-goals, decision-rights map, assumption register.
- **Decision:** what success means and who may accept outcome, safety, privacy, operational, and commercial consequences.
- **Acceptance evidence:** metrics are measurable in the workflow; guardrails can stop rollout; no FDE claims authority assigned to another role.
- **Failure injection:** the requested headline metric can improve by routing difficult cases away from measurement.

### OA-04 — Scope and delivery plan

- **Chapter:** 5
- **Produces:** selected equipment family/region/user cohort, vertical-slice definition, dependency map, risk register, milestone sequence, reversible experiments, change-control rule.
- **Decision:** the smallest safe path that can produce production evidence before the seasonal peak.
- **Acceptance evidence:** every included capability supports an outcome or risk-reduction hypothesis; exclusions are explicit; dependencies have owners and dates; stop criteria exist.
- **Failure injection:** an executive adds multilingual voice input and automated parts ordering to the pilot.

### OA-05 — Deployment design dossier

- **Chapters:** 6–10
- **Produces:** context/container and responsibility boundaries, interface catalog, data contracts, reconciliation path, topology, identity/access flow, AI decision record, eval/control plan, threat/risk model, control/evidence matrix, approval path.
- **Decision:** whether the design is implementable, operable, controllable, and supportable inside the real customer environment.
- **Acceptance evidence:** failure propagation and ownership are explicit; sensitive data is minimized; AI uncertainty is bounded; human and deterministic controls map to workflow risk; formal approvals have owners.
- **Failure injections:** duplicate equipment IDs; ERP timeouts after writes; model proposes an unsafe action confidently; regional data cannot cross a boundary.

### OA-06 — Production vertical slice

- **Chapter:** 11
- **Produces:** repository, representative synthetic dataset, ticket-to-evidence-to-ranked-action path, approval gate, ERP/inventory adapter, audit event, feature control, code review, debt register.
- **Decision:** whether one real end-to-end path works under representative constraints and is fit for deeper verification.
- **Acceptance evidence:** reproducible setup/test commands; reviewed code; safe failure behavior; no secrets; traceable audit event; known debt linked to scope or exit criteria.
- **Failure injection:** the upstream API returns success before an eventual downstream rejection.

### OA-07 — Verification and acceptance evidence

- **Chapter:** 12
- **Produces:** requirements-to-evidence matrix, unit/contract/integration/end-to-end tests, AI eval set and error taxonomy, adversarial/abuse tests, UAT protocol, known-limitations record, release evidence packet.
- **Decision:** whether evidence supports proceeding to operational readiness work.
- **Acceptance evidence:** tests cover high-cost exceptions; AI quality is segmented by workflow risk; UAT uses representative users/tasks; limitations are visible and assigned.
- **Failure injection:** aggregate AI accuracy is acceptable but masks a critical equipment-family failure.

### OA-08 — Operability, release, and recovery evidence

- **Chapters:** 13–14
- **Produces:** signal catalog, dashboards, SLOs/quality objectives, alerts, diagnostic runbooks, capacity/cost model, release pipeline, migration plan, rollback/roll-forward path, backup/restore and recovery rehearsal.
- **Decision:** whether the team can detect, understand, contain, and recover from realistic production failure.
- **Acceptance evidence:** every critical user/system promise has a signal or explicit gap; alerts are actionable; recovery is rehearsed; configuration and migration are versioned.
- **Failure injection:** latency degrades only at low-connectivity sites while aggregate service health remains green.

### OA-09 — Production readiness and staged rollout

- **Chapter:** 15
- **Produces:** readiness review, unresolved-risk disposition, rollout cohort/ramp, cutover and rollback triggers, go/no-go record, launch communications, command/escalation schedule.
- **Decision:** go, conditional go, delay, reduce scope, or stop.
- **Acceptance evidence:** decision rights are present; blast radius and rollback are bounded; users/support/operations are ready; evidence gaps have explicit risk acceptance or block launch.
- **Failure injection:** the deadline arrives while one control has documentation but no execution evidence.

### OA-10 — Incident, stabilization, adoption, and handoff

- **Chapters:** 16–17
- **Produces:** incident timeline and decision log, containment/correction, corrective actions, stabilization criteria, adoption diagnostics, enablement plan, support model/RACI, technical handoff, ownership acceptance.
- **Decision:** whether the deployment is stable and the customer can operate and evolve it without hidden FDE dependency.
- **Acceptance evidence:** incident learning changes system/process; target users perform representative work; support owns alerts/runbooks; customer engineers execute a supervised release/recovery; handoff exceptions are explicit.
- **Failure injection:** users bypass the system because recommendations omit evidence needed for trust.

### OA-11 — Outcome review and product leverage

- **Chapters:** 18–19
- **Produces:** outcome/guardrail/adoption analysis, counterfactual limitations, pattern ledger, customer-specific versus reusable classification, reusable component/playbook proposal, field-to-product memo, portfolio priority and personal growth review.
- **Decision:** what to retain, improve, generalize, retire, or escalate after the bounded deployment.
- **Acceptance evidence:** claims match measured evidence; reuse is supported by repeated patterns or a defined validation plan; customer data/assumptions remain isolated; roadmap requests state impact and uncertainty.
- **Failure injection:** leadership asks to “platformize” a component observed at only one customer.

## Executable companion shape

The code companion should remain small enough to understand end to end. Minimum services/components:

- synthetic ticket/equipment/inventory/manual data generator;
- gateway/API for a service request;
- integration adapters with controllable failure modes;
- retrieval/evidence component;
- optional model interface with a deterministic test double;
- deterministic safety/eligibility policy;
- qualified-human approval step;
- audit/event record;
- telemetry and local dashboard or inspectable metrics;
- tests/evals and release/recovery scripts.

Provider integrations are optional adapters. The default path must run locally without paid services or secret credentials.

## Assessment modes

Each milestone should support four complementary checks:

1. **artifact review:** completeness, internal consistency, evidence, and authority boundaries;
2. **implementation check:** executable behavior, tests, failure modes, and operational signals;
3. **scenario defense:** oral/written explanation of tradeoffs and rejected alternatives;
4. **change injection:** revise artifacts/code after new contradictory evidence without erasing decision history.

## Final capstone pass condition

The final dossier must prove a coherent chain:

`observed workflow -> contracted outcome -> bounded scope -> architecture/control decisions -> working behavior -> verification -> operational readiness -> rollout/stabilization -> adoption/handoff -> measured outcome/reuse decision`

Any broken link is visible as an unresolved evidence gap; polished presentation cannot substitute for it.
