# Graph Report - .  (2026-07-02)

## Corpus Check
- Large corpus: 15 files · ~1,064,695 words. Semantic extraction will be expensive (many Claude tokens). Consider running on a subfolder.

## Summary
- 64 nodes · 91 edges · 8 communities
- Extraction: 74% EXTRACTED · 26% INFERRED · 0% AMBIGUOUS · INFERRED: 24 edges (avg confidence: 0.86)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Business Facts & Old Site Draft|Business Facts & Old Site Draft]]
- [[_COMMUNITY_Design Standards & Hard Bans|Design Standards & Hard Bans]]
- [[_COMMUNITY_Motion, Forms & Quality Floor|Motion, Forms & Quality Floor]]
- [[_COMMUNITY_Interaction Layer (script.js)|Interaction Layer (script.js)]]
- [[_COMMUNITY_Daylight Product Sections|Daylight Product Sections]]
- [[_COMMUNITY_Daylight Narrative & Photography|Daylight Narrative & Photography]]
- [[_COMMUNITY_Warm Editorial Design System|Warm Editorial Design System]]
- [[_COMMUNITY_Project Wiki & Session Notes|Project Wiki & Session Notes]]

## God Nodes (most connected - your core abstractions)
1. `Daylight Homepage Full-Page Screenshot` - 17 edges
2. `Website Design Standards (CLAUDE.md)` - 12 edges
3. `Cortez Home Solutions Landing Page` - 7 edges
4. `Warm Editorial Design System (Cream + Serif + Mono + Orange)` - 6 edges
5. `Cortez Home Solutions LLC (Brand)` - 5 edges
6. `Session Note: Cortez Home Solutions Website Build (2026-07-02)` - 5 edges
7. `Hard Bans` - 4 edges
8. `Site Asset Copy: CHS Logo 02 House Mark` - 4 edges
9. `Hero Section (Installed Right, the First Time)` - 4 edges
10. `Animation Choreography (Hero Intro, Blueprint Draw, Accordion)` - 4 edges

## Surprising Connections (you probably didn't know these)
- `CHS Logo 01: Script Cortez Wordmark` --conceptually_related_to--> `Cortez Home Solutions LLC (Brand)`  [INFERRED]
  CHS_logo-01.svg → cortez-home-solutions/index.html
- `CHS Logo 02: House Mark with Red Roof Chevron` --conceptually_related_to--> `Cortez Home Solutions LLC (Brand)`  [INFERRED]
  CHS_logo-02.svg → cortez-home-solutions/index.html
- `Statement House Line Drawing (#house-draw)` --conceptually_related_to--> `CHS Logo 02: House Mark with Red Roof Chevron`  [INFERRED]
  cortez-home-solutions/index.html → CHS_logo-02.svg
- `Cortez Home Solutions Landing Page` --implements--> `Website Design Standards (CLAUDE.md)`  [INFERRED]
  cortez-home-solutions/index.html → CLAUDEwebdesign copy (1).md
- `FAQ Accordion Section (#faq)` --references--> `Old Site Draft (Installation-Focused v1)`  [INFERRED]
  cortez-home-solutions/index.html → index of old site.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Warm Editorial Design System Pattern** — screencapture_godaylight_2026_06_30_17_55_39_cream_editorial_palette, screencapture_godaylight_2026_06_30_17_55_39_serif_display_typography, screencapture_godaylight_2026_06_30_17_55_39_mono_label_typography, screencapture_godaylight_2026_06_30_17_55_39_orange_accent_color [INFERRED 0.95]

## Communities (8 total, 0 thin omitted)

