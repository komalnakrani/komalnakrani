# Learning Pack 03 - Write the Behavior Contract

> NOT FOR LIVE CERTIFICATION BANK. These formative prompts are publication learning material only.

## Recall and explain

1. Distinguish a behavior contract from a prompt, provider policy, output schema, and release approval.
2. Define respond, clarify, abstain, escalate, degraded, and prohibited states.
3. Why can raw confidence be an invalid user-facing probability?
4. What five questions turn human review into a designed control?
5. Why must every clause include a release implication and change trigger?

## Scenario decisions

### Valid JSON, false meaning

A model returns `{ "compatible": true }` in the required schema. One critical measurement is absent. Identify which validations passed and failed, then write a clause that prevents the product failure.

### Review at impossible scale

A reviewer receives 2,000 escalations per hour, has no domain qualification, sees no evidence, and cannot prevent the action. Explain why "human in the loop" is false assurance. Design a credible alternative state.

### High abstention

A threshold reduces error but excludes a particular user segment from nearly all results. Build the coverage-risk and burden analysis. Consider narrowing the task, improving evidence, changing interaction, or stopping rather than simply lowering the threshold.

## Applied exercise

Write fifteen behavior clauses for one task. Include ordinary variation, critical segments, missing/conflicting evidence, clarification, abstention, escalation, two degraded modes, two prohibited effects, user correction, and change replay. Each clause must contain:

- trigger and segment;
- required and unacceptable behavior;
- evidence prerequisite;
- user-visible state;
- evaluation examples and counterexamples;
- failure disposition;
- reviewer and authority;
- version/change trigger.

Red-team the contract with a system that follows syntax while violating intent. Revise until the failure is observable.

## Optional formative MCQs

1. Which claim follows from schema-constrained output?
   - A. Every value is true
   - B. The effect is authorized
   - C. The structure conforms to the schema under stated conditions
   - D. The product is safe
   - **Answer: C.**

2. What should happen when no competent authority can review before consequence?
   - A. Let any employee approve
   - B. Guess
   - C. Enter an explicit abstain, degrade, narrow, or block state
   - D. Hide the queue
   - **Answer: C.**

3. Who decides whether residual risk is acceptable?
   - A. The implementation owner by default
   - B. The named organizational authority
   - C. The model provider
   - D. The JSON validator
   - **Answer: B.**

## Advanced challenge

Represent your contract in a machine-readable format and write structural tests for unique IDs, required authority, all six states, prohibited effects, and replay triggers. Then list every semantic claim those tests cannot prove.

## Completion evidence

Pass when uncertainty changes system state, the ordinary fallback survives, every human role has competence and decision rights, prohibited effects are enforceable, and a provider upgrade cannot bypass semantic replay.
