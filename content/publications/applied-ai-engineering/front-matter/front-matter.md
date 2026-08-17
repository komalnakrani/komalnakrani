# Applied AI Engineering

## From Model Capability to Dependable Product Behavior

Komal Nakrani

First edition, version 1.0.0 (published 2026-08-17)

Copyright (c) 2026 Komal Nakrani. All rights reserved except where separately stated for cited sources or companion dependencies. This book is original. Patchwork, Patchwork Find, and every constructed satellite scenario are fictional. Their records, measurements, incidents, decisions, and outcomes are synthetic teaching material, not evidence about a real product, customer, employer, or deployment.

## Professional boundary and disclaimer

This book is technical and professional education. It is not legal, privacy, security, safety, accessibility, audit, medical, financial, regulatory, or compliance advice. A framework mapping is not certification. A checklist is not approval. A passing local test is not proof of production readiness. Readers must involve qualified specialists and explicitly designated organizational authorities when a decision requires their expertise or authority.

The Applied AI Engineer owns product-oriented engineering work within delegated scope: define behavior, implement the combined system, expose uncertainty, collect evidence, test controls, recommend dispositions, contain failures, and escalate. The role does not acquire formal product, domain, privacy, security, safety, legal, release, or risk authority merely by performing the work. Throughout this book, evaluation and review provide evidence. They do not silently transfer the decision right.

The learning packs shipped with the book are marked `NOT FOR LIVE CERTIFICATION BANK`. They support practice and review. Buying, reading, or completing this book is not required for any independent Abhyaas certification, and the book does not claim to confer certification.

## Preface

An AI capability can be impressive and still fail as a product. A model may produce fluent text while using the wrong evidence. A ranking may improve on average while failing the segment where mistakes matter most. A control may exist in policy but not in code. A release may look healthy because service uptime is green while users receive stale, incompatible, or unsupported results. A provider change may improve a benchmark and quietly alter abstention, latency, cost, or permission behavior.

Applied AI engineering begins where the model demo stops. Its unit of accountability is the observable behavior of a combined system for a defined user task. That system includes interfaces, application state, deterministic policy, data and context, learned components, tools, infrastructure, operators, feedback paths, and human decision rights. The model matters, but it is one changing component inside a larger product contract.

This book teaches a recursive evidence loop:

1. define the user task, consequence, baseline, and value hypothesis;
2. state required, uncertain, abstaining, escalating, degraded, and prohibited behavior;
3. choose the simplest mechanism that can satisfy the behavior contract;
4. build representative task data, authorized context, and inspectable system boundaries;
5. implement one production-shaped path that succeeds and fails visibly;
6. construct cases, error definitions, judgment methods, and experiments that change decisions;
7. engineer reliability, resource budgets, privacy-conscious observation, and implemented controls;
8. release with bounded exposure, diagnose real behavior, and preserve rollback and authority;
9. change models or providers without rewriting the product promise after seeing the result;
10. reuse only what repeated evidence has earned and lead decisions without hiding limitations.

The loop is recursive rather than linear. Evaluation may invalidate the mechanism choice. A production incident may expose a missing behavior clause. A resource budget may force reduced capability. A migration replay may reveal that a provider-independent interface was not actually independent. Returning to an earlier decision is not failure when the return preserves evidence, ownership, and a controlled disposition. It is how the system learns without laundering uncertainty into confidence.

## The running product

The reader develops Patchwork Find, a bounded repair-part discovery capability for a fictional marketplace. A user may provide a description, partial dimensions, catalog attributes, or an image of a worn part. Seller records are inconsistent. Compatibility can be incomplete or disputed. A wrong match can waste money, delay a repair, or contribute to unsafe use.

Patchwork therefore cannot treat retrieval score, generated explanation, or user engagement as compatibility truth. It must keep evidence provenance, permissions, freshness, known incompatibilities, missing measurements, disputed attributes, abstention, seller confirmation, qualified review, and prohibited effects explicit. Learned components may help retrieve, rank, structure, or explain evidence. Deterministic rules preserve known exclusions and effect boundaries. The product may draft a reversible seller question, but it may not contact a seller, purchase an item, invent evidence, overrule a known incompatibility, or imply guaranteed fit.

The companion implements only a synthetic local slice of this case. Its successful execution proves that the included code behaves as tested for the supplied fixtures. It does not prove population representativeness, real compatibility, provider equivalence, user comprehension, production latency, production cost, privacy compliance, safety, accessibility, release readiness, or organizational authorization.

## Who this book is for

