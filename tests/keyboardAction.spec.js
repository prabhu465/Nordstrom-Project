//Keyboard Action

import{test,expect} from '@playwright/test'

test("Keyboard Action", async ({page})=>{

    //Browser launch
    await page.goto('https://gotranscript.com/text-compare')

    //Locator
    await page.locator('[name="text1"]').scrollIntoViewIfNeeded()  
    await page.locator('[name="text1"]').type('PRABU.G - TESTER')
    await page.waitForTimeout(2000)

    //Select,Copy,Tab,past
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')

    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')   
    await page.keyboard.press('Control+V')

    //Tab and Enter
    // await page.keyboard.press('Tab')
    // await page.keyboard.press('Tab')
    // await page.keyboard.press('Tab')
    // await page.keyboard.press('Tab')
    // await page.keyboard.press('Tab')

    for(let i=0 ; i < 5; i++){
        await page.keyboard.press('Tab')
    }

    await page.keyboard.press('Enter')
    await page.waitForTimeout(2000)
    

})