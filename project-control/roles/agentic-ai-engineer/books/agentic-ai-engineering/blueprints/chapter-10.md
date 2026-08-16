# Chapter 10 Blueprint — Make Execution Durable and Effects Recoverable

## Identity and target

- Part III; primary `AGE-K07`, secondary `AGE-K02`, `AGE-K03`, `AGE-K05`, `AGE-K06`, `AGE-K11`
- Dossier: start `AR-08 v0.1.0`
- Purpose/decision: classify crash, timeout, duplicate, lease, version, and
  partial-effect failures as retry, resume, reconcile, compensate, escalate, or stop.
- Expected depth: advanced distributed execution; 10,000–12,000 words

## Objectives, prerequisites, and bridge

Reader can design checkpoints, leases, bounded retries, idempotency keys,
deduplication, reconciliation, compensation, cancellation, and terminal
dispositions. Prerequisites: `AR-03`–`07`, distributed systems basics.

1. Chapter 09 selected a topology with explicit task ownership.
2. That ownership must survive process loss, deployment, duplicate events, and ambiguous effects.
3. Persisting a prompt transcript is not durable execution.
4. This chapter couples run checkpoints with an external effect ledger and recovery decisions.
5. Chapter 11 receives `AR-08 v0.1.0` and adds durable human authority pauses.

## Scope and sequence

Own agent task/effect recovery semantics. Platform/SRE own durable runtime
primitives; external service owners define actual idempotency/compensation.

| Section | Purpose | Evidence/artifact | Words |
| --- | --- | --- | ---: |
| Failure taxonomy | Separate known, transient, terminal, ambiguous | `AGE-BCLM-019`; `AGE-BSRC-014`, `015`; recovery matrix | 1,400–1,700 |
| Checkpoint and ownership | Persist state/version/evidence plus lease | `AGE-BCLM-020`; `AGE-BSRC-003`, `016` | checkpoint schema | 1,500–1,800 |
| Effect ledger/idempotency | Prevent blind duplicate; different-intent check | `AGE-BCLM-019`; `AGE-CASE-005` | ledger contract | 1,700–2,000 |
| Retry/resume/compensate | Route failures and bound storms | both claims; `AGE-BSRC-015` | decision table | 1,400–1,700 |
| Task/protocol examples | Bound MCP experimental Tasks, RC, A2A status | `AGE-BCLM-020`; `AGE-BSRC-031`, `033`, `041`; `AGE-CASE-010` | adapter notes | 1,100–1,300 |
| Crash laboratory | Six crash points and final disposition | both claims; `AGE-CASE-008`, `012` | `AR-08 v0.1.0` | 1,800–2,100 |

## Procedure, failures, currentness

Classify failure -> verify owner/lease -> inspect last durable checkpoint -> query
effect by idempotency key -> decide resume/retry/reconcile/compensate/escalate ->
record new effect -> reach terminal disposition. Temporal is one current runtime
example; MCP 2025 Tasks is experimental and July 2026 work is RC. Durable:
ambiguous external effects require reconciliation. Volatile: runtime APIs and
protocol task lifecycle.

Inject crash before effect, after commit/before record, after record/before
response, while waiting, during deployment, plus duplicate/late event. Mistakes:
exactly-once claim, retry-all, compensation-as-rollback, checkpoint without
version/owner, layered retries. Trade-off: stronger durability costs state,
coordination, retention, and migration burden.

## Exercise, assessment, figures

- Exercise: complete recovery matrix and expected ledger for eight traces.
  Rubric: classification 5, one owner 4, effect correctness 6, disposition 5.
- Required `F10.1`: checkpoint bridge; labels `Checkpoint`, `Crash`, `Resume`,
  `Deduplicate`, `Compensate`. Required `F10.2`: roundabout labels `Retry`,
  `Resume`, `Reconcile`, `Compensate`, `Stop`. Alt explains routing criteria.


Figure evidence role: each image is a conceptual or causal scaffold, never technical or empirical proof. Accessibility: caption, alt text, and long description must carry every essential relationship without relying on color.

## Phase 08 handoff

Use claims `019–020`, sources `003`, `014–016`, `031`, `033`, `041`, cases
`005`, `008`, `010`, `012`. Never claim exactly once. End at `AR-08 v0.1.0`
with pause/resume compatibility and authority hooks for Chapter 11.

## Exact evidence manifest

- Claims: `AGE-BCLM-019`, `AGE-BCLM-020`
- Sources: `AGE-BSRC-003`, `AGE-BSRC-014`, `AGE-BSRC-015`, `AGE-BSRC-016`,
  `AGE-BSRC-031`, `AGE-BSRC-033`, `AGE-BSRC-041`
- Cases: `AGE-CASE-005`, `AGE-CASE-008`, `AGE-CASE-010`, `AGE-CASE-012`
