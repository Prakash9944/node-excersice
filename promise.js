// var promises = new Promise(function (resolve, reject) {
//     var result;
//     setTimeout(function() {
//         console.log('First')
//     }, 1000)
//     setTimeout(function() {
//         console.log('second')
//     }, 2000)
//     setTimeout(function() {
//         console.log('third')
//     }, 4000)
//     setTimeout(function() {
//         result = true;
//         resolve(result)
//     }, 1000)
// })
// promises.then(function(val) {
//     console.log('Wait....', val)
// })

//  Promise chaining
// var promiseChain = function () {
//     var result =  new Promise((resolve)=> {
//         return resolve(10);
//     }).then((response) => {
//         let total = response + 10
//         return total + 10;
//     }).then((response) => {
//         let anotherTotal = response + 44;
//         result = anotherTotal
//         return anotherTotal
//     })

//     console.log('Result!', result)
//     return result;
// }
// promiseChain().then((response) => {
//     console.log("Promise Chain", response)
// })

// var newPromise = new Promise((resolve, reject) => {
//     return resolve (test)
// }).then((result) => {
//     console.log('newPromise', res())
// })

// var promiseResult = new Promise(function (resolve, reject) {
//     setTimeout(function(){
//         if (3 == 4) {
//             resolve(3)
//         } else {
//             reject('Error frim')
//         }
//     }, 5000)
// });

// promiseResult.then((result)=> {
//     console.log("result", result)
// }).catch((err)=> {
//     console.error('Error', err)
// })

// new Promise((resolve, reject) => {
//     var result = fetch("http://example.com/movies.json");
//     if (result) {
//         return resolve(result)
//     } else {
//         reject(new Error("Invalid api call"))
//     }
// }).then((result) => {
//     console.log('result', result)
// })