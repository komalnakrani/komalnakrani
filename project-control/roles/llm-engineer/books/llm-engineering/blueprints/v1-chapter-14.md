# Volume 1 Chapter 14 Blueprint — Name Errors and Judgment Methods

## Frozen identity and dependency

- Chapter: `V1-14`; milestone: `MD-06`; domains: `LLME-K06`, `LLME-K10`.
- Prerequisite: representative case set and joint failure matrix.
- Forward dependency: Chapter 15 uses calibrated judgment in controlled experiments.
- Reader transformation: from one aggregate score to a consequence-aware taxonomy and calibrated judge stack.

## Measurable objectives

The reader can define error categories/severity/detectability/disposition; choose deterministic/reference/model/human/domain methods; measure agreement and disagreement; test order/verbosity/self-preference bias; and state what each judge cannot establish.

## Concept sequence and skill procedure

Consequence → error specimen → taxonomy/severity → cheapest credible judge → calibration set → blinded/randomized comparison → disagreement/adjudication → limitations. Procedure: classify raw failures; match criterion to judge; version rubric/prompt/model; randomize pair order; compare human/domain anchor; set escalation rules.

## Mosaic Desk transition and failure injection

- Incoming: `MD-06` cases and traces.
- Failure injection: a model grader prefers the first or longer proposal even when it cites weaker evidence.
- Outgoing: taxonomy, severity/detectability matrix, grader calibration, rater/domain guide, disagreement log, and completed `MD-06` evidence system.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V1-C14-CL01` | `LLME-BSRC-009`, `LLME-BSRC-011`, `LLME-BSRC-031` | Taxonomies are task/risk specific. |
| `V1-C14-CL02` | `LLME-BSRC-028`, `LLME-BSRC-030` | Preference/reward evidence depends on criteria and data. |
| `V1-C14-CL03` | `LLME-BSRC-027`, `LLME-BSRC-029`, `LLME-BSRC-032`, `LLME-BSRC-033` | Model judges carry position/style/self-coupling biases. |

Use `LLME-CASE-005`; reported agreement remains tied to its judge/task setup.

## Dual path, authority, and non-scope

Judge criteria are common across paths; model graders may be managed or open-weight and must be versioned. Domain authority adjudicates warranty/safety; product defines priorities. Non-scope: model judge as ground truth, universal severity, or automated high-stakes approval.

## Practice and assessment

Exercise: Create a taxonomy from ten failures and calibrate a blinded judge on reordered pairs. Pass when disagreement and bias are reported and each claim routes to the cheapest credible—not merely cheapest—judge.

## Figures

- `V1-F14.1` — Intent: support the chapter learner decision. Composition: error specimen linked to consequence, severity, detectability, segment, control, disposition; short labels. Alt: one error is characterized across six dimensions. Evidence role: claim 01.
- `V1-F14.2` — Intent: support the chapter learner decision. Composition: escalating layers deterministic→reference→model→human→domain→authority; labels “check,” “reference,” “grader,” “human,” “domain,” “authority.” Alt: judgment methods escalate with consequence and ambiguity. Evidence role: claims 02–03.

## Durability, prohibitions, and Phase 08 handoff

Durable: explicit taxonomy, calibrated instruments, disagreement. Volatile: judge models/APIs. Reverify graders. Prohibit score-as-truth and human-as-infallible. Phase 08 receives calibration cases, rater guide, and escalation stack.
