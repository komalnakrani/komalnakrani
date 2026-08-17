from __future__ import annotations

import importlib.util
import random
import tempfile
import unittest
from pathlib import Path

from PIL import Image
from reportlab.pdfbase.pdfmetrics import stringWidth
from reportlab.platypus import SimpleDocTemplate


ROOT = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location(
    "komal_publication_pdf",
    ROOT / "scripts" / "build-publication-pdf.py",
)
MODULE = importlib.util.module_from_spec(SPEC)
assert SPEC.loader is not None
SPEC.loader.exec_module(MODULE)


class PublicationPdfRasterTest(unittest.TestCase):
    def test_overlong_code_line_is_fitted_inside_the_content_frame(self) -> None:
        base_style = MODULE.styles_for_book()["KomalCode"]
        long_line = '"question": "' + ("effect reconciliation evidence " * 8) + '"'

        fitted = MODULE.fitted_code_style([long_line], base_style)

        self.assertLess(fitted.fontSize, base_style.fontSize)
        self.assertLessEqual(
            stringWidth(long_line, "Courier", fitted.fontSize),
            MODULE.CONTENT_WIDTH - 6 * MODULE.mm,
        )
        self.assertGreater(fitted.leading, fitted.fontSize)

    def test_normal_code_line_keeps_the_standard_code_style(self) -> None:
        base_style = MODULE.styles_for_book()["KomalCode"]

        fitted = MODULE.fitted_code_style(['"state": "effect_unknown"'], base_style)

        self.assertIs(fitted, base_style)

    def test_raster_figure_is_compact_enough_for_download_delivery(self) -> None:
        with tempfile.TemporaryDirectory() as temporary:
            directory = Path(temporary)
            source = directory / "figure.png"
            output = directory / "figure.pdf"
            pixels = random.Random(7).randbytes(512 * 512 * 3)
            Image.frombytes("RGB", (512, 512), pixels).save(source, format="PNG")

            document = SimpleDocTemplate(str(output), pagesize=MODULE.A4)
            document.build([MODULE.scaled_figure(source)])

            self.assertLess(
                output.stat().st_size,
                600_000,
                "raster figures must be delivery-compressed instead of embedding lossless source bytes",
            )


if __name__ == "__main__":
    unittest.main()
