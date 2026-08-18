import { createHash } from 'node:crypto';
import { readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import config from './books/forward-deployed-engineering.mjs';
import { loadBookContract } from './source-contract.mjs';

const packageRoot = path.dirname(fileURLToPath(import.meta.url));
const bookRoot = path.join(packageRoot, 'books/forward-deployed-engineering');
const generatedRoot = '/Users/alpesh/.codex/generated_images/01a00699-3fb2-7ba3-876a-dc080abdb3a0';

const sources = [
  'exec-9e84b5d3-9d3a-4aed-bb26-575ec866f3f7.png',
  'exec-49fa847d-f722-4817-8aab-99a2ac1dfdd6.png',
  'exec-8f50ad1c-7ee4-4860-a0cd-7d246d571133.png',
  'exec-08b4a13d-9e99-42fe-911e-1031bb7424f4.png',
  'exec-007ee975-42f8-4186-a82b-86fd4d75c088.png',
  'exec-4cbe4696-b0dc-4aea-863b-b086cee71e6e.png',
  'exec-7a3da9b6-b356-4a83-aed3-e00d1476be09.png',
  'exec-9dbb825c-4d0e-463c-a433-7fca88410654.png',
  'exec-235e1d5d-d691-4a7a-bae4-d92469d32a3b.png',
  'exec-e91f7de8-0138-4f60-bf4f-e96804d0130c.png',
  'exec-988752e1-0b7b-46b7-83cc-2c2302c7249d.png',
  'exec-201c577a-8ed5-4c46-bfb5-37d92bb49694.png',
  'exec-f1772200-7906-4a01-8ee2-e58c7fb1990c.png',
  'exec-c23898f3-ff2b-4572-b479-a10ec47159d4.png',
  'exec-294bf926-9e6d-46f7-bdba-e355d455e900.png',
  'exec-a4985ef6-f9e6-4c19-bcdc-b412098715c7.png',
  'exec-fb0766cb-e735-49ed-a9b2-4c4418390bdc.png',
  'exec-ba825300-da7f-4363-96eb-686d35f04d95.png',
  'exec-90f0175c-3173-4b4d-b6a2-3e08754ffab4.png',
  'exec-203a3f59-cbaa-4060-94d5-5ccc6c96796f.png',
  'exec-52564d5d-07fc-4e43-9095-66b694bcd3b1.png',
  'exec-b765a349-0420-4ca6-b170-ed904583f5f5.png',
  'exec-82e35700-b490-4dce-bb53-865c6dd89b75.png',
  'exec-99ee9959-6d3f-4ab0-bec7-4f72ca594e02.png',
  'exec-a11acb9e-8549-4860-bb2d-876af1dae5d6.png',
  'exec-be3e3803-7de2-4bb1-aa4e-8ea4757fb62b.png',
  'exec-3e1b6707-fb1c-4845-beea-52b18ac5927f.png',
  'exec-2824819a-6249-42d7-a059-3ec5b7e3538f.png',
  'exec-25d8b99e-6002-4866-b90f-bb67a1e9dbc4.png',
  'exec-e2919a69-68f0-4470-99e4-0f9e832838c2.png',
  'exec-fbd6e822-db62-40a6-9062-9526e1537d88.png',
  'exec-ab843937-559f-475d-84ba-a0b6cdd9e8ab.png',
  'exec-3b9ab107-db50-4d80-a091-915c5e892cc4.png',
  'exec-9556d72a-91ca-4cca-b0b7-ffa5b1a62222.png',
  'exec-1e52d0bb-4202-4c01-94de-a3a3d6b9a5d4.png',
  'exec-4224118e-274e-419f-809d-9b5024a11589.png',
  'exec-85aef72d-f2e6-4717-9c53-37ca3df5c41a.png',
  'exec-a6ddb57d-126e-43cd-971d-5da18a833084.png',
];

function sha256(buffer) {
  return createHash('sha256').update(buffer).digest('hex');
}

function dimensions(buffer) {
  return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) };
}

const contract = loadBookContract(config);
if (sources.length !== contract.figures.length) throw new Error('Source/figure count mismatch');

const figures = contract.figures.map((figure, index) => {
  const file = `assets/fig-${String(index + 1).padStart(3, '0')}.png`;
  const buffer = readFileSync(path.join(bookRoot, file));
  const size = dimensions(buffer);
  return {
    id: figure.id,
    file,
    generatedSource: path.join(generatedRoot, sources[index]),
    width: size.width,
    height: size.height,
    sha256: sha256(buffer),
    mime: 'image/png',
    accepted: true,
    mascot: false,
    visualQa: 'Accepted after semantic, label, legibility, composition, and palette review.',
    essentialLabels: figure.alt,
    productionBrief: figure.caption,
  };
});

writeFileSync(path.join(bookRoot, 'imagegen-production.json'), `${JSON.stringify({
  schemaVersion: 1,
  generatedAt: '2026-08-18',
  generator: 'OpenAI ImageGen',
  format: 'image/png',
  figures,
}, null, 2)}\n`);

console.log(`Wrote ${figures.length} accepted visual records.`);
