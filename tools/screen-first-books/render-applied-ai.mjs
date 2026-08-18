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
  const source = `${contract.assetHrefRoot}/${block.reviewFile}`;
  return `<figure class="book-figure" id="${block.id.toLowerCase()}">
    <div class="figure-coordinate"><span>${escapeHtml(block.id)}</span><b>${escapeHtml(chapter.part.title)}</b></div>
    ${block.preludeHtml ? `<div class="figure-prelude">${block.preludeHtml}</div>` : ''}
    <div class="figure-stage${block.preludeHtml ? ' figure-stage--with-prelude' : ''}"><img src="${source}" alt="${block.alt}" /></div>
    <figcaption>${block.captionHtml}</figcaption>
    <div class="figure-reading"><span>MODEL READING</span><p>${inlineHtml(registry.alt)}</p></div>
    <div class="figure-boundary"><span>EVIDENCE LIMIT</span><p>This explanatory model supports the chapter argument. It does not replace observed behavior, evaluation evidence, named authority, or the operating record.</p></div>
  </figure>`;
}

function renderBlock(block, contract, chapter) {
  if (block.type === 'heading') {
    const level = Math.min(Math.max(block.level, 2), 4);
    const consequential = /gate|exercise|decision|stop|failure|release|authority|review/i.test(block.text);
    return `<h${level} class="section-heading${consequential ? ' section-heading--decision' : ''}">${block.html}</h${level}>`;
  }
  if (block.type === 'paragraph') return `<p>${block.html}</p>`;
  if (block.type === 'quote') return `<blockquote><span>BEHAVIOR ASSERTION</span><p>${block.html}</p></blockquote>`;
  if (block.type === 'list') return renderList(block);
  if (block.type === 'table') return renderTable(block);
  if (block.type === 'code') return `<div class="artifact-code"><span>${escapeHtml(block.language || 'SYSTEM ARTIFACT')}</span><pre><code>${escapeHtml(block.text)}</code></pre></div>`;
  if (block.type === 'figure') return renderFigure(block, contract, chapter);
  if (block.type === 'rule') return '<hr class="route-rule" />';
  throw new Error(`Unsupported semantic block: ${block.type}`);
}

