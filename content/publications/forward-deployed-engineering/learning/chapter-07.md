# Chapter 07 Learning Pack - Make Interfaces and Data Explicit

> NOT FOR LIVE CERTIFICATION BANK

## Conceptual questions

1. Why is a schema necessary but insufficient for an interface contract?
2. What does proposition ownership add to a field definition?
3. Distinguish missing, null, unknown, not applicable, redacted, invalid, stale, and conflicting.
4. Why does HTTP idempotency not guarantee retry-safe business effects?
5. Which fields define an intent contract?
6. Why is exactly-once delivery not the same as exactly-once effect?
7. What belongs in a reconciliation plan?
8. How can a type-compatible change be semantically breaking?

## Scenario questions

### Timeout after write

Model acceptance, commit, response, unknown state, status, and reconciliation. Define same-intent replay and conflict behavior.

### Stale inventory

Define the observed/effective/received times, decision-specific freshness, user state, fallback, quality owner, and support action.

### Alias becomes candidates

An identifier once assumed unique now resolves to multiple active records. Update schema/semantics, consumer behavior, workflow state, compatibility, and migration.

### Event arrives late

An older availability observation arrives after a newer one. Define ordering scope, event time, correction, active-case effect, and audit behavior.

## Applied exercise and lab

1. Run `npm run test:companion`.
2. Add one semantic validation rule and test a structurally valid violation.
3. Add a late-arrival or expired-intent behavior with a state/test defined first.
4. Write one complete interface record and data dictionary.
5. Create error, retry, quality, lineage, reconciliation, and version plans.

Pass only when no client must guess what a timeout, duplicate, missing value, stale record, or version means.

## Optional practice MCQs

### 1. Which statement is correct?

A. JSON Schema proves business validity.  
B. A valid schema can still violate region, freshness, authority, or workflow semantics.  
C. OpenAPI proves runtime availability.  
D. AsyncAPI guarantees exactly-once effects.

Answer: **B**.

### 2. A timed-out write may have committed. What is the best next step?

A. Blind retry with a new ID.  
B. Treat it as failed.  
C. Preserve unknown state and use same-intent/status/reconciliation behavior.  
D. Hide the uncertainty from the user.

Answer: **C**.

### 3. SemVer is meaningful only when:

A. every release uses three numbers;  
B. a public API/compatibility promise is declared and semantic changes are governed;  
C. schemas never change;  
D. deployment is automatic.

Answer: **B**.

## Advanced challenge - contract review

Review a synthetic API that has a correct schema but no proposition owner, freshness, timeout completion, rate/backpressure, authorization context, reconciliation, or migration plan. Produce a blocking review with exact evidence required and a reduced-scope alternative.
