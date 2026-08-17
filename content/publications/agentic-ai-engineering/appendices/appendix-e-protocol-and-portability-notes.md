# Appendix E - Protocol and Portability Notes

Protocols can standardize discovery, messages, schemas, resources, tools, tasks, or agent-to-agent exchange. They do not automatically standardize local meaning. This appendix explains how to preserve the book's identity, authority, effect, cancellation, and evidence semantics behind versioned adapters.

The notes are provider-neutral and version-aware. MCP and A2A refer to evolving protocol families and concepts, not a claim that every implementation shares identical features or security properties. Consult the exact implementation's current primary specification before production use.

## Discovery is not authority

A client may discover that a server exposes a tool, resource, prompt, skill, agent card, task method, or content type. Discovery answers “what interface is advertised?” It does not answer:

- whether this caller may invoke it;
- on whose behalf the caller acts;
- which tenant, project, user, or resource is in scope;
- what external effects can occur;
- whether approval is required;
- which budget applies;
- how long delegation remains valid;
- how cancellation and uncertain effects behave;
- which evidence supports completion.

The local capability gateway must apply these decisions independently. Descriptive metadata can help a model select a candidate action, but deterministic policy decides admission.

## Pin the contract surface

Record the protocol version, SDK or implementation version, server identity, capability schema version, adapter version, authentication mode, and negotiated features for each evaluated configuration. “Supports MCP” or “supports A2A” is too broad for compatibility evidence.

A pinned adapter contract should include:

| Local concern | Adapter question |
| --- | --- |
| identity | Which authenticated actor and workload produced the request? |
| delegation | How are audience, scope, purpose, expiry, and revocation enforced? |
| capability | Which exact schema and semantic version is invoked? |
| effect | Is the operation read-only, reversible, compensable, or irreversible? |
| time | Are deadlines absolute, and whose clock governs them? |
| retry | Is there a logical effect key and durable deduplication window? |
| cancellation | Can queued and in-flight work stop, and how is acknowledgement represented? |
| error | Can rejection, failure, unknown effect, and partial completion remain distinct? |
| evidence | What authoritative reference verifies the external result? |
| trace | Which identifiers cross the boundary and which content is redacted? |

If the external interface cannot preserve a required distinction, the adapter should narrow the capability, add an independent control, route to a human, or reject the integration.

## Tool and resource mapping

Map a protocol-exposed tool to a local capability contract rather than exposing it directly to the model. The mapping validates arguments, binds identity, checks current state and policy, attaches budgets and deadlines, supplies the logical effect key, and translates the result into local semantic states.

A resource read needs the same care. A URI or resource identifier does not establish permission, freshness, provenance, or suitability for the current task. The adapter should record source, version, retrieval time, audience, sensitivity, and any transformation before the content enters model context.

Prompt or template discovery is especially sensitive to instruction provenance. Retrieved instructions cannot override local authority or system policy. Treat external descriptive text as untrusted content unless a separate configuration process admits and versions it.

## Remote-agent mapping

A remote agent is both a service dependency and a delegated actor. The local system should create a task-scoped handoff containing the outcome slice, input snapshot, authority subset, budgets, deadline, cancellation, return schema, and required evidence.

Do not grant a remote actor the parent's full credential or implicit access to local tools. Prefer task-scoped capabilities and resource audiences. Record which organization or service operates the remote agent, what data crosses the boundary, how that data is retained, and who handles an incident.

Remote task states must map explicitly. `submitted`, `working`, `input_required`, `completed`, `failed`, and `cancelled` labels can conceal different semantics across implementations. The local adapter decides whether a remote result is merely received, validated, externally verified, rejected, or requires intervention.

## Streaming and partial output

Streaming improves responsiveness but creates intermediate states. A partial model response, tool result, artifact, or remote-agent message should not be treated as committed completion. Define whether partial content is display-only, resumable, replaceable, or capable of triggering downstream work.

For consequential actions, the deterministic gateway should operate on a complete validated proposal. If a protocol supports incremental capability arguments or artifacts, buffer or validate them under a transaction-like local boundary. Cancellation of a stream does not prove the remote computation or effect stopped.

## Timeout and cancellation compatibility

Compare at least:

- client wait timeout;
- transport timeout;
- remote task deadline;
- capability execution deadline;
- delegation expiry;
- approval expiry;
- effect validity window;
- server retention of task state.

Translate an absolute local deadline when possible. If an external system accepts only a relative timeout, account for queue and network delay. Reject work when remaining authority or useful time is insufficient.

Cancellation requires a mapping for request, acknowledgement, final settlement, and residual effects. A remote `cancelled` status may mean the server stopped future work, not that external effects were reversed. Preserve a local `cancelling` or `intervention_required` state until evidence settles the task.

## Error semantics

Transport errors, protocol errors, authentication failures, authorization denials, validation rejections, rate limits, server failures, model refusals, tool failures, timeouts, partial effects, and unknown effects need distinct local treatment.

