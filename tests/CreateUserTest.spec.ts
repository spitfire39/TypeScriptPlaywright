import { test, expect } from '@playwright/test';
import { UsersPage} from "../pages/UsersPage";
import { CreateUserPage } from "../pages/CreateUserPage";

const userData = {
    userName: 'user_28',
    password: '12345678'
}

let usersPage: UsersPage;
let createUserPage: CreateUserPage;

test.describe('Create a new user', ()=>{

    test.beforeEach(async ({browser}) => {
        const page = await browser.newPage();
        usersPage = new UsersPage(page);
        createUserPage = new CreateUserPage(page);
        await usersPage.open('http://localhost:5173/users');
    })

    test('Create a new user from the database', async ({page}) => {
        await usersPage.clickAddUserButton();
        await createUserPage.fillUserName(userData.userName);
        await createUserPage.fillPassword(userData.password);
        await createUserPage.fillConfirmPassword(userData.password);
        // await page.waitForTimeout(3000);
        await createUserPage.clickSaveButton();
        // await expect(usersPage.checkForUserPresence(userData.userName)).toBeTruthy();
    })
})