
//  Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope (to the top of the current script or the current function).

// "Cannot access 'name' before initialization" occurs because variables declared with let do not have a default value when hoisted. As we saw in var, the variables have a default value of undefined until the line where the declaration/initialization is executed. But with let, the variables are uninitialized.

// hosting("where is prakash?")

// function hosting (string) {
//     console.log("data", string);
// }

// number = 100

// console.log(number)
// var number;  // in javascript var are hosted but not initilization that's reason we got undefined


// hoistedVariable = 3;
// console.log(hoistedVariable); // outputs 3 even when the variable is declared after it is initialized
// var hoistedVariable;


// Function declaration
// function addNoDeclaration() {
//     console.log("Adding no from Func. declaration");
// }
// addNoExpression()

// // //Function expression
// const addNoExpression = function () {
//     console.log("Addingno from func. declaration");
// }


// x = 5;
// console.log('Print ', x);
// var x;



// printHello()
// // hello

// printDillion()
// // ReferenceError: printDillion is not defined

// function printHello() {
//   console.log('hello')

//   function printDillion() {
//     console.log("dillion")
//   }
// }

console.log(name)
// undefined

var name = "Dillion"