The primary reader is a software, product, data, ML, solutions, or platform engineer who can already build ordinary application software and wants to own AI-powered product behavior responsibly. You should be comfortable reading application code, APIs, schemas, tests, configuration, and structured logs. You should know the purpose of databases, identity and access, version control, and CI/CD. You should have introductory familiarity with probability and common classification or ranking metrics.

You do not need to be a model researcher, statistician, security specialist, privacy counsel, product manager, or site reliability specialist. The book teaches the engineering decisions that connect those disciplines. It also teaches when the Applied AI Engineer must stop, request qualified review, or route a decision to a different authority.

If probability, thresholds, ranking metrics, calibration, sampling, or uncertainty intervals are rusty, use Appendix A at the moment a chapter needs them. The appendix supplies decision-depth refreshers, not a substitute for qualified statistical review. Appendix E distinguishes the Applied AI Engineer from adjacent roles so collaboration does not become ownership drift.

## How the book is organized

The six parts follow the product evidence loop.

- Part I defines the unit of accountability, user task, behavior contract, and mechanism decision.
- Part II constructs representative inputs, authorized context, inspectable boundaries, and a runnable vertical slice.
- Part III turns consequence into evaluation cases, error policy, credible judgment, and reproducible experiments.
- Part IV makes the system dependable under probabilistic failure, tail latency, capacity, cost, observation, privacy, threats, and controls.
- Part V releases through bounded exposure, diagnoses incidents, and changes models or providers without losing the product contract.
- Part VI earns reuse from repeated evidence and applies the same discipline to leadership decisions.

Each chapter has four layers. The main argument explains the decision and its tradeoffs. Patchwork applies the decision to one continuing dossier. Figures make relationships visible but do not replace the surrounding prose or evidence. The companion turns selected decisions into deterministic artifacts and tests. The chapter state and immediate-QA records preserve what changed, what remains unsupported, and what the next chapter may assume.

The six appendices serve different jobs:

- Appendix A refreshes measurement concepts at decision depth.
- Appendix B supplies copyable artifact templates with completion conditions.
- Appendix C supplies system, threat, effect, authority, and change review checklists.
- Appendix D explains the provider-neutral companion and safe extension rules.
- Appendix E defines canonical terminology and adjacent-role boundaries.
- Appendix F explains source, claim, figure, edition, errata, and index records.

## Reading paths

For a first complete read, follow the chapter order. Concepts deliberately acquire canonical homes: later chapters apply the definitions rather than quietly replacing them.

For an opportunity or prototype review, read Chapters 1-4, then use the task brief, behavior contract, and mechanism decision templates in Appendix B. A stopped or non-AI disposition is a valid result.

For a team building its first production-shaped path, read Chapters 5-8, run the companion contract/data/retrieval/interface tests, and complete the combined-system checklist in Appendix C before adding provider-specific complexity.

For evaluation design, read Chapters 9-12 in order. A case set without consequence coverage, a score without an error policy, a grader without calibration limits, or an experiment without a preregistered disposition is incomplete.

For reliability and governance work, read Chapters 13-16 with the failure, resource, observation, control, and authority checklists. Do not interpret these chapters as permission to self-approve security, privacy, safety, or release risk.

For release and change work, read Chapters 17-19 together. Readiness, rollout, incident learning, migration, fallback, rollback, and retirement share evidence but keep distinct decision rights.

For platform or leadership work, read Chapters 20-21 only after examining the evidence produced by the earlier loop. One successful case is not a platform mandate, and a portfolio summary must not erase critical negative evidence.

## Working with evidence states

The book repeatedly uses bounded evidence language. Keep these distinctions visible in notes and reviews:

- `observed`: recorded by the named method for the named version, population, segment, and time;
- `inferred`: a reasoned interpretation that remains separable from the observation;
- `synthetic`: constructed teaching or test evidence that cannot establish a real-world outcome;
- `supported`: current evidence is adequate for the stated narrow claim;
- `unsupported`: the claim exceeds current evidence or population coverage;
- `unknown`: necessary evidence is absent or cannot yet be reconciled;
- `untestable`: the current method cannot credibly evaluate the claim;
- `disconfirmed`: evidence contradicts the working hypothesis;
- `met`, `gap`, `exception`, `reduced scope`, and `block`: explicit gate states, not mood or confidence adjectives.

A claim should always carry a scope, version, evidence identity, limitation, owner, and next trigger. A limitation is part of the result. Negative evidence belongs in the durable record. Agreement among tools or reviewers does not create truth or formal authority.

## Running the companion

From the repository root, use:

```sh
npm run test:companion:aae
node content/publications/applied-ai-engineering/companion/run.mjs
```

