import {test,expect} from '@playwright/test'

test("Verify Error message", async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByPlaceholder("Username").type('Admin')
    await page.locator('[name="password"]').type('dfdasfn')
    await page.locator('//button[@type="submit"]').click()

    // Error message locator
    const errorMessage = await page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]').textContent()
    console.log('Error Message is:',errorMessage)

    // await expect(errorMessage.includes("invalid")).toBeTruthy()
    
    await expect(errorMessage==="invalid Credentials").toBeTruthy()

})