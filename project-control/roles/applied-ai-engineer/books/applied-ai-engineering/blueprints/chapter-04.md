# Chapter 04 Blueprint — Choose the Simplest Adequate Mechanism

## Purpose and exit capability

Compare deterministic rules, search, ranking, predictive ML, multimodal representation, generation, bounded agents, and hybrids against task evidence and constraints; select the cheapest experiment and preserve rejected alternatives.

## Prerequisites and non-scope

- Prerequisite: behavior contract and authority map.
- Non-scope: comprehensive algorithm survey, vendor/model leaderboard, procurement decision, deep LLM optimization, or agent-platform design.

## Concepts, skills, and decision models

- Mechanism ladder without maturity implication; baseline and hybrid composition.
- Tradeoff surface: task quality, consequence, data, calibration, latency, tail, cost, privacy, attack surface, operation, change.
- Experiment ladder; option value and reversibility; conditional autonomy test.
- Skill: explain why a more capable model may be a worse product mechanism.

## Architecture, implementation, and stability

- Durable examples: rules, lexical retrieval, simple ranker/classifier, multimodal embeddings, structured generation, confirmed tool draft.
- Specific models, APIs, frameworks, and prices are `volatile/replaceable`.
- Companion: implement deterministic and retrieval baselines behind a stable candidate interface; provider adapter remains optional.

## Scenario and artifact progression

Create `PF-03` mechanism portfolio and experiment ladder v0.1. Patchwork starts with deterministic incompatibility filters plus multimodal/hybrid retrieval and ranking. Explanation generation and seller-question tooling remain gated experiments.

## Cases and bounded use

- `AAE-C002`: non-LLM multimodal search architecture.
- `AAE-C003`: retrieval/ranking/personalization stages and proxy limits.
- `AAE-C004`: specialized versus shared ranker tradeoff.
- `AAE-C012`: constructed choice under compatibility consequence.

## Failures, disputes, and tradeoffs

Benchmark winner equals product choice; agent as sophistication badge; LLM everywhere; ignoring deterministic controls; feature parity across mechanisms. Simplicity is contextual—an unfamiliar “simple” component may be operationally complex.

## Exercise, companion work, and completion evidence

Score six mechanisms, reject at least two, build two local baselines, and specify the next discriminating experiment. Pass when selection cites task/segment/operational evidence and generation/autonomy can still fail the gate.

## Figures

- `F04.1`: mechanism decision ladder; selects least adequate complexity.
- `F04.2`: multi-dimensional tradeoff frontier; replaces universal “best model.”

## Evidence, competencies, depth, and handoff

- Claims: `C04.1`–`C04.5`; sources `AAE-S008`, `AAE-S015`, `AAE-S016`, `AAE-S019`, `AAE-S020`, `AAE-S021`, `AAE-S023`, `AAE-S026`, `AAE-S033`, `AAE-S040`, `AAE-S044`.
- Domains: primary `AAE-K01`, `AAE-K03`, `AAE-K07`; secondary `AAE-K08`.
- Depth: major mechanism judgment chapter; target 6,500–8,000 words.
- Handoff: Chapter 5 tests whether task data can support the selected first path.
- Prohibitions: no generic mechanism ranking, mandatory agent, timeless provider comparison, or benchmark-to-product leap.
