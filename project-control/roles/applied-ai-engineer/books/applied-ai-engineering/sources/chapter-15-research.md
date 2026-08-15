# Chapter 15 Research — Observe Behavior Without Betraying Users

## Architecture anchors

- Primary domains: `AAE-K04`, `AAE-K07`, `AAE-K08`, `AAE-K09`
- Dossier milestone: `PF-09`
- Forecast figures: `F15.1`, `F15.2`

## Research question

Which signals distinguish useful behavior, data/context quality, learned-component behavior, tool effects, service health, cost, and user feedback—and how can they be collected without default surveillance?

## Claim and evidence map

- **C15.1 — Production monitoring should connect symptoms, causes, and actionable decisions.** `AAE-S035` supports black-box/white-box distinctions and golden signals.
- **C15.2 — ML monitoring adds data/feature/model tests and change assumptions.** `AAE-S007` and `AAE-S009` support drift/skew/readiness surfaces.
- **C15.3 — Trace/log/metric conventions improve correlation across components.** `AAE-S036` supplies technical semantics; it does not decide lawful or proportionate collection.
- **C15.4 — Privacy risk management must govern purpose, processing, access, retention, and communication.** `AAE-S038` supports lifecycle privacy framing.
- **C15.5 — Human-AI systems need correction, feedback, and behavior-over-time evidence.** `AAE-S003` and `AAE-S004` support user control and adaptation.
- **C15.6 — Short-term feedback and engagement can be misleading proxies.** `AAE-S046` and `AAE-S053` provide current first-party examples of feedback/semantic relevance limitations.

## Signal layers

User task/outcome, product interaction, behavior/error taxonomy, segment, context/retrieval, model/version, tool/effect, control, service/dependency, capacity/latency/cost, and business proxy. Record purpose, owner, collection method, sensitivity, minimization/redaction, access, retention, sampling, expected decision, and blind spots.

## Cases

- `AAE-C001` demonstrates an A/B/feedback blind spot and qualitative warning.
- `AAE-C003` demonstrates multiple interaction signals with different meaning.
- `AAE-C008` adds correction and interaction-over-time needs.
- `AAE-C012` requires redacted traces that preserve evidence IDs and failure layers without storing raw user images/text by default.

## Disputes and limits

More telemetry can increase privacy/security harm and still fail to explain behavior. User feedback is selected, contextual, and gameable. Drift detectors describe distribution change, not automatically degradation or cause.

## Remaining gaps

No release-blocking gap. Applicable privacy law and retention periods are jurisdiction/product decisions and must not be invented; the case will use fictional authorized policy.

## Blueprint constraints

Require a signal catalog with one named decision per signal and a privacy deletion exercise. Include a dashboard that stays green while a critical product segment fails.

## Manuscript prohibitions

Do not recommend storing raw prompts/outputs by default, call infrastructure uptime product success, or interpret feedback volume as representative satisfaction.
