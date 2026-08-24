import { Page } from "@playwright/test";

export class HelperBase {

    private readonly page: Page
    
    constructor(page: Page) {
        this.page = page
    }
    async waitForNumberOfSeconds(TimeInSeconds: number){
        await this.page.waitForTimeout(TimeInSeconds * 1000)
    }
}