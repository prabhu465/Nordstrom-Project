//HANDLING ANNOTATIONS and TAGS


const {test , expect} = require("@playwright/test")


test("Test 1 " , async ()=>{
    console.log('ONLY')
})

test.skip("Test 2 " , async ()=>{
    console.log('SKIP')
})

test.fixme("Test 3 " , async ()=>{
    console.log('FIX ME')
})

test.fail("Test 4 " , async ()=>{
   expect(3).toBe(2)
})

test("Test 5 " , async ({browserName})=>{
    if(browserName == "chromium"){
        test.skip()
    }
    console.log('SKIP')
})

test("Test 6 " , async ()=>{
    test.slow()
    console.log('SLOW')
})

test("Test 7 " , async ()=>{
    test.setTimeout(12 * 10000)
    console.log('SET TIMEOUT')
})




