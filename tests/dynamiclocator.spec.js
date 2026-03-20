

import{test,expext} from '@playwright/test'


test("Myntra page", async ({page})=>{

    await page.goto('https://www.myntra.com/')
    await page.hover('//a[@data-group="kids"]')
  
    //Tshirt - Freeze and take locator
    await page.click('[data-reactid="345"]')
    await page.waitForTimeout(3000)
    
    //Number of products print - Starts from Product base 1 of 50
     let totalProducts = await page.$$('//li[@class="product-base"]')
     console.log("No Of Products:",totalProducts.length)
  
     
    //List of discount price print - from product base to discount price
    let discountpricelist=  await page.locator('//li[@class="product-base"]//descendant::span[@class="product-discountedPrice"]').allInnerTexts()
    console.log(discountpricelist) 
    console.log(discountpricelist.length)

       
       
    //Find Minimum & Maximum price 
    let discountpriceList = await page.locator('//li[@class="product-base"]//descendant::span[@class="product-discountedPrice"]').allInnerTexts()
    let priceArray = discountpriceList.map(price => parseInt(price.replace(/[^0-9]/g, '')));
    
    let minPrice = Math.min(...priceArray);
    let maxPrice = Math.max(...priceArray);

    console.log("Minimum Price:", minPrice);
    console.log("Maximum Price:", maxPrice);

    

    
})


    