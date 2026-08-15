# Forward Deployed Engineering Companion

This is the provider-neutral executable companion for the fictional Orchid Assist case.

Rules:

- synthetic data only;
- no secrets or paid services;
- Node.js built-ins by default;
- deterministic failure behavior;
- each implementation identifies the workflow purpose, security boundary, failure behavior, and tests;
- provider adapters remain optional and replaceable.

Run from the repository root:

```sh
npm run test:companion
npm run demo:companion
```

Chapter 7 starts the contract, intent, and reconciliation foundation. Chapters 8-10 extend it with environment checks, bounded AI behavior, and control/evidence/authority records. Chapter 11 connects those pieces into a runnable synthetic vertical slice with explicit failure and reconciliation states. Chapter 12 traces risks and criteria to typed evidence, preserves critical segments, and calibrates graders. Later chapters extend the same path; they do not create disconnected samples.
