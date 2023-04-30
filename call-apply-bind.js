// call apply bind this three function part of JavaScript Function proto_type
// call(thisArg, arg1, /* …, */ argN)
// apply(thisArg, argsArray)
// bind(thisArg, arg1, arg2, /* …, */ argN)

var age  = 27;
function displayAge() {
    console.log(age)
    console.log(this)
}

// displayAge()
// displayAge.call() // Call method internally called when Js function executed  here call method refer to the window object


// var employee = {
//     name: "prakash",
//     salary: 50000,
//     calSalrywithBonus: function () {
//         // console.log(this) // This time called JS call function that's why we got windowObjct
//         this.salary = this.salary +5000;
//         console.log(`${this.name} Salry after bonuse is ${this.salary}`)
//     }
// }

// employee.calSalrywithBonus() // This refer to the employee object

// var employee2 = {
//     name: "prakash",
//     salary: 40000
// }

// employee.calSalrywithBonus.call(employee2) // This time called but call refer to the employee2 Object


// # Another example
//  Whenever call function with a given context or this and pass arguments to one by one

// function calSalrywithBonus(bonus) {
//     // console.log(this) // This time called JS call function that's why we got windowObjct
//     this.salary = this.salary + bonus;
//     console.log(`${this.name} Salry after bonuse is ${this.salary}`)
// }

// var employee = {
//     name: "prakash",
//     salary: 50000
// }

// var employee2 = {
//     name: "prakash",
//     salary: 40000
// }

// // calSalrywithBonus.call(employee, 5000) //  Whenever call function with a given context or this and pass arguments to one by one we can use call()
// // calSalrywithBonus.call(employee2, 5000) //  Whenever call function with a given context or this and pass arguments to one by one we can use call()
// // calSalrywithBonus.apply(employee2, [6000]) //  Whenever call function with a given context or this and pass arguments to array we can use apply()

// var bindMeth = calSalrywithBonus.bind(employee2) //  Bind always given the functions we can bind the context of the arguments
// console.log('bindMeth', bindMeth(234)) // Call bind aplay always except this keyword refercens

// bindMeth.call(employee2, 5000)



// Another Example https://www.youtube.com/watch?v=YUDLMbC-pLU
// # Each function have context which mean this keyword
// # If you want change that context of the(Mean this keyword) function we need use apply call or bind method

function myFun(a, b, c, d) {
    console.log(this, a, b, c, d) // This print the result var obj = { name: "Prakash" }
}

var obj = {
    name: "Prakash"
}

// myFun = myFun.bind(obj);
// myFun()

// // # Call
// myFun.call(obj, 50, 60); // Here we can pass an argument by comma seprated value call me comma seprate

// # Apply
myFun.apply(obj, [50, 60, 90, 88, 99]); // Here we can pass an argument array value apply mean array


const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);


const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}

// This will return "Mary Doe"
person.fullName.call(person2);