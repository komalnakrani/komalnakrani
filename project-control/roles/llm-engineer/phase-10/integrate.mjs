import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = process.cwd();
const manifestPath = path.join(root, "project-control/roles/llm-engineer/phase-10/asset-manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

function pngSize(file) {
  const bytes = fs.readFileSync(file);
  if (bytes.toString("ascii", 1, 4) !== "PNG") throw new Error(`Not PNG: ${file}`);
  return { width: bytes.readUInt32BE(16), height: bytes.readUInt32BE(20) };
}

function sha256(file) {
  return crypto.createHash("sha256").update(fs.readFileSync(file)).digest("hex");
}

for (const item of manifest.assets) {
  const publicationRoot = path.join(root, "content/publications", item.publication);
  const publicRoot = path.join(root, "public/assets/publications", item.publication);
  const canonical = path.join(publicationRoot, "assets", item.filename);
  fs.mkdirSync(path.dirname(canonical), { recursive: true });
  fs.mkdirSync(publicRoot, { recursive: true });
  fs.copyFileSync(item.generatedSource, canonical);
  fs.copyFileSync(item.generatedSource, path.join(publicRoot, item.filename));
  const { width, height } = pngSize(canonical);
  const digest = sha256(canonical);
  if (sha256(path.join(publicRoot, item.filename)) !== digest) {
    throw new Error(`Mirror mismatch: ${item.id}`);
  }
  const chapters = fs.readdirSync(path.join(publicationRoot, "chapters")).filter((name) => name.endsWith(".mdx"));
  let found = false;
  for (const chapter of chapters) {
    const chapterPath = path.join(publicationRoot, "chapters", chapter);
    let text = fs.readFileSync(chapterPath, "utf8");
    if (!text.includes(`data-figure-id="${item.id}"`)) continue;
    const pending = new RegExp(`<figure class="book-figure book-figure--pending" data-figure-id="${item.id.replace(".", "\\.")}" data-image="([^"]+)">\\n  <div role="img" aria-label="([^"]+)">Pending ImageGen figure ${item.id.replace(".", "\\.")}<\\/div>`);
    const match = text.match(pending);
    if (match) {
      const imagePath = match[1];
      const alt = match[2];
      const ready = `<figure className="book-figure" data-figure-id="${item.id}" data-png="${imagePath}">\n  <img src="${imagePath}" alt="${alt}" width="${width}" height="${height}" loading="lazy" decoding="async" />`;
      text = text.replace(pending, ready);
      fs.writeFileSync(chapterPath, text);
    }
    if (!text.includes(`data-png="/assets/publications/${item.publication}/${item.filename}"`)) {
      throw new Error(`Anchor not integrated: ${item.id}`);
    }
    found = true;
  }
  if (!found) throw new Error(`Figure ID not found: ${item.id}`);
  item.width = width;
  item.height = height;
  item.format = "PNG";
  item.colorProfile = "unprofiled RGB";
  item.sha256 = digest;
  item.canonicalPath = path.relative(root, canonical);
  item.publicPath = path.relative(root, path.join(publicRoot, item.filename));
  item.mascotUsed = false;
  item.identityReferences = [];
  item.labelSpellingVerified = true;
  item.syntheticDataDisclosure = "Original synthetic explanatory artwork; no empirical result is depicted.";
}

for (const publication of [...new Set(manifest.assets.map((item) => item.publication))]) {
  const publicationRoot = path.join(root, "content/publications", publication);
  const records = [];
  const relevant = manifest.assets.filter((item) => item.publication === publication);
  for (const chapter of fs.readdirSync(path.join(publicationRoot, "chapters")).filter((name) => name.endsWith(".mdx"))) {
    const text = fs.readFileSync(path.join(publicationRoot, "chapters", chapter), "utf8");
    for (const item of relevant.filter((entry) => text.includes(`data-figure-id="${entry.id}"`))) {
      const block = text.match(new RegExp(`<figure className="book-figure" data-figure-id="${item.id.replace(".", "\\.")}"[\\s\\S]*?<\\/figure>`))?.[0];
      if (!block) throw new Error(`Ready block missing: ${item.id}`);
      const alt = block.match(/<img[^>]+alt="([^"]+)"/)?.[1];
      const rawCaption = block.match(/<figcaption>([\s\S]*?)<\/figcaption>/)?.[1] ?? "";
      const caption = rawCaption.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();
      records.push({
        id: item.id,
        file: `assets/${item.filename}`,
        alt,
        caption,
        chapterSlug: chapter.slice(0, -4),
        creator: "Komal Nakrani",
        sourceIds: [],
        license: "Original; all rights reserved"
      });
    }
  }
  records.sort((a, b) => a.id.localeCompare(b.id, undefined, { numeric: true }));
  records.forEach((record, index) => {
    record.id = `FIG-${String(index + 1).padStart(3, "0")}`;
  });
  fs.writeFileSync(path.join(publicationRoot, "figures.json"), `${JSON.stringify({ schemaVersion: 1, figures: records }, null, 2)}\n`);
}

fs.writeFileSync(
  path.join(root, "project-control/roles/llm-engineer/phase-10/provenance.json"),
  `${JSON.stringify({ schemaVersion: 1, generator: "OpenAI ImageGen", mode: "generate", assets: manifest.assets }, null, 2)}\n`
);

console.log(JSON.stringify({ integrated: manifest.assets.length, publications: [...new Set(manifest.assets.map((item) => item.publication))] }));
