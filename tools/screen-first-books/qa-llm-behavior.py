from __future__ import annotations

import hashlib
import json
import subprocess
import sys
from pathlib import Path

from pypdf import PdfReader


REPO_ROOT = Path(__file__).resolve().parents[2]
PROTECTED = {
    REPO_ROOT / "content/publications/llm-behavior-engineering/publication.json":
        "43d0d2b3a23edd27ae79937757131f0cffe1600eb975f00968e6d48c6495f4dc",
    REPO_ROOT / "public/downloads/llm-behavior-engineering-v1.0.0.pdf":
        "5cd5d16cd69c3c766fafa737812918cb1f37f34a91cb6753c7db044cd8c9375b",
}


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def audit(pdf: Path) -> dict[str, object]:
    reader = PdfReader(str(pdf))
    texts = [" ".join((page.extract_text() or "").split()) for page in reader.pages]
    joined = "\n".join(texts)
    sparse = [index + 1 for index, text in enumerate(texts) if len(text) < 40]
    wrong_sizes = []
    links = 0
    targetless = 0
    for index, page in enumerate(reader.pages):
        size = (round(float(page.mediabox.width), 2), round(float(page.mediabox.height), 2))
        if size != (504.0, 720.0):
            wrong_sizes.append({"page": index + 1, "size": size})
        for annotation in page.get("/Annots", []):
            link = annotation.get_object()
            if link.get("/Subtype") != "/Link":
                continue
            links += 1
            if not link.get("/Dest") and not link.get("/A"):
                targetless += 1

    fonts = subprocess.run(["pdffonts", str(pdf)], check=True, capture_output=True, text=True).stdout
    figure_ids = {f"FIG-{index:03d}" for index in range(1, 33) if f"FIG-{index:03d}" in joined}
    errors = []
    if sparse:
        errors.append(f"sparse pages: {sparse}")
    if wrong_sizes:
        errors.append(f"wrong page sizes: {wrong_sizes}")
    if reader.metadata.title != "LLM Behavior Engineering - Language Systems Studio - Screen-First Review":
        errors.append("title metadata mismatch")
    if reader.metadata.author != "Komal Nakrani":
        errors.append("author metadata mismatch")
    if reader.is_encrypted:
        errors.append("review PDF must not be encrypted")
    if len(reader.outline) != 33:
        errors.append("outline entry count mismatch")
    if "\ufffd" in joined:
        errors.append("replacement glyph found")
    if len(figure_ids) != 32:
        errors.append("figure identifier inventory mismatch")
    if targetless:
        errors.append(f"targetless links: {targetless}")
    for name in ("SourceSans3", "IBMPlexMono"):
        if name not in fonts:
            errors.append(f"missing embedded font: {name}")
    for path, expected in PROTECTED.items():
        if sha256(path) != expected:
            errors.append(f"protected published file changed: {path}")

    return {
        "status": "PASS" if not errors else "FAIL",
        "errors": errors,
        "path": str(pdf.resolve()),
        "sha256": sha256(pdf),
        "bytes": pdf.stat().st_size,
        "pages": len(reader.pages),
        "outlineEntries": len(reader.outline),
        "links": links,
        "targetlessLinks": targetless,
        "figureIdentifiers": len(figure_ids),
        "sparsePages": sparse,
        "wrongPageSizes": wrong_sizes,
        "extractedCharacters": sum(map(len, texts)),
    }


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("Usage: qa-llm-behavior.py REVIEW.pdf")
    result = audit(Path(sys.argv[1]))
    print(json.dumps(result, indent=2, sort_keys=True))
    if result["status"] != "PASS":
        raise SystemExit(1)
