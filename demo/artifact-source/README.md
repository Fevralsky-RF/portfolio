# Original Claude artifact source — Dental Expert competitive research

The public page at:

https://fevralsky-rf.github.io/portfolio/demo/issledovanie-konkurentov-dental-expert.html

renders the original HTML file supplied by Maxim on 2026-10-26, titled **«Кто на поле техосмотра»**.

## Original source integrity

- Original file size: 53,903 bytes.
- SHA-256 of original file: `be4f6cc408014989c38857c10bc61a8dc265de1c6ab88ca0379a0b9b3b418aac`.
- Original bytes are gzip-compressed and base64-encoded across the `part-01.txt` … `part-05.txt` and `part-06a.txt` … `part-06e.txt` fragments.
- The original artifact bytes are preserved in those payload fragments without rewriting the research text, data, charts or interactivity.

## Super Dark Apache theme

The original design already uses the exact palette tokens from the main portfolio: `#0f1419` / `#1a1f2e` dark background gradient, `#1e293b` card tone, blue accents `#3b82f6` / `#60a5fa`, mint `#34d399`, violet `#a855f7`, amber `#fbbf24` and coral `#f87171`.

To make it consistent for every visitor (including browsers/operating systems set to prefer light mode), the public page loader makes two render-time-only changes to the reconstructed HTML:

1. Adds `data-theme="dark"` to the root HTML element, disabling the source's auto-light palette override.
2. Changes the source's first `color-scheme:light` declaration to `color-scheme:dark`, so native form controls use the same dark appearance.

No research text, ratings, data or chart logic is rewritten. The original HTML remains stored byte-for-byte in the payload, while the display is locked to the same Super Dark Apache theme used by the portfolio.

## Archive

The previous custom summary page is preserved at `demo/issledovanie-konkurentov-dental-expert-summary-archive-2026-10-26.html`.

## Public-content note

The source HTML contains a footer identifying the material as internal Dental Expert team material and “not for sending to clinics.” It is intentionally preserved exactly as supplied and is publicly visible because Maxim explicitly requested publication.