function renderOpeningMatter(contract) {
  const groups = contract.parts.map((part) => {
    const chapters = contract.chapters.filter((chapter) => chapter.part.number === part.number);
    return `<section class="contents-part"><header><span>SYSTEM ${part.roman}</span><b>${escapeHtml(part.title)}</b></header>${chapters.map((chapter) => `<a href="#chapter-${pad(chapter.order)}"><span>${pad(chapter.order)}</span><b>${escapeHtml(chapter.title)}</b><small>${chapter.minutes} min</small></a>`).join('')}</section>`;
  }).join('');

  return `<section class="page--full cover">
    <div class="cover-coordinate">BEHAVIOR SYSTEMS / ATLAS 01</div>
    <div class="cover-kicker">KOMAL NAKRANI / APPLIED INTELLIGENCE SERIES</div>
    <h1>${escapeHtml(contract.title)}</h1>
    <p class="cover-subtitle">${escapeHtml(contract.subtitle)}</p>
    <div class="cover-spectrum"><i></i><i></i><i></i><i></i><i></i></div>
    <div class="cover-author">${escapeHtml(contract.author)}</div>
    <div class="review-stamp">SCREEN-FIRST<br>REVIEW EDITION</div>
  </section>
  <section class="page--full opening-statement">
    <div class="opening-index">AI</div>
    <div class="eyebrow">${escapeHtml(contract.visualSystem)}</div>
    <h2>Read the product as a behavior system</h2>
    <p>Move from task and contract through mechanism, evidence, operation, and controlled change without mistaking capability for dependable behavior.</p>
    <p class="review-note">${escapeHtml(contract.reviewLabel)}.</p>
    <div class="mode-grid"><article><span>FRAME</span><p>Name the task, consequence, and behavior contract before choosing a mechanism.</p></article><article><span>TRACE</span><p>Follow evidence across data, context, system boundaries, evaluation, and operation.</p></article><article><span>DECIDE</span><p>Use consequence coral only where judgment changes exposure, authority, or the next experiment.</p></article></div>
  </section>
  <section class="page--full title-page">
    <div class="eyebrow">BEHAVIOR SYSTEMS ATLAS / 01</div>
    <h1>${escapeHtml(contract.title)}</h1>
    <p>${escapeHtml(contract.subtitle)}</p>
    <div class="title-author"><b>${escapeHtml(contract.author)}</b><span>First edition, version ${escapeHtml(contract.edition.version)} (${contract.edition.copyrightYear})</span></div>
  </section>
  <section class="page--full edition-page">
    <div><div class="eyebrow">EDITION / AUTHORSHIP / BOUNDARY</div><h2>Edition and authorship record</h2><p>Copyright (c) ${contract.edition.copyrightYear} ${escapeHtml(contract.author)}. All rights reserved except where separately stated for cited sources or companion dependencies.</p><p>This book is original. Patchwork and all constructed satellite scenarios are fictional and do not represent customer or employer outcomes.</p></div>
    <aside><span>AUTHOR</span><b>${escapeHtml(contract.author)}</b><span>REVIEW FORMAT</span><b>7 x 10 in / screen-first</b><span>PUBLIC STATE</span><b>Published edition unchanged</b></aside>
    <div class="boundary-card"><span>PROFESSIONAL BOUNDARY</span><p>This book is technical and professional education, not formal legal, security, privacy, safety, accessibility, audit, medical, financial, regulatory, or compliance advice. Designated authorities retain formal decisions.</p></div>
  </section>
  <section class="page--full how-to"><div class="eyebrow">FRAME / TRACE / TEST / OPERATE / CHANGE</div><h2>How to use this atlas</h2><ol>${contract.parts.map((part) => `<li><span>${pad(part.number)}</span><div><b>${escapeHtml(part.title)}</b><p>${escapeHtml(part.range)} build one connected layer of the product behavior system.</p></div></li>`).join('')}</ol><div class="field-note"><span>LAB PRACTICE</span><p>Use the learning packs and deterministic Patchwork companion as professional practice. They do not constitute a live certification bank or production evidence.</p></div></section>
  <section class="page--full legend"><div class="eyebrow">COLOR SUPPORTS THE LABEL; IT NEVER REPLACES IT</div><h2>Read the system marks</h2><div class="legend-list"><article><span class="mark evidence">E</span><div><b>EVIDENCE</b><p>A source, observation, result, or artifact whose limits remain visible.</p></div></article><article><span class="mark decision">D</span><div><b>DISPOSITION</b><p>A build, revise, limit, reject, investigate, release, or stop decision.</p></div></article><article><span class="mark warning">!</span><div><b>CONSEQUENCE</b><p>A condition that changes risk, scope, exposure, or required authority.</p></div></article><article><span class="mark coordinate">B</span><div><b>BEHAVIOR STATE</b><p>The current required, allowed, uncertain, degraded, or prohibited state.</p></div></article><article><span class="mark handoff">→</span><div><b>NEXT EXPERIMENT</b><p>The evidence and owner required before the system can advance.</p></div></article></div></section>
  <nav class="contents-route page--flow" aria-label="Contents"><div class="eyebrow">21 CHAPTERS / SIX SYSTEM LAYERS / COMPLETE RECORDS</div><h2>Behavior system map</h2>${groups}<section class="contents-part contents-part--appendix"><header><span>REFERENCE SYSTEM</span><b>Appendices</b></header>${contract.appendices.map((appendix) => `<a href="#appendix-${appendix.id.toLowerCase()}"><span>${appendix.id}</span><b>${escapeHtml(appendix.title)}</b></a>`).join('')}</section></nav>`;
}

