# Machine Learning Engineering Manuscript and Companion Design

**Date:** 2026-08-22  
**Author:** Komal Nakrani  
**Status:** Candidate pending independent Task 00 approval  
**Book:** *Machine Learning Engineering*  
**Creative system:** Learning Systems Test Bench

## Purpose

Phase 08 turns the accepted twenty-one-chapter blueprint package into an
original, full-length manuscript and a deterministic provider-neutral companion.
It is a private production phase. It does not publish the book, generate figures,
build a PDF, open a course, start another volume, or activate another role.

The reader experience is one continuous evidence-bearing workload. Each chapter
changes the Benchline dossier by exactly one frozen milestone, makes the decision
and authority boundary observable, and leaves the next chapter a usable artifact.
The companion demonstrates the book's mechanics without claiming real training,
deployment, approval, production outcomes, or business effects.

## Frozen inputs

Phase 08 must reject drift in these inputs:

| Input | SHA-256 |
|---|---|
| Phase 07 verification | `781b86503df3e40cf7f59424ea95e60bab5ce1cd2ae79199d3efd569d07aa454` |
| Blueprint register | `d05d14663fcae623faa529fa2405552752a4a7b90760de48ab9512bd4d4553b6` |
| Whole-book furniture blueprint | `42ec2b992cde815015745d9c50845b5ba83024eaf00e5c32d8434a9d47b8ae4a` |
| Blueprint verification report | `ead317e38987f6ae8dc0ddcf2188c4bf929c70ac16569950afbecea3e027137a` |
| Phase 08 handoff | `df7c39ef9ec152d5deadde7ab31b26d0274a4b2aa6d4b3b74589f0bfd59aecb0` |
| Phase 06 integration manifest | `c8f2dff28008101c40d8eeac6916fb73625d46064c10aeedb27fb0aaad400bc4` |
| Phase 07 research handoff | `98301e0108ace18f69a3e212d0b55d59cdf7380d1c5beaefc7dbc19926a6a119` |

Every one of the twenty-one chapter blueprints is also a frozen input. The
manuscript register records each path and SHA-256 in chapter order.

## Private production layout

Phase 08 uses five disjoint closed path sets. A path not listed by these sets is
forbidden even when it is under a listed directory.

### Tracked plan and lifecycle paths

```text
docs/superpowers/specs/2026-08-22-machine-learning-engineer-manuscript-companion-design.md
docs/superpowers/plans/2026-08-22-machine-learning-engineer-phase-08.md
project-control/roles/machine-learning-engineer/ROLE-STATE.md
project-control/roles/machine-learning-engineer/issues/root.md
project-control/roles/machine-learning-engineer/issues/phase-08-manuscript.md
project-control/role-factory/FACTORY-STATE.md
```

### Private production paths

```text
project-control/roles/machine-learning-engineer/books/machine-learning-engineering/
  manuscript/
    manuscript-register.json
    opening-and-closing.md
    part-01.md ... part-07.md
    chapter-01.md ... chapter-21.md
    appendix-a.md ... appendix-g.md
    verification-report.md
    phase-09-handoff.md
  companion/
    README.md
    package.json
    lib/canonical-json.mjs
    lib/evidence-envelope.mjs
    lib/lifecycle.mjs
    lib/ports.mjs
    lib/dossier.mjs
    lib/run.mjs
    contracts/evidence-envelope.schema.json
    contracts/dossier-record.schema.json
    contracts/port-result.schema.json
    fixtures/bl-entry.json
    fixtures/mutations.json
    expected/bl-00.json ... expected/bl-20.json
    tests/core.test.mjs
    tests/lifecycle.test.mjs
    tests/ports.test.mjs
    tests/chapters-01-07.test.mjs
    tests/chapters-08-14.test.mjs
    tests/chapters-15-21.test.mjs
    tests/effects.test.mjs
  validate-phase-08.mjs
  validate-phase-08.test.mjs
  phase-08-verification.json

project-control/roles/machine-learning-engineer/reviews/phase-08/
  task-00-plan.md
  task-00-plan-repair.md only after Task 00 failure
  task-01-bootstrap.md
  task-02-lane-a.md
  task-03-lane-b.md
  task-04-lane-c.md
  task-05-companion.md
  task-06-canonical-integration.md
  task-07-hostile-integration.md
  paired *-repair.md files only when an earlier failure exists
```

