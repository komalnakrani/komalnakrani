# Chapter 10 State Record

- Manuscript: 10,008 words; frozen 10,000-12,000 depth gate passed
- Input: `AR-07 v1.0.0`; output: `AR-08 v0.1.0`
- Claims: `CLM-019`, `CLM-020`; accepted mapping `AGE-BCLM-019`, `AGE-BCLM-020`
- Sources: `SRC-003`, `014`, `015`, `016`, `031`, `033`, `041`
- Cases: `AGE-CASE-005`, `008`, `010`, `012`
- Figures: `F10.1`, `F10.2`; root ImageGen pending
- Durable: versioned checkpoint, one lease owner, semantic effect identity, bounded retry, reconciliation, cancellation, compatibility, honest terminal state
- Boundary: no exactly-once promise; compensation is a separately authorized effect and does not erase history
- Handoff: Chapter 11 receives durable wait/resume compatibility and the unchanged `AR-05` authority hook.
