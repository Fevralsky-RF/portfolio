# Handoff — Portfolio hero portrait
Date: 2026-10-28

## Goal
Finish the portfolio hero split layout with Maxim's portrait placed to match the user's pink guide rectangle, while preserving image quality and using rounded corners without decorative borders.

## Current repository state
- Repository: https://github.com/Fevralsky-RF/portfolio
- Branch: `main`
- Live portfolio: https://fevralsky-rf.github.io/portfolio/index.html
- Portrait asset: `assets/maxim-alekseev.webp`
- Portrait asset dimensions declared in HTML: 768 × 920 px.
- Latest design/layout commit before this handoff: `c10dc7e55c7c825ca2cb3772cae7a8e8f0c35e3c`
- Latest GitHub Pages workflow run for that commit: https://github.com/Fevralsky-RF/portfolio/actions/runs/40593061140
- Workflow result: completed successfully.

## Final hero portrait CSS
The hero uses a two-column split layout on desktop. The photo is sized and positioned with:
- `max-width: 388px`
- `aspect-ratio: 768/920`
- `object-fit: contain`
- `border: 0`
- `border-radius: 24px`
- `outline: 0`
- `box-shadow: none`
- `transform: translate(86px, -24px)`

At the mobile breakpoint `max-width: 839px`, the hero becomes a single column, the portrait is centered with `max-width: min(320px, 82vw)`, and `transform: none` prevents it from drifting off-screen.

## Relevant commits
- `a1a8ac1c09e03d24378fed74e7099ceca541970a` — Restore full-resolution profile portrait.
- `16d28202be22ae9764c7c48857e2b669ba1304a8` — Remove offset portrait outline decoration.
- `844f5381863aed00d15ed606250c2564e48f1824` — Remove all borders and shadows from portrait.
- `e75d33f8c9a6a62c346792cad3e77a8cb3298137` — Round portrait corners without adding frame or shadow.
- `c10dc7e55c7c825ca2cb3772cae7a8e8f0c35e3c` — Match portrait size and position to marked hero layout.

## Validation and remaining visual check
- Confirmed the latest commit is on `main`.
- Confirmed the GitHub Pages workflow for `c10dc7e` completed with success.
- Confirmed the committed CSS retains the portrait asset, rounded corners, no borders/shadow, and desktop-only offset.
- A live browser screenshot was not available in the editing environment. If the position does not precisely match the guide rectangle in the user's browser, adjust only `max-width` and `transform: translate(...)`; do not change the image asset, aspect ratio, radius, or add a frame.
- If the site appears stale, hard-refresh it: Cmd+Shift+R on macOS or Ctrl+Shift+R on Windows/Linux.
