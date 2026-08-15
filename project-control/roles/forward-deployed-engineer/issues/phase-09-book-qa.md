# Phase 09 - Forward Deployed Engineering Whole-Book QA

## Objective

Audit the actual nineteen-chapter manuscript as one book. Compare it against the approved architecture, chapter blueprints, research packs, source/claim registries, learning packs, companion, and running-case dossier. Correct substantive gaps in the canonical files; a passing schema validator alone is not acceptance.

## Required audits

1. **Coverage:** map every blueprint concept, durable/current distinction, failure mode, example, exercise, figure, project handoff, source need, prerequisite, and prohibited move to the manuscript or a documented intentional disposition.
2. **Depth:** reopen compressed prose where a required mechanism, tradeoff, failure response, authority boundary, or worked example is merely named rather than taught.
3. **Duplication:** distinguish intentional reinforcement from redundant explanation; consolidate accidental repetition without breaking prerequisites.
4. **Terminology:** verify the locked role, workflow, evidence, intent, deployment, release, guardrail, authority, evaluation, stabilization, handoff, product-leverage, and portfolio language across all canonical files.
5. **Continuity:** verify chapter openings/closings, Orchid dossier progression `OA-01` through `OA-11`, companion progression, figure references, and forward/back references.
6. **Architecture:** verify five-part progression, objectives, prerequisites, project deliverables, appendices, and non-scope against the approved architecture.
7. **Sources and claims:** verify every material sourced statement resolves, synthesis is labeled, volatile/current facts remain bounded, constructed examples stay fictional, and no blocking `SOURCE GAP` remains.
8. **Series consistency:** verify title/subtitle/authorship, voice, level, chapter metadata, learning-pack warnings, professional boundary, glossary, and front/back matter.
9. **Executable consistency:** verify manuscript descriptions match the runnable companion, test names, commands, failure semantics, evidence limitations, and dossier hashes/state.

## Canonical outputs

- `project-control/roles/forward-deployed-engineer/qa/book-coverage.md` (including the nineteen-chapter blueprint matrix)
- `project-control/roles/forward-deployed-engineer/qa/book-duplication.md`
- `project-control/roles/forward-deployed-engineer/qa/book-consistency.md`
- `project-control/roles/forward-deployed-engineer/qa/book-revision-log.md`
- corrected manuscripts, learning packs, state handoffs, QA records, registries, companion, and front/back matter as required

## Acceptance criteria

- [ ] All nineteen blueprint-to-manuscript mappings have an explicit `PASS`, corrected gap, or justified intentional disposition.
- [ ] No chapter is an outline, compressed checklist, or glossary entry disguised as finished teaching prose.
- [ ] Every required failure mode includes detection or evidence, response, authority, and consequence where the blueprint requires them.
- [ ] The Orchid case and companion form one continuous, internally consistent deployment dossier.
- [ ] Intentional repetition is identified; accidental duplication and terminology drift are corrected.
- [ ] Objective, architecture, figure, source, claim, and chapter-manifest coverage reconcile.
- [ ] All fictional/synthetic cases and non-proof limitations remain explicit.
- [ ] All Phase 09 findings are closed or transferred with a named later-phase owner only when genuinely visual/publication-specific.
- [ ] Publication validation, publication tests, companion tests, Astro build, companion demo/rehearsal, hash verification, and `git diff --check` pass.

## Handoff

Phase 10 receives a content-locked, coverage-audited manuscript and the frozen 38-item figure plan. Phase 10 may change visual implementation and accessibility metadata but must not silently repair unresolved prose architecture.
