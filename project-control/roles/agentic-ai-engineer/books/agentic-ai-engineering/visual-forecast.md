# Agentic AI Engineering — ImageGen Raster Visual Forecast

## Locked visual policy

The user has explicitly directed that all new and replacement book images use
ImageGen and that SVG not be created. For this book:

- every produced asset will be raster art generated with ImageGen;
- style will be crisp, colorful, artistic, dimensional 3D or realistic where it
  improves comprehension;
- scenes should feel energetic and approachable rather than corporate, dark,
  abstract, or monotonous;
- use the Komal guide mascot only when a human presence materially clarifies
  authority, review, recovery, or navigation;
- any Komal mascot must preserve her identity through ImageGen references from
  `/Applications/ServBay/www/komal/mascot/`, using
  `original-face-identity-board.png` and the `identity-sources/` original-photo
  set as the canonical face references; never invent a generic substitute;
- explanatory figures may carry short essential labels where those labels
  materially improve comprehension; every label must be spelled correctly,
  visually associated with the right object, and legible at web/PDF size;
- avoid paragraphs, code, dense numbers, pseudo-text, and tiny labels inside an
  image; exact definitions, full legends, detailed sequences, and accessibility
  meaning remain in HTML/PDF captions, keyed lists, or adjacent tables;
- do not create SVG intermediates or assets.

Phase 05 specifies images only. Actual production remains a later root-owned
ImageGen task with prompt/version/hash and QA records.

## Visual identity

### Profession-derived world

The visual world is a **bright action workshop** rather than a glowing-brain
motif. Agent runs appear as tangible trails through a miniature operations
environment: modular workbenches, transparent state capsules, color-coded tool
stations, permission gates, checkpoints, approval balconies, effect ledgers,
and recovery bays.

### Palette direction

- electric coral and warm orange for proposed actions and active motion;
- teal and cyan for observed evidence and validated state;
- violet for model choice and agent routing;
- leaf green for confirmed completion and safe recovery;
- amber for uncertainty, wait, or human review;
- deep navy for boundaries and grounding contrast;
- off-white and sunlit neutral backgrounds for Komal's light editorial UI.

Meaning must also be carried by shape, position, texture, or caption—not color
alone.

### Komal guide mascot

Use only in chapter/part opener art or human-authority scenes where she teaches
or clarifies something:

- preserve Komal's actual face identity from
  `/Applications/ServBay/www/komal/mascot/original-face-identity-board.png` and
  `/Applications/ServBay/www/komal/mascot/identity-sources/face-*.png`;
- use the repository's approved mascot prompt/QA material when Phase 10 starts;
- contemporary practical engineer clothing, expressive but professional,
  carrying a small field notebook or tablet when useful;
- consistent identity, silhouette, palette, and accessories across generated
  scenes;
- appears as guide, reviewer, or operator, not as a magical controller of the
  system;
- never replaces a technical element or formal authority label;
- must pass identity-preservation review against the original-photo references
  before publication; a newly invented character sheet is not a substitute.

### Production format

- master: high-resolution PNG from ImageGen;
- web derivative: WebP/AVIF where the publication pipeline supports it;
- print derivative: color-managed PNG at effective 300 ppi for placement;
- common aspect ratios: 16:9 chapter figure, 4:3 process scene, 1:1 book card,
  portrait cover;
- short essential labels are permitted after spelling/placement/legibility QA;
  no dense text, pseudo-text, logo, or watermark.

## Planned technical illustrations

