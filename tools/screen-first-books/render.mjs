import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { escapeHtml, inlineHtml, parsePublicationMarkdown } from './markdown.mjs';

const packageRoot = path.dirname(fileURLToPath(import.meta.url));

function readStyle(file) {
  return readFileSync(path.join(packageRoot, file), 'utf8');
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function chapterAsset(figure) {
  return `${figure.id.toLowerCase()}.png`;
}

function stripMarkup(value) {
  return value.replace(/<[^>]+>/g, '').replace(/[`*_]/g, '').trim();
}

function partIntroductionMap(source) {
  const matches = [...source.matchAll(/^## Part ([IVX]+) - (.+)$/gm)];
  const result = new Map();
  matches.forEach((match, index) => {
    const end = matches[index + 1]?.index ?? source.length;
    const body = source.slice(match.index + match[0].length, end).trim();
    result.set(match[1], parsePublicationMarkdown(body));
  });
  return result;
}

function renderList(block) {
  const tag = block.ordered ? 'ol' : 'ul';
  return `<${tag} class="field-list">${block.items.map((item) => `<li class="depth-${Math.min(item.depth, 4)}">${item.html}</li>`).join('')}</${tag}>`;
}

function renderTable(block) {
  return `<div class="table-wrap"><table><thead><tr>${block.header.map((cell) => `<th>${cell}</th>`).join('')}</tr></thead><tbody>${block.rows.map((row) => `<tr>${row.map((cell) => `<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function renderFigure(block, contract, chapter) {
  const registry = chapter.figures.find((figure) => figure.id === block.id);
  if (!registry) throw new Error(`Figure ${block.id} is not registered for ${chapter.slug}`);
  const source = `../books/${contract.slug}/assets/${block.reviewFile}`;
  return `<figure class="book-figure" id="${block.id.toLowerCase()}">
    <div class="figure-coordinate"><span>${escapeHtml(block.id)}</span><b>${escapeHtml(chapter.part.title)}</b></div>
    <div class="figure-stage"><img src="${source}" alt="${block.alt}" /></div>
    <figcaption>${block.captionHtml}</figcaption>
    <div class="figure-reading"><span>READING KEY</span><p>${inlineHtml(registry.alt)}</p></div>
    <div class="figure-boundary"><span>EVIDENCE BOUNDARY</span><p>Use this explanatory model with the chapter text and registered caption. It does not replace evidence, authority, or the actual operating record.</p></div>
  </figure>`;
}

function renderBlock(block, contract, chapter) {
  if (block.type === 'heading') {
    const level = Math.min(Math.max(block.level, 2), 4);
    const decision = /gate|exercise|decision|stop|failure|complete `?oa-|review/i.test(block.text);
    return `<h${level} class="section-heading${decision ? ' section-heading--decision' : ''}">${block.html}</h${level}>`;
  }
  if (block.type === 'paragraph') return `<p>${block.html}</p>`;
  if (block.type === 'quote') return `<blockquote><span>FIELD ASSERTION</span><p>${block.html}</p></blockquote>`;
  if (block.type === 'list') return renderList(block);
  if (block.type === 'table') return renderTable(block);
  if (block.type === 'code') return `<div class="artifact-code"><span>${escapeHtml(block.language || 'ARTIFACT')}</span><pre><code>${escapeHtml(block.text)}</code></pre></div>`;
  if (block.type === 'figure') return renderFigure(block, contract, chapter);
  if (block.type === 'rule') return '<hr class="route-rule" />';
  throw new Error(`Unsupported semantic block: ${block.type}`);
}

function renderOpeningMatter(contract) {
  const routeGroups = contract.parts.map((part) => {
    const chapters = contract.chapters.filter((chapter) => chapter.part.number === part.number);
    return `<section class="contents-part"><header><span>PART ${part.roman}</span><b>${escapeHtml(part.title)}</b></header>${chapters.map((chapter) => `<a href="#chapter-${pad(chapter.order)}"><span>${pad(chapter.order)}</span><b>${escapeHtml(chapter.title)}</b><small>${chapter.minutes} min</small></a>`).join('')}</section>`;
  }).join('');

  return `<section class="page--full cover">
    <div class="cover-coordinate">FIELD LOG / 01</div>
    <div class="cover-kicker">KOMAL NAKRANI / PROFESSIONAL FIELD GUIDES</div>
    <h1>${escapeHtml(contract.title)}</h1>
    <p class="cover-subtitle">${escapeHtml(contract.subtitle)}</p>
    <div class="cover-route"><i></i><i></i><i></i></div>
    <div class="cover-author">${escapeHtml(contract.author)}</div>
    <div class="review-stamp">SCREEN-FIRST<br>REVIEW EDITION</div>
  </section>
  <section class="page--full opening-statement">
    <div class="opening-index">01</div>
    <div class="eyebrow">THE PUBLICATION STANDARD IN DEVELOPMENT</div>
    <h2>A Komal Nakrani field guide</h2>
    <p>A screen-first system for reading consequential technical work with less friction and stronger orientation.</p>
    <p class="review-note">${escapeHtml(contract.reviewLabel)}.</p>
    <div class="mode-grid"><article><span>ORIENT</span><p>Route maps establish the territory and the next coordinate.</p></article><article><span>READ</span><p>Evidence rails hold context without interrupting the main argument.</p></article><article><span>DECIDE</span><p>Signal orange appears only when judgment changes the route.</p></article></div>
  </section>
  <section class="page--full title-page">
    <div class="eyebrow">FIELD LOG / 01</div>
    <h1>${escapeHtml(contract.title)}</h1>
    <p>${escapeHtml(contract.subtitle)}</p>
    <div class="title-author"><b>${escapeHtml(contract.author)}</b><span>First edition, version ${escapeHtml(contract.edition.version)} (${contract.edition.copyrightYear})</span></div>
  </section>
  <section class="page--full edition-page">
    <div><div class="eyebrow">EDITION / AUTHORSHIP / BOUNDARY</div><h2>Edition and authorship record</h2><p>Copyright (c) ${contract.edition.copyrightYear} ${escapeHtml(contract.author)}. All rights reserved except where separately stated for cited sources or companion dependencies.</p><p>This book is original. Orchid Equipment Services and all constructed satellite scenarios are fictional and do not represent customer or employer outcomes.</p></div>
    <aside><span>AUTHOR</span><b>${escapeHtml(contract.author)}</b><span>REVIEW FORMAT</span><b>7 x 10 in / screen-first</b><span>PUBLIC STATE</span><b>Published edition unchanged</b></aside>
    <div class="boundary-card"><span>PROFESSIONAL BOUNDARY</span><p>This book is technical and professional education, not formal legal, security, privacy, safety, accessibility, audit, medical, financial, regulatory, or compliance advice. Designated authorities retain formal decisions.</p></div>
  </section>
  <section class="page--full how-to"><div class="eyebrow">ORIENT / INSPECT / DECIDE / PRACTICE</div><h2>How to use this field log</h2><ol><li><span>01</span>Read Chapters 1-5 before committing scope.</li><li><span>02</span>Use Chapters 6-10 to create the design dossier.</li><li><span>03</span>Run the companion while studying Chapters 11-14.</li><li><span>04</span>Use Chapters 15-17 for readiness, stabilization, and ownership.</li><li><span>05</span>Use Chapters 18-19 only after bounded field evidence exists.</li></ol><div class="field-note"><span>FIELD PRACTICE</span><p>Complete the learning packs and deterministic companion exercises. They are professional education, not a live certification bank.</p></div></section>
  <section class="page--full legend"><div class="eyebrow">THE PAGE NEVER ASKS COLOR TO EXPLAIN ITSELF</div><h2>Read the field marks</h2><div class="legend-list"><article><span class="mark evidence">E1</span><div><b>EVIDENCE</b><p>A fact, observation, measurement, or source whose limits remain visible.</p></div></article><article><span class="mark decision">D1</span><div><b>DECISION</b><p>A consequential choice that changes scope, exposure, ownership, or next action.</p></div></article><article><span class="mark warning">!</span><div><b>WARNING</b><p>A condition that can invalidate the current path.</p></div></article><article><span class="mark coordinate">06</span><div><b>COORDINATE</b><p>Your current position in the deployment journey.</p></div></article><article><span class="mark handoff">→</span><div><b>HANDOFF</b><p>The artifact and owner required before the route can continue.</p></div></article></div></section>
  <nav class="contents-route page--flow" aria-label="Contents"><div class="eyebrow">COORDINATES 01-19 AND FIELD RECORDS</div><h2>Expedition route</h2>${routeGroups}<section class="contents-part contents-part--appendix"><header><span>FIELD RECORDS</span><b>Appendices</b></header>${contract.appendices.map((appendix) => `<a href="#appendix-${appendix.id.toLowerCase()}"><span>${appendix.id}</span><b>${escapeHtml(appendix.title)}</b></a>`).join('')}</section></nav>`;
}

function renderPart(part, blocks) {
  const paragraphs = blocks.filter((block) => block.type === 'paragraph').map((block) => `<p>${block.html}</p>`).join('');
  return `<section class="part-opener page--full" id="part-${part.number}"><div class="part-number">${part.roman}</div><div class="eyebrow">PART ${part.roman} / FIELD COORDINATES ${escapeHtml(part.range)}</div><h2>${escapeHtml(part.title)}</h2><div class="part-copy">${paragraphs}</div><div class="part-route"><span>ORIENT</span><i></i><span>PROVE</span><i></i><span>HAND OFF</span></div></section>`;
}

function renderChapter(contract, chapter) {
  const figures = chapter.figures.map((figure) => ({ ...figure, reviewFile: chapterAsset(figure) }));
  const blocks = parsePublicationMarkdown(chapter.source, { figures });
  const claimIds = contract.claims.filter((claim) => claim.chapterSlug === chapter.slug).map((claim) => claim.id);
  const body = blocks.map((block) => renderBlock(block, contract, chapter)).join('\n');
  return `<section class="chapter-coordinate page--full" id="chapter-${pad(chapter.order)}">
    <div class="coordinate-orbit"><span>${pad(chapter.order)}</span></div>
    <div class="eyebrow">CHAPTER ${pad(chapter.order)} / ${escapeHtml(chapter.part.title)}</div>
    <h2>${escapeHtml(chapter.title)}</h2>
    <p class="chapter-summary">${escapeHtml(chapter.summary)}</p>
    <div class="chapter-contract"><div><span>READING TIME</span><b>${chapter.minutes} minutes</b></div><div><span>EVIDENCE</span><b>${claimIds.length} registered claims</b></div><div><span>FIGURES</span><b>${chapter.figures.map((figure) => figure.id).join(' / ')}</b></div></div>
    <div class="chapter-route"><span>PART ${chapter.part.roman}</span><i style="--route-progress:${chapter.order / 19}"></i><span>${pad(chapter.order)} / 19</span></div>
  </section>
  <article class="chapter-body" data-chapter="${pad(chapter.order)}" data-title="${escapeHtml(chapter.title)}">
    <header class="body-entry"><span>FIELD NOTE ${pad(chapter.order)}.${String.fromCharCode(64 + chapter.part.number)}</span><b>${escapeHtml(chapter.title)}</b></header>
    ${body}
    <footer class="chapter-handoff"><span>NEXT COORDINATE</span><p>${chapter.order < contract.chapters.length ? `Carry the accepted evidence and open gaps into Chapter ${pad(chapter.order + 1)}: ${escapeHtml(contract.chapters[chapter.order].title)}.` : 'Close the field route through the deployment dossier, source record, and named next owners.'}</p></footer>
  </article>`;
}

function renderAppendix(contract, appendix) {
  const blocks = parsePublicationMarkdown(appendix.source).filter((block, index) => !(index === 0 && block.type === 'heading' && block.level === 1));
  const chapterShape = { slug: `appendix-${appendix.id.toLowerCase()}`, title: appendix.title, part: { title: 'Field Records' }, figures: [] };
  return `<section class="appendix-opener page--full" id="appendix-${appendix.id.toLowerCase()}"><div class="eyebrow">FIELD RECORD / APPENDIX ${appendix.id}</div><h2>${escapeHtml(appendix.title)}</h2><p>Use this record with the chapter evidence, named owner, explicit authority, current limitations, and next trigger.</p><div class="appendix-coordinate">${appendix.id}</div></section><article class="appendix-body">${blocks.map((block) => renderBlock(block, contract, chapterShape)).join('\n')}</article>`;
}

function renderRegisters(contract) {
  const sourceItems = contract.sources.map((source) => `<article><span>${escapeHtml(source.id)}</span><div><b>${escapeHtml(source.title)}</b><p>${escapeHtml(source.publisher)}${source.publishedAt ? ` / ${escapeHtml(source.publishedAt)}` : ''}</p><a href="${escapeHtml(source.url)}">${escapeHtml(source.url)}</a></div></article>`).join('');
  const claimItems = contract.claims.map((claim) => `<article><span>${escapeHtml(claim.id)}</span><div><b>${escapeHtml(claim.chapterSlug)}</b><p>${escapeHtml(claim.statement)}</p><small>${claim.sourceIds.map(escapeHtml).join(' / ')}</small></div></article>`).join('');
  const figureItems = contract.figures.map((figure) => `<article><span>${escapeHtml(figure.id)}</span><div><b>${escapeHtml(stripMarkup(figure.caption.split('—')[0]))}</b><p>${escapeHtml(figure.alt)}</p><small>${escapeHtml(figure.chapterSlug)} / PNG review asset / original Komal synthesis</small></div></article>`).join('');
  return `<section class="register-opener page--full"><div class="eyebrow">TRACEABILITY / ACCESSIBLE READING</div><h2>Sources, claims, figures, and edition records</h2><p>These records preserve what supports each statement, where the visual model belongs, and which limitations travel with the edition.</p><div class="record-counts"><article><b>${contract.sources.length}</b><span>SOURCES</span></article><article><b>${contract.claims.length}</b><span>CLAIMS</span></article><article><b>${contract.figures.length}</b><span>FIGURES</span></article></div></section>
  <section class="source-register register"><div class="eyebrow">SOURCE REGISTER</div><h2>Source use remains visible</h2>${sourceItems}</section>
  <section class="claim-register register"><div class="eyebrow">CLAIM REGISTER</div><h2>Claims remain bound to chapters and sources</h2>${claimItems}</section>
  <section class="figure-register register"><div class="eyebrow">FIGURE AND ACCESSIBILITY REGISTER</div><h2>Every visual has a reading alternative</h2>${figureItems}</section>`;
}

function renderClosing(contract) {
  return `<section class="author-page page--full"><div class="author-mark">KN</div><div class="eyebrow">AUTHOR / ORIGINAL PROFESSIONAL EDUCATION</div><h2>${escapeHtml(contract.author)}</h2><p>${escapeHtml(contract.author)} is the author of <em>${escapeHtml(contract.title)}</em>. This edition is built to help practicing and aspiring technical professionals reason about real work, preserve evidence boundaries, and make bounded decisions.</p><p>The companion and learning materials are independent practice resources. They are not certification exams.</p><b>${escapeHtml(contract.author)}</b></section>
  <section class="closing page--full"><div class="eyebrow">END OF FIELD LOG / RETURN WITH EVIDENCE</div><h2>${escapeHtml(contract.closingStatement)}</h2><p>A deployment is complete only when its outcome, evidence, limitations, operations, ownership, and next decisions remain visible without the person who first carried it across the boundary.</p><div class="closing-author">${escapeHtml(contract.author)}</div><div class="closing-route"><i></i><i></i></div></section>`;
}

export function renderBookHtml(contract) {
  const baseCss = readStyle('theme-base.css');
  const bookCss = readStyle('books/forward-deployed-engineering.css');
  const introductions = partIntroductionMap(contract.partIntroductions.source);
  const chapters = [];
  for (const part of contract.parts) {
    chapters.push(renderPart(part, introductions.get(part.roman) ?? []));
    for (const chapter of contract.chapters.filter((candidate) => candidate.part.number === part.number)) chapters.push(renderChapter(contract, chapter));
  }

  return `<!doctype html><html lang="en" data-book="${escapeHtml(contract.slug)}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(contract.title)} - Screen-First Review</title><style>${baseCss}\n${bookCss}</style></head><body><main>${renderOpeningMatter(contract)}${chapters.join('')}${contract.appendices.map((appendix) => renderAppendix(contract, appendix)).join('')}${renderRegisters(contract)}${renderClosing(contract)}</main></body></html>`;
}
