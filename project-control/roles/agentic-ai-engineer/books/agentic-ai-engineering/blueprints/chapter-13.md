# Chapter 13 Blueprint — Evaluate Outcomes, Actions, State, and Efficiency

## Identity and target

- Part IV; primary `AGE-K08`, secondary `AGE-K03`, `AGE-K06`, `AGE-K10`
- Dossier: complete `AR-09 v1.0.0`
- Purpose/decision: select credible evidence for each system claim and
  consequence without collapsing it into one score.
- Expected depth: advanced evaluation implementation; 10,000–12,000 words

## Objectives, prerequisites, and bridge

Reader builds deterministic, state/effect, policy, recovery, efficiency,
calibrated-grader, and human-review layers; reports segments and uncertainty.
Prerequisite: `AR-09 v0.1.0`, statistics/evaluation basics.

1. Chapter 12 froze what tasks and world are being tested.
2. A good final answer can coexist with unauthorized reads or corrupted state.
3. This chapter grades the complete trajectory and effects without overprescribing one valid path.
4. Evidence is tied to claim, consequence, harness, versions, trials, and uncertainty.
5. Chapter 14 receives failure taxonomies and coverage gaps to attack deliberately.

## Scope and sequence

Own FieldOps release evidence; generalized evaluation science/platform belongs
to AI Evaluation Engineering; domain authorities set risk thresholds.

| Section | Purpose | Evidence/artifact | Words |
| --- | --- | --- | ---: |
| Claims to measures | Prevent score-first evaluation | `AGE-BCLM-026`; `AGE-BSRC-021`, `036` | measure map | 1,200–1,500 |
| Outcome/state/effect | Deterministic predicates and diffs | `AGE-BCLM-025`; `AGE-BSRC-019`; `AGE-CASE-006` | assertion suite | 1,600–1,900 |
| Trajectory/action/policy | Args, order, unnecessary/prohibited actions | `AGE-BCLM-025`; `AGE-BSRC-020`, `040` | trajectory grader | 1,500–1,800 |
| Recovery/efficiency | Failure disposition, turns, calls, time, cost | `AGE-BCLM-026`; `AGE-CASE-001`, `002` | metrics schema | 1,300–1,600 |
| Qualitative graders/humans | Calibration, disagreement, sampling | both claims; `AGE-BSRC-020`, `021` | fixtures/rubric | 1,400–1,700 |
| Segments/gate | Trials, uncertainty, invalid cases, supported claims | all; `AGE-CASE-007`, `012` | `AR-09 v1.0.0` | 1,600–1,900 |

## Procedure, failures, durable/volatile

Name claim -> choose direct evidence -> run repeated seeded trials -> assert
outcome/state/effect -> inspect action/policy/recovery -> calibrate qualitative
grader -> sample human review -> report segments/uncertainty -> gate or narrow
claim. Durable: claim-specific layered evidence. Volatile: grader models,
benchmark tasks, trace SDK fields, model performance.

Inject correct plan plus unauthorized read/stale reservation; safe refusal with
no completion; alternative valid path; grader disagreement; broken task; hidden
answer. Mistakes: final-answer-only, one scalar, model grader as oracle, no
denominator, averaging consequence segments, tuning on held-out. Trade-off:
trajectory constraints improve control but can penalize legitimate alternatives.

## Exercise, assessment, figures

- Exercise: grade six traces and write release claim table. Rubric: direct
  evidence 6, layered correctness 6, calibration 4, uncertainty/limits 4.
- Required `F13.1`: essential labels `Actions`, `Arguments`, `State`, `Effects`,
  `Recovery`, `Outcome`. Required `F13.2`: essential labels `Normal`, `Edge`, `Adversarial`,
  `Timeout`, `Permission`, `Partial Effect`. Alt identifies coverage gaps; exact
  matrix stays accessible outside image.


Figure evidence role: each image is a conceptual or causal scaffold, never technical or empirical proof. Accessibility: caption, alt text, and long description must carry every essential relationship without relying on color.

## Phase 08 handoff

Use claims `025–026`, sources `018–021`, `036`, `040`, cases `001`, `002`,
`006`, `007`, `012`. No universal score or current ranking. End with `AR-09
v1.0.0` failure taxonomy, gaps, and gate inputs for Chapter 14.

## Exact evidence manifest

- Claims: `AGE-BCLM-025`, `AGE-BCLM-026`
- Sources: `AGE-BSRC-018`, `AGE-BSRC-019`, `AGE-BSRC-020`, `AGE-BSRC-021`,
  `AGE-BSRC-034`, `AGE-BSRC-036`, `AGE-BSRC-040`
- Cases: `AGE-CASE-001`, `AGE-CASE-002`, `AGE-CASE-006`, `AGE-CASE-007`,
  `AGE-CASE-012`
