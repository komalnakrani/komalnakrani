# Machine Learning Engineering Phase 08 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: use
> `superpowers:subagent-driven-development` or `superpowers:executing-plans` and
> preserve every review checkpoint in this plan.

**Goal:** Produce the complete original twenty-one-chapter *Machine Learning
Engineering* manuscript, whole-book furniture, seven appendices, and a
deterministic provider-neutral companion from the accepted Phase 07 package.

**Architecture:** Three disjoint seven-chapter lanes write private manuscript
files while a fourth lane implements the companion. A strict register and
filesystem validator join the results, verify one immutable Benchline dossier,
and prevent manuscript work from leaking into publication, visual, course,
Abhyaas, second-volume, or next-role surfaces.

**Tech stack:** Markdown, JSON, Node.js ESM, Node test runner, SHA-256, repository
validation scripts.

**Spec:**
`docs/superpowers/specs/2026-08-22-machine-learning-engineer-manuscript-companion-design.md`

## Frozen entry

- Phase 07 closure commit: `b7105d2c061aafd8952b36f8b1355ef635887524`
- Phase 07 verification: `781b86503df3e40cf7f59424ea95e60bab5ce1cd2ae79199d3efd569d07aa454`
- Blueprint register: `d05d14663fcae623faa529fa2405552752a4a7b90760de48ab9512bd4d4553b6`
- Furniture: `42ec2b992cde815015745d9c50845b5ba83024eaf00e5c32d8434a9d47b8ae4a`
- Blueprint report: `ead317e38987f6ae8dc0ddcf2188c4bf929c70ac16569950afbecea3e027137a`
- Phase 08 handoff: `df7c39ef9ec152d5deadde7ab31b26d0274a4b2aa6d4b3b74589f0bfd59aecb0`
- Integration manifest: `c8f2dff28008101c40d8eeac6916fb73625d46064c10aeedb27fb0aaad400bc4`
- Research handoff: `98301e0108ace18f69a3e212d0b55d59cdf7380d1c5beaefc7dbc19926a6a119`

## Global gates

- 7 parts, 21 chapters, 63 canonical claims, 46 sources, 160 source-claim
  edges, 12 cases, 104 case-chapter edges, 198 claim-case edges, and 34
  case-source uses.
- 22 architecture claims, 17 boundaries, 10 scenarios, 12 domains, 8 clusters,
  5 ports, 105 chapter-port assertions, and 35 part-exit checks.
- 17 states, 19 legal transitions, 2 forbidden transitions, and 4 reopen
  triggers.
- 168 primary chapter sections, 42 deterministic labs, 21 assessments, 25
  visual records, 21 dossier milestones, 7 appendices, 10 front-matter items,
  and 5 closing items.
- One primary teaching section per claim; exact claim/source/case/architecture
  reverse equality.
- Exact `BL-ENTRY`, `BL-00` through `BL-20`; no state skip, self-approval, or
  silent dossier repair.
- Exactly four ungenerated raster placeholders: `MLE-F05.1`, `MLE-F14.1`,
  `MLE-F16.1`, `MLE-F18.1`.
- No image asset, SVG, WebP, PDF, site, publication, course, certification,
  Abhyaas, second volume, catalog-position-6, or next-role output.
- Author exactly Komal Nakrani; screen-first 7 by 10 direction preserved.

## Task 1: Approve the plan while Phase 08 is inactive

**Files:**
- Create: `project-control/roles/machine-learning-engineer/reviews/phase-08/task-00-plan.md`
- Optional after failure only:
  `project-control/roles/machine-learning-engineer/reviews/phase-08/task-00-plan-repair.md`

1. Verify the clean Phase 07 baseline commit and frozen hashes separately from
   the exact candidate spec/plan/review dirt. Confirm closed #84, open #79, and
   all four local authorities showing Phase 08 inactive. Reject the currently
   stale live #79 body until it is synchronized to the committed local root body
   while Phase 08 remains inactive.
2. Independently review the spec and plan for exact output paths, graph counts,
   lifecycle, reviewer independence, companion effect boundary, and stop rules.
3. If a defect exists, preserve FAIL/CHANGES, repair only spec/plan, add the
   paired repair record, and require same-reviewer reapproval.
4. The expected next child is exactly `#85`. If another issue consumes it, stop,
   repair this plan and state projection, and re-review; never bind a different
   issue silently.
5. Commit and push the approved spec, plan, durable review, applicable repair,
   and synchronized inactive #79 body before creating the Phase 08 child. Fetch
   and require local `main`, `origin/main`, and live remote `main` equality and a
   clean worktree.

Task 00 producer identity is `/root`; reviewer identity is
`/root/mle_p7_test_contract_repair`.

