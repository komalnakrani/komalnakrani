# Appendix F - Terminology, Sources, Figures, and Edition Records

This appendix defines the edition's vocabulary and durable publication records. It prevents similar words from erasing important differences between proposal and permission, activity and effect, observation and verification, or proof and publication.

## Core terminology

**Action system:** The complete engineered path through which a model-directed decision may influence state or the external world, including harness, capabilities, identity, policy, state, people, evaluation, operations, and recovery.

**Agent:** A model-directed runtime participant that selects or proposes steps toward a contracted goal. The word does not imply personhood, authority, persistence, reliability, or independent accountability.

**Agentic AI Engineering:** Engineering discipline responsible for deciding, bounding, evaluating, and operating model-directed action across tools, state, people, and production systems.

**Approval:** A durable authority decision bound to an actor, object, version, scope, evidence packet, expiry, and downstream effect. A click or conversational assent without these bindings is not sufficient.

**Artifact:** A durable, versioned output such as a plan, dossier, report, checkpoint packet, evaluation result, or migration record, with provenance and an owner.

**Authority:** Legitimate power to permit, reject, accept, or own a bounded decision. Technical ability and authentication do not create authority.

**Autonomy:** Degree to which the system selects and sequences actions without a person deciding each step. Autonomy is task- and consequence-specific, not a single maturity score.

**Capability:** A narrow typed interface for a semantic operation with explicit identity, preconditions, effect class, validation, errors, idempotency, timeout, cancellation, and evidence.

**Compensation:** A new action intended to reduce or counter a previous effect. It does not erase history and may leave residual consequence.

**Completion:** Verified satisfaction of the task's required end state and absence of prohibited end states within the defined scope. Model assertion or tool success alone is insufficient.

**Context:** Bounded information supplied to a model for a decision. Context is not automatically authoritative, durable, permitted, fresh, or suitable for retention.

**Control:** Implemented mechanism that prevents, detects, contains, or supports recovery from a named failure or threat. Documentation alone is not an implemented control.

**Delegation:** A bounded grant from an authority to an actor, constrained by purpose, audience, scope, resource, task, time, and revocation.

**Effect:** Observable change or disclosure outside the model's private computation. Effects include messages, reservations, writes, access changes, physical instructions, and data release.

**Effect unknown:** State in which evidence cannot establish whether an attempted external effect occurred. It requires reconciliation or explicit intervention, not blind retry.

**Event:** Durable fact about a run, transition, decision, attempt, result, approval, or effect, carrying identity, version, causation, and time-source information.

**Evidence:** Bounded observation supporting or constraining a claim. Evidence includes failures, unknowns, disagreements, and scope limits.

**Fencing token:** Monotonically increasing ownership generation used to reject work from a stale lease holder.

**Goal contract:** Versioned definition of required and prohibited end states, actions, effects, budgets, approvals, stops, escalation, and completion evidence.

**Handoff:** Transfer of a bounded task slice, state snapshot, authority subset, budget, deadline, cancellation semantics, and return contract from one owner to another.

**Harness:** Deterministic runtime around the model that manages state, capabilities, policy, events, budgets, approvals, and recovery.

**Idempotency:** Property that repeated attempts for the same logical effect do not create additional effects within the declared contract and window.

**Lease:** Time-bounded ownership grant for advancing a run or work item.

**Memory:** Information deliberately retained for future runs under provenance, permission, isolation, correction, expiry, and deletion policy. It is not a synonym for prompt context or database state.

**Model double:** Deterministic local replacement that returns predefined proposals or failures for tests. It does not predict a live model provider.

**Orchestration state:** Durable record of task ownership, run transitions, budgets, checkpoints, and recovery. It may reference but does not replace external systems of record.

**Policy:** Deterministic or formally governed rule used to admit, constrain, or reject action. Natural-language guidance interpreted only by the model is not an enforcement boundary.

**Reconciliation:** Query and decision process that compares local records with authoritative external state to settle an uncertain effect or conflict.

**Recovery:** Verified restoration or safe termination at a named level: process, run, effect, task, service, or learning closure.

