# Chapter 12 Blueprint — Build a Representative Task Environment

## Identity and target

- Part IV — Prove the Trajectory and Its Effects
- Primary `AGE-K08`, secondary `AGE-K04`, `AGE-K09`
- Dossier: start `AR-09 v0.1.0`
- Purpose/decision: define exactly what the evaluation environment can support
  and which production-transfer claims remain unsupported.
- Expected depth: advanced evaluation design; 9,000–11,000 words

## Objectives, prerequisites, and bridge

Reader specifies initial state, tasks, tools, users, policies, hidden
constraints, faults, consequence segments, held-out split, seeds and transfer
limits. Prerequisite: complete `AR-02`–`08`, evaluation fundamentals.

1. Chapter 11 completed the system including human checkpoints.
2. Testing it in a toy chat would omit the state, authority, effects, failures, and time that define it.
3. This chapter makes the harness and environment part of every measured claim.
4. Synthetic reproducibility is chosen deliberately and its external-validity cost remains visible.
5. Chapter 13 receives a versioned world and task set on which layered evaluation can run.

## Scope and sequence

Own FieldOps-specific task environment and claim card. AI Evaluation Engineering
owns generalized methodology/infrastructure; domain owners judge real-world
representativeness; no production/safety equivalence.

| Section | Purpose | Evidence/artifact | Words |
| --- | --- | --- | ---: |
| Environment is the tested system | Show harness/tool/user/budget dependence | `AGE-BCLM-023`; `AGE-BSRC-018–021` | claim boundary | 1,200–1,500 |
| Initial state and generators | Seed synthetic equipment/manual/inventory/users | `AGE-BCLM-024`; `AGE-CASE-012` | generator card | 1,500–1,800 |
| Task/policy/consequence | Define success, hidden constraints, authority | both claims; `AGE-CASE-006` | task schema | 1,400–1,700 |
| Perturbations and failures | Timeout, stale data, partial effect, approval delay | `AGE-BCLM-024`; research pack | fault catalog | 1,300–1,600 |
| Splits and validity | Held-out, contamination, invalid/broken tasks | `AGE-BSRC-020`, `021`; `AGE-CASE-007` | split/validity report | 1,300–1,600 |
| Environment card audit | Disclose omissions and supported claim | all | `AR-09 v0.1.0` | 1,200–1,500 |

## Procedure, examples, mistakes

State claim -> define environment elements -> seed generators -> specify tool
versions/failures -> define task/hidden policy/success -> segment consequence ->
hold out tasks -> test solvability/shortcuts -> document omissions. AgentBench
and tau-bench are historical methodology cases, not current rankings. Durable:
evaluation conditional on environment. Volatile: benchmark versions/models.

Inject toy environment with no auth/time/errors, invalid ground truth, leaked
answer, unrealistic user simulator, omitted partial effect. Mistakes: benchmark
equals production, final response only, random split with near-duplicates,
silent broken tasks. Trade-off: synthetic control/reproducibility versus realism.

## Exercise, assessment, figures

- Exercise: author environment card and coverage audit for 30-task design.
  Rubric: state/task 5, policy/effects 5, faults/splits 5, limits 5.
- Required `F12.1`: miniature world labels `Initial State`, `Tools`, `Policy`,
  `Faults`, `Budget`, `Outcome`. Optional `F12.2`: `Toy` versus
  `Production-like`; alt enumerates omitted dimensions. Images later only.


Figure evidence role: each image is a conceptual or causal scaffold, never technical or empirical proof. Accessibility: caption, alt text, and long description must carry every essential relationship without relying on color.

## Phase 08 handoff

Use claims `023–024`, sources `018–021`, `036`, cases `006`, `007`, `012`.
Never reproduce stale model rankings or call synthetic data production-real.
End with `AR-09 v0.1.0` tasks, seeds, splits, faults, and unsupported claims for
Chapter 13.

## Exact evidence manifest

- Claims: `AGE-BCLM-023`, `AGE-BCLM-024`
- Sources: `AGE-BSRC-018`, `AGE-BSRC-019`, `AGE-BSRC-020`, `AGE-BSRC-021`,
  `AGE-BSRC-036`
- Cases: `AGE-CASE-006`, `AGE-CASE-007`, `AGE-CASE-012`
