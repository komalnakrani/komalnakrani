# V2 Chapter 8 Research Pack — Preserve Retention and Control Cases

## Frozen identity

- Milestone: MD-11.
- Purpose: detect regressions outside the targeted improvement and preserve no-change controls.
- Reader outcome: build retention, safety, multilingual, and no-adaptation test lanes.

## Evidence and claims

`V2-C08-CL01` (`LLME-BSRC-039`, `009`, `030`) supports multi-capability evaluation across post-training stages. `V2-C08-CL02` (`037`, `048`) supports language and knowledge-retention slices. `V2-C08-CL03` (`008`, `018`, `065`) supports security/safety and authority controls.

## Mosaic Desk controls

Preserve baseline cases for summarization, evidence citation, abstention, Hindi-English, privacy-sensitive text, injection attempts, and neutral general instructions. Failure injection: the adapted model improves task style but loses refusal or cross-language fidelity. Keep retrieval unchanged for control comparisons and retain raw outputs.

## Limits and authority

- A finite retention suite cannot prove absence of catastrophic forgetting or unsafe behavior.
- Public safety tests may not represent deployment threats.
- Security/safety owners define unacceptable risks; the LLM engineer ensures the cases run and regressions are visible.
- Use `LLME-CASE-007`, `008`, and `014` as bounded evidence.

## Phase 07 blueprint handoff

Blueprint a retention matrix, control-lane manifest, and regression triage exercise. Sources: `008`, `009`, `018`, `030`, `037`, `039`, `048`, `065`; cases: `007`, `008`, `014`. Figures: retention safety net and capability radar with limitations. Non-scope: safety certification.
