import { Page, Locator } from '@playwright/test';
import { AbstractPage } from "./AbstractPage";
import { Input } from "./Input";
import { Button } from "./Button";
import {UsersPage} from "./UsersPage";
import {BasePage} from "./BasePage";

export class CreateUserPage extends AbstractPage {

    private input: Input;
    private button: Button;
    userPage: UsersPage;

    constructor(page: Page){
        super(page);
        this.button = new Button(page);
        this.input = new Input(page);
    }

    async open(url: string): Promise<void>{
        await this.page.goto(url);
    }

    readonly userNameSelector = '[name="userName"]';
    readonly passwordSelector = '[name="password"]';
    readonly confirmPasswordSelector = '[name="confirmPassword"]';
    readonly saveButtonSelector = 'Save';


    async clickSaveButton(): Promise<UsersPage>{
        await this.button.clickButton(this.page.getByText(this.saveButtonSelector));
        return this.userPage;
    }

    async fillUserName(userName: string): Promise<CreateUserPage>{
        await this.input.setInputValue(this.page.locator(this.userNameSelector), userName);
        return this;
    }

    async fillPassword(password: string): Promise<CreateUserPage>{
        await this.input.setInputValue(this.page.locator(this.passwordSelector), password);
        return this;
    }

    async fillConfirmPassword(confirmPassword: string): Promise<CreateUserPage>{
        await this.input.setInputValue(this.page.locator(this.confirmPasswordSelector), confirmPassword);
        return this;
    }
    //
    // async clickSaveButton(): Promise<void>{
    //     await this.button.clickButton(this.page.getByText(this.saveButtonSelector));
    // }
    //
    // async fillUserName(userName: string): Promise<void>{
    //     await this.input.setInputValue(this.page.locator(this.userNameSelector), userName);
    // }
    //
    // async fillPassword(password: string): Promise<void>{
    //     await this.input.setInputValue(this.page.locator(this.passwordSelector), password);
    // }
    //
    // async fillConfirmPassword(confirmPassword: string): Promise<void>{
    //     await this.input.setInputValue(this.page.locator(this.confirmPasswordSelector), confirmPassword);
    // }
}