## Task 2: Activate Phase 08 and freeze the executable bootstrap

**Files:**
- Create: `project-control/roles/machine-learning-engineer/issues/phase-08-manuscript.md`
- Modify: `project-control/roles/machine-learning-engineer/ROLE-STATE.md`
- Modify: `project-control/roles/machine-learning-engineer/issues/root.md`
- Modify: `project-control/role-factory/FACTORY-STATE.md`
- Create: `project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-08.test.mjs`
- Create: `project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-08.mjs`
- Create: `project-control/roles/machine-learning-engineer/reviews/phase-08/task-01-bootstrap.md`
- Optional after failure only: `.../task-01-bootstrap-repair.md`

1. Fetch live GitHub state and create exactly child #85 with labels
   `phase:08-manuscript`, `role:machine-learning-engineer`, and
   `status:in-progress`. Stop and reconcile the approved plan if GitHub returns
   any other number.
2. Atomically set Phase 08 active in ROLE, root, local issue, and FACTORY. Keep
   Phase 09 inactive and catalog position 6 not started. Update live #79 and #85
   bodies from the intended committed issue snapshots, then record their exact
   body hashes, states, and ordered label sets.
3. Write the test file first. Run:

   `node --test project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-08.test.mjs`

   Record a genuine `ERR_MODULE_NOT_FOUND` RED for the absent validator.
4. Freeze mutation tests for input hashes, exact inventories, chapter graph,
   manuscript depth, source/case truth, dossier continuity, companion effects,
   path boundaries, review/repair chains, verification, four-state lifecycle,
   Git, and GitHub.
5. Implement the smallest validator that passes the frozen tests. The production
   loader must read real files, reviews, state, Git, and GitHub; tests must include
   a realistic loaded filesystem fixture and reject unexpected paths.
6. Commit and push the activation implementation checkpoint excluding the
   bootstrap review. The independent reviewer binds that existing checkpoint,
   RED/GREEN evidence, frozen inputs, state hashes, live issue bodies/labels,
   exact absent manuscript inventory, validator/test hashes, and stop boundary.
7. Commit and push the accepted bootstrap review. Require clean local and remote
   equality before production lanes.

Task 01 producer identity is `/root/mle_p8_bootstrap`; reviewer identity is
`/root/mle_p8_bootstrap_review`.

## Task 3: Produce Lane A manuscripts, chapters 01-07

**Files:**
- Create: `.../manuscript/chapter-01.md` through `chapter-07.md`
- Create scratch: `.superpowers/sdd/2026-08-22-machine-learning-engineer-phase-08/lane-a-manifest.json`
- Create review: `.../reviews/phase-08/task-02-lane-a.md`
- Optional repair: `.../task-02-lane-a-repair.md`

For every chapter:

1. Load its blueprint, exact three claims, accepted sources, cases, chapter
   state, five ports, labs, assessment, visual contract, and Phase 08 handoff.
2. Write original prose within the frozen word range and exact eight-section
   sequence. Preserve the six-item grammar, Bench Sheet, Qualification Gate,
   claim-primary uniqueness, currentness notes, truth boundaries, and source
   notes.
3. Materialize two deterministic lab narratives from fixed companion fixtures;
   label all results synthetic and keep authority outside the companion.
4. End with the exact outgoing dossier record `BL-00` through `BL-06` and the
   next-chapter bridge.
5. Run lane validation for 7 chapters, 21 claims, 21-source union, 49
   source-claim edges, 83 claim-case edges, 34 case placements, architecture
   31/42/9/7, 35 ports, 56 sections, 14 labs, 7 assessments, 8 visuals, and 7
   handoffs.
6. An independent reviewer verifies prose depth, originality, evidence ceilings,
   mapping, continuity, grammar, and hygiene before PASS/APPROVED.

Producer identity: `/root/mle_p8_lane_a`. Reviewer identity:
`/root/mle_p8_lane_a_review`.

## Task 4: Produce Lane B manuscripts, chapters 08-14

**Files:**
- Create: `.../manuscript/chapter-08.md` through `chapter-14.md`
- Create scratch: `.../lane-b-manifest.json`
- Create review: `.../task-03-lane-b.md`
- Optional repair: `.../task-03-lane-b-repair.md`

Follow Task 3's chapter procedure. Validate 7 chapters, 21 claims, 21-source
union, 52 source-claim edges, 92 claim-case edges, 31 case placements,
architecture 30/37/14/7, 35 ports, 56 sections, 14 labs, 7 assessments, 8
visuals, and 7 handoffs. Prove the incoming `BL-06` seam and outgoing `BL-13`.

Producer identity: `/root/mle_p8_lane_b`. Reviewer identity:
`/root/mle_p8_lane_b_review`.

