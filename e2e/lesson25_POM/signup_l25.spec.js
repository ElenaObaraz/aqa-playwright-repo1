import { test } from '@playwright/test';
import { HomePage } from '../lesson25_POM/pages/homePage';
import { SignUpModal } from '../lesson25_POM/pages/signUpModal';

const baseUrl = 'https://guest:welcome2qauto@qauto.forstudy.space/';

let homePage;
let signupModal;

test.describe('Signup Tests', () => {    

    test.beforeEach(async ({ page }) => {
            await page.goto(baseUrl);

            homePage = new HomePage(page);
            signupModal = new SignUpModal(page);
    });

    test('Successful sign up', async ({ page }) => {
        await homePage.openSignUpModal();
        await signupModal.fillForm({
            name: 'Jodiee',
            lastName: 'Wilkinse',
            email: 'aqa01_watayeg336+1@soppat.com',
            password: '123A456a789'
        });
        await signupModal.submit();
        await page.goto('https://qauto.forstudy.space/panel/garage');
    });

    test('Error message appears when the name field is empty', async ({ page }) => {
        await homePage.openSignUpModal();
        await signupModal.expectNameEmpty();
        await signupModal.clickName();
        await signupModal.clickLastName();
        await signupModal.expectNameRequiredError();
    });

    test('Error message appears when incorrect data length is entered to the name field', async ({ page }) => {
        await homePage.openSignUpModal();
        await signupModal.expectNameEmpty();
        await signupModal.fillName('1');
        await signupModal.clickLastName();
        await signupModal.expectNameLengthError();
    });

    test('Error message appears when incorrect data is entered to the last name field', async ({ page }) => {
        await homePage.openSignUpModal();
        await signupModal.expectLastNameEmpty();
        await signupModal.fillLastName('12');
        await signupModal.clickName();
        await signupModal.expectLastNameInvalidError();
    });

    test('Error message appears when incorrect data length is entered to the last name field', async ({ page }) => {
        await homePage.openSignUpModal();
        await signupModal.fillLastName('1');
        await signupModal.clickName();
        await signupModal.expectLastNameLengthError();
    });

    test('Error message appears when the email field is empty', async ({ page }) => {
        await homePage.openSignUpModal();
        await signupModal.expectEmailEmpty();
        await signupModal.clickEmail();
        await signupModal.clickName();
        await signupModal.expectEmailRequiredError();
    });
});