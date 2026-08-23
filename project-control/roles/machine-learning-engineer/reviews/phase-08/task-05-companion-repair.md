# Machine Learning Engineer Phase 08 — Task 05 Companion Repair and Reacceptance

- Producer identity: `/root/mle_p8_companion`
- Original reviewer and reaccepting reviewer: `/root/mle_p8_companion_review`
- Prior review: `task-05-companion.md`
- Prior failed-review SHA-256: `40f6919aa82bc0f0c5c69c6de8d5c5931d0093f8d38a17ff207c1e6e394d3e99`
- Prior verdict: `SPEC COMPLIANCE FAIL` / `QUALITY CHANGES REQUESTED`
- Replacement inventory: 41 exact files
- Replacement inventory binding digest: `4811b1c97eb7d5850107d3c935382b648b8ba4bdd19de9702856ff3a1e60e3a8`
- Reaccepted at: `2026-08-23T11:56:52+05:30`

## Directed finding closure

### P08-COMP-001 — closed

The runner now hashes the checked-in canonical `BL-ENTRY` bytes and rejects a
changed, linked, noncanonical, or hash-drifted entry fixture. `BL-00` alone may
initialize a fresh root. Every later append re-reads the complete ordered
materialized predecessor chain, reconstructs each frozen positive record,
checks canonical bytes and state continuity, derives the exact prior hash, and
compares the caller history against those bytes. Direct `BL-20`, direct
`BL-01`, missing predecessor, forged prior hash, contradictory history, gap,
duplicate, and out-of-order attempts all fail before materialization.

The original hostile probes were rerun independently. Direct `BL-20` and
`BL-01` now return `ROOT_UNINITIALIZED`; the contradictory history returns
`DOSSIER_HISTORY_INVALID`; and forged/malformed prior hashes return
`DOSSIER_HASH_INVALID`. The all-port matrix materialized 105 primary positive
records whose terminal hash equals checked-in `BL-20` SHA-256
`15006e872adcfdd1c4c6e37018f5474e2d9247cdcb693c4786a0f42621a8ed60`.

### P08-COMP-002 — closed

Root initialization now requires a nonexistent target. A live unexported
capability binds the canonical marker bytes to the initialized root's resolved
path, device, inode, entry hash, and per-process token. Copied regular markers,
marker symlinks, pre-existing content, replacement roots, changed marker bytes,
and changed root identity fail closed. Every append checks the exact closed root
inventory before writing, uses exclusive creation, verifies the resulting real
file remains in-root, re-reads the bytes, and validates the full chain again.

Independent five-port probes rejected five copied-marker roots, five root swaps,
and five predecessor-byte tampering attempts. Sentinel content remained
unchanged and no rejected next-milestone file appeared.

### P08-COMP-003 — closed

`CHAPTER_CONTRACTS` now models legal state sets rather than a pipe-delimited
runtime state. `BL-17` accepts exact `REQUALIFIED` and `ROLLED-BACK` outcomes;
`BL-18` consumes the exact selected predecessor and permits both legal inputs to
reach `CONTROLLED`. The rollback records have branch-specific evidence for the
previous-good recovery identity, separation of repaired-candidate identity,
retained external authority, and no skipped requalification claim.

The independent matrix materialized 105 complete rollback-branch records across
all five ports. The deterministic rollback terminal hash is
`41ef6cf6352761f3c51a8ec5c6eb84f560d74741635a677a119c73ef3dcabf53`;
all five ports agreed byte-for-byte. Both primary and rollback branches converge
only after `CONTROLLED`, then produce `RETIRED` before `REVIEWED`.

### P08-COMP-004 — closed

Negative execution now validates the same materialized predecessor chain,
history, exact prior hash, and canonical incoming state as positive execution.
Each of the twenty-one frozen mutation diagnostics retains its named
disposition. Explicit reopen calls produce separate `REOPEN_*` diagnostics and
record changed evidence, invalidated evidence, source state, reopen trigger,
reopen target, input/prior hash, output hash, owner, authority ceiling,
limitation, and truth state. The port-result schema closes those fields.

The independent matrix validated 105 named negative results and twenty explicit
reopen results: four triggers through each of the five ports. The original
malformed-hash and contradictory-state probes now fail with exact named errors.

### P08-COMP-005 — closed

The companion suite now contains 33 tests. Fresh execution passed 33/33. New
tests cover state skips, forged lineage, contradictory history, predecessor
tampering, regular marker copying, root replacement, negative hash/state
validation, explicit reopen evidence, closed-schema outputs, and both rollback
transitions through all five ports.

