# Volume 1 Chapter 12 Blueprint — Evaluate Retrieval and Generation Together

## Frozen identity and dependency

- Chapter: `V1-12`; milestone: `MD-06`; domains: `LLME-K05`, `LLME-K06`.
- Prerequisite: complete `MD-05` retrieval/context/provenance path.
- Forward dependency: Chapters 13–14 make case coverage and judgment credible.
- Reader transformation: from answer-only scoring to component-plus-end-to-end causal diagnosis.

## Measurable objectives

The reader can select metrics by diagnostic question; label retrieval relevance; separate retrieval absence/rank from generation use/faithfulness; inspect answerability/abstention/citation; and route domain-sensitive disputes to appropriate judges.

## Concept sequence and skill procedure

Case/answerability → retrieval labels/metrics → assembly trace → generated proposal → support/citation/abstention criteria → joint failure matrix → adjudication. Procedure: score components independently; pair retrieval and answer traces; classify the responsible layer; compare automated indicator with human/domain review; record uncertainty.

## Mosaic Desk transition and failure injection

- Incoming: frozen corpus, retrieval and assembly traces.
- Failure injection: correct evidence is retrieved but ignored; separately, retrieval is wrong while the model appropriately abstains.
- Outgoing: joint evaluation, metric rationale, failure-attribution matrix, disputed-case queue, and first `MD-06` evidence.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V1-C12-CL01` | `LLME-BSRC-019`, `LLME-BSRC-020`, `LLME-BSRC-022`, `LLME-BSRC-025` | Linked components remain diagnostically distinct. |
| `V1-C12-CL02` | `LLME-BSRC-024`, `LLME-BSRC-025` | Metrics encode assumptions and label quality. |
| `V1-C12-CL03` | `LLME-BSRC-008`, `LLME-BSRC-025`, `LLME-BSRC-026` | Faithfulness to a wrong source is not correctness. |

Use `LLME-CASE-003` and `LLME-BSRC-004` with benchmark limits; automated RAG metrics are indicators, not ground truth.

## Dual path, authority, and non-scope

Managed and open-weight model paths consume identical retrieval traces and intended-use cases; evaluator adapters may vary. Domain specialists adjudicate source correctness; the engineer owns measurement integrity. Non-scope: universal metric thresholds, automated-judge authority, or blaming every failure on the model.

## Practice and assessment

Exercise: Classify paired failures into corpus/query/candidate/rank/context/model/evaluator. Pass when the learner justifies metrics, preserves raw evidence, and identifies when no metric can settle domain correctness.

## Figures

- `V1-F12.1` — Intent: support the chapter learner decision. Composition: retrieval evidence tray and generated proposal judged separately then jointly; labels “retrieve,” “generate,” “joint.” Alt: two component judgments combine without collapsing. Evidence role: claim 01.
- `V1-F12.2` — Intent: support the chapter learner decision. Composition: bad answer branches backward through corpus, query, candidates, rank, context, model, evaluator; short layer labels. Alt: a causal tree locates several possible failure sources. Evidence role: claims 02–03 and attribution artifact.

## Durability, prohibitions, and Phase 08 handoff

Durable: component/joint separation, metric-to-question mapping, adjudication. Volatile: metric packages and grader models. Reverify tools. Prohibit one-score diagnosis and faithfulness-equals-correctness. Phase 08 receives paired traces and the failure matrix.
