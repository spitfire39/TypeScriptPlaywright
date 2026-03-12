import { Page, Locator } from '@playwright/test';
import { AbstractPage } from "./AbstractPage";
import { Input } from "./Input";
import { Button } from "./Button";
import {CreateUserPage} from "./CreateUserPage";
import {BasePage} from "./BasePage";

export class UsersPage extends AbstractPage {

    private input: Input;
    private button: Button;
    createUserPage: CreateUserPage;

    constructor(page: Page){
        super(page);
        this.button = new Button(page);
        this.input = new Input(page);
    }

    async open(url: string): Promise<void>{
        await this.page.goto(url);
    }

    readonly addUserSelector: string = 'Add User';
    readonly usersTableRow: string = '.MuiTableRow-root .MuiTableCell-root';

    async clickAddUserButton(): Promise<CreateUserPage>{
        await this.button.clickButton(this.page.getByText(this.addUserSelector));
        return this.createUserPage;
    }

    async checkForUserPresence(userName: string): Promise<boolean>{
        const rows = this.page.locator(this.usersTableRow);
        const rowTexts = await rows.allTextContents();
        console.log(rowTexts);
        return rowTexts.some(text => text.includes(userName));
    }
}