**Release question:** Specific uncertainty a bounded exposure stage is designed to answer.

**Replay:** Reconstruction of state or re-execution of behavior against versioned inputs and controlled effects. Replay must not repeat live consequences.

**Residual risk:** Consequence uncertainty remaining after controls and evidence. It requires a named owner and, where applicable, acceptance by an authorized party.

**Run:** One execution attempt under a task contract. A durable task may have multiple runs.

**Synthetic environment:** Constructed world used to exercise behavior reproducibly. Similarity to selected conditions does not make it production evidence.

**Task:** Durable unit of intended work with identity, contract, owner, state, and evidence, distinct from a process or model session.

**Tool double:** Local capability implementation that simulates results and effects for tests without touching a live system.

**Trace:** Minimal causal record linking decisions, capabilities, state, approvals, controls, effects, and recovery under access and retention limits.

**Trajectory:** Ordered sequence of decisions, actions, state transitions, effects, and checkpoints leading toward or away from a task outcome.

**Verified:** Supported by independent evidence for the exact named condition and scope. Verification does not imply universal truth or risk acceptance.

## Adjacent-role boundaries

Agentic AI engineers collaborate with, but do not replace:

| Role or authority | Primary contribution | Boundary preserved by this edition |
| --- | --- | --- |
| applied AI engineer | model behavior inside a useful product path | model quality does not authorize external action |
| ML engineer | data, training, serving, and model lifecycle | model lifecycle evidence does not prove harness or effect correctness |
| software/platform engineer | services, APIs, infrastructure, developer surfaces | availability does not define domain authority |
| security/identity engineer | threats, trust, authentication, authorization, response | agent team cannot self-accept security risk |
| SRE/operations | service objectives, capacity, incident response, recovery | green service health does not settle affected tasks |
| product owner | user problem, value, exposure, and product decision | product intent does not bypass policy or formal authority |
| domain specialist | task validity, consequence, exception, and judgment | synthetic fixtures do not replace qualified domain review |
| privacy/legal/compliance | obligations, data use, notice, retention, jurisdiction | book language is not an opinion or approval |
| accountable executive or formal authority | accepts bounded residual decisions where permitted | technical implementer does not inherit this authority |

Use explicit handoffs and decision records. “The AI team approved it” is inadequate when the decision belongs to another authority.

## Source record

The canonical source register is `sources.json`. Each source has a stable ID, title, authors, publisher, URL, access date, type, notes, and mappings to chapters and claim IDs. The registry is authoritative for citation metadata in this edition.

Source use follows four rules:

1. External factual claims should map through the claims register to appropriate sources.
2. A source supports only what its content and context justify; citation proximity does not transfer authority.
3. Evolving protocols, standards, software, and guidance require version or access context.
4. Author synthesis, fictional cases, synthetic values, and local design decisions must not be presented as sourced empirical facts.

A URL's continued availability is not guaranteed. Corrections should preserve the stable source ID and record replacement or archival context rather than silently changing history.

## Claim record

The canonical claims register is `claims.json`. It maps each material claim to a chapter, statement, source IDs, confidence, and notes. The register supports audit and correction; it is not a substitute for reading the claim in context.

New front matter and appendices primarily summarize accepted chapter contracts and local publication practice. They do not create new empirical findings. If later revision adds a material external claim, it must receive a stable claim ID and source mapping before publication.

Review a claim at three levels:

- **citation integrity:** the source exists and is represented accurately;
- **reasoning integrity:** the source actually supports the bounded statement;
- **decision integrity:** the statement is used within its evidence, consequence, and authority limits.

## Figure record

The canonical figure registry is `figures.json`. Version 1.0.0 contains forty original PNG teaching figures, two per chapter. Each record identifies the figure ID, chapter, learning purpose, file, caption, alternative text, source relationship, and production status. The provenance record adds generation disclosure, prompt/spec context, hash, public mirror, long description, and QA evidence.

Figure requirements:

- canonical source and public mirror remain byte-identical;
- PNG is the publication source; generated SVG or WebP is not substituted;
- image text is short, exact, legible, and consistent with the chapter;
- structure remains understandable through caption and long description;
- color is not the sole information channel;
- a mascot is used only when it removes a learning problem;
- fictional interfaces, people, assets, events, and values remain disclosed;
- a visual defect is repaired through a new provenance-aware raster asset and record.

The PDF builder may internally encode raster data for document size. That transport representation does not replace the canonical PNG.

## Companion record

The companion's source files and tests belong to the edition evidence. The provider-neutral local suite uses synthetic fixtures and deterministic doubles. Record the exact test command, runtime, passing counts, and source state in the release report.

A test count is not a quality score. Tests support only their named behavior under their fixtures. The release record should note excluded live providers, integrations, human usability, production data, scale, security review, and formal risk acceptance.

## Errata and correction record

The canonical errata register is `errata.json`. A report should identify edition version, chapter or appendix, location, defect, reporter, date, status, and correction. Security-sensitive reports may require a private intake path before public disclosure.

Correction workflow:

1. acknowledge and classify the report;
2. reproduce against the exact edition source and rendered artifact;
3. determine whether chapters, registries, figures, companion, PDF, or web routes are affected;
4. repair source and add regression evidence;
5. rebuild deterministically and repeat relevant page or route QA;
6. update errata and version according to impact;
7. never replace a public PDF silently under the same recorded hash.

Typos with no semantic effect may enter a patch edition. Changes to authority, safety, compatibility, or substantive behavior may require broader edition review. Structural chapter changes require an architecture decision.

## Edition record

The publication manifest is the canonical edition identity. For the first-edition review candidate it records:

- title: *Agentic AI Engineering*;
- subtitle: *Designing, Evaluating, and Operating Systems That Act*;
- author: Komal Nakrani;
- version: 1.0.0;
- status: review;
- published date: empty;
- chapters: twenty;
- parts: six;
- appendices: six;
- canonical figures: forty;
- public PDF enabled: false after proof QA.

The Phase 11 proof record adds input digest, PDF hash, byte count, page count, bookmark inventory, link inventory, extracted-text checks, raster dimensions, full-page render results, and visual inspection disposition. Two builds from identical proof inputs must be byte-identical.

Publication is a separate root-owned transition. It requires review of the exact public PDF mirror and web routes, a publication date, an enabled PDF flag, final hashes, and issue/state updates. A review proof must not be called published.

## Index and stable-reference conventions

Use chapter numbers for conceptual sequence, stable IDs for registries, appendix letters for working aids, and version plus hash for rendered artifacts. Page numbers belong to one exact PDF and should not be used as the only durable reference.

Preferred references:

- `Chapter 10, Make Execution Durable and Effects Recoverable`;
- `Figure F10.2`;
- `Claim AGE-C10-...` as recorded in the registry;
- `Appendix B, B12 Release, Recovery, and Change Record`;
- `version 1.0.0, PDF SHA-256 ...` for a rendered artifact.

Do not invent unofficial figure, claim, source, or dossier IDs in derivative notes. If a stable record is required, add it through the edition's review process.

## Publication integrity checklist

- Manifest title, subtitle, author, version, state, and date are correct.
- Exactly twenty chapter files appear once and in order.
- Six part introductions appear before the correct chapter starts.
- Six appendices appear once in A-F order.
- All forty figure records resolve to canonical PNGs and byte-identical public mirrors.
- Every chapter source, claim, objective, and figure reference validates.
- Source, claims, figures, errata, and provenance registries parse and cross-reference.
- Companion tests pass from a clean local command.
- Publication validators and site build pass.
- Proof builds are deterministic from identical inputs.
- PDF metadata, outline, links, text extraction, page geometry, and security properties pass.
- Every page is rendered and inspected for blankness, clipping, broken glyphs, malformed tables/code, image defects, and sequence.
- Review status and disabled public PDF are restored after proof.
- No publication date, public mirror, published claim, issue closure, commit, or push occurs before root authorization.

## Status statement

The durable record should always end with the strongest justified state. At source assembly, that state is **complete review candidate**. After deterministic proof and rendered-page inspection, it may become **review proof passed**. Only the explicit final transition can make it **published**.
