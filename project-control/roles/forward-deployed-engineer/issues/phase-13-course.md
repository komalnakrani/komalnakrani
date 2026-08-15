# Phase 13 - Forward Deployed Engineering Guided Lab Course

GitHub issue: [#19](https://github.com/alpeshznakrani/komalnakrani/issues/19)

## AUTO decision

Decision: BUILD COURSE.

The published book already provides the durable professional model and the companion already provides executable mechanisms, but neither supplies a paced, observed practice loop. Forward deployed engineering has unusually high lab value because competence depends on handling ambiguous state, debugging across boundaries, making evidence-gated release decisions, rehearsing recovery, and transferring ownership. A course can therefore add a distinct modality through demonstrations, failure injection, coached labs, review rubrics, and one integrated capstone. It must not paraphrase the book or become an Abhyaas prerequisite.

## Objective

Publish a complete, optional Komal course that guides a learner through one bounded synthetic deployment from workflow evidence to customer ownership using the existing provider-neutral companion and a dedicated lab workspace.

## Inputs

- Published `Forward Deployed Engineering` edition 1.0.0.
- The 64-test provider-neutral Orchid companion and completed dossier artifacts.
- Chapter learning packs, especially their labs and advanced challenges.
- Phase 11 web/PDF publication and accessibility evidence.

## Work

1. Add a reusable validated course manifest/data layer and course/module routes without disturbing the existing visual system.
2. Create a role-specific FDE guided lab course with a distinct promise, prerequisites, six coherent modules, demonstrations, labs, debugging exercises, scenario walkthroughs, project checkpoints, and capstone.
3. Add deterministic lab fixtures, commands, expected evidence, completion checks, solution boundaries, and facilitator notes without publishing live certification material.
4. Connect the course to the book and role pages as optional learning, never as an Abhyaas requirement.
5. Verify content completeness, runnable commands, navigation, mobile/desktop rendering, accessibility, links/assets, and build determinism.

## Acceptance criteria

- [x] The AUTO decision and non-duplication rationale are recorded.
- [x] Every module creates observable practice evidence beyond reading the book.
- [x] Demonstrations, labs, debugging, scenario walkthroughs, project work, and a capstone all exist.
- [x] Lab commands and fixtures run deterministically against synthetic local data.
- [x] Review rubrics state completion evidence and prohibited overclaims.
- [x] Course content is marked optional and `NOT FOR LIVE CERTIFICATION BANK`.
- [x] Course catalog, detail, and module routes build with complete navigation and no placeholder assets.
- [x] Desktop/mobile browser checks, link/asset checks, course validation/tests, companion tests, Astro build, and `git diff --check` pass.

## Handoff

Phase 19 receives the published book, figures, PDF/web edition, companion, and optional guided lab course for hostile role-level QA. Deferred Abhyaas phases remain untouched.
