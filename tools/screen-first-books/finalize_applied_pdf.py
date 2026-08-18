from __future__ import annotations

import json
import sys
from pathlib import Path

from pypdf import PdfReader, PdfWriter


def finalize_pdf(source: Path, destination: Path, outline_path: Path) -> None:
    reader = PdfReader(str(source))
    writer = PdfWriter()
    writer.append_pages_from_reader(reader)
    writer.add_metadata({
        "/Title": "Applied AI Engineering - Behavior Systems Atlas - Screen-First Review",
        "/Author": "Komal Nakrani",
        "/Subject": "Private complete screen-first review edition",
        "/Creator": "Komal Screen-First Publications HTML renderer",
        "/Producer": "Komal Screen-First Publications",
        "/Keywords": "applied AI engineering, behavior systems atlas, screen-first review",
    })
    page_text = [" ".join((page.extract_text() or "").split()).lower() for page in reader.pages]
    for item in json.loads(outline_path.read_text()):
        needle = " ".join(item["match"].split()).lower()
        page_number = next((index for index, text in enumerate(page_text) if needle in text), None)
        if page_number is not None:
            writer.add_outline_item(item["title"], page_number)
    writer.page_mode = "/UseOutlines"
    destination.parent.mkdir(parents=True, exist_ok=True)
    with destination.open("wb") as stream:
        writer.write(stream)


if __name__ == "__main__":
    if len(sys.argv) != 4:
        raise SystemExit("Usage: finalize_applied_pdf.py INPUT.pdf OUTPUT.pdf OUTLINE.json")
    finalize_pdf(Path(sys.argv[1]), Path(sys.argv[2]), Path(sys.argv[3]))
