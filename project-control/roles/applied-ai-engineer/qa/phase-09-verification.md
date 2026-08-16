# Applied AI Engineering - Phase 09 Whole-Book Verification

Status: **PASS** under issue #55

Date: 2026-08-16

## Scope and disposition

This hostile review treated *Applied AI Engineering: From Model Capability to Dependable Product Behavior* as one 21-chapter system rather than twenty-one separately passing files. It audited the approved architecture and blueprints, canonical MDX, learning/state/immediate-QA records, source and claim traceability, ImageGen PNG evidence, publication metadata, and the complete provider-neutral Patchwork companion. Every demonstrated in-scope defect was repaired. No blocking content, evidence, visual-truth, authority, publication-integrity, or executable defect remains.

This report does not publish the draft, generate or revise artwork, assemble the six planned appendices/front or back matter, build the PDF, enter Phase 10/11, or make a production claim.

## Reconciled inventory

| Artifact | Verified count | Result |
| --- | ---: | --- |
| Canonical chapters | 21 | PASS: manifest order 1-21, unique slugs/source files, coherent part progression |
| Whitespace-delimited manuscript words, including metadata | 133,981 | PASS: every chapter is inside its frozen blueprint target |
| Publication claims | 118 | PASS: unique, used by the owning manuscript, source-resolving |
| Publication sources | 55 | PASS: all used; forward and reverse claim links reconcile |
| Final figures | 42 | PASS: exactly two per chapter, PNG only, ImageGen provenance complete |
| Learning packs | 21 | PASS: warning, recall, scenario, applied exercise, formative MCQ, advanced challenge, completion evidence |
| State handoffs | 21 | PASS: dossier state, limits, next-step continuity, synthetic-case boundary |
| Immediate QA records | 21 | PASS: counts and chapter-specific checks reconcile after repair |
| Companion files | 59 | PASS: provider-neutral, local, effect-free |
| Companion JSON records/schemas | 18 | PASS: all parse |
| Companion test files | 18 | PASS |
| Companion tests | 109 | PASS |

## Chapter depth reconciliation

Counts use `wc -w` against the canonical MDX, matching the immediate-QA convention.

| Ch | Chapter | Words | Blueprint target | Result |
| ---: | --- | ---: | ---: | --- |
| 01 | Behavior, Not Magic | 5,026 | 5,000-6,500 | PASS |
| 02 | Start With the User Task | 6,027 | 6,000-7,500 | PASS |
| 03 | Write the Behavior Contract | 6,014 | 6,000-7,500 | PASS |
| 04 | Choose the Simplest Adequate Mechanism | 6,501 | 6,500-8,000 | PASS |
| 05 | Make Task Data Representative | 6,503 | 6,500-8,000 | PASS |
| 06 | Engineer Context and Retrieval | 7,002 | 7,000-8,500 | PASS |
| 07 | Draw the Combined System Boundary | 6,922 | 6,500-8,000 | PASS |
| 08 | Build an Inspectable Vertical Slice | 7,361 | 7,000-8,500 | PASS |
| 09 | Turn Consequences Into Evaluation Cases | 6,901 | 6,500-8,000 | PASS |
| 10 | Name the Errors That Matter | 6,500 | 6,500-8,000 | PASS after repair |
| 11 | Combine Machine, Human, and Domain Judgment | 6,528 | 6,500-8,000 | PASS; stale QA count repaired |
| 12 | Run Experiments That Change Decisions | 6,518 | 6,500-8,000 | PASS after repair |
| 13 | Design for Probabilistic Failure | 6,504 | 6,500-8,000 | PASS |
| 14 | Budget Latency, Capacity, and Cost | 6,001 | 6,000-7,500 | PASS |
| 15 | Observe Behavior Without Betraying Users | 6,501 | 6,500-8,000 | PASS |
| 16 | Implement Controls and Preserve Authority | 7,001 | 7,000-8,500 | PASS |
| 17 | Release to Learn Safely | 6,000 | 6,000-7,500 | PASS |
| 18 | Diagnose Real Use and Incidents | 6,500 | 6,500-8,000 | PASS |
| 19 | Change Models Without Losing the Product | 6,603 | 6,500-8,000 | PASS after visual-truth repair |
| 20 | Earn Reuse From Repeated Evidence | 5,541 | 5,500-7,000 | PASS after visual-truth repair |
| 21 | Lead Applied AI Decisions | 5,527 | 5,500-7,000 | PASS after visual-truth repair |

