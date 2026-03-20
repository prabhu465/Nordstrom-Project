//Handling TABLE DATAS

import {test,expect} from "@playwright/test"

test("Handling TABLE DATAS", async ({page})=> {

    //Browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //Pagination table
    let tableColumns = await page.$$('//table[@id="productTable"]//thead//tr//th')   
    console.log("Table Columns:", await tableColumns.length)

    let tableRows = await page.locator('//table[@id="productTable"]//tbody//tr')
    console.log("Table Rows:", await tableRows.count())
  

    //1.Select a product

    let single = await tableRows.filter({
        has : await page.locator('td'),
        hasText : "Tablet"
        
    })
        //table
        await single.locator('input').click()
        await page.waitForTimeout(5000)

        //2.Select Multiple Products
        async function multiCheck(prodName){
            let singleCheck = await tableRows.filter({
              has : await page.locator('td')  ,
              hasText : prodName

            })

            //table
            await singleCheck.locator('input').click()

        }

        await multiCheck("Smartphone")
        await multiCheck("Wireless Earbuds")
        await page.waitForTimeout(5000)
            

})