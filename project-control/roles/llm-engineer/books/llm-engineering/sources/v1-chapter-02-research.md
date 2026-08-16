# V1 Chapter 2 Research Pack — Write the Language-Task Contract

## Frozen identity

- Milestone: MD-01.
- Purpose: turn an ambiguous language feature into an observable, bounded contract.
- Reader outcome: specify inputs, outputs, abstention, quality dimensions, latency/cost bounds, exclusions, and escalation authority.

## Evidence questions and claims

`V1-C02-CL01` (`LLME-BSRC-011`, `009`) supports evaluation criteria tied to intended use rather than generic fluency. `V1-C02-CL02` (`009`, `037`) supports representative slices, including language and use-context variation. `V1-C02-CL03` (`008`, `065`) supports explicit abuse, privacy, and authority exclusions.

The contract should separate hard constraints from judgment criteria: schema validity is measurable mechanically; usefulness, faithfulness, and tone need calibrated rubrics. The durable principle is traceability from product intent to tests. Current model capabilities and provider limits are volatile implementation inputs.

## Mosaic Desk research frame

The contract is for inbox summarization and draft assistance, not autonomous sending. Inputs include message text plus authorized metadata; outputs include summary, action candidates, evidence references, uncertainty, and an abstention state. Failure injection: an email asks the assistant to ignore company policy and expose another customer's data. The contract must reject the authority transfer before prompt or model selection.

The pack should seed a contract matrix with four lanes: nominal, edge, adversarial, and out-of-scope. Each criterion needs an owner and measurement method. No unsupported numeric threshold is supplied at Phase 06; Phase 07 must label thresholds as product decisions to be calibrated on baseline data.

## Limits and boundary

- A task contract cannot resolve legal/privacy policy; it records the decision from the competent owner.
- Multilingual coverage requires per-language evidence; aggregate coverage claims are insufficient.
- Safety guidance is risk-management evidence, not proof that the system is safe.

## Phase 07 blueprint handoff

Blueprint around a completed contract artifact and a traceability exercise. Use claims `V1-C02-CL01..03`, Mosaic Desk adversarial mail, and sources `008`, `009`, `011`, `037`, `065`. Figures: contract layers and acceptance matrix. Non-scope: model ranking, detailed prompting, deployment architecture, domain-policy authorship.
