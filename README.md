# Bernhard Koradi — Website

Portfolio built around the design principle:

> **One person. Three practices.**

Quiet, gallery-like, artwork-first. No personal-brand noise.

## Structure

```
bernhardkoradi/
├── index.html
├── css/styles.css
├── js/main.js
└── images/       
```

## How to run locally

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Replacing placeholder images

All current images are Unsplash placeholders chosen for atmosphere.  
Replace the `src` attributes in `index.html` with your own files (or absolute URLs).

Recommended placements:

| Section            | Suggested image                          |
|--------------------|------------------------------------------|
| Hero               | One exceptional atmospheric painting or photograph with negative space |
| Painting section   | Strong horizontal or near-square oil painting |
| Photography section| Tall vertical landscape photograph       |
| iDarok cover       | Actual *Hot Lips* artwork                |
| Selected Work grid | Mix of paintings, photographs, album art |

Keep file sizes reasonable (WebP preferred, ~1200–2000 px wide).

## Design decisions implemented

- Warm gallery white `#F3F1EC` + near-black text
- Cormorant Garamond (display) + Inter (UI)
- Full-viewport hero with subtle parallax on scroll
- Three-practice hierarchy: BERNHARDKORADI / KORADI / iDAROK
- Dark charcoal section only for music
- Editorial selected-work grid with hover reveal
- Minimal footer with catalogue-style domain
- Fully responsive mobile layout (no desktop squeeze)

## Next steps


1. Build `/painting`, `/photography`, `/music`, `/about` detail pages if desired
2. Optional: replace Inter with a licensed grotesk later

---

© 2026 Bernhard Koradi
