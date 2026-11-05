# Airbnb interface brief — written before application code

## User and purpose
A traveler wants to find a comfortable vacation rental, compare the location and nightly price, inspect a room, and choose guests and travel dates. This class exercise recreates that browsing flow with fictional local data and a demo confirmation; it never makes a real reservation.

## Three pages
- Home (`/`): navigation, live destination/title search, a horizontal category row, and a mobile-first grid of stays with photos, titles, locations, nightly prices, and ratings. Initial loading is simulated.
- Catalog (`/catalog`): a result count, price sort, the same listing cards, and a map beside results on desktop and below them on mobile.
- Room (`/rooms/[id]`): a photo gallery, title/rating/review/location header, host row, amenities, guest counter and booking card. Room data loads using the route ID. The optional date picker computes a local quote.

## Reference evidence and vision prompts
Captured from the actual Airbnb website on 2026-11-05 at **375 × 812**. Screenshots are references, not application assets. They were visually inspected before these specifications and before application code.
- `docs/references/airbnb-home-375.png`: https://www.airbnb.com/
- `docs/references/airbnb-catalog-375.png`: search results reached through the visible “Stay in Long Beach” link on Home.
- `docs/references/airbnb-room-375.png`: https://www.airbnb.com/rooms/856652898715040936 (a visible Home listing link).

For **each attached screenshot**, the vision prompt is: “Identify the visible Airbnb components, propose const React component names and TypeScript props, and describe their layout relationships at 375px. Distinguish visible evidence from sections supplied by the assignment. Use custom Tailwind components, and prioritize the class rubric when it differs from the current Airbnb UI.”

### Home screenshot → component specification
The screenshot shows a white page, a rounded search pill with a search icon, a horizontally scrolling category strip, bold section headings, rounded listing photography, small ratings/prices, and a fixed bottom navigation. Build `Navbar` (active route), `SearchBar` (value, onChange), `CategoryFilter` (active, onChange), `ListingGrid` (listings), and `ListingCard` (listing). A shared `Footer` closes the page. On desktop show the coral brand and inline route links. In the class version, the mobile grid is one column, rather than the screenshot’s horizontal carousels. Keep black typography, soft gray separators, rounded photos and coral action accents.

### Catalog screenshot → component specification
The screenshot shows a compact search header, horizontally scrolling filter pills, a map with white price pins, a rounded results surface, a large listing photo, and bottom navigation. Build `CatalogView`, `ResultsHeader` (count, sort, onSort), reused `ListingGrid`, and `MapPlaceholder` before adding `ListingMap` (listings). At 375px results precede the map per the rubric, although the reference places the map above results. At ≥768px use a two-panel list/map layout. Each card remains a Next Link to its room. Keep sort labels readable and the map attribution visible.

### Room screenshot → component specification
The screenshot shows a top action/back row, a large full-width photo with an index badge, centered title and location, a review summary, a host avatar row separated by fine rules, and a coral booking CTA. Build `RoomView` (id), `PhotoGallery` (images, title; local index state), `RoomHeader` (room), `HostInfo` (host), `Amenities` (items), `BookingCard` (room), and `GuestCounter` (value, max, onChange). The amenities and full booking form are supplied by the assignment rather than inferred from this first viewport. Stack the sections on mobile; put booking beside details on desktop. Use a visible price, bounded guest controls, and a local demo response. Later add `DateSelector` (range, onSelect) and a nights/price breakdown.

## Architecture and constraints
- Next.js 16 App Router, TypeScript, Tailwind, npm, no third-party starter.
- `/app` for route entrypoints, `/components` for one-file-per-component UI, `/types` for shared shapes, `/lib` for fixtures and pure helpers.
- All components use `const`; keep JSX plus logic approximately ≤80 lines per component. Use custom inline SVG icons, not a prebuilt UI kit.
- `useState`: query, displayed listings, category, sort, photo index, guests, and optional dates. `useEffect`: cancellable one-second Home and room data simulations.
- Use Next.js Link for internal navigation. Use local images with descriptive alt text. Fictional listing IDs are shared across all views.
- Own styling uses Tailwind classes, no style objects. Leaflet's required vendor stylesheet and runtime positioning are third-party map internals, explicitly permitted for the optional map, not authored application styling.
- Required checkpoint must be committed before adding React Leaflet and React DayPicker. DayPicker receives Tailwind class names. Map uses OpenStreetMap tiles with attribution and a fallback.

## Deliberate boundaries
No login, real bookings, payments, backend, Airbnb data scraping, or claim of affiliation. No deployment is needed for the assignment. Category filtering and price sorting operate on fictional local records. Brand styling is a study reference, not an original redesign. Mobile-first is 375px; the desktop breakpoint starts at 768px. Optional features only follow verification of the required version.
