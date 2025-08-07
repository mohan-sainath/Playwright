import {test, expect} from '@playwright/test';

test('Automation Practice Website', async ({page}) => {
    await page.goto('https://www.automationexercise.com/');
    // await page.getByRole('heading', { name: 'AutomationExercise' }).toBeVisible();
    await page.getByRole('link', { name: ' Signup / Login' }).click();
    await page.getByRole('textbox', { name: 'Name' }).click();
    await page.getByRole('textbox', { name: 'Name' }).fill('mohan');
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
    await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('asdfgf0987654@hmail.com');
    await page.getByRole('button', { name: 'Signup' }).click();
    await page.getByRole('radio', { name: 'Mr.' }).check();
    await page.getByRole('textbox', { name: 'Password *' }).click();
    await page.getByRole('textbox', { name: 'Password *' }).fill('123abc');
    await page.locator('#days').selectOption('1');
    await page.locator('#months').selectOption('1');
    await page.locator('#years').selectOption('2021');
    await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
    await page.getByRole('textbox', { name: 'First name *' }).click();
    await page.getByRole('textbox', { name: 'First name *' }).fill('Mohan');
    await page.getByRole('textbox', { name: 'Last name *' }).click();
    await page.getByRole('textbox', { name: 'Last name *' }).fill('MSD');
    await page.getByRole('textbox', { name: 'Company', exact: true }).click();
    await page.getByRole('textbox', { name: 'Company', exact: true }).fill('CSK');
    await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
    await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('Chennai');
    await page.getByRole('textbox', { name: 'Address 2' }).click();
    await page.getByRole('textbox', { name: 'Address 2' }).fill('Chepauk');
    await page.getByRole('textbox', { name: 'State *' }).click();
    await page.getByRole('textbox', { name: 'State *' }).fill('Tamil Nadu');
    await page.getByRole('textbox', { name: 'City * Zipcode *' }).click();
    await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('Chennai');
    await page.locator('#zipcode').click();
    await page.locator('#zipcode').fill('600001');
    await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
    await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('123456789');
    await page.getByRole('button', { name: 'Create Account' }).click();
    // await page.expect('Account Created!').toBeVisible();
})
