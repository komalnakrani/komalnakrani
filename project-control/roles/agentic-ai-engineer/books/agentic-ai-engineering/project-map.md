# Agentic AI Engineering — Capstone Project Map

## Project identity

- **Product:** FieldOps Relay
- **Dossier prefix:** `AR`
- **Architecture version:** 1.0.0
- **Data:** deterministic synthetic equipment, manual, technician, inventory,
  scheduling, approval, run, trace, cost, and incident records
- **Default execution:** local sandbox, provider-neutral, no network, paid
  service, credential, or real effect required

FieldOps Relay is a fictional service-work coordination agent. Given a synthetic
equipment issue, it can inspect equipment and manual records, request missing
information, propose a plan, check synthetic technician and inventory
availability, and—only after explicit local approval—reserve a synthetic slot
or part. It never controls equipment, makes a safety diagnosis, contacts a real
person, or changes a real system.

The capstone is one evolving action-and-evidence dossier, not disconnected
tutorials. Every milestone changes a system or release decision and retains
superseded assumptions.

## Artifact lifecycle

Every `AR-*` record includes:

- stable ID, title, semantic version, owner, reviewers, and status;
- task or decision supported;
- input evidence, versions, provenance, permissions, and limitations;
- observed result, inference, and recommendation as separate fields;
- relevant identity, authority, approval, and consequence class;
- acceptance checks and executable evidence paths;
- predecessor, superseded-by, and change-history links.

The canonical chain is:

`task -> autonomy/action contract -> harness/tools/authority/state -> topology ->
durable execution -> task environment/evaluation -> controls -> operational
envelope -> bounded release -> incident learning -> protocol/change replay ->
reuse decision`

## Milestone map

### AR-01 — Responsibility and autonomy decision

- **Chapters:** 1–2
- **Consumes:** fictional workflow brief, deterministic scheduling baseline,
  synthetic issue records, stakeholder request for a “team of agents.”
- **Produces:** role boundary, task/consequence model, automation alternatives,
  autonomy ladder, baseline, rejection log, and evidence gaps.
- **Decision:** whether any model-directed action is justified and at what
  maximum autonomy.
- **Acceptance evidence:** fixed workflow is tested first; consequence and
  completion are observable; platform/product/domain/safety ownership remains
  outside the role.
- **Failure injection:** the deterministic baseline handles 92% of cases, but a
  multi-agent design is requested for presentation value.

### AR-02 — Goal, action, and authority contract

- **Chapter:** 3
- **Consumes:** AR-01 task and autonomy decision.
- **Produces:** goal, completion predicate, allowed/prohibited actions,
  consequence classes, budgets, stop/escalation rules, approver map, non-goals,
  and evidence obligations.
- **Decision:** which actions FieldOps Relay may propose, execute, or never
  attempt.
- **Acceptance evidence:** every effect has a principal, scope, authority,
  precondition, confirmation, and failure behavior.
- **Failure injection:** “resolve the request” is interpreted as permission to
  schedule work and reserve scarce stock without approval.

### AR-03 — Inspectable harness

- **Chapter:** 4
- **Consumes:** AR-02 contract.
- **Produces:** run/event schemas, explicit state machine, model/action boundary,
  completion and stop enforcement, turn/action/time budgets, cancellation, and
  deterministic model double.
- **Decision:** what belongs to model choice versus enforced software.
- **Acceptance evidence:** all transitions are typed and replayable; the model
  cannot declare success without a completion predicate.
- **Failure injection:** the model loops on an unavailable tool until the global
  timeout kills the process with no disposition.

### AR-04 — Capability catalog

- **Chapter:** 5
- **Consumes:** AR-03 harness.
- **Produces:** read, compute, propose, and effectful tool contracts; schemas;
  error taxonomy; validation; idempotency and compensation records; test doubles.
- **Decision:** which capabilities are sufficiently narrow and predictable to
  expose.
- **Acceptance evidence:** no generic shell/SQL/API tool; effects are distinct
  from reads; ambiguous success and duplicate invocation are tested.
- **Failure injection:** a reservation succeeds remotely but returns a timeout.

### AR-05 — Identity and delegation packet

