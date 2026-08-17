# Agentic AI Engineering

## Copyright and edition notice

*Agentic AI Engineering: Designing, Evaluating, and Operating Systems That Act*

Komal Nakrani

Version 1.0.0, first edition, published 2026-08-17. Copyright 2026 Komal Nakrani. All rights reserved.

This is an original professional field book. It is not a certification guide, legal opinion, security authorization, safety case, production approval, or substitute for review by the people who hold authority over a real system and its consequences. Publication identifies this reviewed edition; it does not approve any system, product, deployment, or residual risk discussed by a reader.

FieldOps Relay, its organization, people, customers, sites, work orders, policies, incidents, messages, measurements, and outcomes are fictional or synthetic. Satellite examples are constructed teaching cases unless a passage explicitly identifies sourced evidence. Synthetic examples can reveal reasoning and control failures, but they cannot establish that a design is safe, compliant, useful, or production-ready in another environment.

The book's sources register separates external claims from author synthesis. Its claims register maps material claims to the chapters and sources that support them. Figures are original raster teaching assets produced for this edition. Their captions and long descriptions carry the authoritative explanation; decorative details, sample values, and interface-like tokens inside an image are illustrative unless a caption says otherwise.

## Professional boundary

Agentic AI Engineering begins where model output can influence a sequence of actions. The engineer is responsible for the action system around the model: the goal contract, permitted capabilities, identity and delegation, durable state, human checkpoints, evaluation environment, traces, budgets, recovery, release, and change. That responsibility is broader than prompt construction and narrower than unilateral authority over a business, safety, security, legal, privacy, or domain decision.

The central boundary is simple: a system may propose or execute only what a named authority has permitted, through capabilities whose effects are understood, inside limits that can be enforced and observed. A plausible plan is not authorization. A successful tool response is not verified completion. A human click is not valid approval unless the person, object, scope, evidence, time, and downstream effect all match. A passing synthetic evaluation is not a production safety claim.

This book therefore asks readers to keep four statements separate:

1. what the model suggested;
2. what the harness allowed;
3. what the external system actually changed;
4. what an accountable person or institution accepts.

Collapsing those statements produces most of the false confidence associated with agent demonstrations. Preserving them produces inspectable engineering work.

The engineer does not inherit authority merely by being able to implement a capability. Domain owners define acceptable outcomes and exceptions. Security and identity owners define trust and delegation requirements. Privacy and legal specialists interpret obligations. Reliability and operations owners define service and recovery expectations. Product owners decide which user problem justifies exposure. Formal authorities accept residual risk where their organization permits it. The engineer turns these decisions into enforceable contracts and evidence, then reports where the evidence ends.

## Preface: from impressive runs to accountable action

The first wave of agent systems made a compelling promise: give a model a goal, connect tools, and let it work. Demonstrations compressed the hard parts into a few successful minutes. The goal looked obvious. Tools appeared as ordinary functions. Memory seemed like more context. A human approval box appeared to solve authority. One completed run stood in for reliability. When the system failed, another prompt, retry, agent, or reviewer was added.

Production action does not permit that compression. A work order may be stale. An identity may be valid but not delegated for the requested resource. A retry may duplicate a purchase or dispatch. An approval may arrive after cancellation. A worker may finish after its lease expires. A remote agent may use a familiar protocol while carrying incompatible semantics. A trace may help an incident responder while exposing private content. A cheaper model may preserve final-answer quality while changing the trajectory in dangerous ways. A run may report success even though the world never reached the required state.

These are not edge details around the agent. They are the agentic system.

The book follows one recurring evidence chain:

**need -> autonomy decision -> goal and authority contract -> action surface -> stateful execution -> representative evaluation -> controlled release -> observed effects -> recovery and change evidence**

Every arrow can break. Every break can invalidate the apparent result. The chapters teach how to make those transitions explicit and how to refuse the next increase in autonomy when evidence is missing.

FieldOps Relay provides continuity. It coordinates fictional maintenance work across customer sites. The teaching system can read work orders, assemble plans, request or record approvals, reserve resources in a synthetic environment, notify fictional participants, and verify simulated outcomes. Its risks are deliberately ordinary: ambiguous goals, multiple actors, deadlines, money-like budgets, personal data, physical-world implications, and systems that may disagree. The case is rich enough to expose action-system problems without pretending that a fictional dossier proves a live deployment.

The chapters do not culminate in a universal framework or maximal autonomy. They culminate in judgment: retain a bounded pattern, reduce authority, repair a contract or control, reuse an earned seam, hand a mature capability to an appropriate owner, or retire the agentic approach. Sometimes the strongest engineering result is a fixed workflow with a model-assisted step. Sometimes it is a single agent with narrow capabilities. Multi-agent topology is a hypothesis, not a maturity level.

## Who this book is for

