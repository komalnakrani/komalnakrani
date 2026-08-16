# Learning Pack 13 - Build Representative Evaluation Cases

> Publication learning material only. Not an Abhyaas certification bank.

## Recall and explain

1. Why is representativeness relative to a declared population and claim?
2. Which fields make an evaluation case traceable?
3. Why should transformed siblings share a split?
4. How do record count and coverage differ?
5. Why can synthetic multilingual cases close a mechanics gap without proving population adequacy?

## Scenario decisions

### Random-row leakage

A paraphrased sibling of a development thread appears in holdout. Design family identity, detection evidence, split repair, and exposure history.

### Missing Gujarati conflict

Gujarati supporting cases exist, but no Gujarati conflicting-evidence case does. State what can and cannot be claimed and how a reviewed synthetic case should be labeled.

### Permission change

A source owner withdraws evaluation permission after freeze. Design deletion, tombstone, affected-claim, and rerun behavior without retaining prohibited content.

## Applied exercise

Repair a short-English-heavy inventory. Produce a population statement, clause-to-cell matrix, provenance schema, selection rationale, structured labels, family-aware splits, leakage audit, multilingual gaps, protected holdout, exposure ledger, prohibited uses, and refresh triggers.

## Formative questions

1. What does a random sample prove when the source pool excludes Gujarati conflicts?
   - A. Full representativeness.
   - B. Coverage only within the source pool and sampling assumptions.
   - C. Gujarati adequacy.
   - D. Fairness certification.
   - **Answer: B.**

2. A translated holdout case shares a source family with a development case. Where should it go?
   - A. Any split because text differs.
   - B. The same family-grouped split.
   - C. Production only.
   - D. Training automatically.
   - **Answer: B.**

3. Can evaluation cases become training examples by default?
   - A. Yes, after scoring.
   - B. Yes, if synthetic.
   - C. No; separate authorization and split/exposure consequences are required.
   - D. Only for managed models.
   - **Answer: C.**

## Completion evidence

Pass when every clause and consequential slice has visible evidence or a declared gap, every record has provenance/split/rubric/ambiguity, and leakage, permissions, synthetic routes, and unsupported populations remain explicit.
