import { test, expect } from '@playwright/test';
const { chromium } = require('@playwright/test');

test('record demo', async ({page, context}) => {

    const browser = await chromium.launch({
    headless: false,

    });
  await context.tracing.start({
    screenshots: true,
    snapshots: true});
  await page.goto('https://www.saucedemo.com/');
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.getByText('$9.99Add to cart').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.locator('[data-test="checkout"]').click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('as');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('s');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('ss');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('233');
  await page.locator('[data-test="continue"]').click();
  await page.locator('[data-test="finish"]').click();
  await page.locator('[data-test="complete-header"]').click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.locator('[data-test="logout-sidebar-link"]').click();

  // ---------------------
  await context.tracing.stop({ path: 'trace.zip' });
  await context.close();
  await browser.close();
});