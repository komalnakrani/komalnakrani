# Machine Learning Engineer Phase 06 — Task 06 Hostile Integration Review

## Review identity and boundary

- Review date: `2026-08-18`
- Reviewer lane: independent hostile integration review
- Role: `machine-learning-engineer`
- Book: `machine-learning-engineering`
- Approved plan SHA-256: `d998697b4c3b9a7c72be189eee479e0291362d1278ea19d7c657eaa06b078ed8`
- Frozen architecture Markdown SHA-256: `5f41bfc624f7085b8e3b2a12d6c2c3d52d6c21659eb5140d94cfa29b0edce630`
- Frozen architecture JSON SHA-256: `bb2b6fe1137b6b56ff4729d0131c1b9496804bcd3a37e07a92361f4af4da972f`
- Integration contract hash: `3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433`
- Canonical integration review SHA-256: `8558119277bddaffb83b946e30e0ab1559b364867efdd8a3b22f91dca6861daf`
- Phase 06 validator SHA-256: `02c98583659926b3036f16e9dd92012d0d7b861a5ad4e3795e3c88791c4a99af`
- Phase 06 tests SHA-256: `5268e5e761b070f5f45df4c73b5cd4bc6276d8f8200cd8e015a918da99526ecd`

This review is limited to the Phase 06 source-and-case-study research package.
It reviews research registers, case truth, all 21 research packs, architecture
traceability, currentness, review and repair identity chains, validator and
mutation-test behavior, lifecycle stages, path boundaries, four-authority
state projections, and the final Git/GitHub contract. It does not authorize or
create a manuscript, blueprint, companion implementation, media, publication,
PDF, course, second volume, another role, or Abhyaas work.

## Canonical artifact identities

| Artifact | SHA-256 |
|---|---|
| `sources/source-register.json` | `6dc8cc380f42238e5dce26ec9357118fd6dac9e2f037b0307827bd64f8d4d902` |
| `sources/claim-register.json` | `953572463965ffe79a1fd4ef4d8a5c2ee70e8c507ad83214b0e1d1e6246f569c` |
| `case-studies/case-study-register.json` | `afdf9b955b766660efa7ec6ec7da1a22ea54d050436b271aff24d1aceaed5e51` |
| `sources/claim-to-chapter.csv` | `39eda5b2d97e5af91f95cc5d33589c4152cc66db4fd77936be895d2643df3154` |
| `sources/integration-manifest.json` | `c8f2dff28008101c40d8eeac6916fb73625d46064c10aeedb27fb0aaad400bc4` |
| `sources/verification-report.md` | `88508e7cf7bf3031e252b8b30ffaea589a2c503a2aa5aa5687f5afbc05c2c137` |
| `sources/phase-07-handoff.md` | `98301e0108ace18f69a3e212d0b55d59cdf7380d1c5beaefc7dbc19926a6a119` |
| `validate-phase-06.mjs` | `02c98583659926b3036f16e9dd92012d0d7b861a5ad4e3795e3c88791c4a99af` |
| `validate-phase-06.test.mjs` | `5268e5e761b070f5f45df4c73b5cd4bc6276d8f8200cd8e015a918da99526ecd` |

The manifest binds all 21 ordered chapter packs and the three frozen scratch
lanes. Its recursively key-sorted projection recomputed to the exact
integration contract above. The accepted package contains exactly 46 sources,
63 formula-allocated chapter claims, 12 cases, 21 packs, 160 source-to-claim
edges, 34 source-to-case uses, and 63 CSV data rows.

## Review and repair chain identities

