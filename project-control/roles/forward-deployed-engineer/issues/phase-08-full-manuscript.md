# Phase 08 — Forward Deployed Engineering Full Manuscript Production

## Objective

Write the complete original nineteen-chapter manuscript and provider-neutral executable companion from the approved blueprints and research. Outlines do not satisfy this issue.

## Execution units

Create and close child issues in this order:

1. Chapters 1–3 — role, customer entry, and current workflow
2. Chapters 4–6 — outcome, safe scope, and system boundaries
3. Chapters 7–10 — contracts, environment, bounded AI, and governance
4. Chapters 11–14 — vertical slice, verification, observability, release/recovery
5. Chapters 15–17 — rollout, stabilization, adoption, and handoff
6. Chapters 18–19 plus front/back matter draft — product leverage and portfolio leadership

The root issue remains open until every manuscript, learning, state, and companion file exists and passes immediate chapter QA.

## Chapter requirements

- Write deeply and professionally from the approved blueprint and research pack.
- Explain why, tradeoffs, failure modes, role/authority boundaries, durable principles, and current tools distinctly.
- Use realistic but explicitly fictional/synthetic examples and cross-references.
- Insert explicit figure placeholders using the frozen IDs.
- Mark an exact unsupported research need as `SOURCE GAP:` and resolve it before accepting the chapter.
- Create separate conceptual/scenario questions, exercises, optional MCQs, and advanced challenges marked `NOT FOR LIVE CERTIFICATION BANK`.
- Create `chapters/state/chapter-XX-state.md` with locked concepts/terms, used examples/cases, non-repeat claims, figures, project progress, gaps, and next-chapter assumptions.
- Perform immediate technical, source, terminology, repetition, boundary, prerequisite, failure-mode, example, figure, and continuity QA.

## Canonical outputs

- `content/publications/forward-deployed-engineering/publication.json`
- `content/publications/forward-deployed-engineering/chapters/*.mdx`
- `content/publications/forward-deployed-engineering/learning/*.md`
- `content/publications/forward-deployed-engineering/chapters/state/*.md`
- `content/publications/forward-deployed-engineering/companion/`
- publication source, claim, figure, and errata registries

## Acceptance criteria

- [ ] All nineteen actual chapter manuscripts exist; none is an outline disguised as prose.
- [ ] All nineteen learning packs and state handoffs exist.
- [ ] Every material claim resolves through the production source/claim registries.
- [ ] Every frozen figure has a correctly placed placeholder.
- [ ] The companion is runnable locally without paid services or secrets.
- [ ] Orchid and constructed satellite cases remain clearly fictional.
- [ ] No unresolved blocking `SOURCE GAP` remains.
- [ ] Immediate chapter QA is recorded for all chapters.
- [ ] Full publication validation, tests, build, companion tests, and diff checks pass.

## Handoff

Phase 09 performs whole-book coverage, duplication, terminology, continuity, architecture, source, and series consistency QA on the actual finished manuscript.
