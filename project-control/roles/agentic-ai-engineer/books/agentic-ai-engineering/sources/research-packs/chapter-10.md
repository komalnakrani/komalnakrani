# Chapter 10 Research Pack — Make Execution Durable and Effects Recoverable

## Frozen job and evidence question

Survive process crashes, timeouts, duplicate events, deployments and partial
effects. Decide whether to retry, resume, reconcile, compensate, escalate or
stop. Output starts `AR-08`.

## Claims to carry

- `AGE-BCLM-019`: timeout after an effect is ambiguous; blind retry can
  duplicate non-idempotent action.
- `AGE-BCLM-020`: durable execution needs checkpoints plus ownership,
  idempotency/replay, cancellation and compatibility semantics.

## Source findings

- `AGE-BSRC-014` supplies the core ambiguous-effect/idempotency pattern and its
  different-intent/late-arrival limits.
- `AGE-BSRC-015` requires bounded retries, backoff, jitter and coordination
  across layers; retry only appropriate failures.
- `AGE-BSRC-016` is one vendor durable-execution implementation, not the book's
  default or a guarantee for external effects.
- `AGE-BSRC-003` supports resumable serialized run state.
- `AGE-BSRC-041` is explicitly experimental MCP task semantics;
  `AGE-BSRC-033` is a 2026 release candidate. Both require status labels.
- `AGE-BSRC-031` supplies remote task status/cancellation concepts.

## Recovery matrix

Classify: validation failure; transient read; throttling; timeout-before-send;
ambiguous effect; known completed effect; non-compensatable effect; lease loss;
stale checkpoint; incompatible version; cancelled task. Record retryability,
maximum attempts, backoff, idempotency key, ownership/lease, reconciliation read,
compensation, human escalation and terminal disposition.

## FieldOps Relay fault lab

Crash before reservation, after remote synthetic commit/before local record,
after local record/before response, during approval wait and during deployment.
Send duplicate event and late callback. Acceptance: one accountable owner, one
correct effect ledger entry, no blind duplicate, and a final disposition even
when compensation fails.

## Phase 07 blueprint seed

Sequence: failure taxonomy -> checkpoint/effect ledger -> retry and idempotency
-> ambiguous reconciliation -> lease/cancel -> deployment compatibility -> lab.
Required `F10.1` and `F10.2`. Use `AGE-CASE-005` as primary engineering case;
Temporal is an optional concrete mapping, never the canonical API.

## Gaps to keep visible

Exactly-once external effect is not assumed. “Durable” does not mean every
side effect is rolled back or every workflow version is replay compatible.
