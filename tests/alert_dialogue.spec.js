// Alert or Dialogue 

import {test,expect} from '@playwright/test'

test("Handling Alert or Dialogue", async ({page})=>{

//Browser launch
await page.goto('https://testautomationpractice.blogspot.com/')
await page.waitForTimeout(2000)

//Simple alert
await page.locator('[id="alertBtn"]').click()
await page.waitForTimeout(2000)

//Popup Assertion
await page.locator('[id="alertBtn"]').click()
await page.waitForTimeout(2000)

await page.on('dialog', async gayu => {    

    await expect(gayu.type()).toContain('alert')                       //Alert Box-Popup open
    await expect(gayu.message()).toContain('I am an alert box!')       //Message shows inside popup
    await gayu.accept()

})

})

//Confirm alert
test('Handling Confirm alert', async function({page}){

     await page.goto('https://testautomationpractice.blogspot.com/')
     await page.waitForTimeout(2000)
     
     await page.on('dialog', async function(sundar){

        await expect (sundar.type()).toContain('confirm')
        await expect(sundar.message()).toContain('Press a button!')
        await sundar.dismiss()
     })
     await page.waitForTimeout(2000)

     await page.locator('[id="confirmBtn"]').click()
     await page.waitForTimeout(2000)
    
})

//Propmt alert
test.only('Handling Prompt alert', async function({page}){

     await page.goto('https://testautomationpractice.blogspot.com/')
     await page.waitForTimeout(2000)

     await page.on('dialog', async function(sundar){

        await expect (sundar.type()).toContain('prompt')
        await expect(sundar.message()).toContain('Please enter your name:')
        await expect(sundar.defaultValue()).toContain('Harry')
        await sundar.accept('Prabu')
     })
     await page.waitForTimeout(2000)

     await page.locator('[id="promptBtn"]').click()
     await page.waitForTimeout(2000)
    
})