| Review | SHA-256 | Disposition |
|---|---|---|
| `task-01-bootstrap.md` | `456b38ff16fd7220b839ec23b4a2b7e718b6ee7507a79b042bf57ff6fbeb171f` | accepted |
| `task-02-lane-a.md` | `5507d553b2ef66655f9f1e201d7ed056eafe85f0193d1681c89f4d837c84a9be` | accepted with paired repair |
| `task-02-lane-a-repair.md` | `289fe258770cfef0e5dec4e6eef74724874e337dbc0e3adf4d8cc3d83c0d9313` | accepted |
| `task-03-lane-b.md` | `580a6033f6b6a50f1e209b16952f2c573acd5e8e9ffd65a24336b3f81d82ff23` | accepted with paired repair |
| `task-03-lane-b-repair.md` | `ae0a2a30fdbe757b0b806c0733fcb0760a86b81bc5bbf232bd1df31e62780577` | accepted |
| `task-04-lane-c.md` | `a77c94ae4036c421565331a2fb137381db1c81487bb2c68de9f7d2aa2b748c9b` | accepted with paired repair |
| `task-04-lane-c-repair.md` | `a3c7e840a2cc47fa17bd1936aaee7bdbd88e8c104fb8fea525f209d5beec2693` | accepted |
| `task-05-canonical-integration.md` | `8558119277bddaffb83b946e30e0ab1559b364867efdd8a3b22f91dca6861daf` | accepted |

All accepted reviews end with the exact two-line verdict contract. Lane
reviews and paired repairs bind their current manifest and pack identities.
The validator now detects requested-change history for any task rather than
only a hard-coded subset, requires the corresponding accepted repair, verifies
the directed repair hash, and rejects stale reviewed-artifact hashes.

## Fresh executable evidence

### Current Phase 06 package

- JavaScript syntax check: pass.
- `node --test project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.test.mjs`: `190/190` pass, `0` fail.
- `node project-control/roles/machine-learning-engineer/books/machine-learning-engineering/validate-phase-06.mjs --stage=pre-hostile`: pass with sources `46`, claims `63`, cases `12`, packs `21`, and edges `160/34`.
- Phase 01 validator: pass with sources `36` and claims `22`.
- Phase 01 tests: `42/42` pass.
- Phase 04 validator: pass.
- Phase 04 tests: `30/30` pass.
- Addition-aware whitespace and EOF audit from baseline `e1705e0`: pass.
- Unfinished-marker scan: pass with zero matches.
- Changed and untracked JSON parse audit: `4/4` pass.
- `git diff --check`: pass.
- Full repository `npm run check`: pass, including publication, course, PDF,
  companion, build, and built-site checks.

### Frozen Phase 05 temporal regression gate

The Phase 05 validator is intentionally a closure-time anti-premature-output
gate. Running it in the live Phase 06 worktree must reject the authorized Phase
06 files and active Phase 06 state; weakening that frozen validator would
destroy its accepted evidence chain. The approved Phase 05 commands were
therefore rerun unchanged against isolated accepted-closure snapshots built
from `git archive e1705e0`, with only the accepted closure-time ignored
inventory restored.

Two independent snapshots reproduced the result:

- `/tmp/mle-phase05-snapshot.tZ5kwi`: exact Phase 05 final validator pass and
  `190/190` tests pass.
- `/tmp/mle-phase05-closure-e1705e0.Iq27RV`: every tracked bundle input was
  byte-equal to `e1705e0`; the accepted external inventory contained 2,111
  paths and reproduced digest
  `1b3d92809cbe2279dda0e5782083882936874f4f1a458c86423593548fad8132`;
  the exact Phase 05 final validator passed and its tests passed `190/190`.

The fresh independently repeated validator output was: parts `7/7`, chapters
`21/21`, milestones `21/21`, trace `8/22/17/10`, domains `12/12`, ports `5/5`,
contexts `40/40`, exits `35/35`, cases `5/5`, and reviews `5/5`. This is an
execution of the accepted temporal gate, not a waiver and not a mutation of
the frozen Phase 05 validator, reviews, or verification.

## Hostile mutation findings

The final suite rejects all required schema, graph, evidence, review,
lifecycle, and path mutations. The independent audit specifically reproduced
and then rechecked the following repair history:

