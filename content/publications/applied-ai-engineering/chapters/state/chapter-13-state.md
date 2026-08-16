# Chapter 13 State - Design for Probabilistic Failure

- Status: complete draft; immediate QA recorded
- Dossier: `PF-09` failure register and fallback/recovery ladder v0.1.0
- Companion: five injections, bounded deterministic retry, effect-aware idempotency, circuit transitions, consequence-aware fallback; six new tests
- Claims: `CLM-065` through `CLM-070`
- Figures: `F13.1` / `FIG-025`; `F13.2` / `FIG-026` (final ImageGen PNG assets)
- Case status: all failure inputs and outcomes are fictional/synthetic.

## Locked decisions

- Initiating layer remains distinct from downstream symptom.
- Unknown effect reconciles or stops before repetition.
- Retry has one owner, a deadline, capacity gate, and terminal state.
- Fallback preserves evidence, permission, authority, and visible limitations.
- Recovery requires authoritative state plus replay, not restart alone.

## Chapter 14 prerequisite

Budget the normal, retry, fallback, reconciliation, and recovery paths without dropping semantic controls.
