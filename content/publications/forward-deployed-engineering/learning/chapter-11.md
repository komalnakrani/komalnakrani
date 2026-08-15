# Chapter 11 Learning Pack - Build a Production Vertical Slice

> NOT FOR LIVE CERTIFICATION BANK

## Conceptual questions

1. Why is a vertical slice small in breadth but complete in consequence?
2. Apply the vertical-slice coverage test to a customer workflow.
3. Distinguish `blocked`, `fallback`, `reconcile`, and `ready-for-review`.
4. What does a deterministic dependency double prove and fail to prove?
5. Why must model, policy, authorization, and formal authority remain separate?
6. What makes a feature control an owned lifecycle artifact?
7. How does the review lens connect contract, failure, security, observability, operation, tests, and debt?
8. Why can a clean local path be reproducible without being production evidence?

## Scenario questions

- Approved evidence is found, then inventory rejects. Define the state and prohibited continuation.
- An adapter accepts a request but returns no final response. Compare retry and reconciliation.
- Two equipment candidates are active. Show which dependencies must not be called.
- A feature is disabled but the system still prefetches evidence. Identify the boundary failure.
- Local tests pass against a double. List the real-integration evidence still required.

## Applied exercise and lab

1. Run `npm run test:companion` and `npm run demo:companion`.
2. Trace the synthetic intent across environment, equipment, evidence, inventory, model, approval, policy, audit, and metric.
3. Add one evidence-dependency failure and one expired-approval case.
4. Record what each case proves and does not prove.
5. Add one debt record with consequence, owner, exit trigger, and evidence requirement.

Pass only when unknown completion requires reconciliation, ambiguous equipment stops before retrieval, and no double is described as production integration proof.

## Optional practice MCQs

1. A vertical slice is complete when the happy path renders: **false**; representative controls/failures/operation/evidence must cross the path.
2. A feature flag is automatically a safety control: **false**; scope, default, owner, tests, signals, expiry, and removal matter.
3. Automated release makes review unnecessary: **false**; consistency does not replace evidence, review, or recovery.

## Advanced challenge

Replace the synthetic inventory double with a local contract-test server that can complete, reject, delay, duplicate, or lose a response. Preserve semantic intent, cancellation, late-arrival, reconciliation, audit, and secret-free setup.
