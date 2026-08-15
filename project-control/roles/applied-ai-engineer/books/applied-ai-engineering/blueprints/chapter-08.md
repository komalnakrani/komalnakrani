# Chapter 08 Blueprint — Build an Inspectable Vertical Slice

## Purpose and exit capability

Implement the smallest real end-to-end behavior path that succeeds, abstains, fails safely, exposes evidence, and runs locally without provider secrets.

## Prerequisites and non-scope

- Prerequisite: `PF-05` contracts and boundaries.
- Non-scope: production-scale launch, general web-development tutorial, framework endorsement, or complete UI polish.

## Concepts, skills, and decision models

- Vertical versus horizontal slice; inspectable state; stable schemas; untrusted-output handling.
- Timeouts, retries, idempotency, partial results, feature/config control, trace IDs, deterministic test doubles.
- Unit, contract, integration, and failure-path checks before task evaluation.
- Skill: prove behavior at every boundary rather than demo the happy path.

## Architecture, implementation, and stability

- Companion: synthetic request -> permission -> retrieval/ranking -> compatibility policy -> structured result -> interface response -> event/trace.
- Deterministic provider test double is `stable reference`; external adapters and framework syntax are `optional/volatile`.

## Scenario and artifact progression

Create `PF-06` running slice v0.1 with repository map, schemas, validators, feature control, abstention/fallback, trace IDs, and tests. It must reject partial unvalidated ranking output.

## Cases and bounded use

- `AAE-C002`: shape of multimodal production path, not implementation copy.
- `AAE-C009`: schema constraint plus semantic/effect limitations.
- `AAE-C010`: readiness questions across layers.
- `AAE-C012`: synthetic execution and controlled failures.

## Failures, disputes, and tradeoffs

Notebook as slice; live-provider dependency; untyped output; silent partial result; unsafe retries; missing failure states. Inspectability may add explicit code but reduces hidden framework behavior.

## Exercise, companion work, and completion evidence

Build/run five deterministic scenarios: success, abstention, invalid output, dependency timeout, authorization failure. Pass when tests assert schema, policy, state, trace, effect absence, and recovery behavior.

## Figures

- `F08.1`: end-to-end vertical trace; defines the exact slice and evidence at each hop.
- `F08.2`: structured-result anatomy; prevents free-form output from becoming authority.

## Evidence, competencies, depth, and handoff

- Claims: `C08.1`–`C08.5`; sources `AAE-S005`, `AAE-S007`, `AAE-S009`, `AAE-S034`, `AAE-S037`, `AAE-S043`, `AAE-S044`, `AAE-S048`, `AAE-S052`.
- Domains: primary `AAE-K05`, `AAE-K07`, `AAE-K08`; secondary `AAE-K04`.
- Depth: major implementation chapter; target 7,000–8,500 words.
- Handoff: Chapter 9 builds representative cases around this real behavior.
- Prohibitions: no notebook-as-production, secret-required default, generic retry, or invalid output driving a product/tool effect.
