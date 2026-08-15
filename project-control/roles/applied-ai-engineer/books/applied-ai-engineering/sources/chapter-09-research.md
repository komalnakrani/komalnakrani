# Chapter 09 Research — Turn Consequences Into Evaluation Cases

## Architecture anchors

- Primary domains: `AAE-K02`, `AAE-K04`, `AAE-K06`
- Dossier milestone: `PF-07`
- Forecast figures: `F09.1`, `F09.2`

## Research question

How can a behavior contract become a versioned evaluation set that represents ordinary, edge, rare, adversarial, segment, and changing use without contaminating development?

## Claim and evidence map

- **C09.1 — Evaluation cases need provenance, composition, intended use, and limitations.** `AAE-S010` and `AAE-S011` support dataset documentation applied to evaluation assets.
- **C09.2 — A metric API does not define the evaluation population or product consequence.** `AAE-S023` supplies metric machinery; `AAE-S001` and `AAE-S054` require contextual mapping.
- **C09.3 — Holistic evaluation uses multiple scenarios and metrics while still remaining benchmark evidence.** `AAE-S026` supplies a transparent framework and limitations.
- **C09.4 — Segment analysis can reveal failures hidden by aggregate quality.** `AAE-S049` and `AAE-S050` provide distinct official and peer-reviewed examples.
- **C09.5 — Human-AI behavior and model change require interaction scenarios, not static model inputs alone.** `AAE-S003` and `AAE-S030` support interaction and integration testing.
- **C09.6 — Generative evaluation guidance favors task-specific continuous cases but is provider-authored.** `AAE-S028` supports workflow; claims about coverage remain application-owned.

## Evaluation-set card

Record behavior clauses, population, segments, sources, permissions, case construction, expected criteria, ambiguity, reviewer needs, split/freeze rules, leakage checks, coverage, adversarial cases, version, refresh trigger, prohibited reuse, and known gaps.

## Cases

- `AAE-C005`, `AAE-C006`, and `AAE-C011` show provenance, intersectional coverage, and operating-context limits.
- `AAE-C001` shows a missing behavior category despite existing release evaluation.
- `AAE-C012` requires compatibility ambiguity, long-tail parts, missing measurements, misleading listings, and no-evidence cases.

## Disputes and limits

Coverage is an argument, not a percentage detached from a population. Random samples can miss rare severe failures; adversarial cases can overrepresent implausible threats. Evaluation sets age and can become tuning targets.

## Remaining gaps

No release-blocking gap. Phase 07 must define synthetic Patchwork segments and case counts as teaching choices, not estimates of a real catalog.

## Blueprint constraints

Every case must map to a behavior clause and segment or explicit general path. Include a contamination event requiring a new held-out set rather than relabeling the leak.

## Manuscript prohibitions

Do not call a public benchmark representative of the product, equate more cases with adequate coverage, or reuse tuning examples as clean release evidence.
