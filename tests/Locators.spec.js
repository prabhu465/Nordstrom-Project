import {test,expect} from '@playwright/test'

test('Locators', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    //Click on login button - Property
    // await page.locator('id=login2').click();
    await page.click('id=login2')

    //Provide Username - CSS
    // await page.locator('#loginusername').fill('prabubodi')
    await page.fill('#loginusername','prabubodi')

    //Provide Password - CSS
    await page.fill('#loginpassword', 'prabu123')

    //Click on login button -   XPath
    await page.click('//button[text()="Log in"]')

    //Verify logout button  - XPath
    const logoutlink = await page.locator('//a[@onclick="logOut()"]')
    await expect(logoutlink).toBeVisible();

    await page.close()


})