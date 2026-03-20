import {test,expect} from '@playwright/test'

test("Validate login", async ({page})=>{
    
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    //Print Width & Height
    console.log(await page.viewportSize().width)
    console.log(await page.viewportSize().height)


    await page.getByPlaceholder("Username").type('Admin')
    await page.locator('[name="password"]').type('admin123')
    await page.locator('//button[@type="submit"]').click()
    await page.waitForTimeout(2000)
    
    //Profile picture 
    // await page.getByAltText('[class="oxd-userdropdown-img"]').first().click() 
    await page.getByText('Logout').click()
    await page.waitForTimeout(3000)

})