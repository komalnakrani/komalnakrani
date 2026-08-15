# Phase 06 — Forward Deployed Engineering Source and Case-Study Research

## Objective

Create an auditable, chapter-specific research foundation for all nineteen frozen chapters before blueprints or manuscript prose.

## Inputs

- Phase 01 role evidence and adjacent-role boundary
- Phase 05 architecture, competency coverage, project map, and visual forecast
- official standards, documentation, engineering publications, public postmortems, papers, and public case studies

## Work

- Build a structured global source register with source type, version/date, access date, stability, chapter mapping, intended claim use, and limitations.
- Create one focused research pack per chapter; collect only evidence that chapter needs.
- Register public cases with problem, context, constraints, architecture/approach, tradeoffs, failures, verified outcomes, lessons, chapter mapping, and limitations.
- Prefer primary sources for technical/normative claims and clearly label vendor or employer evidence.
- Mark disputes, uncertainty, volatile details, missing evidence, and constructed-case assumptions.
- Do not invent company outcomes, composite anecdotes, or false precision.

## Acceptance criteria

- [ ] All nineteen chapters have research packs.
- [ ] Major planned factual claims map to source IDs.
- [ ] Normative/version-specific claims use official standards or documentation where available.
- [ ] Disputed or context-dependent practices are labeled rather than universalized.
- [ ] Every public case separates verified facts from inference and records limitations.
- [ ] Every chapter has explicit remaining gaps, even if none are release-blocking.
- [ ] No manuscript prose is presented as complete during research.

## Verification

- Validate JSON and all source/case/chapter cross-references.
- Confirm access dates and URL ownership.
- Reject aggregator-only evidence.
- Confirm all architecture chapters 1–19 have exactly one research pack.
- Run `npm run validate:publications` and `git diff --check`.

## Outputs

- `project-control/roles/forward-deployed-engineer/books/forward-deployed-engineering/sources/source-register.json`
- `project-control/roles/forward-deployed-engineer/books/forward-deployed-engineering/sources/chapter-01-research.md` through `chapter-19-research.md`
- `project-control/roles/forward-deployed-engineer/books/forward-deployed-engineering/case-studies/case-study-register.json`
- updated `project-control/roles/forward-deployed-engineer/ROLE-STATE.md`

## Handoff

Phase 07 can build concrete chapter blueprints from cited claims, bounded examples, registered cases, explicit gaps, and the frozen architecture.
