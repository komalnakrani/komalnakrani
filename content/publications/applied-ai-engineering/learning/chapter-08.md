# Learning Pack 08 - Build an Inspectable Vertical Slice

> NOT FOR LIVE CERTIFICATION BANK. These formative prompts are publication learning material only.

## Recall and explain

1. Distinguish a vertical slice from a provider demo, notebook, horizontal service, and production launch.
2. Why is a deterministic provider test double the default reference?
3. Separate envelope validation from semantic/state validation.
4. Why must partial output have an explicit product disposition?
5. How do timeout, retry, idempotency, and outcome-unknown effects relate?
6. Why is the interface part of the AI system?

## Scenario decisions

### Valid JSON, invalid candidate

The adapter returns a globally valid catalog ID that is absent from the current authorized set. Specify state, result, trace, fallback, and effect assertions.

### Optional explanation timeout

Structured evidence is already validated. Decide whether the product degrades, abstains, or fails. Name the contract clause and evidence needed for the choice.

### Correction race

The user corrects inches to millimeters while the old request is running. Design request generations and prove the old result cannot overwrite current state.

## Applied exercise

Implement a local slice crossing identity, query validation, data/context, learned/test-double adapter, deterministic policy, presentation result, trace, and effect boundary. Run success, abstention, invalid output, timeout, and authorization failure.

Assert terminal state, reason, result presence/absence, fallback, trace order, and zero effects for each scenario.

## Optional formative MCQs

1. What should happen to a malformed partial provider result?
   - A. Display fields that parsed
   - B. Let the interface decide
   - C. Follow the declared invalid/partial-output disposition before any result or effect
   - D. Retry at every layer
   - **Answer: C.**

2. What makes a tool proposal an authorized effect?
   - A. Function-call syntax
   - B. Model confidence
   - C. Separate validation, permission, current state, confirmation, idempotency, and authority
   - D. A trace ID
   - **Answer: C.**

3. What does a passing local slice prove?
   - A. Production readiness
   - B. The declared fixture mechanics under recorded versions
   - C. Real-user usefulness
   - D. Domain safety
   - **Answer: B.**

## Advanced challenge

Add a semantically invalid but schema-valid adapter scenario and a stale late response. Preserve the same stable interface and prove neither can enter presentation or the effect ledger.

## Completion evidence

Pass when one command runs without secrets/network, all five outcomes are deterministic, invalid or partial output cannot cause a result/effect, structured fallback is inspectable, and limitations remain adjacent to the evidence.
