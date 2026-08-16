# Volume 2 Chapter 2 Blueprint — Inspect the Model and Tokenizer Boundary

## Frozen identity and dependency

- Chapter: `V2-02`; milestone: `MD-09`; domains: `LLME-K02`, `LLME-K03`, `LLME-K07`.
- Prerequisite: frozen base candidate and adaptation hypothesis.
- Forward dependency: Chapter 3 uses inspectable surfaces and constraints to select the smallest method.
- Reader transformation: from checkpoint filename confidence to a verified model/tokenizer/template/runtime compatibility record.

## Measurable objectives

The reader can inventory architecture/config/dtype, tokenizer/special tokens, embeddings/output head, template and maximum positions; compare multilingual/domain tokenization; perform template round-trip tests; estimate sequence/memory implications; and state what internals cannot predict.

## Concept sequence and skill procedure

Artifact identity → tokenizer/vocabulary/special tokens → chat template → model surfaces → precision/runtime → compatibility → observed behavior. Procedure: resolve revisions/hashes; render/round-trip examples; inspect padding/EOS; compare language traces; load under target runtime; test known fixtures; record unknowns.

## Mosaic Desk transition and failure injection

- Incoming: `MD-09` base candidate and representative failures.
- Failure injection: the training template differs from serving, a pad/EOS token is misconfigured, or code-switched text expands unexpectedly.
- Outgoing: model/tokenizer inspection, compatibility matrix, multilingual token record, memory questions, and invalid candidates.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V2-C02-CL01` | `LLME-BSRC-001`, `LLME-BSRC-002`, `LLME-BSRC-015`, `LLME-BSRC-051` | Configured surfaces are linked; architecture does not predict fitness. |
| `V2-C02-CL02` | `LLME-BSRC-002`, `LLME-BSRC-003`, `LLME-BSRC-037` | Tokenization differences are diagnostic, not quality proof. |
| `V2-C02-CL03` | `LLME-BSRC-001`, `LLME-BSRC-016`, `LLME-BSRC-054` | Memory/context behavior is architecture/runtime specific. |

Use `LLME-CASE-001` only for foundational mechanism context.

## Dual path, authority, and non-scope

Managed comparators may not expose these surfaces; open-weight candidates do, but both use the common behavior contract. Record asymmetry rather than inventing parity. Legal interprets licenses; platform validates runtime/hardware. Non-scope: novel architecture research, interpretability, legal conclusions, or performance optimization.

## Practice and assessment

Exercise: Inspect one artifact bundle, find a template/token mismatch, and predict then test its behavior. Pass when every component identity resolves and unsupported architecture claims are rejected.

## Figures

- `V2-F02.1` — Intent: support the chapter learner decision. Composition: tokenizer gate, embedding plane, repeated blocks, output head, precision shell; labels “tokens,” “embed,” “blocks,” “head,” “precision.” Alt: inspectable surfaces form one model system. Evidence role: claim 01.
- `V2-F02.2` — Intent: support the chapter learner decision. Composition: same multilingual input fragmented differently by two tokenizers; labels “tokenizer A,” “tokenizer B,” “length.” Alt: two tokenizers create different pieces and lengths. Evidence role: claim 02 without quality inference.

## Durability, prohibitions, and Phase 08 handoff

Durable: exact artifact identity, template/token compatibility, observed-vs-inferred separation. Volatile: libraries/runtimes/config fields. Reverify docs. Prohibit token fertility as quality and architecture as behavior guarantee. Phase 08 receives inspection checklist and mismatch drill.
