const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fq%3Dswag%2Blabs%2Bsauce%2Bdemo%26oq%3Dswag%2Blabs%2Bsauce%2Bdemo%26gs_lcrp%3DEgZjaHJvbWUyBggAEEUYOdIBCDcwMTdqMGoyqAIAsAIA%26sourceid%3Dchrome%26ie%3DUTF-8%26sei%3DvqKQaN6PNNud4-EP2fPOoAM&q=EhAkBnQAAGPdrBwIJhT1M1EFGL_FwsQGIjAlWQJ9ROHBw-Z6knNg0XFYuIwauNirotIDUuZ2xCY5yuQKZ2NdAtopC7dMFqTOiwIyAVJaAUM');
  await page.locator('iframe[name="a-7cwwa4xkzfhx"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.locator('iframe[name="c-7cwwa4xkzfhx"]').contentFrame().locator('td:nth-child(2)').first().click();
  await page.locator('iframe[name="c-7cwwa4xkzfhx"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-7cwwa4xkzfhx"]').contentFrame().locator('td:nth-child(3)').first().click();
  await page.locator('iframe[name="c-7cwwa4xkzfhx"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(3)').click();
  await page.locator('iframe[name="c-7cwwa4xkzfhx"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-7cwwa4xkzfhx"]').contentFrame().locator('tr:nth-child(3) > td:nth-child(3)').click();
  await page.locator('iframe[name="c-7cwwa4xkzfhx"]').contentFrame().getByRole('button', { name: 'Next' }).click();
  await page.locator('iframe[name="c-7cwwa4xkzfhx"]').contentFrame().locator('tr:nth-child(3) > td').first().click();
  await page.locator('iframe[name="c-7cwwa4xkzfhx"]').contentFrame().locator('tr:nth-child(2) > td').first().click();
  await page.locator('iframe[name="c-7cwwa4xkzfhx"]').contentFrame().locator('tr:nth-child(2) > td:nth-child(2)').click();
  await page.locator('iframe[name="c-7cwwa4xkzfhx"]').contentFrame().getByRole('button', { name: 'Verify' }).click();
  await page.getByRole('link', { name: 'Swag Labs Swag Labs https://' }).click();
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
  await page.getByRole('button', { name: 'ADD TO CART' }).nth(1).click();
  await page.getByRole('link', { name: '2' }).click();
  await page.getByRole('link', { name: 'CHECKOUT' }).click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('a');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('d');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('1323');
  await page.getByRole('button', { name: 'CONTINUE' }).click();
  await page.getByRole('link', { name: 'FINISH' }).click();
  await page.getByRole('heading', { name: 'THANK YOU FOR YOUR ORDER' }).click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();

  // ---------------------
  await context.close();
  await browser.close();
})();