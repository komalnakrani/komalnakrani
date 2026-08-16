# Chapter 03 Research Pack — Contract the Goal, Actions, and Authority

## Frozen job and evidence question

Convert “resolve the request” into a testable delegation contract before tools
are selected. The contract must distinguish proposal from execution and specify
completion, consequences, budgets, stop behavior and named authority. Output is
`AR-02`.

## Claims to carry

- `AGE-BCLM-005`: delegated tasks need observable completion, allowed actions,
  consequence classes, budgets, stop/escalation and authority.
- `AGE-BCLM-006`: confirmation/oversight are controls, not a transfer of formal
  authority or a guarantee of correct execution.

## Source findings

- `AGE-BSRC-001` provides agent/task/tool/guardrail and intervention framing.
- `AGE-BSRC-023` shows why excessive autonomy, permission and functionality
  expand risk.
- `AGE-BSRC-036` and `AGE-BSRC-037` support contextual risk mapping,
  measurement, ownership, documentation and lifecycle management.
- `AGE-BSRC-030` and `AGE-BSRC-043` document provider product confirmation and
  monitoring patterns, plus residual prompt-injection and mistake risks.
  They cannot establish FieldOps' authority design.

## Required contract schema research

`AR-02` needs: task ID; principal; beneficiary; goal; observable completion
predicate; initial facts and provenance; allowed reads/proposals/effects;
prohibited actions; consequence class; time/turn/tool/cost budgets; uncertainty
threshold; approval class; approver authority; approval binding; expiry;
escalation; cancellation; non-goals; evidence obligation; and final disposition.
Every effect maps to precondition -> proposal -> authority -> execution ->
verification. Domain and safety decisions must identify external owners.

## FieldOps Relay research use

The synthetic agent may read records and propose a plan. It may reserve one
synthetic slot or part only after a local approval bound to exact identifiers,
quantity, expiry and run. It may never contact a real person, control equipment,
make a safety diagnosis or write to an external system. “Resolve” fails the
contract test because it neither defines completion nor identifies who may
authorize scarce-stock reservation.

## Failure and validation plan

Mutate the proposal after approval, reuse an approval in another run, expire it,
remove the completion predicate, exceed the tool budget, and request a prohibited
safety determination. Contract validation must fail before tool execution.

## Phase 07 blueprint seed

Sequence: vague brief autopsy -> contract anatomy -> consequence/action classes
-> authority chain -> stop/escalation -> FieldOps contract build -> mutation
tests. Required table is exact contract schema; required visual is `F03.1`.
`F03.2` is also required if the blueprint cannot make proposal/approval/effect/
verification separation unambiguous in an accessible table.

## Gaps to keep visible

There is no universal consequence taxonomy or approval rule. The companion's
classes are synthetic. Real safety, labor, privacy, financial, legal or physical
effects require designated authorities and cannot inherit this chapter's local
thresholds.
