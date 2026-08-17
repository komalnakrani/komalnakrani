# Appendix D - Provider-Neutral Companion Guide

The companion is a deterministic local teaching harness. It demonstrates how the book's contracts can become executable structures without requiring a live model, production credential, external provider, or real-world effect. It is not a reference production architecture and does not certify any vendor or protocol.

## Safety boundary

The default companion operates only on synthetic FieldOps fixtures and local state. Its model doubles return predefined decisions. Its capability doubles produce controlled results, timeouts, conflicts, and uncertain effects. Its event store exists to make state transitions and replay inspectable.

Do not place production secrets, personal data, customer records, live endpoints, or consequential credentials into fixtures. Do not point a test adapter at a production system. Do not infer that a passing double predicts a provider's availability, security, model behavior, policy enforcement, idempotency, or cancellation semantics.

The companion can support statements such as: “given fixture X, event sequence Y, and implementation version Z, the run entered `intervention_required` after an uncertain effect and reconciliation failure.” It cannot support: “the system is safe in production.”

## Local setup

From the repository root, inspect the companion package and run its tests with the repository's Node runtime:

```text
node --test content/publications/agentic-ai-engineering/companion/tests/*.test.mjs
```

The suite should run without network access or provider keys. A failure is an implementation or fixture signal, not an invitation to bypass the assertion. Read the named test and the corresponding chapter contract before changing behavior.

The companion directory is organized around concepts rather than a vendor SDK. Exact filenames may evolve within the edition, but the responsibilities remain:

| Area | Responsibility |
| --- | --- |
| contracts | task, capability, authority, budget, checkpoint, and handoff shapes |
| runtime | guarded run-state transitions, ownership, cancellation, and event emission |
| capabilities | typed local doubles and effect classification |
| identity | principals, delegation, approval binding, and policy checks |
| state | authoritative synthetic world, orchestration records, and artifacts |
| evaluation | cases, trajectory checks, segments, and dispositions |
| faults | deterministic timeouts, duplicates, conflicts, crashes, and corrupt results |
| adapters | optional seams that translate external interfaces into local contracts |
| tests | executable examples and regression expectations |

## Typed task contracts

A task fixture should name a contract version, initial state reference, required and prohibited end states, permitted capabilities, budgets, approval rules, stop triggers, and completion verifier. Avoid a single free-form objective as the only specification.

When adding a fixture:

1. choose one learning problem;
2. state the expected disposition before running it;
3. include the smallest synthetic world that exposes the problem;
4. record which real conditions are absent;
5. assert external state and event sequence, not only final text;
6. add the case to an appropriate consequence segment.

Keep fixture IDs stable. A changed expected result should be reviewed as a contract or system change, not silently accepted through snapshot replacement.

## Model and capability doubles

A deterministic model double should return a decision or structured proposal that is known in advance for the fixture. It can simulate malformed output, refusal, repeated action, stale reasoning, or a prohibited suggestion. The runtime remains responsible for schema validation, policy, authority, budgets, and state gates.

A capability double should model semantic states, not merely return `{ok: true}`. Useful results include:

- validation rejected before effect;
- policy denied;
- accepted but not yet externally confirmed;
- completed with an authoritative effect reference;
- timed out with effect unknown;
- duplicated request returning the original logical effect;
- cancelled before execution;
- cancellation requested but effect already committed;
- reconciliation confirmed, rejected, or remained unknown;
- compensation completed with residual consequence.

The double's idempotency and timeout behavior must be explicit. Tests should prove that a retry reuses the logical effect key, a conflicting payload is rejected, and an uncertain result cannot become success without reconciliation evidence.

## Event store and replay

The event store preserves causal facts about the synthetic run. Each event should include an event ID, task and run IDs, contract version, state revision, causation ID, actor, event type, timestamp source, lease generation where relevant, and a bounded payload.

Replay has two distinct modes:

- **state reconstruction** applies recorded events to reproduce orchestration state;
- **behavior replay** re-executes decision logic against recorded or versioned inputs while replacing external effects with doubles or recorded results.

