# Chapter 12 QA - Evaluate Retrieval and Generation Together

- Manuscript status: `PASS`
- Manuscript word count: 2667
- Mosaic milestone: `MD-06` first joint evidence opened
- Production claims: `CLM-034`, `CLM-035`, `CLM-036`
- Accepted mapping: `V1-C12-CL01`, `V1-C12-CL02`, `V1-C12-CL03`
- Bounded cases: `LLME-CASE-003`, `LLME-CASE-004`
- Figure anchors: `V1-F12.1`, `V1-F12.2`
- Companion tests: 4/4 passing

## Immediate QA result

| Check | Result | Evidence |
|---|---|---|
| Blueprint depth | PASS | Answerability, eight-layer diagnosis, metric questions, joint matrix, interventions, label quality, segmentation, grader calibration, failure injection, exercise, and handoff are complete. |
| Claim discipline | PASS | Exactly three assigned claims appear with accepted wording and limitations. |
| Source/case limits | PASS | Research outcomes remain benchmark/configuration bound; automated metrics and citations are indicators, not truth or authority. |
| Causal diagnosis | PASS | Correct retrieval/failed use and failed retrieval/correct abstention remain separately classifiable. |
| Authority | PASS | Domain owners adjudicate source correctness; release owners decide use; automated evaluators have no authority. |
| Figures | PASS WITH PENDING ASSETS | Two exact PNG anchors include essential labels, accessibility text, and bounded evidence roles. |

## Residual limits

The joint fixture uses constructed classifications rather than measured model outputs. Passing tests prove diagnostic branching only, not metric validity, representative quality, causal certainty, or release fitness.
