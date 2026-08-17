# Appendix B - Action-System Artifact Templates

These templates are starting structures for reviewable decisions. Filling fields does not prove the decision is correct, the control is implemented, or the system is safe. Each artifact requires an owner, evidence, unresolved limits, and a disposition.

## B1. Autonomy decision record

**Decision ID and version:**

**User task and consequence:** What observable job must be completed, for whom, and what goes wrong if the system is wrong, late, incomplete, or overreaching?

**Baseline:** How is the task completed today? Record quality, time, cost, failure, and human-attention evidence rather than adjectives.

**Options compared:**

| Mode | Candidate design | Expected benefit | New failure surface | Evidence |
| --- | --- | --- | --- | --- |
| fixed workflow | | | | |
| model-assisted | | | | |
| single agent | | | | |
| multiple agents | | | | |

**Least complex adequate choice:**

**Rejected complexity:** What was deliberately excluded and why?

**Reopen conditions:** Which measured limitation, task change, or control improvement would justify reconsideration?

**Owner and review date:**

## B2. Goal-action-authority contract

**Contract ID, version, task type, and owner:**

**Required end state:** Express as independently observable conditions.

**Prohibited end states:** Include forbidden effects, disclosures, unresolved uncertainty, and late completion.

**Initial-state requirements:** Source, version, freshness, permission, and conflict behavior.

**Permitted action classes:** For each class, name the capability, target scope, effect class, argument limits, frequency, and validity window.

**Forbidden actions:** Include capabilities and argument combinations that must never be model-selectable.

**Budgets:** Tokens or model calls are insufficient alone. Record time, attempts, actions, money-like value, external capacity, human attention, and consequence-specific limits.

**Approval checkpoints:** Object, evidence shown, eligible authority, expiry, rejection path, revision rule, and downstream scope.

**Stop and escalation:** Deterministic triggers, responsible actor, user-visible state, and reachable interruption path.

**Completion evidence:** External observation, required state version, verifier, freshness, and behavior when verification is unavailable.

**Known unknowns and residual owner:**

## B3. Capability contract

**Capability ID and semantic version:**

**Purpose:** One narrow action stated without marketing language.

**Caller and subject identity:** Who invokes, on whose behalf, through which delegation?

**Inputs:** Typed fields, allowed ranges, canonicalization, sensitive fields, and validation errors.

**Preconditions:** Resource version, authority, policy, budget, deadline, and environment checks performed outside model discretion.

**Effect class:** Read, local mutation, external reversible, external compensable, or irreversible.

**Idempotency:** Logical effect key, binding fields, storage duration, conflict response, and uncertain-result behavior.

**Timeout and cancellation:** Client wait, execution deadline, cancellation support, and late-result handling.

**Result states:** Distinguish accepted, completed, rejected, failed, unknown, cancelled, and partially compensated.

**Reconciliation:** Authoritative query or operator procedure for uncertain effects.

**Test double limits:** Which behavior is simulated, which provider behavior is absent, and what may not be inferred.

**Owner, consumers, change policy, and retirement path:**

## B4. Identity and delegation record

**Human principal:** Stable identity and organization context.

**Service identity:** Runtime component permitted to invoke the capability.

**Agent/run identity:** Unique task-bound actor, not a reusable human credential.

**Resource audience:** Exact system, tenant, project, site, or object boundary.

**Delegation chain:** Grantor, grantee, purpose, scopes, constraints, issue time, expiry, and revocation reference.

**Consent or notice basis:** Who received what explanation, which choice existed, and how withdrawal affects future and retained work.

**Approval binding:** Approval object ID, approver identity, eligible-role decision, task and resource version, proposed effect hash, expiry, and status.

**Audit evidence:** Policy decision ID, credential reference without secret material, capability call, effect reference, and retention tier.

**Failure behavior:** Missing, expired, ambiguous, revoked, audience-mismatched, or stale delegation must fail closed for consequential action.

## B5. State, context, artifact, and memory map

| Data class | Authority | Writer | Reader | Freshness | Retention | Deletion | Model exposure | Conflict rule |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| external truth | | | | | | | | |
| orchestration state | | | | | | | | |
| context snapshot | | | | | | | | |
| scratch work | | | | | | | | |
| durable artifact | | | | | | | | |
| preference | | | | | | | | |
| memory | | | | | | | | |

For every field that can change an action, record provenance and the check performed immediately before effect. For every retained field, record purpose, access, expiry, and deletion propagation. A vector index, prompt transcript, or cached object must not silently become a second system of record.

## B6. Run-state and event contract

**States:** Define allowed states such as created, validating, ready, planning, awaiting approval, executing, reconciling, completed, failed, cancelling, cancelled, and intervention required.

**Transition table:**

| Current state | Event | Preconditions | Deterministic gate | Next state | Emitted evidence |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

**Event envelope:** Event ID, task ID, run ID, contract version, state revision, causation ID, actor, timestamp source, lease generation, payload schema, sensitivity class, and producer.

**Duplicate behavior:** Which events are deduplicated, which transitions are guarded, and how late events are quarantined.

**Replay behavior:** What is reconstructed, which external calls are replaced by recorded results or doubles, and how non-deterministic decisions are versioned.

## B7. Handoff contract

**Handoff ID and topology decision ID:**

**Sender and receiver:** Include ownership, not only role labels.

**Task slice:** Exact outcome the receiver owns and conditions for returning it.

