import{test,expect} from '@playwright/test'

test('Locating Multiple Elements', async({page})=>{

    await page.goto('https://www.demoblaze.com/index.html')

    //Print homepage options
    const links = await page.$$('a');

    for (const link of links) {

        const textlink = await link.textContent()
        console.log(textlink);

    }

    //Locate all the products displayed on the homepage
    const products = await page.$$('//div[@id="tbodyid"]//div/h4/a')
    for (const product of products) {
        const productName = await product.textContent()
        console.log(productName)
        
    }

})