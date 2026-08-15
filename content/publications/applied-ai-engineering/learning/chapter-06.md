# Learning Pack 06 - Engineer Context and Retrieval

> NOT FOR LIVE CERTIFICATION BANK. These formative prompts are publication learning material only.

## Recall and explain

1. Separate query transformation, source selection, candidate generation, eligibility, ranking, context assembly, and downstream use.
2. Why are vector similarity, product relevance, evidence sufficiency, and compatibility different claims?
3. What two evaluations does approximate search require?
4. Why does a citation not prove correctness or faithful use?
5. What obligations hide behind the word memory?

## Scenario decisions

### Unauthorized nearest neighbor

The closest vector match is outside the user's permitted source set. Design filtering, internal trace, user output, and safe fallback without revealing restricted content.

### Empty after controls

Retrieval finds three records: one stale, one unauthorized, one deterministically incompatible. Classify the stage result and product state. Do not invoke generation.

### Instruction-like listing

A seller description tells the model to ignore filters and guarantee fit. Specify the architectural controls and tests that keep the text inert.

## Applied exercise

Implement lexical and vector-like retrieval plus hybrid deduplication behind one candidate interface. Add permission, freshness, scope, conflict, missingness, and deterministic incompatibility controls; an inspectable ranker; context packet; grounding trace; and structured fallback. Report retrieval, ranking, context, and end-to-end results separately.

## Optional formative MCQs

1. What does cosine similarity establish?
   - A. Compatibility
   - B. Permission
   - C. Closeness under a selected representation and metric
   - D. User value
   - **Answer: C.**

2. When every retrieved record is unauthorized, what is the result?
   - A. Ask a generator from memory
   - B. No eligible evidence; abstain or use a permitted fallback
   - C. Show titles with warnings
   - D. Lower permission threshold
   - **Answer: B.**

3. What must remain true if generation is removed?
   - A. The product fails
   - B. Structured candidate evidence and behavior states remain useful
   - C. Retrieval disappears
   - D. Permission changes
   - **Answer: B.**

## Advanced challenge

Design a permission-safe trace that lets operators distinguish not retrieved, retrieved then denied, stale, conflicting, excluded, and empty states without copying restricted payloads into broadly accessible logs.

## Completion evidence

Pass when every inclusion/exclusion is explainable, empty evidence never triggers invention, generated prose is optional, and component results remain separate from product claims.
