# Volume 2 Chapter 12 Blueprint — Optimize Preferences Carefully

## Frozen identity and dependency

- Chapter: `V2-12`; milestone: `MD-13`; domains: `LLME-K06`, `LLME-K07`, `LLME-K08`, `LLME-K10`.
- Prerequisite: `MD-12` candidates and audited preference pairs.
- Forward dependency: Chapter 13 compares other advanced methods and closes the gate.
- Reader transformation: from proxy-score optimization to independent behavior/retention evidence and principled rejection.

## Measurable objectives

The reader can explain a DPO-like policy/reference objective; connect outcome to pair/rubric quality and configuration; detect verbosity/style shortcuts; calibrate judges; compare SFT/PEFT/preference candidates on independent suites; and reject optimization that improves only its proxy.

## Concept sequence and skill procedure

Preference pairs → policy/reference → objective/configuration → candidate → proxy score → independent target/retention/control evaluation → stop/reject. Procedure: audit pairs; freeze reference; run bounded configuration; blind/randomize evaluation; inspect shortcut slices; adjudicate disagreements; document distinct value.

## Mosaic Desk transition and failure injection

- Incoming: selected SFT/PEFT candidates and preference evidence.
- Failure injection: longer, confident summaries raise the shared model-grader score while adding unsupported details.
- Outgoing: preference experiment or explicit rejection, bias/retention report, and remaining error categories for `MD-13`.

## Claim and case ledger

| Claim | Sources | Limitation |
|---|---|---|
| `V2-C12-CL01` | `LLME-BSRC-044` | DPO evidence is formulation/task specific. |
| `V2-C12-CL02` | `LLME-BSRC-028`, `LLME-BSRC-030`, `LLME-BSRC-044` | Pair quality/reference/configuration shape results. |
| `V2-C12-CL03` | `LLME-BSRC-027`, `LLME-BSRC-028`, `LLME-BSRC-033` | Judges need bias calibration and human/domain adjudication. |

Use `LLME-CASE-010` for DPO and `LLME-BSRC-005` for judge bias, with reported limits.

## Dual path, authority, and non-scope

Optimization is open-weight; managed graders may be used only as versioned instruments. Product/domain authorities define criteria; LLM engineering implements and audits proxies. Non-scope: moral alignment, universal beta, or grader score as approval.

## Practice and assessment

Exercise: Diagnose a proxy shortcut and issue run/stop/reject. Pass when independent suites, order controls, raw failures, and protected regressions determine the decision.

## Figures

- `V2-F12.1` — Intent: support the chapter learner decision. Composition: preference data→policy/reference→objective→candidate→evaluation; short labels. Alt: optimization remains coupled to data and reference. Evidence role: claims 01–02.
- `V2-F12.2` — Intent: support the chapter learner decision. Composition: verbosity/style shortcut bypasses intended rubric while alarms trigger; labels “proxy,” “shortcut,” “regression.” Alt: a candidate gains proxy reward by exploiting style. Evidence role: claim 03.

## Durability, prohibitions, and Phase 08 handoff

Durable: proxy/independent evidence separation, calibrated judges, rejection. Volatile: libraries/graders; reverify the maintained DPO trainer interface in `LLME-BSRC-045`. Prohibit preference-equals-truth and proxy-only promotion. Phase 08 receives the loop, shortcut drill, and rejection path.
