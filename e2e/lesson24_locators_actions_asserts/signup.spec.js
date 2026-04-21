import { test, expect } from '@playwright/test';

const baseUrl = 'https://guest:welcome2qauto@qauto.forstudy.space/';

test.describe('Signup Tests', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto(baseUrl);
    });

    test('Successful sign up', async ({ page }) => {
        await page.getByRole('button', { name: 'Sign up' }).click();
        await expect(page.locator('.modal-content')).toBeVisible();
        await page.locator('#signupName').fill('Jodie');
        await page.locator('#signupLastName').fill('Wilkins');
        await page.locator('#signupEmail').fill('aqa01_watayeg336@soppat.com');
        await page.locator('#signupPassword').fill('123A456a789');
        await page.locator('#signupRepeatPassword').fill('123A456a789');
        await page.getByRole('button', { name: 'Register' }).click();        

        await page.goto('https://qauto.forstudy.space/panel/garage');
    });

    test('Error message appears when the name field is empty', async ({ page }) => {
        await page.getByRole('button', { name: 'Sign up' }).click();
        expect(await page.locator('#signupName').inputValue()).toBe('');
        await page.click('#signupName');
        await page.click('#signupLastName');
        await expect(page.getByText('Name required')).toBeVisible();
    });

    test('Error message appears when incorrect data length is entered to the name field', async ({ page }) => {
        await page.getByRole('button', { name: 'Sign up' }).click();
        expect(await page.locator('#signupName').inputValue()).toBe('');
        await page.locator('#signupName').fill('1');
        await page.click('#signupLastName');
        await expect(page.getByText('Name has to be from 2 to 20 characters long')).toBeVisible();
    });

    test('Error message appears when incorrect data is entered to the last name field', async ({ page }) => {
        await page.getByRole('button', { name: 'Sign up' }).click();
        expect(await page.locator('#signupLastName').inputValue()).toBe('');
        await page.locator('#signupLastName').fill('12');
        await page.click('#signupName');
        await expect(page.getByText('Last name is invalid')).toBeVisible();
    });

    test('Error message appears when incorrect data length is entered to the last name field', async ({ page }) => {
        await page.getByRole('button', { name: 'Sign up' }).click();        
        await page.locator('#signupLastName').fill('1');
        await page.click('#signupName');
        await expect(page.getByText('Last name has to be from 2 to 20 characters long')).toBeVisible();
    });

    test('Error message appears when the email field is empty', async ({ page }) => {
        await page.getByRole('button', { name: 'Sign up' }).click();
        expect(await page.locator('#signupEmail').inputValue()).toBe('');
        await page.click('#signupEmail');
        await page.click('#signupName');
        await expect(page.getByText('Email required')).toBeVisible();    
    });
});
