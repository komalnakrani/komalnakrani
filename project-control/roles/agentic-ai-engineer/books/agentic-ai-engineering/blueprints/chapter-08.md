# Chapter 08 Blueprint — Start With One Agent

## Identity and production target

- Part III — Orchestrate Work That Must Endure
- Primary `AGE-K02`, `AGE-K06`; secondary `AGE-K03`, `AGE-K04`
- Dossier: start `AR-07 v0.1.0`
- Purpose/decision: build and freeze a provider-neutral single-agent vertical
  slice before topology experiments.
- Expected depth: advanced integration; 8,000–10,000 words

## Objectives, prerequisites, and bridge

Reader integrates contract, loop, capabilities, identity and state into one
bounded agent; measures a reproducible baseline; identifies complexity that can
be removed. Prerequisites: `AR-02`–`06`, testing and basic evaluation.

1. Parts I–II created isolated contracts but no complete system.
2. A single accountable run owner is the simplest integration control.
3. This chapter connects all prior artifacts through a deterministic model double.
4. The baseline freezes tasks, tools, policies, budgets, and evidence.
5. Chapter 09 may change topology only and must beat this baseline on a named dimension.

## Scope and sequence

Own vertical-slice integration and baseline. Chapter 09 owns multi-agent design;
Chapter 12–13 own evaluation rigor; provider SDK tutorials are non-scope.

| Section | Purpose | Evidence/artifact | Words |
| --- | --- | --- | ---: |
| Baseline as control | State comparison contract | `AGE-BCLM-015`; `AGE-BSRC-001`, `002`; plan | 1,000–1,200 |
| One-agent architecture | Wire AR contracts behind stable interfaces | `AGE-BCLM-016`; `AGE-BSRC-003`, `040` | component map | 1,300–1,600 |
| Deterministic policy double | Select bounded actions/faults reproducibly | `AGE-BCLM-015`; `AGE-CASE-012` | policy fixture | 1,200–1,500 |
| FieldOps vertical slice | Read, ask, propose, approve, reserve, verify | both claims; `AGE-CASE-002`, `012` | executable-spec outline | 1,800–2,100 |
| Baseline measures | Outcome, actions, state, effects, recovery, cost | `AGE-BSRC-005`, `010` | report schema | 1,200–1,500 |
| Freeze and diagnose | Remove abstractions hiding state/failure | all | `AR-07 v0.1.0` | 1,000–1,200 |

## Skill procedure, failures, trade-offs

Freeze task set -> wire one loop owner -> expose narrow tools -> assemble
authorized context -> execute deterministic policies -> capture layered evidence
-> diagnose failure -> version baseline. OpenAI Agents SDK is a bounded current
example of exposed controls, never default dependency. Durable: one-agent
baseline as controlled comparison. Volatile: SDK interfaces/model providers.

Inject missing manual, stale availability, typed tool error, ambiguous effect,
cancellation, context overflow. Common mistakes: framework hides state, live
model makes baseline irreproducible, changing prompts/tools during Chapter 09,
adding specialists before measuring. Trade-off: one agent may simplify ownership
while accumulating context or incompatible privilege; those become hypotheses.

## Exercise, assessment, and figure

- Exercise: produce vertical-slice sequence, component contracts, baseline
  report and three removal proposals. Rubric: integration 6, reproducibility 5,
  evidence 5, simplicity disposition 4.
- Required `F08.1`: one workbench with organized tools and empty booths.
  Essential labels: `One Agent`, `Tools`, `State`, `Policy`, `Evidence`.
  Alt states unused specialists are intentional, not missing functionality.


Figure evidence role: each image is a conceptual or causal scaffold, never technical or empirical proof. Accessibility: caption, alt text, and long description must carry every essential relationship without relying on color.

## Phase 08 handoff

Use claims `015–016`, sources `001–003`, `005`, `010`, `013`, `040`, `042`,
cases `002`, `012`. Keep SDK claim bounded. End with frozen `AR-07 v0.1.0`
configuration and comparison table required by Chapter 09.

## Exact evidence manifest

- Claims: `AGE-BCLM-015`, `AGE-BCLM-016`
- Sources: `AGE-BSRC-001`, `AGE-BSRC-002`, `AGE-BSRC-003`, `AGE-BSRC-005`,
  `AGE-BSRC-010`, `AGE-BSRC-013`, `AGE-BSRC-034`, `AGE-BSRC-040`,
  `AGE-BSRC-042`
- Cases: `AGE-CASE-002`, `AGE-CASE-012`
