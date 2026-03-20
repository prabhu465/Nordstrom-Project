// //BUILT-IN LOCATORS - 7


//  import {test , expect} from "@playwright/test"
//  test ("Demo", async function ({page}) {

//      //Browser launch
//      await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

     
//      //ALT TEXT 
//      await expect( await page.getByAltText('company-branding')).toBeVisible()
//      await page.waitForTimeout(2000)

//      //PlaceHolder
//      await page.getByPlaceholder('Username').fill('Admin')
//      await page.waitForTimeout(2000)
//      await page.getByPlaceholder('Password').fill('admin123')
//      await page.waitForTimeout(2000)
    
    

//      //TEXT 
//      let username = await page.locator('[class="oxd-userdropdown-tab"]').textContent()
//      console.log("User-Name is :", username)

//      await expect(await page.getByText(username)).toBeVisible()


//      //LABEL
//    await expect(page.getByLabel('Sidepanel')).toBeVisible()


//      //TITLE
//   await page.getByTitle('Help').click()
  

//      //Test id
// //go through https://playwright.dev refer

 
// // captcha
//  await page.pause()
//  })