No chapter is an outline, glossary disguised as teaching, or mechanism list without a worked decision. Each closes with a usable artifact, evidence requirement, exercise, limitations, and a handoff into the next lifecycle decision.

## Continuity, terminology, and originality

- PASS: chapter openings and closings form one evidence loop: behavior/task/contract, mechanism/data/context, system/slice/evaluation, error/judgment/experiment, reliability/resources/observability, controls/release/incidents, then migration/reuse/leadership.
- PASS: Patchwork advances continuously through `PF-01` (Chapters 1-2), `PF-02` (3), `PF-03` (4), `PF-04` (5-6), `PF-05` (7), `PF-06` (8), `PF-07` (9-11), `PF-08` (12), `PF-09` (13-15), `PF-10` (16), `PF-11` (17-18), and `PF-12` (19-21).
- PASS: canonical homes remain stable. Early chapters define task, behavior, evidence, authority, mechanism, and system boundary; later chapters apply them to new decisions instead of silently redefining them.
- PASS: 574 substantial within-book paragraphs produced zero exact cross-chapter duplicates and zero near-duplicate candidates at the 0.72 normalized token-set Jaccard review threshold.
- PASS: 402 substantial Applied AI paragraphs compared with 977 other-role paragraphs produced zero exact matches and zero near candidates at the 0.78 threshold.
- PASS: manual review found no copied running-case passage that repeats without advancing evidence or disposition.

The similarity scan is a hostile-review aid, not proof of legal originality. Authorship remains the locked fresh/original manuscript decision; no other-role prose was imported.

## Claims and sources

- PASS: all 118 claim IDs are unique, appear in their owning chapter, and resolve only to registered source IDs.
- PASS: every source-to-claim and claim-to-source reverse link agrees; all 55 production sources are used.
- PASS: production source titles and URLs match the 55-record research register.
- PASS: source limitations remain visible for version volatility, benchmark context, evaluator bias, vendor/first-party evidence, and framework scope.
- PASS: the 2026-08-16 live URL check returned 48 direct `2xx`/`206` results, seven access-restricted `403` results already identified in the research register (`AAE-S013`, `AAE-S020`, `AAE-S021`, `AAE-S022`, `AAE-S043`, `AAE-S046`, `AAE-S053`), and zero `404`/`5xx` failures.
- PASS: no unresolved manuscript `SOURCE GAP` exists. Immediate-QA statements that explicitly say no unresolved gap are evidence of closure, not open markers.

## Authority, consequence, and case boundaries

- PASS: the Applied AI Engineer specifies, implements, measures, recommends, contains, and escalates within delegated scope; product, domain, privacy, security, safety, legal, and formal release/risk authorities keep their distinct decision rights.
- PASS: system suggestion, specialist review, authority disposition, and effect execution are not collapsed into one state.
- PASS: Patchwork remains explicitly fictional and its data, rates, results, incidents, portfolio, and migration evidence remain synthetic.
- PASS: illustrative values are not presented as measured product performance or universal policy. F14.1 timing numbers, F15.1 trace/version tokens, and F15.2's `30 DAYS` retention token retain explicit synthetic-example qualifications.
- PASS: no chapter gives Patchwork hidden autonomy. External effects remain prohibited or require validation, permission, exact confirmation, idempotency, bounded execution, audit, and reconciliation.
- PASS: negative, unknown, untestable, disconfirming, stopped, delayed, reduced-scope, rolled-back, and rejected-abstraction evidence remains visible.

## Figures and accessibility evidence

- PASS: 42 unique figure records and 42 canonical files exist, exactly two per chapter; 42 byte-identical public mirrors also exist.
- PASS: every canonical and public asset is a real `image/png`; no Applied AI SVG or WebP artifact exists.
- PASS: every figure filename appears in the ImageGen production log with prompt intent, essential label set, accepted built-in output, and rejected-output policy.
- PASS: manuscript anchors use measured native dimensions: 30 at `1568x1003`, ten at `1586x992`, one at `1565x1005` (F13.1), and one at `1619x971` (F15.2).
- PASS: every figure has a substantive alt, caption, chapter owner, creator, license, and evidence role. A contact-sheet review of all 42 images checked the actual rendered hierarchy and labels against prose.
- PASS after repair: F19.1 now distinguishes its rendered favorable aggregate rows from the exact PF-12 critical regressions; F19.2 is explicitly a conceptual map rather than the canonical transition order; F20.2 is explicitly a general contract/adapter seam rather than the narrower PF-12 reuse selection; F21.1 is explicitly an unnamed abstract portfolio pattern whose named order comes from PF-12; F21.2 alt text now names the actual evidence, limitation, uncertainty, owner, next-gate, decision-right, and escalation labels.