The companion requires Node.js built-ins, local files, and no provider secret. It uses fixed fixtures and seeds so repeated runs can be compared. Chapters 3 and 5-21 add contracts, data, retrieval, interfaces, evaluation, experiments, reliability, observability, controls, release, incidents, migration, reuse, and leadership evidence. Appendix D maps each artifact and explains how to replace a deterministic adapter without weakening the consequential contract.

Do not paste customer data, secrets, raw production traces, or proprietary provider content into the companion. Do not add a network call merely to make the example feel realistic. A provider adapter is optional; the local path remains the reference behavior and failure oracle.

## Figures and accessible use

Figures F01.1 through F21.2 are original ImageGen PNG teaching figures. They use layout, lanes, gates, shapes, arrows, state, and short labels to support the explanation. Color is not intended to carry meaning alone. Read each image with its caption and nearby prose. When visual detail is inaccessible, use the manuscript alt text and the figure registry description.

Some figures contain illustrative values or tokens. F14.1 timing values are synthetic and are not measured Patchwork performance. F15.1 trace and version tokens are illustrative. The `30 DAYS` token in F15.2 is not a universal retention policy. Conceptual diagrams in Chapters 19-21 do not replace the canonical PF-12 records or transition rules.

The canonical figure sources are PNG. Delivery tooling may create derivatives, but derivatives are not the provenance source. Appendix F explains figure identity, prompt records, dimensions, licenses, corrections, and edition handling.

## Sources, claims, and cases

Material claims in the chapters use stable claim IDs that resolve through `claims.json` to `sources.json`. Sources include standards, peer-reviewed work, official documentation, first-party engineering publications, and first-party retrospectives. A source may support a bounded statement without proving the entire book synthesis. Vendor evidence remains vendor evidence. A benchmark retains its task, dataset, version, and measurement limits. A framework retains its scope and does not become universal law.

Patchwork is constructed. Public cases are used only for the bounded facts their primary sources support. Neither source access nor citation quantity guarantees correctness. Appendix F explains how to inspect the registries, preserve access dates and limitations, and submit a correction without silently replacing the edition.

## Practice, review, and completion

Every chapter learning pack contains recall, scenario, applied exercise, formative MCQ, advanced challenge, and completion evidence. Use the exercise to produce a reviewable artifact, not merely a personal reflection. A strong submission shows the decision, evidence, limitations, affected segments, owner, authority, and next gate. When the correct result is stop, delay, reduce scope, abstain, roll back, or reject reuse, record it plainly.

A practical study cadence is:

1. read the chapter argument and inspect both figures;
2. run the relevant companion command or inspect the named artifact;
3. complete the applied exercise with explicit evidence states;
4. compare the result to the chapter failure modes and residual limits;
5. update a personal dossier using Appendix B;
6. ask a peer to challenge the unsupported claim, hidden authority transfer, and missing negative evidence.

Completion of the book means the reader can assemble and defend a bounded engineering dossier. It does not mean every uncertainty is resolved or every specialist decision is owned by the reader.

## What not to optimize away

As the dossier grows, resist pressure to remove the states that make it honest. Do not optimize away abstention because it lowers coverage, negative cases because they lower a score, segment views because they complicate a dashboard, disagreement because it slows review, rollback because the new provider appears better, or authority fields because the team trusts one another. These records are not administrative decoration. They are the mechanism by which a future engineer can distinguish supported behavior from confidence theater.

Conciseness is valuable when it preserves the decision. Compression becomes harmful when it merges observation with inference, evaluation with authority, recovery with metric restoration, or reuse with resemblance. Prefer a small explicit artifact over a polished summary that cannot be challenged or resumed.

## Edition, corrections, and status

This file belongs to version 1.0.0, first edition, published on 2026-08-17. The web edition and downloadable PDF were released only after the reviewed canonical files passed deterministic PDF generation, complete-page rendering, searchable-text, bookmark, link, asset-mirror, and web-route checks. The release record in Appendix F identifies the exact artifact and publication transition.

Corrections after publication must enter the errata record. A correction identifies the edition, location, problem, disposition, resolution date when applicable, and replacement text. No web page or PDF should be silently changed while retaining the same edition identity. Appendix F supplies the record format and explains when a correction requires a patch edition rather than an erratum alone.

## A note on judgment

Applied AI systems are full of tempting shortcuts: model quality becomes product quality, average score becomes safety, a reviewer majority becomes truth, a policy sentence becomes a control, uptime becomes usefulness, a demo becomes adoption, and a provider swap becomes an implementation detail. This book asks the reader to slow down exactly where those substitutions feel convenient.

The discipline is not pessimism. It is the ability to make useful behavior possible without hiding what the evidence cannot yet support. The goal is a product that can act, abstain, degrade, recover, change, and stop for reasons that remain inspectable to the people responsible for its consequences.
