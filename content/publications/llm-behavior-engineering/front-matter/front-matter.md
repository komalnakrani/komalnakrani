# LLM Behavior Engineering

## Contracts, Context, Retrieval, and Evaluation

Komal Nakrani

First edition review, version 1.0.0 (2026)

Copyright (c) 2026 Komal Nakrani. All rights reserved except where separately stated for cited sources or companion dependencies. This book is original. Mosaic Desk and all satellite cases are fictional. Their records, cases, measurements, failures, decisions, and outcomes are synthetic teaching material, not evidence about a real product, customer, employer, model, provider, or deployment.

## Professional boundary and disclaimer

This book is technical and professional education. It is not legal, privacy, security, safety, accessibility, medical, financial, regulatory, audit, or compliance advice. A framework mapping is not certification. A checklist is not approval. A passing local test is not proof of production readiness. Readers must involve qualified specialists and explicitly designated organizational authorities when a decision requires their expertise or authority.

The LLM Engineer owns measured language-model-system behavior within delegated scope: clarify a language task, define required and prohibited behavior, bind behavior-facing configuration, construct authorized context, evaluate evidence and outputs, diagnose change, and recommend a bounded disposition. The role does not acquire product, domain, release, privacy, security, safety, legal, risk, or executive authority merely by preparing the evidence.

The learning packs shipped with the volume are marked `NOT FOR LIVE CERTIFICATION BANK`. They support practice and review. Buying, reading, or completing this book is not required for any independent Abhyaas certification, and the book does not claim to confer certification.

## Preface

A language model can produce an impressive response while the surrounding system remains unfit for the task. The response may use stale evidence, omit a decisive limitation, violate a schema, drift under a new template, fail a language segment, or reach a product path whose authority was never defined. A team that calls all of this "model quality" cannot locate the failure or control the next change.

LLM behavior engineering begins by separating the model from the behavior-bearing system. The system includes instructions, message mapping, tokenizer and context behavior, retrieval, evidence assembly, schema and deterministic validation, evaluators, user and human review paths, versioned configuration, runtime limits, and release controls. The model matters, but it is one changing component inside a measurable contract.

This volume follows one recursive evidence loop:

1. define the task, consequence, behavior states, non-goals, and decision authority;
2. choose a model and access posture from task evidence rather than a leaderboard alone;
3. freeze the prompt, messages, context, schema, decoding, evaluator, runtime, and fixtures as one baseline;
4. separate trusted control from untrusted content and make output typed and bounded;
5. decide whether external evidence is necessary before selecting a retrieval technique;
6. preserve source identity, permission, freshness, qualifying spans, and conflicts through context assembly;
7. evaluate retrieval and generation separately and together on representative cases;
8. name consequential errors, assign credible judges, isolate one change, and preserve uncertainty;
9. release through an authority-bound path with minimized signals, replay, shadow, fallback, and rollback;
10. refer a repeated residual gap to adaptation only after smaller system changes fail credibly.

The loop is recursive. An evaluator disagreement may reopen the rubric. A missing corpus family may reopen the source map. A provider change may reopen the context budget or typed-output contract. Returning to an earlier artifact is not failure when the trigger, prior version, new evidence, changed artifact, and disposition remain visible.

## The running system

The reader develops Mosaic Desk, a fictional support-workflow assistant. A technician submits a bounded equipment question using domain shorthand and sometimes Gujarati-English language mixing. The system may consult authorized manuals, service bulletins, warranty records, parts data, and case notes. It returns a typed proposal with citations, evidence state, uncertainty, and an explicit terminal behavior.

Mosaic Desk cannot treat semantic similarity as source authority. It cannot treat a fluent answer as factual or approved. It must preserve permission, freshness, revision, qualifying span, conflict, missing evidence, abstention, escalation, and fail-closed behavior. A human decision gate remains distinct from model generation. The proposal path stops before any external effect.

The companion implements only deterministic, synthetic mechanics for this case. Its successful execution proves that the included code behaves as tested for the supplied fixtures. It does not prove real model capability, population coverage, multilingual quality, source truth, provider equivalence, production latency or cost, privacy compliance, security assurance, user comprehension, release readiness, or organizational authorization.

## Who this volume is for

The primary reader is a software, ML, data, product, solutions, evaluation, or platform engineer who can already build ordinary application software and wants to own language-model behavior responsibly. You should be comfortable reading APIs, schemas, configuration, tests, structured logs, and simple evaluation reports. Introductory familiarity with probability, sampling, and common retrieval or classification metrics is useful.

You do not need weight access, accelerator hardware, or prior fine-tuning experience. Volume 1 reaches a complete professional endpoint using managed or open-weight models behind a provider-neutral boundary. Volume 2 is optional further study for justified data, post-training, packaging, inference, and model-change work. It is not required to benefit from or deploy the behavior-system discipline taught here.

Appendix A refreshes the measurement and generation concepts used by the chapters. Appendix D supplies runtime and distributed-systems recall at decision depth. Neither appendix replaces foundational study or qualified specialist review.

## How the volume is organized

The five parts follow the behavior evidence loop.