`chapter-01.md ... chapter-21.md`, `part-01.md ... part-07.md`,
`appendix-a.md ... appendix-g.md`, and `expected/bl-00.json ...
expected/bl-20.json` are inclusive, zero-padded, numerically ordered expansions;
no other file matches those expansions. The only ignored scratch paths are:

```text
.superpowers/sdd/2026-08-22-machine-learning-engineer-phase-08/lane-a-manifest.json
.superpowers/sdd/2026-08-22-machine-learning-engineer-phase-08/lane-b-manifest.json
.superpowers/sdd/2026-08-22-machine-learning-engineer-phase-08/lane-c-manifest.json
```

Plan review permits only the two docs and Task 00 records. Bootstrap adds the
four lifecycle authorities, local issue, validator, tests, and Task 01 records.
Production adds chapter, furniture, appendix, companion, lane manifest, and
Tasks 02-05 records. Integration adds the register, report, handoff, and Tasks
06-07 records. Closure alone adds `phase-08-verification.json`. Every repair path
is absent unless its base review preserves an earlier failure.

No Phase 08 file belongs under `content/publications`, `public`, `output`,
`assets`, `tools/screen-first-books`, course, certification, Abhyaas, or a new
role. Phase 09 may later approve a canonical publication projection.

## Manuscript contract

### Chapter identity and depth

- Exactly twenty-one chapter manuscripts exist in canonical numeric order.
- Titles, slugs, parts, decision jobs, milestones, states, prerequisite
  artifacts, authority owners, MLE ceilings, boundaries, claims, cases, sources,
  ports, labs, assessments, visuals, and handoffs equal the blueprint register.
- Each chapter lands within its frozen word range. Tables, code fences, captions,
  source notes, and machine metadata do not count toward prose depth.
- A chapter is explanatory prose, not an outline expanded with labels. It must
  teach why the decision matters, how to perform it, how evidence can mislead,
  how failure is diagnosed, and what the MLE may not decide.
- Each of the sixty-three canonical claims has exactly one primary teaching
  section and may appear elsewhere only as trace, comparison, exercise, or
  handoff support.

### Chapter grammar

Each manuscript preserves the blueprint's eight ordered teaching sections and
the recurring six-item grammar:

1. Bench Setup
2. decision
3. evidence
4. state and dossier delta
5. authority route
6. next evidence

The visible chapter also includes a Bench Sheet and Qualification Gate, two
deterministic labs, failure injections, a five-port transfer, cases and truth
limits, assessment, answer intent, currentness notes, source notes, visual
placeholder contracts, and the next dossier handoff.

### Evidence and originality

- Every material technical statement maps to an accepted canonical claim and
  source, or is explicitly labeled as book synthesis and remains inside the
  accepted authority ceiling.
- Public cases retain separate reported facts, attributed outcomes, allowed
  inferences, forbidden inferences, limitations, and transfer rules.
- Constructed cases and synthetic labs are labeled. They never imply observed
  production performance.
- Role-market sources support only the bounded role-market claim.
- Current mechanisms carry the recorded version, date, limitation, and recheck
  trigger; manuscript prose does not convert a current tool into durable doctrine.
- No prose is copied from another Komal role, source, vendor documentation, or
  public case. Similarity checks identify suspicious overlap for human review.
- No unresolved source gap, placeholder note, or invented citation can pass.

## Whole-book furniture

`opening-and-closing.md` contains all ten Bench Zero items and all five closing
dossier items, including About Komal and the exact selectable closing line:

> Ship the model only when its evidence can travel with it.

Seven part files contain the part opener, decision question, incoming evidence,
part route, and part-exit Qualification Gate. Seven appendix files preserve the
accepted appendix jobs. All furniture is manuscript prose and selectable
semantic text; no numeric truth is delegated to an image.

## Companion architecture

### Shape

The companion is local, offline, deterministic, provider-neutral, effect-free by
default, and usable without a paid service, secret, model download, accelerator,
database, or network. It uses Node.js ESM and JSON fixtures.

The stable core exposes five replaceable ports:

- `PORT-MANAGED`
- `PORT-CLASSICAL`
- `PORT-DEEP`
- `PORT-EDGE`
- `PORT-SHARED`

No port is the privileged reference implementation. Every port consumes and
returns the same decision/evidence envelope while its mechanical adapter varies.