| ID | Ch. | Priority | ImageGen concept | Learning problem removed | External caption / legend responsibility | Dossier |
| --- | ---: | --- | --- | --- | --- | --- |
| F01.1 | 1 | REQUIRED | Colorful 3D workshop cutaway: user at one edge, agent console in the center, separate model core, tool stations, state vault, platform floor, and human authority desk | Stops readers treating the model, agent, product, platform, and authority as one object | Key the six responsibility zones outside the image | AR-01 |
| F01.2 | 1 | USEFUL | Komal guide holding a boundary ribbon around the agent workshop while adjacent specialists remain connected outside | Makes professional ownership and collaboration memorable | Caption names owned versus partnered decisions | AR-01 |
| F02.1 | 2 | REQUIRED | Bright 3D staircase from fixed automation to assisted workflow, single agent, then multi-agent workshop; rising complexity is shown by more moving parts and gates | Shows that autonomy is a cost/risk ladder, not automatic progress | Adjacent table lists ambiguity, feedback, consequence, and control criteria | AR-01 |
| F02.2 | 2 | USEFUL | Two miniature factories solve the same task: a simple conveyor and an elaborate swarm, with the simple path visibly finishing cleanly | Counters complexity theater | Caption explains the rejection test | AR-01 |
| F03.1 | 3 | REQUIRED | Physical contract table with separate goal token, allowed-action keys, red stop blocks, budget meter, approval seal, consequence crates, and completion beacon | Turns vague delegation into concrete contract components | Numbered legend maps each physical object to a clause | AR-02 |
| F03.2 | 3 | REQUIRED | 3D authority airlock: proposal on one side, human review chamber, authorized effect on the other, with prohibited bypass visibly blocked | Separates proposing, approving, executing, and verifying | Caption gives the four stages and named owner requirement | AR-02 |
| F04.1 | 4 | REQUIRED | Isometric agent loop track: observe station, model decision turntable, validation gate, tool/effect bay, verification scanner, explicit stop ramp | Explains the harness and enforced transitions without a text-heavy flowchart | External ordered list defines states and exit conditions | AR-03 |
| F04.2 | 4 | USEFUL | Transparent run capsule containing event trail, counters, deadline clock, cancellation handle, and final disposition slot | Makes a run an engineered object rather than a chat session | Caption enumerates run identity and budgets | AR-03 |
| F05.1 | 5 | REQUIRED | Tool cabinet of differently shaped capability sockets: read lens, calculator, message envelope, and effect lever behind a lock; a generic master key is rejected | Shows least-capability design and effect classes | Adjacent legend states read/compute/communicate/effect semantics | AR-04 |
| F05.2 | 5 | REQUIRED | Split-scene ambiguous effect: reservation machine completes, response line breaks, retry approaches duplicate gate, idempotency ledger catches it | Makes timeout-after-effect and duplicate risk visible | Caption supplies retry/idempotency/verify/compensate sequence | AR-04 |
| F06.1 | 6 | REQUIRED | Layered identity badges for user, task, agent, and tool pass through narrowing permission gates to one effect | Distinguishes identity propagation from broad credential sharing | External labels identify principal, delegate, scope, duration, effect | AR-05 |
| F06.2 | 6 | USEFUL | Approval token physically bound to one proposed action parcel; altered parcel no longer fits the approval seal | Demonstrates approval binding and replay resistance | Caption defines exact proposal, approver, expiry, and audit link | AR-05 |
| F07.1 | 7 | REQUIRED | Bright 3D cabinet with separate drawers for authoritative state, prompt context, scratchpad, artifacts, preferences, and derived memory; provenance tags and expiry timers visible symbolically | Stops “memory” becoming one undifferentiated store | Adjacent keyed list defines each drawer and trust level | AR-06 |
| F07.2 | 7 | REQUIRED | Untrusted document enters a quarantine tray; clean facts can move to context, but malicious instruction is blocked from the policy and memory vault | Shows data/instruction separation and memory admission | Caption explains validation, provenance, permission, and deletion | AR-06 |
| F08.1 | 8 | REQUIRED | One versatile agent at a workbench reaches several well-organized tools through a clear loop, contrasted with empty unused specialist booths | Makes single-agent simplicity a deliberate baseline | Caption lists conditions for staying single-agent | AR-07 |
| F09.1 | 9 | REQUIRED | Multi-agent relay race with state baton, ownership vest, cancellation cord, and aggregation finish gate; duplicate runners are stopped | Shows that handoff transfers state and accountability, not words alone | External legend names handoff contract fields | AR-07 |
| F09.2 | 9 | USEFUL | 3D balance scale: measured quality/control gain on one side, coordination latency/cost/failure parts on the other | Makes topology an evidence tradeoff | Caption gives the topology experiment criteria | AR-07 |
| F10.1 | 10 | REQUIRED | Long-running job crosses checkpoints over a bridge; crash gap, resume crane, duplicate barrier, and compensation route are visible | Connects checkpoint, retry, idempotency, resume, and compensation | External sequence states recovery decisions | AR-08 |
| F10.2 | 10 | REQUIRED | Four-way recovery roundabout to retry, resume, compensate, escalate/stop, with different failure parcels routed by shape | Helps classify failures instead of retrying everything | Caption defines retryable, terminal, compensatable, ambiguous | AR-08 |
| F11.1 | 11 | REQUIRED | Komal reviewer on an approval balcony receives a concise evidence tray before an effect gate; takeover lever remains reachable | Shows usable human authority, timing, and evidence | Caption distinguishes review, approval, intervention, takeover | AR-08 |
| F12.1 | 12 | REQUIRED | Miniature evaluation world with initial-state bins, tool stations, hidden constraints, fault switches, timer, budget counter, and outcome inspection | Shows that the environment/harness is part of the tested system | External checklist names task-set card fields | AR-09 |
| F12.2 | 12 | USEFUL | Two identical-looking agents run in different worlds—one toy, one production-like—with visibly different obstacles and permissions | Exposes invalid benchmark transfer | Caption names omitted production dimensions | AR-09 |
| F13.1 | 13 | REQUIRED | Layered trajectory specimen under a glass inspection table: actions, tool arguments, state changes, effects, recovery, and final result on separate rails | Prevents final-answer-only evaluation | Numbered external legend maps each evaluation layer | AR-09 |
| F13.2 | 13 | REQUIRED | Consequence-aware evaluation mosaic with normal, edge, adversarial, timeout, permission, and partial-effect tiles; uncovered holes glow amber | Makes coverage gaps and segments visible | Adjacent matrix carries exact case/claim mapping | AR-09 |
| F14.1 | 14 | REQUIRED | Malicious instruction disguised inside a retrieved manual tries to cross from observation belt to privileged action controls; multiple independent gates block it | Shows indirect injection and defense in depth | Caption names provenance, instruction separation, scope, validation, approval, monitoring | AR-10 |
| F14.2 | 14 | USEFUL | Transparent blast-radius boxes around a tool effect, with sandbox, tenant, network, budget, and revocation shells | Makes containment layers concrete | External legend identifies each boundary | AR-10 |
| F15.1 | 15 | REQUIRED | Privacy-aware run trace as an illuminated transit map: model, tool, state, approval, and effect stations; sensitive payloads travel in opaque sealed capsules | Shows causality without full-content surveillance | Caption lists safe event fields and redaction | AR-11 |
| F15.2 | 15 | USEFUL | Diagnostic magnifier follows one user symptom backward through effect, tool, state, routing, and model-choice stations | Encourages layer-first diagnosis | External ordered trace gives investigation sequence | AR-11 |
| F16.1 | 16 | REQUIRED | Four-dimensional operations dashboard rendered as a physical control room: completion-quality gauge, elapsed-time clock, action/token fuel, external-cost meter, and queue/capacity lanes | Makes agent budgets broader than token cost | Adjacent table provides numeric definitions and percentiles | AR-11 |
| F16.2 | 16 | USEFUL | Rare runaway loop appears as one long bright spiral hidden behind many short successful paths | Makes tail behavior and aggregate masking memorable | Caption explains tail/consequence budgets | AR-11 |
| F17.1 | 17 | REQUIRED | Agent progresses through increasingly open release rooms: simulation, replay, shadow, read-only, approval-required, bounded cohort, broad; each has an emergency stop | Shows exposure as a staged evidence ladder | External legend states question and exit gate per stage | AR-12 |
| F17.2 | 17 | REQUIRED | Incident recovery scene: detect beacon, containment door, ownership marker, repair bench, replay tester, artifact update shelf | Connects incident response to verified learning | Caption provides detect/contain/repair/verify/update sequence | AR-12 |
| F18.1 | 18 | REQUIRED | Local agent workshop connects through two modular adapters: one to tool/context services, one to a remote-agent booth; local authority gates remain in front | Shows protocol interoperability without surrendering semantics | Caption explains local contract, protocol adapter, remote claim, local enforcement | AR-13 |
| F18.2 | 18 | USEFUL | Remote capability card changes shape/version and no longer fits the local compatibility jig | Makes version and discovery claims testable | External text lists compatibility fields | AR-13 |
| F19.1 | 19 | REQUIRED | Before/after agent workbenches run the same replay track; colored differences appear at model choice, tool calls, state, effects, cost, and completion | Shows why final-score parity is insufficient for change | Adjacent comparison table holds exact deltas | AR-13 |
| F19.2 | 19 | REQUIRED | State-migration lock with old/new schemas, quarantine lane, rollback track, and retirement archive | Makes state compatibility part of model/tool change | Caption defines inventory, transform, replay, cohort, rollback, retire | AR-13 |
| F20.1 | 20 | REQUIRED | Komal guide reviews a colorful portfolio table of agents: some reduced, repaired, reused, platformized, or retired based on evidence tokens | Frames senior work as portfolio judgment, not hype | Caption lists disposition criteria and authority boundaries | AR-14 |
| F20.2 | 20 | REQUIRED | Reuse ladder built from repeated proven capability blocks; a flashy one-off block fails to support the platform bridge | Shows evidence-earned abstraction | External legend defines local fix -> pattern -> component -> service -> platform | AR-14 |

