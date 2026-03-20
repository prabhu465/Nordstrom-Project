import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  
  await page.goto('https://www.saucedemo.com/');
  await page.waitForTimeout(2000)

  await page.getByPlaceholder('Username').fill('standard_user')
  await page.waitForTimeout(2000)

  await page.getByPlaceholder('Password').fill('secret_sauce')
  await page.waitForTimeout(2000)

  await page.locator('[id="login-button"]').click()
  await page.waitForTimeout(2000)

  console.log("Page Title:", await page.title())
  console.log("Page URL:", page.url())


  // await expect(page).toHaveTitle(' Swag Labs')
  // await expect(page).toHaveURL('https://www.saucedemo.com/')

  
  let sause = await page.getByPlaceholder('Username').fill('standard_user').textContent()
  await expect(sause).toBevisible()

  
  


  
  



});