# Mahmoud & Merna — Wedding Invitation

11 August 2026 · Police Officers Club, Zamalek, Cairo

Two versions of the same design:

- **`app/`** — React + Tailwind CSS + Framer Motion build (recommended). Run `npm install && npm run dev` to develop, `npm run build` to produce a static `dist/` folder ready for GitHub Pages or any static host.
- **`simple/`** — single self-contained `index.html` (plus `music.mp3`) version, no build step required. Just open it in a browser or upload both files as-is.

## Before going live

- Confirm the venue name/city and swap in real photos if you have them (`app/src/assets/`).
- Set `RSVP_URL` (in `app/src/components/RSVP.jsx` or `simple/index.html`) to a Google Apps Script Web App URL if you want RSVP submissions saved to a Google Sheet — otherwise the form just shows a thank-you message without saving anywhere.
