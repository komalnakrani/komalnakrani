# Chapter 09 Research Pack — Add Handoffs and Multiple Agents Only With Evidence

## Frozen job and evidence question

Compare router, specialist, worker, reviewer and remote-agent structures against
the frozen single-agent baseline. Define responsibility transfer, not message
passing. Complete `AR-07` topology experiment and handoff contract.

## Claims to carry

- `AGE-BCLM-017`: multi-agent systems add delegation, context partitioning,
  aggregation and coordination choices.
- `AGE-BCLM-018`: general multi-agent cost-effectiveness is disputed.

## Source findings

- `AGE-BSRC-013` is the main production case: parallel research agents reportedly
  improve a suitable workload and consume materially more tokens. Carry exact
  attribution and task context if any metric appears.
- `AGE-BSRC-042` documents Google ADK composition/delegation patterns only.
- `AGE-BSRC-003` documents SDK handoffs as a control-flow branch.
- `AGE-BSRC-031` supplies remote task/message/artifact concepts but not local
  business ownership.
- `AGE-BSRC-010` explains context isolation benefits and costs.

## Handoff contract

Required fields: source/target agent; task slice; ownership before/after;
authoritative state reference/version; evidence/artifacts; allowed capabilities;
delegated scope and expiry; budget; completion/return predicate; cancellation;
timeout; duplicate-work key; error/escalation; aggregation rule; and final
accountable owner. A message containing instructions is not sufficient.

## FieldOps Relay experiment

Compare one agent with a read-only manual specialist or router/specialist split.
Hold tasks/tools/policies constant. Inject two workers targeting the same scarce
part, stale handoff state, one cancelled branch, late result and conflicting
recommendations. Retain multi-agent only if a named task segment or control
improves without unacceptable cost/latency/failure.

## Phase 07 blueprint seed

Sequence: topology hypotheses -> handoff anatomy -> single versus multi test ->
coordination failures -> remote-agent boundary -> disposition. Required `F09.1`;
`F09.2` useful. Case `AGE-CASE-001` is bounded; case `AGE-CASE-010` belongs
mainly to Chapter 18 and should not turn this into a protocol chapter.

## Gaps to keep visible

No universal topology ranking exists. Parallelism can reduce elapsed time while
raising tokens, coordination and shared-effect risk. The reader must report the
full tradeoff, not only final quality.
