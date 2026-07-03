---
type: session
title: "Cortez Home Solutions Website Build"
created: 2026-07-02
updated: 2026-07-02
tags:
  - web-design
  - cortez-home-solutions
  - editorial-design
  - static-site
status: developing
related:
  - "[[Cortez Design System]]"
sources:
  - "CLAUDEwebdesign copy (1).md"
  - "screencapture-godaylight-2026-06-30-17_55_39.png"
---

# Cortez Home Solutions Website Build

A complete single-page marketing site for **Cortez Home Solutions LLC** (home repairs, remodels, and handyman work) lives in `cortez-home-solutions/` (`index.html`, `styles.css`, `script.js`, `assets/`). It is a static site — no build step, no dependencies — served locally with `python -m http.server 4173 --directory cortez-home-solutions` (configured in `.claude/launch.json` as `cortez-site`).

## Design direction

The design translates the **Daylight (godaylight.com)** homepage into the Cortez brand, per the project's design-standards file (`CLAUDEwebdesign copy (1).md`), which bans AI-generic patterns (purple palettes, gradient headlines, meaningless stat rows, centered-everything layouts).

**Palette** (4–6 named values, one accent, per the standards):
- Cream `#fff7e9` (taken verbatim from the Daylight reference CSS)
- Paper `#fffdf6`, warm ink `#1b1512`, ink-soft `#57493f`
- Cortez red `#b41f24` (from the brand logos) with deep barn red `#7e1418`

**Type system:** Fraunces (light editorial serif display, weight 340) + Schibsted Grotesk (body) + Space Mono (uppercase eyebrow labels). Mirrors the reference's featureDeck / aeonikPro / socialMono trio with Google Fonts.

**Signature motif:** the red roof chevron polygon from `CHS_logo-02.svg` recurs everywhere — hero panel (three fading chevrons), red band's zigzag bottom edge, a self-drawing SVG house elevation (stroke-dashoffset on IntersectionObserver), and the footer's repeating roofline pattern (translating Daylight's wavy orange footer).

**Page structure** (mirrors the reference's rhythm): hairline-grid hero → full-bleed red statement band → free-walkthrough strip → editorial services list with annotated house diagram → numbered 4-step process with a mock line-item estimate card → dark statement band with double ticker marquee → centered statement + line-drawn house → split "Step inside." panel with the estimate form beside the script logo on red → giant red footer.

## Key decisions

- **Logos as SVG symbols:** both brand SVGs are inlined as `<symbol>` defs; recoloring uses CSS custom properties (`--mark-body`, `--mark-roof`) because external CSS cannot style inside `<use>` shadow DOM. The script wordmark needed viewBox `0 78 432 240` — tighter crops clipped the C swash and z tail.
- **No stock photos:** all imagery is hand-drawn SVG (house elevations, pictograms, diagram with mono leader labels), keeping the site self-contained and on-brand.
- **`[hidden] { display: none !important; }`** is required — utility display rules (`display: grid` on `.field`) otherwise override the `hidden` attribute, which broke the form's success state.
- Invented numbers were removed per the standards ("EST. CREW OF SIX" → "One crew, every trade"); "Why Cortez" labels renamed to avoid the banned "Why Choose [Brand]" pattern.
- Contact details (`(913) 555-0148`, `hello@cortezhomesolutions.com`) are **placeholders** awaiting real business info; location facts are real.

## Real business facts (from the Angi listing, verified 2026-07-02)

Cortez Home Solutions LLC is in **Shawnee, Kansas**, serving the KC metro. Angi listing (https://www.angi.com/companylist/us/ks/shawnee/cortez-home-solutions-llc-reviews-1.htm): **5.0 rating, 28 reviews, Angi Approved, in business since 2025, free estimates, small jobs welcome**. One verbatim review: "Awesome, informative, very kind. Grateful for his knowledge and help." These facts power the site's reviews section; Angi blocks direct scraping (HTTP 403), so full review texts weren't retrievable.

## Animation layer (second pass)

All motion is CSS-first, transform/opacity only, gated behind `prefers-reduced-motion`: hero intro choreography (masked line-slide title via `.tl`/`.tl-inner`, staggered `hero-in` elements keyed to `--h`, triggered by a `loaded` body class on a `setTimeout` — rAF proved unreliable when the preview renderer throttles), perpetual roof-chevron float, button clip-path wipe fills, service-row hover arrows, star pop-in stagger, estimate-total count-up (JS rAF + IntersectionObserver), red-band glow pulse, drifting footer roofline pattern, clip-wipe reveals on band headlines (`.reveal-clip`), staggered estimate-card line items, marching-ants dashes on the services diagram leader lines, and a breathing house mark.

## Verification

Previewed at 1440px and 375px: no horizontal overflow, fonts load, mobile menu, form validation + success state, scroll reveals, ticker, and the self-drawing house all confirmed working. No console errors. `prefers-reduced-motion` disables all movement.

## Knowledge graph

`/graphify` ran over the project: **53 nodes, 75 edges, 7 communities** in `graphify-out/` (`graph.html`, `GRAPH_REPORT.md`, `graph.json`). God nodes: the Daylight screenshot (17 edges), the design-standards doc (11), the warm editorial design system (6). The graph records that the landing page `implements` the design standards and that all house imagery derives from the CHS_logo-02 house mark.
