import{test,expect} from "@playwright/test"

test ("AMAZON", async ({page})=>{

await page.goto("https://www.amazon.in/ref=nav_logo")

await page.locator('[id="twotabsearchtextbox"]').fill('mobile')


await page.locator('[type="submit"]').click()
await page.waitForTimeout(3000)



})