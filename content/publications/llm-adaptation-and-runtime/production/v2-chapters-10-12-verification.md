# Verification - Volume 2 Chapters 10-12

Date: 2026-08-16. Issue: `#68`. Result: `PASS - IMAGEGEN ASSETS PENDING`.

- 3 chapters, 3,630 words (`1,213`, `1,179`, `1,238`).
- 9/9 exact claims; cases `005`, `007`, `008`, `009`, `010` bounded.
- 6/6 accessible PNG anchors; zero PNG/SVG/WebP assets.
- 3 learning/state/QA sets.
- 12/12 new tests; 48/48 Volume 2; 112/112 series LLM tests.
- 18/18 unique source URLs HTTP 200.
- No-tune/SFT/PEFT/preference comparison preserves held-out target, retention, English, Gujarati, Gujarati-English, abstention, untrusted-instruction, no-effect, resource, and compatibility evidence.
- Exact base/tokenizer/template/runtime/quantization/adapter identities remain visible; wrong-base and wrong-tokenizer fixtures fail closed.
- Lowest-loss SFT and largest PEFT fixtures are rejected for protected regressions; preference optimization is rejected for proxy-only gain.
- `trainingExecuted:false`, `artifactsCreated:false`, zero provider calls, and inherited template block appear throughout.
- Originality scan found zero repeated groups of three or more 12-word shingles against existing chapters.
- Publication validation, JSON checks, companion audit/tests, zero-asset scan, and full `npm run check` pass.

`MD-12` closes only as a deterministic teaching comparison; the real experiment remains blocked. `MD-13` opens with an explicit simulated preference-method rejection. Root owns ImageGen production.
