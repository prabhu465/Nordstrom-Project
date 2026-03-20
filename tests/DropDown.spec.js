//DROPDOWN - 2

//Single Dropdown

import {test,expect} from "@playwright/test"

test ("Handling single drop down", async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    //Single drop down

    await page.locator ('[id="country"]').scrollIntoViewIfNeeded()

    //1.Visible Text

    await page.locator('[id="country"]').click()
    await page.locator('[id="country"]').selectOption("Australia")
    await page.waitForTimeout(3000)

    //2.Label

    await page.locator('').selectOption({label : "Brazil"})
    await page.waitForTimeout(3000)

    //3.value

    await page.locator('[id="country"]').selectOption({value : 'canada'})
    await page.waitForTimeout(5000)

    //4.Index

    await page.locator('[id="country"]').selectOption({index : 4})
    await page.waitForTimeout(3000)

    //Assertion
    //Assertion for how many?
    const ddCount = page.locator('[id="country"] option')
     console.log(await ddCount.count())


    
     await expect(page.locator('[id="country"]>option')).toHaveCount(10)
    await expect((await page.$$('//select[@id="country"]//option')).length).toBe(10)
})


//Multiple Dropdown 


// // test.only("Handling Multiple Drop Down", async ({page})=>{

// //     await page.goto('https://testautomationpractice.blogspot.com/')
// //     await page.locator('[id="country"]').scrollIntoViewIfNeeded()

// //     //select multiple options
// //     await page.locator('[id="colors"]').selectOption(["Red","Green","Yellow","Red","Green"])
// //     await page.waitForTimeout(5000)

// //     //Deselect
// //     await page.locator('[id="colors"]').selectOption([])
// //     await page.waitForTimeout(5000)

// //     //select duplicate
// //     await page.locator('[id="colors"]')
// //     .selectOption([{label:"Red"},{value : "green"},{value : "yellow"},{index : 4},{index : 6}])
// //     await page.waitForTimeout(5000)

// })