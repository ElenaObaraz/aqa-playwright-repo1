import { test } from '@playwright/test';
import { SignInModal } from '../lesson25_POM/pages/signInModal';

test.describe('Login Tests', () => {

  test('Successful login', async ({ page }) => {

    const signInModal = new SignInModal(page);
    
    await page.goto('/');    
    await signInModal.openLoginPopUp();

    const email = process.env[`EMAIL_${process.env.ENV}`];
    const password = process.env[`PASSWORD_${process.env.ENV}`];
   
    await signInModal.login(email, password);
    await page.goto('/panel/garage');
  });
});
