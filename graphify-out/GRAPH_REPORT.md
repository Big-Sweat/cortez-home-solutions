# Graph Report - .  (2026-07-03)

## Corpus Check
- 9 files · ~1,066,391 words
- Verdict: corpus is large enough that graph structure adds value.

## Summary
- 85 nodes · 112 edges · 9 communities (7 shown, 2 thin omitted)
- Extraction: 82% EXTRACTED · 18% INFERRED · 0% AMBIGUOUS · INFERRED: 20 edges (avg confidence: 0.83)
- Token cost: 104,000 input · 8,033 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Site Structure & Deploy|Site Structure & Deploy]]
- [[_COMMUNITY_Daylight Reference & Design System|Daylight Reference & Design System]]
- [[_COMMUNITY_Design Standards & Hard Bans|Design Standards & Hard Bans]]
- [[_COMMUNITY_Interaction Layer (script.js)|Interaction Layer (script.js)]]
- [[_COMMUNITY_Business Facts, Services & Wiki|Business Facts, Services & Wiki]]
- [[_COMMUNITY_Script Wordmark Logo (CHS-01)|Script Wordmark Logo (CHS-01)]]
- [[_COMMUNITY_Recent Work Gallery & Lightbox|Recent Work Gallery & Lightbox]]
- [[_COMMUNITY_House Mark Logo (CHS-02)|House Mark Logo (CHS-02)]]
- [[_COMMUNITY_Old Site Draft|Old Site Draft]]

## God Nodes (most connected - your core abstractions)
1. `Daylight Homepage Full-Page Screenshot` - 17 edges
2. `Cortez Home Solutions Single-Page Site` - 15 edges
3. `Website Design Standards (CLAUDE.md)` - 11 edges
4. `Warm Editorial Design System (Cream + Serif + Mono + Orange)` - 6 edges
5. `Recent Work Photo Gallery` - 5 edges
6. `Shared SVG Marks (House, Chevron, Script Wordmark)` - 5 edges
7. `Hard Bans` - 4 edges
8. `Cortez Home Solutions Project Overview` - 4 edges
9. `Estimate Strip Section` - 4 edges
10. `Project Hot Cache` - 4 edges

## Surprising Connections (you probably didn't know these)
- `Real Business Facts (Angi + Old Site)` --conceptually_related_to--> `Warm Editorial Design System`  [INFERRED]
  wiki/hot.md → README.md
- `Session Note: Cortez Home Solutions Website Build (2026-07-02)` --references--> `Website Design Standards (CLAUDE.md)`  [EXTRACTED]
  wiki/meta/2026-07-02-cortez-home-solutions-website-build.md → CLAUDEwebdesign copy (1).md
- `Site Asset Copy: CHS Logo 02 House Mark` --shares_data_with--> `CHS Logo 02: House Mark with Red Roof Chevron`  [INFERRED]
  cortez-home-solutions/assets/CHS_logo-02.svg → CHS_logo-02.svg
- `Static Build (No Framework, No Build Step)` --conceptually_related_to--> `GitHub Pages Deploy Workflow`  [INFERRED]
  README.md → .github/workflows/pages.yml
- `Upload Site Folder Artifact Step` --references--> `Cortez Home Solutions Single-Page Site`  [EXTRACTED]
  .github/workflows/pages.yml → cortez-home-solutions/index.html

## Import Cycles
- None detected.

## Hyperedges (group relationships)
- **Static Site Build & GitHub Pages Deploy Flow** — cortez_home_solutions_index_site, _github_workflows_pages_upload_site_artifact, _github_workflows_pages_deploy_job [INFERRED 0.85]
- **Recent Work Gallery: Photos, Filenames & Lightbox** — cortez_home_solutions_index_recent_work_gallery, cortez_home_solutions_index_lightbox, cortez_home_solutions_images_work_readme_expected_filenames [EXTRACTED 0.75]
- **Estimate Conversion Flow** — cortez_home_solutions_index_estimate_strip, cortez_home_solutions_index_estimate_form, readme_placeholder_contact_info [INFERRED 0.75]
- **Warm Editorial Design System Pattern** — screencapture_godaylight_2026_06_30_17_55_39_cream_editorial_palette, screencapture_godaylight_2026_06_30_17_55_39_serif_display_typography, screencapture_godaylight_2026_06_30_17_55_39_mono_label_typography, screencapture_godaylight_2026_06_30_17_55_39_orange_accent_color [INFERRED 0.95]