### Community 0 - "Business Facts & Old Site Draft"
Cohesion: 0.19
Nodes (15): CHS Logo 01: Script Cortez Wordmark, CHS Logo 02: House Mark with Red Roof Chevron, Site Asset Copy: CHS Logo 01 Script Wordmark, Site Asset Copy: CHS Logo 02 House Mark, Cortez Home Solutions Landing Page, Angi Listing: Cortez Home Solutions LLC (Shawnee, KS), Cortez Home Solutions LLC (Brand), Statement House Line Drawing (#house-draw) (+7 more)

### Community 1 - "Design Standards & Hard Bans"
Cohesion: 0.31
Nodes (9): Anti-AI-Look Principle (Two-Second Glance Test), Color Discipline (4-6 Named Values, One Accent), Hard Bans, Follow User References First, Responsive Mobile-First Requirement, Typography Standards (Display + Body Pairing), Vibe-Code Checklist, Website Design Standards (CLAUDE.md) (+1 more)

### Community 2 - "Motion, Forms & Quality Floor"
Cohesion: 0.22
Nodes (9): Layout and Composition (Hero as Thesis), Motion Restraint, Quality Floor (Accessibility Baseline), Animation Choreography (Hero Intro, Blueprint Draw, Accordion), Estimate Request Form (#estimate), FAQ Accordion Section (#faq), Hero Section (Installed Right, the First Time), Inline SVG Symbol: Roof Chevron (#mark-roof-chevron) (+1 more)

### Community 3 - "Interaction Layer (script.js)"
Cohesion: 0.25
Nodes (6): form, links, nav, onScroll(), revealEls, toggle

### Community 4 - "Daylight Product Sections"
Cohesion: 0.53
Nodes (6): Daylight Homepage Full-Page Screenshot, Energy App UI Cards (Usage Charts, Phone Mockups), Value Prop Section: 'Cut your electric bill by 20% or more', Split-Panel Sections (Text Left / Visual Right), Closing CTA Split Panel: 'Step into Daylight' with Lavender Imagery, How-It-Works Steps: Subscribe to Daylight / We Install / Power On

### Community 5 - "Daylight Narrative & Photography"
Cohesion: 0.33
Nodes (6): Design Inspiration Reference for Cortez Home Solutions Website, Daylight (Home Solar / Decentralized Energy Company), Decentralized Energy Network Story: 'Every home makes the network stronger', Full-Bleed Photographic Bands with Overlaid Headlines, Dark Narrative Band: 'Today's grid was built for yesterday's world' with Stat Callouts, Hero Section: 'Power your home for less' over Dusk House Photo

### Community 6 - "Warm Editorial Design System"
Cohesion: 0.33
Nodes (6): Cream Editorial Background Palette (#fff7e9), Warm Editorial Design System (Cream + Serif + Mono + Orange), Small Monospace Uppercase Section Kickers, Saturated Orange Accent (CTAs, Panels, Footer), Large Serif Display Headlines, Orange Footer with Wavy Topographic Line Texture

### Community 7 - "Project Wiki & Session Notes"
Cohesion: 0.50
Nodes (4): Wiki Hot Cache, BRO CODE Wiki Index, Wiki Log, Session Note: Cortez Home Solutions Website Build (2026-07-02)

## Knowledge Gaps
- **13 isolated node(s):** `nav`, `links`, `revealEls`, `form`, `Color Discipline (4-6 Named Values, One Accent)` (+8 more)
  These have ≤1 connection - possible missing edges or undocumented components.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Website Design Standards (CLAUDE.md)` connect `Design Standards & Hard Bans` to `Business Facts & Old Site Draft`, `Motion, Forms & Quality Floor`, `Project Wiki & Session Notes`?**
  _High betweenness centrality (0.174) - this node is a cross-community bridge._
- **Why does `Cortez Home Solutions Landing Page` connect `Business Facts & Old Site Draft` to `Design Standards & Hard Bans`, `Project Wiki & Session Notes`?**
  _High betweenness centrality (0.138) - this node is a cross-community bridge._
- **Why does `Daylight Homepage Full-Page Screenshot` connect `Daylight Product Sections` to `Daylight Narrative & Photography`, `Warm Editorial Design System`?**
  _High betweenness centrality (0.058) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Daylight Homepage Full-Page Screenshot` (e.g. with `Design Inspiration Reference for Cortez Home Solutions Website` and `Warm Editorial Design System (Cream + Serif + Mono + Orange)`) actually correct?**
  _`Daylight Homepage Full-Page Screenshot` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Cortez Home Solutions Landing Page` (e.g. with `Website Design Standards (CLAUDE.md)` and `Old Site Draft (Installation-Focused v1)`) actually correct?**
  _`Cortez Home Solutions Landing Page` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `Warm Editorial Design System (Cream + Serif + Mono + Orange)` (e.g. with `Daylight Homepage Full-Page Screenshot` and `Cream Editorial Background Palette (#fff7e9)`) actually correct?**
  _`Warm Editorial Design System (Cream + Serif + Mono + Orange)` has 6 INFERRED edges - model-reasoned connections that need verification._
- **Are the 2 inferred relationships involving `Cortez Home Solutions LLC (Brand)` (e.g. with `CHS Logo 01: Script Cortez Wordmark` and `CHS Logo 02: House Mark with Red Roof Chevron`) actually correct?**
  _`Cortez Home Solutions LLC (Brand)` has 2 INFERRED edges - model-reasoned connections that need verification._