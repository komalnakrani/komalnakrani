# Phase 06 — Applied AI Engineering Source and Case-Study Research

## Objective

Create an auditable, chapter-specific research foundation for all 21 frozen chapters before blueprints or manuscript prose.

## Inputs

- Phase 01 role evidence and adjacent-role boundary
- Phase 05 architecture, competency map, project dossier, and visual forecast
- primary standards, documentation, research papers, official engineering publications, incident reports, evaluations, and public cases

## Work

- Build a structured global source register with source type, version/date, access date, stability, chapter mapping, claim use, and limitations.
- Create exactly one focused research pack per frozen chapter; collect only evidence that chapter needs.
- Register public cases with context, constraints, approach, reported facts, verified outcomes, allowed inference, tradeoffs/failures, lessons, chapter mapping, and limitations.
- Prefer primary sources for technical and normative claims; label vendor and employer evidence explicitly.
- Preserve disputes, uncertainty, evaluator limitations, benchmark limits, volatile implementation details, and constructed-case assumptions.
- Include non-LLM, predictive, retrieval/ranking, multimodal, generative, and bounded agent/tool evidence at the depth required by the architecture.
- Do not invent outcomes, quotes, incidents, measured results, company practices, or false precision.

## Acceptance criteria

- [x] All 21 frozen chapters have exactly one research pack.
- [x] Major planned factual claims map to valid source IDs and every registered source is used.
- [x] Normative/version-specific claims use official standards, documentation, or primary research where available.
- [x] Disputed, context-dependent, and volatile practices are labeled rather than universalized.
- [x] Every public case separates reported fact, allowed inference, outcome, and limitation.
- [x] Every chapter records remaining gaps, including an explicit “none release-blocking” disposition where justified.
- [x] Mechanism and modality coverage cannot collapse into LLM/agent-only research.
- [x] No manuscript prose is represented as complete during research.

## Verification

- Validate JSON and all source/case/chapter cross-references.
- Confirm access dates, primary ownership, URL health, duplicates, and aggregator exclusion.
- Confirm architecture chapters 1–21 each have one and only one research pack.
- Confirm claim IDs are unique and every source/case reference resolves.
- Confirm all 11 competency domains and all 12 `PF-*` milestones receive research support.
- Run `npm run validate:publications` and `git diff --check`.

## Outputs

- `project-control/roles/applied-ai-engineer/books/applied-ai-engineering/sources/source-register.json`
- `project-control/roles/applied-ai-engineer/books/applied-ai-engineering/sources/chapter-01-research.md` through `chapter-21-research.md`
- `project-control/roles/applied-ai-engineer/books/applied-ai-engineering/case-studies/case-study-register.json`
- updated `project-control/roles/applied-ai-engineer/ROLE-STATE.md`

## Handoff

Phase 07 may create detailed chapter blueprints from cited claims, bounded examples, registered cases, explicit gaps, frozen competencies, dossier milestones, and forecast figures.
