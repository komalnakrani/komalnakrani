# Chapter 05 Blueprint — Make Task Data Representative

## Purpose and exit capability

Build a task data/evaluation substrate whose population, provenance, permission, labels, segments, leakage, limits, and refresh triggers are visible enough to support or reduce the behavior claim.

## Prerequisites and non-scope

- Prerequisite: selected mechanism portfolio and behavior clauses.
- Non-scope: enterprise data-platform ownership, universal fairness certification, full annotation operations, or legal/privacy approval.

## Concepts, skills, and decision models

- Representativeness relative to task/time/population/consequence; missingness and unknown populations.
- Provenance, permission, composition, label process, segment intersection, leakage routes, split/freeze/refresh.
- Structural versus semantic validation; documentation versus verified fitness.
- Skill: reduce scope when data cannot support a promised behavior.

## Architecture, implementation, and stability

- Durable artifacts: data card, segment register, leakage map, validation contract.
- Companion: deterministic synthetic catalog/query/image-feature generator with seeds, data-card metadata, schema checks, duplicate/leakage detector.
- Documentation templates are `durable patterns`; library validators are `replaceable implementations`.

## Scenario and artifact progression

Create `PF-04` data card and sampling/segment plan v0.1. Expose long-tail category gaps, seller-label bias, ambiguous images, missing dimensions, duplicate listings, and a contaminated split; restrict unsupported compatibility claims.

## Cases and bounded use

- `AAE-C005`: domain label provenance and documentation, not clinical transfer.
- `AAE-C006` and `AAE-C011`: segment evidence with historical/task limits.
- `AAE-C007`: upstream data work and cascades.
- `AAE-C012`: synthetic assumptions only.

## Failures, disputes, and tradeoffs

Schema equals quality; label equals ground truth; random sample equals coverage; synthetic data equals real distribution; card equals permission. More data can deepen bias, leakage, privacy, and maintenance cost.

## Exercise, companion work, and completion evidence

Generate/freeze a dataset, identify leakage and segment gaps, rebuild a clean split, and write prohibited uses. Pass when every evaluation/development partition, label source, permission assumption, limitation, and refresh trigger is versioned.

## Figures

- `F05.1`: population/sample/label/segment composition; reveals unsupported groups.
- `F05.2`: leakage path map; separates training, tuning, evaluator development, and release evidence.

## Evidence, competencies, depth, and handoff

- Claims: `C05.1`–`C05.6`; sources `AAE-S009`, `AAE-S010`, `AAE-S011`, `AAE-S013`, `AAE-S014`, `AAE-S015`, `AAE-S020`, `AAE-S038`, `AAE-S039`, `AAE-S041`, `AAE-S049`, `AAE-S050`.
- Domains: primary `AAE-K04`, `AAE-K06`, `AAE-K08`.
- Depth: major data/evidence chapter; target 6,500–8,000 words.
- Handoff: Chapter 6 turns permitted evidence into a runtime context/retrieval path.
- Prohibitions: no unqualified ground truth, schema-as-representativeness, universal fairness claim, or real-world interpretation of synthetic distributions.
