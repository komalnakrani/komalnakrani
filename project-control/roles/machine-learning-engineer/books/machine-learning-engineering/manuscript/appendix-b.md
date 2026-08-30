# Appendix B — Evidence and disposition vocabulary

This vocabulary keeps state, evidence maturity, and disposition separate. A
record may add evidence while preserving a lifecycle state. A command may pass
while the workload remains on `HOLD`. A technical `PASS` never implies every
external approval.

## Evidence maturity

| Term | Supportable statement | Unsupported promotion |
| --- | --- | --- |
| Model file | Exact model bytes can be identified | The workload is reconstructible or production-ready |
| Tracked run | Recorded run context and outputs can be resolved within stated bounds | Every source of nondeterminism is controlled |
| Candidate | A retained incumbent and declared comparison support nomination | The candidate is independently qualified |
| Technically qualified | Named population, segment, consequence, uncertainty/failure, limitation, and authority evidence supports the technical disposition | Product, legal, safety, security, or release approval exists |
| Releasable | Executable, interface, consumers, compatibility, lineage, integrity, access, approvals, and recovery identity are bound | Deployment occurred or is safe |
| Operable | A representative serving envelope and abort/degraded-mode rules were measured | Fleet SLOs are guaranteed |
| Observed | Signals, proxies, delayed labels, drift, owners, and routes are recorded | Telemetry equals ground truth |
| Retired | Known serving paths have owned actions and bounded negative evidence | Every unknown or offline path is absent forever |
| Reviewed | The retired dossier survived the defined hostile review | The reusable standard was adopted organization-wide |

## Dispositions

`PASS` says the named gate is supported within its stated contract. `HOLD`
keeps evidence and candidate identity while a named gap or owner response is
pending. `REJECT` records that the current proposition is unsupported and
preserves the failure. `REOPEN` says a material premise changed and routes work
to an earlier state with a new record.

Never rewrite `HOLD` or `REJECT` into `PASS`. Repair creates replacement
evidence and requires the gate's independent review. The forbidden transitions
`HOLD → RELEASABLE` and `REJECT → RELEASABLE` make that rule executable.

## Lifecycle rail

The seventeen states are `UNORIENTED`, `ORIENTED`, `CONTRACTED`, `ADMISSIBLE`,
`RECONSTRUCTIBLE`, `CANDIDATE`, `TECHNICALLY-QUALIFIED`, `HOLD`, `REJECT`,
`RELEASABLE`, `OPERABLE`, `OBSERVED`, `REQUALIFIED`, `ROLLED-BACK`,
`CONTROLLED`, `RETIRED`, and `REVIEWED`. The lifecycle declares nineteen legal
state transitions. The synthetic companion persists the primary and rollback
milestone scenarios; it does not claim to materialize every declared
`HOLD`/`REJECT` repair transition. Four same-state records—`CONTRACTED →
CONTRACTED`, `ADMISSIBLE → ADMISSIBLE`, `CANDIDATE → CANDIDATE`, and
`TECHNICALLY-QUALIFIED → TECHNICALLY-QUALIFIED`—are dossier enrichments, not
lifecycle promotions. This classification preserves evidence without claiming
that cardinality alone proves transition coverage.

Four reopen triggers are durable:

- purpose or intended-use change routes to `CONTRACTED`;
- data, label, feature, or population change routes to `ADMISSIBLE`;
- runtime, dependency, interface, or serving-envelope change routes to
  `RECONSTRUCTIBLE`;
- authority, constraint, or permitted-use change routes to `CONTRACTED`.

A reopen is valid only when its source state is strictly later than the target,
so the invalidated evidence could already exist. A reopen attempted at
`BL-00`, from the target itself, or from an earlier state fails rather than
advancing unevidenced state.

## Limitation language

Use direct bounded language: “within the fixed fixture,” “for the named
population,” “under the recorded runtime,” “reported by the source as of the
stated date,” or “inventory and observation-time evidence for known paths.” Do
not replace those limits with “proven safe,” “fully reproducible,” “fair,”
“production-ready,” “compliant,” “zero risk,” or “completely deleted” unless a
named authority and sufficient independent evidence actually support that exact
statement.

See [Appendix A](appendix-a.md) for record fields,
[Appendix D](appendix-d.md) for authority routing, and
[Appendix E](appendix-e.md) for case-specific truth limits.
