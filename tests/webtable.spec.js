import{test,expect} from '@playwright/test'

test("Web Table", async ({page})=>{

    await page.goto("https://www.worldometers.info/")
    await page.click('//a[text()="Population"]')
    await page.click('//span[text()="Population by Country"]')

    let density = await page.innerText('//table//tbody/tr[1]/td[6]')
    console.log("density of India:", density)

})

