//Include playwright module
const {test,expect} = require('@playwright/test')

// Write a test
test (" Validate Youtube title", async ({page})=>{


// Go to URL
await page.goto('https://www.youtube.com/');

// Search with keywords
await page.getByRole('combobox', { name: 'Search' }).fill("cypress by tester talk");
await expect(page.getByRole('combobox', { name: 'Search' })).toBeEnabled();

await page.getByRole('button', { name: 'Search', exact: true }).click();


// Click on playlist
await page.getByRole('link', { name: 'Cypress by Testers Talk☑️' }).click();

// Validate title
const pageTitle = await page.title()
console.log(pageTitle);
})