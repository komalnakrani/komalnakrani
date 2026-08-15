# Chapter 04 Research — Choose the Simplest Adequate Mechanism

## Architecture anchors

- Primary domains: `AAE-K01`, `AAE-K03`, `AAE-K07`
- Dossier milestone: `PF-03`
- Forecast figures: `F04.1`, `F04.2`

## Research question

How should an engineer compare deterministic logic, search, ranking, predictive ML, multimodal representations, generative models, agents, and hybrids without organizing the product around fashion?

## Claim and evidence map

- **C04.1 — Simple rules and pipelines are legitimate baselines and often the correct first mechanism.** `AAE-S008` supports baseline-first engineering; `AAE-S023` supplies task-specific metric distinctions.
- **C04.2 — Mechanisms must be selected against multiple product criteria, not a single model score.** `AAE-S026` supports multi-scenario/multi-metric evaluation; `AAE-S033` makes operational distribution/tail effects visible.
- **C04.3 — Multimodal representation can support retrieval without chat, prompting, or autonomy.** `AAE-S015` supplies representation research and `AAE-S020` supplies a first-party image-search product case.
- **C04.4 — Retrieval and generation solve different problems and create different failure surfaces.** `AAE-S016`, `AAE-S019`, and `AAE-S021` distinguish candidate retrieval, ranking, generated output, product signal, and latency.
- **C04.5 — Agent/tool capability is justified only when bounded action creates task value that a simpler workflow cannot.** `AAE-S044` documents an execution interface; `AAE-S040` identifies excessive-agency risk. These do not establish that agents are usually necessary.

## Decision dimensions

Compare task fit, evidence availability, error consequence, calibratability, interpretability to the user, latency/tail, capacity, cost, privacy, attack surface, operational ownership, provider change, and fallback. The output is a staged experiment ladder, not a vendor shortlist.

## Cases

- `AAE-C002` supplies a non-LLM multimodal mechanism path.
- `AAE-C003` separates retrieval and ranking and exposes implicit-feedback assumptions.
- `AAE-C004` tests shared versus specialized rankers.
- `AAE-C012` must choose a deterministic-plus-retrieval first release and make generation conditional.

## Disputes and limits

No architecture is universally simplest: operational familiarity, existing platforms, data rights, and consequence matter. Benchmark superiority does not imply product superiority. Agents are a specialization and should remain a conditional branch.

## Remaining gaps

No release-blocking gap. Current provider price/performance comparisons are intentionally absent because they would be volatile and belong in versioned labs, not the durable chapter claim map.

## Blueprint constraints

Force a written rejected-alternative table and a cheapest-next-experiment decision. Include one predictive, one retrieval/ranking, one multimodal, one generative, and one agent option without treating them as maturity stages.

## Manuscript prohibitions

Do not rank model families generically, equate more autonomy with sophistication, or make a specific framework/provider the default definition of Applied AI.