## Task 5: Produce Lane C manuscripts, chapters 15-21

**Files:**
- Create: `.../manuscript/chapter-15.md` through `chapter-21.md`
- Create scratch: `.../lane-c-manifest.json`
- Create review: `.../task-04-lane-c.md`
- Optional repair: `.../task-04-lane-c-repair.md`

Follow Task 3's chapter procedure. Validate 7 chapters, 21 claims, 17-source
union, 59 source-claim edges, 23 claim-case edges, 39 case placements,
architecture 42/49/25/7, 35 ports, 56 sections, 14 labs, 7 assessments, 9
visuals, and 7 handoffs. Prove the incoming `BL-13` seam, terminal `BL-20`,
RETIRED before REVIEWED, and the inventory-and-observation-time retirement limit.

Producer identity: `/root/mle_p8_lane_c`. Reviewer identity:
`/root/mle_p8_lane_c_review`.

## Task 6: Implement the deterministic companion

**Files:**
- Create: `.../companion/package.json`
- Create: `.../companion/README.md`
- Create: `.../companion/lib/*.mjs`
- Create: `.../companion/contracts/*.json`
- Create: `.../companion/fixtures/*.json`
- Create: `.../companion/expected/*.json`
- Create: `.../companion/tests/*.test.mjs`
- Create review: `.../task-05-companion.md`
- Optional repair: `.../task-05-companion-repair.md`

1. Write failing tests for the common evidence envelope, immutable dossier
   records, legal transitions, forbidden transitions, four reopen triggers,
   authority ceilings, and five equal ports.
2. Implement an effect-free core with fixed clock, deterministic hashes, no
   network/shell/cloud/model/secret access. Resolve the caller target and require
   a fresh real directory outside the repository; reject traversal, protected
   absolute paths, pre-existing symlinks, symlink escape, and out-of-root writes.
   Serialize canonical JSON by recursive key sort, preserved array order, no
   insignificant whitespace, and one terminal LF before SHA-256.
3. Implement twenty-one positive labs and twenty-one failure/change labs that
   reproduce the blueprint's named diagnostics and dispositions.
4. Prove every run starts from immutable fixture bytes, returns a new evidence
   record, never rewrites earlier dossier state, and is byte-reproducible.
5. Test all ports against identical decisions and evidence shapes. Port adapters
   may change mechanics only.
6. The independent review checks no paid service, secret, download, hardware,
   universal metric, automatic promotion, production claim, or hidden effect.

Producer identity: `/root/mle_p8_companion`. Reviewer identity:
`/root/mle_p8_companion_review`.

## Task 7: Write whole-book furniture and appendices

**Files:**
- Create: `.../manuscript/opening-and-closing.md`
- Create: `.../manuscript/part-01.md` through `part-07.md`
- Create: `.../manuscript/appendix-a.md` through `appendix-g.md`

1. Write all ten Bench Zero items, including routed contents, case truth
   orientation, lifecycle map, and reading grammar.
2. Write seven part openers with exact decision question, incoming evidence,
   route, and part-exit Qualification Gate.
3. Write seven appendices from the frozen furniture jobs. Keep companion commands
   provider-neutral and clearly non-proof.
4. Write all five closing dossier items, About Komal, and the exact closing line.
5. Verify selectable semantic truth, complete cross-references, no figure asset,
   and no repeated boilerplate masquerading as furniture.

Producer identity: `/root/mle_p8_furniture`. Reviewer identity:
`/root/mle_p8_integration_review`, recorded in Task 06 after independently
reviewing these twenty files. The Task 06 reviewer must differ from both this
producer and the shared integration producer.

## Task 8: Integrate the manuscript package

**Files:**
- Create: `.../manuscript/manuscript-register.json`
- Create: `.../manuscript/verification-report.md`
- Create: `.../manuscript/phase-09-handoff.md`
- Create review: `.../reviews/phase-08/task-06-canonical-integration.md`
- Optional repair: `.../task-06-canonical-integration-repair.md`

1. Build the register from final file bytes, never from reviewer claims. Record
   frozen input identities, chapter and furniture hashes, word counts, claim
   primary sections, source/case edges, dossier records, lab fixtures, companion
   tests, visual placeholders, and reverse mappings.
2. Verify the full frozen global count tuple: parts/chapters/claims/sources/
   source-claim/cases/case-chapter/claim-case/case-source =
   `7/21/63/46/160/12/104/198/34`; architecture
   claims/boundaries/scenarios/domains/clusters = `22/17/10/12/8`; ports/
   chapter-port/part-exit = `5/105/35`; states/legal/forbidden/reopen =
   `17/19/2/4`; sections/labs/assessments/visuals/handoffs =
   `168/42/21/25/21`; furniture = `10/7/7/5`. Verify lane-specific totals,
   chapter 07 to 08 and 14 to 15 seams, and all part exits.
