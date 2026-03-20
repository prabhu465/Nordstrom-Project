//Upload files

import{test,expect} from '@playwright/test'

test("Handling Upload files", async ({page})=>{

      //Browser launch
      await page.goto('https://testautomationpractice.blogspot.com/')
      await expect(page.locator('//h1[@class="title"]')).toBeVisible()

      //Single file
      await page.locator('[id="singleFileInput"]').scrollIntoViewIfNeeded()
      await page.locator('[id="singleFileInput"]').setInputFiles('C:/Users/Prabhu/OneDrive/Desktop/Locators.txt')
      await page.waitForTimeout(3000)


      //Multiple files
      await page.locator('[id="multipleFilesInput"]').setInputFiles(['C:/Users/Prabhu/OneDrive/Desktop/Playwright.docx','C:/Users/Prabhu/OneDrive/Desktop/New Microsoft Excel Worksheet.xlsx'])
      await page.waitForTimeout(3000)


})
