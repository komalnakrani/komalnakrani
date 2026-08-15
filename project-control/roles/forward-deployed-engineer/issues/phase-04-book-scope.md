# Phase 04 — Forward Deployed Engineer Book Scope and Volume Decision

## Objective

Determine the minimum justified number of original Komal books needed to teach Forward Deployed Engineering without artificial splits, duplication, or platform-specific padding.

## Inputs

- Phase 01 role validation and `PROCEED` verdict
- structured source/claim register
- adjacent-role boundary and non-scope
- locked Komal-first execution order
- competency standard and objective map: intentionally deferred to Abhyaas and treated as a later compatibility check, not a blocker to Komal scope
- existing Komal manuscripts: none; all content will be written fresh

## Work

- Estimate conceptual, practical, prerequisite, architecture, operational, security/reliability, project, and narrative depth for every durable role cluster.
- Test a single-book lifecycle against plausible multi-volume splits.
- Split only if each proposed volume has an independently substantial thesis and reader transformation.
- Define domain ownership, dependency, and non-overlap rules.
- Record scope that belongs only in examples/labs or adjacent-role references.
- Deliver exactly one volume decision.

## Acceptance criteria

- [ ] Every durable role cluster has an explicit depth estimate.
- [ ] One-book and plausible multi-volume options are compared.
- [ ] The decision is based on learning/reference utility, not product count or inherited structure.
- [ ] Each retained volume has a distinct one-sentence thesis and reader transformation.
- [ ] Domain ownership, dependencies, and non-overlap rules are explicit.
- [ ] Deferred certification artifacts are recorded as a later compatibility gate, not silently invented.
- [ ] `books/book-scope-decision.md` is complete and actionable for Phase 05.

## Verification

- Re-run the acceptance test: if two proposed volumes cannot each sustain distinct theses, merge them.
- Check scope against the adjacent-role boundary.
- Confirm no inherited Alpesh or MLOps structure/content appears.
- Run `npm run validate:publications`.

## Output

- `project-control/roles/forward-deployed-engineer/books/book-scope-decision.md`
- updated `project-control/roles/forward-deployed-engineer/ROLE-STATE.md`

## Handoff

Phase 05 can design the complete book/series architecture without reconsidering volume count unless new evidence contradicts a documented assumption.
