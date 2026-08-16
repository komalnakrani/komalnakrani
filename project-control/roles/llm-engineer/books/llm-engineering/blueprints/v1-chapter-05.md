# Volume 1 Chapter 5 Blueprint — Establish a Reproducible Baseline

## Frozen identity and dependency

- Chapter: `V1-05`; milestone: `MD-03`; domains: `LLME-K03`, `LLME-K04`, `LLME-K06`.
- Prerequisite: selected access posture and `MD-01` contract.
- Forward dependency: Chapters 6–7 change messages and output boundaries against this fixed comparison.
- Reader transformation: from undocumented API trials to a replayable, provider-neutral run record.

## Measurable objectives

The reader can inventory every behavior-facing configuration field, preserve raw case outputs, repeat stochastic trials, distinguish unavailable metadata from assumptions, and compare managed/open-weight runs through a common evidence schema.

## Concept sequence and skill procedure

Identity → input fixture → model/template/decoding/context/tool state → execution environment → raw outputs → evaluators → variance/limitations. Procedure: freeze cases; write the manifest; run a smoke case and failures; repeat identical inputs; hash artifacts; record “not observable” honestly; publish a timestamped baseline decision.

## Mosaic Desk transition and failure injection

- Incoming: `MD-02` posture decision and seed cases.
- Failure injection: repeated calls vary materially, or a silent alias/template change is mistaken for a prompt improvement.
- Outgoing: provider-neutral request/result/error interfaces, run manifest, raw outputs, replay instructions, deterministic fixture, and baseline evidence for `MD-03`.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V1-C05-CL01` | `LLME-BSRC-007`, `LLME-BSRC-010`, `LLME-BSRC-014`, `LLME-BSRC-015` | Seeds/configuration may improve repeatability but do not guarantee determinism. |
| `V1-C05-CL02` | `LLME-BSRC-010`, `LLME-BSRC-032` | Stored traces require privacy and retention controls. |
| `V1-C05-CL03` | `LLME-BSRC-009`, `LLME-BSRC-010` | Public benchmarks supplement, never replace, intended-use evidence. |

No primary case is required; the Mosaic replay is a constructed experiment with no claimed production outcome.

## Dual path, authority, and non-scope

Managed manifests record provider/model identifiers and unavailable internals; open-weight manifests add weight/tokenizer/runtime/hardware identity. Platform owns runtime reliability and secret management; privacy owns trace policy. Non-scope: prompt optimization, production observability, or statistical certainty beyond the design.

## Practice and assessment

Exercise: Repair an incomplete manifest, replay three trials, and explain differences. Pass when a reviewer can reconstruct the intended configuration, locate raw outputs and evaluators, and name unavoidable gaps.

## Figures

- `V1-F05.1` — Intent: support the chapter learner decision. Composition: lockbox containing model, prompt, context, decoding, schema, evaluator, runtime tokens; labels “model,” “prompt,” “context,” “runtime.” Alt: all behavior-facing versions lock together. Evidence role: manifest completeness for claim 01.
- `V1-F05.2` — Intent: support the chapter learner decision. Composition: identical configuration enters repeated trials around an expected band; labels “same config,” “trials,” “variation.” Alt: several outputs vary despite one configuration. Evidence role: distinguishes natural variation from change for claim 02.

## Durability, prohibitions, and Phase 08 handoff

Durable: complete identity, raw evidence, replay, explicit unknowns. Volatile: API fields, seeding guarantees, prices, model aliases. Reverify documentation. Prohibit “seed equals deterministic” and “same name equals same behavior.” Phase 08 receives the manifest template, replay exercise, and failure taxonomy.
