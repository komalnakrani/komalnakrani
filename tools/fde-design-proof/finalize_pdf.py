from __future__ import annotations

import sys
from pathlib import Path

from pypdf import PdfReader, PdfWriter


def finalize_pdf(source: Path, destination: Path) -> None:
    reader = PdfReader(str(source))
    writer = PdfWriter()
    writer.append_pages_from_reader(reader)
    writer.add_metadata(
        {
            "/Title": "Forward Deployed Engineering - Screen-First Design Proof",
            "/Author": "Komal Nakrani",
            "/Subject": "Private screen-first publication design proof",
            "/Creator": "Komal Screen-First Publications HTML renderer",
            "/Producer": "Komal Screen-First Publications",
            "/Keywords": "forward deployed engineering, field expedition log, design proof",
        }
    )
    writer.page_mode = "/UseOutlines"
    destination.parent.mkdir(parents=True, exist_ok=True)
    with destination.open("wb") as stream:
        writer.write(stream)


if __name__ == "__main__":
    if len(sys.argv) != 3:
        raise SystemExit("Usage: finalize_pdf.py INPUT.pdf OUTPUT.pdf")
    finalize_pdf(Path(sys.argv[1]), Path(sys.argv[2]))
