---
name: msm-design
description: Use this skill to generate well-branded interfaces and assets for MSM (Machinery Solutions & Maintenance), an Australian industrial machinery service company, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## What's here
- `README.md` — brand context, content fundamentals, visual foundations, iconography, manifest.
- `colors_and_type.css` — import this for all color + type CSS variables.
- `assets/logo/` — logo lockups + gear monogram (light = for dark bgs, dark = for light bgs).
- `assets/photos/` — real MSM shop-floor / machinery photography (warm, contrasty).
- `preview/` — design-system specimen cards.
- `ui_kits/website/` — marketing-site UI kit: React (JSX) components + interactive `index.html`.

## Quick rules
- Brand accent is **Signal Orange `#F05A3C`** — use sparingly, as a signal.
- Warm everything: warm graphite darks, warm linen lights, no pure black/white, no cool greys.
- Type: **Raleway** (light display/headings), **Manrope** (body/UI), **IBM Plex Mono** (specs, phone numbers, part numbers).
- Voice: practical, dependable tradesperson-expert. "We" for MSM, "you" for the client. No emoji, no hype.
- Icons: Lucide-style line icons (~1.85px stroke). Echo the gear/cog mark sparingly as low-opacity ornament.
