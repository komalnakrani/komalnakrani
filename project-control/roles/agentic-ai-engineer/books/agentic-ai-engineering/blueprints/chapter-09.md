# Chapter 09 Blueprint — Add Handoffs and Multiple Agents Only With Evidence

## Identity and target

- Part III; primary `AGE-K06`, secondary `AGE-K02`, `AGE-K04`, `AGE-K07`, `AGE-K11`
- Dossier: complete `AR-07 v1.0.0`
- Purpose/decision: compare router, specialist, worker, reviewer, and remote-agent
  structures to the frozen baseline and retain only evidenced separation.
- Expected depth: advanced orchestration; 9,000–11,000 words

## Objectives, prerequisites, and bridge

Reader can write a handoff contract, preserve ownership/state/authority, prevent
duplicate work, compare topology under fixed conditions, and reject unsupported
multi-agent cost claims. Prerequisite: `AR-07 v0.1.0`.

1. Chapter 08 froze one agent, one owner, and one evidence baseline.
2. Any additional agent now incurs measurable coordination and authority cost.
3. This chapter treats topology as an experiment rather than a maturity ladder.
4. Handoff transfers responsibility and evidence, not only text.
5. Chapter 10 receives one selected topology with explicit cancellation and ownership semantics.

## Scope and sequence

Own application topology, handoff/aggregation, duplicate prevention, comparative
evidence. Platform owns generic orchestration; Chapter 18 owns protocol depth.

| Section | Purpose | Evidence/artifact | Words |
| --- | --- | --- | ---: |
| Topology hypotheses | Router/specialist/worker/reviewer and expected gain | `AGE-BCLM-017`; `AGE-BSRC-013`, `042` | hypothesis table | 1,300–1,600 |
| Handoff contract | State, ownership, authority, budget, completion, cancel | `AGE-BCLM-017`; `AGE-BSRC-003`, `031` | contract schema | 1,500–1,800 |
| Controlled comparison | Change topology only | `AGE-BCLM-018`; `AGE-CASE-001`; baseline matrix | 1,400–1,700 |
| Coordination failures | Duplicate effect, stale state, late result, conflict | both claims; `AGE-CASE-010`, `012` | fault fixtures | 1,500–1,800 |
| Cost/latency/control | Report full trade-off; disputed cost claim | `AGE-BCLM-018`; `AGE-BSRC-013` | segment report | 1,200–1,500 |
| Disposition | Retain one agent or exact separation | all | `AR-07 v1.0.0` | 1,000–1,200 |

## Procedure, current examples, failures

Name hypothesis -> hold environment fixed -> define task slice -> transfer
state/evidence/scope/ownership -> set completion/return/cancel/timeout -> run
trials -> compare outcome, policy, actions, latency, cost, coordination -> retain
or reject. Anthropic research and Google ADK/A2A are dated bounded examples.
Durable: a handoff is accountable transfer. Volatile: framework topology APIs,
provider token economics, remote protocol behavior.

Inject two workers reserving one part, stale handoff version, cancelled branch,
late result, conflicting recommendations, orphaned owner. Mistakes: message as
handoff, multi-agent as goal, changing model/budget, measuring quality only.
Trade-offs: context isolation/parallelism versus coordination, tokens, latency,
shared-effect risk.

## Exercise, assessment, figures

- Exercise: compare baseline with one read-only manual specialist. Rubric:
  controlled experiment 6, handoff completeness 6, failure handling 4, honest
  disposition 4. Automatic fail if `AGE-BCLM-018` becomes a general fact.
- Required `F09.1`: relay; labels `Owner`, `State`, `Authority`, `Cancel`,
  `Complete`. Optional `F09.2`: balance labeled `Measured Gain` and
  `Coordination Cost`. Alt/caption state no universal winner.


Figure evidence role: each image is a conceptual or causal scaffold, never technical or empirical proof. Accessibility: caption, alt text, and long description must carry every essential relationship without relying on color.

## Phase 08 handoff

Use claims `017–018`, sources `003`, `010`, `013`, `031`, `042`, cases `001`,
`010`, `012`. Attribute vendor results and retain dispute. End with selected
`AR-07` topology, owner, handoff, and cancellation fields for Chapter 10.

## Exact evidence manifest

- Claims: `AGE-BCLM-017`, `AGE-BCLM-018`
- Sources: `AGE-BSRC-003`, `AGE-BSRC-010`, `AGE-BSRC-013`, `AGE-BSRC-031`,
  `AGE-BSRC-042`
- Cases: `AGE-CASE-001`, `AGE-CASE-010`, `AGE-CASE-012`
