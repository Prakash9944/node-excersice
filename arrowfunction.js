/* https://www.youtube.com/watch?v=ONdoSoFDvXI */

// 1. Arrow functions offer a shorter syntax and lexical scoping of this
// 2. Arrow functions do not have their own this context. Instead, they inherit this from the surrounding lexical context
// 3. Arrow function does not have new keyword its not construct
// 4. In an arrow function, the this keyword is lexically bound, meaning it refers to the this value of the surrounding (parent) context in which the arrow  function is defined.

var obj = {
    simple() {
        return this
    }
}

var extractFun = obj.simple;
// console.log("Compare two funciton type: ", obj.simple() === global) // False
// console.log("Compare two funciton type: ", extractFun() === global) // True

// console.log("Here var keyword are hoisted not initialization: ", number) // var keyword declaration are hosted initialization not
// var number = 100

// console.log("Here const keyword not hoisted because const did not have default value: ", constNumber) // const keyword not hosted
// const constNumber = 100

// console.log("Arrow function called: ", arrowFunction);  // Arrow function not hoisting concept because arrow function are not hosted
// var arrowFunction = () => {
//     return 100;
// }

// console.log("Regular function called: ", regularFunction);
// var regularFunction = function () {
//     return 100;
// }

// regularFunction(100)
// function regularFunction(number) {
//     console.log("Print number: ", number)
// }

// var obj = {
//     name: "Prakash",
//     someMethod: () => {
//         return this;
//     }
// }

// var extractSomeMethod = obj.someMethod();
// console.log("Object.someMethod value is empty object, because called via obj references", extractSomeMethod);
// console.log("Object.someMethod also got empty object", obj.someMethod());

// function myFucntion() {
//     var name = 10;
//     return () => {
//         return this.name;
//     }
// }

// const myObj = new myFucntion();
// console.log(myObj)
// console.log("myObj", new myObj())


// var arrowFunction = () => { // Arrow function does not have new keyword its not construct
//     return this;
// }
// var arrowFun = new arrowFunction();
// console.log("Called arrow function using new keyword: ", arrowFun())

/*Differences between arrow function and normal function*/
// function myCar() {
//     console.log("First Print: ", this)
//     this.fuel = 10;
//     this.reFuel = function () {
//         var fuel = this.fuel;
//         console.log("Second Print: ", fuel);
//         setTimeout(function () {
//             /*We cannot access this.fuel because when we use this keyword its refer to global object inside settimeout funciton nameless funtion called without any execution context*/

//             console.log("Third Print: ", fuel)
//             var fuels = fuel + 100
//             console.log("Fourth Print: ", fuels)
//         }, 1000);
//     }
// }
// const benz = new myCar();
// console.log("Refuel function called: ", benz.reFuel())

// function myCar() {
//     console.log("First print", this)
//     this.fuel = 1;
//     console.log("Second Print", this)
//     this.reFuel = function () {
//         setTimeout(() => {
//             console.log("Third Print", this)
//             this.fuel += 100
//             console.log("Fourth Print", this.fuel)
//         }, 1000);

//     }
// }
// var benz = new myCar();
// benz.reFuel(); // In Arrow function this refer to parent object context

// var thisFunc = function (){
//     console.log("Global object: ", this);
// }
// thisFunc();

// var arrow = () => {
//     console.log("Print arrow function this value: ", this)
// }
// var arrowFun = arrow // Anonymous and arrow function we cant use new keyword and also we cant call directly
// arrowFun()

// Note
// 1. Normal function both constructable and callable
// 2. Arrow function only callable

// var sum = (a,b) => a + b; // Here we don't need return because single line without curly braces does not need return
// console.log("Arrow function print: ", sum(2,2))

// var sumOne = (a,b) => {
//     return a + b // Here we need to return the value because we are using curly braces more then one line we need block
// };
// console.log("Using curly braces in arrow functions: ", sumOne(2,25));

// function normalFunction() {
//     this.name = "PRAKASH";
//     setTimeout(function() {
//         /*We got undefined because its not refer to name its refer to the global object because without execution context*/
//         console.log('Print this.name but got undefined: ',this.name)
//     }, 1000)
// }
// normalFunction()

// function normalFunction() {
//     this.name = "PRAKASH";
//     setTimeout(() => {
//         console.log('Print this.name: ', this.name) // its refer to the global object because its nameless function without execution context
//     }, 1000)
// }
// console.log("Directly regular function called: ", normalFunction());
// console.log("Create new empty object and called: ", new normalFunction())

/*https://www.youtube.com/watch?v=dWZIPIc3szg Link*/

// console.log("Print this value", this)
// var age  = 27;
// function displayAge() {
//     console.log("Print age value: ", age)
//     console.log("Print this inside the function: ", this)
// }
// displayAge(); // Whenever JAVASCRIPT execute the function internally window object added window.displayAge() this refer to the window object

// var person = {
//     age: 38,
//     sex: "male",
//     displayAge: displayAge,
//     nestedPerson: {
//         age: 40,
//         displayAge: displayAge
//     }
// }
// In java-script value of this keyword determined by how a function is called (runtime binding)
// person.displayAge() // This keyword refer to the object that is currently calling function output 38
// person.nestedPerson.displayAge() // This keyword refer to the object that is currently calling function output 40

/*THis is Normal function example*/
// var personOne = {
//     age: 25,
//     greate1: function () {
//         console.log("great 1", this.age);
//         console.log("great 1", this)

//         function greate2() {
//             console.log("great 2", this.age);
//             console.log("great 2", this)
//         }

//         greate2() // This is called without context which mean directly called
//     }
// }

// // personOne.greate1() // THis is calling reference of personOne object

// //  THis is Arrow function example  Basically arrow function does not have this keyword if you arrow function where you defined example inside object or not
// var personOne = {
//     age: 25,
//     greate1: function () {
//         console.log("great 1", this.age);
//         console.log("great 1", this)

//         const greate2 = () => {
//             console.log("great 2", this.age);
//             console.log("great 2", this)
//         }

//         greate2() // This is called without context which mean directly called
//     }
// }

// // personOne.greate1() // THis is calling reference of personOne object

// var age = 444;
// const greate2 = () => {
//     console.log("great 2", this.age);
//     console.log("great 2", this)
// }
// greate2()


// const obj = {
//     name: "Prakash",
//     methodOne: () => {
//         return this;
//     },
//     methodTwo: function () {
//         return this.name;
//     }
// }

// console.log('123', obj.methodOne())
// console.log('1234', obj.methodTwo())