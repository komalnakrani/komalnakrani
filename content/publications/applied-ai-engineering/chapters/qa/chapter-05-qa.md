# Immediate QA - Chapter 05

- Chapter: *Make Task Data Representative*
- Manuscript word count: 6,503
- Status: PASS

## Checks

- Technical: PASS. Population, units, provenance, permission, labels, segments, missingness, duplicates, partitions, leakage, threats, and refresh are decision-complete.
- Source: PASS. Six claims resolve through twelve scoped sources; historical demographic studies are used only for the segment-analysis discipline.
- Terminology: PASS. Label is not unqualified ground truth; schema is not semantics or fitness; synthetic is not representative.
- Repetition: PASS. Builds on `PF-03` rather than repeating mechanism selection.
- Boundary: PASS. Data cards record but do not confer privacy, legal, domain, or release authority.
- Failure depth: PASS. Naive split contamination is preserved, rejected, rebuilt, and limited.
- Example integrity: PASS. Every Patchwork count and feature is constructed; `representativenessClaim` is `none` and tested.
- Figures: PASS. `F05.1` and `F05.2` appear at population/segment and leakage anchors.
- Companion: PASS. Eleven total Applied AI tests, including six data tests, run locally without secrets or network.
- Continuity: PASS. `PF-04` v0.1 hands permitted clean records and explicit evidence states to Chapter 6.
- Source gaps: PASS. No unresolved `SOURCE GAP`.

## Residual limits

The clean synthetic split proves only known local mechanics. It provides no real population, permission, quality, fairness, or release evidence.
