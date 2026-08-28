# I Do — Wedding Decoration & Event Planning Platform

Coursework project for **ICT2142 — E-Business Systems**, University of Ruhuna.
Phase 2 (Core Development) — Week 03 deliverable: homepage and navigation UI.

## What's built so far

| Week | Deliverable | Status |
|---|---|---|
| 02 | Wireframes, ER diagram, relational mapping, repo created | Done |
| 03 | Project setup, sticky navbar, footer, responsive homepage | Done |

## Tech stack

- HTML5 (semantic markup)
- CSS3 — custom stylesheet, no framework. Mobile-first with breakpoints at 640px / 960px
- Vanilla JavaScript (ES5-safe, no build step)
- Git / GitHub for version control

No framework was used deliberately: the module marks understanding of layout
and responsive behaviour, and hand-written CSS Grid/Flexbox shows that directly.

## Folder structure

```
I-Do-Wedding-Platform/
├── index.html          # Homepage
├── css/
│   └── style.css       # Tokens, layout, components, breakpoints
├── js/
│   └── main.js         # Nav toggle, cart badge, search filter
├── assets/
│   └── images/         # Static images
├── docs/
│   └── PROJECT_DIARY.md
└── README.md
```

## Running it

The project lives in the XAMPP web root, so Apache serves it directly.

1. Open the **XAMPP Control Panel** and click **Start** next to Apache.
2. Visit <http://localhost/iDo-Weddings> in a browser.

No build step, no `npm install` — the site is plain HTML, CSS and JavaScript.

If Apache refuses to start, port 80 is usually taken by another program
(Skype, IIS, or VMware). Either close it, or change Apache's port in
`httpd.conf` to 8080 and visit <http://localhost:8080/iDo-Weddings> instead.

Opening `index.html` straight from the file system also works, but serving it
over `http://localhost` is closer to how the site will actually run and avoids
browser restrictions on local files.

## Features on the homepage

- Sticky navbar: brand mark, search field, nav links, booking-list icon with badge counter
- Hamburger menu below 960px with Escape-to-close and `aria-expanded` state
- Hero with a fairy-light garland (SVG), headline, dual CTA and a stats strip
- Featured packages grid — 3 columns desktop, 2 tablet, 1 mobile
- Live search that filters the package grid, with an empty state
- Rental items promo band and a four-step booking explainer
- Footer with quick links, contact details, social links and copyright

## Accessibility notes

- Skip-to-content link
- Visible `:focus-visible` outlines throughout
- `prefers-reduced-motion` respected (garland flicker and transitions disabled)
- Colour contrast checked against WCAG AA for body text

## Author

D.S.R.N. Dahanayaka — TG/2024/2127
