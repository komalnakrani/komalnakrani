# LLM Adaptation and Runtime companion

Deterministic, provider-neutral teaching fixtures for Mosaic Desk Volume 2. The artifacts make audit, compatibility, method-selection, rejection, and authority boundaries executable without calling a model or training weights.

Run:

```bash
node --test companion/tests/*.test.mjs
node companion/run.mjs
```

The fixtures are synthetic. Chapters 4-6 add an authority-aware recipe, reproducible curation and five-vault split, evidence-linked instruction records, template/loss checks, and deliberate rejection paths. Chapters 7-9 add bias-audited preference evidence, protected retention/control lanes, and a blocked experiment manifest. Chapters 10-12 add deterministic SFT, PEFT, and preference simulations that compare no-tune/adapted paths, reject protected regressions and proxy-only gain, and create no model artifact. Passing tests establish internal decision mechanics only; they do not establish model quality, data rights, privacy, security, capacity, domain fitness, training approval, or release readiness.
