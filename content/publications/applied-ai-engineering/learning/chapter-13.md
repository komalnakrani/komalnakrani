# Learning Pack 13 - Design for Probabilistic Failure

> NOT FOR LIVE CERTIFICATION BANK. These formative prompts are publication learning material only.

## Recall and explain

1. Distinguish initiating layer, symptom, propagation, containment, correction, and recovery.
2. Why can a retry be unsafe even for a read-only learned call?
3. What additional state does an effect timeout require?
4. When should a circuit open, probe, and close?
5. Why is a fallback an independently evidenced mechanism?
6. What does schema-constrained output fail to guarantee?

## Scenario decisions

### Partial retrieval

Design detection, one bounded retry decision, reduced capability, stop condition, and recovery evidence without generating missing support.

### Duplicate effect

Specify the operation key, ledger states, reconciliation, user-visible state, and forbidden transitions.

### Correlated fallback

Primary and alternate providers share data and network dependencies. Decide whether degradation, abstention, review, or stop is supported.

## Applied exercise

Complete the `PF-09` failure register for five paths. Each record must include user consequence, signal, owner, retry safety, fallback, stop condition, authoritative state, recovery, and test evidence.

## Optional formative MCQs

1. Does `200 OK` prove semantic success? No.
2. Can elapsed time alone close a circuit? No; policy requires a bounded probe.
3. Should unknown effect outcome retry immediately? No; reconcile first.

## Advanced challenge

Inject failure into the fallback itself and demonstrate a bounded transition to abstain, review, or stop.

## Completion evidence

Pass when five injected paths contain consequence, preserve state, prohibit unsafe repetition, and replay recovery without broad production claims.
