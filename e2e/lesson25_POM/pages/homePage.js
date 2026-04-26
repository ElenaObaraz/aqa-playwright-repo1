import { expect } from '@playwright/test';

export class HomePage {
    constructor(page) {
        this.page = page;
        this.signUpButton = page.getByRole('button', { name: 'Sign up' });
    }

    async openSignUpModal() {
    await this.signUpButton.click();
    await expect(this.page.locator('.modal-content')).toBeVisible();
    }
}