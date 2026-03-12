import { Page } from '@playwright/test';

export abstract class AbstractPage {

    protected page: Page;

    protected constructor(page: Page) {
        this.page = page;
    }

    // abstract open(url: string): Promise<void>;
    async open(url: string): Promise<void>{
        await this.page.goto(url);
    }
}