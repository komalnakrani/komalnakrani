# Appendix C - Threat, Control, and Human-Authority Checklists

These checklists compress review prompts, not responsibility. A checked item means the reviewer located evidence for a bounded condition. It does not mean the entire system is secure, safe, compliant, usable, or approved. Record failures and unknowns beside passes.

## C1. Goal and autonomy

- Is the user task observable without relying on the model's own completion statement?
- Are consequence, timeliness, reversibility, and affected parties explicit?
- Was a fixed workflow or model-assisted workflow compared with agent execution?
- Is the chosen autonomy level the least complex adequate mode?
- Are rejected modes and reopen conditions recorded?
- Can the system abstain or route to a non-agent path without hiding failure?
- Are required and prohibited end states machine-checkable where possible?
- Are budgets defined for time, actions, cost, capacity, and human attention?
- Are task expiry and late-action behavior explicit?
- Does a named product or domain owner accept the task definition?

## C2. Prompt and instruction injection

- Which content is instruction, which is evidence, and which is untrusted data?
- Can retrieved documents, tool output, remote-agent messages, or memory alter authority?
- Are system policy and capability admission enforced outside the model?
- Are sensitive capabilities absent from the model-visible surface when not required?
- Are arguments validated against task, identity, resource, state, and policy?
- Can untrusted content cause data exfiltration through a permitted tool?
- Are indirect injection cases present in the adversarial set?
- Does the system preserve provenance when summarizing or transforming content?
- Are outputs encoded for their destination rather than trusted as safe text?
- Can operators identify which untrusted item influenced a consequential action?

## C3. Identity, delegation, and confused deputy risk

- Are human, service, agent, run, resource, approval, and effect identities distinct?
- Is delegation bound to purpose, audience, scope, task, resource, expiry, and revocation?
- Does the capability gateway enforce authorization independently of model selection?
- Can a low-authority caller induce a high-authority service to act on another resource?
- Are cross-tenant and cross-project identifiers rejected before lookup or effect?
- Are credentials short-lived and unavailable to model context and ordinary traces?
- Is every approval checked against current eligible authority?
- Does material plan change invalidate the approval?
- Are late, replayed, duplicated, and revoked approvals rejected?
- Can an operator reconstruct the delegation chain without revealing secret material?

## C4. Capability and effect safety

- Does each capability perform one narrow semantic action?
- Are input schemas strict, typed, bounded, and canonicalized?
- Is the effect class visible to policy and review?
- Are preconditions checked immediately before effect?
- Is idempotency bound to the logical effect and normalized arguments?
- Does timeout create an `unknown` state rather than a false failure?
- Is reconciliation available for every effect that can become uncertain?
- Are irreversible actions prevented or strongly gated rather than merely compensated?
- Are test doubles unable to touch production systems?
- Are provider errors mapped without losing retry, cancellation, or partial-effect semantics?

## C5. State, memory, and privacy

- Is authoritative state distinguished from context, cache, artifact, scratch, and memory?
- Does every action-bearing value have provenance, permission, and freshness?
- Are stale snapshots revalidated before consequential effect?
- Can one user, task, tenant, or worker observe another's state?
- Are memory writes selective, policy-controlled, and attributable?
- Can users or owners inspect, correct, expire, and delete retained information where required?
- Does deletion propagate to indexes, caches, summaries, and evaluation copies?
- Are secrets and sensitive raw content excluded from prompts and routine traces?
- Are retention periods tied to purpose rather than convenience?
- Are conflicts surfaced instead of resolved by arbitrary last-write wins?

## C6. Durable execution and concurrency

- Is run ownership represented by a lease or equivalent bounded mechanism?
- Do fencing tokens prevent an expired worker from writing or acting?
- Are duplicate and out-of-order events expected and tested?
- Do transition guards include state revision, contract version, and cancellation status?
- Can a retry duplicate an external effect?
- Are scheduled retries cancelled when the task stops or expires?
- Can parallel branches exceed shared cost, action, or capacity budgets?
- Is aggregation deterministic for missing, conflicting, duplicated, and late results?
- Does worker loss produce recoverable state rather than an orphaned task?
- Are uncertain effects reconciled before a successor continues?

## C7. Handoffs and remote actors

- Does the handoff name one owner for the delegated outcome?
- Is input state versioned and accompanied by provenance and unresolved conflicts?
- Does the receiver obtain only the authority subset needed for its task slice?
- Are deadlines, budgets, cancellation, and return evidence explicit?
- Can the sender reject an invalid or incomplete result deterministically?
- Does the topology outperform the frozen single-agent baseline on a named measure?
- Are coordination latency, duplicated work, conflict, and operational burden counted?
- Can a remote actor discover a capability without receiving authority to invoke it?
- Are protocol and adapter versions pinned and recorded per run?
- Can a remote actor's late result trigger an effect after parent cancellation?

## C8. Human checkpoint quality

- Is the requested decision bounded and understandable?
- Does the reviewer see the exact proposed effect, target, arguments, and consequence?
- Are alternatives, uncertainty, prior actions, and downstream scope visible?
- Is the reviewer authorized for this object and decision?
- Can the reviewer reject, request revision, cancel, or take over?
- Does the request expire, and is expiry behavior safe?
- Is state and authority revalidated after the response?
- Are workload, delay, abandonment, and disagreement measured?
- Are repetitive machine-checkable decisions removed from the human queue?
- Is evidence available that people can identify unsafe proposals rather than merely approve quickly?

## C9. Evaluation environment