## Book identity assets

| Asset | Priority | ImageGen direction | Avoid |
| --- | --- | --- | --- |
| Front/PDF cover | REQUIRED | Portrait 3D action workshop seen as a luminous but sunlit cutaway; Komal guide at the control boundary; visible tools, state capsules, checkpoints, approval gate, recovery path; generous title-safe negative space | glowing brain, humanoid robot face, dark cyberpunk, unreadable text, corporate stock-photo look |
| Web cover / card | REQUIRED | Simplified crop of the same workshop identity with strong coral/teal/violet forms and one clear action trail | tiny detail, embedded title text, unrelated circuit-board pattern |
| Web hero | REQUIRED | Wide bright panorama of a bounded agent run moving through tools, state, approval, and recovery; Komal guide observing rather than controlling | generic chatbot bubbles, floating logos, neon darkness |
| OG/social | REQUIRED | Bold close-up of permission gate, action parcel, and recovery path with high mobile contrast | small text, too many agents, framework/vendor branding |
| Komal identity-preservation setup | REQUIRED before any mascot use | Use ImageGen with `/Applications/ServBay/www/komal/mascot/original-face-identity-board.png` plus the minimum necessary `identity-sources/face-*.png` references; verify actual Komal identity in the resulting pedagogical scene | generic substitute, identity drift, caricature, sexualization, inconsistent face or costume |
| Part openers | USEFUL, selective | Six distinct workshop zones tied to each part; use only if final manuscript navigation benefits | automatic decorative image per part |

