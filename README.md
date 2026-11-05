# Airbnb UI Clone

A mobile-first 4Geeks class project built from an official **Next.js 16** scaffold with React, TypeScript, Tailwind CSS, and the App Router. Three connected views use fictional local listings. No real reservations or payments are made. This study is not affiliated with Airbnb.

## Run locally

Use Node.js **24+** (the unit tests use Node's TypeScript stripping) and npm.

```bash
npm ci
npm run dev
```

Open http://localhost:3000. For a production preview:

```bash
npm run build
npm start
```

## Pages and interactions

- `/`: one-second loading simulation, title/location search on every keystroke, combined category filters, responsive listing grid, and session-only favorite buttons.
- `/catalog`: the same listing cards, numeric ascending/descending price sorting, and a client-only React Leaflet map with price pins and room links. If tiles or the map module cannot load, a placeholder keeps the list usable.
- `/rooms/[id]`: ID-based simulated loading, wrapping photo gallery, rating/reviews/location, host, amenities, bounded guest controls, and a React DayPicker range calendar. A valid checkout enables the local demo CTA; the quote is nights × nightly price. Changing guests or dates clears confirmation.
- All route links use Next.js Link. Unknown room IDs show a recovery link.

## Assignment evidence

Start with [`context.md`](context.md), written **before application code**. It contains the interface brief, the vision prompt used with each actual 375px Airbnb screenshot, the generated component specifications, and intentional deviations required by the rubric.

- [Airbnb mobile references](docs/references/)
- [Required-only acceptance record](docs/required-checkpoint.md) — Git tag `required-complete`
- [Final verification](docs/verification.md)
- [Beginner walkthrough](docs/walkthrough.md)
- [Local image sources](docs/image-credits.md)

The scaffold was generated using `create-next-app@16` with TypeScript, Tailwind, ESLint, App Router, npm, and no third-party example template. It was generated in a temporary directory, then copied into the project while preserving the pre-code brief and screenshots. No existing coursework app was reused.

## Structure

`app/` contains route entrypoints and the shared layout. `components/` contains small const functional components, one per file. `types/` defines Listing and Room. `lib/` contains fictional fixtures and pure filtering, sorting, and calendar-night helpers. Home and room data effects both clear their timers on unmount. The room route keys its view by ID so another room starts with fresh state.

All authored styling uses Tailwind utilities. There is no prebuilt UI kit and no authored inline style object. The explicitly allowed optional libraries are React Leaflet 5/Leaflet and React DayPicker 9; Leaflet brings its required vendor CSS and runtime positioning. Map tiles require internet access and retain OpenStreetMap attribution. Local photography works without an external photo service.

## Checks

```bash
npm run typecheck
npm run lint
npm test
npm run build
npx playwright install chromium
npm run test:e2e
```

The browser suite uses a production server and covers 375px, 768px and 1440px. Run `npm run build` first. To avoid serving an older build during checks, stop any older preview before rebuilding. Playwright starts a production preview automatically if port 3000 is free. Raw test artifacts go into ignored `output/` and `test-results/`; selected handoff screenshots are committed under `docs/verification/`.

## Limits and submission

Eight fictional listings, generic placeholder photography, no authentication/backend/availability checks, no fees or taxes, no persistence across refreshes, and no payment flow. The date picker uses the viewer's local calendar date. A missing room is a friendly client-rendered state, not a server 404.

Submit this **public repository URL**, not a localhost URL:

https://github.com/leelaamaj/airbnb-ui-clone

Repository delivery, course-portal submission, and instructor grading are separate statuses. See the verification record for the observed submission state. Hosting is outside the assignment's stated requirements.
