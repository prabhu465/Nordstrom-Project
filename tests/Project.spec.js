

import {test, expect} from '@playwright/test'

test("Handling Demologin", async({page})=>{

    //Web page launch
    await page.goto('https://practicetestautomation.com/practice-test-login/')

    // id locator
    await page.fill('id=username','student')
    await page.fill('id=password', 'Password123')
    await page.click('id=submit')
    await page.waitForTimeout(2000)


    //name locator
    await page.getByRole('textbox',{name:'username'}).fill('student')
    await page.getByRole('textbox',{name:"password"}).fill('Password123')
    //Submit =  There is no name locator
    await page.waitForTimeout(2000)

    //class locator
    // username = There is no class locator
    // password = There is no class locator
    await page.click('[class="btn"]')  
    await page.waitForTimeout(2000)

    
})


