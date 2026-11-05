import { test, expect } from '@playwright/test';

test('Home loading, combined filters, empty search, and restore', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('status')).toContainText('Finding');
  await expect(page.getByTestId('listing-card')).toHaveCount(8);
  await page.getByRole('button', { name: 'Beach', exact: true }).click();
  await expect(page.getByTestId('listing-card')).toHaveCount(2);
  await expect(page.getByRole('button', { name: 'Beach', exact: true })).toHaveAttribute('aria-pressed', 'true');
  await page.getByRole('searchbox').fill('Malibu');
  await expect(page.getByTestId('listing-card')).toHaveCount(1);
  await page.getByRole('searchbox').fill('Atlantis');
  await expect(page.getByText('No stays found.', { exact: false })).toBeVisible();
  await page.getByRole('searchbox').fill('');
  await page.getByRole('button', { name: 'All homes', exact: true }).click();
  await expect(page.getByTestId('listing-card')).toHaveCount(8);
});

test('client navigation, catalog sorting, room matching, gallery and guest bounds', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.getByTestId('listing-card')).toHaveCount(8);
  await page.evaluate(() => {
    (window as Window & { studyMarker?: string }).studyMarker = 'kept';
  });
  await page.getByRole('navigation', { name: 'Main navigation' }).getByRole('link', { name: 'All stays' }).click();
  await expect(page).toHaveURL(/\/catalog$/);
  const prices = () =>
    page
      .getByTestId('listing-card')
      .evaluateAll((elements) => elements.map((element) => Number(element.getAttribute('data-price'))));
  expect(await prices()).toEqual([135, 155, 165, 175, 189, 210, 245, 280]);
  await page.getByLabel('Sort by price').selectOption('descending');
  expect(await prices()).toEqual([280, 245, 210, 189, 175, 165, 155, 135]);
  await page.getByTestId('listing-card').first().getByRole('link').click();
  await expect(page).toHaveURL(/\/rooms\/hillside-home$/);
  await expect(page.getByRole('status')).toContainText('Getting your room ready');
  await expect(page.getByRole('heading', { name: 'Room to breathe in the hills', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Previous photo', exact: true }).click();
  await expect(page.getByText('3 / 3', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Next photo', exact: true }).click();
  await expect(page.getByText('1 / 3', { exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Remove guest' })).toBeDisabled();
  await page.getByRole('button', { name: 'Add guest' }).click();
  await expect(page.getByRole('button', { name: 'Add guest' })).toBeDisabled();
  await page.getByRole('button', { name: 'Remove guest' }).click();
  await expect(page.getByRole('button', { name: 'Remove guest' })).toBeDisabled();
  await expect(page.getByRole('button', { name: 'Reserve', exact: true })).toBeDisabled();
  await page.getByRole('link', { name: 'Back to all stays' }).click();
  await expect(page).toHaveURL(/\/catalog$/);
  expect(await page.evaluate(() => (window as Window & { studyMarker?: string }).studyMarker)).toBe('kept');
  expect(errors).toEqual([]);
});

test('unknown room presents recovery navigation', async ({ page }) => {
  await page.goto('/rooms/not-a-real-room');
  await expect(page.getByRole('heading', { name: 'This stay couldn’t be found' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Back to all stays' })).toHaveAttribute('href', '/catalog');
});

for (const width of [375, 768, 1440]) {
  test(`responsive pages at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const route of ['/', '/catalog', '/rooms/coastal-retreat']) {
      await page.goto(route);
      if (route.includes('/rooms'))
        await expect(page.getByRole('heading', { name: 'A little closer to the ocean', exact: true })).toBeVisible();
      else await expect(page.getByTestId('listing-card')).toHaveCount(8);
      const metrics = await page.evaluate(() => ({ width: innerWidth, content: document.documentElement.scrollWidth }));
      expect(metrics.content).toBeLessThanOrEqual(metrics.width);
      const images = page.locator('main img');
      await expect(images.first()).toBeVisible();
      await expect
        .poll(() => images.first().evaluate((image: HTMLImageElement) => image.naturalWidth))
        .toBeGreaterThan(0);
      if (route === '/catalog') {
        await expect(page.locator('.leaflet-marker-icon')).toHaveCount(8);
        await expect(page.locator('.leaflet-tile-loaded').first()).toBeVisible();
      }
      const name = route === '/' ? 'home' : route.includes('/rooms') ? 'room' : 'catalog';
      await page.screenshot({ path: `output/playwright/${name}-${width}.png`, fullPage: true });
      if (route === '/') {
        const cards = await page
          .getByTestId('listing-card')
          .evaluateAll((elements) =>
            elements
              .slice(0, 2)
              .map((element) => ({ x: element.getBoundingClientRect().x, y: element.getBoundingClientRect().y })),
          );
        if (width === 375) expect(cards[0].x).toBe(cards[1].x);
        else expect(cards[0].y).toBe(cards[1].y);
      }
      if (route === '/catalog') {
        const map = await page.getByRole('region', { name: 'Stay locations' }).boundingBox();
        const cards = await page.getByTestId('listing-card').last().boundingBox();
        if (width === 375) expect(map!.y).toBeGreaterThan(cards!.y);
        else expect(map!.x).toBeGreaterThan(cards!.x);
      }
    }
  });
}
