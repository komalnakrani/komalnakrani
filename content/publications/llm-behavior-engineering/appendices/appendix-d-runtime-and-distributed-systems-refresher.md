# Appendix D - Runtime and Distributed-Systems Refresher

Volume 1 does not teach model serving or distributed-systems implementation. It does require enough runtime judgment to specify behavior-facing dependencies, diagnose layers, and avoid promises the LLM Engineer cannot verify. This appendix refreshes those boundaries.

## End-to-end behavior crosses services

A user-visible language path can include interface, identity, application state, source systems, retrieval, model access, deterministic validation, human review, telemetry, and effect systems. Each hop has its own timeout, retry, capacity, consistency, and ownership behavior.

Record the end-to-end budget and each dependency allocation. A fast model call does not prove a fast product path. A healthy API does not prove correct evidence or bounded behavior. Tail latency, queue time, cold paths, and human review may dominate the consequence.

## Timeouts and unknown outcomes

A timeout means the caller did not receive a result within its budget. It does not always prove that the downstream operation failed. For read-only model generation, a retry may be technically safe but can amplify cost and capacity. For an effectful operation, blind retry can duplicate state.

Keep the language proposal path separate from external effects. If an effect is ever introduced, require idempotency identity, authorization, confirmation, durable status, and reconciliation. The LLM Engineer specifies behavior and evidence needs; platform and product owners implement the reliable effect path.

## Retry, queue, and capacity effects

Retries increase load when a dependency is already degraded. Batching can improve throughput while increasing wait time. Caches can reduce latency while serving stale, cross-tenant, or configuration-incompatible data if identity is incomplete.

For every behavior-facing optimization, record:

- cache key and invalidation identity;
- tenant, permission, model, template, context, and schema separation;
- timeout and retry ownership;
- maximum attempts and total deadline;
- queue and overload behavior;
- fallback or abstention state;
- signal, owner, and stop trigger.

Do not hide capacity failure by silently reducing evidence, changing a model, or truncating context. A degraded mode is a named behavior version with explicit limits.

## Version and compatibility identity

A model-system identity can include provider/model revision, tokenizer, message template, adapter, retrieval index, prompt, schema, validator, evaluator, runtime, and policy. A hash proves byte identity for the named object, not semantic compatibility across objects.

Provider migrations should replay the frozen behavior cases and record changed limits. Context windows, structured-output behavior, stop handling, token accounting, safety layers, latency, pricing, quotas, and deprecation schedules can change. A provider-neutral interface localizes integration; it does not make providers behaviorally interchangeable.

## State and consistency

Language generation is often treated as stateless, but the surrounding system may include conversation history, retrieved revisions, user preferences, caches, feedback, release cohorts, and human decisions. Record which state is authoritative, its version, and what stale or conflicting reads must do.

Do not let a generated summary become the sole source of truth for prior evidence. Preserve stable identifiers and resolve current state through deterministic systems. When a source changes during a long workflow, either bind the reviewed revision or reopen the decision.

## Observation without raw-content default

Useful signals can often record version, behavior state, segment, reason code, duration bucket, evidence count, validation stage, and disposition without retaining raw prompts, retrieved text, or model output. Every signal needs a purpose, sensitivity classification, owner, decision, threshold, retention rule, and blind spot.

Raw-content access may occasionally be justified through a separate authorized workflow. It is not a default debugging convenience. Redaction after broad collection does not erase the original exposure.

## Layered diagnosis

When behavior regresses, test competing layers:

1. interface or task input changed;
2. source corpus, permission, or freshness changed;
3. query, candidate, filter, rank, or assembly changed;
4. model, tokenizer, template, decoding, or context changed;
5. schema, validator, citation, or evaluator changed;
6. runtime, queue, cache, timeout, or dependency changed;
7. human workflow, product policy, or authority changed.

Preserve disconfirmed hypotheses. "The model caused it" is not a diagnosis until evidence distinguishes it from adjacent changes.

## Ownership boundary

The LLM Engineer owns behavior-facing requirements, configuration identity, evaluation evidence, migration replay, and recommended disposition. Platform/MLOps owns reliable shared runtime, deployment mechanisms, capacity, scheduling, and recovery implementation. Security, privacy, safety, legal, product, domain, and release authorities retain their decisions.

A complete handoff names the required service levels, behavior under dependency failure, signals, evidence format, owner, escalation, rollback contract, and unresolved limit. It does not claim the LLM Engineer implemented or approved the external system.