## Prompt construction rules for Phase 10

Every production prompt must include:

- exact learning relationship and scene geometry;
- aspect ratio and intended web/print crop;
- bright light editorial palette and 3D/realistic material direction;
- essential objects and their relative positions;
- an explicit short-label list when labels are necessary, otherwise no words;
  always forbid pseudo-text, paragraphs, logos, incidental UI text, and watermark;
- avoidance of generic AI brains, robots, dark cyberpunk, clutter, and
  inaccessible color-only meaning;
- Komal guide only when the manifest records a pedagogical reason, always with
  the canonical original-photo identity references;
- permission to simplify visual detail for small-size readability.

## QA gates

Each generated image must pass:

1. **Learning check:** a named misunderstanding is easier to correct with the
   image than prose alone.
2. **Technical check:** tool direction, authority, state, effect, and recovery
   relationships match the chapter.
3. **Label check:** every essential label is correct, placed on the intended
   object, and legible; all pseudo-text and incidental text is rejected.
4. **Boundary check:** the model is one component; the image does not imply
   magical autonomy or human authority transfer.
5. **Accessibility check:** caption/alt/long description carries every essential
   relationship and color has redundant encoding.
6. **Responsive check:** the focal relationship survives common web and print
   crops; detail remains useful at reading width.
7. **Style check:** colorful, crisp, dimensional, approachable, role-specific,
   and consistent with the light editorial site.
8. **Originality and identity check:** no inherited Alpesh assets, employer
   diagrams, logos, generic mascot, or unlicensed likenesses; any Komal scene
   preserves identity against the original-photo references.
9. **Provenance check:** prompt/spec version, tool disclosure, asset hash,
   derivatives, reviewer, and disposition are recorded.
10. **Raster check:** canonical and derivatives are raster; no SVG is created.

## Planned count and restraint

- 38 provisional chapter visuals: 28 `REQUIRED`, 10 `USEFUL`.
- Five required identity assets plus an optional six-part opener set.
- `USEFUL` visuals may be removed after manuscript review; no chapter receives
  filler merely to reach a quota.
- Exact matrices, schema fields, numeric comparisons, and protocol messages stay
  as accessible publication tables/code, not generated image content.

## Phase 10 handoff record

Every final figure record must contain:

- figure ID, semantic version, title, chapter, insertion anchor, and priority;
- learning problem and exact spatial/causal relationship;
- approved ImageGen prompt/spec and avoid list;
- aspect ratio, master raster, web/print derivative paths, dimensions, color
  profile, and hashes;
- caption, alt text, and long-description disposition;
- `AR-*`, claim, and source relationships;
- ImageGen disclosure and creation date;
- technical, accessibility, small-size, crop, style, originality, and
  publication QA status.
