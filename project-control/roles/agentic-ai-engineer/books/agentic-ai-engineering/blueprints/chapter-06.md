# Chapter 06 Blueprint — Bind Identity, Delegation, and Consent

## Identity and production target

- Part II; primary `AGE-K05`, secondary `AGE-K01`, `AGE-K03`, `AGE-K09`, `AGE-K11`
- Dossier: create `AR-05 v1.0.0`
- Purpose/decision: bind user, service, agent, task, approval, and resource so
  each effect has the correct principal, scope, audience, duration, and consent.
- Expected depth: advanced security-aware implementation; 9,000–11,000 words

## Objectives, prerequisites, and bridge

Reader can separate identities, design least-privilege audience-bound access,
keep credentials outside model context, bind/revoke/expire approvals, and audit
delegation. Prerequisites: `AR-02`/`04`, OAuth concepts, cryptographic hashes,
secrets handling.

1. Chapter 05 defined capabilities but not who may invoke them.
2. A broad user token would collapse delegation into credential sharing.
3. This chapter makes principal, agent, task, resource, and approval independently visible.
4. Tools enforce identity and scope even if the model asks otherwise.
5. Chapter 07 receives `AR-05` to apply permissions and ownership to every state object.

## Scope, sequence, and evidence

Own application identity propagation, delegated scope, approval binding,
revocation, expiry, credential references, audit tests. Enterprise IAM,
cryptographic architecture, privacy/legal consent, and formal authorization
remain specialist-owned.

| Section | Purpose | Evidence/artifact | Words |
| --- | --- | --- | ---: |
| Identity layers | Human/service/agent/task/resource separation | `AGE-BCLM-012`; `AGE-BSRC-038`; identity map | 1,200–1,500 |
| OAuth resource boundary | Audience, scope, PKCE, metadata, no passthrough | `AGE-BCLM-011`; `AGE-BSRC-006`, `007`, `008`, `044` | 1,700–2,000 |
| Delegation envelope | Task/scope/duration/consequence and credential resolution | both claims; `AGE-BSRC-024` | 1,300–1,600 |
| Approval binding | Exact proposal hash, approver, evidence, expiry, one-use | `AGE-BCLM-012`; `AGE-BSRC-009`, `017`; `AGE-CASE-004`, `009` | 1,500–1,800 |
| Revocation/resume | Deny stale token, approval, run, or principal | both claims | 1,200–1,400 |
| FieldOps attack lab | Cross-audience, replay, mutation, expiry | `AGE-CASE-012`; issue `AR-05` | 1,300–1,600 |

## Skill procedure and current examples

Map principals/resources -> issue task delegation -> request minimum audience/
scope -> resolve credentials at tool boundary -> hash exact proposal -> verify
approver authority -> record expiry/one-use -> revalidate before execution ->
honor revocation -> audit final disposition. Current examples: MCP 2025-11-25
Authorization/Elicitation plus RFC 9700/8707/9728; NIST agent identity is a
concept paper only. Durable: least privilege, audience binding, no session-as-
auth. Volatile: MCP authorization editions and identity standards.

Failure injection: changed slot/part, another run, expired approval, revoked token,
cross-resource audience, credential in prompt, session hijack. Common mistakes:
token equals authority, user session equals identity, approval category instead
of exact effect, broad reusable credentials. Trade-off: narrow/short delegation
raises authorization round trips but limits blast radius.

## Exercise, assessment, and figures

- Exercise: identity/delegation packet and six negative tests. Rubric: identity
  separation 5, scope/audience 5, approval 6, revocation/audit 4.
- Required `F06.1`: narrowing gates; labels `User`, `Task`, `Agent`, `Tool`,
  `Effect`. Optional `F06.2`: bound approval token; labels `Proposal`, `Approval`,
  `Expiry`. Alt description states altered parcel no longer matches. Raster via
  later ImageGen only.


Figure evidence role: each image is a conceptual or causal scaffold, never technical or empirical proof. Accessibility: caption, alt text, and long description must carry every essential relationship without relying on color.

## Phase 08 handoff

Use claims `011–012`, all listed RFC/MCP sources, cases `004`, `009`, `012`.
Preserve normative strength accurately and never describe the NIST concept paper
as standard. End with `AR-05` permission fields for Chapter 07. Re-verify MCP
stable edition and RFC errata/currentness.

## Exact evidence manifest

- Claims: `AGE-BCLM-011`, `AGE-BCLM-012`
- Sources: `AGE-BSRC-006`, `AGE-BSRC-007`, `AGE-BSRC-008`, `AGE-BSRC-009`,
  `AGE-BSRC-017`, `AGE-BSRC-024`, `AGE-BSRC-038`, `AGE-BSRC-044`
- Cases: `AGE-CASE-004`, `AGE-CASE-009`, `AGE-CASE-012`
