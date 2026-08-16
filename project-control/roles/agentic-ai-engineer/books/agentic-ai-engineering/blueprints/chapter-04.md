# Chapter 04 Blueprint — Make the Loop Inspectable

## Identity and production target

- Part: II — Build the Action Surface
- Competencies: `AGE-K02` primary; `AGE-K01`, `AGE-K10` secondary
- Dossier milestone: create `AR-03 v1.0.0`
- Purpose: translate `AR-02` into explicit run states, events, limits,
  cancellation, validation, and completion enforcement.
- Professional decision: which transitions the model may propose and which
  deterministic code must enforce.
- Expected depth: advanced architecture/implementation chapter
- Target manuscript range: 9,000–11,000 words

## Observable objectives

The reader can implement an explicit provider-neutral run loop, reject invalid
transitions, keep stable run identity, enforce limits/cancellation, verify
completion outside the model, and replay an event trail.

## Prerequisites and five-sentence dossier bridge

Prerequisites: `AR-02 v1.0.0`, finite-state-machine and event-schema design,
typed validation, async cancellation, and test doubles.

1. Chapter 03 defined what FieldOps may do but not how execution advances.
2. A model can propose actions, errors, handoffs, or completion at every turn.
3. The harness must convert those proposals into validated state transitions.
4. This chapter makes the run inspectable before exposing capabilities.
5. Chapter 05 receives `AR-03 v1.0.0` and designs tools against its action/effect contract.

## Owned concepts and explicit non-scope

Own: run/event schema, state machine, proposal-versus-enforcement boundary,
budgets, stop/cancel, completion verification, replay. LLM Engineering owns
model behavior depth; platform owns generic schedulers/event stores; Chapter 10
owns distributed durability; Chapter 15 owns production telemetry.

## Production sequence

| Section | Purpose | Evidence | Artifact | Words |
| --- | --- | --- | --- | ---: |
| 1. Run as engineered object | Define identity, attempt, versions, budgets, disposition | `AGE-BCLM-007`; `AGE-BSRC-003`, `040` | run schema | 1,100–1,300 |
| 2. Explicit state machine | Specify legal observe/decide/validate/execute/verify/wait/stop transitions | `AGE-BCLM-007`; `AGE-BSRC-003` | transition table | 1,600–1,900 |
| 3. Model/code boundary | Convert model output to proposal, never authority | `AGE-BCLM-008`; `AGE-BSRC-019`, `020` | enforcement map | 1,300–1,600 |
| 4. Event and replay contract | Link observation, proposal, validation, effect, state | `AGE-BSRC-040`; `AGE-CASE-008` | event schema | 1,300–1,600 |
| 5. Limits and cancellation | Handle turn/time/action budgets and terminal disposition | both claims; `AGE-BSRC-003` | assertions and cancel rules | 1,200–1,500 |
| 6. Deterministic fault lab | Test loops, early success, invalid args, ignored cancel | both claims; `AGE-CASE-012` | `AR-03 v1.0.0` evidence | 1,600–1,900 |

## Skill procedure and current examples

1. Enumerate states and terminal dispositions.
2. Define allowed event for every transition.
3. Give the model proposal-only outputs.
4. Validate schema, contract, authority, budget, and current state in code.
5. Record before/after state and evidence references.
6. Evaluate completion predicates independently.
7. Exercise cancellation and replay with a deterministic policy double.

Current example: OpenAI Agents SDK loop/tracing demonstrates branches and
resumable state; it is not canonical. Durable: explicit state and external
completion verification. Volatile: SDK APIs, trace field names, provider tool
output formats.

## Scenario, failures, mistakes, trade-offs

Policy double loops on an unavailable tool, emits invalid arguments, declares
success without a reservation, ignores cancellation, and repeats an effect.
Diagnosis order: event validity -> state transition -> contract assertion ->
budget -> effect evidence -> terminal disposition. Common mistakes: chat history
as state, model self-certification, one global timeout, hidden framework loop,
and trace-as-source-of-truth. Trade-off: explicit states add code but make
failure, recovery, evaluation, and migration tractable.

## Exercises and assessment

- Exercise: complete the transition table and implement test specifications for
  six faults. Output schemas/pseudocode only in manuscript phase; Phase 07 fixes
  anchors and expected assertions.
- Assessment: legal transitions 5, deterministic enforcement 5, completion 4,
  cancellation 3, replay evidence 3.
- Acceptance: no invalid transition; stable run ID; monotonic counters; exactly
  one terminal disposition; model cannot bypass `AR-02`.

## Figure allocation

- Required `F04.1`: loop track. Essential labels: `Observe`, `Decide`,
  `Validate`, `Act`, `Verify`, `Stop`. Alt description identifies model decision
  point and deterministic gates.
- Optional `F04.2`: transparent run capsule with labels `Run`, `Events`,
  `Budgets`, `Cancel`, `Disposition`. Evidence role is mental model, not runtime
  proof. ImageGen raster later; no current asset.


Figure evidence role: each image is a conceptual or causal scaffold, never technical or empirical proof. Accessibility: caption, alt text, and long description must carry every essential relationship without relying on color.

## Phase 08 handoff

Writer must use provider-neutral schemas and deterministic fixtures, not an SDK
tutorial. Preserve both claim limitations and clearly label `AGE-CASE-008` as a
coding-agent case. End with exact `AR-03` state/event contracts required by
Chapter 05. Re-verify SDK and tracing docs before any current-tool sidebar.

## Exact evidence manifest

- Claims: `AGE-BCLM-007`, `AGE-BCLM-008`
- Sources: `AGE-BSRC-003`, `AGE-BSRC-019`, `AGE-BSRC-020`, `AGE-BSRC-040`
- Cases: `AGE-CASE-008`, `AGE-CASE-012`
