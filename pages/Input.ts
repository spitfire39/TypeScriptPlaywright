import {Locator, Page} from '@playwright/test';

export class Input{

    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async setInputValue(selector: Locator, value: string): Promise<void> {
        await selector.fill(value);
    }
}