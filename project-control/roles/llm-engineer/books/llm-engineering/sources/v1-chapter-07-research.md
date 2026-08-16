# V1 Chapter 7 Research Pack — Make Outputs Typed and Bounded

## Frozen identity

- Milestone: MD-03.
- Purpose: turn generated text into a validated interface with explicit failure paths.
- Reader outcome: distinguish constrained generation, parsing, schema validation, semantic validation, and authorization.

## Evidence and claims

`V1-C07-CL01` (`LLME-BSRC-013`) supports schema-constrained output where an access path provides it. `V1-C07-CL02` (`008`, `013`, `026`) supports treating valid syntax as insufficient for truth or safety. `V1-C07-CL03` (`008`, `011`) supports explicit rejection, retry, fallback, and human escalation.

A typed output pipeline should record schema version, validation errors, repair/retry policy, semantic checks, provenance fields, and downstream authority. The durable principle is “parseable is not correct.” Provider-specific structured-output APIs and supported schema subsets are volatile implementation details.

## Mosaic Desk scenario

Define an output object with summary, action candidates, evidence message IDs, uncertainty, and abstention. Failure injection: the model emits schema-valid JSON with an unsupported deadline and a fabricated evidence ID. The system must reject semantic invalidity and must not auto-send or mutate a task system. The research artifact is a failure taxonomy mapped to validators.

## Limits and gaps

- Structured-output documentation establishes interface behavior under stated conditions, not factual correctness.
- Retrying may amplify cost or repeat the same semantic error.
- Schema evolution needs compatibility and migration policy.
- Product owners decide permissible actions; security engineers define authorization controls; the LLM engineer validates the model-facing contract.

## Phase 07 blueprint handoff

Teach the validation ladder: decode constraint→parse→schema→semantic/provenance→authorization. Skill check: classify six failures by layer. Sources: `008`, `011`, `013`, `026`; case linkage: `LLME-CASE-014`. Figures: validation gates and bounded retry state machine. Non-scope: provider tutorial, application database design, or claims that a JSON schema eliminates hallucination.
