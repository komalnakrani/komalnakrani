# Part 2 — Setup: Make Inputs Admissible

## Bench Setup

The workload enters `CONTRACTED`, with `BL-02` preserving purpose, owners,
incumbent, consequences, and acceptance obligations. This part turns data,
labels, features, transformations, feedback, populations, splits, and serving
representations into versioned evidence. It treats leakage and train-serve skew
as disqualifying failures, not cleanup notes.

## Part decision question

**Can every input, label, transformation, split, and serving representation be
traced and tested?**

Traceability must resolve exact identities and ownership. A dataset name or
feature-store reference is insufficient when its snapshot, computation,
population, access, or feedback path is ambiguous.

## Incoming evidence

`BL-02` supplies the contracted task and incumbent. The data and label work must
remain inside its intended population and consequence model. Any change to
purpose or authority triggers `REOPEN → CONTRACTED`; it is not silently handled
as a preprocessing adjustment.

## Part map

- [Chapter 4](chapter-04.md) writes `BL-03`, the dataset-and-label contract with
  provenance, snapshot identity, access, retention, domain owner, and exception
  route.
- [Chapter 5](chapter-05.md) writes `BL-04`, the feature, transformation,
  consumer, feedback, and upstream/downstream lineage record.
- [Chapter 6](chapter-06.md) consumes both records, tests population-aware
  splits and train-serve conformance, and writes `BL-05`.

The state remains `CONTRACTED` until the combined gate supports `ADMISSIBLE`.

## Part-exit Qualification Gate

Across managed, classical, deep, edge, and shared ports, test the same transfer:
data identity, label definition, feature computation, feedback timing, lineage,
split logic, and serving conformance. Mechanisms may differ—provider snapshots,
local tables, tensor preprocessing, device transforms, or shared features—but
the required evidence and external owners do not.

`PASS` requires resolvable versions, owner-backed exceptions, leakage-resistant
splits, and a measured train-serve comparison. `HOLD` applies when population or
feedback timing is unresolved. `REJECT` applies when contamination makes the
claimed evidence unusable. A material change to data, labels, features, or
population reopens at `ADMISSIBLE`. On `PASS`, `BL-05` enters
[Part 3](part-03.md); it proves admissibility only within the recorded contract.
