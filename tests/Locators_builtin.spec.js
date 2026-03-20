/*
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.
page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).
*/

import{test,expect} from '@playwright/test'

test('Builtin Locators', async ({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')


    //page.getByRole() to locate by explicit and implicit accessibility attributes
    const logo = await page.getByAltText('company-branding')
    await expect(logo).toBeVisible();
    await page.waitForTimeout(3000)

    
    //page.getByPlaceholder() to locate an input by placeholder.
    await page.getByPlaceholder('username').fill('Admin')
    await page.getByPlaceholder('password').fill('admin123')
     await page.waitForTimeout(3000)


    //page.getByRole() to locate by explicit and implicit accessibility attributes.
    await page.getByRole('button',{type:'submit'}).click()
    await page.waitForTimeout(3000)


    //page.getByText() to locate by text content.
    const name = await page.locator('//p[@class="oxd-userdropdown-name"]').textContent()
    await expect(await page.getByText(name)).toBeVisible()
    await page.waitForTimeout(3000)


})

