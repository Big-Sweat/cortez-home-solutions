# Cortez Home Solutions — Website

Marketing site for **Cortez Home Solutions LLC**, a home installation & repair company in
Shawnee, Kansas — appliances, glass shower doors and enclosures, bathroom remodels, showers,
and blinds. Angi Approved, rated 5.0.

The site is a static build: plain HTML, CSS, and JavaScript. No framework, no build step.

## Structure

- `cortez-home-solutions/` — the website
  - `index.html` — single-page site
  - `styles.css` — design system and layout
  - `script.js` — interactions (mobile nav, scroll reveals, estimate form, self-drawing SVGs)
  - `assets/` — brand logos (SVG)
- `CHS_logo-01.svg`, `CHS_logo-02.svg` — source brand marks
- `index of old site.html` — earlier design draft, kept for reference
- `CLAUDEwebdesign copy (1).md` — design standards the build follows
- `wiki/` — project notes
- `graphify-out/` — knowledge-graph artifacts (open `graph.html` in a browser)

## Run locally

Serve the site folder with any static server, e.g.:

```
python -m http.server 4173 --directory cortez-home-solutions
```

Then open <http://localhost:4173>.

## Design

Warm editorial system — cream `#fff7e9`, ink `#1b1512`, brand red `#b41f24`; Space Grotesk
headings, Schibsted Grotesk body, JetBrains Mono labels. Recurring roof-chevron motif drawn
from the logo. Fully responsive and respects `prefers-reduced-motion`.

## Before launch

- Contact details (phone `(913) 555-0142`, email) are **placeholders** pending real business info.
- The estimate form is front-end only and needs a submission endpoint (e.g. Formspree, Netlify Forms).
