# Appendix A - Agent System and Distributed Failure Refresher

This appendix is a decision-depth refresher for engineers reviewing long-running action systems. It is not a substitute for distributed-systems design review, reliability engineering, security analysis, or domain-specific safety work. Its purpose is to keep familiar mechanisms tied to agent tasks and external effects.

## The task is a distributed record

An agent run is rarely contained in one model call. It crosses an orchestrator, model service, capability gateway, identity system, queue, database, approval surface, and one or more external systems. Each component can observe a different moment. Messages can be delayed or duplicated. Processes can crash after an effect but before recording its result. A human can act on an old request. No single component's local success proves the task's required world state.

Model the run as durable facts and guarded transitions. A useful minimum record contains:

| Field | Review purpose |
| --- | --- |
| task ID and run ID | distinguish durable intent from an execution attempt |
| contract version | identify the exact goal, authority, budgets, and stop rules |
| state and revision | reject stale writers and explain the current owner |
| event ID and causation ID | detect duplicates and reconstruct why a transition occurred |
| capability and effect ID | connect an attempted call to an external consequence |
| actor and delegation | prove which identity acted for whom and within what scope |
| deadline and cancellation state | prevent work from surviving beyond useful authority |
| evidence references | support completion, approval, reconciliation, or recovery claims |

The event record should describe what the system observed, not what it wishes were true. `dispatch_requested` and `dispatch_confirmed` are different facts. `approval_received` must identify the approved object and version. `task_completed` must cite the completion check.

## Timeouts are decisions about uncertainty

A timeout means the caller stopped waiting. It does not mean the callee stopped working, the request failed, or the external effect did not occur. Retrying immediately after a timeout can create a duplicate effect. Declaring failure can leave an untracked success in the world.

For each capability, define three time horizons:

- the client wait limit, after which the orchestrator stops blocking;
- the capability deadline, after which new work must not begin;
- the effect validity window, after which the requested consequence is no longer authorized or useful.

These horizons need not be equal. A reservation may remain valid after an HTTP wait expires, while a notification about an imminent appointment may become harmful if sent late. The timeout branch must lead to a known state such as `effect_unknown`, not a convenient but unsupported `failed` state.

Review questions:

1. Can the receiver honor an absolute deadline rather than only a relative timeout?
2. Does cancellation reach queued and in-flight work?
3. If cancellation races with success, which evidence settles the result?
4. What user-visible status is honest while the effect is unknown?
5. Who reconciles a timed-out effect, and within what service objective?

## Retries and idempotency

Retries are appropriate for some transient failures, but only when the operation's semantics are understood. Reading a stable resource can often be retried safely. Creating a reservation, sending a message, charging an account, or opening access may not be safe without an idempotency contract.

An idempotency key should identify one logical effect, not one transport attempt. The receiver should bind the key to the caller, operation, normalized arguments, and validity window. Reuse with different arguments should fail visibly. A stored response should distinguish an accepted request from a verified external effect.

Three common implementations have different limits:

- **deduplicate before execution:** rejects a repeated key, but a crash between the effect and result storage may still leave uncertainty;
- **transactional effect and record:** strong when the effect and idempotency record share one transactional authority, unavailable across many external systems;
- **reconcile after uncertainty:** queries external state using a stable effect reference and repairs the local record.

The agent should not invent a new key on retry, because that requests a new effect. It should not assume a provider's idempotency window outlives the task. It should not treat an identical natural-language description as an effect identity.

## Leases, ownership, and fencing

Long-running tasks need an owner, but ownership must expire when a worker disappears. A lease grants temporary right to advance a run. The worker renews it while healthy. Another worker may acquire the run after expiry.

Expiry creates an overlap risk: the old worker may continue after losing ownership. A fencing token addresses this by assigning a monotonically increasing generation to each lease. State stores and capability gateways reject writes or effects from an older generation. Without fencing, two workers can both believe they own the task.

A lease design should state:

- acquisition preconditions and revision checks;
- renewal interval and expiry margin;
- fencing-token propagation to state and effects;
- behavior during clock skew or connectivity loss;
- which work may finish after lease loss;
- how an abandoned human checkpoint is reassigned; and
- how operators distinguish a slow worker from a dead one.

Leases are not a global lock. They bound orchestration ownership. External resources may require their own concurrency and conflict controls.

## At-least-once delivery and duplicate events

Queues commonly provide at-least-once delivery. The same event may be processed more than once, sometimes long after the first attempt. Consumers need stable event IDs and durable deduplication or transition guards.

Guard the state transition, not only the handler invocation. If `approval_granted` advances a run from `awaiting_approval` to `ready_to_execute`, a duplicate received after cancellation must not resurrect the run. The transition checks current state, contract version, approval object version, expiry, actor authority, and cancellation status.

