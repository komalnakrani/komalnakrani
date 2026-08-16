# Chapter 13 Research Pack — Evaluate Outcomes, Actions, State, and Efficiency

## Frozen job and evidence question

Build evidence for outcome, trajectory, state, effects, policy, recovery and
efficiency. Decide which claims are supported by each grader and segment.
Complete `AR-09` and its release gate.

## Claims to carry

- `AGE-BCLM-025`: final success can hide invalid or unnecessary actions,
  policy breaches and bad intermediate effects.
- `AGE-BCLM-026`: release evidence needs layered measures, segments,
  uncertainty and a versioned harness.

## Source findings

- `AGE-BSRC-019` makes final database state and policy important in tool/user
  interaction, while repeated trials expose inconsistency.
- `AGE-BSRC-020` recommends tasks, graders, transcript inspection and repeated
  trials; grader validity remains workload-specific.
- `AGE-BSRC-021` makes model/tool access, budget and harness part of result
  interpretation.
- `AGE-BSRC-018` supports environment breadth but historical rankings are not
  current evidence.
- `AGE-BSRC-040` offers a trace implementation, not a correctness oracle.

## Evaluation layers

1. Deterministic outcome/completion assertion.
2. Tool name/arguments/order and prohibited-action checks.
3. Authoritative state and effect-ledger diff.
4. Policy/authority/approval checks.
5. Recovery and final-disposition checks.
6. Efficiency: turns, calls, elapsed, simulated tokens/cost.
7. Calibrated rubric/model grader for genuinely qualitative output.
8. Blinded human review of a sampled consequence-stratified set.

Every report contains trials, seeds, versions, denominators, intervals or
uncertainty statement, segment failures and invalid/excluded records.

## FieldOps Relay tests

Construct a run with a correct final plan but an unauthorized read and stale
reservation; it must fail despite answer quality. Construct a safe refusal that
does not complete the task; outcome and policy should be reported separately.
Calibrate qualitative plan grader against labeled fixtures and report
disagreement rather than forcing consensus.

## Phase 07 blueprint seed

Sequence: claims-to-measures -> trajectory schema -> deterministic checks ->
grader calibration -> segments/uncertainty -> release gate -> diagnostic review.
Required `F13.1` and `F13.2`; exact coverage matrix is an accessible table.

## Gaps to keep visible

There is no universal scalar agent score. Trajectory grading can punish valid
alternative plans; model graders can be biased or unstable. Consequence-specific
authority determines acceptable thresholds.
