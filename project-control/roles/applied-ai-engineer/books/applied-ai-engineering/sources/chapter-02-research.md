# Chapter 02 Research — Start With the User Task

## Architecture anchors

- Primary domains: `AAE-K01`, `AAE-K11`
- Dossier milestone: `PF-01`
- Forecast figures: `F02.1`, `F02.2`

## Research question

How should an engineer turn a request for AI into a falsifiable task, consequence, baseline, and value hypothesis before choosing a mechanism?

## Claim and evidence map

- **C02.1 — Human-AI design begins with what people are trying to accomplish and how the system behaves in interaction.** `AAE-S003` and `AAE-S004` support task/user framing, expectation, context, correction, and change-over-time concerns.
- **C02.2 — A simple non-ML baseline is an essential comparison, not an embarrassing first version.** `AAE-S008` explicitly recommends starting with simple rules and infrastructure. Present this as experienced guidance, not a theorem.
- **C02.3 — Product metrics must connect to the task and can mislead when treated as value itself.** `AAE-S031` covers trustworthy controlled-experiment discipline; `AAE-S021` and `AAE-S053` illustrate engagement signals as useful but imperfect proxies in search.
- **C02.4 — Upstream task/data definitions can create cascading downstream failures when responsibility is unclear.** `AAE-S013` and `AAE-S014` support the sociotechnical data-cascade pattern.
- **C02.5 — Privacy and risk context must be identified before unnecessary data is gathered.** `AAE-S038` and `AAE-S054` support lifecycle mapping and purpose-aware risk consideration.

## Durable synthesis

The task brief records actor, trigger, input/context, decision or action, baseline, consequence, affected groups, success/guardrail evidence, non-goals, and disconfirming observations. The mechanism remains undecided.

## Cases

- `AAE-C003` tests whether click, favorite, cart, and purchase are equivalent evidence; they are not.
- `AAE-C007` shows how weak task/data ownership compounds downstream.
- `AAE-C012` requires a measurable part-discovery task before any chat or agent design.

## Disputes and limits

Not every valuable behavior yields a fast online metric. Controlled experiments may be infeasible, unethical, underpowered, or confounded. A product manager owns roadmap priority; the engineer owns the technical credibility and limitations of the hypothesis.

## Remaining gaps

No release-blocking gap. Phase 06 evidence does not supply universal financial-value formulas; Phase 07 must use bounded synthetic assumptions and avoid invented ROI.

## Blueprint constraints

Require a rejection path: deterministic search, workflow change, or no build must remain valid outcomes. The task brief must record baseline evidence and a named assumption most likely to overturn the project.

## Manuscript prohibitions

Do not equate user engagement with usefulness, use “AI use case” as a task definition, or invent Patchwork conversion, return, or safety statistics.
