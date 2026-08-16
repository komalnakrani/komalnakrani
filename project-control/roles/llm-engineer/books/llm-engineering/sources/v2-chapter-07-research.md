# V2 Chapter 7 Research Pack — Build Preference and Feedback Data

## Frozen identity

- Milestone: MD-11.
- Purpose: collect comparative judgments without hiding criteria, annotator variation, or provenance.
- Reader outcome: specify pair construction, rubrics, order randomization, agreement, and adjudication.

## Evidence and claims

`V2-C07-CL01` (`LLME-BSRC-006`, `028`, `030`) supports preference data as criterion-laden evidence, not direct truth. `V2-C07-CL02` (`028`, `030`) supports controlling order, label quality, and judge bias. `V2-C07-CL03` (`009`, `008`) supports risk and representativeness constraints.

## Mosaic Desk feedback design

Build pairs that isolate faithfulness, actionability, tone, abstention, and evidence use rather than asking “which is better?” Failure injection: response A always appears first and is longer, generating position/verbosity bias. Randomize order, retain rubric-level reasons, and surface disagreement. Use `LLME-CASE-005` and `010`.

## Limits and boundary

- Preferences vary by stakeholder and context; disagreement is information.
- Model-generated or model-judged labels can create correlated errors.
- Product/domain authorities define values and priorities; engineering operationalizes and audits the signal.
- Preference data must remain separated from final holdouts.

## Phase 07 blueprint handoff

Blueprint pair schema, annotation guide, bias controls, agreement report, and adjudication queue. Sources: `006`, `008`, `009`, `028`, `030`; cases: `005`, `010`. Figures: preference balance and bias detector. Non-scope: declaring a preference objective morally authoritative.
