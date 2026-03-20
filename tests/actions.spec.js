//ACTIONS
// RADIO BUTTON &  CHECKBOX

import {test,expect} from '@playwright/test'

test('Handling Radio Button', async ({page})=>{

    //Browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')


    //Radio Button-male
    await page.locator('[id="male"]').click()
    await page.waitForTimeout(2000)
    
    //Radio Button-female
    await page.locator("//label[text()='Female']").check()
    await page.waitForTimeout(2000)


    //Assertion
    await expect(await page.locator('[id="female"]')).toBeChecked()
    await expect(await page.locator('[id="male"]').isChecked()).toBeFalsy()    
 
})



test.only('Handling Checkbox', async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/')
   
    //Single Checkbox - Sunday
    await page.locator('[id="sunday"]').check()
    await page.waitForTimeout(2000)
    

    //Check Multi Checkbox - Tuesday,Thursday,saturday
var multiChecks = [
    await page.locator('[id="tuesday"]') ,
    await page.locator("#thursday") ,
    await page.locator('//label[text()="Saturday"]')
]

    for(let element of multiChecks){
        await element.check()
    }
  await page.waitForTimeout(2000)

  //Uncheck Multi Checkbox  
var multiChecks = [
    await page.locator('[id="tuesday"]') ,
    await page.locator("#thursday") ,
    await page.locator('//label[text()="Saturday"]')
]

    for(let element of multiChecks){
        await element.uncheck()
    }
  await page.waitForTimeout(2000)
    

})


