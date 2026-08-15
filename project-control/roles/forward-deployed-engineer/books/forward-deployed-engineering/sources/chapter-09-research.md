# Chapter 09 Research — Put AI Inside a Bounded Workflow

## Research question

When does AI improve a workflow, and how can its uncertainty, tool access, controls, latency, cost, and evaluation remain visible?

## Claim and evidence map

- **C09.1 — AI risk management should be lifecycle- and use-case-specific.** `R06-S029`, `R06-S030`, `R06-S031`; the 1.0 framework is versioned and revision status must remain visible.
- **C09.2 — Evaluation separates tasks, trials, graders, traces/outcomes, harnesses, capability tests, and regression tests.** `R06-S032`, `R06-S033`, `R06-S035`.
- **C09.3 — Simpler deterministic or composable workflows are preferable when they meet the need; agents require ground truth, checkpoints, and stopping conditions.** `R06-S036`.
- **C09.4 — A model is only one component in a production system.** `R06-S037`.
- **C09.5 — Static evaluations can miss deployment-like behavior and production tails.** `R06-S046`.
- **C09.6 — Current security taxonomies can prompt threat discovery but are neither exhaustive nor formal certification.** `R06-S039`.

## Durable principles

First decide whether uncertainty is useful and tolerable for the task. Decompose the workflow; keep deterministic policy deterministic; constrain tools and data; define human review by consequence; measure task outcomes by risk segment; set latency/cost budgets; record model/version/prompt/tool changes; and preserve a non-AI fallback or stop path where required.

## Cases

- `R06-C005` shows noisy evals missing production quality issues.
- `R06-C007` and `R06-C008` show production traces and continuous evaluation as self-reported deployment practices.
- `R06-C010` allows summarization/ranking but reserves safety-relevant eligibility and approval for deterministic policy and qualified humans.

## Disputes and limits

Human review is not automatically safe, scalable, attentive, or accountable. Model benchmarks do not establish workflow performance. The OpenAI Evals platform cited in `R06-S032` is scheduled for late-2026 deprecation; only portable evaluation concepts belong in durable prose.

## Remaining gaps

No release blocker. Phase 07 must define an error taxonomy, control ladder, and cost/latency exercise without endorsing one model vendor.

## Manuscript prohibitions

Do not call output “correct” without criteria, prescribe AI for every ambiguous task, or imply a human-in-the-loop transfers all risk to the reviewer.
