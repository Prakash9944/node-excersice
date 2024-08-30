/*In JavaScript, functions are executed in the context of their lexical scope, which means they have access to variables defined in their outer scope.*/
/*Closure is created when a function is defined inside another function, and the inner function references variables from the outer function.*/
/*Global variables can be made local (private) with closures.*/
/*Closure gives you access to an outer function scope[variable] from inner function*/
/*inner function can accesses outer function variables*/

/****************CLOSURE**************************/
function parent() {
    let value = 0;
    console.log("Parent: ", value);
    function child() {
        let age = 40;
        value += 1
        console.log('From child function value', value)
    }

    console.log('Parent print: ', age) // ReferenceError: age is not defined
    child()
}
parent()

/****************CLOSURE**************************/

function outer() {
  var outerVal = 20

  function inner() {
    console.log("Print in inner access the outer function variable: ", outerVal)
  }

  return inner();
}
console.log("Called outer function: ", outer())

/****************CLOSURE**************************/