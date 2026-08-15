# Chapter 14 Learning Pack - Engineer Release and Recovery

> NOT FOR LIVE CERTIFICATION BANK

## Conceptual questions

1. What belongs in a version-bound release record?
2. Why can a pipeline deploy a bad decision consistently?
3. What makes progressive exposure credible?
4. Define a compatibility window and destructive point of no return.
5. Compare rollback, roll-forward, isolation, restore, and stop.
6. Why is a backup not restore evidence?
7. What makes break-glass access real?
8. What belongs in a recovery rehearsal record?

## Scenario questions

- A migration exceeds the connection budget before starting. Define the gate/action.
- Half the records are v2 and externally visible. Evaluate rollback versus roll-forward.
- The canary beats control but violates an absolute latency guardrail. Decide.
- A backup exists but has never restored with current keys/schema. Classify evidence.
- Recovery access depends on the failed identity system. Redesign/rehearse.

## Applied exercise and lab

1. Run `npm run test:companion` and `npm run rehearse:companion`.
2. Validate a release record with all versions/evidence/cohort/recovery.
3. Trigger capacity stop and partial divergent migration.
4. Use the decision tree to select recovery and reject alternatives.
5. Record local observed time with an explicit non-production limitation.

Pass only when destructive/external state can reject rollback, restore evidence is executed, and recovered user-visible state is verified.

## Optional practice MCQs

1. Semantic Versioning solves data migration compatibility: **false**.
2. A canary that beats control always expands: **false**; absolute criteria/representativeness matter.
3. Backup creation proves recovery readiness: **false**.

## Advanced challenge

Design an expand/contract migration with old/new readers/writers, backfill, capacity, partial failure, intent/reconciliation, feature coordination, rollback limit, roll-forward, restore, and an executed rehearsal.
