# Part Introductions

## Part I - Define the Behavior

The first production mistake often happens before code: the team treats available model capability as the product requirement. A fluent demo then supplies false momentum. Users, consequences, baselines, uncertainty, prohibited behavior, and decision authority remain implicit while the implementation becomes harder to question.

Part I replaces capability-first work with an observable behavior contract. Chapter 1 establishes combined product behavior as the unit of accountability and separates engineering evidence from outcome authority. Chapter 2 turns the request into a falsifiable user task, baseline, consequence map, value hypothesis, non-goals, and cheapest-next-evidence plan. Chapter 3 makes required, allowed, uncertain, abstaining, escalating, degraded, and prohibited behavior explicit. Chapter 4 compares deterministic logic, search, ranking, predictive models, generation, tools, and hybrids, then stops at the simplest mechanism that can satisfy the contract.

Patchwork advances through `PF-01`, `PF-02`, and `PF-03`: a responsibility and task charter, a behavior/authority contract, and a mechanism portfolio with an experiment ladder. At the end of the part, the reader should be able to reject an AI proposal without rejecting the underlying user problem, preserve a non-AI baseline, state what the system must not do, and name the evidence that could change the mechanism decision.

The handoff into Part II is deliberately incomplete. The team knows what behavior it seeks and which mechanism is provisionally adequate. It does not yet know whether its data represents consequential use, whether runtime context is authorized and fresh, whether trust and state boundaries are sound, or whether one end-to-end path can fail safely. Those are construction questions, not details to hide behind the model choice.

## Part II - Construct the System

A behavior contract cannot execute by itself. It depends on data whose provenance and population are understood, context whose permission and freshness are enforced, interfaces that separate untrusted proposals from product state, and software that keeps failure visible. Part II builds that surrounding system without making the learned component the center of every diagram.

Chapter 5 constructs permitted, versioned task data and keeps sampling, labels, segments, leakage, exclusions, and unknown populations visible. Chapter 6 separates query transformation, source selection, candidate generation, permission, freshness, ranking, context assembly, provenance, and empty or conflicting evidence behavior. Chapter 7 draws the combined boundary across interface, application, policy, context, learned component, tools, runtime, owners, and authorities. Chapter 8 implements one production-shaped vertical slice with structured results, deterministic validation, explicit abstention and degradation, trace identity, and zero secret-dependent default execution.

Patchwork advances through `PF-04`, `PF-05`, and `PF-06`: the data/context substrate, combined-system boundary set, and inspectable local slice. The companion is useful here because it makes state transitions and failure branches executable. Its synthetic success remains narrow. It does not establish representative catalog coverage, real permissions, provider behavior, user comprehension, production performance, or release readiness.

The handoff into Part III is a working path whose claims can now be tested. The path is not evidence merely because it runs. Evaluation must represent the behavior contract and consequential segments, distinguish correct abstention from error, assign credible judgment methods, and connect experimental results to explicit dispositions.

## Part III - Build the Evaluation Loop

The question `does it work?` is too vague to govern an uncertain system. It conceals which users, clauses, segments, data states, mechanisms, and consequences were tested. It encourages a single score, lets common cases dominate rare but important failures, and turns evaluator agreement into a substitute for validity.

Part III makes evaluation a versioned engineering system. Chapter 9 constructs cases from behavior clauses and consequences, groups related examples, freezes release evidence, detects contamination, and keeps coverage gaps visible. Chapter 10 names error types, severity, detectability, reversibility, segments, controls, and thresholds without averaging away critical failures. Chapter 11 assigns claims to deterministic checks, references, calibrated graders, trained raters, specialists, or authorities and records disagreement as evidence. Chapter 12 preregisters paired comparisons and ablations, preserves confounds and negative results, and ends with adopt, revise, limit, reject, or investigate.

Patchwork advances through `PF-07` and `PF-08`: an evaluation suite, error policy, evaluator design, calibration evidence, and experiment packet. A challenger can improve aggregate recall and still be rejected because a critical segment regresses. A grader can agree with people and still remain unfit for a claim. A statistically sophisticated result can remain irrelevant if it does not change a decision.

The handoff into Part IV is a bounded evidence package, not a promise of dependable operation. The system must now survive partial retrieval, stale context, invalid output, dependency timeout, unknown effects, retry amplification, tail latency, capacity pressure, privacy limits, attacks, and control failure. Operational quality is part of product behavior.

## Part IV - Engineer Operational Quality