- Is the exact claim under test stated before results are inspected?
- Are task distribution, actors, policies, state, tools, effects, budgets, and clocks versioned?
- Are consequence segments and rare critical failures represented?
- Are development, regression, adversarial, and held-out sets isolated?
- Are leakage and fixture memorization checks present?
- Are simulated provider, human, and external-system behaviors disclosed?
- Are deterministic oracles separated from subjective judgments?
- Are reviewer qualifications and disagreement procedures recorded?
- Are omitted real-world conditions listed beside every result summary?
- Does the release claim remain inside the environment's demonstrated scope?

## C10. Outcome and trajectory evaluation

- Is required external state verified independently of the agent report?
- Are prohibited actions and states critical failures regardless of final outcome?
- Are action selection, arguments, order, and necessity evaluated?
- Are state transitions, ownership, and conflict handling checked?
- Is every consequential effect linked to delegation or valid approval?
- Are timeouts, duplicates, cancellation, and recovery trajectories tested?
- Are cost, latency, action count, queue use, and human attention measured jointly?
- Are results segmented by consequence, authority pattern, effect class, and difficulty?
- Are evaluator changes treated as system changes?
- Are failures, unknowns, and disagreements visible in the disposition?

## C11. Fault and adversarial testing

- Have trust assumptions been converted into named attack or fault cases?
- Are malformed, malicious, conflicting, stale, and oversized inputs tested?
- Are identity substitution, delegation replay, audience mismatch, and revocation tested?
- Are tool timeout, partial effect, duplicate effect, corrupt result, and false success tested?
- Are queue duplication, reordering, loss, delay, and poison-message behavior tested?
- Are worker crash, lease expiry, split ownership, and deployment races tested?
- Are memory poisoning, cross-task leakage, deletion failure, and stale retrieval tested?
- Are approval expiry, wrong approver, plan mutation, and overload tested?
- Are controls independent enough that one model error cannot bypass all of them?
- Is every residual failure assigned to an owner with a release consequence?

## C12. Trace, audit, and surveillance restraint

- Does each retained field answer a named operational or accountability question?
- Can events be causally connected across model, tool, state, approval, and effect layers?
- Are raw prompts, documents, and tool payloads excluded by default?
- Are sensitive diagnostics sealed behind narrower access and shorter retention?
- Can access to sealed evidence itself be audited?
- Are timestamps, clock sources, dropped events, and correlation limits disclosed?
- Can an incident be reconstructed without exposing unrelated user data?
- Can deletion and retention rules be verified?
- Are trace integrity and tamper-evidence mechanisms appropriate to the consequence?
- Does user-facing explanation avoid revealing secrets while accurately describing system action?

## C13. Joint budgets and capacity

- Are quality, latency, actions, cost, queue depth, concurrency, and human attention treated as one envelope?
- Are tail behavior and consequence segments visible rather than hidden by averages?
- Do retries and parallel branches consume the same task budget?
- Are model, tool, database, queue, and approval dependencies capacity-tested?
- Is backpressure enforced before overload makes cancellation and recovery unreachable?
- Can the system degrade to a safe bounded mode?
- Are per-task and fleet-level limits both present?
- Are budget breaches observable before an irreversible effect?
- Can operators stop intake separately from stopping in-flight work?
- Are budget changes versioned and replayed against evaluation cases?

## C14. Release and interruption

- Does each release stage answer one named uncertainty?
- Are eligible cohorts and excluded high-consequence segments explicit?
- Are contract, model, harness, tool, policy, adapter, evaluator, and environment versions frozen?
- Are critical failures at zero or formally blocked from the exposed path?
- Have interrupt, cancellation propagation, reconciliation, and recovery been rehearsed?
- Are stop triggers measurable, timely, and owned?
- Can on-call responders reach the stop path under dependency failure?
- Does stopping new work preserve evidence needed to repair in-flight tasks?
- Are users told an honest state during interruption and uncertain effects?
- Can the system return to the prior component set without corrupting durable state?

## C15. Incident and recovery

- Was consequence contained before diagnostic exploration expanded access or effects?
- Are affected tasks and possible external effects enumerated?
- Is authoritative state queried rather than inferred from orchestration logs?
- Are hypotheses tested and disconfirmed with preserved evidence?
- Are sensitive records handled under incident-specific access controls?
- Are duplicate, missing, late, and partially compensated effects reconciled?
- Is recovery verified at process, run, effect, task, and service levels separately?
- Are affected users or owners informed where required?
- Did the incident change a durable contract, control, test, runbook, or ownership rule?
- Was the change itself evaluated and its residual risk assigned?

## C16. Change, interoperability, and retirement

- Is every behavior-bearing component included in the change inventory?
- Are protocol and capability versions compatible at semantic, not only schema, level?
- Do adapters preserve local identity, authority, effects, deadlines, cancellation, errors, and evidence?
- Are representative outcomes and trajectories replayed before exposure?
- Are state and in-flight task migrations explicit?
- Are evaluator and environment changes separated from system improvement claims?
- Are rollout cohorts and rollback compatibility tested?
- Are superseded evidence and claims marked rather than silently reused?
- Has reuse been demonstrated across repeated cases with stable contracts?
- Is there an owner and safe path to reduce, transfer, decommission, and delete the capability?

## Review disposition

Conclude every checklist review with four lists: **verified controls**, **failed controls**, **unknown or untested conditions**, and **authority decisions still required**. Release readiness cannot be computed from the count of checked boxes. One unchecked irreversible-effect control can outweigh dozens of routine passes.