function renderPart(part, blocks) {
  const paragraphs = blocks.filter((block) => block.type === 'paragraph').map((block) => `<p>${block.html}</p>`).join('');
  return `<section class="part-opener page--full" id="part-${part.number}"><div class="part-number">${part.roman}</div><div class="eyebrow">SYSTEM ${part.roman} / ${escapeHtml(part.range)}</div><h2>${escapeHtml(part.title)}</h2><div class="part-copy">${paragraphs}</div><div class="part-route"><span>FRAME</span><i></i><span>TEST</span><i></i><span>DECIDE</span></div></section>`;
}

function renderChapter(contract, chapter) {
  const figures = chapter.figures.map((figure) => ({ ...figure, reviewFile: figure.file }));
  const blocks = parsePublicationMarkdown(chapter.source, { figures });
  const claimIds = contract.claims.filter((claim) => claim.chapterSlug === chapter.slug).map((claim) => claim.id);
  const body = blocks.map((block, index) => {
    const next = blocks[index + 1];
    const previous = blocks[index - 1];
    if (block.type === 'heading' && next?.type === 'figure') return '';
    if (block.type === 'figure' && previous?.type === 'heading') return renderBlock({ ...block, preludeHtml: previous.html }, contract, chapter);
    return renderBlock(block, contract, chapter);
  }).join('\n');
  const progress = chapter.order / contract.chapters.length;
  return `<section class="chapter-coordinate page--full" id="chapter-${pad(chapter.order)}">
    <div class="coordinate-orbit"><span>${pad(chapter.order)}</span></div>
    <div class="eyebrow">CHAPTER ${pad(chapter.order)} / ${escapeHtml(chapter.part.title)}</div>
    <h2>${escapeHtml(chapter.title)}</h2>
    <p class="chapter-summary">${escapeHtml(chapter.summary)}</p>
    <div class="chapter-contract"><div><span>READING TIME</span><b>${chapter.minutes} minutes</b></div><div><span>EVIDENCE</span><b>${claimIds.length} registered claims</b></div><div><span>MODELS</span><b>${chapter.figures.map((figure) => figure.id).join(' / ')}</b></div></div>
    <div class="chapter-route"><span>SYSTEM ${chapter.part.roman}</span><i style="--route-progress:${progress}"></i><span>${pad(chapter.order)} / ${contract.chapters.length}</span></div>
  </section>
  <article class="chapter-body" data-chapter="${pad(chapter.order)}" data-title="${escapeHtml(chapter.title)}">
    <header class="body-entry"><span>BEHAVIOR LAB ${pad(chapter.order)}.${String.fromCharCode(64 + chapter.part.number)}</span><b>${escapeHtml(chapter.title)}</b></header>
    ${body}
    <footer class="chapter-handoff"><span>NEXT SYSTEM STATE</span><p>${chapter.order < contract.chapters.length ? `Carry the accepted evidence, limitations, and open decisions into Chapter ${pad(chapter.order + 1)}: ${escapeHtml(contract.chapters[chapter.order].title)}.` : 'Close the recursive loop through the final dossier, source record, reusable seams, and named next owners.'}</p></footer>
  </article>`;
}

function renderAppendix(contract, appendix) {
  const blocks = parsePublicationMarkdown(appendix.source).filter((block, index) => !(index === 0 && block.type === 'heading' && block.level === 1));
  const chapterShape = { slug: `appendix-${appendix.id.toLowerCase()}`, title: appendix.title, part: { title: 'Reference System' }, figures: [] };
  return `<section class="appendix-opener page--full" id="appendix-${appendix.id.toLowerCase()}"><div class="eyebrow">REFERENCE MODULE / APPENDIX ${appendix.id}</div><h2>${escapeHtml(appendix.title)}</h2><p>Use this module with the relevant behavior clause, evidence record, named owner, explicit authority, and current limitation.</p><div class="appendix-coordinate">${appendix.id}</div></section><article class="appendix-body">${blocks.map((block) => renderBlock(block, contract, chapterShape)).join('\n')}</article>`;
}

