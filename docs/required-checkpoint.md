# Required version acceptance — 2026-11-05

Before adding optional dependencies, TypeScript, ESLint, production build, four Node tests, and six Playwright tests passed. Browser tests use the production server, not only the development build.

- Home: empty initial listing state, visible one-second loading, live title/location search, category intersection and highlight, no-results message, clearing restores eight stays.
- Catalog: shared cards, eight-result count, ascending/descending numeric price order, map placeholder below cards at 375px and alongside at 768px and 1440px.
- Room: matching URL ID, visible loading, unknown-ID recovery, gallery wraparound, header/rating/reviews/location, host, amenities, booking card, guest min/max and local confirmation.
- Navigation: Home → Catalog → Room → Catalog preserves a window marker, proving no full document reload. Direct room URL also works.
- Responsive: all three routes tested at 375, 768 and 1440; no page overflow, local images load, Home has one mobile column and multiple desktop columns.
- Structure: own const components, shared Listing/Room types, no UI kit or inline style objects. Reference-derived specs in context.md preceded code.

Visual review compared reference and render: white surfaces, charcoal typography, coral CTA, rounded photos, search pill, category icons, card/rating/price anatomy, host row and fine separators. Deliberate differences: fictional copy/photos, single-column mobile grid, persistent top route links, static footer, catalog map after results on mobile, and room booking after details instead of a fixed bottom bar. These serve the rubric and the reduced three-page scope; no claim of pixel identity to the changing production site.

Browser CLI captured Airbnb references but repeatedly lost its daemon connection on localhost. Acceptance screenshots were therefore captured with standard Playwright Chromium. The in-app browser lacked viewport control.

Screenshots: `docs/verification/required/`. The `required-complete` Git tag identifies the required-only version.
