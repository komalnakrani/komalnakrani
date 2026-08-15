# Chapter 03 Research — Write the Behavior Contract

## Architecture anchors

- Primary domains: `AAE-K02`, `AAE-K08`
- Dossier milestone: `PF-02`
- Forecast figures: `F03.1`, `F03.2`

## Research question

How can uncertain learned behavior be specified tightly enough to guide architecture, evaluation, control, user interaction, and authority without pretending it is deterministic?

## Claim and evidence map

- **C03.1 — Trustworthiness expectations are contextual and must connect to intended use, affected people, and risk tolerance.** `AAE-S001` and `AAE-S054` support contextual mapping and governance.
- **C03.2 — Users need explicit capability, limitation, correction, and failure interaction.** `AAE-S003`, `AAE-S004`, and `AAE-S030` support observable interaction behavior and scenario-based human-AI testing.
- **C03.3 — Abstention creates a measurable risk-coverage tradeoff; it is not a vague “low confidence” message.** `AAE-S025` supplies selective-classification evidence; `AAE-S024` cautions that raw confidence may be miscalibrated.
- **C03.4 — A model behavior specification is distinct from an application behavior contract.** `AAE-S045` is an explicit provider-level example; `AAE-S043` illustrates schema-constrained output but also why application semantics and authority remain outside the model.
- **C03.5 — Domain and formal authority must be named wherever review or escalation is promised.** `AAE-S051` documents domain-expert involvement in high-consequence labels; `AAE-S001` preserves risk-role allocation.

## Contract anatomy

The contract must contain required outputs, permitted variability, unacceptable outcomes, uncertainty expression, abstention, clarification, escalation, degraded mode, prohibited claims/actions, evidence requirements, segments, change triggers, human competence, response time, and decision rights.

## Cases

- `AAE-C001` shows a provider update violating an intended behavior quality that existing evals did not adequately encode.
- `AAE-C005` separates engineer-produced evidence from clinical/domain judgment.
- `AAE-C009` proves only syntactic constraint, not semantic truth or safe authority.
- `AAE-C012` requires Patchwork to refuse compatibility claims when evidence is insufficient.

## Disputes and limits

Some behavior cannot be reduced to one expected answer. Contracts can specify criteria, distributions, state, process, evidence, and escalation. Confidence scores may not be calibrated and are not user consequence by themselves.

## Remaining gaps

No release-blocking research gap. The exact Patchwork authority roles and synthetic compatibility policy remain constructed inputs to define in the blueprint, not external facts.

## Blueprint constraints

Include at least one clause for ordinary variation, one prohibited claim, one abstention, one degraded mode, one human authority decision, and one update-triggered revalidation.

## Manuscript prohibitions

Do not promise deterministic semantic correctness, call any generic reviewer “human in the loop,” or imply that a provider model specification transfers application accountability.
