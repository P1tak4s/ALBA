# ALBA Wellbeing — Website

A modern, calm-luxury website for **ALBA Wellbeing** — companionship, wellbeing support,
hypnotherapy, Reiki, life transitions, end-of-life and bereavement support with
Lina Simavičiūtė (Alba). Louth, Lincolnshire, surrounding areas, and online.

> Professional Knowledge. Human Presence. A Happy We.

## Open it
No build step, no dependencies — open `index.html` in any browser.

```
open index.html        # macOS
```

## Structure
```
ALBA/
├── index.html          # Main one-page site
├── consent.html        # Client Agreement & Confidentiality (printable)
├── css/styles.css      # Design system — cream / chocolate / bronze
├── js/main.js          # Nav, scroll reveal, active links, booking form
├── favicon-32.png      # Soul Print favicon (from your artwork)
├── favicon-256.png
├── apple-touch-icon.png
├── Gallery/Logo/
│   ├── Alba logo.png    # Your original lockup (kept untouched)
│   ├── Favicon.png      # Your original footprint
│   └── alba-figure.png  # Figure cropped + background removed for the hero
└── README.md
```

## Design
- **Palette:** warm cream backgrounds, chocolate text, soft bronze accents. No bright colours.
- **Type:** Cormorant Garamond (display) + Manrope (body), via Google Fonts.
- **Feel:** editorial spacing, soft rounded sections, subtle shadows, gentle scroll motion.
- Fully responsive (mobile-first), accessible (semantic landmarks, focus states,
  reduced-motion support), smooth-scrolling.

## Sections (index.html)
Header · Hero (your ALBA figure) · About + credentials · A Personal Note · The ALBA
Philosophy · Transparent Happiness · Services (9) · Pricing · Principles (19) ·
How We Begin · Important Information & Confidentiality · My Intention · Brand Statement
(Soul Print) · Contact / Booking · Footer.

## Your logo & favicon
- **Favicon** uses your footprint **Soul Print** (`Favicon.png`) across browser tabs and the
  brand statement motif.
- **Hero** features the elegant **Alba figure**, cropped from `Alba logo.png` with its
  background removed so it floats on the cream.
- **Logo wordmark corrected to "ALBA Wellbeing."** Your original said "ALBA Rooms"; the
  wordmark was regenerated (Baskerville caps, matched to the original) and the full corrected
  lockup is featured in the footer.
  - `Gallery/Logo/alba-wellbeing-logo.png` — full lockup, cream background (for print / reuse).
  - `Gallery/Logo/alba-wellbeing-logo-web.png` — transparent version (used on the site).
  - Originals (`Alba logo.png`, `Favicon.png`) are kept untouched.
  - The small sub-line still reads "Hypnotherapy · Reiki · Massage / A place to breathe freely
    again" — tell me if you'd like that updated to reflect the wider services too.

## Booking form
Front-end only — shows a friendly confirmation on submit. To receive real enquiries,
add an `action`/`method` to `<form id="booking-form">` (e.g. Formspree / Netlify Forms)
and remove the demo handler in `js/main.js`.

## Important
ALBA Wellbeing supports wellbeing and quality of life. It does not replace medical,
nursing, psychological, or emergency care. The Client Agreement page (`consent.html`)
holds the full consent and confidentiality text and can be printed or saved as PDF.
