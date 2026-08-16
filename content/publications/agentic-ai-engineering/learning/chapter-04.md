# Chapter 04 Learning Pack

## Objectives

- Model a run with stable identity, explicit state, legal transitions, and one terminal disposition.
- Keep model output proposal-only and enforce contract, budget, cancellation, authority, and completion in code.
- Record replayable events without treating traces as external truth.
- Diagnose six deterministic loop faults.

## Formative work

Complete the `AR-03` transition table, then replay legal, illegal, early-success, cancellation, budget, and repeated-effect traces. Name the assertion, evidence, counter delta, and disposition for each event.

## Assessment

Twenty points: legal transitions 5, deterministic enforcement 5, completion 4, cancellation 3, replay evidence 3. A terminal transition, changed run identity, decreasing counter, or model-certified completion is an automatic failure. Formative only; no certification.