Do not reissue live effects during replay. Do not assume state reconstruction proves the old decision was correct. Behavior replay should record model, prompt, harness, policy, tool schema, adapter, and evaluator versions so a changed result can be attributed.

Useful replay assertions include:

- the same event stream produces the same state revision;
- duplicate events do not create another effect;
- an event from an old lease generation is rejected;
- cancellation prevents a late child result from advancing the parent;
- a new policy blocks a trajectory previously allowed;
- a state migration preserves pending checkpoint and idempotency references.

## Fault injection

Fault injection is most useful when it attacks a named assumption. “Randomly fail ten percent” may test retry volume, but it does not establish recovery from the failures that matter.

Start with a fault card:

| Field | Example |
| --- | --- |
| assumption | a timeout means no reservation was created |
| injection point | capability response after external mutation |
| injected behavior | drop response and return timeout |
| required containment | state becomes effect unknown; no new logical key |
| recovery | reconcile using effect reference, then settle task |
| prohibited result | duplicate reservation or false completion |

The local clock should be controllable so expiry, retry schedules, lease loss, approval delay, and cancellation races remain reproducible. Seeded ordering can exercise concurrent branches while still allowing the failing sequence to be replayed.

Cover at least identity, state, tool, runtime, checkpoint, budget, and effect faults. Pair each injected failure with an assertion about residual state and evidence. A caught exception alone is not containment.

## Human checkpoint simulation

The companion can model approval decisions, delays, expiry, rejection, revision, and takeover. It cannot establish real human comprehension or workload. Synthetic responses are useful for verifying lifecycle behavior:

- the request contains the exact effect and state version;
- only an eligible synthetic actor can decide;
- expiry rejects a late response;
- changed effect arguments create a new checkpoint;
- cancellation closes pending work;
- resume revalidates current state and authority;
- rejection cannot be converted into success by model replanning.

Real usability review must inspect whether people understand the choice, have sufficient time and context, notice unsafe proposals, and can use rejection or takeover paths.

## Evaluation use

Evaluation cases should inspect the full record. A helper can verify required external state, allowed capability sequence, normalized arguments, delegation and approval links, budget consumption, recovery state, and absence of prohibited effects.

Keep critical failures separate from averaged metrics. A suite can report high outcome completion while still failing release because one case crosses a tenant boundary or duplicates an irreversible action. Segment summaries should retain counts and case IDs so an aggregate cannot hide a sparse severe failure.

The evaluator is versioned system code. Changing an oracle, tolerance, judge prompt, or case classification can change results even when the agent implementation is identical. Record and review that change.

## Optional adapter seam

An adapter translates an external model, tool, or protocol interface into a local contract. It should not leak provider-specific semantics throughout the runtime. Keep optional adapters disabled by default and fail closed when configuration is missing.

Before an adapter can be used outside local experimentation, document:

- external and local version mapping;
- authentication and credential handling;
- identity and delegation propagation;
- capability discovery versus invocation authority;
- input validation and effect classification;
- timeout, retry, cancellation, and streaming behavior;
- error and partial-effect mapping;
- trace redaction and retention;
- rate, cost, and capacity controls;
- conformance and fault tests;
- fallback, rollback, and retirement.

Never store a secret in a fixture, source file, trace snapshot, or generated artifact. Tests should use explicit fake values that cannot authorize a real request.

## Debugging sequence

When a test fails, follow the evidence chain:

1. identify the first unexpected event, not the final exception;
2. compare contract and fixture versions;
3. inspect current state revision, owner, and cancellation marker;
4. inspect the policy and identity decision;
5. inspect the capability's logical effect key and result state;
6. determine whether external state is known, unknown, or reconciled;
7. inspect budget and checkpoint transitions;
8. reduce to the smallest reproducible event sequence;
9. add a regression assertion before repairing the implementation;
10. state what the repair still does not prove.

Avoid deleting a failing assertion, replacing a precise state with generic failure, or widening a timeout until the symptom disappears. Those changes can hide the action-system defect.

## Extension rule

A safe companion extension preserves the local contracts, deterministic default, synthetic-data boundary, network-free tests, and explicit residual limitations. Provider examples remain adapters. Production readiness remains a separate evidence and authority decision.
