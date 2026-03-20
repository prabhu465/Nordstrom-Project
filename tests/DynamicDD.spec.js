//HANDLING DYNAMIC DROP DOWN

import{test,expect} from "@playwright/test"

test("Handling Dynamic Drop Down", async({page})=>{

    //Broweser launch
    await page.goto('https://ticketnew.com/movies/chennai')
    await page.waitForTimeout(2000)


    await page.click('//div[contains(text(),"Search for movies, cinemas and more")][1]')    //check which type of locator
    await page.waitForTimeout(2000)

    await page.locator('(//input[contains(@class,"dds-rounded-lg dds-outline-none ")]) [2]').fill('the')
    await page.waitForTimeout(2000)

    await page.locator('//h5[text()="The Angry Birds Movie 3"]').click()
    await page.waitForTimeout(3000)
})