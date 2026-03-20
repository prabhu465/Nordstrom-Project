import {test,expect} from "@playwright/test"

test("Handling Mouse actions", async ({page})=>{

    //Browser launch
    await page.goto('https://testautomationpractice.blogspot.com/')

    //1.Hover 
    await page.locator('[class="dropbtn"]').scrollIntoViewIfNeeded()
    await page.locator('[class="dropbtn"]').hover()
    await page.waitForTimeout(2000)


    await page.locator('//a[text()="Laptops"]').click()  //click laptop

    //2.Double click 
    //Approach-1
    // await page.locator('[id="field1"]').clear()
    // await page.locator('[id="field1"]').fill('prabubodi')
    // await page.locator('[ondblclick="myFunction1()"]').dblclick()
    // await page.waitForTimeout(2000)

    // Approach-2
    let one = await page.locator('[id="field1"]')
    await one.clear()
    await one.fill('prabubodi')
    await page.locator('[ondblclick="myFunction1()"]').dblclick()
    await page.waitForTimeout(2000)


    //3.Drog and Drop
    //Approach-1
    // await page.dragAndDrop('[id="draggable"]', '[id="droppable"]')
    // await page.waitForTimeout(2000)

    //Approach-2
    // let gayu = await page.locator('[id="draggable"]')
    // let yam = await page.locator('[id="droppable"]')    

    // await gayu.dragTo(yam)
    // await page.waitForTimeout(2000)

    //Approach-3
    let sri = await page.locator('[id="draggable"]')
    let sne = await page.locator('[id="droppable"]')       

    await sri.hover()
    await page.mouse.down()
    await page.waitForTimeout(2000)

    await sne.hover()
    await page.mouse.up()
    await page.waitForTimeout(2000)

    //4.Right click
    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    await page.waitForTimeout(2000)

    await page.locator('[class="context-menu-one btn btn-neutral"]').click({button: 'right'})
    await page.locator('//span[text()="Quit"]').click()
    await page.waitForTimeout(2000)


    






})