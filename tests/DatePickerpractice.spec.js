import {test,expect} from '@playwright/test'

test("Handling Datepicker1", async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout(2000)
    
    //Fill method - Month,date,Year 
    await page.locator('[id="datepicker"]').scrollIntoViewIfNeeded()
    // await page.locator('[id="datepicker"]').fill('12/25/2026')
    await page.locator('[id="datepicker"]').click()
    await page.waitForTimeout(2000)
})


test.only("Handling Datepicker2", async({page})=>{
    
    //Browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForTimeout(2000)

    //Locator
    await page.locator('[id="datepicker"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)
    await page.locator('[id="datepicker"]').click()
    
    //Over Month,Year 
    let selectedMonth = "February"
    let selectedYear = 2028


     while(true){
        let currentMonth = await page.locator('[class="ui-datepicker-month"]').textContent()
        let currentYear = await page.locator('[class="ui-datepicker-year"]').textContent()

         if(currentMonth == selectedMonth && currentYear == selectedYear){

            break
         }
         
         await page.click('//span[text()="Next"]')
    }
    await page.waitForTimeout(2000)

         
        var standaredDate = "20"
        
       let date = await page.$$('[class="ui-state-default"]')
       for (const element of date) {
        let dt = await element.textContent()
        if(dt == 15){
            await element.click()
            break
        }

       }
       await page.waitForTimeout(2000)
})