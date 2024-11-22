/*
# Use Promise.all when you want to wait for all promises to successfully complete, and you're fine with the whole operation failing if any single promise fails.
# When you need to perform multiple asynchronous operations concurrently and wait for all of them to complete before proceeding.

# Use Promise.allSettled when you want to wait for all promises to complete regardless of whether they succeed or fail, and you want to know the outcome of each promise.

*/

// Promise.allSettled takes an array of promises and returns a single promise that resolves after all of the promises in the array have either resolved or rejected. It returns an array of objects describing the outcome of each promise.

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
//             console.log(`Promise rejected with error: ${JSON.stringify(result)}`);
//         }
//     });
// })
// .catch(error => console.error("Rejected promise", error));

// Promise.all takes an array of promises and returns a single promise that resolves when all of the promises in the array have resolved. If any of the promises in the array reject, the returned promise is rejected with the reason of the first promise that rejected.
// Promise.all(promises)
//   .then(results => {
//       console.log('results', results)
//     results.forEach(result => {
//       if (result.status === 'fulfilled') {
//         console.log(`Promise fulfilled with value: ${result.value}`);
//       } else {
//         console.log(`Promise rejected with error: ${JSON.stringify(result)}`);
//       }
//     });
// }).catch(error => console.error("Error Promise all: ", error));

// const promise1 = Promise.resolve(3);
// const promise2 = new Promise((resolve, reject) =>
//   setTimeout(reject, 100, 'foo'),
// );

// Promise.allSettled([promise1, promise2]).then((results) => {
//     // console.log("Result", results)
//     results.forEach((result) => {
//         console.log(result)
//     });
// });

// returns a promise that resolves as soon as any of the promises in the iterable resolves. If no promises resolve (i.e., all promises reject)
// const promise1 = Promise.reject((reject) => setTimeout(reject, 100, 'reject'));
// const promise2 = new Promise((resolve) => setTimeout(resolve, 1000, 'quick'));
// const promise3 = new Promise((resolve) => setTimeout(resolve, 500, 'slow'));

// Promise.any([promise1, promise2, promise3]).then((value) => {
//     console.log("Promise any", value)
// });

// Promise.any is a method in JavaScript that is used to handle multiple promises and resolve as soon as any one of them resolves. It is useful when you want to take action as soon as at least one promise fulfills, rather than waiting for all promises to resolve or handling errors if any promise rejects.

// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(reject, 500, 'Error: promise1 failed');
// });

// const promise2 = new Promise((resolve, reject) => {
//     setTimeout(reject, 1000, 'Error: promise2 failed');
// });

// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 1500, 'Promise resolve');
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
//     setTimeout(reject, 3000, 'promise1 rejected');
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

const fetchWithTimeout = (url, timeout) => {
    const fetchPromise = fetch(url);

    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Request timed out')), timeout);
    });

    return Promise.race([fetchPromise, timeoutPromise]);
};

fetchWithTimeout('https://jsonplaceholder.typicode.com/todos/1', 1000)
.then((response) => response.json())
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.error(error);  // Output: 'Request timed out' if the request takes longer than 5000ms
});