- **Chapter:** 6
- **Consumes:** action and capability contracts.
- **Produces:** principal/agent/task identities, token/scope strategy, consent,
  approval binding, revocation, audit evidence, and credential redaction tests.
- **Decision:** who may authorize each data access and effect and for how long.
- **Acceptance evidence:** least privilege is enforced by tools; broad user
  credentials are not placed in prompts or durable state.
- **Failure injection:** a resumed run reuses an expired approval and token.

### AR-06 — State, context, artifact, and memory lifecycle

- **Chapter:** 7
- **Consumes:** harness, tools, identity packet.
- **Produces:** state categories, provenance/freshness/permission fields,
  context builder, artifact store, memory admission/expiry/deletion rules,
  tenant isolation, and conflict tests.
- **Decision:** what persists across turns and runs and what must not.
- **Acceptance evidence:** authoritative facts are separate from derived memory;
  untrusted content cannot become policy; deletion and tenant isolation work.
- **Failure injection:** a malicious manual note becomes durable cross-user
  memory and instructs a later run to call an unrelated tool.

### AR-07 — Topology experiment and vertical slice

- **Chapters:** 8–9
- **Consumes:** AR-03 through AR-06.
- **Produces:** runnable single-agent baseline, optional router/specialist
  comparison, handoff contract, shared-state ownership, cancellation, aggregation,
  duplicate-work prevention, quality/cost/latency results.
- **Decision:** retain one agent or add a measurable separation.
- **Acceptance evidence:** multi-agent topology must improve a named segment or
  control without unacceptable coordination cost or new failure.
- **Failure injection:** two workers reserve the same scarce synthetic part.

### AR-08 — Durable execution and human takeover

- **Chapters:** 10–11
- **Consumes:** running topology and effect semantics.
- **Produces:** checkpoint/lease model, retries, idempotency keys, deduplication,
  resume, compensation, ambiguous-effect reconciliation, approval queue,
  reviewer evidence view, takeover and cancellation runbooks.
- **Decision:** when to retry, resume, compensate, wait, transfer, or stop.
- **Acceptance evidence:** crash-after-effect and approval-timeout tests preserve
  one accountable owner and one correct final disposition.
- **Failure injection:** deployment occurs while a run awaits approval and the
  new worker cannot interpret the checkpoint.

### AR-09 — Task, trajectory, and outcome evaluation

- **Chapters:** 12–13
- **Consumes:** complete executable system and contracts.
- **Produces:** environment/task-set card, initial-state generator, held-out
  split, perturbations, trajectory schema, deterministic/state/effect checks,
  calibrated grader fixtures, human rubric, error taxonomy, segment report, and
  release gate.
- **Decision:** which task/action claims are supported and which require scope
  reduction.
- **Acceptance evidence:** outcome, actions, state, side effects, policy,
  recovery, and efficiency are scored; harness and budgets are versioned.
- **Failure injection:** final plans look correct while the agent performs extra
  unauthorized reads and leaves a stale reservation.

### AR-10 — Threat, control, and fault packet

- **Chapter:** 14
- **Consumes:** action surface, identity, memory, topology, and evaluation.
- **Produces:** threat/fault model, injection cases, capability scopes,
  validation/sandbox/egress/approval/revocation controls, control tests, residual
  limits, and escalation packet.
- **Decision:** whether technical controls meet the bounded release claim for
  designated security/safety/domain review.
- **Acceptance evidence:** every control maps objective -> mechanism -> test ->
  residual limit -> owner; prompt instructions alone do not count.
- **Failure injection:** tool-returned text tries to override approval and access
  another tenant's record.

### AR-11 — Observability and operational envelope

- **Chapters:** 15–16
- **Consumes:** evaluation/fault taxonomy and running system.
- **Produces:** privacy-aware trace schema, correlation and effect records,
  redaction/retention tests, signal catalog, run explorer, diagnostic queries,
  quality/time/turn/token/tool/cost/concurrency budgets, and load/degradation
  experiments.
- **Decision:** whether runs are diagnosable and supportable within task budgets.
- **Acceptance evidence:** causal transitions are visible without logging full
  sensitive payloads; tails and consequence segments control limits.
