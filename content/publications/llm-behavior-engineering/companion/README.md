# LLM Behavior Engineering deterministic companion

This companion supports the first fifteen chapters with local, provider-neutral, synthetic artifacts. It makes no model call, needs no secret, and does not simulate a production outcome.

- `contracts/mosaic-responsibility-charter.json` records the Chapter 1 system/evidence/authority boundary.
- `contracts/mosaic-language-task-contract.json` records the Chapter 2 task, states, clauses, segments, non-goals, and owners.
- `mechanics/mosaic-token-fixtures.json` supplies Chapter 3 synthetic messages, template budgets, and two deliberately simple pedagogical tokenizers.
- `selection/mosaic-access-candidates.json` supplies the Chapter 4 hard-gate, responsibility, rejection, and migration-seam fixture.
- `baseline/` supplies the Chapter 5 complete run manifest and explicit success/failure-state fixtures.
- `messages/` supplies the Chapter 6 semantic trust-zone contract, two adapter mappings, adversarial data, and one-component ablation.
- `output/` supplies the Chapter 7 typed proposal schema, invalid fixtures, layered validation, and explicit terminal states.
- `context/` supplies the Chapter 8 finite teaching-unit ledger, trust-aware packing policy, omission trace, and stress states.
- `retrieval/` supplies the Chapter 9 evidence-path decision, source authority/permission units, and eligibility-before-relevance contract.
- `retrieval/mosaic-retrieval-pipeline.json` supplies the Chapter 10 frozen corpus/chunk identity and lexical, dense, hybrid, filter, deduplication, and reranking trace.
- `context/mosaic-provenance-assembly.json` supplies the Chapter 11 provenance envelopes, citation handles, state junction, and bounded assembly scenarios.
- `evaluation/` supplies the Chapter 12 component-plus-joint case evidence, metric questions, hard failures, and causal diagnoses.
- `evaluation/mosaic-evaluation-set.json` supplies the Chapter 13 population statement, provenance-rich cases, family-aware splits, leakage injection, coverage matrix, and declared gaps.
- `evaluation/mosaic-error-taxonomy.json` supplies the Chapter 14 consequence-aware taxonomy, judge stack, order/verbosity bias fixture, credible anchor, and retained disagreements.
- `experiments/` supplies the Chapter 15 preregistered one-variable comparison, paired raw transitions, visible segment/tail regressions, confounded alternative, and disposition.
- `lib/` validates contracts and produces deterministic token/template traces.
- `tests/` proves the chapter acceptance invariants.

Run:

```bash
node --test content/publications/llm-behavior-engineering/companion/tests/*.test.mjs
node content/publications/llm-behavior-engineering/companion/run.mjs
```

The tokenizers are teaching fixtures, not replicas of any provider or open-weight model tokenizer. Their purpose is to prove that representation and length depend on the actual tokenizer and template. They cannot predict quality.

The access, baseline, and message artifacts validate decision and software-contract mechanics only. Their candidate records, outputs, latency/cost fields, and attack handling are synthetic. They establish no live model capability, privacy approval, security assurance, or production result.

The output, context, retrieval, provenance, evaluation, judgment, and experiment artifacts likewise validate bounded interface mechanics only. Synthetic teaching units are not real tokens; source units and cases are not a production corpus or population; scores, bias behavior, durations, and classifications are fixtures rather than measured product results. Passing validation does not establish factual correctness, representativeness, judge validity, answer quality, retrieval quality, source authority, security, or authorization.
