# MSM — Machinery Solutions & Maintenance · Design System

> **"Driving your production further."**

MSM (Machinery Solutions & Maintenance) is an Australian industrial-services
company based in **Keilor East, Victoria (Melbourne)**. They keep manufacturing
plants running — breakdown response, preventative maintenance, machine design &
build, installation/relocation, and spare-parts sourcing — across the printing,
packaging, furniture and timber industries.

The brand voice is **practical, dependable, and hands-on**: an expert team you
call when a line goes down. The visual identity pairs a **signal-orange gear
monogram** with **warm graphite greys** and the clean **Raleway / Manrope** type system.

---

## Sources used to build this system

- `uploads/msm-logo-lg.png` — primary logo lockup (monogram + wordmark), supplied by the user.
- Brand notes (user): primary orange `rgb(240, 90, 60)`, "dark warm grey", "soft
  warm grey with a hint of orange". Brand fonts (Google Fonts): **Raleway** (display)
  + **Manrope** (body).
- Website marketing copy (user-pasted) — services, taglines, contact details.

No codebase, Figma file, or slide deck was supplied. The foundations and UI kit
below are built **from the logo + brand notes + website copy**, so they are an
interpretation of MSM's identity rather than a recreation of an existing build.
See **Caveats** at the bottom.

---

## Index / manifest

| File | What it is |
|---|---|
| `README.md` | This file — context, content & visual foundations, iconography, index. |
| `colors_and_type.css` | All color + type CSS variables (base + semantic) and the type scale. Import this everywhere. |
| `SKILL.md` | Agent-Skill manifest so this folder works as a downloadable Claude skill. |
| `assets/logo/` | Logo + monogram, light & dark variants (PNG, transparent). |
| `assets/photos/` | Real MSM shop-floor / machinery photography (warm, contrasty). |
| `preview/` | Small HTML cards that populate the Design System tab. |
| `ui_kits/website/` | Marketing-website UI kit — JSX components + interactive `index.html`. |

**Logo assets** (`assets/logo/`)
- `msm-logo-light.png` / `msm-logo-dark.png` — full lockup for dark / light backgrounds.
- `msm-mark-light.png` / `msm-mark-dark.png` — gear monogram only (favicon, avatars, tight spaces).

**Photography** (`assets/photos/`) — supplied by MSM: `why-msm.jpg` (lathe work),
`machinery-breakdown-service.jpg`, `periodical-preventative-maintenance.jpg`,
`cad-design-development.jpg`, `machinery-installation.jpg`, `spare-parts.jpg`, `banner.jpg`.

**Website UI kit** (`ui_kits/website/`) — React/JSX components, wired in `index.html`:
`Header.jsx`, `Hero.jsx`, `Services.jsx`, `WhyMSM.jsx`, `Contact.jsx`, `Footer.jsx`,
`Icons.jsx` (icon set), `site.css` (kit styles). See `ui_kits/website/README.md`.

---

## CONTENT FUNDAMENTALS

How MSM writes.

- **Voice:** confident tradesperson-expert. Plain, capable, reassuring — never
  salesy or jargon-heavy. The reader is a plant/production manager whose machine
  just stopped.
- **Person:** **"we" / "our"** for MSM, **"you / your"** for the client. Warm and
  direct: *"We are on call to help you get back online and minimise your
  production down time."* / *"…designed to suit your company's needs."*
- **Tone:** outcome-focused. Copy leads with the customer benefit (less downtime,
  back online, maximum efficiency) before listing capabilities.
- **Casing:**
  - Section labels & nav use **Title Case**: *What We Do, Why MSM, Get In Touch*.
  - Service names are **Title Case proper nouns**: *Machinery Breakdown Service,
    Periodical Preventative Maintenance, Design & Development, Spare Parts*.
  - The wordmark and small eyebrow labels are **UPPERCASE with wide tracking**.
- **Ampersand:** the company name is written **"Machinery Solutions & Maintenance"**
  (ampersand), abbreviated **MSM**. Use the ampersand in the full name.
- **Sentence style:** medium-length, one idea per sentence; comfortable with a
  long descriptive sentence when listing capabilities (the Design & Development
  blurb runs long on purpose — it signals breadth).
- **Numbers / contact:** Australian formats. Phone `(+613) 9013 3772`, address
  `25A Slater Parade, Keilor East 3033`. A "Get Directions" CTA accompanies the address.
- **Emoji:** **none.** This is a B2B industrial brand. Do not use emoji.
- **Vibe in three words:** dependable · capable · grounded.
- **Don'ts:** no hype adjectives ("revolutionary", "world-class"), no exclamation
  marks, no startup-speak. Keep it the way a skilled engineer would actually talk.

Example sign-off / footer: `© Machinery Solutions & Maintenance 2026`.

---

## VISUAL FOUNDATIONS

The motifs and rules that make something look like MSM.

**Color**
- **Signal Orange `#F05A3C`** is the single brand accent — gear mark, primary
  buttons, links, eyebrow labels, key stats. Used sparingly and with intent; it
  is a *signal*, not a wash.
- **Warm Graphite** greys (`--warm-850 #2B2622` being the hero dark) carry dark
  sections, headers, footers and body ink. Everything is **warm** — there are no
  pure-cool greys and no pure black.
- **Warm Linen** off-whites (`--paper #FAF7F1`, `--linen-100`) are the default
  light surfaces — paper-warm, faintly orange-tinted, never stark white.
