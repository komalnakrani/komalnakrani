#!/usr/bin/env python3
"""Build a deterministic PDF from one validated Komal publication directory."""

from __future__ import annotations

import argparse
import hashlib
import html
import json
import re
from pathlib import Path

from pypdf import PdfReader
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas
from reportlab.platypus import (
    PageBreak,
    Paragraph,
    Preformatted,
    SimpleDocTemplate,
    Spacer,
)


INK = colors.HexColor("#121212")
MUTED = colors.HexColor("#5f5f5f")
ACCENT = colors.HexColor("#2c4a6e")
LINE = colors.HexColor("#d1d1d1")


def load_json(file: Path) -> dict:
    return json.loads(file.read_text(encoding="utf-8"))


def manuscript_body(raw: str) -> str:
    if not raw.startswith("---\n"):
        return raw
    closing = raw.find("\n---\n", 4)
    if closing == -1:
        raise ValueError("MDX frontmatter is not closed")
    return raw[closing + 5 :]


def inline_markup(text: str) -> str:
    escaped = html.escape(text.strip())
    escaped = re.sub(r"`([^`]+)`", r'<font name="Courier">\1</font>', escaped)
    escaped = re.sub(r"\*\*([^*]+)\*\*", r"<b>\1</b>", escaped)
    escaped = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"<i>\1</i>", escaped)
    return escaped


def markdown_flowables(raw: str, styles: dict) -> list:
    lines = manuscript_body(raw).splitlines()
    story: list = []
    paragraph: list[str] = []
    code: list[str] = []
    in_code = False

    def flush_paragraph() -> None:
        if paragraph:
            story.append(Paragraph(inline_markup(" ".join(paragraph)), styles["BodyText"] ))
            story.append(Spacer(1, 3 * mm))
            paragraph.clear()

    def flush_code() -> None:
        if code:
            story.append(Preformatted("\n".join(code), styles["KomalCode"]))
            story.append(Spacer(1, 3 * mm))
            code.clear()

    for line in lines:
        if line.startswith("```"):
            flush_paragraph()
            if in_code:
                flush_code()
            in_code = not in_code
            continue
        if in_code:
            code.append(line)
            continue
        if not line.strip():
            flush_paragraph()
            continue
        heading = re.match(r"^(#{1,3})\s+(.+)$", line)
        if heading:
            flush_paragraph()
            level = len(heading.group(1))
            story.append(Spacer(1, (8 if level == 2 else 5) * mm))
            story.append(Paragraph(inline_markup(heading.group(2)), styles[f"Heading{level}"]))
            story.append(Spacer(1, 2.5 * mm))
            continue
        bullet = re.match(r"^[-*]\s+(.+)$", line)
        if bullet:
            flush_paragraph()
            story.append(Paragraph(f"- {inline_markup(bullet.group(1))}", styles["KomalBullet"]))
            continue
        if line.startswith("> "):
            flush_paragraph()
            story.append(Paragraph(inline_markup(line[2:]), styles["KomalQuote"]))
            story.append(Spacer(1, 2 * mm))
            continue
        paragraph.append(line.strip())

    flush_paragraph()
    flush_code()
    return story


class DeterministicCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        kwargs["invariant"] = 1
        kwargs["pageCompression"] = 1
        super().__init__(*args, **kwargs)


def source_digest(files: list[Path], root: Path) -> str:
    digest = hashlib.sha256()
    for file in sorted(files, key=lambda item: item.relative_to(root).as_posix()):
        relative = file.relative_to(root).as_posix().encode("utf-8")
        digest.update(relative + b"\0" + file.read_bytes() + b"\0")
    return digest.hexdigest()


