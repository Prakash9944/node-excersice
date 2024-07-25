// https://www.youtube.com/watch?v=YCo16EjQkpA&t=212s
// https://www.youtube.com/watch?v=-P0kKSxalLI

// call apply bind this three function part of JavaScript Function proto_type
// call(thisArg, arg1, /* …, */ argN)
// apply(thisArg, argsArray)
// bind(thisArg, arg1, arg2, /* …, */ argN)

var age = 27;
var displayAge = function() {
    console.log("Print age value: ", age)
    console.log("Print this value: ", this)
}
displayAge()
displayAge.call()/* Call method internally called when Js function executed here call method refer to the window object*/

var employee = {
    name: "PRAKASH",
    salary: 50000,
    callSalarywithBonus: function () {
        // console.log(this) // This time called JS call function that's why we got windowObjct
        this.salary = this.salary + 5000;
        console.log(`${this.name} Salary after bonus is ${this.salary}`)
    }
}
// employee.callSalarywithBonus() /*This refer to the employee object*/
var employee2 = {
    name: "PRAKASH",
    salary: 40000
}
/*This time called but call refer to the employee2 Object*/
employee.callSalarywithBonus.call(employee2)

// # Another example
//  Whenever call function with a given context or this and pass arguments to one by one
function callSalarywithBonus(bonus) {
    // console.log(this) // This time called JS call function that's why we got windowObjct
    this.salary = this.salary + bonus;
    console.log(`${this.name} Salary after bonus is ${this.salary}`)
}
var employee = { name: "PRAKASH", salary: 50000 };
var employee2 = { name: "RAJ", salary: 40000 };

callSalarywithBonus.call(employee, 5000) // Whenever call function with a given context or this and pass arguments to one by one we can use call()
callSalarywithBonus.call(employee2, 5000) // Whenever call function with a given context or this and pass arguments to one by one we can use call()
callSalarywithBonus.apply(employee2, [6000]) // Whenever call function with a given context or this and pass arguments to array we can use apply()

var bindMethod = callSalarywithBonus.bind(employee2) // Bind always given the functions we can bind the context of the arguments
console.log('bindMethod', bindMethod(234)) // Call bind apply always except this keyword references
bindMethod.call(employee2, 5000)

// Another Example https://www.youtube.com/watch?v=YUDLMbC-pLU
// # Each function have context which mean this keyword
// # If you want change that context of the(Mean this keyword) function we need use apply call or bind method

// function myFun(a, b, c, d) {
//     console.log(this, a, b, c, d) // This print the result var obj = { name: "Prakash" }
// }

// var obj = {
//     name: "Prakash"
// }

// myFun = myFun.bind(obj);
// myFun()

 // # Call
// myFun.call(obj, 50, 60); // Here we can pass an argument by comma seprated value call me comma seprate

// // # Apply
// myFun.apply(obj, [50, 60, 90, 88, 99]); // Here we can pass an argument array value apply mean array


// const person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// // This will return "John Doe":
// var logs = person.fullName.call(person1);
// console.log("Print person object", logs)

// const person = {
//   fullName: function() {
//     return this.firstName + " " + this.lastName;
//   }
// }
// const person1 = {
//   firstName:"John",
//   lastName: "Doe"
// }
// const person2 = {
//   firstName:"Mary",
//   lastName: "Doe"
// }

// // This will return "Mary Doe"
// var logs2 = person.fullName.call(person2);
// console.log("Print person object2", logs2)