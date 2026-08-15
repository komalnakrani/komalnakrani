# Chapter 13 Blueprint — Make the System Observable and Operable

## Purpose and exit capability

The reader can determine whether a deployed system is healthy, useful, safe, affordable, and supported; identify the next diagnostic evidence; and define actionable objectives, alerts, runbooks, and explicit blind spots.

## Prerequisites and non-scope

- Prerequisite: `OA-07` claims/limitations and runnable instrumentable slice.
- Non-scope: vendor observability certification, universal SLO targets, dashboard-as-operation, or logging sensitive payloads by default.

## Concepts, skills, and decision models

- Promise/failure-to-signal map; service, workflow, adoption, data, AI, security/audit, support, dependency, capacity, and cost views.
- SLI/SLO/action record; alert owner/urgency/first action; cardinality/retention/privacy/cost constraints.
- Diagnostic tree: symptom → cohort → service/dependency → data → model/policy → workflow/support.
- Skill: segment aggregate health and choose an evidence-first diagnostic path.

## Architecture, implementation, and tools

- OpenTelemetry concepts (`current project docs/volatile interfaces`) with provider-neutral traces/metrics/logs; local inspectable JSON/Prometheus-style metrics (`replaceable`).
- Companion emits correlation IDs, latency/error/retry/reconciliation, policy/model outcomes, approval, cohort, cost proxy, and synthetic support events—without sensitive content.

## Scenario and artifacts

- Produce `OA-08` signal catalog, SLO/quality objectives, dashboards/queries, alerts, runbook links, capacity and cost model.
- Diagnose low-connectivity-site degradation hidden by aggregate green health.

## Cases and bounded use

- `R06-C002`: retries versus new demand.
- `R06-C004`: migration load and DB connections.
- `R06-C005`: model quality invisible to infrastructure-only signals.

## Failures, mistakes, and tradeoffs

- Everything logged; alert without owner; availability equals usefulness; average hides tail/cohort; quality sampled without risk segment.
- Tradeoff: diagnostic value versus privacy/cost/noise; record dropped signal and consequence.

## Exercise and completion evidence

Instrument the slice and diagnose three injected symptoms using runbooks. Pass when each critical promise has signal or explicit gap, alerts lead to action, cohorts remain visible, and sensitive data stays excluded.

## Figures

- `F13.1` multi-layer signal map.
- `F13.2` slow/untrusted-recommendation diagnostic tree.

## Evidence, competencies, depth, and handoff

- Claims: `R06-S012`, `R06-S014`, `R06-S025`, `R06-S037`, `R06-S038`, `R06-S044`, `R06-S047`, `R06-S048`.
- Domains: primary `FDE-K07`, `FDE-K09`, `FDE-K10`; secondary `FDE-K06`.
- Depth: major operations/diagnosis chapter; target 11,000–14,000 words.
- Handoff: Chapter 14 makes change and recovery repeatable against these signals.
- Prohibitions: no global-average reassurance, sensitive default logging, or dashboard-only operability claim.
