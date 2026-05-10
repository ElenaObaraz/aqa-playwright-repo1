import { test, expect } from '@playwright/test';
import { SignInModal } from '../lesson25_POM/pages/signInModal';

test('Profile page shows mocked data', async ({ page }) => {  
    const signInModal = new SignInModal(page);  
  
    await page.route('**/api/users/profile', async route => {
    const fakeResponse = {
      status: 'ok',
      data: {
        name: 'Elena Test',
        lastName: 'QA',
        userId: 348362
      }
    };

    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(fakeResponse)
    });
  });
 
    await page.goto('/');    
    await signInModal.openLoginPopUp();

    const email = process.env[`EMAIL_${process.env.ENV}`];
    const password = process.env[`PASSWORD_${process.env.ENV}`];
   
    await signInModal.login(email, password);    

    await page.goto('/panel/profile');
});