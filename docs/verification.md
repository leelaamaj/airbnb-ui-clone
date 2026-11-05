# Verification and delivery record

Date: 2026-11-05. Tested locally on Node 24.1.0, Next.js 16.4.5, React 19.3, Tailwind 4, Playwright Chromium.

## Checks

| Check | Result |
| --- | --- |
| TypeScript (`npm run typecheck`, also checked in production build) | Passed |
| ESLint (`npm run lint`) | Passed |
| Unit tests (`npm test`) | 9 passed |
| Production build (`npm run build`) | Passed; Home and Catalog prerendered, room route dynamic |
| Browser acceptance (`npm run test:e2e`) | 10 passed against production preview |
| Responsive layouts | All three routes at 375px, 768px and 1440px; no page overflow |
| Production dependency audit | 0 reported vulnerabilities |
| Full development dependency audit | 8 moderate notices inherited through eslint-config-next/typescript-eslint/minimatch; no high/critical notices. No forced Next.js downgrade was applied. |
| Authored component size | All component files below 80 lines, including imports |

## Rubric mapping

| Class evaluation | Implementation / evidence |
| --- | --- |
| Pre-code context describes pages, components, user | Root `context.md`; brief written before scaffold and component code |
| Next.js 16, TypeScript, Tailwind, App Router; no third-party starter | Official create-next-app@16 scaffold; initial commit `c05b603` |
| Three navigable routes | `app/` Home, Catalog, and rooms/[id] entrypoints |
| Next Link and no reloads | Link components; browser window marker survives complete navigation flow |
| Mobile-first 375px before desktop | Single mobile card column; responsive tests at 375/768/1440 |
| Reused listing cards | Both views render ListingGrid → ListingCard |
| At least three useState cases | Query, category, displayed cards, sort, gallery index, guests, date range, confirmation |
| Two useEffect simulations with loading | HomeView and RoomView: empty initial data, one-second timer, visible status, cleanup |
| Five room sections | PhotoGallery, RoomHeader, HostInfo, Amenities, BookingCard |
| Small individual components | One const component per file under components; every file below 80 lines |
| Const functional components | Source review; no authored class components |
| Typed Listing and Room | `types/listing.ts` |
| Tailwind, no authored style objects/UI kit | Source review; Leaflet's required vendor CSS/runtime positioning is confined to the expressly allowed optional map |
| Visible screenshot-to-spec workflow | Three actual 375×812 Airbnb reference PNGs and documented vision prompts/specs in context.md |
| Optional map after required work | React Leaflet pins, room links, OSM attribution, module/tile failure fallback; added after required-complete tag |
| Optional calendar after required work | React DayPicker; past/incomplete/same-day/reversed ranges rejected, nights × price, bounded guests, local confirmation |

## Scenarios exercised

- Home: loading, typing, category highlight, combined filtering, empty results, clearing input/category.
- Catalog: exact ascending and descending numeric price order; list stays unchanged by sorting; shared cards.
- Navigation: Home → Catalog → matching Room → Catalog with a persistent window marker; direct room URLs; unknown IDs recover gracefully.
- Room: load status; previous/next photo wrap; guest lower and upper bounds; all required information.
- Dates: disabled past date and incomplete reserve; November 20–23 gives three nights and $735 at $245/night; confirmation clears after date or guest edits; clear dates disables Reserve.
- Unit dates: invalid/missing values, past dates, equal/reversed dates, today, month/year rollover, spring/fall daylight saving in America/Los_Angeles.
- Map: all eight price markers, attribution, popup Link navigation, deliberately blocked tiles show fallback while all cards remain navigable.
- Keyboard: skip link, category toggle, visible outline, favorite toggle, user-menu summary. Search and sort have labels; photos have alt text; gallery and guest buttons have accessible names. This is a focused accessibility check, not a full WCAG certification.

## Visual review

Actual Airbnb references and final browser PNGs were opened with the image viewer and compared. Native reference width was 375px; final renders were checked at that width plus 768px and 1440px. The in-app browser could not set viewport dimensions, and webcmd repeatedly disconnected on localhost, so local verification used standard Playwright Chromium.

| Comparison point | Evidence and result |
| --- | --- |
| Surface and palette | White page, charcoal text, subtle gray rules, coral actions; matches reference vocabulary |
| Search and categories | Rounded search pill, icon/label row, scrolling mobile categories; selected border/color confirmed |
| Card anatomy | Rounded photography, favorite control, title/location, rating, nightly price; local fictional copy/photos |
| Typography and spacing | Clear heading/body hierarchy, consistent card gaps, generous whitespace; no overflow at tested widths |
| Room structure | Gallery index and previous/next controls, title/reviews/location, separated host row, amenity grid, booking card |
| Calendar selected state | Visual review found white middle-range numbers on a pale background; corrected to charcoal numbers, with dark endpoints |
| Keyboard state | Coral outlines on controls and summary; mobile user menu visible after a required-version review fix |
| Catalog map | Loaded tiles and price pins, visible attribution, list/map breakpoint behavior verified |

Intentional deviations from the current production screenshots: one mobile card column (required by class), top route links and static footer instead of a fixed bottom nav, catalog map below results on mobile, room booking after details instead of a fixed bottom CTA, fictional headings and fixtures, and only three page routes. The above-the-fold copy was reviewed against the component brief: page titles, placeholder search text and listing names are intentional fictional equivalents; there are no additional marketing sections. This is faithful to the recorded class component specifications with those documented adaptations, not a claim of pixel identity to Airbnb's evolving website.

Selected final screenshots are in `docs/verification/final/`; the required-only screenshots are in `docs/verification/required/`. Raw transient QA files are ignored by Git.

## Delivery and submission status

Public repository: https://github.com/leelaamaj/airbnb-ui-clone

- `required-complete` points to required-only commit `2302a90`, recorded before optional dependencies and code.
- The final implementation, reference/spec evidence, walkthrough, and selected screenshots are delivered in this repository.
- On 2026-11-05, after the learner explicitly confirmed the authorship declaration was accurate given the AI assistance and authorized submission, the public repository URL was submitted through 4Geeks.
- The portal now shows **Project pending**, no teacher feedback, and no code review yet. This verifies submission for review; instructor approval and grading have not been observed.
- The learner authorized updating all task checkboxes; **48 / 48** was verified after reloading the assignment page.
