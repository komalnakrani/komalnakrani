# Appendix A - Deployment Dossier Templates

Each template states purpose, inputs, completion, and structure. Copy and version it; do not treat an empty template as evidence.

Use this common header for every artifact: ID/version/status; purpose; scope/cohort; owner/authority; inputs/provenance; facts/unknowns/assumptions; decisions; evidence/limitations; open gaps; next trigger; linked source/build/issue. The short examples below are fictional and incomplete by design; copy the structure and replace them with governed engagement evidence.

## OA-01 Role and discovery

- **Purpose:** establish the role boundary, legitimate access, stakeholders, questions, and evidence confidence before delivery commitments harden.
- **Inputs:** initial request, responsibility charter, known authority/confidentiality/data constraints, stakeholder hypotheses.
- **Complete when:** the next discovery decision can proceed with purpose-limited access, named owners, escalation, and visible gaps.
- **Structure:** objective/outcome hypothesis; FDE core/shared/supporting/out-of-scope decisions; stakeholder map; discovery questions/method; access-data record; evidence log/confidence; assumptions; stop/escalation; exit.
- **Orchid example:** investigate evidence-supported service resolution for one pump family and region; safety approval, security/privacy decisions, commercial promises, and roadmap priority remain designated-owner work; production data access is not approved.

## OA-02 Workflow and problem

- **Purpose:** model the actual actors, states, decisions, data, tools, handoffs, exceptions, incentives, waiting, and failure cost.
- **Inputs:** approved observation/interviews, records/artifacts, technical reproduction, operating evidence, and `OA-01` boundaries.
- **Complete when:** representative users/owners validate the normal and consequential exceptional paths and the problem statement can change scope.
- **Structure:** service journey; swimlane/state/intent model; decision-evidence table; system/data inventory; exception topology; observed/reported/inferred/unknown labels; confidence/gaps; validation record; revised problem.
- **Orchid example:** equipment ID may be ambiguous, evidence provenance affects trust, inventory completion can be unknown after timeout, and qualified approval is a separate decision.

## OA-03 Outcome contract

- **Purpose:** define outcome, guardrails, adoption, baseline, attribution, rights, non-goals, and exit before the implementation becomes the success definition.
- **Inputs:** validated workflow/problem, evidence definitions, owners, baseline feasibility, and decision context.
- **Complete when:** every measure has a population/formula/source/segment/window/owner and every evidence state changes a named decision.
- **Structure:** metric tree; metric specifications; baseline/confounders; segments; gaming tests; adoption diagnosis; attribution level; guardrail ladder; assumptions/constraints; decision rights; non-goals/rejection; entrance/exit/stop.
- **Orchid example:** reduce evidence-search burden within safety/data/latency/cost guardrails for the bounded cohort; a favorable aggregate cannot erase a low-connectivity or critical-equipment failure.

## OA-04 Scope and delivery

- **Purpose:** select the least exposed representative path that produces decisive evidence.
- **Inputs:** `OA-03`, dependencies, authority, uncertainty, reversible/irreversible state, delivery horizon.
- **Complete when:** the slice crosses the consequential workflow, dependencies/experiments are ownered, milestones are reversible where possible, and defer/reject/stop are explicit.
- **Structure:** scope cone; must-prove/must-build/defer/reject; dependency network; uncertainty experiments; option comparison; estimates/ranges; risk/debt; milestones; change budget/control; stop/exit.
- **Orchid example:** bounded evidence-assisted review for one pump family/region; automatic ordering rejected, voice deferred, unknown inventory completion proven through controlled tests before external writes.

## OA-05 Design dossier

- **Purpose:** make structural, runtime, data, trust, failure, responsibility, interface, environment, AI, and control decisions reviewable.
- **Inputs:** approved scope, workflow contracts, customer environment constraints, threat/risk and specialist evidence.
- **Complete when:** every consequential relationship has semantics, owner, failure state, evidence, authority, and review trigger.
- **Structure:** context/container/boundary diagrams; responsibility/decision table; interface catalog; semantic data/time/intent/reconciliation; topology/environment matrix; identity/network/secrets/config/isolation/capacity; AI decision/eval/control/fallback; threat/control/evidence/approval.
- **Orchid example:** confirmed equipment gates evidence access; inventory intent reconciles unknown completion; model suggestion remains separate from policy, authorization, and qualified approval; region/tenant boundaries apply per request.

## OA-06 Vertical slice

- **Purpose:** implement one small path that is complete across consequential boundaries and failure behavior.
- **Inputs:** `OA-04`/`OA-05`, synthetic fixtures, versioned contracts, environment/config record, debt authority.
- **Complete when:** a second reviewer can run, trace, fail, and explain the path from a clean checkout without secrets, paid services, customer data, or hidden author steps.
- **Structure:** user intent and coverage; repository/owner/test/config/signal/runbook map; runnable command; states/failures; contracts/adapters; config/feature controls; audit/telemetry; review record; doubles/non-proof; debt owner/exit.
- **Orchid example:** synthetic ticket to confirmed equipment, approved evidence, inventory state, bounded suggestion, deterministic policy, qualified review state, minimized audit/metric; ambiguous equipment and unknown completion remain blocked/reconcile.