These repairs changed prose/metadata only. No image was generated, edited, converted, or replaced during Phase 09.

## Learning and immediate QA

- PASS: all 21 learning packs are visibly non-live-bank material and include recall, scenario, applied exercise, formative MCQ, advanced challenge, and completion evidence.
- PASS: exercises require artifacts or decisions rather than unsupported reflection alone and preserve evidence, limitation, ownership, authority, and next-gate expectations.
- PASS: all 21 chapter state handoffs retain dossier version, locked concepts, residual limitations, and next-step continuity.
- PASS: all 21 immediate-QA records now agree with canonical chapter word counts and their chapter-specific technical/source/figure/companion checks.

## Companion and executable consistency

- PASS: 59 companion files include 18 JSON schemas/records, 18 test files, deterministic generators/libraries, a runner, and documentation.
- PASS: all 18 JSON files parse; no provider credential, API key, environment dependency, `fetch`, external network call, or external effect is required.
- PASS: no `Math.random`, `randomUUID`, or run-time current-clock creation influences output; date use is deterministic parsing of fixture values.
- PASS: all 109 tests pass. They preserve permission, provenance, abstention, segment, critical-error, negative-evidence, evaluator-limitation, preregistration, recovery, privacy, control, stop/rollback, incident-disconfirmation, migration, reuse, and authority boundaries.
- PASS: two clean `node companion/run.mjs` executions were byte-identical, 17 lines each, with SHA-256 `75a4c9eae03de5c2026deee99ab28812293c8300558ed5e5c87edec4a7aba2c3`.
- PASS: final dossier verification leaves `productionClaim`/`releaseClaim` false or `none`; executable success is not presented as production readiness.

## Defects repaired in Phase 09

| Scope | Finding | Repair | Verification |
| --- | --- | --- | --- |
| Chapter 10 | 6,494 words, below frozen 6,500 minimum | Added one bounded synthesis sentence | 6,500 words; validator/tests pass |
| Chapter 12 | 6,496 words, below frozen 6,500 minimum | Added bounded continuity prose | 6,518 words; validator/tests pass |
| Chapter 11 QA | Stale count 6,526 | Reconciled to canonical count | 6,528 equals `wc -w` |
| Chapter 12 | Forward reference implied planned Appendix A already existed | Named it as planned and required qualified review until publication assembly | No false current artifact claim remains |
| Figures F19.1-F21.2 | Five manuscript/registry descriptions over-specified or misdescribed rendered semantics | Corrected alt/caption/prose and separated visual concept from canonical PF-12 evidence | Contact-sheet review plus registry/manuscript reconciliation |
| Role state | Phase 08 total 133,810 was stale | Reconciled to final Phase 09 total | 133,981-word sum across manifest files |

## Validation evidence

- `npm run validate:publications`: PASS, four role records and four publication records.
- `npm run test:companion:aae`: PASS, 109/109 tests.
- Role-local structural audit: PASS after excluding closed immediate-QA phrases from the unresolved-gap search; 21/118/55/42/21 inventories reconcile.
- PNG MIME, mirror hash, dimension, and ImageGen-log audit: PASS; zero missing or mismatched files.
- Deterministic companion double-run/hash check: PASS.
- Full `npm run check`: PASS.
- `git diff --check`: PASS.

## Residual limitations and handoff

- The publication manifest correctly remains `draft`; the PDF switch remains disabled and no production/release claim exists.
- The architecture plans six appendices plus front/back matter. They are not assembled in this Phase 09 scope. Chapter 12 now says the planned Appendix A is not yet available and requires qualified review in the meantime. Publication assembly remains a Phase 11 responsibility.
- Seven source URLs reject automated retrieval with `403`; each is registered as access-restricted with a limitation, and none is a hidden dead-link success claim.
- Similarity thresholds cannot prove originality, live URL success cannot prove source correctness, and synthetic companion tests cannot prove real-user usefulness, production reliability, privacy compliance, safety, accessibility conformance, or formal approval.
- Phase 10 may perform its own visual-system acceptance, but it inherits no known prose-to-render contradiction from this review. Phase 11 owns final web/PDF assembly and publication-wide rendering/accessibility verification.

Final disposition: **PASS**. Issue #55 may be accepted and closed by the root owner; no Phase 09 blocker remains.
