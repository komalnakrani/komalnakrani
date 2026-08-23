# Part 3 — Fit: Make Changes Reconstructible

## Bench Setup

`BL-05` brings an `ADMISSIBLE` workload to the experiment bench. This part does
not reward novelty. It retains the incumbent, isolates the claimed intervention,
binds code/data/dependency/parameter/seed/hardware context, and keeps losing or
failed candidates available for review. Reproducibility is stated within a
named context and tolerance.

## Part decision question

**Can the candidate comparison be reconstructed without erasing the incumbent
or overstating reproducibility?**

The question covers both scientific comparison and engineering identity. A run
ID without immutable inputs is not enough, and a deterministic switch does not
promise bitwise equality across releases or devices.

## Incoming evidence

`BL-05` supplies the admissible input and conformance boundary. Any experiment
outside that population or transform identity is a different proposition and
must be recorded as such.

## Part map

- [Chapter 7](chapter-07.md) writes `BL-06`, a controlled baseline/candidate
  harness with hypothesis, isolated intervention, and retained incumbent.
- [Chapter 8](chapter-08.md) writes `BL-07`, the bounded run capsule and explicit
  reconstruction claim.
- [Chapter 9](chapter-09.md) compares candidates without deleting failures and
  writes `BL-08`, a candidate-for-qualification nomination with limitations.

The route is `ADMISSIBLE → RECONSTRUCTIBLE → CANDIDATE`.

## Part-exit Qualification Gate

All five ports transfer baseline, experiment, run identity, bounded
reproducibility, and candidate evidence. Managed and shared services must expose
exportable identities. Classical pipelines must bind feature order and
preprocessing. Deep runs must bind checkpoint, accelerator, and framework
context. Edge runs must bind device/runtime constraints. None receives a
privileged evidence threshold.

`PASS` requires an executable incumbent, controlled comparison, resolvable run
capsule, preserved failed evidence, and a limitation-bearing nomination.
`HOLD` applies to a confounded intervention or incomplete run context. `REJECT`
applies when the comparison cannot support nomination. Changed runtime,
dependencies, interface, or serving envelope later triggers
`REOPEN → RECONSTRUCTIBLE`. `BL-08` enters [Part 4](part-04.md) as a candidate,
not as a qualified or releasable system.
