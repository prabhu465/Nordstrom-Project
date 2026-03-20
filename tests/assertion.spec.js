//Assertion
//Hard Assertion

import{test, expect} from "@playwright/test"
test('Hardassertion', async  ({page})=>{
    
    //Browser launch
    await page.goto('https://www.saucedemo.com/')
    await page.waitForTimeout(2000)

    //Tittle & URL
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page).toHaveURL('https://www.saucedemo.com/')

    //User Name
    await page.locator('[id="user-name"]').fill('standard_user')
    await page.waitForTimeout(2000)    

            
    //Assertion 
    await expect (await page.locator('[id="user-name"]')).toBeVisible()
    // await expect (await page.locator('[id="user-name"]')).toBeEmpty()
    await expect (await page.locator('[id="user-name"]')).toBeEnabled()
    await expect (await page.locator('[id="user-name"]')).toBeEditable()

    //Password
    await page.locator('[placeholder="Password"]').fill('secret_sauce')
    await page.waitForTimeout(2000)

    //Login Button
    await page.locator('[id="login-button"]').click()
    await page.waitForTimeout(2000)

     
})


//Assertion
//Soft Assertion


test.only('softassertion', async  ({page})=>{
    
    //Browser launch
    await page.goto('https://www.saucedemo.com/')
    await page.waitForTimeout(2000)

    //Tittle & URL
    await expect(page).toHaveTitle('Swag Labs')
    await expect(page).toHaveURL('https://www.saucedemo.com/')

    //User Name
    await page.locator('[id="user-name"]').fill('standard_user')
    await page.waitForTimeout(2000)    

    //Assertion 
    await expect.soft(await page.locator('[id="user-name"]')).toBeVisible()
    // await expect.soft(await page.locator('[id="user-name"]')).toBeEmpty()
    await expect.soft(await page.locator('[id="user-name"]')).toBeEnabled()
    await expect.soft(await page.locator('[id="user-name"]')).toBeEditable()

    //Password
    await page.locator('[placeholder="Password"]').fill('secret_sauce')
    await page.waitForTimeout(2000)

    //Login Button
    await page.locator('[id="login-button"]').click()
    await page.waitForTimeout(2000)

       
  
})




