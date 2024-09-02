/*In JavaScript, the concepts of call by value and call by reference relate to how arguments are passed to functions. */

// Call by Value in JavaScript

// When a primitive type (like numbers, strings, booleans, null, undefined, bigint, or symbol) is passed to a function, JavaScript uses call by value. This means that a copy of the actual value is passed to the function, and any changes made to the parameter inside the function do not affect the original variable.

function modifyValue(x) {
    x = x * 2;
}

let a = 5;
modifyValue(a);
console.log(a);

// Call by Reference in JavaScript

// Definition: When a non-primitive type (like objects or arrays) is passed to a function, JavaScript passes a reference to that object or array. This means that the function operates on the original object or array, and any changes made to the parameter inside the function do affect the original object or array.

// Behavior: The function operates on the original object or array, so any modifications made inside the function will be reflected outside of it.

function modifyObject(obj) {
    obj.name = "John";  // Modifies the actual object
}

let person = { name: "Alice" };
modifyObject(person);
console.log(person.name);  // Output: "John"
