//Screenshot

import{test,expect} from "@playwright/test"

test("Handling 3 types Screenshot",async ({page})=>{

//Browser launch
  await page.goto('https://www.demoblaze.com/')

//element Screenshot
  await page.screenshot({path:"tests/Image-screenshot/" + "element.png"})
  await page.waitForTimeout(2000)

// page Screenshot
  await page.locator('(//img[@class="card-img-top img-fluid"])[1]').screenshot({path:"tests/Image-screenshot/" +Date.now()+"ParticularPage.png"})
  await page.waitForTimeout(2000)

// full page screenshot
  await page.screenshot({path:"tests/Image-screenshot/" + "FullPage.png", fullPage:true})
  await page.waitForTimeout(2000)


})


