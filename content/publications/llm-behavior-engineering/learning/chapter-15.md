# Learning Pack 15 - Run Experiments That Isolate Change

> Publication learning material only. Not an Abhyaas certification bank.

## Recall and explain

1. What makes a hypothesis falsifiable?
2. Which behavior-facing factors must be frozen for a prompt experiment?
3. Why do paired cases help attribution?
4. Why can an aggregate improvement still require revision or rejection?
5. Distinguish retain, revise, reject, scope, and release.

## Scenario decisions

### Four changes together

Prompt, reranker, model, and judge all change. Explain why attribution fails and repair the comparison.

### Gujarati regression

The candidate gains on two English cases, loses on one Gujarati citation case, and preserves a conflict escalation. Issue a bounded disposition with uncertainty.

### Tail-duration regression

Synthetic aggregate quality rises while the predeclared p99 teaching-duration gate fails. Preserve resource evidence and owner authority.

## Applied exercise

Produce a preregistered experiment packet containing decision, hypothesis, one variable family, frozen controls, paired cases, repeats, metrics, hard/segment/resource gates, raw transitions, uncertainty, confounds, negative findings, and one explicit disposition.

## Formative questions

1. Candidate and baseline use different judges. What can be attributed?
   - A. The generator caused the score change.
   - B. Only the combined candidate/judge setup unless repaired.
   - C. The prompt caused it.
   - D. Production quality improved.
   - **Answer: B.**

2. Aggregate pass count rises but a protected segment moves pass-to-fail. What should happen?
   - A. Ignore the small segment.
   - B. Apply the predeclared segment gate and inspect raw cases.
   - C. Delete the segment.
   - D. Release automatically.
   - **Answer: B.**

3. What does a `release` experiment disposition mean?
   - A. Production is approved.
   - B. Evidence advances to a separate authorized release gate.
   - C. Risk is accepted.
   - D. Rollback is unnecessary.
   - **Answer: B.**

## Completion evidence

Pass when one bounded claim maps to one controlled variable family, raw/segment/resource evidence remains visible, uncertainty matches the design, and the recommendation cannot self-authorize release.
