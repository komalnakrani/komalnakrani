# Chapter 09 Learning Pack - Put AI Inside a Bounded Workflow

> NOT FOR LIVE CERTIFICATION BANK

## Conceptual questions

1. Why must the workflow be able to reject AI?
2. Explain the mechanism ladder and added obligations at each step.
3. What belongs in an AI decision record?
4. Distinguish task, case/trial, grader, trace/outcome, harness, suite, capability, and regression.
5. Why can aggregate quality conceal unacceptable behavior?
6. How is human review designed/evaluated as a control?
7. What should remain outside model instructions?
8. Why is system-bundle versioning necessary?

## Scenario questions

- A deterministic rule solves eligibility; a model is proposed anyway. Compare value/control burden.
- Aggregate pass is high; safety-critical segment fails. Write release disposition.
- Reviewer approves rapidly without inspecting evidence. Diagnose control failure.
- Model times out after expensive retrieval. Define visible fallback, budget, signal, support.
- Provider retires a model version. Define evaluation, rollout, and rollback constraints.

## Applied exercise and lab

1. Run `npm run test:companion`.
2. Add one abstention and one prohibited-action case.
3. Build AI decision, task/error taxonomy, dataset, grader, control ladder, human review, tool boundary, budgets, bundle version, and stop criteria.
4. Report common and critical segments separately.

Pass only when deterministic policy/authorization is outside the model and no aggregate hides critical failure.

## Optional practice MCQs

1. The lowest suitable mechanism is preferred because: **it meets the outcome with less unnecessary uncertainty/control burden**, not because AI is always avoided.
2. Human review guarantees safety: **false**; qualification, evidence, workload, authority, UI, evaluation, and fallback matter.
3. A model grader is automatically objective: **false**; calibrate against qualified evidence and inspect shared failure modes.

## Advanced challenge

Design a bounded multi-step agent variant for a non-safety task. Specify tools/permissions, steps/budgets, checkpoints, intent/reconciliation, attack surface, evaluation, stop/kill, recovery, and why the added autonomy is justified over a workflow.
