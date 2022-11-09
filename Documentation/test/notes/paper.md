How do we use test module from node?

We have to import it using node:[built-in moduleName]

Example:

import test from "node:test";

note: If you don't import from node:test it wont work at all!


////////////////////////////////

What are the 3 ways that a test in node is processed?

1.) sync fxn - pass: if it doesn't throw an error - fail: if it throws an error

note: This means it passes in the absence of an error - remember that

2.) Promise fxns (async/await/etc) - pass: Promise resolves - fail: Promise rejects

3.) Callback fxns - pass: falsy value in 1st argument (error first pattern) - fail: truthy value as 1st argument Or returns a Promise

//////////////////////////////

How do you skip a test within node's test module?

Within the test fxn you pass in an options object that has a skip prop that if set to true will skip the test

example: 

test('skip something', {skip: true}, (neverUsed)=>{...});

test('skip', (t)=>{t.skip()})

/////////////////////////////////////


What happens when a test file fails?

it will run process.exit(1) meaning it failed


What is TAP?

something written to the node process global 


How to create subtests? 

When we create a test we can make an callback with a parameter (usually t by default) which allows us to make subtest (test inside of a test!)


Example: 

test('some test', async(t)=>{
    await t.test('subtest', (t)=>{
        assert.strictEqual(1,1)
    });
})


What is important to remember about using async keyword with test module in node?

If you use async for test callback, You MUST use 'await' keyword for each test b/c the parent test does not wait for its subtests to finish and unfinished subtest are cancelled and considered fails. If any subtest fails, the parent test also fails!



