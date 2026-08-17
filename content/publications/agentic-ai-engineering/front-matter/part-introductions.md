# Part introductions

## Part I - Decide What May Act

Agentic engineering starts with a refusal to treat autonomy as the default. A model can generate a plausible next step without understanding who may authorize it, which external state matters, or what counts as finished. The first part gives the reader a decision surface before it gives the system an action surface.

Chapter 1 defines the profession through responsibility for bounded action. It separates model capability from harness behavior, product intent, platform ownership, domain judgment, and formal authority. That separation becomes the ownership map used throughout the book. Chapter 2 tests fixed workflow, model assistance, single-agent execution, and multi-agent execution against the same FieldOps task. The outcome is an autonomy decision record, including the rejected alternatives and the evidence that would reopen the choice. Chapter 3 converts the accepted task into a goal-action-authority contract.

The part produces three linked artifacts: a responsibility map, an autonomy decision, and a machine-checkable task contract. The task contract names required and prohibited end states, permitted action classes, effect boundaries, budgets, approvals, stop conditions, escalation, and completion evidence. Unknowns remain visible. An attractive plan or successful demonstration cannot substitute for these records.

Part II consumes the contract as executable input. If a capability, state transition, or identity binding cannot be traced to that contract, it has not earned a place in the loop.

## Part II - Build the Action Surface

Part I answered whether the system should act and within what authority. Part II asks how each attempted action becomes inspectable, enforceable, and attributable. The engineering unit is no longer a chat turn. It is a state transition with an initiator, capability, precondition, policy decision, effect class, result, and evidence.

Chapter 4 makes the control loop explicit. It defines run states, events, deterministic gates, cancellation, replay, and verified completion. Chapter 5 narrows tools into typed capabilities whose descriptions, inputs, effects, errors, idempotency behavior, and reconciliation paths are legible. Chapter 6 binds human, service, agent, task, resource, delegation, approval, and effect identities without treating authentication as authority. Chapter 7 separates authoritative external state, orchestration state, finite context, scratch work, durable artifacts, preference, and memory.

The part's output is an action-system contract that another engineer can inspect without reading model thoughts. Every effect is classified. Every durable record has a source and retention rule. Every approval is bound to an object and expiry. Every completion claim points to an external observation or explicitly states that such verification is unavailable.

Part III uses this action surface to build work that can survive time, concurrency, crashes, delayed humans, and topology change. A loop that works only while one process remains alive is still a demonstration.

## Part III - Orchestrate Work That Must Endure

Orchestration creates new failure modes faster than it creates capability. Part III therefore freezes a single-agent baseline before adding more actors. The baseline gives later topology claims a measurable comparator and prevents coordination overhead from being mistaken for intelligence.

Chapter 8 integrates the accepted contracts into one reproducible vertical slice. Chapter 9 treats routing, specialists, parallel workers, reviewers, and remote agents as hypotheses. Each handoff must transfer task identity, state version, authority, budget, deadline, expected artifact, cancellation semantics, and return evidence. Chapter 10 makes execution durable through ownership, leases, idempotency, reconciliation, compensation, and recovery from uncertain effects. Chapter 11 designs human checkpoints as durable work items that can expire, reject, request revision, cancel downstream work, and support takeover.

The part produces a baseline record, a topology decision, a durable execution design, and a checkpoint contract. It also records rejected complexity. A multi-agent run is acceptable only when it improves a named outcome or control enough to justify its added latency, cost, failure surface, and operational burden.

Part IV moves from construction to proof. It evaluates not just whether a final answer looks right, but whether the full trajectory respected state, effects, authority, recovery, and consequence limits.

## Part IV - Prove the Trajectory and Its Effects

A representative evaluation environment is a claim about resemblance, not a copy of production. Part IV teaches readers to state what the synthetic FieldOps world includes, what it omits, which faults it can reproduce, and which real consequences it cannot establish.

Chapter 12 versions tasks, initial state, actors, capabilities, policies, budgets, clocks, faults, expected outcomes, prohibited outcomes, and evaluation splits. Chapter 13 measures outcome, action choice, argument validity, state transitions, external effects, authority compliance, recovery, efficiency, and calibrated judgment by consequence segment. Chapter 14 turns assumptions about trust, identity, tools, memory, approvals, runtime, and effects into executable attacks and fault injections.

The output is a bounded evaluation dossier. It contains pass and failure evidence, segment results, unresolved disagreements, environment limitations, and the owner of each residual question. Final-answer quality cannot hide a prohibited action, invalid approval, duplicate effect, leaked state, or unrecovered interruption. Conversely, a cautious refusal is not automatically good if the task contract required a safe, permitted action.

Part V consumes this dossier to define what may be observed and exposed in operation. Release is not a declaration that the evaluation was complete; it is a controlled method for learning about the gaps that remain.

## Part V - Operate What Acts

Operating an agent system requires seeing enough to reconstruct causal behavior without collecting every piece of user content. It also requires treating time, money, queue capacity, action count, and human attention as joint constraints rather than isolated dashboards.

Chapter 15 defines minimal causal traces across model decisions, capabilities, state versions, approvals, controls, effects, and recovery. Sensitive evidence can be sealed behind narrower access while ordinary telemetry carries identifiers and outcomes. Chapter 16 builds consequence-aware envelopes for quality, latency, actions, cost, queues, concurrency, dependencies, and approval capacity. Chapter 17 converts those controls into staged release, reachable interruption, verified recovery, incident learning, and explicit rollback or retirement authority.

The output is an operating dossier: trace schema and access policy, budget envelopes and stop triggers, release question and cohort, interrupt path, recovery evidence, and incident-to-change link. A dashboard is not a control unless a named actor can interpret it and act in time. A kill switch is not reachable merely because an endpoint exists. Recovery is not complete until the required external state is reconciled.

Part VI takes the evidence and operating constraints into interoperability and change. The challenge is to evolve components without allowing a protocol or vendor abstraction to redefine local semantics.

## Part VI - Evolve Without Losing Control

Agent systems change at many seams: model, prompt, capability schema, tool implementation, policy, identity provider, protocol adapter, memory logic, evaluator, orchestrator, and human workflow. A final-answer regression test sees only a fraction of that surface.

Chapter 18 places MCP tools and A2A-style remote agents behind pinned adapters. Discovery does not grant authority; compatibility requires explicit mappings for identity, effects, timeouts, cancellation, errors, evidence, and version change. Chapter 19 inventories behavior-bearing components, replays representative trajectories, migrates durable state, constrains rollout, and retires superseded evidence. Chapter 20 asks leaders to decide whether a pattern should be retained, reduced, repaired, reused, platformized, transferred, or retired.

The final handoff is not a claim of permanent safety. It is a versioned evidence chain with named owners and expiration conditions. Reuse is earned only when repeated cases preserve a stable contract while local authority and consequence remain explicit. Platformization is justified only when it reduces repeated risk and toil without centralizing decisions that belong with the domain.

The appendices turn the book's decisions into reviewable working artifacts. They should help a team ask sharper questions. They must never convert an unknown into a checkmark.
