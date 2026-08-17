# Appendix D - Provider-Neutral Companion Guide

## What the companion proves

The Volume 2 companion is a deterministic local implementation of selected Mosaic Desk adaptation and runtime records. It proves that its JavaScript functions and supplied synthetic fixtures behave as asserted by the included tests.

It does not prove:

- that any model was executed or trained;
- that any checkpoint, adapter, quantized model, or deployable package exists;
- that the synthetic data are representative, authorized for a real use, or sufficient;
- that an optimization method improves real behavior;
- that a model, tokenizer, template, adapter, or runtime is compatible outside the fixtures;
- that resource units correspond to hardware, latency, throughput, capacity, energy, or cost;
- that a release, incident, rollback, or migration occurred;
- that product, domain, privacy, security, legal, platform, risk, or release authorities approved anything.

Fields such as `trainingExecuted`, `modelExecuted`, `benchmarkExecuted`, and artifact-creation state are evidence-bearing. Do not remove or invert them to make a demonstration look more complete.

## Commands

From the repository root:

```sh
node --test content/publications/llm-adaptation-and-runtime/companion/tests/*.test.mjs
node content/publications/llm-adaptation-and-runtime/companion/run.mjs
```

The companion uses Node.js built-ins, local JSON, deterministic code, and no provider credential, model download, network call, training framework, or accelerator.

## Artifact map

| Dossier | Directory | Purpose |
| --- | --- | --- |
| MD-09 | `companion/md09/` | frozen baseline, model/tokenizer inspection, adaptation ladder |
| MD-10 | `companion/md10/` | data recipe, curation, duplicate/overlap, split manifests |
| MD-11 | `companion/md11/` | instruction, preference, retention, and control evidence |
| MD-12 | `companion/md12/` | blocked training plan and simulated SFT/PEFT comparisons |
| MD-13 | `companion/md13/` | rejected preference and advanced-method simulations |
| MD-14 | `companion/md14/` | incomplete fail-closed model-system package |
| MD-15 | `companion/md15/` | capacity and serving-frontier simulations |
| MD-16 | `companion/md16/` | release hold, tabletop diagnosis, rollback, and change replay |

The library modules implement the mechanics. The chapter tests define the local failure oracle. The JSON records are committed evidence outputs, not hand-edited success summaries.

## Safe extension rules

An extension should:

1. begin from a named behavior clause and current dossier version;
2. use synthetic or explicitly authorized data only;
3. bind model, tokenizer, template, adapter, runtime, and configuration identities;
4. preserve rejected records, failed candidates, gaps, and unknowns;
5. keep target, retention, language, and control evidence separate;
6. distinguish planned, simulated, executed, and created states;
7. avoid raw sensitive content in logs and artifacts;
8. fail closed on missing identity, authorization, compatibility, or authority;
9. add a failing test before changing a transition;
10. state what the result cannot establish.

Do not add live provider or training calls merely for realism. If an authorized experiment is added in another environment, keep its credentials, restricted data, model artifacts, infrastructure, and raw traces outside this publication repository. Import only the permitted, content-addressed evidence summary and limitations.

## Adding an adaptation method

Define the mechanism hypothesis and distinct residual first. Add its data requirements, artifact tuple, objective, configuration, execution state, resource boundary, target and protected evaluation, alternative explanations, stop rules, rollback consequence, and rejection result. Compare it against no-change and the smallest credible intervention.

## Adding a dataset transform

Give the transform an immutable code/config identity. Preserve source, purpose, rights, record family, accepted/rejected state, reason, prior and resulting digest where permitted, split boundary, and deletion lineage. Re-run overlap, rendering, coverage, retention, and control checks.

## Adding a runtime variant

Bind the exact model-system tuple and workload. Record warmup, request/input/output distribution, concurrency, queue assumptions, memory boundary, percentiles, throughput, errors, saturation, and protected behavior replay. A synthetic calculation should remain labeled synthetic; a local benchmark should remain bounded to its hardware and method.

## Adding an evaluator

State the criterion, population, reference or rubric, judge identity, prompt/configuration, calibration, disagreement, bias risks, coupling, cost, privacy, and what the evaluator cannot establish. Preserve raw content only when authorized. Do not promote model-judge agreement into domain truth or formal approval.

## Reproducibility and proof records

When companion output changes, record the source identity, command, environment boundary, tests, output digest, prior digest, reason, reviewer, and limitations. A deterministic rerun supports local reproducibility only. It does not establish external validity or production readiness.
