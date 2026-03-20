// PLAYWRIGHT syntax
// import {test, expect} from "@playwright/test" OR  const { test,expect } = require ('@playwright/test')

//test("Handling homepage and login page",async function({page}){}) OR  test("Handling homepage and login page",async ({page})=>{})


import{test,expect} from '@playwright/test'

test ("Verify Application Title", async ({page})=>{

    // Open Website / Web page
    await page.goto('https://www.google.com/')

    // Print URL
    const url = await page.url()
    console.log('URL is:',url)

    // Print Title and Assertion for Title
    const Title = await page.title()
    console.log('Title is:',Title)
    await expect(page).toHaveTitle('Google')

    // Close the current browser tab 
    await page.close()

})

