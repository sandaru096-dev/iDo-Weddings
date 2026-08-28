# Project Diary — I Do

## Week 03 — Homepage & Navigation UI
**Date:** 28 August 2026 · Single development session

### Stage 1 — Project setup
- Cloned the Week 02 repository into `C:\xampp\htdocs\iDo-Weddings` so the site
  can be served over `http://localhost` rather than `file://`.
- Created the folder structure: `css/`, `js/`, `assets/images/`, `docs/`.
- Added `.gitignore` (OS files, editor folders, node_modules) before the first
  commit, so editor noise was never tracked.
- Decided against Bootstrap/Tailwind and wrote custom CSS, so the responsive
  behaviour is hand-written rather than inherited from a framework's grid classes.
- Commit: `chore: set up folder structure and gitignore`

### Stage 2 — Design tokens and navbar
- Defined a token block in `:root` (colours, fonts, max width, navbar height)
  so the whole site can be re-themed from one place.
- Built the sticky navbar: inline-SVG ring logo, search field, nav links, and a
  booking-list icon with a badge counter.
- Commit: `feat: sticky navbar with search and cart badge`

### Stage 3 — Hero and responsive layout
- Built the hero section with the SVG fairy-light garland as the signature element.
- Added the mobile hamburger menu and the 640px / 960px breakpoints, which fixed
  the navbar wrapping seen at tablet width in Stage 2.
- Commit: `feat: responsive hero and mobile navigation`

### Stage 4 — Content sections and scripting
- Built the featured packages grid (6 cards), the rentals promo band, the
  four-step booking explainer and the footer.
- Wrote `main.js`: nav toggle, cart counter with toast notification, and live
  search filtering over the package grid.
- Commit: `feat: package grid, rentals promo and footer`

### Stage 5 — Testing and cleanup
- Tested at 390px, 820px and 1440px using browser device emulation.
- Fixed the navbar overflow at tablet width, the toast flashing on page load,
  and the anchor links scrolling under the sticky header.
- Added the skip link, focus styles and `prefers-reduced-motion` support.
- Commit: `fix: responsive and accessibility cleanup`
