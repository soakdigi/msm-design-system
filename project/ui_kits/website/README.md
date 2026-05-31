# MSM Marketing Website — UI Kit

A high-fidelity, interactive recreation of the MSM (Machinery Solutions & Maintenance)
marketing website — a **single long-scroll page**. Built from the brand foundations, logo,
supplied photography, and website copy. It is a faithful **interpretation** — no original
site code/Figma was provided.

Open `index.html` to see the assembled, click-through site.

## Stack
Plain React 18 + Babel (in-browser), no build step. Each component is a `<script type="text/babel">`
file that attaches itself to `window`. Pairs with `../../colors_and_type.css` (tokens) + `site.css` (kit styles).

## Components
| File | What it is |
|---|---|
| `Icons.jsx` | `<Icon name=… />` — Lucide-style line icon set (wrench, cog, ruler, truck, package, phone, mapPin, clock, arrowRight, check, shield, menu, x). |
| `Header.jsx` | Fixed header, transparent over the hero (white logo + nav); frosts to light + swaps to dark logo on scroll. |
| `Hero.jsx` | Full-bleed cinematic banner (`banner.jpg`) with dark scrim, centred light headline, CTAs, scroll cue. |
| `Services.jsx` | "What We Do" — centred intro + five **alternating image/text rows** (zig-zag), full service copy, big ghosted number + icon chip. No cards. |
| `WhyMSM.jsx` | Full-bleed image band (`why-msm.jpg`) with left-weighted scrim, overlaid copy + industry chips. |
| `Contact.jsx` | "Get In Touch" — graphite contact card floating over a live Google Maps embed; phone/address/hours + Get Directions. |
| `Footer.jsx` | Graphite footer — logo, tagline, services, contact, copyright. |
| `index.html` | Wires it together: `App`, mobile nav drawer, reveal-on-scroll, smooth in-page nav. |

## Interactions
- Header is transparent over the hero, then frosts (blur + light bg) and swaps to the dark logo once scrolled past 40px.
- In-page anchor nav (What We Do / Why MSM / Get In Touch) with smooth scroll + header offset; hero scroll cue jumps to the intro.
- Mobile menu (≤680px): hamburger opens a right-side drawer.
- Service row images sit in a zig-zag; sections reveal (fade + rise) on scroll.
- Contact card floats over a live Google Maps embed; "Get Directions" opens Google Maps directions in a new tab.

## Notes
- Logo variants: `*-light` = white, for dark surfaces; `*-dark` = dark ink, for light surfaces.
- Icons are a **Lucide substitution** — swap if MSM has a preferred set.
