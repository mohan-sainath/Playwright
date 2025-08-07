import { test, expect } from '@playwright/test';

test('Assertions Demo', async ({page}) => {
    await page.goto('https://kitchen.applitools.com/');
    // await page.pause();

    //Asserrtions
    //Check element is present or not
    await expect(page.locator('text=The Kitchen')).toHaveCount(1);

    if (await page.locator('text=The Kitchen')) {
        await page.locator('text=The Kitchen').click();
    }

    //check element is visible or not
    await expect(page.locator('text=The Kitchen')).toBeVisible();
    //await expect.soft(page.locator('text=The Kitchen')).toBeHidden();


    //check element is enabled or not
    await expect(page.locator('text=The Kitchen')).toBeEnabled();
    //await expect.soft(page.locator('text=The Kitchen')).toBeDisabled();

})