# Chapter 19 Research Pack — Replay Change Across Model, Tool, Policy, and Harness

## Frozen job and evidence question

Treat changes to model, tools, policy, protocol, state schema, context assembly
and evaluation harness as possible changes to the system claim. Decide
compatibility, migration, rollout, rollback and retirement. Complete `AR-13`.

## Claims to carry

- `AGE-BCLM-037`: behavior can change across the whole version set even when
  final success is stable.
- `AGE-BCLM-038`: replay, state compatibility and bounded rollout are required
  evidence; version-number comparison is insufficient.

## Source findings

- `AGE-BSRC-019`/`AGE-BSRC-020` support repeated trials and trajectory/state
  examination.
- `AGE-BSRC-021` makes harness, access and budgets part of evaluation validity.
- `AGE-BSRC-025` shows observability conventions can themselves evolve.
- `AGE-BSRC-028` supports canary/control comparisons.
- `AGE-BSRC-031`/`AGE-BSRC-039` require protocol version/schema awareness.
- `AGE-BSRC-033` and `AGE-BSRC-041` show a concrete experimental-to-RC evolution;
  neither is final stable evidence for future behavior.
- `AGE-BSRC-035` supports progress/checkpoint continuity but not arbitrary state
  migration.

## Component inventory and matrix

Record model/adapter, system instruction, tool schemas/implementations, policy,
context assembler, memory rules, runtime, protocol edition, state/event schemas,
task set, graders, budgets and telemetry conventions. For each change define
expected delta, compatibility assumption, migrated states, replay set,
trajectory/effect comparison, acceptance, cohort, rollback, archive and expiry
of the old claim.

## FieldOps Relay change lab

Replace the deterministic action policy with one that improves completion but
makes extra reads and ignores more stop requests. Change inventory schema and
remote capability metadata. Replay held-out tasks and in-flight checkpoints;
report outcome, action, policy, effect, cost and recovery deltas separately.

## Phase 07 blueprint seed

Sequence: behavior version set -> inventory -> replay design -> trajectory diff
-> state migration -> cohort/rollback -> retirement. Required `F19.1` and
`F19.2`. No current provider model comparison is needed; use deterministic
policies so the core lesson remains stable.

## Gaps to keep visible

Replay cannot cover future inputs or all production interactions. Causal
attribution can be confounded when components change together; require isolated
experiments where feasible and state uncertainty otherwise.
