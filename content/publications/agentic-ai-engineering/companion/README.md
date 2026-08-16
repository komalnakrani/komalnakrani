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

For Chapters 4-6 it adds:

- `AR-03 v1.0.0`: explicit run states, transitions, events, budgets, cancellation, replay, and completion checks;
- `AR-04 v1.0.0`: five typed capability contracts with ambiguous-effect reconciliation;
- `AR-05 v1.0.0`: identity, delegation, audience, approval, expiry, revocation, and audit bindings;
- three JSON Schemas, a deterministic runtime library, and nine additional tests.

For Chapters 7-9 it adds `AR-06 v1.0.0` lifecycle/context/memory governance,
the frozen `AR-07 v0.1.0` single-agent baseline, the `AR-07 v1.0.0` topology
experiment and handoff contract, three schemas, one deterministic library, and
ten tests. All comparison measurements are synthetic fixture mechanics.

Run:

```sh
node --test content/publications/agentic-ai-engineering/companion/tests/chapters-01-03.test.mjs
node --test content/publications/agentic-ai-engineering/companion/tests/chapters-04-06.test.mjs
node --test content/publications/agentic-ai-engineering/companion/tests/chapters-07-09.test.mjs
```

The tests prove the declared local fixture mechanics only. They do not prove
production fitness, safety, legal authority, domain correctness, business value,
or the superiority of any model, provider, or multi-agent topology.
