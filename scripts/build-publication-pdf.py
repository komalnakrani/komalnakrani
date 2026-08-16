#!/usr/bin/env python3
"""Build a complete deterministic Komal publication PDF and artifact manifest."""

from __future__ import annotations

import argparse
import hashlib
import html
import json
import re
from pathlib import Path

from pypdf import PdfReader
from reportlab.graphics.shapes import Drawing
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.pdfgen import canvas
from reportlab.platypus import (
    Image as FlowableImage,
    KeepTogether,
    LongTable,
    PageBreak,
    Paragraph,
    Preformatted,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)
from reportlab.platypus.tableofcontents import TableOfContents
from svglib.svglib import svg2rlg


INK = colors.HexColor("#121212")
INK_2 = colors.HexColor("#454545")
MUTED = colors.HexColor("#767676")
ACCENT = colors.HexColor("#2C4A6E")
ACCENT_INK = colors.HexColor("#1C3149")
TINT = colors.HexColor("#E7ECF2")
SURFACE = colors.HexColor("#F6F6F6")
LINE = colors.HexColor("#D1D1D1")
PAGE_WIDTH, PAGE_HEIGHT = A4
CONTENT_WIDTH = PAGE_WIDTH - 46 * mm
CONTENT_HEIGHT = PAGE_HEIGHT - 42 * mm
FIGURE_PATTERN = re.compile(r'<figure class="book-figure">([\s\S]*?)</figure>')


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
    escaped = html.escape(html.unescape(text.strip()))
    escaped = re.sub(r"`([^`]+)`", r'<font name="Courier">\1</font>', escaped)
    escaped = re.sub(r"\*\*([^*]+)\*\*", r"<b>\1</b>", escaped)
    escaped = re.sub(r"(?<!\*)\*([^*]+)\*(?!\*)", r"<i>\1</i>", escaped)
    escaped = re.sub(r"\[([^\]]+)\]\((https?://[^)]+)\)", r'<a href="\2" color="#2C4A6E">\1</a>', escaped)
    return escaped


def split_part_introductions(raw: str) -> list[tuple[str, str]]:
    parts = []
    matches = list(re.finditer(r"^## (Part [IVX]+ - .+)$", raw, flags=re.MULTILINE))
    for index, match in enumerate(matches):
        end = matches[index + 1].start() if index + 1 < len(matches) else len(raw)
        parts.append((match.group(1), raw[match.end() : end].strip()))
    return parts


def scaled_svg(file: Path, max_width: float = CONTENT_WIDTH, max_height: float = 115 * mm) -> Drawing:
    drawing = svg2rlg(str(file))
    if drawing is None or not drawing.width or not drawing.height:
        raise ValueError(f"Unable to parse SVG figure: {file}")
    scale = min(max_width / drawing.width, max_height / drawing.height)
    drawing.scale(scale, scale)
    drawing.width *= scale
    drawing.height *= scale
    return drawing


def scaled_figure(file: Path, max_width: float = CONTENT_WIDTH, max_height: float = 115 * mm):
    if file.suffix.lower() == ".svg":
        return scaled_svg(file, max_width=max_width, max_height=max_height)
    image = FlowableImage(str(file))
    image._restrictSize(max_width, max_height)
    return image


def table_flowable(rows: list[list[str]], styles: dict) -> LongTable:
    column_count = max(len(row) for row in rows)
    normalized = [row + [""] * (column_count - len(row)) for row in rows]
    style_name = "KomalTableCell" if column_count <= 4 else "KomalTableCellDense"
    header_name = "KomalTableHeader" if column_count <= 4 else "KomalTableHeaderDense"
    paragraph_rows = []
    for row_index, row in enumerate(normalized):
        paragraph_rows.append([Paragraph(inline_markup(cell), styles[header_name if row_index == 0 else style_name]) for cell in row])
    maxima = [max(len(row[index]) for row in normalized) for index in range(column_count)]
    weights = [max(1.0, min(2.4, value ** 0.5 / 4)) for value in maxima]
    total = sum(weights)
    widths = [CONTENT_WIDTH * weight / total for weight in weights]
    table = LongTable(paragraph_rows, colWidths=widths, repeatRows=1, hAlign="LEFT", splitByRow=1)
    table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), SURFACE),
        ("TEXTCOLOR", (0, 0), (-1, 0), MUTED),
        ("GRID", (0, 0), (-1, -1), 0.45, LINE),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 5),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#FBFBFB")]),
    ]))
    return table


