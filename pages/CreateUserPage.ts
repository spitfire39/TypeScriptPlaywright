import { Page, Locator } from '@playwright/test';
import { AbstractPage } from "./AbstractPage";


export class CreateUserPage extends AbstractPage {

    constructor(page: Page){
        super(page);

    }

    readonly createUserPageUrl: string = `${this.mainPage}/create-user`;

    readonly userNameSelector: Locator = this.page.locator('[name="userName"]');
    readonly passwordSelector: Locator = this.page.locator('[name="password"]');
    readonly confirmPasswordSelector: Locator = this.page.locator('[name="confirmPassword"]');
    readonly saveButtonSelector: Locator = this.page.getByText('Save');


    async clickSaveButton(): Promise<void>{
        await this.saveButtonSelector.click();
    }

    async fillUserName(userName: string): Promise<void>{
        await this.userNameSelector.fill(userName);
    }

    async fillPassword(password: string): Promise<void>{
        await this.passwordSelector.fill(password);
    }

    async fillConfirmPassword(confirmPassword: string): Promise<void>{
        await this.confirmPasswordSelector.fill(confirmPassword);
    }
}