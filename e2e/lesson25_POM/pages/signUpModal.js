import { expect } from '@playwright/test';

export class SignUpModal {
    constructor(page) {
        this.page = page;
        this.nameInput = page.locator('#signupName');
        this.lastNameInput = page.locator('#signupLastName');
        this.emailInput = page.locator('#signupEmail');
        this.passwordInput = page.locator('#signupPassword');
        this.repeatPasswordInput = page.locator('#signupRepeatPassword');
        this.registerButton = page.getByRole('button', { name: 'Register' });
        this.errorNameRequired = page.getByText('Name required');
        this.errorNameLength = page.getByText('Name has to be from 2 to 20 characters long');
        this.errorLastNameInvalid = page.getByText('Last name is invalid');
        this.errorLastNameLength = page.getByText('Last name has to be from 2 to 20 characters long');
        this.errorEmailRequired = page.getByText('Email required');
    }

    async fillForm({ name, lastName, email, password }) {
        await this.nameInput.fill(name);
        await this.lastNameInput.fill(lastName);
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.repeatPasswordInput.fill(password);
    } 

    async submit() {
        await this.registerButton.click();
    }

    async clickName() {
        await this.nameInput.click();
    }

    async clickLastName() {
        await this.lastNameInput.click();
    }

    async expectNameEmpty() {
        await expect(this.nameInput).toHaveValue('');
    }

    async expectNameRequiredError() {
        await expect(this.errorNameRequired).toBeVisible();
    }

    async fillName(name) {
        await this.nameInput.fill(name);
    }

    async expectNameLengthError() {
        await expect(this.errorNameLength).toBeVisible();
    }

    async expectLastNameEmpty() {
        await expect(this.lastNameInput).toHaveValue('');
    }

    async fillLastName(lastName) {
        await this.lastNameInput.fill(lastName);
    }

    async expectLastNameInvalidError() {
        await expect(this.errorLastNameInvalid).toBeVisible();
    }

    async expectLastNameLengthError() {
        await expect(this.errorLastNameLength).toBeVisible();
    }

    async expectEmailEmpty() {
        await expect(this.emailInput).toHaveValue('');
    }

    async clickEmail() {
        await this.emailInput.click();
    }

    async expectEmailRequiredError() {
        await expect(this.errorEmailRequired).toBeVisible();
    }
}