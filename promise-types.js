// const promises = [
//     Promise.resolve(1),
//     Promise.resolve(2),
//     Promise.reject(new Error('Error occurred from promise')),
//     Promise.resolve(3)
// ];

// Promise
// .allSettled(promises)
// .then(results => {
//     console.log('results', results)

//     results.forEach(result => {
//         if (result.status === 'fulfilled') {
//             console.log(`Promise fulfilled with value: ${result.value}`);
//         } else {
//             console.log(`Promise rejected with error: ${result.value.message}`);
//         }
//     });
// })
// .catch(error => console.error(error));


// Promise.all(promises)
//   .then(results => {
//       console.log('results', results)
//     // results.forEach(result => {
//     //   if (result.status === 'fulfilled') {
//     //     console.log(`Promise fulfilled with value: ${result.value}`);
//     //   } else {
//     //     console.log(`Promise rejected with error: ${result.value.message}`);
//     //   }
//     // });
// }).catch(error => console.error("Error Promise all: ", error));

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, 'foo'),
// );

// Promise.allSettled([promise1, promise2]).then((results) => {
//     console.log("Result", results)
//     results.forEach((result) => {
//         console.log(result.status)
//     });
// });

// const promise1 = Promise.reject((reject) => setTimeout(reject, 100, 'reject'));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// Promise.any([promise1, promise2, promise3]).then((value) => {
//     console.log("Promise any", value)
// });

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(reject, 500, 'Error: promise1 failed');
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 1000, 'Error: promise2 failed');
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(reject, 1500, 'Error: promise3 failed');
// });

// Promise.any([promise1, promise2, promise3])
//     .then((value) => {
//         console.log(value);
//     })
// .catch((error) => {
//     console.error('All promises rejected:', error);
//     // console.error('AggregateError:', error.errors);
// });

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(reject, 500, 'Error: promise1 failed');
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'promise2 success');
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 200, 'promise3 success');
// });

// Promise.any([promise1, promise2, promise3])
// .then((value) => {
//     console.log(value);
// })
// .catch((error) => {
//     console.error('All promises rejected:', error);
// });


//  Promise Race

// Promise.race returns the first settled promise, which will be the fetch promise if it completes within the timeout or the timeout promise if the request takes too long.

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 500, 'promise1 resolved');
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'promise2 resolved');
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 200, 'promise3 resolved');
// });

// Promise.race([promise1, promise2, promise3])
// .then((value) => {
//     console.log(value);
// })
// .catch((error) => {
//     console.error(error);
// });


// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(reject, 300, 'promise1 rejected');
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1000, 'promise2 resolved');
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 2000, 'promise3 resolved');
// });

// Promise.race([promise1, promise2, promise3])
// .then((value) => {
//     console.log(value);
// })
// .catch((error) => {
//     console.error(error);
// });

// const fetchWithTimeout = (url, timeout) => {
//     const fetchPromise = fetch(url);

//     const timeoutPromise = new Promise((_, reject) => {
//         setTimeout(() => reject(new Error('Request timed out')), timeout);
//     });

//     return Promise.race([fetchPromise, timeoutPromise]);
// };

// fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 8000)
// .then((response) => response.json())
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => {
//     console.error(error);  // Output: 'Request timed out' if the request takes longer than 5000ms
// });