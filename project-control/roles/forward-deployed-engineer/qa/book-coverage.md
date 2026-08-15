# Forward Deployed Engineering - Book Coverage Audit

Status: IN PROGRESS under Phase 09 issue #16

## Audit method

Each chapter is checked against its approved blueprint for purpose/exit capability, prerequisites/non-scope, concepts and decision models, implementation/tool boundary, Orchid artifact, transfer cases, failures/tradeoffs, exercise evidence, figures, sources/domains, and handoff. Presence of a heading or claim ID is structural evidence only. A chapter passes depth only when it teaches the mechanism, judgment, failure response, authority boundary, and a worked application without padding.

The Phase 09 baseline contains 56,143 whitespace-delimited words across the nineteen MDX files, including metadata. Every manuscript exists and all blueprint topic families are visibly represented, but every blueprint classifies its chapter as major and forecasts at least 8,000 words. The late chapters are materially compressed. Word count is not a quality gate by itself; the disparity is a review trigger.

## Blueprint-to-manuscript matrix

| Ch | Baseline words | Blueprint depth forecast | Structural coverage | Phase 09 depth disposition |
| ---: | ---: | --- | --- | --- |
| 01 | 5,617 | 8,000-10,000 | Purpose, lifecycle, responsibility, evidence, failures, Orchid charter, figures present | REVIEW: closest to complete; verify transfer case and exercises before pass |
| 02 | 4,896 | 9,000-11,000 | Discovery, stakeholder/evidence/access/trust, Orchid plan, failures, figures present | REVIEW: expand only concrete method/example gaps |
| 03 | 4,617 | 10,000-12,000 | Workflow/state/intent/incentive/exception model and Orchid `OA-02` present | REVIEW: verify worked mapping and quantified decision depth |
| 04 | 4,095 | 9,000-11,000 | Outcome/guardrail/metric/adoption/rights/exit and `OA-03` present | REVIEW: verify metric failure and decision-right worked depth |
| 05 | 4,071 | 9,000-11,000 | Scope cone, dependency, uncertainty, milestones, risk, stopped case and `OA-04` present | REVIEW: verify complete option comparison and estimation evidence |
| 06 | 3,834 | 10,000-13,000 | Structural/trust/data/failure/responsibility boundaries and `OA-05` present | OPEN DEPTH RISK: architecture review examples may be too compressed |
| 07 | 3,699 | 11,000-14,000 | Semantic contracts, time/state, intent/reconciliation, capacity, security and tests present | OPEN DEPTH RISK: major technical chapter needs line-by-line mechanism audit |
| 08 | 3,157 | 10,000-13,000 | Topology, identity, network, configuration, tenancy, capacity and environment failures present | OPEN DEPTH RISK: customer-pattern adaptation needs worked evidence |
| 09 | 3,195 | 12,000-15,000 | AI decision, decomposition, evaluation, control, threat, fallback and cost present | OPEN DEPTH RISK: evaluation/control examples require deep audit |
| 10 | 3,851 | 12,000-15,000 | Threat/risk/control/evidence/data/audit/secrets/authority and `OA-05` present | OPEN DEPTH RISK: security/governance breadth requires specialist-boundary audit |
| 11 | 3,585 | 13,000-15,000 plus code | Vertical slice, repository/contracts/config/boundaries/evidence/debt and companion present | OPEN DEPTH RISK: code companion helps, but prose implementation walkthrough must be tested |
| 12 | 2,980 | 13,000-15,000 plus tests | Verification matrix, test layers, eval/UAT/segments/waivers and companion present | OPEN DEPTH RISK: largest forecast gap; audit evidence examples and UAT protocol |
| 13 | 1,993 | 11,000-14,000 | Signals/SLOs/cohorts/tails/alerts/diagnosis/privacy/cost/runbooks present | REVISE: mechanisms are named too compactly for a major operations chapter |
| 14 | 1,607 | 11,000-14,000 plus scripts | Release binding, gates, migration, recovery tree, restore/break-glass/rehearsal present | REVISE: strong skeleton and companion, but worked decision depth is insufficient |
| 15 | 1,250 | 9,000-12,000 | Readiness dispositions, rollout patterns, window/triggers/exceptions/command and `OA-09` present | REVISE: readiness packet and conflicting-stakeholder exercise need fuller treatment |
| 16 | 1,038 | 10,000-13,000 | Incident tracks, timeline, communications, restore/correct, learning/stabilization present | REVISE: operational leadership and timed scenario are compressed |
| 17 | 987 | 9,000-12,000 | Adoption taxonomy, task evidence, accessibility, ten-area ownership and access exit present | REVISE: diagnosis and supervised acceptance need worked cases |
| 18 | 796 | 9,000-12,000 | Outcome review, pattern ledger, reuse ladder, abstraction test and product packet present | REVISE: classification exercise and maintenance/compatibility decisions need full examples |
| 19 | 875 | 9,000-12,000 | Portfolio record/attention/delegation/memos/growth/dossier present | REVISE: portfolio cadence, staffing, delegation, and four-engagement exercise need full treatment |

