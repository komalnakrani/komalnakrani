# Chapter 13 Learning Pack - Make the System Observable and Operable

> NOT FOR LIVE CERTIFICATION BANK

## Conceptual questions

1. Distinguish observability from operability.
2. Build a promise-to-failure-to-signal record.
3. Why are service, workflow, data, AI, security, support, capacity, and cost views separate but linked?
4. Distinguish metrics, traces, and logs/events.
5. What makes an SLI/SLO actionable?
6. How can global averages and means hide cohorts/tails?
7. What belongs in an alert record?
8. How do privacy, cardinality, retention, and cost constrain telemetry?

## Scenario questions

- Global health is green; a low-connectivity site cannot complete. Diagnose.
- Availability is high; wrong evidence is increasing. Add signals and actions.
- An alert pages without owner or first action. Repair it.
- Audit logs contain prompts/manuals. Redesign for investigation/minimization.
- No telemetry appears after release. Enumerate competing hypotheses.

## Applied exercise and lab

1. Run `npm run test:companion`.
2. Add one signal record per operating view.
3. Inject a degraded cohort and compare against an aggregate.
4. Trace a slow/untrusted recommendation through the diagnostic tree.
5. Define one intentional blind spot and its consequence/owner.

Pass only when alerts lead to evidence/action, sensitive content is excluded, and cohorts cannot disappear inside an average.

## Optional practice MCQs

1. A dashboard proves operability: **false**.
2. Availability proves AI quality: **false**.
3. More telemetry is always better: **false**.

## Advanced challenge

Design a provider-neutral signal exporter and query pack with safe identifiers, schema versions, cohort/tail queries, freshness coverage, cost budgets, and three tested runbooks.
