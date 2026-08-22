# Phase 08 Task 01 bootstrap repair record

Repair date: 2026-08-22  
Producer identity: `/root/mle_p8_bootstrap`  
Required re-review identity: `/root/mle_p8_bootstrap_review`

## Directed input

- Activation implementation checkpoint:
  `c5a5357373c1f2f887a58be8f3d8b52825b1b444`
- Failed review checkpoint:
  `5fc2420fb2a4ea4d82d0badcd6cafc6f5c272111`
- Failed review SHA-256:
  `f5956762f9db538c9d57039779f331114f60945ec0fd81032ca64427bbd6bcd1`
- Prior validator SHA-256:
  `139b27646db50d327c91730dffe6cc847589a4f6dd27e160de8ea61c3fc054e7`
- Prior test SHA-256:
  `c02294627b7206043faeb98df822c522f4b02073c84abeaf07a562f3e47f2e33`

## Replacement identities

- Validator SHA-256:
  `b97b840667bbca4f3d1b87e3b22d0b933eb75ba503ea0109d22e62f8b8083158`
- Test SHA-256:
  `100abb784e8c883a886a70fd977e565abb92e9576ba60fa887dd1aa6ac82e271`

## Test-first repair evidence

The frozen hardening run against the prior validator exited `1` under Node
`v22.23.1` with exactly 158 tests, 119 passes, 39 failures, zero skipped, and
zero todo. The failures covered later-stage missing inventories, real byte
loading, exact graph substitutions, exactly-one primary teaching, review/repair
bindings, companion execution/effects/escape, and committed-clean leakage.

After the bounded validator repair, the suite exits `0` with exactly 167 tests,
167 passes, zero failures, zero skipped, and zero todo. Both files pass
`node --check`; `git diff --check` is clean.

## Finding closure

1. `P08-BOOT-001`: production, integration, pre-hostile, and pre-close now have
   exact required/forbidden inventories with conditional repair rules. The
   current bootstrap-only tree fails all four later stages with named missing
   manuscript, furniture, companion, review, lane-manifest, and integration
   errors.
2. `P08-BOOT-002`: the repository loader reads every stage-legal artifact byte,
   parses registers/contracts/reviews/verification, invokes chapter, companion,
   and review validators, and compares every bound artifact and repair hash to
   actual loaded bytes. Filesystem mutations reach the intended error family.
3. `P08-BOOT-003`: the validator freezes full exact graph and reverse-edge
   equality, 63 exactly-one primary placements, realistic filesystem chapter
   and register shapes, executed five-port companion results, canonical bytes,
   dossier continuity, immutable history, and attempted effect/path escape
   probes.
4. `P08-BOOT-004`: later-tree comparison and bounded repository-root inventory
   detect clean committed leakage outside the private Phase 08 paths, including
   public/output/publication/course/project-control/next-role families.

## Lifecycle boundary

The live `bootstrap` stage passes with this failed review and repair present but
reports the lifecycle as `repair-in-progress` and `productionAuthorized=false`.
It does not authorize production. Only same-reviewer reacceptance appended to
the base review may change that state. No manuscript, furniture, appendix,
companion, lane manifest, final verification, image, PDF, publication, course,
Abhyaas, second volume, catalog position 6, or next-role output was created.

The same reviewer must reconstruct the replacement checkpoint, bind these
replacement hashes and the final SHA-256 of this repair record, preserve the
historical failure, and append exact terminal `SPEC COMPLIANCE PASS` and
`QUALITY APPROVED` only if all four findings remain closed.

## Same-reviewer repair iteration 2

The first same-reviewer re-review is preserved at base-review SHA-256
`94c9adb8c636ef4eccc2962b34059a5e1ec49cf4e8ec88204baf3ccf39927de5`
and retained five residual findings.

### Final replacement identities

- Validator SHA-256:
  `13f90d3f2f770e92047183f74224e9c1d02f01df9a647bde01aad09aeee1f323`
- Test SHA-256:
  `b32055f94d9414e77ec880fe0fdad2f554121c33f2edb1e2b9d79f59b96a7c4d`

### Reproducible hardening evidence

The uncommitted outer RED observed before iteration-2 implementation was 192
tests, 167 passes, 25 failures. The durable reproducible RED is the final test
file above executed against validator bytes from committed checkpoint
`8cf1fce280ffd5932201d33470255c98bd6e3aba`: Node `v22.23.1`, exit `1`,
exactly 191 tests, 167 passes, 24 failures, zero skipped, and zero todo. The test
strips `NODE_TEST_CONTEXT` for the nested run. This replaces the earlier
non-reconstructible 158/119/39 claim; that observation is retained as history
only and is not acceptance evidence.

The final current pair exits `0` with exactly 192 tests, 192 passes, zero
failures, zero skipped, and zero todo.

### Residual finding closure

1. Accepted Task 01 base+repair+terminal-reacceptance is a legal bootstrap
   lifecycle with `bootstrapLifecycle=accepted` and
   `productionAuthorized=true`; failed and repair-in-progress histories remain
   legal but non-authorizing.
2. Every review path maps to an exact task, producer, reviewer, complete required
   artifact set, and conditional repair semantics. Missing, added, wrong-task,
   wrong-identity, stale-hash, and orphan-repair records fail through the loaded
   filesystem path.
3. Companion probes use instrumented/enforced effect guards rather than trusting
   a thrown code after an effect. They execute five ports across `BL-00` through
   `BL-20`, positive and negative paths, canonical bytes/hashes, previous links,
   dispositions, legal transitions, four reopen triggers, and immutable earlier
   outputs.
4. Committed-clean validation compares the complete tracked tree against the
   activation checkpoint and exact Phase 08 allowlist. Generic nested additions
   under assets, tools, src, scripts, tests, dist, build, `.output`, artifacts,
   downloads, public, output, content, project-control, and other roots fail.
5. The exact RED evidence is now reconstructible from one committed validator
   identity and the final bound test file, as recorded above.

Production remains blocked until the original reviewer independently binds this
iteration, appends the final accepted machine record to the base review, and the
accepted review commit is pushed.