function renderRegisters(contract) {
  const sourceItems = contract.sources.map((source) => `<article><span>${escapeHtml(source.id)}</span><div><b>${escapeHtml(source.title)}</b><p>${escapeHtml(source.publisher)}${source.publishedAt ? ` / ${escapeHtml(source.publishedAt)}` : ''}</p><a href="${escapeHtml(source.url)}">${escapeHtml(source.url)}</a></div></article>`).join('');
  const claimItems = contract.claims.map((claim) => `<article><span>${escapeHtml(claim.id)}</span><div><b>${escapeHtml(claim.chapterSlug)}</b><p>${escapeHtml(claim.statement)}</p><small>${claim.sourceIds.map(escapeHtml).join(' / ')}</small></div></article>`).join('');
  const figureItems = contract.figures.map((figure) => `<article><span>${escapeHtml(figure.id)}</span><div><b>${escapeHtml(stripMarkup(figure.caption.split(/[-—]/)[0]))}</b><p>${escapeHtml(figure.alt)}</p><small>${escapeHtml(figure.chapterSlug)} / PNG publication asset / original Komal synthesis</small></div></article>`).join('');
  return `<section class="register-opener page--full"><div class="eyebrow">TRACEABILITY / ACCESSIBLE READING</div><h2>Sources, claims, models, and edition records</h2><p>These records preserve what supports each statement, where every explanatory model belongs, and which limitations travel with the edition.</p><div class="record-counts"><article><b>${contract.sources.length}</b><span>SOURCES</span></article><article><b>${contract.claims.length}</b><span>CLAIMS</span></article><article><b>${contract.figures.length}</b><span>MODELS</span></article></div></section>
  <section class="source-register register"><div class="eyebrow">SOURCE REGISTER</div><h2>Source use remains visible</h2>${sourceItems}</section>
  <section class="claim-register register"><div class="eyebrow">CLAIM REGISTER</div><h2>Claims remain bound to chapters and sources</h2>${claimItems}</section>
  <section class="figure-register register"><div class="eyebrow">MODEL AND ACCESSIBILITY REGISTER</div><h2>Every explanatory visual has a reading alternative</h2>${figureItems}</section>`;
}

function renderClosing(contract) {
  return `<section class="author-page page--full"><div class="author-mark">KN</div><div class="eyebrow">AUTHOR / ORIGINAL PROFESSIONAL EDUCATION</div><h2>${escapeHtml(contract.author)}</h2><p>${escapeHtml(contract.author)} is the author of <em>${escapeHtml(contract.title)}</em>. This edition is built to help practicing and aspiring technical professionals reason from user task through dependable combined-system behavior.</p><p>The companion and learning materials are independent practice resources. They are not certification exams or production evidence.</p><b>${escapeHtml(contract.author)}</b></section>
  <section class="closing page--full"><div class="eyebrow">END OF ATLAS / RETURN TO THE BEHAVIOR CONTRACT</div><h2>${escapeHtml(contract.closingStatement)}</h2><p>An applied AI product earns trust when its behavior, evidence, limitations, authority, operation, and change history remain visible after the demo is over.</p><div class="closing-author">${escapeHtml(contract.author)}</div><div class="closing-route"><i></i><i></i><i></i></div></section>`;
}

export function renderAppliedAiHtml(contract) {
  const baseCss = readStyle('theme-base.css');
  const sharedLayoutCss = readStyle('books/forward-deployed-engineering.css');
  const bookCss = readStyle('books/applied-ai-engineering.css');
  const introductions = partIntroductionMap(contract.partIntroductions.source);
  const chapters = [];
  for (const part of contract.parts) {
    chapters.push(renderPart(part, introductions.get(part.roman) ?? []));
    for (const chapter of contract.chapters.filter((candidate) => candidate.part.number === part.number)) chapters.push(renderChapter(contract, chapter));
  }
  return `<!doctype html><html lang="en" data-book="${escapeHtml(contract.slug)}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(contract.title)} - Screen-First Review</title><style>${baseCss}\n${sharedLayoutCss}\n${bookCss}</style></head><body><main>${renderOpeningMatter(contract)}${chapters.join('')}${contract.appendices.map((appendix) => renderAppendix(contract, appendix)).join('')}${renderRegisters(contract)}${renderClosing(contract)}</main></body></html>`;
}
