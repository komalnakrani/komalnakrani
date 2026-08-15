# Phase 06 Source Verification

- Verification date: 2026-08-16
- Research cutoff: 2026-08-16
- Source register: 55 records
- Case register: 10 records, including one explicitly constructed original case
- Chapter packs: 19 of 19

## Integrity checks

- Both registers parse as JSON.
- Source IDs and case IDs are unique.
- Every architecture chapter has exactly one research pack and at least one registered source.
- Every `R06-Sxxx` and `R06-Cxxx` reference in a chapter pack resolves.
- Every pack includes a research question, claim/evidence map, durable principles, cases, limitations/disputes, remaining gaps, and manuscript prohibitions.
- `npm run validate:publications` and `git diff --check` pass.

## URL and ownership check

Automated redirect-following checks returned HTTP 200 for 48 of 55 source URLs. Seven official pages returned HTTP 403 to the command-line client: five `openai.com` pages and two `iso.org` standard records. Those pages were reviewed through an interactive web fetch during research; the status indicates automated-client blocking rather than a substituted or aggregator source. The current OpenAI developer documentation URLs returned HTTP 200.

Of the nine public-case URLs, six returned HTTP 200 and three `openai.com` case pages returned HTTP 403 to the command-line client after being reviewed interactively. The tenth case, Orchid Assist, intentionally has no URL because it is original and fictional.

All registered URLs belong to the named issuing organization or official project. No aggregator-only evidence is registered.

## Evidence classification decisions

- Employer postings support observed role practice only.
- Cloud-provider and employer engineering articles support attributed practice and incidents, not universal superiority.
- Vendor/customer stories keep every outcome attributed and record the absence of independent verification.
- Standards are cited by explicit version where available; the text does not claim that framework alignment establishes certification or compliance.
- NIST AI RMF revision activity and the scheduled late-2026 OpenAI Evals platform deprecation are recorded as volatility constraints.
- The Orchid Assist case may demonstrate decisions but may not prove prevalence, causality, or external outcomes.

## Release decision

No Phase 06 research gap blocks chapter blueprinting. Phase 07 must preserve every chapter's stated limitations and prohibitions, and it must not silently change the frozen book architecture.
