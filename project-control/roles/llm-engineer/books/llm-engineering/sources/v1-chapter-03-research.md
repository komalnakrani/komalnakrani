# V1 Chapter 3 Research Pack — Reason About Tokens, Attention, and Generation

## Frozen identity

- Milestone: MD-02.
- Purpose: teach only the mechanism needed to predict engineering failure surfaces.
- Reader outcome: inspect tokenization, understand attention/KV implications, and connect autoregressive decoding to variability.

## Evidence questions and claims

`V1-C03-CL01` (`LLME-BSRC-001`) grounds attention as contextual token interaction, while explicitly avoiding the false inference that attention weights are a complete explanation. `V1-C03-CL02` (`002`, `003`) grounds tokenizer-dependent length and representation. `V1-C03-CL03` (`014`, `015`) grounds decoding configuration and chat templates as behavior-facing configuration.

Use `LLME-CASE-001` as a bounded mechanism case. The paper establishes the Transformer formulation in its research context; it does not explain current chat behavior, truthfulness, or safety. Durable concepts are tokenization, conditional next-token generation, context-dependent representation, and configuration sensitivity. Kernel choices and model-specific token vocabularies remain volatile.

## Mosaic Desk investigation

Instrument three messages: short English, code-switched Hindi-English, and a long signature/thread chain. Record token counts under two candidate tokenizers and show why characters or words are not stable capacity units. Failure injection: a message crosses the context budget after templating and silently loses the earliest instruction. The evidence artifact is a token-and-template trace, not an illustration presented as a causal proof.

## Limits and disputes

- Tokenization affects cost and representation, but a token-count difference alone does not establish output quality.
- Sampling parameters shape output distributions; repeatability also depends on implementation and provider behavior.
- Mechanistic explanations must not use anthropomorphic claims such as “the model understands.”
- Inference performance belongs later in Volume 2; this chapter only establishes the conceptual bridge.

## Phase 07 blueprint handoff

Concept sequence: text→tokens→template→attention-conditioned states→next-token sampling. Skill check: compare token traces and predict truncation risk. Case: `LLME-CASE-001`. Figures: colorful labeled token pipeline and decoding tree, raster-only at production. Sources: `001–003`, `014`, `015`. Non-scope: training math, interpretability claims, serving optimization, or a generic mascot.