## Whole-book coverage facts already verified

- One book, five parts, nineteen manifest entries, nineteen manuscripts, nineteen learning packs, nineteen state handoffs, and nineteen immediate QA records exist.
- All twelve provisional Komal domains `FDE-K01` through `FDE-K12` map to primary and secondary chapters in `competency-to-chapter.csv` and chapter metadata.
- Orchid dossier progression `OA-01` through `OA-11` reaches a closed, machine-readable dossier record.
- All 38 frozen figure placeholders exist; visual execution remains a named Phase 10 handoff.
- Source and claim registries contain 61 sources and 188 claims; publication validation reports no unresolved registry reference or blocking `SOURCE GAP`.
- The provider-neutral companion has 64 passing tests and executable demo/recovery rehearsal paths.

## Open coverage work

1. Expand Chapters 13-19 from compressed models into complete teaching prose with worked artifacts, decision paths, failure diagnosis, tradeoffs, and authority boundaries.
2. Audit Chapters 06-12 line by line; expand mechanisms that depend on headings/checklists or companion code without adequate explanation.
3. Audit Chapters 01-05 for the remaining blueprint cases, transfer decisions, and completion evidence; preserve their comparatively mature prose.
4. Reconcile every completed repair in `book-revision-log.md`, then rerun source/objective/figure/project coverage checks.

No chapter is marked Phase 09 PASS yet.

## Revision checkpoint 1

The first repair pass has increased the canonical chapter total from 56,143 to 67,229 words without adding sources or unsupported claims:

| Ch | Baseline | Checkpoint 1 | Repair result | Remaining disposition |
| ---: | ---: | ---: | --- | --- |
| 15 | 1,250 | 2,130 | Added criterion table, real options, pattern/critical-case selection, exception, review exercise, and failure repairs | OPEN: second depth/duplication pass |
| 16 | 1,038 | 2,115 | Added incident opening/timeline, cross-track decisions, updates, boundary diagnosis, corrective verification, timed exercise, and failures | OPEN: second depth/duplication pass |
| 17 | 987 | 2,487 | Added testable adoption diagnosis, evidence table, task/accessibility protocols, demonstrated acceptance, access exit, and failures | OPEN: second depth/duplication pass |
| 18 | 796 | 3,261 | Added bounded outcome argument, worked ledger, twelve-artifact classification, contract economics, reversible abstraction, packet, and failures | OPEN: second depth/duplication pass |
| 19 | 875 | 3,441 | Added portfolio allocation, cadence/staffing, delegation, multi-altitude memo, capacity/depth/growth, closure, and failures | OPEN: second depth/duplication pass |
| 13 | 1,993 | 2,863 | Added worked promise/indicator/cohort/alert/diagnosis/rehearsal plus failure repairs | OPEN: second depth/duplication pass |
| 14 | 1,607 | 2,269 | Added release identity/provenance, gated change, compatibility, recovery comparison, and operator exercise | OPEN: second depth/duplication pass |
| 11 | 3,585 | 4,102 | Added reviewer trace, consequential failure drill, clean-checkout supportability test, and failure repairs | OPEN: second depth/duplication pass |
| 12 | 2,980 | 3,529 | Added worked UAT scenario, five-risk matrix, layered evidence/grader exercise, critical-segment disposition, and failure repairs | OPEN: second depth/duplication pass |

This checkpoint closes demonstrated `model merely named` gaps. It does not use word count as automatic acceptance and does not yet close the chapters.
