import { test, expect } from '@playwright/test';

const userData = {
    userName: 'user_25',
    password: '12345678'

}

test.describe('User tests', () => {

    test.beforeEach(async ({page}) =>  {
        await page.goto('http://localhost:5173/users');
    });

    test('XiQ: Create a new user', async ({ page }) => {
        await page.getByText('Add User').click();

        await expect(page.getByRole('heading', { name: 'Create User' })).toBeVisible();
        await page.locator('[name="userName"]').fill(userData.userName);
        await page.locator('[name="password"]').fill(userData.password);
        await page.locator('[name="confirmPassword"]').fill(userData.password);
        await page.getByText('Save').click();

        await expect(page.getByRole('heading', { name: 'Users' })).toBeVisible();

    });
})