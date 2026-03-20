//Basic - test, test.only, test.skip 

import{test,expect} from "@playwright/test"

test("My First Test",async ({page})=>{
expect(12).toBe(12)
})

test.skip("My Second Test",async ({page})=>{
expect(100).toBe(101)
})

test.skip("My Third Test",async ({page})=>{
expect(2.0).toBe(2.8)
})

test("My Fourth Test",async ({page})=>{
expect("Mukesh Otwani").toContain("Mukesh")
})


console.log('Print')
console.error('Mistake')
console.warn('Warning')


