# V2 Chapter 4 Research Pack — Specify the Data Recipe

## Frozen identity

- Milestone: MD-10.
- Purpose: define data sources, rights, transformations, mixtures, splits, and exclusions before collection or training.
- Reader outcome: produce a versioned recipe with lineage and authority fields.

## Evidence and claims

`V2-C04-CL01` (`LLME-BSRC-034`, `036`, `039`) supports documented composition and processing. `V2-C04-CL02` (`038`, `008`) supports language, safety, privacy, and consent considerations as explicit dimensions. `V2-C04-CL03` (`037`, `002`) supports measuring language/task distributions and tokenizer effects.

## Mosaic Desk recipe

Define authorized support emails, policy text, synthetic demonstrations, language slices, redactions, provenance, retention, transformation steps, target mixture, and holdouts. Failure injection: a convenient production export lacks authorization and includes test cases or personal data. The recipe must reject it rather than normalize undocumented use. Use `LLME-CASE-006` and `007` for documentation patterns.

## Limits and authority

- Dataset documentation does not itself grant rights, consent, or privacy compliance.
- Synthetic data inherits generator and prompt biases and must be labeled.
- Data owners, privacy, legal, security, and domain authorities approve their areas; engineers record and enforce resulting constraints.
- Mixture weights are hypotheses to test, not facts imported from another recipe.

## Phase 07 blueprint handoff

Blueprint a data-recipe card, lineage table, authority gate, and mixture rationale. Sources: `002`, `008`, `034`, `036–039`; cases: `006`, `007`, `008`. Figures: recipe kitchen and lineage river. Non-scope: obtaining unauthorized data or prescribing legal conclusions.