def figure_flowables(block: str, publication_dir: Path, styles: dict) -> list:
    image = re.search(r'<img src="([^"]+)" alt="([^"]+)"', block)
    caption = re.search(r"<figcaption>(?:<strong>(.*?)</strong>\s*)?(.*?)</figcaption>", block, flags=re.DOTALL)
    if not image or not caption:
        raise ValueError("Malformed book figure block")
    filename = Path(image.group(1)).name
    figure_file = publication_dir / "assets" / filename
    drawing = scaled_figure(figure_file)
    lead = caption.group(1)
    caption_text = f"<b>{inline_markup(lead)}</b> {inline_markup(caption.group(2))}" if lead else inline_markup(caption.group(2))
    alternative = f'<b>Text alternative:</b> {inline_markup(image.group(2))}'
    return [KeepTogether([drawing, Spacer(1, 2.5 * mm), Paragraph(caption_text, styles["KomalCaption"]), Paragraph(alternative, styles["KomalFigureAlt"]), Spacer(1, 5 * mm)])]


def markdown_flowables(raw: str, styles: dict, publication_dir: Path, skip_first_heading: bool = False) -> list:
    source = manuscript_body(raw)
    lines = source.splitlines()
    story: list = []
    paragraph: list[str] = []
    code: list[str] = []
    in_code = False
    index = 0
    skipped_heading = False

    def flush_paragraph() -> None:
        if paragraph:
            story.append(Paragraph(inline_markup(" ".join(paragraph)), styles["BodyText"]))
            story.append(Spacer(1, 2.6 * mm))
            paragraph.clear()

    def flush_code() -> None:
        if code:
            story.append(KeepTogether([Preformatted("\n".join(code), styles["KomalCode"]), Spacer(1, 3 * mm)]))
            code.clear()

    while index < len(lines):
        line = lines[index]
        if line.startswith("```"):
            flush_paragraph()
            if in_code:
                flush_code()
            in_code = not in_code
            index += 1
            continue
        if in_code:
            code.append(line)
            index += 1
            continue
        if re.match(r"<figure(?:\s+[^>]*)?>", line.strip()):
            flush_paragraph()
            block_lines = [line]
            index += 1
            while index < len(lines):
                block_lines.append(lines[index])
                if lines[index].strip() == "</figure>":
                    index += 1
                    break
                index += 1
            story.extend(figure_flowables("\n".join(block_lines), publication_dir, styles))
            continue
        if line.startswith("|") and index + 1 < len(lines) and re.match(r"^\|?\s*:?-+", lines[index + 1]):
            flush_paragraph()
            table_lines = []
            while index < len(lines) and lines[index].startswith("|"):
                table_lines.append(lines[index])
                index += 1
            parsed = [[cell.strip() for cell in row.strip().strip("|").split("|")] for row in table_lines]
            rows = [parsed[0], *parsed[2:]] if len(parsed) > 1 else parsed
            story.extend([table_flowable(rows, styles), Spacer(1, 4 * mm)])
            continue
        if not line.strip():
            flush_paragraph()
            index += 1
            continue
        heading = re.match(r"^(#{1,4})\s+(.+)$", line)
        if heading:
            flush_paragraph()
            if skip_first_heading and not skipped_heading:
                skipped_heading = True
                index += 1
                continue
            level = min(len(heading.group(1)), 3)
            story.append(Spacer(1, (7 if level == 2 else 4) * mm))
            story.append(Paragraph(inline_markup(heading.group(2)), styles[f"Heading{level}"]))
            story.append(Spacer(1, 2 * mm))
            index += 1
            continue
        bullet = re.match(r"^[-*]\s+(.+)$", line)
        if bullet:
            flush_paragraph()
            story.append(Paragraph(inline_markup(bullet.group(1)), styles["KomalBullet"], bulletText="-"))
            index += 1
            continue
        ordered = re.match(r"^(\d+)\.\s+(.+)$", line)
        if ordered:
            flush_paragraph()
            story.append(Paragraph(inline_markup(ordered.group(2)), styles["KomalNumbered"], bulletText=f"{ordered.group(1)}."))
            index += 1
            continue
        if line.startswith("> "):
            flush_paragraph()
            story.append(Paragraph(inline_markup(line[2:]), styles["KomalQuote"]))
            story.append(Spacer(1, 2.5 * mm))
            index += 1
            continue
        paragraph.append(line.strip())
        index += 1

    flush_paragraph()
    flush_code()
    return story


class DeterministicCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        kwargs["invariant"] = 1
        kwargs["pageCompression"] = 1
        super().__init__(*args, **kwargs)


class BookDocTemplate(SimpleDocTemplate):
    def afterFlowable(self, flowable):
        if not isinstance(flowable, Paragraph):
            return
        style = flowable.style.name
        if style not in {"PartTitle", "ChapterTitle", "BackMatterTitle"}:
            return
        level = 0 if style in {"PartTitle", "BackMatterTitle"} else 1
        text = flowable.getPlainText()
        key = getattr(flowable, "_bookmarkName", f"section-{self.page}-{hashlib.sha1(text.encode()).hexdigest()[:8]}")
        self.canv.bookmarkPage(key)
        self.canv.addOutlineEntry(text, key, level=level, closed=level == 0)
        self.notify("TOCEntry", (level, text, self.page, key))


def source_digest(files: list[Path], root: Path) -> str:
    digest = hashlib.sha256()
    for file in sorted(files, key=lambda item: item.relative_to(root).as_posix()):
        relative = file.relative_to(root).as_posix().encode("utf-8")
        digest.update(relative + b"\0" + file.read_bytes() + b"\0")
    return digest.hexdigest()


def styles_for_book() -> dict:
    styles = getSampleStyleSheet()
    styles.add(ParagraphStyle(name="TitleCustom", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=31, leading=34, textColor=INK, alignment=TA_CENTER, spaceAfter=7 * mm))
    styles.add(ParagraphStyle(name="Subtitle", parent=styles["Normal"], fontName="Helvetica", fontSize=13, leading=18, textColor=MUTED, alignment=TA_CENTER))
    styles.add(ParagraphStyle(name="PartTitle", parent=styles["Heading1"], fontName="Helvetica-Bold", fontSize=26, leading=29, textColor=ACCENT_INK, spaceAfter=6 * mm))
    styles.add(ParagraphStyle(name="ChapterTitle", parent=styles["Heading1"], fontName="Helvetica-Bold", fontSize=24, leading=28, textColor=INK, spaceAfter=4 * mm))
    styles.add(ParagraphStyle(name="BackMatterTitle", parent=styles["Heading1"], fontName="Helvetica-Bold", fontSize=23, leading=27, textColor=INK, spaceAfter=5 * mm))
    styles["Heading1"].fontName = "Helvetica-Bold"
    styles["Heading1"].fontSize = 21
    styles["Heading1"].leading = 25
    styles["Heading1"].textColor = INK
    styles["Heading2"].fontName = "Helvetica-Bold"
    styles["Heading2"].fontSize = 15
    styles["Heading2"].leading = 19
    styles["Heading2"].textColor = ACCENT
    styles["Heading2"].keepWithNext = True
    styles["Heading3"].fontName = "Helvetica-Bold"
    styles["Heading3"].fontSize = 11.5
    styles["Heading3"].leading = 15
    styles["Heading3"].textColor = INK
    styles["Heading3"].keepWithNext = True
    styles["BodyText"].fontName = "Helvetica"
    styles["BodyText"].fontSize = 9.6
    styles["BodyText"].leading = 14.2
    styles["BodyText"].textColor = INK
    styles["BodyText"].allowWidows = 0
    styles["BodyText"].allowOrphans = 0
    styles.add(ParagraphStyle(name="KomalBullet", parent=styles["BodyText"], leftIndent=5 * mm, firstLineIndent=0, bulletIndent=1 * mm, spaceAfter=1.2 * mm))
    styles.add(ParagraphStyle(name="KomalNumbered", parent=styles["BodyText"], leftIndent=7 * mm, firstLineIndent=0, bulletIndent=1 * mm, spaceAfter=1.2 * mm))
    styles.add(ParagraphStyle(name="KomalQuote", parent=styles["BodyText"], leftIndent=7 * mm, rightIndent=4 * mm, borderColor=ACCENT, borderWidth=0.8, borderPadding=(2 * mm, 2 * mm, 2 * mm, 4 * mm), backColor=SURFACE, textColor=INK_2))
    styles.add(ParagraphStyle(name="KomalCode", parent=styles["Code"], fontName="Courier", fontSize=7.7, leading=10, backColor=SURFACE, borderColor=LINE, borderWidth=0.5, borderPadding=3 * mm))
    styles.add(ParagraphStyle(name="KomalCaption", parent=styles["BodyText"], fontSize=8.2, leading=11.2, textColor=INK_2, spaceAfter=2 * mm))
    styles.add(ParagraphStyle(name="KomalFigureAlt", parent=styles["BodyText"], fontSize=7.3, leading=10, textColor=MUTED, leftIndent=3 * mm, rightIndent=3 * mm, spaceAfter=2 * mm))
    styles.add(ParagraphStyle(name="KomalTableHeader", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=7.8, leading=9.8, textColor=MUTED))
    styles.add(ParagraphStyle(name="KomalTableCell", parent=styles["BodyText"], fontSize=8, leading=10.2))
    styles.add(ParagraphStyle(name="KomalTableHeaderDense", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=6.7, leading=8.2, textColor=MUTED))
    styles.add(ParagraphStyle(name="KomalTableCellDense", parent=styles["BodyText"], fontSize=6.8, leading=8.4))
    styles.add(ParagraphStyle(name="TOC0", parent=styles["BodyText"], fontName="Helvetica-Bold", fontSize=11, leading=15, leftIndent=0, firstLineIndent=0, spaceBefore=4))
    styles.add(ParagraphStyle(name="TOC1", parent=styles["BodyText"], fontSize=9, leading=12, leftIndent=8 * mm, firstLineIndent=0))
    return styles


