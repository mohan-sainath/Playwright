import { test, expect } from '@playwright/test';

test('Login Demo', async ({ page }) => {

    await page.goto('https://demo.applitools.com/');
    await page.pause();

});