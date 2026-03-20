
//ASSESSMENT-1

import{test, expect} from "@playwright/test"
test("Handling Demoblaze", async ({page})=>{

    //Browser launch
    await page.goto("https://www.demoblaze.com/")

    //Tittle and URL assertion
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL("https://www.demoblaze.com/")

    //Login
    await page.locator('[id="login2"]').click()

    //User name & Password
    await page.locator('[id="loginusername"]').fill('pavanol')
    await page.locator('[id="loginpassword"]').fill('test@123')

    //Login button
    await page.locator('[onclick="logIn()"]').click()

    // Name Assertion
    await expect(page.locator('[id="nameofuser"]')).toBeVisible()


    //Laptop option
    await page.locator('//a[text()="Laptops"]').click()
    await page.waitForTimeout(2000)


    //Print all Products name
    let one = await page.$$('[class="hrefch"]')
    
     for (const two of one) {
        let three   = await two.textContent()
        console.log(three)
    }

     //Select one product
    await page.locator('//a[text()="Sony vaio i5"]').click()

    //Add to cart and Hanndle dialog
    await page.on('dialog', async a => {
    await expect(a.type()).toEqual('alert')
    await expect(a.message()).toEqual('Product added.')
    await a.accept()
    })
    
    await page.locator('[class="btn btn-success btn-lg"]').click()
    await page.waitForTimeout(2000)

    //cart
    await page.locator('//a[text()="Cart"]').click()
    await page.waitForTimeout(2000)

    //Delete product
    await page.locator('(//a[@href="#"])[8]').click()
    await page.waitForTimeout(2000)
   
    //logout
    await page.locator('[id="logout2"]').click()
    await page.waitForTimeout(2000)

   
})
