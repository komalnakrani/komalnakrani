# Applied AI Engineering Companion

This provider-neutral companion turns book decisions into locally verifiable artifacts. It uses synthetic Patchwork Find data, needs no secrets or network access, and performs no external actions.

Chapter 3 begins the companion with a machine-readable behavior contract. Chapters 5-6 add deterministic synthetic data and retrieval. Chapters 7-9 add a named boundary set, a locally executable vertical slice, and a versioned evaluation suite with coverage, split hashing, and contamination checks. Chapters 10-12 add consequence-oriented metrics and critical gates, calibrated mixed judgment, and a reproducible preregistered experiment packet. Run:

```sh
node content/publications/applied-ai-engineering/companion/run.mjs
node --test content/publications/applied-ai-engineering/companion/tests/*.test.mjs
```

Passing checks prove structural consistency and the declared synthetic failure mechanics only. They do not establish domain correctness, real-population coverage, production readiness, compatibility, safety, or formal authorization.