- Pure white (`#FFF`) is reserved for raised cards on linen backgrounds.
- Status colors are muted and earthy, not neon.

**Type**
- **Raleway** carries display + headings (light weights, see below); **Manrope**
  is the body/UI workhorse — a clean, friendly grotesque that reads well at small
  sizes. Both are Google Fonts.
- **IBM Plex Mono** is the technical accent — part numbers, specs, phone numbers,
  metadata. Use it to make data feel precise.
- Headlines run **light — Raleway 300, large, tight tracking** — echoing the thin
  wide-tracked wordmark for a refined, engineered feel. Eyebrows/labels are
  **uppercase, ~0.22em tracking**. (Display *numerals* — stats, the 24/7 mark —
  stay heavy at 800 for punch.)
- Generous line-height on body (1.65); headings tight (≤1.1).

**Spacing & layout**
- 4px base scale (`--s-1`…`--s-10`). Sections breathe — large vertical rhythm
  (`64–128px`) between marketing blocks.
- Content max-width ~1200px, gutters generous. Grids over inline flow.
- A recurring **gear / cog** motif (from the monogram) can appear as a large,
  low-opacity background ornament — never busy.

**Backgrounds**
- Mostly **flat warm color fields** — linen for light sections, graphite for dark.
- **No gradients** as decoration (avoid the AI-slop purple-gradient look). The one
  permitted gradient is a subtle **dark protection scrim** over photography so
  white text stays legible.
- Imagery, when present, is **real industrial photography** — machinery, shop
  floors, hands-on work — shot **warm**, slightly contrasty, never cold/blue.
  (Use `<image-slot>` placeholders; do not fabricate photos.)

**Corner radii**
- Restrained and industrial: small radii (`--r-sm 5px` / `--r-md 8px`) on cards,
  buttons and inputs. Pills (`--r-pill`) only for tags/chips. Nothing is heavily
  rounded — the brand reads engineered, not playful.

**Cards**
- White or linen surface, **1px warm border (`--border`)**, small radius, and a
  **soft warm shadow** (`--shadow-md`) on hover/raise. Shadows are low-opacity and
  warm-toned (based on `rgba(28,25,22,…)`), never grey/blue.
- Often a **thin orange top-rule or left-rule** as an accent — but used
  deliberately, not as a default decoration on every box.

**Borders & dividers**
- Hairline `1px` warm borders on light; `--border-dark` on graphite surfaces.

**Elevation system**
- `--shadow-sm` (resting controls) → `--shadow-md` (cards, dropdowns) →
  `--shadow-lg` (modals, hero photo). Plus `--shadow-brand` (orange glow) only on
  the primary CTA when you want it to pop.

**Motion**
- Calm and functional. `--dur .24s` with `--ease` (gentle ease-out). Fades and
  short transl(4–8px) rises on hover/scroll-in. **No bounces, no springy
  overshoot** — industrial reliability, not bounce.

**Hover / press states**
- **Buttons (primary):** hover darkens orange → `--brand-press`; press = darken +
  `translateY(1px)` (no scale).
- **Buttons (secondary/ghost):** hover fills with `--linen-100` / lifts border.
- **Cards / links:** hover raises shadow `sm→md` and nudges up 2–4px; links shift
  to `--brand-ink` with an underline.
- Press feels physical: a 1px downward nudge, never a cartoon shrink.

**Transparency & blur**
- Used sparingly: a **frosted graphite header** (`backdrop-filter: blur`) on
  scroll, and dark scrims over photos. Otherwise surfaces are opaque.

**Fixed elements**
- Sticky top header (frosts on scroll). Footer is graphite, full-width.

---

## ICONOGRAPHY

- **Primary mark:** the **gear / cog half-circle** in the monogram is MSM's signature
  shape. Echo it (sparingly, low-opacity) as ornament; don't over-use.
- **Icon set:** no proprietary icon font was supplied. This system uses
  **[Lucide](https://lucide.dev)** (loaded from CDN) as the working set —
  clean **line icons, ~1.75–2px stroke, square-ish, slightly industrial**, which
  sit well with Raleway. ⚠️ *This is a substitution* — if MSM has a preferred icon
  library, send it and I'll swap. Favour mechanical/industrial glyphs: `wrench`,
  `settings`/`cog`, `wrench`, `truck`, `clipboard-check`, `hard-hat`, `factory`,
  `phone`, `map-pin`, `clock`.
- **Stroke & fill:** line (outline) icons only; match the ~1.9px stroke. Avoid
  filled/duotone glyphs except inside small solid orange chips.
- **Emoji:** never. **Unicode dingbats:** avoid as UI icons (the ampersand `&` is
  the only "decorative" character, and only inside the brand name).
- Keep icon color to `--fg2` (neutral) or `--brand` (when it's an accent), never
  rainbow multicolor.

---

## Caveats

- Built from a **logo + brand notes + website copy only** — no codebase/Figma. The
  UI kit is a faithful *interpretation*, not a pixel recreation of a live site.
- **Fonts** load from Google Fonts (Raleway display, Manrope body, IBM Plex Mono
  for technical accents) — all confirmed by the user.
- **Icons** are Lucide via CDN (substitution).
- **Photography** uses **real MSM shop-floor photos** (`assets/photos/`), supplied by the
  user — warm, contrasty, slightly desaturated industrial imagery.