def build(publication_dir: Path, output_dir: Path) -> dict:
    manifest = load_json(publication_dir / "publication.json")
    sources = load_json(publication_dir / manifest["registries"]["sources"])["sources"]
    figures = load_json(publication_dir / manifest["registries"]["figures"])["figures"]
    figure_production_file = publication_dir / "figure-production.json"
    figure_production = load_json(figure_production_file)["figures"] if figure_production_file.exists() else []
    production_by_registry = {figure["registryId"]: figure for figure in figure_production}
    errata = load_json(publication_dir / manifest["registries"]["errata"])["errata"]
    front_file = publication_dir / "front-matter/front-matter.md"
    part_file = publication_dir / "front-matter/part-introductions.md"
    appendix_files = sorted((publication_dir / "appendices").glob("*.md"))
    part_introductions = split_part_introductions(part_file.read_text(encoding="utf-8"))
    part_starts = {1: 0, 6: 1, 11: 2, 15: 3, 18: 4}
    output_dir.mkdir(parents=True, exist_ok=True)
    output_file = output_dir / manifest["pdf"]["filename"]
    styles = styles_for_book()

    document = BookDocTemplate(
        str(output_file), pagesize=A4, leftMargin=23 * mm, rightMargin=23 * mm,
        topMargin=22 * mm, bottomMargin=20 * mm, title=manifest["title"],
        author=manifest["author"], subject=manifest["description"],
        creator="Komal deterministic publication pipeline", allowSplitting=1,
    )

    story = [
        Spacer(1, 24 * mm),
        Paragraph(html.escape(manifest["series"]["title"]).upper(), styles["Heading3"]),
        Spacer(1, 9 * mm), Paragraph(html.escape(manifest["title"]), styles["TitleCustom"]),
        Paragraph(html.escape(manifest["subtitle"]), styles["Subtitle"]), Spacer(1, 26 * mm),
        Table([["WORKFLOW", "EVIDENCE", "PRODUCTION", "OWNERSHIP"]], colWidths=[CONTENT_WIDTH / 4] * 4, style=TableStyle([
            ("BACKGROUND", (0, 0), (-1, -1), TINT), ("TEXTCOLOR", (0, 0), (-1, -1), ACCENT_INK),
            ("FONTNAME", (0, 0), (-1, -1), "Helvetica-Bold"), ("FONTSIZE", (0, 0), (-1, -1), 8),
            ("ALIGN", (0, 0), (-1, -1), "CENTER"), ("BOX", (0, 0), (-1, -1), 0.7, ACCENT),
            ("INNERGRID", (0, 0), (-1, -1), 0.4, LINE), ("TOPPADDING", (0, 0), (-1, -1), 8),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 8),
        ])),
        Spacer(1, 30 * mm), Paragraph(html.escape(manifest["author"]), styles["Subtitle"]),
        Spacer(1, 4 * mm), Paragraph(html.escape(f'{manifest["edition"]["label"]} - Version {manifest["edition"]["version"]}'), styles["Subtitle"]),
        PageBreak(), Paragraph("Copyright and professional boundary", styles["BackMatterTitle"]),
    ]
    front_raw = front_file.read_text(encoding="utf-8")
    boundary_start = front_raw.find("## Professional boundary")
    story.extend(markdown_flowables(front_raw[boundary_start:], styles, publication_dir))
    story.extend([PageBreak(), Paragraph("Contents", styles["BackMatterTitle"]), Spacer(1, 4 * mm)])
    toc = TableOfContents()
    toc.levelStyles = [styles["TOC0"], styles["TOC1"]]
    toc.dotsMinLevel = 0
    story.extend([toc, PageBreak()])

    for chapter in manifest["chapters"]:
        if chapter["order"] in part_starts:
            part_title, part_body = part_introductions[part_starts[chapter["order"]]]
            part_heading = Paragraph(inline_markup(part_title), styles["PartTitle"])
            part_heading._bookmarkName = f"part-{part_starts[chapter['order']] + 1}"
            story.extend([part_heading, Spacer(1, 3 * mm)])
            story.extend(markdown_flowables(part_body, styles, publication_dir))
            story.append(PageBreak())
        chapter_heading = Paragraph(html.escape(f'{chapter["order"]}. {chapter["title"]}'), styles["ChapterTitle"])
        chapter_heading._bookmarkName = f'chapter-{chapter["order"]}'
        story.extend([chapter_heading, Paragraph(html.escape(chapter["summary"]), styles["KomalQuote"]), Spacer(1, 4 * mm)])
        story.extend(markdown_flowables((publication_dir / chapter["sourceFile"]).read_text(encoding="utf-8"), styles, publication_dir))
        story.append(PageBreak())

    appendices_heading = Paragraph("Appendices", styles["PartTitle"])
    appendices_heading._bookmarkName = "appendices"
    story.extend([appendices_heading, Paragraph("Reusable structures, review gates, companion use, terminology, and the completed fictional dossier index.", styles["KomalQuote"]), PageBreak()])
    for appendix_index, appendix_file in enumerate(appendix_files):
        raw = appendix_file.read_text(encoding="utf-8")
        title_match = re.search(r"^# (.+)$", raw, flags=re.MULTILINE)
        title = title_match.group(1) if title_match else appendix_file.stem
        heading = Paragraph(inline_markup(title), styles["ChapterTitle"])
        heading._bookmarkName = f"appendix-{appendix_index + 1}"
        story.extend([heading, Spacer(1, 3 * mm)])
        story.extend(markdown_flowables(raw, styles, publication_dir, skip_first_heading=True))
        story.append(PageBreak())

    figure_heading = Paragraph("Figure registry", styles["BackMatterTitle"])
    figure_heading._bookmarkName = "figures"
    story.extend([figure_heading, Paragraph("All figures are original Komal synthesis. Orchid and satellite contexts are fictional/synthetic.", styles["KomalQuote"]), Spacer(1, 4 * mm)])
    for figure in figures:
        story.append(Paragraph(f'<b>{html.escape(figure["id"])}</b> - {inline_markup(figure["caption"])}', styles["BodyText"]))
        production = production_by_registry.get(figure["id"], {})
        long_description = production.get("longDescription", figure["alt"])
        story.append(Paragraph(f'<b>Long description:</b> {inline_markup(long_description)}', styles["KomalFigureAlt"]))
        story.append(Spacer(1, 2 * mm))
    story.append(PageBreak())

    source_heading = Paragraph("Sources", styles["BackMatterTitle"])
    source_heading._bookmarkName = "sources"
    story.extend([source_heading, Spacer(1, 3 * mm)])
    for source in sources:
        author_text = ", ".join(source["authors"])
        citation = f'<b>{html.escape(source["id"])}</b> - {html.escape(author_text)}. {html.escape(source["title"])}. {html.escape(source["publisher"])}. <a href="{html.escape(source["url"])}" color="#2C4A6E">{html.escape(source["url"])}</a> (accessed {html.escape(source["accessedAt"])}).'
        story.append(Paragraph(citation, styles["BodyText"]))
        story.append(Spacer(1, 2.3 * mm))
    story.append(PageBreak())

    edition_heading = Paragraph("Edition record", styles["BackMatterTitle"])
    edition_heading._bookmarkName = "edition-record"
    edition_lines = [
        f'Version: {manifest["edition"]["version"]}', f'Published: {manifest["edition"]["publishedAt"]}',
        f'Canonical URL: {manifest["edition"]["canonicalUrl"]}', f'Recorded errata: {len(errata)}',
        f'Chapters: {len(manifest["chapters"])}', f'Figures: {len(figures)}', f'Sources: {len(sources)}',
    ]
    story.extend([edition_heading, Spacer(1, 3 * mm)])
    for line in edition_lines:
        story.append(Paragraph(html.escape(line), styles["BodyText"]))
        story.append(Spacer(1, 1.5 * mm))

    def page_frame(pdf_canvas, doc):
        pdf_canvas.saveState()
        pdf_canvas.setStrokeColor(LINE)
        pdf_canvas.line(23 * mm, 15 * mm, PAGE_WIDTH - 23 * mm, 15 * mm)
        pdf_canvas.setFont("Helvetica", 7.5)
        pdf_canvas.setFillColor(MUTED)
        pdf_canvas.drawString(23 * mm, 10 * mm, manifest["title"])
        pdf_canvas.drawRightString(PAGE_WIDTH - 23 * mm, 10 * mm, str(doc.page))
        if doc.page > 1:
            pdf_canvas.setFont("Helvetica", 7)
            pdf_canvas.drawString(23 * mm, PAGE_HEIGHT - 12 * mm, manifest["author"])
            pdf_canvas.drawRightString(PAGE_WIDTH - 23 * mm, PAGE_HEIGHT - 12 * mm, f'v{manifest["edition"]["version"]}')
        pdf_canvas.restoreState()

    document.multiBuild(story, onFirstPage=page_frame, onLaterPages=page_frame, canvasmaker=DeterministicCanvas)

    input_files = [
        publication_dir / "publication.json", publication_dir / manifest["registries"]["sources"],
        publication_dir / manifest["registries"]["claims"], publication_dir / manifest["registries"]["figures"],
        publication_dir / manifest["registries"]["errata"], front_file, part_file, *appendix_files,
        *[publication_dir / chapter["sourceFile"] for chapter in manifest["chapters"]],
        *[publication_dir / figure["file"] for figure in figures],
    ]
    if figure_production_file.exists():
        input_files.append(figure_production_file)
    reader = PdfReader(str(output_file))
    record = {
        "schemaVersion": 1, "publication": manifest["slug"], "editionVersion": manifest["edition"]["version"],
        "generatedAt": manifest["edition"]["publishedAt"], "file": output_file.name,
        "sourceSha256": source_digest(input_files, publication_dir),
        "pdfSha256": hashlib.sha256(output_file.read_bytes()).hexdigest(), "pageCount": len(reader.pages),
        "chapterCount": len(manifest["chapters"]), "appendixCount": len(appendix_files),
        "figureCount": len(figures), "sourceCount": len(sources), "errataCount": len(errata),
        "bookmarks": len(reader.outline), "bytes": output_file.stat().st_size,
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
