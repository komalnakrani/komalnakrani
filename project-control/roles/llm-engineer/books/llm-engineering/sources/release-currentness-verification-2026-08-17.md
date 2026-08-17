# LLM Engineering release-currentness verification

Verified: 2026-08-17 (Asia/Kolkata)

## Verdict

**PASS WITH ONE MAINTAINED-DOCUMENTATION REDIRECT NOTE.** The two publication registries contain 100 source records that deduplicate to 66 URLs. All 66 were reachable with redirects enabled: 65 returned HTTP 200, and the NIST AI 700-1 PDF returned HTTP 206 to a ranged GET after its PDF host returned 404 to HEAD.

This is a reachability and destination check, not proof that a source is correct, current for every implementation, sufficient for a claim, licensed for reuse beyond its terms, or transferable to Mosaic Desk.

## Check inventory

| Source host | Unique URLs | Result |
| --- | ---: | --- |
| arXiv | 38 | 38 reachable |
| OpenAI Developers | 7 | 7 reachable |
| Hugging Face | 7 | 7 reachable |
| NIST DOI records | 3 | 3 reachable; one required ranged GET |
| Google AI for Developers | 2 | 2 reachable |
| PyTorch | 2 | 2 reachable |
| NVIDIA TensorRT-LLM | 2 | 2 reachable |
| Anthropic documentation | 2 | 2 reachable |
| Google Cloud | 1 | 1 reachable with a maintained-product redirect |
| vLLM | 1 | 1 reachable |
| Anthropic engineering | 1 | 1 reachable |

Requests used redirect-following HEAD with a publication-QA user agent, a 10-second connection timeout, a 30-second total timeout, and one retry. Non-successful HEAD responses were retried with a ranged GET. No authenticated console, provider API, model, benchmark, training job, deployment, or external effect was invoked.

## Redirect and access notes

- `https://docs.cloud.google.com/vertex-ai/generative-ai/docs/models/evaluate-judge-model` now redirects to `https://docs.cloud.google.com/gemini-enterprise-agent-platform/models/evaluate-judge-model`. The destination remains titled **Evaluate a judge model**, retains human-rating calibration guidance, and reports a 2026-08-13 update. The existing Volume 1 `CLM-042` and Volume 2 `CLM-036` uses remain bounded to grader calibration, coupling, and limitations. The current canonical destination is now synchronized across both publication `SRC-027` records and the role source register; the volatility note remains. The successful redirect does not imply API stability.
- `https://doi.org/10.6028/NIST.AI.700-1` resolves to the expected NIST PDF. The NIST file host returned 404 to HEAD but 206 with content to a ranged GET. This is an HTTP-method/access behavior, not a broken source.
- The other DOI records resolve to their expected NIST PDFs. arXiv abstract records identify the cited papers. Maintained provider, library, runtime, evaluation, deprecation, quantization, and serving pages remain volatile even when reachable.
- Both publication `SRC-027` records now record `accessedAt: 2026-08-17` after this release recheck. Other source records retain their truthful earlier access dates; the complete 66-URL recheck is recorded here and final proofs are rebuilt after the synchronized canonical update.

## Evidence boundaries retained

- Reachability does not validate a paper's generalization beyond its model, data, hardware, task, rubric, or version.
- Official documentation establishes a maintained interface or recommendation only for its stated product and date; it does not establish provider equivalence, Mosaic fitness, or organizational approval.
- Benchmarks, model cards, dataset cards, schemas, safe formats, evaluators, and deterministic companion tests remain inputs to bounded engineering judgment, not release authority.
- Mosaic Desk remains fictional and its data, runs, resource values, failures, and outcomes remain synthetic or simulated.

## Prepared public-role transition - not applied

The existing role manifest is schema-valid and complete with 12 competencies and 12 objectives. Public role discovery is gated only by `status === "published"`; there is no separate role publication-date field.

Apply this exact manifest change only in the coordinated release transition after both LLM books have `status: "published"`, non-null publication dates, enabled canonical PDFs, accepted download files, and passing final web/PDF checks:

```diff
--- a/content/roles/llm-engineer/role.json
+++ b/content/roles/llm-engineer/role.json
@@
-  "status": "draft",
+  "status": "published",
```

No other role-manifest field needs to change. Applying the status change causes the role to appear in `/roles/`, generates `/roles/llm-engineer/`, and allows that page to show the two published books through `booksForRole`. Apply it in the same release unit as the two book transitions so the public role page never appears with an empty publication list.

After applying the future transition, require:

1. publication and schema validation pass;
2. the production build contains `/roles/llm-engineer/index.html`;
3. `/roles/` lists LLM Engineer once with published status;
4. the role page preserves the current includes/excludes boundary and lists both volumes in volume order;
5. no unpublished course is exposed merely because the role is public.

## Disposition

URL reachability is ready for the coordinated release gate. The `SRC-027` canonical redirect and access-date refresh are reconciled before final PDF digests are frozen. The role transition above is prepared but intentionally unapplied.
