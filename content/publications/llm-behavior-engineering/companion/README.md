# LLM Behavior Engineering deterministic companion

This companion supports the first three chapters with local, provider-neutral, synthetic artifacts. It makes no model call, needs no secret, and does not simulate a production outcome.

- `contracts/mosaic-responsibility-charter.json` records the Chapter 1 system/evidence/authority boundary.
- `contracts/mosaic-language-task-contract.json` records the Chapter 2 task, states, clauses, segments, non-goals, and owners.
- `mechanics/mosaic-token-fixtures.json` supplies Chapter 3 synthetic messages, template budgets, and two deliberately simple pedagogical tokenizers.
- `lib/` validates contracts and produces deterministic token/template traces.
- `tests/` proves the chapter acceptance invariants.

Run:

```bash
node --test content/publications/llm-behavior-engineering/companion/tests/*.test.mjs
node content/publications/llm-behavior-engineering/companion/run.mjs
```

The tokenizers are teaching fixtures, not replicas of any provider or open-weight model tokenizer. Their purpose is to prove that representation and length depend on the actual tokenizer and template. They cannot predict quality.