- **Failure injection:** average completion is healthy but rare loops exhaust
  inventory-tool rate limits and starve urgent work.

### AR-12 — Bounded release and incident learning

- **Chapter:** 17
- **Consumes:** AR-09 through AR-11 evidence.
- **Produces:** replay/simulation/shadow/read-only/approval/cohort plan,
  readiness gate, kill/rollback/roll-forward triggers, incident timeline,
  containment, correction, and verification update.
- **Decision:** whether to release, ramp, hold, reduce autonomy, rollback, or
  retire.
- **Acceptance evidence:** exposure answers a named question; stop authority is
  reachable; incident learning changes code, tests, contracts, or controls.
- **Failure injection:** retry storm creates duplicate reservations after a
  dependency slowdown.

### AR-13 — Interoperability and change compatibility

- **Chapters:** 18–19
- **Consumes:** complete dossier and forced protocol/model/tool change.
- **Produces:** local-to-MCP/A2A concept map, adapter contracts, remote capability
  verification, component inventory, compatibility matrix, state migration,
  replay/trajectory comparison, rollout and retirement disposition.
- **Decision:** whether an adapter or component change preserves the system's
  action and evidence contracts.
- **Acceptance evidence:** protocol and provider are replaceable; capability,
  identity, effect, and failure semantics remain locally enforced.
- **Failure injection:** a remote agent changes its capability metadata and the
  replacement model uses more unnecessary actions despite better task success.

### AR-14 — Capstone defense and reuse decision

- **Chapter:** 20
- **Consumes:** full versioned dossier and satellite-case results.
- **Produces:** hostile evidence review, pattern ledger, reuse/platform proposal,
  disconfirmation criteria, portfolio comparison, leadership brief, boundary
  and escalation record.
- **Decision:** retain, reduce, repair, reuse, platformize, or retire each
  mechanism.
- **Acceptance evidence:** reuse requires repeated evidence across cases;
  uncertainty and residual limits remain visible; formal authorities remain
  named.
- **Failure injection:** executives ask to expose every internal API as a tool
  and call the first successful pilot an enterprise platform.

## Executable companion shape

Minimum provider-neutral components:

- deterministic synthetic equipment, issue, manual, technician, inventory,
  calendar, user, approval, incident, and cost generators;
- goal/action/authority, run/event, tool, state/memory, handoff, trace,
  evaluation, and release schemas;
- deterministic model double with configurable action policies and known faults;
- local read/propose/effect tool doubles with typed errors, idempotency keys,
  effect ledger, compensation, and ambiguous outcomes;
- state machine, checkpoint store, lease/ownership, cancellation, retry,
  deduplication, and resume runner;
- identity/scope/approval simulator with expiry and revocation;
- single-agent baseline and optional router/worker/reviewer topology;
- environment/task generator, trajectory grader, segment/error report, and
  regression gate;
- prompt-injection/tool-poisoning fixtures and control tests;
- trace/event store with redaction/retention simulation and run explorer;
- time/turn/token/tool/cost/capacity simulator;
- release cohort, kill switch, incident replay, protocol adapter, component
  change, and state migration fixtures.

Optional live providers or remote protocols must be adapters. The default path
cannot perform a real external action.

## Assessment modes

1. **Artifact audit:** evidence lineage, versions, authority, limitations, and
   internal consistency.
2. **Executable check:** schemas, state transitions, scope, tools, effects,
   retries, recovery, evaluation, traces, budgets, and replay.
3. **Decision defense:** rejected alternatives, consequence, uncertainty, and
   next evidence.
4. **Failure injection:** repair a task after untrusted input, dependency error,
   crash, duplicate event, approval delay, or ambiguous effect.
5. **Contradictory change:** update model/tool/protocol/policy while preserving
   earlier rationale and measuring trajectory differences.

## Final capstone pass condition

The dossier must prove:

`justified autonomy -> bounded goal/action/authority -> inspectable
harness/tools/state -> durable execution -> representative trajectory/effect
evaluation -> implemented controls -> diagnosable operational envelope ->
bounded release and recovery -> compatible change -> evidence-earned reuse`

A persuasive demo, successful final answer, aggregate score, framework feature,
protocol claim, or policy sentence cannot replace a missing link.
