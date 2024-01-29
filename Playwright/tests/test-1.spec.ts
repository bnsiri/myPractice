import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://www.roofstock.com/');
  await page.getByRole('link', { name: 'Learn More', exact: true }).click();
  await page.getByLabel('Open "Investment Solutions"').click();
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('navigation').getByRole('link', { name: 'Explore Properties' }).click();
  const page1 = await page1Promise;
  await page1.goto('https://www.roofstock.com/investment-property-marketplace');
});