Out-of-order delivery is a separate problem. Sequence numbers can help within one stream, but streams may merge. Causation references and state preconditions make the relationship explicit. When strict order cannot be guaranteed, handlers should tolerate missing predecessors by deferring, querying authoritative state, or entering a repair queue.

## Consistency and authoritative state

Agent context is not authoritative merely because it is recent. A retrieved policy, cached inventory record, or remembered preference can be stale, incomplete, or unauthorized for the current actor. Each decision-bearing value needs an authority and freshness rule.

Useful categories include:

- **authoritative external state:** the system of record for a resource or effect;
- **orchestration state:** task ownership, transitions, budgets, and checkpoints;
- **materialized view:** a derived representation that can lag its sources;
- **context snapshot:** bounded evidence supplied to the model for one decision;
- **artifact:** a durable plan, report, or result with provenance;
- **memory:** retained information selected for later use under explicit policy.

Strong consistency is not always available. The design must then state which stale reads are acceptable, how conflicts are detected, and which actions require a fresh authoritative check immediately before effect. A plan may be built from a snapshot, while execution revalidates identity, authority, resource version, budget, and deadline.

## Cancellation is a distributed protocol

Cancellation is not a Boolean stored on the parent run. It is an intent that must propagate to workers, tools, human queues, scheduled retries, and remote agents. Some effects cannot be interrupted once committed. Others can be reversed only through a distinct compensating action.

A cancellation protocol should answer:

1. who may request cancellation;
2. which task version and descendants it covers;
3. how quickly each component observes it;
4. which queued work is removed;
5. how in-flight work acknowledges stop or non-interruptibility;
6. how late results are quarantined;
7. which effects require reconciliation or compensation;
8. when the user sees `cancelled`, `cancelling`, or `cancelled_with_residual_effects`.

Completion and cancellation may race. The system should use authoritative state and effect evidence to settle the outcome rather than letting the last message win.

## Compensation is not rollback

Database rollback restores a transaction before commit. Compensation creates a new, visible action intended to reduce or reverse a prior effect. The original action remains part of history. Compensation may be partial, costly, delayed, or impossible.

For each consequential capability, classify reversibility:

| Class | Example behavior | Required design |
| --- | --- | --- |
| freely reversible | release an unconsumed synthetic reservation | inverse capability, authorization, verification |
| conditionally reversible | cancel before a deadline or downstream use | window, preconditions, residual effect record |
| compensable | create a corrective work item or refund-like record | separate authority, accounting, causal link |
| irreversible | disclose a secret or send a time-sensitive message | prevention, approval, narrow scope, containment |

Never describe compensation as erasing the first effect. Incident records, audit trails, and user communication must preserve both events and the residual consequence.

## Checkpoints and delayed humans

Human work introduces unbounded latency and independent state change. An approval request is a durable object containing the proposed action, target, arguments, consequence summary, evidence, policy reason, requester, eligible approvers, expiry, and downstream scope. The approver must be able to reject, request changes, or take over.

On return, the system revalidates the task version, resource state, delegation, budgets, policy, and deadline. An approval is not a blanket token for a regenerated plan. Material change creates a new approval object.

Queues for human attention need capacity limits, aging policy, escalation, and abandonment behavior. Adding approval to every decision can transfer unsafe workload to people and create rubber-stamping pressure. Checkpoints belong where informed human judgment changes the consequence, not where a machine could enforce a deterministic rule.

## Recovery levels

Recovery should be claimed at the narrowest verified level:

- **process recovery:** a worker restarted;
- **run recovery:** the orchestrator resumed a valid state;
- **effect recovery:** uncertain external effects were reconciled;
- **task recovery:** the required end state was restored or the task safely terminated;
- **service recovery:** the system again meets its declared operating envelope;
- **learning closure:** the incident produced a verified durable change.

These levels can diverge. A green service dashboard does not prove affected tasks were repaired. A replayed event does not prove a duplicated effect was compensated. A closed incident ticket does not prove the new control works.

## Failure review worksheet

For each failure mode, record:

| Question | Required evidence |
| --- | --- |
| What uncertainty appeared? | event, timeout, conflict, or missing observation |
| Which state was authoritative? | system and version used to settle the fact |
| Could work continue? | explicit contract and authority basis |
| Could an effect have occurred? | effect ID, provider reference, or unknown marker |
| Was retry safe? | idempotency binding and validity window |
| Did ownership change? | lease generation and fencing evidence |
| Did cancellation propagate? | child acknowledgements and residual list |
| Was compensation possible? | inverse action, authority, and verified outcome |
| What remained unresolved? | owner, deadline, user communication, and release impact |

The worksheet is complete only when unsupported certainty has been removed. `Unknown` with a named reconciliation path is stronger engineering than a convenient success or failure label.

Finally, rehearse the worksheet with operators who did not build the happy path. They should be able to locate the authoritative state, identify possible residual effects, stop unsafe continuation, and name the next owner using only durable records. If recovery depends on private memory or the original developer's intuition, the action system is not yet operable.
