# Appendix A — Dossier record schemas

This appendix is the selectable reference for the Benchline dossier record
family. It describes evidence shape, not an organizational approval system.
Every chapter appends one new record, `BL-00` through `BL-20`; existing records
remain immutable. The companion demonstrates this contract on synthetic fixed
fixtures only.

## Common evidence envelope

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

From the private companion directory, `npm test` runs the Node test suite for
canonical bytes, lifecycle, ports, chapters, and effect denial. This is a
provider-neutral mechanical check. Programmatic `runPort(port, options)` begins
at `BL-00` only in a fresh caller-supplied real directory outside the
repository, then appends ordered records in that same process. Traversal,
protected absolute paths, repository targets, pre-existing directories,
symlinks, unrelated files, replacement races, and out-of-root writes fail
closed. No command contacts a cloud, model, database, production system, or
secret store.

A test result proves only that the fixed fixture satisfied the coded contract.
It cannot supply complete evidence, choose a disposition for a real workload,
or act for a product, domain, evaluation, platform, SRE, security, safety,
privacy, governance, legal, or risk owner.
