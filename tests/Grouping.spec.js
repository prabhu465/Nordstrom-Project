//Grouping

import {test, expect} from "@playwright/test"

test.describe('Handling GROUPIN ALL', async function(){         // Page not used


test("Handlin demoblaze", async function({page}){
   
    await page.goto('https://www.demoblaze.com/')
    await page.click('[id="login2"]')
    await page.locator('[id="loginusername"]').fill('Prabubodi')
    await page.locator('[id="loginpassword"]').fill('Prabu@123')
    await page.click('//button[text()="Log in"]')
    await page.waitForTimeout(3000)

})
 
test('Habdling Sauce', async function({page}){

    await page.goto('https://www.saucedemo.com/')
    await page.locator('[id="user-name"]').fill('standard_user')
    await page.locator('[placeholder="Password"]').fill('secret_sauce')
    await page.locator('[id="login-button"]').click()
    await page.waitForTimeout(2000)

})

})