## Communities (9 total, 2 thin omitted)

### Community 0 - "Site Structure & Deploy"
Cohesion: 0.16
Nodes (18): Pages Deploy Job, GitHub Pages Deploy Workflow, Upload Site Folder Artifact Step, Dark Band Section, Estimate Form (FormSubmit), Estimate Strip Section, FAQ Accordion, Site Footer (+10 more)

### Community 1 - "Daylight Reference & Design System"
Cohesion: 0.20
Nodes (18): Daylight Homepage Full-Page Screenshot, Energy App UI Cards (Usage Charts, Phone Mockups), Value Prop Section: 'Cut your electric bill by 20% or more', Design Inspiration Reference for Cortez Home Solutions Website, Cream Editorial Background Palette (#fff7e9), Daylight (Home Solar / Decentralized Energy Company), Decentralized Energy Network Story: 'Every home makes the network stronger', Warm Editorial Design System (Cream + Serif + Mono + Orange) (+10 more)

### Community 2 - "Design Standards & Hard Bans"
Cohesion: 0.19
Nodes (13): Anti-AI-Look Principle (Two-Second Glance Test), Color Discipline (4-6 Named Values, One Accent), Hard Bans, Layout and Composition (Hero as Thesis), Motion Restraint, Quality Floor (Accessibility Baseline), Follow User References First, Responsive Mobile-First Requirement (+5 more)

### Community 3 - "Interaction Layer (script.js)"
Cohesion: 0.18
Nodes (9): form, links, nav, onScroll(), progress, ratingEl, revealEls, toggle (+1 more)

### Community 4 - "Business Facts, Services & Wiki"
Cohesion: 0.22
Nodes (10): Blueprint Shop Drawing SVG, Angi Reviews Section, Services Section, Project Hot Cache, Knowledge Graph Artifacts, Do Not Claim Licensed & Insured Constraint, Real Business Facts (Angi + Old Site), Old Site Copy Integration (+2 more)

### Community 5 - "Script Wordmark Logo (CHS-01)"
Cohesion: 0.47
Nodes (6): HOME SOLUTIONS Subtitle (Baskerville Old Face), CHS Logo Variant 01, Cortez Script Wordmark (Logo 01), HOME SOLUTIONS Subtitle (assets copy, Baskerville Old Face), CHS Logo Variant 01 (site assets copy), Cortez Script Wordmark (assets copy)

### Community 6 - "Recent Work Gallery & Lightbox"
Cohesion: 0.50
Nodes (5): Add Work Photos Guide, Expected Work Photo Filenames, Missing-Photo Placeholder Tile Fallback, Work Photo Lightbox, Recent Work Photo Gallery

## Knowledge Gaps
- **23 isolated node(s):** `Typography Standards (Display + Body Pairing)`, `Color Discipline (4-6 Named Values, One Accent)`, `Layout and Composition (Hero as Thesis)`, `Motion Restraint`, `Responsive Mobile-First Requirement` (+18 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **2 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Cortez Home Solutions Single-Page Site` connect `Site Structure & Deploy` to `Business Facts, Services & Wiki`, `Recent Work Gallery & Lightbox`?**
  _High betweenness centrality (0.107) - this node is a cross-community bridge._
- **Why does `Recent Work Photo Gallery` connect `Recent Work Gallery & Lightbox` to `Site Structure & Deploy`?**
  _High betweenness centrality (0.034) - this node is a cross-community bridge._
- **Are the 2 inferred relationships involving `Daylight Homepage Full-Page Screenshot` (e.g. with `Design Inspiration Reference for Cortez Home Solutions Website` and `Warm Editorial Design System (Cream + Serif + Mono + Orange)`) actually correct?**
  _`Daylight Homepage Full-Page Screenshot` has 2 INFERRED edges - model-reasoned connections that need verification._
- **Are the 6 inferred relationships involving `Warm Editorial Design System (Cream + Serif + Mono + Orange)` (e.g. with `Daylight Homepage Full-Page Screenshot` and `Cream Editorial Background Palette (#fff7e9)`) actually correct?**
  _`Warm Editorial Design System (Cream + Serif + Mono + Orange)` has 6 INFERRED edges - model-reasoned connections that need verification._
- **What connects `Typography Standards (Display + Body Pairing)`, `Color Discipline (4-6 Named Values, One Accent)`, `Layout and Composition (Hero as Thesis)` to the rest of the system?**
  _25 weakly-connected nodes found - possible documentation gaps or missing edges._