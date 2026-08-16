# Chapter 03 State - Reason About Tokens, Attention, and Generation

- Status: complete manuscript draft; immediate QA recorded separately.
- Dossier milestone: `MD-02` mechanism inspection opened.
- Dossier artifacts: mechanism-consequence sheet, synthetic token/template traces, context-headroom method, truncation test design, generation-identity record.
- Production claims: `CLM-007` through `CLM-009` map exactly to `V1-C03-CL01` through `V1-C03-CL03`.
- Bounded case: `LLME-CASE-001`, used only for the foundational Transformer mechanism boundary.
- Figure anchors: `V1-F03.1`, `V1-F03.2`; assets pending root ImageGen production.
- Companion: token fixtures and `token-trace.mjs`; four Chapter 3 tests.

## Locked terminology

Token, tokenizer, chat template, special token, representation, position, attention-based layer, next-token score, decoding, greedy, sampled, constrained, input budget, output headroom, behavior identity.

## Prohibited language

Do not claim the model understands, remembers, decides, pays attention in the human sense, knows a language, or reports calibrated confidence unless a separately defined measurement supports the statement. Attention is not a complete explanation. Token count is not quality. Next-token probability is not truth probability.

## Managed/open-weight handoff

Managed paths record available model/configuration metadata and explicit unknowns. Open-weight paths pin checkpoint, tokenizer, template, generation config, runtime, and hardware while accepting compatibility and operational responsibility. Both require the same behavior evidence.

## Non-repeat instruction

Later chapters use this mechanism vocabulary to explain decisions. They do not expand into a general Transformer derivation or interpretability survey.

## Exact next chapter action

Chapter 4 compares model and access candidates using the frozen `MD-01` contract, seed cases, mechanism tests, privacy/control constraints, and operational assumptions. No leaderboard or architecture prestige decides alone.
