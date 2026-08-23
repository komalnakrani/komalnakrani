# Appendix D — Authority and boundary register

The MLE ceiling is simple: the MLE may construct, test, diagnose, package, and
route workload evidence; the MLE may not absorb another owner's decision. A
missing external approval remains missing even when every mechanical check
passes.

| Boundary | MLE owns | Adjacent owner retains | Required route |
| --- | --- | --- | --- |
| Purpose and priority | Translate approved purpose into a bounded technical contract | Product and domain purpose, priority, and consequences | `HOLD` or `NO-ML` when purpose or owner is absent |
| Source truth, access, and retention | Workload-facing data contracts and conformance tests | Data owner, privacy, legal, and domain truth | Record exception, owner, permitted use, and expiry |
| Label validity and population adequacy | Label pipeline tests, split design, and diagnostics | Domain and independent evaluation judgment | Route ambiguity and consequential gaps; do not self-certify |
| Scientific novelty | Controlled execution and comparison integrity | Applied Science or research owner | Attribute scientific claim and preserve contrary evidence |
| Qualification | Assemble technical evidence and issue bounded workload disposition | Independent evaluation and applicable formal authorities | Separate technical disposition from authorization |
| Consumers and product effects | Interface/fixture compatibility and fallback evidence | Consumer/application and product owners | Obtain named acceptance for migration and coexistence |
| Shared runtime and fleet | Measure workload demand, latency, errors, and degraded mode | Platform/SRE capacity, SLOs, and incident command | Route fleet action; retain workload containment evidence |
| Security and supply chain | Implement/test workload controls, provenance, integrity, and access | Security requirements, exceptions, and risk acceptance | Bind approval or unresolved exception; never fabricate it |
| Safety, privacy, governance, legal | Supply relevant technical evidence | Named specialist and formal decision maker | Preserve decision identity, version, scope, and expiry |
| Retirement and retention | Inventory known paths and verify bounded non-serving evidence | Product/domain retirement intent; platform/security shutdown; legal retention | Keep unreachable/unknown paths on `HOLD` with recheck |
| Shared standard adoption | Propose evidence-backed reusable practice | Organization/platform/policy owner | Route systemic record; proposal is not adoption |

## Authorization tests

Before every `PASS`, ask: what action becomes possible, who bears its
consequence, and whose recorded decision is required? If the named signer is the
same actor who assembled the evidence where independent review is required,
the gate fails. If an automated workflow writes an approval based solely on a
test result, the gate fails. If a provider's assurance is substituted for the
workload's evidence or local authority, the gate fails.

An escalation record contains the observable finding, affected workload and
state, current containment, unresolved decision, actual owner, evidence already
available, evidence requested, and next review. It avoids vague “stakeholder”
labels. A declined request, expired exception, or absent response remains a
durable fact and normally produces `HOLD`, `REJECT`, or `REOPEN`.

## Adjacent-curriculum boundary

This book is not a substitute for generalized data engineering, platform
engineering, fleet SRE, cybersecurity, safety engineering, privacy, governance,
legal practice, product management, domain training, novel-model research, or
LLM specialization. It shows how the workload evidence interfaces with those
disciplines. Readers should use the relevant organizational standard and owner
for depth. See [Appendix B](appendix-b.md) for disposition vocabulary and
[Part 7](part-07.md) for the final control and systemic-routing gate.
