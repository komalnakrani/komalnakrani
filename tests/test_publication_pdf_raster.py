from __future__ import annotations

import importlib.util
import random
import tempfile
import unittest
from pathlib import Path

from PIL import Image
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
