# Chapter 06 Research Pack — Bind Identity, Delegation, and Consent

## Frozen job and evidence question

Propagate user, service, agent and task identity without copying broad
credentials into prompts or run state. Decide which principal can authorize
each effect, for what scope and duration. Output is `AR-05`.

## Claims to carry

- `AGE-BCLM-011`: audience restriction, least privilege, PKCE/current OAuth
  protection and no token passthrough are source-supported controls.
- `AGE-BCLM-012`: approval binds a verified principal to an exact proposed
  effect and window; a session identifier is not authorization.

## Source findings

- `AGE-BSRC-006`, `AGE-BSRC-007`, `AGE-BSRC-008` and `AGE-BSRC-044` establish
  current OAuth/resource metadata and audience-bound token requirements. Use
  normative MUST/SHOULD language only as written in those editions.
- `AGE-BSRC-009` requires sensitive credentials to stay out of form-mode
  elicitation and warns against session-ID-only identity/state binding.
- `AGE-BSRC-024` prohibits token passthrough in MCP and emphasizes scopes,
  audience and audit.
- `AGE-BSRC-017` demonstrates serialized approval/resume mechanics.
- `AGE-BSRC-038` is useful problem framing but is explicitly a NIST concept
  paper, not final guidance.

## Identity/authority packet

Model these separately: human principal; service principal; agent instance;
task/run identity; tool/resource; delegated scope; token audience; approval
record; effect record; credential reference; revocation event. Approval includes
proposal hash, run/task, consequence, approver, authority basis, evidence view,
issued/expiry times and one-use disposition. Credentials are resolved at the
tool boundary and never exposed as model context.

## FieldOps Relay tests

Approve one synthetic slot, then change slot/part, replay in another run, resume
after expiry, revoke before execution, and attempt cross-resource token use.
Every case must fail closed and produce an audit reason. Simulated identity is
pedagogical; it cannot imply regulated or enterprise IAM assurance.

## Phase 07 blueprint seed

Sequence: four identities -> delegation envelope -> OAuth resource boundary ->
approval binding -> expiry/revocation -> attack lab. Required visual `F06.1`;
`F06.2` useful if approval replay cannot be made obvious in the exact record
table. Satellite source `AGE-CASE-009`; product confirmation `AGE-CASE-004` is a
bounded contrast only.

## Gaps to keep visible

There is no final general AI-agent identity standard in these sources. OAuth
does not encode business authority. Enterprise identity, privacy, legal consent
and regulated authorization require their named specialists.
