# Appendix C - Provider-Neutral Companion Guide

The Volume 1 companion is a deterministic, local teaching system for Mosaic Desk. It uses synthetic fixtures and Node.js built-ins. It makes no network or model call, requires no secret, and performs no external effect.

## What the companion proves

When the tests pass, they prove that the committed code satisfies the asserted invariants for the committed fixtures and runtime. Examples include:

- the responsibility and language-task contracts contain required states and owners;
- baseline manifests bind the expected behavior-facing configuration;
- message trust zones and one-component ablations behave as specified;
- typed proposals pass or fail layered validation explicitly;
- context packing records omissions and stress states;
- retrieval eligibility precedes relevance and preserves source identity;
- joint evaluation keeps retrieval and generation judgments separate;
- case coverage, leakage injection, and declared gaps remain visible;
- error and judge records preserve consequence and disagreement;
- experiments freeze controls and expose segment regressions;
- release, signal, migration, and rollback records follow bounded transitions.

Passing tests do not prove live model capability, factual correctness, real source authority, production population coverage, multilingual quality, evaluator validity, security, privacy, accessibility, latency, cost, capacity, adoption, release readiness, or organizational authorization.

## Commands

Run from the repository root:

```sh
node --test content/publications/llm-behavior-engineering/companion/tests/*.test.mjs
node content/publications/llm-behavior-engineering/companion/run.mjs
```

The first command executes the full deterministic invariant suite. The second produces the synthetic dossier summary. Preserve both command, runtime version, source revision, output, and failure state in a review record.

## Artifact map

- `contracts/` contains the role boundary and language-task contract.
- `mechanics/` contains token and template teaching fixtures.
- `selection/` contains model/access candidates and hard gates.
- `baseline/` contains the replayable configuration and explicit behavior fixtures.
- `messages/` contains trust zones, adapter mappings, adversarial data, and ablation.
- `output/` contains the typed proposal schema, invalid fixtures, and terminal states.
- `context/` contains budgets, omissions, provenance assembly, and stress cases.
- `retrieval/` contains evidence-path, source authority, candidate, filter, and reranking traces.
- `evaluation/` contains component and joint cases, coverage, taxonomy, judge, and disagreement fixtures.
- `experiments/` contains the preregistered one-change comparison and disposition.
- `release/` contains readiness, minimized signals, staged exposure, diagnosis, migration replay, and adaptation referral.
- `lib/` contains deterministic validation and transformation functions.
- `tests/` contains acceptance invariants.

## Safe extension rules

1. Preserve the language-task and authority contract before changing an adapter.
2. Add a new fixture and expected failure before weakening a validator.
3. Keep raw input, evidence identity, model proposal, deterministic validation, human review, and external effect as separate stages.
4. Make provider-specific message mapping explicit and versioned.
5. Record the actual tokenizer/template and do not treat the teaching tokenizer as a provider estimate.
6. Keep permission and freshness enforcement outside model instruction compliance.
7. Keep typed output separate from factual and authority validation.
8. Preserve abstain, escalate, degraded, and fail-closed paths.
9. Do not add secrets or customer content to fixtures, snapshots, or logs.
10. Keep network and effectful adapters opt-in and outside the default test path.

## Adding a provider adapter

A provider adapter should implement the stable language-model boundary while recording provider/model identity, message mapping, request configuration, response identity, usage fields, error classification, retry policy, and observed limitations. It must not silently rewrite message roles or discard citation/source handles.

The local deterministic fixture remains the behavior and failure oracle. A provider response is observed evidence for that request and configuration, not a replacement for the contract or a claim of provider equivalence.

## Adding retrieval

Keep ingestion, chunk identity, candidate formation, eligibility filters, deduplication, reranking, assembly, and citation transport separately inspectable. Add cases for missing, stale, conflicting, unauthorized, wrong-family, and duplicate evidence. A new embedding or reranker must cross the same frozen cases and protected states.

## Adding an evaluator

State the claim the evaluator may judge. Add qualified anchors, blinded-order checks where relevant, disagreement fixtures, abstention behavior, version identity, and calibration limitations. Do not use a model grader as formal authority or domain truth.

## Reproducibility and proof records

Record the Node.js version, repository revision or source hash, exact command, fixture identities, test count, result, and output digest where a review depends on the run. If the environment changes, rerun rather than assuming prior evidence transfers.

The companion is intentionally modest. Its value is not simulated realism; it is the ability to expose the behavior contract, failure path, evidence identity, and unsupported claim without requiring a paid key or live system.