**Input snapshot:** State version, artifacts, provenance, assumptions, and unresolved conflicts.

**Authority subset:** Capabilities, targets, budgets, deadlines, and prohibited effects. A child must not inherit all parent authority by default.

**Return contract:** Artifact schema, evidence, confidence or uncertainty language, and validation.

**Cancellation and timeout:** How the receiver learns the parent stopped, acknowledges, and handles late completion.

**Failure and escalation:** Retry ownership, fallback, reconciliation, and human intervention.

**Aggregation:** Conflict rule, partial-result behavior, duplicate result handling, and final owner.

**Comparison result:** Measured benefit over the single-agent baseline and added overhead.

## B8. Human checkpoint record

**Checkpoint ID, task ID, and state revision:**

**Decision requested:** One bounded choice, not a vague request to review everything.

**Proposed effect:** Capability, target, normalized arguments, expected consequence, reversibility, and effect hash.

**Evidence packet:** Goal, relevant context, alternatives, policy reason, uncertainty, prior actions, budgets, and downstream consequences.

**Eligible authorities:** Named roles and the policy that grants decision rights.

**Responses:** Approve, reject, request revision, cancel, or take over. Record reason where required.

**Timing:** Created, expires, escalation threshold, and behavior after expiry.

**Revalidation on resume:** Task version, resource state, authority, policy, budget, and deadline.

**Usability evidence:** Time to decide, disagreement, abandonment, revisions, and evidence that the checkpoint supports informed judgment rather than rubber stamping.

## B9. Representative environment card

**Environment version and owner:**

**Target claim:** Exact behavior the environment can test.

**Included:** Task families, users, roles, policies, initial states, capabilities, side effects, budgets, time, concurrency, approval behavior, faults, and consequence segments.

**Excluded or simplified:** Real integrations, provider variance, human behavior, data distributions, physical effects, adversaries, regulation, scale, and operational noise.

**Data boundary:** Synthetic construction method, any transformed source material, permissions, isolation, retention, and disclosure.

**Splits:** Development, regression, adversarial, and held-out cases with leakage controls.

**Oracles:** Deterministic checks, external state queries, human judgments, disagreement procedure, and authority limits.

**Known gaps and claim restriction:** State the strongest conclusion the environment cannot support.

## B10. Evaluation and trajectory record

**Evaluation version, system version, and preregistered decision:**

**Case inventory and segments:** Include consequence, difficulty, ambiguity, authority pattern, effect class, and failure mode.

**Metrics:**

| Layer | Example question | Measure | Threshold or review rule |
| --- | --- | --- | --- |
| outcome | Did required state occur? | | |
| action | Were actions necessary and permitted? | | |
| arguments | Were targets and values valid? | | |
| state | Were transitions consistent and conflict-safe? | | |
| authority | Was every effect properly delegated or approved? | | |
| recovery | Did faults end in reconciled state? | | |
| efficiency | Did the run stay inside joint budgets? | | |
| judgment | Did qualified reviewers agree, and where not? | | |

**Critical failures:** Events that block release regardless of aggregate score.

**Negative evidence:** Failed cases, missing segments, evaluator disagreements, flaky checks, and environment limits.

**Disposition:** Retain, reduce, repair, expand evidence, or reject. Name owner and deadline.

## B11. Trace and privacy record

**Decision questions:** What incident, evaluation, billing, security, or user-support questions must traces answer?

**Causal schema:** Task/run/event/causation IDs, state revisions, model and prompt versions, capability calls, policy decisions, approvals, effect references, budgets, and outcomes.

**Data minimization:** Which raw content is excluded, transformed, tokenized, hashed, redacted, or sealed.

**Access tiers:** Routine telemetry, restricted diagnostic fields, sealed evidence, and break-glass procedure.

**Retention and deletion:** Per-field duration, legal or operational basis, deletion propagation, holds, and verification.

**Integrity:** Tamper evidence, clock/source caveats, dropped-event detection, and correlation limitations.

**User and operator visibility:** What status or audit explanation can be provided without exposing sensitive internals.

## B12. Release, recovery, and change record

**Release question:** Name the uncertainty this exposure is intended to answer.

**Versions:** Contract, model, prompt, harness, capability, policy, adapter, evaluator, environment, and data.

**Cohort and authority:** Eligible users/tasks, excluded segments, action limits, approval requirements, and ramp steps.

**Readiness evidence:** Regression and adversarial results, critical-failure status, capacity, on-call ownership, checkpoint usability, interrupt rehearsal, and recovery rehearsal.

**Stop triggers:** Measurable outcome, authority, effect, cost, queue, privacy, security, or recovery conditions with named decision owners.

**Interrupt path:** How new actions stop, in-flight actions settle, and residual effects are found.

**Rollback or forward repair:** Component and state compatibility, migration behavior, and verification.

**Incident link:** Affected tasks, containment, reconciled effects, user communication, hypotheses, root contributors, and durable changes.

**Change replay:** Cases and trajectories compared, segment regressions, evaluator changes, performance envelope, and superseded claims.

**Final disposition and residual acceptance:** Accepted only by the named authority within its permitted scope.

## Template closeout rule

Every artifact ends with five lines: **evidence supports**, **evidence does not support**, **open risks**, **named owner**, and **next decision date**. If any line is absent, the artifact is not ready to authorize increased autonomy or exposure.