- Part I makes language behavior explicit across the role boundary, task contract, mechanism consequences, and model/access decision.
- Part II builds the language interface through a reproducible baseline, message contract, typed output, and finite context budget.
- Part III grounds behavior in authorized evidence through retrieval choice, candidate generation, provenance-aware assembly, and joint evaluation.
- Part IV makes the evidence credible through representative cases, consequence-aware judgments, and controlled experiments.
- Part V crosses the production threshold through an integrated release, observation, diagnosis, migration, rollback, and adaptation-referral record.

Each chapter has four layers. The main argument explains a decision and its tradeoffs. Mosaic Desk advances one durable dossier. Figures make boundaries, paths, and states visible without replacing the surrounding prose. The deterministic companion turns selected contracts into executable local fixtures and tests.

The six appendices serve different jobs:

- Appendix A refreshes measurement, uncertainty, decoding, and evaluation concepts.
- Appendix B supplies copyable behavior-system artifacts and review gates.
- Appendix C explains the provider-neutral companion and safe extension rules.
- Appendix D refreshes runtime and distributed-systems boundaries needed for responsible integration.
- Appendix E defines canonical terminology and adjacent-role boundaries.
- Appendix F explains source, claim, figure, edition, errata, and proof records.

## Reading paths

For a complete first read, follow the chapter order. Later chapters depend on frozen definitions rather than silently replacing them.

For task and model selection, read Chapters 1-4 and complete the responsibility charter, task contract, mechanism consequence sheet, and access decision in Appendix B.

For a stable language interface, read Chapters 5-8 and run the companion baseline, message, output, and context checks. A prompt change is not isolated when model, retrieval, context, schema, or evaluator also changed.

For retrieval-grounded work, read Chapters 9-12 in order. Retrieval is not the default answer, relevance is not authority, context assembly is not a copy operation, and one end-to-end score is not a causal diagnosis.

For evaluation and experiments, read Chapters 13-15 together. A convenient case set, unlabeled consequence, uncalibrated judge, or after-the-fact disposition weakens the evidence chain.

For release or provider change, read Chapter 16 with the frozen artifacts from the earlier parts. The chapter integrates their responsibilities; it does not transfer platform, security, privacy, product, domain, or release authority to the LLM Engineer.

## Working with evidence states

Use bounded evidence language in notes and reviews:

- `observed`: recorded by the named method for a named version, population, segment, and time;
- `inferred`: a reasoned interpretation that remains separable from the observation;
- `synthetic`: constructed teaching or test evidence that cannot establish a real-world outcome;
- `supported`: current evidence is adequate for the stated narrow claim;
- `unsupported`: the claim exceeds current evidence or population coverage;
- `unknown`: necessary evidence is absent or cannot yet be reconciled;
- `untestable`: the current method cannot credibly evaluate the claim;
- `disconfirmed`: evidence contradicts the working hypothesis;
- `retain`, `revise`, `reject`, `scope`, and `release review`: explicit dispositions rather than confidence adjectives.

A useful claim names its task, population, segment, version, method, evidence, limitation, owner, authority, and next trigger. A limitation is part of the result. Negative evidence belongs in the durable record. Agreement among tools or reviewers does not create truth or formal authority.

## Running the companion

From the repository root, use:

```sh
node --test content/publications/llm-behavior-engineering/companion/tests/*.test.mjs
node content/publications/llm-behavior-engineering/companion/run.mjs
```

The companion uses Node.js built-ins, local files, deterministic fixtures, and no provider secret. Do not paste customer data, secrets, raw production traces, or proprietary provider content into it. Do not add a network call merely to make the example feel realistic. An optional provider adapter must remain behind the same behavior contract and cannot replace the local failure oracle.

## Figures and accessible use

Figures V1-F01.1 through V1-F16.2 are original synthetic ImageGen PNG teaching illustrations. They use layout, lanes, gates, locks, shapes, arrows, textures, and short labels so color is not the only carrier of meaning. Read each image with its caption, nearby argument, and long description.

The figures explain relationships and decision states. They do not report measured model, product, user, or production outcomes. The canonical sources are PNG. Delivery tooling may create derivatives, but derivatives are not the provenance source. Appendix F explains figure identity, dimensions, hash records, mirrors, corrections, and review status.

## Sources, claims, and corrections

Material chapter claims use stable claim IDs that resolve through `claims.json` to `sources.json`. Sources include primary standards, peer-reviewed papers, official documentation, first-party technical publications, and bounded first-party evidence. A source may support one narrow statement without proving the entire synthesis. Vendor evidence remains vendor evidence. A benchmark retains its task, dataset, version, and limitations.

This edition remains under review. `publishedAt` is intentionally null and the canonical PDF is disabled until complete web/PDF review and release authority are recorded. Review proofs are not released editions.

Corrections must enter `errata.json` or a reviewed edition change. A correction identifies edition, location, problem, disposition, resolution, and replacement text when applicable. No web page or PDF should silently change while retaining the same released edition identity.

## A note on judgment

Language systems invite substitutions that feel efficient: response quality becomes product quality, retrieval score becomes evidence authority, evaluator agreement becomes truth, a schema becomes factual validation, a benchmark becomes task fitness, and a provider swap becomes an implementation detail. This volume asks the reader to slow down where those substitutions hide responsibility.

The discipline is not pessimism. It is the ability to make useful language behavior possible while keeping evidence, uncertainty, change, and authority inspectable to the people responsible for the consequences.