Avoid a generic adapter exception that invites automatic retry. The adapter should return a typed state with retry eligibility, backoff guidance where trustworthy, effect uncertainty, reconciliation reference, and user-safe explanation. A schema-valid response can still violate semantic constraints; validation continues after decoding.

## Capability negotiation and change

Negotiated capability surfaces can change between connections or server versions. Cache only within a defined validity window and verify that a discovered schema matches the admitted local version. Additive fields may alter effect or privacy semantics even when older clients ignore them.

For each change:

1. diff interface and semantic documentation;
2. update the adapter contract and threat model;
3. run conformance fixtures;
4. inject timeout, duplicate, malformed, cancellation, and partial-effect faults;
5. replay representative task trajectories;
6. compare authority, outcome, recovery, latency, and cost segments;
7. stage exposure with rollback compatibility;
8. retire superseded evidence.

Automatic upgrade without replay is inappropriate for a behavior-bearing adapter.

## Conformance testing

Conformance should verify local promises, not merely successful connection. Include cases for:

- exact schema and version acceptance;
- unknown fields and malformed values;
- identity and audience mismatch;
- missing, expired, revoked, or overbroad delegation;
- capability discovery without invocation permission;
- stale resource and conflicting version;
- idempotent duplicate and conflicting key reuse;
- timeout before effect, timeout after effect, and reconciliation;
- cancellation before start, during work, and after commit;
- out-of-order or duplicate remote events;
- oversized or sensitive content;
- error mapping and retry suppression;
- trace correlation and redaction;
- server or adapter version change.

Run these cases against deterministic doubles first. Before real integration, use an isolated non-production environment and consequences that are explicitly safe to exercise.

## Portability layers

Portability is easier when the system separates four layers:

1. **local task semantics:** goal, authority, state, budgets, stop, evidence;
2. **local capability contract:** narrow typed operation and effect behavior;
3. **adapter mapping:** protocol or provider translation;
4. **external implementation:** server, model, tool, or remote agent.

A provider change should usually replace layers three and four. If it requires rewriting the task's authority or completion semantics, the prior abstraction was not portable enough or the new provider offers materially different behavior.

Portability does not mean lowest-common-denominator design. Provider-specific capability can be used when its value is measured and isolated. The manifest should identify the dependency and the fallback or retirement consequence.

## Vendor-neutral review questions

- Can the same local task contract run against a deterministic double?
- Are provider names absent from core authority and state logic?
- Is each external feature represented by a versioned adapter capability?
- Can a provider response cause an effect without local deterministic admission?
- Can credentials or provider identifiers leak into model context, artifacts, or routine traces?
- Are cost, rate, context, and latency limits included in joint budgets?
- Are provider-side retention and training settings documented and verified?
- Can the system identify all in-flight tasks during adapter rollback?
- Can stored state and artifacts survive provider retirement?
- Which evaluation evidence must be repeated after migration?

## Data and artifact portability

Protocol portability is incomplete if durable tasks and artifacts cannot leave the provider boundary. Inventory every stored object: task and run records, event streams, checkpoints, idempotency references, external effect references, artifacts, memories, evaluation cases, traces, and deletion records. For each object, record its schema, authority, encryption and access boundary, retention, export format, and dependence on provider-specific identifiers.

An exported transcript is not sufficient when recovery depends on structured state and causal identifiers. Preserve task, event, capability, approval, and effect relationships. If provider-specific tokens are needed for reconciliation, define how long they remain valid and what happens after retirement. Do not transform an opaque provider history into local memory without a new provenance and permission decision.

Migration should distinguish dormant records, active runs, pending checkpoints, in-flight effects, and records under hold or deletion. Dormant records may support batch conversion. Active work may require draining, dual-read validation, or explicit cancellation and restart. Pending approvals must retain the object and version that was reviewed. In-flight effects require reconciliation before ownership moves.

Test export and restore before the system depends on them. Verify counts, hashes where appropriate, referential integrity, access boundaries, deletion state, and replay of representative records. A nominal export feature does not prove operational portability until the restored local contracts behave correctly.

## Deprecation and exit

Every admitted adapter needs an exit plan. Record deprecation signals, notification channels, supported overlap, data export, replacement validation, credential revocation, endpoint shutdown, retained evidence, and ownership after retirement. A provider incident or commercial change can compress the available migration window; rehearsed inventory and replay reduce that pressure.

Retirement is complete only when new invocation is blocked, in-flight work is settled, required records remain accessible under policy, credentials are revoked, external effects remain reconcilable for their necessary lifetime, and obsolete copies are deleted. Preserve the edition evidence showing which adapter version produced historical runs.

## Compatibility disposition

Conclude with one of five bounded dispositions: compatible for local testing, compatible for synthetic evaluation, compatible for a restricted release cohort, incompatible pending a named control, or rejected. Do not use “protocol compatible” as a production-wide conclusion without the versions, mappings, tests, and authority scope that give the phrase meaning.
