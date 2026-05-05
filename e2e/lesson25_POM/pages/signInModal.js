import { expect } from '@playwright/test';

export class SignInModal {
  constructor(page) {
    this.page = page;
    this.signInButton = page.getByRole('button', { name: 'Sign In' });
    this.emailInput = page.locator('#signinEmail');
    this.passwordInput = page.locator('#signinPassword');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.loginPopUp = page.getByRole('heading', { name: 'Log in' });
  }

  async openLoginPopUp() {
    await this.signInButton.click();
    await expect(this.loginPopUp).toBeVisible();
  }

  async login(email, password) {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
