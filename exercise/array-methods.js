/*
    Adds one or more elements to the end of the array.
    Returns the new length of the array.
*/
let pushArr = [1, 2, 3];
pushArr.push(5, 6)
console.log("Array Push: ", pushArr)

/*
    Removes the last element from the array
    Returns the removed element.
*/
let popArr = [1, 2, 3];
let popArrs = popArr.pop();
console.log("popArr", popArrs)

/*
    Removes the first element from the array.
    Returns the removed element.
*/
let arrShift = [1, 2, 3];
let arrShifts = arrShift.shift()
console.log(arrShifts, "Remove the first element!", arrShift)

/*
    Adds one or more elements to the beginning of the array
    Returns the new length of the array.
*/
let arrUnShift = [1, 2, 3];
arrUnShift.unshift(1)
console.log("Add element: ", arrUnShift)

/*
    Adds or removes elements from any position in the array.
    first argument is the index where changes start
    second argument is how many elements to remove, and subsequent arguments are elements to add.
    splice(start, deleteCount, item1, item2)
*/
let months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
console.log("Months: ", months);

/*  Reducer
    reduce(callbackFn, initialValue)
*/
let reducer = [1,2,3,4,5].reduce(function(accumlator, currentValue) {
    return accumlator + currentValue
}, 10);

console.log("REDUCER", reducer)

/*
    The every() method executes a function for each array element.
    The every() method returns true if the function returns true for all elements.
    The every() method returns false if the function returns false for one element.
    The every() method does not execute the function for empty elements.
*/
let arr = [2, 4, 6, 8];
let allEven = arr.every(item => item % 2 === 0); 
console.log("Try programiz.pro", allEven); // Output: true

let arr = [2, 4, 6, 'ssss'];
let allEven = arr.every(item => item % 2 === 0); 
console.log("Try programiz.pro", allEven); // Output: false
// Callback Function Logic:
// #. For item = 2: 2 % 2 === 0 → true
// #. For item = 4: 4 % 2 === 0 → true
// #. For item = 6: 6 % 2 === 0 → true
// #. For item = 'ssss': 'ssss' % 2 === 0 → false


/*
    Some(): Tests whether at least one element in the array passes the test provided by a given function.
    The some method executes the callback function for each element in the array until it finds one where the callback returns true. 
    If such an element is found, some immediately returns true. If no elements pass the condition, some returns false.
*/

const arr = [1, 3, 5, 6];
const hasEven = arr.some(item => item % 2 === 0); // hasEven is true
console.log("hasEven", hasEven)

const people = [{ 
    name: "Alice", age: 25 },
    { name: "Bob", age: 19 },
    { name: "Charlie", age: 17 
}];
const hasMinor = people.some(person => person.age < 18);
console.log(hasMinor);

/*
    findIndex Purpose: Finds the index of the first element that matches a condition specified in a callback function.
    Matching Criteria: Uses a callback function that defines the condition for matching (e.g., a function that checks if an object’s property matches a certain value).
*/
const numbers = [1, 2, 3, 4, 3, 5];
const index = numbers.indexOf(3);
console.log(index); // Output: 2

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
const index = users.findIndex(user => user.name === "Bob");

console.log(index);