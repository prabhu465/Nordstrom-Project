//Handling Hook1

import{test,expect} from '@playwright/test'

test("Handling Hook1", async ({page})=>{

//Browser launch & Assertion
await page.goto('https://www.demoblaze.com/')
await expect(page.locator('[id="nava"]')).toBeVisible()

//Log in option
await page.click('[id="login2"]')

//User Name & Password
await page.locator('[id="loginusername"]').fill('Prabubodi')
await page.locator('[id="loginpassword"]').fill('Prabu@123')
await page.waitForTimeout(2000)

//Assertion of Log in Button enable 
await expect(page.locator('//button[text()="Log in"]')).toBeEnabled()

//Login button click
await page.click('//button[text()="Log in"]')
await page.waitForTimeout(3000)


//After login Assertion
await page.waitForSelector('[id="nameofuser"]')

let userName = await page.locator('[id="nameofuser"]').textContent()
userName = userName.replace('Welcome','')
console.log(userName.trim())   // Print 

await expect(page.locator('[id="nameofuser"]')).toBeVisible()

//Select a Product
let productList = await page.$$('[class="hrefch"]')

for (const product of productList) {
    
    let text = await product.textContent()

if(text.trim() == "Sony xperia z5"){
    await product.click()
    break
}
    await page.waitForTimeout(2000)
}

    //URL Assertion
    await page.waitForURL('https://www.demoblaze.com/prod.html?idp_=6')
    await expect(page).toHaveURL('https://www.demoblaze.com/prod.html?idp_=6')

    //Add to cart
    await page.waitForLoadState('load')
    await page.waitForTimeout(2000)


    //Popup Assertion
    page.once('dialog', async simple=>{

        expect (await simple.message()).toContain('Product added.')
        await simple.accept()
    })

    //Add to Cart
    await page.click('[onclick="addToCart(6)"]')

    //Click Cart
    await page.click('[id="cartur"]')

    //after Add to cart Assertion
    await page.waitForURL('https://www.demoblaze.com/cart.html')
    await expect(page).toHaveURL('https://www.demoblaze.com/cart.html')


})