# Chapter 15 Research Pack — Trace Runs Without Turning Logs Into Surveillance

## Frozen job and evidence question

Link model, tool, state, agent, approval and effect events so a responsible
transition can be diagnosed while minimizing sensitive content. Output starts
`AR-11` trace schema, explorer and retention/redaction policy.

## Claims to carry

- `AGE-BCLM-029`: agent trace schemas exist, but semantic stability and sensitive
  data require explicit review.
- `AGE-BCLM-030`: causal event links—not full payload retention—are the core
  diagnostic requirement.

## Source findings

- `AGE-BSRC-025` defines evolving OpenTelemetry GenAI attributes; stability is
  per convention/attribute, so publication must pin a version.
- `AGE-BSRC-040` documents one SDK's run/agent/model/tool/guardrail/handoff spans
  and sensitive-data controls.
- `AGE-BSRC-026` is a bounded AWS implementation of OTel-compatible agent
  observability.
- `AGE-BSRC-027` distinguishes symptoms from causes and emphasizes actionable
  signals.
- `AGE-BSRC-029` links monitoring to human review/response in one real system.

## Minimal trace design

Safe default fields: trace/run/attempt/event/span IDs; parent/correlation IDs;
tenant pseudonym/reference; component and version; event/action/tool IDs;
state transition; validation/policy result; approval/effect reference;
latency/counters; error class; disposition; and redaction marker. Prompts,
responses, credentials, tool payloads and user records are omitted or stored as
access-controlled evidence references with independent retention.

## FieldOps Relay diagnostics

Given “wrong reservation,” walk backward effect -> capability invocation ->
approval -> state snapshot -> observation -> model proposal. Inject missing
correlation ID, redaction failure, cross-tenant query, full prompt collection
and a trace with no effect ID. The run explorer must surface gaps, not fabricate
causality.

## Phase 07 blueprint seed

Sequence: diagnostic question -> trace graph -> semantic conventions -> minimal
event schema -> access/redaction/retention -> run investigation. Required
`F15.1`; `F15.2` useful. Do not include real credentials, chain-of-thought or
private production traces.

## Gaps to keep visible

Minimization can reduce forensic detail; extensive logging can create privacy
and security risk. Retention and employee/user monitoring rules require privacy,
security, legal and organizational authority.
