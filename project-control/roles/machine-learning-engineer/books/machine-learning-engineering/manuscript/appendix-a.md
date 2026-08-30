# Appendix A — Dossier record schemas

This appendix gives an edition-neutral planning schema for a Benchline dossier.
It is deliberately richer than the closed JSON record used by the synthetic
companion. The planning schema helps a reader name evidence; the executable
schema tests canonical bytes, ordering, state, and bounded authority. Neither
is an organizational approval system. Every chapter adds one conceptual
`BL-00` through `BL-20` record, and the companion materializes the corresponding
closed fixture record without rewriting its predecessors.

## Conceptual reader schema

| Field | Required meaning |
| --- | --- |
| `milestoneId` | Exact `BL-00` through `BL-20` identifier |
| `artifactId` / `artifactVersion` | Stable record identity and explicit version |
| `incomingState` / `outgoingState` | Legal lifecycle transition; same-state evidence additions remain explicit |
| `disposition` | `PASS`, `HOLD`, `REJECT`, or `REOPEN` inside the named gate |
| `priorHash` | SHA-256 of the exact canonical predecessor bytes |
| `inputArtifactIds` / `inputHashes` | Resolvable prerequisites, including fan-in records where required |
| `decisionQuestion` | The bounded proposition evaluated by this record |
| `evidence` | Named observations, checks, and artifacts; never an unlabeled score dump |
| `limitations` | What the evidence does not establish |
| `authorityOwner` | Owner of the decision beyond the MLE ceiling |
| `mleCeiling` | Explicit action the MLE cannot self-authorize |
| `nextEvidence` | Artifact required by the next legal gate |

## Exact mapping to the executable fixture record

The companion's closed `dossier-record.schema.json` accepts only the fields in
the right column. A conceptual field that has no single executable equivalent
must remain reader reasoning; it must not be presented as a validated JSON
property.

| Conceptual reader field | Executable fixture field or exact limit |
| --- | --- |
| `milestoneId` | `milestoneId`; the executable record also binds `chapterId` and `labId` |
| `artifactId` | No direct field; resolve the synthetic identity from `fixtureId`, `milestoneId`, and `outputHash` |
| `artifactVersion` | `artifactVersion` |
| `incomingState` / `outgoingState` | `incomingState` / `outgoingState` |
| `disposition` | `disposition` |
| `priorHash` | `priorHash`; `inputHash` binds the exact immediate executable input and `outputHash` binds the canonical result |
| `inputArtifactIds` / `inputHashes` | No collection fields; the fixture record has singular `fixtureId`, `fixtureHash`, `inputHash`, and `priorHash` |
| `decisionQuestion` | `decision` |
| `evidence` | `evidence` |
| `limitations` | Singular executable field `limitation` |
| `authorityOwner` | `owner`; routing detail is `authorityRoute` |
| `mleCeiling` | `authorityCeiling` |
| `nextEvidence` | `nextEvidence` |
| no conceptual counterpart | `schema`, `truthState`, `fixedClock`, and `fixedSeed` bind the synthetic contract |

Canonical JSON uses UTF-8, recursively lexicographic object-key order,
preserved array order, JSON scalar spelling, no insignificant whitespace, and
exactly one terminal line feed. Hash the exact bytes. A valid-looking object
with a different byte encoding is not the same dossier artifact.

## Record-family progression

- `BL-00`–`BL-02`: orientation, task/authority contract, incumbent and
  consequence record.
- `BL-03`–`BL-05`: dataset/label, feature/feedback lineage, split and
  train-serve conformance.
- `BL-06`–`BL-08`: controlled comparison, bounded run identity, candidate
  nomination.
- `BL-09`–`BL-11`: population/segment, uncertainty/failure, qualification
  disposition.
- `BL-12`–`BL-14`: package/evidence, consumers/compatibility, integrity/lineage/
  recovery identity.
- `BL-15`–`BL-17`: serving envelope, observation, containment/rollback/
  requalification.
- `BL-18`–`BL-20`: controls/formal decisions, retirement/non-serving evidence,
  hostile review and reusable-standard proposal.

`BL-ENTRY` is a synthetic starting fixture. It is not a reader-produced
qualification and cannot be adopted as proof for a real workload.

## Validation and command boundary

From the companion directory, `npm test` runs the Node test suite for
canonical bytes, lifecycle, ports, chapters, and effect denial. This is a
provider-neutral mechanical check. Programmatic `runPort(port, options)` begins
at `BL-00` only in a fresh caller-supplied real directory outside the
repository, then appends ordered records in that same process. Traversal,
protected absolute paths, repository targets, pre-existing directories,
symlinks, unrelated files, replacement races, and out-of-root writes fail
closed. No command contacts a cloud, model, database, production system, or
secret store.

A test result proves only that the fixed fixture satisfied the executable
fields and mechanics just mapped.
It cannot supply complete evidence, choose a disposition for a real workload,
or act for a product, domain, evaluation, platform, SRE, security, safety,
privacy, governance, legal, or risk owner.
