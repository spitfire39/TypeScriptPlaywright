import {Locator, Page} from '@playwright/test';

export class Button{

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async clickButton(selector: Locator): Promise<void> {
        await selector.click();
    }
}