Learned behavior adds uncertainty, but many consequential failures occur elsewhere: context, tools, orchestration, interfaces, dependencies, state, and human process. A model-first diagnosis can make the system less reliable by changing the wrong layer. An uptime dashboard can remain green while behavior quality, permissions, or user outcomes fail.

Part IV engineers bounded failure and decision-bearing operation. Chapter 13 builds a layered failure matrix and a consequence-based fallback ladder with bounded retry, idempotency, circuits, degradation, reconciliation, and recovery evidence. Chapter 14 budgets the user's end-to-end clock, tails, concurrency, capacity, retries, cache semantics, quality, and total cost by segment. Chapter 15 designs purpose-limited signals and redacted traces that support diagnosis without routine raw-content surveillance. Chapter 16 connects threats and harms to implemented, tested, monitored controls, residual limitations, qualified review, exact confirmation, effect boundaries, and named authority.

Patchwork advances through `PF-09` and `PF-10`: failure/recovery policy, resource envelope, privacy-conscious observation policy, and an implemented control matrix. Synthetic timings, retention choices, incidents, and control results remain teaching evidence. Passing a control test does not accept residual risk. A privacy-conscious trace does not establish legal compliance. A fallback is safe only for the consequence and state it was designed to contain.

The handoff into Part V is an operable candidate with explicit residual gaps. Release must expose only what the next uncertainty requires, retain stop and rollback authority, and treat real-use evidence as a reason to revise the system rather than defend the original plan.

## Part V - Release, Learn, and Change

Production exposure changes the evidence and the consequence. It does not make uncertainty disappear. A broad launch may produce more data while destroying attribution and increasing blast radius. An incident may tempt the team to blame the model before testing data, context, control, tool, runtime, or metric hypotheses. A provider migration may improve an average while changing the product contract.

Part V keeps release and change bounded. Chapter 17 selects among offline replay, shadow, internal, canary, bounded cohort, regional, and broad exposure according to the next justified question. Readiness preserves unresolved gaps, stop triggers, rollback, cohort identity, and separate authority. Chapter 18 contains consequence first, reconstructs a layered timeline, tests and disconfirms hypotheses, protects sensitive traces, verifies recovery, and changes durable artifacts rather than code alone. Chapter 19 inventories model/provider dependencies, freezes the behavior contract, runs paired replay, records improved, unchanged, regressed, unknown, and untestable states, and migrates through explicit evidence gates with fallback and retirement proof.

Patchwork advances through `PF-11` and `PF-12` v0.1: a readiness packet, bounded cohort, incident record, compatibility matrix, and migration disposition. The fictional incident disconfirms the tempting model hypothesis and locates contributing conditions in seller-authored context and a product metric. The candidate provider is delayed despite aggregate improvement because critical abstention and compatibility behavior regress.

The handoff into Part VI is a complete single-product learning history. It is not yet a platform. Reuse requires independent cases, stable seams, ownership, isolation, migration, fallback, economics, and disconfirmation. Leadership requires preserving the same evidence and limitations while changing the altitude of the decision.

## Part VI - Compound Sound Judgment

The final part moves beyond one feature without leaving engineering evidence behind. Two shortcuts become especially attractive here. The first is premature abstraction: a local success becomes a shared service before its invariant, consumers, failure isolation, and maintenance cost are known. The second is authority inflation: a technical leader compresses unlike systems into a score and quietly turns a recommendation into a decision.

Chapter 20 uses a reuse ladder from local fix through repeated pattern, configurable component, shared service, and platform candidate. It separates portable mechanisms from local task data, thresholds, segments, policy, and authority. It records rejected abstractions as durable negative evidence. Chapter 21 compares systems by consequence, evidence gap, active change, operational burden, leverage, ownership, and next gate. It communicates at implementation, system, product, portfolio, specialist, and formal-authority altitudes while keeping evidence identity, limitations, uncertainty, and decision rights intact.

Patchwork completes `PF-12` v0.2 and v1.0: a ten-asset reuse ledger, rejected platform shortcut, cross-case validation, three-system portfolio, delegation record, six-altitude communication set, growth plan, and final synthetic dossier verifier. Hype and revenue are not evidence categories. Agreement does not erase negative evidence. Leadership is measured through decisions and systems improved, not title, tenure, or heroics.

The book closes with a recursive return path. Migration evidence can revise the reusable seam. Incident evidence can create a new evaluation case. A portfolio gap can reopen the behavior contract or stop a system. Completion means the artifact chain is inspectable and resumable, not that all uncertainty has vanished or the engineer owns every decision.
