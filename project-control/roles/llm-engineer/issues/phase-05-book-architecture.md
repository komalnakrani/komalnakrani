# [LLM Engineer] Design the two-volume series architecture

## Objective

Create an executable learning architecture for both LLM Engineer volumes, including reader promises, prerequisites, capability exits, provisional publication domains, chapter existence tests, competency coverage, project progression, companion boundaries, case-study requirements, terminology, cross-references, versioning, and a final visual forecast that obeys the user's ImageGen raster direction.

## Inputs

- accepted Phase 01 evidence and boundaries
- accepted Phase 04 two-volume decision
- Komal publishing foundation and originality rules
- user visual direction: colorful, crisp, artistic 3D/realistic ImageGen raster work; short essential labels where needed; no SVG; Komal identity only from original-photo references when pedagogically useful

## Work

- define the series and per-volume theses, audiences, prerequisites, exit capabilities, non-scope, parts, chapters, projects, and appendices;
- give every chapter one meaningful professional job and a dossier artifact;
- design one original capstone that has a complete Volume 1 endpoint and an evidence-gated Volume 2 continuation;
- add contrasting satellite cases and transfer obligations;
- map provisional publication domains across all chapters without presenting them as certification objectives;
- define provider-neutral, deterministic companion defaults and optional-resource boundaries;
- specify case-study classes for Phase 06;
- lock terminology, cross-reference, and edition/version conventions;
- forecast only meaning-bearing visuals and define ImageGen, raster, label, identity, accessibility, provenance, and QA rules.

## Acceptance criteria

- [x] both volumes have title, subtitle, thesis, audience, exit capability, non-scope, parts, chapters, projects, and appendices
- [x] Volume 1 contains 16 chapters and ends with a complete release/model-change/adaptation-handoff capability
- [x] Volume 2 contains 17 chapters and starts from a frozen evidence baseline
- [x] every chapter passes an explicit existence audit and changes a Mosaic dossier artifact
- [x] 12 provisional publication domains map across both books with no false certification claim
- [x] 16 `MD-*` milestones preserve one artifact/evidence lineage
- [x] provider-managed and open-weight paths are both valid; expensive compute is not a default requirement
- [x] companions remain deterministic and secret-free by default
- [x] case-study research requirements are primary-source and limitation aware
- [x] terminology and version identity distinguish model, checkpoint, tokenizer, adapter, prompt/context, evaluator, and runtime
- [x] 66 explanatory figures are forecast with learning decisions and dossier relationships
- [x] all final images are ImageGen-generated/edited raster; SVG is prohibited
- [x] short essential labels are allowed and require verification
- [x] mascot use is optional, pedagogically justified, and identity-preserving from `/Applications/ServBay/www/komal/mascot`; generic substitutes are prohibited

## Verification

```bash
python3 - <<'PY'
import csv
from pathlib import Path
p = Path('project-control/roles/llm-engineer/books/llm-engineering/competency-to-chapter.csv')
rows = list(csv.DictReader(p.open()))
assert len(rows) == 12
assert {r['domain_id'] for r in rows} == {f'LLME-K{i:02d}' for i in range(1, 13)}
print({'domains': len(rows)})
PY
rg -c '^\| V1-F' project-control/roles/llm-engineer/books/llm-engineering/visual-forecast.md
rg -c '^\| V2-F' project-control/roles/llm-engineer/books/llm-engineering/visual-forecast.md
rg -n 'ImageGen|no SVG|mascot|original-photo|short essential labels' project-control/roles/llm-engineer/books/llm-engineering/visual-forecast.md
rg -n '^### MD-[0-9]{2}' project-control/roles/llm-engineer/books/llm-engineering/project-map.md
```

Expected counts: 12 domains, 32 Volume 1 figures, 34 Volume 2 figures, and 16 project milestones.

## Outputs

- `project-control/roles/llm-engineer/books/llm-engineering/architecture.md`
- `project-control/roles/llm-engineer/books/llm-engineering/competency-to-chapter.csv`
- `project-control/roles/llm-engineer/books/llm-engineering/project-map.md`
- `project-control/roles/llm-engineer/books/llm-engineering/visual-forecast.md`

## Dependencies

- Phase 06 must verify all volatile model, platform, library, performance, security, and governance claims before prose.
- Phase 10 may create visual assets only after manuscript claims and insertion anchors stabilize.
- Abhyaas standard/objective mapping remains a later independent reconciliation.

## Handoff

Phase 06 should build a series source register, chapter-specific research packs, and a case-study register. Start with Volume 1 Chapters 1–4 and preserve `LLME-CLM-*`, `LLME-K*`, and `MD-*` traceability. Do not generate chapter prose, images, or SVG placeholders during the research gate.
