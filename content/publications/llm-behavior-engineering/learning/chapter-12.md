# Learning Pack 12 - Evaluate Retrieval and Generation Together

> Publication learning material only. Not an Abhyaas certification bank.

## Recall and explain

1. Why can answer-only scoring misdiagnose a retrieval-grounded system?
2. Which diagnostic questions belong to corpus, query, retrieval, ranking, assembly, generation, citation, and evaluator layers?
3. Why should retrieval and generated-answer metrics remain separate?
4. What does an oracle-context replay test?
5. Why does faithfulness not establish source correctness or authority?

## Scenario decisions

### Correct evidence, unsupported answer

The current bulletin is retrieved and packed intact, but the proposal omits its condition. Classify each component and choose a controlled replay.

### Wrong retrieval, correct abstention

No eligible supporting unit exists and the system abstains. Explain which component failed, which behavior passed, and how an aggregate should represent the case.

### Faithful to a disputed source

The proposal accurately restates a cited policy whose authority is disputed. Route the technical evidence and decision rights.

## Applied exercise

Create eight paired synthetic cases for corpus absence, query drift, candidate miss, rerank displacement, qualifier truncation, ignored evidence, citation mismatch, and evaluator disagreement. Provide answerability labels, component metrics, case traces, one controlled intervention per case, and a disputed-case queue.

## Formative questions

1. Retrieval fails to find support and the model correctly abstains. Which statement is accurate?
   - A. Every component failed.
   - B. Retrieval/corpus evidence failed while bounded generation behavior passed.
   - C. The system is production-ready.
   - D. Abstention proves no source exists.
   - **Answer: B.**

2. A faithfulness grader gives a high score against an incorrect source. What is established?
   - A. Organizational correctness.
   - B. Source authority.
   - C. Agreement with the supplied source under that grader only.
   - D. Release approval.
   - **Answer: C.**

3. Which failure cannot be averaged away?
   - A. One low reciprocal rank on an ordinary case.
   - B. A forbidden candidate entering generation.
   - C. A slow synthetic operation count.
   - D. A disputed optional background label.
   - **Answer: B.**

## Completion evidence

Pass when the learner can reproduce a layer diagnosis, preserve correct abstention, justify every metric by its question, expose label/evaluator uncertainty, and identify decisions that require domain or release authority.
