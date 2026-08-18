# MLE-CH-15 — Preserve Integrity, Lineage, and Recovery Identity

- Integration contract: `3b0f07b8048d3a5cc5b3ca7d4e6b69e62e2c0f2e2b60a196171d25469c155433`
- Architecture: version `1.0.0`; Markdown SHA-256 `5f41bfc624f7085b8e3b2a12d6c2c3d52d6c21659eb5140d94cfa29b0edce630`; JSON SHA-256 `bb2b6fe1137b6b56ff4729d0131c1b9496804bcd3a37e07a92361f4af4da972f`
- Research verification date: `2026-08-18`
- Decision job: Verify end-to-end lineage, inventory, integrity, access evidence, promotion packet, and previous-good recovery identity.

## Canonical book claims

1. `MLE-BCLM-043` (`technical-doctrine`, high confidence, durable): A releasable ML workload package needs one inspectable integrity chain that binds artifact digests, source and build provenance, dependency inventory, signer or builder expectations, authorized access, and an exact previous-good recovery identity; a model file or registry pointer alone is insufficient.
2. `MLE-BCLM-044` (`technical-method`, high confidence, durable): Artifact verification should fail closed when the subject digest, provenance signature, builder identity, build type, external parameters, or locally defined expectations do not match; provenance that merely exists but is unsigned or unchecked provides weaker assurance and must be labeled as such.
3. `MLE-BCLM-045` (`bounded-case-inference`, high confidence, contextual): A dependency name is not a dependency identity: package source, resolver/index precedence, version, digest, and trusted origin must be recorded so a same-name package from an unintended index cannot silently enter a release candidate.

## Source-to-claim map

| Claim | Canonical sources | Evidence role | Ceiling |
|---|---|---|---|
| `MLE-BCLM-043` | `MLE-BSRC-030`, `MLE-BSRC-031`, `MLE-BSRC-036` | Versioned secure-development, control, provenance, attestation, and supply-chain doctrine | The MLE supplies and tests workload evidence; these sources do not define local trust roots, access policy, exceptions, model quality, or release authority. |
| `MLE-BCLM-044` | `MLE-BSRC-035`, `MLE-BSRC-036` | SLSA 1.2 verification sequence and provenance semantics | Successful verification establishes bounded supply-chain properties only. It does not qualify the workload. |
| `MLE-BCLM-045` | `MLE-BSRC-042` | First-party reported facts and bounded inference from the PyTorch nightly incident | No prevalence claim, universal resolver claim, affected-population count, loss estimate, or complete-cleanup claim is allowed. |

## Architecture trace

- Architecture claims: `MLE-CLM-012`, `MLE-CLM-014`, `MLE-CLM-017`, `MLE-CLM-018`, `MLE-CLM-020`
- Boundaries: `BND-09`, `BND-10`, `BND-11`, `BND-14`
- Scenarios: `SCN-10`
- Production domain: `PD-09`
- Ports: `PORT-MANAGED`, `PORT-CLASSICAL`, `PORT-DEEP`, `PORT-EDGE`, `PORT-SHARED`
- Cases: `CASE-01`, `CASE-04`, `CASE-05`, `CASE-11`
- Milestone: `BL-14` — Integrity and recovery packet
- Dossier transition: `TECHNICALLY-QUALIFIED → RELEASABLE`
- Source-research needs: `Artifact signing`; `Supply-chain integrity`; `Model inventory`; `Access control`
- Exact Phase 06 handoff: `Research integrity, lineage, inventory, access, and recovery controls.`

## Case truth and use

- Architecture carriers: `CASE-01` (FICTIONAL SYNTHETIC CAPSTONE, edge), `CASE-04` (CONSTRUCTED SATELLITE, deep), and `CASE-05` (CONSTRUCTED SATELLITE, shared). Their fixtures and outcomes remain synthetic; they test transfer and never support real production claims.
- Claim-linked public case: `CASE-11` (PUBLIC REPORTED CASE, PyTorch nightly dependency-chain compromise, `PORT-DEEP`). `MLE-BSRC-042` supports reported facts, attributed outcomes, and limitations; `MLE-BSRC-030` and `MLE-BSRC-036` are transfer context only.
- Allowed use: test origin, version, digest, index precedence, provenance, affected scope, containment, residual-path evidence, and authority routing.
- Prohibited use: imply that SLSA or SSDF was deployed by PyTorch, that all affected environments were cleaned, that stable PyTorch was affected, or that the event proves model-performance failure.

