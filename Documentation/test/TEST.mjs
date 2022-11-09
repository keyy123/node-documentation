import assert from 'node:assert';
import test from 'node:test';
import os from 'node:os';
// test if import is correct
// console.log(test);

// Sync Tests

// test('sync test pass', (t)=>{
//     // console.log(t)
//     assert.strictEqual(1,1)
// })

// test('sync test fail', (t)=>{
//     throw new Error('whoops...');
// })

// Async Tests

// test('async pass', {skip: true},async (t) => {
//     //async/await wraps test in a promise under the hood and it resolves
//     assert.strictEqual(1, 1);
// });

// test('async fail',{skip:true}, async(t)=>{
//     // Promise is rejected
//     assert.strictEqual(1, 2);
// });

// test('fail testing using an explicit promise', (t) => {
//     return new Promise((resolve, reject)=>{
//         reject("Just Because");
//     });
// });


// Callback 

// test('callback pass',{skip:true},(t, cb)=>{
//     setImmediate(cb);
// })

// test('callback fail',{skip:true}, (t, cb)=>{
//     setImmediate(()=>{
//         cb(new Error('callback failed'))
//     });
// })

// test('callback fail truthy', (t, cb)=>{
//     setImmediate(()=>{
//         cb(new Error(), 1);
//     });
// })


// Subtests

// test('top test', async (t)=>{
//     await t.test('subtest 1', (t)=>{
//         assert.strictEqual(1,1);
//     });

//     // await t.test('subtest 2', (t)=>{
//     //     assert.strictEqual(2,3);
//     // });

//     await t.skip("skipped");
// });