### Dossier progression

The companion begins with a fixed `BL-ENTRY` fixture and produces immutable
`BL-00` through `BL-20` records. Each chapter contributes:

- one positive deterministic path;
- one named negative or changed-evidence path;
- exact input and output hashes;
- PASS, HOLD, REJECT, or REOPEN disposition;
- owner and authority route;
- limitation and next evidence;
- no hidden mutation of an earlier dossier record.

The runner may write only to a freshly created caller-supplied directory whose
resolved real path is outside the repository. It rejects `..` traversal,
repository or protected absolute paths, pre-existing symlinks, symlink escape,
and every resolved write outside that single root. It must never read an
environment secret or call a network, shell command, cloud SDK, production
service, or external model. Tests exercise these attempted effects across all
five ports with fixed clocks, seeds, and fixtures.

Canonical JSON is UTF-8, recursive lexicographic object-key order, preserved
array order, JSON scalar spelling, no insignificant whitespace, and exactly one
terminal LF. SHA-256 is computed over those exact bytes. Earlier dossier bytes
are immutable and a new record receives a new file and hash.

### Truth boundary

Companion results demonstrate contract mechanics only. They do not prove model
quality, reproducibility across real hardware, fleet SLOs, safety, legal or
privacy approval, deployment readiness, production availability, business value,
or complete retirement of unknown paths.

## Visual boundary

Phase 08 writes textual placeholders for the four reserved candidates only:

- `MLE-F05.1`
- `MLE-F14.1`
- `MLE-F16.1`
- `MLE-F18.1`

Each placeholder carries its frozen label, prompt intent, alt text, long
description, dimensions, path, and provenance requirement. Phase 08 generates no
PNG, SVG, WebP, cover, screenshot, or PDF. Precise tables, matrices, rails, and
decision truth remain semantic text for later HTML/CSS rendering.

## Parallel production and review

After bootstrap acceptance, three disjoint manuscript lanes may run in parallel:

| Lane | Chapters | Milestones |
|---|---|---|
| A | 01-07 | `BL-00` through `BL-06` |
| B | 08-14 | `BL-07` through `BL-13` |
| C | 15-21 | `BL-14` through `BL-20` |

The companion is a fourth bounded production lane. Whole-book furniture is a
fifth bounded lane produced by `/root/mle_p8_furniture`; it is reviewed inside
Task 06 by `/root/mle_p8_integration_review`, which is disjoint from both the
furniture producer and `/root/mle_p8_integration`, the shared-register producer.
Producers never edit the shared manuscript register, integration report, Phase
09 handoff, validator, state authorities, or another lane. Independent reviewers
do not review their own production. A failed review preserves its verdict, adds
a directed repair record, and requires same-reviewer reacceptance.

The closed review record schema requires `taskId`, `producerIdentity`,
`reviewerIdentity`, `reviewedAt`, `artifactBindings`, `priorVerdict`,
`repairPath`, `repairSha256`, `reacceptedBy`, `reacceptedAt`, `specVerdict`, and
`qualityVerdict`. Producer and reviewer identities must differ. Reacceptance,
when required, must use the original reviewer identity and a later timestamp.
The plan freezes these identities before work begins; the validator compares
the records instead of trusting prose labels.

Integration verifies the chapter 07 to 08 and chapter 14 to 15 seams, all seven
part exits, one unbroken dossier lineage, exact reverse edges, prose depth,
originality, companion behavior, furniture, and stop boundaries.

## Lifecycle and completion

Phase 08 begins only after its plan is independently approved, the child issue is
opened, the four state authorities agree, the validator test records a genuine
missing-implementation RED, the bootstrap suite is GREEN, and the bootstrap
review is accepted and pushed.

Phase 08 completes only when:

- all manuscript, furniture, appendix, companion, report, handoff, validator,
  test, verification, and required review files exist;
- the full Phase 08 test suite and validator pass from the filesystem;
- repository-wide checks pass without publishing this manuscript;
- final verification binds all accepted artifacts and final state hashes;
- the Phase 08 child is closed `status:done`, root remains open, and Phase 09 is
  the sole next gate and inactive;
- Git is clean and local `main`, `origin/main`, and live remote `main` agree.

The stop boundary is strict: do not start whole-book QA, image generation, PDF,
web publication, course, Abhyaas, second volume, catalog position 6, or another
role during Phase 08.
