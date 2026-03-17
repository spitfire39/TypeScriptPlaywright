import { Page, Locator } from '@playwright/test';
import { AbstractPage } from "./AbstractPage";

export class UsersPage extends AbstractPage {

    constructor(page: Page){
        super(page);

    }

    readonly usersPageUrl: string = `${this.mainPage}/users`;

    readonly addUserSelector: Locator = this.page.getByText('Add User');

    async clickAddUserButton(): Promise<void>{
        await this.addUserSelector.click();
    }


}