## Durable doctrine, volatility, and currentness

- Durable doctrine: Integrity, lineage, inventory, access, and recovery identity are continuous release controls.
- Volatile examples: signing systems, SBOM formats, registry products, package-manager commands, and resolver/index mechanics.
- Dated current examples: SLSA Specification and verification guidance `1.2` were verified `2026-08-18`; NIST SSDF `1.1` and SP 800-53 Rev. 5 release `5.2.0` were verified `2026-08-18`; the PyTorch advisory published `2022-12-31`, updated `2024-11-14`, was verified `2026-08-18`.
- Recheck triggers: check for a superseding SLSA version, SSDF revision, SP 800-53 release, or amended PyTorch scope/indicators at every blueprint/manuscript/publication freeze. Recheck package-source commands whenever an implementation example changes.
- Conflict resolution: SLSA provenance can verify a supply-chain statement while remaining insufficient for access authorization, model qualification, previous-good selection, or formal release. The pack preserves both truths.

## Authority ceiling

- Exact architecture MLE ceiling: The MLE implements/tests workload controls and supplies evidence without self-approving security exceptions.
- Security owns control requirements, trust roots, and exceptions; platform owners own shared promotion mechanisms; incident owners command response; consumers verify their environments.
- The MLE implements and tests workload controls, constructs the integrity packet, and supplies evidence without self-approving security exceptions or release.

## Five-port transfer

| Port | Required identity and evidence | Mechanism boundary |
|---|---|---|
| `PORT-MANAGED` | Provider artifact/version, export identity, dependency inventory, access grant, previous-good target | Provider registry and signature APIs are replaceable. |
| `PORT-CLASSICAL` | Serialized estimator, preprocessing/code identity, dependency origin/digest, authorized consumers, recovery target | Library and package formats are replaceable. |
| `PORT-DEEP` | Checkpoint, architecture/preprocessor, accelerator/runtime dependencies, provenance, recovery target | Framework, index, and checkpoint formats are replaceable. |
| `PORT-EDGE` | Device package, firmware/runtime, signing chain, deployment inventory, disconnected recovery path | Fleet and device update mechanisms are replaceable. |
| `PORT-SHARED` | Tenant artifact, shared-service route, image/package provenance, access scope, previous-good tenant state | Platform promotion and registry mechanics remain platform-owned. |

## Misuse prohibitions

- Do not equate a digest, signature, registry pointer, SBOM, or SLSA level with workload qualification or release approval.
- Do not invent organization trust roots, access policy, security exceptions, or a global cleanup result.
- Do not privilege pip/PyPI or deep learning; the invariant is evidence identity across all five ports.

## Planned evidence artifacts

- Five-port integrity packet with expected and observed digest, provenance, builder, dependency, authorization, inventory, and previous-good fields.
- Fail-closed mutation set for missing digest, unsigned provenance, unexpected builder/build type, source-precedence mismatch, unauthorized promotion, and absent recovery identity.
- Verification table recording failure reason, evidence owner, formal authority, containment route, and recovery target.
- `CASE-11` tamper lab with reported-fact, attributed-outcome, allowed-inference, and limitation lanes visibly separated.

## Exact Phase 07 handoff

- `MLE-BCLM-043`: `Blueprint a five-port integrity packet and mutations for missing digest, provenance, dependency, authorization, and previous-good identity.`
- `MLE-BCLM-044`: `Require an executable verification table with expected versus observed fields, failure reason, owner, and recovery route.`
- `MLE-BCLM-045`: `Use the public case as a tamper lab with an explicit factual boundary, then require source, version, digest, and index evidence.`

## Evidence-gap disposition

Evidence-gap disposition: none release-blocking

Rationale: The three claims have primary, official, or first-party support with explicit authority and case ceilings. Current tools and incident mechanics remain dated, replaceable examples.

Affected claim/source IDs: `MLE-BCLM-043`, `MLE-BCLM-044`, `MLE-BCLM-045`; `MLE-BSRC-030`, `MLE-BSRC-031`, `MLE-BSRC-035`, `MLE-BSRC-036`, `MLE-BSRC-042`.
