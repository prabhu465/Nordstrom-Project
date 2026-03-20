

import {test,expect} from "@playwright/test"

test("Demoplaze test ", async({page})=>{

    //Browser launch
    await page.goto('https://www.demoblaze.com/')

    //Title and url
    await expect(page).toHaveTitle('STORE')
    await expect(page).toHaveURL('https://www.demoblaze.com/')
    await page.waitForTimeout(2000)
  
    //print 
    console.log('Title:','STORE' )
    console.log('URL:','https://www.demoblaze.com/' )

    //login
    await page.locator('[id="login2"]').click()

    //User name
    await page.locator('[id="loginusername"]').fill('pavanol')
 
   //Password
   await page.locator('[id="loginpassword"]').fill('test@123')

   //login button
    await page.locator('[onclick="logIn()"]').click()

    //Assertion
    await expect(page.locator('[id="nameofuser"]')).toBeVisible()

    //Click laptop
    await page.locator('//a[text()="Laptops"]').click()
    await page.waitForTimeout(2000)

    //Product list
      let one = await page.$$('[class="hrefch"]')
    
     for (const two of one) {
        let three   = await two.textContent()
        console.log(three)
    }

    //Select one product
    await page.locator('//a[text()="MacBook air"]').click()
    await page.waitForTimeout(2000)

  
//Add to cart and Hanndle dialog
    
    await page.locator('[class="btn btn-success btn-lg"]').click()
    await page.waitForTimeout(2000)

    //Click cart
    await page.locator('//a[text()="Cart"]').click()
    await page.waitForTimeout(2000)

    //Delete product
    await page.locator('(//a[@href="#"])[8]').click()
    await page.waitForTimeout(2000)
   
    //logout
    await page.locator('[id="logout2"]').click()
    await page.waitForTimeout(2000)

  


})


