# Chapter 11 State - Adapt Efficiently With PEFT

- Status: complete manuscript draft; immediate QA recorded separately.
- Mosaic milestone: `MD-12` four-path behavior-resource comparison simulated; real experiment remains blocked.
- Claims: `CLM-031` to `CLM-033` map exactly to `V2-C11-CL01` to `V2-C11-CL03`.
- Case: `LLME-CASE-009`, bounded to evaluated model/task/resource settings.
- Figures: `V2-F11.1`, `V2-F11.2`; root ImageGen assets pending.
- Companion: PEFT fixture/helper and four tests.

Wrong base/tokenizer identities fail before load, no merge is attempted, and `peft-r16-attn-mlp` is rejected for a protected language regression.