1. Lifecycle hash-cycle repair: the realistic final-stage fixture recomputes
   the four final lifecycle-state file hashes before building verification.
   The RED run exposed four `REVIEW_ARTIFACT_HASH` failures because Task 05 was
   forced to bind state bytes that are required to change only after the
   pre-close review. The GREEN contract removes only those four state files
   from Task 05's reviewed-artifact set. Final verification still binds all
   four current state hashes, and Task 06 still binds the current validator,
   tests, and Task 05 review. The repaired fixture passes; stale Task 05
   canonical evidence and all four final-state drifts remain rejected.
2. Verification schema families: unknown fields, count drift, stale artifact
   or review hashes, frozen-case drift, incomplete architecture trace,
   currentness drift, altered RED/GREEN evidence, missing executable checks,
   path-boundary drift, state drift, GitHub expectation drift, and next-gate
   activation are rejected. The valid final-content fixture passes before any
   mutation. A syntactically shaped but impossible timestamp such as month 99
   is rejected semantically.
3. Review chains: a later conflicting final verdict is rejected; historical
   requested-change evidence requires a paired repair even when a later
   accepted verdict exists; missing repair, changed repair identity, and stale
   current artifact hashes are rejected.
4. Four-authority lifecycle: active-state drift is rejected independently in
   `ROLE-STATE.md`, the root issue, local Phase 06 issue, and
   `FACTORY-STATE.md`. Final-content fixtures require child #83 closed
   `status:done`, active child none, Phase 07 as sole-next inactive, and catalog
   position 6 not started. Appended contradictory Phase 07-active, child #999,
   or child-open statements are rejected independently for all four
   authorities. The verification manifest binds all four final state-file
   hashes.
5. Final runtime: a dirty worktree, non-`main` branch, live remote-main
   mismatch, root #79 closure or label drift, and child #83 open or label drift
   are rejected. The CLI reads the remote branch with `git ls-remote` and reads
   both issues through `gh`; pre-push verification records only expectations,
   not fictional live results.
6. Path inventory: manuscript, blueprint, companion, media, publication, PDF,
   course, Abhyaas, certification, question-bank, second-volume, and next-role
   additions are rejected. The loader freezes production roots, top-level
   directories, top-level symlinks, the exact three scratch files, and the
   `.superpowers`, `tmp`, and `.astro` inventories. An isolated temporary
   filesystem test proves that hidden files and a top-level symlink are
   discovered, and cleanup leaves canonical bytes untouched.
7. Evidence strength: every technical claim class requires acceptable
   non-role primary or official support; role-market evidence remains isolated;
   low confidence is rejected; public facts, attributed outcomes, allowed
   inferences, limitations, and transfer rules remain separated; constructed
   cases cannot acquire reported outcomes.

## Canonical quality findings

- The 63 claims preserve exact three-per-chapter allocation and complete
  architecture, boundary, scenario, domain, port, case, milestone, and Phase 07
  instruction traceability.
- All 46 retained sources are used through exact forward and reverse edges.
  Currentness remains dated `2026-08-18`, with `42` directly accessible and
  four browser-verified records whose access limitations and recheck triggers
  remain explicit.
- All five constructed cases preserve the accepted Phase 05 truth projection.
  Seven public cases maintain reported-fact, attributed-outcome, inference,
  limitation, and transfer boundaries without converting methods or reports
  into universal outcome claims.
- All 21 packs bind the final integration contract, exact decision jobs,
  source research needs, authority ceilings, five-port transfer, case truth,
  durable-versus-volatile treatment, and exact Phase 07 instructions. Each
  pack ends with the required evidence-gap disposition and names affected
  claim/source IDs.
- No release-blocking evidence, source-currentness, architecture, authority,
  case-truth, review-chain, lifecycle, schema, path, hygiene, or originality
  finding remains.

## Final disposition

The Phase 06 package is accepted for the pre-close gate at the exact validator,
test, Task 05 review, manifest, and integration-contract identities recorded
above. Any later change to a canonical register, CSV, case record, pack,
report, handoff, review or repair, validator, test, frozen architecture, plan,
or scratch input invalidates this verdict and requires a new hostile review.
Phase 07 remains inactive.

SPEC COMPLIANCE PASS
QUALITY APPROVED
