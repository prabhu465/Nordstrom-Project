
import {test,expect} from "@playwright/test"
import { asyncWrapProviders } from "node:async_hooks"

test ("Handling Date picker1", async ({page})=>{

    //Browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    
    //Approach-1 - Fill - Month,Date,Year 
    let date1 = await page.locator('[id="datepicker"]')
    await date1.scrollIntoViewIfNeeded()
    await date1.fill('02/14/2026')
    await page.waitForTimeout(2000)
    await date1.click()
                                //---OR---

    // await page.locator('[id="datepicker"]').scrollIntoViewIfNeeded()
    // await page.locator('[id="datepicker"]').fill('02/14/2026')
    // await page.waitForTimeout(2000)
    // await page.locator('[id="datepicker"]').click()

})


    test.only("Handling Date picker2", async ({page})=>{

        //Browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')


    //Approach - 2
    await page.locator('[id="datepicker"]').scrollIntoViewIfNeeded()
    await page.waitForTimeout(2000)
    await page.locator('[id="datepicker"]').click()


    let selectedDate = "20"
    let selectedMonth = "August"
    let selectedYear = "2027"

    while(true){
        let currentMonth = await page.locator('[class="ui-datepicker-month"]').textContent()
        let currentYear = await page.locator('[class="ui-datepicker-year"]').textContent()

         if(currentMonth == selectedMonth && currentYear == selectedYear){

            break
         }
         
         await page.click('//span[text()="Next"]')
    }
    await page.waitForTimeout(3000)

})