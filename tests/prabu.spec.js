import {test, expect} from '@playwright/test';

test ("Home Page", async ({page})=>{

    await page.goto('https://www.demoblaze.com/')
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    
    const pageTitle = await page.title()
    console.log('Page title is:', pageTitle)
    await expect (page).toHaveTitle('STORE');

    await page.click('[id="login2"]')
    await page.fill('[id="loginusername"]', 'bodiprabu')
    await page.fill('[id="loginpassword"]',"bodiprabu")
    await page.click('[onclick="logIn()"]')
    await page.close()
})
