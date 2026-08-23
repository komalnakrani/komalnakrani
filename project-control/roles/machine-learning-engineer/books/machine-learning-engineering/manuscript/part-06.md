# Part 6 — Serve, Watch, Revise: Operate Under Change

## Bench Setup

`BL-14` is `RELEASABLE`, but operation remains unproved. This part measures the
workload under representative demand, records staged exposure and abort rules,
observes signals without naming proxies as ground truth, and separates incident
command from model-specific diagnosis. A repair creates a new candidate
identity and returns through the necessary gates.

## Part decision question

**Can the workload operate inside a measured envelope and change only through
evidence-bearing containment or requalification?**

Average latency, a quiet dashboard, or a successful synthetic run is
insufficient. The envelope needs demand shape, tails, errors, capacity,
degraded mode, bake period, hard aborts, owners, and a verified rollback target.

## Incoming evidence

`BL-14` supplies exact release and recovery identities plus qualification,
interface, consumer, integrity, and access records. Product owns exposure
intent; platform and SRE retain fleet capacity and incident command.

## Part map

- [Chapter 16](chapter-16.md) measures the serving envelope and writes `BL-15`,
  moving from `RELEASABLE` to `OPERABLE`.
- [Chapter 17](chapter-17.md) binds observation signals, delayed labels,
  proxies, drift, segments, owners, and decision routes in `BL-16`, producing
  `OBSERVED` without invented truth.
- [Chapter 18](chapter-18.md) records detection, containment, rollback or
  repair, changed evidence, and independent requalification in `BL-17`, ending
  `REQUALIFIED` or `ROLLED-BACK`.

## Part-exit Qualification Gate

Every port transfers envelope, observation, incident, rollback, changed
evidence, and requalification. Managed telemetry cannot hide export gaps;
classical and deep mechanisms bind preprocessing and artifact identity; edge
operation accounts for constrained resources and delayed contact; shared
platform workloads distinguish tenant diagnosis from fleet action.

`PASS` requires measured bounds, owned alerts, a tested previous-good path, and
new identity after repair. `HOLD` applies when ground truth, capacity, or owner
response is unresolved. `REJECT` selects containment or rollback when continued
operation is unsupported. `BL-17` enters [Part 7](part-07.md); neither path
erases the incident or self-authorizes formal acceptance.
