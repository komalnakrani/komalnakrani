# Chapter 05 Research Pack — Treat Tools as Capabilities, Not Functions

## Frozen job and evidence question

Design a capability surface that is legible to the model and enforceable by
software. Decide whether each tool is narrow and predictable enough to expose.
Output is `AR-04` capability catalog and contract suite.

## Claims to carry

- `AGE-BCLM-009`: name, description, schema and returned context affect agent
  tool use.
- `AGE-BCLM-010`: effectful capabilities require intent, validation, errors,
  idempotency/reconciliation and tests beyond a function signature.

## Source findings

- `AGE-BSRC-004` defines MCP tool discovery/call, JSON Schemas, structured
  content, errors and annotations; it explicitly warns that annotations are
  untrusted unless the server is trusted.
- `AGE-BSRC-005` treats tools as the contract between deterministic software and
  a nondeterministic agent and reports task-based iteration on descriptions,
  namespacing and context efficiency.
- `AGE-BSRC-014` shows why ambiguous effects need request identity and semantic
  duplicate handling.
- `AGE-BSRC-024` adds minimum scopes, sandboxing and audit/security constraints.
- `AGE-BSRC-034` is a bounded data-agent example of curated tool/context access.

## Capability catalog schema

Required fields: stable ID/version; narrow intent; consequence/effect class;
input/output JSON Schema; preconditions; principal/scope; freshness; timeout;
deterministic validation; error taxonomy; retryability; idempotency key;
deduplication window; reconciliation read; compensation; audit/effect record;
redaction; test double; injected failures; and deprecation policy. Separate
`read_equipment`, `search_manual`, `check_inventory`, `propose_reservation`, and
`reserve_part`; reject `run_sql`, shell, or generic `call_api`.

## FieldOps Relay failure study

The reservation service completes but the response is lost (`AGE-CASE-005`).
The harness must not infer failure. It queries by idempotency key, discovers the
effect, records it once and proceeds to verification. A repeated key with
different part/quantity is rejected as different intent. Compensation is a new
audited release action, not a claim that the original transaction disappeared.

## Evaluation plan

Evaluate correct selection, argument validity, minimum scope, error handling,
duplicate suppression, ambiguous-outcome reconciliation, compensation limits,
context/token burden and whether model-facing descriptions match enforcement.

## Phase 07 blueprint seed

Sequence: function versus capability -> effect classes -> contract schema ->
agent-legibility experiment -> ambiguous-effect lab -> capability review. Use
required `F05.1` and `F05.2`; exact fields belong in accessible tables/code, not
inside generated art. No provider tool API becomes the canonical interface.

## Gaps to keep visible

Schemas cannot express all business semantics. Idempotency depends on effect
intent and service support; compensation can fail or be impossible. Specialist
security/domain review remains required for real capabilities.