## OA-07 Verification

- **Purpose:** connect every material workflow risk and release claim to the cheapest credible evidence and honest disposition.
- **Inputs:** runnable slice, contracts/error taxonomy, outcome/guardrails, threats/controls, representative evidence plan.
- **Complete when:** every risk has criterion/method/data/version/segment/observation/limitation/owner/disposition and critical failures cannot hide in an aggregate.
- **Structure:** risk/requirement/control; criterion; method/evidence type; data/provenance/version/split/leakage; segment; expected/observed; uncertainty/limitation; owner; pass/fail/inconclusive/not-run/waiver; release effect.
- **Orchid example:** contract tests cover equipment binding and intent; critical-segment eval blocks a prohibited suggestion despite an aggregate pass; UAT observes a qualified technician using ambiguity, evidence, fallback, reconciliation, and support paths.

## OA-08 Operations, release, and recovery

- **Purpose:** turn release claims into operable signals, versioned exposure, and demonstrated recovery.
- **Inputs:** `OA-07` results/limitations, target promises/cohorts, release bundle, migration/data state, ownership/access.
- **Complete when:** operators can detect a failed promise, inspect next evidence, act through a tested runbook, identify the exact release, and recover representative state.
- **Structure:** promise/failure/signal/segment/objective/action; dashboards/alerts/runbooks/blind spots; support/capacity/cost; artifact/config/schema/migration/model/policy/evidence/cohort identity; feature controls; compatibility; rollback/roll-forward/isolate/restore/stop; restore/break-glass; rehearsal record.
- **Orchid example:** low-connectivity cohort remains visible; partial schema migration is labeled divergent and rolled forward; local 42 ms rehearsal is explicitly not a production RTO claim.

## OA-09 Readiness

- **Purpose:** select go, conditional go, reduced scope, delay, or stop for an exact cohort under current evidence and authority.
- **Inputs:** `OA-03` through `OA-08`, user/operator/support preparation, open risk/exception records.
- **Complete when:** every criterion is met/gap/exception/reduced/block and the decision names facts/unknowns, options, authority, cohort/window, triggers, communications, and recovery.
- **Structure:** criterion/evidence/status table; options/tradeoffs; recommendation; authority/signature; cohort/pattern/ramp; observation/critical cases; absolute/comparative gates; command/support/comms; widen/hold/stop/recover; conditions/expiry/review.
- **Orchid example:** unexecuted recovery access blocks wider/safety-relevant exposure; only the bounded internal non-safety cohort may proceed under its own evidence and authority.

## OA-10 Stabilization and ownership

- **Purpose:** preserve truthful incident learning, deliver durable correction, diagnose adoption, and demonstrate customer ownership/access exit.
- **Inputs:** rollout/command plan, signals/recovery, current limitations, user/operator/support roles, access inventory.
- **Complete when:** stabilization criteria pass and customer users/operators demonstrate the whole task plus ten ownership areas without hidden FDE dependency.
- **Structure:** command/impact/timeline/decision/update; evidence/containment/restoration/correction/verification/residual risk; adoption-friction hypotheses/tests; task/accessibility/enablement evidence; knowledge/access/telemetry/runbook/release/recovery/support/decisions/open-risk/change acceptance; access revocation; exception/acceptance.
- **Orchid example:** retry amplification is corrected and monitored; technicians inspect evidence; customer operators diagnose, hold, release, recover, support, and decide; privileged FDE access is revoked or explicitly time-bounded.

## OA-11 Product and portfolio

- **Purpose:** close bounded outcomes, classify customer-specific versus reusable learning, allocate attention, delegate, communicate, grow capability, and preserve resumable closure.
- **Inputs:** completed lifecycle dossier, outcome/adoption/guardrail evidence, decision history, customer/contract boundaries, multiple engagement records.
- **Complete when:** reuse decisions state invariant/variance/isolation/cost/owner/validation/disconfirmation and portfolio/closure records state consequence/evidence/authority/opportunity cost/next trigger.
- **Structure:** bounded outcome review; pattern ledger; twelve-artifact classification; product packet; propose/defer/reject; portfolio row/order rationale; delegation contract; multi-altitude memo; cadence/staffing; growth plan; source/build hashes; issue/risk/reuse state; next owners.
- **Orchid example:** equipment mappings remain local; intent/reconciliation module waits for a third context; Orchid ownership is closed; product lead owns the next reuse review; Phase 09/10/11 owners remain explicit.
