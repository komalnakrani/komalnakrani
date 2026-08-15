## Objective

Establish the copied Astro site as the durable KomalNakrani.com repository baseline and audit its reusable book, learning, and publication foundation without redesigning the UI.

## Inputs

- Existing local Astro site at `/Applications/ServBay/www/komalnakrani`
- User decision: the UI was intentionally copied from AlpeshNakrani.com and does not need reinvention
- Master Abhyaas × Komal operating prompt
- Existing visual components, layouts, styles, and route patterns
- User clarification: copied content is not Komal-owned and must not be retained

## Work

- Preserve the existing light editorial UI as the approved baseline.
- Remove inherited identity, manuscripts, catalog data, figures, marketing pages,
  testimonials, and commercial integrations instead of relabeling them.
- Add safe Git tracking and connect the new private GitHub repository.
- Verify the current Astro production build.
- Inventory the clean shell's support for books, series/volumes, chapter reading,
  figures, references, PDFs, editions, errata, role learning pages, and courses.
- Record missing reusable foundations as concrete executable follow-on work.
- Leave durable factory state that a fresh agent can resume.

## Acceptance criteria

- [ ] A lean visual shell is tracked in `alpeshznakrani/komalnakrani` without
  inherited content, the nested SEO repository, generated output, secrets, or
  oversized local archives.
- [ ] Production build completes successfully.
- [ ] Foundation audit identifies implemented capabilities with file evidence.
- [ ] Missing capabilities are classified by launch impact and converted into one exact next executable action.
- [ ] Factory state records repositories, locked UI decision, active issue, and next action.

## Verification

- `git status --short --branch`
- `npm ci`
- `npm run build`
- inspect book routes/data/manuscripts/figures/PDF scripts
- verify GitHub remote and pushed commit

## Outputs

- `.gitignore`
- `AGENTS.md`
- `project-control/role-factory/FACTORY-STATE.md`
- `project-control/role-factory/komal-foundation-audit.md`
- initial Git commit and GitHub repository baseline

## Dependencies

- None. This is the run-once Komal Phase 00 bootstrap.

## Handoff

The next issue can assume a buildable, versioned Astro publishing platform and an evidence-backed list of the smallest missing reusable foundation to implement.
