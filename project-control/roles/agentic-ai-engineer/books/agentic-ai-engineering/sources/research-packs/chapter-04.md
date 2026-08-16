# Chapter 04 Research Pack — Make the Loop Inspectable

## Frozen job and evidence question

Specify the observe/decide/validate/act/verify/stop loop as explicit run states,
events and enforced limits. Decide what the model selects and what deterministic
software enforces. Output is `AR-03` harness state machine and event contract.

## Claims to carry

- `AGE-BCLM-007`: explicit loops can branch on final output, tool calls and
  handoffs and can be bounded by software.
- `AGE-BCLM-008`: model-declared success is not the completion predicate.

## Source findings

- `AGE-BSRC-003` documents an SDK run loop with output, handoff and tool-call
  branches, maximum turns, configuration and resumable state.
- `AGE-BSRC-040` supplies one trace vocabulary for runs, agents, models, tools,
  guardrails and handoffs.
- `AGE-BSRC-019` and `AGE-BSRC-020` support checking state/trajectory rather
  than accepting the final response alone.
- `AGE-BSRC-035` shows the value of durable progress artifacts across context
  windows but is a coding-agent case, not a distributed transaction model.

## Provider-neutral run model

Research target states: `CREATED`, `OBSERVING`, `DECIDING`, `VALIDATING`,
`EXECUTING`, `VERIFYING`, `WAITING_HUMAN`, `WAITING_EXTERNAL`, `COMPLETED`,
`FAILED`, `CANCELLED`, `ESCALATED`, `RECOVERING`. Every transition records run,
attempt, actor, version set, previous/new state, observation reference, proposed
action, validation outcome, effect reference, budget snapshot, timestamp and
reason. Invalid transitions are rejected by code. The model emits a proposal;
the harness validates schema, authority, budget and stop state.

## FieldOps Relay research use

Build a deterministic model double with policies: inspect issue, read manual,
check availability, propose reservation, await approval, execute, verify. Fault
policies loop on a missing tool, claim success early, issue invalid arguments,
ignore cancellation and repeat an effect. `AR-03` must demonstrate that each is
bounded and leaves a final disposition.

## Evaluation plan

Assertions cover transition legality, monotonic counters, stable run identity,
cancel-before-effect, no action while waiting, completion predicate, final-state
uniqueness and replay order. Traces are evidence pointers, not the source of
truth for effects.

## Phase 07 blueprint seed

Sequence: run as engineered object -> state machine -> model/code boundary ->
event contract -> stop/cancel/budget rules -> deterministic fault lab. Required
visual `F04.1`; `F04.2` useful only if the blueprint uses it to explain run
identity/budgets. Code examples must stay provider-neutral.

## Gaps to keep visible

No finite state machine eliminates nondeterminism or proves correctness. Model
providers expose different output/tool/handoff semantics; adapters must map
them into the local contract and preserve raw evidence by version.
