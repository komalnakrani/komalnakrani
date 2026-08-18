import { createHash } from 'node:crypto';
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const packageRoot = path.dirname(fileURLToPath(import.meta.url));
const bookRoot = path.join(packageRoot, 'books/forward-deployed-engineering');
const productionPath = path.join(bookRoot, 'imagegen-production.json');

const spatialMotifs = [
  'layered architectural field model',
  'dimensional route and checkpoint model',
  'clear operational control-room model',
  'physical evidence objects connected by one luminous route',
  'isometric workflow landscape with bounded zones',
];

function figureTitle(figure) {
  return figure.caption.split(/[—-]/, 1)[0].trim();
}

export function buildFigurePrompt(figure, index) {
  return [
    `Create one premium landscape PNG explanatory illustration for ${figure.id}, ${figureTitle(figure)}.`,
    `Teaching intent: ${figure.alt}`,
    `Composition: ${spatialMotifs[index % spatialMotifs.length]}, with one unmistakable reading direction and strong foreground-midground-background depth.`,
    'Visual language: crisp realistic 3D editorial illustration, refined technical materials, subtle depth of field, confident composition, colorful but disciplined.',
    'Palette: midnight field blue, expedition cyan, signal orange, cool paper, deep ink, and mist blue. Orange marks only decisions, warnings, exceptions, or handoffs.',
    'Make the relationships self-explanatory through spatial grouping, paths, boundaries, gates, evidence objects, and contrast.',
    'Do not render paragraphs or small writing inside the image; precise essential labels will be overlaid as selectable book text.',
    'Use no mascot, no person unless a human decision or responsibility is essential to the concept, no generic robot, no logo or watermark.',
    'No decorative filler, no fake UI screenshot, no illegible microtext, no copied brand language.',
    'High resolution, sharp edges, professional educational publishing quality, generous clear zones for external labels.',
  ].join(' ');
}

function sha256(buffer) {
  return createHash('sha256').update(buffer).digest('hex');
}

function pngDimensions(buffer) {
  if (buffer.length < 24 || buffer.subarray(1, 4).toString('ascii') !== 'PNG') throw new Error('Asset is not a PNG');
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

export function loadVisualAssets() {
  if (!existsSync(productionPath)) throw new Error(`Missing ImageGen production record: ${productionPath}`);
  const parsed = JSON.parse(readFileSync(productionPath, 'utf8'));
  if (!Array.isArray(parsed.figures)) throw new Error('ImageGen production record must contain figures[]');
  return parsed.figures.map((record) => {
    const file = path.join(bookRoot, record.file);
    if (!existsSync(file)) throw new Error(`Missing canonical visual asset: ${file}`);
    const buffer = readFileSync(file);
    const dimensions = pngDimensions(buffer);
    const digest = sha256(buffer);
    if (record.sha256 !== digest) throw new Error(`Hash mismatch for ${record.id}`);
    if (record.width !== dimensions.width || record.height !== dimensions.height) throw new Error(`Dimension mismatch for ${record.id}`);
    return Object.freeze({ ...record, path: file, mime: 'image/png' });
  });
}
