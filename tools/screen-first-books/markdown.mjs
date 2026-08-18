import path from 'node:path';

export function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

export function inlineHtml(value) {
  let rendered = escapeHtml(value.trim());
  rendered = rendered.replace(/`([^`]+)`/g, '<code>$1</code>');
  rendered = rendered.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  rendered = rendered.replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em>$1</em>');
  rendered = rendered.replace(/\[([^\]]+)\]\((https?:\/\/[^)]+)\)/g, '<a href="$2">$1</a>');
  return rendered;
}

function manuscriptBody(raw) {
  if (!raw.startsWith('---\n')) return raw;
  const closing = raw.indexOf('\n---\n', 4);
  if (closing < 0) throw new Error('Publication front matter is not closed');
  return raw.slice(closing + 5);
}

function parseTable(lines) {
  const parsed = lines.map((line) => line.trim().replace(/^\||\|$/g, '').split('|').map((cell) => inlineHtml(cell)));
  const width = parsed[0]?.length ?? 0;
  if (width < 2 || parsed.some((row) => row.length !== width)) throw new Error('Malformed Markdown table');
  return { type: 'table', header: parsed[0], rows: parsed.slice(2) };
}

function parseFigure(block, context, consumedIds) {
  const image = block.match(/<img\s+[^>]*src="([^"]+)"[^>]*alt="([^"]*)"[^>]*>/s);
  const caption = block.match(/<figcaption>([\s\S]*?)<\/figcaption>/);
  if (!image || !caption) throw new Error('Malformed book figure block');
  const sourceFilename = path.basename(image[1]);
  const available = context.figures ?? [];
  let record = available.find((figure) => path.basename(figure.file ?? '') === sourceFilename && !consumedIds.has(figure.id));
  record ??= available.find((figure) => !consumedIds.has(figure.id));
  if (!record) throw new Error(`No review figure mapping for ${sourceFilename}`);
  consumedIds.add(record.id);
  const plainCaption = caption[1].replace(/<\/?strong>/g, '').trim();
  return {
    type: 'figure',
    id: record.id,
    reviewFile: record.reviewFile,
    sourceFilename,
    alt: escapeHtml(image[2]),
    captionHtml: inlineHtml(plainCaption),
  };
}

function isTableStart(lines, index) {
  return lines[index]?.trim().startsWith('|') && /^\|?\s*:?-+/.test(lines[index + 1]?.trim() ?? '');
}

function listMatch(line) {
  return line.match(/^(\s*)([-*]|\d+\.)\s+(.+)$/);
}

export function parsePublicationMarkdown(raw, context = {}) {
  const lines = manuscriptBody(raw).split(/\r?\n/);
  const blocks = [];
  const consumedFigureIds = new Set();
  let index = 0;

  while (index < lines.length) {
    const line = lines[index];
    if (!line.trim()) {
      index += 1;
      continue;
    }

    if (line.trim().startsWith('<figure')) {
      const figureLines = [line];
      index += 1;
      while (index < lines.length && !lines[index].includes('</figure>')) {
        figureLines.push(lines[index]);
        index += 1;
      }
      if (index < lines.length) figureLines.push(lines[index++]);
      blocks.push(parseFigure(figureLines.join('\n'), context, consumedFigureIds));
      continue;
    }

    if (line.startsWith('```')) {
      const language = line.slice(3).trim();
      const code = [];
      index += 1;
      while (index < lines.length && !lines[index].startsWith('```')) code.push(lines[index++]);
      if (index >= lines.length) throw new Error('Unclosed fenced code block');
      index += 1;
      blocks.push({ type: 'code', language, text: code.join('\n') });
      continue;
    }

    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      blocks.push({ type: 'heading', level: heading[1].length, html: inlineHtml(heading[2]), text: heading[2].trim() });
      index += 1;
      continue;
    }

    if (/^\s*---\s*$/.test(line)) {
      blocks.push({ type: 'rule' });
      index += 1;
      continue;
    }

    if (isTableStart(lines, index)) {
      const tableLines = [];
      while (index < lines.length && lines[index].trim().startsWith('|')) tableLines.push(lines[index++]);
      blocks.push(parseTable(tableLines));
      continue;
    }

    if (line.startsWith('> ')) {
      const quote = [];
      while (index < lines.length && lines[index].startsWith('> ')) quote.push(lines[index++].slice(2).trim());
      blocks.push({ type: 'quote', html: inlineHtml(quote.join(' ')) });
      continue;
    }

    if (listMatch(line)) {
      const first = listMatch(line);
      const ordered = /\d+\./.test(first[2]);
      const items = [];
      while (index < lines.length) {
        const match = listMatch(lines[index]);
        if (!match || /\d+\./.test(match[2]) !== ordered) break;
        items.push({ depth: Math.floor(match[1].replaceAll('\t', '  ').length / 2), html: inlineHtml(match[3]) });
        index += 1;
      }
      blocks.push({ type: 'list', ordered, items });
      continue;
    }

    const paragraph = [line.trim()];
    index += 1;
    while (index < lines.length) {
      const next = lines[index];
      if (!next.trim() || next.trim().startsWith('<figure') || next.startsWith('```') || /^(#{1,4})\s+/.test(next) || next.startsWith('> ') || listMatch(next) || isTableStart(lines, index) || /^\s*---\s*$/.test(next)) break;
      paragraph.push(next.trim());
      index += 1;
    }
    blocks.push({ type: 'paragraph', html: inlineHtml(paragraph.join(' ')) });
  }

  return blocks;
}