The primary reader is an engineer who must design, review, or operate a system that can take consequential action. The reader may come from applied AI, backend systems, platform engineering, security, reliability, product engineering, or technical leadership. Familiarity with APIs, state, tests, logs, and deployment is helpful. Deep expertise in every adjacent specialty is neither expected nor implied.

By the end, the reader should be able to:

- decide whether autonomy is justified and choose the least complex adequate execution mode;
- specify completion, prohibited states, permitted actions, budgets, approvals, stops, and evidence;
- expose tools as narrow effect-aware capabilities instead of vague functions;
- bind identities, delegation, consent, and approval to the correct task and resource;
- separate authoritative state, model context, scratch artifacts, durable records, and memory;
- design single-agent and multi-agent execution with explicit ownership and cancellation;
- survive retries, crashes, duplicate events, uncertain effects, and delayed humans;
- build a representative synthetic task environment without converting it into a live claim;
- evaluate outcomes, actions, state transitions, authority, recovery, and efficiency;
- attack assumptions, trace causality with data restraint, and operate joint budgets;
- release in bounded stages, interrupt safely, recover, and change the system through replay;
- preserve local semantics behind protocols and adapters; and
- lead with an honest evidence chain rather than an agent-count or benchmark narrative.

Those capabilities do not authorize the reader to accept domain, legal, privacy, security, or safety risk. They make the questions and evidence legible to the people who can.

## How the book is organized

Part I, **Decide What May Act**, establishes the profession, tests whether autonomy is warranted, and contracts the goal, actions, authority, budgets, stop conditions, and evidence.

Part II, **Build the Action Surface**, turns that decision into an inspectable loop, narrow capabilities, bound identity and consent, and a state architecture that distinguishes context from durable truth.

Part III, **Orchestrate Work That Must Endure**, freezes a single-agent baseline before considering topology, then adds explicit handoffs, durable execution, recoverable effects, and usable human checkpoints.

Part IV, **Prove the Trajectory and Its Effects**, builds a representative synthetic environment, measures more than final answers, and attacks the assumptions on which safe action depends.

Part V, **Operate What Acts**, creates minimal causal traces, joint quality-time-cost-capacity budgets, staged release, reachable interruption, verified recovery, and learning after incidents.

Part VI, **Evolve Without Losing Control**, contains protocols behind local contracts, replays change across every behavior-bearing component, and develops leadership decisions about retention, repair, reuse, transfer, and retirement.

The appendices are working aids rather than shortcuts. Appendix A refreshes distributed-systems failure concepts at task depth. Appendix B supplies artifact templates. Appendix C provides threat, control, and human-authority checklists. Appendix D explains the provider-neutral local companion. Appendix E maps interoperability concepts to local semantics. Appendix F records terminology, provenance, figures, corrections, and edition conventions.

## Reading paths

The complete path is sequential. Each part consumes artifacts produced by the previous one, and later operating chapters assume the earlier authority and state boundaries exist.

For an architecture review, read Chapters 1-7, then Chapters 10, 13-16, and 18-19. This path exposes the decision, action surface, durability, evidence, operations, and portability seams.

For evaluation work, read Chapters 2-4, 8, and 12-14 before using Appendix C. This prevents an evaluation set from silently assuming an undefined goal or authority model.

For security and identity review, read Chapters 3, 5-7, 10-11, and 14-15. The relevant unit is not only a prompt or tool call; it is the full path from delegated intent to effect and retained evidence.

For operations and incident preparation, read Chapters 4, 10-11, and 15-19. Pair those chapters with the recovery and release templates in Appendix B.

For technical leadership, read Chapters 1-3, 9, 13-14, and 17-20. Use the chapter artifacts to test whether a proposal's confidence comes from evidence or from narrative compression.

No short path removes the obligation to inspect the chapters that define a consequential control. Checklists point to decisions; they do not reproduce their reasoning.

## Evidence states and decision language

This edition uses a small vocabulary to prevent evidence inflation:

- **proposed** means a design or claim has been stated but not yet exercised;
- **implemented** means a mechanism exists and has passed its local checks;
- **observed** means an event or state was recorded in a defined environment;
- **verified** means independent evidence supports the named condition within a stated scope;
- **accepted** means an authorized owner has taken responsibility for a bounded residual decision;
- **unknown** means the evidence does not justify a stronger state.

These are not a universal standard. They are a discipline for this book. A control can be implemented but not effective. A task can be observed as complete but not externally verified. A risk can be measured but not accepted. A protocol can be compatible at the message level but not at the authority or cancellation level.

Negative evidence belongs in the dossier. Failed cases, unresolved disagreements, unreachable owners, partial recovery, missing segments, timeouts, and rejected topology experiments constrain what may be claimed. They must not disappear from a release summary merely because the aggregate result improved.

## Using the companion

The companion is a local, provider-neutral harness for exercising typed capabilities, deterministic model and tool doubles, event records, state transitions, failures, approvals, budgets, replay, and evaluation logic. Its default environment is synthetic. It is designed to run without production credentials or live external effects.

