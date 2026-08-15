# Phase 07 — Forward Deployed Engineering Chapter Blueprints

## Objective

Convert the frozen architecture and verified Phase 06 evidence into a complete, non-duplicative writing and implementation specification for all nineteen chapters.

## Inputs

- `books/forward-deployed-engineering/architecture.md`
- `books/forward-deployed-engineering/competency-to-chapter.csv`
- `books/forward-deployed-engineering/project-map.md`
- `books/forward-deployed-engineering/visual-forecast.md`
- `books/forward-deployed-engineering/sources/source-register.json`
- `books/forward-deployed-engineering/sources/chapter-01-research.md` through `chapter-19-research.md`
- `books/forward-deployed-engineering/case-studies/case-study-register.json`

## Required blueprint fields

Every `blueprints/chapter-XX.md` must define:

1. chapter number and frozen title;
2. professional purpose and reader capability at exit;
3. prerequisites and explicit non-scope;
4. concepts and durable principles;
5. professional skills and decision models;
6. architecture/implementation content and current-tool examples, each labeled by stability;
7. Orchid Assist scenario movement and capstone artifacts;
8. registered public/satellite cases and their bounded use;
9. failures, common mistakes, disputes, and tradeoffs;
10. exercise, implementation/lab work, and observable completion evidence;
11. planned figures using frozen figure IDs;
12. source IDs and material claim mapping;
13. Komal competency-domain coverage;
14. depth class and estimated manuscript word range;
15. handoff to the next chapter or final dossier;
16. manuscript prohibitions inherited from Phase 06.

## Work

- Build one actionable blueprint per frozen chapter.
- Assign each concept/model a canonical chapter; later chapters may only add deltas and cross-references.
- Specify the provider-neutral local executable companion across Chapters 7–16.
- Preserve version and volatility warnings for standards, employer materials, and current tools.
- Use Orchid Assist only as a clearly fictional original case.
- Include transfer cases that cover non-AI infrastructure, regulated documents, high-governance/public service, real-time/event-driven work, non-generative data/analytics, founding and mature FDE contexts, and a correctly stopped deployment.
- Reject decorative sections, generic career advice, invented outcomes, and prose that does not advance the reader capability or capstone.

## Acceptance criteria

- [x] Exactly nineteen chapter blueprint files exist and match the frozen titles/order.
- [x] Every required blueprint field is present and actionable.
- [x] Every chapter owns a distinct professional job and capstone advancement.
- [x] All Phase 06 source/case IDs resolve and limitations are preserved.
- [x] All frozen figure IDs are assigned once with a defined teaching purpose.
- [x] All provisional Komal domains have sufficient depth and no silent gap.
- [x] The local companion has one coherent end-to-end shape, not disconnected code samples.
- [x] Major chapters receive appropriate 8,000–15,000-word ranges without padding; supporting chapters receive justified smaller ranges.
- [x] Chapter handoffs form one continuous deployment lifecycle.

## Verification

- Cross-check chapter titles and primary domains against `architecture.md`.
- Cross-check figures against `visual-forecast.md` with no duplicate/missing IDs.
- Cross-check source/case IDs against both JSON registers.
- Validate prerequisite/handoff graph and companion progression.
- Run `npm run validate:publications`, `npm run test:publications`, and `git diff --check`.

## Outputs

- `project-control/roles/forward-deployed-engineer/books/forward-deployed-engineering/blueprints/chapter-01.md` through `chapter-19.md`
- blueprint verification report in the same directory
- updated `project-control/roles/forward-deployed-engineer/ROLE-STATE.md`

## Handoff

Phase 08 writes the original manuscript and executable companion only from the frozen architecture, verified research, and approved chapter blueprints.
