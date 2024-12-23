// /*
// 	Higher-order functions are functions that either take functions as arguments or return functions. 
// 	They are powerful for building more abstract and modular code.
// */

// function applyOperation(x, y, operation) {
// 	return operation(x, y);
// }

// var add = function (a, b) {
// 	return a + b
// }

// var result = applyOperation(10, 12, add);
// console.log("Result: ", result)


// /*
// 	Callback functions are functions passed as arguments to other functions, and they are invoked at a later time, often in response to an event or an asynchronous operation.
// 	Callbacks are functions passed as arguments to other functions, which are then executed when a certain operation completes. In Node.js, they are commonly used for handling asynchronous operations.
// */

// function fetchData(callback) {
// 	setTimeout(function () {
// 		callback()
// 	}, 2000)
// }

// function call(){
// 	console.log("Call back function called!")
// }

// var results = fetchData(call)

// /*
// 	Event Loop Flow:
// */

// console.log('Start');

// setTimeout(() => {
//   console.log('Timer callback');
// }, 0);

// Promise.resolve().then(() => {
//   console.log('Promise callback');
// });

// console.log('End');


/*
	Prototype is a fundamental concept that allows objects to inherit properties and methods from other objects. 
	It is a mechanism by which JavaScript implements inheritance and allows objects to share behavior, rather than copying methods and properties to each instance. Every JavaScript object has an internal property called [[Prototype]] (accessible via __proto__ in some browsers), and this prototype object can have its own properties and methods.
*/

// 
// Array.prototype.divisibleByTwo = function () {
//   return this.filter((item) => item % 2 === 0);
// };

// // Your array
// var test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Call the custom method
// var evenNumbers = test.divisibleByTwo();

// console.log(evenNumbers); // [2, 4, 6, 8, 10]


// var
// 1, 2, 3, 4, 5, 2, 3, 4, 5, 3, 4,
// 1, 2, 3, 4, 5


let array = [400, 800, 16000, 2000, 2400];
let maxLimit = 400;
let withdraw = [];
let exiteQue = [];
let contiLoop = true;

while(contiLoop) {
    for (let j = 0; j < array.length; j++) {
        if (array[j] == 0) {
            out.push(j)
            continue
        }

        array[j] = array[j] - maxLimit

    }

    if (aray)
    contiLoop = false

    // console.log("array", array)
    // i++;
}
console.log("out", out)
console.log("array", array)


