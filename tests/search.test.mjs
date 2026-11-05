import test from 'node:test';
import assert from 'node:assert/strict';
import { filterListings, sortListings } from '../lib/search.ts';
const listings = [
  { id: 'a', title: 'Ocean loft', location: 'Malibu', category: 'Beach', price: 200 },
  { id: 'b', title: 'City loft', location: 'Los Angeles', category: 'City', price: 120 },
  { id: 'c', title: 'Garden house', location: 'Ojai', category: 'Countryside', price: 260 },
];
test('search is case-insensitive, trims whitespace, and matches title or location', () => {
  assert.deepEqual(
    filterListings(listings, ' MALIBU ').map((x) => x.id),
    ['a'],
  );
  assert.deepEqual(
    filterListings(listings, 'loft').map((x) => x.id),
    ['a', 'b'],
  );
});
test('query and category intersect rather than replace each other', () => {
  assert.deepEqual(
    filterListings(listings, 'loft', 'Beach').map((x) => x.id),
    ['a'],
  );
  assert.deepEqual(filterListings(listings, 'Ojai', 'Beach'), []);
});
test('cleared search restores all entries and unmatched text gives no entries', () => {
  assert.equal(filterListings(listings, '').length, 3);
  assert.equal(filterListings(listings, 'Atlantis').length, 0);
});
test('sort orders numeric prices without mutating the fixture', () => {
  assert.deepEqual(
    sortListings(listings, 'ascending').map((x) => x.price),
    [120, 200, 260],
  );
  assert.deepEqual(
    sortListings(listings, 'descending').map((x) => x.price),
    [260, 200, 120],
  );
  assert.deepEqual(
    listings.map((x) => x.price),
    [200, 120, 260],
  );
});
