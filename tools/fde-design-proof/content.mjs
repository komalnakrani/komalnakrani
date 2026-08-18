export const book = Object.freeze({
  title: 'Forward Deployed Engineering',
  subtitle: 'From Ambiguous Workflow to Production Outcome',
  author: 'Komal Nakrani',
  edition: 'First edition, version 1.0.0 (2026)',
  status: 'Design proof - not the published edition',
});

const frontMatter = 'content/publications/forward-deployed-engineering/front-matter/front-matter.md';
const partIntroductions = 'content/publications/forward-deployed-engineering/front-matter/part-introductions.md';
const entryChapter = 'content/publications/forward-deployed-engineering/chapters/enter-the-customer-system.mdx';
const boundaryChapter = 'content/publications/forward-deployed-engineering/chapters/draw-the-real-system-boundary.mdx';

function page(pageNumber, kind, fields = {}) {
  return Object.freeze({
    pageNumber,
    kind,
    title: fields.title ?? '',
    kicker: fields.kicker ?? '',
    body: fields.body ?? [],
    ...fields,
  });
}

export const proofPages = Object.freeze([
  page(1, 'cover', {
    title: book.title,
    subtitle: book.subtitle,
    author: book.author,
    coordinate: 'FIELD LOG / 01',
  }),
  page(2, 'inside-cover', {
    title: 'A Komal Nakrani field guide',
    kicker: 'The publication standard in development',
    body: [
      'A screen-first system for reading consequential technical work with less friction and stronger orientation.',
      'This is a private design proof - not the published edition.',
    ],
  }),
  page(3, 'title', {
    title: book.title,
    subtitle: book.subtitle,
    author: book.author,
    body: [book.edition],
  }),
  page(4, 'copyright', {
    title: 'Edition and authorship record',
    body: [
      'Copyright (c) 2026 Komal Nakrani. All rights reserved except where separately stated for cited sources or companion dependencies.',
      'Design proof - private review artifact. This file does not replace the published first edition.',
      'The fictional Orchid Equipment Services and all constructed satellite scenarios are not real customer or employer outcomes.',
    ],
    sourcePath: frontMatter,
    sourceNeedle: 'Copyright (c) 2026 Komal Nakrani. All rights reserved except where separately stated for cited sources or companion dependencies. This book is original.',
  }),
  page(5, 'how-to', {
    title: 'How to use this field log',
    kicker: 'Orient. Inspect. Decide. Practice.',
    body: [
      'Read Chapters 1-5 before committing scope.',
      'Use Chapters 6-10 to create the design dossier.',
      'Run the companion while studying Chapters 11-14.',
      'Use Chapters 15-17 for readiness, stabilization, and ownership.',
      'Use Chapters 18-19 only after bounded field evidence exists.',
    ],
    sourcePath: frontMatter,
    sourceNeedle: 'Read Chapters 1-5 before committing scope.',
  }),
  page(6, 'legend', {
    title: 'Read the field marks',
    kicker: 'The page never asks color to explain itself',
    body: [
      'EVIDENCE - a fact, observation, measurement, or source whose limits remain visible.',
      'DECISION - a consequential choice that changes scope, exposure, ownership, or next action.',
      'WARNING - a condition that can invalidate the current path.',
      'COORDINATE - your current position in the deployment journey.',
      'HANDOFF - the artifact and owner required before the route can continue.',
    ],
  }),
  page(7, 'contents', {
    title: 'Expedition route',
    kicker: 'Coordinates 01-10',
    entries: [
      ['PART I', 'Own the Outcome', '01'],
      ['01', 'The Deployed Outcome', '014'],
      ['02', 'Enter the Customer System', '032'],
      ['03', 'Map the Workflow That Actually Exists', '052'],
      ['04', 'Contract for an Outcome', '070'],
      ['05', 'Scope the First Safe Production Path', '088'],
      ['PART II', 'Design the Deployment', '108'],
      ['06', 'Draw the Real System Boundary', '112'],
      ['07', 'Make Interfaces and Data Explicit', '132'],
      ['08', 'Fit the Customer Environment', '152'],
      ['09', 'Put AI Inside a Bounded Workflow', '172'],
      ['10', 'Build Security and Governance Into Delivery', '192'],
    ],
  }),
  page(8, 'contents', {
    title: 'Expedition route',
    kicker: 'Coordinates 11-19 and field records',
    entries: [
      ['PART III', 'Build Evidence Into the System', '214'],
      ['11', 'Build a Production Vertical Slice', '218'],
      ['12', 'Prove Behavior Before Production', '238'],
      ['13', 'Make the System Observable and Operable', '258'],
      ['14', 'Engineer Release and Recovery', '278'],
      ['PART IV', 'Launch Into Reality', '300'],
      ['15', 'Cross the Production Threshold', '304'],
      ['16', 'Stabilize Under Real Conditions', '326'],
      ['17', 'Make the Solution Usable and Ownable', '348'],
      ['PART V', 'Turn Delivery Into Leverage', '370'],
      ['18', 'Turn Field Evidence Into Product Leverage', '374'],
      ['19', 'Lead Beyond One Deployment', '396'],
      ['A-E', 'Templates, gates, companion, glossary, dossier', '418'],
    ],
  }),
  page(9, 'part-opener', {
    title: 'Design the Deployment',
    kicker: 'PART II / FIELD COORDINATE 06',
    statement: 'Convert the selected workflow into explicit boundaries that reviewers can challenge.',
    body: [
      'Boxes alone are not architecture. The deployment must state which system holds which responsibility, which proposition crosses each interface, how identities and regions are enforced, where uncertain model behavior belongs, and which control evidence supports formal decisions.',
    ],
    sourcePath: partIntroductions,
    sourceNeedle: 'Part II converts the selected workflow into explicit boundaries that reviewers can challenge. Boxes alone are not architecture.',
  }),
  page(10, 'chapter-opener', {
    title: 'Draw the Real System Boundary',
    kicker: 'CHAPTER 06 / STRUCTURE, TRUST, FAILURE, OWNERSHIP',
    statement: 'Forward deployed architecture begins where boxes and arrows stop.',
    body: [
      'An architecture diagram can be accurate and still conceal the deployment.',
      'It may show a user, an application, several services, and databases connected by arrows. Yet it may not say who operates, authorizes, detects, reconciles, or recovers.',
    ],
    sourcePath: boundaryChapter,
    sourceNeedle: 'Forward deployed architecture begins where boxes and arrows stop.',
  }),
  page(11, 'instruction', {
    title: 'Draw the boundary the outcome needs',
    kicker: 'FIELD NOTE 06.1',
    body: [
      'Chapter 5 selected one Orchid path: a Region West cohort and equipment family moving from confirmed equipment match through visible evidence, bounded suggestion, deterministic eligibility, qualified approval, read-only inventory evidence, audit, fallback, signals, and support.',
      'Do not begin by selecting cloud services. Begin with responsibilities and constraints.',
    ],
    bullets: [
      'Which actors and systems participate from trigger to supported resolution or escalation?',
      'Which customer systems remain authoritative for which claims?',
      'Which failure can propagate, and where can it be detected or contained?',
      'Which team operates, changes, supports, and approves each responsibility?',
    ],
    sourcePath: boundaryChapter,
    sourceNeedle: 'Do not begin by selecting cloud services. Begin with responsibilities and constraints.',
  }),
  page(12, 'instruction-rail', {
    title: 'Six boundaries, not one box',
    kicker: 'EVIDENCE RAIL / F06',
    body: [
      'A structural diagram does not establish the runtime, data, trust, failure, or responsibility boundary.',
      'Each view answers a different operational question. Keeping them separate prevents a clean diagram from hiding a fragile deployment.',
    ],
    rail: [
      ['STRUCTURAL', 'Which components and relationships exist?'],
      ['RUNTIME', 'Where does code execute, restart, scale, and persist?'],
      ['DATA', 'Which proposition crosses, and who remains authoritative?'],
      ['TRUST', 'Where must identity and authorization be evaluated?'],
      ['FAILURE', 'What can propagate, diverge, or require reconciliation?'],
      ['RESPONSIBILITY', 'Who builds, operates, supports, changes, and decides?'],
    ],
    sourcePath: boundaryChapter,
    sourceNeedle: 'A structural diagram does not establish the other five.',
  }),
  page(13, 'case-evidence', {
    title: 'Orchid Assist is bounded coordination',
    kicker: 'RUNNING CASE / OA-05',
    body: [
      'Orchid Assist coordinates the selected workflow. It does not become the owner of every customer record or decision merely because it reads or displays them.',
      'A system context becomes useful only when every external relationship names the proposition, identity, limitation, and owner.',
    ],
    actors: ['Technician', 'Dispatcher', 'Qualified approver', 'Support operator'],
    systems: ['Ticketing', 'Equipment registry', 'Inventory / ERP', 'Manual source', 'Identity', 'Audit'],
    sourcePath: boundaryChapter,
    sourceNeedle: 'A bounded system that coordinates the selected workflow. It does not become the owner of every customer record or decision merely because it reads or displays them.',
  }),
  page(14, 'comparison', {
    title: 'A boundary is a decision surface',
    kicker: 'COMPARE / WHAT THE DIAGRAM SHOWS VS WHAT OPERATIONS NEEDS',
    leftTitle: 'A clean architecture picture',
    left: ['Components', 'Connections', 'Nominal data flow', 'Technology names'],
    rightTitle: 'A deployed system boundary',
    right: ['Proposition ownership', 'Identity and authority', 'Failure and reconciliation', 'Operations and support', 'Change and recovery'],
    decision: 'If a reviewer cannot challenge ownership, trust, and failure, the picture is not yet a deployment boundary.',
    sourcePath: boundaryChapter,
    sourceNeedle: 'Architecture notation should reduce ambiguity rather than display tool skill.',
  }),
  page(15, 'figure', {
    title: 'The real system boundary is layered',
    kicker: 'FIGURE PROOF / SYSTEM FIELD',
    asset: 'assets/system-boundary-field.png',
    labels: ['CUSTOMER WORKFLOW', 'EVIDENCE BOUNDARY', 'DEPLOYED SERVICE', 'EXTERNAL AUTHORITY'],
    alt: 'Dimensional system field separating the customer workflow, evidence boundary, deployed service, and external authority while showing controlled crossings between them.',
    caption: 'Illustrative field model. The visual separates operational zones; the surrounding labels carry the exact boundary meaning.',
  }),
  page(16, 'figure-reading', {
    title: 'Read the figure as evidence, not decoration',
    kicker: 'INTERPRETATION / F06-PROOF',
    body: [
      'The deployed service can coordinate a workflow without inheriting authority over the customer systems it touches.',
      'Every crossing should be read as a question: which proposition moves, which identity acts, which owner supplies evidence, and what happens when the crossing fails?',
    ],
    callouts: [
      ['01', 'Workflow remains the customer context, not a decorative backdrop.'],
      ['02', 'Evidence is selected and bounded before it crosses into the service.'],
      ['03', 'The deployed service owns its processing state, not every underlying proposition.'],
      ['04', 'Formal authority stays external unless explicitly delegated.'],
    ],
    sourcePath: boundaryChapter,
    sourceNeedle: 'The application can cache or derive data without becoming authoritative for the underlying proposition.',
  }),
  page(17, 'decision', {
    title: 'Decision checkpoint',
    kicker: 'STOP / CHALLENGE THE ARROW',
    question: 'Can every material relationship answer who does what to whom, why, with which identity and data, and under whose authority?',
    evidence: ['Relationship sentence', 'Proposition owner', 'Identity and scope', 'Failure behavior', 'Support and decision owner'],
    decision: 'If any one is missing, keep the boundary provisional and block irreversible implementation.',
    sourcePath: boundaryChapter,
    sourceNeedle: 'Relationship labels should answer “who does what to whom, why, with which identity/data, and under whose authority?”',
  }),
  page(18, 'artifact', {
    title: 'Artifact: access-purpose chain',
    kicker: 'FIELD ARTIFACT / EVIDENCE BEFORE ACCESS',
    code: [
      'discovery question',
      '  -> minimum credible evidence',
      '  -> minimum data or access',
      '  -> handling constraint',
      '  -> owner and approval',
      '  -> expiry',
      '  -> decision enabled',
    ],
    body: [
      'Questions are not decoration before access. They are the basis for access.',
      'Purpose-bound evidence makes it easier to record what a finding does and does not support.',
    ],
    sourcePath: entryChapter,
    sourceNeedle: 'discovery question -> minimum credible evidence -> minimum data or access -> handling constraint -> owner and approval -> expiry -> decision enabled',
  }),
  page(19, 'exercise', {
    title: 'Walk the failure before it walks you',
    kicker: 'FIELD EXERCISE / 20 MINUTES',
    body: [
      'Choose one material dependency and remove it. Trace the user effect, detection path, containment, recovery, reconciliation, and owner.',
    ],
    steps: [
      ['01', 'Remove one dependency: registry, inventory, identity, audit, telemetry, or configuration.'],
      ['02', 'State whether the path blocks, falls back, degrades, queues, or continues.'],
      ['03', 'Name what evidence proves the resulting state.'],
      ['04', 'Name who may decide, who recovers, and who communicates.'],
    ],
    pass: 'PASS WHEN: the route ends with a named owner and a reconciled state, not an optimistic retry.',
    sourcePath: boundaryChapter,
    sourceNeedle: 'Remove registry, manual, inventory, model, identity, audit, telemetry, or configuration plane one at a time.',
  }),
  page(20, 'recap', {
    title: 'Coordinate 06 complete',
    kicker: 'FIELD RECAP / NEXT: INTERFACES AND DATA',
    body: [
      'You can now separate structural, runtime, data, trust, failure, and responsibility boundaries.',
      'The next coordinate makes the propositions crossing those boundaries explicit: contracts, time, intent, finality, quality, lineage, and reconciliation.',
    ],
    checklist: ['Boundary views are distinct', 'Every arrow has a relationship sentence', 'Failure ends with ownership', 'Desired and operational state are not confused'],
    sourcePath: partIntroductions,
    sourceNeedle: 'Chapter 6 draws structural, runtime, data, trust, failure, and responsibility boundaries. Chapter 7 makes interface semantics, time, intent, finality, error, quality, lineage, and reconciliation explicit.',
  }),
  page(21, 'appendix', {
    title: 'Field template: boundary record',
    kicker: 'APPENDIX SAMPLE / REUSABLE ARTIFACT',
    fields: [
      ['BOUNDARY ID', 'Stable reference used by prose, risks, tests, signals, and runbooks.'],
      ['PURPOSE', 'The outcome, guardrail, or scope decision that requires this boundary.'],
      ['CROSSING', 'Actor, proposition, identity, operation, owner, and direction.'],
      ['FAILURE', 'Propagation, detection, containment, correction, and reconciliation.'],
      ['AUTHORITY', 'Who approves, rejects, accepts consequence, or grants exception.'],
      ['EVIDENCE', 'What shows the boundary is designed, implemented, verified, and operable.'],
    ],
    sourcePath: boundaryChapter,
    sourceNeedle: 'The diagram should contain stable component/boundary IDs so prose, interface catalog, risks, tests, signals, and runbooks can reference the same object.',
  }),
  page(22, 'records', {
    title: 'Sources, figures, and accessible reading',
    kicker: 'EDITION RECORD / TRACE THE CLAIM',
    body: [
      'Read every figure with its caption and long description. The figure supports the explanation; it does not replace evidence or authority.',
      'Source records remain attached to the claims they support. Framework mappings are not certification, and professional decisions stay with qualified specialists and designated organizational authorities.',
    ],
    records: [
      ['FIGURE', 'PNG asset + selectable labels + visible caption + descriptive alternative.'],
      ['CLAIM', 'Exact statement + source IDs + limitations + chapter placement.'],
      ['EDITION', 'Version + date + errata + canonical route + download identity.'],
    ],
    sourcePath: frontMatter,
    sourceNeedle: 'Treat final figures `F01.1` through `F19.2` as decision artifacts: read their visible structure with the caption and use the embedded long description when visual detail is inaccessible.',
  }),
  page(23, 'author', {
    title: 'Komal Nakrani',
    author: book.author,
    kicker: 'AUTHOR / ORIGINAL PROFESSIONAL EDUCATION',
    body: [
      'Komal Nakrani is the author of Forward Deployed Engineering.',
      'This edition is built to help practicing and aspiring technical professionals reason about real work, preserve evidence boundaries, and make bounded decisions.',
      'The separate Abhyaas product independently certifies competence; this book teaches and prepares evidence but is not a certification exam.',
    ],
  }),
  page(24, 'closing', {
    title: 'Leave the system more legible than you found it.',
    kicker: 'END OF FIELD LOG / RETURN WITH EVIDENCE',
    body: [
      'A deployment is complete only when its outcome, evidence, limitations, operations, ownership, and next decisions remain visible without the person who first carried it across the boundary.',
      book.status,
    ],
    author: book.author,
  }),
]);
