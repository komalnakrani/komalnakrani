from __future__ import annotations

import hashlib
import json
import subprocess
import sys
from pathlib import Path

from pypdf import PdfReader


REPO_ROOT = Path(__file__).resolve().parents[2]
PUBLISHED_MANIFEST = REPO_ROOT / "content/publications/forward-deployed-engineering/publication.json"
PUBLISHED_PDF = REPO_ROOT / "public/downloads/forward-deployed-engineering-v1.0.0.pdf"
EXPECTED_PUBLISHED_HASHES = {
    PUBLISHED_MANIFEST: "d35f7a1198961f7c6d0da6bb86af581bdcc01dae89f0b0e9908bfa470f53d7fb",
    PUBLISHED_PDF: "96b5bce887d315ceb5390287eb693b0ead4b9ed3328470913c9dd07f9a91b050",
}


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def publication_changed() -> bool:
    for path, expected in EXPECTED_PUBLISHED_HASHES.items():
        if not path.exists() or sha256(path) != expected:
            return True
    status = subprocess.run(
        ["git", "status", "--porcelain", "--", str(PUBLISHED_MANIFEST), str(PUBLISHED_PDF)],
        cwd=REPO_ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    return bool(status.stdout.strip())


def run_qa(pdf_path: Path) -> dict[str, object]:
    if not pdf_path.exists():
        raise FileNotFoundError(pdf_path)

    reader = PdfReader(str(pdf_path))
    metadata = reader.metadata or {}
    page_text = [(page.extract_text() or "").strip() for page in reader.pages]
    combined = "\n".join(page_text)
    normalized_text = " ".join(combined.split())
    compact_text = "".join(combined.split())
    empty_pages = [index + 1 for index, text in enumerate(page_text) if len(text) < 20]
    wrong_sizes = []
    for index, page in enumerate(reader.pages):
        width = round(float(page.mediabox.width), 2)
        height = round(float(page.mediabox.height), 2)
        if abs(width - 504) > 0.1 or abs(height - 720) > 0.1:
            wrong_sizes.append({"page": index + 1, "width": width, "height": height})

    expected_phrases = [
        "Forward Deployed Engineering",
        "Komal Nakrani",
        "Draw the Real System Boundary",
        "CUSTOMER WORKFLOW",
        "EVIDENCE BOUNDARY",
        "DEPLOYED SERVICE",
        "EXTERNAL AUTHORITY",
        "Leave the system more legible than you found it.",
    ]
    missing_phrases = [
        phrase for phrase in expected_phrases if "".join(phrase.split()) not in compact_text
    ]
    forbidden_titles = [
        "Zebra Learn",
        "51 Trading Strategies",
        "Money Smart in Your 20s",
        "Fundraising Decoded",
        "The Industry Handbook",
    ]
    forbidden_hits = [title for title in forbidden_titles if title.lower() in normalized_text.lower()]

    font_report = subprocess.run(
        ["pdffonts", str(pdf_path)],
        check=True,
        capture_output=True,
        text=True,
    ).stdout
    missing_fonts = [
        font for font in ["BarlowCondensed", "IBMPlexMono", "SourceSans3"] if font not in font_report
    ]

    errors = []
    if len(reader.pages) != 24:
        errors.append(f"expected 24 pages, found {len(reader.pages)}")
    if metadata.get("/Title") != "Forward Deployed Engineering - Screen-First Design Proof":
        errors.append("title metadata mismatch")
    if metadata.get("/Author") != "Komal Nakrani":
        errors.append("author metadata mismatch")
    if reader.is_encrypted:
        errors.append("proof must not be encrypted")
    if empty_pages:
        errors.append(f"empty or suspiciously sparse pages: {empty_pages}")
    if wrong_sizes:
        errors.append(f"wrong page sizes: {wrong_sizes}")
    if missing_phrases:
        errors.append(f"missing expected phrases: {missing_phrases}")
    if forbidden_hits:
        errors.append(f"reference-book text leaked into proof: {forbidden_hits}")
    if "\ufffd" in combined:
        errors.append("replacement glyph detected")
    if missing_fonts:
        errors.append(f"missing embedded proof fonts: {missing_fonts}")
    changed = publication_changed()
    if changed:
        errors.append("published Forward Deployed Engineering edition changed")

    return {
        "status": "PASS" if not errors else "FAIL",
        "errors": errors,
        "path": str(pdf_path.resolve()),
        "sha256": sha256(pdf_path),
        "bytes": pdf_path.stat().st_size,
        "pages": len(reader.pages),
        "pageSizePoints": [504, 720],
        "title": metadata.get("/Title"),
        "author": metadata.get("/Author"),
        "emptyPages": empty_pages,
        "wrongPageSizes": wrong_sizes,
        "missingPhrases": missing_phrases,
        "forbiddenReferenceHits": forbidden_hits,
        "missingFonts": missing_fonts,
        "publishedEditionChanged": changed,
        "extractedCharacters": len(combined),
    }


if __name__ == "__main__":
    if len(sys.argv) != 2:
        raise SystemExit("Usage: qa.py PROOF.pdf")
    report = run_qa(Path(sys.argv[1]))
    print(json.dumps(report, indent=2, sort_keys=True))
    if report["status"] != "PASS":
        raise SystemExit(1)