Independent tests beyond the bundled suite exercised 105 primary positives,
105 named negatives, 105 rollback positives, 20 explicit reopens, 25 effect
denials, 25 path denials, five marker-forgery denials, five tamper denials, and
five root-swap denials. The focused Phase 08 validator set passed 44 relevant
top-level/subtests, including real five-port execution and the transitive effect
guard. A fresh production validator run reported zero `COMPANION_*` errors; its
remaining failures belong to incomplete manuscript/furniture/review integration
outside Task 05.

## Effect, path, determinism, and inventory audit

- The production import graph remains limited to Node crypto, filesystem, path,
  and URL primitives plus local modules. No network, shell, cloud SDK, model,
  environment secret, paid service, database, download, accelerator, or
  production-system call exists.
- All five ports denied each of network, shell, cloud, model, and secret modes:
  25/25 independent effect denials. All five ports denied repository, traversal,
  root/protected, pre-existing, and symlink targets: 25/25 path denials.
- The checked-in primary `BL-ENTRY` through `BL-20` files retain exact canonical
  bytes and the original uninterrupted SHA-256 chain. The replacement adds no
  companion file; inventory remains exactly 41.
- The five ports preserve identical enumerable decision/evidence records and
  differ only in non-privileged mechanical adapter identity.
- Positive, negative, explicit reopen, primary, and rollback results retain the
  synthetic-deterministic truth boundary and do not claim real model quality,
  hardware reproducibility, fleet SLOs, safety, legal/privacy approval,
  deployment readiness, production availability, or business effect.
- Companion whitespace, terminal LF, JSON parseability, non-symlink inventory,
  and no-out-of-root-write checks pass.

## Reacceptance decision

All five directed findings are closed on the replacement bytes. The historical
failure remains preserved in `task-05-companion.md`; this repair record binds
that exact failed review and the complete replacement companion inventory.
Task 05 is accepted for canonical integration, subject to the later whole-book
integration and hostile-package gates.

