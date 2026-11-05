import { test, expect } from '@playwright/test';

test('calendar prevents past dates and incomplete bookings, quotes nights and clears confirmation', async ({
  page,
}) => {
  await page.clock.setFixedTime(new Date('2026-11-05T12:00:00-08:00'));
  await page.goto('/rooms/coastal-retreat');
  const reserve = page.getByRole('button', { name: 'Reserve', exact: true });
  await expect(reserve).toBeDisabled();
  await expect(page.getByRole('button', { name: /November 4th, 2026/ })).toBeDisabled();
  await page.getByRole('button', { name: /November 20th, 2026/ }).click();
  await expect(reserve).toBeDisabled();
  await page.getByRole('button', { name: /November 23rd, 2026/ }).click();
  await expect(page.getByText('3 nights × $245', { exact: true })).toBeVisible();
  await expect(reserve).toBeEnabled();
  await reserve.click();
  await expect(page.getByRole('status').filter({ hasText: 'Demo confirmed' })).toContainText(
    'Demo confirmed for 1 guest, 3 nights · $735',
  );
  await page.screenshot({ path: 'output/playwright/booking-demo.png', fullPage: true });
  await page.getByRole('button', { name: 'Add guest' }).click();
  await expect(page.getByText('Demo confirmed', { exact: false })).toHaveCount(0);
  await reserve.click();
  await expect(page.getByRole('status').filter({ hasText: 'Demo confirmed' })).toContainText('2 guests');
  await page.getByRole('button', { name: 'Clear dates', exact: true }).click();
  await expect(reserve).toBeDisabled();
  await expect(page.getByText('Demo confirmed', { exact: false })).toHaveCount(0);
});

test('interactive map has eight price pins, attribution, and client navigation', async ({ page }) => {
  await page.goto('/catalog');
  const markers = page.locator('.leaflet-marker-icon');
  await expect(markers).toHaveCount(8);
  await expect(page.getByRole('link', { name: 'OpenStreetMap', exact: true })).toBeVisible();
  await page.locator('.leaflet-marker-icon[title="Malibu, California, $245"]').click();
  await expect(page.getByRole('link', { name: 'View A little closer to the ocean' })).toBeVisible();
  await page.getByRole('link', { name: 'View A little closer to the ocean' }).click();
  await expect(page).toHaveURL(/\/rooms\/coastal-retreat$/);
  await expect(page.getByRole('heading', { name: 'A little closer to the ocean', exact: true })).toBeVisible();
});

test('blocked map tiles produce a fallback while all listings remain usable', async ({ page }) => {
  await page.route('https://tile.openstreetmap.org/**', (route) => route.abort());
  await page.goto('/catalog');
  await expect(page.getByText('The map is unavailable.', { exact: false })).toBeVisible();
  await expect(page.getByTestId('listing-card')).toHaveCount(8);
  await page.getByTestId('listing-card').first().getByRole('link').click();
  await expect(page).toHaveURL(/\/rooms\/city-loft$/);
});

test('keyboard skip link, category, favorites and user menu are operable', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await page.keyboard.press('Tab');
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused();
  const beach = page.getByRole('button', { name: 'Beach', exact: true });
  await expect(beach).toBeEnabled();
  await beach.focus();
  await page.keyboard.press('Space');
  await expect(beach).toHaveAttribute('aria-pressed', 'true');
  await expect(beach).toHaveCSS('border-bottom-color', 'rgb(34, 34, 34)');
  expect(await beach.evaluate((element) => getComputedStyle(element).outlineStyle)).toBe('solid');
  const save = page.getByRole('button', { name: 'Save A little closer to the ocean', exact: true });
  await save.focus();
  await page.keyboard.press('Space');
  await expect(page.getByRole('button', { name: 'Unsave A little closer to the ocean', exact: true })).toHaveAttribute(
    'aria-pressed',
    'true',
  );
  const menu = page.getByLabel('Open user menu');
  await menu.focus();
  await page.keyboard.press('Enter');
  await expect(page.getByText('Student interface study.', { exact: false })).toBeVisible();
  await page.screenshot({ path: 'output/playwright/keyboard-375.png' });
});
