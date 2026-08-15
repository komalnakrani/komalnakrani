# Chapter 09 Blueprint — Turn Consequences Into Evaluation Cases

## Purpose and exit capability

Create a versioned evaluation set whose cases, segments, provenance, ambiguity, criteria, coverage, leakage controls, and limits map directly to the behavior contract.

## Prerequisites and non-scope

- Prerequisite: behavior contract, data/context records, and running slice.
- Non-scope: public benchmark survey, universal test-set size, or claim that evaluation coverage equals deployment safety.

## Concepts, skills, and decision models

- Evaluation-case anatomy; scenario versus row; ordinary/edge/rare/adversarial/interaction cases.
- Coverage matrix by clause, segment, data state, mechanism, and failure consequence.
- Provenance, freeze, contamination, evaluator-development split, refresh, retirement.
- Skill: justify what the set can and cannot support.

## Architecture, implementation, and stability

- Companion: evaluation JSON schema, deterministic fixture generator, coverage report, split hash/version, contamination detector.
- Case/evidence schema is `durable`; vendor eval APIs and benchmark suites are `optional/volatile`.

## Scenario and artifact progression

Create `PF-07` evaluation-set card and scenario suite v0.1. Cover long-tail categories, missing measurements, ambiguous photos, misleading listings, stale/empty evidence, critical compatibility, and user correction.

## Cases and bounded use

- `AAE-C001`: missing behavior category.
- `AAE-C005`, `AAE-C006`, `AAE-C011`: provenance and segment lessons with strict task/date limits.
- `AAE-C012`: constructed cases and counts only.

## Failures, disputes, and tradeoffs

Benchmark as product population; random sample as complete coverage; adversarial set as likelihood estimate; tuning/eval contamination; quantity as quality. More fixed cases improve regression detection but invite overfitting and aging.

## Exercise, companion work, and completion evidence

Generate/freeze cases, map every case to a contract clause, detect a leak, and rebuild a clean holdout. Pass when coverage and gaps are both explicit and hashes/versions reproduce the set.

## Figures

- `F09.1`: clause/segment/case coverage matrix; reveals unsupported claims.
- `F09.2`: evaluation-set lifecycle; makes cases versioned engineering assets.

## Evidence, competencies, depth, and handoff

- Claims: `C09.1`–`C09.6`; sources `AAE-S001`, `AAE-S003`, `AAE-S010`, `AAE-S011`, `AAE-S023`, `AAE-S026`, `AAE-S028`, `AAE-S030`, `AAE-S049`, `AAE-S050`, `AAE-S054`.
- Domains: primary `AAE-K02`, `AAE-K04`, `AAE-K06`; secondary `AAE-K08`.
- Depth: major evaluation-design chapter; target 6,500–8,000 words.
- Handoff: Chapter 10 defines consequential criteria, errors, segments, and thresholds for these cases.
- Prohibitions: no benchmark representativeness claim, leakage laundering, case-count guarantee, or unqualified ground truth.
