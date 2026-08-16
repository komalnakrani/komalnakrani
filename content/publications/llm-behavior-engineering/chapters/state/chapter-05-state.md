# Chapter 05 State - Establish a Reproducible Baseline

- Status: complete manuscript draft; immediate QA recorded separately.
- Dossier milestone: `MD-03` baseline opened.
- Dossier artifacts: canonical run manifest, common result states, raw synthetic evidence references, stable identity hash, replay instructions, nondeterminism/unknown register, baseline disposition.
- Production claims: `CLM-013` through `CLM-015` map exactly to `V1-C05-CL01` through `V1-C05-CL03`.
- Primary case: none; all Mosaic replays are constructed deterministic fixtures with no production outcome.
- Figure anchors: `V1-F05.1`, `V1-F05.2`; assets pending root ImageGen production.
- Companion: `baseline/mosaic-baseline-manifest.json`, result fixtures, and `baseline.mjs`; four Chapter 5 tests.

## Locked terminology

Task identity, request identity, model-system identity, execution identity, evidence identity, pinned, changeable, not observable, trial, variation, deterministic test double, raw evidence, evaluator version, baseline disposition.

## Managed/open-weight identity

Managed paths record exposed identifiers/settings/metadata and explicit provider-controlled unknowns. Open-weight paths additionally pin artifact integrity, tokenizer, template, precision, runtime, kernels, drivers, hardware, and serving configuration. Neither path receives a determinism or quality guarantee from a complete manifest.

## Non-repeat instruction

Later chapters use the baseline identity and result states. They do not treat a seed, temperature zero, model alias, screenshot, or deterministic fixture as live-model-quality evidence.

## Exact next chapter action

Create the semantic message contract and change one instruction module while preserving the baseline, trust classifications, authorization-before-assembly rule, and effect-free proposal boundary.