3. Run originality and suspicious-overlap checks against other role manuscripts
   and sources. Findings require human-readable review, not automatic deletion.
4. Verify no unresolved marker, fake citation, unbounded claim, public/synthetic
   truth collapse, or authority self-approval.
5. Write the Phase 09 handoff with exact file hashes, remaining rechecks, known
   editorial risks, companion commands, and an explicit inactive Phase 09.
6. Independent Task 6 binds every final production file and review chain and
   returns exact PASS/APPROVED before hostile QA.

Task 06 producer identity is `/root/mle_p8_integration`; reviewer identity is
`/root/mle_p8_integration_review`.

## Task 9: Hostile integration and executable closure proof

**Files:**
- Create: `.../reviews/phase-08/task-07-hostile-integration.md`
- Optional repair: `.../task-07-hostile-integration-repair.md`
- Do not create final verification in this task.

1. Run the full Phase 08 tests and real filesystem validator at pre-hostile and
   pre-close stages.
2. Independently recompute all hashes, counts, reverse edges, dossier lineage,
   word ranges, source/currentness/truth limits, five-port equality, companion
   determinism, furniture, and review bindings.
3. Mutate at least one value in every contract family and require the intended
   single error family. Test unexpected manuscript, publication, image, PDF,
   course, Abhyaas, second-volume, and next-role paths.
4. Run repository-wide content, test, build, whitespace, EOF, marker, JSON,
   symlink, and `git diff --check` gates.
5. Mutation-test every frozen global count independently, in addition to path,
   graph, review, lifecycle, and companion-effect families.
6. Preserve FAIL/CHANGES history. After any repair, same reviewer must bind the
   replacement artifacts and paired repair SHA before final PASS/APPROVED.
7. Freeze an active/pre-close package digest that excludes future closure-state
   bytes and excludes `phase-08-verification.json`. Task 07 binds that digest,
   current validator/tests, Task 06, and the active package only.

Task 07 producer identity is `/root/mle_p8_hostile_fixture`; reviewer identity is
`/root/mle_p8_hostile_review`.

## Task 10: Two-checkpoint close

**Files:**
- Modify: ROLE, root, local Phase 08 issue, FACTORY state
- Modify: live Phase 08 child and root issue bodies/labels

1. Commit and push the complete active-state manuscript package, companion,
   validator/tests, and accepted reviews, excluding final verification and final
   state transition. Fetch and require clean local/remote equality.
2. Mark the Phase 08 child done and close it. Keep root #79 open/in-progress.
3. Atomically project the four state authorities to Phase 08 complete, no active
   child, Phase 09 sole next gate and inactive, catalog position 6 not started.
4. Create the sole `phase-08-verification.json` now, using the accepted
   active/pre-close digest plus actual final state hashes, closed #85 and open
   #79 body/state/label hashes, all frozen global counts, accepted reviews and
   applicable repairs, test evidence, Git expectations, and the inactive Phase
   09 next gate. The file excludes only its own hash and timestamp from its
   package projection. Mutation-test both the active digest and final closure
   identities. Run `--stage=final-content` before commit.
5. Commit and push final state plus verification. Fetch remote; require local
   `main`, `origin/main`, and live remote `main` equality, clean worktree, child
   closed/done, root open/in-progress, and Phase 09 inactive.
6. Run `--stage=final` and the full tests once more. Post a concise evidence
   comment to the closed child.
7. Stop Phase 08 with Phase 09 inactive. A separately approved Phase 09 plan may
   continue this same current book through Phase 09 whole-book QA, Phase 10
   visuals, Phase 11 web/PDF publication, and Phase 19 hostile final QA. The
   user's all-PDF direction-review stop applies after Phase 19 and before any new
   book, course, Abhyaas work, catalog position, or role begins.

## Required command families

```bash
node --check project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-08.mjs
node --check project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-08.test.mjs
node --test project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-08.test.mjs
node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-08.mjs --stage=bootstrap
node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-08.mjs --stage=pre-hostile
node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-08.mjs --stage=pre-close
node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-08.mjs --stage=final-content
node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-08.mjs --stage=final
npm run check
git diff --check
```

## Completion boundary

Phase 08 completion means the private book manuscript and companion are finished
and verified. It does not mean the PDF or public book is finished. The current
book continues through Phase 09 whole-book QA, Phase 10 visuals, Phase 11 web and
screen-first PDF publication, and Phase 19 hostile final QA. After that final
publication gate, stop for the user's review of all completed PDFs before any new
book or role begins.
