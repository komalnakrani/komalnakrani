from __future__ import annotations

import hashlib
import json
import subprocess
import sys
from pathlib import Path

from pypdf import PdfReader


REPO_ROOT = Path(__file__).resolve().parents[2]
MANIFEST = REPO_ROOT / "content/publications/forward-deployed-engineering/publication.json"
PUBLIC_PDF = REPO_ROOT / "public/downloads/forward-deployed-engineering-v1.0.0.pdf"
PROTECTED = {
    MANIFEST: "d35f7a1198961f7c6d0da6bb86af581bdcc01dae89f0b0e9908bfa470f53d7fb",
    PUBLIC_PDF: "96b5bce887d315ceb5390287eb693b0ead4b9ed3328470913c9dd07f9a91b050",
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
    sparse = [index + 1 for index, text in enumerate(texts) if len(text) < 80]
    wrong_sizes = []
    for index, page in enumerate(reader.pages):
        size = (round(float(page.mediabox.width), 2), round(float(page.mediabox.height), 2))
        if size != (504.0, 720.0):
            wrong_sizes.append({"page": index + 1, "size": size})
    fonts = subprocess.run(["pdffonts", str(pdf)], check=True, capture_output=True, text=True).stdout
    errors = []
    if sparse:
        errors.append(f"sparse continuation pages: {sparse}")
    if wrong_sizes:
        errors.append(f"wrong page sizes: {wrong_sizes}")
    if reader.metadata.title != "Forward Deployed Engineering - Field Expedition Log - Screen-First Review":
        errors.append("title metadata mismatch")
    if reader.metadata.author != "Komal Nakrani":
        errors.append("author metadata mismatch")
    if reader.is_encrypted:
        errors.append("review PDF must not be encrypted")
    if len(reader.outline) < 30:
        errors.append("outline is incomplete")
    if "\ufffd" in "\n".join(texts):
        errors.append("replacement glyph found")
    for name in ("BarlowCondensed", "IBMPlexMono", "SourceSans3"):
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
        "sparsePages": sparse,
        "wrongPageSizes": wrong_sizes,
        "extractedCharacters": sum(map(len, texts)),
    }


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("Usage: qa.py REVIEW.pdf")
    result = audit(Path(sys.argv[1]))
    print(json.dumps(result, indent=2, sort_keys=True))
    if result["status"] != "PASS":
        raise SystemExit(1)
