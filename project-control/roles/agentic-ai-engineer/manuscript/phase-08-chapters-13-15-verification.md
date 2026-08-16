# Phase 08 Chapters 13-15 Verification

## Coverage

- Manuscripts: 3/3, 28,002 words
- Frozen gates: Chapter 13 `10,001/10,000-12,000`; Chapter 14 `10,000/10,000-12,000`; Chapter 15 `8,001/8,000-10,000`
- Claims: 6/6 (`AGE-BCLM-025` through `030`)
- Source assignments: 19 across 17 unique sources; case assignments: 12
- Dossier: `AR-09 v1.0.0`, `AR-10 v1.0.0`, `AR-11 v0.1.0`
- Learning/state/QA: 3/3 each; figures: 6, exactly 2/chapter, no Ch13-15 assets
- Companion: 3 fixtures, 1 deterministic library, 9 tests
- Originality: zero exact duplicate paragraphs, cross-target 14-word shingles, or target-to-15-chapter-corpus 18-word shingles

## Boundaries

- Layered claim evidence never becomes a universal score, current ranking, production claim, or release authority.
- Twelve attack/fault cases and disabled controls demonstrate fixture containment only, never security/safety assurance.
- Prompts, responses, credentials, tool payloads, user records, and chain-of-thought remain excluded by default.
- Trace links are observations and can be missing/misleading; authoritative state/effects and uncertainty remain.
- Security, safety, privacy, legal, labor, platform, evaluation, and domain authorities retain formal decisions.

## Validation

All checks passed on 2026-08-16:

- JSON parsing passed for publication, dossier, and manifest
- new companion tests: 9/9; combined Agentic tests through Chapter 15: 42/42
- publication validation and full `npm run check` passed
- build: 36 pages; built-site references: 630
- exactly 2 PNG anchors/chapter; zero Chapter 13-15 assets created
- zero forbidden Unicode dashes; scoped `git diff --check` passed

Root owns six pending ImageGen PNGs.
