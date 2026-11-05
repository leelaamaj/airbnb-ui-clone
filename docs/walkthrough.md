# Your guided walkthrough

Use this alongside the running app. Try each checkpoint yourself before explaining the code to your instructor.

## 1. Understand the three pages

Home helps the traveler find a stay. Catalog helps them compare prices and locations. Room Detail describes one selected stay and lets them prepare a fictional booking. `context.md` records this before implementation, using the real Airbnb screenshots as references. The class requirements take precedence where today's Airbnb layout differs.

**Try:** follow Explore → All stays → any card → Back to all stays. Watch the address bar change.

## 2. Understand routes and components

A route is a URL. `app/page.tsx` is `/`, `app/catalog/page.tsx` is `/catalog`, and `app/rooms/[id]/page.tsx` handles room IDs. The square brackets mean the ID is variable. `app/layout.tsx` supplies the shared navbar and footer.

A component is a reusable piece of interface. `ListingCard` is used by `ListingGrid` on both Home and Catalog, so fixing a card fixes both views. Props are inputs passed into a component: `<ListingCard listing={listing} />` gives it one listing to display.

**Try:** open `/rooms/coastal-retreat`, then `/rooms/city-loft`. Each ID finds a different fixture in `lib/listings.ts`. An unknown ID produces a helpful message.

## 3. Understand TypeScript data

`Listing` defines the shared card data: ID, title, location, price, rating, category, photos, coordinates, beds and guest capacity. `Room` extends that shape with reviews, host, amenities and description. The type helps catch mistakes such as a price being text instead of a number. It does not fetch data or create a database.

**Explain:** why does sharing an ID between a card and a room matter?

## 4. Understand useState

`useState` remembers a value for the currently mounted component and requests a new render when it changes. `HomeView` remembers query, category, displayed listings and loading. An input event updates the query and filtered list; a category click applies the same filtering helper with another category.

`CatalogView` remembers the sort order. `sortListings` sorts a copy, protecting the original fixture order. `PhotoGallery` remembers a photo index; modulo arithmetic wraps it at either end. `BookingCard` remembers guests, date range and demo confirmation. Guest buttons clamp the count between one and the room's capacity.

**Try:** choose Beach, type Malibu, then type Atlantis. Clear the input and choose All homes. Sort both ways in Catalog. Cycle past the last photo. Attempt to go beyond both guest limits.

## 5. Understand useEffect and cleanup

`useEffect` runs lifecycle work after rendering. Home begins with an empty array and loading=true. Its effect starts a one-second timer, then supplies the fixture data and clears loading. Room Detail similarly searches the fixtures using its URL ID after a delay.

Each effect returns `clearTimeout`, so leaving the page cancels its pending timer. This simulates an asynchronous fetch for the exercise; it does not call a backend. The room view is keyed by ID to reset its state when visiting another room.

**Try:** reload Home and Room Detail to see both loading states.

## 6. Understand Next.js Link

Next Link performs client navigation between routes. It can replace the page content without reloading the entire browser document. Our browser test sets a temporary window marker and checks that it survives Home → Catalog → Room → Catalog. That checks actual behavior, not just whether the Link import exists.

The skip-to-content anchor stays within the same document. OpenStreetMap attribution is an external link supplied by the map library; neither is a route-navigation exception.

## 7. Understand the optional map

`MapPanel` dynamically loads `ListingMap` only in the browser because Leaflet needs browser APIs. Each marker gets the listing's coordinates, price, and a popup Link to its room. OpenStreetMap supplies tiles; the attribution must stay visible. If the module or tiles fail, the cards remain usable with a map fallback.

**Try:** click a price pin, then its room link. The fixture coordinates describe fictional approximate locations.

## 8. Understand dates and totals

`DateSelector` uses React DayPicker to select a range. Past dates are disabled. `countNights` rejects incomplete, past, same-day and reversed ranges, then uses calendar-day differences. Calendar days matter because daylight-saving transitions can make a day shorter or longer than 24 hours.

`BookingSummary` multiplies nights by nightly price. Three nights at $245 is $735. Guests do not change that nightly rate. A valid range enables Reserve; clicking it only updates local confirmation state. Editing dates or guests clears that confirmation.

**Try:** choose two future dates, check the arithmetic, reserve, then change guests or clear dates. No real reservation is created.

## 9. Understand mobile-first styling

Tailwind's unprefixed utilities define the mobile layout. Classes beginning with `md:` start at 768px. Home uses one mobile column and more columns on larger screens. Catalog puts its map below the cards on mobile and beside them on desktop. Components are custom const functions; the optional calendar and map are the exceptions explicitly permitted by the assignment.

**Try:** inspect 375px, 768px and desktop widths. Tab through controls and look for the coral focus outline.

## 10. Explain verification and submit

TypeScript checks data/type usage. ESLint checks code rules. Unit tests exercise pure search, sorting and date logic. Browser tests exercise real navigation, UI state, images, layout, map failure and keyboard operation. `required-complete` preserves the tested required-only version before extras.

Review the public repository, references, specs and verification record. Only confirm a course authorship or understanding declaration if it accurately reflects your participation and understanding. A successful repository push is separate from a successful course submission, and neither means an instructor has graded the project.
