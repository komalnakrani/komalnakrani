# Chapter 11 Research — Build a Production Vertical Slice

## Research question

What makes the first end-to-end implementation representative, reviewable, secure, testable, and supportable rather than a disguised prototype?

## Claim and evidence map

- **C11.1 — Production quality spans multiple attributes and operational tradeoffs, not functional success alone.** `R06-S017`, `R06-S019`, and `R06-S044`.
- **C11.2 — Secure development practices belong inside the lifecycle.** `R06-S041`; `R06-S043` supplies versioned application-verification criteria where selected by security owners.
- **C11.3 — HTTP, API, event, schema, and retry contracts can make representative integration behavior testable.** `R06-S020`–`R06-S024`.
- **C11.4 — Release automation and consistency reduce manual variance but do not replace review or recovery.** `R06-S051`.
- **C11.5 — An AI model or agent remains one component inside the broader system.** `R06-S036`, `R06-S037`.

## Durable principles

The vertical slice crosses the real user path, representative data, at least one external boundary, identity/control, failure behavior, audit/telemetry, and deployment configuration. It includes reproducible setup, tests, code review, feature control, safe synthetic data, and a debt register. The implementation should be small enough to understand end to end.

## Cases

- `R06-C009` supplies executable duplicate/late/conflicting-request behavior.
- `R06-C002` shows a frontend loop becoming a backend capacity incident; UI behavior belongs inside production reasoning.
- `R06-C010` includes a ticket-to-evidence-to-ranked-action path, deterministic approval gate, ERP adapter, audit event, and controlled upstream/downstream failure.

## Disputes and limits

“Production-grade” has no context-free checklist. Feature flags can reduce exposure but create configuration debt and divergent paths. A mocked dependency increases repeatability but may hide real semantics; the slice needs explicit evidence about what the test double does not prove.

## Remaining gaps

No release blocker. The blueprint must specify the companion repository shape and runnable local constraints without choosing a paid provider.

## Manuscript prohibitions

Do not include secrets, real customer data, unreviewable generated code, or a happy-path-only implementation presented as production evidence.
