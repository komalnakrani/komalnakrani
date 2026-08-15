# Chapter 09 Blueprint — Put AI Inside a Bounded Workflow

## Purpose and exit capability

The reader can reject AI where deterministic behavior is better, or design an AI-assisted path whose task, uncertainty, data/tools, error consequences, evaluations, controls, latency, cost, and human decisions are explicit.

## Prerequisites and non-scope

- Prerequisite: outcome/scope contract plus system, interface, data, environment, and identity boundaries.
- Non-scope: foundation-model training, universal agent architecture, benchmark-as-workflow-proof, or human review as blanket risk transfer.

## Concepts, skills, and decision models

- Mechanism ladder: deterministic rule → retrieval/search → model suggestion → constrained tool action → bounded autonomy.
- Task decomposition; error taxonomy by consequence/detectability; control ladder; abstention/escalation; evaluation object/data/grader/harness.
- Change/version record for model, prompt, tool, retrieval corpus, policy, and evaluator.
- Skill: compare AI and non-AI alternatives on outcome, error, reversibility, latency, cost, operability, and governance.

## Architecture, implementation, and tools

- NIST AI RMF 1.0/GenAI profile (`versioned; RMF under revision`), OWASP LLM Top 10 2026 (`community/versioned`), vendor eval guides (`volatile`; OpenAI Evals platform deprecation noted).
- Companion defaults to deterministic model test double; optional provider adapter behind stable interface. Implement retrieved evidence, ranked suggestions, deterministic eligibility, qualified approval, timeout/cost budget, refusal, and audit.

## Scenario and artifacts

- Extend `OA-05`: AI decision record, error taxonomy, evaluation plan, control ladder, non-AI fallback, human-decision owner, latency/cost envelope.
- AI may summarize/rank evidence; it may not autonomously authorize safety-relevant action.

## Cases and bounded use

- `R06-C005`: noisy evals and production regressions.
- `R06-C007`, `R06-C008`: company-reported trace/eval practices.
- `R06-C010`: original bounded AI path.

## Failures, mistakes, and tradeoffs

- AI-first decomposition, aggregate score, prompt-only control, reviewer overload, unbounded tool access, hidden fallback, vendor API treated as architecture.
- Tradeoff: useful flexibility versus uncertainty/control burden; select the least uncertain mechanism that meets the outcome.

## Exercise and completion evidence

Compare deterministic, retrieval, model, and agent designs for three tasks. Implement the bounded test-double path. Pass when errors map to consequence, controls, segmented evals, stop rules, and named authority.

## Figures

- `F09.1` mechanism/control decision ladder.
- `F09.2` error-consequence-eval-control matrix.

## Evidence, competencies, depth, and handoff

- Claims: `R06-S029`–`R06-S039`, `R06-S046`; cases `R06-C005`, `R06-C007`, `R06-C008`.
- Domains: primary `FDE-K03`, `FDE-K07`, `FDE-K08`, `FDE-K09`; secondary `FDE-K04`.
- Depth: major technical/risk chapter; target 12,000–15,000 words.
- Handoff: Chapter 10 integrates AI and non-AI controls into the complete governance evidence chain.
- Prohibitions: no universal AI recommendation, context-free accuracy, or human-loop safety claim.
