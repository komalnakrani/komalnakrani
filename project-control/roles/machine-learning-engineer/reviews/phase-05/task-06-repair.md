# Phase 05 Task 06 Validator and Integration Repair Record

## Trigger

The first hostile integration review evaluated validator SHA-256
`4a0b5857f4ba77f3cdf4144a7f2ef7762922e333214e595696ee17a3703cba2c`
and test SHA-256
`d0acffce7c77b478eec69821dd8130b65c57ede99d5d143a55241776e480898e`.
It recorded 106/106 GREEN and a passing `pre-hostile` CLI, but returned
`SPEC COMPLIANCE FAIL` and `QUALITY CHANGES REQUESTED` in review SHA-256
`c0b8f70cb9a789b5d0fffd4d79f2ed9c5104f65c353595c962fd1d9c549a7bd7`.

## Replacement identities

- `validate-phase-05.mjs` SHA-256:
  `a3b2273461508c2ea12610837d3d6127c96db53d0b67e4e04e46b202e59e14b6`
- `validate-phase-05.test.mjs` SHA-256:
  `ca14b2cf5c62579e5ea0294f4380c6d9ce07ae7ef417fb1cac188a1e4e7cc409`

## Finding dispositions

### F-01 — incomplete final-state authority gate

Repaired. Final validation now checks all four controlling state records:

- `ROLE-STATE.md` must mark Phase 05 complete, name no active child, retain
  #82 as the last completed child, and keep Phase 06 inactive as the sole next
  gate;
- `issues/root.md` must mark Phase 05 complete and remove the active child;
- `issues/phase-05-book-architecture.md` must mark every acceptance criterion
  complete and record its completed local disposition;
- `FACTORY-STATE.md` must mark Phase 05 complete, identify no active child,
  retain Phase 06 as inactive next work, and preserve the current-book-only
  boundary.

Separate mutation tests reject drift in each record rather than relying on one
generic phrase.

### F-02 — narrow downstream path inventory

Repaired. The first replacement still walked several noncanonical roots, so
the same hostile reviewer correctly retained F-02. The final validator now
inventories the repository's actual bounded role and publication surfaces,
including `content/courses`, `content/publications`, `content/roles`,
`public/assets/publications`, the Machine Learning Engineer role root, and the
canonical book/review directories. It distinguishes the five accepted
published books and existing FDE course from new forbidden Machine Learning
Engineer research, blueprint, manuscript, companion, media, publication, PDF,
course, Abhyaas, certification/question-bank, second-volume, or next-role
output. Isolated path mutations cover all six previously escaped probes plus
the current-root no-false-positive condition. A final independent audit then
found that manuscript, blueprint, companion, Phase 06 research, book-route,
screen-first builder/theme, and companion-tool surfaces still escaped
category-only rules. The final replacement uses an exact allowlist for the
current Machine Learning Engineer role package, inventories the actual `src`,
`tools`, and `public` roots, and rejects Machine Learning Engineering
production surfaces there.
The last path audit then extended this from role-local/output roots to the
repository's conventional `project-control`, `docs`, `content`, `public`,
`src`, `tools`, `scripts`, `tests`, `dist`, and `output` surfaces plus
top-level files. It replaces the review filename cross-product with an exact
review allowlist, rejects target material hidden under accepted historical
slugs, and rejects content-product and catalog-position-6 escape paths.
A last adversarial pass demonstrated that name inference could still be
evaded through abbreviations, punctuation, plural roots, or generic additions
under accepted historical slugs. The final gate therefore freezes the exact
bounded external production-root path inventory after a clean full build,
while retaining an exact allowlist for the Machine Learning Engineer role
package. Any added path in those roots now fails independently of its name.

### F-03 — underspecified verification manifest

Repaired. The manifest contract now requires and mutation-tests:

- exact architecture counts `7/21/21`, trace counts `8/22/17/10`, 12 domains,
  5 ports, 40 context tests, 35 part exits, and 5 cases;
- exact furniture, companion, media, and author/closing boundaries;
- seven final artifact paths/hashes and six final review paths/hashes;
- the exact genuine RED command, `ERR_MODULE_NOT_FOUND`, Node `v22.23.1`, exit
  1, and `tests/pass/fail = 1/0/1` evidence;
- final GREEN `tests/pass/fail = 190/190/0`;
- every required Phase 01/04/05, marker, diff, repository, whitespace/EOF,
  and path check with `status: PASS` and zero unexpected paths;
- exact state transition and live-gate records appropriate to staged
  `pre-hostile`, `pre-close`, and `final` validation.

## Test-first evidence

- F-01/F-02 hardening RED: 118 total, 106 pass, 12 fail.
- First repair iteration: 118 total, 117 pass, 1 fail; the remaining failure
  was a test-fixture correction, not a canonical package defect.
- F-03 manifest hardening RED: 136 total, 121 pass, 15 fail.
- Residual F-02 real-root RED: 144 total, 136 pass, 8 fail.
- Final `project-control/courses` rule RED: 145 total, 143 pass, 2 fail;
  the escaped mutation failed along with its containing parent test.
- Expanded downstream-surface RED: 154 total, 144 pass, 10 fail; eight escaped
  mutations failed with their two containing parent tests.
- Conventional-root, exact-review, and historical-slug RED: 169 total, 153
  pass, 16 fail; thirteen escaped mutations failed with their three containing
  parent tests.
- Frozen-inventory RED: 190 total, 169 pass, 21 fail; twenty naming/root
  bypasses failed with their containing parent test.
- Final GREEN: 190 total, 190 pass, 0 fail.
- After the accepted verification and state files became canonical, three
  lifecycle tests were updated to construct the historical pre-hostile or
  incomplete-state view explicitly instead of assuming the live repository
  remained incomplete. Test count and production validator semantics are
  unchanged; the post-transition suite remains 190/190 GREEN.
- Syntax, marker, whitespace, EOF, and `git diff --check`: PASS.
- Canonical `--stage=pre-hostile`: PASS with 7 parts, 21 chapters, 21
  milestones, trace 8/22/17/10, 12 domains, 5 ports, 40 contexts, 35 exits, 5
  cases, and 5/5 accepted task reviews.

This implementer repair record is not acceptance. The same hostile reviewer
must verify the replacement hashes and append the final exact verdicts to the
tracked Task 6 review. The repair record intentionally does not contain that
future review hash, avoiding a reverse-hash cycle.
