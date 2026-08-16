# Chapter 19 Blueprint — Replay Change Across Model, Tool, Policy, and Harness

## Identity and target

- Part VI; primary `AGE-K11`, secondary `AGE-K02`, `AGE-K04`, `AGE-K07`, `AGE-K08`, `AGE-K10`
- Dossier: complete `AR-13 v1.0.0`
- Purpose/decision: decide whether a component/version change preserves the
  existing system claim or creates a new claim requiring migration and rollout.
- Expected depth: advanced change/replay engineering; 9,000–11,000 words

## Objectives, prerequisites, and bridge

Reader inventories all behavior-affecting components, replays held-out tasks,
compares trajectories/effects, migrates state, and plans cohort/rollback/
retirement. Prerequisite: `AR-09`, `11`, `13 v0.1.0`.

1. Chapter 18 added pinned protocol adapters to the local system.
2. Any model, tool, policy, context, state, protocol, grader, or harness change can alter behavior.
3. Final-score parity can hide extra actions, ignored stops, or incompatible checkpoints.
4. This chapter compares the complete behavior version set and migrates in-flight evidence safely.
5. Chapter 20 receives a versioned portfolio record rather than a collection of “latest” components.

## Scope and sequence

Own behavior inventory, replay, trajectory comparison, state compatibility and
local retirement. Platform/procurement/enterprise architecture own broader
vendor/service choice; model training remains outside scope.

| Section | Purpose | Evidence/artifact | Words |
| --- | --- | --- | ---: |
| Behavior version set | Inventory model, prompts, tools, policy, context, runtime, protocol, graders | `AGE-BCLM-037`; `AGE-BSRC-021`, `025` | inventory | 1,400–1,700 |
| Replay design | Held-out/incident/adversarial set and controlled variables | both claims; `AGE-BSRC-019`, `020`; `AGE-CASE-006` | plan | 1,400–1,700 |
| Trajectory/effect diff | Outcome plus actions/state/policy/cost/recovery | `AGE-BCLM-037`; evaluation sources | comparison | 1,500–1,800 |
| State/checkpoint migration | Transform, quarantine, fallback, rollback | `AGE-BCLM-038`; `AGE-BSRC-035`, `041`; `AGE-CASE-008` | migration | 1,400–1,700 |
| Protocol/tool change | RC/stable/schema drift and remote behavior | both claims; `AGE-BSRC-031`, `033`, `039`; `AGE-CASE-010` | compatibility matrix | 1,200–1,500 |
| Cohort/retirement | Decide compatible/new claim/rollback/retire | `AGE-BCLM-038`; `AGE-BSRC-028`; `AGE-CASE-012` | `AR-13 v1.0.0` | 1,300–1,600 |

## Procedure, failures, trade-offs

Inventory exact versions -> isolate expected change -> select replay set ->
compare outcome/action/state/effect/policy/recovery/efficiency -> migrate old and
in-flight states -> canary -> rollback/retire old -> expire superseded claims.
Durable: full version evidence and trajectory replay. Volatile: model IDs,
protocol schemas, telemetry attributes, grader behavior.

Failure injection: policy double with higher completion but extra reads/ignored stop, new
inventory schema, stale remote metadata, incompatible checkpoint. Mistakes:
model version only, changing several components, final score only, no state
migration, leaving old claim current. Trade-off: strict replay slows upgrades;
weak replay makes change impact unknowable.

## Exercise, assessment, figures

- Exercise: disposition three changes and migrate two checkpoints. Rubric:
  inventory 5, controlled replay 5, trajectory/effect analysis 5, migration/
  retirement 5.
- Required `F19.1`: labels `Before`, `After`, `Choice`, `Actions`, `State`,
  `Effects`, `Cost`, `Outcome`. Required `F19.2`: labels `Old State`, `Transform`,
  `Quarantine`, `New State`, `Rollback`, `Retire`. Exact deltas external.


Figure evidence role: each image is a conceptual or causal scaffold, never technical or empirical proof. Accessibility: caption, alt text, and long description must carry every essential relationship without relying on color.

## Phase 08 handoff

Use claims `037–038`, sources `019–021`, `025`, `028`, `031`, `033`, `035`,
`039`, `041`, cases `006`, `008`, `010`, `012`. No compatibility guarantee
beyond tested scope. End with `AR-13 v1.0.0` evidence portfolio for Chapter 20.

## Exact evidence manifest

- Claims: `AGE-BCLM-037`, `AGE-BCLM-038`
- Sources: `AGE-BSRC-019`, `AGE-BSRC-020`, `AGE-BSRC-021`, `AGE-BSRC-025`,
  `AGE-BSRC-028`, `AGE-BSRC-031`, `AGE-BSRC-033`, `AGE-BSRC-035`,
  `AGE-BSRC-039`, `AGE-BSRC-041`
- Cases: `AGE-CASE-006`, `AGE-CASE-008`, `AGE-CASE-010`, `AGE-CASE-012`