```json
{
  "schema": "mle-phase-08-review-repair/v1",
  "taskId": "TASK-05",
  "producerIdentity": "/root/mle_p8_companion",
  "reviewerIdentity": "/root/mle_p8_companion_review",
  "priorReviewPath": "project-control/roles/machine-learning-engineer/reviews/phase-08/task-05-companion.md",
  "priorReviewSha256": "40f6919aa82bc0f0c5c69c6de8d5c5931d0093f8d38a17ff207c1e6e394d3e99",
  "priorVerdict": "SPEC COMPLIANCE FAIL / QUALITY CHANGES REQUESTED",
  "reacceptedAt": "2026-08-23T11:56:52+05:30",
  "artifactBindings": [
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/README.md","sha256":"0c1e386566c06c6e27bd5e02961da6faa51407110a35462f8aafe9423cbcbc1f"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/contracts/dossier-record.schema.json","sha256":"ad38d69ec2967f236bf973172fa7ccebf87a602a4e87c41fff05d1e5ba9e4601"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/contracts/evidence-envelope.schema.json","sha256":"aa7aa86ae85f031edea7897b94a8d962a90594b5e34f97e0302ec01a3fb3b01f"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/contracts/port-result.schema.json","sha256":"bcd895d371cdf3ef73075812edc3c1e4e84932663db47976fc1565ab1916c838"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-00.json","sha256":"d362f770784ae16fb94bb14522bbe0163e1f3d8f5f645cbaf500ad87217c6d7c"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-01.json","sha256":"621cfe98286e805cf8523c739668e93e9f8d92104add916caa3e976ab680ccd0"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-02.json","sha256":"b591afccdab66159581571519f8d75476d263973f98f0ea3ecb53498b901d44f"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-03.json","sha256":"2c102c6a4c774db7fd168d785a5730619b927ffcb20e2f40ad6e70baa956b6ae"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-04.json","sha256":"70fbc2bcc47d7521d10d89eede497b719b026db55607054d74fb9820fd2af04f"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-05.json","sha256":"51ceedb372eba68c9ac0c1893df150e03a3c3317307054a8b2d060f44fb6a9bc"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-06.json","sha256":"e8116bff62ca7ef1aa00a5097a260b6a362586657efa43440310695c317ab051"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-07.json","sha256":"674536448cb3e32eb2bd747d6612e077b8de6930c6cb2a5693c88c2a55e99f5c"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-08.json","sha256":"8f6ba0dc4b80505ecb213014bb027f8c20e45737d08503c12589219c903b5324"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-09.json","sha256":"b5a89e2af76e5813a1b49e263d90f708276fc5fa5871119e391528187d5641c1"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-10.json","sha256":"c4e0231741e6b75a4a6b0e4b6930351e75459d677298f83a66ed19803da899f8"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-11.json","sha256":"e807e7d6a02a311cf3ce9a6a70f9c7ec9501120d68ab038731504f880d67ca98"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-12.json","sha256":"eb9645e16376a74960f12317888436f294ca832406fa76b302089b9a3bf213dc"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-13.json","sha256":"6a8e767373903db35f90f988313af87d00ddebad48651a83b48aa1f35a369f08"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-14.json","sha256":"70531907903f2a2b210e5f4640a675ec02798ef77fcfb805b7491a7e0f81f35d"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-15.json","sha256":"86f363f418cfd2434187fafa234902d331eb9fd07ad71d5e5567c237bf89f5ba"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-16.json","sha256":"b0f3e38b3db4030dc454de787cdbf8fe6890e36039a3ae50fe37d73cd782caf0"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-17.json","sha256":"e2a76fed05d7bdaef4fc3210d9f662fd4d49253ea3de8f6fbd564e08287ac652"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-18.json","sha256":"ac70c60ddee77d2b3b7ca2c7b3cb2d75998081f258dea505417179a32f7e20f0"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-19.json","sha256":"2b5a71599e51cb8bfdbf566304f6cff974bdd7df3ad1f0d1472475f912b2f208"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/expected/bl-20.json","sha256":"15006e872adcfdd1c4c6e37018f5474e2d9247cdcb693c4786a0f42621a8ed60"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/fixtures/bl-entry.json","sha256":"24b2ef5873262d45c5fbf5df16386dfc7df434fc56295a35b25d32fa2a32c8c9"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/fixtures/mutations.json","sha256":"9cc1e9acca3612f4568bfc03f58a5e9155e9df8d157096cf489558b86e3af736"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/lib/canonical-json.mjs","sha256":"04926f7a0757339c5266c3a4ff4efa091a86ce6055c0c76e6f5978c63e11fff4"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/lib/dossier.mjs","sha256":"7acc8ae1e7b66e5777c1e1623caba6950f1f6a91e28ba209d931eb7889126bd3"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/lib/evidence-envelope.mjs","sha256":"3451bd62271a9ed48c7cfbe90b08c0a8c34deebd2e6c460037fac4d3867e0fc4"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/lib/lifecycle.mjs","sha256":"8ec73808b043de8c24147164d28a30b977f6ad677a2d9db3b130ccfdcdaf377e"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/lib/ports.mjs","sha256":"923f3c1ad7f2dfab00fb72485b1fb89254153d944b955d53a7b129b4099feb3e"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/lib/run.mjs","sha256":"fc604676744418ec4dce0dcd24c9d5e12aaf92dd428bbc1eaa8cf8fff24c67a0"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/package.json","sha256":"ddcc8770105d6afee147475bce28ea0b8507e4587086c6985a41c04fb89ff621"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/tests/chapters-01-07.test.mjs","sha256":"283327da95ec35a7ddd96e0332d51d978531030a7ed22625dc3181d055290e06"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/tests/chapters-08-14.test.mjs","sha256":"4ee555d0c6592375e8bf90a407f1abbb52712f7272f12ba5446333f295e9e345"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/tests/chapters-15-21.test.mjs","sha256":"dc937498893bc4012317d1865a7948651b967391cc86f5f48f59433e1e3bef97"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/tests/core.test.mjs","sha256":"d2d1bd7bdb37aba506fae811738d59170ea426241c9ab488549586b94d64ccf7"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/tests/effects.test.mjs","sha256":"a50b3d356460a9f3bdd573d2664787cc5ac1312f233ffe4de8cc3add5d2fe6e5"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/tests/lifecycle.test.mjs","sha256":"e05c5af6ec4d3f0e618222eaffc97d19b80415b4d965554b6077a8be34d1ba35"},
    {"path":"project-control/roles/machine-learning-engineer/books/machine-learning-engineering/companion/tests/ports.test.mjs","sha256":"fad41f0f2fb49cb437bda986132272605135fec30cb2316c6fd2410fd192620f"}
  ],
  "specVerdict": "SPEC COMPLIANCE PASS",
  "qualityVerdict": "QUALITY APPROVED"
}
```

SPEC COMPLIANCE PASS
QUALITY APPROVED