Use it to inspect a concept, reproduce a test, inject a fault, or compare a change. Read the relevant chapter first, because code alone cannot provide the authority, consequence, or organizational context that gives a mechanism meaning. Appendix D maps the commands and modules.

A passing companion test proves only that the specified behavior passed under the checked fixtures and implementation. It does not prove protocol conformance outside those fixtures, provider equivalence, security, privacy, availability, legal compliance, human usability, production readiness, or acceptable risk.

## Working with the chapter artifacts

Each chapter ends in an artifact or decision that should be carried forward. Treat these as a connected dossier, not isolated worksheets. The autonomy record constrains the goal contract. The goal contract constrains capabilities and state. Those contracts constrain topology and checkpoints. The complete system definition constrains the representative environment and evaluation claims. Evaluation limits constrain release. Operational evidence constrains change, reuse, and retirement.

Begin an artifact with a stable identifier, version, owner, decision date, and the source state from which it was derived. End it with what the evidence supports, what it does not support, unresolved risks, and the next responsible decision. A field left unknown is acceptable when the unknown is explicit and blocks the appropriate action. A confident placeholder is not.

Artifacts should be inspectable at three altitudes. An operator needs concrete states, identifiers, thresholds, and recovery steps. An engineer needs contracts, failure modes, tests, and dependencies. An authority needs consequence, alternatives, evidence limits, residual exposure, and the exact decision requested. One giant dossier can obscure all three; use linked records with stable references instead.

Do not optimize for document completion. A filled autonomy template does not justify autonomy. A capability catalog does not prove narrow effects. A checkpoint screenshot does not prove informed approval. A threat checklist does not prove control effectiveness. A release packet does not accept residual risk. The working test is whether another qualified person can trace a consequential outcome backward through effect, capability, identity, authority, state, decision, and evidence.

When the system changes, update the earliest artifact whose assumptions changed and follow the dependency chain forward. A new tool schema may require capability, threat, evaluation, trace, budget, and recovery changes. A new identity provider may alter delegation, approval, audit, and incident handling. A model change may affect not only final outcomes but tool choice, argument distribution, checkpoint load, latency, cost, and failure recovery. Versioning only the prompt or model name leaves the real system untracked.

The dossier should also preserve rejected decisions. If a multi-agent topology failed to improve the baseline, record the result. If a capability was removed because reconciliation was impossible, keep the reason. If a release stopped, preserve the trigger and affected cases. Negative evidence prevents future teams from paying for the same lesson while believing they are starting clean.

## Practice without false production confidence

Exercises should use invented tasks or sanitized synthetic fixtures. Keep effects inside local doubles. State the expected result before executing the case, then compare both the outcome and trajectory. Vary one important assumption at a time: stale state, revoked delegation, duplicate event, expired approval, lost response, lease race, cost exhaustion, remote cancellation, or failed compensation.

After each exercise, write two conclusions. The first names the behavior actually observed. The second names the production claim that remains unsupported. This habit is deliberately repetitive. It trains the distinction between mechanism evidence and deployment authority.

If a team wants to adapt a template to a live project, first identify the applicable owners, data rules, security review, reliability objectives, incident process, and formal decision rights. The book supplies questions and local mechanisms; the organization supplies real constraints and authority.

Keep review environments clearly labeled. Separate synthetic identifiers from real naming conventions, disable outbound network effects by default, and make destructive or external adapters impossible to activate accidentally. A credible exercise demonstrates that the system stops safely when evidence or authority is absent; it does not reward the appearance of uninterrupted autonomy.

Record the fixture version, runtime version, test seed, and expected external state with every exercise result. Reproducibility makes a local observation reviewable; it still does not enlarge the environment or consequence scope represented by that observation.

## Figures, accessibility, and provenance

The edition contains forty canonical PNG figures. They are explanatory images, not screenshots of a live system. Each figure has an exact registry ID, chapter mapping, file hash, caption, alternative text, generation disclosure, and visual QA record. Public mirrors must remain byte-identical to the canonical assets.

Readers should be able to follow the argument without seeing an image. Captions state the teaching point, and long descriptions explain structure and flow. Color is supportive, not the sole carrier of meaning. If image text conflicts with prose or a registry entry, the prose and registry govern until an erratum resolves the defect.

The Komal mascot appears only where a human teaching cue materially helps. It is not a system actor, authority, approver, or evidence source.

## Edition, correction, and publication status

Chapter numbers, claim IDs, figure IDs, source IDs, and appendix letters are stable within version 1.0.0. Corrections must enter the errata record. A rendered PDF must never be replaced silently under the same edition identity.

This first edition was generated deterministically so two builds from identical inputs could be compared byte for byte. The exact final PDF, all rendered pages, public asset mirrors, and web routes passed review before the root-authorized publication transition. Its publication date is 2026-08-17. Future corrections must use the visible errata and edition process; the PDF must not be silently replaced under the same version and recorded hash.
