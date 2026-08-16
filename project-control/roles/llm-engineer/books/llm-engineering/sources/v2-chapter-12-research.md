# V2 Chapter 12 Research Pack — Optimize Preferences Carefully

## Frozen identity

- Milestone: MD-13.
- Purpose: apply preference optimization with explicit data, reference, evaluation, and retention controls.
- Reader outcome: understand DPO as one method and detect proxy optimization or regressions.

## Evidence and claims

`V2-C12-CL01` (`LLME-BSRC-044`) supports DPO's direct preference objective in its stated formulation. `V2-C12-CL02` (`028`, `030`, `044`) supports dependence on pair quality, reference behavior, and objective configuration. `V2-C12-CL03` (`027`, `028`, `033`) supports calibrated judges and human adjudication.

Use `LLME-CASE-010` for method evidence and `005` for judge bias. Durable principle: optimize a proxy only with independent acceptance evidence. Library interfaces and recommended parameters are volatile.

## Mosaic Desk experiment

Compare SFT and DPO candidates on blinded, order-randomized pairs plus the independent task/retention suite. Failure injection: the preference score improves by producing longer, more confident summaries that add unsupported detail. Inspect verbosity, calibration, faithfulness, and disagreement.

## Limits and authority

- Preference labels encode criteria and annotator context; they are not universal values.
- DPO simplicity does not remove data governance or evaluation needs.
- Product/domain authorities own desired behavior; engineers own objective implementation and evidence.

## Phase 07 blueprint handoff

Blueprint objective intuition, reference/candidate comparison, proxy-failure drill, and stop rule. Sources: `027`, `028`, `030`, `033`, `044`; cases: `005`, `010`. Figures: preference compass and proxy-overoptimization warning. Non-scope: moral alignment claims or universal beta values.
