import{test,expect} from '@playwright/test';

test("Yahoo page", async ({page})=>{

    await page.goto('https://www.yahoo.com/')
    await page.waitForTimeout(3000)

    await page.click('//div[@class="srch-mg trendingNow"]//descendant::span[text()="8."]')

})
