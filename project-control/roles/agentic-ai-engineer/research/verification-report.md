# Agentic AI Engineer — Staged Artifact Verification

Date: 2026-08-16

## Structural results

- `evidence-register.json`: valid JSON.
- Evidence registry: 20 unique sources, 18 unique claims, and 97 exact
  bidirectional source/claim links.
- Competency map: 12 parsed rows, exactly `AGE-K01` through `AGE-K12`.
- Visual forecast: 38 unique figure IDs, 28 `REQUIRED` and 10 `USEFUL`; every
  figure's encoded chapter matches its chapter column.
- SVG scan under `project-control/roles/agentic-ai-engineer/`: zero files.
- `git diff --check` for the role directory: pass.

## Link results

A parallel `curl -L` status check against all 20 registered primary URLs
returned:

- HTTP 200: 16 URLs.
- HTTP 403 to non-browser command-line requests: four URLs—Cognizant
  `AGE-SRC-004` and OpenAI `AGE-SRC-010`, `AGE-SRC-018`, `AGE-SRC-020`.
- Connection/timeout failures: zero.

The four 403 sources were successfully read or verified through the browsing
index during research and are marked with their actual verification method in
the source records. A command-line 403 is therefore recorded as access-policy
behavior, not silently treated as a verified HTTP-200 page.

## Visual-policy review

- Actual image assets created: none.
- SVG assets created: none.
- Forecast requires ImageGen raster production.
- Short essential labels are allowed only with spelling, placement, and
  publication-size legibility QA.
- Mascot use requires a recorded pedagogical reason and identity-preserving
  ImageGen references from
  `/Applications/ServBay/www/komal/mascot/original-face-identity-board.png` and
  the original-photo `identity-sources/` set; generic substitutes are rejected.

## Lifecycle limitation

These checks validate staged local artifacts only. They do not claim that a
GitHub issue was created, a commit was made, a phase was accepted/closed, or the
book/source/visual production phases are complete.
