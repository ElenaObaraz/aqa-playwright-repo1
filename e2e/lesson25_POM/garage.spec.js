import { test, expect } from '../lesson25_POM/pages/garagePage';

test('User can see garage page', async ({ userGaragePage }) => {
  await expect(userGaragePage.getByRole('heading', { name: 'Garage' })).toBeVisible();
});
