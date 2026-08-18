import { readFileSync } from 'node:fs';

function esc(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function paragraphs(items = [], className = '') {
  return items.map((item) => `<p${className ? ` class="${className}"` : ''}>${esc(item)}</p>`).join('');
}

function kicker(page) {
  return page.kicker ? `<div class="kicker">${esc(page.kicker)}</div>` : '';
}

function folio(page) {
  if (page.pageNumber === 1) return '';
  return `<div class="folio"><span>FDE / DESIGN PROOF</span><strong>${String(page.pageNumber).padStart(3, '0')}</strong></div>`;
}

function routeMark() {
  return '<div class="route-mark" aria-hidden="true"><i></i><span></span><i></i><span></span><i></i></div>';
}

function renderCover(page) {
  return `
    <div class="cover-grid" aria-hidden="true"></div>
    <div class="cover-coordinate">${esc(page.coordinate)}</div>
    <div class="cover-copy">
      <div class="cover-series">KOMAL NAKRANI / PROFESSIONAL FIELD GUIDES</div>
      <h1>${esc(page.title)}</h1>
      <p class="cover-subtitle">${esc(page.subtitle)}</p>
    </div>
    <div class="cover-route" aria-hidden="true"><span class="route-a"></span><span class="route-b"></span><i></i></div>
    <div class="cover-author">${esc(page.author)}</div>
    <div class="proof-stamp">SCREEN-FIRST<br>DESIGN PROOF</div>`;
}

function renderInsideCover(page) {
  return `${kicker(page)}
    <div class="inside-title"><span>01</span><h2>${esc(page.title)}</h2></div>
    ${paragraphs(page.body, 'lead')}
    <div class="three-mode">
      <article><b>ORIENT</b><span>Route maps establish the territory and the next coordinate.</span></article>
      <article><b>READ</b><span>Evidence rails hold context without interrupting the main argument.</span></article>
      <article><b>DECIDE</b><span>Signal orange appears only when judgment changes the route.</span></article>
    </div>
    ${routeMark()}`;
}

function renderTitle(page) {
  return `<div class="title-spine"><span>KOMAL NAKRANI</span><i></i></div>
    <div class="title-copy">
      <div class="coordinate-chip">FIELD LOG / 01</div>
      <h2>${esc(page.title)}</h2>
      <p class="title-subtitle">${esc(page.subtitle)}</p>
      <div class="title-author">${esc(page.author)}</div>
      ${paragraphs(page.body, 'edition-line')}
    </div>`;
}

function renderCopyright(page) {
  return `${kicker(page)}<h2>${esc(page.title)}</h2>
    <div class="legal-grid">
      <section>${paragraphs(page.body)}</section>
      <aside>
        <div><span>AUTHOR</span><b>Komal Nakrani</b></div>
        <div><span>PROOF FORMAT</span><b>7 x 10 in / screen-first</b></div>
        <div><span>PUBLICATION STATE</span><b>Published edition unchanged</b></div>
        <div><span>VISUAL SYSTEM</span><b>Field Expedition Log</b></div>
      </aside>
    </div>
    <div class="boundary-note"><b>PROFESSIONAL BOUNDARY</b><p>This book prepares evidence, supports bounded implementation, recommends options, and preserves escalation. Formal risk decisions remain with qualified specialists and designated organizational authorities.</p></div>`;
}

function renderHowTo(page) {
  const steps = page.body.map((item, index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><p>${esc(item)}</p></li>`).join('');
  return `${kicker(page)}<h2>${esc(page.title)}</h2><p class="statement">${esc(page.kicker)}</p>
    <ol class="route-list">${steps}</ol>
    <div class="how-footer"><b>FIELD PRACTICE</b><p>Complete the learning packs and deterministic companion exercises. They are professional education, not a live certification bank.</p></div>`;
}

function renderLegend(page) {
  const marks = ['evidence', 'decision', 'warning', 'coordinate', 'handoff'];
  const entries = page.body.map((item, index) => {
    const [name, description] = item.split(' - ');
    return `<li class="legend-${marks[index]}"><span class="legend-symbol">${String(index + 1).padStart(2, '0')}</span><div><b>${esc(name)}</b><p>${esc(description)}</p></div></li>`;
  }).join('');
  return `${kicker(page)}<h2>${esc(page.title)}</h2><ul class="legend-list">${entries}</ul>`;
}

function renderContents(page) {
  const entries = page.entries.map(([id, title, pageNumber]) => `<li class="${id.startsWith('PART') ? 'part-entry' : ''}"><span>${esc(id)}</span><b>${esc(title)}</b><i></i><em>${esc(pageNumber)}</em></li>`).join('');
  return `${kicker(page)}<h2>${esc(page.title)}</h2><ol class="contents-list">${entries}</ol>`;
}

function renderPartOpener(page) {
  return `<div class="part-field" aria-hidden="true"><span></span><i></i><b>06</b></div>
    <div class="part-copy">${kicker(page)}<h2>${esc(page.title)}</h2><p class="part-statement">${esc(page.statement)}</p>${paragraphs(page.body)}</div>
    <div class="part-dossier"><span>DOSSIER STATE</span><b>OA-05 / DESIGN BOUNDARY</b></div>`;
}

function renderChapterOpener(page) {
  return `<div class="chapter-coordinate" aria-hidden="true"><span>06</span><i></i></div>
    <div class="chapter-copy">${kicker(page)}<h2>${esc(page.title)}</h2><blockquote>${esc(page.statement)}</blockquote>${paragraphs(page.body)}</div>
    <div class="chapter-route"><span>OWN OUTCOME</span><i></i><span class="active">DESIGN DEPLOYMENT</span><i></i><span>BUILD EVIDENCE</span></div>`;
}

function renderInstruction(page) {
  const bullets = page.bullets.map((item) => `<li>${esc(item)}</li>`).join('');
  return `${kicker(page)}<h2>${esc(page.title)}</h2>
    <div class="reading-column">${paragraphs(page.body, 'body-copy')}<ul class="question-list">${bullets}</ul></div>
    <aside class="margin-coordinate"><span>06.1</span><b>BOUNDARY BEFORE SERVICE</b></aside>`;
}

function renderInstructionRail(page) {
  const rail = page.rail.map(([name, description], index) => `<li><span>${String(index + 1).padStart(2, '0')}</span><div><b>${esc(name)}</b><p>${esc(description)}</p></div></li>`).join('');
  return `${kicker(page)}<h2>${esc(page.title)}</h2>
    <div class="rail-layout"><div class="rail-reading">${paragraphs(page.body, 'body-copy')}<div class="field-quote">A clean structural picture can still conceal a brittle operating system.</div></div><ol class="evidence-rail">${rail}</ol></div>`;
}

function renderCaseEvidence(page) {
  const actors = page.actors.map((item) => `<span>${esc(item)}</span>`).join('');
  const systems = page.systems.map((item) => `<span>${esc(item)}</span>`).join('');
  return `${kicker(page)}<h2>${esc(page.title)}</h2>${paragraphs(page.body, 'body-copy')}
    <div class="context-map">
      <div class="context-cluster actors"><b>PEOPLE IN THE WORKFLOW</b>${actors}</div>
      <div class="context-core"><span>ORCHID ASSIST</span><b>BOUNDED COORDINATION</b><small>processing state / evidence references / approval / audit</small></div>
      <div class="context-cluster systems"><b>CUSTOMER SYSTEMS</b>${systems}</div>
      <div class="context-crossing crossing-a">identity + selected propositions</div>
      <div class="context-crossing crossing-b">evidence + recorded disposition</div>
    </div>`;
}

function renderComparison(page) {
  const list = (items) => items.map((item) => `<li>${esc(item)}</li>`).join('');
  return `${kicker(page)}<h2>${esc(page.title)}</h2>
    <div class="comparison-grid">
      <section><span>PICTURE</span><h3>${esc(page.leftTitle)}</h3><ul>${list(page.left)}</ul></section>
      <section class="comparison-active"><span>OPERATING TRUTH</span><h3>${esc(page.rightTitle)}</h3><ul>${list(page.right)}</ul></section>
    </div>
    <div class="decision-strip"><b>DECISION</b><p>${esc(page.decision)}</p></div>`;
}

function renderFigure(page) {
  const positions = ['label-workflow', 'label-evidence', 'label-service', 'label-authority'];
  const labels = page.labels.map((label, index) => `<span class="figure-label ${positions[index]}">${esc(label)}</span>`).join('');
  return `${kicker(page)}<h2>${esc(page.title)}</h2>
    <figure class="system-figure"><div class="figure-stage"><img src="../${esc(page.asset)}" alt="${esc(page.alt)}">${labels}</div><figcaption>${esc(page.caption)}</figcaption></figure>`;
}

function renderFigureReading(page) {
  const callouts = page.callouts.map(([id, text]) => `<li><span>${esc(id)}</span><p>${esc(text)}</p></li>`).join('');
  return `${kicker(page)}<h2>${esc(page.title)}</h2><div class="interpretation-grid"><div>${paragraphs(page.body, 'body-copy')}<div class="interpretation-rule">Every crossing is a question before it becomes an interface.</div></div><ol>${callouts}</ol></div>`;
}

function renderDecision(page) {
  const evidence = page.evidence.map((item) => `<li>${esc(item)}</li>`).join('');
  return `<div class="decision-number">06 / GATE</div>${kicker(page)}<h2>${esc(page.title)}</h2>
    <p class="decision-question">${esc(page.question)}</p>
    <div class="decision-evidence"><span>REQUIRED EVIDENCE</span><ul>${evidence}</ul></div>
    <div class="decision-outcome"><span>DISPOSITION</span><p>${esc(page.decision)}</p></div>`;
}

function renderArtifact(page) {
  const code = page.code.map((line, index) => `<div class="chain-line depth-${Math.min(index, 6)}"><span>${String(index + 1).padStart(2, '0')}</span><code>${esc(line)}</code></div>`).join('');
  return `${kicker(page)}<h2>${esc(page.title)}</h2><div class="artifact-layout"><div class="artifact-code">${code}</div><aside>${paragraphs(page.body, 'body-copy')}<div class="artifact-tag">MINIMUM ACCESS / NAMED DECISION</div></aside></div>
    <section class="artifact-proof">
      <article><span>01</span><b>PURPOSE BOUND</b><p>The question determines which evidence is legitimate to request.</p></article>
      <article><span>02</span><b>OWNER NAMED</b><p>Approval and handling remain attached to an accountable role.</p></article>
      <article><span>03</span><b>EXPIRY RECORDED</b><p>Access ends when the named decision no longer needs it.</p></article>
      <div class="artifact-result"><span>RESULT</span><b>ONE BOUNDED DECISION BECOMES LEGITIMATE TO MAKE.</b></div>
    </section>`;
}

function renderExercise(page) {
  const steps = page.steps.map(([id, text]) => `<li><span>${esc(id)}</span><p>${esc(text)}</p></li>`).join('');
  return `${kicker(page)}<h2>${esc(page.title)}</h2>${paragraphs(page.body, 'exercise-lead')}<ol class="exercise-steps">${steps}</ol><div class="pass-band">${esc(page.pass)}</div>`;
}

function renderRecap(page) {
  const checklist = page.checklist.map((item) => `<li><i></i>${esc(item)}</li>`).join('');
  return `<div class="recap-orbit" aria-hidden="true"><span>06</span></div>${kicker(page)}<h2>${esc(page.title)}</h2>${paragraphs(page.body, 'body-copy')}<ul class="recap-list">${checklist}</ul>${routeMark()}`;
}

function renderAppendix(page) {
  const fields = page.fields.map(([name, description]) => `<li><span>${esc(name)}</span><p>${esc(description)}</p></li>`).join('');
  return `${kicker(page)}<h2>${esc(page.title)}</h2><ul class="template-fields">${fields}</ul>`;
}

function renderRecords(page) {
  const records = page.records.map(([name, description]) => `<li><span>${esc(name)}</span><p>${esc(description)}</p></li>`).join('');
  return `${kicker(page)}<h2>${esc(page.title)}</h2>${paragraphs(page.body, 'body-copy')}<ul class="record-list">${records}</ul><div class="record-footer">TRACEABILITY IS PART OF THE READING EXPERIENCE.</div>`;
}

function renderAuthor(page) {
  return `<div class="author-mark" aria-hidden="true"><span>KN</span><i></i></div><div class="author-copy">${kicker(page)}<h2>${esc(page.title)}</h2>${paragraphs(page.body, 'body-copy')}<div class="author-signature">${esc(page.author)}</div></div>`;
}

function renderClosing(page) {
  return `<div class="closing-grid" aria-hidden="true"></div><div class="closing-copy">${kicker(page)}<h2>${esc(page.title)}</h2>${paragraphs(page.body, 'closing-body')}<div class="closing-author">${esc(page.author)}</div></div><div class="closing-route" aria-hidden="true"><i></i><span></span><i></i></div>`;
}

const renderers = {
  cover: renderCover,
  'inside-cover': renderInsideCover,
  title: renderTitle,
  copyright: renderCopyright,
  'how-to': renderHowTo,
  legend: renderLegend,
  contents: renderContents,
  'part-opener': renderPartOpener,
  'chapter-opener': renderChapterOpener,
  instruction: renderInstruction,
  'instruction-rail': renderInstructionRail,
  'case-evidence': renderCaseEvidence,
  comparison: renderComparison,
  figure: renderFigure,
  'figure-reading': renderFigureReading,
  decision: renderDecision,
  artifact: renderArtifact,
  exercise: renderExercise,
  recap: renderRecap,
  appendix: renderAppendix,
  records: renderRecords,
  author: renderAuthor,
  closing: renderClosing,
};

function renderPage(page) {
  const renderer = renderers[page.kind];
  if (!renderer) throw new Error(`No renderer for page kind: ${page.kind}`);
  return `<section class="page page--${esc(page.kind)}" data-page="${esc(page.pageNumber)}">${renderer(page)}${folio(page)}</section>`;
}

export function renderProofHtml(pages, options = {}) {
  const stylesheetUrl = new URL(options.stylesheet ?? 'theme.css', import.meta.url);
  const stylesheet = readFileSync(stylesheetUrl, 'utf8');
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="author" content="Komal Nakrani">
  <meta name="description" content="Forward Deployed Engineering screen-first design proof">
  <title>Forward Deployed Engineering - Screen-First Design Proof</title>
  <style>${stylesheet}</style>
</head>
<body>${pages.map(renderPage).join('\n')}</body>
</html>`;
}
