# Phase 07 — Applied AI Engineering Chapter Blueprints

## Objective

Convert the frozen architecture and verified Phase 06 evidence into a complete, non-duplicative writing and implementation specification for all 21 chapters.

## Inputs

- `books/applied-ai-engineering/architecture.md`
- `books/applied-ai-engineering/competency-to-chapter.csv`
- `books/applied-ai-engineering/project-map.md`
- `books/applied-ai-engineering/visual-forecast.md`
- `books/applied-ai-engineering/sources/source-register.json`
- `books/applied-ai-engineering/sources/chapter-01-research.md` through `chapter-21-research.md`
- `books/applied-ai-engineering/case-studies/case-study-register.json`

## Required blueprint fields

Every `blueprints/chapter-XX.md` must define:

1. frozen chapter number/title, purpose, and reader capability at exit;
2. prerequisites and explicit adjacent-role/non-scope boundaries;
3. concepts, durable principles, professional skills, and decision models;
4. architecture/implementation content and current-tool examples labeled by stability;
5. Patchwork Find movement, `PF-*` artifacts, and version change;
6. registered public/satellite cases and bounded use;
7. failure modes, common mistakes, disputes, and tradeoffs;
8. exercise, implementation/lab work, and observable completion evidence;
9. exactly the two frozen figure IDs with teaching purpose;
10. Phase 06 claim/source mapping and limitations;
11. Komal domain coverage, depth class, and justified word range;
12. handoff to the next chapter/final dossier and inherited manuscript prohibitions.

## Work

- Build one actionable blueprint per frozen chapter.
- Assign every concept/model a canonical chapter; later chapters add only deltas and cross-references.
- Specify one provider-neutral local companion progression across Chapters 5–20.
- Preserve version/volatility warnings for standards, research findings, vendor material, models, APIs, and tools.
- Keep Patchwork Find explicitly fictional and synthetic.
- Include a mandatory non-LLM/multimodal path, a predictive transfer path, high-consequence human authority, and bounded generative/tool behavior.
- Reject decorative sections, generic career advice, invented results, and prose that does not advance the exit capability or dossier.

## Acceptance criteria

- [x] Exactly 21 chapter blueprints exist and match frozen title/order.
- [x] Every required field is present and actionable.
- [x] Every chapter owns a distinct professional job and advances one coherent dossier.
- [x] All Phase 06 source/case IDs resolve and limitations are preserved.
- [x] All 42 frozen figure IDs are assigned exactly once with a teaching purpose.
- [x] All 11 Komal domains have sufficient depth and no silent gap.
- [x] The local companion is one end-to-end system, not disconnected examples or provider tutorials.
- [x] Word ranges sum to a credible manuscript target without padding.
- [x] Chapter prerequisites and handoffs form one continuous evidence loop.

## Verification

- Cross-check title/order/domains against architecture and competency CSV.
- Cross-check all 42 figures against the visual forecast with no duplicate or missing IDs.
- Cross-check source/case/claim IDs against Phase 06 files and registers.
- Validate `PF-*` progression, prerequisites, handoffs, word ranges, modality balance, and companion continuity.
- Run publication validation/tests and `git diff --check`.

## Outputs

- `project-control/roles/applied-ai-engineer/books/applied-ai-engineering/blueprints/chapter-01.md` through `chapter-21.md`
- `project-control/roles/applied-ai-engineer/books/applied-ai-engineering/blueprints/blueprint-verification.md`
- updated `project-control/roles/applied-ai-engineer/ROLE-STATE.md`

## Handoff

Phase 08 writes the original manuscript and executable companion only from the frozen architecture, verified research, and approved blueprints.