def build(publication_dir: Path, output_dir: Path) -> dict:
    manifest = load_json(publication_dir / "publication.json")
    sources = load_json(publication_dir / manifest["registries"]["sources"])["sources"]
    errata = load_json(publication_dir / manifest["registries"]["errata"])["errata"]
    output_dir.mkdir(parents=True, exist_ok=True)
    output_file = output_dir / manifest["pdf"]["filename"]

    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name="TitleCustom", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=28, leading=31, textColor=INK, alignment=TA_CENTER, spaceAfter=7 * mm))
    styles.add(ParagraphStyle(name="Subtitle", parent=styles["Normal"], fontName="Helvetica", fontSize=13, leading=18, textColor=MUTED, alignment=TA_CENTER))
    styles["Heading1"].fontName = "Helvetica-Bold"
    styles["Heading1"].fontSize = 23
    styles["Heading1"].leading = 27
    styles["Heading1"].textColor = INK
    styles["Heading2"].fontName = "Helvetica-Bold"
    styles["Heading2"].fontSize = 16
    styles["Heading2"].leading = 20
    styles["Heading2"].textColor = ACCENT
    styles["Heading3"].fontName = "Helvetica-Bold"
    styles["Heading3"].fontSize = 12
    styles["Heading3"].leading = 15
    styles["BodyText"].fontName = "Helvetica"
    styles["BodyText"].fontSize = 10.5
    styles["BodyText"].leading = 16
    styles["BodyText"].textColor = INK
    styles.add(ParagraphStyle(name="KomalBullet", parent=styles["BodyText"], leftIndent=5 * mm, firstLineIndent=-4 * mm, spaceAfter=1.5 * mm))
    styles.add(ParagraphStyle(name="KomalQuote", parent=styles["BodyText"], leftIndent=7 * mm, borderColor=ACCENT, borderWidth=1, borderPadding=(1 * mm, 0, 1 * mm, 4 * mm), textColor=MUTED))
    styles.add(ParagraphStyle(name="KomalCode", parent=styles["Code"], fontName="Courier", fontSize=8.5, leading=11, backColor=colors.HexColor("#eeeeee"), borderPadding=3 * mm))

    document = SimpleDocTemplate(
        str(output_file),
        pagesize=A4,
        leftMargin=23 * mm,
        rightMargin=23 * mm,
        topMargin=22 * mm,
        bottomMargin=20 * mm,
        title=manifest["title"],
        author=manifest["author"],
        subject=manifest["description"],
        creator="Komal deterministic publication pipeline",
    )

    story = [
        Spacer(1, 34 * mm),
        Paragraph(html.escape(manifest["series"]["title"]).upper(), styles["Heading3"]),
        Spacer(1, 8 * mm),
        Paragraph(html.escape(manifest["title"]), styles["TitleCustom"]),
        Paragraph(html.escape(manifest["subtitle"]), styles["Subtitle"]),
        Spacer(1, 30 * mm),
        Paragraph(html.escape(manifest["author"]), styles["Subtitle"]),
        Spacer(1, 4 * mm),
        Paragraph(
            html.escape(f'{manifest["edition"]["label"]} - Version {manifest["edition"]["version"]}'),
            styles["Subtitle"],
        ),
        PageBreak(),
        Paragraph("Contents", styles["Heading1"]),
        Spacer(1, 4 * mm),
    ]
    for chapter in manifest["chapters"]:
        story.append(Paragraph(f'{chapter["order"]}. {html.escape(chapter["title"])}', styles["BodyText"]))
        story.append(Spacer(1, 1.5 * mm))

    for chapter in manifest["chapters"]:
        story.extend([PageBreak(), Paragraph(html.escape(chapter["title"]), styles["Heading1"]), Paragraph(html.escape(chapter["summary"]), styles["KomalQuote"]), Spacer(1, 4 * mm)])
        story.extend(markdown_flowables((publication_dir / chapter["sourceFile"]).read_text(encoding="utf-8"), styles))

    story.extend([PageBreak(), Paragraph("Sources", styles["Heading1"]), Spacer(1, 3 * mm)])
    for source in sources:
        author_text = ", ".join(source["authors"])
        citation = f'<b>{html.escape(source["id"])}</b> - {html.escape(author_text)}. {html.escape(source["title"])}. {html.escape(source["publisher"])}. {html.escape(source["url"])} (accessed {html.escape(source["accessedAt"])}).'
        story.append(Paragraph(citation, styles["BodyText"]))
        story.append(Spacer(1, 2.5 * mm))

    story.extend([PageBreak(), Paragraph("Edition record", styles["Heading1"]), Spacer(1, 3 * mm)])
    edition_lines = [
        f'Version: {manifest["edition"]["version"]}',
        f'Published: {manifest["edition"]["publishedAt"]}',
        f'Canonical URL: {manifest["edition"]["canonicalUrl"]}',
        f'Recorded errata: {len(errata)}',
    ]
    for line in edition_lines:
        story.append(Paragraph(html.escape(line), styles["BodyText"]))

    def page_frame(pdf_canvas, doc):
        pdf_canvas.saveState()
        pdf_canvas.setStrokeColor(LINE)
        pdf_canvas.line(23 * mm, 15 * mm, A4[0] - 23 * mm, 15 * mm)
        pdf_canvas.setFont("Helvetica", 8)
        pdf_canvas.setFillColor(MUTED)
        pdf_canvas.drawString(23 * mm, 10 * mm, manifest["title"])
        pdf_canvas.drawRightString(A4[0] - 23 * mm, 10 * mm, str(doc.page))
        pdf_canvas.restoreState()

    document.build(story, onFirstPage=page_frame, onLaterPages=page_frame, canvasmaker=DeterministicCanvas)

    input_files = [
        publication_dir / "publication.json",
        publication_dir / manifest["registries"]["sources"],
        publication_dir / manifest["registries"]["claims"],
        publication_dir / manifest["registries"]["figures"],
        publication_dir / manifest["registries"]["errata"],
        *[publication_dir / chapter["sourceFile"] for chapter in manifest["chapters"]],
    ]
    record = {
        "schemaVersion": 1,
        "publication": manifest["slug"],
        "editionVersion": manifest["edition"]["version"],
        "generatedAt": manifest["edition"]["publishedAt"],
        "file": output_file.name,
        "sourceSha256": source_digest(input_files, publication_dir),
        "pdfSha256": hashlib.sha256(output_file.read_bytes()).hexdigest(),
        "pageCount": len(PdfReader(str(output_file)).pages),
    }
    record_file = output_dir / f'{output_file.name}.manifest.json'
    record_file.write_text(json.dumps(record, indent=2, sort_keys=True) + "\n", encoding="utf-8")
    print(json.dumps({"pdf": str(output_file), "manifest": str(record_file), **record}, sort_keys=True))
    return record


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--publication-dir", required=True, type=Path)
    parser.add_argument("--output-dir", required=True, type=Path)
    arguments = parser.parse_args()
    build(arguments.publication_dir.resolve(), arguments.output_dir.resolve())


if __name__ == "__main__":
    main()
