# V2 Chapter 10 Research Pack — Supervise the Model

## Frozen identity

- Milestone: MD-12.
- Purpose: run and diagnose supervised fine-tuning against frozen behavior and retention evidence.
- Reader outcome: interpret loss, examples, checkpoints, and evaluation without equating convergence with success.

## Evidence and claims

`V2-C10-CL01` (`LLME-BSRC-006`, `040`) supports next-token supervision on formatted demonstrations. `V2-C10-CL02` (`009`, `039`, `040`) supports checkpoint evaluation across target and retention suites. `V2-C10-CL03` (`037`, `038`) supports language-stratified interpretation.

## Mosaic Desk run

Train a bounded SFT candidate on reviewed demonstrations. Failure injection: loss falls because boilerplate dominates tokens while evidence-link accuracy does not improve. Inspect token-level masking, length distributions, repeated examples, per-slice outputs, and intermediate checkpoints. Keep the Volume 2 Chapter 1 baseline unchanged.

## Limits and boundary

- Lower training/evaluation loss need not improve human judgments or safety.
- Hyperparameter results are model/data/runtime-specific.
- SFT can teach desired form while weakening unrelated capabilities.
- Use `LLME-CASE-008` only for a published staged recipe and `007` for multilingual evidence limits.

## Phase 07 blueprint handoff

Blueprint objective/masking explanation, run diagnostics, checkpoint selection, and behavior comparison. Sources: `006`, `009`, `037–040`; cases: `007`, `008`. Figures: supervised signal path and loss-versus-behavior split. Non-scope: preference optimization or universal hyperparameters.
