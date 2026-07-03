# Work photos

Drop photos of completed jobs in this folder and they'll show up in the
"Recent work" section of the site (the horizontal photo strip).

## The gallery currently expects these filenames

Save your photos with these exact names (or change the `<img src="...">`
paths in `../../index.html` — search for `images/work/`):

- `glass-shower.jpg`
- `bath-remodel.jpg`
- `appliances.jpg`
- `shower.jpg`
- `blinds.jpg`
- `shower-repair.jpg`

Until a photo is added for a card, a small placeholder tile shows in its place,
so the section never looks broken.

## Tips

- **Landscape photos look best** — each is shown in a 4:3 frame and cropped to fill.
- **~1200px wide is plenty.** Smaller files load faster; keep them under ~500 KB if you can.
- **To add another photo/card:** in `index.html`, copy one whole
  `<figure class="work-card"> ... </figure>` block in the `id="work"` section,
  then change the image `src`, the `alt`, the `<span class="work-tag">` label,
  and the `<p class="work-desc">` description.
- **To change a caption:** edit the `work-tag` (short label) and `work-desc`
  (one-line description of what was done) for that card.

After adding or changing photos, commit and push — the live site updates
automatically within about a minute.
