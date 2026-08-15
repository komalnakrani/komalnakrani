# Applied AI Engineering Companion

This provider-neutral companion turns book decisions into locally verifiable artifacts. It uses synthetic Patchwork Find data, needs no secrets or network access, and performs no external actions.

Chapter 3 begins the companion with a machine-readable behavior contract. Run:

```sh
node content/publications/applied-ai-engineering/companion/run.mjs
node --test content/publications/applied-ai-engineering/companion/tests/*.test.mjs
```

Passing checks prove structural consistency only. They do not establish domain correctness, production readiness, or formal authorization.
