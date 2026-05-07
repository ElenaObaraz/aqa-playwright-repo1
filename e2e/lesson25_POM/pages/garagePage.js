import { test as base } from '@playwright/test';

export const test = base.extend({
  userGaragePage: async ({ browser }, use) => {
    const context = await browser.newContext({
      storageState: 'storage/user.json'
    });

    const page = await context.newPage();
    await page.goto('/panel/garage');

    await use(page);

    await context.close();
  }
});