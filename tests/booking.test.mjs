import test from 'node:test';
import assert from 'node:assert/strict';
import { countNights } from '../lib/booking.ts';
const today = new Date(2026, 10, 5, 15);
test('incomplete and invalid ranges do not produce a quote', () => {
  assert.equal(countNights(undefined, undefined, today), 0);
  assert.equal(countNights(new Date(2026, 10, 20), undefined, today), 0);
  assert.equal(countNights(new Date('invalid'), new Date(2026, 10, 23), today), 0);
});
test('past, same-day, and reversed ranges are rejected', () => {
  assert.equal(countNights(new Date(2026, 10, 4), new Date(2026, 10, 7), today), 0);
  assert.equal(countNights(new Date(2026, 10, 20), new Date(2026, 10, 20), today), 0);
  assert.equal(countNights(new Date(2026, 10, 23), new Date(2026, 10, 20), today), 0);
});
test('today is valid and times of day do not change calendar-night counts', () => {
  assert.equal(countNights(new Date(2026, 10, 5, 0), new Date(2026, 10, 6, 23), today), 1);
  assert.equal(countNights(new Date(2026, 10, 20, 22), new Date(2026, 10, 23, 8), today), 3);
});
test('month and year boundaries are handled', () => {
  assert.equal(countNights(new Date(2026, 11, 31), new Date(2027, 0, 2), today), 2);
});
test('DST transitions use calendar nights rather than elapsed 24-hour periods', () => {
  assert.equal(countNights(new Date(2027, 2, 13), new Date(2027, 2, 15), today), 2);
  assert.equal(countNights(new Date(2027, 10, 6), new Date(2027, 10, 8), today), 2);
});
