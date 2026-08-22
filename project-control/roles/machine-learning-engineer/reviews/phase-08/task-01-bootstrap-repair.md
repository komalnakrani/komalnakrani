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
