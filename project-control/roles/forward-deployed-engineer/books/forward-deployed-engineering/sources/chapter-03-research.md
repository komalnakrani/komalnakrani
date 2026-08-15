# Chapter 03 Research — Map the Workflow That Actually Exists

## Research question

Which model exposes the actors, decisions, state, data, tools, handoffs, exceptions, incentives, and failure cost that determine a deployment?

## Claim and evidence map

- **C03.1 — A workflow model should cover the whole journey and broken handoffs, not only the proposed interface.** `R06-S008`, `R06-S009`, and `R06-S010`.
- **C03.2 — Real-user observation can contradict reported procedure and solution-shaped requirements.** `R06-S006` and `R06-S007`.
- **C03.3 — BPMN 2.0.2 is one standardized process notation.** `R06-S011`. The source does not make BPMN mandatory or sufficient for discovery.
- **C03.4 — An actionable current-state model distinguishes normal paths, exception paths, decisions, owners, evidence, and state transitions.** This is the book’s synthesis from `R06-S007`, `R06-S008`, and the artifact needs frozen in Phase 05.

## Durable principles

Model at the resolution needed to change a deployment decision. Record observed-versus-reported gaps and unresolved contradictions. Test the map with affected users. Attach failure cost and frequency ranges only when evidence exists.

## Cases

- `R06-C010` contrasts ticket closure with safe first-visit resolution and exposes inconsistent equipment identifiers. Both change the problem definition.
- `R06-C009` is a transfer case: a retry is part of the business workflow because caller intent and completion state affect the next decision.

## Disputes and limits

No single diagram represents process, state, data lineage, incentives, and ownership equally well. The book should use a small coordinated set rather than an unreadable “complete” diagram. Reported frequency is not measured frequency.

## Remaining gaps

No release blocker. The chapter blueprint must select a provider-neutral notation subset and show how to record contradictions without prematurely resolving them.

## Manuscript prohibitions

Do not invent frequency, time, or failure-cost values for Orchid. Do not label the desired future path as the current state.
