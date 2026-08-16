# Learning Pack 07 - Make Outputs Typed and Bounded

> Publication learning material only. Not an Abhyaas certification bank.

## Recall and explain

1. Distinguish transport, parse, structural-schema, semantic, provenance, and authorization validation.
2. Why can schema-constrained output improve syntax without establishing correctness?
3. When is deterministic repair acceptable, and how does it differ from regeneration?
4. Why must an evidence identifier be checked for existence, permission, currency, and support separately?
5. What makes valid, repair, abstain, escalate, and fail closed product states rather than prose styles?

## Scenario decisions

### Valid shape, fabricated authority

A schema-valid proposal says warranty is approved and cites an identifier absent from the authorized evidence bundle. Record every passing and failing gate, terminal state, retry eligibility, and authority.

### Three retries later

The third regenerated response parses. Explain which preceding failures and workload observations must remain visible and what the successful parse still cannot prove.

### Schema evolution

A team adds `approved: boolean` to the result. Classify the structural, semantic, and authority consequences and state who must review the change.

## Applied exercise

Run the deterministic output fixtures. For each candidate, record raw identity, first failing gate, all additional errors, terminal state, retry policy, effect state, and owner. Add one compatible schema change and one prohibited authority change.

## Formative questions

1. What does structural schema conformance prove?
   - A. The evidence is true.
   - B. The object satisfies the implemented shape constraints.
   - C. The user is authorized.
   - D. Warranty approval is valid.
   - **Answer: B.**

2. A source ID exists but belongs to another tenant. Which gate rejects it?
   - A. Parse.
   - B. Type.
   - C. Provenance/authorization.
   - D. None.
   - **Answer: C.**

3. Safety-critical ambiguity should normally enter which explicit state?
   - A. Retry until decisive.
   - B. Escalate to the named authority.
   - C. Valid.
   - D. Repair syntax.
   - **Answer: B.**

## Completion evidence

Pass when every invalid or unsupported fixture reaches a bounded state with preserved errors, no generated field gains authority, and the learner can explain what each validation gate does and does not establish.
