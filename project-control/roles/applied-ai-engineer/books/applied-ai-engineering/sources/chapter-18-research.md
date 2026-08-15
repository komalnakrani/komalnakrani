# Chapter 18 Research — Diagnose Real Use and Incidents

## Architecture anchors

- Primary domains: `AAE-K06`, `AAE-K07`, `AAE-K08`, `AAE-K09`
- Dossier milestone: `PF-11`
- Forecast figures: `F18.1`, `F18.2`

## Research question

How should real-use evidence and incidents be traced across product, data/context, model, tool, control, and runtime layers, contained within authority, and converted into durable learning?

## Claim and evidence map

- **C18.1 — Incident diagnosis starts from user-visible symptoms but needs layer-specific causal evidence.** `AAE-S035` supports symptoms/causes; `AAE-S036` supports cross-component trace semantics.
- **C18.2 — Retries and partial failure can amplify incidents.** `AAE-S034` supports bounded retries and idempotency; tool effects require additional semantic controls.
- **C18.3 — Data failures can cascade and be misdiagnosed as model problems.** `AAE-S013` and `AAE-S014` support upstream sociotechnical diagnosis.
- **C18.4 — Adversarial and misuse hypotheses must remain in the incident tree.** `AAE-S039`, `AAE-S040`, and `AAE-S041` supply threat vocabulary.
- **C18.5 — Qualitative reports and behavior-specific evidence can overturn aggregate telemetry.** `AAE-S046` supplies the sycophancy retrospective.
- **C18.6 — Human-AI failure recovery includes expectation, correction, and change-over-time behavior.** `AAE-S003`, `AAE-S004`, and `AAE-S030` support user interaction evidence.

## Incident record

Detection source, affected behavior/segment, timeline, versions, consequence, containment, authority/communications, hypotheses by layer, evidence and disconfirmation, root/contributing conditions, correction, evaluation/control/runbook changes, verification, monitoring, and unresolved follow-up.

## Cases

- `AAE-C001` demonstrates rollback plus evaluation/process changes.
- `AAE-C007` prevents a downstream-only explanation.
- `AAE-C008` adds user recovery behavior.
- `AAE-C012` uses seller gaming that raises engagement while worsening compatibility returns, forcing product and adversarial hypotheses.

## Disputes and limits

Root cause can be a misleading singular concept in complex systems; record contributing conditions and evidence. Emergency containment may reduce functionality. Incident confidentiality and user privacy constrain what can be logged or shared.

## Remaining gaps

No release-blocking gap. The manuscript must avoid fake real-time incident metrics; all Patchwork timestamps and results are synthetic.

## Blueprint constraints

Provide a layered evidence bundle with one false lead. Require containment before optimization and at least one change to evaluation, control, or ownership—not code only.

## Manuscript prohibitions

Do not blame “the model” without layer evidence, publish sensitive trace content, or claim a single root cause when evidence supports interacting conditions.
