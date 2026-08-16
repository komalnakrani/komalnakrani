# Agentic AI Engineering Companion

This provider-neutral local companion supports the FieldOps Relay manuscript.
It uses deterministic JSON fixtures and Node's built-in test runner. It makes no
network call, requires no credential or paid provider, contacts no person,
controls no equipment, and performs no real effect.

For Chapters 1-3 it contains:

- `AR-01 v0.1.0`: responsibility charter and boundary classification;
- `AR-01 v0.2.0`: fixed-baseline and autonomy decision;
- `AR-02 v1.0.0`: goal/action/authority contract with mutation fixtures;
- JSON Schemas for the responsibility and action contracts;
- deterministic structural and semantic tests.

Run:

```sh
node --test content/publications/agentic-ai-engineering/companion/tests/chapters-01-03.test.mjs
```

The tests prove the declared local fixture mechanics only. They do not prove
production fitness, safety, legal authority, domain correctness, business value,
or the superiority of any model, provider, or multi-agent topology.
